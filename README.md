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

1. [韩国第8 (South Korea 8th)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%AC%AC8%23) `1.4M 🔥` `NEW`
1. [把能源饭碗牢牢端在中国人自己手中](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%83%BD%E6%BA%90%E9%A5%AD%E7%A2%97%E7%89%A2%E7%89%A2%E7%AB%AF%E5%9C%A8%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%AA%E5%B7%B1%E6%89%8B%E4%B8%AD%23) `675.9K 🔥` `NEW`
1. [日本悍然模拟攻击辽宁舰](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%82%8D%E7%84%B6%E6%A8%A1%E6%8B%9F%E6%94%BB%E5%87%BB%E8%BE%BD%E5%AE%81%E8%88%B0%23) `302.8K 🔥` `NEW`
1. [乌拉圭主帅心态爆炸怒吼记者](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%8B%89%E5%9C%AD%E4%B8%BB%E5%B8%85%E5%BF%83%E6%80%81%E7%88%86%E7%82%B8%E6%80%92%E5%90%BC%E8%AE%B0%E8%80%85%23) `260.7K 🔥` `NEW`
1. [乘风2026乘风之夜歌单](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B9%98%E9%A3%8E%E4%B9%8B%E5%A4%9C%E6%AD%8C%E5%8D%95%23) `258.5K 🔥` `NEW`
1. [张一山发文祝贺杨紫](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E5%8F%91%E6%96%87%E7%A5%9D%E8%B4%BA%E6%9D%A8%E7%B4%AB%23) `255.6K 🔥` `NEW`
1. [迪丽热巴金鹰视后价值](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%87%91%E9%B9%B0%E8%A7%86%E5%90%8E%E4%BB%B7%E5%80%BC%23) `254.0K 🔥` `NEW`
1. [二手炸鸡](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E7%82%B8%E9%B8%A1%23) `252.4K 🔥` `NEW`
1. [樊振东突然出现](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%AA%81%E7%84%B6%E5%87%BA%E7%8E%B0%23) `244.1K 🔥` `NEW`
1. [哈兰德球迷放狠话结果本人没上场](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%90%83%E8%BF%B7%E6%94%BE%E7%8B%A0%E8%AF%9D%E7%BB%93%E6%9E%9C%E6%9C%AC%E4%BA%BA%E6%B2%A1%E4%B8%8A%E5%9C%BA%23) `244.1K 🔥` `NEW`
1. [几百元榴莲被男子白剽后卖18元一斤 (Durian costing several hundred yuan was ripped off by a man and sold for 18 yuan a pound)](https://s.weibo.com/weibo?q=%23%E5%87%A0%E7%99%BE%E5%85%83%E6%A6%B4%E8%8E%B2%E8%A2%AB%E7%94%B7%E5%AD%90%E7%99%BD%E5%89%BD%E5%90%8E%E5%8D%9618%E5%85%83%E4%B8%80%E6%96%A4%23) `244.1K 🔥` `NEW`
1. [韩国在算积分伊朗在冲锋](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%9C%A8%E7%AE%97%E7%A7%AF%E5%88%86%E4%BC%8A%E6%9C%97%E5%9C%A8%E5%86%B2%E9%94%8B%23) `244.0K 🔥` `NEW`
1. [王安宇声明毕业证和学位证作废](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%A3%B0%E6%98%8E%E6%AF%95%E4%B8%9A%E8%AF%81%E5%92%8C%E5%AD%A6%E4%BD%8D%E8%AF%81%E4%BD%9C%E5%BA%9F%23) `244.0K 🔥` `NEW`
1. [金鹰奖出席率少的原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%87%BA%E5%B8%AD%E7%8E%87%E5%B0%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `243.9K 🔥` `NEW`
1. [世界杯32强已确定28席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%B7%B2%E7%A1%AE%E5%AE%9A28%E5%B8%AD%23) `243.9K 🔥` `NEW`
1. [浪姐总决赛7位乘风师姐阵容](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B7%E4%BD%8D%E4%B9%98%E9%A3%8E%E5%B8%88%E5%A7%90%E9%98%B5%E5%AE%B9%23) `243.9K 🔥` `NEW`
1. [张凌赫凌晨发ins](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%8C%E6%99%A8%E5%8F%91ins%23) `243.8K 🔥` `NEW`
1. [警方回应13岁女孩遭2男性侵被撤案](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%9413%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD2%E7%94%B7%E6%80%A7%E4%BE%B5%E8%A2%AB%E6%92%A4%E6%A1%88%23) `243.8K 🔥` `NEW`
1. [王玉雯不敢看林一腹肌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%8D%E6%95%A2%E7%9C%8B%E6%9E%97%E4%B8%80%E8%85%B9%E8%82%8C%23) `243.8K 🔥` `NEW`
1. [我国核聚变堆超导磁体研发取得重要突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%A0%B8%E8%81%9A%E5%8F%98%E5%A0%86%E8%B6%85%E5%AF%BC%E7%A3%81%E4%BD%93%E7%A0%94%E5%8F%91%E5%8F%96%E5%BE%97%E9%87%8D%E8%A6%81%E7%AA%81%E7%A0%B4%23) `243.7K 🔥` `NEW`
1. [歌手舞台淘汰了一个最珍重它的人 (The singer stage eliminated the person who cherished it most)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%88%9E%E5%8F%B0%E6%B7%98%E6%B1%B0%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%80%E7%8F%8D%E9%87%8D%E5%AE%83%E7%9A%84%E4%BA%BA%23) `243.7K 🔥` `NEW`
1. [蔡徐坤小黄豆比心](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E5%B0%8F%E9%BB%84%E8%B1%86%E6%AF%94%E5%BF%83%23) `243.7K 🔥` `NEW`
1. [樊振东祝福上海市运会参赛选手](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%A5%9D%E7%A6%8F%E4%B8%8A%E6%B5%B7%E5%B8%82%E8%BF%90%E4%BC%9A%E5%8F%82%E8%B5%9B%E9%80%89%E6%89%8B%23) `243.6K 🔥` `NEW`
1. [papi酱说老公养我是他的福气](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E8%AF%B4%E8%80%81%E5%85%AC%E5%85%BB%E6%88%91%E6%98%AF%E4%BB%96%E7%9A%84%E7%A6%8F%E6%B0%94%23) `239.7K 🔥` `NEW`
1. [张远感谢薛之谦](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%84%9F%E8%B0%A2%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `231.4K 🔥` `NEW`
1. [千香热度](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%A6%99%E7%83%AD%E5%BA%A6%23) `231.1K 🔥` `NEW`
1. [高考716分男生中考语文仅98分](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83716%E5%88%86%E7%94%B7%E7%94%9F%E4%B8%AD%E8%80%83%E8%AF%AD%E6%96%87%E4%BB%8598%E5%88%86%23) `223.1K 🔥` `NEW`
1. [严浩翔回应王一珩参加说唱巅峰](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%9B%9E%E5%BA%94%E7%8E%8B%E4%B8%80%E7%8F%A9%E5%8F%82%E5%8A%A0%E8%AF%B4%E5%94%B1%E5%B7%85%E5%B3%B0%23) `223.0K 🔥` `NEW`
1. [国家奖金鹰是所有观众投票](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%A5%96%E9%87%91%E9%B9%B0%E6%98%AF%E6%89%80%E6%9C%89%E8%A7%82%E4%BC%97%E6%8A%95%E7%A5%A8%23) `222.9K 🔥` `NEW`
1. [18岁少女吃同事给的解压药竟是毒品](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%B0%91%E5%A5%B3%E5%90%83%E5%90%8C%E4%BA%8B%E7%BB%99%E7%9A%84%E8%A7%A3%E5%8E%8B%E8%8D%AF%E7%AB%9F%E6%98%AF%E6%AF%92%E5%93%81%23) `222.6K 🔥` `NEW`
1. [王安宇毕业证书丢了 (Wang Anyu lost his graduation certificate)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%AF%95%E4%B8%9A%E8%AF%81%E4%B9%A6%E4%B8%A2%E4%BA%86%23) `260.5K 🔥` `+32%`
1. [韩国人又开始结婚生娃了 (Koreans are getting married and having babies again)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%8F%88%E5%BC%80%E5%A7%8B%E7%BB%93%E5%A9%9A%E7%94%9F%E5%A8%83%E4%BA%86%23) `222.5K 🔥` `+26%`
1. [金鹰奖 (Golden Eagle Award)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `903.4K 🔥` `-55%`
1. [杨紫获奖孙俪吴越反应](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8E%B7%E5%A5%96%E5%AD%99%E4%BF%AA%E5%90%B4%E8%B6%8A%E5%8F%8D%E5%BA%94%23) `642.4K 🔥` `-40%`
1. [微信互删重加朋友圈互动全恢复](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BA%92%E5%88%A0%E9%87%8D%E5%8A%A0%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%8A%A8%E5%85%A8%E6%81%A2%E5%A4%8D%23) `468.7K 🔥` `-42%`
1. [衣服不是穿坏的是洗坏的](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E4%B8%8D%E6%98%AF%E7%A9%BF%E5%9D%8F%E7%9A%84%E6%98%AF%E6%B4%97%E5%9D%8F%E7%9A%84%23) `319.9K 🔥` `-58%`
1. [佛得角出线](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%87%BA%E7%BA%BF%23) `261.9K 🔥` `-81%`
1. [警方称13岁女孩与2男自愿发生关系](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A7%B013%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%8E2%E7%94%B7%E8%87%AA%E6%84%BF%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%23) `256.4K 🔥` `-66%`
1. [文科生看了两个小时志愿后](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%A7%91%E7%94%9F%E7%9C%8B%E4%BA%86%E4%B8%A4%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%BF%97%E6%84%BF%E5%90%8E%23) `250.9K 🔥` `-66%`
1. [首支出局的世界杯冠军](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%94%AF%E5%87%BA%E5%B1%80%E7%9A%84%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%23) `243.7K 🔥` `-71%`
1. [白玉兰3月爆料全对上了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B03%E6%9C%88%E7%88%86%E6%96%99%E5%85%A8%E5%AF%B9%E4%B8%8A%E4%BA%86%23) `243.6K 🔥` `-68%`
1. [伊朗越位绝杀被吹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B6%8A%E4%BD%8D%E7%BB%9D%E6%9D%80%E8%A2%AB%E5%90%B9%23) `243.5K 🔥` `-76%`
1. [张凌赫问紫姐在哪 (Zhang Linghe asked where Sister Zi was)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%97%AE%E7%B4%AB%E5%A7%90%E5%9C%A8%E5%93%AA%23) `239.9K 🔥` `-76%`
1. [韩国队要给西班牙磕一个](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E8%A6%81%E7%BB%99%E8%A5%BF%E7%8F%AD%E7%89%99%E7%A3%95%E4%B8%80%E4%B8%AA%23) `232.9K 🔥` `-62%`
1. [背刺6.78亿用户WPS吃相有点难看](https://s.weibo.com/weibo?q=%23%E8%83%8C%E5%88%BA6.78%E4%BA%BF%E7%94%A8%E6%88%B7WPS%E5%90%83%E7%9B%B8%E6%9C%89%E7%82%B9%E9%9A%BE%E7%9C%8B%23) `222.8K 🔥` `-43%`
1. [藏海传 挂零](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%20%E6%8C%82%E9%9B%B6%23) `222.7K 🔥` `-58%`
1. [于正说白鹿十年只是刚刚开始](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%AF%B4%E7%99%BD%E9%B9%BF%E5%8D%81%E5%B9%B4%E5%8F%AA%E6%98%AF%E5%88%9A%E5%88%9A%E5%BC%80%E5%A7%8B%23) `222.4K 🔥` `-69%`
1. [陈露霍尊和解多次未果 (Chen Lu and Huo Zun failed to reconcile many times)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9C%B2%E9%9C%8D%E5%B0%8A%E5%92%8C%E8%A7%A3%E5%A4%9A%E6%AC%A1%E6%9C%AA%E6%9E%9C%23) `210.2K 🔥` `-63%`

Updated at 2026-06-27 16:14:34

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
