import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Code} from "./Code"


export default {
    title: "shared/Code",
    component: Code,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Default = Template.bind({})
Default.args = {
    text: "<!DOCTYPE html>\n"
        + "<html lang=\"ru\">\n"
        + "\t<head>\n"
        + "\t\t<meta charset=\"UTF-8\">\n"
        + "\t\t<title>React Development Project</title>\n"
        + "\t</head>\n"
        + "\t<body>\n"
        + "\t\t<div id=\"root\"></div>\n"
        + "\t</body>\n"
        + "</html>\n",
}
