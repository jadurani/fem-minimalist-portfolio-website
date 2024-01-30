import { NAV_LINKS } from "@lib/nav-links";
import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";

const meta = {
  title: "Nav/NavBar",
  component: NavBar,
  argTypes: {
    activeRoute: {
      options: NAV_LINKS.map((l) => l.path),
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story | any = {
  args: {
    activeRoute: "/",
  },
};
