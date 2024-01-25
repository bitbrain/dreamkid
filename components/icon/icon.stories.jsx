import React from "react";
import Icon from "./icon.jsx";

export default {
  title: "Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "book",
};
