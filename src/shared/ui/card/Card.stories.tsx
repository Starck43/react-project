import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {Button} from "@/shared/ui/button/Button"

import Header from "../header/Header"

import {Card} from "./Card"


export default {
    title: "shared/Card",
    component: Card,
    argTypes: {backgroundColor: {control: "color"}},
    args: {
        children:
    <Header tag="h3" title="Card title" subTitle="excerpt">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa itaque iure laudantium
            possimus
            quis reiciendis reprehenderit voluptate voluptatum? Voluptates!
        </p>
    </Header>,
    },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {}

export const RoundedBordered = Template.bind({})
RoundedBordered.args = {
    bordered: true,
    rounded: true,
}
