import { App } from '@slack/bolt'
import { SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET } from './util/secrets'

export const app = new App({
  token: SLACK_BOT_TOKEN,
  signingSecret: SLACK_SIGNING_SECRET,
});

export const port = process.env.PORT ? Number(process.env.PORT) : 3000;
