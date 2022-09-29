"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const bolt_1 = require("@slack/bolt");
const secrets_1 = require("./util/secrets");
exports.app = new bolt_1.App({
    token: secrets_1.SLACK_BOT_TOKEN,
    signingSecret: secrets_1.SLACK_SIGNING_SECRET,
});
exports.port = process.env.PORT ? Number(process.env.PORT) : 3000;
