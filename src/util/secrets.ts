import 'dotenv/config'

export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN as string
export const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET as string
export const NOTION_KEY = process.env.NOTION_KEY as string
export const DATABASE_ID = process.env.DATABASE_ID as string

if (!SLACK_BOT_TOKEN) throw new Error('No client secret. Set SLACK_BOT_TOKEN env')
if (!SLACK_SIGNING_SECRET) throw new Error('No client secret. Set SLACK_SIGNING_SECRET env')
if (!NOTION_KEY) throw new Error('No client secret. Set NOTION_KEY env')
if (!DATABASE_ID) throw new Error('No client secret. Set DATABASE_ID env')
