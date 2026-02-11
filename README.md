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

1. [2026新春走基层 (2026 New Year Goes to the Grassroots)](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `662.9K 🔥` `NEW`
1. [2026春运天气通](https://s.weibo.com/weibo?q=%232026%E6%98%A5%E8%BF%90%E5%A4%A9%E6%B0%94%E9%80%9A%23) `657.0K 🔥` `NEW`
1. [何老师嗓子哑了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%23) `215.5K 🔥` `NEW`
1. [于东来账号已改名傻坏蛋](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E8%B4%A6%E5%8F%B7%E5%B7%B2%E6%94%B9%E5%90%8D%E5%82%BB%E5%9D%8F%E8%9B%8B%23) `198.2K 🔥` `NEW`
1. [英王室地产发现疑似涉爱泼斯坦案尸体](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%8E%8B%E5%AE%A4%E5%9C%B0%E4%BA%A7%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E6%B6%89%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%B0%B8%E4%BD%93%23) `146.5K 🔥` `NEW`
1. [权志龙Chanel](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99Chanel%23) `146.0K 🔥` `NEW`
1. [生命树下篇狂飙上了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E4%B8%8B%E7%AF%87%E7%8B%82%E9%A3%99%E4%B8%8A%E4%BA%86%23) `145.4K 🔥` `NEW`
1. [当新能源冠军遇上英超冠军](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%96%B0%E8%83%BD%E6%BA%90%E5%86%A0%E5%86%9B%E9%81%87%E4%B8%8A%E8%8B%B1%E8%B6%85%E5%86%A0%E5%86%9B%23) `144.1K 🔥` `NEW`
1. [马嘉祺丁程鑫本命年戴了红绳](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E6%9C%AC%E5%91%BD%E5%B9%B4%E6%88%B4%E4%BA%86%E7%BA%A2%E7%BB%B3%23) `143.5K 🔥` `NEW`
1. [女护士与已婚男吃饭被灌醉拍私密照](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8A%A4%E5%A3%AB%E4%B8%8E%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%90%83%E9%A5%AD%E8%A2%AB%E7%81%8C%E9%86%89%E6%8B%8D%E7%A7%81%E5%AF%86%E7%85%A7%23) `142.4K 🔥` `NEW`
1. [陈楚生 卡拉永远OK (Chen Chusheng Karaoke is always OK)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%20%E5%8D%A1%E6%8B%89%E6%B0%B8%E8%BF%9COK%23) `141.9K 🔥` `NEW`
1. [听闻姐姐分家产儿子打了母亲两巴掌](https://s.weibo.com/weibo?q=%23%E5%90%AC%E9%97%BB%E5%A7%90%E5%A7%90%E5%88%86%E5%AE%B6%E4%BA%A7%E5%84%BF%E5%AD%90%E6%89%93%E4%BA%86%E6%AF%8D%E4%BA%B2%E4%B8%A4%E5%B7%B4%E6%8E%8C%23) `133.7K 🔥` `NEW`
1. [刘亦菲陈瑶 双虞姬](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E7%91%B6%20%E5%8F%8C%E8%99%9E%E5%A7%AC%23) `126.8K 🔥` `NEW`
1. [刘宇宁伴舞呆米](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%BC%B4%E8%88%9E%E5%91%86%E7%B1%B3%23) `116.9K 🔥` `NEW`
1. [黄朔直播](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9C%94%E7%9B%B4%E6%92%AD%23) `116.0K 🔥` `NEW`
1. [赵睿停赛三场罚款5万](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%9D%BF%E5%81%9C%E8%B5%9B%E4%B8%89%E5%9C%BA%E7%BD%9A%E6%AC%BE5%E4%B8%87%23) `110.1K 🔥` `NEW`
1. [HYBE冲击前的Kpop](https://s.weibo.com/weibo?q=%23HYBE%E5%86%B2%E5%87%BB%E5%89%8D%E7%9A%84Kpop%23) `109.9K 🔥` `NEW`
1. [时代少年团唱我是李飞马上起飞](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%94%B1%E6%88%91%E6%98%AF%E6%9D%8E%E9%A3%9E%E9%A9%AC%E4%B8%8A%E8%B5%B7%E9%A3%9E%23) `109.8K 🔥` `NEW`
1. [向华强谈比尔盖茨去萝莉岛很反智](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%8D%8E%E5%BC%BA%E8%B0%88%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%8E%BB%E8%90%9D%E8%8E%89%E5%B2%9B%E5%BE%88%E5%8F%8D%E6%99%BA%23) `106.9K 🔥` `NEW`
1. [陈都灵生图长这样啥意思](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%94%9F%E5%9B%BE%E9%95%BF%E8%BF%99%E6%A0%B7%E5%95%A5%E6%84%8F%E6%80%9D%23) `102.5K 🔥` `NEW`
1. [虞书欣连线几分钟也做足功课 (Yu Shuxin was able to do enough homework even after being online for just a few minutes.)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%9E%E7%BA%BF%E5%87%A0%E5%88%86%E9%92%9F%E4%B9%9F%E5%81%9A%E8%B6%B3%E5%8A%9F%E8%AF%BE%23) `96.0K 🔥` `NEW`
1. [TOP队长带头和师兄打招呼](https://s.weibo.com/weibo?q=%23TOP%E9%98%9F%E9%95%BF%E5%B8%A6%E5%A4%B4%E5%92%8C%E5%B8%88%E5%85%84%E6%89%93%E6%8B%9B%E5%91%BC%23) `95.0K 🔥` `NEW`
1. [生命树收视破2点5](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%94%B6%E8%A7%86%E7%A0%B42%E7%82%B95%23) `88.5K 🔥` `NEW`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `88.3K 🔥` `NEW`
1. [连续30天50个俯卧撑](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD30%E5%A4%A950%E4%B8%AA%E4%BF%AF%E5%8D%A7%E6%92%91%23) `87.7K 🔥` `NEW`
1. [陈楚生 全开麦](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%20%E5%85%A8%E5%BC%80%E9%BA%A6%23) `87.5K 🔥` `NEW`
1. [刘佳宇初步诊断为头部磕碰](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E5%88%9D%E6%AD%A5%E8%AF%8A%E6%96%AD%E4%B8%BA%E5%A4%B4%E9%83%A8%E7%A3%95%E7%A2%B0%23) `87.0K 🔥` `NEW`
1. [展轩直播](https://s.weibo.com/weibo?q=%23%E5%B1%95%E8%BD%A9%E7%9B%B4%E6%92%AD%23) `86.1K 🔥` `NEW`
1. [刘佳宇无缘U型场地决赛](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E6%97%A0%E7%BC%98U%E5%9E%8B%E5%9C%BA%E5%9C%B0%E5%86%B3%E8%B5%9B%23) `84.1K 🔥` `NEW`
1. [沈月双马尾机械姬](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%8F%8C%E9%A9%AC%E5%B0%BE%E6%9C%BA%E6%A2%B0%E5%A7%AC%23) `83.3K 🔥` `NEW`
1. [湖南卫视春晚 (Hunan Satellite TV Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `1.1M 🔥` `+33%`
1. [KK园区2.0内部照首曝光](https://s.weibo.com/weibo?q=%23KK%E5%9B%AD%E5%8C%BA2.0%E5%86%85%E9%83%A8%E7%85%A7%E9%A6%96%E6%9B%9D%E5%85%89%23) `827.2K 🔥` `+71%`
1. [月薪2000的环卫工困在电子镣铐](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA2000%E7%9A%84%E7%8E%AF%E5%8D%AB%E5%B7%A5%E5%9B%B0%E5%9C%A8%E7%94%B5%E5%AD%90%E9%95%A3%E9%93%90%23) `146.9K 🔥` `+49%`
1. [郭麒麟 爸爸还是您不争气啊](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%20%E7%88%B8%E7%88%B8%E8%BF%98%E6%98%AF%E6%82%A8%E4%B8%8D%E4%BA%89%E6%B0%94%E5%95%8A%23) `650.8K 🔥`
1. [日本法律只罚卖淫卖方不罚买方](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B3%95%E5%BE%8B%E5%8F%AA%E7%BD%9A%E5%8D%96%E6%B7%AB%E5%8D%96%E6%96%B9%E4%B8%8D%E7%BD%9A%E4%B9%B0%E6%96%B9%23) `169.1K 🔥`
1. [成何体统 (In what manner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `132.0K 🔥`
1. [湖南卫视春晚节目单来了](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9D%A5%E4%BA%86%23) `112.7K 🔥`
1. [喜欢侧睡的受害者出现了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BE%A7%E7%9D%A1%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `101.7K 🔥`
1. [冬奥会 (winter olympics)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `88.6K 🔥`
1. [全国房价止跌信号出现 (Signal for national house prices to stop falling appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%AD%A2%E8%B7%8C%E4%BF%A1%E5%8F%B7%E5%87%BA%E7%8E%B0%23) `229.0K 🔥` `-24%`
1. [青海一家35口人开大巴春节自驾游](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E4%B8%80%E5%AE%B635%E5%8F%A3%E4%BA%BA%E5%BC%80%E5%A4%A7%E5%B7%B4%E6%98%A5%E8%8A%82%E8%87%AA%E9%A9%BE%E6%B8%B8%23) `201.9K 🔥` `-48%`
1. [J人已经买好27年的过年机票](https://s.weibo.com/weibo?q=%23J%E4%BA%BA%E5%B7%B2%E7%BB%8F%E4%B9%B0%E5%A5%BD27%E5%B9%B4%E7%9A%84%E8%BF%87%E5%B9%B4%E6%9C%BA%E7%A5%A8%23) `147.1K 🔥` `-42%`
1. [爱泼斯坦羞辱性展示女孩视频曝光 (Video of Epstein humiliatingly showing girls exposed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%BE%9E%E8%BE%B1%E6%80%A7%E5%B1%95%E7%A4%BA%E5%A5%B3%E5%AD%A9%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `145.1K 🔥` `-40%`
1. [保罗在美国被禁言](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%A2%AB%E7%A6%81%E8%A8%80%23) `144.8K 🔥` `-40%`
1. [余茵曾多次与白鹿撞衫 (Yu Yin has clashed with Bai Lu many times)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%9B%BE%E5%A4%9A%E6%AC%A1%E4%B8%8E%E7%99%BD%E9%B9%BF%E6%92%9E%E8%A1%AB%23) `143.8K 🔥` `-40%`
1. [9岁抗癌女孩去世前整夜呼喊妈妈](https://s.weibo.com/weibo?q=%239%E5%B2%81%E6%8A%97%E7%99%8C%E5%A5%B3%E5%AD%A9%E5%8E%BB%E4%B8%96%E5%89%8D%E6%95%B4%E5%A4%9C%E5%91%BC%E5%96%8A%E5%A6%88%E5%A6%88%23) `142.8K 🔥` `-41%`
1. [刘佳宇摔倒](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E6%91%94%E5%80%92%23) `142.3K 🔥` `-88%`
1. [王者安琪拉典藏皮肤爆料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%AE%89%E7%90%AA%E6%8B%89%E5%85%B8%E8%97%8F%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `117.6K 🔥` `-27%`
1. [女子将敬酒服穿脏后焊接吊牌退货 (Woman wears dirty toast clothes and returns tag after welding it)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86%E6%95%AC%E9%85%92%E6%9C%8D%E7%A9%BF%E8%84%8F%E5%90%8E%E7%84%8A%E6%8E%A5%E5%90%8A%E7%89%8C%E9%80%80%E8%B4%A7%23) `103.5K 🔥` `-57%`
1. [迪丽热巴 高智感妈咪](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%AB%98%E6%99%BA%E6%84%9F%E5%A6%88%E5%92%AA%23) `101.6K 🔥` `-55%`
1. [一大批年轻人开始反向过年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A7%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8F%8D%E5%90%91%E8%BF%87%E5%B9%B4%23) `97.4K 🔥` `-29%`

Updated at 2026-02-11 21:47:00

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
