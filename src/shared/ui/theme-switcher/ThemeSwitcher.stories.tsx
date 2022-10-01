import {ComponentMeta} from "@storybook/react"
import {Theme} from "app/providers/theme-provider"
import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"
import React from "react"

import {ThemeSwitcher} from "./ThemeSwitcher"


export default {
    title: "shared/Theme switcher",
    component: ThemeSwitcher,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ThemeSwitcher>

const Template = (args: UseThemeResult) => <ThemeSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {theme: Theme.LIGHT}
