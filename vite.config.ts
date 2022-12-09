import fs from "fs"
import path from "path"
import {defineConfig, loadEnv} from "vite"
import react from "@vitejs/plugin-react"
import legacy from "@vitejs/plugin-legacy"
import svgr from "vite-plugin-svgr"


const WRONG_CODE = "import { bpfrpt_proptype_WindowScroller } from \"../WindowScroller.js\";"
export function reactVirtualized() {
    return {
        name: "flat:react-virtualized",
        configResolved() {
            const file = require
            .resolve("react-virtualized")
            .replace(
                path.join("dist", "commonjs", "index.js"),
                path.join("dist", "es", "WindowScroller", "utils", "onScroll.js"),
            )
            const code = fs.readFileSync(file, "utf-8")
            const modified = code.replace(WRONG_CODE, "")
            fs.writeFileSync(file, modified)
        },
    }
}

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "")
    return {
        // vite config
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
            __API__: JSON.stringify(env.API_SERVER || "http://localhost:8000"),
            __PROJECT__: JSON.stringify("frontend"),
        },
        build: {
            sourcemap: true,
        },
    }
})
