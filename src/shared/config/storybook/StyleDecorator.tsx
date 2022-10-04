import {Story} from "@storybook/react"

import "app/styles/index.sass"


export const StyleDecorator = (StoryComponent: Story) => (
    <div
        className="centered"
        style={{
            width: "100%",
            height: "100%",
        }}
    >
        <StoryComponent />
    </div>
)
