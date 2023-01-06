import React from "react"
import { ComponentMeta, Story } from "@storybook/react"

import { LanguageSwitcher } from "./LanguageSwitcher"

export default {
    title: "features/LanguageSwitcher",
    component: LanguageSwitcher,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof LanguageSwitcher>

const Template: Story = (args) => <LanguageSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Minified = Template.bind({})
Minified.args = {
    minified: true,
}
