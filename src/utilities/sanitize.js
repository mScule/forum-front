"use strict";

export default {
    htmlSpecialChars(string){
        return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    },
    password(string) {
      return this.htmlSpecialChars(string);
    },
    text(string) {
        return this.htmlSpecialChars(string).trim();
    },
    email(string) {
        return this.text(string).toLowerCase();
    },
}