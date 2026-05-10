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

1. [世乒赛 (World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%23) `1.1M 🔥` `NEW`
1. [网传一念江南黄了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E9%BB%84%E4%BA%86%23) `698.3K 🔥` `NEW`
1. [45岁独身男子离世15万存款被转走](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%8B%AC%E8%BA%AB%E7%94%B7%E5%AD%90%E7%A6%BB%E4%B8%9615%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E8%BD%AC%E8%B5%B0%23) `568.1K 🔥` `NEW`
1. [公厕文学](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8E%95%E6%96%87%E5%AD%A6%23) `537.9K 🔥` `NEW`
1. [中国女团vs日本](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `537.9K 🔥` `NEW`
1. [中国潜水器发现深海生命绿洲](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E6%B0%B4%E5%99%A8%E5%8F%91%E7%8E%B0%E6%B7%B1%E6%B5%B7%E7%94%9F%E5%91%BD%E7%BB%BF%E6%B4%B2%23) `537.8K 🔥` `NEW`
1. [小英道歉了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E9%81%93%E6%AD%89%E4%BA%86%23) `537.7K 🔥` `NEW`
1. [14岁男生奸杀同学案被告人未上诉](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E7%94%9F%E5%A5%B8%E6%9D%80%E5%90%8C%E5%AD%A6%E6%A1%88%E8%A2%AB%E5%91%8A%E4%BA%BA%E6%9C%AA%E4%B8%8A%E8%AF%89%23) `537.7K 🔥` `NEW`
1. [奔跑吧兄弟 溜达吧爱豆](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%85%84%E5%BC%9F%20%E6%BA%9C%E8%BE%BE%E5%90%A7%E7%88%B1%E8%B1%86%23) `537.6K 🔥` `NEW`
1. [小龙虾价格腰斩了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BE%99%E8%99%BE%E4%BB%B7%E6%A0%BC%E8%85%B0%E6%96%A9%E4%BA%86%23) `537.5K 🔥` `NEW`
1. [武大就OPPO母亲节文案发声 (Wuhan University speaks out on OPPO’s Mother’s Day copywriting)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E5%B0%B1OPPO%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%96%87%E6%A1%88%E5%8F%91%E5%A3%B0%23) `525.7K 🔥` `NEW`
1. [5克金饰成母亲节热销爆款](https://s.weibo.com/weibo?q=%235%E5%85%8B%E9%87%91%E9%A5%B0%E6%88%90%E6%AF%8D%E4%BA%B2%E8%8A%82%E7%83%AD%E9%94%80%E7%88%86%E6%AC%BE%23) `504.9K 🔥` `NEW`
1. [老板自称回馈社会实则诈骗超500万](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E8%87%AA%E7%A7%B0%E5%9B%9E%E9%A6%88%E7%A4%BE%E4%BC%9A%E5%AE%9E%E5%88%99%E8%AF%88%E9%AA%97%E8%B6%85500%E4%B8%87%23) `384.9K 🔥` `NEW`
1. [榴莲降价有商家日营业额4万](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E9%99%8D%E4%BB%B7%E6%9C%89%E5%95%86%E5%AE%B6%E6%97%A5%E8%90%A5%E4%B8%9A%E9%A2%9D4%E4%B8%87%23) `362.9K 🔥` `NEW`
1. [宋亚轩国乐无双八首歌串烧](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%E5%85%AB%E9%A6%96%E6%AD%8C%E4%B8%B2%E7%83%A7%23) `327.3K 🔥` `NEW`
1. [要对存钱有概念](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AF%B9%E5%AD%98%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `322.0K 🔥` `NEW`
1. [沈梦辰理想型张凌赫嫁给杜海涛](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E7%90%86%E6%83%B3%E5%9E%8B%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AB%81%E7%BB%99%E6%9D%9C%E6%B5%B7%E6%B6%9B%23) `234.6K 🔥` `NEW`
1. [何穗晒与儿子合影](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E6%99%92%E4%B8%8E%E5%84%BF%E5%AD%90%E5%90%88%E5%BD%B1%23) `207.8K 🔥` `NEW`
1. [虞书欣谷爱凌同框](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%8C%E6%A1%86%23) `207.3K 🔥` `NEW`
1. [牛妈妈产下畸形双头小牛](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A6%88%E5%A6%88%E4%BA%A7%E4%B8%8B%E7%95%B8%E5%BD%A2%E5%8F%8C%E5%A4%B4%E5%B0%8F%E7%89%9B%23) `205.7K 🔥` `NEW`
1. [女子自曝遭医生侵犯检出精斑 (Woman reveals she was assaulted by doctor and found sperm spots)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%87%AA%E6%9B%9D%E9%81%AD%E5%8C%BB%E7%94%9F%E4%BE%B5%E7%8A%AF%E6%A3%80%E5%87%BA%E7%B2%BE%E6%96%91%23) `188.6K 🔥` `NEW`
1. [SM员工婚礼宣传aespa专辑](https://s.weibo.com/weibo?q=%23SM%E5%91%98%E5%B7%A5%E5%A9%9A%E7%A4%BC%E5%AE%A3%E4%BC%A0aespa%E4%B8%93%E8%BE%91%23) `164.4K 🔥` `NEW`
1. [王俊凯打瓦好燃](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%89%93%E7%93%A6%E5%A5%BD%E7%87%83%23) `154.4K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `151.4K 🔥` `NEW`
1. [毛巾少爷不联姻的原因找到了](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E4%B8%8D%E8%81%94%E5%A7%BB%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `150.4K 🔥` `NEW`
1. [全公司最不会离职的人终于出现了 (The person who is least likely to leave the company finally appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%85%AC%E5%8F%B8%E6%9C%80%E4%B8%8D%E4%BC%9A%E7%A6%BB%E8%81%8C%E7%9A%84%E4%BA%BA%E7%BB%88%E4%BA%8E%E5%87%BA%E7%8E%B0%E4%BA%86%23) `782.9K 🔥` `+179%`
1. [曝小英带货佣金](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E8%8B%B1%E5%B8%A6%E8%B4%A7%E4%BD%A3%E9%87%91%23) `537.8K 🔥` `+52%`
1. [王俊凯戴耳机这一下](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%88%B4%E8%80%B3%E6%9C%BA%E8%BF%99%E4%B8%80%E4%B8%8B%23) `537.7K 🔥` `+132%`
1. [金银价格大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E6%B6%A8%23) `517.7K 🔥` `+55%`
1. [DeepSeek被曝融资500亿 (DeepSeek was revealed to have raised 50 billion)](https://s.weibo.com/weibo?q=%23DeepSeek%E8%A2%AB%E6%9B%9D%E8%9E%8D%E8%B5%84500%E4%BA%BF%23) `510.5K 🔥` `+55%`
1. [这下是真不认识张钧甯了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E6%98%AF%E7%9C%9F%E4%B8%8D%E8%AE%A4%E8%AF%86%E5%BC%A0%E9%92%A7%E7%94%AF%E4%BA%86%23) `498.6K 🔥` `+44%`
1. [陈赫回应邀请李晨上五哈](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%82%80%E8%AF%B7%E6%9D%8E%E6%99%A8%E4%B8%8A%E4%BA%94%E5%93%88%23) `415.2K 🔥` `+24%`
1. [涉疫邮轮上唯一一名医生也感染了 (The only doctor on the affected cruise ship was also infected)](https://s.weibo.com/weibo?q=%23%E6%B6%89%E7%96%AB%E9%82%AE%E8%BD%AE%E4%B8%8A%E5%94%AF%E4%B8%80%E4%B8%80%E5%90%8D%E5%8C%BB%E7%94%9F%E4%B9%9F%E6%84%9F%E6%9F%93%E4%BA%86%23) `323.6K 🔥` `+26%`
1. [给阿嬷的情书9.1分是什么概念](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A69.1%E5%88%86%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `308.7K 🔥` `+107%`
1. [一句句妈妈听哭了 (My mother cried after hearing each sentence)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E5%8F%A5%E5%A6%88%E5%A6%88%E5%90%AC%E5%93%AD%E4%BA%86%23) `830.2K 🔥`
1. [詹姆斯回应雷霆3比0湖人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E9%9B%B7%E9%9C%863%E6%AF%940%E6%B9%96%E4%BA%BA%23) `430.5K 🔥`
1. [何炅现身浙江大学揽才](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%8E%B0%E8%BA%AB%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E6%8F%BD%E6%89%8D%23) `327.4K 🔥`
1. [虞书欣G社生图 (Yu Shuxin G social life picture)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `288.6K 🔥`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `236.3K 🔥`
1. [张怡宁预测国乒男女团今晚对决日本](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%80%A1%E5%AE%81%E9%A2%84%E6%B5%8B%E5%9B%BD%E4%B9%92%E7%94%B7%E5%A5%B3%E5%9B%A2%E4%BB%8A%E6%99%9A%E5%AF%B9%E5%86%B3%E6%97%A5%E6%9C%AC%23) `193.3K 🔥`
1. [安慕希 百万撤离 (Anmuxi million evacuated)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%85%95%E5%B8%8C%20%E7%99%BE%E4%B8%87%E6%92%A4%E7%A6%BB%23) `2.9M 🔥` `-26%`
1. [蒜苔拼豆](https://s.weibo.com/weibo?q=%23%E8%92%9C%E8%8B%94%E6%8B%BC%E8%B1%86%23) `594.6K 🔥` `-28%`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `480.1K 🔥` `-44%`
1. [难怪现在在外面吃饭很少拉肚子了 (No wonder I rarely have diarrhea when eating out now.)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%8E%B0%E5%9C%A8%E5%9C%A8%E5%A4%96%E9%9D%A2%E5%90%83%E9%A5%AD%E5%BE%88%E5%B0%91%E6%8B%89%E8%82%9A%E5%AD%90%E4%BA%86%23) `361.7K 🔥` `-68%`
1. [女子称遭侵犯为取证问其是否喜欢自己](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E4%BE%B5%E7%8A%AF%E4%B8%BA%E5%8F%96%E8%AF%81%E9%97%AE%E5%85%B6%E6%98%AF%E5%90%A6%E5%96%9C%E6%AC%A2%E8%87%AA%E5%B7%B1%23) `323.1K 🔥` `-46%`
1. [一季度全国结婚登记169.7万对](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0169.7%E4%B8%87%E5%AF%B9%23) `226.1K 🔥` `-44%`
1. [刘宇宁进组 (Liu Yuning joins the group)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%9B%E7%BB%84%23) `181.0K 🔥` `-51%`
1. [桂林文旅为何不能直面一张脏凳子](https://s.weibo.com/weibo?q=%23%E6%A1%82%E6%9E%97%E6%96%87%E6%97%85%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%83%BD%E7%9B%B4%E9%9D%A2%E4%B8%80%E5%BC%A0%E8%84%8F%E5%87%B3%E5%AD%90%23) `156.2K 🔥` `-47%`
1. [机器人有没有体面一点的打包方式](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E6%89%93%E5%8C%85%E6%96%B9%E5%BC%8F%23) `151.5K 🔥` `-58%`
1. [缅甸又挖出一枚2.2公斤顶级红宝石](https://s.weibo.com/weibo?q=%23%E7%BC%85%E7%94%B8%E5%8F%88%E6%8C%96%E5%87%BA%E4%B8%80%E6%9E%9A2.2%E5%85%AC%E6%96%A4%E9%A1%B6%E7%BA%A7%E7%BA%A2%E5%AE%9D%E7%9F%B3%23) `150.1K 🔥` `-41%`

Updated at 2026-05-10 17:58:10

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
