import http from './httpService'

const AUTH_URL = 'http://localhost:5280/user/'
export interface ILoginResponse {
  code: string
  message: string
  token: string
  refreshToken: string
  id: string
  nickname: string
  email: string
}

export interface IRegisterResponse {
  code: string
  message: string
  Id: string
}

type TAccountType = 'child' | 'adult'

export type TLoginInput = {
  email: string
  password: string
}

export type TRegisterInput = {
  username: string
  firstname: string
  lastname: string
  email: string
  password: string
  passwordConfirm: string
  // Type: TAccountType
}

function saveToken(token: string) {
  localStorage.setItem('token', token)
}

export async function login(data: TLoginInput) {
  let result: ILoginResponse | null
  try {
    const res = await http.post<ILoginResponse>(AUTH_URL + 'login', {
      body: JSON.stringify(data),
    })

    if (res === null) console.error('Failed to login!')
    saveToken(res?.token as string)

    result = res
    console.log(res)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
    result = null
  }

  return result
}

export async function register(data: TRegisterInput) {
  try {
    await http.post<IRegisterResponse>(AUTH_URL + 'register', {
      body: JSON.stringify(data),
    })
  } catch (e) {
    if (e instanceof Error) console.error(e.message)
  }
}

export function getToken(): string {
  const token = localStorage.getItem('token')
  if (token === null) console.error('Token not found!')
  return token as string
}

export default {
  login,
  register,
  getToken,
}
