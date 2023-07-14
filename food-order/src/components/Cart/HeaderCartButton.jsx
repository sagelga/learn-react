import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = () => {
    return (
        <button className={styles.button}>
            <CartIcon />
        </button>
    );
};
