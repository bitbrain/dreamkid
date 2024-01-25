import React from "react";
import styles from "./heading.module.css";
import classNames from "classnames";

function Heading({ className, children }) {
  return (
    <h1 className={classNames(styles.className, className)}>{children}</h1>
  );
}

export default Heading;
