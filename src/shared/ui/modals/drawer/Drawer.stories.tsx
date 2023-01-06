import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Drawer } from "./Drawer"

export default {
    title: "shared/Drawer",
    component: Drawer,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Default = Template.bind({})
Default.args = {
    open: true,
    rounded: true,
    children:
        "Lorem ipsum dolor sit amet, consectetur animistic elit. Ab accusantium ad aliquid architecto, blanditiis commodi consequatur cupiditate debitis ea earum eveniet fuga ipsum, magnam natus nemo nisi obcaecati odio odit placeat provident quae quo reiciendis saepe tenetur veniam? Autem, dicta eos expedita iure nemo nesciunt nostrum provident quas, quibusdam quidem rerum soluta vel! Aspernatur deleniti deserunt dolore eaque exercitationem, hic id laboriosam magnam omnis pariatur perspiciatis provident quam saepe, sunt vitae voluptate voluptatibus. Adipisci alias corporis culpa cumque, deserunt dolorem dolores fugiat ipsa ipsum, labore mollitia nisi officiis, omnis quidem reiciendis repudiandae similique. Cum facere libero minima quasi saepe veritatis.\n",
}
