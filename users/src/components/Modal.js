import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";

/* Show modal when there is an error */
const Modal = (props) => {
  console.log(props.modalMessage);
  if (props.modalMessage.trim() === "") {
    return <div></div>;
  }

  return (
    <Card className={styles.modal}>
      <h1>Modal</h1>
      <p>Description lorem ipsum</p>
      <Button onClick={props.hideModalHandler()}>Close</Button>
    </Card>
  );
};

export default Modal;
