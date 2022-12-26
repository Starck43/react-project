import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator"
import {Theme} from "@/shared/const/theme"

import {ThemeSwitcher} from "./ThemeSwitcher"


export default {
    title: "features/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ ThemeDecorator(Theme.DARK) ]
