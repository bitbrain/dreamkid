import React from "react";
import styles from "./quantity.module.css";
import classNames from "classnames";

function Quantity({ className, defaultValue }) {
  return (
    <div className={classNames(styles.className, className)}>
      {defaultValue}
    </div>
  );
}

export default Quantity;
