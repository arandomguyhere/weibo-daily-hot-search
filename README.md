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

1. [小巷人家2官宣 (Alley People 2 Official Announcement)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E5%AE%98%E5%AE%A3%23) `1.2M 🔥` `NEW`
1. [神21乘组圆满完成第二次出舱活动](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E4%B9%98%E7%BB%84%E5%9C%86%E6%BB%A1%E5%AE%8C%E6%88%90%E7%AC%AC%E4%BA%8C%E6%AC%A1%E5%87%BA%E8%88%B1%E6%B4%BB%E5%8A%A8%23) `696.7K 🔥` `NEW`
1. [舒淇喊你一块喝好茶](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E5%96%8A%E4%BD%A0%E4%B8%80%E5%9D%97%E5%96%9D%E5%A5%BD%E8%8C%B6%23) `478.1K 🔥` `NEW`
1. [AI大厂月薪3万疯抢文科生](https://s.weibo.com/weibo?q=%23AI%E5%A4%A7%E5%8E%82%E6%9C%88%E8%96%AA3%E4%B8%87%E7%96%AF%E6%8A%A2%E6%96%87%E7%A7%91%E7%94%9F%23) `445.5K 🔥` `NEW`
1. [泰国遇害34岁女子生前连发7条救我](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%81%87%E5%AE%B334%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%9F%E5%89%8D%E8%BF%9E%E5%8F%917%E6%9D%A1%E6%95%91%E6%88%91%23) `384.6K 🔥` `NEW`
1. [中方向伊朗提供人道主义援助](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BE%9B%E4%BA%BA%E9%81%93%E4%B8%BB%E4%B9%89%E6%8F%B4%E5%8A%A9%23) `280.3K 🔥` `NEW`
1. [田曦薇逐玉接吻咽口水](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%E6%8E%A5%E5%90%BB%E5%92%BD%E5%8F%A3%E6%B0%B4%23) `224.8K 🔥` `NEW`
1. [61岁东北农村大爷养老金每月191块](https://s.weibo.com/weibo?q=%2361%E5%B2%81%E4%B8%9C%E5%8C%97%E5%86%9C%E6%9D%91%E5%A4%A7%E7%88%B7%E5%85%BB%E8%80%81%E9%87%91%E6%AF%8F%E6%9C%88191%E5%9D%97%23) `174.8K 🔥` `NEW`
1. [金价大跌黄金9点开卖9点01分售罄](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E9%BB%84%E9%87%919%E7%82%B9%E5%BC%80%E5%8D%969%E7%82%B901%E5%88%86%E5%94%AE%E7%BD%84%23) `171.9K 🔥` `NEW`
1. [周杰伦说今晚0点准备](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AF%B4%E4%BB%8A%E6%99%9A0%E7%82%B9%E5%87%86%E5%A4%87%23) `171.9K 🔥` `NEW`
1. [湘雅规培不该让人以死明志 (Xiangya discipline training should not allow people to die to express their ambitions)](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E8%A7%84%E5%9F%B9%E4%B8%8D%E8%AF%A5%E8%AE%A9%E4%BA%BA%E4%BB%A5%E6%AD%BB%E6%98%8E%E5%BF%97%23) `144.1K 🔥` `NEW`
1. [初中学历花7000考取药师资格证](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E5%AD%A6%E5%8E%86%E8%8A%B17000%E8%80%83%E5%8F%96%E8%8D%AF%E5%B8%88%E8%B5%84%E6%A0%BC%E8%AF%81%23) `137.4K 🔥` `NEW`
1. [原来这就是小鸟胃啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E5%B0%8F%E9%B8%9F%E8%83%83%E5%95%8A%23) `120.5K 🔥` `NEW`
1. [ELLE四月刊张凌赫封面预告](https://s.weibo.com/weibo?q=%23ELLE%E5%9B%9B%E6%9C%88%E5%88%8A%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `117.3K 🔥` `NEW`
1. [小女孩常吃凤爪满嘴疱疹久治不愈](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B3%E5%AD%A9%E5%B8%B8%E5%90%83%E5%87%A4%E7%88%AA%E6%BB%A1%E5%98%B4%E7%96%B1%E7%96%B9%E4%B9%85%E6%B2%BB%E4%B8%8D%E6%84%88%23) `94.1K 🔥` `NEW`
1. [小巷人家2 范丞丞卢昱晓](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%20%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%8D%A2%E6%98%B1%E6%99%93%23) `88.6K 🔥` `NEW`
1. [满13周岁女孩免费接种HPV](https://s.weibo.com/weibo?q=%23%E6%BB%A113%E5%91%A8%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%85%8D%E8%B4%B9%E6%8E%A5%E7%A7%8DHPV%23) `84.8K 🔥` `NEW`
1. [我买东西只看差评](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B9%B0%E4%B8%9C%E8%A5%BF%E5%8F%AA%E7%9C%8B%E5%B7%AE%E8%AF%84%23) `82.3K 🔥` `NEW`
1. [JackeyLove谈BLG战胜BFX](https://s.weibo.com/weibo?q=%23JackeyLove%E8%B0%88BLG%E6%88%98%E8%83%9CBFX%23) `77.9K 🔥` `NEW`
1. [全是不想坐B座的聪明人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%98%AF%E4%B8%8D%E6%83%B3%E5%9D%90B%E5%BA%A7%E7%9A%84%E8%81%AA%E6%98%8E%E4%BA%BA%23) `278.1K 🔥` `+22%`
1. [赵丽颖于适 浮华之上 (Zhao Liying is suitable for the glitz and glamor)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%BA%8E%E9%80%82%20%E6%B5%AE%E5%8D%8E%E4%B9%8B%E4%B8%8A%23) `277.9K 🔥` `+31%`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `267.0K 🔥` `+25%`
1. [深圳卫健委抽烟这块越骂越勇](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%8D%AB%E5%81%A5%E5%A7%94%E6%8A%BD%E7%83%9F%E8%BF%99%E5%9D%97%E8%B6%8A%E9%AA%82%E8%B6%8A%E5%8B%87%23) `186.1K 🔥` `+133%`
1. [刘昊然 周冬雨](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%20%E5%91%A8%E5%86%AC%E9%9B%A8%23) `173.1K 🔥` `+27%`
1. [马丁 富人区跑步](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%81%20%E5%AF%8C%E4%BA%BA%E5%8C%BA%E8%B7%91%E6%AD%A5%23) `141.7K 🔥` `+58%`
1. [20斤排骨炖好放门口被大爷整盆端走 (20 pounds of ribs were stewed and left at the door, but the uncle took away the whole pot.)](https://s.weibo.com/weibo?q=%2320%E6%96%A4%E6%8E%92%E9%AA%A8%E7%82%96%E5%A5%BD%E6%94%BE%E9%97%A8%E5%8F%A3%E8%A2%AB%E5%A4%A7%E7%88%B7%E6%95%B4%E7%9B%86%E7%AB%AF%E8%B5%B0%23) `847.4K 🔥`
1. [金价下跌却买不进](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E5%8D%B4%E4%B9%B0%E4%B8%8D%E8%BF%9B%23) `278.2K 🔥`
1. [伊朗警告日本 (Iran warns Japan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E6%97%A5%E6%9C%AC%23) `250.3K 🔥`
1. [豆包给周也指导的穿搭](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%BB%99%E5%91%A8%E4%B9%9F%E6%8C%87%E5%AF%BC%E7%9A%84%E7%A9%BF%E6%90%AD%23) `220.6K 🔥`
1. [高中生斑马线过马路被撞飞身亡](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E6%96%91%E9%A9%AC%E7%BA%BF%E8%BF%87%E9%A9%AC%E8%B7%AF%E8%A2%AB%E6%92%9E%E9%A3%9E%E8%BA%AB%E4%BA%A1%23) `199.7K 🔥`
1. [正午阳光2026片单](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%892026%E7%89%87%E5%8D%95%23) `176.1K 🔥`
1. [人民日报深度访谈魏建军](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%B7%B1%E5%BA%A6%E8%AE%BF%E8%B0%88%E9%AD%8F%E5%BB%BA%E5%86%9B%23) `175.3K 🔥`
1. [瞿颖已婚 (Qu Ying is married)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E5%B7%B2%E5%A9%9A%23) `174.2K 🔥`
1. [电视剧当年不肯嫁东风](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%BD%93%E5%B9%B4%E4%B8%8D%E8%82%AF%E5%AB%81%E4%B8%9C%E9%A3%8E%23) `132.8K 🔥`
1. [高中生过马路被撞身亡目击者发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E8%BF%87%E9%A9%AC%E8%B7%AF%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `132.1K 🔥`
1. [曝刘晓庆别墅因违法建设被人投诉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E6%99%93%E5%BA%86%E5%88%AB%E5%A2%85%E5%9B%A0%E8%BF%9D%E6%B3%95%E5%BB%BA%E8%AE%BE%E8%A2%AB%E4%BA%BA%E6%8A%95%E8%AF%89%23) `123.9K 🔥`
1. [小猫生了个自己](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%94%9F%E4%BA%86%E4%B8%AA%E8%87%AA%E5%B7%B1%23) `121.5K 🔥`
1. [男子买18元彩票中1734万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B018%E5%85%83%E5%BD%A9%E7%A5%A8%E4%B8%AD1734%E4%B8%87%23) `108.5K 🔥`
1. [山姆三文鱼遵循的是非即食国标](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%B8%89%E6%96%87%E9%B1%BC%E9%81%B5%E5%BE%AA%E7%9A%84%E6%98%AF%E9%9D%9E%E5%8D%B3%E9%A3%9F%E5%9B%BD%E6%A0%87%23) `75.3K 🔥`
1. [小巷人家第二部 (Alley People Part 2)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `413.7K 🔥` `-65%`
1. [正午阳光又要拍宅斗了](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E5%8F%88%E8%A6%81%E6%8B%8D%E5%AE%85%E6%96%97%E4%BA%86%23) `298.2K 🔥` `-25%`
1. [曝小巷人家2剧情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E5%89%A7%E6%83%85%23) `160.7K 🔥` `-48%`
1. [章昊大学考卷](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%98%8A%E5%A4%A7%E5%AD%A6%E8%80%83%E5%8D%B7%23) `120.2K 🔥` `-40%`
1. [AI 裁员 (AI layoffs)](https://s.weibo.com/weibo?q=%23AI%20%E8%A3%81%E5%91%98%23) `111.2K 🔥` `-28%`
1. [赵本山近况 (Zhao Benshan’s recent situation)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E8%BF%91%E5%86%B5%23) `111.2K 🔥` `-47%`
1. [被美国架在火上的日本](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%BE%8E%E5%9B%BD%E6%9E%B6%E5%9C%A8%E7%81%AB%E4%B8%8A%E7%9A%84%E6%97%A5%E6%9C%AC%23) `95.1K 🔥` `-57%`
1. [易烊千玺网站歌曲投票 (Yi Yang Qianxi website song voting)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BD%91%E7%AB%99%E6%AD%8C%E6%9B%B2%E6%8A%95%E7%A5%A8%23) `92.7K 🔥` `-38%`
1. [A股两大利好 (Two major benefits of A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%A4%E5%A4%A7%E5%88%A9%E5%A5%BD%23) `88.0K 🔥` `-43%`
1. [睡得晚和睡得少哪个更伤身体](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%BE%97%E6%99%9A%E5%92%8C%E7%9D%A1%E5%BE%97%E5%B0%91%E5%93%AA%E4%B8%AA%E6%9B%B4%E4%BC%A4%E8%BA%AB%E4%BD%93%23) `80.9K 🔥` `-37%`
1. [81岁老人为外籍外孙女寻意定监护人](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E8%80%81%E4%BA%BA%E4%B8%BA%E5%A4%96%E7%B1%8D%E5%A4%96%E5%AD%99%E5%A5%B3%E5%AF%BB%E6%84%8F%E5%AE%9A%E7%9B%91%E6%8A%A4%E4%BA%BA%23) `77.9K 🔥` `-65%`

Updated at 2026-03-17 16:09:14

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
