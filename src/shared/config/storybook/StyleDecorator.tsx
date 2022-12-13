import {Story} from "@storybook/react"

import "@/app/styles/index.sass"


export const StyleDecorator = (StoryComponent: Story) => {
    document.body.style.padding = "0"
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%",
                padding: "1rem",
            }}
        >
            <StoryComponent />
        </div>
    )
}
