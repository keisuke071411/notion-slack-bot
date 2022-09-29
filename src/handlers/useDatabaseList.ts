import { Client } from "@notionhq/client";
import { SayFn } from "@slack/bolt";

export const useDatabaseList = async (tag: string, say: SayFn) => {
  try {
    const notion = new Client({ auth: process.env.NOTION_KEY })

    if (!tag) throw new Error("No filter tag")

    const res = await notion.databases.query({
      database_id: process.env.DATABASE_ID as string,
      filter: {
        property: "Tags",
        multi_select: {
          contains: tag
        }
      }
    })

    if (!res) throw new Error("unCatch notion List")

    // @ts-ignore
    const message = res.results.map((snapshot) => snapshot.properties.Name.title[0].text.content)
    say(JSON.stringify(message))
  } catch (error: unknown) {
    console.log(error)
    console.error('useDatabaseList func')
    if (error instanceof Error) {
      say(error.message)
    }
  }
}
