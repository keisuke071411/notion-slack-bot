import { Client } from "@notionhq/client";
import { SayFn } from "@slack/bolt";

export const useDatabaseList = () => {
  const notion = new Client({ auth: process.env.NOTION_KEY })
  const databaseId = process.env.DATABASE_ID as string

  const getNotionList = async (tag: string, say: SayFn) => {
    try {

      if (!tag) throw new Error("No filter tag")

      const res = await notion.databases.query({
        database_id: databaseId,
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

  const createNotion = async (taskName: string, say: SayFn) => {
    try {
      const res = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          Name: {
            title: [
              // @ts-ignore
              {
                "text": {
                  "content": taskName
                }
              }
            ]
          }
        },
      })
      say('success!!')
    } catch (error: unknown) {
      console.log(error)
      console.error('useDatabaseList func')
      if (error instanceof Error) {
        say(error.message)
      }
    }
  }

  const deleteNotion = async (pageId: string, say: SayFn) => {
    try {
      const res = await notion.pages.update({
        page_id: pageId,
        archived: true
      })
      say('success!!')
    } catch (error: unknown) {
      console.log(error)
      console.error('useDatabaseList func')
      if (error instanceof Error) {
        say(error.message)
      }
    }
  }

  return { getNotionList, createNotion, deleteNotion }
}
