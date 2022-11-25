import {ComponentMeta, ComponentStory} from "@storybook/react"
import React from "react"
import {Button, ButtonSize} from "shared/ui/button/Button"

import {Flex} from "./Flex"


export default {
    title: "shared/stack/Flex",
    component: Flex,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Default = Template.bind({})
Default.args = {
    style: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    children: (
        <>
            {new Array(3).fill(0).map((_, index) => (
                <Button key={index} bordered size={ButtonSize.NORMAL}>{100 ** (index + 1)}</Button>
            ))}
        </>
    ),
}
