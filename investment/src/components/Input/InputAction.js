import React from 'react';

const InputAction = (props) => {
    return (
        <p className="actions">
            <button
                id="form"
                type="reset"
                className="buttonAlt"
                onClick={props.resetHandler}
            >
                Reset
            </button>
            <button
                id="form"
                type="submit"
                className="button"
                onClick={props.submitHandler}
            >
                Calculate
            </button>
        </p>
    );
};

export default InputAction;
