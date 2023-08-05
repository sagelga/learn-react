import React, {useContext} from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-context'

const MealItem = (props) => {
    const cartContext = useContext(CartContext)

    const onAddToCartHandler = (amount) => {
        console.log(props)
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
        console.log(cartContext)
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <p className={classes.description}>{props.item.description}</p>
                <p className={classes.price}>{`$${props.item.price.toFixed(
                    2
                )}`}</p>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={onAddToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem
