"use strict";

import axios from "axios";
import apiConfig from "@/api/api-config";

axios.defaults.baseURL = apiConfig.url;
axios.defaults.timeout = apiConfig.timeout;
axios.defaults.headers = {
    "Access-Control-Allow-Origin": apiConfig.url,
};
axios.defaults.withCredentials = true;

export default {
    createInstance() {
        return axios.create({
            baseURL: apiConfig.url,
            timeout: apiConfig.timeout,
            headers: {
                "Access-Control-Allow-Origin": apiConfig.url,
                "Access-Control-Allow-Credentials": "true",
            },
        })
    }
}
