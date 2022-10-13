import {ComponentMeta} from "@storybook/react"

import Input from "./Input"

export default {
    title: "widgets/Input",
    component: Input,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Input>

const Template = (args: any) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {rounded: true, value: "text..."}
