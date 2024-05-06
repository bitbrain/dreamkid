import Heading from "@/components/heading/heading";
import Logo from "@/components/logo/logo";
import Quantity from "@/components/quantity/quantity";
import TabContainer from "@/components/tab-container/tab-container";
import Tab from "@/components/tab/tab";
import VSeparator from "@/components/vseparator/vseparator";
import styles from "./page.module.css";
import HBox from "@/components/hbox/hbox";
import Button from "@/components/button/button";
import Icon from "@/components/icon/icon";
import Carousel from "@/components/carousel/carousel";
import InteractiveStory from "@/components/interactive-story/interactive-story";
import {
  CountrySideStory,
  PirateBayStory,
  TimelessPalaceStory,
  FirstStory,
  SomeOtherStory,
} from "@/data/stories";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <HBox>
          <Logo />
          <VSeparator />
          <Heading>My stories</Heading>
        </HBox>
        <TabContainer active={0}>
          <Tab active={true}>
            Stories
            <Quantity active={true} defaultValue={3} />
          </Tab>
          <Tab>
            Profiles
            <Quantity defaultValue={2} />
          </Tab>
          <Tab>
            Achived
            <Quantity defaultValue={0} />
          </Tab>
        </TabContainer>
      </div>
      <div className={styles.content}>
        <div className={styles.actionButtons}>
          <Button primary={true}>Create new story</Button>
          <Button>
            <Icon src={"/icons/group_add.svg"} alt={"Group add icon"} /> Create
            new profile
          </Button>
        </div>
        <Carousel>
          <InteractiveStory story={FirstStory} />
          <InteractiveStory story={TimelessPalaceStory} />
          <InteractiveStory story={PirateBayStory} />
          <InteractiveStory story={CountrySideStory} />
          <InteractiveStory story={SomeOtherStory} />
        </Carousel>
      </div>
    </div>
  );
}
