import React from "react";
import styles from "./icon.module.css";
import classNames from "classnames";

function Icon({ className }) {
  return <div className={classNames(styles.icon, className)}></div>;
}

export default Icon;
