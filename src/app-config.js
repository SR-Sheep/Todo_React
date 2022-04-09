//backend uri를 가져오도록 구현

let backendHost;

const hostname =  window&&window.location && window.location.hostname;

if(hostname === "localhost"){
    backendHost = "http://localhost:8081";
}

export const API_BASE_URL = backendHost;