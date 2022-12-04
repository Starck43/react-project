import {createRoot} from "react-dom/client"
import {BrowserRouter} from "react-router-dom"

import {StoreProvider} from "app/providers/store-provider"
import {ErrorBoundary} from "app/providers/error-boundary-provider"
import {Theme, ThemeProvider} from "app/providers/theme-provider"

import "shared/config/i18n/i18n"
import {isDarkness} from "shared/lib/helpers/datetime"

import App from "app/App"
import "app/styles/index.sass"

const container = document.getElementById("root")

if (!container) {
    throw Error("Page is not loaded, because a root node is not found in HTML document!")
}
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider defaultTheme={isDarkness(18, 7) ? Theme.DARK : Theme.LIGHT}>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
)
