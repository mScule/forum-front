/*
    Comment creation api access.
*/

"use strict";

import apiAxios from "@/api/api-axios";
import sanitize from "@/utilities/sanitize";

export default {
    commentCreation: async (fields) => {
        const req = apiAxios.createInstance();
        let res;
        await req.post("/publications", {
            title: "",
            type: "comment",
            content: sanitize.text(fields.userComment),
            reply_to_id: fields.postId,
        })
            .then(() => res = true)
            .catch(e => {
                console.log(e);
                res = false;
            });
        return res;
    }
}
