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

1. [无论谁夺冠蒙牛都举杯 (No matter who wins Mengniu, a toast)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%AE%BA%E8%B0%81%E5%A4%BA%E5%86%A0%E8%92%99%E7%89%9B%E9%83%BD%E4%B8%BE%E6%9D%AF%23) `1.0M 🔥` `NEW`
1. [九尾 无畏](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E6%97%A0%E7%95%8F%23) `1.0M 🔥` `NEW`
1. [马龙许昕回应男双冠军](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%9B%9E%E5%BA%94%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `794.5K 🔥` `NEW`
1. [妈妈辅导作业一巴掌撞掉孩子门牙](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%BE%85%E5%AF%BC%E4%BD%9C%E4%B8%9A%E4%B8%80%E5%B7%B4%E6%8E%8C%E6%92%9E%E6%8E%89%E5%AD%A9%E5%AD%90%E9%97%A8%E7%89%99%23) `347.1K 🔥` `NEW`
1. [王俊凯王源易烊千玺金发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%87%91%E5%8F%91%23) `347.0K 🔥` `NEW`
1. [无DNA物证仅凭口供判父亲无期合理吗](https://s.weibo.com/weibo?q=%23%E6%97%A0DNA%E7%89%A9%E8%AF%81%E4%BB%85%E5%87%AD%E5%8F%A3%E4%BE%9B%E5%88%A4%E7%88%B6%E4%BA%B2%E6%97%A0%E6%9C%9F%E5%90%88%E7%90%86%E5%90%97%23) `346.6K 🔥` `NEW`
1. [谁给代露娃做的妆造](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E4%BB%A3%E9%9C%B2%E5%A8%83%E5%81%9A%E7%9A%84%E5%A6%86%E9%80%A0%23) `346.3K 🔥` `NEW`
1. [阿根廷球迷刷爆6张信用卡买决赛票](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E5%88%B7%E7%88%866%E5%BC%A0%E4%BF%A1%E7%94%A8%E5%8D%A1%E4%B9%B0%E5%86%B3%E8%B5%9B%E7%A5%A8%23) `345.4K 🔥` `NEW`
1. [西班牙阿根廷预测](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A2%84%E6%B5%8B%23) `345.1K 🔥` `NEW`
1. [坦克300献给都市年轻人的脚办](https://s.weibo.com/weibo?q=%23%E5%9D%A6%E5%85%8B300%E7%8C%AE%E7%BB%99%E9%83%BD%E5%B8%82%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E8%84%9A%E5%8A%9E%23) `343.9K 🔥` `NEW`
1. [阿根廷众将决赛前发文 (Argentina's generals post before the final)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BC%97%E5%B0%86%E5%86%B3%E8%B5%9B%E5%89%8D%E5%8F%91%E6%96%87%23) `343.5K 🔥` `NEW`
1. [工作室给鹿晗衣服打码](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%BB%99%E9%B9%BF%E6%99%97%E8%A1%A3%E6%9C%8D%E6%89%93%E7%A0%81%23) `342.8K 🔥` `NEW`
1. [王源演唱会上座率](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `342.3K 🔥` `NEW`
1. [丁禹兮忙了一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%BF%99%E4%BA%86%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `328.8K 🔥` `NEW`
1. [纽约 军团病疫情](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%20%E5%86%9B%E5%9B%A2%E7%97%85%E7%96%AB%E6%83%85%23) `316.3K 🔥` `NEW`
1. [虞书欣被责怪一秒滑跪](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A2%AB%E8%B4%A3%E6%80%AA%E4%B8%80%E7%A7%92%E6%BB%91%E8%B7%AA%23) `312.9K 🔥` `NEW`
1. [张凌赫在爱奇艺直播展示情商](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9C%A8%E7%88%B1%E5%A5%87%E8%89%BA%E7%9B%B4%E6%92%AD%E5%B1%95%E7%A4%BA%E6%83%85%E5%95%86%23) `309.5K 🔥` `NEW`
1. [莎头 集齐金银铜](https://s.weibo.com/weibo?q=%23%E8%8E%8E%E5%A4%B4%20%E9%9B%86%E9%BD%90%E9%87%91%E9%93%B6%E9%93%9C%23) `274.8K 🔥` `NEW`
1. [haerin机场图](https://s.weibo.com/weibo?q=%23haerin%E6%9C%BA%E5%9C%BA%E5%9B%BE%23) `263.5K 🔥` `NEW`
1. [蒙淇淇追着这一秒过火杀](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E8%BF%BD%E7%9D%80%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%9D%80%23) `239.7K 🔥` `NEW`
1. [阿根廷球迷让妈妈贷款买决赛门票 (Argentinian fan asks mom to take loan to buy final tickets)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E8%AE%A9%E5%A6%88%E5%A6%88%E8%B4%B7%E6%AC%BE%E4%B9%B0%E5%86%B3%E8%B5%9B%E9%97%A8%E7%A5%A8%23) `233.1K 🔥` `NEW`
1. [赵今麦王安宇品茶路透](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%8E%8B%E5%AE%89%E5%AE%87%E5%93%81%E8%8C%B6%E8%B7%AF%E9%80%8F%23) `213.1K 🔥` `NEW`
1. [领导开会我就迪丽热巴这样](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%AF%BC%E5%BC%80%E4%BC%9A%E6%88%91%E5%B0%B1%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E6%A0%B7%23) `205.1K 🔥` `NEW`
1. [马龙笑开了花](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E7%AC%91%E5%BC%80%E4%BA%86%E8%8A%B1%23) `204.5K 🔥` `NEW`
1. [外网热议中国KFC卖炸鸡西瓜](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AE%E4%B8%AD%E5%9B%BDKFC%E5%8D%96%E7%82%B8%E9%B8%A1%E8%A5%BF%E7%93%9C%23) `187.9K 🔥` `NEW`
1. [央视曝光三无网红面膜](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%B8%89%E6%97%A0%E7%BD%91%E7%BA%A2%E9%9D%A2%E8%86%9C%23) `187.0K 🔥` `NEW`
1. [没想到王俊凯的工作留痕在这用上了](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E5%9C%A8%E8%BF%99%E7%94%A8%E4%B8%8A%E4%BA%86%23) `1.0M 🔥` `+348%`
1. [今夜足球专家认准全鸡专家 (Tonight's football expert looks for the whole chicken expert)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%9C%E8%B6%B3%E7%90%83%E4%B8%93%E5%AE%B6%E8%AE%A4%E5%87%86%E5%85%A8%E9%B8%A1%E4%B8%93%E5%AE%B6%23) `796.1K 🔥` `+64%`
1. [放羊的星星19周年主创录VCR (Sheep-Herding Star 19th Anniversary Main Recording VCR)](https://s.weibo.com/weibo?q=%23%E6%94%BE%E7%BE%8A%E7%9A%84%E6%98%9F%E6%98%9F19%E5%91%A8%E5%B9%B4%E4%B8%BB%E5%88%9B%E5%BD%95VCR%23) `238.3K 🔥` `+36%`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `1.2M 🔥`
1. [青春启程踏歌行](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%90%AF%E7%A8%8B%E8%B8%8F%E6%AD%8C%E8%A1%8C%23) `1.0M 🔥`
1. [存钱过万一定要办理纸质存单 (If you save more than 10,000 yuan, you must apply for a paper deposit certificate)](https://s.weibo.com/weibo?q=%23%E5%AD%98%E9%92%B1%E8%BF%87%E4%B8%87%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8A%9E%E7%90%86%E7%BA%B8%E8%B4%A8%E5%AD%98%E5%8D%95%23) `797.9K 🔥`
1. [这一秒过火台词好搞笑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%8F%B0%E8%AF%8D%E5%A5%BD%E6%90%9E%E7%AC%91%23) `346.0K 🔥`
1. [穆祉丞哭了 (Mu Zhicheng cried)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%93%AD%E4%BA%86%23) `345.8K 🔥`
1. [这一秒过火强吻好尬](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%BC%BA%E5%90%BB%E5%A5%BD%E5%B0%AC%23) `344.7K 🔥`
1. [马来西亚宣布驱逐所有以色列人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%AE%A3%E5%B8%83%E9%A9%B1%E9%80%90%E6%89%80%E6%9C%89%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%23) `344.7K 🔥`
1. [马斯克宣称要赶超Kimi (Musk claims to catch up with Kimi)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%AE%A3%E7%A7%B0%E8%A6%81%E8%B5%B6%E8%B6%85Kimi%23) `344.2K 🔥`
1. [上海突发强雷暴 (Severe thunderstorm breaks out in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%AA%81%E5%8F%91%E5%BC%BA%E9%9B%B7%E6%9A%B4%23) `342.9K 🔥`
1. [国乒 断层危机](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E6%96%AD%E5%B1%82%E5%8D%B1%E6%9C%BA%23) `342.1K 🔥`
1. [唐嫣紧身衣身材 (Tang Yan's figure in tights)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%B4%A7%E8%BA%AB%E8%A1%A3%E8%BA%AB%E6%9D%90%23) `342.0K 🔥`
1. [曝BLG签约新上单](https://s.weibo.com/weibo?q=%23%E6%9B%9DBLG%E7%AD%BE%E7%BA%A6%E6%96%B0%E4%B8%8A%E5%8D%95%23) `337.2K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `313.7K 🔥`
1. [其实减肥是越减越轻松的](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E5%87%8F%E8%82%A5%E6%98%AF%E8%B6%8A%E5%87%8F%E8%B6%8A%E8%BD%BB%E6%9D%BE%E7%9A%84%23) `197.3K 🔥`
1. [日本惹怒俄罗斯](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%83%B9%E6%80%92%E4%BF%84%E7%BD%97%E6%96%AF%23) `186.5K 🔥`
1. [马龙许昕男双冠军 (Ma Long and Xu Xin men’s doubles champion)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `4.2M 🔥` `-31%`
1. [林诗栋蒯曼夺冠](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%E5%A4%BA%E5%86%A0%23) `343.4K 🔥` `-51%`
1. [这一秒过火热度](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E7%83%AD%E5%BA%A6%23) `273.9K 🔥` `-44%`
1. [贝林厄姆在女友与哈兰德身边对比 (Bellingham compares with Haaland next to girlfriend)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E5%9C%A8%E5%A5%B3%E5%8F%8B%E4%B8%8E%E5%93%88%E5%85%B0%E5%BE%B7%E8%BA%AB%E8%BE%B9%E5%AF%B9%E6%AF%94%23) `254.9K 🔥` `-34%`
1. [虞书欣直播给陈靖可化妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%E7%BB%99%E9%99%88%E9%9D%96%E5%8F%AF%E5%8C%96%E5%A6%86%23) `230.2K 🔥` `-38%`
1. [这一秒过火 红果亦是果 (This second went too far, the red fruit is also a fruit)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E7%BA%A2%E6%9E%9C%E4%BA%A6%E6%98%AF%E6%9E%9C%23) `208.4K 🔥` `-43%`
1. [Bin或轮换](https://s.weibo.com/weibo?q=%23Bin%E6%88%96%E8%BD%AE%E6%8D%A2%23) `205.4K 🔥` `-24%`
1. [姆巴佩说我们也是人 (Mbappe says we are human too)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%AF%B4%E6%88%91%E4%BB%AC%E4%B9%9F%E6%98%AF%E4%BA%BA%23) `192.8K 🔥` `-69%`

Updated at 2026-07-19 22:09:55

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
