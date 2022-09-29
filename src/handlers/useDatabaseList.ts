import { Client } from "@notionhq/client";
import { SayFn } from "@slack/bolt";

export const useDatabaseList = async (hashTag: string, say: SayFn) => {
  try {
    const notion = new Client({ auth: process.env.NOTION_KEY })

    const res = await notion.databases.query({
      database_id: process.env.DATABASE_ID as string,
      filter: {
        property: "Tags",
        multi_select: {
          contains: "Event"
        }
      }
    })

    say(JSON.stringify(res))
  } catch (error) {
    console.log(error)
    console.error('useDatabaseList func')
  }
}
