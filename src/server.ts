import { app, port } from './app';
import { tweetStatusesUpdate } from './handlers/tweet'
import { fetchTweetList } from './handlers/fetchTweet'

// HTTPサーバーとして起動
(async () => {
  await app.start(port)

  console.log(`Listening for events on ${port}`);
  console.log("🤖 SlackBot is running!");
})();

// ツイートするコマンド
app.command('/tweet', async ({ body, ack, say }) => {
  try {
    await ack()
    tweetStatusesUpdate(body.text)

    say('Success for Tweet!')
  } catch (error) {
    console.log(error)
  }
});

// 特定のハッシュタグのツイートを取得する(最大10件)
app.command('/fetch', async ({ body, ack, say }) => {
  try {
    await ack()
    fetchTweetList(body.text, say)
  } catch (error) {
    console.log(error)
  }
})
