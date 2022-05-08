/*
    Post fetching api access.
*/

"use strict";

import apiAxios from "@/api/api-axios";

export default {
    fetchAll: async () => {
        const req = apiAxios.createInstance();
        let res;
        await req.get("/publications", {
            params: {
                private: "0",
                publication_id: "any",
                user_id: "any",
                type: "post",
                title: "any",
                content: "any",
                reply_to_id: "any"
            }
        })
            .then(posts => res = posts)
            .catch(e => {
                console.log(e);
                res = false;
            });

        const posts = [];

        if (typeof res.data === "object" && res.data.length > 0) {
            for (let post of res.data) {
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

                post.name = user.data[0].name;
                posts.push(post);
            }
        }

        if (posts.lenght !== 0)
            res = posts;
        return res;
    }
}
