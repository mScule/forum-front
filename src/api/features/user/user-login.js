/*
    User login api access.
*/

"use strict";

import apiAxios from "@/api/api-axios";
import sanitize from "@/utilities/sanitize";

export default {
    userLogin: async (fields) => {
        const req = apiAxios.createInstance();
        let res;

        await req.put("/login", {
            name: sanitize.text(fields.name),
            password: fields.password
        })
            .then(payload => {
                res = payload;
            })
            .catch(e => {
                console.log(e);
                res = false;
            })

        return res;
    }
}
