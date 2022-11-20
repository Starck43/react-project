export type Mode = "production" | "development"

export type Paths = {
    entry: string
    build: string
    html: string
    src: string
    publicLocales: string
    buildLocales: string
}

export interface BuildWebpackOptions {
    mode: Mode,
    isDev: boolean
    paths: Paths
    cssFilename: string
    cssChunkFilename: string
    chunkFilename: string
    port: number
    apiUrl: string
    project: "storybook" | "frontend" | "jest"
}

export interface BuildWebpackEnv {
    mode: Mode
    port: number
    apiUrl: string
}
