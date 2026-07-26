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

1. [四川九寨沟景区泥石流 (Debris flow in Jiuzhaigou Scenic Area, Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%99%AF%E5%8C%BA%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `886.6K 🔥` `NEW`
1. [不要长期向AI倾泻心事](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E5%90%91AI%E5%80%BE%E6%B3%BB%E5%BF%83%E4%BA%8B%23) `547.7K 🔥` `NEW`
1. [原来请假是不需要理由的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AF%B7%E5%81%87%E6%98%AF%E4%B8%8D%E9%9C%80%E8%A6%81%E7%90%86%E7%94%B1%E7%9A%84%23) `525.1K 🔥` `NEW`
1. [基因编辑死亡女童原本只是认知发育迟缓](https://s.weibo.com/weibo?q=%23%E5%9F%BA%E5%9B%A0%E7%BC%96%E8%BE%91%E6%AD%BB%E4%BA%A1%E5%A5%B3%E7%AB%A5%E5%8E%9F%E6%9C%AC%E5%8F%AA%E6%98%AF%E8%AE%A4%E7%9F%A5%E5%8F%91%E8%82%B2%E8%BF%9F%E7%BC%93%23) `483.7K 🔥` `NEW`
1. [张凌赫回复付辛博](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E4%BB%98%E8%BE%9B%E5%8D%9A%23) `479.7K 🔥` `NEW`
1. [金鹤龙晒迪丽热巴钰珑](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E6%99%92%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%23) `391.1K 🔥` `NEW`
1. [AL对战BLG](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98BLG%23) `391.0K 🔥` `NEW`
1. [鞠婧祎让粉丝进酒店看出妆](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%AE%A9%E7%B2%89%E4%B8%9D%E8%BF%9B%E9%85%92%E5%BA%97%E7%9C%8B%E5%87%BA%E5%A6%86%23) `384.8K 🔥` `NEW`
1. [孟子义还有五部待播作品](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%98%E6%9C%89%E4%BA%94%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%23) `381.8K 🔥` `NEW`
1. [张凌赫用了粉丝做的表情包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%A8%E4%BA%86%E7%B2%89%E4%B8%9D%E5%81%9A%E7%9A%84%E8%A1%A8%E6%83%85%E5%8C%85%23) `351.7K 🔥` `NEW`
1. [鹭卓赵一博卓沅缺席十个勤天演唱会 (Lu Zhuo, Zhao Yibo and Zhuo Yuan were absent from Ten Qintian Concerts)](https://s.weibo.com/weibo?q=%23%E9%B9%AD%E5%8D%93%E8%B5%B5%E4%B8%80%E5%8D%9A%E5%8D%93%E6%B2%85%E7%BC%BA%E5%B8%AD%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%23) `347.5K 🔥` `NEW`
1. [BLG战胜AL](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CAL%23) `333.0K 🔥` `NEW`
1. [长鑫上市 合肥能赚多少](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E4%B8%8A%E5%B8%82%20%E5%90%88%E8%82%A5%E8%83%BD%E8%B5%9A%E5%A4%9A%E5%B0%91%23) `331.0K 🔥` `NEW`
1. [花二十多万买了个48平的海景房](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%BA%8C%E5%8D%81%E5%A4%9A%E4%B8%87%E4%B9%B0%E4%BA%86%E4%B8%AA48%E5%B9%B3%E7%9A%84%E6%B5%B7%E6%99%AF%E6%88%BF%23) `328.1K 🔥` `NEW`
1. [鹿晗粉碎热搜词条](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%B2%89%E7%A2%8E%E7%83%AD%E6%90%9C%E8%AF%8D%E6%9D%A1%23) `327.0K 🔥` `NEW`
1. [被游客掰断手腕NPC称左手仍无知觉](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%B8%B8%E5%AE%A2%E6%8E%B0%E6%96%AD%E6%89%8B%E8%85%95NPC%E7%A7%B0%E5%B7%A6%E6%89%8B%E4%BB%8D%E6%97%A0%E7%9F%A5%E8%A7%89%23) `318.5K 🔥` `NEW`
1. [王一博开香槟憋着坏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BC%80%E9%A6%99%E6%A7%9F%E6%86%8B%E7%9D%80%E5%9D%8F%23) `317.3K 🔥` `NEW`
1. [cp福州](https://s.weibo.com/weibo?q=%23cp%E7%A6%8F%E5%B7%9E%23) `286.7K 🔥` `NEW`
1. [陈浚铭 我不想报rap了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%20%E6%88%91%E4%B8%8D%E6%83%B3%E6%8A%A5rap%E4%BA%86%23) `275.2K 🔥` `NEW`
1. [林瀚强吻晚晚](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%80%9A%E5%BC%BA%E5%90%BB%E6%99%9A%E6%99%9A%23) `262.5K 🔥` `NEW`
1. [TOP青岛演唱会首唱渴望就可能 (TOP Qingdao Concert’s First Singing Desire Is Possible)](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E9%A6%96%E5%94%B1%E6%B8%B4%E6%9C%9B%E5%B0%B1%E5%8F%AF%E8%83%BD%23) `218.5K 🔥` `NEW`
1. [甘肃省委书记省长赶赴山洪现场](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E7%9C%81%E9%95%BF%E8%B5%B6%E8%B5%B4%E5%B1%B1%E6%B4%AA%E7%8E%B0%E5%9C%BA%23) `217.9K 🔥` `NEW`
1. [比邱淑贞女儿还像邱淑贞的女警](https://s.weibo.com/weibo?q=%23%E6%AF%94%E9%82%B1%E6%B7%91%E8%B4%9E%E5%A5%B3%E5%84%BF%E8%BF%98%E5%83%8F%E9%82%B1%E6%B7%91%E8%B4%9E%E7%9A%84%E5%A5%B3%E8%AD%A6%23) `205.4K 🔥` `NEW`
1. [KSG狼队卡位赛](https://s.weibo.com/weibo?q=%23KSG%E7%8B%BC%E9%98%9F%E5%8D%A1%E4%BD%8D%E8%B5%9B%23) `185.9K 🔥` `NEW`
1. [KTV经理为牟利组织15岁少女卖淫](https://s.weibo.com/weibo?q=%23KTV%E7%BB%8F%E7%90%86%E4%B8%BA%E7%89%9F%E5%88%A9%E7%BB%84%E7%BB%8715%E5%B2%81%E5%B0%91%E5%A5%B3%E5%8D%96%E6%B7%AB%23) `181.4K 🔥` `NEW`
1. [王自如谈罗永浩怒斥电视机厂商](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%87%AA%E5%A6%82%E8%B0%88%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%92%E6%96%A5%E7%94%B5%E8%A7%86%E6%9C%BA%E5%8E%82%E5%95%86%23) `180.5K 🔥` `NEW`
1. [打假车企贴牌扬声器](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%81%87%E8%BD%A6%E4%BC%81%E8%B4%B4%E7%89%8C%E6%89%AC%E5%A3%B0%E5%99%A8%23) `179.4K 🔥` `NEW`
1. [狼队对战Hero](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98Hero%23) `178.6K 🔥` `NEW`
1. [考公人发现豆包的神奇用法](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E4%BA%BA%E5%8F%91%E7%8E%B0%E8%B1%86%E5%8C%85%E7%9A%84%E7%A5%9E%E5%A5%87%E7%94%A8%E6%B3%95%23) `177.1K 🔥` `NEW`
1. [百万粉丝女网红贩卖私密视频被逮捕](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%B2%89%E4%B8%9D%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%B4%A9%E5%8D%96%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91%E8%A2%AB%E9%80%AE%E6%8D%95%23) `1.2M 🔥` `+218%`
1. [杭州已经发展成这样了吗 (Has Hangzhou developed like this?)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%B7%B2%E7%BB%8F%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `588.1K 🔥` `+21%`
1. [新产业跑出中国加速度 (New industries are accelerating out of China)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%A7%E4%B8%9A%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `655.6K 🔥`
1. [晚饭后最好的耗糖运动](https://s.weibo.com/weibo?q=%23%E6%99%9A%E9%A5%AD%E5%90%8E%E6%9C%80%E5%A5%BD%E7%9A%84%E8%80%97%E7%B3%96%E8%BF%90%E5%8A%A8%23) `484.3K 🔥`
1. [演员王建隆去世 (Actor Wang Jianlong passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%8E%8B%E5%BB%BA%E9%9A%86%E5%8E%BB%E4%B8%96%23) `383.1K 🔥`
1. [终于明白职场没有朋友的含义了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E8%81%8C%E5%9C%BA%E6%B2%A1%E6%9C%89%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%90%AB%E4%B9%89%E4%BA%86%23) `356.7K 🔥`
1. [曝刘宇宁曾自称是87年的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AE%87%E5%AE%81%E6%9B%BE%E8%87%AA%E7%A7%B0%E6%98%AF87%E5%B9%B4%E7%9A%84%23) `324.0K 🔥`
1. [原来小区是这样命名的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B0%8F%E5%8C%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E5%91%BD%E5%90%8D%E7%9A%84%23) `321.5K 🔥`
1. [王橹杰跳whiplash](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%B7%B3whiplash%23) `317.2K 🔥`
1. [扣扣搜搜却花了很多钱](https://s.weibo.com/weibo?q=%23%E6%89%A3%E6%89%A3%E6%90%9C%E6%90%9C%E5%8D%B4%E8%8A%B1%E4%BA%86%E5%BE%88%E5%A4%9A%E9%92%B1%23) `274.5K 🔥`
1. [婴儿是否知道谁是自己的妈妈](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E6%98%AF%E5%90%A6%E7%9F%A5%E9%81%93%E8%B0%81%E6%98%AF%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A6%88%E5%A6%88%23) `388.2K 🔥` `-42%`
1. [百花杀大结局 (The ending of Hundred Flowers Killing)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%A4%A7%E7%BB%93%E5%B1%80%23) `275.8K 🔥` `-75%`
1. [美国发生AI失控事故](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E7%94%9FAI%E5%A4%B1%E6%8E%A7%E4%BA%8B%E6%95%85%23) `275.5K 🔥` `-24%`
1. [现实好看和上镜好看是两个维度](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%AE%9E%E5%A5%BD%E7%9C%8B%E5%92%8C%E4%B8%8A%E9%95%9C%E5%A5%BD%E7%9C%8B%E6%98%AF%E4%B8%A4%E4%B8%AA%E7%BB%B4%E5%BA%A6%23) `273.1K 🔥` `-42%`
1. [艾米净身高165 (Amy's net height is 165)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E5%87%80%E8%BA%AB%E9%AB%98165%23) `269.7K 🔥` `-24%`
1. [每次发完朋友圈都特别尴尬 (I feel very embarrassed every time I post it on Moments)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E6%AC%A1%E5%8F%91%E5%AE%8C%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E7%89%B9%E5%88%AB%E5%B0%B4%E5%B0%AC%23) `220.8K 🔥` `-33%`
1. [周星驰不再依赖迪丽热巴算长大吗 (Is it considered that Stephen Chow has grown up when he no longer relies on Dilraba?)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `220.1K 🔥` `-41%`
1. [滞销西瓜被网红压价到一毛多一斤 (Slow-selling watermelons are priced down by internet celebrities to just over 10 cents per pound)](https://s.weibo.com/weibo?q=%23%E6%BB%9E%E9%94%80%E8%A5%BF%E7%93%9C%E8%A2%AB%E7%BD%91%E7%BA%A2%E5%8E%8B%E4%BB%B7%E5%88%B0%E4%B8%80%E6%AF%9B%E5%A4%9A%E4%B8%80%E6%96%A4%23) `216.2K 🔥` `-73%`
1. [曾沛慈徐梦洁孟佳一起旅游](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BE%90%E6%A2%A6%E6%B4%81%E5%AD%9F%E4%BD%B3%E4%B8%80%E8%B5%B7%E6%97%85%E6%B8%B8%23) `215.1K 🔥` `-38%`
1. [王一博第三名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%AC%AC%E4%B8%89%E5%90%8D%23) `180.7K 🔥` `-48%`
1. [王虹北大同学晒大一合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%8C%97%E5%A4%A7%E5%90%8C%E5%AD%A6%E6%99%92%E5%A4%A7%E4%B8%80%E5%90%88%E7%85%A7%23) `178.0K 🔥` `-52%`

Updated at 2026-07-26 22:37:49

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
