// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavbarDesktop from "../components/navbar-desktop";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: NavbarDesktop,
};

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NavbarDesktop> = (args) => <NavbarDesktop{...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};
