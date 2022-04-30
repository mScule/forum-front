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
            return res.data[0];
        },
        set: async (fields) => {
            const req = apiAxios.createInstance();
            let res;
            await req.put("/users", {
                username_current: sanitize.text(fields.username_current),
                username_new: sanitize.text(fields.username_new),

                email_current: sanitize.email(fields.email_current),
                email_new: sanitize.email(fields.email_new),

                password_current: sanitize.password(fields.password_current),
                password_new: sanitize.password(fields.password_new),

                disabled: false,
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