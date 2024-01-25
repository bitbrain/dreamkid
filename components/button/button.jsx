import React from "react";
import styles from "./button.module.css";
import classNames from "classnames";

function Button() {
  return <button className={classNames(styles.className)}></button>;
}

export default Button;
