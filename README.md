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

1. [樊振东vs大勒布伦 (Fan Zhendong vs Le Brun)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `2.4M 🔥` `NEW`
1. [张雪机车夺得5冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%BE%975%E5%86%A0%23) `1.0M 🔥` `NEW`
1. [以德润网](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%BE%B7%E6%B6%A6%E7%BD%91%23) `814.5K 🔥` `NEW`
1. [一人之下 纸月风华系列首发](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E4%B9%8B%E4%B8%8B%20%E7%BA%B8%E6%9C%88%E9%A3%8E%E5%8D%8E%E7%B3%BB%E5%88%97%E9%A6%96%E5%8F%91%23) `784.7K 🔥` `NEW`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `464.7K 🔥` `NEW`
1. [小S发文晒全家福](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%8F%91%E6%96%87%E6%99%92%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `392.2K 🔥` `NEW`
1. [德比斯说用张雪机车获得的成果疯狂](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E6%AF%94%E6%96%AF%E8%AF%B4%E7%94%A8%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%8E%B7%E5%BE%97%E7%9A%84%E6%88%90%E6%9E%9C%E7%96%AF%E7%8B%82%23) `333.5K 🔥` `NEW`
1. [摆拍盲人女孩非先天失明](https://s.weibo.com/weibo?q=%23%E6%91%86%E6%8B%8D%E7%9B%B2%E4%BA%BA%E5%A5%B3%E5%AD%A9%E9%9D%9E%E5%85%88%E5%A4%A9%E5%A4%B1%E6%98%8E%23) `333.1K 🔥` `NEW`
1. [挑杯决赛嘉宾天团已集结](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%98%89%E5%AE%BE%E5%A4%A9%E5%9B%A2%E5%B7%B2%E9%9B%86%E7%BB%93%23) `332.8K 🔥` `NEW`
1. [泰兰尼斯被曝加盟利润可达70%](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%85%B0%E5%B0%BC%E6%96%AF%E8%A2%AB%E6%9B%9D%E5%8A%A0%E7%9B%9F%E5%88%A9%E6%B6%A6%E5%8F%AF%E8%BE%BE70%25%23) `332.2K 🔥` `NEW`
1. [真维斯时团大屏可以给到夯 (The large screen of JeansWest Time Group can be given to a large extent)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%BB%B4%E6%96%AF%E6%97%B6%E5%9B%A2%E5%A4%A7%E5%B1%8F%E5%8F%AF%E4%BB%A5%E7%BB%99%E5%88%B0%E5%A4%AF%23) `331.9K 🔥` `NEW`
1. [家业广告](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%B9%BF%E5%91%8A%23) `330.8K 🔥` `NEW`
1. [八旬老人公交上闭眼休息实则已死亡](https://s.weibo.com/weibo?q=%23%E5%85%AB%E6%97%AC%E8%80%81%E4%BA%BA%E5%85%AC%E4%BA%A4%E4%B8%8A%E9%97%AD%E7%9C%BC%E4%BC%91%E6%81%AF%E5%AE%9E%E5%88%99%E5%B7%B2%E6%AD%BB%E4%BA%A1%23) `330.7K 🔥` `NEW`
1. [李一桐评论去世粉丝博文](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E8%AF%84%E8%AE%BA%E5%8E%BB%E4%B8%96%E7%B2%89%E4%B8%9D%E5%8D%9A%E6%96%87%23) `330.1K 🔥` `NEW`
1. [杨紫长文回应家业开播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%E5%AE%B6%E4%B8%9A%E5%BC%80%E6%92%AD%23) `326.5K 🔥` `NEW`
1. [国家防办派工作组赴广西](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E9%98%B2%E5%8A%9E%E6%B4%BE%E5%B7%A5%E4%BD%9C%E7%BB%84%E8%B5%B4%E5%B9%BF%E8%A5%BF%23) `325.0K 🔥` `NEW`
1. [被群嘲减不下来的颜如晶做到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%BE%A4%E5%98%B2%E5%87%8F%E4%B8%8D%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A2%9C%E5%A6%82%E6%99%B6%E5%81%9A%E5%88%B0%E4%BA%86%23) `324.8K 🔥` `NEW`
1. [对手说张雪机车直道太快了](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%89%8B%E8%AF%B4%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%9B%B4%E9%81%93%E5%A4%AA%E5%BF%AB%E4%BA%86%23) `304.0K 🔥` `NEW`
1. [狼队对战JDG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98JDG%23) `237.4K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `236.9K 🔥` `NEW`
1. [樊振东欧冠决赛对阵 (Fan Zhendong Champions League final matchup)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%E5%AF%B9%E9%98%B5%23) `216.2K 🔥` `NEW`
1. [韩国总理发出警告](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%80%BB%E7%90%86%E5%8F%91%E5%87%BA%E8%AD%A6%E5%91%8A%23) `175.5K 🔥` `NEW`
1. [电脑微信会惩罚每一个恋旧的人 (Computer WeChat will punish everyone who is nostalgic)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E5%BE%AE%E4%BF%A1%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E6%81%8B%E6%97%A7%E7%9A%84%E4%BA%BA%23) `772.0K 🔥` `+50%`
1. [中国有多少城市能撑起来七日游 (How many cities in China can support a seven-day tour?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%89%E5%A4%9A%E5%B0%91%E5%9F%8E%E5%B8%82%E8%83%BD%E6%92%91%E8%B5%B7%E6%9D%A5%E4%B8%83%E6%97%A5%E6%B8%B8%23) `686.2K 🔥` `+75%`
1. [白鹿李昀锐是李晨让牵的 (Bailu Li Yunrui was led by Li Chen)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%98%AF%E6%9D%8E%E6%99%A8%E8%AE%A9%E7%89%B5%E7%9A%84%23) `598.6K 🔥` `+97%`
1. [家业开播](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%BC%80%E6%92%AD%23) `485.6K 🔥` `+50%`
1. [金珉奎 夜店](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%8F%89%E5%A5%8E%20%E5%A4%9C%E5%BA%97%23) `450.4K 🔥` `+41%`
1. [起个日本名一听就是天津人](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E4%B8%AA%E6%97%A5%E6%9C%AC%E5%90%8D%E4%B8%80%E5%90%AC%E5%B0%B1%E6%98%AF%E5%A4%A9%E6%B4%A5%E4%BA%BA%23) `426.0K 🔥` `+25%`
1. [男子手机号被豆包乱标成卖猪电话](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%8B%E6%9C%BA%E5%8F%B7%E8%A2%AB%E8%B1%86%E5%8C%85%E4%B9%B1%E6%A0%87%E6%88%90%E5%8D%96%E7%8C%AA%E7%94%B5%E8%AF%9D%23) `329.2K 🔥` `+62%`
1. [家业](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `329.0K 🔥` `+60%`
1. [蒙娜丽莎股价6连板 (Mona Lisa’s share price is 6 consecutive boards)](https://s.weibo.com/weibo?q=%23%E8%92%99%E5%A8%9C%E4%B8%BD%E8%8E%8E%E8%82%A1%E4%BB%B76%E8%BF%9E%E6%9D%BF%23) `328.2K 🔥` `+22%`
1. [姜乘澜 这化妆技术还说啥了 (Jiang Chenglan, what else can I say about this makeup technique?)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%20%E8%BF%99%E5%8C%96%E5%A6%86%E6%8A%80%E6%9C%AF%E8%BF%98%E8%AF%B4%E5%95%A5%E4%BA%86%23) `327.4K 🔥` `+26%`
1. [林心如曾劝霍建华做医美被拒](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%83%E5%A6%82%E6%9B%BE%E5%8A%9D%E9%9C%8D%E5%BB%BA%E5%8D%8E%E5%81%9A%E5%8C%BB%E7%BE%8E%E8%A2%AB%E6%8B%92%23) `279.0K 🔥` `+34%`
1. [杨超越摆拍800张选9张](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%91%86%E6%8B%8D800%E5%BC%A0%E9%80%899%E5%BC%A0%23) `366.2K 🔥`
1. [中美阿三国联合打击电诈](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%98%BF%E4%B8%89%E5%9B%BD%E8%81%94%E5%90%88%E6%89%93%E5%87%BB%E7%94%B5%E8%AF%88%23) `334.0K 🔥`
1. [张真源头像 (Zhang Zhen's source portrait)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%A4%B4%E5%83%8F%23) `331.7K 🔥`
1. [金宣虎高允真情侣手机壳](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AE%A3%E8%99%8E%E9%AB%98%E5%85%81%E7%9C%9F%E6%83%85%E4%BE%A3%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `329.5K 🔥`
1. [张真源严浩翔初现印象排名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%88%9D%E7%8E%B0%E5%8D%B0%E8%B1%A1%E6%8E%92%E5%90%8D%23) `327.9K 🔥`
1. [女子大闹办证大厅迁出丈夫偷渡大案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%A7%E9%97%B9%E5%8A%9E%E8%AF%81%E5%A4%A7%E5%8E%85%E8%BF%81%E5%87%BA%E4%B8%88%E5%A4%AB%E5%81%B7%E6%B8%A1%E5%A4%A7%E6%A1%88%23) `327.1K 🔥`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `326.7K 🔥`
1. [乔欣包场家业](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E5%8C%85%E5%9C%BA%E5%AE%B6%E4%B8%9A%23) `324.8K 🔥`
1. [成年的大熊猫在野外几乎没有天敌](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E7%9A%84%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%9C%A8%E9%87%8E%E5%A4%96%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%9C%89%E5%A4%A9%E6%95%8C%23) `292.1K 🔥`
1. [杨紫否认中餐厅录制](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%90%A6%E8%AE%A4%E4%B8%AD%E9%A4%90%E5%8E%85%E5%BD%95%E5%88%B6%23) `254.4K 🔥`
1. [孟子义探班王楚然](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8E%A2%E7%8F%AD%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `236.0K 🔥`
1. [马嘉祺 肉垫攻击](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%20%E8%82%89%E5%9E%AB%E6%94%BB%E5%87%BB%23) `175.2K 🔥`
1. [王晓东被查 (Wang Xiaodong was investigated)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E4%B8%9C%E8%A2%AB%E6%9F%A5%23) `567.2K 🔥` `-50%`
1. [孕妇大出血准妈妈让出救命手术台 (Pregnant woman bleeding heavily gives way to life-saving operating table)](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E5%A4%A7%E5%87%BA%E8%A1%80%E5%87%86%E5%A6%88%E5%A6%88%E8%AE%A9%E5%87%BA%E6%95%91%E5%91%BD%E6%89%8B%E6%9C%AF%E5%8F%B0%23) `477.6K 🔥` `-41%`
1. [AI已经预测了世界杯](https://s.weibo.com/weibo?q=%23AI%E5%B7%B2%E7%BB%8F%E9%A2%84%E6%B5%8B%E4%BA%86%E4%B8%96%E7%95%8C%E6%9D%AF%23) `360.6K 🔥` `-37%`
1. [苹果华为小米大幅降价原因 (Reasons why Apple, Huawei and Xiaomi slashed prices)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E5%A4%A7%E5%B9%85%E9%99%8D%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `334.3K 🔥` `-49%`
1. [男子回应骑行遇2米眼镜王蛇](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E9%AA%91%E8%A1%8C%E9%81%872%E7%B1%B3%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87%23) `178.3K 🔥` `-44%`
1. [20万出头就能买四驱空悬中大型SUV](https://s.weibo.com/weibo?q=%2320%E4%B8%87%E5%87%BA%E5%A4%B4%E5%B0%B1%E8%83%BD%E4%B9%B0%E5%9B%9B%E9%A9%B1%E7%A9%BA%E6%82%AC%E4%B8%AD%E5%A4%A7%E5%9E%8BSUV%23) `175.3K 🔥` `-39%`

Updated at 2026-05-17 20:42:44

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
