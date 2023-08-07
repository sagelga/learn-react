import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter++
        },
        increase: (state, action) => {
            state.counter += action.payload
        },
        decrement: (state) => {
            state.counter--
        },
    },
})

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        },
    },
})

// const storeReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case 'INCREASE':
//             return {
//                 ...state,
//                 counter: state.counter + action.amount
//             }
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         default:
//             return state
//     }
// }

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store
