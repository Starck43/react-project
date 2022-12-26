import {createRoot} from "react-dom/client"
import {BrowserRouter} from "react-router-dom"

import {StoreProvider} from "@/app/providers/store-provider"
import {ErrorBoundary} from "@/app/providers/error-boundary-provider"
import {ThemeProvider} from "@/app/providers/theme-provider"
import App from "@/app/App"

import {Theme} from "@/shared/const/theme"
import {isDarkness} from "@/shared/lib/helpers/datetime"
import "@/shared/config/i18n"

import "@/app/styles/index.sass"


const container = document.getElementById("root")

if (!container) {
    throw Error("Page not loaded, because a root node is absent in HTML document!")
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
export {Theme} from "@/shared/const/theme"
export {PAGE_ID} from "@/shared/const/page"
