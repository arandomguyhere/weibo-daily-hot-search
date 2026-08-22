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

1. [巫哲好帅 (Wu Zhe is so handsome)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E5%A5%BD%E5%B8%85%23) `337.0K 🔥` `NEW`
1. [黑灯连发三条怼梁源](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%81%AF%E8%BF%9E%E5%8F%91%E4%B8%89%E6%9D%A1%E6%80%BC%E6%A2%81%E6%BA%90%23) `272.2K 🔥` `NEW`
1. [上官正义质疑代孕事件内鬼是谁](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%AE%98%E6%AD%A3%E4%B9%89%E8%B4%A8%E7%96%91%E4%BB%A3%E5%AD%95%E4%BA%8B%E4%BB%B6%E5%86%85%E9%AC%BC%E6%98%AF%E8%B0%81%23) `235.3K 🔥` `NEW`
1. [晋江作者大会](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `178.7K 🔥` `NEW`
1. [王楚然中不溜时期](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%AD%E4%B8%8D%E6%BA%9C%E6%97%B6%E6%9C%9F%23) `159.4K 🔥` `NEW`
1. [周深回应破坏脱口秀气氛](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%9B%9E%E5%BA%94%E7%A0%B4%E5%9D%8F%E8%84%B1%E5%8F%A3%E7%A7%80%E6%B0%94%E6%B0%9B%23) `123.5K 🔥` `NEW`
1. [收藏癖也会遗传吗](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%97%8F%E7%99%96%E4%B9%9F%E4%BC%9A%E9%81%97%E4%BC%A0%E5%90%97%23) `120.2K 🔥` `NEW`
1. [6旬母亲焦虑催婚被2儿子拉黑](https://s.weibo.com/weibo?q=%236%E6%97%AC%E6%AF%8D%E4%BA%B2%E7%84%A6%E8%99%91%E5%82%AC%E5%A9%9A%E8%A2%AB2%E5%84%BF%E5%AD%90%E6%8B%89%E9%BB%91%23) `117.3K 🔥` `NEW`
1. [小鹿老公连人工授精都做不了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%80%81%E5%85%AC%E8%BF%9E%E4%BA%BA%E5%B7%A5%E6%8E%88%E7%B2%BE%E9%83%BD%E5%81%9A%E4%B8%8D%E4%BA%86%23) `110.9K 🔥` `NEW`
1. [那英酒红露背裙](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E9%85%92%E7%BA%A2%E9%9C%B2%E8%83%8C%E8%A3%99%23) `252.0K 🔥` `+28%`
1. [付费占座行不行总算说明白了 (It’s finally clear whether it’s okay to pay for a seat)](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E5%8D%A0%E5%BA%A7%E8%A1%8C%E4%B8%8D%E8%A1%8C%E6%80%BB%E7%AE%97%E8%AF%B4%E6%98%8E%E7%99%BD%E4%BA%86%23) `219.4K 🔥` `+39%`
1. [55元捡漏1.41万项链女子获5元补偿](https://s.weibo.com/weibo?q=%2355%E5%85%83%E6%8D%A1%E6%BC%8F1.41%E4%B8%87%E9%A1%B9%E9%93%BE%E5%A5%B3%E5%AD%90%E8%8E%B75%E5%85%83%E8%A1%A5%E5%81%BF%23) `1.6M 🔥`
1. [重庆网友自发清理追星涂鸦](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%BD%91%E5%8F%8B%E8%87%AA%E5%8F%91%E6%B8%85%E7%90%86%E8%BF%BD%E6%98%9F%E6%B6%82%E9%B8%A6%23) `934.2K 🔥`
1. [1个视频看懂公积金提取新规 (1 video to understand the new rules for withdrawing provident funds)](https://s.weibo.com/weibo?q=%231%E4%B8%AA%E8%A7%86%E9%A2%91%E7%9C%8B%E6%87%82%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%E6%96%B0%E8%A7%84%23) `728.3K 🔥`
1. [李宇春CHOUCHOU名创优品潮流合作 (Li Yuchun CHOUCHOU MINISO fashion cooperation)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5CHOUCHOU%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E6%BD%AE%E6%B5%81%E5%90%88%E4%BD%9C%23) `666.4K 🔥`
1. [一斤鸭脖能买一斤牛肉一斤排骨](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%96%A4%E9%B8%AD%E8%84%96%E8%83%BD%E4%B9%B0%E4%B8%80%E6%96%A4%E7%89%9B%E8%82%89%E4%B8%80%E6%96%A4%E6%8E%92%E9%AA%A8%23) `470.2K 🔥`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `379.5K 🔥`
1. [8.99万起大众5S夯爆了](https://s.weibo.com/weibo?q=%238.99%E4%B8%87%E8%B5%B7%E5%A4%A7%E4%BC%975S%E5%A4%AF%E7%88%86%E4%BA%86%23) `333.8K 🔥`
1. [曝谍报上不封顶补拍20天](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%8D%E6%8A%A5%E4%B8%8A%E4%B8%8D%E5%B0%81%E9%A1%B6%E8%A1%A5%E6%8B%8D20%E5%A4%A9%23) `305.4K 🔥`
1. [猥亵骑马游客的教练已离岗](https://s.weibo.com/weibo?q=%23%E7%8C%A5%E4%BA%B5%E9%AA%91%E9%A9%AC%E6%B8%B8%E5%AE%A2%E7%9A%84%E6%95%99%E7%BB%83%E5%B7%B2%E7%A6%BB%E5%B2%97%23) `273.7K 🔥`
1. [陈伟霆十年了还没释怀人贩子梗 (William Chan still hasn’t let go of the human trafficker plot after ten years)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%8D%81%E5%B9%B4%E4%BA%86%E8%BF%98%E6%B2%A1%E9%87%8A%E6%80%80%E4%BA%BA%E8%B4%A9%E5%AD%90%E6%A2%97%23) `272.0K 🔥`
1. [女星穿香奈儿无底鞋脚掌变黑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%9F%E7%A9%BF%E9%A6%99%E5%A5%88%E5%84%BF%E6%97%A0%E5%BA%95%E9%9E%8B%E8%84%9A%E6%8E%8C%E5%8F%98%E9%BB%91%23) `271.2K 🔥`
1. [欢子 退赛](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E9%80%80%E8%B5%9B%23) `270.2K 🔥`
1. [董璇让粉丝不要总是给小酒窝买盲盒了 (Dong Xuan asks fans not to always buy blind boxes for Xiaodimple)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E8%AE%A9%E7%B2%89%E4%B8%9D%E4%B8%8D%E8%A6%81%E6%80%BB%E6%98%AF%E7%BB%99%E5%B0%8F%E9%85%92%E7%AA%9D%E4%B9%B0%E7%9B%B2%E7%9B%92%E4%BA%86%23) `269.5K 🔥`
1. [第一次见外国人出来打假北欧硬面包 (This is the first time I see foreigners cracking down on counterfeit Nordic hard bread.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A4%96%E5%9B%BD%E4%BA%BA%E5%87%BA%E6%9D%A5%E6%89%93%E5%81%87%E5%8C%97%E6%AC%A7%E7%A1%AC%E9%9D%A2%E5%8C%85%23) `268.1K 🔥`
1. [曾辉手机壳是跟韩雨彤的合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%98%AF%E8%B7%9F%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%9A%84%E5%90%88%E7%85%A7%23) `244.4K 🔥`
1. [外国网友怀疑中国农村是AI (Foreign netizens suspect that China’s rural areas are caused by AI)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%80%80%E7%96%91%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91%E6%98%AFAI%23) `235.5K 🔥`
1. [陈柏霖当庭认罪 (Chen Bolin pleads guilty in court)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `235.5K 🔥`
1. [癌症疫苗 (cancer vaccine)](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `235.4K 🔥`
1. [我对生理期的态度belike (My attitude towards menstrual periods belike)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AF%B9%E7%94%9F%E7%90%86%E6%9C%9F%E7%9A%84%E6%80%81%E5%BA%A6belike%23) `235.3K 🔥`
1. [父子因iPhone争执坠崖母亲也跳下](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E5%9B%A0iPhone%E4%BA%89%E6%89%A7%E5%9D%A0%E5%B4%96%E6%AF%8D%E4%BA%B2%E4%B9%9F%E8%B7%B3%E4%B8%8B%23) `235.2K 🔥`
1. [Angelababy民族服饰变装太绝了](https://s.weibo.com/weibo?q=%23Angelababy%E6%B0%91%E6%97%8F%E6%9C%8D%E9%A5%B0%E5%8F%98%E8%A3%85%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `235.1K 🔥`
1. [早春晴朗1分钟亲了13次 (Kissed 13 times in 1 minute on a sunny day in early spring)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%971%E5%88%86%E9%92%9F%E4%BA%B2%E4%BA%8613%E6%AC%A1%23) `178.8K 🔥`
1. [大妈骑车戴三级头震惊辅警 (The aunt wearing a three-level headgear while riding a bicycle shocked the auxiliary police)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E9%AA%91%E8%BD%A6%E6%88%B4%E4%B8%89%E7%BA%A7%E5%A4%B4%E9%9C%87%E6%83%8A%E8%BE%85%E8%AD%A6%23) `169.9K 🔥`
1. [偶遇宋雨琦打卡自己海报](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%89%93%E5%8D%A1%E8%87%AA%E5%B7%B1%E6%B5%B7%E6%8A%A5%23) `169.2K 🔥`
1. [印度少年为要手机致一家三口坠崖](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%B0%91%E5%B9%B4%E4%B8%BA%E8%A6%81%E6%89%8B%E6%9C%BA%E8%87%B4%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%9D%A0%E5%B4%96%23) `166.8K 🔥`
1. [厚本新剧美成这样了 (Houben’s new drama is so beautiful)](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%E6%96%B0%E5%89%A7%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `155.6K 🔥`
1. [女生暗恋被拒5年收到一箱青春档案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%9A%97%E6%81%8B%E8%A2%AB%E6%8B%925%E5%B9%B4%E6%94%B6%E5%88%B0%E4%B8%80%E7%AE%B1%E9%9D%92%E6%98%A5%E6%A1%A3%E6%A1%88%23) `147.7K 🔥`
1. [美国偶遇田亮叶一茜森碟 (Encountering Tian Liang, Ye Yiqian, and Mori from the United States)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%81%B6%E9%81%87%E7%94%B0%E4%BA%AE%E5%8F%B6%E4%B8%80%E8%8C%9C%E6%A3%AE%E7%A2%9F%23) `135.2K 🔥`
1. [王橹杰成都外出弟弟同行](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%88%90%E9%83%BD%E5%A4%96%E5%87%BA%E5%BC%9F%E5%BC%9F%E5%90%8C%E8%A1%8C%23) `126.6K 🔥`
1. [游客玉佩落水被锦鲤衔住 (Tourist's jade pendant fell into the water and was caught by a koi fish)](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E7%8E%89%E4%BD%A9%E8%90%BD%E6%B0%B4%E8%A2%AB%E9%94%A6%E9%B2%A4%E8%A1%94%E4%BD%8F%23) `119.7K 🔥`
1. [小沈阳是真披荆斩棘来了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%98%AF%E7%9C%9F%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%9D%A5%E4%BA%86%23) `116.0K 🔥`
1. [全球首例为蟒蛇实施人类癌症疗法](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%BE%8B%E4%B8%BA%E8%9F%92%E8%9B%87%E5%AE%9E%E6%96%BD%E4%BA%BA%E7%B1%BB%E7%99%8C%E7%97%87%E7%96%97%E6%B3%95%23) `113.7K 🔥`
1. [居家办公都发展成这样了 (Home working has developed into this)](https://s.weibo.com/weibo?q=%23%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC%E9%83%BD%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `291.6K 🔥` `-52%`
1. [邓凯王楚然浮生杀青合照](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%B5%AE%E7%94%9F%E6%9D%80%E9%9D%92%E5%90%88%E7%85%A7%23) `189.5K 🔥` `-29%`
1. [张家口回应白菜蘸甲醛保鲜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E5%8F%A3%E5%9B%9E%E5%BA%94%E7%99%BD%E8%8F%9C%E8%98%B8%E7%94%B2%E9%86%9B%E4%BF%9D%E9%B2%9C%23) `179.5K 🔥` `-26%`
1. [秦彻 临界点](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BD%BB%20%E4%B8%B4%E7%95%8C%E7%82%B9%23) `139.4K 🔥` `-32%`
1. [2026年亚运会](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `127.4K 🔥` `-21%`
1. [九门只死了一只鸟](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%8F%AA%E6%AD%BB%E4%BA%86%E4%B8%80%E5%8F%AA%E9%B8%9F%23) `124.5K 🔥` `-23%`
1. [内娱终于放过甄嬛传了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%BB%88%E4%BA%8E%E6%94%BE%E8%BF%87%E7%94%84%E5%AC%9B%E4%BC%A0%E4%BA%86%23) `116.4K 🔥` `-50%`
1. [94岁老战士穿外骨骼感觉年轻了](https://s.weibo.com/weibo?q=%2394%E5%B2%81%E8%80%81%E6%88%98%E5%A3%AB%E7%A9%BF%E5%A4%96%E9%AA%A8%E9%AA%BC%E6%84%9F%E8%A7%89%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `110.9K 🔥` `-47%`

Updated at 2026-08-22 14:02:02

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
