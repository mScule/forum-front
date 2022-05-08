/*
    Publication deletion api access.
    For posts and comments.
*/

"use strict";

import apiAxios from "@/api/api-axios";

export default {
    delete: async (publicationtId) => {
        const req = apiAxios.createInstance();
        let res;

        req.put("/publications", {private: 1, publication_id: publicationtId})
            .then(() => res = true)
            .catch(() => res = false);
        return res;
    }
}
