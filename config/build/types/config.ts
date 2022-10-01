export type Mode = "production" | "development"

export type Paths = {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildWebpackOptions {
    mode: Mode,
    isDev: boolean
    paths: Paths
    cssFilename: string
    chunkFilename: string
    port: number
}

export interface BuildWebpackEnv {
    mode: Mode
    port: number
}
