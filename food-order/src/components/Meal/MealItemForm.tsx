import React from 'react'
import styles from './MealItemForm.module.css'
import Input from '../UI/Input'

interface MealItemFormProps {
    id: string
}

const itemSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    // const inputValue = document.getElementById('amount-input').value
    // props.addCartHandler(inputValue)
}

const MealItemForm = (props: MealItemFormProps) => {
    return (
        <form className={styles.form} onSubmit={itemSubmitHandler}>
            <Input
                label="Amount"
                input={{
                    id: 'amount__' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm
