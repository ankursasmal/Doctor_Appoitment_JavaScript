"use client"

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    // user obj come unser userslice
    user: userSlice,
  },
})