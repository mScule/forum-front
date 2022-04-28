"use strict";

import apiAxios from "@/api/api-axios";
import sanitize from "@/utilities/sanitize";

export default {
    userData: {
        get: async () => {
            const req = apiAxios.createInstance();
            let res;
            await req.get("/users")
                .then(payload => res = payload)
                .catch(e => {
                    console.log(e);
                    res = false;
                })
            return res.data;
        },
        set: async (fields) => {
            const req = apiAxios.createInstance();
            let res;
            await req.put("/users", {
                name: sanitize.text(fields.name),
                email: sanitize.email(fields.email),
                password: sanitize.password(fields.password),
                disabled: false
            })
                .then(() => {
                    res = true;
                })
                .catch(e => {
                    console.log(e);
                    res = false;
                });
            return res;
        }
    }
}