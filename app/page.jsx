import Heading from "@/components/heading/heading";
import Logo from "@/components/logo/logo";
import Quantity from "@/components/quantity/quantity";
import TabContainer from "@/components/tab-container/tab-container";
import Tab from "@/components/tab/tab";
import VSeparator from "@/components/vseparator/vseparator";
import styles from "./page.module.css";
import HBox from "@/components/hbox/hbox";
import Button from "@/components/button/button";

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
            Stories
            <Quantity defaultValue={0} />
          </Tab>
        </TabContainer>
      </div>
      <div className={styles.content}>
        <div className={styles.actionButtons}>
          <Button primary={true}>Create new story</Button>
          <Button>Create new profile</Button>
        </div>
      </div>
    </div>
  );
}
