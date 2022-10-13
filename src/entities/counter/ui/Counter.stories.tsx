import {ComponentMeta} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {Counter} from "./Counter"


export default {
    title: "entities/Counter",
    component: Counter,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Counter>

const Template = (args: any) => <Counter {...args} />

export const Default = Template.bind({})
Default.decorators = [ StoreDecorator({counter: {value: 0}}) ]
