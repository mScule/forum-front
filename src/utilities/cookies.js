"use strict";

export default {
    set (name, value, milliseconds) {
        const curDate = new Date();
        curDate.setTime(curDate.getTime() + milliseconds);
        document.cookie = `${name}=${value}; expires=${curDate.toUTCString()}; path=/;Secure`;
    },
    delete(name) {
        console.log("deleting" + name);
    },
    get(name) {
        const
            decodedCookies = decodeURIComponent(document.cookie),
            cookies = decodedCookies.split(/;\s*/g);

        let value = null;

        for(const cookie of cookies) {
            if(cookie.includes(name, 0)) {
                value = cookie.split("=")[1];
                break;
            }
        }

        console.log("Cookie value: " + value);
        return value;
    },
    getAll() {
        return document.cookie;
    }
};