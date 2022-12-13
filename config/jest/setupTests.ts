import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

const nodeFetch = require("node-fetch")
// replace a browser fetch to a node fetch for testing with RTK query
global.fetch = nodeFetch
global.Request = nodeFetch.Request
