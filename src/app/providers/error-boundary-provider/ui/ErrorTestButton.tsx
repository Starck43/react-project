import {useEffect, useState} from "react"
import {useTranslation} from "react-i18next"
import {Button, ButtonFeature, ButtonVariant} from "shared/ui/button/Button"


// Button for calling Error

interface ErrorTestProps {
    minified?: boolean
    className?: string
}

export const ErrorTestButton = ({minified, className}: ErrorTestProps) => {
    const [ error, setError ] = useState(false)
    const {t} = useTranslation()

    const handleClick = () => setError(true)

    useEffect(() => {
        if (error) throw new Error()
    }, [ error ])

    return (
        <Button
            variant={ButtonVariant.PRIMARY}
            feature={ButtonFeature.BLANK}
            className={className}
            onClick={handleClick}
        >
            {t("throw error")}
        </Button>
    )
}
