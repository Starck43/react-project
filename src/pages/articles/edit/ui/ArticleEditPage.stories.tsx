import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import ArticleEditPage from "./ArticleEditPage"


export default {
    title: "pages/Article/EditPage",
    component: ArticleEditPage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = () => <ArticleEditPage />

export const Default = Template.bind({})
Default.args = {}
