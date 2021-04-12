import { configureStore } from '@reduxjs/toolkit'

import user from './reducers/user'

const store =  configureStore({
  reducer: {
    user
  }
})

let previousToken = store.getState().user.token
store.subscribe(() => {
  const token = store.getState().user.token

  if (previousToken !== token) {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }

    previousToken = token
  }
})

export default store