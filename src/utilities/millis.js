"use strict";

export default {
    fromSeconds (seconds) {
        return seconds * 1000
    },
    fromMinutes (minutes) {
        return this.fromSeconds(60) * minutes
    },
    fromHours (hours) {
        return this.fromMinutes(60) * hours
    },
    fromDays (days) {
        return this.fromHours(24) * days
    },
    fromWeeks (weeks) {
        this.fromDays(7) * weeks
    },
}