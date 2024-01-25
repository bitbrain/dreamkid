import React from "react";
import Quantity from "./quantity.jsx";

export default {
  title: "Quantity",
  component: Quantity,
};

const Template = (args) => (
  <Quantity active={args.active} defaultValue={args.number} />
);

export const Default = Template.bind({});
Default.args = {
  number: 13,
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  number: 13,
  active: true,
};
