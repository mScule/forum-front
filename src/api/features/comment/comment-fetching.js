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

        console.log("RESS", res);

        for(let comment of res.data) {
            console.log("COMMENT", comment);

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

            let upvotes = 0, downvotes = 0;

            /*
            // Votes
            const votes = await req.get("/votes", {
               params: {
                   user_id: "any",
                   publication_id: post.publication_id,
                   vote: "any",
               }
            });
            */

            console.log("USER", user);

            comment.name = user.data[0].name;
            comment.upvotes = upvotes;
            comment.downvotes = downvotes;

            comments.push(comment);
        }

        if (comments.length !== 0)
            res = comments;
        return res;
    }
}
