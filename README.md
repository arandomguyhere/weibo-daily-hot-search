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

1. [一封封侨批情系家国 (A letter of approval for overseas Chinese expressing love for home and country)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%81%E5%B0%81%E4%BE%A8%E6%89%B9%E6%83%85%E7%B3%BB%E5%AE%B6%E5%9B%BD%23) `564.7K 🔥` `NEW`
1. [曝Flandre加入BLG](https://s.weibo.com/weibo?q=%23%E6%9B%9DFlandre%E5%8A%A0%E5%85%A5BLG%23) `337.9K 🔥` `NEW`
1. [郑钦文无缘华盛顿16强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%97%A0%E7%BC%98%E5%8D%8E%E7%9B%9B%E9%A1%BF16%E5%BC%BA%23) `227.7K 🔥` `NEW`
1. [吴谨言全世界乳腺最畅通之人](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E5%85%A8%E4%B8%96%E7%95%8C%E4%B9%B3%E8%85%BA%E6%9C%80%E7%95%85%E9%80%9A%E4%B9%8B%E4%BA%BA%23) `227.6K 🔥` `NEW`
1. [郑钦文 连丢三局](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E8%BF%9E%E4%B8%A2%E4%B8%89%E5%B1%80%23) `227.6K 🔥` `NEW`
1. [郑钦文 华盛顿站](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E5%8D%8E%E7%9B%9B%E9%A1%BF%E7%AB%99%23) `161.2K 🔥` `NEW`
1. [半熟恋人5成了四对](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA5%E6%88%90%E4%BA%86%E5%9B%9B%E5%AF%B9%23) `144.3K 🔥` `NEW`
1. [SK海力士二季度业绩](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E4%BA%8C%E5%AD%A3%E5%BA%A6%E4%B8%9A%E7%BB%A9%23) `134.1K 🔥` `NEW`
1. [倪妮我想象中旅行穿搭出片的样子](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E6%88%91%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%97%85%E8%A1%8C%E7%A9%BF%E6%90%AD%E5%87%BA%E7%89%87%E7%9A%84%E6%A0%B7%E5%AD%90%23) `130.7K 🔥` `NEW`
1. [时代少年团 阿迪达斯](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%23) `82.3K 🔥` `NEW`
1. [法医完成王建隆遗体尸检 (Forensic doctor completes autopsy on Wang Jianlong's body)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%AE%8C%E6%88%90%E7%8E%8B%E5%BB%BA%E9%9A%86%E9%81%97%E4%BD%93%E5%B0%B8%E6%A3%80%23) `82.2K 🔥` `NEW`
1. [周佑凌私下对柳柳的称呼](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E7%A7%81%E4%B8%8B%E5%AF%B9%E6%9F%B3%E6%9F%B3%E7%9A%84%E7%A7%B0%E5%91%BC%23) `81.4K 🔥` `NEW`
1. [宋亚轩刘耀文沉浸式聊天](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%98%E8%80%80%E6%96%87%E6%B2%89%E6%B5%B8%E5%BC%8F%E8%81%8A%E5%A4%A9%23) `79.0K 🔥` `NEW`
1. [香港何伯去世](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%BD%95%E4%BC%AF%E5%8E%BB%E4%B8%96%23) `79.0K 🔥` `NEW`
1. [李登科说关晓彤减肥和妈妈斗智斗勇](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%AF%B4%E5%85%B3%E6%99%93%E5%BD%A4%E5%87%8F%E8%82%A5%E5%92%8C%E5%A6%88%E5%A6%88%E6%96%97%E6%99%BA%E6%96%97%E5%8B%87%23) `68.1K 🔥` `NEW`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `60.6K 🔥` `NEW`
1. [上海一公园现赤膊晒背族](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%85%AC%E5%9B%AD%E7%8E%B0%E8%B5%A4%E8%86%8A%E6%99%92%E8%83%8C%E6%97%8F%23) `57.7K 🔥` `NEW`
1. [奇瑞2000万的全球化含量有多高](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E2000%E4%B8%87%E7%9A%84%E5%85%A8%E7%90%83%E5%8C%96%E5%90%AB%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `56.5K 🔥` `NEW`
1. [男友逼坠楼生还女孩返还恋爱开销](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E9%80%BC%E5%9D%A0%E6%A5%BC%E7%94%9F%E8%BF%98%E5%A5%B3%E5%AD%A9%E8%BF%94%E8%BF%98%E6%81%8B%E7%88%B1%E5%BC%80%E9%94%80%23) `1.2M 🔥` `+134%`
1. [印度成首个被AI做空的国家](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%88%90%E9%A6%96%E4%B8%AA%E8%A2%ABAI%E5%81%9A%E7%A9%BA%E7%9A%84%E5%9B%BD%E5%AE%B6%23) `897.5K 🔥` `+310%`
1. [日本坍塌购物中心多人确认死亡 (Many people confirmed dead in collapsed shopping mall in Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9D%8D%E5%A1%8C%E8%B4%AD%E7%89%A9%E4%B8%AD%E5%BF%83%E5%A4%9A%E4%BA%BA%E7%A1%AE%E8%AE%A4%E6%AD%BB%E4%BA%A1%23) `545.7K 🔥` `+62%`
1. [原来这就是英语思维 (It turns out that this is English thinking)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E8%8B%B1%E8%AF%AD%E6%80%9D%E7%BB%B4%23) `380.4K 🔥` `+147%`
1. [任嘉伦我在锦衣卫负责抄家的日子](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E6%88%91%E5%9C%A8%E9%94%A6%E8%A1%A3%E5%8D%AB%E8%B4%9F%E8%B4%A3%E6%8A%84%E5%AE%B6%E7%9A%84%E6%97%A5%E5%AD%90%23) `362.5K 🔥` `+288%`
1. [蜘蛛侠 (spiderman)](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%23) `285.2K 🔥` `+89%`
1. [退货千万不要提前给取件码 (Never give a pickup code in advance when returning goods)](https://s.weibo.com/weibo?q=%23%E9%80%80%E8%B4%A7%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8F%90%E5%89%8D%E7%BB%99%E5%8F%96%E4%BB%B6%E7%A0%81%23) `239.7K 🔥` `+193%`
1. [SK海力士](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%23) `227.6K 🔥` `+236%`
1. [日本地震熊本商场爆炸瞬间](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%86%8A%E6%9C%AC%E5%95%86%E5%9C%BA%E7%88%86%E7%82%B8%E7%9E%AC%E9%97%B4%23) `227.5K 🔥` `+98%`
1. [医生群里发除非死人不要临时请假 (Doctors' group message: Don't ask for temporary leave unless the patient is dead)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%BE%A4%E9%87%8C%E5%8F%91%E9%99%A4%E9%9D%9E%E6%AD%BB%E4%BA%BA%E4%B8%8D%E8%A6%81%E4%B8%B4%E6%97%B6%E8%AF%B7%E5%81%87%23) `198.4K 🔥` `+315%`
1. [散步是一项隐私且暧昧的行为](https://s.weibo.com/weibo?q=%23%E6%95%A3%E6%AD%A5%E6%98%AF%E4%B8%80%E9%A1%B9%E9%9A%90%E7%A7%81%E4%B8%94%E6%9A%A7%E6%98%A7%E7%9A%84%E8%A1%8C%E4%B8%BA%23) `139.6K 🔥` `+98%`
1. [男童挡电梯20秒等家长女子催促被打 (Boy was beaten after blocking elevator for 20 seconds while waiting for parent and woman to urge him)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%8C%A1%E7%94%B5%E6%A2%AF20%E7%A7%92%E7%AD%89%E5%AE%B6%E9%95%BF%E5%A5%B3%E5%AD%90%E5%82%AC%E4%BF%83%E8%A2%AB%E6%89%93%23) `134.0K 🔥` `+148%`
1. [昀牵孟绕 (Yun Qian Meng Rao)](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `126.8K 🔥` `+101%`
1. [网红霸占无居民海岛直播荒岛改造被查 (Internet celebrities occupied uninhabited islands and broadcast live broadcasts of desert island transformation and were investigated)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%9C%B8%E5%8D%A0%E6%97%A0%E5%B1%85%E6%B0%91%E6%B5%B7%E5%B2%9B%E7%9B%B4%E6%92%AD%E8%8D%92%E5%B2%9B%E6%94%B9%E9%80%A0%E8%A2%AB%E6%9F%A5%23) `123.1K 🔥` `+105%`
1. [赵昭仪御廷谣演技 (Zhao Zhaoyi's acting skills in imperial ballads)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E5%BE%A1%E5%BB%B7%E8%B0%A3%E6%BC%94%E6%8A%80%23) `121.0K 🔥` `+54%`
1. [张凌赫我最讨厌事后道歉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%88%91%E6%9C%80%E8%AE%A8%E5%8E%8C%E4%BA%8B%E5%90%8E%E9%81%93%E6%AD%89%23) `118.0K 🔥` `+144%`
1. [普京称俄罗斯未来岌岌可危 (Putin says Russia's future is at stake)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E4%BF%84%E7%BD%97%E6%96%AF%E6%9C%AA%E6%9D%A5%E5%B2%8C%E5%B2%8C%E5%8F%AF%E5%8D%B1%23) `111.7K 🔥` `+89%`
1. [AI公司 原版书籍销毁 (AI company original books destroyed)](https://s.weibo.com/weibo?q=%23AI%E5%85%AC%E5%8F%B8%20%E5%8E%9F%E7%89%88%E4%B9%A6%E7%B1%8D%E9%94%80%E6%AF%81%23) `109.9K 🔥` `+103%`
1. [日本7.1级强震已致多人死亡](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%BC%BA%E9%9C%87%E5%B7%B2%E8%87%B4%E5%A4%9A%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `81.7K 🔥` `+52%`
1. [该不该把家里的财务状况告诉孩子](https://s.weibo.com/weibo?q=%23%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%8A%8A%E5%AE%B6%E9%87%8C%E7%9A%84%E8%B4%A2%E5%8A%A1%E7%8A%B6%E5%86%B5%E5%91%8A%E8%AF%89%E5%AD%A9%E5%AD%90%23) `81.6K 🔥` `+83%`
1. [李雪琴高瀚宇这么多年没加微信](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E9%AB%98%E7%80%9A%E5%AE%87%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E6%B2%A1%E5%8A%A0%E5%BE%AE%E4%BF%A1%23) `81.4K 🔥` `+116%`
1. [女子摸田螺溺亡儿子连扇自己巴掌 (Woman touches snail and drowns, son slaps herself)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%91%B8%E7%94%B0%E8%9E%BA%E6%BA%BA%E4%BA%A1%E5%84%BF%E5%AD%90%E8%BF%9E%E6%89%87%E8%87%AA%E5%B7%B1%E5%B7%B4%E6%8E%8C%23) `80.0K 🔥` `+75%`
1. [广东夫妇赶海船被撞翻父逃生母溺亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%A4%AB%E5%A6%87%E8%B5%B6%E6%B5%B7%E8%88%B9%E8%A2%AB%E6%92%9E%E7%BF%BB%E7%88%B6%E9%80%83%E7%94%9F%E6%AF%8D%E6%BA%BA%E4%BA%A1%23) `76.2K 🔥` `+56%`
1. [日本7.1级地震民众哭喊声一片 (People cry out after Japan's 7.1-magnitude earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%B0%91%E4%BC%97%E5%93%AD%E5%96%8A%E5%A3%B0%E4%B8%80%E7%89%87%23) `75.9K 🔥` `+44%`
1. [荷花居然还能开在绿化带上](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E8%8A%B1%E5%B1%85%E7%84%B6%E8%BF%98%E8%83%BD%E5%BC%80%E5%9C%A8%E7%BB%BF%E5%8C%96%E5%B8%A6%E4%B8%8A%23) `72.5K 🔥` `+89%`
1. [当金毛误入了耶总会](https://s.weibo.com/weibo?q=%23%E5%BD%93%E9%87%91%E6%AF%9B%E8%AF%AF%E5%85%A5%E4%BA%86%E8%80%B6%E6%80%BB%E4%BC%9A%23) `64.3K 🔥` `+71%`
1. [航拍日本强震后现状](https://s.weibo.com/weibo?q=%23%E8%88%AA%E6%8B%8D%E6%97%A5%E6%9C%AC%E5%BC%BA%E9%9C%87%E5%90%8E%E7%8E%B0%E7%8A%B6%23) `57.7K 🔥` `+53%`
1. [心理疾病和精神疾病的区别](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E7%96%BE%E7%97%85%E5%92%8C%E7%B2%BE%E7%A5%9E%E7%96%BE%E7%97%85%E7%9A%84%E5%8C%BA%E5%88%AB%23) `145.6K 🔥`
1. [曝Bin圣枪哥处境相反](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E5%9C%A3%E6%9E%AA%E5%93%A5%E5%A4%84%E5%A2%83%E7%9B%B8%E5%8F%8D%23) `82.1K 🔥`
1. [陈哲远为自己的身材挽一下尊](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E8%BA%AB%E6%9D%90%E6%8C%BD%E4%B8%80%E4%B8%8B%E5%B0%8A%23) `81.8K 🔥`
1. [人怎么能说出这么通透的话](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E8%AF%B4%E5%87%BA%E8%BF%99%E4%B9%88%E9%80%9A%E9%80%8F%E7%9A%84%E8%AF%9D%23) `61.6K 🔥`
1. [上半年我国环境空气质量稳中向好](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E6%88%91%E5%9B%BD%E7%8E%AF%E5%A2%83%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F%E7%A8%B3%E4%B8%AD%E5%90%91%E5%A5%BD%23) `85.7K 🔥` `-67%`

Updated at 2026-07-29 07:32:03

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
