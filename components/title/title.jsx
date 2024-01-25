import React from "react";
import styles from "./title.module.css";
import classNames from "classnames";

function Title() {
  return <h2 className={classNames(styles.className)}></h2>;
}

export default Title;
