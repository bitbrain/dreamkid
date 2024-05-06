import React from "react";
import styles from "./carousel.module.css";
import classNames from "classnames";

function Carousel({ className, children }) {
  return (
    <div className={classNames(styles.carousel, className)}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}

export default Carousel;
