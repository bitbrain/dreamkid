import React from "react";
import Heading from "./heading.jsx";

export default {
  title: "Heading",
  component: Heading,
};

const Template = (args) => <Heading>{args.text}</Heading>;

export const Default = Template.bind({});

Default.args = {
  text: "Hello World!",
};
