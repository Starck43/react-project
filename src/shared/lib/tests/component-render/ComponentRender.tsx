import {ReactNode} from "react"
import {MemoryRouter} from "react-router-dom"
import {I18nextProvider} from "react-i18next"
import {render} from "@testing-library/react"

import {StateSchema, StoreProvider} from "app/providers/store-provider"
import i18nForTests from "shared/config/i18n/i18nForTests"


export interface RenderWithRouterProps {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function ComponentRender(component: ReactNode, options: RenderWithRouterProps = {}) {
    const {route = "/", initialState} = options

    return render(
        <MemoryRouter initialEntries={[ route ]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    )
}
