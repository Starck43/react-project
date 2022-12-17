import {Suspense} from "react"
import {I18nextProvider} from "react-i18next"
import {Story} from "@storybook/react"

import i18n from "../i18n/i18n"

import "@/app/styles/index.sass"


export const TranslationDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
)
