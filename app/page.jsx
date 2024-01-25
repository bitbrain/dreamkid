import Heading from "@/components/heading/heading";
import Logo from "@/components/logo/logo";
import Quantity from "@/components/quantity/quantity";
import TabContainer from "@/components/tab-container/tab-container";
import Tab from "@/components/tab/tab";
import VSeparator from "@/components/vseparator/vseparator";

export default function Home() {
  return (
    <div>
      <VSeparator>
        <Logo>Dream Kid</Logo>
        <Heading>My stories</Heading>
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
      </VSeparator>
    </div>
  );
}