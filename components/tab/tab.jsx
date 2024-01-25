import React from "react";
import styles from "./tab.module.css";
import classNames from "classnames";

function Tab({ className, children }) {
  return (
    <div className={classNames(styles.className, className)}>{children}</div>
  );
}

export default Tab;
