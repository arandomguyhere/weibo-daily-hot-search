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

1. [中戏发生了什么 (What happened in the drama)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `1.3M 🔥` `NEW`
1. [春节回家看老师](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%9B%9E%E5%AE%B6%E7%9C%8B%E8%80%81%E5%B8%88%23) `701.2K 🔥` `NEW`
1. [医院一天接诊30多例性早熟儿童](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E4%B8%80%E5%A4%A9%E6%8E%A5%E8%AF%8A30%E5%A4%9A%E4%BE%8B%E6%80%A7%E6%97%A9%E7%86%9F%E5%84%BF%E7%AB%A5%23) `172.9K 🔥` `NEW`
1. [周柯宇陈妍希情人节封面](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E9%99%88%E5%A6%8D%E5%B8%8C%E6%83%85%E4%BA%BA%E8%8A%82%E5%B0%81%E9%9D%A2%23) `159.6K 🔥` `NEW`
1. [董璇被自己以前说过的话恶心到了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E8%A2%AB%E8%87%AA%E5%B7%B1%E4%BB%A5%E5%89%8D%E8%AF%B4%E8%BF%87%E7%9A%84%E8%AF%9D%E6%81%B6%E5%BF%83%E5%88%B0%E4%BA%86%23) `150.5K 🔥` `NEW`
1. [小S晒开工照](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E6%99%92%E5%BC%80%E5%B7%A5%E7%85%A7%23) `145.5K 🔥` `NEW`
1. [沙一汀掉美颜](https://s.weibo.com/weibo?q=%23%E6%B2%99%E4%B8%80%E6%B1%80%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `143.4K 🔥` `NEW`
1. [29岁女子因怕过年失眠近1个月](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E5%A5%B3%E5%AD%90%E5%9B%A0%E6%80%95%E8%BF%87%E5%B9%B4%E5%A4%B1%E7%9C%A0%E8%BF%911%E4%B8%AA%E6%9C%88%23) `135.1K 🔥` `NEW`
1. [魏大勋敢说我都不敢听](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E6%95%A2%E8%AF%B4%E6%88%91%E9%83%BD%E4%B8%8D%E6%95%A2%E5%90%AC%23) `135.1K 🔥` `NEW`
1. [过年打麻将一场输赢超300就算赌博](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E6%89%93%E9%BA%BB%E5%B0%86%E4%B8%80%E5%9C%BA%E8%BE%93%E8%B5%A2%E8%B6%85300%E5%B0%B1%E7%AE%97%E8%B5%8C%E5%8D%9A%23) `134.7K 🔥` `NEW`
1. [家乡那家肯德基 (The KFC in my hometown)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B9%A1%E9%82%A3%E5%AE%B6%E8%82%AF%E5%BE%B7%E5%9F%BA%23) `134.6K 🔥` `NEW`
1. [家长回应女儿因神似敦煌美人走红](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E5%9B%A0%E7%A5%9E%E4%BC%BC%E6%95%A6%E7%85%8C%E7%BE%8E%E4%BA%BA%E8%B5%B0%E7%BA%A2%23) `134.6K 🔥` `NEW`
1. [内娱穿裙子跑酷的女主来了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%A9%BF%E8%A3%99%E5%AD%90%E8%B7%91%E9%85%B7%E7%9A%84%E5%A5%B3%E4%B8%BB%E6%9D%A5%E4%BA%86%23) `131.2K 🔥` `NEW`
1. [孙龙披国旗绕场后整整齐齐叠好](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E6%8A%AB%E5%9B%BD%E6%97%97%E7%BB%95%E5%9C%BA%E5%90%8E%E6%95%B4%E6%95%B4%E9%BD%90%E9%BD%90%E5%8F%A0%E5%A5%BD%23) `128.1K 🔥` `NEW`
1. [AI替代不了付航是有原因的](https://s.weibo.com/weibo?q=%23AI%E6%9B%BF%E4%BB%A3%E4%B8%8D%E4%BA%86%E4%BB%98%E8%88%AA%E6%98%AF%E6%9C%89%E5%8E%9F%E5%9B%A0%E7%9A%84%23) `127.6K 🔥` `NEW`
1. [尾号777777手机号拍出51.5万元](https://s.weibo.com/weibo?q=%23%E5%B0%BE%E5%8F%B7777777%E6%89%8B%E6%9C%BA%E5%8F%B7%E6%8B%8D%E5%87%BA51.5%E4%B8%87%E5%85%83%23) `111.9K 🔥` `NEW`
1. [时代峰峻马场大户](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%A9%AC%E5%9C%BA%E5%A4%A7%E6%88%B7%23) `110.4K 🔥` `NEW`
1. [爸妈嘴里的大大方方](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E5%98%B4%E9%87%8C%E7%9A%84%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `99.2K 🔥` `NEW`
1. [父母花了几十万装修的房子](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E8%8A%B1%E4%BA%86%E5%87%A0%E5%8D%81%E4%B8%87%E8%A3%85%E4%BF%AE%E7%9A%84%E6%88%BF%E5%AD%90%23) `80.3K 🔥` `NEW`
1. [在韩国用中文训英国小狗](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%9B%BD%E7%94%A8%E4%B8%AD%E6%96%87%E8%AE%AD%E8%8B%B1%E5%9B%BD%E5%B0%8F%E7%8B%97%23) `80.3K 🔥` `NEW`
1. [章若楠感谢粉丝 (Zhang Ruonan thanks fans)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E6%84%9F%E8%B0%A2%E7%B2%89%E4%B8%9D%23) `77.4K 🔥` `NEW`
1. [草莓用流水冲洗后就能吃](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E7%94%A8%E6%B5%81%E6%B0%B4%E5%86%B2%E6%B4%97%E5%90%8E%E5%B0%B1%E8%83%BD%E5%90%83%23) `76.0K 🔥` `NEW`
1. [春晚倒计时 (Countdown to Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%80%92%E8%AE%A1%E6%97%B6%23) `542.4K 🔥` `+68%`
1. [微信 贴图](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E8%B4%B4%E5%9B%BE%23) `334.8K 🔥` `+256%`
1. [无锡威玛犬](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E5%A8%81%E7%8E%9B%E7%8A%AC%23) `130.2K 🔥` `+80%`
1. [央视主持人的含金量还在上升](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `126.9K 🔥` `+39%`
1. [丞磊王楚然 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `310.4K 🔥`
1. [我的妈妈是校花开播](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%A6%88%E5%A6%88%E6%98%AF%E6%A0%A1%E8%8A%B1%E5%BC%80%E6%92%AD%23) `182.6K 🔥`
1. [前女友送的40克银镯子内含30克黄金](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A5%B3%E5%8F%8B%E9%80%81%E7%9A%8440%E5%85%8B%E9%93%B6%E9%95%AF%E5%AD%90%E5%86%85%E5%90%AB30%E5%85%8B%E9%BB%84%E9%87%91%23) `174.4K 🔥`
1. [橹穆双人卡](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E5%8D%A1%23) `133.6K 🔥`
1. [女演员曾公开称美国上流精英吃婴儿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9B%BE%E5%85%AC%E5%BC%80%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%B8%8A%E6%B5%81%E7%B2%BE%E8%8B%B1%E5%90%83%E5%A9%B4%E5%84%BF%23) `132.2K 🔥`
1. [小酒窝朵朵三亚度假 (Little Dimple Duoduo Sanya Vacations)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%9C%B5%E6%9C%B5%E4%B8%89%E4%BA%9A%E5%BA%A6%E5%81%87%23) `131.9K 🔥`
1. [伴侣感染HPV是不干净吗](https://s.weibo.com/weibo?q=%23%E4%BC%B4%E4%BE%A3%E6%84%9F%E6%9F%93HPV%E6%98%AF%E4%B8%8D%E5%B9%B2%E5%87%80%E5%90%97%23) `129.5K 🔥`
1. [金银铜全线上涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E9%93%9C%E5%85%A8%E7%BA%BF%E4%B8%8A%E6%B6%A8%23) `86.7K 🔥`
1. [生命树杨紫张哲华卧一半没底了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%9D%A8%E7%B4%AB%E5%BC%A0%E5%93%B2%E5%8D%8E%E5%8D%A7%E4%B8%80%E5%8D%8A%E6%B2%A1%E5%BA%95%E4%BA%86%23) `74.8K 🔥`
1. [公司利润2.7亿拿1.8亿发年终奖 (The company made a profit of 270 million and received a year-end bonus of 180 million)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%A9%E6%B6%A62.7%E4%BA%BF%E6%8B%BF1.8%E4%BA%BF%E5%8F%91%E5%B9%B4%E7%BB%88%E5%A5%96%23) `864.9K 🔥` `-25%`
1. [中戏已有两位表演系主任主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%B7%B2%E6%9C%89%E4%B8%A4%E4%BD%8D%E8%A1%A8%E6%BC%94%E7%B3%BB%E4%B8%BB%E4%BB%BB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `480.7K 🔥` `-43%`
1. [湛江一海滩发现疑似儒艮尸体](https://s.weibo.com/weibo?q=%23%E6%B9%9B%E6%B1%9F%E4%B8%80%E6%B5%B7%E6%BB%A9%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `310.5K 🔥` `-29%`
1. [王菲 春晚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E6%98%A5%E6%99%9A%23) `258.8K 🔥` `-50%`
1. [王鑫被查 (Wang Xin was investigated)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%91%AB%E8%A2%AB%E6%9F%A5%23) `240.2K 🔥` `-36%`
1. [交警查酒驾意外见家长一秒脸红](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E6%9F%A5%E9%85%92%E9%A9%BE%E6%84%8F%E5%A4%96%E8%A7%81%E5%AE%B6%E9%95%BF%E4%B8%80%E7%A7%92%E8%84%B8%E7%BA%A2%23) `145.7K 🔥` `-58%`
1. [明星红包分组](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `134.0K 🔥` `-25%`
1. [白日提灯 (day lantern)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `102.6K 🔥` `-37%`
1. [BLACKPINK新专配置公开](https://s.weibo.com/weibo?q=%23BLACKPINK%E6%96%B0%E4%B8%93%E9%85%8D%E7%BD%AE%E5%85%AC%E5%BC%80%23) `90.2K 🔥` `-32%`
1. [以为王俊凯要向周杰伦告白 (I thought Wang Junkai was going to confess to Jay Chou)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A6%81%E5%90%91%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%91%8A%E7%99%BD%23) `83.2K 🔥` `-53%`
1. [中戏 (Chinese opera)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%23) `83.0K 🔥` `-54%`
1. [方家翊整容](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AE%B6%E7%BF%8A%E6%95%B4%E5%AE%B9%23) `78.7K 🔥` `-56%`
1. [孙龙哽咽是我的问题我承认](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%93%BD%E5%92%BD%E6%98%AF%E6%88%91%E7%9A%84%E9%97%AE%E9%A2%98%E6%88%91%E6%89%BF%E8%AE%A4%23) `76.8K 🔥` `-58%`
1. [林孝埈赛后更新自动回复](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E8%B5%9B%E5%90%8E%E6%9B%B4%E6%96%B0%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D%23) `70.8K 🔥` `-55%`
1. [有个一直说话的人真的太重要了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%AA%E4%B8%80%E7%9B%B4%E8%AF%B4%E8%AF%9D%E7%9A%84%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%A4%AA%E9%87%8D%E8%A6%81%E4%BA%86%23) `70.3K 🔥` `-60%`
1. [炎亚纶自曝通过吴尊传话 (Aaron Yan revealed that he sent messages through Wu Zun)](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E8%87%AA%E6%9B%9D%E9%80%9A%E8%BF%87%E5%90%B4%E5%B0%8A%E4%BC%A0%E8%AF%9D%23) `69.9K 🔥` `-30%`

Updated at 2026-02-13 14:11:46

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
