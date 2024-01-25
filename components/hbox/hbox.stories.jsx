import React from "react";
import HBox from "./hbox.jsx";

export default {
  title: "HBox",
  component: HBox,
};

const Template = (args) => (
  <HBox>
    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
  </HBox>
);

export const Default = Template.bind({});
