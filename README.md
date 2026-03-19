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

1. [小米发布会 (Xiaomi press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [小米新SU7发布会请来半个车圈](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%E5%8F%91%E5%B8%83%E4%BC%9A%E8%AF%B7%E6%9D%A5%E5%8D%8A%E4%B8%AA%E8%BD%A6%E5%9C%88%23) `762.2K 🔥` `NEW`
1. [王格格 奔跑吧14](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%BC%E6%A0%BC%20%E5%A5%94%E8%B7%91%E5%90%A714%23) `213.6K 🔥` `NEW`
1. [1983创业团开麦中](https://s.weibo.com/weibo?q=%231983%E5%88%9B%E4%B8%9A%E5%9B%A2%E5%BC%80%E9%BA%A6%E4%B8%AD%23) `213.0K 🔥` `NEW`
1. [逐玉开虐了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BC%80%E8%99%90%E4%BA%86%23) `199.6K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `179.3K 🔥` `NEW`
1. [网传奔跑吧14常驻嘉宾阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A5%94%E8%B7%91%E5%90%A714%E5%B8%B8%E9%A9%BB%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `94.2K 🔥` `NEW`
1. [邵明峰称泰山X8拔高了大五座标杆](https://s.weibo.com/weibo?q=%23%E9%82%B5%E6%98%8E%E5%B3%B0%E7%A7%B0%E6%B3%B0%E5%B1%B1X8%E6%8B%94%E9%AB%98%E4%BA%86%E5%A4%A7%E4%BA%94%E5%BA%A7%E6%A0%87%E6%9D%86%23) `94.0K 🔥` `NEW`
1. [王橹杰和187的艾伦几乎一样高了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%92%8C187%E7%9A%84%E8%89%BE%E4%BC%A6%E5%87%A0%E4%B9%8E%E4%B8%80%E6%A0%B7%E9%AB%98%E4%BA%86%23) `93.0K 🔥` `NEW`
1. [伊朗外长回应美2000亿美元战争拨款](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E5%9B%9E%E5%BA%94%E7%BE%8E2000%E4%BA%BF%E7%BE%8E%E5%85%83%E6%88%98%E4%BA%89%E6%8B%A8%E6%AC%BE%23) `91.1K 🔥` `NEW`
1. [17岁的Angelababy (17 year old Angelababy)](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E7%9A%84Angelababy%23) `91.0K 🔥` `NEW`
1. [中国小女孩打车视频在推特爆火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A5%B3%E5%AD%A9%E6%89%93%E8%BD%A6%E8%A7%86%E9%A2%91%E5%9C%A8%E6%8E%A8%E7%89%B9%E7%88%86%E7%81%AB%23) `90.8K 🔥` `NEW`
1. [黄金为啥一直跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%BA%E5%95%A5%E4%B8%80%E7%9B%B4%E8%B7%8C%23) `88.3K 🔥` `NEW`
1. [李昀锐宋雨琦 我和我的e人朋友](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E6%88%91%E5%92%8C%E6%88%91%E7%9A%84e%E4%BA%BA%E6%9C%8B%E5%8F%8B%23) `87.0K 🔥` `NEW`
1. [小米发布会 小米汽车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%20%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `84.7K 🔥` `NEW`
1. [瞿颖王俊凯早期走秀](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%97%A9%E6%9C%9F%E8%B5%B0%E7%A7%80%23) `84.6K 🔥` `NEW`
1. [雷军现身发布会](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%8E%B0%E8%BA%AB%E5%8F%91%E5%B8%83%E4%BC%9A%23) `84.2K 🔥` `NEW`
1. [任敏10年前考上全球前十表演学校](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F10%E5%B9%B4%E5%89%8D%E8%80%83%E4%B8%8A%E5%85%A8%E7%90%83%E5%89%8D%E5%8D%81%E8%A1%A8%E6%BC%94%E5%AD%A6%E6%A0%A1%23) `81.3K 🔥` `NEW`
1. [雪豹吃不了那么多羊为何还要杀](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E8%B1%B9%E5%90%83%E4%B8%8D%E4%BA%86%E9%82%A3%E4%B9%88%E5%A4%9A%E7%BE%8A%E4%B8%BA%E4%BD%95%E8%BF%98%E8%A6%81%E6%9D%80%23) `66.6K 🔥` `NEW`
1. [阿里巴巴第三财季营收2848.4亿元](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E7%AC%AC%E4%B8%89%E8%B4%A2%E5%AD%A3%E8%90%A5%E6%94%B62848.4%E4%BA%BF%E5%85%83%23) `64.5K 🔥` `NEW`
1. [曾舜晞直播 (Zeng Shunxi live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E7%9B%B4%E6%92%AD%23) `62.7K 🔥` `NEW`
1. [年薪60万男子找下级借200万被辞](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%96%AA60%E4%B8%87%E7%94%B7%E5%AD%90%E6%89%BE%E4%B8%8B%E7%BA%A7%E5%80%9F200%E4%B8%87%E8%A2%AB%E8%BE%9E%23) `228.0K 🔥` `+81%`
1. [宝妈每天用84消毒患上罕见病](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%AF%8F%E5%A4%A9%E7%94%A884%E6%B6%88%E6%AF%92%E6%82%A3%E4%B8%8A%E7%BD%95%E8%A7%81%E7%97%85%23) `187.4K 🔥` `+27%`
1. [被路虎别停8次男子个人信息疑泄露](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%B7%AF%E8%99%8E%E5%88%AB%E5%81%9C8%E6%AC%A1%E7%94%B7%E5%AD%90%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E7%96%91%E6%B3%84%E9%9C%B2%23) `177.3K 🔥` `+41%`
1. [买30克金手镯比1月便宜6000元 (Buying a 30-gram gold bracelet is 6,000 yuan cheaper than in January)](https://s.weibo.com/weibo?q=%23%E4%B9%B030%E5%85%8B%E9%87%91%E6%89%8B%E9%95%AF%E6%AF%941%E6%9C%88%E4%BE%BF%E5%AE%9C6000%E5%85%83%23) `164.4K 🔥` `+31%`
1. [沈月拍出了徐志胜人生照片 (Shen Yue took photos of Xu Zhisheng’s life)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%8B%8D%E5%87%BA%E4%BA%86%E5%BE%90%E5%BF%97%E8%83%9C%E4%BA%BA%E7%94%9F%E7%85%A7%E7%89%87%23) `163.7K 🔥` `+30%`
1. [杨天真坐轮椅出席年会](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E5%9D%90%E8%BD%AE%E6%A4%85%E5%87%BA%E5%B8%AD%E5%B9%B4%E4%BC%9A%23) `93.4K 🔥` `+57%`
1. [数读2025海洋经济公报 (Digital reading of the 2025 Marine Economic Bulletin)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB2025%E6%B5%B7%E6%B4%8B%E7%BB%8F%E6%B5%8E%E5%85%AC%E6%8A%A5%23) `585.9K 🔥`
1. [和热巴共享甄稀美妙时刻 (Share precious and wonderful moments with Reba)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E7%83%AD%E5%B7%B4%E5%85%B1%E4%BA%AB%E7%94%84%E7%A8%80%E7%BE%8E%E5%A6%99%E6%97%B6%E5%88%BB%23) `578.8K 🔥`
1. [老板称5元水饺店每天能赚1千元](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E7%A7%B05%E5%85%83%E6%B0%B4%E9%A5%BA%E5%BA%97%E6%AF%8F%E5%A4%A9%E8%83%BD%E8%B5%9A1%E5%8D%83%E5%85%83%23) `226.0K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `171.6K 🔥`
1. [黄金跌个没完](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E4%B8%AA%E6%B2%A1%E5%AE%8C%23) `151.2K 🔥`
1. [油价 (oil price)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `103.5K 🔥`
1. [吃甜品的漂亮姐姐迪丽热巴](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%94%9C%E5%93%81%E7%9A%84%E6%BC%82%E4%BA%AE%E5%A7%90%E5%A7%90%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `92.3K 🔥`
1. [乐华娱乐报警了](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%E5%A8%B1%E4%B9%90%E6%8A%A5%E8%AD%A6%E4%BA%86%23) `87.1K 🔥`
1. [女子将20万黄金藏豆瓣酱里寄骗子 (Woman hid 200,000 gold in Doubanjiang and sent it to scammers)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%8620%E4%B8%87%E9%BB%84%E9%87%91%E8%97%8F%E8%B1%86%E7%93%A3%E9%85%B1%E9%87%8C%E5%AF%84%E9%AA%97%E5%AD%90%23) `82.1K 🔥`
1. [日本夫妻遗忘30多年的股票翻85倍](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%AB%E5%A6%BB%E9%81%97%E5%BF%9830%E5%A4%9A%E5%B9%B4%E7%9A%84%E8%82%A1%E7%A5%A8%E7%BF%BB85%E5%80%8D%23) `81.1K 🔥`
1. [外交部回应伊朗拉里贾尼遇害 (Ministry of Foreign Affairs responds to the murder of Larijani in Iran)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E4%BC%8A%E6%9C%97%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E9%81%87%E5%AE%B3%23) `79.0K 🔥`
1. [腾讯市值暴跌至4.7万亿港元](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%B8%82%E5%80%BC%E6%9A%B4%E8%B7%8C%E8%87%B34.7%E4%B8%87%E4%BA%BF%E6%B8%AF%E5%85%83%23) `74.6K 🔥`
1. [1岁半宝宝移植术后O型血变为A型](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E5%AE%9D%E5%AE%9D%E7%A7%BB%E6%A4%8D%E6%9C%AF%E5%90%8EO%E5%9E%8B%E8%A1%80%E5%8F%98%E4%B8%BAA%E5%9E%8B%23) `71.3K 🔥`
1. [沉没成本不参与重大决策](https://s.weibo.com/weibo?q=%23%E6%B2%89%E6%B2%A1%E6%88%90%E6%9C%AC%E4%B8%8D%E5%8F%82%E4%B8%8E%E9%87%8D%E5%A4%A7%E5%86%B3%E7%AD%96%23) `63.2K 🔥`
1. [中方对以方说法感到震惊 (China is shocked by Israel’s statement)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AF%B9%E4%BB%A5%E6%96%B9%E8%AF%B4%E6%B3%95%E6%84%9F%E5%88%B0%E9%9C%87%E6%83%8A%23) `209.7K 🔥` `-81%`
1. [路虎别停奔驰致追尾涉刑事案件](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8E%E5%88%AB%E5%81%9C%E5%A5%94%E9%A9%B0%E8%87%B4%E8%BF%BD%E5%B0%BE%E6%B6%89%E5%88%91%E4%BA%8B%E6%A1%88%E4%BB%B6%23) `189.4K 🔥` `-76%`
1. [女子控诉90万全款买房隔夜飙涨10万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8E%A7%E8%AF%8990%E4%B8%87%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E9%9A%94%E5%A4%9C%E9%A3%99%E6%B6%A810%E4%B8%87%23) `115.3K 🔥` `-46%`
1. [胡先煦秒删博](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%A7%92%E5%88%A0%E5%8D%9A%23) `93.7K 🔥` `-25%`
1. [睡觉前才刷牙是错误的 (It is wrong to brush your teeth before going to bed)](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E5%89%8D%E6%89%8D%E5%88%B7%E7%89%99%E6%98%AF%E9%94%99%E8%AF%AF%E7%9A%84%23) `93.2K 🔥` `-26%`
1. [网传张凌赫张雅钦主演刺棠](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BC%A0%E9%9B%85%E9%92%A6%E4%B8%BB%E6%BC%94%E5%88%BA%E6%A3%A0%23) `92.8K 🔥` `-21%`
1. [伊朗发动第63波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E7%AC%AC63%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `92.6K 🔥` `-26%`
1. [疑似胡歌初恋女友发文 (Suspected to be Hu Ge’s first love girlfriend’s post)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E8%83%A1%E6%AD%8C%E5%88%9D%E6%81%8B%E5%A5%B3%E5%8F%8B%E5%8F%91%E6%96%87%23) `92.2K 🔥` `-26%`
1. [宇树王兴兴现身小米发布会 (Yushu Wang Xingxing appeared at Xiaomi press conference)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%8E%8B%E5%85%B4%E5%85%B4%E7%8E%B0%E8%BA%AB%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `89.9K 🔥` `-28%`
1. [涉密人员婚假擅自出境被通报批评 (Secret personnel were notified and criticized for leaving the country without permission during marriage leave)](https://s.weibo.com/weibo?q=%23%E6%B6%89%E5%AF%86%E4%BA%BA%E5%91%98%E5%A9%9A%E5%81%87%E6%93%85%E8%87%AA%E5%87%BA%E5%A2%83%E8%A2%AB%E9%80%9A%E6%8A%A5%E6%89%B9%E8%AF%84%23) `80.6K 🔥` `-36%`
1. [北大毕业男子仅送外卖一天](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%AF%95%E4%B8%9A%E7%94%B7%E5%AD%90%E4%BB%85%E9%80%81%E5%A4%96%E5%8D%96%E4%B8%80%E5%A4%A9%23) `79.9K 🔥` `-37%`

Updated at 2026-03-19 19:49:52

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
