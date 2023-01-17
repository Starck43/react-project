const { promisify } = require("util")
const fs = require("fs")
const { readdir, writeFile } = require("fs")
const { join: joinPath, relative } = require("path")

const asyncReaddir = promisify(readdir)
const writeFileAsync = promisify(writeFile)

const lokiDir = joinPath(__dirname, "..", ".loki")
const actualDir = joinPath(lokiDir, "current")
const expectedDir = joinPath(lokiDir, "reference")
const diffDir = joinPath(lokiDir, "difference")

if (fs.existsSync(diffDir)) {
    ;(async function main() {
        const diffs = await asyncReaddir(diffDir)

        await writeFileAsync(
            joinPath(lokiDir, "report.json"),
            JSON.stringify({
                newItems: [],
                deletedItems: [],
                passedItems: [],
                failedItems: diffs,
                expectedItems: diffs,
                actualItems: diffs,
                diffItems: diffs,
                actualDir: relative(lokiDir, actualDir),
                expectedDir: relative(lokiDir, expectedDir),
                diffDir: relative(lokiDir, diffDir),
            }),
        )
    })()
} else {
    // eslint-disable-next-line no-console
    console.log("Loki screenshots not found")
}
