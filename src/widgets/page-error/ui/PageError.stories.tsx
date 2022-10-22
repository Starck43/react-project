import {ComponentMeta, Story} from "@storybook/react"
import React from "react"

import {PageError} from "./PageError"


export default {
    title: "widgets/PageError",
    component: PageError,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof PageError>

const Template: Story = (args) => <PageError {...args} />

export const Default = Template.bind({})
Default.args = {children: "PageError"}
