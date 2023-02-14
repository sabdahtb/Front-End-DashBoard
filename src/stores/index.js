import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/auth'
import counterSlice from './slices/counter'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
})
