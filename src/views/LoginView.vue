<template>
  <div class="login-view">
    <div class="login-pannel white-card-shadow">
      <h3 class="login-title">Login</h3>
      <div class="username-row">
        <input
          id="username"
          type="text"
          maxlength="16"
          placeholder=" "
          v-model.trim="username"
        />
        <label for="username">User Name</label>
      </div>

      <div class="password-row">
        <input
          id="password"
          type="password"
          maxlength="20"
          placeholder=" "
          v-model.trim="password"
        />
        <label for="password">Password</label>
      </div>
      <button id="submit" @click="handleLogin">Sign in</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { verifyUserInfo } from './utils'
import { login } from '@/api'
import { setCache } from '@/utils/cache'
import toast from '@/utils/toast'

const router = useRouter()

const username = ref('')
const password = ref('')

const handleLogin = async () => {
  const userInfo = {
    username: username.value,
    password: password.value,
  }
  const verified = verifyUserInfo(userInfo)
  console.log(verified)
  if (verified.ok) {
    const responce = (await login(userInfo)) as any
    if (responce.code !== 200) {
      toast.warning(responce.msg)
      return
    }
    console.log(responce)
    // 存储token
    setCache('token', responce.data.token)
    router.replace('/publish')
    console.log(responce)
  } else {
    if (verified.username !== '') {
      shaking('username')
      toast.warning(verified.username)
    }
    if (verified.password !== '') {
      shaking('password')
      toast.warning(verified.password)
    }
  }
}

const shaking = (input: string) => {
  console.log('shaking ' + input)
}
</script>

<style lang="less" scoped>
.login-view {
  .login-pannel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    width: 680px;
    margin: 20px auto;
    padding-top: 10px;
    padding-bottom: 30px;
    border-radius: 10px;
    background-color: #fff;

    .login-title {
      font-size: 22px;
      text-align: center;
      margin-bottom: 10px;
    }

    .username-row,
    .password-row {
      position: relative;
    }

    #username,
    #password {
      position: relative;
      width: 400px;
      height: 40px;
      margin: 0 auto;
      padding: 0 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
      transition: 0.1s;

      &:focus {
        border: 1px solid #666;
      }

      &:focus + label {
        left: -90px;
        color: #666;
      }

      &:not(:focus):not(:placeholder-shown) + label {
        color: rgba(0, 0, 0, 0);
      }
    }

    label {
      position: absolute;
      left: 10px;
      color: #ccc;
      top: 9px;
      transition: 0.2s ease-in;
      user-select: none;
    }

    #submit {
      width: 400px;
      height: 38px;
      border-radius: 19px;
      background-color: #464edc;
      color: #fff;
      border: none;

      &:hover {
        background-color: #4138c3;
      }

      &:active {
        background-color: #291fb1;
      }
    }
  }
}
</style>
