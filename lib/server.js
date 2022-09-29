"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const useDatabaseList_1 = require("./handlers/useDatabaseList");
(async () => {
    await app_1.app.start(app_1.port);
    console.log(`Listening for events on ${app_1.port}`);
    console.log("🤖 SlackBot is running!");
})();
app_1.app.command('/get_notion', async ({ body, ack, say }) => {
    try {
        await ack();
        (0, useDatabaseList_1.useDatabaseList)(body.text, say);
    }
    catch (error) {
        console.log(error);
    }
});
