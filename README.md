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

1. [阿根廷3比1瑞士 (Argentina 3-1 Switzerland)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B73%E6%AF%941%E7%91%9E%E5%A3%AB%23) `3.5M 🔥` `NEW`
1. [防范应对台风巴威](https://s.weibo.com/weibo?q=%23%E9%98%B2%E8%8C%83%E5%BA%94%E5%AF%B9%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%23) `3.0M 🔥` `NEW`
1. [听耳机讲故事](https://s.weibo.com/weibo?q=%23%E5%90%AC%E8%80%B3%E6%9C%BA%E8%AE%B2%E6%95%85%E4%BA%8B%23) `3.0M 🔥` `NEW`
1. [瑞士 脏](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%20%E8%84%8F%23) `1.8M 🔥` `NEW`
1. [迪丽热巴票房破2亿海报](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A5%A8%E6%88%BF%E7%A0%B42%E4%BA%BF%E6%B5%B7%E6%8A%A5%23) `844.2K 🔥` `NEW`
1. [王俊凯你要毁了丁程鑫吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86%E4%B8%81%E7%A8%8B%E9%91%AB%E5%90%97%23) `841.5K 🔥` `NEW`
1. [阿根廷任意球怎么来的](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BB%BB%E6%84%8F%E7%90%83%E6%80%8E%E4%B9%88%E6%9D%A5%E7%9A%84%23) `816.7K 🔥` `NEW`
1. [阿尔瓦雷斯世界波](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E7%93%A6%E9%9B%B7%E6%96%AF%E4%B8%96%E7%95%8C%E6%B3%A2%23) `739.1K 🔥` `NEW`
1. [恩博洛哭了](https://s.weibo.com/weibo?q=%23%E6%81%A9%E5%8D%9A%E6%B4%9B%E5%93%AD%E4%BA%86%23) `555.0K 🔥` `NEW`
1. [王俊凯参加过黄晓明的婚礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%82%E5%8A%A0%E8%BF%87%E9%BB%84%E6%99%93%E6%98%8E%E7%9A%84%E5%A9%9A%E7%A4%BC%23) `529.7K 🔥` `NEW`
1. [赵牧辰女友否认知三当三 (Zhao Muchen’s girlfriend denies cheating)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%89%A7%E8%BE%B0%E5%A5%B3%E5%8F%8B%E5%90%A6%E8%AE%A4%E7%9F%A5%E4%B8%89%E5%BD%93%E4%B8%89%23) `495.6K 🔥` `NEW`
1. [哈兰德父亲怒喷裁判](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%88%B6%E4%BA%B2%E6%80%92%E5%96%B7%E8%A3%81%E5%88%A4%23) `484.6K 🔥` `NEW`
1. [巴威登陆画面太吓人了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E7%94%BB%E9%9D%A2%E5%A4%AA%E5%90%93%E4%BA%BA%E4%BA%86%23) `483.8K 🔥` `NEW`
1. [500亿元蛇产业](https://s.weibo.com/weibo?q=%23500%E4%BA%BF%E5%85%83%E8%9B%87%E4%BA%A7%E4%B8%9A%23) `483.8K 🔥` `NEW`
1. [小米回应网传澎程价格](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E6%BE%8E%E7%A8%8B%E4%BB%B7%E6%A0%BC%23) `480.4K 🔥` `NEW`
1. [恩博洛假摔被罚下](https://s.weibo.com/weibo?q=%23%E6%81%A9%E5%8D%9A%E6%B4%9B%E5%81%87%E6%91%94%E8%A2%AB%E7%BD%9A%E4%B8%8B%23) `473.8K 🔥` `NEW`
1. [瑞士假摔](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%E5%81%87%E6%91%94%23) `470.0K 🔥` `NEW`
1. [英格兰vs阿根廷](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `469.7K 🔥` `NEW`
1. [阿根廷瑞士 看力竭了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%91%9E%E5%A3%AB%20%E7%9C%8B%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `463.4K 🔥` `NEW`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `461.5K 🔥` `NEW`
1. [劳塔罗杀死比赛 (Lautaro kills the game)](https://s.weibo.com/weibo?q=%23%E5%8A%B3%E5%A1%94%E7%BD%97%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `456.0K 🔥` `NEW`
1. [一个台风治好了大家的饭压抑](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%8F%B0%E9%A3%8E%E6%B2%BB%E5%A5%BD%E4%BA%86%E5%A4%A7%E5%AE%B6%E7%9A%84%E9%A5%AD%E5%8E%8B%E6%8A%91%23) `451.8K 🔥` `NEW`
1. [英格兰主帅称赖斯3天因病卧床不起](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E4%B8%BB%E5%B8%85%E7%A7%B0%E8%B5%96%E6%96%AF3%E5%A4%A9%E5%9B%A0%E7%97%85%E5%8D%A7%E5%BA%8A%E4%B8%8D%E8%B5%B7%23) `450.1K 🔥` `NEW`
1. [孙继海说南美球员有表演性质](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BB%A7%E6%B5%B7%E8%AF%B4%E5%8D%97%E7%BE%8E%E7%90%83%E5%91%98%E6%9C%89%E8%A1%A8%E6%BC%94%E6%80%A7%E8%B4%A8%23) `447.2K 🔥` `NEW`
1. [别说老外震惊我也震惊了](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AF%B4%E8%80%81%E5%A4%96%E9%9C%87%E6%83%8A%E6%88%91%E4%B9%9F%E9%9C%87%E6%83%8A%E4%BA%86%23) `444.3K 🔥` `NEW`
1. [英格兰阿根廷会师半决赛](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BC%9A%E5%B8%88%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `441.8K 🔥` `NEW`
1. [FIFA解释恩博洛第二黄](https://s.weibo.com/weibo?q=%23FIFA%E8%A7%A3%E9%87%8A%E6%81%A9%E5%8D%9A%E6%B4%9B%E7%AC%AC%E4%BA%8C%E9%BB%84%23) `440.6K 🔥` `NEW`
1. [增距镜的风从演唱会刮到美加墨](https://s.weibo.com/weibo?q=%23%E5%A2%9E%E8%B7%9D%E9%95%9C%E7%9A%84%E9%A3%8E%E4%BB%8E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%AE%E5%88%B0%E7%BE%8E%E5%8A%A0%E5%A2%A8%23) `436.9K 🔥` `NEW`
1. [迪丽热巴的粉丝消费力](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E7%B2%89%E4%B8%9D%E6%B6%88%E8%B4%B9%E5%8A%9B%23) `435.9K 🔥` `NEW`
1. [60吨级舟桥如何转移12000人](https://s.weibo.com/weibo?q=%2360%E5%90%A8%E7%BA%A7%E8%88%9F%E6%A1%A5%E5%A6%82%E4%BD%95%E8%BD%AC%E7%A7%BB12000%E4%BA%BA%23) `433.7K 🔥` `NEW`
1. [孩子说邹市明的变化只是因为在拍节目 (The child said that Zou Shiming’s change was just because he was filming a show)](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%AF%B4%E9%82%B9%E5%B8%82%E6%98%8E%E7%9A%84%E5%8F%98%E5%8C%96%E5%8F%AA%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%8B%8D%E8%8A%82%E7%9B%AE%23) `431.0K 🔥` `NEW`
1. [杭州人一觉醒来发现外卖停了](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%BA%BA%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E5%8F%91%E7%8E%B0%E5%A4%96%E5%8D%96%E5%81%9C%E4%BA%86%23) `424.0K 🔥` `NEW`
1. [巴威中午前后离开浙江](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E4%B8%AD%E5%8D%88%E5%89%8D%E5%90%8E%E7%A6%BB%E5%BC%80%E6%B5%99%E6%B1%9F%23) `421.7K 🔥` `NEW`
1. [短剧女王马秋元来演长剧了](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%A5%B3%E7%8E%8B%E9%A9%AC%E7%A7%8B%E5%85%83%E6%9D%A5%E6%BC%94%E9%95%BF%E5%89%A7%E4%BA%86%23) `420.4K 🔥` `NEW`
1. [占车位公务员不是知错了而是怕了](https://s.weibo.com/weibo?q=%23%E5%8D%A0%E8%BD%A6%E4%BD%8D%E5%85%AC%E5%8A%A1%E5%91%98%E4%B8%8D%E6%98%AF%E7%9F%A5%E9%94%99%E4%BA%86%E8%80%8C%E6%98%AF%E6%80%95%E4%BA%86%23) `414.6K 🔥` `NEW`
1. [算力芯片爆发](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E8%8A%AF%E7%89%87%E7%88%86%E5%8F%91%23) `412.4K 🔥` `NEW`
1. [雷军回应做增程车](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%81%9A%E5%A2%9E%E7%A8%8B%E8%BD%A6%23) `408.6K 🔥` `NEW`
1. [C罗走了但又好像没走](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%B5%B0%E4%BA%86%E4%BD%86%E5%8F%88%E5%A5%BD%E5%83%8F%E6%B2%A1%E8%B5%B0%23) `408.2K 🔥` `NEW`
1. [阿根廷vs瑞士 (Argentina vs Switzerland)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E7%91%9E%E5%A3%AB%23) `5.6M 🔥` `+519%`
1. [巴威台风届变脸第一名](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%B0%E9%A3%8E%E5%B1%8A%E5%8F%98%E8%84%B8%E7%AC%AC%E4%B8%80%E5%90%8D%23) `2.6M 🔥` `+563%`
1. [6月新增新冠确诊7.9万例](https://s.weibo.com/weibo?q=%236%E6%9C%88%E6%96%B0%E5%A2%9E%E6%96%B0%E5%86%A0%E7%A1%AE%E8%AF%8A7.9%E4%B8%87%E4%BE%8B%23) `1.8M 🔥` `+355%`
1. [世界杯四强 (World Cup semi-finals)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%23) `1.0M 🔥` `+167%`
1. [哈兰德 全场梦游 (Haaland sleepwalking throughout the game)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E5%85%A8%E5%9C%BA%E6%A2%A6%E6%B8%B8%23) `826.2K 🔥` `+130%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `478.4K 🔥` `+41%`
1. [邹市明拒绝和冉莹颖沟通](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E6%8B%92%E7%BB%9D%E5%92%8C%E5%86%89%E8%8E%B9%E9%A2%96%E6%B2%9F%E9%80%9A%23) `474.9K 🔥` `+38%`
1. [老乡鸡上市梦碎](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B9%A1%E9%B8%A1%E4%B8%8A%E5%B8%82%E6%A2%A6%E7%A2%8E%23) `459.6K 🔥` `+22%`
1. [巴威 (Bawe)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `415.8K 🔥` `+141%`
1. [上海中心千吨阻尼器开始摆动 (Shanghai Center's kiloton damper begins to swing)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%AD%E5%BF%83%E5%8D%83%E5%90%A8%E9%98%BB%E5%B0%BC%E5%99%A8%E5%BC%80%E5%A7%8B%E6%91%86%E5%8A%A8%23) `467.0K 🔥`
1. [台风巴威二次登陆 (Typhoon Bavi makes second landfall)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BA%8C%E6%AC%A1%E7%99%BB%E9%99%86%23) `454.5K 🔥` `-66%`
1. [太心疼哈兰德了](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%BF%83%E7%96%BC%E5%93%88%E5%85%B0%E5%BE%B7%E4%BA%86%23) `429.7K 🔥` `-51%`
1. [挪威vs英格兰 (norway vs england)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81vs%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `425.9K 🔥` `-88%`

Updated at 2026-07-12 12:36:43

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
