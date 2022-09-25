import {render} from "react-dom"
import {BrowserRouter} from "react-router-dom"

import {ThemeProvider} from "app/providers/theme-provider"
import App from "app/App"

import "./shared/config/i18n/i18n"

import "app/styles/index.sass"

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root"),
)
