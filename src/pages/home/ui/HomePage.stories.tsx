import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import HomePage from "./HomePage"


export default {
    title: "pages/HomePage",
    component: HomePage,
    argTypes: {backgroundColor: {control: "color"}},
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof HomePage>

const Template: Story = (args) => <HomePage {...args} />

export const Default = Template.bind({})
Default.args = {}
