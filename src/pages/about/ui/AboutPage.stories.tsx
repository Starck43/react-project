import {ComponentMeta, Story} from "@storybook/react"

import AboutPage from "./AboutPage"


export default {
    title: "pages/AboutPage",
    component: AboutPage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof AboutPage>

const Template: Story = (args) => <AboutPage {...args} />

export const Default = Template.bind({})
Default.args = {}
