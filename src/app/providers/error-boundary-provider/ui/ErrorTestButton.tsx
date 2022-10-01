import {t} from "i18next"
import {useEffect, useState} from "react"
import {Button} from "shared/ui/button/Button"


// Button for calling Error

export const ErrorTestButton = () => {
    const [ error, setError ] = useState(false)
    const handleClick = () => setError(true)

    useEffect(() => {
        if (error) throw new Error()
    }, [ error ])

    return (
        <Button onClick={handleClick}>
            {t("throw error")}
        </Button>
    )
}
