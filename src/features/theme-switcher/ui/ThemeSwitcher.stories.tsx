import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {Theme} from "@/shared/const/theme"

import {UseThemeResult} from "@/shared/lib/hooks/useTheme"

import {ThemeSwitcher} from "./ThemeSwitcher"


export default {
    title: "features/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ThemeSwitcher>

const Template: Story = (args: UseThemeResult) => <ThemeSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {theme: Theme.LIGHT}
