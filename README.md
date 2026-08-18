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

1. [七夕送礼上淘宝最快半日达 (Taobao’s fastest half-day delivery for Chinese Valentine’s Day gifts)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%9C%80%E5%BF%AB%E5%8D%8A%E6%97%A5%E8%BE%BE%23) `175.6K 🔥` `NEW`
1. [女子开门杀反遭关门杀](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E9%97%A8%E6%9D%80%E5%8F%8D%E9%81%AD%E5%85%B3%E9%97%A8%E6%9D%80%23) `143.4K 🔥` `NEW`
1. [周洛汐演唱会喊话KPOP三大公司](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B4%9B%E6%B1%90%E6%BC%94%E5%94%B1%E4%BC%9A%E5%96%8A%E8%AF%9DKPOP%E4%B8%89%E5%A4%A7%E5%85%AC%E5%8F%B8%23) `147.2K 🔥`
1. [现在该不该换手机](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%8D%A2%E6%89%8B%E6%9C%BA%23) `147.2K 🔥`
1. [公积金新规 通俗解读](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E8%A7%84%20%E9%80%9A%E4%BF%97%E8%A7%A3%E8%AF%BB%23) `147.0K 🔥`
1. [打过四价九价HPV疫苗不用再打双价 (If you have received the four-valent and nine-valent HPV vaccine, you do not need to take the double-valent vaccine.)](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%BF%87%E5%9B%9B%E4%BB%B7%E4%B9%9D%E4%BB%B7HPV%E7%96%AB%E8%8B%97%E4%B8%8D%E7%94%A8%E5%86%8D%E6%89%93%E5%8F%8C%E4%BB%B7%23) `146.8K 🔥`
1. [做事千万不要有状态洁癖](https://s.weibo.com/weibo?q=%23%E5%81%9A%E4%BA%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%9C%89%E7%8A%B6%E6%80%81%E6%B4%81%E7%99%96%23) `146.6K 🔥`
1. [公积金 强制缴纳 (Provident fund compulsory payment)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%20%E5%BC%BA%E5%88%B6%E7%BC%B4%E7%BA%B3%23) `146.6K 🔥`
1. [你的经济属于什么水平](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E7%BB%8F%E6%B5%8E%E5%B1%9E%E4%BA%8E%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `146.5K 🔥`
1. [柯洁装弱智赢AI围棋](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B4%81%E8%A3%85%E5%BC%B1%E6%99%BA%E8%B5%A2AI%E5%9B%B4%E6%A3%8B%23) `146.1K 🔥`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `145.9K 🔥`
1. [让迪丽热巴涨粉八百万的台词 (The lines that made Di Lieba gain eight million fans)](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B6%A8%E7%B2%89%E5%85%AB%E7%99%BE%E4%B8%87%E7%9A%84%E5%8F%B0%E8%AF%8D%23) `145.8K 🔥`
1. [上海申花0比3北京国安 (Shanghai Shenhua 0-3 Beijing Guoan)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B3%E8%8A%B10%E6%AF%943%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89%23) `145.7K 🔥`
1. [外交部不再称靖国神社直接叫战犯神社](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E4%B8%8D%E5%86%8D%E7%A7%B0%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E7%9B%B4%E6%8E%A5%E5%8F%AB%E6%88%98%E7%8A%AF%E7%A5%9E%E7%A4%BE%23) `145.6K 🔥`
1. [冰箱里放了两年的苹果 (Apples that have been in the refrigerator for two years)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E9%87%8C%E6%94%BE%E4%BA%86%E4%B8%A4%E5%B9%B4%E7%9A%84%E8%8B%B9%E6%9E%9C%23) `145.3K 🔥`
1. [实体经济 房东](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%BD%93%E7%BB%8F%E6%B5%8E%20%E6%88%BF%E4%B8%9C%23) `145.2K 🔥`
1. [Dior全球公关总监去世 (Dior's global PR director dies)](https://s.weibo.com/weibo?q=%23Dior%E5%85%A8%E7%90%83%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%E5%8E%BB%E4%B8%96%23) `145.0K 🔥`
1. [苹果大波新品泄密](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A7%E6%B3%A2%E6%96%B0%E5%93%81%E6%B3%84%E5%AF%86%23) `144.9K 🔥`
1. [真心喜欢一个人是什么样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%BF%83%E5%96%9C%E6%AC%A2%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `144.8K 🔥`
1. [甲状腺最怕的坏习惯](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%9C%80%E6%80%95%E7%9A%84%E5%9D%8F%E4%B9%A0%E6%83%AF%23) `144.6K 🔥`
1. [调查组通报杭州酒局事件](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `144.5K 🔥`
1. [保送中南大学的女孩因蓝发走红](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E9%80%81%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E7%9A%84%E5%A5%B3%E5%AD%A9%E5%9B%A0%E8%93%9D%E5%8F%91%E8%B5%B0%E7%BA%A2%23) `144.3K 🔥`
1. [爱奇艺第二季度收入62.9亿元](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%BA%A6%E6%94%B6%E5%85%A562.9%E4%BA%BF%E5%85%83%23) `144.2K 🔥`
1. [白鹿包场敖瑞鹏孙珍妮师兄太稳健](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8C%85%E5%9C%BA%E6%95%96%E7%91%9E%E9%B9%8F%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%B8%88%E5%85%84%E5%A4%AA%E7%A8%B3%E5%81%A5%23) `144.0K 🔥`
1. [闫佩伦演技 (Yan Peilun's acting skills)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E4%BD%A9%E4%BC%A6%E6%BC%94%E6%8A%80%23) `143.9K 🔥`
1. [公积金条例修改](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%9D%A1%E4%BE%8B%E4%BF%AE%E6%94%B9%23) `143.6K 🔥`
1. [比野生狗奶还永久的存在出现了 (A more permanent existence than wild dog milk appears)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E9%87%8E%E7%94%9F%E7%8B%97%E5%A5%B6%E8%BF%98%E6%B0%B8%E4%B9%85%E7%9A%84%E5%AD%98%E5%9C%A8%E5%87%BA%E7%8E%B0%E4%BA%86%23) `143.5K 🔥`
1. [旅客带充气床住酒店惊呆工作人员](https://s.weibo.com/weibo?q=%23%E6%97%85%E5%AE%A2%E5%B8%A6%E5%85%85%E6%B0%94%E5%BA%8A%E4%BD%8F%E9%85%92%E5%BA%97%E6%83%8A%E5%91%86%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%23) `143.2K 🔥`
1. [上海2026社保基数公布](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B72026%E7%A4%BE%E4%BF%9D%E5%9F%BA%E6%95%B0%E5%85%AC%E5%B8%83%23) `143.1K 🔥`
1. [真正决定一个人能走多远的三种能力 (Three abilities that really determine how far a person can go)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%86%B3%E5%AE%9A%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%83%BD%E8%B5%B0%E5%A4%9A%E8%BF%9C%E7%9A%84%E4%B8%89%E7%A7%8D%E8%83%BD%E5%8A%9B%23) `143.0K 🔥`
1. [全国首例反强拆致死判正当防卫案](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E5%8F%8D%E5%BC%BA%E6%8B%86%E8%87%B4%E6%AD%BB%E5%88%A4%E6%AD%A3%E5%BD%93%E9%98%B2%E5%8D%AB%E6%A1%88%23) `142.8K 🔥`
1. [住房公积金新政来了 (The new housing provident fund policy is here)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E6%94%BF%E6%9D%A5%E4%BA%86%23) `142.7K 🔥`
1. [杭州酒局事件嫌疑人会被判多久 (How long will the suspect in the Hangzhou Liquor Bureau incident be sentenced?)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BC%9A%E8%A2%AB%E5%88%A4%E5%A4%9A%E4%B9%85%23) `142.5K 🔥`
1. [演员加练功券骗走1400万](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%8A%A0%E7%BB%83%E5%8A%9F%E5%88%B8%E9%AA%97%E8%B5%B01400%E4%B8%87%23) `142.4K 🔥`
1. [75岁王石再度创业](https://s.weibo.com/weibo?q=%2375%E5%B2%81%E7%8E%8B%E7%9F%B3%E5%86%8D%E5%BA%A6%E5%88%9B%E4%B8%9A%23) `142.1K 🔥`
1. [吴泽林曾在现场情绪失控](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E6%9B%BE%E5%9C%A8%E7%8E%B0%E5%9C%BA%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `142.0K 🔥`
1. [披荆斩棘一公小考分组倒挂](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%E5%88%86%E7%BB%84%E5%80%92%E6%8C%82%23) `141.9K 🔥`
1. [程序员每天5小时通勤往返150公里](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E5%BA%8F%E5%91%98%E6%AF%8F%E5%A4%A95%E5%B0%8F%E6%97%B6%E9%80%9A%E5%8B%A4%E5%BE%80%E8%BF%94150%E5%85%AC%E9%87%8C%23) `141.7K 🔥`
1. [男子猝死后同居女友被索赔27万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%8C%9D%E6%AD%BB%E5%90%8E%E5%90%8C%E5%B1%85%E5%A5%B3%E5%8F%8B%E8%A2%AB%E7%B4%A2%E8%B5%9427%E4%B8%87%23) `141.6K 🔥`
1. [一餐馆未打码曝光多名逃单顾客照片 (A restaurant exposed photos of multiple customers who skipped orders without coding)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A4%90%E9%A6%86%E6%9C%AA%E6%89%93%E7%A0%81%E6%9B%9D%E5%85%89%E5%A4%9A%E5%90%8D%E9%80%83%E5%8D%95%E9%A1%BE%E5%AE%A2%E7%85%A7%E7%89%87%23) `141.5K 🔥`
1. [杨国福在仅68个粉丝账号上致歉 (Yang Guofu apologized on only 68 fan accounts)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9B%BD%E7%A6%8F%E5%9C%A8%E4%BB%8568%E4%B8%AA%E7%B2%89%E4%B8%9D%E8%B4%A6%E5%8F%B7%E4%B8%8A%E8%87%B4%E6%AD%89%23) `141.3K 🔥`
1. [申花5个人没防住国安3个人](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%8A%B15%E4%B8%AA%E4%BA%BA%E6%B2%A1%E9%98%B2%E4%BD%8F%E5%9B%BD%E5%AE%893%E4%B8%AA%E4%BA%BA%23) `141.2K 🔥`
1. [小米新一代玄戒芯片即将发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E4%B8%80%E4%BB%A3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E5%8D%B3%E5%B0%86%E5%8F%91%E5%B8%83%23) `141.0K 🔥`
1. [我的前半生](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23) `140.9K 🔥`
1. [公积金](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%23) `140.6K 🔥`
1. [朱镕基同志生平 (Comrade Zhu Rongji's Life)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `310.2K 🔥` `-34%`
1. [七夕](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `289.1K 🔥` `-29%`
1. [9部门发文活跃县域消费 (9 departments issued documents to activate consumption in counties)](https://s.weibo.com/weibo?q=%239%E9%83%A8%E9%97%A8%E5%8F%91%E6%96%87%E6%B4%BB%E8%B7%83%E5%8E%BF%E5%9F%9F%E6%B6%88%E8%B4%B9%23) `177.0K 🔥` `-33%`
1. [胖东来招聘不包含性侵犯罪人员](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8B%9B%E8%81%98%E4%B8%8D%E5%8C%85%E5%90%AB%E6%80%A7%E4%BE%B5%E7%8A%AF%E7%BD%AA%E4%BA%BA%E5%91%98%23) `165.4K 🔥` `-29%`
1. [何炅因年龄大被密室拒绝](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%9B%A0%E5%B9%B4%E9%BE%84%E5%A4%A7%E8%A2%AB%E5%AF%86%E5%AE%A4%E6%8B%92%E7%BB%9D%23) `147.4K 🔥` `-25%`
1. [七夕啦](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E5%95%A6%23) `147.2K 🔥` `-61%`
1. [外卖备注孩子化疗收到100元现金](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%A4%87%E6%B3%A8%E5%AD%A9%E5%AD%90%E5%8C%96%E7%96%97%E6%94%B6%E5%88%B0100%E5%85%83%E7%8E%B0%E9%87%91%23) `146.2K 🔥` `-43%`

Updated at 2026-08-19 01:48:03

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
