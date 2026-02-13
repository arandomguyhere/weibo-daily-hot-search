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

1. [薛之谦广州站官宣 (Joker Xue Guangzhou station official announcement)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E7%AB%99%E5%AE%98%E5%AE%A3%23) `518.1K 🔥` `NEW`
1. [白鹿李昀锐春晚造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%98%A5%E6%99%9A%E9%80%A0%E5%9E%8B%23) `243.9K 🔥` `NEW`
1. [DYG这是什么阵容](https://s.weibo.com/weibo?q=%23DYG%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88%E9%98%B5%E5%AE%B9%23) `242.4K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `234.6K 🔥` `NEW`
1. [TTG对战DYG](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98DYG%23) `232.5K 🔥` `NEW`
1. [任敏回老家也得穿省服](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E5%9B%9E%E8%80%81%E5%AE%B6%E4%B9%9F%E5%BE%97%E7%A9%BF%E7%9C%81%E6%9C%8D%23) `230.0K 🔥` `NEW`
1. [爹 生了两个活爹](https://s.weibo.com/weibo?q=%23%E7%88%B9%20%E7%94%9F%E4%BA%86%E4%B8%A4%E4%B8%AA%E6%B4%BB%E7%88%B9%23) `228.6K 🔥` `NEW`
1. [冯巩想死我了 张兴朝哭死我了](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B7%A9%E6%83%B3%E6%AD%BB%E6%88%91%E4%BA%86%20%E5%BC%A0%E5%85%B4%E6%9C%9D%E5%93%AD%E6%AD%BB%E6%88%91%E4%BA%86%23) `213.1K 🔥` `NEW`
1. [被村里的AI震撼了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9D%91%E9%87%8C%E7%9A%84AI%E9%9C%87%E6%92%BC%E4%BA%86%23) `185.5K 🔥` `NEW`
1. [魏晨你是住在央视了吗](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E4%BD%A0%E6%98%AF%E4%BD%8F%E5%9C%A8%E5%A4%AE%E8%A7%86%E4%BA%86%E5%90%97%23) `148.4K 🔥` `NEW`
1. [网红兔狲狲三郎死亡 (Internet celebrity Rabbit Saburo dies)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%85%94%E7%8B%B2%E7%8B%B2%E4%B8%89%E9%83%8E%E6%AD%BB%E4%BA%A1%23) `142.7K 🔥` `NEW`
1. [春节前夕中央领导同志看望老同志](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%89%8D%E5%A4%95%E4%B8%AD%E5%A4%AE%E9%A2%86%E5%AF%BC%E5%90%8C%E5%BF%97%E7%9C%8B%E6%9C%9B%E8%80%81%E5%90%8C%E5%BF%97%23) `141.9K 🔥` `NEW`
1. [王橹杰 祝你永远闪烁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E7%A5%9D%E4%BD%A0%E6%B0%B8%E8%BF%9C%E9%97%AA%E7%83%81%23) `127.0K 🔥` `NEW`
1. [王鑫生万物戏份仍在](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%91%AB%E7%94%9F%E4%B8%87%E7%89%A9%E6%88%8F%E4%BB%BD%E4%BB%8D%E5%9C%A8%23) `116.9K 🔥` `NEW`
1. [北京规则怪谈](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%A7%84%E5%88%99%E6%80%AA%E8%B0%88%23) `105.8K 🔥` `NEW`
1. [胡意旋 灵灵花](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%84%8F%E6%97%8B%20%E7%81%B5%E7%81%B5%E8%8A%B1%23) `98.3K 🔥` `NEW`
1. [我国首次海上实施运载火箭搜索回收](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%A6%96%E6%AC%A1%E6%B5%B7%E4%B8%8A%E5%AE%9E%E6%96%BD%E8%BF%90%E8%BD%BD%E7%81%AB%E7%AE%AD%E6%90%9C%E7%B4%A2%E5%9B%9E%E6%94%B6%23) `98.0K 🔥` `NEW`
1. [马嘉祺学会告状了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AD%A6%E4%BC%9A%E5%91%8A%E7%8A%B6%E4%BA%86%23) `95.8K 🔥` `NEW`
1. [妈妈一辈子的谎话今天说完了](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E8%B0%8E%E8%AF%9D%E4%BB%8A%E5%A4%A9%E8%AF%B4%E5%AE%8C%E4%BA%86%23) `92.6K 🔥` `NEW`
1. [湛江一海滩发现疑似儒艮尸体](https://s.weibo.com/weibo?q=%23%E6%B9%9B%E6%B1%9F%E4%B8%80%E6%B5%B7%E6%BB%A9%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `451.1K 🔥` `+45%`
1. [父母花了几十万装修的房子 (My parents spent hundreds of thousands renovating the house)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E8%8A%B1%E4%BA%86%E5%87%A0%E5%8D%81%E4%B8%87%E8%A3%85%E4%BF%AE%E7%9A%84%E6%88%BF%E5%AD%90%23) `436.4K 🔥` `+443%`
1. [爸妈嘴里的大大方方](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E5%98%B4%E9%87%8C%E7%9A%84%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `247.8K 🔥` `+150%`
1. [前女友送的40克银镯子内含30克黄金](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A5%B3%E5%8F%8B%E9%80%81%E7%9A%8440%E5%85%8B%E9%93%B6%E9%95%AF%E5%AD%90%E5%86%85%E5%90%AB30%E5%85%8B%E9%BB%84%E9%87%91%23) `240.9K 🔥` `+38%`
1. [医院一天接诊30多例性早熟儿童](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E4%B8%80%E5%A4%A9%E6%8E%A5%E8%AF%8A30%E5%A4%9A%E4%BE%8B%E6%80%A7%E6%97%A9%E7%86%9F%E5%84%BF%E7%AB%A5%23) `237.8K 🔥` `+38%`
1. [周柯宇陈妍希情人节封面](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E9%99%88%E5%A6%8D%E5%B8%8C%E6%83%85%E4%BA%BA%E8%8A%82%E5%B0%81%E9%9D%A2%23) `236.7K 🔥` `+48%`
1. [小S晒开工照](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E6%99%92%E5%BC%80%E5%B7%A5%E7%85%A7%23) `231.2K 🔥` `+59%`
1. [橹穆双人卡](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E5%8D%A1%23) `212.1K 🔥` `+59%`
1. [女演员曾公开称美国上流精英吃婴儿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9B%BE%E5%85%AC%E5%BC%80%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%B8%8A%E6%B5%81%E7%B2%BE%E8%8B%B1%E5%90%83%E5%A9%B4%E5%84%BF%23) `203.5K 🔥` `+54%`
1. [董璇被自己以前说过的话恶心到了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E8%A2%AB%E8%87%AA%E5%B7%B1%E4%BB%A5%E5%89%8D%E8%AF%B4%E8%BF%87%E7%9A%84%E8%AF%9D%E6%81%B6%E5%BF%83%E5%88%B0%E4%BA%86%23) `194.4K 🔥` `+29%`
1. [中戏发生了什么 (What happened in the drama)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `1.2M 🔥`
1. [公司利润2.7亿拿1.8亿发年终奖 (The company made a profit of 270 million and received a year-end bonus of 180 million)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%A9%E6%B6%A62.7%E4%BA%BF%E6%8B%BF1.8%E4%BA%BF%E5%8F%91%E5%B9%B4%E7%BB%88%E5%A5%96%23) `844.9K 🔥`
1. [春节回家看老师](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%9B%9E%E5%AE%B6%E7%9C%8B%E8%80%81%E5%B8%88%23) `662.3K 🔥`
1. [小酒窝朵朵三亚度假 (Little Dimple Duoduo Sanya Vacations)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%9C%B5%E6%9C%B5%E4%B8%89%E4%BA%9A%E5%BA%A6%E5%81%87%23) `141.3K 🔥`
1. [方家翊整容 (Fang Jiayi plastic surgery)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AE%B6%E7%BF%8A%E6%95%B4%E5%AE%B9%23) `78.5K 🔥`
1. [在韩国用中文训英国小狗](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%9B%BD%E7%94%A8%E4%B8%AD%E6%96%87%E8%AE%AD%E8%8B%B1%E5%9B%BD%E5%B0%8F%E7%8B%97%23) `73.2K 🔥`
1. [孙龙哽咽是我的问题我承认](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%93%BD%E5%92%BD%E6%98%AF%E6%88%91%E7%9A%84%E9%97%AE%E9%A2%98%E6%88%91%E6%89%BF%E8%AE%A4%23) `68.9K 🔥`
1. [中戏已有两位表演系主任主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%B7%B2%E6%9C%89%E4%B8%A4%E4%BD%8D%E8%A1%A8%E6%BC%94%E7%B3%BB%E4%B8%BB%E4%BB%BB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `252.4K 🔥` `-47%`
1. [丞磊王楚然 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `198.6K 🔥` `-36%`
1. [王菲 春晚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E6%98%A5%E6%99%9A%23) `182.6K 🔥` `-29%`
1. [王鑫被查 (Wang Xin was investigated)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%91%AB%E8%A2%AB%E6%9F%A5%23) `144.7K 🔥` `-40%`
1. [微信 贴图](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E8%B4%B4%E5%9B%BE%23) `119.3K 🔥` `-64%`
1. [交警查酒驾意外见家长一秒脸红](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E6%9F%A5%E9%85%92%E9%A9%BE%E6%84%8F%E5%A4%96%E8%A7%81%E5%AE%B6%E9%95%BF%E4%B8%80%E7%A7%92%E8%84%B8%E7%BA%A2%23) `98.0K 🔥` `-33%`
1. [明星红包分组](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `95.0K 🔥` `-29%`
1. [我的妈妈是校花开播](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%A6%88%E5%A6%88%E6%98%AF%E6%A0%A1%E8%8A%B1%E5%BC%80%E6%92%AD%23) `91.4K 🔥` `-50%`
1. [沙一汀掉美颜 (Sha Yiting loses her beauty)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E4%B8%80%E6%B1%80%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `88.3K 🔥` `-38%`
1. [无锡威玛犬](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E5%A8%81%E7%8E%9B%E7%8A%AC%23) `78.6K 🔥` `-40%`
1. [29岁女子因怕过年失眠近1个月](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E5%A5%B3%E5%AD%90%E5%9B%A0%E6%80%95%E8%BF%87%E5%B9%B4%E5%A4%B1%E7%9C%A0%E8%BF%911%E4%B8%AA%E6%9C%88%23) `78.4K 🔥` `-42%`
1. [内娱穿裙子跑酷的女主来了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%A9%BF%E8%A3%99%E5%AD%90%E8%B7%91%E9%85%B7%E7%9A%84%E5%A5%B3%E4%B8%BB%E6%9D%A5%E4%BA%86%23) `74.0K 🔥` `-44%`
1. [家长回应女儿因神似敦煌美人走红](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E5%9B%A0%E7%A5%9E%E4%BC%BC%E6%95%A6%E7%85%8C%E7%BE%8E%E4%BA%BA%E8%B5%B0%E7%BA%A2%23) `71.4K 🔥` `-47%`

Updated at 2026-02-13 15:16:32

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
