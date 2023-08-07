import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={`${styles.card} ${styles.className}`}>{props.children}</div>
  );
};

export default Card;
