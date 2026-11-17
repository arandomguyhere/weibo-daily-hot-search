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

1. [雷军APEC现场挨个发名片](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9BAPEC%E7%8E%B0%E5%9C%BA%E6%8C%A8%E4%B8%AA%E5%8F%91%E5%90%8D%E7%89%87%23) `59.4K 🔥` `NEW`
1. [豆包加聊天功能或威胁微信](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8A%A0%E8%81%8A%E5%A4%A9%E5%8A%9F%E8%83%BD%E6%88%96%E5%A8%81%E8%83%81%E5%BE%AE%E4%BF%A1%23) `57.6K 🔥` `NEW`
1. [2026APEC这些看点值得期待](https://s.weibo.com/weibo?q=%232026APEC%E8%BF%99%E4%BA%9B%E7%9C%8B%E7%82%B9%E5%80%BC%E5%BE%97%E6%9C%9F%E5%BE%85%23) `57.6K 🔥` `NEW`
1. [字节多领域追赶腾讯](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E5%A4%9A%E9%A2%86%E5%9F%9F%E8%BF%BD%E8%B5%B6%E8%85%BE%E8%AE%AF%23) `56.7K 🔥` `NEW`
1. [深圳人全妆出街迎APEC](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E5%85%A8%E5%A6%86%E5%87%BA%E8%A1%97%E8%BF%8EAPEC%23) `56.1K 🔥` `NEW`
1. [曝厉娜和朋友蛐蛐许飞](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8E%89%E5%A8%9C%E5%92%8C%E6%9C%8B%E5%8F%8B%E8%9B%90%E8%9B%90%E8%AE%B8%E9%A3%9E%23) `55.5K 🔥` `NEW`
1. [快女冠军段林希咋倒嗓成这样](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E5%A5%B3%E5%86%A0%E5%86%9B%E6%AE%B5%E6%9E%97%E5%B8%8C%E5%92%8B%E5%80%92%E5%97%93%E6%88%90%E8%BF%99%E6%A0%B7%23) `55.0K 🔥` `NEW`
1. [虞书欣近1年掉粉118万](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%911%E5%B9%B4%E6%8E%89%E7%B2%89118%E4%B8%87%23) `54.6K 🔥` `NEW`
1. [字节被指只差聊天软件](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%A2%AB%E6%8C%87%E5%8F%AA%E5%B7%AE%E8%81%8A%E5%A4%A9%E8%BD%AF%E4%BB%B6%23) `54.4K 🔥` `NEW`
1. [小米回应雷军APEC发言紧张](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E9%9B%B7%E5%86%9BAPEC%E5%8F%91%E8%A8%80%E7%B4%A7%E5%BC%A0%23) `53.9K 🔥` `NEW`
1. [一个月一万块这工作普通人干不了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%9C%88%E4%B8%80%E4%B8%87%E5%9D%97%E8%BF%99%E5%B7%A5%E4%BD%9C%E6%99%AE%E9%80%9A%E4%BA%BA%E5%B9%B2%E4%B8%8D%E4%BA%86%23) `53.2K 🔥` `NEW`
1. [TGA2026年度游戏提名公开](https://s.weibo.com/weibo?q=%23TGA2026%E5%B9%B4%E5%BA%A6%E6%B8%B8%E6%88%8F%E6%8F%90%E5%90%8D%E5%85%AC%E5%BC%80%23) `52.8K 🔥` `NEW`
1. [杜海涛英语直播 全障碍交流](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B5%B7%E6%B6%9B%E8%8B%B1%E8%AF%AD%E7%9B%B4%E6%92%AD%20%E5%85%A8%E9%9A%9C%E7%A2%8D%E4%BA%A4%E6%B5%81%23) `52.4K 🔥` `NEW`
1. [BLG赛点局ON高喊别虐泉](https://s.weibo.com/weibo?q=%23BLG%E8%B5%9B%E7%82%B9%E5%B1%80ON%E9%AB%98%E5%96%8A%E5%88%AB%E8%99%90%E6%B3%89%23) `50.4K 🔥` `NEW`
1. [PEL竞男ob小锁](https://s.weibo.com/weibo?q=%23PEL%E7%AB%9E%E7%94%B7ob%E5%B0%8F%E9%94%81%23) `49.8K 🔥` `NEW`
1. [许飞没撒谎](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%B2%A1%E6%92%92%E8%B0%8E%23) `49.7K 🔥` `NEW`
1. [小米18真机曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318%E7%9C%9F%E6%9C%BA%E6%9B%9D%E5%85%89%23) `49.5K 🔥` `NEW`
1. [杨超越当年的人气到底有多高](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%BD%93%E5%B9%B4%E7%9A%84%E4%BA%BA%E6%B0%94%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E9%AB%98%23) `49.4K 🔥` `NEW`
1. [小锁女装](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%94%81%E5%A5%B3%E8%A3%85%23) `49.2K 🔥` `NEW`
1. [深圳人收起人字拖换皮鞋小白鞋](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E6%94%B6%E8%B5%B7%E4%BA%BA%E5%AD%97%E6%8B%96%E6%8D%A2%E7%9A%AE%E9%9E%8B%E5%B0%8F%E7%99%BD%E9%9E%8B%23) `49.1K 🔥` `NEW`
1. [难怪郑恺高考成绩可以上复旦](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%83%91%E6%81%BA%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E5%8F%AF%E4%BB%A5%E4%B8%8A%E5%A4%8D%E6%97%A6%23) `48.7K 🔥` `NEW`
1. [以为孙千拉腿了直到别人站过来](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E5%AD%99%E5%8D%83%E6%8B%89%E8%85%BF%E4%BA%86%E7%9B%B4%E5%88%B0%E5%88%AB%E4%BA%BA%E7%AB%99%E8%BF%87%E6%9D%A5%23) `48.6K 🔥` `NEW`
1. [猫的树说太阳雨本来只有22集到出国前](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E8%AF%B4%E5%A4%AA%E9%98%B3%E9%9B%A8%E6%9C%AC%E6%9D%A5%E5%8F%AA%E6%9C%8922%E9%9B%86%E5%88%B0%E5%87%BA%E5%9B%BD%E5%89%8D%23) `48.4K 🔥` `NEW`
1. [原来白小纯说了这么多遍天霸啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%E9%81%8D%E5%A4%A9%E9%9C%B8%E5%95%8A%23) `48.3K 🔥` `NEW`
1. [字节 微信](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%20%E5%BE%AE%E4%BF%A1%23) `48.3K 🔥` `NEW`
1. [左航表白TOP](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E8%A1%A8%E7%99%BDTOP%23) `48.2K 🔥` `NEW`
1. [满足两个条件暧昧一定会发生](https://s.weibo.com/weibo?q=%23%E6%BB%A1%E8%B6%B3%E4%B8%A4%E4%B8%AA%E6%9D%A1%E4%BB%B6%E6%9A%A7%E6%98%A7%E4%B8%80%E5%AE%9A%E4%BC%9A%E5%8F%91%E7%94%9F%23) `48.1K 🔥` `NEW`
1. [金价三重冲击](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%89%E9%87%8D%E5%86%B2%E5%87%BB%23) `48.0K 🔥` `NEW`
1. [外国人在深圳贴退热贴用筷子吃烧烤](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E5%9C%A8%E6%B7%B1%E5%9C%B3%E8%B4%B4%E9%80%80%E7%83%AD%E8%B4%B4%E7%94%A8%E7%AD%B7%E5%AD%90%E5%90%83%E7%83%A7%E7%83%A4%23) `47.9K 🔥` `NEW`
1. [宁德时代董事长曾毓群全英文发言](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E8%91%A3%E4%BA%8B%E9%95%BF%E6%9B%BE%E6%AF%93%E7%BE%A4%E5%85%A8%E8%8B%B1%E6%96%87%E5%8F%91%E8%A8%80%23) `47.8K 🔥` `NEW`
1. [拉布拉多没穿警服被当成流浪狗](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A%E6%B2%A1%E7%A9%BF%E8%AD%A6%E6%9C%8D%E8%A2%AB%E5%BD%93%E6%88%90%E6%B5%81%E6%B5%AA%E7%8B%97%23) `47.8K 🔥` `NEW`
1. [Ruler看BLG捧杯摇头不语](https://s.weibo.com/weibo?q=%23Ruler%E7%9C%8BBLG%E6%8D%A7%E6%9D%AF%E6%91%87%E5%A4%B4%E4%B8%8D%E8%AF%AD%23) `47.7K 🔥` `NEW`
1. [不要让自己成为任何事情的最后一环](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%AE%A9%E8%87%AA%E5%B7%B1%E6%88%90%E4%B8%BA%E4%BB%BB%E4%BD%95%E4%BA%8B%E6%83%85%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E7%8E%AF%23) `47.6K 🔥` `NEW`
1. [这个马吃草的理由太搞笑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E9%A9%AC%E5%90%83%E8%8D%89%E7%9A%84%E7%90%86%E7%94%B1%E5%A4%AA%E6%90%9E%E7%AC%91%23) `47.5K 🔥` `NEW`
1. [慕清明退圈](https://s.weibo.com/weibo?q=%23%E6%85%95%E6%B8%85%E6%98%8E%E9%80%80%E5%9C%88%23) `47.5K 🔥` `NEW`
1. [难怪郑恺联合国演讲毫无压力](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%83%91%E6%81%BA%E8%81%94%E5%90%88%E5%9B%BD%E6%BC%94%E8%AE%B2%E6%AF%AB%E6%97%A0%E5%8E%8B%E5%8A%9B%23) `47.4K 🔥` `NEW`
1. [雷军APEC台上台下的反差感](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9BAPEC%E5%8F%B0%E4%B8%8A%E5%8F%B0%E4%B8%8B%E7%9A%84%E5%8F%8D%E5%B7%AE%E6%84%9F%23) `46.9K 🔥` `NEW`
1. [奚梦瑶白到整个人都在发光](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%99%BD%E5%88%B0%E6%95%B4%E4%B8%AA%E4%BA%BA%E9%83%BD%E5%9C%A8%E5%8F%91%E5%85%89%23) `46.8K 🔥` `NEW`
1. [谁说琵琶虾没有肉](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AF%B4%E7%90%B5%E7%90%B6%E8%99%BE%E6%B2%A1%E6%9C%89%E8%82%89%23) `46.8K 🔥` `NEW`
1. [小锁女装开播五分钟十万人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%94%81%E5%A5%B3%E8%A3%85%E5%BC%80%E6%92%AD%E4%BA%94%E5%88%86%E9%92%9F%E5%8D%81%E4%B8%87%E4%BA%BA%23) `46.8K 🔥` `NEW`
1. [猫的树成绩](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E6%88%90%E7%BB%A9%23) `46.7K 🔥` `NEW`
1. [关晓彤以后就这样走红毯吧](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%BB%A5%E5%90%8E%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%B5%B0%E7%BA%A2%E6%AF%AF%E5%90%A7%23) `46.7K 🔥` `NEW`
1. [曾沛慈说要去声生不息追星](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%AF%B4%E8%A6%81%E5%8E%BB%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E8%BF%BD%E6%98%9F%23) `46.6K 🔥` `NEW`
1. [宝妈坐月子腿疼确诊肺癌晚期](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%9D%90%E6%9C%88%E5%AD%90%E8%85%BF%E7%96%BC%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%23) `46.5K 🔥` `NEW`
1. [Ruler希望复刻BLG夺冠之路](https://s.weibo.com/weibo?q=%23Ruler%E5%B8%8C%E6%9C%9B%E5%A4%8D%E5%88%BBBLG%E5%A4%BA%E5%86%A0%E4%B9%8B%E8%B7%AF%23) `46.5K 🔥` `NEW`
1. [段林希清唱镜头给到各位嘉宾](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%9E%97%E5%B8%8C%E6%B8%85%E5%94%B1%E9%95%9C%E5%A4%B4%E7%BB%99%E5%88%B0%E5%90%84%E4%BD%8D%E5%98%89%E5%AE%BE%23) `46.4K 🔥` `NEW`
1. [杨超越说皮肤好的秘诀就是敷面膜](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%AF%B4%E7%9A%AE%E8%82%A4%E5%A5%BD%E7%9A%84%E7%A7%98%E8%AF%80%E5%B0%B1%E6%98%AF%E6%95%B7%E9%9D%A2%E8%86%9C%23) `46.4K 🔥` `NEW`
1. [猫的树预判到德国篇人设ooc了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E9%A2%84%E5%88%A4%E5%88%B0%E5%BE%B7%E5%9B%BD%E7%AF%87%E4%BA%BA%E8%AE%BEooc%E4%BA%86%23) `46.3K 🔥` `NEW`
1. [一诺梦之队集合](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E6%A2%A6%E4%B9%8B%E9%98%9F%E9%9B%86%E5%90%88%23) `46.3K 🔥` `NEW`
1. [霍建华不做医美的原因](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%BB%BA%E5%8D%8E%E4%B8%8D%E5%81%9A%E5%8C%BB%E7%BE%8E%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `46.3K 🔥` `NEW`

Updated at 2026-11-18 03:36:55

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
