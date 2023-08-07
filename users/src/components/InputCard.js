import React, { useState } from "react";
import styles from "./InputCard.module.css";
import Button from "./Button";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid"; // for auto-generating a key

const InputCard = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    // Validate username
    if (username.trim() === "") {
      // alert('Username is required');
      props.inputInvalidHandler("Username is required");
      return;
    }

    // Validate age
    if (age.trim() === "") {
      // alert('Age is required');
      props.inputInvalidHandler("Age is required");
      return;
    } else if (isNaN(Number(age)) || Number(age) <= 0) {
      // alert('Invalid age');
      props.inputInvalidHandler("Invalid age");
      return;
    }

    // Form is valid, continue with submission
    // ...
    props.addUserHandler({
      key: uuidv4(),
      username: username,
      age: age,
    });

    // Reset form fields
    setUsername("");
    setAge("");
  };

  return (
    <Card className={styles.input}>
      <h1 className={styles.title}>Input Card</h1>
      <form onSubmit={addUserHandler} id="user-form">
        <div className={styles.input}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={styles.input}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default InputCard;
