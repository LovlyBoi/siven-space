<template>
  <div class="publish-view white-card-shadow">
    <el-form :model="form" label-width="120px">
      <el-form-item label="标题">
        <el-input style="width: 430px" v-model="form.title" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input maxlength="20" style="width: 186px" v-model="form.author" />
      </el-form-item>
      <el-form-item label="标签名">
        <el-input maxlength="20" style="width: 186px" v-model="form.tag.name" />
      </el-form-item>
      <el-form-item label="标签颜色">
        <el-select v-model="form.tag.color" placeholder=" ">
          <el-option
            v-for="item in tagColor"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="文章类型">
        <el-select v-model="form.type" placeholder=" ">
          <el-option label="生活随笔" :value="1" />
          <el-option label="笔记" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="文章上传">
        <el-upload
          action="http://127.0.0.1:3000/acceptMDFile"
          class="upload-md"
          drag
          :limit="1"
          accept=".md"
          v-model="file"
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
        <el-button type="primary">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'

const tagColor = [
  { value: 'yellow', label: '黄色' },
  { value: 'blueGreen', label: '蓝绿色' },
  { value: 'green', label: '绿色' },
  { value: 'orange', label: '橙色' },
]

const form = reactive({
  title: '',
  author: '',
  tag: {
    name: '',
    color: '',
  },
  type: 1,
})

const file = reactive([])
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
