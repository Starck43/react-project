import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Theme } from "@/shared/const/theme"

import { ThemeSwitcher } from "./ThemeSwitcher"

export default {
    title: "features/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
)

export const Light = Template.bind({})
Light.args = {
    theme: Theme.LIGHT,
}
// Light.decorators = [ ThemeDecorator(Theme.LIGHT) ]

export const Dark = Template.bind({})
Dark.args = {
    theme: Theme.DARK,
    variant: "secondary",
}
// Dark.decorators = [ ThemeDecorator(Theme.DARK) ]

export const Minified = Template.bind({})
Minified.args = {
    minified: true,
}
// Minified.decorators = [ ThemeDecorator(Theme.DARK) ]
