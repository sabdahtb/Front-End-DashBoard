import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
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
  name: 'counter',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(login.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export default authSlice.reducer
