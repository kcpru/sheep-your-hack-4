import http from './httpService'

const API_URL = 'http://localhost:5280/incomes/'

export interface ICreateIncomeInput {
  sum: number
  date: string
}

export function composeDate() {
  const date = new Date()
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getUTCDate()}T${date.getHours()}:${date.getMinutes()}:00`
}

export async function createIncome(data: ICreateIncomeInput) {
  let result
  try {
    const res = await http.post(API_URL + 'create', {
      body: JSON.stringify(data),
      authorized: true,
    })

    if (res === null) console.error('Failed to create expense!')

    result = res
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
    result = null
  }
  return result
}

export async function getAllIncomes() {
  let result
  try {
    const res = await http.get(API_URL + 'all', {
      authorized: true,
    })

    if (res === null) console.error('Failed to create expense!')

    result = res
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
    result = null
  }
  return result
}
