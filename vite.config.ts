import {defineConfig, loadEnv} from "vite"
import react from "@vitejs/plugin-react"
import legacy from "@vitejs/plugin-legacy"
import svgr from "vite-plugin-svgr"


export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "")
    return {
        server: {
            port: 3000,
        },
        plugins: [
            svgr({exportAsDefault: true}),
            react(),
            legacy({
                targets: [ "defaults", "not IE 11" ],
            }),
        ],
        resolve: {
            alias: [
                {find: "@", replacement: "/src"},
            ],
        },
        define: {
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(env.API_SERVER),
            __PROJECT__: JSON.stringify("frontend"),
        },
        css: {
            devSourcemap: true,
        },
    }
})
