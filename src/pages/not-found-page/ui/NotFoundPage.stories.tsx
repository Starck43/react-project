import {ComponentMeta} from "@storybook/react"
import NotFoundPage from "./NotFoundPage"


export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof NotFoundPage>

const Template = (args: any) => <NotFoundPage {...args} />

export const Default = Template.bind({})
Default.args = {}
