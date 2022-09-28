import {classnames} from "shared/lib/helpers/classnames"
import {Spinner} from "shared/ui/spinner/Spinner"

import cls from "./PageLoader.module.sass"


interface PageLoaderProps {
	className: string
}

export const PageLoader = ({className}: PageLoaderProps) => (
    <Spinner className={classnames(cls, ["page__loader"], {}, [className])} />
    )
