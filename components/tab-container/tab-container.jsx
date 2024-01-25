import React from "react";
import styles from "./tab-container.module.css";
import classNames from "classnames";

function TabContainer({ className, children }) {
  return (
    <div className={classNames(styles.tabContainer, className)}>{children}</div>
  );
}

export default TabContainer;
