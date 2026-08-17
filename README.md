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

1. [前7个月国民经济总体平稳向新向优 (In the first seven months, the national economy has generally been stable and improving.)](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E6%80%BB%E4%BD%93%E5%B9%B3%E7%A8%B3%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `260.8K 🔥` `NEW`
1. [厦门把松弛感焊在海岸线上](https://s.weibo.com/weibo?q=%23%E5%8E%A6%E9%97%A8%E6%8A%8A%E6%9D%BE%E5%BC%9B%E6%84%9F%E7%84%8A%E5%9C%A8%E6%B5%B7%E5%B2%B8%E7%BA%BF%E4%B8%8A%23) `240.5K 🔥` `NEW`
1. [龙餐馆 删减](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%88%A0%E5%87%8F%23) `170.3K 🔥` `NEW`
1. [怀疑我班主任就是从这学的](https://s.weibo.com/weibo?q=%23%E6%80%80%E7%96%91%E6%88%91%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%B0%B1%E6%98%AF%E4%BB%8E%E8%BF%99%E5%AD%A6%E7%9A%84%23) `70.1K 🔥` `NEW`
1. [湘潭大学回应弟弟举报哥哥冒名顶替](https://s.weibo.com/weibo?q=%23%E6%B9%98%E6%BD%AD%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E5%BC%9F%E5%BC%9F%E4%B8%BE%E6%8A%A5%E5%93%A5%E5%93%A5%E5%86%92%E5%90%8D%E9%A1%B6%E6%9B%BF%23) `69.6K 🔥` `NEW`
1. [急性子小姐和慢吞吞先生 (Miss Hothead and Mr. Slow)](https://s.weibo.com/weibo?q=%23%E6%80%A5%E6%80%A7%E5%AD%90%E5%B0%8F%E5%A7%90%E5%92%8C%E6%85%A2%E5%90%9E%E5%90%9E%E5%85%88%E7%94%9F%23) `136.8K 🔥`
1. [成功要对自己狠到什么程度](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%8A%9F%E8%A6%81%E5%AF%B9%E8%87%AA%E5%B7%B1%E7%8B%A0%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%23) `106.8K 🔥`
1. [桃黑黑 (peach black black)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%23) `106.7K 🔥`
1. [王橹杰说少年时代看不看随便吧](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%AF%B4%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A3%E7%9C%8B%E4%B8%8D%E7%9C%8B%E9%9A%8F%E4%BE%BF%E5%90%A7%23) `106.6K 🔥`
1. [马嘉祺给爸妈开EP抢先视听会](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%BB%99%E7%88%B8%E5%A6%88%E5%BC%80EP%E6%8A%A2%E5%85%88%E8%A7%86%E5%90%AC%E4%BC%9A%23) `106.5K 🔥`
1. [左奇函 身体状况](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%20%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `106.5K 🔥`
1. [女患者称被男医生猥亵揉胸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%82%A3%E8%80%85%E7%A7%B0%E8%A2%AB%E7%94%B7%E5%8C%BB%E7%94%9F%E7%8C%A5%E4%BA%B5%E6%8F%89%E8%83%B8%23) `106.4K 🔥`
1. [彭宇案 彭宇确实碰了老人 (Peng Yu case: Peng Yu did touch the old man)](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%AE%87%E6%A1%88%20%E5%BD%AD%E5%AE%87%E7%A1%AE%E5%AE%9E%E7%A2%B0%E4%BA%86%E8%80%81%E4%BA%BA%23) `106.3K 🔥`
1. [建议大家开车一定要专心 (It is recommended that everyone drive attentively)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%BC%80%E8%BD%A6%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%93%E5%BF%83%23) `106.3K 🔥`
1. [特朗普将宣布霍尔木兹为美国领土](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E5%AE%A3%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E4%B8%BA%E7%BE%8E%E5%9B%BD%E9%A2%86%E5%9C%9F%23) `96.5K 🔥`
1. [多方回应女子杭州酒局遭伤害 (Many parties responded to the woman’s injury in a Hangzhou wine shop)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E9%81%AD%E4%BC%A4%E5%AE%B3%23) `89.3K 🔥`
1. [魏子宸哭了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%93%AD%E4%BA%86%23) `75.3K 🔥`
1. [怎么发现一个人不是好人](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E5%8F%91%E7%8E%B0%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8D%E6%98%AF%E5%A5%BD%E4%BA%BA%23) `71.2K 🔥`
1. [3孩非亲生案女方说我怎么知道生父](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A5%B3%E6%96%B9%E8%AF%B4%E6%88%91%E6%80%8E%E4%B9%88%E7%9F%A5%E9%81%93%E7%94%9F%E7%88%B6%23) `71.0K 🔥`
1. [什么样的家庭可以买40万的车 (What kind of family can buy a car worth 400,000?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%E5%AE%B6%E5%BA%AD%E5%8F%AF%E4%BB%A5%E4%B9%B040%E4%B8%87%E7%9A%84%E8%BD%A6%23) `70.8K 🔥`
1. [iPhone17国内销量曝光](https://s.weibo.com/weibo?q=%23iPhone17%E5%9B%BD%E5%86%85%E9%94%80%E9%87%8F%E6%9B%9D%E5%85%89%23) `70.7K 🔥`
1. [解九假死](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E4%B9%9D%E5%81%87%E6%AD%BB%23) `70.5K 🔥`
1. [泡面不健康不是因为防腐剂](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%E4%B8%8D%E5%81%A5%E5%BA%B7%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%98%B2%E8%85%90%E5%89%82%23) `70.3K 🔥`
1. [东部战区重磅视频](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E9%87%8D%E7%A3%85%E8%A7%86%E9%A2%91%23) `70.2K 🔥`
1. [中国男篮不敌新西兰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E4%B8%8D%E6%95%8C%E6%96%B0%E8%A5%BF%E5%85%B0%23) `70.0K 🔥`
1. [汪苏泷回复双高胎 (Wang Sulong replied to double high tires)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%9B%9E%E5%A4%8D%E5%8F%8C%E9%AB%98%E8%83%8E%23) `69.9K 🔥`
1. [学霸父母劝700分女儿读中职或更合适](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%9C%B8%E7%88%B6%E6%AF%8D%E5%8A%9D700%E5%88%86%E5%A5%B3%E5%84%BF%E8%AF%BB%E4%B8%AD%E8%81%8C%E6%88%96%E6%9B%B4%E5%90%88%E9%80%82%23) `69.8K 🔥`
1. [石宇奇一轮游](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%87%E5%A5%87%E4%B8%80%E8%BD%AE%E6%B8%B8%23) `69.5K 🔥`
1. [大批AI博主停更了 (A large number of AI bloggers stopped updating)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9AI%E5%8D%9A%E4%B8%BB%E5%81%9C%E6%9B%B4%E4%BA%86%23) `630.4K 🔥` `-26%`
1. [榴莲价格彻底崩了 (Durian prices have completely collapsed)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%E5%BD%BB%E5%BA%95%E5%B4%A9%E4%BA%86%23) `332.9K 🔥` `-35%`
1. [曹骏初舞台人气票数倒挂 (Cao Junchu’s stage popularity votes are upside down)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%88%9D%E8%88%9E%E5%8F%B0%E4%BA%BA%E6%B0%94%E7%A5%A8%E6%95%B0%E5%80%92%E6%8C%82%23) `232.2K 🔥` `-35%`
1. [只有中国人才能识别的加密暗号](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%89%8D%E8%83%BD%E8%AF%86%E5%88%AB%E7%9A%84%E5%8A%A0%E5%AF%86%E6%9A%97%E5%8F%B7%23) `168.1K 🔥` `-33%`
1. [陈伟霆为九门十年不接军装戏](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B8%BA%E4%B9%9D%E9%97%A8%E5%8D%81%E5%B9%B4%E4%B8%8D%E6%8E%A5%E5%86%9B%E8%A3%85%E6%88%8F%23) `132.1K 🔥` `-36%`
1. [杭州涉事招商蛇口高管已被免职](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%B6%89%E4%BA%8B%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E9%AB%98%E7%AE%A1%E5%B7%B2%E8%A2%AB%E5%85%8D%E8%81%8C%23) `121.0K 🔥` `-42%`
1. [左奇函](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%23) `95.5K 🔥` `-23%`
1. [公积金用途又变多了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E7%94%A8%E9%80%94%E5%8F%88%E5%8F%98%E5%A4%9A%E4%BA%86%23) `94.2K 🔥` `-41%`
1. [Jennie不得不用头发遮挡](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%94%A8%E5%A4%B4%E5%8F%91%E9%81%AE%E6%8C%A1%23) `94.0K 🔥` `-23%`
1. [曝iPhone18ProMax独占可变光圈 (Exclusive variable aperture for iPhone 18 Pro Max revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18ProMax%E7%8B%AC%E5%8D%A0%E5%8F%AF%E5%8F%98%E5%85%89%E5%9C%88%23) `91.5K 🔥` `-28%`
1. [越不操心的人越是人生赢家](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E4%B8%8D%E6%93%8D%E5%BF%83%E7%9A%84%E4%BA%BA%E8%B6%8A%E6%98%AF%E4%BA%BA%E7%94%9F%E8%B5%A2%E5%AE%B6%23) `91.0K 🔥` `-25%`
1. [郭敬明发百妖谱原始帧 (Guo Jingming released the original frame of the Hundred Demons Spectrum)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E7%99%BE%E5%A6%96%E8%B0%B1%E5%8E%9F%E5%A7%8B%E5%B8%A7%23) `89.9K 🔥` `-26%`
1. [高铁咸猪手男子被拘留](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%92%B8%E7%8C%AA%E6%89%8B%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8B%98%E7%95%99%23) `82.3K 🔥` `-37%`
1. [七夕真的不是和谁过都一样 (The Chinese Valentine's Day is really not the same for everyone.)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E7%9C%9F%E7%9A%84%E4%B8%8D%E6%98%AF%E5%92%8C%E8%B0%81%E8%BF%87%E9%83%BD%E4%B8%80%E6%A0%B7%23) `81.4K 🔥` `-23%`
1. [女孩顺风车内暴晒2小时向家人求救](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%A1%BA%E9%A3%8E%E8%BD%A6%E5%86%85%E6%9A%B4%E6%99%922%E5%B0%8F%E6%97%B6%E5%90%91%E5%AE%B6%E4%BA%BA%E6%B1%82%E6%95%91%23) `78.9K 🔥` `-32%`
1. [陈奕恒哭了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%93%AD%E4%BA%86%23) `77.8K 🔥` `-35%`
1. [桃黑黑回应控诉 (Tao Hei Hei responded to the accusation)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%9B%9E%E5%BA%94%E6%8E%A7%E8%AF%89%23) `77.5K 🔥` `-22%`
1. [结婚后才明白的事 (Things I realized after getting married)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%8B%23) `77.1K 🔥` `-21%`
1. [金价回调半年抛压基本释放](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%9B%9E%E8%B0%83%E5%8D%8A%E5%B9%B4%E6%8A%9B%E5%8E%8B%E5%9F%BA%E6%9C%AC%E9%87%8A%E6%94%BE%23) `73.1K 🔥` `-40%`
1. [陈奕恒腹肌](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E8%85%B9%E8%82%8C%23) `73.0K 🔥` `-26%`
1. [段奕宏叫王宝强宝宝](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%95%E5%AE%8F%E5%8F%AB%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%AE%9D%E5%AE%9D%23) `71.1K 🔥` `-31%`
1. [学籍顶替案哥哥称对弟弟感情复杂](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%A7%B0%E5%AF%B9%E5%BC%9F%E5%BC%9F%E6%84%9F%E6%83%85%E5%A4%8D%E6%9D%82%23) `70.6K 🔥` `-29%`

Updated at 2026-08-18 01:37:12

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
