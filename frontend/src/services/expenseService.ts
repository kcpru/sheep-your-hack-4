import http from './httpService'

const API_URL = 'http://localhost:5280/expenses/'

export interface ICreateExpenseInput {
  sum: number
  date: string
}

export async function createExpense(data: ICreateExpenseInput) {
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

export async function getAllExpenses() {
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
