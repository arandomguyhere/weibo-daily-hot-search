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

1. [潘展乐反超夺金](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E5%8F%8D%E8%B6%85%E5%A4%BA%E9%87%91%23) `2.2M 🔥` `NEW`
1. [亚运会官网搞错王楚钦比分](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%AE%98%E7%BD%91%E6%90%9E%E9%94%99%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%AF%94%E5%88%86%23) `1.2M 🔥` `NEW`
1. [从数据里读懂中国经济韧性](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%95%B0%E6%8D%AE%E9%87%8C%E8%AF%BB%E6%87%82%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E9%9F%A7%E6%80%A7%23) `757.3K 🔥` `NEW`
1. [秦始皇陵水银来源被找到](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%A7%8B%E7%9A%87%E9%99%B5%E6%B0%B4%E9%93%B6%E6%9D%A5%E6%BA%90%E8%A2%AB%E6%89%BE%E5%88%B0%23) `633.0K 🔥` `NEW`
1. [2026湾区升明月节目单](https://s.weibo.com/weibo?q=%232026%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E8%8A%82%E7%9B%AE%E5%8D%95%23) `572.6K 🔥` `NEW`
1. [丁禹兮大宝全球品牌代言人](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%A4%A7%E5%AE%9D%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `571.9K 🔥` `NEW`
1. [徐嘉余霸气夺金](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%98%89%E4%BD%99%E9%9C%B8%E6%B0%94%E5%A4%BA%E9%87%91%23) `571.8K 🔥` `NEW`
1. [亚运会乒乓球](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B9%92%E4%B9%93%E7%90%83%23) `541.1K 🔥` `NEW`
1. [郭士强大喊伊朗没篮最终命中15记三分](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%E5%A4%A7%E5%96%8A%E4%BC%8A%E6%9C%97%E6%B2%A1%E7%AF%AE%E6%9C%80%E7%BB%88%E5%91%BD%E4%B8%AD15%E8%AE%B0%E4%B8%89%E5%88%86%23) `493.6K 🔥` `NEW`
1. [床底藏大量避孕套酒店称阿姨忘了扫](https://s.weibo.com/weibo?q=%23%E5%BA%8A%E5%BA%95%E8%97%8F%E5%A4%A7%E9%87%8F%E9%81%BF%E5%AD%95%E5%A5%97%E9%85%92%E5%BA%97%E7%A7%B0%E9%98%BF%E5%A7%A8%E5%BF%98%E4%BA%86%E6%89%AB%23) `493.0K 🔥` `NEW`
1. [许嵩婚纱礼服是借的](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%A9%9A%E7%BA%B1%E7%A4%BC%E6%9C%8D%E6%98%AF%E5%80%9F%E7%9A%84%23) `484.2K 🔥` `NEW`
1. [已婚女子与男子开房次日全裸身亡](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%A9%9A%E5%A5%B3%E5%AD%90%E4%B8%8E%E7%94%B7%E5%AD%90%E5%BC%80%E6%88%BF%E6%AC%A1%E6%97%A5%E5%85%A8%E8%A3%B8%E8%BA%AB%E4%BA%A1%23) `470.7K 🔥` `NEW`
1. [郭士强 下课](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E4%B8%8B%E8%AF%BE%23) `467.0K 🔥` `NEW`
1. [我们来了 王菲](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%20%E7%8E%8B%E8%8F%B2%23) `464.8K 🔥` `NEW`
1. [张家齐看妈妈出丑后冷笑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9C%8B%E5%A6%88%E5%A6%88%E5%87%BA%E4%B8%91%E5%90%8E%E5%86%B7%E7%AC%91%23) `448.6K 🔥` `NEW`
1. [白鹿偷走常华森的狗](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%81%B7%E8%B5%B0%E5%B8%B8%E5%8D%8E%E6%A3%AE%E7%9A%84%E7%8B%97%23) `363.5K 🔥` `NEW`
1. [郭士强 伊朗](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E4%BC%8A%E6%9C%97%23) `351.7K 🔥` `NEW`
1. [潘展乐赢日本选手近1秒](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E8%B5%A2%E6%97%A5%E6%9C%AC%E9%80%89%E6%89%8B%E8%BF%911%E7%A7%92%23) `343.1K 🔥` `NEW`
1. [小米18Pro星河蓝](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E6%98%9F%E6%B2%B3%E8%93%9D%23) `329.7K 🔥` `NEW`
1. [尔康真的娶到了紫薇](https://s.weibo.com/weibo?q=%23%E5%B0%94%E5%BA%B7%E7%9C%9F%E7%9A%84%E5%A8%B6%E5%88%B0%E4%BA%86%E7%B4%AB%E8%96%87%23) `318.2K 🔥` `NEW`
1. [S16抽签](https://s.weibo.com/weibo?q=%23S16%E6%8A%BD%E7%AD%BE%23) `313.9K 🔥` `NEW`
1. [Fly回归重庆狼队](https://s.weibo.com/weibo?q=%23Fly%E5%9B%9E%E5%BD%92%E9%87%8D%E5%BA%86%E7%8B%BC%E9%98%9F%23) `305.8K 🔥` `NEW`
1. [郭焱谈孙颖莎3比0朱雨玲](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%84%B1%E8%B0%88%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%940%E6%9C%B1%E9%9B%A8%E7%8E%B2%23) `298.3K 🔥` `NEW`
1. [许嵩冯禧回门宴细节](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%86%AF%E7%A6%A7%E5%9B%9E%E9%97%A8%E5%AE%B4%E7%BB%86%E8%8A%82%23) `264.3K 🔥` `NEW`
1. [当英国同事来上海三个月后](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%8B%B1%E5%9B%BD%E5%90%8C%E4%BA%8B%E6%9D%A5%E4%B8%8A%E6%B5%B7%E4%B8%89%E4%B8%AA%E6%9C%88%E5%90%8E%23) `260.3K 🔥` `NEW`
1. [原来一千粒扣子是这么打包的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%80%E5%8D%83%E7%B2%92%E6%89%A3%E5%AD%90%E6%98%AF%E8%BF%99%E4%B9%88%E6%89%93%E5%8C%85%E7%9A%84%23) `259.1K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `239.2K 🔥` `NEW`
1. [湾区升明月宣传节奏](https://s.weibo.com/weibo?q=%23%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E5%AE%A3%E4%BC%A0%E8%8A%82%E5%A5%8F%23) `210.4K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `207.0K 🔥` `NEW`
1. [四川大学吸烟将取消减免资格](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%E5%90%B8%E7%83%9F%E5%B0%86%E5%8F%96%E6%B6%88%E5%87%8F%E5%85%8D%E8%B5%84%E6%A0%BC%23) `203.1K 🔥` `NEW`
1. [老人误饮车内农药家属索赔47.8万](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%AF%AF%E9%A5%AE%E8%BD%A6%E5%86%85%E5%86%9C%E8%8D%AF%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9447.8%E4%B8%87%23) `201.5K 🔥` `NEW`
1. [朱雨玲说在澳门也是为中国而战](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%A8%E7%8E%B2%E8%AF%B4%E5%9C%A8%E6%BE%B3%E9%97%A8%E4%B9%9F%E6%98%AF%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%80%8C%E6%88%98%23) `197.6K 🔥` `NEW`
1. [中国女子4x100米自接力金牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%904x100%E7%B1%B3%E8%87%AA%E6%8E%A5%E5%8A%9B%E9%87%91%E7%89%8C%23) `196.0K 🔥` `NEW`
1. [突然感觉这才是我们应该学的](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%9F%E8%A7%89%E8%BF%99%E6%89%8D%E6%98%AF%E6%88%91%E4%BB%AC%E5%BA%94%E8%AF%A5%E5%AD%A6%E7%9A%84%23) `194.4K 🔥` `NEW`
1. [迪丽热巴见面会要弹吉他吗](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A7%81%E9%9D%A2%E4%BC%9A%E8%A6%81%E5%BC%B9%E5%90%89%E4%BB%96%E5%90%97%23) `187.5K 🔥` `NEW`
1. [陪国乒决战亚洲之巅](https://s.weibo.com/weibo?q=%23%E9%99%AA%E5%9B%BD%E4%B9%92%E5%86%B3%E6%88%98%E4%BA%9A%E6%B4%B2%E4%B9%8B%E5%B7%85%23) `181.4K 🔥` `NEW`
1. [博主讲述跟踪调查硫磺熏笋经过](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E8%AE%B2%E8%BF%B0%E8%B7%9F%E8%B8%AA%E8%B0%83%E6%9F%A5%E7%A1%AB%E7%A3%BA%E7%86%8F%E7%AC%8B%E7%BB%8F%E8%BF%87%23) `180.8K 🔥` `NEW`
1. [张家齐把妈妈说哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%8A%8A%E5%A6%88%E5%A6%88%E8%AF%B4%E5%93%AD%E4%BA%86%23) `180.7K 🔥` `NEW`
1. [女子散步遭黑影冲脸打9针](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%95%A3%E6%AD%A5%E9%81%AD%E9%BB%91%E5%BD%B1%E5%86%B2%E8%84%B8%E6%89%939%E9%92%88%23) `178.2K 🔥` `NEW`
1. [三甲医生回应60岁产妇3年内生2子](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%9460%E5%B2%81%E4%BA%A7%E5%A6%873%E5%B9%B4%E5%86%85%E7%94%9F2%E5%AD%90%23) `178.1K 🔥` `NEW`
1. [王曼昱1比3朱雨玲](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B11%E6%AF%943%E6%9C%B1%E9%9B%A8%E7%8E%B2%23) `178.0K 🔥` `NEW`
1. [洗牙出牙缝是因为牙石没了](https://s.weibo.com/weibo?q=%23%E6%B4%97%E7%89%99%E5%87%BA%E7%89%99%E7%BC%9D%E6%98%AF%E5%9B%A0%E4%B8%BA%E7%89%99%E7%9F%B3%E6%B2%A1%E4%BA%86%23) `173.5K 🔥` `NEW`
1. [曝iPhone18Pro首销日卖出超32万台](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E9%A6%96%E9%94%80%E6%97%A5%E5%8D%96%E5%87%BA%E8%B6%8532%E4%B8%87%E5%8F%B0%23) `170.4K 🔥` `NEW`
1. [白鹿偷常华森的狗呵呵掀帘子](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%81%B7%E5%B8%B8%E5%8D%8E%E6%A3%AE%E7%9A%84%E7%8B%97%E5%91%B5%E5%91%B5%E6%8E%80%E5%B8%98%E5%AD%90%23) `167.5K 🔥` `NEW`
1. [40岁后身体发出的7个信号](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E5%90%8E%E8%BA%AB%E4%BD%93%E5%8F%91%E5%87%BA%E7%9A%847%E4%B8%AA%E4%BF%A1%E5%8F%B7%23) `159.4K 🔥` `NEW`
1. [郭艾伦说大空间接得住另一种生活](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E8%AF%B4%E5%A4%A7%E7%A9%BA%E9%97%B4%E6%8E%A5%E5%BE%97%E4%BD%8F%E5%8F%A6%E4%B8%80%E7%A7%8D%E7%94%9F%E6%B4%BB%23) `155.0K 🔥` `NEW`
1. [许兰香成为当家主母](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%85%B0%E9%A6%99%E6%88%90%E4%B8%BA%E5%BD%93%E5%AE%B6%E4%B8%BB%E6%AF%8D%23) `152.8K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `572.8K 🔥` `+159%`
1. [单依纯 尤长靖](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E5%B0%A4%E9%95%BF%E9%9D%96%23) `210.8K 🔥` `-23%`

Updated at 2026-09-20 19:20:01

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
