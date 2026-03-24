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

1. [以色列被打穿了 (Israel is penetrated)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%89%93%E7%A9%BF%E4%BA%86%23) `205.6K 🔥` `NEW`
1. [迪士尼 物价](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%20%E7%89%A9%E4%BB%B7%23) `191.4K 🔥` `NEW`
1. [周杰伦新歌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%23) `191.4K 🔥` `NEW`
1. [男友离世前转地铁吐血女孩5万治病](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E7%A6%BB%E4%B8%96%E5%89%8D%E8%BD%AC%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A95%E4%B8%87%E6%B2%BB%E7%97%85%23) `190.7K 🔥` `NEW`
1. [孟羽童自曝失恋一周无法工作](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%BD%E7%AB%A5%E8%87%AA%E6%9B%9D%E5%A4%B1%E6%81%8B%E4%B8%80%E5%91%A8%E6%97%A0%E6%B3%95%E5%B7%A5%E4%BD%9C%23) `189.9K 🔥` `NEW`
1. [14岁少年被虐致死小区业主物业发声](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%B0%91%E5%B9%B4%E8%A2%AB%E8%99%90%E8%87%B4%E6%AD%BB%E5%B0%8F%E5%8C%BA%E4%B8%9A%E4%B8%BB%E7%89%A9%E4%B8%9A%E5%8F%91%E5%A3%B0%23) `167.4K 🔥` `NEW`
1. [第一批丁克家庭现状曝光](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E4%B8%81%E5%85%8B%E5%AE%B6%E5%BA%AD%E7%8E%B0%E7%8A%B6%E6%9B%9D%E5%85%89%23) `110.6K 🔥` `NEW`
1. [美国打不赢还走不了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%89%93%E4%B8%8D%E8%B5%A2%E8%BF%98%E8%B5%B0%E4%B8%8D%E4%BA%86%23) `104.1K 🔥` `NEW`
1. [张凌赫在座的各位不要当我爸爸了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9C%A8%E5%BA%A7%E7%9A%84%E5%90%84%E4%BD%8D%E4%B8%8D%E8%A6%81%E5%BD%93%E6%88%91%E7%88%B8%E7%88%B8%E4%BA%86%23) `103.2K 🔥` `NEW`
1. [周大福暂缓涨价](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E6%9A%82%E7%BC%93%E6%B6%A8%E4%BB%B7%23) `101.4K 🔥` `NEW`
1. [杨瀚森4分3板 (Yang Hansen 4 points and 3 rebounds)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE4%E5%88%863%E6%9D%BF%23) `89.4K 🔥` `NEW`
1. [现在的狗咖都发展成这样了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E7%8B%97%E5%92%96%E9%83%BD%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `88.3K 🔥` `NEW`
1. [徐若晗玉簟秋拍了150天](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E7%8E%89%E7%B0%9F%E7%A7%8B%E6%8B%8D%E4%BA%86150%E5%A4%A9%23) `86.9K 🔥` `NEW`
1. [脂肪都得排队喊大哥](https://s.weibo.com/weibo?q=%23%E8%84%82%E8%82%AA%E9%83%BD%E5%BE%97%E6%8E%92%E9%98%9F%E5%96%8A%E5%A4%A7%E5%93%A5%23) `81.3K 🔥` `NEW`
1. [梅姨落网电影亲爱的原型发声](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%90%BD%E7%BD%91%E7%94%B5%E5%BD%B1%E4%BA%B2%E7%88%B1%E7%9A%84%E5%8E%9F%E5%9E%8B%E5%8F%91%E5%A3%B0%23) `81.3K 🔥` `NEW`
1. [女子乘高铁投诉男子吸烟却被发口罩](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%98%E9%AB%98%E9%93%81%E6%8A%95%E8%AF%89%E7%94%B7%E5%AD%90%E5%90%B8%E7%83%9F%E5%8D%B4%E8%A2%AB%E5%8F%91%E5%8F%A3%E7%BD%A9%23) `81.3K 🔥` `NEW`
1. [文韬北大金融系的含金量](https://s.weibo.com/weibo?q=%23%E6%96%87%E9%9F%AC%E5%8C%97%E5%A4%A7%E9%87%91%E8%9E%8D%E7%B3%BB%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `80.2K 🔥` `NEW`
1. [汽车之家多平台账号被禁止关注](https://s.weibo.com/weibo?q=%23%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6%E5%A4%9A%E5%B9%B3%E5%8F%B0%E8%B4%A6%E5%8F%B7%E8%A2%AB%E7%A6%81%E6%AD%A2%E5%85%B3%E6%B3%A8%23) `75.1K 🔥` `NEW`
1. [起底民营医院种牙专家](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E5%BA%95%E6%B0%91%E8%90%A5%E5%8C%BB%E9%99%A2%E7%A7%8D%E7%89%99%E4%B8%93%E5%AE%B6%23) `73.8K 🔥` `NEW`
1. [Breathe直播辟谣](https://s.weibo.com/weibo?q=%23Breathe%E7%9B%B4%E6%92%AD%E8%BE%9F%E8%B0%A3%23) `72.4K 🔥` `NEW`
1. [老人感染HIV后还需靠年迈父母照料 (Elderly people infected with HIV still need to be cared for by their elderly parents)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%84%9F%E6%9F%93HIV%E5%90%8E%E8%BF%98%E9%9C%80%E9%9D%A0%E5%B9%B4%E8%BF%88%E7%88%B6%E6%AF%8D%E7%85%A7%E6%96%99%23) `72.2K 🔥` `NEW`
1. [Fly九周年发长文](https://s.weibo.com/weibo?q=%23Fly%E4%B9%9D%E5%91%A8%E5%B9%B4%E5%8F%91%E9%95%BF%E6%96%87%23) `68.2K 🔥` `NEW`
1. [开推4宣传迪丽热巴白日提灯](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A84%E5%AE%A3%E4%BC%A0%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `68.0K 🔥` `NEW`
1. [美国伊朗到底谈没谈](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BC%8A%E6%9C%97%E5%88%B0%E5%BA%95%E8%B0%88%E6%B2%A1%E8%B0%88%23) `66.6K 🔥` `NEW`
1. [用你喜欢的方式度过一生](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BD%A0%E5%96%9C%E6%AC%A2%E7%9A%84%E6%96%B9%E5%BC%8F%E5%BA%A6%E8%BF%87%E4%B8%80%E7%94%9F%23) `66.1K 🔥` `NEW`
1. [赚1700用了半个月亏5770用了一天](https://s.weibo.com/weibo?q=%23%E8%B5%9A1700%E7%94%A8%E4%BA%86%E5%8D%8A%E4%B8%AA%E6%9C%88%E4%BA%8F5770%E7%94%A8%E4%BA%86%E4%B8%80%E5%A4%A9%23) `65.8K 🔥` `NEW`
1. [中园石化碰瓷中国石化](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%AD%E7%9F%B3%E5%8C%96%E7%A2%B0%E7%93%B7%E4%B8%AD%E5%9B%BD%E7%9F%B3%E5%8C%96%23) `1.0M 🔥` `+808%`
1. [贵州溶洞发现地下反向森林](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E6%BA%B6%E6%B4%9E%E5%8F%91%E7%8E%B0%E5%9C%B0%E4%B8%8B%E5%8F%8D%E5%90%91%E6%A3%AE%E6%9E%97%23) `219.3K 🔥` `+41%`
1. [少年被虐致死家族群里都是伤痕照片](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E8%A2%AB%E8%99%90%E8%87%B4%E6%AD%BB%E5%AE%B6%E6%97%8F%E7%BE%A4%E9%87%8C%E9%83%BD%E6%98%AF%E4%BC%A4%E7%97%95%E7%85%A7%E7%89%87%23) `189.8K 🔥` `+75%`
1. [稳定发展是中国人民的坚实底气](https://s.weibo.com/weibo?q=%23%E7%A8%B3%E5%AE%9A%E5%8F%91%E5%B1%95%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E7%9A%84%E5%9D%9A%E5%AE%9E%E5%BA%95%E6%B0%94%23) `612.5K 🔥`
1. [周杰伦太阳之子MV (Jay Chou's Son of the Sun MV)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90MV%23) `537.4K 🔥`
1. [14岁少年遭虐待离世伤痕遍布全身](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%B0%91%E5%B9%B4%E9%81%AD%E8%99%90%E5%BE%85%E7%A6%BB%E4%B8%96%E4%BC%A4%E7%97%95%E9%81%8D%E5%B8%83%E5%85%A8%E8%BA%AB%23) `190.1K 🔥`
1. [美国得州炼油厂发生爆炸 (Explosion occurs at Texas refinery)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%BE%97%E5%B7%9E%E7%82%BC%E6%B2%B9%E5%8E%82%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `747.7K 🔥` `-29%`
1. [第一次看懂中文是因为看懂了英文](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E6%87%82%E4%B8%AD%E6%96%87%E6%98%AF%E5%9B%A0%E4%B8%BA%E7%9C%8B%E6%87%82%E4%BA%86%E8%8B%B1%E6%96%87%23) `201.3K 🔥` `-65%`
1. [韩3名高空被烧死人员均为外包工 (The three people who were burned to death at high altitude in South Korea were all outsourced workers)](https://s.weibo.com/weibo?q=%23%E9%9F%A93%E5%90%8D%E9%AB%98%E7%A9%BA%E8%A2%AB%E7%83%A7%E6%AD%BB%E4%BA%BA%E5%91%98%E5%9D%87%E4%B8%BA%E5%A4%96%E5%8C%85%E5%B7%A5%23) `190.9K 🔥` `-75%`
1. [刘亦菲金智媛生图](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%87%91%E6%99%BA%E5%AA%9B%E7%94%9F%E5%9B%BE%23) `190.4K 🔥` `-63%`
1. [美团删照片](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%88%A0%E7%85%A7%E7%89%87%23) `189.4K 🔥` `-57%`
1. [入室抢婴主犯听到死缓当庭开骂](https://s.weibo.com/weibo?q=%23%E5%85%A5%E5%AE%A4%E6%8A%A2%E5%A9%B4%E4%B8%BB%E7%8A%AF%E5%90%AC%E5%88%B0%E6%AD%BB%E7%BC%93%E5%BD%93%E5%BA%AD%E5%BC%80%E9%AA%82%23) `189.3K 🔥` `-55%`
1. [地铁吐血女孩前男友去年因病离世](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E5%89%8D%E7%94%B7%E5%8F%8B%E5%8E%BB%E5%B9%B4%E5%9B%A0%E7%97%85%E7%A6%BB%E4%B8%96%23) `163.0K 🔥` `-71%`
1. [一吃自助就忍不住拿便宜货 (As soon as I eat at the buffet, I can’t help but grab the bargains)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%90%83%E8%87%AA%E5%8A%A9%E5%B0%B1%E5%BF%8D%E4%B8%8D%E4%BD%8F%E6%8B%BF%E4%BE%BF%E5%AE%9C%E8%B4%A7%23) `118.0K 🔥` `-33%`
1. [张凌赫知道热巴白宇退出开推的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9F%A5%E9%81%93%E7%83%AD%E5%B7%B4%E7%99%BD%E5%AE%87%E9%80%80%E5%87%BA%E5%BC%80%E6%8E%A8%E7%9A%84%E5%8F%8D%E5%BA%94%23) `116.8K 🔥` `-80%`
1. [金正恩正式将韩国定义为头号敌国](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E6%AD%A3%E5%BC%8F%E5%B0%86%E9%9F%A9%E5%9B%BD%E5%AE%9A%E4%B9%89%E4%B8%BA%E5%A4%B4%E5%8F%B7%E6%95%8C%E5%9B%BD%23) `109.6K 🔥` `-36%`
1. [浅浅为俞宝儿改名齐煜](https://s.weibo.com/weibo?q=%23%E6%B5%85%E6%B5%85%E4%B8%BA%E4%BF%9E%E5%AE%9D%E5%84%BF%E6%94%B9%E5%90%8D%E9%BD%90%E7%85%9C%23) `103.8K 🔥` `-43%`
1. [王俊凯要唱新歌无人乐园 (Wang Junkai will sing a new song "No Man's Paradise")](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A6%81%E5%94%B1%E6%96%B0%E6%AD%8C%E6%97%A0%E4%BA%BA%E4%B9%90%E5%9B%AD%23) `98.6K 🔥` `-33%`
1. [穆迪膝盖变形](https://s.weibo.com/weibo?q=%23%E7%A9%86%E8%BF%AA%E8%86%9D%E7%9B%96%E5%8F%98%E5%BD%A2%23) `91.6K 🔥` `-57%`
1. [开始推理吧直播 (Start reasoning live)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%E7%9B%B4%E6%92%AD%23) `87.2K 🔥` `-85%`
1. [被吸管杯背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%90%B8%E7%AE%A1%E6%9D%AF%E8%83%8C%E5%88%BA%E4%BA%86%23) `83.5K 🔥` `-29%`
1. [邓超碰上了最懂自己的节目组](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%A2%B0%E4%B8%8A%E4%BA%86%E6%9C%80%E6%87%82%E8%87%AA%E5%B7%B1%E7%9A%84%E8%8A%82%E7%9B%AE%E7%BB%84%23) `73.0K 🔥` `-45%`
1. [烘焙店一次性手套包装被指像避孕套](https://s.weibo.com/weibo?q=%23%E7%83%98%E7%84%99%E5%BA%97%E4%B8%80%E6%AC%A1%E6%80%A7%E6%89%8B%E5%A5%97%E5%8C%85%E8%A3%85%E8%A2%AB%E6%8C%87%E5%83%8F%E9%81%BF%E5%AD%95%E5%A5%97%23) `69.3K 🔥` `-39%`
1. [刘亦菲安妮海瑟薇互相搂腰](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%AE%89%E5%A6%AE%E6%B5%B7%E7%91%9F%E8%96%87%E4%BA%92%E7%9B%B8%E6%90%82%E8%85%B0%23) `65.6K 🔥` `-38%`

Updated at 2026-03-24 14:16:10

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
