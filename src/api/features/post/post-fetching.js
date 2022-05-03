"use strict";

import apiAxios from "@/api/api-axios";

export default {
    fetchAll: async () => {
        const req = apiAxios.createInstance();
        let res;
        await req.get("/publications", {
            params: {
                private: "",
                publication_id: "any",
                user_id: "any",
                type: "post",
                title: "any",
                content: "any"
            }
        })
            .then(posts => res = posts)
            .catch(e => {
                console.log(e);
                res = false;
            });

        const posts = [];

        for(let post of res.data) {
            // Username
            const user = await req.get("/users", {
                params: {
                    get_current_user: false,
                    disabled: "",
                    user_id: post.user_id,
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

            post.name = user.data[0].name;
            post.upvotes = upvotes;
            post.downvotes = downvotes;

            posts.push(post);
        }
        return posts;
    }
}
