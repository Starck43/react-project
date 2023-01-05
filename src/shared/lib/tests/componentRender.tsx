import {ReactNode} from "react"
import {MemoryRouter} from "react-router-dom"
import {I18nextProvider} from "react-i18next"
import {ReducersMapObject} from "@reduxjs/toolkit"
import {render} from "@testing-library/react"

import {StateSchema, StoreProvider} from "@/app/providers/store-provider"
import {ThemeProvider} from "@/app/providers/theme-provider"

import i18nForTests from "@/shared/config/i18n/i18nForTests"
import {Theme} from "@/shared/const/theme"
import useTheme from "@/shared/lib/hooks/useTheme"

import "@/app/styles/index.sass"


export interface RenderWithRouterProps {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

interface TestProviderProps {
    options?: RenderWithRouterProps
    children: ReactNode
}

export const TestProvider = ({options = {}, children}: TestProviderProps) => {
    const {
        route = "/",
        initialState,
        asyncReducers,
    } = options

    const {theme} = useTheme()

    return (
        <MemoryRouter initialEntries={[ route ]}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider defaultTheme={theme || Theme.LIGHT}>
                        {children}
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}


export function componentRender(component: ReactNode, options?: RenderWithRouterProps) {
    return render(
        <TestProvider options={options}>
            {component}
        </TestProvider>,
    )
}
