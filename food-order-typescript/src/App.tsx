import React, { useState, Fragment } from 'react'

import Header from './components/UI/Header'
import MealsSummary from './components/Meal/MealsSummary'
import AvailableMeals from './components/Meal/AvailableMeals'
import Meals from './components/Meal/Meals'
import Cart from './components/Cart/Cart'
import { ShoppingCartItem } from './interfaces'

function App() {
    const [storedCartItem, setStoredCartItem] = useState<ShoppingCartItem[]>([])
    const [modalVisible, setModalVisible] = useState(false)

    const addToCartHandler = (item: ShoppingCartItem) => {
        setStoredCartItem([...storedCartItem, item])
    }

    // Handle when user click 'your cart' button in the Header section
    const showCartHandler = () => {
        setModalVisible(true)
    }

    // Handle when user click 'close' or click outside of the modal
    const hideCartHandler = () => {
        setModalVisible(false)
    }

    return (
        <>
            {modalVisible && (
                <Cart
                    shoppingCart={storedCartItem}
                    hideCartHandler={hideCartHandler}
                />
            )}
            <Header showCartHandler={showCartHandler}></Header>
            <main>
                <Meals />
            </main>
        </>
    )
}

export default App
