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

1. [超160项首发首展首秀亮相链博会 (Over 160 debut items debuted at the Chain Expo)](https://s.weibo.com/weibo?q=%23%E8%B6%85160%E9%A1%B9%E9%A6%96%E5%8F%91%E9%A6%96%E5%B1%95%E9%A6%96%E7%A7%80%E4%BA%AE%E7%9B%B8%E9%93%BE%E5%8D%9A%E4%BC%9A%23) `1.5M 🔥` `NEW`
1. [陆虎为白鹿新歌作词作曲](https://s.weibo.com/weibo?q=%23%E9%99%86%E8%99%8E%E4%B8%BA%E7%99%BD%E9%B9%BF%E6%96%B0%E6%AD%8C%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `523.2K 🔥` `NEW`
1. [十日终焉齐夏先导片花](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%BD%90%E5%A4%8F%E5%85%88%E5%AF%BC%E7%89%87%E8%8A%B1%23) `359.4K 🔥` `NEW`
1. [白鹿莫离口碑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E5%8F%A3%E7%A2%91%23) `340.2K 🔥` `NEW`
1. [向佐向佑合体直播](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E5%90%91%E4%BD%91%E5%90%88%E4%BD%93%E7%9B%B4%E6%92%AD%23) `327.0K 🔥` `NEW`
1. [全球股市暴跌原因](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `326.4K 🔥` `NEW`
1. [终于看到巴黎的杨紫了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9C%8B%E5%88%B0%E5%B7%B4%E9%BB%8E%E7%9A%84%E6%9D%A8%E7%B4%AB%E4%BA%86%23) `313.5K 🔥` `NEW`
1. [美光科技大跌近11%](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%85%89%E7%A7%91%E6%8A%80%E5%A4%A7%E8%B7%8C%E8%BF%9111%25%23) `312.8K 🔥` `NEW`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `271.0K 🔥` `NEW`
1. [向太首次回应拉黑向佑](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E9%A6%96%E6%AC%A1%E5%9B%9E%E5%BA%94%E6%8B%89%E9%BB%91%E5%90%91%E4%BD%91%23) `255.8K 🔥` `NEW`
1. [C罗 最后一舞 (Cristiano Ronaldo's last dance)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E6%9C%80%E5%90%8E%E4%B8%80%E8%88%9E%23) `252.6K 🔥` `NEW`
1. [卡配罗](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E9%85%8D%E7%BD%97%23) `252.4K 🔥` `NEW`
1. [宋祖儿本名有重新练号的感觉](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E6%9C%AC%E5%90%8D%E6%9C%89%E9%87%8D%E6%96%B0%E7%BB%83%E5%8F%B7%E7%9A%84%E6%84%9F%E8%A7%89%23) `239.2K 🔥` `NEW`
1. [C罗创历史](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%88%9B%E5%8E%86%E5%8F%B2%23) `182.6K 🔥` `NEW`
1. [刘忍](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BF%8D%23) `182.6K 🔥` `NEW`
1. [马嘉祺曾说没想过和宋亚轩会成为同学](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%9B%BE%E8%AF%B4%E6%B2%A1%E6%83%B3%E8%BF%87%E5%92%8C%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%BC%9A%E6%88%90%E4%B8%BA%E5%90%8C%E5%AD%A6%23) `179.4K 🔥` `NEW`
1. [英格兰无缘提前出线](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%97%A0%E7%BC%98%E6%8F%90%E5%89%8D%E5%87%BA%E7%BA%BF%23) `170.0K 🔥` `NEW`
1. [妈妈为护专注力只给女儿配电话手表](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%BA%E6%8A%A4%E4%B8%93%E6%B3%A8%E5%8A%9B%E5%8F%AA%E7%BB%99%E5%A5%B3%E5%84%BF%E9%85%8D%E7%94%B5%E8%AF%9D%E6%89%8B%E8%A1%A8%23) `144.5K 🔥` `NEW`
1. [宋亚轩一步一步走过孩子气](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E8%B5%B0%E8%BF%87%E5%AD%A9%E5%AD%90%E6%B0%94%23) `141.7K 🔥` `NEW`
1. [休闲璐回应](https://s.weibo.com/weibo?q=%23%E4%BC%91%E9%97%B2%E7%92%90%E5%9B%9E%E5%BA%94%23) `138.9K 🔥` `NEW`
1. [德尚母亲去世 (Deschamps' mother died)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%B0%9A%E6%AF%8D%E4%BA%B2%E5%8E%BB%E4%B8%96%23) `126.9K 🔥` `NEW`
1. [刘宇宁不经意叫宝宝](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%8D%E7%BB%8F%E6%84%8F%E5%8F%AB%E5%AE%9D%E5%AE%9D%23) `126.0K 🔥` `NEW`
1. [穆祉丞高会](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%AB%98%E4%BC%9A%23) `101.7K 🔥` `NEW`
1. [宋威龙暑期双剧定档](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%9A%91%E6%9C%9F%E5%8F%8C%E5%89%A7%E5%AE%9A%E6%A1%A3%23) `95.0K 🔥` `NEW`
1. [C罗成为葡萄牙世界杯射手王](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%88%90%E4%B8%BA%E8%91%A1%E8%90%84%E7%89%99%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%84%E6%89%8B%E7%8E%8B%23) `10.5M 🔥` `+69%`
1. [英格兰0比0加纳](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B00%E6%AF%940%E5%8A%A0%E7%BA%B3%23) `613.4K 🔥` `+99%`
1. [大疆Pocket4P开售秒没](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4P%E5%BC%80%E5%94%AE%E7%A7%92%E6%B2%A1%23) `354.9K 🔥` `+200%`
1. [理想L8价格](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3L8%E4%BB%B7%E6%A0%BC%23) `349.9K 🔥` `+536%`
1. [平台通报李金铭假婆婆事件 (Platform reports Li Jinming’s fake mother-in-law incident)](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E9%80%9A%E6%8A%A5%E6%9D%8E%E9%87%91%E9%93%AD%E5%81%87%E5%A9%86%E5%A9%86%E4%BA%8B%E4%BB%B6%23) `347.8K 🔥` `+45%`
1. [C罗骗过全世界 (Cristiano Ronaldo deceived the whole world)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%AA%97%E8%BF%87%E5%85%A8%E4%B8%96%E7%95%8C%23) `337.0K 🔥` `+181%`
1. [李金铭回应 (Li Jinming responded)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%9B%9E%E5%BA%94%23) `325.1K 🔥` `+173%`
1. [均值回归](https://s.weibo.com/weibo?q=%23%E5%9D%87%E5%80%BC%E5%9B%9E%E5%BD%92%23) `256.0K 🔥` `+270%`
1. [贝克汉姆儿子靠与父母不和赚百万美金](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%84%BF%E5%AD%90%E9%9D%A0%E4%B8%8E%E7%88%B6%E6%AF%8D%E4%B8%8D%E5%92%8C%E8%B5%9A%E7%99%BE%E4%B8%87%E7%BE%8E%E9%87%91%23) `221.4K 🔥` `+85%`
1. [印度一天或热死3400人 (Heat could kill 3,400 people in India in one day)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%A4%A9%E6%88%96%E7%83%AD%E6%AD%BB3400%E4%BA%BA%23) `210.6K 🔥` `+145%`
1. [5岁女孩每天抱小兔子致永久性脱发](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%AF%8F%E5%A4%A9%E6%8A%B1%E5%B0%8F%E5%85%94%E5%AD%90%E8%87%B4%E6%B0%B8%E4%B9%85%E6%80%A7%E8%84%B1%E5%8F%91%23) `186.1K 🔥` `+56%`
1. [张婧仪工伤让陈哲远红温了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%B7%A5%E4%BC%A4%E8%AE%A9%E9%99%88%E5%93%B2%E8%BF%9C%E7%BA%A2%E6%B8%A9%E4%BA%86%23) `182.6K 🔥` `+110%`
1. [C罗进球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9B%E7%90%83%23) `171.0K 🔥` `+46%`
1. [电梯急坠按下所有楼层按钮不科学](https://s.weibo.com/weibo?q=%23%E7%94%B5%E6%A2%AF%E6%80%A5%E5%9D%A0%E6%8C%89%E4%B8%8B%E6%89%80%E6%9C%89%E6%A5%BC%E5%B1%82%E6%8C%89%E9%92%AE%E4%B8%8D%E7%A7%91%E5%AD%A6%23) `148.5K 🔥` `+115%`
1. [突然意识到美术生好牛](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E7%BE%8E%E6%9C%AF%E7%94%9F%E5%A5%BD%E7%89%9B%23) `124.3K 🔥` `+80%`
1. [葡萄牙5比0乌兹别克斯坦 (Portugal 5-0 Uzbekistan)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%995%E6%AF%940%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%23) `2.0M 🔥`
1. [你要知道我很少站老一辈这边的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A6%81%E7%9F%A5%E9%81%93%E6%88%91%E5%BE%88%E5%B0%91%E7%AB%99%E8%80%81%E4%B8%80%E8%BE%88%E8%BF%99%E8%BE%B9%E7%9A%84%23) `631.8K 🔥`
1. [C罗梅开二度 (Cristiano Ronaldo scores twice)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `578.9K 🔥`
1. [广德车祸受伤3岁男童最新情况 (The latest situation of a 3-year-old boy injured in a car accident in Guangde)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%97%E4%BC%A43%E5%B2%81%E7%94%B7%E7%AB%A5%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `124.6K 🔥`
1. [黄多多能不能马上进组](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E8%83%BD%E4%B8%8D%E8%83%BD%E9%A9%AC%E4%B8%8A%E8%BF%9B%E7%BB%84%23) `121.1K 🔥`
1. [C罗说我回来了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%AF%B4%E6%88%91%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `102.6K 🔥`
1. [这段话彻底杀死了我的精神内耗 (This passage completely destroyed my spirit.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%BD%BB%E5%BA%95%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `100.8K 🔥`
1. [SpaceX暴跌16.43%](https://s.weibo.com/weibo?q=%23SpaceX%E6%9A%B4%E8%B7%8C16.43%25%23) `98.2K 🔥`
1. [檀健次直播迟到39分钟 (Tan Jianci was 39 minutes late for the live broadcast)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9B%B4%E6%92%AD%E8%BF%9F%E5%88%B039%E5%88%86%E9%92%9F%23) `96.7K 🔥`
1. [医生会被AI轻易取代吗 (Will doctors be easily replaced by AI?)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E4%BC%9A%E8%A2%ABAI%E8%BD%BB%E6%98%93%E5%8F%96%E4%BB%A3%E5%90%97%23) `92.4K 🔥`
1. [英格兰vs加纳](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E5%8A%A0%E7%BA%B3%23) `191.2K 🔥` `-41%`

Updated at 2026-06-24 08:15:03

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
