import {Suspense} from "react"
import {Story} from "@storybook/react"
import {PageLoader} from "@/widgets/page-loader"


export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense fallback={<PageLoader />}>
        <StoryComponent />
    </Suspense>
)
