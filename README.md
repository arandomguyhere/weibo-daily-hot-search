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

1. [白小纯厉娜都拿不出证据](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%8E%89%E5%A8%9C%E9%83%BD%E6%8B%BF%E4%B8%8D%E5%87%BA%E8%AF%81%E6%8D%AE%23) `1.2M 🔥` `NEW`
1. [武大教师曾某某被举报事件调查结果](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E6%95%99%E5%B8%88%E6%9B%BE%E6%9F%90%E6%9F%90%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%BA%8B%E4%BB%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `819.5K 🔥` `NEW`
1. [城市轨道交通的万里版图](https://s.weibo.com/weibo?q=%23%E5%9F%8E%E5%B8%82%E8%BD%A8%E9%81%93%E4%BA%A4%E9%80%9A%E7%9A%84%E4%B8%87%E9%87%8C%E7%89%88%E5%9B%BE%23) `687.0K 🔥` `NEW`
1. [董明珠称汽车行业有老鼠](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E7%A7%B0%E6%B1%BD%E8%BD%A6%E8%A1%8C%E4%B8%9A%E6%9C%89%E8%80%81%E9%BC%A0%23) `467.9K 🔥` `NEW`
1. [神23回地球](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E5%9B%9E%E5%9C%B0%E7%90%83%23) `384.9K 🔥` `NEW`
1. [许飞口碑](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8F%A3%E7%A2%91%23) `380.9K 🔥` `NEW`
1. [华为长鑫将与三星海力士正面交锋](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%95%BF%E9%91%AB%E5%B0%86%E4%B8%8E%E4%B8%89%E6%98%9F%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%AD%A3%E9%9D%A2%E4%BA%A4%E9%94%8B%23) `341.1K 🔥` `NEW`
1. [中国男篮vs沙特男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%B2%99%E7%89%B9%E7%94%B7%E7%AF%AE%23) `340.8K 🔥` `NEW`
1. [安大副校长付某被免职](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%A4%A7%E5%89%AF%E6%A0%A1%E9%95%BF%E4%BB%98%E6%9F%90%E8%A2%AB%E5%85%8D%E8%81%8C%23) `340.8K 🔥` `NEW`
1. [全球死考火出圈](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%AD%BB%E8%80%83%E7%81%AB%E5%87%BA%E5%9C%88%23) `337.9K 🔥` `NEW`
1. [三只松鼠员工必须用鼠取名](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E5%91%98%E5%B7%A5%E5%BF%85%E9%A1%BB%E7%94%A8%E9%BC%A0%E5%8F%96%E5%90%8D%23) `336.1K 🔥` `NEW`
1. [武汉大学](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%23) `333.0K 🔥` `NEW`
1. [越南直播卖货太抽象了](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E7%9B%B4%E6%92%AD%E5%8D%96%E8%B4%A7%E5%A4%AA%E6%8A%BD%E8%B1%A1%E4%BA%86%23) `331.7K 🔥` `NEW`
1. [许飞 厉娜](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%8E%89%E5%A8%9C%23) `330.2K 🔥` `NEW`
1. [哪个大学没名气但某领域顶尖](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E5%A4%A7%E5%AD%A6%E6%B2%A1%E5%90%8D%E6%B0%94%E4%BD%86%E6%9F%90%E9%A2%86%E5%9F%9F%E9%A1%B6%E5%B0%96%23) `327.3K 🔥` `NEW`
1. [周杰伦转发中国台北帖文绿媒破防](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%BD%AC%E5%8F%91%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E5%B8%96%E6%96%87%E7%BB%BF%E5%AA%92%E7%A0%B4%E9%98%B2%23) `325.0K 🔥` `NEW`
1. [网友喊话芒果退钱](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%96%8A%E8%AF%9D%E8%8A%92%E6%9E%9C%E9%80%80%E9%92%B1%23) `323.9K 🔥` `NEW`
1. [刘亦菲坐高铁去上海](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9D%90%E9%AB%98%E9%93%81%E5%8E%BB%E4%B8%8A%E6%B5%B7%23) `321.7K 🔥` `NEW`
1. [向华强不允许女儿来见他](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%8D%8E%E5%BC%BA%E4%B8%8D%E5%85%81%E8%AE%B8%E5%A5%B3%E5%84%BF%E6%9D%A5%E8%A7%81%E4%BB%96%23) `320.5K 🔥` `NEW`
1. [PEL问白小纯青稚和好没](https://s.weibo.com/weibo?q=%23PEL%E9%97%AE%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E5%92%8C%E5%A5%BD%E6%B2%A1%23) `320.2K 🔥` `NEW`
1. [辅助驾驶新品牌星驰](https://s.weibo.com/weibo?q=%23%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E6%96%B0%E5%93%81%E7%89%8C%E6%98%9F%E9%A9%B0%23) `312.3K 🔥` `NEW`
1. [北大教师右眼致残医疗维权11年](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%95%99%E5%B8%88%E5%8F%B3%E7%9C%BC%E8%87%B4%E6%AE%8B%E5%8C%BB%E7%96%97%E7%BB%B4%E6%9D%8311%E5%B9%B4%23) `311.5K 🔥` `NEW`
1. [詹姆斯单节14分打穿热火内线](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8D%95%E8%8A%8214%E5%88%86%E6%89%93%E7%A9%BF%E7%83%AD%E7%81%AB%E5%86%85%E7%BA%BF%23) `306.1K 🔥` `NEW`
1. [后会友期看得我精神哮喘了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%9C%8B%E5%BE%97%E6%88%91%E7%B2%BE%E7%A5%9E%E5%93%AE%E5%96%98%E4%BA%86%23) `301.1K 🔥` `NEW`
1. [刘亦菲好嫩](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%A5%BD%E5%AB%A9%23) `299.0K 🔥` `NEW`
1. [画地为牢正片播成军事频道](https://s.weibo.com/weibo?q=%23%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E6%AD%A3%E7%89%87%E6%92%AD%E6%88%90%E5%86%9B%E4%BA%8B%E9%A2%91%E9%81%93%23) `296.6K 🔥` `NEW`
1. [广州车展](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E8%BD%A6%E5%B1%95%23) `293.5K 🔥` `NEW`
1. [中国六座城市跻身世界一线](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%AD%E5%BA%A7%E5%9F%8E%E5%B8%82%E8%B7%BB%E8%BA%AB%E4%B8%96%E7%95%8C%E4%B8%80%E7%BA%BF%23) `293.4K 🔥` `NEW`
1. [陈赫和许婧是长达13年的校园初恋](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%92%8C%E8%AE%B8%E5%A9%A7%E6%98%AF%E9%95%BF%E8%BE%BE13%E5%B9%B4%E7%9A%84%E6%A0%A1%E5%9B%AD%E5%88%9D%E6%81%8B%23) `292.1K 🔥` `NEW`
1. [国家队加仓A股公司名单](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%8A%A0%E4%BB%93A%E8%82%A1%E5%85%AC%E5%8F%B8%E5%90%8D%E5%8D%95%23) `291.8K 🔥` `NEW`
1. [易峥点赞](https://s.weibo.com/weibo?q=%23%E6%98%93%E5%B3%A5%E7%82%B9%E8%B5%9E%23) `291.0K 🔥` `NEW`
1. [建议大家停止碎片化护肤](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%81%9C%E6%AD%A2%E7%A2%8E%E7%89%87%E5%8C%96%E6%8A%A4%E8%82%A4%23) `290.7K 🔥` `NEW`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `289.5K 🔥` `NEW`
1. [妻子说蔡磊做的事对家庭是毁灭的](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E8%AF%B4%E8%94%A1%E7%A3%8A%E5%81%9A%E7%9A%84%E4%BA%8B%E5%AF%B9%E5%AE%B6%E5%BA%AD%E6%98%AF%E6%AF%81%E7%81%AD%E7%9A%84%23) `289.0K 🔥` `NEW`
1. [漠河舞厅 陈飞宇王楚然](https://s.weibo.com/weibo?q=%23%E6%BC%A0%E6%B2%B3%E8%88%9E%E5%8E%85%20%E9%99%88%E9%A3%9E%E5%AE%87%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `288.3K 🔥` `NEW`
1. [文吉儿0镜头原因](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF0%E9%95%9C%E5%A4%B4%E5%8E%9F%E5%9B%A0%23) `287.7K 🔥` `NEW`
1. [董思成工作室严正声明](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `287.0K 🔥` `NEW`
1. [刘恺威黎纪君 生理性喜欢](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E9%BB%8E%E7%BA%AA%E5%90%9B%20%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%23) `286.4K 🔥` `NEW`
1. [Angelababy雷霆高光](https://s.weibo.com/weibo?q=%23Angelababy%E9%9B%B7%E9%9C%86%E9%AB%98%E5%85%89%23) `285.9K 🔥` `NEW`
1. [手搓论文竟测出25%以上疑似AI](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%90%93%E8%AE%BA%E6%96%87%E7%AB%9F%E6%B5%8B%E5%87%BA25%25%E4%BB%A5%E4%B8%8A%E7%96%91%E4%BC%BCAI%23) `284.8K 🔥` `NEW`
1. [路易号响起古典乐](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E6%98%93%E5%8F%B7%E5%93%8D%E8%B5%B7%E5%8F%A4%E5%85%B8%E4%B9%90%23) `284.6K 🔥` `NEW`
1. [养父母卖房供子留学却寒心](https://s.weibo.com/weibo?q=%23%E5%85%BB%E7%88%B6%E6%AF%8D%E5%8D%96%E6%88%BF%E4%BE%9B%E5%AD%90%E7%95%99%E5%AD%A6%E5%8D%B4%E5%AF%92%E5%BF%83%23) `283.4K 🔥` `NEW`
1. [向太继女烟头烫伤各执一词](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%BB%A7%E5%A5%B3%E7%83%9F%E5%A4%B4%E7%83%AB%E4%BC%A4%E5%90%84%E6%89%A7%E4%B8%80%E8%AF%8D%23) `282.8K 🔥` `NEW`
1. [BLG接机Viper](https://s.weibo.com/weibo?q=%23BLG%E6%8E%A5%E6%9C%BAViper%23) `282.1K 🔥` `NEW`
1. [引望将推出新的智驾品牌](https://s.weibo.com/weibo?q=%23%E5%BC%95%E6%9C%9B%E5%B0%86%E6%8E%A8%E5%87%BA%E6%96%B0%E7%9A%84%E6%99%BA%E9%A9%BE%E5%93%81%E7%89%8C%23) `280.8K 🔥` `NEW`
1. [学生用翻页笔偷点听写答案](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F%E7%94%A8%E7%BF%BB%E9%A1%B5%E7%AC%94%E5%81%B7%E7%82%B9%E5%90%AC%E5%86%99%E7%AD%94%E6%A1%88%23) `280.4K 🔥` `NEW`
1. [Angelababy白衣套装半扎发](https://s.weibo.com/weibo?q=%23Angelababy%E7%99%BD%E8%A1%A3%E5%A5%97%E8%A3%85%E5%8D%8A%E6%89%8E%E5%8F%91%23) `279.4K 🔥` `NEW`
1. [许家印被公开谴责](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E8%A2%AB%E5%85%AC%E5%BC%80%E8%B0%B4%E8%B4%A3%23) `278.8K 🔥` `NEW`
1. [跟着LV直播听音乐会](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80LV%E7%9B%B4%E6%92%AD%E5%90%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%23) `278.0K 🔥` `NEW`

Updated at 2026-11-26 22:18:52

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
