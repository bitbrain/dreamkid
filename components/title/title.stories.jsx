import React from "react";
import Title from "./title.jsx";

export default {
  title: "Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {};
