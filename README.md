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

1. [一句句妈妈听哭了 (My mother cried after hearing each sentence)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E5%8F%A5%E5%A6%88%E5%A6%88%E5%90%AC%E5%93%AD%E4%BA%86%23) `918.5K 🔥` `NEW`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `863.7K 🔥` `NEW`
1. [蒜苔拼豆](https://s.weibo.com/weibo?q=%23%E8%92%9C%E8%8B%94%E6%8B%BC%E8%B1%86%23) `831.0K 🔥` `NEW`
1. [谁说生完娃就不痛经](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AF%B4%E7%94%9F%E5%AE%8C%E5%A8%83%E5%B0%B1%E4%B8%8D%E7%97%9B%E7%BB%8F%23) `414.9K 🔥` `NEW`
1. [刘宇宁进组](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%9B%E7%BB%84%23) `369.0K 🔥` `NEW`
1. [曝小英带货佣金](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E8%8B%B1%E5%B8%A6%E8%B4%A7%E4%BD%A3%E9%87%91%23) `352.7K 🔥` `NEW`
1. [何炅现身浙江大学揽才](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%8E%B0%E8%BA%AB%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E6%8F%BD%E6%89%8D%23) `337.3K 🔥` `NEW`
1. [女子买1斤切糕变3斤被收48元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B01%E6%96%A4%E5%88%87%E7%B3%95%E5%8F%983%E6%96%A4%E8%A2%AB%E6%94%B648%E5%85%83%23) `327.6K 🔥` `NEW`
1. [男子假期躺平2天查出肺栓塞进ICU](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%87%E6%9C%9F%E8%BA%BA%E5%B9%B32%E5%A4%A9%E6%9F%A5%E5%87%BA%E8%82%BA%E6%A0%93%E5%A1%9E%E8%BF%9BICU%23) `324.6K 🔥` `NEW`
1. [李现拍的张婧仪](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%8B%8D%E7%9A%84%E5%BC%A0%E5%A9%A7%E4%BB%AA%23) `323.3K 🔥` `NEW`
1. [全公司最不会离职的人终于出现了 (The person who is least likely to leave the company finally appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%85%AC%E5%8F%B8%E6%9C%80%E4%B8%8D%E4%BC%9A%E7%A6%BB%E8%81%8C%E7%9A%84%E4%BA%BA%E7%BB%88%E4%BA%8E%E5%87%BA%E7%8E%B0%E4%BA%86%23) `280.7K 🔥` `NEW`
1. [马嘉祺我们生活在南京预告](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%88%91%E4%BB%AC%E7%94%9F%E6%B4%BB%E5%9C%A8%E5%8D%97%E4%BA%AC%E9%A2%84%E5%91%8A%23) `265.7K 🔥` `NEW`
1. [王俊凯戴耳机这一下](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%88%B4%E8%80%B3%E6%9C%BA%E8%BF%99%E4%B8%80%E4%B8%8B%23) `232.0K 🔥` `NEW`
1. [邓莎17岁的狗狗去世](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%8E%8E17%E5%B2%81%E7%9A%84%E7%8B%97%E7%8B%97%E5%8E%BB%E4%B8%96%23) `175.4K 🔥` `NEW`
1. [张怡宁预测国乒男女团今晚对决日本](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%80%A1%E5%AE%81%E9%A2%84%E6%B5%8B%E5%9B%BD%E4%B9%92%E7%94%B7%E5%A5%B3%E5%9B%A2%E4%BB%8A%E6%99%9A%E5%AF%B9%E5%86%B3%E6%97%A5%E6%9C%AC%23) `174.7K 🔥` `NEW`
1. [王俊凯无畏契约表演赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `171.8K 🔥` `NEW`
1. [境外间谍用美人计策反涉密人员](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E9%97%B4%E8%B0%8D%E7%94%A8%E7%BE%8E%E4%BA%BA%E8%AE%A1%E7%AD%96%E5%8F%8D%E6%B6%89%E5%AF%86%E4%BA%BA%E5%91%98%23) `167.4K 🔥` `NEW`
1. [小沈阳祖孙三代共用一张脸](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A5%96%E5%AD%99%E4%B8%89%E4%BB%A3%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `162.1K 🔥` `NEW`
1. [给阿嬷的情书9.1分是什么概念](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A69.1%E5%88%86%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `148.9K 🔥` `NEW`
1. [优酷2026年度片单](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B72026%E5%B9%B4%E5%BA%A6%E7%89%87%E5%8D%95%23) `140.4K 🔥` `NEW`
1. [王星越围观蔡文静直播 (Wang Xingyue watched Cai Wenjing’s live broadcast)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E5%9B%B4%E8%A7%82%E8%94%A1%E6%96%87%E9%9D%99%E7%9B%B4%E6%92%AD%23) `132.2K 🔥` `NEW`
1. [原来血糖变化会带来巨大的饥饿感](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%A1%80%E7%B3%96%E5%8F%98%E5%8C%96%E4%BC%9A%E5%B8%A6%E6%9D%A5%E5%B7%A8%E5%A4%A7%E7%9A%84%E9%A5%A5%E9%A5%BF%E6%84%9F%23) `125.3K 🔥` `NEW`
1. [张真源出发长沙](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%87%BA%E5%8F%91%E9%95%BF%E6%B2%99%23) `125.1K 🔥` `NEW`
1. [曝字节今年AI支出将超2000亿](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%97%E8%8A%82%E4%BB%8A%E5%B9%B4AI%E6%94%AF%E5%87%BA%E5%B0%86%E8%B6%852000%E4%BA%BF%23) `124.7K 🔥` `NEW`
1. [女子称遭侵犯为取证问其是否喜欢自己](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E4%BE%B5%E7%8A%AF%E4%B8%BA%E5%8F%96%E8%AF%81%E9%97%AE%E5%85%B6%E6%98%AF%E5%90%A6%E5%96%9C%E6%AC%A2%E8%87%AA%E5%B7%B1%23) `602.8K 🔥` `+168%`
1. [詹姆斯回应雷霆3比0湖人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E9%9B%B7%E9%9C%863%E6%AF%940%E6%B9%96%E4%BA%BA%23) `362.7K 🔥` `+48%`
1. [机器人有没有体面一点的打包方式](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E6%89%93%E5%8C%85%E6%96%B9%E5%BC%8F%23) `360.7K 🔥` `+21%`
1. [这下是真不认识张钧甯了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E6%98%AF%E7%9C%9F%E4%B8%8D%E8%AE%A4%E8%AF%86%E5%BC%A0%E9%92%A7%E7%94%AF%E4%BA%86%23) `346.1K 🔥` `+41%`
1. [陈赫回应邀请李晨上五哈](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%82%80%E8%AF%B7%E6%9D%8E%E6%99%A8%E4%B8%8A%E4%BA%94%E5%93%88%23) `334.9K 🔥` `+39%`
1. [金银价格大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E6%B6%A8%23) `333.5K 🔥` `+56%`
1. [虞书欣G社生图 (Yu Shuxin G social life picture)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `330.2K 🔥` `+35%`
1. [DeepSeek被曝融资500亿 (DeepSeek was revealed to have raised 50 billion)](https://s.weibo.com/weibo?q=%23DeepSeek%E8%A2%AB%E6%9B%9D%E8%9E%8D%E8%B5%84500%E4%BA%BF%23) `328.7K 🔥` `+40%`
1. [蔡文静经纪人打电话让蔡文静下播](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%89%93%E7%94%B5%E8%AF%9D%E8%AE%A9%E8%94%A1%E6%96%87%E9%9D%99%E4%B8%8B%E6%92%AD%23) `321.1K 🔥` `+33%`
1. [桂林文旅为何不能直面一张脏凳子](https://s.weibo.com/weibo?q=%23%E6%A1%82%E6%9E%97%E6%96%87%E6%97%85%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%83%BD%E7%9B%B4%E9%9D%A2%E4%B8%80%E5%BC%A0%E8%84%8F%E5%87%B3%E5%AD%90%23) `297.0K 🔥` `+28%`
1. [安慕希 百万撤离 (Anmuxi million evacuated)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%85%95%E5%B8%8C%20%E7%99%BE%E4%B8%87%E6%92%A4%E7%A6%BB%23) `3.9M 🔥`
1. [难怪现在在外面吃饭很少拉肚子了 (No wonder I rarely have diarrhea when eating out now.)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%8E%B0%E5%9C%A8%E5%9C%A8%E5%A4%96%E9%9D%A2%E5%90%83%E9%A5%AD%E5%BE%88%E5%B0%91%E6%8B%89%E8%82%9A%E5%AD%90%E4%BA%86%23) `1.1M 🔥`
1. [领克07GT公告图曝光 (Lynk & Co 07GT announcement image exposed)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07GT%E5%85%AC%E5%91%8A%E5%9B%BE%E6%9B%9D%E5%85%89%23) `259.9K 🔥`
1. [涉疫邮轮上唯一一名医生也感染了](https://s.weibo.com/weibo?q=%23%E6%B6%89%E7%96%AB%E9%82%AE%E8%BD%AE%E4%B8%8A%E5%94%AF%E4%B8%80%E4%B8%80%E5%90%8D%E5%8C%BB%E7%94%9F%E4%B9%9F%E6%84%9F%E6%9F%93%E4%BA%86%23) `256.6K 🔥`
1. [缅甸又挖出一枚2.2公斤顶级红宝石](https://s.weibo.com/weibo?q=%23%E7%BC%85%E7%94%B8%E5%8F%88%E6%8C%96%E5%87%BA%E4%B8%80%E6%9E%9A2.2%E5%85%AC%E6%96%A4%E9%A1%B6%E7%BA%A7%E7%BA%A2%E5%AE%9D%E7%9F%B3%23) `255.3K 🔥`
1. [47岁女子10次妊娠失败终生子](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E5%A5%B3%E5%AD%9010%E6%AC%A1%E5%A6%8A%E5%A8%A0%E5%A4%B1%E8%B4%A5%E7%BB%88%E7%94%9F%E5%AD%90%23) `231.9K 🔥`
1. [一季度全国结婚登记169.7万对](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0169.7%E4%B8%87%E5%AF%B9%23) `405.0K 🔥` `-40%`
1. [原来这么多年牙齿都在负重前行](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E7%89%99%E9%BD%BF%E9%83%BD%E5%9C%A8%E8%B4%9F%E9%87%8D%E5%89%8D%E8%A1%8C%23) `338.7K 🔥` `-36%`
1. [婴儿的握力能有多大](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E7%9A%84%E6%8F%A1%E5%8A%9B%E8%83%BD%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `302.4K 🔥` `-40%`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `267.4K 🔥` `-38%`
1. [者来女 歌手2026合伙人 (Zhe Lai Nu Singer 2026 Partner)](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%20%E6%AD%8C%E6%89%8B2026%E5%90%88%E4%BC%99%E4%BA%BA%23) `262.4K 🔥` `-40%`
1. [白鹿凌晨三点还在练歌](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%87%8C%E6%99%A8%E4%B8%89%E7%82%B9%E8%BF%98%E5%9C%A8%E7%BB%83%E6%AD%8C%23) `173.5K 🔥` `-27%`
1. [小伙连刮3天刮刮乐中百万连夜返乡](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%BF%9E%E5%88%AE3%E5%A4%A9%E5%88%AE%E5%88%AE%E4%B9%90%E4%B8%AD%E7%99%BE%E4%B8%87%E8%BF%9E%E5%A4%9C%E8%BF%94%E4%B9%A1%23) `156.1K 🔥` `-36%`
1. [虞书欣官方单独重点介绍的华人艺人](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%AE%98%E6%96%B9%E5%8D%95%E7%8B%AC%E9%87%8D%E7%82%B9%E4%BB%8B%E7%BB%8D%E7%9A%84%E5%8D%8E%E4%BA%BA%E8%89%BA%E4%BA%BA%23) `142.5K 🔥` `-38%`
1. [32岁妈妈产后3年查出7种病](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E5%A6%88%E5%A6%88%E4%BA%A7%E5%90%8E3%E5%B9%B4%E6%9F%A5%E5%87%BA7%E7%A7%8D%E7%97%85%23) `140.8K 🔥` `-33%`
1. [紫金陈 低智商犯罪2](https://s.weibo.com/weibo?q=%23%E7%B4%AB%E9%87%91%E9%99%88%20%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA2%23) `124.8K 🔥` `-45%`
1. [高管一个月烧20亿Token自称惭愧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%AE%A1%E4%B8%80%E4%B8%AA%E6%9C%88%E7%83%A720%E4%BA%BFToken%E8%87%AA%E7%A7%B0%E6%83%AD%E6%84%A7%23) `124.7K 🔥` `-39%`

Updated at 2026-05-10 16:30:32

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
