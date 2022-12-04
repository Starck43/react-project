import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ButtonSize} from "../../button/consts"
import {Button} from "../../button/Button"

import Row from "./Row"


export default {
    title: "shared/stack/Row",
    component: Row,
    argTypes: {backgroundColor: {control: "color"}},
    args: {
        children: (
            <>
                <Button bordered size={ButtonSize.NORMAL}>Item 1</Button>
                <Button bordered size={ButtonSize.LARGE}>Item 2</Button>
                <Button bordered size={ButtonSize.SMALL}>Item 3</Button>
            </>
        ),
    },
} as ComponentMeta<typeof Row>

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />

export const Default = Template.bind({})
Default.args = {
    gap: "sm",
    justify: "between",
}


export const FullWidth = Template.bind({})
FullWidth.args = {
    gap: "xs",
    fullWidth: true,
    justify: "between",
}
