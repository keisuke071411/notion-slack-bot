import { app, port } from './app';
import { useDatabaseList } from './handlers/useDatabaseList'

// HTTPサーバーとして起動
(async () => {
  await app.start(port)

  console.log(`Listening for events on ${port}`);
  console.log("🤖 SlackBot is running!");
})();

// 特定のハッシュタグのツイートを取得する(最大10件)
app.command('/get_notion', async ({ body, ack, say }) => {
  try {
    await ack();
    useDatabaseList(body.text, say)
  } catch (error) {
    console.log(error)
  }
})
