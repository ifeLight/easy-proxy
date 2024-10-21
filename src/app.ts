import express from 'express';
import https from 'https';
import {
    createProxyMiddleware, loggerPlugin, debugProxyErrorsPlugin
} from 'http-proxy-middleware';
import { ALLOW_INSECURE, TARGET, DEBUG } from './config.js';

const app = express();

const extraOptions = ALLOW_INSECURE ? {
    agent: new https.Agent({
        rejectUnauthorized: false
    })
} : {};

const extraPlugins = [];
if (DEBUG) {
    extraPlugins.push(debugProxyErrorsPlugin);
}

app.use(createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    ws: false, // proxy websockets
    plugins: [loggerPlugin, ...extraPlugins],
    logger: console,
    ...extraOptions
}));


export default app;