import { app, port } from './app';
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
