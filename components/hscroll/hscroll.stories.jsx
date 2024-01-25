import React from "react";
import HScroll from "./hscroll.jsx";

export default {
  title: "HScroll",
  component: HScroll,
};

const Template = (args) => <HScroll {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello World",
};
