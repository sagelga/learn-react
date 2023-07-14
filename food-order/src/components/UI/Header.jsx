import React from 'react';
import HeaderCartButton from '../Cart/HeaderCartButton';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <h2>Food Order</h2>
            <HeaderCartButton />
        </div>
    );
};

export default Header;
