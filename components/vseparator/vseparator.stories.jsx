import React from "react";
import VSeparator from "./vseparator.jsx";

export default {
  title: "VSeparator",
  component: VSeparator,
};

const Template = (args) => (
  <VSeparator>
    <div>Element 1</div>
    <div>Element 2</div>
  </VSeparator>
);

export const Default = Template.bind({});
