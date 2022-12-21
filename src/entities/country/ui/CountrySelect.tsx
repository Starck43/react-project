import {memo, useCallback} from "react"
import {useTranslation} from "react-i18next"

import {Select, SelectOption, SelectProps} from "@/shared/ui/select"
import {Country} from "../model/consts"


const optionsList: SelectOption<string>[] = Object.entries(Country).map((obj) => (
    {value: obj[0], content: obj[1]}
))

export const CountrySelect = memo(({compact, value, onChange, className}: SelectProps<Country>) => {
    const {t} = useTranslation()

    const onChangeHandler = useCallback((val: Country) => {
            onChange?.(val)
    }, [ onChange ])

    return (
        <Select
            options={optionsList as SelectOption<Country>[]}
            compact={compact}
            value={value}
            label={t("выбрать страну")}
            onChange={onChangeHandler}
            className={className}
        />
    )
})
