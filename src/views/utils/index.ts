import type { UserInfo } from '@/api/login'

export function resolveResponceData(data: any) {
  for (const card of data) {
    if (typeof card.publishDate === 'string') {
      card.publishDate = new Date(card.publishDate)
    }
    if (typeof card.updateDate === 'string') {
      card.updateDate = new Date(card.updateDate)
    }
  }
  return data
}

export function verifyUserInfo({
  username,
  password,
}: UserInfo): VerifiedResult {
  const result: VerifiedResult = {
    ok: true,
    username: '',
    password: '',
  }
  const usernameReg = /^[a-z0-9]{4,10}$/i
  const passwordReg = /^[a-z0-9]{6,16}$/i
  if (username === '') {
    result.ok = false
    result.username = '需要输入用户名哦'
  } else if (/\s/.test(username)) {
    result.ok = false
    result.username = '用户名中不可以有空格哦'
  } else if (!/^[a-z]/i.test(username)) {
    result.ok = false
    result.username = '用户名需要以字母开头哦'
  } else if (!usernameReg.test(username)) {
    result.ok = false
    result.username = '用户名需要4~10位字母或数字哦'
  }

  if (password === '') {
    result.ok = false
    result.password = '需要输入密码呢'
  } else if (/\s/.test(password)) {
    result.ok = false
    result.password = '密码中不可以有空格哦'
  } else if (!passwordReg.test(password)) {
    result.ok = false
    result.password = '密码需要6~16位字母或数字哦'
  }
  return result
}

export interface VerifiedResult {
  ok: boolean
  username: string
  password: string
}
