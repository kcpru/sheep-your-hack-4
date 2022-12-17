import { getToken } from './authService'

export interface IRequestOptions extends Omit<RequestInit, 'method'> {
  authorized?: boolean
}

export async function get<T>(
  url: string,
  options?: IRequestOptions
): Promise<Awaited<T> | null> {
  let result: Awaited<T> | null
  try {
    const headers = new Headers()
    if (options?.authorized) {
      headers.append('Authorization', getToken())
    }
    const res = await fetch(url, {
      method: 'GET',
      headers: headers,
      ...options,
    })

    if (res.status === 200) {
      result = await res.json()
    } else {
      console.error('GET' + url + 'Failed.')
      result = null
    }
  } catch (e) {
    if (e instanceof Error) console.error(e.message)
    result = null
  }

  return result
}

export async function post<T>(
  url: string,
  options?: IRequestOptions
): Promise<Awaited<T> | null> {
  let result: Awaited<T> | null = null
  try {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    if (options?.authorized) {
      headers.append('Authorization', getToken())
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      ...options,
    })

    if (res.status === 200 || res.status === 201) {
      result = await res.json()
    } else {
      console.error('POST' + url + 'Failed.')
      result = null
    }
  } catch (e) {
    if (e instanceof Error) console.error(e.message)
    result = null
  }

  return result
}

export async function put<T>(
  url: string,
  options?: IRequestOptions
): Promise<Awaited<T> | null> {
  let result: Awaited<T> | null = null
  try {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    if (options?.authorized) {
      headers.append('Authorization', getToken())
    }
    const res = await fetch(url, {
      method: 'PUT',
      headers: headers,
      ...options,
    })

    if (res.status === 200 || res.status === 201) {
      result = await res.json()
    } else {
      console.error('POST' + url + 'Failed.')
      result = null
    }
  } catch (e) {
    if (e instanceof Error) console.error(e.message)
    result = null
  }

  return result
}

export async function del<T>(
  url: string,
  options?: IRequestOptions
): Promise<Awaited<T> | null> {
  let result: Awaited<T> | null = null
  try {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    if (options?.authorized) {
      headers.append('Authorization', 'Bearer ' + getToken())
    }
    const res = await fetch(url, {
      method: 'DELETE',
      headers: headers,
      ...options,
    })

    if (res.status === 200 || res.status === 201) {
      result = await res.json()
    } else {
      console.error('POST' + url + 'Failed.')
      result = null
    }
  } catch (e) {
    if (e instanceof Error) console.error(e.message)
    result = null
  }

  return result
}

export default {
  get,
  post,
  put,
  del,
}
