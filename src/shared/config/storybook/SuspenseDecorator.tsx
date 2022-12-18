import {Suspense} from "react"
import {Story} from "@storybook/react"

import {Loader} from "@/shared/ui/loader"


export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense fallback={<Loader />}>
        <StoryComponent />
    </Suspense>
)
