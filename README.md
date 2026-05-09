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

1. [跑男收视率 浪姐没播 (Rating of Running Man: Sister Lang is not on the air)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%20%E6%B5%AA%E5%A7%90%E6%B2%A1%E6%92%AD%23) `1.2M 🔥` `NEW`
1. [一根烟头烧掉212万](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%B9%E7%83%9F%E5%A4%B4%E7%83%A7%E6%8E%89212%E4%B8%87%23) `730.7K 🔥` `NEW`
1. [太空快递跑出中国加速度](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%BF%AB%E9%80%92%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `668.8K 🔥` `NEW`
1. [跟蒋敦豪上淘宝闪购买花送妈妈](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E8%92%8B%E6%95%A6%E8%B1%AA%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E4%B9%B0%E8%8A%B1%E9%80%81%E5%A6%88%E5%A6%88%23) `665.8K 🔥` `NEW`
1. [何赛飞怒批姜贞羽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B5%9B%E9%A3%9E%E6%80%92%E6%89%B9%E5%A7%9C%E8%B4%9E%E7%BE%BD%23) `665.8K 🔥` `NEW`
1. [怪不得虫子总围着头顶飞](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%99%AB%E5%AD%90%E6%80%BB%E5%9B%B4%E7%9D%80%E5%A4%B4%E9%A1%B6%E9%A3%9E%23) `651.3K 🔥` `NEW`
1. [29岁未婚育女子宫颈癌离世](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E6%9C%AA%E5%A9%9A%E8%82%B2%E5%A5%B3%E5%AD%90%E5%AE%AB%E9%A2%88%E7%99%8C%E7%A6%BB%E4%B8%96%23) `624.2K 🔥` `NEW`
1. [谁说生完娃就不痛经](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AF%B4%E7%94%9F%E5%AE%8C%E5%A8%83%E5%B0%B1%E4%B8%8D%E7%97%9B%E7%BB%8F%23) `551.0K 🔥` `NEW`
1. [国际足联急了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%80%A5%E4%BA%86%23) `547.1K 🔥` `NEW`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `532.6K 🔥` `NEW`
1. [越来越理解什么叫事缓则圆 (I understand more and more what it means to slow things down and make things right)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%90%86%E8%A7%A3%E4%BB%80%E4%B9%88%E5%8F%AB%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%23) `383.1K 🔥` `NEW`
1. [广东男篮绝杀](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AE%E7%BB%9D%E6%9D%80%23) `291.0K 🔥` `NEW`
1. [陈赫 谁能欺负李晨](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%20%E8%B0%81%E8%83%BD%E6%AC%BA%E8%B4%9F%E6%9D%8E%E6%99%A8%23) `287.5K 🔥` `NEW`
1. [蔡文静直播哭着唱歌](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%9B%B4%E6%92%AD%E5%93%AD%E7%9D%80%E5%94%B1%E6%AD%8C%23) `284.2K 🔥` `NEW`
1. [香港富豪孙女被绑架案细节披露](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%AF%8C%E8%B1%AA%E5%AD%99%E5%A5%B3%E8%A2%AB%E7%BB%91%E6%9E%B6%E6%A1%88%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `274.1K 🔥` `NEW`
1. [关晓彤终于遇到了有身高差的男主](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%BB%88%E4%BA%8E%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%89%E8%BA%AB%E9%AB%98%E5%B7%AE%E7%9A%84%E7%94%B7%E4%B8%BB%23) `266.9K 🔥` `NEW`
1. [金高银造型师的ins我笑不行了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%E9%80%A0%E5%9E%8B%E5%B8%88%E7%9A%84ins%E6%88%91%E7%AC%91%E4%B8%8D%E8%A1%8C%E4%BA%86%23) `266.5K 🔥` `NEW`
1. [郑钦文vs奥斯塔彭科](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%A5%A5%E6%96%AF%E5%A1%94%E5%BD%AD%E7%A7%91%23) `260.5K 🔥` `NEW`
1. [浪7三公是浪姐史上浓墨重彩的一笔](https://s.weibo.com/weibo?q=%23%E6%B5%AA7%E4%B8%89%E5%85%AC%E6%98%AF%E6%B5%AA%E5%A7%90%E5%8F%B2%E4%B8%8A%E6%B5%93%E5%A2%A8%E9%87%8D%E5%BD%A9%E7%9A%84%E4%B8%80%E7%AC%94%23) `259.7K 🔥` `NEW`
1. [美国女子做特殊癖好服务致对方身亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%81%9A%E7%89%B9%E6%AE%8A%E7%99%96%E5%A5%BD%E6%9C%8D%E5%8A%A1%E8%87%B4%E5%AF%B9%E6%96%B9%E8%BA%AB%E4%BA%A1%23) `241.1K 🔥` `NEW`
1. [夸克TV崩了 (Quark TV collapsed)](https://s.weibo.com/weibo?q=%23%E5%A4%B8%E5%85%8BTV%E5%B4%A9%E4%BA%86%23) `240.5K 🔥` `NEW`
1. [菲方滋扰中国科考船画面公开](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E6%BB%8B%E6%89%B0%E4%B8%AD%E5%9B%BD%E7%A7%91%E8%80%83%E8%88%B9%E7%94%BB%E9%9D%A2%E5%85%AC%E5%BC%80%23) `238.9K 🔥` `NEW`
1. [森林北否认与汪峰分手](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E5%90%A6%E8%AE%A4%E4%B8%8E%E6%B1%AA%E5%B3%B0%E5%88%86%E6%89%8B%23) `237.5K 🔥` `NEW`
1. [疑似加到了孙怡本人的QQ](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%8A%A0%E5%88%B0%E4%BA%86%E5%AD%99%E6%80%A1%E6%9C%AC%E4%BA%BA%E7%9A%84QQ%23) `236.1K 🔥` `NEW`
1. [显微镜下的辣条](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E8%BE%A3%E6%9D%A1%23) `234.5K 🔥` `NEW`
1. [陈翔六点半吴妈因病去世](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%E5%85%AD%E7%82%B9%E5%8D%8A%E5%90%B4%E5%A6%88%E5%9B%A0%E7%97%85%E5%8E%BB%E4%B8%96%23) `233.7K 🔥` `NEW`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `232.0K 🔥` `NEW`
1. [孙颖莎逗笑邱贻可马琳](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%97%E7%AC%91%E9%82%B1%E8%B4%BB%E5%8F%AF%E9%A9%AC%E7%90%B3%23) `231.3K 🔥` `NEW`
1. [首尔偶遇田曦薇](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E5%81%B6%E9%81%87%E7%94%B0%E6%9B%A6%E8%96%87%23) `230.1K 🔥` `NEW`
1. [尼坤发福](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E5%8F%91%E7%A6%8F%23) `228.7K 🔥` `NEW`
1. [俄罗斯红场阅兵全场高呼乌拉 (Russia's Red Square military parade, everyone chants "Ula")](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%BA%A2%E5%9C%BA%E9%98%85%E5%85%B5%E5%85%A8%E5%9C%BA%E9%AB%98%E5%91%BC%E4%B9%8C%E6%8B%89%23) `221.3K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `217.6K 🔥` `NEW`
1. [森林北配文家里的草都绿了吗](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E9%85%8D%E6%96%87%E5%AE%B6%E9%87%8C%E7%9A%84%E8%8D%89%E9%83%BD%E7%BB%BF%E4%BA%86%E5%90%97%23) `214.5K 🔥` `NEW`
1. [安倍晋三遗孀陪赖清德跪日本人](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%80%8D%E6%99%8B%E4%B8%89%E9%81%97%E5%AD%80%E9%99%AA%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `202.1K 🔥` `NEW`
1. [周深五月天合唱](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%BA%94%E6%9C%88%E5%A4%A9%E5%90%88%E5%94%B1%23) `201.3K 🔥` `NEW`
1. [浪姐48来了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%9048%E6%9D%A5%E4%BA%86%23) `198.0K 🔥` `NEW`
1. [女儿的100个橡皮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%9A%84100%E4%B8%AA%E6%A9%A1%E7%9A%AE%23) `196.3K 🔥` `NEW`
1. [陈奕恒 下班](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%20%E4%B8%8B%E7%8F%AD%23) `195.3K 🔥` `NEW`
1. [给阿嬷的情书票房破亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `187.3K 🔥` `NEW`
1. [女子遭8年爱人背叛哭到呼吸碱中毒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD8%E5%B9%B4%E7%88%B1%E4%BA%BA%E8%83%8C%E5%8F%9B%E5%93%AD%E5%88%B0%E5%91%BC%E5%90%B8%E7%A2%B1%E4%B8%AD%E6%AF%92%23) `176.1K 🔥` `NEW`
1. [尼坤演唱会状态 (Nichkhun concert status)](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `175.8K 🔥` `NEW`
1. [减肥咖啡查出违禁成分案重审二审](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E5%92%96%E5%95%A1%E6%9F%A5%E5%87%BA%E8%BF%9D%E7%A6%81%E6%88%90%E5%88%86%E6%A1%88%E9%87%8D%E5%AE%A1%E4%BA%8C%E5%AE%A1%23) `175.5K 🔥` `NEW`
1. [陈奕恒回复王橹杰](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%9B%9E%E5%A4%8D%E7%8E%8B%E6%A9%B9%E6%9D%B0%23) `175.5K 🔥` `NEW`
1. [田曦薇后援会发了左航安利](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%90%8E%E6%8F%B4%E4%BC%9A%E5%8F%91%E4%BA%86%E5%B7%A6%E8%88%AA%E5%AE%89%E5%88%A9%23) `175.4K 🔥` `NEW`
1. [吴宜泽4比5希金斯](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD4%E6%AF%945%E5%B8%8C%E9%87%91%E6%96%AF%23) `166.6K 🔥` `NEW`
1. [煎饼夏天 enemy](https://s.weibo.com/weibo?q=%23%E7%85%8E%E9%A5%BC%E5%A4%8F%E5%A4%A9%20enemy%23) `164.9K 🔥` `NEW`
1. [周迅减肥1顿饭吃1小时](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%BF%85%E5%87%8F%E8%82%A51%E9%A1%BF%E9%A5%AD%E5%90%831%E5%B0%8F%E6%97%B6%23) `164.0K 🔥` `NEW`
1. [交管队长回应被举报与女性举止亲密](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E7%AE%A1%E9%98%9F%E9%95%BF%E5%9B%9E%E5%BA%94%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%B8%8E%E5%A5%B3%E6%80%A7%E4%B8%BE%E6%AD%A2%E4%BA%B2%E5%AF%86%23) `124.2K 🔥` `NEW`
1. [赵丽颖好超前的女本位思维](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%A5%BD%E8%B6%85%E5%89%8D%E7%9A%84%E5%A5%B3%E6%9C%AC%E4%BD%8D%E6%80%9D%E7%BB%B4%23) `123.8K 🔥` `NEW`
1. [国乒女团晋级决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `119.0K 🔥` `NEW`
1. [央视网更正锁电相关报道 (CCTV corrects reports related to power lockout)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E6%9B%B4%E6%AD%A3%E9%94%81%E7%94%B5%E7%9B%B8%E5%85%B3%E6%8A%A5%E9%81%93%23) `117.0K 🔥` `NEW`
1. [地产股迎来涨停潮](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E4%BA%A7%E8%82%A1%E8%BF%8E%E6%9D%A5%E6%B6%A8%E5%81%9C%E6%BD%AE%23) `116.5K 🔥` `NEW`

Updated at 2026-05-10 00:33:14

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
