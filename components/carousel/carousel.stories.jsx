import React from "react";
import Carousel from "./carousel.jsx";

export default {
  title: "Carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: ["element 1", "element 2"],
};
