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

1. [滞销西瓜被网红压价到一毛多一斤 (Slow-selling watermelons are priced down by internet celebrities to just over 10 cents per pound)](https://s.weibo.com/weibo?q=%23%E6%BB%9E%E9%94%80%E8%A5%BF%E7%93%9C%E8%A2%AB%E7%BD%91%E7%BA%A2%E5%8E%8B%E4%BB%B7%E5%88%B0%E4%B8%80%E6%AF%9B%E5%A4%9A%E4%B8%80%E6%96%A4%23) `1.6M 🔥` `NEW`
1. [法院回应LV起诉开发商](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E5%9B%9E%E5%BA%94LV%E8%B5%B7%E8%AF%89%E5%BC%80%E5%8F%91%E5%95%86%23) `1.3M 🔥` `NEW`
1. [神23乘组在轨已满60天](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%B9%98%E7%BB%84%E5%9C%A8%E8%BD%A8%E5%B7%B2%E6%BB%A160%E5%A4%A9%23) `1.0M 🔥` `NEW`
1. [晚饭后最好的耗糖运动](https://s.weibo.com/weibo?q=%23%E6%99%9A%E9%A5%AD%E5%90%8E%E6%9C%80%E5%A5%BD%E7%9A%84%E8%80%97%E7%B3%96%E8%BF%90%E5%8A%A8%23) `1.0M 🔥` `NEW`
1. [白鹿开到荼蘼 田壮壮造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%20%E7%94%B0%E5%A3%AE%E5%A3%AE%E9%80%A0%E5%9E%8B%23) `614.3K 🔥` `NEW`
1. [WBG电竞岛嘉年华](https://s.weibo.com/weibo?q=%23WBG%E7%94%B5%E7%AB%9E%E5%B2%9B%E5%98%89%E5%B9%B4%E5%8D%8E%23) `614.2K 🔥` `NEW`
1. [红霞](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%23) `614.2K 🔥` `NEW`
1. [把安装师傅都约同一天处处是惊喜](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%AE%89%E8%A3%85%E5%B8%88%E5%82%85%E9%83%BD%E7%BA%A6%E5%90%8C%E4%B8%80%E5%A4%A9%E5%A4%84%E5%A4%84%E6%98%AF%E6%83%8A%E5%96%9C%23) `613.0K 🔥` `NEW`
1. [软孤立](https://s.weibo.com/weibo?q=%23%E8%BD%AF%E5%AD%A4%E7%AB%8B%23) `612.5K 🔥` `NEW`
1. [LV回应起诉房企](https://s.weibo.com/weibo?q=%23LV%E5%9B%9E%E5%BA%94%E8%B5%B7%E8%AF%89%E6%88%BF%E4%BC%81%23) `610.3K 🔥` `NEW`
1. [张柏芝就像偷偷开了高清 (Cecilia Cheung is like secretly turning on HD)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%B0%B1%E5%83%8F%E5%81%B7%E5%81%B7%E5%BC%80%E4%BA%86%E9%AB%98%E6%B8%85%23) `609.5K 🔥` `NEW`
1. [GR对战MRC](https://s.weibo.com/weibo?q=%23GR%E5%AF%B9%E6%88%98MRC%23) `440.1K 🔥` `NEW`
1. [苏新皓做了甘露寺美甲](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%81%9A%E4%BA%86%E7%94%98%E9%9C%B2%E5%AF%BA%E7%BE%8E%E7%94%B2%23) `411.5K 🔥` `NEW`
1. [严浩翔对AI写rap词的反应](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%AF%B9AI%E5%86%99rap%E8%AF%8D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `371.9K 🔥` `NEW`
1. [那英曾劝张雅琪别天天照镜子](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%9B%BE%E5%8A%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E5%88%AB%E5%A4%A9%E5%A4%A9%E7%85%A7%E9%95%9C%E5%AD%90%23) `361.2K 🔥` `NEW`
1. [王一博稳稳超车](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%A8%B3%E7%A8%B3%E8%B6%85%E8%BD%A6%23) `332.9K 🔥` `NEW`
1. [上交大反对违背科研伦理开展研究](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%A4%E5%A4%A7%E5%8F%8D%E5%AF%B9%E8%BF%9D%E8%83%8C%E7%A7%91%E7%A0%94%E4%BC%A6%E7%90%86%E5%BC%80%E5%B1%95%E7%A0%94%E7%A9%B6%23) `291.5K 🔥` `NEW`
1. [极氪迅速优化出境安全功能获好评](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E8%BF%85%E9%80%9F%E4%BC%98%E5%8C%96%E5%87%BA%E5%A2%83%E5%AE%89%E5%85%A8%E5%8A%9F%E8%83%BD%E8%8E%B7%E5%A5%BD%E8%AF%84%23) `288.1K 🔥` `NEW`
1. [杨幂Prada发夹](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82Prada%E5%8F%91%E5%A4%B9%23) `230.1K 🔥` `NEW`
1. [林一探班赵今麦也不忘显摆](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E6%8E%A2%E7%8F%AD%E8%B5%B5%E4%BB%8A%E9%BA%A6%E4%B9%9F%E4%B8%8D%E5%BF%98%E6%98%BE%E6%91%86%23) `222.2K 🔥` `NEW`
1. [哥伦比亚孕妇遇害腹中婴儿被夺走 (Colombian pregnant woman murdered, baby snatched from belly)](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%AD%95%E5%A6%87%E9%81%87%E5%AE%B3%E8%85%B9%E4%B8%AD%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%A4%BA%E8%B5%B0%23) `218.5K 🔥` `NEW`
1. [王一博祝所有车手顺利安全完赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%A5%9D%E6%89%80%E6%9C%89%E8%BD%A6%E6%89%8B%E9%A1%BA%E5%88%A9%E5%AE%89%E5%85%A8%E5%AE%8C%E8%B5%9B%23) `217.7K 🔥` `NEW`
1. [法院辟谣LV起诉楼盘雕花侵权](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E8%BE%9F%E8%B0%A3LV%E8%B5%B7%E8%AF%89%E6%A5%BC%E7%9B%98%E9%9B%95%E8%8A%B1%E4%BE%B5%E6%9D%83%23) `210.5K 🔥` `NEW`
1. [Jennie新歌MV疑似走光](https://s.weibo.com/weibo?q=%23Jennie%E6%96%B0%E6%AD%8CMV%E7%96%91%E4%BC%BC%E8%B5%B0%E5%85%89%23) `210.0K 🔥` `NEW`
1. [300斤女子减重150斤肚皮垂到了大腿](https://s.weibo.com/weibo?q=%23300%E6%96%A4%E5%A5%B3%E5%AD%90%E5%87%8F%E9%87%8D150%E6%96%A4%E8%82%9A%E7%9A%AE%E5%9E%82%E5%88%B0%E4%BA%86%E5%A4%A7%E8%85%BF%23) `200.3K 🔥` `NEW`
1. [人真的可以幸福到这般境地](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E5%B9%B8%E7%A6%8F%E5%88%B0%E8%BF%99%E8%88%AC%E5%A2%83%E5%9C%B0%23) `179.4K 🔥` `NEW`
1. [客人认证王俊凯折个鸡是最好吃的](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E4%BA%BA%E8%AE%A4%E8%AF%81%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%98%E4%B8%AA%E9%B8%A1%E6%98%AF%E6%9C%80%E5%A5%BD%E5%90%83%E7%9A%84%23) `176.9K 🔥` `NEW`
1. [迪丽热巴听到周星驰被索吻的反应](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%AC%E5%88%B0%E5%91%A8%E6%98%9F%E9%A9%B0%E8%A2%AB%E7%B4%A2%E5%90%BB%E7%9A%84%E5%8F%8D%E5%BA%94%23) `170.4K 🔥` `NEW`
1. [程潇梦幻联动迪丽热巴BGM](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E6%A2%A6%E5%B9%BB%E8%81%94%E5%8A%A8%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4BGM%23) `149.6K 🔥` `NEW`
1. [哈兰德惊叹大葱长得好像我](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%83%8A%E5%8F%B9%E5%A4%A7%E8%91%B1%E9%95%BF%E5%BE%97%E5%A5%BD%E5%83%8F%E6%88%91%23) `146.7K 🔥` `NEW`
1. [哥哥回应和龙凤胎妹妹身高差20厘米 (Brother responded that there is a height difference of 20 centimeters between his twin sister)](https://s.weibo.com/weibo?q=%23%E5%93%A5%E5%93%A5%E5%9B%9E%E5%BA%94%E5%92%8C%E9%BE%99%E5%87%A4%E8%83%8E%E5%A6%B9%E5%A6%B9%E8%BA%AB%E9%AB%98%E5%B7%AE20%E5%8E%98%E7%B1%B3%23) `134.2K 🔥` `NEW`
1. [功夫女足回应票房破19亿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%9B%9E%E5%BA%94%E7%A5%A8%E6%88%BF%E7%A0%B419%E4%BA%BF%23) `133.7K 🔥` `NEW`
1. [特斯拉人形机器人](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `132.9K 🔥` `NEW`
1. [鹿晗 与我无关的事情](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E4%B8%8E%E6%88%91%E6%97%A0%E5%85%B3%E7%9A%84%E4%BA%8B%E6%83%85%23) `1.0M 🔥` `+52%`
1. [A股重磅新规明起实施](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E7%A3%85%E6%96%B0%E8%A7%84%E6%98%8E%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `611.5K 🔥` `+92%`
1. [杨幂辣妹回归](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%BE%A3%E5%A6%B9%E5%9B%9E%E5%BD%92%23) `550.1K 🔥` `+69%`
1. [极氪APP上线跨境守护功能](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AAAPP%E4%B8%8A%E7%BA%BF%E8%B7%A8%E5%A2%83%E5%AE%88%E6%8A%A4%E5%8A%9F%E8%83%BD%23) `387.9K 🔥` `+171%`
1. [珠海妇幼称产检按国标无需检查四肢](https://s.weibo.com/weibo?q=%23%E7%8F%A0%E6%B5%B7%E5%A6%87%E5%B9%BC%E7%A7%B0%E4%BA%A7%E6%A3%80%E6%8C%89%E5%9B%BD%E6%A0%87%E6%97%A0%E9%9C%80%E6%A3%80%E6%9F%A5%E5%9B%9B%E8%82%A2%23) `218.1K 🔥` `+43%`
1. [中餐厅张雅琪这个发型](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E5%BC%A0%E9%9B%85%E7%90%AA%E8%BF%99%E4%B8%AA%E5%8F%91%E5%9E%8B%23) `504.4K 🔥`
1. [王楚钦憋不住根本憋不住](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%86%8B%E4%B8%8D%E4%BD%8F%E6%A0%B9%E6%9C%AC%E6%86%8B%E4%B8%8D%E4%BD%8F%23) `286.5K 🔥`
1. [花一万多产检一路绿灯生下来畸形 (After spending more than 10,000 yuan on prenatal check-ups, she was given the green light to be born with deformities.)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%B8%80%E4%B8%87%E5%A4%9A%E4%BA%A7%E6%A3%80%E4%B8%80%E8%B7%AF%E7%BB%BF%E7%81%AF%E7%94%9F%E4%B8%8B%E6%9D%A5%E7%95%B8%E5%BD%A2%23) `609.5K 🔥` `-47%`
1. [台湾 致癌油 (Taiwan carcinogenic oil)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%20%E8%87%B4%E7%99%8C%E6%B2%B9%23) `362.9K 🔥` `-34%`
1. [红霞在广东惠州登陆 (Hongxia lands in Huizhou, Guangdong)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%E5%9C%A8%E5%B9%BF%E4%B8%9C%E6%83%A0%E5%B7%9E%E7%99%BB%E9%99%86%23) `217.7K 🔥` `-29%`
1. [孟子义常驻好六](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B8%B8%E9%A9%BB%E5%A5%BD%E5%85%AD%23) `214.7K 🔥` `-33%`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `155.3K 🔥` `-49%`
1. [马嘉祺25到26年到底上了什么班](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA25%E5%88%B026%E5%B9%B4%E5%88%B0%E5%BA%95%E4%B8%8A%E4%BA%86%E4%BB%80%E4%B9%88%E7%8F%AD%23) `153.7K 🔥` `-21%`
1. [迪丽热巴钰珑下沉口碑](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `143.9K 🔥` `-54%`
1. [雀骨第二季在筹备](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%9C%A8%E7%AD%B9%E5%A4%87%23) `135.9K 🔥` `-40%`
1. [日方拆解宇树机器人](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E6%8B%86%E8%A7%A3%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `132.5K 🔥` `-59%`
1. [A股内幕交易新规定来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%86%85%E5%B9%95%E4%BA%A4%E6%98%93%E6%96%B0%E8%A7%84%E5%AE%9A%E6%9D%A5%E4%BA%86%23) `132.4K 🔥` `-58%`

Updated at 2026-07-26 16:59:47

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
