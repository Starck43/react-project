import { ComponentMeta, ComponentStory } from "@storybook/react"

import { RatingCard } from "./RatingCard"

export default {
    title: "entities/RatingCard",
    component: RatingCard,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    title: "Your rate is",
    rate: { value: 4 },
    feedbackTitle: "Leave your feedback here",
}

export const WithFeedback = Template.bind({})
WithFeedback.args = {
    title: "Your voice",
    rate: {
        value: 5,
        feedback: "This is a nice style! Perfect",
    },
    feedbackTitle: "Leave your feedback here",
}
