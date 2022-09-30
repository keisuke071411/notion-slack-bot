import { app, port } from './app';
import { NOTION_STATUS_LIST } from './constant';
import { useDatabaseList } from './handlers/useDatabaseList'

// HTTPサーバーとして起動
(async () => {
  await app.start(port)

  console.log(`Listening for events on ${port}`);
  console.log("🤖 SlackBot is running!");
})();

// 特定のタグのタスクを取得する
app.command('/get_notion', async ({ body, ack, say }) => {
  const { getNotionList } = useDatabaseList()

  try {
    await ack();
    getNotionList(body.text, say);
  } catch (error) {
    console.log(error);
  }
})

// タスクを作成する
app.command('/create_notion', async ({ body, ack, say }) => {
  const { createNotion } = useDatabaseList()

  try {
    await ack();
    await createNotion(body.text, say);
  } catch (error) {
    console.log(error);
  }
})

// タスクをアプデする
app.command('/update_notion', async ({ ack, say }) => {
  try {
    await ack();
    await say({
      blocks: NOTION_STATUS_LIST
    });
  } catch (error) {
    console.log(error);
  }
})

// タスクを削除する
app.command('/delete_notion', async ({ body, ack, say }) => {
  const { deleteNotion } = useDatabaseList()
  try {
    await ack();
    await deleteNotion(body.text, say)
  } catch (error) {
    console.log(error);
  }
})

app.action("update_notion", async ({ body, ack, say }) => {
  const { updateNotion } = useDatabaseList()

  try {
    await ack();
    // @ts-ignore
    await updateNotion("30208525664c45ebbf53453d68be80ed", body.actions[0].selected_option.value, say)
  } catch (error) {
    console.log(error);
  }
})
