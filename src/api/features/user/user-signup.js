"use strict";

import apiAxios from "@/api/api-axios";
import sanitize from "@/utilities/sanitize";

export default {
    userSignup: async (fields) => {
        const req = apiAxios.createInstance();
        let res;
        await req.post("/users", {
            name: sanitize.text(fields.name),
            email: sanitize.email(fields.email),
            password: sanitize.htmlSpecialChars(fields.password),
            disabled: false
        })
            .then(() =>
                res = true
            )
            .catch(e => {
                console.log(e);
                res = false;
            });
        return res;
    }
}
