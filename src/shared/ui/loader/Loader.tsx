import React, {memo} from "react"

import {classnames} from "@/shared/lib/helpers/classnames"

import cls from "./Loader.module.sass"


interface LoaderProps {
    className?: string
}

export const Loader = memo(({className = "roller"}: LoaderProps) => (
    <div className={classnames(cls, [ "loader__container" ], {}, [ className ])}>
        {new Array(8).fill(0).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} />
        ))}
    </div>
))
