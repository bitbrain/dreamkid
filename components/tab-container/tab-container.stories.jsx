import React from "react";
import TabContainer from "./tab-container.jsx";

export default {
  title: "TabContainer",
  component: TabContainer,
};

const Template = (args) => <TabContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <Tab onClick={loadContentForTab1}>Tab 1</Tab>
      <Tab onClick={loadContentForTab2}>Tab 2</Tab>
    </div>
  ),
};
