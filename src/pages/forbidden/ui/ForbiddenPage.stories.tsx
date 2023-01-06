import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"

import ForbiddenPage from "./ForbiddenPage"

export default {
    title: "pages/ForbiddenPage",
    component: ForbiddenPage,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({})]
