/*
    User logout api access.
*/

"use strict";

import apiAxios from "@/api/api-axios";

export default {
    userLogout: async () => {
        const req = apiAxios.createInstance();
        let res;

        await req.put("/logout")
            .then(payload => {
                console.log(payload);
                res = true;
            })
            .catch(e => {
                console.log(e);
                res = false;
            })
        return res;
    }
}