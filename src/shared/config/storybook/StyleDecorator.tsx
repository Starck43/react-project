import {Story} from "@storybook/react"

import "@/app/styles/index.sass"


export const StyleDecorator = (StoryComponent: Story) => (
    <div
        id="pageContent"
        style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                overflowY: "auto",
                flexGrow: "1",
                padding: "1rem",
            }}
    >
        <StoryComponent />
    </div>

    )
