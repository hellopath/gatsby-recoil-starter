import { atom, selector } from 'recoil'

export const headerInputTextState = atom({
  key: 'headerInputTextState',
  default: 'hellopath'
})

export const currentUserInfoQuery = selector({
  key: 'currentUserInfo',
  get: async ({ get }) => {
    const currentUser = get(headerInputTextState)
    const url = `https://api.github.com/users/${currentUser}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }
})

