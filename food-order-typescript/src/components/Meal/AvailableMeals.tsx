import React from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem'
import styles from './AvailableMeals.module.css'
import { ShoppingCartItem } from '../../interfaces'
import { DUMMY_MEALS } from '../../data/dummy-meals'

interface IAvailableMeals {
    addToCartHandler: (item: ShoppingCartItem) => void
}

const AvailableMeals: React.FC<IAvailableMeals> = props => {
    const addToCartHandler = (data: ShoppingCartItem) => {
        props.addToCartHandler(data)
    }

    return (
        <Card className={styles.meal}>
            {DUMMY_MEALS.map((element: ShoppingCartItem) => {
                return (
                    <div key={element.id}>
                        <MealItem
                            id={element.id}
                            key={element.id}
                            name={element.name}
                            description={element.description}
                            price={element.price}
                        />
                    </div>
                )
            })}
        </Card>
    )
}

export default AvailableMeals
