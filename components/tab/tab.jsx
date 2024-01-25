import React from "react";
import styles from "./tab.module.css";
import classNames from "classnames";

function Tab({ onClick, className, children, active }) {
  return (
    <div
      className={classNames(styles.tab, className, active ? styles.active : "")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Tab;
