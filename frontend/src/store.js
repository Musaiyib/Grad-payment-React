import { configureStore } from '@reduxjs/toolkit'
import paymentSlice from './Slices/paymentSlice'

export default configureStore({
    reducer: {
        paymentSlice: paymentSlice
    }
})