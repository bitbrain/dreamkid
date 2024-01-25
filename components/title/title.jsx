import React from "react";
import styles from "./title.module.css";
import classNames from "classnames";

function Title({ className, children }) {
  return (
    <h2 className={classNames(styles.className, className)}>{children}</h2>
  );
}

export default Title;
