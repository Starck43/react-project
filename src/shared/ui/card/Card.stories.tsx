import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import Header from "../header/Header"

import {Card} from "./Card"


export default {
    title: "shared/Card",
    component: Card,
    argTypes: {backgroundColor: {control: "color"}},
    args: {},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <Header tag="h5" title="Card title" subTitle="excerpt" />,
}
