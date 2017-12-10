declare const process;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const ENVIRONMENT_NAME = process.env.ENVIRONMENT_NAME || 'local';
export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

export const PORT = process.env.PORT || 3000;
export const ROOT_URL = process.env.ROOT_URL || `localhost:${PORT}`;
export const PROTOCOL = process.env.PROTOCOL || 'http';
