/*
    Utility for getting and setting the user related cookies.
*/

"use strict";

import cookies from "@/utilities/cookies";
import millis from "@/utilities/millis";

export default {
    hasLoggedIn() {
        if (cookies.get("forum-user-login-status"))
            return true;
        return false;
    },
    setLoginStatus(status) {
        if(status)
            cookies.set("forum-user-login-status", `${status}`, millis.fromMinutes(15));
        else
            cookies.delete("forum-user-login-status");
    },
    id() {
        const userId = cookies.get("forum-user-id");
        console.log("USER_ID", userId);
        if(userId)
            return userId;
        return false;
    },
    setUserId(id) {
        cookies.set("forum-user-id", `${id}`, millis.fromMinutes(15));
    }
}
