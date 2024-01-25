import React from "react";
import Quantity from "./quantity.jsx";

export default {
  title: "Quantity",
  component: Quantity,
};

const Template = (args) => <Quantity {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello World",
};
