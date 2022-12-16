import http from './httpService'

const AUTH_URL = ''
export interface ILoginResponse {
  code:         string;
  message:      string;
  token:        string;
  refreshToken: string;
  id:           string;
  nickname:     string;
  email:        string;
}


export interface IRegisterResponse {
  code:    string;
  message: string;
  Id:      string;
}

type TAccountType = "kid" | "adult"

type TLoginInput = {
  email: string;
  password: string;
}

type TRegisterInput = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
    passwordConfirm: string,
    type: TAccountType
}

export async function login(data: TLoginInput) {
  try {
    const res = await http.post<ILoginResponse>(AUTH_URL + '/login', {
      body: JSON.stringify(data),
    })
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

export async function register(
data: TRegisterInput
) {
  try {
    const res = await http.post<IRegisterResponse>(AUTH_URL + '/register', {
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
