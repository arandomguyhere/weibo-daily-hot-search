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

1. [中共中央举行发布会](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%85%B1%E4%B8%AD%E5%A4%AE%E4%B8%BE%E8%A1%8C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.0M 🔥` `NEW`
1. [金价暴跌消费者发声](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%91%E5%A3%B0%23) `710.2K 🔥` `NEW`
1. [全球销量No.1的卫生巾](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%94%80%E9%87%8FNo.1%E7%9A%84%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `480.4K 🔥` `NEW`
1. [孩子不吃饭医生点肯德基找原因](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%90%83%E9%A5%AD%E5%8C%BB%E7%94%9F%E7%82%B9%E8%82%AF%E5%BE%B7%E5%9F%BA%E6%89%BE%E5%8E%9F%E5%9B%A0%23) `450.5K 🔥` `NEW`
1. [369忘了跟Bin碰拳](https://s.weibo.com/weibo?q=%23369%E5%BF%98%E4%BA%86%E8%B7%9FBin%E7%A2%B0%E6%8B%B3%23) `449.8K 🔥` `NEW`
1. [王楚钦推动勒布伦挑战孙颖莎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8E%A8%E5%8A%A8%E5%8B%92%E5%B8%83%E4%BC%A6%E6%8C%91%E6%88%98%E5%AD%99%E9%A2%96%E8%8E%8E%23) `448.5K 🔥` `NEW`
1. [问界新M8开放配置选择](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E6%96%B0M8%E5%BC%80%E6%94%BE%E9%85%8D%E7%BD%AE%E9%80%89%E6%8B%A9%23) `447.5K 🔥` `NEW`
1. [A股科技股估值进入相对低位](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%A7%91%E6%8A%80%E8%82%A1%E4%BC%B0%E5%80%BC%E8%BF%9B%E5%85%A5%E7%9B%B8%E5%AF%B9%E4%BD%8E%E4%BD%8D%23) `446.9K 🔥` `NEW`
1. [C罗15分钟3球](https://s.weibo.com/weibo?q=%23C%E7%BD%9715%E5%88%86%E9%92%9F3%E7%90%83%23) `444.8K 🔥` `NEW`
1. [Karsa心疼369](https://s.weibo.com/weibo?q=%23Karsa%E5%BF%83%E7%96%BC369%23) `440.9K 🔥` `NEW`
1. [韩乔生谈C罗第67次帽子戏法](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B9%94%E7%94%9F%E8%B0%88C%E7%BD%97%E7%AC%AC67%E6%AC%A1%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `438.4K 🔥` `NEW`
1. [博主建议中国高铁学习德国设计](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E5%BB%BA%E8%AE%AE%E4%B8%AD%E5%9B%BD%E9%AB%98%E9%93%81%E5%AD%A6%E4%B9%A0%E5%BE%B7%E5%9B%BD%E8%AE%BE%E8%AE%A1%23) `434.5K 🔥` `NEW`
1. [马天宇许飞上树喊话厉娜](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%AE%B8%E9%A3%9E%E4%B8%8A%E6%A0%91%E5%96%8A%E8%AF%9D%E5%8E%89%E5%A8%9C%23) `434.3K 🔥` `NEW`
1. [大体老师被这样对待谁还愿捐献](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E8%A2%AB%E8%BF%99%E6%A0%B7%E5%AF%B9%E5%BE%85%E8%B0%81%E8%BF%98%E6%84%BF%E6%8D%90%E7%8C%AE%23) `415.2K 🔥` `NEW`
1. [谷歌 A股](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%20A%E8%82%A1%23) `367.5K 🔥` `NEW`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `367.4K 🔥` `NEW`
1. [C罗进球疑云](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9B%E7%90%83%E7%96%91%E4%BA%91%23) `365.4K 🔥` `NEW`
1. [八尾](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%B0%BE%23) `363.5K 🔥` `NEW`
1. [TES战胜BLG](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CBLG%23) `361.0K 🔥` `NEW`
1. [许飞 厉娜](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%8E%89%E5%A8%9C%23) `357.1K 🔥` `NEW`
1. [党的二十届五中全会精神](https://s.weibo.com/weibo?q=%23%E5%85%9A%E7%9A%84%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%E7%B2%BE%E7%A5%9E%23) `355.3K 🔥` `NEW`
1. [辛芷蕾胡先煦逛到裸体浴场了](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%83%A1%E5%85%88%E7%85%A6%E9%80%9B%E5%88%B0%E8%A3%B8%E4%BD%93%E6%B5%B4%E5%9C%BA%E4%BA%86%23) `351.6K 🔥` `NEW`
1. [为何田曦薇和妹妹活得截然不同](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E7%94%B0%E6%9B%A6%E8%96%87%E5%92%8C%E5%A6%B9%E5%A6%B9%E6%B4%BB%E5%BE%97%E6%88%AA%E7%84%B6%E4%B8%8D%E5%90%8C%23) `351.2K 🔥` `NEW`
1. [Viper状态](https://s.weibo.com/weibo?q=%23Viper%E7%8A%B6%E6%80%81%23) `346.4K 🔥` `NEW`
1. [五中全会最重要成果](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%E6%9C%80%E9%87%8D%E8%A6%81%E6%88%90%E6%9E%9C%23) `338.4K 🔥` `NEW`
1. [李宇春得知后先自责道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E5%BE%97%E7%9F%A5%E5%90%8E%E5%85%88%E8%87%AA%E8%B4%A3%E9%81%93%E6%AD%89%23) `320.1K 🔥` `NEW`
1. [BLG瑞士轮生死战现状](https://s.weibo.com/weibo?q=%23BLG%E7%91%9E%E5%A3%AB%E8%BD%AE%E7%94%9F%E6%AD%BB%E6%88%98%E7%8E%B0%E7%8A%B6%23) `317.9K 🔥` `NEW`
1. [X教授演员去世](https://s.weibo.com/weibo?q=%23X%E6%95%99%E6%8E%88%E6%BC%94%E5%91%98%E5%8E%BB%E4%B8%96%23) `309.5K 🔥` `NEW`
1. [三丽鸥](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%BD%E9%B8%A5%23) `269.6K 🔥` `NEW`
1. [TES落后5千经济翻盘BLG](https://s.weibo.com/weibo?q=%23TES%E8%90%BD%E5%90%8E5%E5%8D%83%E7%BB%8F%E6%B5%8E%E7%BF%BB%E7%9B%98BLG%23) `221.4K 🔥` `NEW`
1. [BLG对战TES](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98TES%23) `219.2K 🔥` `NEW`
1. [因为觉得很尴尬所以跟他结婚了](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E8%A7%89%E5%BE%97%E5%BE%88%E5%B0%B4%E5%B0%AC%E6%89%80%E4%BB%A5%E8%B7%9F%E4%BB%96%E7%BB%93%E5%A9%9A%E4%BA%86%23) `216.5K 🔥` `NEW`
1. [黄婉均为了和热巴同框砸了13万置办首饰](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A9%89%E5%9D%87%E4%B8%BA%E4%BA%86%E5%92%8C%E7%83%AD%E5%B7%B4%E5%90%8C%E6%A1%86%E7%A0%B8%E4%BA%8613%E4%B8%87%E7%BD%AE%E5%8A%9E%E9%A6%96%E9%A5%B0%23) `204.6K 🔥` `NEW`
1. [苹果高管回应iPadmini8被锁60Hz](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E9%AB%98%E7%AE%A1%E5%9B%9E%E5%BA%94iPadmini8%E8%A2%AB%E9%94%8160Hz%23) `176.1K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `173.0K 🔥` `NEW`
1. [姜妍看出来真的很爱做饭了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E7%9C%8B%E5%87%BA%E6%9D%A5%E7%9C%9F%E7%9A%84%E5%BE%88%E7%88%B1%E5%81%9A%E9%A5%AD%E4%BA%86%23) `169.8K 🔥` `NEW`
1. [国防部回应美分析中国大陆攻台时间](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%88%86%E6%9E%90%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E6%94%BB%E5%8F%B0%E6%97%B6%E9%97%B4%23) `164.4K 🔥` `NEW`
1. [开拓者官宣执行杨瀚森第三年合同](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8B%93%E8%80%85%E5%AE%98%E5%AE%A3%E6%89%A7%E8%A1%8C%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%AC%AC%E4%B8%89%E5%B9%B4%E5%90%88%E5%90%8C%23) `163.8K 🔥` `NEW`
1. [文吉儿谢完王子璇宝宝坐去副驾了](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E8%B0%A2%E5%AE%8C%E7%8E%8B%E5%AD%90%E7%92%87%E5%AE%9D%E5%AE%9D%E5%9D%90%E5%8E%BB%E5%89%AF%E9%A9%BE%E4%BA%86%23) `159.5K 🔥` `NEW`
1. [米勒和管泽元谈369世界赛人气高](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8B%92%E5%92%8C%E7%AE%A1%E6%B3%BD%E5%85%83%E8%B0%88369%E4%B8%96%E7%95%8C%E8%B5%9B%E4%BA%BA%E6%B0%94%E9%AB%98%23) `154.5K 🔥` `NEW`
1. [常吃这类主食抗炎还减重](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%83%E8%BF%99%E7%B1%BB%E4%B8%BB%E9%A3%9F%E6%8A%97%E7%82%8E%E8%BF%98%E5%87%8F%E9%87%8D%23) `145.4K 🔥` `NEW`
1. [杨瀚森方回应开拓者执行第三年合同](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E6%96%B9%E5%9B%9E%E5%BA%94%E5%BC%80%E6%8B%93%E8%80%85%E6%89%A7%E8%A1%8C%E7%AC%AC%E4%B8%89%E5%B9%B4%E5%90%88%E5%90%8C%23) `140.5K 🔥` `NEW`
1. [Knight永恩团战0伤害](https://s.weibo.com/weibo?q=%23Knight%E6%B0%B8%E6%81%A9%E5%9B%A2%E6%88%980%E4%BC%A4%E5%AE%B3%23) `126.6K 🔥` `NEW`
1. [全面从严治党是全党的共同责任](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%9D%A2%E4%BB%8E%E4%B8%A5%E6%B2%BB%E5%85%9A%E6%98%AF%E5%85%A8%E5%85%9A%E7%9A%84%E5%85%B1%E5%90%8C%E8%B4%A3%E4%BB%BB%23) `600.0K 🔥` `+64%`
1. [数说中国海洋经济动力澎湃](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E6%B5%B7%E6%B4%8B%E7%BB%8F%E6%B5%8E%E5%8A%A8%E5%8A%9B%E6%BE%8E%E6%B9%83%23) `444.0K 🔥` `+38%`
1. [把大体老师遗骨当玩物配当医生吗](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E9%81%97%E9%AA%A8%E5%BD%93%E7%8E%A9%E7%89%A9%E9%85%8D%E5%BD%93%E5%8C%BB%E7%94%9F%E5%90%97%23) `440.7K 🔥` `+47%`
1. [人民日报锐评年轻人养不起老人了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E9%94%90%E8%AF%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%85%BB%E4%B8%8D%E8%B5%B7%E8%80%81%E4%BA%BA%E4%BA%86%23) `436.5K 🔥` `+40%`
1. [李宇春翻查何洁婚礼短信到凌晨两点](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E7%BF%BB%E6%9F%A5%E4%BD%95%E6%B4%81%E5%A9%9A%E7%A4%BC%E7%9F%AD%E4%BF%A1%E5%88%B0%E5%87%8C%E6%99%A8%E4%B8%A4%E7%82%B9%23) `353.4K 🔥` `+265%`
1. [红果短剧凭什么这么红](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%87%AD%E4%BB%80%E4%B9%88%E8%BF%99%E4%B9%88%E7%BA%A2%23) `336.7K 🔥` `+388%`
1. [红果红了](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%BA%A2%E4%BA%86%23) `359.5K 🔥` `-45%`

Updated at 2026-10-30 10:31:58

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
