import {ComponentMeta, ComponentStory} from "@storybook/react"
import React from "react"
import Header, {TitleType} from "shared/ui/header/Header"

import {Card} from "./Card"


export default {
    title: "shared/Card",
    component: Card,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <Header title="Card title" subTitle="excerpt" titleType={TitleType.H5} />,
}