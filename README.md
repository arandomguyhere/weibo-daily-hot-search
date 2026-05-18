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

1. [特朗普连发15张图分享中国记忆 (Trump posts 15 pictures to share memories of China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%9E%E5%8F%9115%E5%BC%A0%E5%9B%BE%E5%88%86%E4%BA%AB%E4%B8%AD%E5%9B%BD%E8%AE%B0%E5%BF%86%23) `1.5M 🔥` `NEW`
1. [5中国人在泰遭4警察1平民绑架勒索](https://s.weibo.com/weibo?q=%235%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%9C%A8%E6%B3%B0%E9%81%AD4%E8%AD%A6%E5%AF%9F1%E5%B9%B3%E6%B0%91%E7%BB%91%E6%9E%B6%E5%8B%92%E7%B4%A2%23) `904.1K 🔥` `NEW`
1. [2026中国网络文明大会](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E6%96%87%E6%98%8E%E5%A4%A7%E4%BC%9A%23) `702.5K 🔥` `NEW`
1. [看FIFA世界杯就喝可口可乐](https://s.weibo.com/weibo?q=%23%E7%9C%8BFIFA%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%B1%E5%96%9D%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%23) `668.8K 🔥` `NEW`
1. [98岁奶奶拿出了她当年的嫁妆](https://s.weibo.com/weibo?q=%2398%E5%B2%81%E5%A5%B6%E5%A5%B6%E6%8B%BF%E5%87%BA%E4%BA%86%E5%A5%B9%E5%BD%93%E5%B9%B4%E7%9A%84%E5%AB%81%E5%A6%86%23) `525.3K 🔥` `NEW`
1. [理发价格涨了 技术没涨](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%8F%91%E4%BB%B7%E6%A0%BC%E6%B6%A8%E4%BA%86%20%E6%8A%80%E6%9C%AF%E6%B2%A1%E6%B6%A8%23) `440.4K 🔥` `NEW`
1. [给阿嬷的情书 宣发模式](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%AE%A3%E5%8F%91%E6%A8%A1%E5%BC%8F%23) `439.1K 🔥` `NEW`
1. [恶意评分杨紫家业已违法](https://s.weibo.com/weibo?q=%23%E6%81%B6%E6%84%8F%E8%AF%84%E5%88%86%E6%9D%A8%E7%B4%AB%E5%AE%B6%E4%B8%9A%E5%B7%B2%E8%BF%9D%E6%B3%95%23) `422.8K 🔥` `NEW`
1. [穆里尼奥将回归执教皇马](https://s.weibo.com/weibo?q=%23%E7%A9%86%E9%87%8C%E5%B0%BC%E5%A5%A5%E5%B0%86%E5%9B%9E%E5%BD%92%E6%89%A7%E6%95%99%E7%9A%87%E9%A9%AC%23) `414.0K 🔥` `NEW`
1. [AI一天 地上一年](https://s.weibo.com/weibo?q=%23AI%E4%B8%80%E5%A4%A9%20%E5%9C%B0%E4%B8%8A%E4%B8%80%E5%B9%B4%23) `394.4K 🔥` `NEW`
1. [余秀华报警 (Yu Xiuhua calls the police)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E7%A7%80%E5%8D%8E%E6%8A%A5%E8%AD%A6%23) `392.1K 🔥` `NEW`
1. [姜乘澜被执行1119万](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E8%A2%AB%E6%89%A7%E8%A1%8C1119%E4%B8%87%23) `392.0K 🔥` `NEW`
1. [王濛瘦成鹿晗了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%98%A6%E6%88%90%E9%B9%BF%E6%99%97%E4%BA%86%23) `389.6K 🔥` `NEW`
1. [上海交大通报学生私吞竞赛奖金](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E9%80%9A%E6%8A%A5%E5%AD%A6%E7%94%9F%E7%A7%81%E5%90%9E%E7%AB%9E%E8%B5%9B%E5%A5%96%E9%87%91%23) `386.0K 🔥` `NEW`
1. [曝监狱来的妈妈撤档](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9B%91%E7%8B%B1%E6%9D%A5%E7%9A%84%E5%A6%88%E5%A6%88%E6%92%A4%E6%A1%A3%23) `382.8K 🔥` `NEW`
1. [一个退学博士掀起的学术打假风暴](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E9%80%80%E5%AD%A6%E5%8D%9A%E5%A3%AB%E6%8E%80%E8%B5%B7%E7%9A%84%E5%AD%A6%E6%9C%AF%E6%89%93%E5%81%87%E9%A3%8E%E6%9A%B4%23) `379.6K 🔥` `NEW`
1. [理想汽车跌超14%](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E8%B7%8C%E8%B6%8514%25%23) `375.6K 🔥` `NEW`
1. [IU边佑锡发文道歉](https://s.weibo.com/weibo?q=%23IU%E8%BE%B9%E4%BD%91%E9%94%A1%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `370.5K 🔥` `NEW`
1. [归鸾是逐玉2.0吗](https://s.weibo.com/weibo?q=%23%E5%BD%92%E9%B8%BE%E6%98%AF%E9%80%90%E7%8E%892.0%E5%90%97%23) `362.2K 🔥` `NEW`
1. [周冬雨 刘昊然](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%20%E5%88%98%E6%98%8A%E7%84%B6%23) `345.8K 🔥` `NEW`
1. [被爆米花冰淇淋硬控了 (Obsessed with popcorn ice cream)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%88%86%E7%B1%B3%E8%8A%B1%E5%86%B0%E6%B7%87%E6%B7%8B%E7%A1%AC%E6%8E%A7%E4%BA%86%23) `329.8K 🔥` `NEW`
1. [张元英 贝微微](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%20%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `314.4K 🔥` `NEW`
1. [跑男标题 李昀锐温柔回应孟子义](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%A0%87%E9%A2%98%20%E6%9D%8E%E6%98%80%E9%94%90%E6%B8%A9%E6%9F%94%E5%9B%9E%E5%BA%94%E5%AD%9F%E5%AD%90%E4%B9%89%23) `299.1K 🔥` `NEW`
1. [100颗拼豆的量](https://s.weibo.com/weibo?q=%23100%E9%A2%97%E6%8B%BC%E8%B1%86%E7%9A%84%E9%87%8F%23) `285.1K 🔥` `NEW`
1. [难怪杨幂爸妈小时候舍不得打她](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E6%9D%A8%E5%B9%82%E7%88%B8%E5%A6%88%E5%B0%8F%E6%97%B6%E5%80%99%E8%88%8D%E4%B8%8D%E5%BE%97%E6%89%93%E5%A5%B9%23) `279.1K 🔥` `NEW`
1. [麦琳从140斤瘦到90多斤](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E4%BB%8E140%E6%96%A4%E7%98%A6%E5%88%B090%E5%A4%9A%E6%96%A4%23) `255.1K 🔥` `NEW`
1. [洁丽雅已注册毛巾二叔商标](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E5%B7%B2%E6%B3%A8%E5%86%8C%E6%AF%9B%E5%B7%BE%E4%BA%8C%E5%8F%94%E5%95%86%E6%A0%87%23) `249.6K 🔥` `NEW`
1. [iPhone18Pro系列手机壳曝光](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%B3%BB%E5%88%97%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%9B%9D%E5%85%89%23) `248.3K 🔥` `NEW`
1. [明日方舟 怪猎](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%20%E6%80%AA%E7%8C%8E%23) `239.3K 🔥` `NEW`
1. [家业开播云合](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%BC%80%E6%92%AD%E4%BA%91%E5%90%88%23) `215.9K 🔥` `NEW`
1. [ITZY回归 (ITZY returns)](https://s.weibo.com/weibo?q=%23ITZY%E5%9B%9E%E5%BD%92%23) `201.4K 🔥` `NEW`
1. [女孩被胁迫卖淫主犯15岁非免罪金牌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%A2%AB%E8%83%81%E8%BF%AB%E5%8D%96%E6%B7%AB%E4%B8%BB%E7%8A%AF15%E5%B2%81%E9%9D%9E%E5%85%8D%E7%BD%AA%E9%87%91%E7%89%8C%23) `198.7K 🔥` `NEW`
1. [田曦薇王安宇好像在拍校园剧](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%8E%8B%E5%AE%89%E5%AE%87%E5%A5%BD%E5%83%8F%E5%9C%A8%E6%8B%8D%E6%A0%A1%E5%9B%AD%E5%89%A7%23) `195.0K 🔥` `NEW`
1. [女子称列车餐车被占满仅她一人消费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%88%97%E8%BD%A6%E9%A4%90%E8%BD%A6%E8%A2%AB%E5%8D%A0%E6%BB%A1%E4%BB%85%E5%A5%B9%E4%B8%80%E4%BA%BA%E6%B6%88%E8%B4%B9%23) `165.8K 🔥` `NEW`
1. [最有白玉兰奖潜质电视剧](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%9C%89%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%E6%BD%9C%E8%B4%A8%E7%94%B5%E8%A7%86%E5%89%A7%23) `147.8K 🔥` `NEW`
1. [外交部介绍普京访华安排](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E4%BB%8B%E7%BB%8D%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E5%AE%89%E6%8E%92%23) `147.4K 🔥` `NEW`
1. [清华大学3名博士被退学](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A63%E5%90%8D%E5%8D%9A%E5%A3%AB%E8%A2%AB%E9%80%80%E5%AD%A6%23) `143.7K 🔥` `NEW`
1. [孟子义李昀锐跑男互动](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E8%B7%91%E7%94%B7%E4%BA%92%E5%8A%A8%23) `134.5K 🔥` `NEW`
1. [雷军谈小米YU7GT设计](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%B0%88%E5%B0%8F%E7%B1%B3YU7GT%E8%AE%BE%E8%AE%A1%23) `131.5K 🔥` `NEW`
1. [麦琳瘦成唐嫣了 (Mai Lin lost weight and looked like Tang Yan)](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%98%A6%E6%88%90%E5%94%90%E5%AB%A3%E4%BA%86%23) `381.3K 🔥`
1. [洁丽雅](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%23) `346.9K 🔥`
1. [维嘉回应衣服被马丁买了 (Vega responded that the clothes were bought by Martin)](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E5%9B%9E%E5%BA%94%E8%A1%A3%E6%9C%8D%E8%A2%AB%E9%A9%AC%E4%B8%81%E4%B9%B0%E4%BA%86%23) `239.2K 🔥`
1. [张艺兴君佩全球首位品牌代言人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E5%90%9B%E4%BD%A9%E5%85%A8%E7%90%83%E9%A6%96%E4%BD%8D%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `424.4K 🔥` `-45%`
1. [水果含糖量刺客](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9E%9C%E5%90%AB%E7%B3%96%E9%87%8F%E5%88%BA%E5%AE%A2%23) `265.0K 🔥` `-24%`
1. [LCK公布亚运会人选](https://s.weibo.com/weibo?q=%23LCK%E5%85%AC%E5%B8%83%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%BA%BA%E9%80%89%23) `236.7K 🔥` `-32%`
1. [金价银价大跌原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `175.0K 🔥` `-57%`
1. [给阿嬷的情书要是个烂编剧](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%A6%81%E6%98%AF%E4%B8%AA%E7%83%82%E7%BC%96%E5%89%A7%23) `169.3K 🔥` `-74%`
1. [上了很久的班之后才明白的道理](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%86%E5%BE%88%E4%B9%85%E7%9A%84%E7%8F%AD%E4%B9%8B%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%9A%84%E9%81%93%E7%90%86%23) `165.5K 🔥` `-76%`
1. [孙杨回应妈宝男标签](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%9B%9E%E5%BA%94%E5%A6%88%E5%AE%9D%E7%94%B7%E6%A0%87%E7%AD%BE%23) `158.1K 🔥` `-63%`
1. [广西柳州地震已致2人死亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E5%B7%B2%E8%87%B42%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `141.3K 🔥` `-83%`
1. [易立竞把孙杨问破防了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E6%8A%8A%E5%AD%99%E6%9D%A8%E9%97%AE%E7%A0%B4%E9%98%B2%E4%BA%86%23) `140.6K 🔥` `-65%`
1. [微信读书skill (WeChat reading skill)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6skill%23) `128.9K 🔥` `-73%`

Updated at 2026-05-18 17:54:23

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
