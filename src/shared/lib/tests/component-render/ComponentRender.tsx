import {DeepPartial} from "@reduxjs/toolkit"
import {StateSchema, StoreProvider} from "app/providers/store-provider"
import {ReactNode} from "react"
import {MemoryRouter} from "react-router-dom"
import {I18nextProvider} from "react-i18next"
import {render} from "@testing-library/react"

import i18nForTests from "shared/config/i18n/i18nForTests"


export interface RenderWithRouterProps {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function ComponentRender(component: ReactNode, options: RenderWithRouterProps = {}) {
    const {
        route = "/",
        initialState,
    } = options
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[ route ]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    )
}
