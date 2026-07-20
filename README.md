# Weibo Signal Tracker

Narrative signal monitoring system that tracks Weibo trending search data with velocity analysis and lifecycle detection.

## Live Demo

**[https://arandomguyhere.github.io/weibo-daily-hot-search](https://arandomguyhere.github.io/weibo-daily-hot-search)**

Browse historical trending data with status badges, velocity indicators, and category filters.

## Features

- **Signal tracking**: Scrapes Weibo trending every 5 minutes, tracks up to 100 topics per day
- **Lifecycle detection**: Each topic tagged as `NEW`, `RISING`, `HOT`, `FALLING`, or `GONE`
- **Velocity analysis**: Percentage change between scrapes shows acceleration/deceleration
- **Suppression detection**: Topics that disappear from the feed are marked as `GONE`
- **English translations**: Auto-translated via Google Translate for non-Chinese readers
- **Dark mode + filters**: Filter by status category, search by Chinese or English text
- **Engagement metrics**: Top topics enriched with likes, comments, and reposts from related posts

## Today's Hot Searches

<!-- BEGIN -->

1. [亚马尔和蒙牛有个冠军的新秘密 (Yamal and Mengniu have a new secret to becoming champions)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%92%8C%E8%92%99%E7%89%9B%E6%9C%89%E4%B8%AA%E5%86%A0%E5%86%9B%E7%9A%84%E6%96%B0%E7%A7%98%E5%AF%86%23) `4.3M 🔥` `NEW`
1. [阿根廷 脏](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `4.2M 🔥` `NEW`
1. [阿根廷球员打人](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E5%91%98%E6%89%93%E4%BA%BA%23) `2.9M 🔥` `NEW`
1. [河南一网民造谣热死3人被行拘](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A3%E7%83%AD%E6%AD%BB3%E4%BA%BA%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `1.3M 🔥` `NEW`
1. [王俊凯工作室必有高人指点](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%BF%85%E6%9C%89%E9%AB%98%E4%BA%BA%E6%8C%87%E7%82%B9%23) `743.4K 🔥` `NEW`
1. [阿根廷主帅泪崩](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E6%B3%AA%E5%B4%A9%23) `733.1K 🔥` `NEW`
1. [库巴西获世界杯最佳新人](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%B7%B4%E8%A5%BF%E8%8E%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E4%BD%B3%E6%96%B0%E4%BA%BA%23) `728.8K 🔥` `NEW`
1. [千金谢尔巴科娃订婚](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%87%91%E8%B0%A2%E5%B0%94%E5%B7%B4%E7%A7%91%E5%A8%83%E8%AE%A2%E5%A9%9A%23) `724.1K 🔥` `NEW`
1. [黄总请你去包厢涉事餐厅道歉停业](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%80%BB%E8%AF%B7%E4%BD%A0%E5%8E%BB%E5%8C%85%E5%8E%A2%E6%B6%89%E4%BA%8B%E9%A4%90%E5%8E%85%E9%81%93%E6%AD%89%E5%81%9C%E4%B8%9A%23) `709.7K 🔥` `NEW`
1. [正义必胜](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E4%B9%89%E5%BF%85%E8%83%9C%23) `707.0K 🔥` `NEW`
1. [钟汉良翻红 (Chung Han-liang becomes famous)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%B1%89%E8%89%AF%E7%BF%BB%E7%BA%A2%23) `702.7K 🔥` `NEW`
1. [克罗斯赛后发文足球赢了](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E6%96%AF%E8%B5%9B%E5%90%8E%E5%8F%91%E6%96%87%E8%B6%B3%E7%90%83%E8%B5%A2%E4%BA%86%23) `698.8K 🔥` `NEW`
1. [白鹿完全王韵娜](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AE%8C%E5%85%A8%E7%8E%8B%E9%9F%B5%E5%A8%9C%23) `693.8K 🔥` `NEW`
1. [蒙淇淇问张凌赫脸放短国能打吗](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E9%97%AE%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%84%B8%E6%94%BE%E7%9F%AD%E5%9B%BD%E8%83%BD%E6%89%93%E5%90%97%23) `690.5K 🔥` `NEW`
1. [两家央企宣布增持中国股票](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%AE%B6%E5%A4%AE%E4%BC%81%E5%AE%A3%E5%B8%83%E5%A2%9E%E6%8C%81%E4%B8%AD%E5%9B%BD%E8%82%A1%E7%A5%A8%23) `689.6K 🔥` `NEW`
1. [来不及说我爱你比何以笙箫默还绝](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%8D%E5%8F%8A%E8%AF%B4%E6%88%91%E7%88%B1%E4%BD%A0%E6%AF%94%E4%BD%95%E4%BB%A5%E7%AC%99%E7%AE%AB%E9%BB%98%E8%BF%98%E7%BB%9D%23) `675.8K 🔥` `NEW`
1. [伊朗导弹击中约旦美军基地瞬间](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E7%BA%A6%E6%97%A6%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E7%9E%AC%E9%97%B4%23) `671.3K 🔥` `NEW`
1. [亚马尔最年轻双冠王](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E6%9C%80%E5%B9%B4%E8%BD%BB%E5%8F%8C%E5%86%A0%E7%8E%8B%23) `656.7K 🔥` `NEW`
1. [发现减肥真的有滞后性](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%87%8F%E8%82%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E6%BB%9E%E5%90%8E%E6%80%A7%23) `639.9K 🔥` `NEW`
1. [贾斯汀比伯世界杯演唱](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%96%AF%E6%B1%80%E6%AF%94%E4%BC%AF%E4%B8%96%E7%95%8C%E6%9D%AF%E6%BC%94%E5%94%B1%23) `637.2K 🔥` `NEW`
1. [澎湖海战 (Battle of Penghu)](https://s.weibo.com/weibo?q=%23%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%23) `627.4K 🔥` `NEW`
1. [王俊凯谁搭配的出来挨夸](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B0%81%E6%90%AD%E9%85%8D%E7%9A%84%E5%87%BA%E6%9D%A5%E6%8C%A8%E5%A4%B8%23) `622.6K 🔥` `NEW`
1. [很诡异公司的每个女性都在减肥](https://s.weibo.com/weibo?q=%23%E5%BE%88%E8%AF%A1%E5%BC%82%E5%85%AC%E5%8F%B8%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%A5%B3%E6%80%A7%E9%83%BD%E5%9C%A8%E5%87%8F%E8%82%A5%23) `619.9K 🔥` `NEW`
1. [钟汉良李小冉旧作翻红](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%B1%89%E8%89%AF%E6%9D%8E%E5%B0%8F%E5%86%89%E6%97%A7%E4%BD%9C%E7%BF%BB%E7%BA%A2%23) `613.1K 🔥` `NEW`
1. [18岁职高生沉溺游戏吞18粒退烧药](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E8%81%8C%E9%AB%98%E7%94%9F%E6%B2%89%E6%BA%BA%E6%B8%B8%E6%88%8F%E5%90%9E18%E7%B2%92%E9%80%80%E7%83%A7%E8%8D%AF%23) `600.4K 🔥` `NEW`
1. [樊振东说要给阿根廷尊重](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AF%B4%E8%A6%81%E7%BB%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%B0%8A%E9%87%8D%23) `599.4K 🔥` `NEW`
1. [姆巴佩金靴 (Mbappe golden boots)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%87%91%E9%9D%B4%23) `9.2M 🔥` `+81%`
1. [现在的女装有种大家都不用上班的感觉](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%A5%B3%E8%A3%85%E6%9C%89%E7%A7%8D%E5%A4%A7%E5%AE%B6%E9%83%BD%E4%B8%8D%E7%94%A8%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%84%9F%E8%A7%89%23) `659.1K 🔥` `+178%`
1. [走读汕头的侨乡家国情 (Read about the national conditions of overseas Chinese in Shantou)](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E8%AF%BB%E6%B1%95%E5%A4%B4%E7%9A%84%E4%BE%A8%E4%B9%A1%E5%AE%B6%E5%9B%BD%E6%83%85%23) `4.4M 🔥`
1. [西班牙阿根廷赛后打起来了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B5%9B%E5%90%8E%E6%89%93%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `2.9M 🔥`
1. [西班牙冠军 (spanish champion)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%A0%E5%86%9B%23) `5.4M 🔥` `-71%`
1. [来不及说我爱你 (Too late to say I love you)](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%8D%E5%8F%8A%E8%AF%B4%E6%88%91%E7%88%B1%E4%BD%A0%23) `740.7K 🔥` `-72%`
1. [西班牙夺冠含金量太高了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E5%90%AB%E9%87%91%E9%87%8F%E5%A4%AA%E9%AB%98%E4%BA%86%23) `738.0K 🔥` `-79%`
1. [阿根廷队哭了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%93%AD%E4%BA%86%23) `730.8K 🔥` `-67%`
1. [劝告大家聊天记录真不能删除 (I advise you not to delete chat history.)](https://s.weibo.com/weibo?q=%23%E5%8A%9D%E5%91%8A%E5%A4%A7%E5%AE%B6%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E7%9C%9F%E4%B8%8D%E8%83%BD%E5%88%A0%E9%99%A4%23) `721.0K 🔥` `-72%`
1. [男子闪婚后发现妻子吸毒坐牢患梅毒 (After a flash marriage, a man discovered that his wife was taking drugs and was in jail with syphilis)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%97%AA%E5%A9%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%A6%BB%E5%AD%90%E5%90%B8%E6%AF%92%E5%9D%90%E7%89%A2%E6%82%A3%E6%A2%85%E6%AF%92%23) `717.1K 🔥` `-71%`
1. [夏奇拉好美](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A5%87%E6%8B%89%E5%A5%BD%E7%BE%8E%23) `713.7K 🔥` `-72%`
1. [佛得角含金量](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%90%AB%E9%87%91%E9%87%8F%23) `684.2K 🔥` `-70%`
1. [澎湖海战 撤档](https://s.weibo.com/weibo?q=%23%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%20%E6%92%A4%E6%A1%A3%23) `679.3K 🔥` `-75%`
1. [王一博你让多少人脸红了 (Wang Yibo, how many people have you made blush?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BD%A0%E8%AE%A9%E5%A4%9A%E5%B0%91%E4%BA%BA%E8%84%B8%E7%BA%A2%E4%BA%86%23) `673.2K 🔥` `-73%`
1. [苏醒恭喜西班牙队](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E6%81%AD%E5%96%9C%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%9F%23) `665.2K 🔥` `-73%`
1. [世界杯最新冠军榜](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E6%96%B0%E5%86%A0%E5%86%9B%E6%A6%9C%23) `663.3K 🔥` `-68%`
1. [坦克300献给都市年轻人的脚办](https://s.weibo.com/weibo?q=%23%E5%9D%A6%E5%85%8B300%E7%8C%AE%E7%BB%99%E9%83%BD%E5%B8%82%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E8%84%9A%E5%8A%9E%23) `651.0K 🔥` `-73%`
1. [西班牙vs阿根廷 (Spain vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `647.6K 🔥` `-74%`
1. [特朗普为西班牙颁奖](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%BA%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A2%81%E5%A5%96%23) `646.4K 🔥` `-75%`
1. [罗德里获世界杯金球奖](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BE%B7%E9%87%8C%E8%8E%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E9%87%91%E7%90%83%E5%A5%96%23) `634.1K 🔥` `-76%`
1. [再诱人也别碰的十大街边小吃](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%AF%B1%E4%BA%BA%E4%B9%9F%E5%88%AB%E7%A2%B0%E7%9A%84%E5%8D%81%E5%A4%A7%E8%A1%97%E8%BE%B9%E5%B0%8F%E5%90%83%23) `630.1K 🔥` `-72%`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `617.2K 🔥` `-75%`
1. [孩子攀爬公园幕布家长全程旁观](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%94%80%E7%88%AC%E5%85%AC%E5%9B%AD%E5%B9%95%E5%B8%83%E5%AE%B6%E9%95%BF%E5%85%A8%E7%A8%8B%E6%97%81%E8%A7%82%23) `609.9K 🔥` `-73%`
1. [美国打伊朗越打越尴尬](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%89%93%E4%BC%8A%E6%9C%97%E8%B6%8A%E6%89%93%E8%B6%8A%E5%B0%B4%E5%B0%AC%23) `606.1K 🔥` `-75%`
1. [恩佐两黄变一红](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E4%B8%A4%E9%BB%84%E5%8F%98%E4%B8%80%E7%BA%A2%23) `596.1K 🔥` `-78%`
1. [西班牙阿根廷冲突](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B2%E7%AA%81%23) `590.1K 🔥` `-78%`

Updated at 2026-07-20 09:07:56

<!-- END -->

## Data Reference

### Directory Structure

```
├── raw/                    # Raw JSON data
│   └── YYYY-MM-DD.json     # Daily hot search data
├── index.html              # GitHub Pages frontend
├── mod.ts                  # Scraping script (Deno)
├── bridge.py               # Data bridge to WeiboInsight/MongoDB
└── WeiboInsight/           # Submodule: Playwright-based deep analysis
```

### Data Format

Daily JSON format (`raw/YYYY-MM-DD.json`):

```json
[
  {
    "url": "/weibo?q=%23Topic%23",
    "text": "Topic",
    "textEn": "Topic in English",
    "count": 1234567,
    "firstSeen": "2026-02-07T08:15:00.000Z",
    "peakCount": 1500000,
    "prevCount": 900000,
    "status": "rising",
    "velocity": 37,
    "engagement": { "posts": 15, "likes": 45200, "comments": 3100, "reposts": 8900 }
  }
]
```

| Field | Description |
|-------|-------------|
| `url` | Weibo search link path |
| `text` | Trending topic text (Chinese) |
| `textEn` | English translation (optional) |
| `count` | Heat value from Weibo API |
| `firstSeen` | ISO timestamp when topic first appeared today |
| `peakCount` | Highest count recorded for this topic today |
| `prevCount` | Count from previous scrape cycle |
| `status` | Lifecycle stage: `new`, `rising`, `hot`, `falling`, `gone` |
| `velocity` | Percentage change from previous scrape |
| `engagement` | Post engagement metrics (top 10 topics): posts, likes, comments, reposts |

## Tech Stack

- **Runtime**: [Deno](https://deno.land/)
- **Automation**: GitHub Actions (cron)
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Hosting**: GitHub Pages

## Local Development

```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Run the scraper
deno run --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
```

## WeiboInsight Integration

This project includes [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) as a submodule for deep NLP analysis of trending topics.

**What each project does:**
- **weibo-daily-hot-search** — Lightweight Deno scraper that tracks trending topics every 5 min via JSON APIs, with lifecycle/velocity analysis
- **WeiboInsight** — Python/Playwright-based scraper with Scrapy pipelines, MongoDB storage, Jieba segmentation, LDA topic modeling, and K-Means clustering

**How they connect:**
1. This scraper collects trending topics + engagement data every 5 minutes
2. `bridge.py` imports the JSON data into MongoDB with text segmentation
3. WeiboInsight's `analyze_weibo_data.py` runs NLP analysis on the imported data

```bash
# Setup
git submodule update --init
cd WeiboInsight && pip install -r requirements.txt && cd ..
pip install pymongo jieba

# Import data into MongoDB
python bridge.py --all

# Run NLP analysis
cd WeiboInsight/scrapy_project
python analyze_weibo_data.py
```

## Related Projects

- [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) — Playwright-based Weibo CTI analysis
- [V2EX Daily Hot Topics](https://github.com/boojack/v2ex-daily-hot-topic)
- [jackylee1/weibo-daily-hot-search](https://github.com/jackylee1/weibo-daily-hot-search) — Original project

## License

MIT
