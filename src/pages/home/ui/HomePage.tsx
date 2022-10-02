import React from "react"
import {useTranslation} from "react-i18next"

import Title from "shared/ui/title/Title"
import {Sidebar} from "widgets/sidebar"
import useTheme from "app/providers/theme-provider/lib/useTheme"


function HomePage() {
    const {t} = useTranslation("home")
    const {theme, toggleTheme} = useTheme()

    return (
        <>
            <Sidebar
                theme={theme}
                toggleTheme={toggleTheme}
                position="left"
                className="sidebar"
            />
            <div className="content">
                <div className="container">
                    <Title>{t("Продвинутый курс на Реакт")}</Title>
                </div>
            </div>
        </>
    )
}

export default HomePage
