import React from "react";
import Tab from "./tab.jsx";

export default {
  title: "Tab",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello World",
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  children: "Hello World",
  active: true,
};
