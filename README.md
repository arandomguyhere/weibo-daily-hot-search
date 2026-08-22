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

1. [披荆斩棘淘汰 (Overcome all obstacles and eliminate)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%B7%98%E6%B1%B0%23) `888.8K 🔥` `NEW`
1. [曾被狼群抚养12年狼孩去世](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%A2%AB%E7%8B%BC%E7%BE%A4%E6%8A%9A%E5%85%BB12%E5%B9%B4%E7%8B%BC%E5%AD%A9%E5%8E%BB%E4%B8%96%23) `641.4K 🔥` `NEW`
1. [越来越多宝藏小城藏不住了](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E5%AE%9D%E8%97%8F%E5%B0%8F%E5%9F%8E%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `526.5K 🔥` `NEW`
1. [王源一句话让几万人低头看手机](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%AE%A9%E5%87%A0%E4%B8%87%E4%BA%BA%E4%BD%8E%E5%A4%B4%E7%9C%8B%E6%89%8B%E6%9C%BA%23) `524.5K 🔥` `NEW`
1. [桃酥是没有一滴水的](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%85%A5%E6%98%AF%E6%B2%A1%E6%9C%89%E4%B8%80%E6%BB%B4%E6%B0%B4%E7%9A%84%23) `415.5K 🔥` `NEW`
1. [那英边唱边哭](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E8%BE%B9%E5%94%B1%E8%BE%B9%E5%93%AD%23) `407.3K 🔥` `NEW`
1. [披荆斩棘排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D%23) `384.2K 🔥` `NEW`
1. [亚朵卖枕头被子收入快赶上酒店主业](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E5%8D%96%E6%9E%95%E5%A4%B4%E8%A2%AB%E5%AD%90%E6%94%B6%E5%85%A5%E5%BF%AB%E8%B5%B6%E4%B8%8A%E9%85%92%E5%BA%97%E4%B8%BB%E4%B8%9A%23) `337.8K 🔥` `NEW`
1. [住破房穿20块衣服男子20年攒下789万](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E7%A0%B4%E6%88%BF%E7%A9%BF20%E5%9D%97%E8%A1%A3%E6%9C%8D%E7%94%B7%E5%AD%9020%E5%B9%B4%E6%94%92%E4%B8%8B789%E4%B8%87%23) `337.2K 🔥` `NEW`
1. [台湾节目嘉宾说北京没有冰箱引群嘲](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%8A%82%E7%9B%AE%E5%98%89%E5%AE%BE%E8%AF%B4%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E5%86%B0%E7%AE%B1%E5%BC%95%E7%BE%A4%E5%98%B2%23) `336.4K 🔥` `NEW`
1. [王传君说的是乔任梁吗 (Is Wang Chuanjun talking about Qiao Renliang?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%AF%B4%E7%9A%84%E6%98%AF%E4%B9%94%E4%BB%BB%E6%A2%81%E5%90%97%23) `335.6K 🔥` `NEW`
1. [郭敬明剧组减肥方法](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%89%A7%E7%BB%84%E5%87%8F%E8%82%A5%E6%96%B9%E6%B3%95%23) `334.3K 🔥` `NEW`
1. [人民日报谈火车零食占座](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%B0%88%E7%81%AB%E8%BD%A6%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%23) `334.0K 🔥` `NEW`
1. [网友把蔡徐坤当路人p掉了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%8A%E8%94%A1%E5%BE%90%E5%9D%A4%E5%BD%93%E8%B7%AF%E4%BA%BAp%E6%8E%89%E4%BA%86%23) `332.5K 🔥` `NEW`
1. [偶遇朱志鑫游泳](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E6%9C%B1%E5%BF%97%E9%91%AB%E6%B8%B8%E6%B3%B3%23) `332.3K 🔥` `NEW`
1. [零食占座当事人母亲发声](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `331.3K 🔥` `NEW`
1. [郭晓东张睿 越看越心酸](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E5%BC%A0%E7%9D%BF%20%E8%B6%8A%E7%9C%8B%E8%B6%8A%E5%BF%83%E9%85%B8%23) `330.6K 🔥` `NEW`
1. [迎面走来的是中国机器人方队](https://s.weibo.com/weibo?q=%23%E8%BF%8E%E9%9D%A2%E8%B5%B0%E6%9D%A5%E7%9A%84%E6%98%AF%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%96%B9%E9%98%9F%23) `329.0K 🔥` `NEW`
1. [欢子淘汰 压根没来](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%B7%98%E6%B1%B0%20%E5%8E%8B%E6%A0%B9%E6%B2%A1%E6%9D%A5%23) `328.3K 🔥` `NEW`
1. [三个台风出现了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E5%8F%B0%E9%A3%8E%E5%87%BA%E7%8E%B0%E4%BA%86%23) `327.6K 🔥` `NEW`
1. [iPhone18ProMax手机壳曝光 (iPhone 18 Pro Max mobile phone case exposed)](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%9B%9D%E5%85%89%23) `326.7K 🔥` `NEW`
1. [墨香铜臭 亿级版权](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E9%A6%99%E9%93%9C%E8%87%AD%20%E4%BA%BF%E7%BA%A7%E7%89%88%E6%9D%83%23) `325.3K 🔥` `NEW`
1. [华晨宇回应发型](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%9B%9E%E5%BA%94%E5%8F%91%E5%9E%8B%23) `323.4K 🔥` `NEW`
1. [拾荒老人肯德基讨水被拒结果反转](https://s.weibo.com/weibo?q=%23%E6%8B%BE%E8%8D%92%E8%80%81%E4%BA%BA%E8%82%AF%E5%BE%B7%E5%9F%BA%E8%AE%A8%E6%B0%B4%E8%A2%AB%E6%8B%92%E7%BB%93%E6%9E%9C%E5%8F%8D%E8%BD%AC%23) `322.6K 🔥` `NEW`
1. [走马太好听了](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E9%A9%AC%E5%A4%AA%E5%A5%BD%E5%90%AC%E4%BA%86%23) `322.4K 🔥` `NEW`
1. [欢子淘汰](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%B7%98%E6%B1%B0%23) `322.4K 🔥` `NEW`
1. [手机出现这行字存款正被转走](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%87%BA%E7%8E%B0%E8%BF%99%E8%A1%8C%E5%AD%97%E5%AD%98%E6%AC%BE%E6%AD%A3%E8%A2%AB%E8%BD%AC%E8%B5%B0%23) `322.4K 🔥` `NEW`
1. [巫哲顶着这张脸叫狗蛋儿](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A1%B6%E7%9D%80%E8%BF%99%E5%BC%A0%E8%84%B8%E5%8F%AB%E7%8B%97%E8%9B%8B%E5%84%BF%23) `322.4K 🔥` `NEW`
1. [SuperJunior出场太帅了](https://s.weibo.com/weibo?q=%23SuperJunior%E5%87%BA%E5%9C%BA%E5%A4%AA%E5%B8%85%E4%BA%86%23) `322.4K 🔥` `NEW`
1. [陈伟霆只评论了应昊茗收官文](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%8F%AA%E8%AF%84%E8%AE%BA%E4%BA%86%E5%BA%94%E6%98%8A%E8%8C%97%E6%94%B6%E5%AE%98%E6%96%87%23) `322.4K 🔥` `NEW`
1. [中超联赛 (Chinese Super League)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%B6%85%E8%81%94%E8%B5%9B%23) `322.4K 🔥` `NEW`
1. [白鹿相扑上衣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B8%E6%89%91%E4%B8%8A%E8%A1%A3%23) `322.4K 🔥` `NEW`
1. [梁源说欢子是节目牺牲品](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%BA%90%E8%AF%B4%E6%AC%A2%E5%AD%90%E6%98%AF%E8%8A%82%E7%9B%AE%E7%89%BA%E7%89%B2%E5%93%81%23) `322.4K 🔥` `NEW`
1. [外国人来中国旅游的视频火了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%97%85%E6%B8%B8%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `322.4K 🔥` `NEW`
1. [小果冻道歉](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9E%9C%E5%86%BB%E9%81%93%E6%AD%89%23) `322.4K 🔥` `NEW`
1. [JDG战胜TES](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CTES%23) `322.4K 🔥` `NEW`
1. [国家队最新持股名单出炉](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E9%98%9F%E6%9C%80%E6%96%B0%E6%8C%81%E8%82%A1%E5%90%8D%E5%8D%95%E5%87%BA%E7%82%89%23) `322.4K 🔥` `NEW`
1. [必须从速从严处置甲醛白菜](https://s.weibo.com/weibo?q=%23%E5%BF%85%E9%A1%BB%E4%BB%8E%E9%80%9F%E4%BB%8E%E4%B8%A5%E5%A4%84%E7%BD%AE%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%23) `322.4K 🔥` `NEW`
1. [沈梦辰头发和礼服撞色了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%A4%B4%E5%8F%91%E5%92%8C%E7%A4%BC%E6%9C%8D%E6%92%9E%E8%89%B2%E4%BA%86%23) `322.4K 🔥` `NEW`
1. [王祉怡0比2安洗莹](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%89%E6%80%A10%E6%AF%942%E5%AE%89%E6%B4%97%E8%8E%B9%23) `322.4K 🔥` `NEW`
1. [4名男子拒付嫖资勒索卖淫女后赌光 (4 men blackmailed prostitutes after refusing to pay for prostitution and then gambled away their money)](https://s.weibo.com/weibo?q=%234%E5%90%8D%E7%94%B7%E5%AD%90%E6%8B%92%E4%BB%98%E5%AB%96%E8%B5%84%E5%8B%92%E7%B4%A2%E5%8D%96%E6%B7%AB%E5%A5%B3%E5%90%8E%E8%B5%8C%E5%85%89%23) `322.4K 🔥` `NEW`
1. [张峻豪说没有热单时严浩翔的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E8%AF%B4%E6%B2%A1%E6%9C%89%E7%83%AD%E5%8D%95%E6%97%B6%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%84%E5%8F%8D%E5%BA%94%23) `322.4K 🔥` `NEW`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `322.4K 🔥` `NEW`
1. [一点没有情趣的直男震撼](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E6%B2%A1%E6%9C%89%E6%83%85%E8%B6%A3%E7%9A%84%E7%9B%B4%E7%94%B7%E9%9C%87%E6%92%BC%23) `322.4K 🔥` `NEW`
1. [王源淘了个相机捡大漏了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%B7%98%E4%BA%86%E4%B8%AA%E7%9B%B8%E6%9C%BA%E6%8D%A1%E5%A4%A7%E6%BC%8F%E4%BA%86%23) `322.4K 🔥` `NEW`
1. [你好星期六下期是王子变青蛙](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%8B%E6%9C%9F%E6%98%AF%E7%8E%8B%E5%AD%90%E5%8F%98%E9%9D%92%E8%9B%99%23) `322.4K 🔥` `NEW`
1. [TheShy力竭](https://s.weibo.com/weibo?q=%23TheShy%E5%8A%9B%E7%AB%AD%23) `322.4K 🔥` `NEW`
1. [中国机器人向国旗行注目礼](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%90%91%E5%9B%BD%E6%97%97%E8%A1%8C%E6%B3%A8%E7%9B%AE%E7%A4%BC%23) `322.4K 🔥` `NEW`

Updated at 2026-08-23 00:31:56

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
