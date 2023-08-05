import { createContext } from 'react'

export const CheckoutContext = createContext({
    visibleModal: false,
    cartItem: [],
})
