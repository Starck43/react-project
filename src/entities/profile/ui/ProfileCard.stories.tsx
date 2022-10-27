import {ComponentMeta, ComponentStory} from "@storybook/react"
import {ProfileSchema} from "entities/profile"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {ProfileCard} from "./ProfileCard"


export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args: ProfileSchema) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {isLoading: true, data: {id: "1", email: "admin@t.me"}}
Default.decorators = [
    StoreDecorator({
        profile: {
            data: {
                username: "admin",
                email: "admin@t.me",
            },
        },
    }),
]
