import {Story} from "@storybook/react"
import {ReactNode} from "react"
import {BrowserRouter} from "react-router-dom"


export const RouterDecorator: ReactNode = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
)
