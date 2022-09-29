import 'dotenv/config'

export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN as string
export const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET as string

export const consumer_key = process.env.consumer_key as string
export const consumer_secret = process.env.consumer_secret as string
export const access_token_key = process.env.access_token_key as string
export const access_token_secret = process.env.access_token_secret as string

if (!SLACK_BOT_TOKEN) throw new Error('No client secret. Set SLACK_BOT_TOKEN env')
if (!SLACK_SIGNING_SECRET) throw new Error('No client secret. Set SLACK_SIGNING_SECRET env')
if (!consumer_key) throw new Error('No client secret. Set consumer_key env')
if (!consumer_secret) throw new Error('No client secret. Set consumer_secret env')
if (!access_token_key) throw new Error('No client secret. Set access_token_key env')
if (!access_token_secret) throw new Error('No client secret. Set access_token_secret env')
