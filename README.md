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

1. [红果短剧千万别下载](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%8D%83%E4%B8%87%E5%88%AB%E4%B8%8B%E8%BD%BD%23) `2.0M 🔥` `NEW`
1. [吃播网红干饭莹去世](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%92%AD%E7%BD%91%E7%BA%A2%E5%B9%B2%E9%A5%AD%E8%8E%B9%E5%8E%BB%E4%B8%96%23) `511.8K 🔥` `NEW`
1. [永不褪色的红飘带](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E4%B8%8D%E8%A4%AA%E8%89%B2%E7%9A%84%E7%BA%A2%E9%A3%98%E5%B8%A6%23) `326.4K 🔥` `NEW`
1. [红魔12Pro电竞之光](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%AD%9412Pro%E7%94%B5%E7%AB%9E%E4%B9%8B%E5%85%89%23) `318.6K 🔥` `NEW`
1. [老人凌晨下地干活被气枪击中身亡](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1%23) `229.9K 🔥` `NEW`
1. [79岁老干妈陶华碧用AI一年赚54亿](https://s.weibo.com/weibo?q=%2379%E5%B2%81%E8%80%81%E5%B9%B2%E5%A6%88%E9%99%B6%E5%8D%8E%E7%A2%A7%E7%94%A8AI%E4%B8%80%E5%B9%B4%E8%B5%9A54%E4%BA%BF%23) `178.7K 🔥` `NEW`
1. [金晨说王楚然在现发撒得开](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E8%AF%B4%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9C%A8%E7%8E%B0%E5%8F%91%E6%92%92%E5%BE%97%E5%BC%80%23) `177.4K 🔥` `NEW`
1. [厚本回应特殊面容](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%E5%9B%9E%E5%BA%94%E7%89%B9%E6%AE%8A%E9%9D%A2%E5%AE%B9%23) `176.7K 🔥` `NEW`
1. [警方已确认与未成年金赛纶交往男星](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%A1%AE%E8%AE%A4%E4%B8%8E%E6%9C%AA%E6%88%90%E5%B9%B4%E9%87%91%E8%B5%9B%E7%BA%B6%E4%BA%A4%E5%BE%80%E7%94%B7%E6%98%9F%23) `175.9K 🔥` `NEW`
1. [女子高铁上和男友开免提打1小时电话](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E4%B8%8A%E5%92%8C%E7%94%B7%E5%8F%8B%E5%BC%80%E5%85%8D%E6%8F%90%E6%89%931%E5%B0%8F%E6%97%B6%E7%94%B5%E8%AF%9D%23) `172.0K 🔥` `NEW`
1. [百果园2年亏掉了7个亿](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%9E%9C%E5%9B%AD2%E5%B9%B4%E4%BA%8F%E6%8E%89%E4%BA%867%E4%B8%AA%E4%BA%BF%23) `151.2K 🔥` `NEW`
1. [王星被胁迫借下的网贷该不该还](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E8%83%81%E8%BF%AB%E5%80%9F%E4%B8%8B%E7%9A%84%E7%BD%91%E8%B4%B7%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%BF%98%23) `151.0K 🔥` `NEW`
1. [真实姓名被9年未联系友人用作昵称](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E8%A2%AB9%E5%B9%B4%E6%9C%AA%E8%81%94%E7%B3%BB%E5%8F%8B%E4%BA%BA%E7%94%A8%E4%BD%9C%E6%98%B5%E7%A7%B0%23) `150.4K 🔥` `NEW`
1. [送1.9元汽水患者连续投诉医生2年](https://s.weibo.com/weibo?q=%23%E9%80%811.9%E5%85%83%E6%B1%BD%E6%B0%B4%E6%82%A3%E8%80%85%E8%BF%9E%E7%BB%AD%E6%8A%95%E8%AF%89%E5%8C%BB%E7%94%9F2%E5%B9%B4%23) `132.1K 🔥` `NEW`
1. [第一个抵制粉丝云包场的艺人](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8A%B5%E5%88%B6%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA%E7%9A%84%E8%89%BA%E4%BA%BA%23) `130.7K 🔥` `NEW`
1. [小酒窝被医生夸比着尺子长的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%A4%B8%E6%AF%94%E7%9D%80%E5%B0%BA%E5%AD%90%E9%95%BF%E7%9A%84%23) `125.0K 🔥` `NEW`
1. [33岁销冠确诊胃癌晚期突然被辞退](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E9%94%80%E5%86%A0%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%AA%81%E7%84%B6%E8%A2%AB%E8%BE%9E%E9%80%80%23) `117.9K 🔥` `NEW`
1. [手机不好卖了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `104.8K 🔥` `NEW`
1. [家有儿女早就教了我们正确的爱情观](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E6%97%A9%E5%B0%B1%E6%95%99%E4%BA%86%E6%88%91%E4%BB%AC%E6%AD%A3%E7%A1%AE%E7%9A%84%E7%88%B1%E6%83%85%E8%A7%82%23) `95.9K 🔥` `NEW`
1. [10岁女童被男老师摸脸家长索赔20万](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E7%94%B7%E8%80%81%E5%B8%88%E6%91%B8%E8%84%B8%E5%AE%B6%E9%95%BF%E7%B4%A2%E8%B5%9420%E4%B8%87%23) `94.8K 🔥` `NEW`
1. [苹果发布会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `90.5K 🔥` `NEW`
1. [中国互联网进入字节时间](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E8%BF%9B%E5%85%A5%E5%AD%97%E8%8A%82%E6%97%B6%E9%97%B4%23) `87.9K 🔥` `NEW`
1. [领导把我的房间当成他自己家了](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%AF%BC%E6%8A%8A%E6%88%91%E7%9A%84%E6%88%BF%E9%97%B4%E5%BD%93%E6%88%90%E4%BB%96%E8%87%AA%E5%B7%B1%E5%AE%B6%E4%BA%86%23) `85.2K 🔥` `NEW`
1. [买黄金的人变了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E9%BB%84%E9%87%91%E7%9A%84%E4%BA%BA%E5%8F%98%E4%BA%86%23) `84.0K 🔥` `NEW`
1. [金秀贤金赛纶反转再反转](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E9%87%91%E8%B5%9B%E7%BA%B6%E5%8F%8D%E8%BD%AC%E5%86%8D%E5%8F%8D%E8%BD%AC%23) `81.0K 🔥` `NEW`
1. [李善宝 咩咩](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%96%84%E5%AE%9D%20%E5%92%A9%E5%92%A9%23) `77.6K 🔥` `NEW`
1. [黄奇帆接受审查调查](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A5%87%E5%B8%86%E6%8E%A5%E5%8F%97%E5%AE%A1%E6%9F%A5%E8%B0%83%E6%9F%A5%23) `74.4K 🔥` `NEW`
1. [NewJeans和A2O审美对比](https://s.weibo.com/weibo?q=%23NewJeans%E5%92%8CA2O%E5%AE%A1%E7%BE%8E%E5%AF%B9%E6%AF%94%23) `70.5K 🔥` `NEW`
1. [久坐久卧或致血管悄悄长血块](https://s.weibo.com/weibo?q=%23%E4%B9%85%E5%9D%90%E4%B9%85%E5%8D%A7%E6%88%96%E8%87%B4%E8%A1%80%E7%AE%A1%E6%82%84%E6%82%84%E9%95%BF%E8%A1%80%E5%9D%97%23) `70.5K 🔥` `NEW`
1. [原来胃也是需要锻炼的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%83%83%E4%B9%9F%E6%98%AF%E9%9C%80%E8%A6%81%E9%94%BB%E7%82%BC%E7%9A%84%23) `70.4K 🔥` `NEW`
1. [李善宝咩咩这是在调情吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%96%84%E5%AE%9D%E5%92%A9%E5%92%A9%E8%BF%99%E6%98%AF%E5%9C%A8%E8%B0%83%E6%83%85%E5%90%97%23) `70.3K 🔥` `NEW`
1. [郑钦文教练用中文提问网友](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%95%99%E7%BB%83%E7%94%A8%E4%B8%AD%E6%96%87%E6%8F%90%E9%97%AE%E7%BD%91%E5%8F%8B%23) `70.1K 🔥` `NEW`
1. [超过30岁未婚不代表有问题](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%BF%8730%E5%B2%81%E6%9C%AA%E5%A9%9A%E4%B8%8D%E4%BB%A3%E8%A1%A8%E6%9C%89%E9%97%AE%E9%A2%98%23) `70.0K 🔥` `NEW`
1. [郑钦文讲述摘掉父亲帽子的原因](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%AE%B2%E8%BF%B0%E6%91%98%E6%8E%89%E7%88%B6%E4%BA%B2%E5%B8%BD%E5%AD%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `70.0K 🔥` `NEW`
1. [郑钦文曾下跪恳求教练收徒](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%9B%BE%E4%B8%8B%E8%B7%AA%E6%81%B3%E6%B1%82%E6%95%99%E7%BB%83%E6%94%B6%E5%BE%92%23) `68.6K 🔥` `NEW`
1. [泰国 演唱会](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `67.3K 🔥` `NEW`
1. [向芷更是直接管向华强叫华强强强](https://s.weibo.com/weibo?q=%23%E5%90%91%E8%8A%B7%E6%9B%B4%E6%98%AF%E7%9B%B4%E6%8E%A5%E7%AE%A1%E5%90%91%E5%8D%8E%E5%BC%BA%E5%8F%AB%E5%8D%8E%E5%BC%BA%E5%BC%BA%E5%BC%BA%23) `66.8K 🔥` `NEW`
1. [打开了一本名为刻薄的书](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%BC%80%E4%BA%86%E4%B8%80%E6%9C%AC%E5%90%8D%E4%B8%BA%E5%88%BB%E8%96%84%E7%9A%84%E4%B9%A6%23) `65.7K 🔥` `NEW`
1. [哥哥死因不明直到有了弟弟才知道](https://s.weibo.com/weibo?q=%23%E5%93%A5%E5%93%A5%E6%AD%BB%E5%9B%A0%E4%B8%8D%E6%98%8E%E7%9B%B4%E5%88%B0%E6%9C%89%E4%BA%86%E5%BC%9F%E5%BC%9F%E6%89%8D%E7%9F%A5%E9%81%93%23) `63.6K 🔥` `NEW`
1. [BRO LGD](https://s.weibo.com/weibo?q=%23BRO%20LGD%23) `63.5K 🔥` `NEW`
1. [何洁明显是朝着蔡依林的路线打造的](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E6%98%8E%E6%98%BE%E6%98%AF%E6%9C%9D%E7%9D%80%E8%94%A1%E4%BE%9D%E6%9E%97%E7%9A%84%E8%B7%AF%E7%BA%BF%E6%89%93%E9%80%A0%E7%9A%84%23) `61.1K 🔥` `NEW`
1. [国考岗位向应届生倾斜](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%83%E5%B2%97%E4%BD%8D%E5%90%91%E5%BA%94%E5%B1%8A%E7%94%9F%E5%80%BE%E6%96%9C%23) `56.6K 🔥` `NEW`
1. [BRO战胜LGD](https://s.weibo.com/weibo?q=%23BRO%E6%88%98%E8%83%9CLGD%23) `55.7K 🔥` `NEW`
1. [杨蓉值得一个最佳女主](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E5%80%BC%E5%BE%97%E4%B8%80%E4%B8%AA%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `54.8K 🔥` `NEW`
1. [王腾承认从小米离职是低谷](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E6%89%BF%E8%AE%A4%E4%BB%8E%E5%B0%8F%E7%B1%B3%E7%A6%BB%E8%81%8C%E6%98%AF%E4%BD%8E%E8%B0%B7%23) `54.7K 🔥` `NEW`
1. [王者李小龙皮肤绝版](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%9D%8E%E5%B0%8F%E9%BE%99%E7%9A%AE%E8%82%A4%E7%BB%9D%E7%89%88%23) `54.5K 🔥` `NEW`
1. [虞书欣请粉丝吃阳光玫瑰](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%AF%B7%E7%B2%89%E4%B8%9D%E5%90%83%E9%98%B3%E5%85%89%E7%8E%AB%E7%91%B0%23) `52.6K 🔥` `NEW`
1. [穆祉丞直播秒售罄](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9B%B4%E6%92%AD%E7%A7%92%E5%94%AE%E7%BD%84%23) `52.1K 🔥` `NEW`
1. [网红李善宝宣布停更](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%9D%8E%E5%96%84%E5%AE%9D%E5%AE%A3%E5%B8%83%E5%81%9C%E6%9B%B4%23) `51.3K 🔥` `NEW`

Updated at 2026-10-14 01:56:14

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
