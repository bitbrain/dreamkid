import React from "react";
import Button from "./button.jsx";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Primary Button",
};
