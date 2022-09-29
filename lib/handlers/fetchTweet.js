"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTweetList = void 0;
const app_1 = require("../app");
const fetchTweetList = async (hashTag, say) => {
    try {
        const hashTagTxt = hashTag ? hashTag : 'ふっけのせい';
        app_1.client.get('search/tweets', { 'q': `#${hashTagTxt}`, 'count': 10 }, async (error, data) => {
            const res = data.statuses;
            if (!Array.isArray(res) || res.length === 0)
                return say('該当のツイートはありません');
            await res.forEach((item) => {
                if (item.text.substring(0, 2) !== 'RT') {
                    const url = `https://twitter.com/${item.user.screen_name}/status/${item.id_str}`;
                    say(url);
                }
            });
        });
    }
    catch (error) {
        console.log(error);
        throw new Error('fetchTweetList func');
    }
};
exports.fetchTweetList = fetchTweetList;
