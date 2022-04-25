"use strict";

import cookies from "@/utilities/cookies";

export default {
    hasLoggedIn() {
        if (cookies.get("forum_api_key"))
            return true;
        return false;
    }
}