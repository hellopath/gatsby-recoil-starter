import { atom, selectorFamily } from 'recoil'

export const headerInputTextState = atom({
  key: 'headerInputTextState',
  default: 'hellopath'
})

export const currentUserInfoQuery = selectorFamily({
  key: 'currentUserInfo',
  get: (userID) => async ({ get }) => {
    // const currentUser = get(headerInputTextState)
    const url = await `https://api.github.com/users/${userID}`
    const response = await fetch(url)
    const data = await response.json()
    return data
    // try {
    //   const response = await fetch(url)
    //   const data = await response.json()
    //   return data
    // } catch (error) {
    //   throw error
    // }
  }
})

