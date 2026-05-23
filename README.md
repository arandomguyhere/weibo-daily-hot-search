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

1. [山西煤矿事故已致90人死亡 (Shanxi coal mine accident kills 90 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%B7%B2%E8%87%B490%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `10.6M 🔥` `NEW`
1. [申请美国绿卡须返回原籍国提申请](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AF%B7%E7%BE%8E%E5%9B%BD%E7%BB%BF%E5%8D%A1%E9%A1%BB%E8%BF%94%E5%9B%9E%E5%8E%9F%E7%B1%8D%E5%9B%BD%E6%8F%90%E7%94%B3%E8%AF%B7%23) `5.7M 🔥` `NEW`
1. [手机点单 举报抽烟](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E7%82%B9%E5%8D%95%20%E4%B8%BE%E6%8A%A5%E6%8A%BD%E7%83%9F%23) `1.3M 🔥` `NEW`
1. [618悦己清单](https://s.weibo.com/weibo?q=%23618%E6%82%A6%E5%B7%B1%E6%B8%85%E5%8D%95%23) `1.1M 🔥` `NEW`
1. [儿子在学校被打复旦教授是怎么处理的](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%9C%A8%E5%AD%A6%E6%A0%A1%E8%A2%AB%E6%89%93%E5%A4%8D%E6%97%A6%E6%95%99%E6%8E%88%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%23) `726.5K 🔥` `NEW`
1. [留神峪煤矿事故123人送医](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85123%E4%BA%BA%E9%80%81%E5%8C%BB%23) `684.0K 🔥` `NEW`
1. [不上班靠一对善良的夫妇救济](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E9%9D%A0%E4%B8%80%E5%AF%B9%E5%96%84%E8%89%AF%E7%9A%84%E5%A4%AB%E5%A6%87%E6%95%91%E6%B5%8E%23) `634.1K 🔥` `NEW`
1. [明星看粉丝分析](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%9C%8B%E7%B2%89%E4%B8%9D%E5%88%86%E6%9E%90%23) `621.3K 🔥` `NEW`
1. [曝白玉兰提名终极预测](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E7%BB%88%E6%9E%81%E9%A2%84%E6%B5%8B%23) `609.9K 🔥` `NEW`
1. [孙亚龙买了两万克黄金](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E4%B9%B0%E4%BA%86%E4%B8%A4%E4%B8%87%E5%85%8B%E9%BB%84%E9%87%91%23) `606.8K 🔥` `NEW`
1. [沙溢跑男高反吸氧开车 (Sha Yi, a male high school student, inhales oxygen while driving)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E8%B7%91%E7%94%B7%E9%AB%98%E5%8F%8D%E5%90%B8%E6%B0%A7%E5%BC%80%E8%BD%A6%23) `598.5K 🔥` `NEW`
1. [曾沛慈非常不满意自己的表现](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E9%9D%9E%E5%B8%B8%E4%B8%8D%E6%BB%A1%E6%84%8F%E8%87%AA%E5%B7%B1%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `594.2K 🔥` `NEW`
1. [感情里有一个最微妙的悖论](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E9%87%8C%E6%9C%89%E4%B8%80%E4%B8%AA%E6%9C%80%E5%BE%AE%E5%A6%99%E7%9A%84%E6%82%96%E8%AE%BA%23) `592.2K 🔥` `NEW`
1. [小澈瘦了好多](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `587.7K 🔥` `NEW`
1. [山西大同地震](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E5%A4%A7%E5%90%8C%E5%9C%B0%E9%9C%87%23) `585.1K 🔥` `NEW`
1. [美军F16击落神秘物体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9BF16%E5%87%BB%E8%90%BD%E7%A5%9E%E7%A7%98%E7%89%A9%E4%BD%93%23) `583.1K 🔥` `NEW`
1. [惠英红 假装来谈几百亿的大项目](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E5%81%87%E8%A3%85%E6%9D%A5%E8%B0%88%E5%87%A0%E7%99%BE%E4%BA%BF%E7%9A%84%E5%A4%A7%E9%A1%B9%E7%9B%AE%23) `576.5K 🔥` `NEW`
1. [女子捅死男友辩称正当防卫被判无期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8D%85%E6%AD%BB%E7%94%B7%E5%8F%8B%E8%BE%A9%E7%A7%B0%E6%AD%A3%E5%BD%93%E9%98%B2%E5%8D%AB%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `573.3K 🔥` `NEW`
1. [秦统一至今麦子不过熟了2246次](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%BB%9F%E4%B8%80%E8%87%B3%E4%BB%8A%E9%BA%A6%E5%AD%90%E4%B8%8D%E8%BF%87%E7%86%9F%E4%BA%862246%E6%AC%A1%23) `565.5K 🔥` `NEW`
1. [严浩翔将缺席下一期西游录制](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%B0%86%E7%BC%BA%E5%B8%AD%E4%B8%8B%E4%B8%80%E6%9C%9F%E8%A5%BF%E6%B8%B8%E5%BD%95%E5%88%B6%23) `562.9K 🔥` `NEW`
1. [山西煤矿事故伤者主要因有毒气体 (The injured in Shanxi coal mine accident were mainly caused by toxic gas)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E4%BC%A4%E8%80%85%E4%B8%BB%E8%A6%81%E5%9B%A0%E6%9C%89%E6%AF%92%E6%B0%94%E4%BD%93%23) `553.3K 🔥` `NEW`
1. [刘耀文让于洋少说宋亚轩两句](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%AE%A9%E4%BA%8E%E6%B4%8B%E5%B0%91%E8%AF%B4%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%A4%E5%8F%A5%23) `550.3K 🔥` `NEW`
1. [赵又廷这么发高圆圆知道吗](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%8F%88%E5%BB%B7%E8%BF%99%E4%B9%88%E5%8F%91%E9%AB%98%E5%9C%86%E5%9C%86%E7%9F%A5%E9%81%93%E5%90%97%23) `549.2K 🔥` `NEW`
1. [原来吃完虾不能马上运动](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%90%83%E5%AE%8C%E8%99%BE%E4%B8%8D%E8%83%BD%E9%A9%AC%E4%B8%8A%E8%BF%90%E5%8A%A8%23) `544.7K 🔥` `NEW`
1. [不接陌生电话 自保机制](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%8E%A5%E9%99%8C%E7%94%9F%E7%94%B5%E8%AF%9D%20%E8%87%AA%E4%BF%9D%E6%9C%BA%E5%88%B6%23) `540.1K 🔥` `NEW`
1. [留神峪煤矿事故救援画面](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E6%95%91%E6%8F%B4%E7%94%BB%E9%9D%A2%23) `527.0K 🔥` `NEW`
1. [白酒退市第一股被终止上市](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%85%92%E9%80%80%E5%B8%82%E7%AC%AC%E4%B8%80%E8%82%A1%E8%A2%AB%E7%BB%88%E6%AD%A2%E4%B8%8A%E5%B8%82%23) `522.1K 🔥` `NEW`
1. [KPL游船休闲派对](https://s.weibo.com/weibo?q=%23KPL%E6%B8%B8%E8%88%B9%E4%BC%91%E9%97%B2%E6%B4%BE%E5%AF%B9%23) `514.5K 🔥` `NEW`
1. [阿尔及利亚四男偷游上海泳池](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%8F%8A%E5%88%A9%E4%BA%9A%E5%9B%9B%E7%94%B7%E5%81%B7%E6%B8%B8%E4%B8%8A%E6%B5%B7%E6%B3%B3%E6%B1%A0%23) `511.1K 🔥` `NEW`
1. [神23航天员乘组公布](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E8%88%AA%E5%A4%A9%E5%91%98%E4%B9%98%E7%BB%84%E5%85%AC%E5%B8%83%23) `3.7M 🔥` `+814%`
1. [岚图泰山X8上市29万起 (Lantu Taishan X8 launched starting at 290,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%B2%9A%E5%9B%BE%E6%B3%B0%E5%B1%B1X8%E4%B8%8A%E5%B8%8229%E4%B8%87%E8%B5%B7%23) `3.1M 🔥` `+292%`
1. [吴泽林语气](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E8%AF%AD%E6%B0%94%23) `1.1M 🔥` `+68%`
1. [留神峪煤矿事故企业负责人被控制](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E4%BC%81%E4%B8%9A%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `737.0K 🔥`
1. [原来十年前的拼豆长这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E6%8B%BC%E8%B1%86%E9%95%BF%E8%BF%99%E6%A0%B7%23) `703.1K 🔥`
1. [曝沈月小群不是录制期间那个 (It was revealed that Shen Yue’s group was not the one during the recording)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%88%E6%9C%88%E5%B0%8F%E7%BE%A4%E4%B8%8D%E6%98%AF%E5%BD%95%E5%88%B6%E6%9C%9F%E9%97%B4%E9%82%A3%E4%B8%AA%23) `653.0K 🔥`
1. [谢娜回应又被黄灿灿踩裙子了 (Xie Na responded that Huang Cancan stepped on her skirt again)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E5%8F%88%E8%A2%AB%E9%BB%84%E7%81%BF%E7%81%BF%E8%B8%A9%E8%A3%99%E5%AD%90%E4%BA%86%23) `620.2K 🔥`
1. [夏天 苍蝇卵](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%20%E8%8B%8D%E8%9D%87%E5%8D%B5%23) `615.5K 🔥`
1. [棣月系be了](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BBbe%E4%BA%86%23) `612.5K 🔥`
1. [棣月系粉丝现状](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BB%E7%B2%89%E4%B8%9D%E7%8E%B0%E7%8A%B6%23) `603.8K 🔥`
1. [马刺雷霆打架](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA%E9%9B%B7%E9%9C%86%E6%89%93%E6%9E%B6%23) `578.0K 🔥`
1. [范丞丞喊李晨老头](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%96%8A%E6%9D%8E%E6%99%A8%E8%80%81%E5%A4%B4%23) `568.3K 🔥`
1. [侯宇发长文](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%E5%8F%91%E9%95%BF%E6%96%87%23) `561.4K 🔥`
1. [老板一个滚字赔了员工近16万元 (The boss lost nearly 160,000 yuan to his employees with a word "Go")](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E4%B8%80%E4%B8%AA%E6%BB%9A%E5%AD%97%E8%B5%94%E4%BA%86%E5%91%98%E5%B7%A5%E8%BF%9116%E4%B8%87%E5%85%83%23) `557.9K 🔥`
1. [包上恩24岁是公主](https://s.weibo.com/weibo?q=%23%E5%8C%85%E4%B8%8A%E6%81%A924%E5%B2%81%E6%98%AF%E5%85%AC%E4%B8%BB%23) `541.3K 🔥`
1. [山西煤矿事故造成重大人员伤亡](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E9%80%A0%E6%88%90%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23) `535.9K 🔥`
1. [李若彤回应未婚无子人生不完整 (Li Ruotong responded that life is incomplete if she is unmarried and has no children.)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E5%9B%9E%E5%BA%94%E6%9C%AA%E5%A9%9A%E6%97%A0%E5%AD%90%E4%BA%BA%E7%94%9F%E4%B8%8D%E5%AE%8C%E6%95%B4%23) `533.3K 🔥`
1. [当我在重要的日子化妆打扮](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%9C%A8%E9%87%8D%E8%A6%81%E7%9A%84%E6%97%A5%E5%AD%90%E5%8C%96%E5%A6%86%E6%89%93%E6%89%AE%23) `528.9K 🔥`
1. [Uzi回应送老婆贵重礼物](https://s.weibo.com/weibo?q=%23Uzi%E5%9B%9E%E5%BA%94%E9%80%81%E8%80%81%E5%A9%86%E8%B4%B5%E9%87%8D%E7%A4%BC%E7%89%A9%23) `519.8K 🔥`
1. [史上颜值巅峰iPhone要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E9%A2%9C%E5%80%BC%E5%B7%85%E5%B3%B0iPhone%E8%A6%81%E6%9D%A5%E4%BA%86%23) `516.6K 🔥`
1. [沈月向王鹤棣道歉](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%90%91%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%81%93%E6%AD%89%23) `3.0M 🔥` `-73%`
1. [王鹤棣回旋镖 (Wang Hedi boomerang)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%9B%9E%E6%97%8B%E9%95%96%23) `665.3K 🔥` `-95%`
1. [曝iPhone18Pro配色大换血](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E9%85%8D%E8%89%B2%E5%A4%A7%E6%8D%A2%E8%A1%80%23) `600.9K 🔥` `-49%`

Updated at 2026-05-23 15:42:25

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
