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

1. [看球上京东猜中冠军抽百万份免单 (Guess the winner on JD.com while watching football and draw a million copies for free)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%90%83%E4%B8%8A%E4%BA%AC%E4%B8%9C%E7%8C%9C%E4%B8%AD%E5%86%A0%E5%86%9B%E6%8A%BD%E7%99%BE%E4%B8%87%E4%BB%BD%E5%85%8D%E5%8D%95%23) `1.2M 🔥` `NEW`
1. [球场疼痛急救指南](https://s.weibo.com/weibo?q=%23%E7%90%83%E5%9C%BA%E7%96%BC%E7%97%9B%E6%80%A5%E6%95%91%E6%8C%87%E5%8D%97%23) `722.6K 🔥` `NEW`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `359.5K 🔥` `NEW`
1. [每月3000雇夫妻看管祖宅遭鸠占鹊巢](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E6%9C%883000%E9%9B%87%E5%A4%AB%E5%A6%BB%E7%9C%8B%E7%AE%A1%E7%A5%96%E5%AE%85%E9%81%AD%E9%B8%A0%E5%8D%A0%E9%B9%8A%E5%B7%A2%23) `244.9K 🔥` `NEW`
1. [白鹿把唯一的茉莉花给了小婉](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%8A%E5%94%AF%E4%B8%80%E7%9A%84%E8%8C%89%E8%8E%89%E8%8A%B1%E7%BB%99%E4%BA%86%E5%B0%8F%E5%A9%89%23) `219.1K 🔥` `NEW`
1. [王者荣耀亚运会名单公示](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%90%8D%E5%8D%95%E5%85%AC%E7%A4%BA%23) `219.0K 🔥` `NEW`
1. [南部档案一集有三十分钟的二人转](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E4%B8%80%E9%9B%86%E6%9C%89%E4%B8%89%E5%8D%81%E5%88%86%E9%92%9F%E7%9A%84%E4%BA%8C%E4%BA%BA%E8%BD%AC%23) `124.4K 🔥` `NEW`
1. [谢娜可以开演唱会但要有边界感](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8F%AF%E4%BB%A5%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BD%86%E8%A6%81%E6%9C%89%E8%BE%B9%E7%95%8C%E6%84%9F%23) `123.8K 🔥` `NEW`
1. [NBA主持人让泰勒斯威夫特滚出去](https://s.weibo.com/weibo?q=%23NBA%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%AE%A9%E6%B3%B0%E5%8B%92%E6%96%AF%E5%A8%81%E5%A4%AB%E7%89%B9%E6%BB%9A%E5%87%BA%E5%8E%BB%23) `123.7K 🔥` `NEW`
1. [金价连跌买一口价还是按克买](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%9E%E8%B7%8C%E4%B9%B0%E4%B8%80%E5%8F%A3%E4%BB%B7%E8%BF%98%E6%98%AF%E6%8C%89%E5%85%8B%E4%B9%B0%23) `87.9K 🔥` `NEW`
1. [妈妈说瑶一瑶舌头是草莓舌 (Mom said Yao Yiyao’s tongue is strawberry tongue)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%AF%B4%E7%91%B6%E4%B8%80%E7%91%B6%E8%88%8C%E5%A4%B4%E6%98%AF%E8%8D%89%E8%8E%93%E8%88%8C%23) `84.9K 🔥` `NEW`
1. [能考85分偏考84分最后老师给了83](https://s.weibo.com/weibo?q=%23%E8%83%BD%E8%80%8385%E5%88%86%E5%81%8F%E8%80%8384%E5%88%86%E6%9C%80%E5%90%8E%E8%80%81%E5%B8%88%E7%BB%99%E4%BA%8683%23) `84.7K 🔥` `NEW`
1. [医生回应女子产下400克巴掌大婴儿](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E4%BA%A7%E4%B8%8B400%E5%85%8B%E5%B7%B4%E6%8E%8C%E5%A4%A7%E5%A9%B4%E5%84%BF%23) `77.9K 🔥` `NEW`
1. [南非 打人 (south africa beating)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%20%E6%89%93%E4%BA%BA%23) `2.1M 🔥` `+200%`
1. [世界杯开幕式 吓我一跳](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%20%E5%90%93%E6%88%91%E4%B8%80%E8%B7%B3%23) `1.8M 🔥` `+103%`
1. [让文化遗产走进普通人生活](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E6%96%87%E5%8C%96%E9%81%97%E4%BA%A7%E8%B5%B0%E8%BF%9B%E6%99%AE%E9%80%9A%E4%BA%BA%E7%94%9F%E6%B4%BB%23) `1.4M 🔥` `+177%`
1. [中国队首发 labubu马宁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E9%A6%96%E5%8F%91%20labubu%E9%A9%AC%E5%AE%81%23) `1.2M 🔥` `+222%`
1. [墨西哥2比0南非](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A52%E6%AF%940%E5%8D%97%E9%9D%9E%23) `983.4K 🔥` `+312%`
1. [世界杯 红牌比进球多](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%20%E7%BA%A2%E7%89%8C%E6%AF%94%E8%BF%9B%E7%90%83%E5%A4%9A%23) `728.2K 🔥` `+58%`
1. [特朗普称取消打击伊朗行动](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%8F%96%E6%B6%88%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%8C%E5%8A%A8%23) `702.6K 🔥` `+263%`
1. [白鹿突然被叫本名的反应](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AA%81%E7%84%B6%E8%A2%AB%E5%8F%AB%E6%9C%AC%E5%90%8D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `438.5K 🔥` `+277%`
1. [世界杯开幕式 (world cup opening ceremony)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%23) `399.6K 🔥` `+157%`
1. [还得是夏奇拉 (It has to be Shakira)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E5%BE%97%E6%98%AF%E5%A4%8F%E5%A5%87%E6%8B%89%23) `357.3K 🔥` `+496%`
1. [世界杯揭幕战三张红牌](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%8F%AD%E5%B9%95%E6%88%98%E4%B8%89%E5%BC%A0%E7%BA%A2%E7%89%8C%23) `336.3K 🔥` `+255%`
1. [labubu都进世界杯了](https://s.weibo.com/weibo?q=%23labubu%E9%83%BD%E8%BF%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%86%23) `328.9K 🔥` `+214%`
1. [迪丽热巴曾正面回应隐婚传闻 (Dilireba once responded directly to rumors of hidden marriage)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9B%BE%E6%AD%A3%E9%9D%A2%E5%9B%9E%E5%BA%94%E9%9A%90%E5%A9%9A%E4%BC%A0%E9%97%BB%23) `325.2K 🔥` `+29%`
1. [夏奇拉不会老吗 (Will Shakira not age?)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A5%87%E6%8B%89%E4%B8%8D%E4%BC%9A%E8%80%81%E5%90%97%23) `234.7K 🔥` `+84%`
1. [美国五角大楼被封锁 (The Pentagon is blocked)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%E8%A2%AB%E5%B0%81%E9%94%81%23) `219.9K 🔥` `+109%`
1. [南非队两张红牌](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%E9%98%9F%E4%B8%A4%E5%BC%A0%E7%BA%A2%E7%89%8C%23) `219.5K 🔥` `+51%`
1. [AI短片效果看到起鸡皮疙瘩了](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E7%89%87%E6%95%88%E6%9E%9C%E7%9C%8B%E5%88%B0%E8%B5%B7%E9%B8%A1%E7%9A%AE%E7%96%99%E7%98%A9%E4%BA%86%23) `219.0K 🔥` `+442%`
1. [张元英身材就一个帽子厚度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%BA%AB%E6%9D%90%E5%B0%B1%E4%B8%80%E4%B8%AA%E5%B8%BD%E5%AD%90%E5%8E%9A%E5%BA%A6%23) `218.0K 🔥` `+46%`
1. [墨西哥进球](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E8%BF%9B%E7%90%83%23) `198.6K 🔥` `+122%`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `188.8K 🔥` `+91%`
1. [菲律宾国防部长华裔血统特别反华](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%9B%BD%E9%98%B2%E9%83%A8%E9%95%BF%E5%8D%8E%E8%A3%94%E8%A1%80%E7%BB%9F%E7%89%B9%E5%88%AB%E5%8F%8D%E5%8D%8E%23) `124.5K 🔥` `+188%`
1. [莫离热度](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%83%AD%E5%BA%A6%23) `124.0K 🔥` `+297%`
1. [樊振东回国了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%9B%BD%E4%BA%86%23) `123.2K 🔥` `+278%`
1. [熬夜看世界杯 (Stay up late to watch the World Cup)](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%23) `111.1K 🔥` `+56%`
1. [把话说清楚是一种能力](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%AF%9D%E8%AF%B4%E6%B8%85%E6%A5%9A%E6%98%AF%E4%B8%80%E7%A7%8D%E8%83%BD%E5%8A%9B%23) `104.2K 🔥` `+215%`
1. [对大房子祛魅了 (Disenchanted with the big house)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%A4%A7%E6%88%BF%E5%AD%90%E7%A5%9B%E9%AD%85%E4%BA%86%23) `92.2K 🔥` `+149%`
1. [于东来称员工其实不值这么多钱 (Yu Donglai said that employees are actually not worth so much money)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E7%A7%B0%E5%91%98%E5%B7%A5%E5%85%B6%E5%AE%9E%E4%B8%8D%E5%80%BC%E8%BF%99%E4%B9%88%E5%A4%9A%E9%92%B1%23) `88.1K 🔥` `+201%`
1. [男子借50万给朋友12年未催要](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%80%9F50%E4%B8%87%E7%BB%99%E6%9C%8B%E5%8F%8B12%E5%B9%B4%E6%9C%AA%E5%82%AC%E8%A6%81%23) `86.0K 🔥` `+27%`
1. [男子偷拍女同事在女厕被抓现行](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%90%8C%E4%BA%8B%E5%9C%A8%E5%A5%B3%E5%8E%95%E8%A2%AB%E6%8A%93%E7%8E%B0%E8%A1%8C%23) `84.5K 🔥` `+188%`
1. [金价跌了生意却没疯涨时好](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E4%BA%86%E7%94%9F%E6%84%8F%E5%8D%B4%E6%B2%A1%E7%96%AF%E6%B6%A8%E6%97%B6%E5%A5%BD%23) `82.9K 🔥` `+151%`
1. [伊能静秦昊不在一个图层](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%A7%A6%E6%98%8A%E4%B8%8D%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%9B%BE%E5%B1%82%23) `77.8K 🔥` `+96%`
1. [尚界Z7全网首拆](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E5%85%A8%E7%BD%91%E9%A6%96%E6%8B%86%23) `77.6K 🔥` `+153%`
1. [万妮达 歌手补位 (Wan Nida singer fills in)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%20%E6%AD%8C%E6%89%8B%E8%A1%A5%E4%BD%8D%23) `77.6K 🔥` `+152%`
1. [南非传球 丑陋](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%E4%BC%A0%E7%90%83%20%E4%B8%91%E9%99%8B%23) `202.5K 🔥`
1. [美加墨世界杯首球](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%90%83%23) `123.3K 🔥`
1. [墨西哥vs南非](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5vs%E5%8D%97%E9%9D%9E%23) `216.5K 🔥` `-32%`
1. [张杰谢娜做错了什么 (What did Zhang Jie and Xie Na do wrong?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E5%81%9A%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%23) `155.3K 🔥` `-37%`
1. [刘亦菲的原名是安风](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9A%84%E5%8E%9F%E5%90%8D%E6%98%AF%E5%AE%89%E9%A3%8E%23) `120.8K 🔥` `-28%`
1. [杨幂她是我多年的粉丝](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%A5%B9%E6%98%AF%E6%88%91%E5%A4%9A%E5%B9%B4%E7%9A%84%E7%B2%89%E4%B8%9D%23) `102.4K 🔥` `-38%`

Updated at 2026-06-12 07:12:09

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
