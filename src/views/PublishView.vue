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
      <el-form-item label="文章类型" prop="type">
        <el-select v-model="form.type" placeholder=" ">
          <el-option label="生活随笔" :value="1" />
          <el-option label="笔记" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="文章上传">
        <el-upload
          action="http://127.0.0.1:3000/acceptMDFile"
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
import { UploadFilled } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import type { Responce } from '@/network'
import toast from '@/utils/toast'
import { getCache } from '@/utils/cache'
import { clearToken } from '@/utils/auth'

const router = useRouter()

const tagColor = [
  { value: 'yellow', label: '黄色' },
  { value: 'blueGreen', label: '蓝绿色' },
  { value: 'green', label: '绿色' },
  { value: 'orange', label: '橙色' },
]

const formRef = ref<FormInstance>()

const form = reactive({
  title: '',
  author: '',
  tagName: '',
  tagColor: 'yellow',
  type: 1,
  filePath: '',
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
    { min: 2, max: 4, message: '标签名要2~4个字哦', trigger: 'blur' },
  ],
}

const file = reactive([])

const handleUploadSuccess = ({ code, data, msg }: Responce) => {
  if (code === 200) {
    form.filePath = data.filePath
  } else {
    toast.warning(msg)
    if (code === 400) {
      // token失效
      clearToken()
      router.push('/login')
    }
  }
}

const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (!form.filePath) {
        toast.success('先上传文章吧~')
        return
      }
      console.log(toRaw(form))
    } else {
      console.log('error submit!', fields)
    }
  })
}

const handleFoolish = () => {
  toast.success('这是一个没有啥用的按钮，但我就是想放在这')
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
