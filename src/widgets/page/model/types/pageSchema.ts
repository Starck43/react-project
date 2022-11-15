type ScrollSchema = Record<string, number> // link url + position related parent in pixel

export interface PageSchema {
    scroll: ScrollSchema
}
