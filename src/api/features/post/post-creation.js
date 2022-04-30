"use strict";

import apiAxios from "@/api/api-axios";
import user from "@/utilities/user";

export default {
    postCreation: async (fields) => {
        const req = apiAxios.createInstance();
        let res;
        await req.post("/publications", {})
            .then()
            .catch();
    }
}