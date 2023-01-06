import { Project } from "ts-morph"
import { PROJECT_LAYERS } from "./consts"

const project = new Project({})
project.addSourceFilesAtPaths("src/**/*.ts")
project.addSourceFilesAtPaths("src/**/*.tsx")

function isAbsolute(path: string) {
    return PROJECT_LAYERS.some((layer) => path.startsWith(layer))
}
const files = project.getSourceFiles()

files.forEach((source) => {
    const declarations = source.getImportDeclarations()
    declarations.forEach((declaration) => {
        const value = declaration.getModuleSpecifierValue()
        if (isAbsolute(value)) {
            declaration.setModuleSpecifier(`@/${value}`)
        }
    })
})

// eslint-disable-next-line no-console
project.save().then(() => console.log("absolute paths for imports updated!"))
