import React from "react";
import Heading from "./heading.jsx";

export default {
  title: "Heading",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello World",
};
