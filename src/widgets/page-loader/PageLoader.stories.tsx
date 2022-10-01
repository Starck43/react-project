import {ComponentMeta} from "@storybook/react"
import React from "react"

import {PageLoader} from "./PageLoader"


export default {
    title: "widgets/PageLoader",
    component: PageLoader,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof PageLoader>

const Template = (args: any) => <PageLoader {...args} />

export const Default = Template.bind({})
Default.args = {className: "lds-roller"}
