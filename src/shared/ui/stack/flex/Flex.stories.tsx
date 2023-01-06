import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button, ButtonSize } from "@/shared/ui/button"

import { Flex } from "./Flex"

export default {
    title: "shared/stack/Flex",
    component: Flex,
    argTypes: { backgroundColor: { control: "color" } },
    args: {
        style: {
            position: "absolute",
            width: "100%",
            height: "100%",
        },
        children: (
            <>
                {new Array(3).fill(0).map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Button key={index} bordered size={ButtonSize.NORMAL}>
                        {100 ** (index + 1)}
                    </Button>
                ))}
            </>
        ),
    },
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Default = Template.bind({})
Default.args = {}
