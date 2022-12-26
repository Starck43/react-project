import {Story} from "@storybook/react"

import {ThemeProvider} from "@/app/providers/theme-provider"
import {Theme} from "@/shared/const/theme"


export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider defaultTheme={theme}>
        <StoryComponent />
    </ThemeProvider>
)
