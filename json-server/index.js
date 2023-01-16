const fs = require("fs")
const path = require("path")
const http = require("http")
const https = require("https")
const jsonServer = require("json-server")

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, "db.json"))

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

// fake delay for real loading content imitation
/*
     server.use(async (req, res, next) => {
         await new Promise((res) => {
            setTimeout(res, 800)
         })
         next()
     })
 */

// login endpoint
server.post("/login", (req, res) => {
    try {
        const { username, password } = req.body
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"))
        const { users = [] } = db

        const userFromBd = users.find((user) => user.username === username && user.password === password)

        if (userFromBd) {
            return res.json(userFromBd)
        }

        return res.status(403).json({ message: "User not found" })
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

// check user authorization
// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "AUTH ERROR" })
    }

    next()
})

server.use(router)

// run server

const HTTPS_PORT = 8443
const key = path.join(__dirname, "key.pem")
const cert = path.join(__dirname, "cert.pem")
if (fs.existsSync(key)) {
    https
        .createServer(
            {
                key: fs.readFileSync(key),
                cert: fs.readFileSync(cert),
            },
            server,
        )
        .listen(HTTPS_PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`https server is running on ${HTTPS_PORT} port`)
        })
}

server.listen(8000, () => {
    // eslint-disable-next-line no-console
    console.log(`http server is running on 8000 port`)
})
