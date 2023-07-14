import React from 'react'
import styles from './Card.module.css'

interface ICard {
    className: string
    children: React.ReactNode
}

const Card: React.FC<ICard> = props => {
    const cardClassName = `${styles.card} ${props.className}`

    return <div className={cardClassName}>{props.children}</div>
}

export default Card
