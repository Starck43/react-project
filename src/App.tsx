import React, {Fragment, Suspense, SyntheticEvent, useEffect, useRef, useState} from "react"
import {Route, Routes, Link} from "react-router-dom"

import {Theme} from "./theme/ThemeContext"
import useTheme from "./hooks/useTheme"

import {HomePageAsync} from "./pages/home/HomePage.async"
import {AboutPageAsync} from "./pages/about/AboutPage.async"

import {isDarkness} from "./libs/datetime"
import {classnames} from "./helpers/classNames/classnames"


const App = () => {
    const {theme, toggleTheme} = useTheme(isDarkness(18, 7) ? Theme.DARK : Theme.LIGHT)
    const [activeIndex, setActiveIndex] = useState(0)

    const navbarLinkClick = (e: any) => {
        const target = e.target
        console.log('nav link:', target)
    }

    return (
        <Fragment>
            <nav
                className={classnames('navbar', {}, [])}
                onClick={navbarLinkClick}
            >
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О себе</Link>
                <Link to={'#'} onClick={toggleTheme}>
                    {theme === Theme.DARK ? "Светлая" : "Темная"} тема
                </Link>
            </nav>

            <main className="main">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/'} element={<HomePageAsync/>}/>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                    </Routes>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nesciunt praesentium. Dolores
                        eos
                        eum id minus nostrum officia, praesentium rem sapiente sunt totam unde ut vel veniam vitae
                        voluptas voluptates.</p>
                </Suspense>
            </main>
        </Fragment>
    );
}

export default App