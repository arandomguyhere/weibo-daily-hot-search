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

1. [西班牙进球前一分钟的宇宙级传控 (Spain's cosmic passing control one minute before goal)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%BF%9B%E7%90%83%E5%89%8D%E4%B8%80%E5%88%86%E9%92%9F%E7%9A%84%E5%AE%87%E5%AE%99%E7%BA%A7%E4%BC%A0%E6%8E%A7%23) `838.2K 🔥` `NEW`
1. [工作组赴吉林暴雨洪涝灾区](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E7%BB%84%E8%B5%B4%E5%90%89%E6%9E%97%E6%9A%B4%E9%9B%A8%E6%B4%AA%E6%B6%9D%E7%81%BE%E5%8C%BA%23) `822.9K 🔥` `NEW`
1. [导演怀疑侯明昊艾米动了真情](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E6%80%80%E7%96%91%E4%BE%AF%E6%98%8E%E6%98%8A%E8%89%BE%E7%B1%B3%E5%8A%A8%E4%BA%86%E7%9C%9F%E6%83%85%23) `822.7K 🔥` `NEW`
1. [王俊凯演唱会增加了921票价的座位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A2%9E%E5%8A%A0%E4%BA%86921%E7%A5%A8%E4%BB%B7%E7%9A%84%E5%BA%A7%E4%BD%8D%23) `560.9K 🔥` `NEW`
1. [特朗普性侵案败诉](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%80%A7%E4%BE%B5%E6%A1%88%E8%B4%A5%E8%AF%89%23) `433.1K 🔥` `NEW`
1. [宁艺卓向韩国捐款](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%90%91%E9%9F%A9%E5%9B%BD%E6%8D%90%E6%AC%BE%23) `424.5K 🔥` `NEW`
1. [87版红楼梦刘姥姥扮演者去世](https://s.weibo.com/weibo?q=%2387%E7%89%88%E7%BA%A2%E6%A5%BC%E6%A2%A6%E5%88%98%E5%A7%A5%E5%A7%A5%E6%89%AE%E6%BC%94%E8%80%85%E5%8E%BB%E4%B8%96%23) `423.8K 🔥` `NEW`
1. [张元英抱臂听讲被骂](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%8A%B1%E8%87%82%E5%90%AC%E8%AE%B2%E8%A2%AB%E9%AA%82%23) `378.9K 🔥` `NEW`
1. [金秀贤复出后收到40多部剧本](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E5%A4%8D%E5%87%BA%E5%90%8E%E6%94%B6%E5%88%B040%E5%A4%9A%E9%83%A8%E5%89%A7%E6%9C%AC%23) `306.3K 🔥` `NEW`
1. [沈阳洪水](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%B4%AA%E6%B0%B4%23) `300.9K 🔥` `NEW`
1. [中宣部原副部长蔡赴朝被查 (Former Vice Minister of the Central Propaganda Department Cai went to North Korea and was investigated)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%AE%A3%E9%83%A8%E5%8E%9F%E5%89%AF%E9%83%A8%E9%95%BF%E8%94%A1%E8%B5%B4%E6%9C%9D%E8%A2%AB%E6%9F%A5%23) `297.7K 🔥` `NEW`
1. [2026世界杯最强预言会成真吗](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E5%BC%BA%E9%A2%84%E8%A8%80%E4%BC%9A%E6%88%90%E7%9C%9F%E5%90%97%23) `288.0K 🔥` `NEW`
1. [张凌赫只为你而来](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%AA%E4%B8%BA%E4%BD%A0%E8%80%8C%E6%9D%A5%23) `281.0K 🔥` `NEW`
1. [功夫女足 换片源](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E6%8D%A2%E7%89%87%E6%BA%90%23) `272.9K 🔥` `NEW`
1. [旅游时突然被通知开除了](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E6%97%B6%E7%AA%81%E7%84%B6%E8%A2%AB%E9%80%9A%E7%9F%A5%E5%BC%80%E9%99%A4%E4%BA%86%23) `265.0K 🔥` `NEW`
1. [天官赐福](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%98%E8%B5%90%E7%A6%8F%23) `265.0K 🔥` `NEW`
1. [逐玉演唱会 男女主不去](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%BC%94%E5%94%B1%E4%BC%9A%20%E7%94%B7%E5%A5%B3%E4%B8%BB%E4%B8%8D%E5%8E%BB%23) `263.9K 🔥` `NEW`
1. [女子煲汤邻居误以为尸臭报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%85%B2%E6%B1%A4%E9%82%BB%E5%B1%85%E8%AF%AF%E4%BB%A5%E4%B8%BA%E5%B0%B8%E8%87%AD%E6%8A%A5%E8%AD%A6%23) `252.3K 🔥` `NEW`
1. [婴儿时期的记忆去哪了](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E6%97%B6%E6%9C%9F%E7%9A%84%E8%AE%B0%E5%BF%86%E5%8E%BB%E5%93%AA%E4%BA%86%23) `251.3K 🔥` `NEW`
1. [丽江偶遇马嘉祺](https://s.weibo.com/weibo?q=%23%E4%B8%BD%E6%B1%9F%E5%81%B6%E9%81%87%E9%A9%AC%E5%98%89%E7%A5%BA%23) `212.1K 🔥` `NEW`
1. [姆巴佩金球奖概率跌至3% (Mbappe’s Ballon d’Or probability drops to 3%)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%87%91%E7%90%83%E5%A5%96%E6%A6%82%E7%8E%87%E8%B7%8C%E8%87%B33%25%23) `207.0K 🔥` `NEW`
1. [周深官宣四城九场演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%AE%98%E5%AE%A3%E5%9B%9B%E5%9F%8E%E4%B9%9D%E5%9C%BA%E6%BC%94%E5%94%B1%E4%BC%9A%23) `201.9K 🔥` `NEW`
1. [没想到法拦西最后成了西兰花](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E6%B3%95%E6%8B%A6%E8%A5%BF%E6%9C%80%E5%90%8E%E6%88%90%E4%BA%86%E8%A5%BF%E5%85%B0%E8%8A%B1%23) `195.4K 🔥` `NEW`
1. [吴绮莉回应不做亲子鉴定](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%BB%AE%E8%8E%89%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%81%9A%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%23) `191.9K 🔥` `NEW`
1. [张真源怎么了妈妈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%80%8E%E4%B9%88%E4%BA%86%E5%A6%88%E5%A6%88%23) `190.1K 🔥` `NEW`
1. [王安宇穿五分裤小腿好优越](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%A9%BF%E4%BA%94%E5%88%86%E8%A3%A4%E5%B0%8F%E8%85%BF%E5%A5%BD%E4%BC%98%E8%B6%8A%23) `188.8K 🔥` `NEW`
1. [真想招人的公司不会为难你的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%83%B3%E6%8B%9B%E4%BA%BA%E7%9A%84%E5%85%AC%E5%8F%B8%E4%B8%8D%E4%BC%9A%E4%B8%BA%E9%9A%BE%E4%BD%A0%E7%9A%84%23) `186.8K 🔥` `NEW`
1. [宝马高管称电动车千匹马力是营销噱头](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E9%A9%AC%E9%AB%98%E7%AE%A1%E7%A7%B0%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%8D%83%E5%8C%B9%E9%A9%AC%E5%8A%9B%E6%98%AF%E8%90%A5%E9%94%80%E5%99%B1%E5%A4%B4%23) `185.9K 🔥` `NEW`
1. [功夫女足票房是周星驰最好的补药](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E6%98%AF%E5%91%A8%E6%98%9F%E9%A9%B0%E6%9C%80%E5%A5%BD%E7%9A%84%E8%A1%A5%E8%8D%AF%23) `185.1K 🔥` `NEW`
1. [巴菲特开始清仓自己](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%8F%B2%E7%89%B9%E5%BC%80%E5%A7%8B%E6%B8%85%E4%BB%93%E8%87%AA%E5%B7%B1%23) `180.4K 🔥` `NEW`
1. [杨幂新剧老年妆 (Yang Mi’s old age makeup in new drama)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%96%B0%E5%89%A7%E8%80%81%E5%B9%B4%E5%A6%86%23) `180.3K 🔥` `NEW`
1. [雀骨直播](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E7%9B%B4%E6%92%AD%23) `173.7K 🔥` `NEW`
1. [小区业主群迎来了强力话事人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E4%B8%9A%E4%B8%BB%E7%BE%A4%E8%BF%8E%E6%9D%A5%E4%BA%86%E5%BC%BA%E5%8A%9B%E8%AF%9D%E4%BA%8B%E4%BA%BA%23) `163.2K 🔥` `NEW`
1. [西班牙队夺冠奖金曝光](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%9F%E5%A4%BA%E5%86%A0%E5%A5%96%E9%87%91%E6%9B%9D%E5%85%89%23) `1.1M 🔥` `+232%`
1. [AI短剧以假乱真了](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E4%BB%A5%E5%81%87%E4%B9%B1%E7%9C%9F%E4%BA%86%23) `425.2K 🔥` `+22%`
1. [机智张承认整容](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E6%99%BA%E5%BC%A0%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%23) `251.1K 🔥` `+32%`
1. [身份证照片最接近别人看到的自己](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `822.6K 🔥`
1. [现在谈恋爱也是赶上好时候了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%B0%88%E6%81%8B%E7%88%B1%E4%B9%9F%E6%98%AF%E8%B5%B6%E4%B8%8A%E5%A5%BD%E6%97%B6%E5%80%99%E4%BA%86%23) `822.4K 🔥`
1. [时代少年团 青岛](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%9D%92%E5%B2%9B%23) `360.5K 🔥`
1. [原来入伏才是祛湿黄金期](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%85%A5%E4%BC%8F%E6%89%8D%E6%98%AF%E7%A5%9B%E6%B9%BF%E9%BB%84%E9%87%91%E6%9C%9F%23) `180.5K 🔥`
1. [逐玉一念演唱会官宣 (Zhuyu Yi Nian concert official announcement)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%B8%80%E5%BF%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `492.7K 🔥` `-76%`
1. [实习工资居然能到一万 (The internship salary can actually reach 10,000)](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E5%B7%A5%E8%B5%84%E5%B1%85%E7%84%B6%E8%83%BD%E5%88%B0%E4%B8%80%E4%B8%87%23) `420.5K 🔥` `-56%`
1. [贾浅浅西北大学辞职](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E8%A5%BF%E5%8C%97%E5%A4%A7%E5%AD%A6%E8%BE%9E%E8%81%8C%23) `310.6K 🔥` `-58%`
1. [国家网络身份认证全面铺开](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BD%91%E7%BB%9C%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81%E5%85%A8%E9%9D%A2%E9%93%BA%E5%BC%80%23) `302.7K 🔥` `-68%`
1. [TF家族运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `265.0K 🔥` `-63%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `256.0K 🔥` `-59%`
1. [世界杯决赛规则调整](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E8%A7%84%E5%88%99%E8%B0%83%E6%95%B4%23) `251.7K 🔥` `-55%`
1. [贾浅浅硕士学位被撤销 (Jia Qianqian’s master’s degree revoked)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E7%A1%95%E5%A3%AB%E5%AD%A6%E4%BD%8D%E8%A2%AB%E6%92%A4%E9%94%80%23) `189.0K 🔥` `-54%`
1. [王俊凯二开关掉视野不佳的区域 (Wang Junkai's second switch removes areas with poor visibility)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BA%8C%E5%BC%80%E5%85%B3%E6%8E%89%E8%A7%86%E9%87%8E%E4%B8%8D%E4%BD%B3%E7%9A%84%E5%8C%BA%E5%9F%9F%23) `181.3K 🔥` `-59%`
1. [小伙家有200台小米设备不满手机售后](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%AE%B6%E6%9C%89200%E5%8F%B0%E5%B0%8F%E7%B1%B3%E8%AE%BE%E5%A4%87%E4%B8%8D%E6%BB%A1%E6%89%8B%E6%9C%BA%E5%94%AE%E5%90%8E%23) `180.4K 🔥` `-49%`

Updated at 2026-07-15 16:12:41

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
