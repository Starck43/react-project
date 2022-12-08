import {memo, ReactNode, useCallback} from "react"

import {ButtonFeature, ButtonSize} from "../button/consts"
import {Button} from "../button/Button"
import {Flex} from "../stack"

// import cls from "./Tabs.module.sass"


export interface Tab {
    value: string
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
    value: string
    direction?: "row" | "column"
    onTabClickHandler: (tab: Tab) => void
    className?: string
}

export const Tabs = memo((props: TabsProps) => {
    const {
        tabs, value, direction = "row", onTabClickHandler, className,
    } = props

    const onTabClick = useCallback((tab: Tab) => (
        // using closure to pass param "tab" through
        () => onTabClickHandler(tab)
    ), [ onTabClickHandler ])

    return (
        <Flex
            direction={direction}
            justify="start"
            wrap
            className={className}
        >
            {tabs.map((tab) => (
                <Button
                    key={tab.value}
                    size={ButtonSize.SMALL}
                    bordered
                    rounded
                    feature={tab.value === value ? ButtonFeature.INVERTED : ButtonFeature.BLANK}
                    onClick={onTabClick(tab)}
                >
                    {tab.content}
                </Button>
            ))}
        </Flex>
    )
})
