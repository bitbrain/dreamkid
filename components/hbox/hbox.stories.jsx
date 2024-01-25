import React from "react";
import HBox from "./hbox.jsx";

export default {
  title: "HBox",
  component: HBox,
};

const Template = (args) => <HBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello World",
};
