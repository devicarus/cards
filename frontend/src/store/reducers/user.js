import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'user/login',
  async ({email, password}) => {
    const response = await fetch("/auth/login", {
      method: 'POST',
      body: new URLSearchParams({
        email,
        password
      })
    })
    return await response.json()
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: undefined,
    email: undefined
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action ) => {
      state.token = action.payload.token
      state.email = action.payload.user.email
    }
  }
})

export default userSlice.reducer