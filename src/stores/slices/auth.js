import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setCookie } from '~/utils/cookie'

const initialState = {
  userName: '',
  status: '',
}

export const login = createAsyncThunk('api/auth/login', async (user, { rejectWithValue }) => {
  try {
    return await axios.post(`${process.env.API_AUTH_URL}/login`, user).then((res) => {
      return res.data
    })
  } catch (err) {
    return rejectWithValue()
  }
})

// Redux Toolkit slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.userName = initialState.userName
      state.status = initialState.status
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        const data = action.payload.data
        setCookie('token', data.token)
        state.userName = data.name
        state.status = 'idle'
      })
      .addCase(login.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export default authSlice.reducer
export const { resetUser } = authSlice.actions
