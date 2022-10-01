import useTheme from "app/providers/theme-provider/lib/useTheme"
import {render} from "react-dom"
import {BrowserRouter} from "react-router-dom"

import {ErrorBoundary} from "app/providers/error-boundary-provider"
import {Theme, ThemeProvider} from "app/providers/theme-provider"
import App from "app/App"

import "shared/config/i18n/i18n"
import {isDarkness} from "shared/lib/helpers/datetime"

import "app/styles/index.sass"

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider defaultTheme={isDarkness(18, 7) ? Theme.DARK : Theme.LIGHT}>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root"),
)
