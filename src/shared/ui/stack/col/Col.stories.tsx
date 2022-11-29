import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Button, ButtonSize} from "../../button/Button"

import Col from "./Col"


export default {
    title: "shared/stack/Col",
    component: Col,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Col>

const Template: ComponentStory<typeof Col> = (args) => <Col {...args} />

export const Default = Template.bind({})
Default.args = {
    gap: "xs",
    justify: "between",
    children: (
        <>
            <Button bordered size={ButtonSize.NORMAL}>Item 1</Button>
            <Button bordered size={ButtonSize.LARGE}>Item 2</Button>
            <Button bordered size={ButtonSize.SMALL}>Item 3</Button>
        </>
    ),
}

export const FullWidth = Template.bind({})
FullWidth.args = {
    gap: "sm",
    justify: "between",
    fullWidth: true,
    children: (
        <>
            <Button bordered size={ButtonSize.NORMAL}>Item 1</Button>
            <Button bordered size={ButtonSize.LARGE}>Item 2</Button>
            <Button bordered size={ButtonSize.SMALL}>Item 3</Button>
        </>
    ),
}
