import React from 'react'
import { DUMMY_MEALS } from '../../data/dummy-meals'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <ul>
                {DUMMY_MEALS.map((meal) => (
                    <MealItem item={meal} />
                ))}
            </ul>
        </section>
    )
}

export default AvailableMeals
