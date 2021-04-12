import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    const response = await fetch("/auth/login", {
      method: 'POST',
      body: new URLSearchParams({
        email,
        password
      })
    })

    const data = await response.json()

    switch (response.status) {
      case 200:
        return data

      default:
        return rejectWithValue(data)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token')
  },
  reducers: {
    logout: (state, action) => {
      state.token = undefined
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token
    },
    [login.rejected]: (state, action) => {
      console.log(action.payload)
    }
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer