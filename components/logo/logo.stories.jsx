import React from "react";
import Logo from "./logo.jsx";

export default {
  title: "Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Dream Kid",
};
