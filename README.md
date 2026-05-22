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

1. [歌手直播 (Singer live broadcast)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `5.4M 🔥` `NEW`
1. [惊鸿一面](https://s.weibo.com/weibo?q=%23%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%23) `3.5M 🔥` `NEW`
1. [神舟二十三号已做好发射前各项准备](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E4%B8%89%E5%8F%B7%E5%B7%B2%E5%81%9A%E5%A5%BD%E5%8F%91%E5%B0%84%E5%89%8D%E5%90%84%E9%A1%B9%E5%87%86%E5%A4%87%23) `1.5M 🔥` `NEW`
1. [胡彦斌破音](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E7%A0%B4%E9%9F%B3%23) `1.2M 🔥` `NEW`
1. [我年龄大到能看懂这张图](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B9%B4%E9%BE%84%E5%A4%A7%E5%88%B0%E8%83%BD%E7%9C%8B%E6%87%82%E8%BF%99%E5%BC%A0%E5%9B%BE%23) `587.6K 🔥` `NEW`
1. [摊贩向西瓜涂抹的液体检测是水](https://s.weibo.com/weibo?q=%23%E6%91%8A%E8%B4%A9%E5%90%91%E8%A5%BF%E7%93%9C%E6%B6%82%E6%8A%B9%E7%9A%84%E6%B6%B2%E4%BD%93%E6%A3%80%E6%B5%8B%E6%98%AF%E6%B0%B4%23) `585.0K 🔥` `NEW`
1. [歌手2026没白等一年](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E6%B2%A1%E7%99%BD%E7%AD%89%E4%B8%80%E5%B9%B4%23) `584.4K 🔥` `NEW`
1. [上班不会为工位花一分钱](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E4%B8%8D%E4%BC%9A%E4%B8%BA%E5%B7%A5%E4%BD%8D%E8%8A%B1%E4%B8%80%E5%88%86%E9%92%B1%23) `584.2K 🔥` `NEW`
1. [金闪闪](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%97%AA%E9%97%AA%23) `574.8K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `573.6K 🔥` `NEW`
1. [尤长靖把我唱哭了 (You Changjing made me cry while singing)](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E6%8A%8A%E6%88%91%E5%94%B1%E5%93%AD%E4%BA%86%23) `568.7K 🔥` `NEW`
1. [惊鸿一面 夯](https://s.weibo.com/weibo?q=%23%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%20%E5%A4%AF%23) `564.6K 🔥` `NEW`
1. [iPhone17系列降价后销量](https://s.weibo.com/weibo?q=%23iPhone17%E7%B3%BB%E5%88%97%E9%99%8D%E4%BB%B7%E5%90%8E%E9%94%80%E9%87%8F%23) `560.0K 🔥` `NEW`
1. [你曾是少年 听哭了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%9B%BE%E6%98%AF%E5%B0%91%E5%B9%B4%20%E5%90%AC%E5%93%AD%E4%BA%86%23) `559.1K 🔥` `NEW`
1. [大爷穿着自己编织的蓑衣卖樱桃](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E7%A9%BF%E7%9D%80%E8%87%AA%E5%B7%B1%E7%BC%96%E7%BB%87%E7%9A%84%E8%93%91%E8%A1%A3%E5%8D%96%E6%A8%B1%E6%A1%83%23) `556.7K 🔥` `NEW`
1. [大张伟99秒换电初体验](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%BC%A0%E4%BC%9F99%E7%A7%92%E6%8D%A2%E7%94%B5%E5%88%9D%E4%BD%93%E9%AA%8C%23) `551.7K 🔥` `NEW`
1. [太子集团陈志幕后大佬身份揭秘](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%AD%90%E9%9B%86%E5%9B%A2%E9%99%88%E5%BF%97%E5%B9%95%E5%90%8E%E5%A4%A7%E4%BD%AC%E8%BA%AB%E4%BB%BD%E6%8F%AD%E7%A7%98%23) `550.5K 🔥` `NEW`
1. [麦浪听得我好刺挠](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E6%B5%AA%E5%90%AC%E5%BE%97%E6%88%91%E5%A5%BD%E5%88%BA%E6%8C%A0%23) `543.3K 🔥` `NEW`
1. [胡彦斌你让我哭](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E4%BD%A0%E8%AE%A9%E6%88%91%E5%93%AD%23) `537.1K 🔥` `NEW`
1. [小猫臂力惊人 肚肚逼人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%87%82%E5%8A%9B%E6%83%8A%E4%BA%BA%20%E8%82%9A%E8%82%9A%E9%80%BC%E4%BA%BA%23) `534.2K 🔥` `NEW`
1. [江语晨又忘词了 (Jiang Yuchen forgot the lyrics again)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%8F%88%E5%BF%98%E8%AF%8D%E4%BA%86%23) `530.1K 🔥` `NEW`
1. [歌手 收音](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E6%94%B6%E9%9F%B3%23) `528.0K 🔥` `NEW`
1. [美军将在日本部署堤丰中导系统](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%B0%86%E5%9C%A8%E6%97%A5%E6%9C%AC%E9%83%A8%E7%BD%B2%E5%A0%A4%E4%B8%B0%E4%B8%AD%E5%AF%BC%E7%B3%BB%E7%BB%9F%23) `522.5K 🔥` `NEW`
1. [美退役海军中将受访画面引争议](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%80%80%E5%BD%B9%E6%B5%B7%E5%86%9B%E4%B8%AD%E5%B0%86%E5%8F%97%E8%AE%BF%E7%94%BB%E9%9D%A2%E5%BC%95%E4%BA%89%E8%AE%AE%23) `520.2K 🔥` `NEW`
1. [井胧井迪龙凤胎姐弟相拥惹热议](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%83%A7%E4%BA%95%E8%BF%AA%E9%BE%99%E5%87%A4%E8%83%8E%E5%A7%90%E5%BC%9F%E7%9B%B8%E6%8B%A5%E6%83%B9%E7%83%AD%E8%AE%AE%23) `515.3K 🔥` `NEW`
1. [瓜迪奥拉确认离开曼城](https://s.weibo.com/weibo?q=%23%E7%93%9C%E8%BF%AA%E5%A5%A5%E6%8B%89%E7%A1%AE%E8%AE%A4%E7%A6%BB%E5%BC%80%E6%9B%BC%E5%9F%8E%23) `511.4K 🔥` `NEW`
1. [魏如萱太稳了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E5%A4%AA%E7%A8%B3%E4%BA%86%23) `508.6K 🔥` `NEW`
1. [歌手开场十季歌王](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%BC%80%E5%9C%BA%E5%8D%81%E5%AD%A3%E6%AD%8C%E7%8E%8B%23) `505.0K 🔥` `NEW`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `500.1K 🔥` `NEW`
1. [歌手赛前视死如归的表情](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%B5%9B%E5%89%8D%E8%A7%86%E6%AD%BB%E5%A6%82%E5%BD%92%E7%9A%84%E8%A1%A8%E6%83%85%23) `498.0K 🔥` `NEW`
1. [徐若晗回应不理方媛 (Xu Ruohan responded by ignoring Fang Yuan)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E5%9B%9E%E5%BA%94%E4%B8%8D%E7%90%86%E6%96%B9%E5%AA%9B%23) `471.7K 🔥` `NEW`
1. [美国18岁少女遭生父性侵后自杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD18%E5%B2%81%E5%B0%91%E5%A5%B3%E9%81%AD%E7%94%9F%E7%88%B6%E6%80%A7%E4%BE%B5%E5%90%8E%E8%87%AA%E6%9D%80%23) `467.7K 🔥` `NEW`
1. [CBA](https://s.weibo.com/weibo?q=%23CBA%23) `464.0K 🔥` `NEW`
1. [小米YU7GT首发评测 (Xiaomi YU7GT first review)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23) `1.4M 🔥` `+133%`
1. [泰国长公主昏迷近3年半后病情恶化](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%95%BF%E5%85%AC%E4%B8%BB%E6%98%8F%E8%BF%B7%E8%BF%913%E5%B9%B4%E5%8D%8A%E5%90%8E%E7%97%85%E6%83%85%E6%81%B6%E5%8C%96%23) `581.9K 🔥` `+64%`
1. [伦敦世乒赛46名选手不败](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B46%E5%90%8D%E9%80%89%E6%89%8B%E4%B8%8D%E8%B4%A5%23) `577.8K 🔥` `+62%`
1. [丈夫高调宣布出轨有私生子妻子崩溃](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E9%AB%98%E8%B0%83%E5%AE%A3%E5%B8%83%E5%87%BA%E8%BD%A8%E6%9C%89%E7%A7%81%E7%94%9F%E5%AD%90%E5%A6%BB%E5%AD%90%E5%B4%A9%E6%BA%83%23) `566.9K 🔥` `+61%`
1. [井胧背后抱井迪](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%83%A7%E8%83%8C%E5%90%8E%E6%8A%B1%E4%BA%95%E8%BF%AA%23) `547.5K 🔥` `+65%`
1. [突然理解自己为什么会高物欲了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E9%AB%98%E7%89%A9%E6%AC%B2%E4%BA%86%23) `541.0K 🔥` `+59%`
1. [雪莉哥哥向金秀贤宣战](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E8%8E%89%E5%93%A5%E5%93%A5%E5%90%91%E9%87%91%E7%A7%80%E8%B4%A4%E5%AE%A3%E6%88%98%23) `540.1K 🔥` `+54%`
1. [iPhone哪个材质手感最好](https://s.weibo.com/weibo?q=%23iPhone%E5%93%AA%E4%B8%AA%E6%9D%90%E8%B4%A8%E6%89%8B%E6%84%9F%E6%9C%80%E5%A5%BD%23) `514.2K 🔥` `+52%`
1. [年轻人开始全款买房意味着什么 (What does it mean for young people to start buying houses with full payment?)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `503.8K 🔥` `+53%`
1. [朱珠说刘亦菲选择朋友很小心 (Zhu Zhu said Liu Yifei is very careful in choosing friends)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E8%AF%B4%E5%88%98%E4%BA%A6%E8%8F%B2%E9%80%89%E6%8B%A9%E6%9C%8B%E5%8F%8B%E5%BE%88%E5%B0%8F%E5%BF%83%23) `490.3K 🔥` `+43%`
1. [曝杨幂已提名白玉兰最佳女主角](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E5%B9%82%E5%B7%B2%E6%8F%90%E5%90%8D%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%23) `490.0K 🔥` `+46%`
1. [一小伙儿爆砸充电完不走车辆](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%8F%E4%BC%99%E5%84%BF%E7%88%86%E7%A0%B8%E5%85%85%E7%94%B5%E5%AE%8C%E4%B8%8D%E8%B5%B0%E8%BD%A6%E8%BE%86%23) `485.3K 🔥` `+55%`
1. [方媛哭了](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%93%AD%E4%BA%86%23) `483.5K 🔥` `+45%`
1. [景甜曾自曝比起结婚更想生帅儿子](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E6%9B%BE%E8%87%AA%E6%9B%9D%E6%AF%94%E8%B5%B7%E7%BB%93%E5%A9%9A%E6%9B%B4%E6%83%B3%E7%94%9F%E5%B8%85%E5%84%BF%E5%AD%90%23) `479.1K 🔥` `+55%`
1. [证监会](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%23) `478.7K 🔥` `+37%`
1. [短剧 一万播放五块钱](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E4%B8%80%E4%B8%87%E6%92%AD%E6%94%BE%E4%BA%94%E5%9D%97%E9%92%B1%23) `474.9K 🔥` `+38%`
1. [不同姓氏却是最爱彼此的人](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%8C%E5%A7%93%E6%B0%8F%E5%8D%B4%E6%98%AF%E6%9C%80%E7%88%B1%E5%BD%BC%E6%AD%A4%E7%9A%84%E4%BA%BA%23) `467.1K 🔥` `+58%`
1. [晚上一定要拉窗帘](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E4%B8%80%E5%AE%9A%E8%A6%81%E6%8B%89%E7%AA%97%E5%B8%98%23) `493.7K 🔥`
1. [女子捡到金项链发现异常立马扔掉 (A woman picked up a gold necklace and threw it away immediately after noticing something strange.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8D%A1%E5%88%B0%E9%87%91%E9%A1%B9%E9%93%BE%E5%8F%91%E7%8E%B0%E5%BC%82%E5%B8%B8%E7%AB%8B%E9%A9%AC%E6%89%94%E6%8E%89%23) `526.0K 🔥` `-52%`

Updated at 2026-05-22 21:37:58

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
