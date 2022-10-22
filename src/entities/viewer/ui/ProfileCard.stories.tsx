import {ComponentMeta, ComponentStory, Story} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {ProfileCard} from "./ProfileCard"


export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ProfileCard>

const Template: Story = (args) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
    StoreDecorator({
        viewer: {
            data: {
                username: "admin",
                email: "admin@t.me",
            },
        },
    }),
]
