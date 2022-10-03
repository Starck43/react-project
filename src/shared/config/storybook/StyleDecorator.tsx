import {Story} from "@storybook/react"

import "app/styles/index.sass"


export const StyleDecorator = (StoryComponent: Story) => (
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    }}
    >
        <StoryComponent />
    </div>
)
