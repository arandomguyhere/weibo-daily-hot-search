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

1. [图赫尔 对不起英格兰 (Tuchel is sorry England)](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E8%B5%AB%E5%B0%94%20%E5%AF%B9%E4%B8%8D%E8%B5%B7%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `935.4K 🔥` `NEW`
1. [小米人形机器人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `866.3K 🔥` `NEW`
1. [贝林厄姆 赛后打人](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E8%B5%9B%E5%90%8E%E6%89%93%E4%BA%BA%23) `842.5K 🔥` `NEW`
1. [苏醒谈阿根廷绝杀英格兰](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%B0%88%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `670.5K 🔥` `NEW`
1. [苏醒](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%23) `385.5K 🔥` `NEW`
1. [阿根廷冲击卫冕](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B2%E5%87%BB%E5%8D%AB%E5%86%95%23) `343.7K 🔥` `NEW`
1. [张凌赫学霸解题思路就是快](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AD%A6%E9%9C%B8%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF%E5%B0%B1%E6%98%AF%E5%BF%AB%23) `316.1K 🔥` `NEW`
1. [辽宁抗洪](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%8A%97%E6%B4%AA%23) `315.3K 🔥` `NEW`
1. [斯卡洛尼 扮猪吃老虎](https://s.weibo.com/weibo?q=%23%E6%96%AF%E5%8D%A1%E6%B4%9B%E5%B0%BC%20%E6%89%AE%E7%8C%AA%E5%90%83%E8%80%81%E8%99%8E%23) `280.8K 🔥` `NEW`
1. [英格兰回应淘汰](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%23) `228.2K 🔥` `NEW`
1. [王橹杰的身高 (Wang Lujie's height)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%9A%84%E8%BA%AB%E9%AB%98%23) `194.2K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `172.1K 🔥` `NEW`
1. [邹市明夫妇聊家事网友不再一边倒](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%A4%AB%E5%A6%87%E8%81%8A%E5%AE%B6%E4%BA%8B%E7%BD%91%E5%8F%8B%E4%B8%8D%E5%86%8D%E4%B8%80%E8%BE%B9%E5%80%92%23) `154.9K 🔥` `NEW`
1. [心疼英格兰](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `154.6K 🔥` `NEW`
1. [图赫尔回应遭绝杀](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E8%B5%AB%E5%B0%94%E5%9B%9E%E5%BA%94%E9%81%AD%E7%BB%9D%E6%9D%80%23) `122.4K 🔥` `NEW`
1. [詹俊说英格兰太保守](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E4%BF%8A%E8%AF%B4%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%A4%AA%E4%BF%9D%E5%AE%88%23) `113.5K 🔥` `NEW`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `111.0K 🔥` `NEW`
1. [阿根廷绝杀英格兰](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `5.5M 🔥` `+506%`
1. [打卡中国](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E4%B8%AD%E5%9B%BD%23) `1.8M 🔥` `+72%`
1. [英格兰球迷怒喷主教练 (England fans angrily criticize manager)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E7%90%83%E8%BF%B7%E6%80%92%E5%96%B7%E4%B8%BB%E6%95%99%E7%BB%83%23) `1.3M 🔥` `+49%`
1. [佛得角 常规赛时间踢平本届冠亚军](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%20%E5%B8%B8%E8%A7%84%E8%B5%9B%E6%97%B6%E9%97%B4%E8%B8%A2%E5%B9%B3%E6%9C%AC%E5%B1%8A%E5%86%A0%E4%BA%9A%E5%86%9B%23) `1.2M 🔥` `+74%`
1. [男子发旧视频谎称台风内涝被拘 (Man arrested for posting old video and falsely claiming flooding due to typhoon)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E6%97%A7%E8%A7%86%E9%A2%91%E8%B0%8E%E7%A7%B0%E5%8F%B0%E9%A3%8E%E5%86%85%E6%B6%9D%E8%A2%AB%E6%8B%98%23) `932.7K 🔥` `+30%`
1. [功夫女足2 (Kung Fu Girls 2)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B32%23) `930.8K 🔥` `+968%`
1. [中国用户终于迎来满血iPhone (Chinese users finally get a full-blooded iPhone)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%A8%E6%88%B7%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E6%BB%A1%E8%A1%80iPhone%23) `906.5K 🔥` `+1157%`
1. [张凌赫智性恋天菜具像化](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%99%BA%E6%80%A7%E6%81%8B%E5%A4%A9%E8%8F%9C%E5%85%B7%E5%83%8F%E5%8C%96%23) `882.2K 🔥` `+1148%`
1. [河南多家NFC果汁生产车间竟无水果](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%9A%E5%AE%B6NFC%E6%9E%9C%E6%B1%81%E7%94%9F%E4%BA%A7%E8%BD%A6%E9%97%B4%E7%AB%9F%E6%97%A0%E6%B0%B4%E6%9E%9C%23) `822.0K 🔥` `+242%`
1. [阿根廷回应晋级世界杯决赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%9E%E5%BA%94%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `609.8K 🔥` `+223%`
1. [吴绮莉公开成龙拒认吴卓林原因 (Elaine Ng reveals why Jackie Chan refused to recognize Ng Zhuolin)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%BB%AE%E8%8E%89%E5%85%AC%E5%BC%80%E6%88%90%E9%BE%99%E6%8B%92%E8%AE%A4%E5%90%B4%E5%8D%93%E6%9E%97%E5%8E%9F%E5%9B%A0%23) `454.4K 🔥` `+42%`
1. [不建议大家辞职去做自媒体](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%BE%9E%E8%81%8C%E5%8E%BB%E5%81%9A%E8%87%AA%E5%AA%92%E4%BD%93%23) `388.0K 🔥` `+120%`
1. [中老年妇女困境 (Dilemma of middle-aged and elderly women)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%80%81%E5%B9%B4%E5%A6%87%E5%A5%B3%E5%9B%B0%E5%A2%83%23) `387.7K 🔥` `+254%`
1. [王俊凯忙一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BF%99%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `386.6K 🔥` `+456%`
1. [中式折扇爆单了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%BC%8F%E6%8A%98%E6%89%87%E7%88%86%E5%8D%95%E4%BA%86%23) `386.3K 🔥` `+340%`
1. [曝C罗考虑参加2030年世界杯](https://s.weibo.com/weibo?q=%23%E6%9B%9DC%E7%BD%97%E8%80%83%E8%99%91%E5%8F%82%E5%8A%A02030%E5%B9%B4%E4%B8%96%E7%95%8C%E6%9D%AF%23) `340.0K 🔥` `+46%`
1. [白鹿新剧佛山开机 (Bailu new drama starts shooting in Foshan)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E4%BD%9B%E5%B1%B1%E5%BC%80%E6%9C%BA%23) `317.9K 🔥` `+354%`
1. [71岁老太纵身跳河救人现场画面](https://s.weibo.com/weibo?q=%2371%E5%B2%81%E8%80%81%E5%A4%AA%E7%BA%B5%E8%BA%AB%E8%B7%B3%E6%B2%B3%E6%95%91%E4%BA%BA%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `156.4K 🔥` `+63%`
1. [美国游客被拉上台遭妻子拳打脚踢](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%A2%AB%E6%8B%89%E4%B8%8A%E5%8F%B0%E9%81%AD%E5%A6%BB%E5%AD%90%E6%8B%B3%E6%89%93%E8%84%9A%E8%B8%A2%23) `128.7K 🔥` `+83%`
1. [日本女护士输液管中混粪便致人死亡 (Japanese female nurse dies after feces mixed with infusion tube)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%BE%93%E6%B6%B2%E7%AE%A1%E4%B8%AD%E6%B7%B7%E7%B2%AA%E4%BE%BF%E8%87%B4%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `111.8K 🔥` `+68%`
1. [奔跑吧14 (Run 14)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%23) `111.3K 🔥` `+59%`
1. [DeepSeek工资待遇太恐怖了 (DeepSeek’s salary package is terrible)](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `384.7K 🔥`
1. [裁判 没带牌 (Referee didn't bring a card)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E6%B2%A1%E5%B8%A6%E7%89%8C%23) `384.1K 🔥`
1. [恩佐远射破门 (Enzo scores from long range)](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E8%BF%9C%E5%B0%84%E7%A0%B4%E9%97%A8%23) `186.5K 🔥`
1. [佛得角的含金量不断上升](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E4%B8%8D%E6%96%AD%E4%B8%8A%E5%8D%87%23) `127.5K 🔥`
1. [英格兰vs阿根廷 (England vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `2.9M 🔥` `-49%`
1. [英格兰 放弃进攻 (England gives up attack)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%20%E6%94%BE%E5%BC%83%E8%BF%9B%E6%94%BB%23) `449.4K 🔥` `-69%`
1. [英阿大战 自由搏击 (British-Afghan War Free Fighting)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%20%E8%87%AA%E7%94%B1%E6%90%8F%E5%87%BB%23) `325.0K 🔥` `-52%`
1. [英格兰1比2阿根廷](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B01%E6%AF%942%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `314.6K 🔥` `-38%`
1. [图赫尔全责](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E8%B5%AB%E5%B0%94%E5%85%A8%E8%B4%A3%23) `258.9K 🔥` `-66%`
1. [劳塔罗绝杀](https://s.weibo.com/weibo?q=%23%E5%8A%B3%E5%A1%94%E7%BD%97%E7%BB%9D%E6%9D%80%23) `222.7K 🔥` `-33%`
1. [英格兰阿根廷冲突](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B2%E7%AA%81%23) `181.1K 🔥` `-26%`
1. [阿根廷连进两球反超](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%BF%9E%E8%BF%9B%E4%B8%A4%E7%90%83%E5%8F%8D%E8%B6%85%23) `118.2K 🔥` `-48%`
1. [劳塔罗头球破门](https://s.weibo.com/weibo?q=%23%E5%8A%B3%E5%A1%94%E7%BD%97%E5%A4%B4%E7%90%83%E7%A0%B4%E9%97%A8%23) `111.0K 🔥` `-50%`

Updated at 2026-07-16 07:36:16

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
