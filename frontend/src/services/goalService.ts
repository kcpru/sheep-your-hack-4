import http from './httpService'

const API_URL = 'http://localhost:5280/goals/'

export interface ICreateGoalInput {
  name: string
  cost: number
  currentAmount: number
  deadline: ''
  savingPerWeek: number
}

export async function createGoal(data: ICreateGoalInput) {
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

export async function getAllGoals() {
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

export async function getGoalById(id: string) {
  let result
  try {
    const res = await http.get(API_URL + id, {
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

export async function modifyGoal(id: string) {
  let result
  try {
    const res = await http.put(API_URL + id, {
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

export async function deleteGoal(id: string) {
  let result
  try {
    const res = await http.del(API_URL + id, {
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
