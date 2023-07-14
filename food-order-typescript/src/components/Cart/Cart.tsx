import React from 'react'
import styles from './Cart.module.css'
import { ICart } from '../../interfaces'
import Modal from '../UI/Modal'

const Cart = (props: ICart) => {
    const cartItems = (
        <ul className={styles['cart-items']}>
            {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(
                item => (
                    <li key={item.id}></li>
                )
            )}
        </ul>
    )

    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.33</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles['button']}>Order</button>
            </div>
            <div></div>
        </Modal>
    )
}

export default Cart
