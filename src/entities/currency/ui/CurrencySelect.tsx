import {memo, useCallback} from "react"
import {useTranslation} from "react-i18next"

import {Select, SelectOption} from "shared/ui/select/Select"
import {Currency} from "../model/consts"


interface CurrencySelectProps {
    compact?: boolean
    value?: Currency
    onChange?: (value: Currency) => void
    className?: string
}

const optionsList: SelectOption[] = Object.entries(Currency).map((obj) => (
    {value: obj[0], content: obj[1]}
))

export const CurrencySelect = memo(({compact, value, onChange, className}: CurrencySelectProps) => {
    const {t} = useTranslation()

    const onChangeHandler = useCallback((val: string) => {
            onChange?.(val as Currency)
    }, [ onChange ])

    return (
        <Select
            options={optionsList}
            compact={compact}
            value={value}
            label={t("выбрать валюту")}
            onChange={onChangeHandler}
            className={className}
        />
    )
})
