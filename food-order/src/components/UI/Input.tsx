import React from 'react'
import styles from './Input.module.css'

interface InputProps {
    label: string
    input: {
        id: string
        type: string
        min: string
        max: string
        step: string
        defaultValue: string
    }
}

const Input = (props: InputProps) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>Amount</label>
            <input className={styles.form} {...props.input} />
        </div>
    )
}

export default Input
