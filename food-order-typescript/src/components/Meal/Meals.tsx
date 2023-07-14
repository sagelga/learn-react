import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
    return (
        <div>
            <MealsSummary></MealsSummary>
            <AvailableMeals addToCartHandler={addToCartHandler} />
        </div>
    )
}

export default Meals
