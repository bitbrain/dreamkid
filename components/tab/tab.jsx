import React from "react";
import styles from "./tab.module.css";
import classNames from "classnames";

function Tab({ className, children, active }) {
  return (
    <div
      className={classNames(styles.tab, className, active ? styles.active : "")}
    >
      {children}
    </div>
  );
}

export default Tab;
