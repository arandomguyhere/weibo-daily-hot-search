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

1. [超强台风白海豚来了 (Super Typhoon White Dolphin is coming)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%9D%A5%E4%BA%86%23) `840.8K 🔥` `NEW`
1. [八一建军节快乐](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%B8%80%E5%BB%BA%E5%86%9B%E8%8A%82%E5%BF%AB%E4%B9%90%23) `383.1K 🔥` `NEW`
1. [外军想回家解放军回复fight](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%86%9B%E6%83%B3%E5%9B%9E%E5%AE%B6%E8%A7%A3%E6%94%BE%E5%86%9B%E5%9B%9E%E5%A4%8Dfight%23) `289.6K 🔥` `NEW`
1. [南美足联回应国际足联](https://s.weibo.com/weibo?q=%23%E5%8D%97%E7%BE%8E%E8%B6%B3%E8%81%94%E5%9B%9E%E5%BA%94%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%23) `271.0K 🔥` `NEW`
1. [国盛证券被证监会立案](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%9B%9B%E8%AF%81%E5%88%B8%E8%A2%AB%E8%AF%81%E7%9B%91%E4%BC%9A%E7%AB%8B%E6%A1%88%23) `270.1K 🔥` `NEW`
1. [曝高以翔生前女友官宣生子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AB%98%E4%BB%A5%E7%BF%94%E7%94%9F%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%AE%98%E5%AE%A3%E7%94%9F%E5%AD%90%23) `269.6K 🔥` `NEW`
1. [房主任致歉](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E8%87%B4%E6%AD%89%23) `267.9K 🔥` `NEW`
1. [辅助生殖漏洞让不忠者有可乘之机](https://s.weibo.com/weibo?q=%23%E8%BE%85%E5%8A%A9%E7%94%9F%E6%AE%96%E6%BC%8F%E6%B4%9E%E8%AE%A9%E4%B8%8D%E5%BF%A0%E8%80%85%E6%9C%89%E5%8F%AF%E4%B9%98%E4%B9%8B%E6%9C%BA%23) `267.2K 🔥` `NEW`
1. [张雅琪挑战玩手机](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%8C%91%E6%88%98%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `266.4K 🔥` `NEW`
1. [建军节](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E5%86%9B%E8%8A%82%23) `261.7K 🔥` `NEW`
1. [公瑾爆蛋创始人发声 (The founder of Gongjin Baodan speaks out)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%91%BE%E7%88%86%E8%9B%8B%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `258.4K 🔥` `NEW`
1. [建议中年人要长期坚持力量训练](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%AD%E5%B9%B4%E4%BA%BA%E8%A6%81%E9%95%BF%E6%9C%9F%E5%9D%9A%E6%8C%81%E5%8A%9B%E9%87%8F%E8%AE%AD%E7%BB%83%23) `255.4K 🔥` `NEW`
1. [Jennie的纹身](https://s.weibo.com/weibo?q=%23Jennie%E7%9A%84%E7%BA%B9%E8%BA%AB%23) `250.9K 🔥` `NEW`
1. [苏醒唱歌时何炅表情](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E5%94%B1%E6%AD%8C%E6%97%B6%E4%BD%95%E7%82%85%E8%A1%A8%E6%83%85%23) `236.9K 🔥` `NEW`
1. [美军一架F35战机在加州基地坠毁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%B8%80%E6%9E%B6F35%E6%88%98%E6%9C%BA%E5%9C%A8%E5%8A%A0%E5%B7%9E%E5%9F%BA%E5%9C%B0%E5%9D%A0%E6%AF%81%23) `228.5K 🔥` `NEW`
1. [足球世界内讧了](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E4%B8%96%E7%95%8C%E5%86%85%E8%AE%A7%E4%BA%86%23) `215.8K 🔥` `NEW`
1. [12306回应高铁为何会提前7分钟发车](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E9%AB%98%E9%93%81%E4%B8%BA%E4%BD%95%E4%BC%9A%E6%8F%90%E5%89%8D7%E5%88%86%E9%92%9F%E5%8F%91%E8%BD%A6%23) `183.2K 🔥` `NEW`
1. [连云港消防回应为何没接住坠楼女孩](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E6%B6%88%E9%98%B2%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E6%B2%A1%E6%8E%A5%E4%BD%8F%E5%9D%A0%E6%A5%BC%E5%A5%B3%E5%AD%A9%23) `169.3K 🔥` `NEW`
1. [慢性炎症是至少8种癌症的帮凶](https://s.weibo.com/weibo?q=%23%E6%85%A2%E6%80%A7%E7%82%8E%E7%97%87%E6%98%AF%E8%87%B3%E5%B0%918%E7%A7%8D%E7%99%8C%E7%97%87%E7%9A%84%E5%B8%AE%E5%87%B6%23) `164.5K 🔥` `NEW`
1. [金靖直言丑的基因很强大](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E7%9B%B4%E8%A8%80%E4%B8%91%E7%9A%84%E5%9F%BA%E5%9B%A0%E5%BE%88%E5%BC%BA%E5%A4%A7%23) `143.0K 🔥` `NEW`
1. [白鹿王韵娜的丑衣服被房东丢了 (Bailu Wang Yunna’s ugly clothes were thrown away by the landlord)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%8E%8B%E9%9F%B5%E5%A8%9C%E7%9A%84%E4%B8%91%E8%A1%A3%E6%9C%8D%E8%A2%AB%E6%88%BF%E4%B8%9C%E4%B8%A2%E4%BA%86%23) `142.0K 🔥` `NEW`
1. [耳帝说孙楠是故意放水想让大家都留下](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%AF%B4%E5%AD%99%E6%A5%A0%E6%98%AF%E6%95%85%E6%84%8F%E6%94%BE%E6%B0%B4%E6%83%B3%E8%AE%A9%E5%A4%A7%E5%AE%B6%E9%83%BD%E7%95%99%E4%B8%8B%23) `120.3K 🔥` `NEW`
1. [Neinei回应吴尊被叫文莱人](https://s.weibo.com/weibo?q=%23Neinei%E5%9B%9E%E5%BA%94%E5%90%B4%E5%B0%8A%E8%A2%AB%E5%8F%AB%E6%96%87%E8%8E%B1%E4%BA%BA%23) `111.7K 🔥` `NEW`
1. [曝WBG人员变动](https://s.weibo.com/weibo?q=%23%E6%9B%9DWBG%E4%BA%BA%E5%91%98%E5%8F%98%E5%8A%A8%23) `105.1K 🔥` `NEW`
1. [EWC](https://s.weibo.com/weibo?q=%23EWC%23) `104.5K 🔥` `NEW`
1. [目前看到的最真实的AI剧](https://s.weibo.com/weibo?q=%23%E7%9B%AE%E5%89%8D%E7%9C%8B%E5%88%B0%E7%9A%84%E6%9C%80%E7%9C%9F%E5%AE%9E%E7%9A%84AI%E5%89%A7%23) `102.7K 🔥` `NEW`
1. [雷军称小米澎程没有固定标签](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E6%B2%A1%E6%9C%89%E5%9B%BA%E5%AE%9A%E6%A0%87%E7%AD%BE%23) `101.9K 🔥` `NEW`
1. [台风白海豚已达17级 (Typhoon White Dolphin has reached level 17)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E8%BE%BE17%E7%BA%A7%23) `1.1M 🔥` `+516%`
1. [医保个人账户里的钱怎么用才不浪费](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E9%87%8C%E7%9A%84%E9%92%B1%E6%80%8E%E4%B9%88%E7%94%A8%E6%89%8D%E4%B8%8D%E6%B5%AA%E8%B4%B9%23) `453.7K 🔥` `+202%`
1. [房主任被停演3个月](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E8%A2%AB%E5%81%9C%E6%BC%943%E4%B8%AA%E6%9C%88%23) `440.4K 🔥` `+150%`
1. [辽宁凌晨炸街人员全被带走调查](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E5%87%8C%E6%99%A8%E7%82%B8%E8%A1%97%E4%BA%BA%E5%91%98%E5%85%A8%E8%A2%AB%E5%B8%A6%E8%B5%B0%E8%B0%83%E6%9F%A5%23) `272.0K 🔥` `+83%`
1. [李光洙起哄金宇彬申敏儿 (Lee Kwang Soo teases Kim Woo Bin and Shin Min Ah)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%89%E6%B4%99%E8%B5%B7%E5%93%84%E9%87%91%E5%AE%87%E5%BD%AC%E7%94%B3%E6%95%8F%E5%84%BF%23) `264.4K 🔥` `+77%`
1. [连云港消防回应火灾母女坠楼](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E6%B6%88%E9%98%B2%E5%9B%9E%E5%BA%94%E7%81%AB%E7%81%BE%E6%AF%8D%E5%A5%B3%E5%9D%A0%E6%A5%BC%23) `263.8K 🔥` `+77%`
1. [三大运营商将停止第三方互联网渠道办卡](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%B0%86%E5%81%9C%E6%AD%A2%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BA%92%E8%81%94%E7%BD%91%E6%B8%A0%E9%81%93%E5%8A%9E%E5%8D%A1%23) `260.0K 🔥` `+79%`
1. [三大运营商发布公告 (The three major operators issued announcements)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%8F%91%E5%B8%83%E5%85%AC%E5%91%8A%23) `259.5K 🔥` `+78%`
1. [上海一顾客因大盘鸡里有土豆报警](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E9%A1%BE%E5%AE%A2%E5%9B%A0%E5%A4%A7%E7%9B%98%E9%B8%A1%E9%87%8C%E6%9C%89%E5%9C%9F%E8%B1%86%E6%8A%A5%E8%AD%A6%23) `257.0K 🔥` `+80%`
1. [孕妇室内骑平衡车与人相撞致流产](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E5%AE%A4%E5%86%85%E9%AA%91%E5%B9%B3%E8%A1%A1%E8%BD%A6%E4%B8%8E%E4%BA%BA%E7%9B%B8%E6%92%9E%E8%87%B4%E6%B5%81%E4%BA%A7%23) `255.4K 🔥` `+79%`
1. [原来到一定年龄就想生小孩了 (It turns out that when you reach a certain age, you want to have children.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%88%B0%E4%B8%80%E5%AE%9A%E5%B9%B4%E9%BE%84%E5%B0%B1%E6%83%B3%E7%94%9F%E5%B0%8F%E5%AD%A9%E4%BA%86%23) `249.7K 🔥` `+77%`
1. [华尔街AI股神高杠杆爆仓出局 (Wall Street’s AI stock god is out of business due to highly leveraged positions)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B0%94%E8%A1%97AI%E8%82%A1%E7%A5%9E%E9%AB%98%E6%9D%A0%E6%9D%86%E7%88%86%E4%BB%93%E5%87%BA%E5%B1%80%23) `202.3K 🔥` `+41%`
1. [低价大流量卡将集体退场](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BB%B7%E5%A4%A7%E6%B5%81%E9%87%8F%E5%8D%A1%E5%B0%86%E9%9B%86%E4%BD%93%E9%80%80%E5%9C%BA%23) `189.0K 🔥` `+28%`
1. [通天河漂流回应1988元擦边伴漂](https://s.weibo.com/weibo?q=%23%E9%80%9A%E5%A4%A9%E6%B2%B3%E6%BC%82%E6%B5%81%E5%9B%9E%E5%BA%941988%E5%85%83%E6%93%A6%E8%BE%B9%E4%BC%B4%E6%BC%82%23) `188.0K 🔥` `+47%`
1. [八一建军节 (Army Day)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%B8%80%E5%BB%BA%E5%86%9B%E8%8A%82%23) `157.8K 🔥` `+132%`
1. [强军制胜不负荣光 (A strong army will win and live up to the glory)](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%86%9B%E5%88%B6%E8%83%9C%E4%B8%8D%E8%B4%9F%E8%8D%A3%E5%85%89%23) `797.3K 🔥`
1. [周星驰质疑董宇辉看大话西游500遍](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E8%B4%A8%E7%96%91%E8%91%A3%E5%AE%87%E8%BE%89%E7%9C%8B%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8500%E9%81%8D%23) `766.2K 🔥`
1. [炸知了](https://s.weibo.com/weibo?q=%23%E7%82%B8%E7%9F%A5%E4%BA%86%23) `123.7K 🔥`
1. [50岁以后不要挑战更难的事](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E4%BB%A5%E5%90%8E%E4%B8%8D%E8%A6%81%E6%8C%91%E6%88%98%E6%9B%B4%E9%9A%BE%E7%9A%84%E4%BA%8B%23) `106.8K 🔥`
1. [民警调解大盘鸡放土豆纠纷走红 (Police mediate a dispute over chicken and potatoes that goes viral)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E8%B0%83%E8%A7%A3%E5%A4%A7%E7%9B%98%E9%B8%A1%E6%94%BE%E5%9C%9F%E8%B1%86%E7%BA%A0%E7%BA%B7%E8%B5%B0%E7%BA%A2%23) `106.5K 🔥`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `262.8K 🔥` `-62%`
1. [为什么感觉对方忽冷忽热的 (Why do you feel that the other person is hot and cold?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%E5%AF%B9%E6%96%B9%E5%BF%BD%E5%86%B7%E5%BF%BD%E7%83%AD%E7%9A%84%23) `113.1K 🔥` `-27%`

Updated at 2026-08-01 09:12:55

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
