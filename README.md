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

1. [赖清德跪拜日本殖民者 (Lai Ching-te knelt down to worship the Japanese colonizers)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%8B%9C%E6%97%A5%E6%9C%AC%E6%AE%96%E6%B0%91%E8%80%85%23) `1.0M 🔥` `NEW`
1. [BKT品牌全球代言人鞠婧祎](https://s.weibo.com/weibo?q=%23BKT%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%E9%9E%A0%E5%A9%A7%E7%A5%8E%23) `489.4K 🔥` `NEW`
1. [麦当劳铲子](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E9%93%B2%E5%AD%90%23) `424.2K 🔥` `NEW`
1. [给阿嬷的情书票房破亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `367.1K 🔥` `NEW`
1. [关晓彤终于遇到了有身高差的男主](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%BB%88%E4%BA%8E%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%89%E8%BA%AB%E9%AB%98%E5%B7%AE%E7%9A%84%E7%94%B7%E4%B8%BB%23) `335.1K 🔥` `NEW`
1. [尼坤发福](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E5%8F%91%E7%A6%8F%23) `335.0K 🔥` `NEW`
1. [伦敦世乒赛半决赛](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `332.5K 🔥` `NEW`
1. [疑似加到了孙怡本人的QQ](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%8A%A0%E5%88%B0%E4%BA%86%E5%AD%99%E6%80%A1%E6%9C%AC%E4%BA%BA%E7%9A%84QQ%23) `330.8K 🔥` `NEW`
1. [李嘉格坦白离婚后孩子和父母的反应](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E5%9D%A6%E7%99%BD%E7%A6%BB%E5%A9%9A%E5%90%8E%E5%AD%A9%E5%AD%90%E5%92%8C%E7%88%B6%E6%AF%8D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `302.5K 🔥` `NEW`
1. [马嘉祺宋亚轩回中戏答辩了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E4%B8%AD%E6%88%8F%E7%AD%94%E8%BE%A9%E4%BA%86%23) `242.9K 🔥` `NEW`
1. [美目击者称UFO生物身高不足1.2米 (American eyewitnesses said the UFO creature was less than 1.2 meters tall)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0UFO%E7%94%9F%E7%89%A9%E8%BA%AB%E9%AB%98%E4%B8%8D%E8%B6%B31.2%E7%B1%B3%23) `238.2K 🔥` `NEW`
1. [显微镜下的辣条](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E8%BE%A3%E6%9D%A1%23) `197.5K 🔥` `NEW`
1. [王曼昱vs斯佐科斯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E6%96%AF%E4%BD%90%E7%A7%91%E6%96%AF%23) `177.4K 🔥` `NEW`
1. [跑男收视率 浪姐没播](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%20%E6%B5%AA%E5%A7%90%E6%B2%A1%E6%92%AD%23) `175.1K 🔥` `NEW`
1. [张本美和3比1韩莹](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C3%E6%AF%941%E9%9F%A9%E8%8E%B9%23) `155.3K 🔥` `NEW`
1. [俄罗斯红场阅兵全场高呼乌拉](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%BA%A2%E5%9C%BA%E9%98%85%E5%85%B5%E5%85%A8%E5%9C%BA%E9%AB%98%E5%91%BC%E4%B9%8C%E6%8B%89%23) `149.1K 🔥` `NEW`
1. [AG对战EDGM](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98EDGM%23) `133.9K 🔥` `NEW`
1. [市场人士回应DeepSeek阿里谈崩](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%9C%BA%E4%BA%BA%E5%A3%AB%E5%9B%9E%E5%BA%94DeepSeek%E9%98%BF%E9%87%8C%E8%B0%88%E5%B4%A9%23) `121.3K 🔥` `NEW`
1. [国际足联急了 (FIFA is anxious)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%80%A5%E4%BA%86%23) `2.3M 🔥` `+62%`
1. [榴莲仅退款事件有女生被误伤](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%BA%8B%E4%BB%B6%E6%9C%89%E5%A5%B3%E7%94%9F%E8%A2%AB%E8%AF%AF%E4%BC%A4%23) `527.7K 🔥` `+164%`
1. [越来越理解什么叫事缓则圆](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%90%86%E8%A7%A3%E4%BB%80%E4%B9%88%E5%8F%AB%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%23) `475.1K 🔥` `+206%`
1. [有洁癖的人洗小龙虾 (A mysophobic person washes crayfish)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B4%81%E7%99%96%E7%9A%84%E4%BA%BA%E6%B4%97%E5%B0%8F%E9%BE%99%E8%99%BE%23) `335.5K 🔥` `+22%`
1. [李嘉格收入稳定后才选择离婚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E6%94%B6%E5%85%A5%E7%A8%B3%E5%AE%9A%E5%90%8E%E6%89%8D%E9%80%89%E6%8B%A9%E7%A6%BB%E5%A9%9A%23) `331.4K 🔥` `+52%`
1. [一家三口候车室吃东西垃圾扔满地](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%80%99%E8%BD%A6%E5%AE%A4%E5%90%83%E4%B8%9C%E8%A5%BF%E5%9E%83%E5%9C%BE%E6%89%94%E6%BB%A1%E5%9C%B0%23) `184.6K 🔥` `+23%`
1. [我国外贸延续良好增长态势](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%96%E8%B4%B8%E5%BB%B6%E7%BB%AD%E8%89%AF%E5%A5%BD%E5%A2%9E%E9%95%BF%E6%80%81%E5%8A%BF%23) `785.2K 🔥`
1. [中国烧烤店是天价世界杯第一个受害者](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%83%A7%E7%83%A4%E5%BA%97%E6%98%AF%E5%A4%A9%E4%BB%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%97%E5%AE%B3%E8%80%85%23) `763.3K 🔥`
1. [女儿的100个橡皮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%9A%84100%E4%B8%AA%E6%A9%A1%E7%9A%AE%23) `521.0K 🔥`
1. [张凌赫害怕大家看不懂](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AE%B3%E6%80%95%E5%A4%A7%E5%AE%B6%E7%9C%8B%E4%B8%8D%E6%87%82%23) `334.7K 🔥`
1. [王楚钦在训练场得知国乒拿下韩国](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9C%A8%E8%AE%AD%E7%BB%83%E5%9C%BA%E5%BE%97%E7%9F%A5%E5%9B%BD%E4%B9%92%E6%8B%BF%E4%B8%8B%E9%9F%A9%E5%9B%BD%23) `334.4K 🔥`
1. [西方抹黑中国换新词了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%96%B9%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%E6%8D%A2%E6%96%B0%E8%AF%8D%E4%BA%86%23) `334.0K 🔥`
1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `333.2K 🔥`
1. [世界杯转播权 (World Cup broadcast rights)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `330.2K 🔥`
1. [奔跑吧回应收视率低 (Run Bar responds to low ratings)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%9B%9E%E5%BA%94%E6%94%B6%E8%A7%86%E7%8E%87%E4%BD%8E%23) `329.6K 🔥`
1. [曝王一博将进组刺客](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B0%86%E8%BF%9B%E7%BB%84%E5%88%BA%E5%AE%A2%23) `324.1K 🔥`
1. [女子打水光针后吃小龙虾满脸肉芽肿 (Woman's face is covered with granulomas after eating crayfish after taking water-light injections)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E6%B0%B4%E5%85%89%E9%92%88%E5%90%8E%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E6%BB%A1%E8%84%B8%E8%82%89%E8%8A%BD%E8%82%BF%23) `308.4K 🔥`
1. [演员于娜回应减掉30斤 (Actor Yu Na responded to losing 30 pounds)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E4%BA%8E%E5%A8%9C%E5%9B%9E%E5%BA%94%E5%87%8F%E6%8E%8930%E6%96%A4%23) `221.9K 🔥`
1. [陈奕恒翻唱Marry (Chen Yiheng covers Marry)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%BF%BB%E5%94%B1Marry%23) `164.2K 🔥`
1. [罗马尼亚女团踩坏比赛球台 (Romanian women's team tramples on competition table)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E9%A9%AC%E5%B0%BC%E4%BA%9A%E5%A5%B3%E5%9B%A2%E8%B8%A9%E5%9D%8F%E6%AF%94%E8%B5%9B%E7%90%83%E5%8F%B0%23) `335.4K 🔥` `-30%`
1. [张继科谈国乒男团进四强](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%B0%88%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BF%9B%E5%9B%9B%E5%BC%BA%23) `334.9K 🔥` `-23%`
1. [给阿嬷的情书剧组穷成这样](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%89%A7%E7%BB%84%E7%A9%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `334.5K 🔥` `-29%`
1. [母亲节礼物](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%E7%A4%BC%E7%89%A9%23) `240.2K 🔥` `-24%`
1. [跑男转发区 (Running man forwarding area)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E8%BD%AC%E5%8F%91%E5%8C%BA%23) `237.7K 🔥` `-41%`
1. [男子贷27万离世银行追债30万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B4%B727%E4%B8%87%E7%A6%BB%E4%B8%96%E9%93%B6%E8%A1%8C%E8%BF%BD%E5%80%BA30%E4%B8%87%23) `217.8K 🔥` `-37%`
1. [邓超发际线被打码](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%8F%91%E9%99%85%E7%BA%BF%E8%A2%AB%E6%89%93%E7%A0%81%23) `215.1K 🔥` `-38%`
1. [宋亚轩 国乐无双](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%23) `210.2K 🔥` `-26%`
1. [长大后我开始富养妈妈](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E6%88%91%E5%BC%80%E5%A7%8B%E5%AF%8C%E5%85%BB%E5%A6%88%E5%A6%88%23) `191.0K 🔥` `-22%`
1. [淘宝免单 李小冉](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%20%E6%9D%8E%E5%B0%8F%E5%86%89%23) `152.2K 🔥` `-49%`
1. [密室大逃脱 张真源 (Escape Room Zhang Zhenyuan)](https://s.weibo.com/weibo?q=%23%E5%AF%86%E5%AE%A4%E5%A4%A7%E9%80%83%E8%84%B1%20%E5%BC%A0%E7%9C%9F%E6%BA%90%23) `151.4K 🔥` `-29%`
1. [白鹿主动让C](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%BB%E5%8A%A8%E8%AE%A9C%23) `148.5K 🔥` `-23%`
1. [汪卓成被好莱坞找去演男主以为是诈骗 (Wang Zhuocheng was recruited by Hollywood to play the male lead and thought it was a scam)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%8D%93%E6%88%90%E8%A2%AB%E5%A5%BD%E8%8E%B1%E5%9D%9E%E6%89%BE%E5%8E%BB%E6%BC%94%E7%94%B7%E4%B8%BB%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%AF%88%E9%AA%97%23) `145.0K 🔥` `-52%`
1. [张桂源给陈奕恒的祝福](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E7%BB%99%E9%99%88%E5%A5%95%E6%81%92%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `129.5K 🔥` `-56%`

Updated at 2026-05-09 19:57:29

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
