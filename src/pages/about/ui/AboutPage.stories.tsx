import {ComponentMeta} from "@storybook/react"
import React from "react"

import AboutPage from "./AboutPage"


export default {
    title: "pages/AboutPage",
    component: AboutPage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof AboutPage>

const Template = (args: any) => <AboutPage {...args} />

export const Default = Template.bind({})
Default.args = {}
