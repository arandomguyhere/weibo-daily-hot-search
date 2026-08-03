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

1. [AI短剧女主60秒广告报价25万8 (The AI ​​short drama heroine’s 60-second advertising quotation is 250,800)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E5%A5%B3%E4%B8%BB60%E7%A7%92%E5%B9%BF%E5%91%8A%E6%8A%A5%E4%BB%B725%E4%B8%878%23) `1.5M 🔥` `NEW`
1. [985博士后出轨被退站已入职新高校](https://s.weibo.com/weibo?q=%23985%E5%8D%9A%E5%A3%AB%E5%90%8E%E5%87%BA%E8%BD%A8%E8%A2%AB%E9%80%80%E7%AB%99%E5%B7%B2%E5%85%A5%E8%81%8C%E6%96%B0%E9%AB%98%E6%A0%A1%23) `878.1K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `651.1K 🔥` `NEW`
1. [低精力可以去医院查有没有疾病](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%9F%A5%E6%9C%89%E6%B2%A1%E6%9C%89%E7%96%BE%E7%97%85%23) `366.2K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `356.7K 🔥` `NEW`
1. [原来大家找双休多钱工作的思路好清晰](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E6%89%BE%E5%8F%8C%E4%BC%91%E5%A4%9A%E9%92%B1%E5%B7%A5%E4%BD%9C%E7%9A%84%E6%80%9D%E8%B7%AF%E5%A5%BD%E6%B8%85%E6%99%B0%23) `355.2K 🔥` `NEW`
1. [Jiejie加入EDG](https://s.weibo.com/weibo?q=%23Jiejie%E5%8A%A0%E5%85%A5EDG%23) `321.8K 🔥` `NEW`
1. [功夫女足上映24天票房逆跌](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%8A%E6%98%A024%E5%A4%A9%E7%A5%A8%E6%88%BF%E9%80%86%E8%B7%8C%23) `321.6K 🔥` `NEW`
1. [日本股市](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%82%A1%E5%B8%82%23) `295.9K 🔥` `NEW`
1. [罗正 千万存款](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%20%E5%8D%83%E4%B8%87%E5%AD%98%E6%AC%BE%23) `295.4K 🔥` `NEW`
1. [章泽天比刘亦菲还像刘亦菲妈妈 (Zhang Zetian looks more like Liu Yifei’s mother than Liu Yifei)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%B3%BD%E5%A4%A9%E6%AF%94%E5%88%98%E4%BA%A6%E8%8F%B2%E8%BF%98%E5%83%8F%E5%88%98%E4%BA%A6%E8%8F%B2%E5%A6%88%E5%A6%88%23) `295.1K 🔥` `NEW`
1. [安睡裤吐槽月经气味大就是营销自杀](https://s.weibo.com/weibo?q=%23%E5%AE%89%E7%9D%A1%E8%A3%A4%E5%90%90%E6%A7%BD%E6%9C%88%E7%BB%8F%E6%B0%94%E5%91%B3%E5%A4%A7%E5%B0%B1%E6%98%AF%E8%90%A5%E9%94%80%E8%87%AA%E6%9D%80%23) `294.4K 🔥` `NEW`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `293.7K 🔥` `NEW`
1. [李希侃为罗正发声](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B8%8C%E4%BE%83%E4%B8%BA%E7%BD%97%E6%AD%A3%E5%8F%91%E5%A3%B0%23) `293.1K 🔥` `NEW`
1. [王嘉尔粉丝指蔡徐坤抄袭红手套](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E7%B2%89%E4%B8%9D%E6%8C%87%E8%94%A1%E5%BE%90%E5%9D%A4%E6%8A%84%E8%A2%AD%E7%BA%A2%E6%89%8B%E5%A5%97%23) `286.1K 🔥` `NEW`
1. [丁程鑫蓝发](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%93%9D%E5%8F%91%23) `273.0K 🔥` `NEW`
1. [男乒世排前5只剩下王楚钦](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B9%92%E4%B8%96%E6%8E%92%E5%89%8D5%E5%8F%AA%E5%89%A9%E4%B8%8B%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `252.2K 🔥` `NEW`
1. [严浩翔白金狼尾烟熏妆](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%99%BD%E9%87%91%E7%8B%BC%E5%B0%BE%E7%83%9F%E7%86%8F%E5%A6%86%23) `251.2K 🔥` `NEW`
1. [网友在家偶遇白鹿](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%9C%A8%E5%AE%B6%E5%81%B6%E9%81%87%E7%99%BD%E9%B9%BF%23) `237.4K 🔥` `NEW`
1. [我小时候全撕了一点一点撒的算什么](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E5%85%A8%E6%92%95%E4%BA%86%E4%B8%80%E7%82%B9%E4%B8%80%E7%82%B9%E6%92%92%E7%9A%84%E7%AE%97%E4%BB%80%E4%B9%88%23) `226.8K 🔥` `NEW`
1. [迪丽热巴李慧珍下沉口碑 (Dilraba and Li Huizhen sink in reputation)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9D%8E%E6%85%A7%E7%8F%8D%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `226.2K 🔥` `NEW`
1. [时代少年团后台突袭直播完整版](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%90%8E%E5%8F%B0%E7%AA%81%E8%A2%AD%E7%9B%B4%E6%92%AD%E5%AE%8C%E6%95%B4%E7%89%88%23) `225.1K 🔥` `NEW`
1. [宗继昌联合杜建英新设食品公司](https://s.weibo.com/weibo?q=%23%E5%AE%97%E7%BB%A7%E6%98%8C%E8%81%94%E5%90%88%E6%9D%9C%E5%BB%BA%E8%8B%B1%E6%96%B0%E8%AE%BE%E9%A3%9F%E5%93%81%E5%85%AC%E5%8F%B8%23) `223.5K 🔥` `NEW`
1. [白鹿请客孙珍妮剧组](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B7%E5%AE%A2%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%89%A7%E7%BB%84%23) `222.3K 🔥` `NEW`
1. [起底竹知了事件背后黑手](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E5%BA%95%E7%AB%B9%E7%9F%A5%E4%BA%86%E4%BA%8B%E4%BB%B6%E8%83%8C%E5%90%8E%E9%BB%91%E6%89%8B%23) `221.9K 🔥` `NEW`
1. [白海豚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `221.0K 🔥` `NEW`
1. [央视网评河南三支一扶事件](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E8%AF%84%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E4%BA%8B%E4%BB%B6%23) `219.6K 🔥` `NEW`
1. [30岁后面临的人生困局](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%90%8E%E9%9D%A2%E4%B8%B4%E7%9A%84%E4%BA%BA%E7%94%9F%E5%9B%B0%E5%B1%80%23) `218.8K 🔥` `NEW`
1. [海底捞偶遇Karina](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%81%B6%E9%81%87Karina%23) `210.4K 🔥` `NEW`
1. [银行午休窗口不该一关了之](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%E7%AA%97%E5%8F%A3%E4%B8%8D%E8%AF%A5%E4%B8%80%E5%85%B3%E4%BA%86%E4%B9%8B%23) `179.1K 🔥` `NEW`
1. [DeepSeek一天消耗了8万亿 (DeepSeek consumes 8 trillion a day)](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%80%E5%A4%A9%E6%B6%88%E8%80%97%E4%BA%868%E4%B8%87%E4%BA%BF%23) `152.5K 🔥` `NEW`
1. [时代少年团加冠礼收官场出图](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%8A%A0%E5%86%A0%E7%A4%BC%E6%94%B6%E5%AE%98%E5%9C%BA%E5%87%BA%E5%9B%BE%23) `137.4K 🔥` `NEW`
1. [九门吴老狗9集求了两次婚](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%90%B4%E8%80%81%E7%8B%979%E9%9B%86%E6%B1%82%E4%BA%86%E4%B8%A4%E6%AC%A1%E5%A9%9A%23) `136.2K 🔥` `NEW`
1. [AI唯一无法替换的角色 白古杨过](https://s.weibo.com/weibo?q=%23AI%E5%94%AF%E4%B8%80%E6%97%A0%E6%B3%95%E6%9B%BF%E6%8D%A2%E7%9A%84%E8%A7%92%E8%89%B2%20%E7%99%BD%E5%8F%A4%E6%9D%A8%E8%BF%87%23) `135.5K 🔥` `NEW`
1. [偶遇胡一天在韩国坐地铁](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%83%A1%E4%B8%80%E5%A4%A9%E5%9C%A8%E9%9F%A9%E5%9B%BD%E5%9D%90%E5%9C%B0%E9%93%81%23) `135.3K 🔥` `NEW`
1. [锦月如歌引韩网热议](https://s.weibo.com/weibo?q=%23%E9%94%A6%E6%9C%88%E5%A6%82%E6%AD%8C%E5%BC%95%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE%23) `135.2K 🔥` `NEW`
1. [婚外胚胎案原配法院外失控流泪](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E6%B3%95%E9%99%A2%E5%A4%96%E5%A4%B1%E6%8E%A7%E6%B5%81%E6%B3%AA%23) `134.4K 🔥` `NEW`
1. [姜潮麦迪娜一家四口婚纱照](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `132.0K 🔥` `NEW`
1. [iG电子竞技俱乐部公告](https://s.weibo.com/weibo?q=%23iG%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%E4%BF%B1%E4%B9%90%E9%83%A8%E5%85%AC%E5%91%8A%23) `121.2K 🔥` `NEW`
1. [曝三星中国收缩手机布局](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%89%E6%98%9F%E4%B8%AD%E5%9B%BD%E6%94%B6%E7%BC%A9%E6%89%8B%E6%9C%BA%E5%B8%83%E5%B1%80%23) `116.7K 🔥` `NEW`
1. [九门新月饭店竞拍直播 (Jiumen Crescent Hotel live bidding)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E6%96%B0%E6%9C%88%E9%A5%AD%E5%BA%97%E7%AB%9E%E6%8B%8D%E7%9B%B4%E6%92%AD%23) `116.4K 🔥` `NEW`
1. [美国制裁洽洽瓜子思念水饺](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%88%B6%E8%A3%81%E6%B4%BD%E6%B4%BD%E7%93%9C%E5%AD%90%E6%80%9D%E5%BF%B5%E6%B0%B4%E9%A5%BA%23) `370.3K 🔥` `+59%`
1. [跨越全球的东风长剑](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E8%B6%8A%E5%85%A8%E7%90%83%E7%9A%84%E4%B8%9C%E9%A3%8E%E9%95%BF%E5%89%91%23) `686.9K 🔥` `-21%`
1. [谁是九门守护官 (Who is the Guardian of the Nine Gates?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%98%AF%E4%B9%9D%E9%97%A8%E5%AE%88%E6%8A%A4%E5%AE%98%23) `685.8K 🔥` `-39%`
1. [牛蛙 抗生素 (bullfrog antibiotics)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E8%9B%99%20%E6%8A%97%E7%94%9F%E7%B4%A0%23) `293.9K 🔥` `-50%`
1. [中国人心目中天庭的样子在外网爆火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E5%A4%A9%E5%BA%AD%E7%9A%84%E6%A0%B7%E5%AD%90%E5%9C%A8%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%23) `292.9K 🔥` `-35%`
1. [姜潮麦迪娜终于要办婚礼了 (Jiang Chao and Medina are finally going to have a wedding)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E7%BB%88%E4%BA%8E%E8%A6%81%E5%8A%9E%E5%A9%9A%E7%A4%BC%E4%BA%86%23) `199.2K 🔥` `-60%`
1. [原来自己很少睡过舒服觉](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%87%AA%E5%B7%B1%E5%BE%88%E5%B0%91%E7%9D%A1%E8%BF%87%E8%88%92%E6%9C%8D%E8%A7%89%23) `183.1K 🔥` `-79%`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `178.0K 🔥` `-62%`
1. [女儿考上北大 请大家喝水](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E5%8C%97%E5%A4%A7%20%E8%AF%B7%E5%A4%A7%E5%AE%B6%E5%96%9D%E6%B0%B4%23) `140.9K 🔥` `-76%`
1. [装修最后悔的是哪件事](https://s.weibo.com/weibo?q=%23%E8%A3%85%E4%BF%AE%E6%9C%80%E5%90%8E%E6%82%94%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%B6%E4%BA%8B%23) `135.3K 🔥` `-40%`
1. [霍仙姑 傀儡](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E4%BB%99%E5%A7%91%20%E5%82%80%E5%84%A1%23) `133.0K 🔥` `-73%`

Updated at 2026-08-03 19:52:37

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
