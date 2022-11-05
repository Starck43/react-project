import {memo, useEffect, useState} from "react"
import {useTranslation} from "react-i18next"
import {Button, ButtonFeature, ButtonVariant} from "shared/ui/button/Button"


// Button for calling Error

interface ErrorTestProps {
    className?: string
}

export const ErrorTestButton = memo(({className}: ErrorTestProps) => {
    const [ error, setError ] = useState(false)
    const {t} = useTranslation()

    useEffect(() => {
        if (error) throw new Error()
    }, [ error ])

    return (
        <Button
            variant={ButtonVariant.PRIMARY}
            feature={ButtonFeature.BLANK}
            className={className}
            onClick={() => setError(true)}
        >
            {t("throw error")}
        </Button>
    )
})
