import { configureStore } from '@reduxjs/toolkit'

import user from './reducers/user'

export default configureStore({
  reducer: {
    user
  }
})