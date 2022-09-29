"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTION_KEY = exports.SLACK_SIGNING_SECRET = exports.SLACK_BOT_TOKEN = void 0;
require("dotenv/config");
exports.SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
exports.SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
exports.NOTION_KEY = process.env.NOTION_KEY;
if (!exports.SLACK_BOT_TOKEN)
    throw new Error('No client secret. Set SLACK_BOT_TOKEN env');
if (!exports.SLACK_SIGNING_SECRET)
    throw new Error('No client secret. Set SLACK_SIGNING_SECRET env');
if (!exports.NOTION_KEY)
    throw new Error('No client secret. Set NOTION_KEY env');
