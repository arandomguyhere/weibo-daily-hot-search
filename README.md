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

1. [男二以下 AI演员 (AI actors below male 2)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%BA%8C%E4%BB%A5%E4%B8%8B%20AI%E6%BC%94%E5%91%98%23) `1.5M 🔥` `NEW`
1. [毛宁向世界分享中国学生午睡神器](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%AE%81%E5%90%91%E4%B8%96%E7%95%8C%E5%88%86%E4%BA%AB%E4%B8%AD%E5%9B%BD%E5%AD%A6%E7%94%9F%E5%8D%88%E7%9D%A1%E7%A5%9E%E5%99%A8%23) `319.4K 🔥` `NEW`
1. [谢征吻完眼里不是欲望是恐慌](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E5%90%BB%E5%AE%8C%E7%9C%BC%E9%87%8C%E4%B8%8D%E6%98%AF%E6%AC%B2%E6%9C%9B%E6%98%AF%E6%81%90%E6%85%8C%23) `246.9K 🔥` `NEW`
1. [伊朗总统誓言要为拉里贾尼复仇](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AA%93%E8%A8%80%E8%A6%81%E4%B8%BA%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E5%A4%8D%E4%BB%87%23) `224.3K 🔥` `NEW`
1. [逐玉 秦良玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E7%A7%A6%E8%89%AF%E7%8E%89%23) `175.0K 🔥` `NEW`
1. [利他性表达](https://s.weibo.com/weibo?q=%23%E5%88%A9%E4%BB%96%E6%80%A7%E8%A1%A8%E8%BE%BE%23) `153.9K 🔥` `NEW`
1. [iPhone18将首次启用三星相机](https://s.weibo.com/weibo?q=%23iPhone18%E5%B0%86%E9%A6%96%E6%AC%A1%E5%90%AF%E7%94%A8%E4%B8%89%E6%98%9F%E7%9B%B8%E6%9C%BA%23) `152.6K 🔥` `NEW`
1. [瞿颖回应已婚](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E5%9B%9E%E5%BA%94%E5%B7%B2%E5%A9%9A%23) `152.3K 🔥` `NEW`
1. [卫生巾该不该和热水一样成列车标配](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E8%AF%A5%E4%B8%8D%E8%AF%A5%E5%92%8C%E7%83%AD%E6%B0%B4%E4%B8%80%E6%A0%B7%E6%88%90%E5%88%97%E8%BD%A6%E6%A0%87%E9%85%8D%23) `150.1K 🔥` `NEW`
1. [章昊 新男团](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%98%8A%20%E6%96%B0%E7%94%B7%E5%9B%A2%23) `149.1K 🔥` `NEW`
1. [库克宣布苹果在华节水550亿升 (Cook announces Apple will save 55 billion liters of water in China)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E5%AE%A3%E5%B8%83%E8%8B%B9%E6%9E%9C%E5%9C%A8%E5%8D%8E%E8%8A%82%E6%B0%B4550%E4%BA%BF%E5%8D%87%23) `147.5K 🔥` `NEW`
1. [papi酱的热烈欢迎](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E7%9A%84%E7%83%AD%E7%83%88%E6%AC%A2%E8%BF%8E%23) `147.4K 🔥` `NEW`
1. [桃晚安 低保](https://s.weibo.com/weibo?q=%23%E6%A1%83%E6%99%9A%E5%AE%89%20%E4%BD%8E%E4%BF%9D%23) `135.0K 🔥` `NEW`
1. [曝小S哭着去陈建州范玮琪家](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8FS%E5%93%AD%E7%9D%80%E5%8E%BB%E9%99%88%E5%BB%BA%E5%B7%9E%E8%8C%83%E7%8E%AE%E7%90%AA%E5%AE%B6%23) `130.8K 🔥` `NEW`
1. [伊朗称敌方击中布什尔核电站厂区](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%95%8C%E6%96%B9%E5%87%BB%E4%B8%AD%E5%B8%83%E4%BB%80%E5%B0%94%E6%A0%B8%E7%94%B5%E7%AB%99%E5%8E%82%E5%8C%BA%23) `128.3K 🔥` `NEW`
1. [曝去年热播剧男女主恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8E%BB%E5%B9%B4%E7%83%AD%E6%92%AD%E5%89%A7%E7%94%B7%E5%A5%B3%E4%B8%BB%E6%81%8B%E6%83%85%23) `125.2K 🔥` `NEW`
1. [村民挖出长指甲盖的手掌山药](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E6%8C%96%E5%87%BA%E9%95%BF%E6%8C%87%E7%94%B2%E7%9B%96%E7%9A%84%E6%89%8B%E6%8E%8C%E5%B1%B1%E8%8D%AF%23) `121.8K 🔥` `NEW`
1. [小S街头大哭](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E8%A1%97%E5%A4%B4%E5%A4%A7%E5%93%AD%23) `121.7K 🔥` `NEW`
1. [当犟种养了另一个犟种](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%8A%9F%E7%A7%8D%E5%85%BB%E4%BA%86%E5%8F%A6%E4%B8%80%E4%B8%AA%E7%8A%9F%E7%A7%8D%23) `121.4K 🔥` `NEW`
1. [小米超强钢获得国家级科技一等奖](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B6%85%E5%BC%BA%E9%92%A2%E8%8E%B7%E5%BE%97%E5%9B%BD%E5%AE%B6%E7%BA%A7%E7%A7%91%E6%8A%80%E4%B8%80%E7%AD%89%E5%A5%96%23) `120.4K 🔥` `NEW`
1. [美军称用多枚5000磅钻地弹打击伊朗 (US military says it used multiple 5,000-pound ground-penetrating bombs to hit Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A7%B0%E7%94%A8%E5%A4%9A%E6%9E%9A5000%E7%A3%85%E9%92%BB%E5%9C%B0%E5%BC%B9%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%23) `117.9K 🔥` `NEW`
1. [游客在壶口瀑布外拍视频被投诉侵权](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%9C%A8%E5%A3%B6%E5%8F%A3%E7%80%91%E5%B8%83%E5%A4%96%E6%8B%8D%E8%A7%86%E9%A2%91%E8%A2%AB%E6%8A%95%E8%AF%89%E4%BE%B5%E6%9D%83%23) `117.7K 🔥` `NEW`
1. [8种情况建议查查幽门螺杆菌](https://s.weibo.com/weibo?q=%238%E7%A7%8D%E6%83%85%E5%86%B5%E5%BB%BA%E8%AE%AE%E6%9F%A5%E6%9F%A5%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%23) `117.7K 🔥` `NEW`
1. [科大讯飞回应大幅裁员](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%9B%9E%E5%BA%94%E5%A4%A7%E5%B9%85%E8%A3%81%E5%91%98%23) `116.6K 🔥` `NEW`
1. [香蕉真的会灭绝吗](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E7%9C%9F%E7%9A%84%E4%BC%9A%E7%81%AD%E7%BB%9D%E5%90%97%23) `114.6K 🔥` `NEW`
1. [翟潇闻回复姜妍](https://s.weibo.com/weibo?q=%23%E7%BF%9F%E6%BD%87%E9%97%BB%E5%9B%9E%E5%A4%8D%E5%A7%9C%E5%A6%8D%23) `107.3K 🔥` `NEW`
1. [长剧 压预算](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%89%A7%20%E5%8E%8B%E9%A2%84%E7%AE%97%23) `106.5K 🔥` `NEW`
1. [女子买床尺寸不合退定金遭拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E5%BA%8A%E5%B0%BA%E5%AF%B8%E4%B8%8D%E5%90%88%E9%80%80%E5%AE%9A%E9%87%91%E9%81%AD%E6%8B%92%23) `106.1K 🔥` `NEW`
1. [胡兵回应和瞿颖被北京大爷催发喜糖](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%B5%E5%9B%9E%E5%BA%94%E5%92%8C%E7%9E%BF%E9%A2%96%E8%A2%AB%E5%8C%97%E4%BA%AC%E5%A4%A7%E7%88%B7%E5%82%AC%E5%8F%91%E5%96%9C%E7%B3%96%23) `105.1K 🔥` `NEW`
1. [你好1983好争气](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E5%A5%BD%E4%BA%89%E6%B0%94%23) `101.0K 🔥` `NEW`
1. [女子投保两年半后确诊患癌遭拒赔 (Woman was diagnosed with cancer two and a half years after taking out insurance but was denied compensation)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%95%E4%BF%9D%E4%B8%A4%E5%B9%B4%E5%8D%8A%E5%90%8E%E7%A1%AE%E8%AF%8A%E6%82%A3%E7%99%8C%E9%81%AD%E6%8B%92%E8%B5%94%23) `99.3K 🔥` `NEW`
1. [以色列中部遭伊朗导弹袭击2人死](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%AD%E9%83%A8%E9%81%AD%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB2%E4%BA%BA%E6%AD%BB%23) `97.7K 🔥` `NEW`
1. [JDG最快BO5落败记录](https://s.weibo.com/weibo?q=%23JDG%E6%9C%80%E5%BF%ABBO5%E8%90%BD%E8%B4%A5%E8%AE%B0%E5%BD%95%23) `97.4K 🔥` `NEW`
1. [有友鸡爪检验结果声明](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%8F%8B%E9%B8%A1%E7%88%AA%E6%A3%80%E9%AA%8C%E7%BB%93%E6%9E%9C%E5%A3%B0%E6%98%8E%23) `90.9K 🔥` `NEW`
1. [美国一海滩人群被水瓶破裂声吓跑](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%B5%B7%E6%BB%A9%E4%BA%BA%E7%BE%A4%E8%A2%AB%E6%B0%B4%E7%93%B6%E7%A0%B4%E8%A3%82%E5%A3%B0%E5%90%93%E8%B7%91%23) `83.8K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `83.4K 🔥` `NEW`
1. [月底加一箱油或多花超100元](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%BA%95%E5%8A%A0%E4%B8%80%E7%AE%B1%E6%B2%B9%E6%88%96%E5%A4%9A%E8%8A%B1%E8%B6%85100%E5%85%83%23) `82.2K 🔥` `NEW`
1. [抗癌女孩小费同学去世年仅21岁](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E5%A5%B3%E5%AD%A9%E5%B0%8F%E8%B4%B9%E5%90%8C%E5%AD%A6%E5%8E%BB%E4%B8%96%E5%B9%B4%E4%BB%8521%E5%B2%81%23) `79.3K 🔥` `NEW`
1. [特斯拉称ModelY连续三年成全球销冠](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E7%A7%B0ModelY%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%B9%B4%E6%88%90%E5%85%A8%E7%90%83%E9%94%80%E5%86%A0%23) `78.2K 🔥` `NEW`
1. [网传王玉雯邓凯演小巷人家2](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%8E%8B%E7%8E%89%E9%9B%AF%E9%82%93%E5%87%AF%E6%BC%94%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%23) `77.9K 🔥` `NEW`
1. [樊振东也练上左手了 (Fan Zhendong has also practiced his left hand)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B9%9F%E7%BB%83%E4%B8%8A%E5%B7%A6%E6%89%8B%E4%BA%86%23) `77.6K 🔥` `NEW`
1. [美国几乎每天都公开威胁要颠覆古巴](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%87%A0%E4%B9%8E%E6%AF%8F%E5%A4%A9%E9%83%BD%E5%85%AC%E5%BC%80%E5%A8%81%E8%83%81%E8%A6%81%E9%A2%A0%E8%A6%86%E5%8F%A4%E5%B7%B4%23) `76.2K 🔥` `NEW`
1. [微信能折叠发图了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E6%8A%98%E5%8F%A0%E5%8F%91%E5%9B%BE%E4%BA%86%23) `877.7K 🔥` `+222%`
1. [京东大内存手机限时特惠5折抄底 (JD.com offers 50% off on large-memory mobile phones for a limited time)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%A4%A7%E5%86%85%E5%AD%98%E6%89%8B%E6%9C%BA%E9%99%90%E6%97%B6%E7%89%B9%E6%83%A05%E6%8A%98%E6%8A%84%E5%BA%95%23) `402.6K 🔥` `+1427%`
1. [倪妮拥抱曼妮芬 (Ni Ni hugs Manifen)](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E6%8B%A5%E6%8A%B1%E6%9B%BC%E5%A6%AE%E8%8A%AC%23) `189.8K 🔥` `+265%`
1. [健身房倒闭教练自费上完877节课 (Gym closed down and coach completed 877 classes at his own expense)](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E5%80%92%E9%97%AD%E6%95%99%E7%BB%83%E8%87%AA%E8%B4%B9%E4%B8%8A%E5%AE%8C877%E8%8A%82%E8%AF%BE%23) `184.7K 🔥` `+116%`
1. [家电进化开倍速了吗](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E7%94%B5%E8%BF%9B%E5%8C%96%E5%BC%80%E5%80%8D%E9%80%9F%E4%BA%86%E5%90%97%23) `735.5K 🔥`
1. [一箱12瓶纯净水每瓶都有针眼](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AE%B112%E7%93%B6%E7%BA%AF%E5%87%80%E6%B0%B4%E6%AF%8F%E7%93%B6%E9%83%BD%E6%9C%89%E9%92%88%E7%9C%BC%23) `154.4K 🔥`
1. [儿童水枪竟从隐私部位喷水 (Children's water gun sprays water from private parts)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E6%B0%B4%E6%9E%AA%E7%AB%9F%E4%BB%8E%E9%9A%90%E7%A7%81%E9%83%A8%E4%BD%8D%E5%96%B7%E6%B0%B4%23) `131.9K 🔥`
1. [周杰伦新歌预告 (Jay Chou's new song preview)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E9%A2%84%E5%91%8A%23) `131.1K 🔥`
1. [女子怀孕2个月后脑出血智力仅3岁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%952%E4%B8%AA%E6%9C%88%E5%90%8E%E8%84%91%E5%87%BA%E8%A1%80%E6%99%BA%E5%8A%9B%E4%BB%853%E5%B2%81%23) `123.2K 🔥`
1. [拉里贾尼与其子死于以军空袭](https://s.weibo.com/weibo?q=%23%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E4%B8%8E%E5%85%B6%E5%AD%90%E6%AD%BB%E4%BA%8E%E4%BB%A5%E5%86%9B%E7%A9%BA%E8%A2%AD%23) `146.1K 🔥` `-31%`

Updated at 2026-03-18 11:17:14

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
