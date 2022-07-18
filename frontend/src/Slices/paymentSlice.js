import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";



export const addPayment = createAsyncThunk('payment/addPayment', async (payload) => {

    try {
        await axios.post('http://localhost:4000/api/payments', { ...payload })
            .then(({ data }) => data)
            .catch((error) => error);
    } catch (err) {
        // console.log('error from try: ' + err);
    }
})

export const getPayments = createAsyncThunk('payment/getPayment', async () => {
    try {
        const res = await axios.get('http://localhost:4000/api/payments',)
            .then(res => res.data.payments
            ).catch(
                err =>
                    console.log('error from axios ' + err)
            )
        return res
    } catch (err) {
        console.log('error from catch ' + err);
    }
})

//editPayment
export const editPayment = createAsyncThunk('payment/editPayment', async (id, { data }) => {
    try {
        const res = await axios.get(`http://localhost:4000/api/payments/${id}`, { data })
            .then(res => res
            ).catch(
                err =>
                    console.log('error from axios ' + err)
            )
        return res
    } catch (err) {
        console.log('error from catch ' + err);
    }
})

//deletePayment
export const deletePayment = createAsyncThunk('payment/deletePayment', async (id) => {
    try {
        const res = await axios.get(`http://localhost:4000/api/payments/${id}`)
            .then(res => res
            ).catch(
                err =>
                    console.log('error from axios ' + err)
            )
        return res
    } catch (err) {
        console.log('error from catch ' + err);
    }
})


const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        pending: false,
        success: null,
        error: null,
        payment: [],
        paidList: []
    },
    reducers: {
        // addPayment: async (state, { payload }) => {
        //     state.pending = true
        //     try {
        //         await axios.post('http://localhost:4000/api/payments',
        //             { ...payload })
        //             .then(state.payment.push(...payload),
        //                 state.pending = false
        //             )
        //             .catch(err =>
        //                 state.error = err,
        //                 state.pending = false
        //             )
        //     } catch (err) {
        //         state.error = err
        //         state.pending = false
        //     }
        // },
        // editPayment: (state, { payload }) => {

        // },
        // deletePayment: (state, { payload }) => {

        // },
        // paidList: (state, { payload }) => { }
    },
    extraReducers: {
        // addPayment
        [addPayment.pending]: (state) => {
            state.pending = true
        },
        [addPayment.fulfilled]: (state, { payload }) => {
            state.pending = false
            console.log(payload);
            state.payment = payload
        },
        [addPayment.rejected]: (state, { payload }) => {
            state.pending = false
            console.log(payload);
            state.error = payload
        },

        //getPayments
        // [getPayments.pending]: (state) => {
        //     state.pending = true
        // },
        // [getPayments.fulfilled]: (state, { payload }) => {
        //     state.pending = false
        //     state.payment = payload
        //     console.log(payload);
        // },
        // [getPayments.rejected]: (state, { payload }) => {
        //     state.pending = false
        //     state.error = payload

        // },

    }
})

export default paymentSlice.reducer