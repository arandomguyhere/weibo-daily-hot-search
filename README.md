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

1. [全妈回应全红婵退役计划 (Quan’s mother responds to Quan Hongchan’s retirement plan)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%A6%88%E5%9B%9E%E5%BA%94%E5%85%A8%E7%BA%A2%E5%A9%B5%E9%80%80%E5%BD%B9%E8%AE%A1%E5%88%92%23) `176.6K 🔥` `NEW`
1. [沈腾坦言因春晚说错词十分自责](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%9D%A6%E8%A8%80%E5%9B%A0%E6%98%A5%E6%99%9A%E8%AF%B4%E9%94%99%E8%AF%8D%E5%8D%81%E5%88%86%E8%87%AA%E8%B4%A3%23) `165.0K 🔥` `NEW`
1. [熊猫计划全家快乐开关](https://s.weibo.com/weibo?q=%23%E7%86%8A%E7%8C%AB%E8%AE%A1%E5%88%92%E5%85%A8%E5%AE%B6%E5%BF%AB%E4%B9%90%E5%BC%80%E5%85%B3%23) `156.8K 🔥` `NEW`
1. [谷爱凌说痛失2块金牌说法太荒谬](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E7%97%9B%E5%A4%B12%E5%9D%97%E9%87%91%E7%89%8C%E8%AF%B4%E6%B3%95%E5%A4%AA%E8%8D%92%E8%B0%AC%23) `115.7K 🔥` `NEW`
1. [小酒窝做管乐的花童了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%81%9A%E7%AE%A1%E4%B9%90%E7%9A%84%E8%8A%B1%E7%AB%A5%E4%BA%86%23) `72.8K 🔥` `NEW`
1. [马頔发视频炫耀李纯登上央视春晚](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%8F%91%E8%A7%86%E9%A2%91%E7%82%AB%E8%80%80%E6%9D%8E%E7%BA%AF%E7%99%BB%E4%B8%8A%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `69.8K 🔥` `NEW`
1. [女生上门做年夜饭10个菜包食材1888元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%B8%8A%E9%97%A8%E5%81%9A%E5%B9%B4%E5%A4%9C%E9%A5%AD10%E4%B8%AA%E8%8F%9C%E5%8C%85%E9%A3%9F%E6%9D%901888%E5%85%83%23) `62.2K 🔥` `NEW`
1. [宋小宝现挂](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B0%8F%E5%AE%9D%E7%8E%B0%E6%8C%82%23) `59.3K 🔥` `NEW`
1. [父母出门孩子点外卖招待亲戚](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%87%BA%E9%97%A8%E5%AD%A9%E5%AD%90%E7%82%B9%E5%A4%96%E5%8D%96%E6%8B%9B%E5%BE%85%E4%BA%B2%E6%88%9A%23) `53.3K 🔥` `NEW`
1. [李子柒在春晚后台手搓非遗饰品](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%90%E6%9F%92%E5%9C%A8%E6%98%A5%E6%99%9A%E5%90%8E%E5%8F%B0%E6%89%8B%E6%90%93%E9%9D%9E%E9%81%97%E9%A5%B0%E5%93%81%23) `52.2K 🔥` `NEW`
1. [蔡徐坤迪拜音乐节 (Cai Xukun Dubai Music Festival)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E8%BF%AA%E6%8B%9C%E9%9F%B3%E4%B9%90%E8%8A%82%23) `49.0K 🔥` `NEW`
1. [宁忠岩回应中国速滑男团铜牌](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E9%80%9F%E6%BB%91%E7%94%B7%E5%9B%A2%E9%93%9C%E7%89%8C%23) `47.2K 🔥` `NEW`
1. [本菲卡vs皇马](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E8%8F%B2%E5%8D%A1vs%E7%9A%87%E9%A9%AC%23) `47.0K 🔥` `NEW`
1. [哈梅内伊说特朗普你也做不到](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%AF%B4%E7%89%B9%E6%9C%97%E6%99%AE%E4%BD%A0%E4%B9%9F%E5%81%9A%E4%B8%8D%E5%88%B0%23) `41.7K 🔥` `NEW`
1. [谷爱凌霸气反击外国记者刁钻提问](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%9C%B8%E6%B0%94%E5%8F%8D%E5%87%BB%E5%A4%96%E5%9B%BD%E8%AE%B0%E8%80%85%E5%88%81%E9%92%BB%E6%8F%90%E9%97%AE%23) `36.7K 🔥` `NEW`
1. [我发现大多数人都不会真正的休息](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%A4%9A%E6%95%B0%E4%BA%BA%E9%83%BD%E4%B8%8D%E4%BC%9A%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%BC%91%E6%81%AF%23) `35.8K 🔥` `NEW`
1. [B站春晚 夯 (Station B Spring Festival Gala)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%A5%E6%99%9A%20%E5%A4%AF%23) `945.9K 🔥` `+38%`
1. [中国速滑男团铜牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%9F%E6%BB%91%E7%94%B7%E5%9B%A2%E9%93%9C%E7%89%8C%23) `698.4K 🔥` `+44%`
1. [2026新春走基层](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `544.9K 🔥` `+41%`
1. [宋小宝 小品翻车 (Song Xiaobao skit overturned)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B0%8F%E5%AE%9D%20%E5%B0%8F%E5%93%81%E7%BF%BB%E8%BD%A6%23) `448.9K 🔥` `+55%`
1. [B站语言类节目 赢麻了 (The language program at Station B is a winner)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E8%AF%AD%E8%A8%80%E7%B1%BB%E8%8A%82%E7%9B%AE%20%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `121.9K 🔥` `+104%`
1. [李琰教练庆祝中国队铜牌 (Coach Li Yan celebrates the bronze medal of the Chinese team)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%90%B0%E6%95%99%E7%BB%83%E5%BA%86%E7%A5%9D%E4%B8%AD%E5%9B%BD%E9%98%9F%E9%93%9C%E7%89%8C%23) `104.2K 🔥` `+74%`
1. [山东一村600多人集体磕头拜年](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%80%E6%9D%91600%E5%A4%9A%E4%BA%BA%E9%9B%86%E4%BD%93%E7%A3%95%E5%A4%B4%E6%8B%9C%E5%B9%B4%23) `77.6K 🔥` `+30%`
1. [王菲化妆师改口问就是AI (Faye Wong’s makeup artist changed her mind and asked that it was AI)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%8C%96%E5%A6%86%E5%B8%88%E6%94%B9%E5%8F%A3%E9%97%AE%E5%B0%B1%E6%98%AFAI%23) `76.2K 🔥` `+47%`
1. [今年所有法定假日全与周末重合 (All statutory holidays this year coincide with weekends)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%89%80%E6%9C%89%E6%B3%95%E5%AE%9A%E5%81%87%E6%97%A5%E5%85%A8%E4%B8%8E%E5%91%A8%E6%9C%AB%E9%87%8D%E5%90%88%23) `76.1K 🔥` `+49%`
1. [冬奥会露内衣品牌女选手引来广告商 (Brand of female athletes exposing underwear at Winter Olympics attracts advertisers)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%E9%9C%B2%E5%86%85%E8%A1%A3%E5%93%81%E7%89%8C%E5%A5%B3%E9%80%89%E6%89%8B%E5%BC%95%E6%9D%A5%E5%B9%BF%E5%91%8A%E5%95%86%23) `71.5K 🔥` `+43%`
1. [全国初二回娘家的女婿belike (The son-in-law who returned to his parents' home in the second grade of junior high school across the country belike)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%88%9D%E4%BA%8C%E5%9B%9E%E5%A8%98%E5%AE%B6%E7%9A%84%E5%A5%B3%E5%A9%BFbelike%23) `68.2K 🔥` `+37%`
1. [三文鱼其实是海底大肥猪 (Salmon is actually a big fat pig on the bottom of the sea)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%96%87%E9%B1%BC%E5%85%B6%E5%AE%9E%E6%98%AF%E6%B5%B7%E5%BA%95%E5%A4%A7%E8%82%A5%E7%8C%AA%23) `67.0K 🔥` `+28%`
1. [中国游客被困俄罗斯极光村超40小时 (Chinese tourists were trapped in Russia's Aurora Village for more than 40 hours)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%A2%AB%E5%9B%B0%E4%BF%84%E7%BD%97%E6%96%AF%E6%9E%81%E5%85%89%E6%9D%91%E8%B6%8540%E5%B0%8F%E6%97%B6%23) `66.7K 🔥` `+52%`
1. [千万别贪便宜买监控 (Don’t buy surveillance cameras for cheap)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E8%B4%AA%E4%BE%BF%E5%AE%9C%E4%B9%B0%E7%9B%91%E6%8E%A7%23) `66.3K 🔥` `+61%`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `65.1K 🔥` `+59%`
1. [马斯克机器人涉色情被爱尔兰调查](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%B6%89%E8%89%B2%E6%83%85%E8%A2%AB%E7%88%B1%E5%B0%94%E5%85%B0%E8%B0%83%E6%9F%A5%23) `63.8K 🔥` `+57%`
1. [正确走路姿势是用臀而不是腿 (Correct walking posture is to use your hips, not your legs)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E7%A1%AE%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%E6%98%AF%E7%94%A8%E8%87%80%E8%80%8C%E4%B8%8D%E6%98%AF%E8%85%BF%23) `63.6K 🔥` `+59%`
1. [B站小品 笑力竭了](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%B0%8F%E5%93%81%20%E7%AC%91%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `62.7K 🔥` `+29%`
1. [瞿颖胡兵 为啥没在一起 (Qu Ying and Hu Bing why are they not together?)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%83%A1%E5%85%B5%20%E4%B8%BA%E5%95%A5%E6%B2%A1%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `61.4K 🔥` `+32%`
1. [不是年味淡了而是轮到我们做主了 (It’s not that the spirit of the new year has faded, but that it’s our turn to make the decision)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%98%AF%E5%B9%B4%E5%91%B3%E6%B7%A1%E4%BA%86%E8%80%8C%E6%98%AF%E8%BD%AE%E5%88%B0%E6%88%91%E4%BB%AC%E5%81%9A%E4%B8%BB%E4%BA%86%23) `61.0K 🔥` `+55%`
1. [还是B站春晚敢演](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%98%AFB%E7%AB%99%E6%98%A5%E6%99%9A%E6%95%A2%E6%BC%94%23) `55.1K 🔥` `+70%`
1. [沙溢给白鹿发了多少压岁钱](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E7%BB%99%E7%99%BD%E9%B9%BF%E5%8F%91%E4%BA%86%E5%A4%9A%E5%B0%91%E5%8E%8B%E5%B2%81%E9%92%B1%23) `52.9K 🔥` `+36%`
1. [初二和初五的财神一样吗](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BA%8C%E5%92%8C%E5%88%9D%E4%BA%94%E7%9A%84%E8%B4%A2%E7%A5%9E%E4%B8%80%E6%A0%B7%E5%90%97%23) `49.4K 🔥` `+71%`
1. [母女过年炸丸子变大型翻车现场](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E8%BF%87%E5%B9%B4%E7%82%B8%E4%B8%B8%E5%AD%90%E5%8F%98%E5%A4%A7%E5%9E%8B%E7%BF%BB%E8%BD%A6%E7%8E%B0%E5%9C%BA%23) `48.0K 🔥` `+53%`
1. [成何体统 与妻书 (How decent is it to write a letter to my wife?)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E4%B8%8E%E5%A6%BB%E4%B9%A6%23) `45.1K 🔥` `+50%`
1. [王菲同款耳环官网售罄 (Faye Wong's same earrings are sold out on the official website)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%90%8C%E6%AC%BE%E8%80%B3%E7%8E%AF%E5%AE%98%E7%BD%91%E5%94%AE%E7%BD%84%23) `39.3K 🔥` `+56%`
1. [95后女生上门做年夜饭爆单月入4万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A5%B3%E7%94%9F%E4%B8%8A%E9%97%A8%E5%81%9A%E5%B9%B4%E5%A4%9C%E9%A5%AD%E7%88%86%E5%8D%95%E6%9C%88%E5%85%A54%E4%B8%87%23) `39.2K 🔥` `+27%`
1. [飞驰人生 (Flying through life)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `37.2K 🔥` `+23%`
1. [原来马生气了也会已读不回](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A9%AC%E7%94%9F%E6%B0%94%E4%BA%86%E4%B9%9F%E4%BC%9A%E5%B7%B2%E8%AF%BB%E4%B8%8D%E5%9B%9E%23) `35.5K 🔥` `+44%`
1. [易烊千玺台词含金量](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%8F%B0%E8%AF%8D%E5%90%AB%E9%87%91%E9%87%8F%23) `33.3K 🔥` `+25%`
1. [都穿亮片裙不告诉王玉雯](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%A9%BF%E4%BA%AE%E7%89%87%E8%A3%99%E4%B8%8D%E5%91%8A%E8%AF%89%E7%8E%8B%E7%8E%89%E9%9B%AF%23) `64.5K 🔥`
1. [孟子义在刻意增肥 (Mencius is deliberately gaining weight)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%9C%A8%E5%88%BB%E6%84%8F%E5%A2%9E%E8%82%A5%23) `48.7K 🔥`
1. [镖人 真的好看](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%9C%8B%23) `41.8K 🔥`
1. [金价银价直线跳水](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `39.3K 🔥`

Updated at 2026-02-18 07:47:21

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
