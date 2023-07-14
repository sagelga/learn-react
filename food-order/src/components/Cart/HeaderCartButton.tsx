import React from 'react'
import styles from './HeaderCartButton.module.css'
import CardIcon from './CartIcon'

interface IHeaderCartButton {
    cartClickHandler: undefined
}

const HeaderCartButton: React.FC<IHeaderCartButton> = props => {
    const showCartHandler = event => {
        props.showCartHandler()
    }

    return (
        <button
            type="button"
            className={styles.button}
            onClick={showCartHandler}
        >
            <span className={styles.icon}>
                <CardIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>1</span>
        </button>
    )
}

export default HeaderCartButton
