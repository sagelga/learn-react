import React from 'react'
import styles from './Header.module.css'

// interface HeaderProps {
//     header: string;
// }

import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from '../Cart/HeaderCartButton'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </div>
            <div>
                <img
                    src={mealsImage}
                    alt="Table full of food"
                    className={styles['main-image']}
                />
            </div>
        </>
    )
}

export default Header
