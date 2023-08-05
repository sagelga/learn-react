import React, { createContext, useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meal/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

const CheckoutContext = createContext()

function App() {
    const [visibleCart, setVisibleCart] = useState(false)
    const showCartHandler = () => {
        setVisibleCart(true)
    }

    const hideCartHandler = () => {
        setVisibleCart(false)
    }

    return (
        <CartProvider>
            {visibleCart && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    )
}

export default App
