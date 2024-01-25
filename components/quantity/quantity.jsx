import React from "react";
import styles from "./quantity.module.css";
import classNames from "classnames";

function Quantity({ className, active, defaultValue }) {
  return (
    <div
      className={classNames(
        styles.quantity,
        className,
        active ? styles.active : ""
      )}
    >
      {defaultValue}
    </div>
  );
}

export default Quantity;
