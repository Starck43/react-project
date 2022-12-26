import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"
import NotFoundPage from "./NotFoundPage"


export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {backgroundColor: {control: "color"}},
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />

export const Default = Template.bind({})
Default.args = {}
