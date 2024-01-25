import React from "react";
import styles from "./hbox.module.css";
import classNames from "classnames";

function HBox({ className, children }) {
  return <div className={classNames(styles.hbox, className)}>{children}</div>;
}

export default HBox;
