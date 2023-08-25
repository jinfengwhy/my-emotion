const devBaseURL = "http://127.0.0.1:8888";
const proBaseURL = "http://47.94.241.26:8889";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
