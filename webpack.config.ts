import path from "path"
import {buildWebpackConfig} from "./config/build/buildWebpackConfig"
import {BuildWebpackEnv, Paths} from "./config/build/types/config"

export default (env: BuildWebpackEnv) => {
    const mode = env.mode || "development"
    const isDev = mode === "development"
    const PORT = env.port || 3000
    const apiUrl = env.apiUrl || "http://localhost:8000"
    const paths: Paths = {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            build: path.resolve(__dirname, "build"),
            html: path.resolve(__dirname, "public", "index.html"),
            src: path.resolve(__dirname, "src"),
            publicLocales: path.resolve(__dirname, "public", "locales"),
            buildLocales: path.resolve(__dirname, "build", "locales"),
        }

    return buildWebpackConfig({
        mode,
        isDev,
        chunkFilename: "[name].[contenthash:8].js",
        cssFilename: "css/[name].[contenthash:8].css",
        cssChunkFilename: "css/[id].[contenthash:8].css",
        paths,
        port: PORT,
        apiUrl,
        project: "frontend",
    })
}
