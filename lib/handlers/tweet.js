"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweetStatusesUpdate = void 0;
const app_1 = require("../app");
const tweetStatusesUpdate = async (sendText) => {
    try {
        await app_1.client.post("statuses/update", {
            status: sendText,
        });
    }
    catch (err) {
        console.error(err);
        throw new Error('tweetStatusesUpdate func');
    }
};
exports.tweetStatusesUpdate = tweetStatusesUpdate;
