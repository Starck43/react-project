import React from "react"
import {ComponentMeta, Story} from "@storybook/react"

import {Theme} from "app/providers/theme-provider"
import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"

import {ThemeSwitcher} from "./ThemeSwitcher"


export default {
    title: "features/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ThemeSwitcher>

const Template: Story = (args: UseThemeResult) => <ThemeSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {theme: Theme.LIGHT}
