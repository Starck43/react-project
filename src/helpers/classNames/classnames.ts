type Dict = Record<string, boolean | string>


export function classnames(cls: string, dict: Dict, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(dict)
            .filter(([_, value]) => Boolean(value))
            .map(([classname,_]) => classname)
    ].join(' ')
}
