import {Story} from "@storybook/react"

import "app/styles/index.sass"


export const StyleDecorator = (StoryComponent: Story) => {
    document.body.style.padding = "0"
    return (
        <div
            className="centered vertical"
            style={{
                width: "100%",
                height: "100%",
                flexGrow: 1,
                margin: "1rem",
            }}
        >
            <StoryComponent />
        </div>
    )
}
