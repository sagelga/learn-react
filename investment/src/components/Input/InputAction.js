import React from 'react';
import styles from "./InputAction.module.css";

const InputAction = (props) => {
    return (
        <p className={styles.action}>
            <button
                id="form"
                type="reset"
                className={styles.buttonAlt}
                onClick={props.resetHandler}
            >
                Reset
            </button>
            <button
                id="form"
                type="submit"
                className={styles.button}
                onClick={props.submitHandler}
            >
                Calculate
            </button>
        </p>
    );
};

export default InputAction;
