type Dict = Record<string, boolean | string>

interface IClassNames {
    [className: string]: string
}

export function classnames(
    cls: IClassNames,
    classes: string[] = [],
    dict: Dict = {},
    additional: string[] = [],
): string {
    return [
        ...classes.filter(Boolean).map((classname) => (cls ? cls[classname] : null)),
        ...Object.entries(dict)
            .filter(([_, value]) => Boolean(value))
            .map(([classname, _]) => (cls ? cls[classname] : null)),
        ...additional.filter(Boolean),
    ].join(" ")
}
