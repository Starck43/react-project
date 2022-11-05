import React from "react"
import {ComponentMeta, Story} from "@storybook/react"

import ArticlesPage from "./ArticlesPage"


export default {
    title: "pages/ArticlesPage",
    component: ArticlesPage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticlesPage>

const Template: Story = (args) => <ArticlesPage {...args} />

export const Default = Template.bind({})
Default.args = {}
