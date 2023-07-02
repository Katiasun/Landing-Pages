import React from "react";
import * as styles from "./styles.module.css";

const Button = ({ type, children, className: parentClassName }) => {
  const buttonClass = type === "primary" ? styles.primary : styles.secondary;
  return (
    <button className={`${parentClassName} ${buttonClass}`}>{children}</button>
  );
};

export default Button;
