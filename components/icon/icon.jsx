import React from "react";
import styles from "./icon.module.css";
import classNames from "classnames";

function Icon({ className }) {
  return <div className={classNames(styles.className, className)}></div>;
}

export default Icon;
