import React, { useState } from 'react';
import InputBar from './InputBar';
import InputAction from './InputAction';

const defaultFormValue = {
    currentSavings: null,
    yearlyContribution: null,
    expectedReturn: null,
    duration: null,
};

const InputBox = (props) => {
    const [formData, setFormData] = useState(defaultFormValue);

    /* This function retrieve the values from the form and call parent's submitHandler() */
    const submitHandler = (event) => {
        event.preventDefault();

        const updatedData = {
            currentSavings:
                event.target.querySelector('#current-savings').value,
            yearlyContribution: event.target.querySelector(
                '#yearly-contribution'
            ).value,
            expectedReturn:
                event.target.querySelector('#expected-return').value,
            duration: event.target.querySelector('#duration').value,
        };

        setFormData(updatedData);

        // Call parent function
        props.submitHandler(updatedData);

        // console.log(formData);
        console.log('submit');
    };

    /* This function resets the form value */
    const resetHandler = () => {
        setFormData(defaultFormValue);

        console.log('reset');
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <InputBar
                    id="current-savings"
                    label="Current Savings ($)"
                    type="number"
                    value={formData.currentSavings}
                />
                <InputBar
                    id="yearly-contribution"
                    label="Yearly Savings ($)"
                    type="number"
                    value={formData.yearlyContribution}
                />
            </div>
            <div className="input-group">
                <InputBar
                    id="expected-return"
                    label="Expected Interest (%, per year)"
                    type="number"
                    value={formData.expectedReturn}
                />
                <InputBar
                    id="duration"
                    label="Investment Duration (years)"
                    type="number"
                    value={formData.duration}
                />
            </div>
            <InputAction
                resetHandler={resetHandler}
            />
        </form>
    );
};

export default InputBox;
