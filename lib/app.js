"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.client = exports.app = void 0;
const bolt_1 = require("@slack/bolt");
const twitter_1 = __importDefault(require("twitter"));
const secrets_1 = require("./util/secrets");
exports.app = new bolt_1.App({
    token: secrets_1.SLACK_BOT_TOKEN,
    signingSecret: secrets_1.SLACK_SIGNING_SECRET,
});
exports.client = new twitter_1.default({
    consumer_key: secrets_1.consumer_key,
    consumer_secret: secrets_1.consumer_secret,
    access_token_key: secrets_1.access_token_key,
    access_token_secret: secrets_1.access_token_secret
});
exports.port = process.env.PORT ? Number(process.env.PORT) : 3000;
