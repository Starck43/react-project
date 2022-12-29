export function buildFileLoader() {
    return [
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: "file-loader",
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [ "@svgr/webpack" ],
        },
        {
            test: /\.(woff(2)?|ttf|eot)$/,
            type: "asset/resource",
            generator: {
                filename: "fonts/[name].[ext]",
            },
        },
    ]
}
