import React from "react";
import styles from "./icon.module.css";
import classNames from "classnames";
import Image from "next/image";

function Icon({ className, src, alt, ...args }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className={classNames(className, styles.icon)}
      {...args}
    />
  );
}

export default Icon;
