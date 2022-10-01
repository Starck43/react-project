import {Story} from "@storybook/react"
import {Theme} from "app/providers/theme-provider"

import "app/styles/index.sass"


export const ThemeDecorator = () => (StoryComponent: Story) => (<StoryComponent />)
