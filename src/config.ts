import dotenv from 'dotenv';
dotenv.config();

export const TARGET = process.env.TARGET || 'https://www.google.com';
export const ALLOW_INSECURE = process.env.ALLOW_INSECURE === 'true';
export const PORT = process.env.PORT || 8080;
export const DEBUG = process.env.DEBUG === 'true';