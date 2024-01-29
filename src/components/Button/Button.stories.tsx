import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    isPrimary: true,
    handleClick: () => alert()
  }
};

export const PrimaryDisabled: Story = {
  args: {
    label: 'Primary',
    isPrimary: true,
    disabled: true,
    handleClick: () => alert()
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    handleClick: () => alert()
  }
};

export const SecondaryDisabled: Story = {
  args: {
    label: 'Secondary',
    disabled: true,
    handleClick: () => alert()
  }
};
