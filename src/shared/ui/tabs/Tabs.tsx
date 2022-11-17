import {memo, ReactNode, useCallback} from "react"
import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature, ButtonSize} from "shared/ui/button/Button"

import cls from "./Tabs.module.sass"


export interface Tab {
    value: string
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
    value: string
    onTabClickHandler: (tab: Tab) => void
    className?: string
}

export const Tabs = memo((props: TabsProps) => {
    const {tabs, value, onTabClickHandler, className} = props

    const onTabClick = useCallback((tab: Tab) => (
        // using closure to pass param "tab" through
        () => onTabClickHandler(tab)
    ), [ onTabClickHandler ])

    return (
        <div
            className={classnames(cls, [ "tabs" ], {}, [ "flex-wrap", "g-1", className ])}
        >
            {tabs.map((tab) => (
                <Button
                    key={tab.value}
                    size={ButtonSize.SMALL}
                    bordered
                    rounded
                    feature={tab.value === value ? ButtonFeature.INVERTED : ButtonFeature.BLANK}
                    onClick={onTabClick(tab)}
                    className={classnames(cls, [ "tab" ])}
                >
                    {tab.content}
                </Button>
            ))}
        </div>
    )
})
