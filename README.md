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

1. [当中文遇上锦绣山河的中国传统色 (When Chinese meets the traditional Chinese colors of beautiful mountains and rivers)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%B8%AD%E6%96%87%E9%81%87%E4%B8%8A%E9%94%A6%E7%BB%A3%E5%B1%B1%E6%B2%B3%E7%9A%84%E4%B8%AD%E5%9B%BD%E4%BC%A0%E7%BB%9F%E8%89%B2%23) `699.2K 🔥` `NEW`
1. [爱奇艺顶级IP赚了118亿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E9%A1%B6%E7%BA%A7IP%E8%B5%9A%E4%BA%86118%E4%BA%BF%23) `518.1K 🔥` `NEW`
1. [BLG对战iG](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98iG%23) `493.0K 🔥` `NEW`
1. [19岁女孩挪用1700万当榜一大姐](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%BD%93%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%A7%90%23) `476.5K 🔥` `NEW`
1. [持股市值不到7万元成第8大股东](https://s.weibo.com/weibo?q=%23%E6%8C%81%E8%82%A1%E5%B8%82%E5%80%BC%E4%B8%8D%E5%88%B07%E4%B8%87%E5%85%83%E6%88%90%E7%AC%AC8%E5%A4%A7%E8%82%A1%E4%B8%9C%23) `449.4K 🔥` `NEW`
1. [郭富城买了让女友痛哭流涕的礼物](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B9%B0%E4%BA%86%E8%AE%A9%E5%A5%B3%E5%8F%8B%E7%97%9B%E5%93%AD%E6%B5%81%E6%B6%95%E7%9A%84%E7%A4%BC%E7%89%A9%23) `419.4K 🔥` `NEW`
1. [任宇赵保辉等政绩观扭曲错位](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AE%87%E8%B5%B5%E4%BF%9D%E8%BE%89%E7%AD%89%E6%94%BF%E7%BB%A9%E8%A7%82%E6%89%AD%E6%9B%B2%E9%94%99%E4%BD%8D%23) `419.1K 🔥` `NEW`
1. [叶祖新的脸怎么了](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `417.8K 🔥` `NEW`
1. [云旗郝熠然舞蹈练习照](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E8%88%9E%E8%B9%88%E7%BB%83%E4%B9%A0%E7%85%A7%23) `416.7K 🔥` `NEW`
1. [1700万打赏主播聊天记录全曝光](https://s.weibo.com/weibo?q=%231700%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E5%85%A8%E6%9B%9D%E5%85%89%23) `416.3K 🔥` `NEW`
1. [被大众云栖智舱狠狠圈粉了 (Become a fan of Volkswagen Yunqi Smart Cabin)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%A7%E4%BC%97%E4%BA%91%E6%A0%96%E6%99%BA%E8%88%B1%E7%8B%A0%E7%8B%A0%E5%9C%88%E7%B2%89%E4%BA%86%23) `413.6K 🔥` `NEW`
1. [全新坦克700不卖产品卖向往](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%9D%A6%E5%85%8B700%E4%B8%8D%E5%8D%96%E4%BA%A7%E5%93%81%E5%8D%96%E5%90%91%E5%BE%80%23) `412.6K 🔥` `NEW`
1. [谷雨是春天最诗意的收尾](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E9%9B%A8%E6%98%AF%E6%98%A5%E5%A4%A9%E6%9C%80%E8%AF%97%E6%84%8F%E7%9A%84%E6%94%B6%E5%B0%BE%23) `410.4K 🔥` `NEW`
1. [于和伟工作室否认签约AI授权](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%92%8C%E4%BC%9F%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%90%A6%E8%AE%A4%E7%AD%BE%E7%BA%A6AI%E6%8E%88%E6%9D%83%23) `264.6K 🔥` `NEW`
1. [婆婆守寡多年想找老伴儿媳发声](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E5%AE%88%E5%AF%A1%E5%A4%9A%E5%B9%B4%E6%83%B3%E6%89%BE%E8%80%81%E4%BC%B4%E5%84%BF%E5%AA%B3%E5%8F%91%E5%A3%B0%23) `244.7K 🔥` `NEW`
1. [易梦玲是瘦了还是do脸了](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E6%98%AF%E7%98%A6%E4%BA%86%E8%BF%98%E6%98%AFdo%E8%84%B8%E4%BA%86%23) `240.4K 🔥` `NEW`
1. [招财俊宝 SK狐狸](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E8%B4%A2%E4%BF%8A%E5%AE%9D%20SK%E7%8B%90%E7%8B%B8%23) `216.1K 🔥` `NEW`
1. [在韩遭日籍男子骚扰女生再发声](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%81%AD%E6%97%A5%E7%B1%8D%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%E5%A5%B3%E7%94%9F%E5%86%8D%E5%8F%91%E5%A3%B0%23) `209.9K 🔥` `NEW`
1. [王星越的吃商恐怕在我之上](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E7%9A%84%E5%90%83%E5%95%86%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A%23) `209.6K 🔥` `NEW`
1. [硬核数据看中国经济动力澎湃](https://s.weibo.com/weibo?q=%23%E7%A1%AC%E6%A0%B8%E6%95%B0%E6%8D%AE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8A%A8%E5%8A%9B%E6%BE%8E%E6%B9%83%23) `209.6K 🔥` `NEW`
1. [爱奇艺称AI艺人库仅是合作意愿 (iQiyi says AI artist library is just a willingness to cooperate)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%A7%B0AI%E8%89%BA%E4%BA%BA%E5%BA%93%E4%BB%85%E6%98%AF%E5%90%88%E4%BD%9C%E6%84%8F%E6%84%BF%23) `209.6K 🔥` `NEW`
1. [化学老师教妻子用醋加盐刷牙](https://s.weibo.com/weibo?q=%23%E5%8C%96%E5%AD%A6%E8%80%81%E5%B8%88%E6%95%99%E5%A6%BB%E5%AD%90%E7%94%A8%E9%86%8B%E5%8A%A0%E7%9B%90%E5%88%B7%E7%89%99%23) `196.7K 🔥` `NEW`
1. [各国网民线上嘲讽日本人](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9B%BD%E7%BD%91%E6%B0%91%E7%BA%BF%E4%B8%8A%E5%98%B2%E8%AE%BD%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `422.9K 🔥` `+84%`
1. [明眸皓齿孙颖莎](https://s.weibo.com/weibo?q=%23%E6%98%8E%E7%9C%B8%E7%9A%93%E9%BD%BF%E5%AD%99%E9%A2%96%E8%8E%8E%23) `421.2K 🔥` `+190%`
1. [AI版成何体统逐玉](https://s.weibo.com/weibo?q=%23AI%E7%89%88%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E9%80%90%E7%8E%89%23) `409.9K 🔥` `+63%`
1. [日本7.5级地震 (Japan magnitude 7.5 earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.5%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `1.5M 🔥`
1. [老人打赏花330万却交不起15元电费 (The old man spent 3.3 million in rewards but could not afford the 15 yuan electricity bill)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%89%93%E8%B5%8F%E8%8A%B1330%E4%B8%87%E5%8D%B4%E4%BA%A4%E4%B8%8D%E8%B5%B715%E5%85%83%E7%94%B5%E8%B4%B9%23) `928.2K 🔥`
1. [华为Pura系列新品发布 (Huawei Pura series new products released)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura%E7%B3%BB%E5%88%97%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `694.6K 🔥`
1. [五花肉里有一块绿色的东西](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%8A%B1%E8%82%89%E9%87%8C%E6%9C%89%E4%B8%80%E5%9D%97%E7%BB%BF%E8%89%B2%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `670.7K 🔥`
1. [金智秀方回应哥哥家暴争议](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%96%B9%E5%9B%9E%E5%BA%94%E5%93%A5%E5%93%A5%E5%AE%B6%E6%9A%B4%E4%BA%89%E8%AE%AE%23) `422.5K 🔥`
1. [爱奇艺十部剧赚了67亿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%8D%81%E9%83%A8%E5%89%A7%E8%B5%9A%E4%BA%8667%E4%BA%BF%23) `415.4K 🔥`
1. [爱奇艺top10剧集没有莲花楼](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BAtop10%E5%89%A7%E9%9B%86%E6%B2%A1%E6%9C%89%E8%8E%B2%E8%8A%B1%E6%A5%BC%23) `255.0K 🔥`
1. [白鹿新买的阿贝贝 (Bailu’s new Abeibei)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E4%B9%B0%E7%9A%84%E9%98%BF%E8%B4%9D%E8%B4%9D%23) `240.7K 🔥`
1. [华为非凡大师女表一分钟全部售罄](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%9D%9E%E5%87%A1%E5%A4%A7%E5%B8%88%E5%A5%B3%E8%A1%A8%E4%B8%80%E5%88%86%E9%92%9F%E5%85%A8%E9%83%A8%E5%94%AE%E7%BD%84%23) `224.5K 🔥`
1. [李兰迪吊带黑裙 (Li Landi suspender black dress)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E5%90%8A%E5%B8%A6%E9%BB%91%E8%A3%99%23) `222.5K 🔥`
1. [弟弟去世赔50万5个姐姐起争执](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%8E%BB%E4%B8%96%E8%B5%9450%E4%B8%875%E4%B8%AA%E5%A7%90%E5%A7%90%E8%B5%B7%E4%BA%89%E6%89%A7%23) `607.9K 🔥` `-23%`
1. [逐玉的成功在于第三集续看率95%](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9A%84%E6%88%90%E5%8A%9F%E5%9C%A8%E4%BA%8E%E7%AC%AC%E4%B8%89%E9%9B%86%E7%BB%AD%E7%9C%8B%E7%8E%8795%25%23) `512.0K 🔥` `-33%`
1. [方博回应代表哈萨克斯坦参赛](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E5%9B%9E%E5%BA%94%E4%BB%A3%E8%A1%A8%E5%93%88%E8%90%A8%E5%85%8B%E6%96%AF%E5%9D%A6%E5%8F%82%E8%B5%9B%23) `499.9K 🔥` `-33%`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `484.1K 🔥` `-34%`
1. [爱奇艺 (iQiyi)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%23) `466.5K 🔥` `-94%`
1. [田曦薇 想跑路可以直说](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%83%B3%E8%B7%91%E8%B7%AF%E5%8F%AF%E4%BB%A5%E7%9B%B4%E8%AF%B4%23) `456.8K 🔥` `-33%`
1. [曝王楚然早就融了AI (It was revealed that Wang Churan had already integrated AI)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%97%A9%E5%B0%B1%E8%9E%8D%E4%BA%86AI%23) `434.1K 🔥` `-33%`
1. [时代峰峻大楼被雷劈了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A4%A7%E6%A5%BC%E8%A2%AB%E9%9B%B7%E5%8A%88%E4%BA%86%23) `425.0K 🔥` `-35%`
1. [十二星座本周好运tips](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A7%E6%9C%AC%E5%91%A8%E5%A5%BD%E8%BF%90tips%23) `420.6K 🔥` `-34%`
1. [林子烨被吐槽态度差](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E8%A2%AB%E5%90%90%E6%A7%BD%E6%80%81%E5%BA%A6%E5%B7%AE%23) `414.1K 🔥` `-35%`
1. [爱奇艺 底线](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E5%BA%95%E7%BA%BF%23) `411.5K 🔥` `-37%`
1. [低情商演员失业 高情商更多休息 (Actors with low emotional intelligence lose their jobs, while actors with high emotional intelligence take more breaks)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%83%85%E5%95%86%E6%BC%94%E5%91%98%E5%A4%B1%E4%B8%9A%20%E9%AB%98%E6%83%85%E5%95%86%E6%9B%B4%E5%A4%9A%E4%BC%91%E6%81%AF%23) `401.3K 🔥` `-37%`
1. [美国发生2024年以来最严重枪击案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E7%94%9F2024%E5%B9%B4%E4%BB%A5%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9E%AA%E5%87%BB%E6%A1%88%23) `369.9K 🔥` `-53%`
1. [演员集体辟谣AI授权](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%9B%86%E4%BD%93%E8%BE%9F%E8%B0%A3AI%E6%8E%88%E6%9D%83%23) `368.6K 🔥` `-32%`
1. [未授权AI艺人](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%8E%88%E6%9D%83AI%E8%89%BA%E4%BA%BA%23) `317.9K 🔥` `-45%`
1. [模仿瘦人的吃饭习惯](https://s.weibo.com/weibo?q=%23%E6%A8%A1%E4%BB%BF%E7%98%A6%E4%BA%BA%E7%9A%84%E5%90%83%E9%A5%AD%E4%B9%A0%E6%83%AF%23) `286.2K 🔥` `-44%`

Updated at 2026-04-20 20:57:52

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
