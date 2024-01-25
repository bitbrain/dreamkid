import React from "react";
import styles from "./button.module.css";
import classNames from "classnames";

function Button({ primary, className, children }) {
  return (
    <button
      className={classNames(
        styles.button,
        className,
        primary ? styles.primary : ""
      )}
    >
      {children}
    </button>
  );
}

export default Button;
