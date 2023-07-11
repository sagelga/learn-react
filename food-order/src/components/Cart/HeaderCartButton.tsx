import React from 'react'
import styles from './HeaderCartButton.module.css'
import CardIcon from './CartIcon'

const HeaderCartButton = () => {
    return (
        <button type="button" className={styles.button}>
            <span className={styles.icon}>
                <CardIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>1</span>
        </button>
    )
}

export default HeaderCartButton
