import React, {useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext)

    const cartItemCount = cartContext.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
                <span>
                <CartIcon className={classes.icon}/>
                </span>
            <span>
                Your Cart
                </span>
            <span className={classes.badge}>{cartItemCount}</span>
        </button>
    );
};

export default HeaderCartButton
