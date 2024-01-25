import React from "react";
import styles from "./heading.module.css";
import classNames from "classnames";

function Heading() {
  return <h1 className={classNames(styles.className)}></h1>;
}

export default Heading;
