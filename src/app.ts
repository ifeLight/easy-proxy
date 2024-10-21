import express from 'express';
import https from 'https';
import {
    createProxyMiddleware, loggerPlugin, debugProxyErrorsPlugin
} from 'http-proxy-middleware';


const app = express();

const target = 'https://www.google.com';

app.use(createProxyMiddleware({
    target,
    changeOrigin: true,
    ws: false, // proxy websockets
    plugins: [loggerPlugin, debugProxyErrorsPlugin],
    logger: console,
    agent: new https.Agent({
        rejectUnauthorized: false
    })
}));


export default app;