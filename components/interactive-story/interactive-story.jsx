import React from "react";
import styles from "./interactive-story.module.css";
import classNames from "classnames";
import Image from "next/image";
import Title from "../title/title";
import Typography from "../typography/typography";
import Button from "../button/button";
import Icon from "../icon/icon";

function InteractiveStory({ className, active, story }) {
  return (
    <div
      className={classNames(
        styles.interactiveStory,
        className,
        active ? styles.active : ""
      )}
    >
      <Image
        className={styles.image}
        src={story.image}
        width={256}
        height={256}
        alt={story.title}
      />
      <Title className={styles.title}>{story.title}</Title>
      {active && (
        <>
          <Typography className={styles.description}>
            {story.description}
          </Typography>
          <div className={styles.actionButtons}>
            <Button>
              <Icon src={"/icons/book.svg"} />
              Read the story
            </Button>
            <Button>
              <Icon src={"/icons/inventory.svg"} />
              Archive
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default InteractiveStory;
