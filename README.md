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

1. [警方对捐日本侵华罪证少年启动保护 (Police initiate protection against teenager who donated evidence of Japanese invasion of China)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%AF%B9%E6%8D%90%E6%97%A5%E6%9C%AC%E4%BE%B5%E5%8D%8E%E7%BD%AA%E8%AF%81%E5%B0%91%E5%B9%B4%E5%90%AF%E5%8A%A8%E4%BF%9D%E6%8A%A4%23) `1.2M 🔥` `NEW`
1. [老人高铁如厕掉落金戒指求助无果](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%AB%98%E9%93%81%E5%A6%82%E5%8E%95%E6%8E%89%E8%90%BD%E9%87%91%E6%88%92%E6%8C%87%E6%B1%82%E5%8A%A9%E6%97%A0%E6%9E%9C%23) `840.2K 🔥` `NEW`
1. [有种安心叫人民子弟兵](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%A7%8D%E5%AE%89%E5%BF%83%E5%8F%AB%E4%BA%BA%E6%B0%91%E5%AD%90%E5%BC%9F%E5%85%B5%23) `791.3K 🔥` `NEW`
1. [你不用去赛里木湖了你没白活](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%8D%E7%94%A8%E5%8E%BB%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E4%BA%86%E4%BD%A0%E6%B2%A1%E7%99%BD%E6%B4%BB%23) `760.9K 🔥` `NEW`
1. [喜羊羊新作画面疑似擦边](https://s.weibo.com/weibo?q=%23%E5%96%9C%E7%BE%8A%E7%BE%8A%E6%96%B0%E4%BD%9C%E7%94%BB%E9%9D%A2%E7%96%91%E4%BC%BC%E6%93%A6%E8%BE%B9%23) `735.9K 🔥` `NEW`
1. [莫得闲今日开播](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%97%E9%97%B2%E4%BB%8A%E6%97%A5%E5%BC%80%E6%92%AD%23) `627.4K 🔥` `NEW`
1. [高校辟谣开设福鼎肉片专业](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E8%BE%9F%E8%B0%A3%E5%BC%80%E8%AE%BE%E7%A6%8F%E9%BC%8E%E8%82%89%E7%89%87%E4%B8%93%E4%B8%9A%23) `567.5K 🔥` `NEW`
1. [奶奶给我做的减脂餐](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E7%BB%99%E6%88%91%E5%81%9A%E7%9A%84%E5%87%8F%E8%84%82%E9%A4%90%23) `516.4K 🔥` `NEW`
1. [送到你床上涉事邮政快递点被查](https://s.weibo.com/weibo?q=%23%E9%80%81%E5%88%B0%E4%BD%A0%E5%BA%8A%E4%B8%8A%E6%B6%89%E4%BA%8B%E9%82%AE%E6%94%BF%E5%BF%AB%E9%80%92%E7%82%B9%E8%A2%AB%E6%9F%A5%23) `461.7K 🔥` `NEW`
1. [美羊羊捂裙镜头是否属于过度解读](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BE%8A%E7%BE%8A%E6%8D%82%E8%A3%99%E9%95%9C%E5%A4%B4%E6%98%AF%E5%90%A6%E5%B1%9E%E4%BA%8E%E8%BF%87%E5%BA%A6%E8%A7%A3%E8%AF%BB%23) `325.8K 🔥` `NEW`
1. [公司裁员从胖的开始 (The company's layoffs start with the fat ones)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%A3%81%E5%91%98%E4%BB%8E%E8%83%96%E7%9A%84%E5%BC%80%E5%A7%8B%23) `275.9K 🔥` `NEW`
1. [小澈直播被封](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E7%9B%B4%E6%92%AD%E8%A2%AB%E5%B0%81%23) `270.7K 🔥` `NEW`
1. [檀健次八月在剧组拍戏](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%85%AB%E6%9C%88%E5%9C%A8%E5%89%A7%E7%BB%84%E6%8B%8D%E6%88%8F%23) `207.7K 🔥` `NEW`
1. [2026夏日嘉年华](https://s.weibo.com/weibo?q=%232026%E5%A4%8F%E6%97%A5%E5%98%89%E5%B9%B4%E5%8D%8E%23) `207.6K 🔥` `NEW`
1. [用AI的方式打开CJ骁龙馆](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E7%9A%84%E6%96%B9%E5%BC%8F%E6%89%93%E5%BC%80CJ%E9%AA%81%E9%BE%99%E9%A6%86%23) `206.8K 🔥` `NEW`
1. [车企7月份销量数据](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%817%E6%9C%88%E4%BB%BD%E9%94%80%E9%87%8F%E6%95%B0%E6%8D%AE%23) `206.2K 🔥` `NEW`
1. [林子烨也在看TF四代突围](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E4%B9%9F%E5%9C%A8%E7%9C%8BTF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B4%23) `205.5K 🔥` `NEW`
1. [32岁男子在酒吧遭黑社会围殴身亡](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E7%94%B7%E5%AD%90%E5%9C%A8%E9%85%92%E5%90%A7%E9%81%AD%E9%BB%91%E7%A4%BE%E4%BC%9A%E5%9B%B4%E6%AE%B4%E8%BA%AB%E4%BA%A1%23) `204.7K 🔥` `NEW`
1. [211大学生应聘暑假工变家教](https://s.weibo.com/weibo?q=%23211%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%BA%94%E8%81%98%E6%9A%91%E5%81%87%E5%B7%A5%E5%8F%98%E5%AE%B6%E6%95%99%23) `204.5K 🔥` `NEW`
1. [田曦薇武汉豆皮梦女](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%AD%A6%E6%B1%89%E8%B1%86%E7%9A%AE%E6%A2%A6%E5%A5%B3%23) `203.8K 🔥` `NEW`
1. [女生老拉肚子发现吸管内壁全是污垢 (A girl who keeps having diarrhea finds that the inner wall of the straw is full of dirt)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%80%81%E6%8B%89%E8%82%9A%E5%AD%90%E5%8F%91%E7%8E%B0%E5%90%B8%E7%AE%A1%E5%86%85%E5%A3%81%E5%85%A8%E6%98%AF%E6%B1%A1%E5%9E%A2%23) `203.3K 🔥` `NEW`
1. [金高银金泰梨韩国90花断层第一](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%E9%87%91%E6%B3%B0%E6%A2%A8%E9%9F%A9%E5%9B%BD90%E8%8A%B1%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `202.7K 🔥` `NEW`
1. [3中国留学生在澳遭2女子辱骂殴打](https://s.weibo.com/weibo?q=%233%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%9C%A8%E6%BE%B3%E9%81%AD2%E5%A5%B3%E5%AD%90%E8%BE%B1%E9%AA%82%E6%AE%B4%E6%89%93%23) `202.0K 🔥` `NEW`
1. [航空公司不满携程返还天价退票费](https://s.weibo.com/weibo?q=%23%E8%88%AA%E7%A9%BA%E5%85%AC%E5%8F%B8%E4%B8%8D%E6%BB%A1%E6%90%BA%E7%A8%8B%E8%BF%94%E8%BF%98%E5%A4%A9%E4%BB%B7%E9%80%80%E7%A5%A8%E8%B4%B9%23) `201.2K 🔥` `NEW`
1. [AI女团选秀108位参赛9人成团](https://s.weibo.com/weibo?q=%23AI%E5%A5%B3%E5%9B%A2%E9%80%89%E7%A7%80108%E4%BD%8D%E5%8F%82%E8%B5%9B9%E4%BA%BA%E6%88%90%E5%9B%A2%23) `200.5K 🔥` `NEW`
1. [8000米高峰雪崩4具遗体被找到](https://s.weibo.com/weibo?q=%238000%E7%B1%B3%E9%AB%98%E5%B3%B0%E9%9B%AA%E5%B4%A94%E5%85%B7%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `199.7K 🔥` `NEW`
1. [莫得闲](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%97%E9%97%B2%23) `198.8K 🔥` `NEW`
1. [CORTIS新歌歌词引争议](https://s.weibo.com/weibo?q=%23CORTIS%E6%96%B0%E6%AD%8C%E6%AD%8C%E8%AF%8D%E5%BC%95%E4%BA%89%E8%AE%AE%23) `198.5K 🔥` `NEW`
1. [少年捐日军罪证或为孤品](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E6%8D%90%E6%97%A5%E5%86%9B%E7%BD%AA%E8%AF%81%E6%88%96%E4%B8%BA%E5%AD%A4%E5%93%81%23) `197.1K 🔥` `NEW`
1. [明日方舟](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `196.8K 🔥` `NEW`
1. [樊振东谈军人身份 (Fan Zhendong talks about military status)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B0%88%E5%86%9B%E4%BA%BA%E8%BA%AB%E4%BB%BD%23) `173.2K 🔥` `NEW`
1. [高以翔生前女友称仅用10分钟顺产成功](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%A5%E7%BF%94%E7%94%9F%E5%89%8D%E5%A5%B3%E5%8F%8B%E7%A7%B0%E4%BB%85%E7%94%A810%E5%88%86%E9%92%9F%E9%A1%BA%E4%BA%A7%E6%88%90%E5%8A%9F%23) `171.5K 🔥` `NEW`
1. [DeepSeekV4Flash正式版跑分出炉](https://s.weibo.com/weibo?q=%23DeepSeekV4Flash%E6%AD%A3%E5%BC%8F%E7%89%88%E8%B7%91%E5%88%86%E5%87%BA%E7%82%89%23) `166.3K 🔥` `NEW`
1. [时代少年团七月行程图更新](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%83%E6%9C%88%E8%A1%8C%E7%A8%8B%E5%9B%BE%E6%9B%B4%E6%96%B0%23) `164.1K 🔥` `NEW`
1. [哈兰德晒与乔丹合照](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%99%92%E4%B8%8E%E4%B9%94%E4%B8%B9%E5%90%88%E7%85%A7%23) `162.4K 🔥` `NEW`
1. [罗正 穷人美](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%20%E7%A9%B7%E4%BA%BA%E7%BE%8E%23) `152.8K 🔥` `NEW`
1. [精神科医生10级美颜证件照火了](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%A5%9E%E7%A7%91%E5%8C%BB%E7%94%9F10%E7%BA%A7%E7%BE%8E%E9%A2%9C%E8%AF%81%E4%BB%B6%E7%85%A7%E7%81%AB%E4%BA%86%23) `144.0K 🔥` `NEW`
1. [当你坐廉航不想花钱买行李额时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E5%9D%90%E5%BB%89%E8%88%AA%E4%B8%8D%E6%83%B3%E8%8A%B1%E9%92%B1%E4%B9%B0%E8%A1%8C%E6%9D%8E%E9%A2%9D%E6%97%B6%23) `135.7K 🔥` `NEW`
1. [迪丽热巴 时尚先生](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E6%97%B6%E5%B0%9A%E5%85%88%E7%94%9F%23) `135.6K 🔥` `NEW`
1. [师兄太稳健](https://s.weibo.com/weibo?q=%23%E5%B8%88%E5%85%84%E5%A4%AA%E7%A8%B3%E5%81%A5%23) `132.5K 🔥` `NEW`
1. [32岁男子在香港一酒吧被围殴身亡 (32-year-old man was beaten to death in a Hong Kong bar)](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E7%94%B7%E5%AD%90%E5%9C%A8%E9%A6%99%E6%B8%AF%E4%B8%80%E9%85%92%E5%90%A7%E8%A2%AB%E5%9B%B4%E6%AE%B4%E8%BA%AB%E4%BA%A1%23) `131.5K 🔥` `NEW`
1. [美媒称特朗普下令再袭伊朗迫其投降](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8B%E4%BB%A4%E5%86%8D%E8%A2%AD%E4%BC%8A%E6%9C%97%E8%BF%AB%E5%85%B6%E6%8A%95%E9%99%8D%23) `129.6K 🔥` `NEW`
1. [金靖直言丑的基因很强大](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E7%9B%B4%E8%A8%80%E4%B8%91%E7%9A%84%E5%9F%BA%E5%9B%A0%E5%BE%88%E5%BC%BA%E5%A4%A7%23) `315.0K 🔥` `+120%`
1. [EWC](https://s.weibo.com/weibo?q=%23EWC%23) `192.9K 🔥` `+85%`
1. [慢性炎症是至少8种癌症的帮凶](https://s.weibo.com/weibo?q=%23%E6%85%A2%E6%80%A7%E7%82%8E%E7%97%87%E6%98%AF%E8%87%B3%E5%B0%918%E7%A7%8D%E7%99%8C%E7%97%87%E7%9A%84%E5%B8%AE%E5%87%B6%23) `197.7K 🔥`
1. [张雅琪挑战玩手机](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%8C%91%E6%88%98%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `201.1K 🔥` `-24%`
1. [周星驰质疑董宇辉看大话西游500遍](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E8%B4%A8%E7%96%91%E8%91%A3%E5%AE%87%E8%BE%89%E7%9C%8B%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8500%E9%81%8D%23) `196.4K 🔥` `-74%`
1. [公瑾爆蛋创始人发声 (The founder of Gongjin Baodan speaks out)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%91%BE%E7%88%86%E8%9B%8B%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `195.1K 🔥` `-24%`
1. [房主任被停演3个月](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E8%A2%AB%E5%81%9C%E6%BC%943%E4%B8%AA%E6%9C%88%23) `190.9K 🔥` `-57%`
1. [台风白海豚已达17级 (Typhoon White Dolphin has reached level 17)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E8%BE%BE17%E7%BA%A7%23) `140.7K 🔥` `-88%`
1. [三大运营商将停止第三方互联网渠道办卡](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%B0%86%E5%81%9C%E6%AD%A2%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BA%92%E8%81%94%E7%BD%91%E6%B8%A0%E9%81%93%E5%8A%9E%E5%8D%A1%23) `128.7K 🔥` `-50%`

Updated at 2026-08-01 12:38:17

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
