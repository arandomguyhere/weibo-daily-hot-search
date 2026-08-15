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

1. [谢霆锋王菲情侣手镯 (Nicholas Tse and Faye Wong couple bracelets)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%8E%8B%E8%8F%B2%E6%83%85%E4%BE%A3%E6%89%8B%E9%95%AF%23) `268.9K 🔥` `NEW`
1. [复联5新预告](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E8%81%945%E6%96%B0%E9%A2%84%E5%91%8A%23) `231.6K 🔥` `NEW`
1. [登陆少年谈粉丝关系](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E8%B0%88%E7%B2%89%E4%B8%9D%E5%85%B3%E7%B3%BB%23) `181.0K 🔥` `NEW`
1. [19岁亚马尔举办盛大派对庆生](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%BE%E5%8A%9E%E7%9B%9B%E5%A4%A7%E6%B4%BE%E5%AF%B9%E5%BA%86%E7%94%9F%23) `176.2K 🔥` `NEW`
1. [真正的情绪稳定是什么样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%83%85%E7%BB%AA%E7%A8%B3%E5%AE%9A%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `167.0K 🔥` `NEW`
1. [X战警](https://s.weibo.com/weibo?q=%23X%E6%88%98%E8%AD%A6%23) `158.3K 🔥` `NEW`
1. [东契奇谈詹姆斯离队](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E8%B0%88%E8%A9%B9%E5%A7%86%E6%96%AF%E7%A6%BB%E9%98%9F%23) `156.8K 🔥` `NEW`
1. [牛来票房破10万 (Niulai’s box office exceeded 100,000)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E7%A5%A8%E6%88%BF%E7%A0%B410%E4%B8%87%23) `1.4M 🔥` `+195%`
1. [国乐收官全员举杯简醇音乐瓶 (At the end of the traditional Chinese music, everyone raised their glasses to simple music bottles)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%90%E6%94%B6%E5%AE%98%E5%85%A8%E5%91%98%E4%B8%BE%E6%9D%AF%E7%AE%80%E9%86%87%E9%9F%B3%E4%B9%90%E7%93%B6%23) `949.3K 🔥` `+174%`
1. [牛来传到韩国了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E4%BC%A0%E5%88%B0%E9%9F%A9%E5%9B%BD%E4%BA%86%23) `622.8K 🔥` `+184%`
1. [王嘉尔吃自己的瓜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `555.0K 🔥` `+48%`
1. [曝内娱把热度高的大IP拍完了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%86%85%E5%A8%B1%E6%8A%8A%E7%83%AD%E5%BA%A6%E9%AB%98%E7%9A%84%E5%A4%A7IP%E6%8B%8D%E5%AE%8C%E4%BA%86%23) `544.7K 🔥` `+47%`
1. [旺旺回应网友集体呼吁减糖 (Want Want responds to netizens’ collective call to reduce sugar)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E5%9B%9E%E5%BA%94%E7%BD%91%E5%8F%8B%E9%9B%86%E4%BD%93%E5%91%BC%E5%90%81%E5%87%8F%E7%B3%96%23) `499.8K 🔥` `+61%`
1. [短剧 按摩大脑](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E6%8C%89%E6%91%A9%E5%A4%A7%E8%84%91%23) `497.5K 🔥` `+53%`
1. [章若楠被直播间美颜吓到](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%A2%AB%E7%9B%B4%E6%92%AD%E9%97%B4%E7%BE%8E%E9%A2%9C%E5%90%93%E5%88%B0%23) `361.5K 🔥` `+58%`
1. [35岁男子第二性征没发育尴尬看儿科](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%94%B7%E5%AD%90%E7%AC%AC%E4%BA%8C%E6%80%A7%E5%BE%81%E6%B2%A1%E5%8F%91%E8%82%B2%E5%B0%B4%E5%B0%AC%E7%9C%8B%E5%84%BF%E7%A7%91%23) `224.4K 🔥` `+32%`
1. [跟领导沟通最有效的方式 (The most effective way to communicate with leaders)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E9%A2%86%E5%AF%BC%E6%B2%9F%E9%80%9A%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E6%96%B9%E5%BC%8F%23) `223.0K 🔥` `+39%`
1. [旺旺 配料表 (Wangwang ingredient list)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%20%E9%85%8D%E6%96%99%E8%A1%A8%23) `2.4M 🔥`
1. [中国China成为潮流 (China China has become a trend)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDChina%E6%88%90%E4%B8%BA%E6%BD%AE%E6%B5%81%23) `1.3M 🔥`
1. [超话同人绘画大赛 (Super Talk Fan Drawing Contest)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%AF%9D%E5%90%8C%E4%BA%BA%E7%BB%98%E7%94%BB%E5%A4%A7%E8%B5%9B%23) `1.2M 🔥`
1. [妈妈去世多少年才能不难过](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%8E%BB%E4%B8%96%E5%A4%9A%E5%B0%91%E5%B9%B4%E6%89%8D%E8%83%BD%E4%B8%8D%E9%9A%BE%E8%BF%87%23) `1.2M 🔥`
1. [手机涨得快买不起了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E5%BE%97%E5%BF%AB%E4%B9%B0%E4%B8%8D%E8%B5%B7%E4%BA%86%23) `598.8K 🔥`
1. [终于知道为什么戴眼镜是斜的了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%B4%E7%9C%BC%E9%95%9C%E6%98%AF%E6%96%9C%E7%9A%84%E4%BA%86%23) `558.8K 🔥`
1. [牛来 (Niu Lai)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%23) `484.9K 🔥`
1. [天津已经进化成这样了吗](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `374.6K 🔥`
1. [谢霆锋二儿子近照曝光 (Recent photos of Nicholas Tse’s second son exposed)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E4%BA%8C%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%E6%9B%9D%E5%85%89%23) `320.1K 🔥`
1. [不要和锅品差的人吃火锅](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%92%8C%E9%94%85%E5%93%81%E5%B7%AE%E7%9A%84%E4%BA%BA%E5%90%83%E7%81%AB%E9%94%85%23) `299.0K 🔥`
1. [九门大结局](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%A4%A7%E7%BB%93%E5%B1%80%23) `270.1K 🔥`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `269.8K 🔥`
1. [答应保姆涨薪后反手让她带薪休假 (Promised a salary increase to the nanny, then gave her paid leave)](https://s.weibo.com/weibo?q=%23%E7%AD%94%E5%BA%94%E4%BF%9D%E5%A7%86%E6%B6%A8%E8%96%AA%E5%90%8E%E5%8F%8D%E6%89%8B%E8%AE%A9%E5%A5%B9%E5%B8%A6%E8%96%AA%E4%BC%91%E5%81%87%23) `269.4K 🔥`
1. [年轻人猝死大多有两个共性 (Sudden death among young people mostly has two characteristics in common:)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%8C%9D%E6%AD%BB%E5%A4%A7%E5%A4%9A%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%85%B1%E6%80%A7%23) `268.3K 🔥`
1. [金泰妍瘦成纸片了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E5%A6%8D%E7%98%A6%E6%88%90%E7%BA%B8%E7%89%87%E4%BA%86%23) `267.9K 🔥`
1. [宋雨琦腿伤](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%85%BF%E4%BC%A4%23) `261.1K 🔥`
1. [00后不急着考驾照了 (People born after 00 are no longer in a hurry to get a driver’s license.)](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E4%B8%8D%E6%80%A5%E7%9D%80%E8%80%83%E9%A9%BE%E7%85%A7%E4%BA%86%23) `224.4K 🔥`
1. [还能活51年却只有21天自由支配的时间](https://s.weibo.com/weibo?q=%23%E8%BF%98%E8%83%BD%E6%B4%BB51%E5%B9%B4%E5%8D%B4%E5%8F%AA%E6%9C%8921%E5%A4%A9%E8%87%AA%E7%94%B1%E6%94%AF%E9%85%8D%E7%9A%84%E6%97%B6%E9%97%B4%23) `224.4K 🔥`
1. [他再爱你也给不出那些东西](https://s.weibo.com/weibo?q=%23%E4%BB%96%E5%86%8D%E7%88%B1%E4%BD%A0%E4%B9%9F%E7%BB%99%E4%B8%8D%E5%87%BA%E9%82%A3%E4%BA%9B%E4%B8%9C%E8%A5%BF%23) `206.3K 🔥`
1. [张雅琪 湖南卫视下场 (Zhang Yaqi’s end at Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `203.0K 🔥`
1. [徐艺洋和黄子韬老鼠干走红毯](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%92%8C%E9%BB%84%E5%AD%90%E9%9F%AC%E8%80%81%E9%BC%A0%E5%B9%B2%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `202.8K 🔥`
1. [健身的人懂得别太多了](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E7%9A%84%E4%BA%BA%E6%87%82%E5%BE%97%E5%88%AB%E5%A4%AA%E5%A4%9A%E4%BA%86%23) `198.1K 🔥`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `183.4K 🔥`
1. [印尼7.7级地震](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `181.8K 🔥`
1. [九门 (nine gates)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `173.1K 🔥`
1. [张雅琪综艺被逐帧审判引热议](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E7%BB%BC%E8%89%BA%E8%A2%AB%E9%80%90%E5%B8%A7%E5%AE%A1%E5%88%A4%E5%BC%95%E7%83%AD%E8%AE%AE%23) `168.1K 🔥`
1. [路虎BBA保时捷价格大跳水 (Land Rover BBA Porsche prices plummet)](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8EBBA%E4%BF%9D%E6%97%B6%E6%8D%B7%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `157.8K 🔥`
1. [旺旺最大的对手竟是糖](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E5%AF%B9%E6%89%8B%E7%AB%9F%E6%98%AF%E7%B3%96%23) `154.9K 🔥`
1. [国乒男单全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `1.2M 🔥` `-22%`
1. [胖东来首批刑释职工30人无一离职](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A6%96%E6%89%B9%E5%88%91%E9%87%8A%E8%81%8C%E5%B7%A530%E4%BA%BA%E6%97%A0%E4%B8%80%E7%A6%BB%E8%81%8C%23) `954.8K 🔥` `-23%`
1. [日本 拜鬼 (japan ghost worship)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%20%E6%8B%9C%E9%AC%BC%23) `935.2K 🔥` `-21%`
1. [高市早苗称日本将成为灯塔](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E6%97%A5%E6%9C%AC%E5%B0%86%E6%88%90%E4%B8%BA%E7%81%AF%E5%A1%94%23) `243.9K 🔥` `-21%`
1. [网友集体呼吁旺旺减糖](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%9B%86%E4%BD%93%E5%91%BC%E5%90%81%E6%97%BA%E6%97%BA%E5%87%8F%E7%B3%96%23) `228.1K 🔥` `-23%`
1. [AG用时5分57秒结束比赛破纪录](https://s.weibo.com/weibo?q=%23AG%E7%94%A8%E6%97%B65%E5%88%8657%E7%A7%92%E7%BB%93%E6%9D%9F%E6%AF%94%E8%B5%9B%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `224.4K 🔥` `-43%`
1. [陈浚铭踢腿陈思罕刘海飞了 (Chen Junming kicked Chen Sihan and his bangs flew off)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E8%B8%A2%E8%85%BF%E9%99%88%E6%80%9D%E7%BD%95%E5%88%98%E6%B5%B7%E9%A3%9E%E4%BA%86%23) `180.8K 🔥` `-22%`

Updated at 2026-08-15 13:57:43

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
