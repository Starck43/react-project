type Dict = Record<string, boolean | string>

interface IClassNames {
    [className: string]: string
}

export function classnames(cls: IClassNames, classes: string[] = [], dict: Dict = {}, additional: string[] = []): string {
    return [
        ...classes.filter(Boolean).map((classname) => cls[classname]),
        ...Object.entries(dict)
            .filter(([_, value]) => Boolean(value))
            .map(([classname, _]) => cls[classname]),
        ...additional.filter(Boolean),
    ].join(" ")
}
