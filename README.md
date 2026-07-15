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

1. [家长月薪3500元请大学生带娃 (Parents earn 3,500 yuan a month to hire college students to take care of their children)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%9C%88%E8%96%AA3500%E5%85%83%E8%AF%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%B8%A6%E5%A8%83%23) `1.3M 🔥` `NEW`
1. [阿根廷英阿大战前长文](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%E5%89%8D%E9%95%BF%E6%96%87%23) `855.7K 🔥` `NEW`
1. [打卡中国](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E4%B8%AD%E5%9B%BD%23) `815.1K 🔥` `NEW`
1. [白鹿新剧佛山开机](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E4%BD%9B%E5%B1%B1%E5%BC%80%E6%9C%BA%23) `807.2K 🔥` `NEW`
1. [微博文化交流之夜马来西亚站](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E7%AB%99%23) `512.0K 🔥` `NEW`
1. [当出租屋迎来了放暑假的弟弟妹妹](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%87%BA%E7%A7%9F%E5%B1%8B%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%94%BE%E6%9A%91%E5%81%87%E7%9A%84%E5%BC%9F%E5%BC%9F%E5%A6%B9%E5%A6%B9%23) `490.9K 🔥` `NEW`
1. [克罗地亚长文致函FIFA](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E9%95%BF%E6%96%87%E8%87%B4%E5%87%BDFIFA%23) `301.0K 🔥` `NEW`
1. [赵丽颖纪梵希吊带黑裙](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%BA%AA%E6%A2%B5%E5%B8%8C%E5%90%8A%E5%B8%A6%E9%BB%91%E8%A3%99%23) `287.3K 🔥` `NEW`
1. [TF运动会妆造](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%A6%86%E9%80%A0%23) `286.7K 🔥` `NEW`
1. [女子骑摩托撞树身亡家属索赔150万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AA%91%E6%91%A9%E6%89%98%E6%92%9E%E6%A0%91%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%94150%E4%B8%87%23) `286.1K 🔥` `NEW`
1. [大同夜晚恶臭被怀疑药企偷排 (The stench in Datong at night is suspected of being secretly discharged by pharmaceutical companies)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%90%8C%E5%A4%9C%E6%99%9A%E6%81%B6%E8%87%AD%E8%A2%AB%E6%80%80%E7%96%91%E8%8D%AF%E4%BC%81%E5%81%B7%E6%8E%92%23) `286.1K 🔥` `NEW`
1. [赵丽颖造型师审美](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%80%A0%E5%9E%8B%E5%B8%88%E5%AE%A1%E7%BE%8E%23) `285.7K 🔥` `NEW`
1. [这就是街舞被删掉的齐舞](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E8%A1%97%E8%88%9E%E8%A2%AB%E5%88%A0%E6%8E%89%E7%9A%84%E9%BD%90%E8%88%9E%23) `285.2K 🔥` `NEW`
1. [胖东来的西瓜原来是这样切的](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E7%9A%84%E8%A5%BF%E7%93%9C%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%99%E6%A0%B7%E5%88%87%E7%9A%84%23) `250.4K 🔥` `NEW`
1. [日本阴阳菜单已蔓延至中小城市](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%B4%E9%98%B3%E8%8F%9C%E5%8D%95%E5%B7%B2%E8%94%93%E5%BB%B6%E8%87%B3%E4%B8%AD%E5%B0%8F%E5%9F%8E%E5%B8%82%23) `247.5K 🔥` `NEW`
1. [原来三伏天才是减肥黄金期](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%89%E4%BC%8F%E5%A4%A9%E6%89%8D%E6%98%AF%E5%87%8F%E8%82%A5%E9%BB%84%E9%87%91%E6%9C%9F%23) `239.3K 🔥` `NEW`
1. [对猫动手的人不值得交往](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%8C%AB%E5%8A%A8%E6%89%8B%E7%9A%84%E4%BA%BA%E4%B8%8D%E5%80%BC%E5%BE%97%E4%BA%A4%E5%BE%80%23) `191.6K 🔥` `NEW`
1. [官方通报救护车在市场卸载水果](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%95%91%E6%8A%A4%E8%BD%A6%E5%9C%A8%E5%B8%82%E5%9C%BA%E5%8D%B8%E8%BD%BD%E6%B0%B4%E6%9E%9C%23) `178.2K 🔥` `NEW`
1. [亚马尔开始凡尔赛了](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%BC%80%E5%A7%8B%E5%87%A1%E5%B0%94%E8%B5%9B%E4%BA%86%23) `174.7K 🔥` `NEW`
1. [王法 下课](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%B3%95%20%E4%B8%8B%E8%AF%BE%23) `160.5K 🔥` `NEW`
1. [世界杯西班牙夺冠首发11人 (Spain wins World Cup and starts 11 players)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E9%A6%96%E5%8F%9111%E4%BA%BA%23) `155.9K 🔥` `NEW`
1. [美团青桔哈啰集体涨价](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E9%9D%92%E6%A1%94%E5%93%88%E5%95%B0%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%23) `155.1K 🔥` `NEW`
1. [抚顺内涝](https://s.weibo.com/weibo?q=%23%E6%8A%9A%E9%A1%BA%E5%86%85%E6%B6%9D%23) `154.3K 🔥` `NEW`
1. [佰维存储业绩](https://s.weibo.com/weibo?q=%23%E4%BD%B0%E7%BB%B4%E5%AD%98%E5%82%A8%E4%B8%9A%E7%BB%A9%23) `154.2K 🔥` `NEW`
1. [小米MiMo通过国家大模型备案](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3MiMo%E9%80%9A%E8%BF%87%E5%9B%BD%E5%AE%B6%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%A4%87%E6%A1%88%23) `148.2K 🔥` `NEW`
1. [入伏后该喝绿豆汤还是红豆水](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BC%8F%E5%90%8E%E8%AF%A5%E5%96%9D%E7%BB%BF%E8%B1%86%E6%B1%A4%E8%BF%98%E6%98%AF%E7%BA%A2%E8%B1%86%E6%B0%B4%23) `144.7K 🔥` `NEW`
1. [朱志鑫01号](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB01%E5%8F%B7%23) `144.4K 🔥` `NEW`
1. [被郑州的空调外机墙震惊到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%83%91%E5%B7%9E%E7%9A%84%E7%A9%BA%E8%B0%83%E5%A4%96%E6%9C%BA%E5%A2%99%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `788.5K 🔥` `+36%`
1. [西班牙首相就法国队没法国人道歉 (Spanish Prime Minister apologizes for not having French players in France team)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E5%B0%B1%E6%B3%95%E5%9B%BD%E9%98%9F%E6%B2%A1%E6%B3%95%E5%9B%BD%E4%BA%BA%E9%81%93%E6%AD%89%23) `725.0K 🔥`
1. [黑队](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%98%9F%23) `286.7K 🔥`
1. [何瑞贤在野狗骨头是自己化妆](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%91%9E%E8%B4%A4%E5%9C%A8%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%98%AF%E8%87%AA%E5%B7%B1%E5%8C%96%E5%A6%86%23) `173.4K 🔥`
1. [上淘宝闪购和张凌赫悦享一夏 (Enjoy a summer of fun with Taobao flash sales with Zhang Linghe)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%92%8C%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%82%A6%E4%BA%AB%E4%B8%80%E5%A4%8F%23) `813.8K 🔥` `-37%`
1. [功夫女足 换片源 (Kung Fu Women's Football Change Source)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E6%8D%A2%E7%89%87%E6%BA%90%23) `415.1K 🔥` `-27%`
1. [张月陈瑶 我家那闺女](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%20%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `312.7K 🔥` `-36%`
1. [DeepSeek工资待遇太恐怖了 (DeepSeek’s salary package is terrible)](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `298.0K 🔥` `-44%`
1. [吴绮莉公开成龙拒认吴卓林原因](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%BB%AE%E8%8E%89%E5%85%AC%E5%BC%80%E6%88%90%E9%BE%99%E6%8B%92%E8%AE%A4%E5%90%B4%E5%8D%93%E6%9E%97%E5%8E%9F%E5%9B%A0%23) `297.1K 🔥` `-42%`
1. [TF家族运动会分队官宣](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%88%86%E9%98%9F%E5%AE%98%E5%AE%A3%23) `294.5K 🔥` `-43%`
1. [最伤孩子大脑的行为是什么 (What is the most damaging behavior to a child’s brain?)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%BC%A4%E5%AD%A9%E5%AD%90%E5%A4%A7%E8%84%91%E7%9A%84%E8%A1%8C%E4%B8%BA%E6%98%AF%E4%BB%80%E4%B9%88%23) `287.9K 🔥` `-49%`
1. [吴世勋首支solo曲是中文 (Wu Sehun’s first solo song is in Chinese)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E9%A6%96%E6%94%AFsolo%E6%9B%B2%E6%98%AF%E4%B8%AD%E6%96%87%23) `287.8K 🔥` `-22%`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `287.3K 🔥` `-42%`
1. [医生提醒这4个小时必须睡觉](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E8%BF%994%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%BF%85%E9%A1%BB%E7%9D%A1%E8%A7%89%23) `285.2K 🔥` `-32%`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `275.6K 🔥` `-50%`
1. [绿队队服](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E9%98%9F%E9%98%9F%E6%9C%8D%23) `249.8K 🔥` `-26%`
1. [丈夫私生活混乱妻子怒要给孩子改姓](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%81%E7%94%9F%E6%B4%BB%E6%B7%B7%E4%B9%B1%E5%A6%BB%E5%AD%90%E6%80%92%E8%A6%81%E7%BB%99%E5%AD%A9%E5%AD%90%E6%94%B9%E5%A7%93%23) `246.6K 🔥` `-25%`
1. [国台办回应两岸统一时间](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%B2%B8%E7%BB%9F%E4%B8%80%E6%97%B6%E9%97%B4%23) `245.1K 🔥` `-77%`
1. [曾沛慈发了18张浪姐合照 (Zeng Peici posted 18 photos of Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%8F%91%E4%BA%8618%E5%BC%A0%E6%B5%AA%E5%A7%90%E5%90%88%E7%85%A7%23) `244.0K 🔥` `-42%`
1. [TOP不参加mini旅综录制](https://s.weibo.com/weibo?q=%23TOP%E4%B8%8D%E5%8F%82%E5%8A%A0mini%E6%97%85%E7%BB%BC%E5%BD%95%E5%88%B6%23) `238.8K 🔥` `-48%`
1. [宁艺卓向韩国捐款](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%90%91%E9%9F%A9%E5%9B%BD%E6%8D%90%E6%AC%BE%23) `182.3K 🔥` `-37%`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `151.9K 🔥` `-72%`
1. [苹果AI国行版已过审](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%E5%9B%BD%E8%A1%8C%E7%89%88%E5%B7%B2%E8%BF%87%E5%AE%A1%23) `149.3K 🔥` `-35%`
1. [女子煲汤邻居误以为尸臭报警 (Neighbors mistakenly called the police after a woman made soup because she thought the body smelled bad.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%85%B2%E6%B1%A4%E9%82%BB%E5%B1%85%E8%AF%AF%E4%BB%A5%E4%B8%BA%E5%B0%B8%E8%87%AD%E6%8A%A5%E8%AD%A6%23) `147.5K 🔥` `-59%`
1. [迪丽热巴钰珑真的帮到人上厕所](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%E7%9C%9F%E7%9A%84%E5%B8%AE%E5%88%B0%E4%BA%BA%E4%B8%8A%E5%8E%95%E6%89%80%23) `141.8K 🔥` `-49%`

Updated at 2026-07-15 21:21:19

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
