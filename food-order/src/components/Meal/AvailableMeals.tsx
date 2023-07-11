import React from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem'
import MealItemForm from './MealItemForm'
import styles from './AvailableMeals.module.css'

interface MealType {
    id: string
    name: string
    description: string
    price: number
}

interface AvailableMealsProps {
    mealList: MealType[]
}

const AvailableMeals = (props: AvailableMealsProps) => {
    return (
        <Card>
            {props.mealList.map((element: MealType) => {
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
