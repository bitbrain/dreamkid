import React from "react";
import styles from "./vseparator.module.css";
import classNames from "classnames";

function VSeparator({ className, children }) {
  return (
    <div className={classNames(styles.vseparator, className)}>{children}</div>
  );
}

export default VSeparator;
