import React from "react";
import styles from "./interactive-story.module.css";
import classNames from "classnames";

function InteractiveStory({ className, active, story }) {
  return (
    <div
      className={classNames(
        styles.interactiveStory,
        className,
        active ? styles.active : ""
      )}
    >
      {story.title}
    </div>
  );
}

export default InteractiveStory;
