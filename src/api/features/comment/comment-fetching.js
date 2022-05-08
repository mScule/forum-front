/*
    Comment fetching api access.
*/

"use strict";

import apiAxios from "@/api/api-axios";

export default {
    postReplies: async (fields) => {
        const req = apiAxios.createInstance();
        let res;
        await req.get("/publications", {
            params: {
                private: "0",
                publication_id: "any",
                user_id: "any",
                type: "comment",
                title: "any",
                content: "any",
                reply_to_id: fields.postId,
            }
        })
            .then(posts => res = posts)
            .catch(e => {
                console.log(e);
                res = false;
            });

        const comments = [];

        if (typeof res.data === "object" && res.data.length > 0) {
            for (let comment of res.data) {
                // Username
                const user = await req.get("/users", {
                    params: {
                        get_current_user: false,
                        disabled: "",
                        user_id: comment.user_id,
                        name: "any",
                        email: "any",
                        password: "any",
                    }
                });

                comment.name = user.data[0].name;
                comments.push(comment);
            }
        }

        if (comments.length !== 0)
            res = comments;
        return res;
    }
}
