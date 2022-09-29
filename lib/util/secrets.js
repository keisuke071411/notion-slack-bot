"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.access_token_secret = exports.access_token_key = exports.consumer_secret = exports.consumer_key = exports.SLACK_SIGNING_SECRET = exports.SLACK_BOT_TOKEN = void 0;
require("dotenv/config");
exports.SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
exports.SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
exports.consumer_key = process.env.consumer_key;
exports.consumer_secret = process.env.consumer_secret;
exports.access_token_key = process.env.access_token_key;
exports.access_token_secret = process.env.access_token_secret;
if (!exports.SLACK_BOT_TOKEN)
    throw new Error('No client secret. Set SLACK_BOT_TOKEN env');
if (!exports.SLACK_SIGNING_SECRET)
    throw new Error('No client secret. Set SLACK_SIGNING_SECRET env');
if (!exports.consumer_key)
    throw new Error('No client secret. Set consumer_key env');
if (!exports.consumer_secret)
    throw new Error('No client secret. Set consumer_secret env');
if (!exports.access_token_key)
    throw new Error('No client secret. Set access_token_key env');
if (!exports.access_token_secret)
    throw new Error('No client secret. Set access_token_secret env');
