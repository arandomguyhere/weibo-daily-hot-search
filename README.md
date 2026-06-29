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

1. [恋与深空回应争议 (Love and Deep Space Responds to Controversy)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `6.7M 🔥` `NEW`
1. [马航MH370传来最新消息](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E8%88%AAMH370%E4%BC%A0%E6%9D%A5%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF%23) `2.4M 🔥` `NEW`
1. [杨某诋毁袁隆平院士科研成果被刑拘](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%9F%90%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%E9%99%A2%E5%A3%AB%E7%A7%91%E7%A0%94%E6%88%90%E6%9E%9C%E8%A2%AB%E5%88%91%E6%8B%98%23) `1.9M 🔥` `NEW`
1. [杨紫获白玉兰视后为何争议难平](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8E%B7%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E4%B8%BA%E4%BD%95%E4%BA%89%E8%AE%AE%E9%9A%BE%E5%B9%B3%23) `695.5K 🔥` `NEW`
1. [大神解巴西战日本谜题](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%A5%9E%E8%A7%A3%E5%B7%B4%E8%A5%BF%E6%88%98%E6%97%A5%E6%9C%AC%E8%B0%9C%E9%A2%98%23) `673.7K 🔥` `NEW`
1. [檀健次王楚然吻戏看热了](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%90%BB%E6%88%8F%E7%9C%8B%E7%83%AD%E4%BA%86%23) `615.0K 🔥` `NEW`
1. [詹姆斯 勇士](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%20%E5%8B%87%E5%A3%AB%23) `611.6K 🔥` `NEW`
1. [怕iPhone涨价的用户已紧急换新](https://s.weibo.com/weibo?q=%23%E6%80%95iPhone%E6%B6%A8%E4%BB%B7%E7%9A%84%E7%94%A8%E6%88%B7%E5%B7%B2%E7%B4%A7%E6%80%A5%E6%8D%A2%E6%96%B0%23) `309.1K 🔥` `NEW`
1. [杨紫被质疑未使用原名](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%A2%AB%E8%B4%A8%E7%96%91%E6%9C%AA%E4%BD%BF%E7%94%A8%E5%8E%9F%E5%90%8D%23) `308.2K 🔥` `NEW`
1. [81岁老人被男子买光菜回家车祸去世](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E8%80%81%E4%BA%BA%E8%A2%AB%E7%94%B7%E5%AD%90%E4%B9%B0%E5%85%89%E8%8F%9C%E5%9B%9E%E5%AE%B6%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `307.4K 🔥` `NEW`
1. [关晓彤一路小跑迎接爸爸探班 (Guan Xiaotong jogs all the way to welcome her father to visit the class)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%80%E8%B7%AF%E5%B0%8F%E8%B7%91%E8%BF%8E%E6%8E%A5%E7%88%B8%E7%88%B8%E6%8E%A2%E7%8F%AD%23) `306.1K 🔥` `NEW`
1. [恋与深空已删除锅里洗澡文案](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%B7%B2%E5%88%A0%E9%99%A4%E9%94%85%E9%87%8C%E6%B4%97%E6%BE%A1%E6%96%87%E6%A1%88%23) `303.5K 🔥` `NEW`
1. [张凌赫 客串](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E5%AE%A2%E4%B8%B2%23) `302.7K 🔥` `NEW`
1. [老人卖菜获博主帮助后遇车祸去世](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%8D%96%E8%8F%9C%E8%8E%B7%E5%8D%9A%E4%B8%BB%E5%B8%AE%E5%8A%A9%E5%90%8E%E9%81%87%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `299.9K 🔥` `NEW`
1. [李在明向韩国两大财阀90度鞠躬](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%90%91%E9%9F%A9%E5%9B%BD%E4%B8%A4%E5%A4%A7%E8%B4%A2%E9%98%8090%E5%BA%A6%E9%9E%A0%E8%BA%AC%23) `299.0K 🔥` `NEW`
1. [蔚来车主罚站](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E8%BD%A6%E4%B8%BB%E7%BD%9A%E7%AB%99%23) `298.0K 🔥` `NEW`
1. [张月感谢了每一公的队友](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%84%9F%E8%B0%A2%E4%BA%86%E6%AF%8F%E4%B8%80%E5%85%AC%E7%9A%84%E9%98%9F%E5%8F%8B%23) `295.0K 🔥` `NEW`
1. [科学备孕男女都要上心](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E5%A4%87%E5%AD%95%E7%94%B7%E5%A5%B3%E9%83%BD%E8%A6%81%E4%B8%8A%E5%BF%83%23) `294.2K 🔥` `NEW`
1. [领克07GT搭载超跑同源MRC悬架](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07GT%E6%90%AD%E8%BD%BD%E8%B6%85%E8%B7%91%E5%90%8C%E6%BA%90MRC%E6%82%AC%E6%9E%B6%23) `293.4K 🔥` `NEW`
1. [中国网友锐评韩国队外网爆火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BD%91%E5%8F%8B%E9%94%90%E8%AF%84%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%23) `292.5K 🔥` `NEW`
1. [贺峻霖拎着爱马仕回国了 (He Junlin returned to China with Hermès)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%8B%8E%E7%9D%80%E7%88%B1%E9%A9%AC%E4%BB%95%E5%9B%9E%E5%9B%BD%E4%BA%86%23) `289.4K 🔥` `NEW`
1. [TOP不是Prada全球普通人](https://s.weibo.com/weibo?q=%23TOP%E4%B8%8D%E6%98%AFPrada%E5%85%A8%E7%90%83%E6%99%AE%E9%80%9A%E4%BA%BA%23) `267.9K 🔥` `NEW`
1. [法国小学众筹装空调后市长下令拆除](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%B0%8F%E5%AD%A6%E4%BC%97%E7%AD%B9%E8%A3%85%E7%A9%BA%E8%B0%83%E5%90%8E%E5%B8%82%E9%95%BF%E4%B8%8B%E4%BB%A4%E6%8B%86%E9%99%A4%23) `267.3K 🔥` `NEW`
1. [赵丽颖风吹半夏含金量还在上升](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%A3%8E%E5%90%B9%E5%8D%8A%E5%A4%8F%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `266.8K 🔥` `NEW`
1. [中国再对日本出重拳](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%8D%E5%AF%B9%E6%97%A5%E6%9C%AC%E5%87%BA%E9%87%8D%E6%8B%B3%23) `265.5K 🔥` `NEW`
1. [格力遥控器里有黄金](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E5%8A%9B%E9%81%A5%E6%8E%A7%E5%99%A8%E9%87%8C%E6%9C%89%E9%BB%84%E9%87%91%23) `265.2K 🔥` `NEW`
1. [强制戒网瘾起诉父亲](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%88%B6%E6%88%92%E7%BD%91%E7%98%BE%E8%B5%B7%E8%AF%89%E7%88%B6%E4%BA%B2%23) `264.0K 🔥` `NEW`
1. [恋与深空 日服](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E6%97%A5%E6%9C%8D%23) `263.1K 🔥` `NEW`
1. [恋与深空 巧合](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E5%B7%A7%E5%90%88%23) `263.0K 🔥` `NEW`
1. [姜妍走过来这段刘梅下班了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E8%B5%B0%E8%BF%87%E6%9D%A5%E8%BF%99%E6%AE%B5%E5%88%98%E6%A2%85%E4%B8%8B%E7%8F%AD%E4%BA%86%23) `262.2K 🔥` `NEW`
1. [刘念回应 (Liu Nian responded)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BF%B5%E5%9B%9E%E5%BA%94%23) `246.8K 🔥` `NEW`
1. [足球小将的剧本成真了](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E7%9A%84%E5%89%A7%E6%9C%AC%E6%88%90%E7%9C%9F%E4%BA%86%23) `242.5K 🔥` `NEW`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `238.5K 🔥` `NEW`
1. [英语考了145的人竟然教数学](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E8%80%83%E4%BA%86145%E7%9A%84%E4%BA%BA%E7%AB%9F%E7%84%B6%E6%95%99%E6%95%B0%E5%AD%A6%23) `235.6K 🔥` `NEW`
1. [全网说丑的玫瑰空调卖了5万台](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E8%AF%B4%E4%B8%91%E7%9A%84%E7%8E%AB%E7%91%B0%E7%A9%BA%E8%B0%83%E5%8D%96%E4%BA%865%E4%B8%87%E5%8F%B0%23) `231.6K 🔥` `NEW`
1. [同样是装空调差别怎么能这么大](https://s.weibo.com/weibo?q=%23%E5%90%8C%E6%A0%B7%E6%98%AF%E8%A3%85%E7%A9%BA%E8%B0%83%E5%B7%AE%E5%88%AB%E6%80%8E%E4%B9%88%E8%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%23) `228.3K 🔥` `NEW`
1. [85花告别古偶](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%E5%91%8A%E5%88%AB%E5%8F%A4%E5%81%B6%23) `228.2K 🔥` `NEW`
1. [周杰伦的歌勾起25年友情](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E6%AD%8C%E5%8B%BE%E8%B5%B725%E5%B9%B4%E5%8F%8B%E6%83%85%23) `193.9K 🔥` `NEW`
1. [张碧晨最佳女歌手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%9C%80%E4%BD%B3%E5%A5%B3%E6%AD%8C%E6%89%8B%23) `193.9K 🔥` `NEW`
1. [巴西若输日本将创36年最差纪录](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E8%8B%A5%E8%BE%93%E6%97%A5%E6%9C%AC%E5%B0%86%E5%88%9B36%E5%B9%B4%E6%9C%80%E5%B7%AE%E7%BA%AA%E5%BD%95%23) `192.0K 🔥` `NEW`
1. [李准基参加文彩元婚礼 (Lee Joon Ki attends Moon Chae Won's wedding)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%87%86%E5%9F%BA%E5%8F%82%E5%8A%A0%E6%96%87%E5%BD%A9%E5%85%83%E5%A9%9A%E7%A4%BC%23) `191.6K 🔥` `NEW`
1. [爱直接对嘴喝饮料的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%9B%B4%E6%8E%A5%E5%AF%B9%E5%98%B4%E5%96%9D%E9%A5%AE%E6%96%99%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `1.7M 🔥` `+189%`
1. [一直以为方便面汤是要倒掉的](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E6%96%B9%E4%BE%BF%E9%9D%A2%E6%B1%A4%E6%98%AF%E8%A6%81%E5%80%92%E6%8E%89%E7%9A%84%23) `829.5K 🔥` `+46%`
1. [主人解开狗绳2只狗将路人撕咬致死](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E8%A7%A3%E5%BC%80%E7%8B%97%E7%BB%B32%E5%8F%AA%E7%8B%97%E5%B0%86%E8%B7%AF%E4%BA%BA%E6%92%95%E5%92%AC%E8%87%B4%E6%AD%BB%23) `523.9K 🔥` `+129%`
1. [曝娱乐圈大部分明星失业](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A8%B1%E4%B9%90%E5%9C%88%E5%A4%A7%E9%83%A8%E5%88%86%E6%98%8E%E6%98%9F%E5%A4%B1%E4%B8%9A%23) `296.5K 🔥` `+31%`
1. [当我知道豆包有后台审核人员](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E7%9F%A5%E9%81%93%E8%B1%86%E5%8C%85%E6%9C%89%E5%90%8E%E5%8F%B0%E5%AE%A1%E6%A0%B8%E4%BA%BA%E5%91%98%23) `304.8K 🔥`
1. [董卿母亲癌症去世](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8D%BF%E6%AF%8D%E4%BA%B2%E7%99%8C%E7%97%87%E5%8E%BB%E4%B8%96%23) `301.7K 🔥`
1. [女子螺蛳粉摊吃出蛇](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%9E%BA%E8%9B%B3%E7%B2%89%E6%91%8A%E5%90%83%E5%87%BA%E8%9B%87%23) `230.7K 🔥`
1. [刘宇宁胸肌腹肌全给看了 (Liu Yuning’s chest and abdominal muscles were all shown)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%83%B8%E8%82%8C%E8%85%B9%E8%82%8C%E5%85%A8%E7%BB%99%E7%9C%8B%E4%BA%86%23) `206.3K 🔥`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `228.9K 🔥` `-59%`
1. [法国部长说装空调没用](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%83%A8%E9%95%BF%E8%AF%B4%E8%A3%85%E7%A9%BA%E8%B0%83%E6%B2%A1%E7%94%A8%23) `193.9K 🔥` `-26%`

Updated at 2026-06-29 23:02:20

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
