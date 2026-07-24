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

1. [微信撤回消息后可删除提示字 (Prompt words can be deleted after WeChat withdraws the message)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF%E5%90%8E%E5%8F%AF%E5%88%A0%E9%99%A4%E6%8F%90%E7%A4%BA%E5%AD%97%23) `2.4M 🔥` `NEW`
1. [长江十年行](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%8D%81%E5%B9%B4%E8%A1%8C%23) `1.4M 🔥` `NEW`
1. [赛里木湖 互殴](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%20%E4%BA%92%E6%AE%B4%23) `1.3M 🔥` `NEW`
1. [四字名已经满足不了90后家长了](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%AD%97%E5%90%8D%E5%B7%B2%E7%BB%8F%E6%BB%A1%E8%B6%B3%E4%B8%8D%E4%BA%8690%E5%90%8E%E5%AE%B6%E9%95%BF%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `563.9K 🔥` `NEW`
1. [长大后发现父母单位根本考不上](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E5%8F%91%E7%8E%B0%E7%88%B6%E6%AF%8D%E5%8D%95%E4%BD%8D%E6%A0%B9%E6%9C%AC%E8%80%83%E4%B8%8D%E4%B8%8A%23) `556.9K 🔥` `NEW`
1. [周星驰模仿迪丽热巴钰珑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E6%A8%A1%E4%BB%BF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%23) `347.1K 🔥` `NEW`
1. [刘亦菲带哈哈晒太阳](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%B8%A6%E5%93%88%E5%93%88%E6%99%92%E5%A4%AA%E9%98%B3%23) `295.2K 🔥` `NEW`
1. [TOP张艺凡Prada大片](https://s.weibo.com/weibo?q=%23TOP%E5%BC%A0%E8%89%BA%E5%87%A1Prada%E5%A4%A7%E7%89%87%23) `262.9K 🔥` `NEW`
1. [台风红霞](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `260.3K 🔥` `NEW`
1. [彭冠英单手抱白鹿 (Peng Guanying holds a white deer with one hand)](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%86%A0%E8%8B%B1%E5%8D%95%E6%89%8B%E6%8A%B1%E7%99%BD%E9%B9%BF%23) `253.8K 🔥` `NEW`
1. [金饰价格一夜大跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%80%E5%A4%9C%E5%A4%A7%E8%B7%8C%23) `248.8K 🔥` `NEW`
1. [ditto概念在AI届也是爆火](https://s.weibo.com/weibo?q=%23ditto%E6%A6%82%E5%BF%B5%E5%9C%A8AI%E5%B1%8A%E4%B9%9F%E6%98%AF%E7%88%86%E7%81%AB%23) `248.5K 🔥` `NEW`
1. [宋祖儿 折腰小乔含金量](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%20%E6%8A%98%E8%85%B0%E5%B0%8F%E4%B9%94%E5%90%AB%E9%87%91%E9%87%8F%23) `247.9K 🔥` `NEW`
1. [原来生理性喜欢是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `247.3K 🔥` `NEW`
1. [一温州老板9000万元抄底金条](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B8%A9%E5%B7%9E%E8%80%81%E6%9D%BF9000%E4%B8%87%E5%85%83%E6%8A%84%E5%BA%95%E9%87%91%E6%9D%A1%23) `246.8K 🔥` `NEW`
1. [长鑫科技将上市](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%B0%86%E4%B8%8A%E5%B8%82%23) `245.6K 🔥` `NEW`
1. [DeepSeek纠结了10秒还是决定谄媚](https://s.weibo.com/weibo?q=%23DeepSeek%E7%BA%A0%E7%BB%93%E4%BA%8610%E7%A7%92%E8%BF%98%E6%98%AF%E5%86%B3%E5%AE%9A%E8%B0%84%E5%AA%9A%23) `242.9K 🔥` `NEW`
1. [铁拐李曹国舅动漫形象被批太丑](https://s.weibo.com/weibo?q=%23%E9%93%81%E6%8B%90%E6%9D%8E%E6%9B%B9%E5%9B%BD%E8%88%85%E5%8A%A8%E6%BC%AB%E5%BD%A2%E8%B1%A1%E8%A2%AB%E6%89%B9%E5%A4%AA%E4%B8%91%23) `238.6K 🔥` `NEW`
1. [王楚钦教科书级示范打削球](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%95%99%E7%A7%91%E4%B9%A6%E7%BA%A7%E7%A4%BA%E8%8C%83%E6%89%93%E5%89%8A%E7%90%83%23) `234.4K 🔥` `NEW`
1. [刘宇宁收到任贤齐家乡大礼 (Liu Yuning received a gift from Ren Xianqi’s hometown)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%94%B6%E5%88%B0%E4%BB%BB%E8%B4%A4%E9%BD%90%E5%AE%B6%E4%B9%A1%E5%A4%A7%E7%A4%BC%23) `233.6K 🔥` `NEW`
1. [菲律宾唆使大量渔船非法聚集](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%94%86%E4%BD%BF%E5%A4%A7%E9%87%8F%E6%B8%94%E8%88%B9%E9%9D%9E%E6%B3%95%E8%81%9A%E9%9B%86%23) `228.0K 🔥` `NEW`
1. [胡宇威陈庭妮得女](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%AE%87%E5%A8%81%E9%99%88%E5%BA%AD%E5%A6%AE%E5%BE%97%E5%A5%B3%23) `226.1K 🔥` `NEW`
1. [王一博刷新圈速](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%88%B7%E6%96%B0%E5%9C%88%E9%80%9F%23) `221.7K 🔥` `NEW`
1. [杨超越古装](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%8F%A4%E8%A3%85%23) `211.3K 🔥` `NEW`
1. [韩国史上最贵离婚案判了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5%E7%A6%BB%E5%A9%9A%E6%A1%88%E5%88%A4%E4%BA%86%23) `176.5K 🔥` `NEW`
1. [粉丝cos迪丽热巴小蛋糕造型](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9Dcos%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B0%8F%E8%9B%8B%E7%B3%95%E9%80%A0%E5%9E%8B%23) `176.5K 🔥` `NEW`
1. [小S失去能理解她幽默感的时代](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%A4%B1%E5%8E%BB%E8%83%BD%E7%90%86%E8%A7%A3%E5%A5%B9%E5%B9%BD%E9%BB%98%E6%84%9F%E7%9A%84%E6%97%B6%E4%BB%A3%23) `176.2K 🔥` `NEW`
1. [掌握逆向思维到底有多爽](https://s.weibo.com/weibo?q=%23%E6%8E%8C%E6%8F%A1%E9%80%86%E5%90%91%E6%80%9D%E7%BB%B4%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E7%88%BD%23) `176.1K 🔥` `NEW`
1. [张凌赫让杨超越别太年轻](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AE%A9%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%88%AB%E5%A4%AA%E5%B9%B4%E8%BD%BB%23) `175.9K 🔥` `NEW`
1. [赛里木湖 国道设卡 (Sailimu Lake National Highway Checkpoint)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%20%E5%9B%BD%E9%81%93%E8%AE%BE%E5%8D%A1%23) `175.7K 🔥` `NEW`
1. [3胎宝妈羊水栓塞昏迷丈夫发声](https://s.weibo.com/weibo?q=%233%E8%83%8E%E5%AE%9D%E5%A6%88%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E6%98%8F%E8%BF%B7%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%23) `175.5K 🔥` `NEW`
1. [野狗骨头豆瓣6.9](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%B1%86%E7%93%A36.9%23) `175.2K 🔥` `NEW`
1. [Angelababy13岁时在学校就很有名了](https://s.weibo.com/weibo?q=%23Angelababy13%E5%B2%81%E6%97%B6%E5%9C%A8%E5%AD%A6%E6%A0%A1%E5%B0%B1%E5%BE%88%E6%9C%89%E5%90%8D%E4%BA%86%23) `164.0K 🔥` `NEW`
1. [妻子触电丈夫上前救助倒地双双遇难](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E8%A7%A6%E7%94%B5%E4%B8%88%E5%A4%AB%E4%B8%8A%E5%89%8D%E6%95%91%E5%8A%A9%E5%80%92%E5%9C%B0%E5%8F%8C%E5%8F%8C%E9%81%87%E9%9A%BE%23) `159.9K 🔥` `NEW`
1. [世界杯冠军奖金竟要交美国税](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E5%A5%96%E9%87%91%E7%AB%9F%E8%A6%81%E4%BA%A4%E7%BE%8E%E5%9B%BD%E7%A8%8E%23) `132.1K 🔥` `NEW`
1. [TheShy要带iG回登峰](https://s.weibo.com/weibo?q=%23TheShy%E8%A6%81%E5%B8%A6iG%E5%9B%9E%E7%99%BB%E5%B3%B0%23) `132.0K 🔥` `NEW`
1. [产妇羊水栓塞抢救11小时换3次血](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E6%8A%A2%E6%95%9111%E5%B0%8F%E6%97%B6%E6%8D%A23%E6%AC%A1%E8%A1%80%23) `1.6M 🔥` `+402%`
1. [郁可唯助阵东风奕派M8上市 (Yu Kewei supports the launch of Dongfeng Yipai M8)](https://s.weibo.com/weibo?q=%23%E9%83%81%E5%8F%AF%E5%94%AF%E5%8A%A9%E9%98%B5%E4%B8%9C%E9%A3%8E%E5%A5%95%E6%B4%BEM8%E4%B8%8A%E5%B8%82%23) `1.4M 🔥` `+296%`
1. [BLG Hoya](https://s.weibo.com/weibo?q=%23BLG%20Hoya%23) `304.7K 🔥` `+45%`
1. [瘦了二十斤后手的变化](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%86%E4%BA%8C%E5%8D%81%E6%96%A4%E5%90%8E%E6%89%8B%E7%9A%84%E5%8F%98%E5%8C%96%23) `607.1K 🔥`
1. [郑恺看到苗苗剪短发后的反应 (Zheng Kai's reaction after seeing Miaomiao cutting her hair short)](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E7%9C%8B%E5%88%B0%E8%8B%97%E8%8B%97%E5%89%AA%E7%9F%AD%E5%8F%91%E5%90%8E%E7%9A%84%E5%8F%8D%E5%BA%94%23) `278.6K 🔥`
1. [和很好的闺蜜闹掰后](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%BE%88%E5%A5%BD%E7%9A%84%E9%97%BA%E8%9C%9C%E9%97%B9%E6%8E%B0%E5%90%8E%23) `172.2K 🔥`
1. [白鹿戴假发没遮全](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%88%B4%E5%81%87%E5%8F%91%E6%B2%A1%E9%81%AE%E5%85%A8%23) `455.5K 🔥` `-37%`
1. [Angelababy13岁旧照](https://s.weibo.com/weibo?q=%23Angelababy13%E5%B2%81%E6%97%A7%E7%85%A7%23) `301.4K 🔥` `-39%`
1. [男子在家裸体被邻居拍照发群](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A3%B8%E4%BD%93%E8%A2%AB%E9%82%BB%E5%B1%85%E6%8B%8D%E7%85%A7%E5%8F%91%E7%BE%A4%23) `289.0K 🔥` `-37%`
1. [王虹教授在清华大学开讲挂谷猜想 (Professor Wang Hong gave a lecture on Kakeya Conjecture at Tsinghua University)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E6%95%99%E6%8E%88%E5%9C%A8%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E5%BC%80%E8%AE%B2%E6%8C%82%E8%B0%B7%E7%8C%9C%E6%83%B3%23) `272.2K 🔥` `-84%`
1. [裸体在家犯法还是拍别人裸照犯法](https://s.weibo.com/weibo?q=%23%E8%A3%B8%E4%BD%93%E5%9C%A8%E5%AE%B6%E7%8A%AF%E6%B3%95%E8%BF%98%E6%98%AF%E6%8B%8D%E5%88%AB%E4%BA%BA%E8%A3%B8%E7%85%A7%E7%8A%AF%E6%B3%95%23) `246.1K 🔥` `-53%`
1. [真的建议大家不要过度礼貌](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E8%BF%87%E5%BA%A6%E7%A4%BC%E8%B2%8C%23) `219.4K 🔥` `-69%`
1. [白鹿你终于原谅现偶了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BD%A0%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%E4%BA%86%23) `213.5K 🔥` `-77%`
1. [腾讯317万年终奖员工因泄密被辞退 (Tencent employee with annual bonus of RMB 3.17 million was fired for leaking secrets)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF317%E4%B8%87%E5%B9%B4%E7%BB%88%E5%A5%96%E5%91%98%E5%B7%A5%E5%9B%A0%E6%B3%84%E5%AF%86%E8%A2%AB%E8%BE%9E%E9%80%80%23) `171.7K 🔥` `-68%`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `131.5K 🔥` `-38%`

Updated at 2026-07-24 17:36:31

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
