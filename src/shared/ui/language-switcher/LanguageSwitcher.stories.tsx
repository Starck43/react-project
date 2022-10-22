import {ComponentMeta, Story} from "@storybook/react"
import React from "react"

import {LanguageSwitcher} from "./LanguageSwitcher"


export default {
    title: "shared/LanguageSwitcher",
    component: LanguageSwitcher,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof LanguageSwitcher>

const Template: Story = (args) => <LanguageSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {children: "LanguageSwitcher"}
