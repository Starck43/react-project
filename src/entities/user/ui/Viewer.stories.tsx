import {ComponentMeta} from "@storybook/react"

import {UserProps} from "entities/user"
import {Viewer} from "./Viewer"


export default {
    title: "entities/Viewer",
    component: Viewer,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Viewer>

const Template = (args: UserProps) => <Viewer {...args} />

export const Default = Template.bind({})
Default.args = {
    user: {username: "admin"},
    data: {email: "admin@t.me"},
}
