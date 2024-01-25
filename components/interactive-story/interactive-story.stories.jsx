import React from "react";
import InteractiveStory from "./interactive-story";
import { PirateBayStory } from "@/data/stories.jsx";

export default {
  title: "InteractiveStory",
  component: InteractiveStory,
};

const Template = (args) => <InteractiveStory story={args.story} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  story: PirateBayStory,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  story: PirateBayStory,
};
