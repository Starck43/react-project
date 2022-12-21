import {useCallback} from "react"
import {useTranslation} from "react-i18next"

import {Select, SelectOption, SelectProps} from "@/shared/ui/select"
import {Currency} from "../model/consts"


const optionsList: SelectOption<string>[] = Object.entries(Currency).map((obj) => (
    {value: obj[0], content: obj[1]}
))

export const CurrencySelect = ({compact, value, onChange, className}: SelectProps<Currency>) => {
    const {t} = useTranslation()

    const onChangeHandler = useCallback((val: Currency) => {
        onChange?.(val)
    }, [ onChange ])

    return (
        <Select
            options={optionsList as SelectOption<Currency>[]}
            compact={compact}
            value={value}
            label={t("выбрать валюту")}
            onChange={onChangeHandler}
            className={className}
        />
    )
}
