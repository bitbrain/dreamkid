import React from "react";
import styles from "./logo.module.css";
import classNames from "classnames";

function Logo({ className, children }) {
  return (
    <div className={classNames(styles.className, className)}>{children}</div>
  );
}

export default Logo;
