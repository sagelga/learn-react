import React from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { ShoppingCartItem } from '../../interfaces'

const MealItem = (props: ShoppingCartItem) => {
    return (
        <div className={styles.meal}>
            <span>
                <h3>{props.name}</h3>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>${props.price.toFixed(2)}</p>
            </span>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </div>
    )
}

export default MealItem
