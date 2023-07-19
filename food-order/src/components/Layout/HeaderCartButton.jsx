import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { CheckoutContext } from '../../context/CheckoutContext';

const HeaderCartButton = () => {
    // const checkout = React.useContext(CheckoutContext)

    const cartButtonHandler = (event) => {
        console.log('cart button pressed')
    }


    return (
        <CheckoutContext.Provider >
            <button className={styles.button} onClick={cartButtonHandler}>
                <CartIcon className={styles.icon} />
                Your Cart
                <span className={styles.badge}>1</span>
            </button>
        </CheckoutContext.Provider>
    );
};

export default HeaderCartButton
