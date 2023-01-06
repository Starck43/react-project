import { capitalizeFirstLetter } from "./strings"

export function getValueForStringEnum(obj: object, value: string) {
    return Object.entries(obj).find(([key, _]) => key === value)?.[1]
}

export function enumToArray(enumObj: object, valueAsContent: boolean = false) {
    return Object.entries(enumObj).map((obj) => ({
        value: obj[0],
        content: capitalizeFirstLetter(obj[valueAsContent ? 0 : 1]),
    }))
}
