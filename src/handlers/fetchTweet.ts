import { SayFn } from "@slack/bolt";
import { client } from "../app";

export const fetchTweetList = async (hashTag: string, say: SayFn) => {
  try {
    const hashTagTxt = hashTag ? hashTag : 'ふっけのせい'

    client.get('search/tweets', { 'q': `#${hashTagTxt}`, 'count': 10 }, async (error, data) => {
      const res = data.statuses

      if (!Array.isArray(res) || res.length === 0) return say('該当のツイートはありません')

      await res.forEach((item: any) => {
        if (item.text.substring(0, 2) !== 'RT') {
          const url = `https://twitter.com/${item.user.screen_name}/status/${item.id_str}`
          say(url)
        }
      })
    })
  } catch (error) {
    console.log(error)
    throw new Error('fetchTweetList func')
  }
}
