import http from './httpService'

const AUTH_URL = ''

type LoginResponse = any

export async function login(username: string, password: string) {
  try {
    const res = await http.post<LoginResponse>(AUTH_URL + '/login', {
      body: JSON.stringify({ username, password }),
    })
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

type RegisterResponse = any

export async function register(
  username: string,
  email: string,
  password: string
) {
  try {
    const res = await http.post<RegisterResponse>(AUTH_URL + '/register', {
      body: JSON.stringify({ username, email, password }),
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
