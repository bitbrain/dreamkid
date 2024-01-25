import React from "react";
import styles from "./button.module.css";
import classNames from "classnames";

function Button({ className, children }) {
  return (
    <button className={classNames(styles.button, className)}>{children}</button>
  );
}

export default Button;
