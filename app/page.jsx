import Heading from "@/components/heading/heading";
import Logo from "@/components/logo/logo";
import Quantity from "@/components/quantity/quantity";
import TabContainer from "@/components/tab-container/tab-container";
import Tab from "@/components/tab/tab";
import VSeparator from "@/components/vseparator/vseparator";
import styles from "./page.module.css";
import HBox from "@/components/hbox/hbox";

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
          <Tab>
            Stories
            <Quantity defaultValue={3} />
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
      <div className={styles.content}>Content goes here</div>
    </div>
  );
}
