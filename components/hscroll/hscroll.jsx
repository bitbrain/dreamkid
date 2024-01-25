import React from "react";
import styles from "./hscroll.module.css";
import classNames from "classnames";

function HScroll({ className, children }) {
  return (
    <div className={classNames(styles.className, className)}>{children}</div>
  );
}

export default HScroll;
