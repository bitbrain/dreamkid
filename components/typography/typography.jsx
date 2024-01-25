import React from "react";
import styles from "./typography.module.css";
import classNames from "classnames";

function Typography({ className, children }) {
  return <p className={classNames(styles.className, className)}>{children}</p>;
}

export default Typography;
