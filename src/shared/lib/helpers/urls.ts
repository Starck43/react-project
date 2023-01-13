/**
 * Function of building query parameters
 * params is object with a record like {name: value}
 * @param params
 * @return "?name=value&name2=value2"
 */
export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search)
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value)
        }
    })
    return `?${searchParams.toString()}`
}

/**
 * Function of adding query parameters to history state as url
 * Params is object with {name: value}
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState("", "", getQueryParams(params))
}

export function buildAbsoluteUrl(host?: string, path?: string, options?: Record<string, any>) {
    const params = new URLSearchParams(options).toString()

    let url = [host?.replace(/\/$/, ""), path?.replace(/^\/|\/$/g, "")].join("/")

    if (params) {
        url += `?${params}`
    }

    return url
}
