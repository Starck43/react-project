
export function buildFileLoader() {
    return {
        test: /\.(png|jpe?g|gif|tiff|eot|woff|woff2)$/i,
        use: [
            {loader: "file-loader"},
        ],
    }
}
