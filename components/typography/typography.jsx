import React from "react";
import styles from "./typography.module.css";
import classNames from "classnames";

function Typography() {
  return <p className={classNames(styles.className)}></p>;
}

export default Typography;
