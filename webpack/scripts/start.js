const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack.dev")();

try {
    const server = new WebpackDevServer(
        {
            liveReload: true,
            host: "0.0.0.0",
            client: { logging: "error" },
            static: { publicPath: "/" },
            port: 8080,
            devMiddleware: {
                stats: { all: false, error: true, colors: true, timings: true, performance: true },
            },
        },
        webpack(config)
    );
    server.start();
} catch (err) {
    console.error(err);
}
