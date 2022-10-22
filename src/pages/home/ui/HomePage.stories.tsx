import {ComponentMeta, Story} from "@storybook/react"

import HomePage from "./HomePage"


export default {
    title: "pages/HomePage",
    component: HomePage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof HomePage>

const Template: Story = (args) => <HomePage {...args} />

export const Default = Template.bind({})
Default.args = {}
