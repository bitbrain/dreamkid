import React from "react";
import styles from "./logo.module.css";
import classNames from "classnames";

function Logo({ className }) {
  return <div className={classNames(styles.logo, className)}></div>;
}

export default Logo;
