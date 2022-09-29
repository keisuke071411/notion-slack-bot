import { App } from '@slack/bolt'
import Twitter from 'twitter'
import { SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET, consumer_key, consumer_secret, access_token_key, access_token_secret } from './util/secrets'

export const app = new App({
  token: SLACK_BOT_TOKEN,
  signingSecret: SLACK_SIGNING_SECRET,
});

export const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
});

export const port = process.env.PORT ? Number(process.env.PORT) : 3000;
