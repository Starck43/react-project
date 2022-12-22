import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import imageSrc from "./assets/avatar.jpg"
import FallbackImage from "./assets/avatar.svg"
import {LazyImage} from "./Image"


export default {
    title: "shared/Image",
    component: LazyImage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof LazyImage>

const Template: ComponentStory<typeof LazyImage> = (args) => <LazyImage {...args} />

export const Default = Template.bind({})
Default.args = {
    src: imageSrc,
    fallback: <FallbackImage />,
    width: 300,
    height: 300,
}
