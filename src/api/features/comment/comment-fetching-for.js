"use strict";

import apiAxios from "@/api/api-axios";

export default {
    post: async () => {
        const req = apiAxios.createInstance();
        let res;
        await req.get("/publications", {
            params: {
                private: "",
                publication_id: ""
            }
        })
            .then(comments => res = comments)
            .catch(e => {
                console.log(e);
                return false;
            });
        return res;
    }
}