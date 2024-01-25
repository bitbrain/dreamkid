import React from "react";
import Typography from "./typography.jsx";

export default {
  title: "Typography",
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a sample text",
};
