<template>
  <div class="publish-view white-card-shadow">
    <el-form :model="form" label-width="120px" :rules="formRules" ref="formRef">
      <el-form-item label="标题" prop="title">
        <el-input style="width: 430px" v-model="form.title" />
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input maxlength="20" style="width: 186px" v-model="form.author" />
      </el-form-item>
      <el-form-item label="标签名" prop="tagName">
        <el-input maxlength="20" style="width: 186px" v-model="form.tagName" />
      </el-form-item>
      <el-form-item label="标签颜色">
        <el-select v-model="form.tagColor" placeholder=" ">
          <el-option
            v-for="item in tagColor"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="封面图片">
        <el-upload
          :action="`${BASE_URL}/acceptPic`"
          accept="image/*"
          :headers="uploadHeaders()"
          list-type="picture-card"
          :on-success="handleImgSuccess"
          :on-remove="handleImgRemove"
          :file-list="imgList"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章类型" prop="type">
        <el-select v-model="form.type" placeholder=" ">
          <el-option label="生活随笔" :value="1" />
          <el-option label="笔记" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="文章上传">
        <el-upload
          :action="`${BASE_URL}/acceptMDFile`"
          :headers="uploadHeaders()"
          class="upload-md"
          drag
          :limit="1"
          accept=".md"
          v-model="file"
          :on-success="handleUploadSuccess"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            请将文件拖放至此或 <em>点击上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              仅支持上传单个文件，新的文件会覆盖旧文件
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit(formRef)"
          >提交</el-button
        >
        <el-button @click="handleFoolish">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { UploadFilled, Plus } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
import type { Responce } from '@/network'
import { publishNewCard } from '@/api/blogs'
import toast from '@/utils/toast'
import { getCache } from '@/utils/cache'
import { clearToken } from '@/utils/auth'
import { BASE_URL } from '@/network/config'

const router = useRouter()

const tagColor = [
  { value: 'yellow', label: '黄色' },
  { value: 'blueGreen', label: '蓝绿色' },
  { value: 'green', label: '绿色' },
  { value: 'orange', label: '橙色' },
]

const formRef = ref<FormInstance>()

interface publishForm {
  title: string
  author: string
  tagName: string
  tagColor: string
  type: 1 | 2
  filePath: string
  pictures: string[]
  publishDate: Date
  updateDate: Date
}

const form = reactive<publishForm>({
  title: '',
  author: '',
  tagName: '',
  tagColor: 'yellow',
  type: 1,
  filePath: '',
  pictures: [],
  publishDate: new Date(),
  updateDate: new Date(),
})

const uploadHeaders = () => ({
  Authorization: getCache('token') ?? '',
})

const formRules = {
  title: [
    { required: true, message: '标题还是需要的哦', trigger: 'blur' },
    { min: 2, max: 25, message: '标题限制在2~25个字符呐', trigger: 'blur' },
  ],
  author: [
    { required: true, message: '作者名也是必须的哦', trigger: 'blur' },
    { min: 2, max: 10, message: '作者名限制在2~10个字符呐', trigger: 'blur' },
  ],
  tagName: [
    { required: true, message: '填上一个标签名吧', trigger: 'blur' },
    { min: 2, max: 6, message: '标签名要2~6个字哦', trigger: 'blur' },
  ],
}

const file = reactive([])

// 图片上传
const imgList = ref<UploadUserFile[]>([])

const handleImgRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles, '移除图片事件')
}

const handleImgSuccess: UploadProps['onSuccess'] = (
  { code, data, msg },
  uploadFile,
  uploadFiles
) => {
  if (code === 200) {
    const url =
      process.env.NODE_ENV === 'development'
        ? `http://127.0.0.1:10086/${data.url}`
        : `${BASE_URL}/${data.url}`
    form.pictures.push(url)
    toast.success('上传成功！')
  } else {
    toast.warning(msg)
    if (code === 400) {
      // token失效
      clearToken()
      router.push('/login')
    }
  }
  console.log(uploadFile, uploadFiles, '图片上传成功')
}

// markdown文件上传
const handleUploadSuccess = ({ code, data, msg }: Responce) => {
  if (code === 200) {
    form.filePath = data.filePath
    toast.success('上传成功！')
  } else {
    toast.warning(msg)
    if (code === 400) {
      // token失效
      clearToken()
      router.push('/login')
    }
  }
}

// 表单提交
const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (!form.filePath) {
        toast.info('先上传文章吧~')
        return
      }
      console.log(toRaw(form))
      const { code, msg } = (await publishNewCard(toRaw(form))) as any
      if (code === 200) {
        toast.success(msg)
        router.push('/all')
      } else if (code === 400) {
        toast.warning(msg)
        // token失效
        clearToken()
        router.push('/login')
      } else {
        toast.warning(msg)
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

const handleFoolish = () => {
  // toast.info('这是一个没有啥用的按钮，但我就是想放在这')
  router.replace('/all')
}
</script>

<style lang="less" scoped>
.publish-view {
  background-color: #fff;
  width: 100%;
  padding: 20px;
  margin-top: 30px;
  border-radius: 8px;
}
</style>
