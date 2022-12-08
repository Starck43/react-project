import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import {Page} from "./Page"


export default {
    title: "widgets/Page",
    component: Page,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dignissimos excepturi ipsam molestiae nisi pariatur perspiciatis possimus quae quasi quod quos, ratione veniam vero voluptatum. Accusantium adipisci aliquam aliquid animi assumenda autem dolor est excepturi exercitationem expedita fugit hic ipsam laudantium minus provident quasi qui, quo quod totam, vel!</p>,
}
Default.decorators = [
    StoreDecorator({}),
]
