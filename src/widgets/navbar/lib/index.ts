import { NavbarItemType } from "../model/types/navbar"

// convert arr of objects to object with arrays by key
export const groupNavbarItems = (items: NavbarItemType[], field: keyof NavbarItemType, auth: boolean = false) => {
    const res = Object.assign(items).reduce((acc: Record<string, object[]>, item: NavbarItemType) => {
        if (!item.authOnly || auth) {
            const key = item[field] as string
            acc[key] = acc[key] || []
            acc[key].push(item)
        }
        return acc
    }, {})

    return res
}
