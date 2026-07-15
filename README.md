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

1. [DeepSeek工资待遇太恐怖了 (DeepSeek’s salary package is terrible)](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `5.3M 🔥` `NEW`
1. [家里不缺钱的人在职场的状态](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E4%B8%8D%E7%BC%BA%E9%92%B1%E7%9A%84%E4%BA%BA%E5%9C%A8%E8%81%8C%E5%9C%BA%E7%9A%84%E7%8A%B6%E6%80%81%23) `1.2M 🔥` `NEW`
1. [陈瑶素颜录制我家那闺女](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E7%B4%A0%E9%A2%9C%E5%BD%95%E5%88%B6%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `777.9K 🔥` `NEW`
1. [脑洞创意照世界杯](https://s.weibo.com/weibo?q=%23%E8%84%91%E6%B4%9E%E5%88%9B%E6%84%8F%E7%85%A7%E4%B8%96%E7%95%8C%E6%9D%AF%23) `770.4K 🔥` `NEW`
1. [月休十天也不想干了](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BC%91%E5%8D%81%E5%A4%A9%E4%B9%9F%E4%B8%8D%E6%83%B3%E5%B9%B2%E4%BA%86%23) `763.7K 🔥` `NEW`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `573.0K 🔥` `NEW`
1. [终于相信林一王俊凯是同龄人了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9B%B8%E4%BF%A1%E6%9E%97%E4%B8%80%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%98%AF%E5%90%8C%E9%BE%84%E4%BA%BA%E4%BA%86%23) `540.9K 🔥` `NEW`
1. [阿根廷再陷裁判风波](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%8D%E9%99%B7%E8%A3%81%E5%88%A4%E9%A3%8E%E6%B3%A2%23) `482.3K 🔥` `NEW`
1. [张月陈瑶 我家那闺女](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%20%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `471.5K 🔥` `NEW`
1. [TF四代运动会口号应援](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%8F%A3%E5%8F%B7%E5%BA%94%E6%8F%B4%23) `463.7K 🔥` `NEW`
1. [国企投近900万拍综艺收益仅8600元 (A state-owned enterprise invested nearly 9 million yuan in a variety show and the revenue was only 8,600 yuan.)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E6%8A%95%E8%BF%91900%E4%B8%87%E6%8B%8D%E7%BB%BC%E8%89%BA%E6%94%B6%E7%9B%8A%E4%BB%858600%E5%85%83%23) `450.4K 🔥` `NEW`
1. [英格兰主帅回应阿根廷选蓝色球衣](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%80%89%E8%93%9D%E8%89%B2%E7%90%83%E8%A1%A3%23) `442.7K 🔥` `NEW`
1. [沈阳一小区地库塌陷两栋楼业主撤离](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E4%B8%80%E5%B0%8F%E5%8C%BA%E5%9C%B0%E5%BA%93%E5%A1%8C%E9%99%B7%E4%B8%A4%E6%A0%8B%E6%A5%BC%E4%B8%9A%E4%B8%BB%E6%92%A4%E7%A6%BB%23) `440.1K 🔥` `NEW`
1. [EWC](https://s.weibo.com/weibo?q=%23EWC%23) `435.8K 🔥` `NEW`
1. [苹果AI国行版已过审](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%E5%9B%BD%E8%A1%8C%E7%89%88%E5%B7%B2%E8%BF%87%E5%AE%A1%23) `432.1K 🔥` `NEW`
1. [弥补了AI没有花絮的空白](https://s.weibo.com/weibo?q=%23%E5%BC%A5%E8%A1%A5%E4%BA%86AI%E6%B2%A1%E6%9C%89%E8%8A%B1%E7%B5%AE%E7%9A%84%E7%A9%BA%E7%99%BD%23) `427.4K 🔥` `NEW`
1. [2岁女童浴盆溺水父亲倒立控水](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E7%AB%A5%E6%B5%B4%E7%9B%86%E6%BA%BA%E6%B0%B4%E7%88%B6%E4%BA%B2%E5%80%92%E7%AB%8B%E6%8E%A7%E6%B0%B4%23) `386.5K 🔥` `NEW`
1. [曝功夫女足被偷票房](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%A2%AB%E5%81%B7%E7%A5%A8%E6%88%BF%23) `358.1K 🔥` `NEW`
1. [租了18年的房退租房东要求恢复如新](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E4%BA%8618%E5%B9%B4%E7%9A%84%E6%88%BF%E9%80%80%E7%A7%9F%E6%88%BF%E4%B8%9C%E8%A6%81%E6%B1%82%E6%81%A2%E5%A4%8D%E5%A6%82%E6%96%B0%23) `334.8K 🔥` `NEW`
1. [医生提醒这4个小时必须睡觉](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E8%BF%994%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%BF%85%E9%A1%BB%E7%9D%A1%E8%A7%89%23) `328.7K 🔥` `NEW`
1. [最伤孩子大脑的行为是什么 (What is the most damaging behavior to a child’s brain?)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%BC%A4%E5%AD%A9%E5%AD%90%E5%A4%A7%E8%84%91%E7%9A%84%E8%A1%8C%E4%B8%BA%E6%98%AF%E4%BB%80%E4%B9%88%23) `314.6K 🔥` `NEW`
1. [功夫女足票房超8亿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E8%B6%858%E4%BA%BF%23) `286.5K 🔥` `NEW`
1. [国台办回应两岸统一时间](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%B2%B8%E7%BB%9F%E4%B8%80%E6%97%B6%E9%97%B4%23) `278.6K 🔥` `NEW`
1. [星穹铁道姬子启行](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E5%A7%AC%E5%AD%90%E5%90%AF%E8%A1%8C%23) `261.7K 🔥` `NEW`
1. [神行者8豪华前舱首次曝光](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%858%E8%B1%AA%E5%8D%8E%E5%89%8D%E8%88%B1%E9%A6%96%E6%AC%A1%E6%9B%9D%E5%85%89%23) `253.8K 🔥` `NEW`
1. [Apple智能](https://s.weibo.com/weibo?q=%23Apple%E6%99%BA%E8%83%BD%23) `252.9K 🔥` `NEW`
1. [姆巴佩被法国人追着补水](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%A2%AB%E6%B3%95%E5%9B%BD%E4%BA%BA%E8%BF%BD%E7%9D%80%E8%A1%A5%E6%B0%B4%23) `241.3K 🔥` `NEW`
1. [中国高职院校排名](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%AB%98%E8%81%8C%E9%99%A2%E6%A0%A1%E6%8E%92%E5%90%8D%23) `238.0K 🔥` `NEW`
1. [包上恩短发](https://s.weibo.com/weibo?q=%23%E5%8C%85%E4%B8%8A%E6%81%A9%E7%9F%AD%E5%8F%91%23) `238.0K 🔥` `NEW`
1. [女童被生父女友杀害案择期宣判](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E8%A2%AB%E7%94%9F%E7%88%B6%E5%A5%B3%E5%8F%8B%E6%9D%80%E5%AE%B3%E6%A1%88%E6%8B%A9%E6%9C%9F%E5%AE%A3%E5%88%A4%23) `224.0K 🔥` `NEW`
1. [法国不敌西班牙后巴黎等地爆发骚乱 (Riots erupt in Paris and other places after France loses to Spain)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B8%8D%E6%95%8C%E8%A5%BF%E7%8F%AD%E7%89%99%E5%90%8E%E5%B7%B4%E9%BB%8E%E7%AD%89%E5%9C%B0%E7%88%86%E5%8F%91%E9%AA%9A%E4%B9%B1%23) `212.9K 🔥` `NEW`
1. [我的足球天赋belike](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E8%B6%B3%E7%90%83%E5%A4%A9%E8%B5%8Bbelike%23) `212.8K 🔥` `NEW`
1. [黄奕前臀倒立](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A5%95%E5%89%8D%E8%87%80%E5%80%92%E7%AB%8B%23) `202.6K 🔥` `NEW`
1. [张凌赫悦享越有](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%82%A6%E4%BA%AB%E8%B6%8A%E6%9C%89%23) `198.0K 🔥` `NEW`
1. [功夫女足 换片源](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E6%8D%A2%E7%89%87%E6%BA%90%23) `1.4M 🔥` `+403%`
1. [工作组赴吉林暴雨洪涝灾区](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E7%BB%84%E8%B5%B4%E5%90%89%E6%9E%97%E6%9A%B4%E9%9B%A8%E6%B4%AA%E6%B6%9D%E7%81%BE%E5%8C%BA%23) `1.3M 🔥` `+58%`
1. [旅游时突然被通知开除了](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E6%97%B6%E7%AA%81%E7%84%B6%E8%A2%AB%E9%80%9A%E7%9F%A5%E5%BC%80%E9%99%A4%E4%BA%86%23) `781.7K 🔥` `+195%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `447.3K 🔥` `+75%`
1. [女子煲汤邻居误以为尸臭报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%85%B2%E6%B1%A4%E9%82%BB%E5%B1%85%E8%AF%AF%E4%BB%A5%E4%B8%BA%E5%B0%B8%E8%87%AD%E6%8A%A5%E8%AD%A6%23) `426.1K 🔥` `+69%`
1. [宁艺卓向韩国捐款](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%90%91%E9%9F%A9%E5%9B%BD%E6%8D%90%E6%AC%BE%23) `481.4K 🔥`
1. [87版红楼梦刘姥姥扮演者去世 (The actor who played Grandma Liu in the 87 version of Dream of Red Mansions passed away)](https://s.weibo.com/weibo?q=%2387%E7%89%88%E7%BA%A2%E6%A5%BC%E6%A2%A6%E5%88%98%E5%A7%A5%E5%A7%A5%E6%89%AE%E6%BC%94%E8%80%85%E5%8E%BB%E4%B8%96%23) `405.8K 🔥`
1. [张元英抱臂听讲被骂](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%8A%B1%E8%87%82%E5%90%AC%E8%AE%B2%E8%A2%AB%E9%AA%82%23) `352.5K 🔥`
1. [特朗普性侵案败诉](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%80%A7%E4%BE%B5%E6%A1%88%E8%B4%A5%E8%AF%89%23) `352.1K 🔥`
1. [吴绮莉回应不做亲子鉴定](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%BB%AE%E8%8E%89%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%81%9A%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%23) `212.8K 🔥`
1. [上淘宝闪购和张凌赫悦享一夏 (Enjoy a summer of fun with Taobao flash sales with Zhang Linghe)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%92%8C%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%82%A6%E4%BA%AB%E4%B8%80%E5%A4%8F%23) `1.3M 🔥` `-27%`
1. [导演怀疑侯明昊艾米动了真情](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E6%80%80%E7%96%91%E4%BE%AF%E6%98%8E%E6%98%8A%E8%89%BE%E7%B1%B3%E5%8A%A8%E4%BA%86%E7%9C%9F%E6%83%85%23) `481.7K 🔥` `-41%`
1. [西班牙进球前一分钟的宇宙级传控 (Spain's cosmic passing control one minute before goal)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%BF%9B%E7%90%83%E5%89%8D%E4%B8%80%E5%88%86%E9%92%9F%E7%9A%84%E5%AE%87%E5%AE%99%E7%BA%A7%E4%BC%A0%E6%8E%A7%23) `480.9K 🔥` `-43%`
1. [逐玉一念演唱会官宣 (Zhuyu Yi Nian concert official announcement)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%B8%80%E5%BF%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `309.2K 🔥` `-37%`
1. [身份证照片最接近别人看到的自己](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `246.8K 🔥` `-70%`
1. [王俊凯演唱会增加了921票价的座位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A2%9E%E5%8A%A0%E4%BA%86921%E7%A5%A8%E4%BB%B7%E7%9A%84%E5%BA%A7%E4%BD%8D%23) `219.2K 🔥` `-61%`
1. [金秀贤复出后收到40多部剧本](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E5%A4%8D%E5%87%BA%E5%90%8E%E6%94%B6%E5%88%B040%E5%A4%9A%E9%83%A8%E5%89%A7%E6%9C%AC%23) `218.0K 🔥` `-29%`
1. [西班牙队夺冠奖金曝光](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%9F%E5%A4%BA%E5%86%A0%E5%A5%96%E9%87%91%E6%9B%9D%E5%85%89%23) `201.9K 🔥` `-82%`

Updated at 2026-07-15 18:15:56

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
