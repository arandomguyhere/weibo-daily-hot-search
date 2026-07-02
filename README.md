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

1. [清华大学一本科生被公告退学 (An undergraduate student at Tsinghua University was announced to have dropped out of school)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E4%B8%80%E6%9C%AC%E7%A7%91%E7%94%9F%E8%A2%AB%E5%85%AC%E5%91%8A%E9%80%80%E5%AD%A6%23) `1.2M 🔥` `NEW`
1. [王楚钦说和孙颖莎逐渐能沟通了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E5%92%8C%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%90%E6%B8%90%E8%83%BD%E6%B2%9F%E9%80%9A%E4%BA%86%23) `875.0K 🔥` `NEW`
1. [第一次对审美强的人有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E5%AE%A1%E7%BE%8E%E5%BC%BA%E7%9A%84%E4%BA%BA%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `825.0K 🔥` `NEW`
1. [赵丽颖我连心疼你都有时差了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%88%91%E8%BF%9E%E5%BF%83%E7%96%BC%E4%BD%A0%E9%83%BD%E6%9C%89%E6%97%B6%E5%B7%AE%E4%BA%86%23) `801.0K 🔥` `NEW`
1. [世界杯16强已确定9席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF16%E5%BC%BA%E5%B7%B2%E7%A1%AE%E5%AE%9A9%E5%B8%AD%23) `509.0K 🔥` `NEW`
1. [iPhone17真涨价后你还会入手吗](https://s.weibo.com/weibo?q=%23iPhone17%E7%9C%9F%E6%B6%A8%E4%BB%B7%E5%90%8E%E4%BD%A0%E8%BF%98%E4%BC%9A%E5%85%A5%E6%89%8B%E5%90%97%23) `476.2K 🔥` `NEW`
1. [清华院系公众号已被删除孩童毕业照](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E9%99%A2%E7%B3%BB%E5%85%AC%E4%BC%97%E5%8F%B7%E5%B7%B2%E8%A2%AB%E5%88%A0%E9%99%A4%E5%AD%A9%E7%AB%A5%E6%AF%95%E4%B8%9A%E7%85%A7%23) `443.0K 🔥` `NEW`
1. [网友称白鹿打戏疑为替身](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E7%99%BD%E9%B9%BF%E6%89%93%E6%88%8F%E7%96%91%E4%B8%BA%E6%9B%BF%E8%BA%AB%23) `427.3K 🔥` `NEW`
1. [比利时内讧对手都来劝架](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E5%86%85%E8%AE%A7%E5%AF%B9%E6%89%8B%E9%83%BD%E6%9D%A5%E5%8A%9D%E6%9E%B6%23) `417.1K 🔥` `NEW`
1. [短剧演员取消行程图](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E5%8F%96%E6%B6%88%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `392.5K 🔥` `NEW`
1. [柳柳选择爆灯离开 (Liu Liu chose to leave with a bang.)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E9%80%89%E6%8B%A9%E7%88%86%E7%81%AF%E7%A6%BB%E5%BC%80%23) `391.2K 🔥` `NEW`
1. [韩国女消防员15个月被迫陪酒24次](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%B6%88%E9%98%B2%E5%91%9815%E4%B8%AA%E6%9C%88%E8%A2%AB%E8%BF%AB%E9%99%AA%E9%85%9224%E6%AC%A1%23) `388.8K 🔥` `NEW`
1. [美国半场1比0波黑](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8D%8A%E5%9C%BA1%E6%AF%940%E6%B3%A2%E9%BB%91%23) `387.5K 🔥` `NEW`
1. [卖了一万台的情感陪伴机器人](https://s.weibo.com/weibo?q=%23%E5%8D%96%E4%BA%86%E4%B8%80%E4%B8%87%E5%8F%B0%E7%9A%84%E6%83%85%E6%84%9F%E9%99%AA%E4%BC%B4%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `386.0K 🔥` `NEW`
1. [黄多多腕线过裆](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E8%85%95%E7%BA%BF%E8%BF%87%E8%A3%86%23) `384.2K 🔥` `NEW`
1. [孙颖莎carry](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Ecarry%23) `382.7K 🔥` `NEW`
1. [失联20年女儿归来和外甥女争遗产](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%81%9420%E5%B9%B4%E5%A5%B3%E5%84%BF%E5%BD%92%E6%9D%A5%E5%92%8C%E5%A4%96%E7%94%A5%E5%A5%B3%E4%BA%89%E9%81%97%E4%BA%A7%23) `374.9K 🔥` `NEW`
1. [情侣徒手爬上443米帝国大厦求婚](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%BE%92%E6%89%8B%E7%88%AC%E4%B8%8A443%E7%B1%B3%E5%B8%9D%E5%9B%BD%E5%A4%A7%E5%8E%A6%E6%B1%82%E5%A9%9A%23) `372.5K 🔥` `NEW`
1. [王一博人鱼上映倒计时](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%BA%E9%B1%BC%E4%B8%8A%E6%98%A0%E5%80%92%E8%AE%A1%E6%97%B6%23) `368.9K 🔥` `NEW`
1. [杰伦布朗保罗乔治互换](https://s.weibo.com/weibo?q=%23%E6%9D%B0%E4%BC%A6%E5%B8%83%E6%9C%97%E4%BF%9D%E7%BD%97%E4%B9%94%E6%B2%BB%E4%BA%92%E6%8D%A2%23) `364.5K 🔥` `NEW`
1. [徐洁儿 大家私下约了好多聚会 (Xu Jieer, we have made many private appointments for gatherings)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%20%E5%A4%A7%E5%AE%B6%E7%A7%81%E4%B8%8B%E7%BA%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%E8%81%9A%E4%BC%9A%23) `360.6K 🔥` `NEW`
1. [多囊卵巢综合征是全身代谢问题](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E6%98%AF%E5%85%A8%E8%BA%AB%E4%BB%A3%E8%B0%A2%E9%97%AE%E9%A2%98%23) `358.8K 🔥` `NEW`
1. [姑姑亲了一口宝宝差点都会说话了](https://s.weibo.com/weibo?q=%23%E5%A7%91%E5%A7%91%E4%BA%B2%E4%BA%86%E4%B8%80%E5%8F%A3%E5%AE%9D%E5%AE%9D%E5%B7%AE%E7%82%B9%E9%83%BD%E4%BC%9A%E8%AF%B4%E8%AF%9D%E4%BA%86%23) `356.9K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `354.8K 🔥` `NEW`
1. [王楚钦孙颖莎混双逆转](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%B7%B7%E5%8F%8C%E9%80%86%E8%BD%AC%23) `350.0K 🔥` `NEW`
1. [温水朱青蛙聊天记录](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E6%B0%B4%E6%9C%B1%E9%9D%92%E8%9B%99%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `347.7K 🔥` `NEW`
1. [孙颖莎打完混双先退场备战女单](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E5%AE%8C%E6%B7%B7%E5%8F%8C%E5%85%88%E9%80%80%E5%9C%BA%E5%A4%87%E6%88%98%E5%A5%B3%E5%8D%95%23) `344.4K 🔥` `NEW`
1. [塞克斯顿加盟湖人重攻轻守](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%85%8B%E6%96%AF%E9%A1%BF%E5%8A%A0%E7%9B%9F%E6%B9%96%E4%BA%BA%E9%87%8D%E6%94%BB%E8%BD%BB%E5%AE%88%23) `340.3K 🔥` `NEW`
1. [湖人新三巨头来了](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%96%B0%E4%B8%89%E5%B7%A8%E5%A4%B4%E6%9D%A5%E4%BA%86%23) `338.4K 🔥` `NEW`
1. [苹果信息泄露 你也能手搓苹果开发板](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%BF%A1%E6%81%AF%E6%B3%84%E9%9C%B2%20%E4%BD%A0%E4%B9%9F%E8%83%BD%E6%89%8B%E6%90%93%E8%8B%B9%E6%9E%9C%E5%BC%80%E5%8F%91%E6%9D%BF%23) `336.1K 🔥` `NEW`
1. [SpaceX大跌6% (SpaceX plunges 6%)](https://s.weibo.com/weibo?q=%23SpaceX%E5%A4%A7%E8%B7%8C6%25%23) `335.1K 🔥` `NEW`
1. [王橹杰陈浚铭选曲票数](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%B5%9A%E9%93%AD%E9%80%89%E6%9B%B2%E7%A5%A8%E6%95%B0%23) `332.8K 🔥` `NEW`
1. [孙颖莎给勒布伦打趴下了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%BB%99%E5%8B%92%E5%B8%83%E4%BC%A6%E6%89%93%E8%B6%B4%E4%B8%8B%E4%BA%86%23) `830.8K 🔥` `+409%`
1. [全球最美女孩结婚](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E7%BE%8E%E5%A5%B3%E5%AD%A9%E7%BB%93%E5%A9%9A%23) `454.2K 🔥` `+155%`
1. [儿子嫌饭难吃扬言杀全家被父砍伤](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%AB%8C%E9%A5%AD%E9%9A%BE%E5%90%83%E6%89%AC%E8%A8%80%E6%9D%80%E5%85%A8%E5%AE%B6%E8%A2%AB%E7%88%B6%E7%A0%8D%E4%BC%A4%23) `402.0K 🔥` `+128%`
1. [霍震霆回应霍启山娜然结婚传闻](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E9%9C%87%E9%9C%86%E5%9B%9E%E5%BA%94%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%E7%BB%93%E5%A9%9A%E4%BC%A0%E9%97%BB%23) `380.2K 🔥` `+122%`
1. [美国vs波黑](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDvs%E6%B3%A2%E9%BB%91%23) `375.8K 🔥` `+1064%`
1. [霍启山曾为章子怡缺席家族聚会](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%E6%9B%BE%E4%B8%BA%E7%AB%A0%E5%AD%90%E6%80%A1%E7%BC%BA%E5%B8%AD%E5%AE%B6%E6%97%8F%E8%81%9A%E4%BC%9A%23) `369.9K 🔥` `+118%`
1. [人工智能冲击婚纱影楼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%86%B2%E5%87%BB%E5%A9%9A%E7%BA%B1%E5%BD%B1%E6%A5%BC%23) `366.8K 🔥` `+107%`
1. [曾志伟婉拒了成毅粉丝](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%BF%97%E4%BC%9F%E5%A9%89%E6%8B%92%E4%BA%86%E6%88%90%E6%AF%85%E7%B2%89%E4%B8%9D%23) `363.3K 🔥` `+55%`
1. [机器人伴侣你会买吗 (Would you buy a robot companion?)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%B4%E4%BE%A3%E4%BD%A0%E4%BC%9A%E4%B9%B0%E5%90%97%23) `352.5K 🔥` `+96%`
1. [A股将取消5%涨跌停板 (A-shares will lift 5% price limit)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%86%E5%8F%96%E6%B6%885%25%E6%B6%A8%E8%B7%8C%E5%81%9C%E6%9D%BF%23) `345.5K 🔥` `+115%`
1. [晚期胃癌药99万元一人份](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%9C%9F%E8%83%83%E7%99%8C%E8%8D%AF99%E4%B8%87%E5%85%83%E4%B8%80%E4%BA%BA%E4%BB%BD%23) `343.3K 🔥` `+126%`
1. [丁程鑫时刻记得自己是周柯宇哥哥 (Ding Chengxin always remembers that he is Zhou Keyu’s brother)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%97%B6%E5%88%BB%E8%AE%B0%E5%BE%97%E8%87%AA%E5%B7%B1%E6%98%AF%E5%91%A8%E6%9F%AF%E5%AE%87%E5%93%A5%E5%93%A5%23) `330.3K 🔥` `+100%`
1. [英格兰 不是点球](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%20%E4%B8%8D%E6%98%AF%E7%82%B9%E7%90%83%23) `329.5K 🔥` `+89%`
1. [小小红船已变身巍巍巨轮](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B0%8F%E7%BA%A2%E8%88%B9%E5%B7%B2%E5%8F%98%E8%BA%AB%E5%B7%8D%E5%B7%8D%E5%B7%A8%E8%BD%AE%23) `832.6K 🔥`
1. [陈晓被打耳光路透 (Chen Xiao was slapped Reuters)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E8%A2%AB%E6%89%93%E8%80%B3%E5%85%89%E8%B7%AF%E9%80%8F%23) `499.1K 🔥`
1. [比利时 内讧](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%20%E5%86%85%E8%AE%A7%23) `641.5K 🔥` `-76%`
1. [比利时让2追3 (Belgium let 2 chase 3)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E8%AE%A92%E8%BF%BD3%23) `377.9K 🔥` `-86%`
1. [王楚钦孙颖莎vsA勒布伦大藤沙月](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8EvsA%E5%8B%92%E5%B8%83%E4%BC%A6%E5%A4%A7%E8%97%A4%E6%B2%99%E6%9C%88%23) `354.5K 🔥` `-40%`

Updated at 2026-07-02 09:51:47

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
