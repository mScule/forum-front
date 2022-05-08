/*
    Post creation api access.
*/

"use strict";

import apiAxios from "@/api/api-axios";
import sanitize from "@/utilities/sanitize";

export default {
    postCreation: async (fields) => {
        const req = apiAxios.createInstance();
        let res;
        await req.post("/publications", {
            type: "post",
            title: sanitize.text(fields.title),
            content: sanitize.text(fields.content)
        })
            .then(() => res = true)
            .catch(e => {
                console.log(e);
                res = false;
            });
        return res;
    }
}
