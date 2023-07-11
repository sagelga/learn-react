import React from 'react'
import styles from './App.module.css'
import Header from './components/UI/Header'
import MealsSummary from './components/Meal/MealsSummary'
import { DUMMY_MEALS } from './data/dummy-meals'
import MealItemForm from './components/Meal/MealItemForm'
import AvailableMeals from './components/Meal/AvailableMeals'

function App() {
    return (
        <>
            <Header></Header>
            <MealsSummary></MealsSummary>
            <AvailableMeals mealList={DUMMY_MEALS} />
        </>
    )
}

export default App
