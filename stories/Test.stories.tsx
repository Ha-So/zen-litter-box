import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavbarDesktop from "../pages/components/navbar-desktop";

export default {
  title: "Header/Navbar",
  component: NavbarDesktop,
} as ComponentMeta<typeof NavbarDesktop>;

const Template: ComponentStory<typeof NavbarDesktop> = (args) => (
  <NavbarDesktop />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};
