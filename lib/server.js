"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const tweet_1 = require("./handlers/tweet");
const fetchTweet_1 = require("./handlers/fetchTweet");
(async () => {
    await app_1.app.start(app_1.port);
    console.log(`Listening for events on ${app_1.port}`);
    console.log("🤖 SlackBot is running!");
})();
app_1.app.command('/tweet', async ({ body, ack, say }) => {
    try {
        await ack();
        (0, tweet_1.tweetStatusesUpdate)(body.text);
        say('Success for Tweet!');
    }
    catch (error) {
        console.log(error);
    }
});
app_1.app.command('/fetch', async ({ body, ack, say }) => {
    try {
        await ack();
        (0, fetchTweet_1.fetchTweetList)(body.text, say);
    }
    catch (error) {
        console.log(error);
    }
});
