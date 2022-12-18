import {memo, useCallback} from "react"
import {useTranslation} from "react-i18next"

import {Select, SelectOption} from "@/shared/ui/select"
import {Country} from "../model/consts"


interface CountrySelectProps {
    compact?: boolean
    value?: Country
    onChange?: (value: Country) => void
    className?: string
}

const optionsList: SelectOption[] = Object.entries(Country).map((obj) => (
    {value: obj[0], content: obj[1]}
))

export const CountrySelect = memo(({compact, value, onChange, className}: CountrySelectProps) => {
    const {t} = useTranslation()

    const onChangeHandler = useCallback((val: string) => {
            onChange?.(val as Country)
    }, [ onChange ])

    return (
        <Select
            options={optionsList}
            compact={compact}
            value={value}
            label={t("выбрать страну")}
            onChange={onChangeHandler}
            className={className}
        />
    )
})
