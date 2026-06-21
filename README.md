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

1. [乌拉圭vs佛得角 (Uruguay vs Cape Verde)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%8B%89%E5%9C%ADvs%E4%BD%9B%E5%BE%97%E8%A7%92%23) `772.5K 🔥` `NEW`
1. [比利时0比0伊朗](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B60%E6%AF%940%E4%BC%8A%E6%9C%97%23) `265.6K 🔥` `NEW`
1. [月经弄脏火车床单女子再发声](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E7%81%AB%E8%BD%A6%E5%BA%8A%E5%8D%95%E5%A5%B3%E5%AD%90%E5%86%8D%E5%8F%91%E5%A3%B0%23) `476.6K 🔥` `+215%`
1. [龙舟经济火爆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E8%88%9F%E7%BB%8F%E6%B5%8E%E7%81%AB%E7%88%86%23) `438.4K 🔥` `+141%`
1. [比利时vs伊朗](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6vs%E4%BC%8A%E6%9C%97%23) `417.5K 🔥` `+33%`
1. [亚马尔](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%23) `202.6K 🔥` `+60%`
1. [渐冻症女子安装监控拍下男护工猥亵](https://s.weibo.com/weibo?q=%23%E6%B8%90%E5%86%BB%E7%97%87%E5%A5%B3%E5%AD%90%E5%AE%89%E8%A3%85%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%E7%94%B7%E6%8A%A4%E5%B7%A5%E7%8C%A5%E4%BA%B5%23) `193.8K 🔥` `+157%`
1. [雷军说当初不该和董明珠打赌 (Lei Jun said he should not have bet with Dong Mingzhu in the first place)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E5%BD%93%E5%88%9D%E4%B8%8D%E8%AF%A5%E5%92%8C%E8%91%A3%E6%98%8E%E7%8F%A0%E6%89%93%E8%B5%8C%23) `186.3K 🔥` `+142%`
1. [西班牙4比0沙特 (Spain 4-0 Saudi Arabia)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%994%E6%AF%940%E6%B2%99%E7%89%B9%23) `177.3K 🔥` `+40%`
1. [张靓颖清唱太多被罚款](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%B8%85%E5%94%B1%E5%A4%AA%E5%A4%9A%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `158.2K 🔥` `+26%`
1. [学渣学霸写作业状态区别](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%B8%A3%E5%AD%A6%E9%9C%B8%E5%86%99%E4%BD%9C%E4%B8%9A%E7%8A%B6%E6%80%81%E5%8C%BA%E5%88%AB%23) `130.8K 🔥` `+217%`
1. [年仅20岁外卖员跳河救人牺牲 (A 20-year-old deliveryman died after jumping into a river to save others)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BB%8520%E5%B2%81%E5%A4%96%E5%8D%96%E5%91%98%E8%B7%B3%E6%B2%B3%E6%95%91%E4%BA%BA%E7%89%BA%E7%89%B2%23) `115.1K 🔥` `+251%`
1. [爸爸不收红包是全国统一的吗](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%8D%E6%94%B6%E7%BA%A2%E5%8C%85%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%E5%90%97%23) `108.0K 🔥` `+135%`
1. [Falcons夺得科隆Major冠军 (Falcons win Cologne Major)](https://s.weibo.com/weibo?q=%23Falcons%E5%A4%BA%E5%BE%97%E7%A7%91%E9%9A%86Major%E5%86%A0%E5%86%9B%23) `90.8K 🔥` `+64%`
1. [孩子体内的甲酰胺从何而来](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%BD%93%E5%86%85%E7%9A%84%E7%94%B2%E9%85%B0%E8%83%BA%E4%BB%8E%E4%BD%95%E8%80%8C%E6%9D%A5%23) `90.0K 🔥` `+179%`
1. [医生说孩子剩18个月外公续命9年](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%AD%A9%E5%AD%90%E5%89%A918%E4%B8%AA%E6%9C%88%E5%A4%96%E5%85%AC%E7%BB%AD%E5%91%BD9%E5%B9%B4%23) `86.3K 🔥` `+145%`
1. [伊朗球员上场前体能已透支](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%90%83%E5%91%98%E4%B8%8A%E5%9C%BA%E5%89%8D%E4%BD%93%E8%83%BD%E5%B7%B2%E9%80%8F%E6%94%AF%23) `81.8K 🔥` `+48%`
1. [亚马尔世界杯首球 (Yamal's first World Cup goal)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%90%83%23) `73.2K 🔥` `+54%`
1. [西班牙若再被爆冷将失去晋级主动权](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%8B%A5%E5%86%8D%E8%A2%AB%E7%88%86%E5%86%B7%E5%B0%86%E5%A4%B1%E5%8E%BB%E6%99%8B%E7%BA%A7%E4%B8%BB%E5%8A%A8%E6%9D%83%23) `71.9K 🔥` `+123%`
1. [老爷爷卖饺子叉的视频火了](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B7%E7%88%B7%E5%8D%96%E9%A5%BA%E5%AD%90%E5%8F%89%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `71.9K 🔥` `+106%`
1. [家里4个地方是霉菌重灾区](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C4%E4%B8%AA%E5%9C%B0%E6%96%B9%E6%98%AF%E9%9C%89%E8%8F%8C%E9%87%8D%E7%81%BE%E5%8C%BA%23) `71.9K 🔥` `+105%`
1. [等风热吻你网传全换新人](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E7%BD%91%E4%BC%A0%E5%85%A8%E6%8D%A2%E6%96%B0%E4%BA%BA%23) `71.9K 🔥` `+123%`
1. [白鹿在睡丞磊在拍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9C%A8%E7%9D%A1%E4%B8%9E%E7%A3%8A%E5%9C%A8%E6%8B%8D%23) `71.9K 🔥` `+123%`
1. [西班牙vs沙特 (Spain vs Saudi Arabia)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E6%B2%99%E7%89%B9%23) `71.9K 🔥` `+29%`
1. [董路直言我不欣赏马宁](https://s.weibo.com/weibo?q=%23%E8%91%A3%E8%B7%AF%E7%9B%B4%E8%A8%80%E6%88%91%E4%B8%8D%E6%AC%A3%E8%B5%8F%E9%A9%AC%E5%AE%81%23) `71.9K 🔥` `+80%`
1. [美国伊朗在瑞士会谈 (US-Iran talks in Switzerland)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BC%8A%E6%9C%97%E5%9C%A8%E7%91%9E%E5%A3%AB%E4%BC%9A%E8%B0%88%23) `71.9K 🔥` `+86%`
1. [曝白玉兰场刊是各家团队自己撰写的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E5%9C%BA%E5%88%8A%E6%98%AF%E5%90%84%E5%AE%B6%E5%9B%A2%E9%98%9F%E8%87%AA%E5%B7%B1%E6%92%B0%E5%86%99%E7%9A%84%23) `71.8K 🔥` `+123%`
1. [伊朗因球员跑不动多次换人 (Iran made many substitutions because players could not move)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%A0%E7%90%83%E5%91%98%E8%B7%91%E4%B8%8D%E5%8A%A8%E5%A4%9A%E6%AC%A1%E6%8D%A2%E4%BA%BA%23) `71.8K 🔥` `+123%`
1. [虎牙 (Tiger teeth)](https://s.weibo.com/weibo?q=%23%E8%99%8E%E7%89%99%23) `71.8K 🔥` `+123%`
1. [外地人对羊皮筏子的信任程度](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9C%B0%E4%BA%BA%E5%AF%B9%E7%BE%8A%E7%9A%AE%E7%AD%8F%E5%AD%90%E7%9A%84%E4%BF%A1%E4%BB%BB%E7%A8%8B%E5%BA%A6%23) `71.8K 🔥` `+123%`
1. [千万不要信路边的写数字挑战](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%BF%A1%E8%B7%AF%E8%BE%B9%E7%9A%84%E5%86%99%E6%95%B0%E5%AD%97%E6%8C%91%E6%88%98%23) `71.8K 🔥` `+123%`
1. [67岁生女父亲否认拖累其他子女](https://s.weibo.com/weibo?q=%2367%E5%B2%81%E7%94%9F%E5%A5%B3%E7%88%B6%E4%BA%B2%E5%90%A6%E8%AE%A4%E6%8B%96%E7%B4%AF%E5%85%B6%E4%BB%96%E5%AD%90%E5%A5%B3%23) `71.8K 🔥` `+123%`
1. [南部档案2](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%882%23) `71.8K 🔥` `+123%`
1. [庄法好真诚的文字 (Zhuang Fa’s sincere words)](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E5%A5%BD%E7%9C%9F%E8%AF%9A%E7%9A%84%E6%96%87%E5%AD%97%23) `71.8K 🔥` `+123%`
1. [亚马尔首发西班牙全胜](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E9%A6%96%E5%8F%91%E8%A5%BF%E7%8F%AD%E7%89%99%E5%85%A8%E8%83%9C%23) `71.8K 🔥` `+122%`
1. [退租一年了房东还在帮我卖冰箱 (One year after I quit my lease, my landlord is still helping me sell my refrigerator.)](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A7%9F%E4%B8%80%E5%B9%B4%E4%BA%86%E6%88%BF%E4%B8%9C%E8%BF%98%E5%9C%A8%E5%B8%AE%E6%88%91%E5%8D%96%E5%86%B0%E7%AE%B1%23) `71.8K 🔥` `+122%`
1. [新娘回应伴娘集体开错门 (The bride responded to the bridesmaids collectively opening the wrong door)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E4%BC%B4%E5%A8%98%E9%9B%86%E4%BD%93%E5%BC%80%E9%94%99%E9%97%A8%23) `71.8K 🔥` `+106%`
1. [米兰男装周](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E7%94%B7%E8%A3%85%E5%91%A8%23) `71.8K 🔥` `+123%`
1. [张月陈瑶 想见你想见你想见你 (Zhang Yue and Chen Yao want to see you, want to see you, want to see you)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%20%E6%83%B3%E8%A7%81%E4%BD%A0%E6%83%B3%E8%A7%81%E4%BD%A0%E6%83%B3%E8%A7%81%E4%BD%A0%23) `71.8K 🔥` `+61%`
1. [世界杯32强已出3席 (Three of the top 32 players in the World Cup have been represented)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%B7%B2%E5%87%BA3%E5%B8%AD%23) `71.8K 🔥` `+123%`
1. [陈小春边哭边改](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E8%BE%B9%E5%93%AD%E8%BE%B9%E6%94%B9%23) `71.8K 🔥` `+123%`
1. [马宁梅西名场面](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%A2%85%E8%A5%BF%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `71.8K 🔥` `+61%`
1. [月薪5000打赏14万男子后悔了 (A man with a monthly salary of 5,000 and a reward of 140,000 regrets it)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA5000%E6%89%93%E8%B5%8F14%E4%B8%87%E7%94%B7%E5%AD%90%E5%90%8E%E6%82%94%E4%BA%86%23) `71.8K 🔥` `+123%`
1. [爱情有烟火](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%23) `71.8K 🔥` `+123%`
1. [PRX总决赛对阵LEV (PRX vs. LEV in the finals)](https://s.weibo.com/weibo?q=%23PRX%E6%80%BB%E5%86%B3%E8%B5%9B%E5%AF%B9%E9%98%B5LEV%23) `71.8K 🔥` `+87%`
1. [披哥6全开麦唱跳直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A56%E5%85%A8%E5%BC%80%E9%BA%A6%E5%94%B1%E8%B7%B3%E7%9B%B4%E6%92%AD%23) `71.7K 🔥` `+60%`
1. [西班牙首发](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E5%8F%91%23) `71.7K 🔥` `+122%`
1. [亚马尔首发](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E9%A6%96%E5%8F%91%23) `71.7K 🔥` `+122%`
1. [日本足协将2050世界杯夺冠定为终极目标](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B6%B3%E5%8D%8F%E5%B0%862050%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%BA%E5%86%A0%E5%AE%9A%E4%B8%BA%E7%BB%88%E6%9E%81%E7%9B%AE%E6%A0%87%23) `71.7K 🔥` `+61%`
1. [爷爷不泡茶兰香青柠首创 (Grandpa does not brew tea orchid lime first creation)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%E5%85%B0%E9%A6%99%E9%9D%92%E6%9F%A0%E9%A6%96%E5%88%9B%23) `200.3K 🔥` `-62%`
1. [niko](https://s.weibo.com/weibo?q=%23niko%23) `153.2K 🔥` `-30%`

Updated at 2026-06-22 06:54:04

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
