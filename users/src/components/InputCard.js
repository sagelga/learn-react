import React, { useState } from 'react';
import styles from './InputCard.module.css';
import { v4 as uuidv4 } from 'uuid'; // for auto-generating a key

const InputCard = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // Validate username
        if (username.trim() === '') {
            alert('Username is required');
            return;
        }

        // Validate age
        if (age.trim() === '') {
            alert('Age is required');
            return;
        } else if (isNaN(Number(age)) || Number(age) <= 0) {
            alert('Invalid age');
            return;
        }

        // Form is valid, continue with submission
        // ...
        props.submitHandler({
            key: uuidv4(),
            username: username,
            age: age,
        });

        // Reset form fields
        setUsername('');
        setAge('');
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Input Card</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="username" className={styles.label}>
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="age" className={styles.label}>
                        Age (Years):
                    </label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Add User
                </button>
            </form>
        </div>
    );
};

export default InputCard;
