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

1. [世界乱象丛生祖国稳如泰山 (The world is in chaos, but the motherland is as stable as Mount Tai)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%B1%E8%B1%A1%E4%B8%9B%E7%94%9F%E7%A5%96%E5%9B%BD%E7%A8%B3%E5%A6%82%E6%B3%B0%E5%B1%B1%23) `652.8K 🔥` `NEW`
1. [网民冒充医生编造医患谣言被罚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E5%86%92%E5%85%85%E5%8C%BB%E7%94%9F%E7%BC%96%E9%80%A0%E5%8C%BB%E6%82%A3%E8%B0%A3%E8%A8%80%E8%A2%AB%E7%BD%9A%23) `410.0K 🔥` `NEW`
1. [代表建议把物业管理改为物业服务](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E5%BB%BA%E8%AE%AE%E6%8A%8A%E7%89%A9%E4%B8%9A%E7%AE%A1%E7%90%86%E6%94%B9%E4%B8%BA%E7%89%A9%E4%B8%9A%E6%9C%8D%E5%8A%A1%23) `395.7K 🔥` `NEW`
1. [WTT重庆冠军赛抽签结果来了](https://s.weibo.com/weibo?q=%23WTT%E9%87%8D%E5%BA%86%E5%86%A0%E5%86%9B%E8%B5%9B%E6%8A%BD%E7%AD%BE%E7%BB%93%E6%9E%9C%E6%9D%A5%E4%BA%86%23) `365.8K 🔥` `NEW`
1. [中国人有天下为公的格局](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%9C%89%E5%A4%A9%E4%B8%8B%E4%B8%BA%E5%85%AC%E7%9A%84%E6%A0%BC%E5%B1%80%23) `360.8K 🔥` `NEW`
1. [逐玉云合翻倍](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BA%91%E5%90%88%E7%BF%BB%E5%80%8D%23) `271.4K 🔥` `NEW`
1. [春天的第一场雨是红包雨](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%A4%A9%E7%9A%84%E7%AC%AC%E4%B8%80%E5%9C%BA%E9%9B%A8%E6%98%AF%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `162.1K 🔥` `NEW`
1. [她在自己的时区里发光](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E5%9C%A8%E8%87%AA%E5%B7%B1%E7%9A%84%E6%97%B6%E5%8C%BA%E9%87%8C%E5%8F%91%E5%85%89%23) `118.4K 🔥` `NEW`
1. [情久战胜Hero](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%B9%85%E6%88%98%E8%83%9CHero%23) `94.2K 🔥` `NEW`
1. [祖国完全统一历史进程不可阻挡](https://s.weibo.com/weibo?q=%23%E7%A5%96%E5%9B%BD%E5%AE%8C%E5%85%A8%E7%BB%9F%E4%B8%80%E5%8E%86%E5%8F%B2%E8%BF%9B%E7%A8%8B%E4%B8%8D%E5%8F%AF%E9%98%BB%E6%8C%A1%23) `90.7K 🔥` `NEW`
1. [人脸验证时千万记得穿衣服 (Remember to wear clothes during face verification)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%84%B8%E9%AA%8C%E8%AF%81%E6%97%B6%E5%8D%83%E4%B8%87%E8%AE%B0%E5%BE%97%E7%A9%BF%E8%A1%A3%E6%9C%8D%23) `90.6K 🔥` `NEW`
1. [DeepSeek建议普通用户养虾前先观望](https://s.weibo.com/weibo?q=%23DeepSeek%E5%BB%BA%E8%AE%AE%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%85%BB%E8%99%BE%E5%89%8D%E5%85%88%E8%A7%82%E6%9C%9B%23) `90.3K 🔥` `NEW`
1. [43岁女医生一头白发玩摇滚](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E5%A5%B3%E5%8C%BB%E7%94%9F%E4%B8%80%E5%A4%B4%E7%99%BD%E5%8F%91%E7%8E%A9%E6%91%87%E6%BB%9A%23) `90.0K 🔥` `NEW`
1. [祝每一个她都不被定义活出热爱](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E6%AF%8F%E4%B8%80%E4%B8%AA%E5%A5%B9%E9%83%BD%E4%B8%8D%E8%A2%AB%E5%AE%9A%E4%B9%89%E6%B4%BB%E5%87%BA%E7%83%AD%E7%88%B1%23) `89.9K 🔥` `NEW`
1. [微波炉泡面](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E6%B3%A2%E7%82%89%E6%B3%A1%E9%9D%A2%23) `89.9K 🔥` `NEW`
1. [小猫知道自己可爱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E5%8F%AF%E7%88%B1%23) `89.8K 🔥` `NEW`
1. [国乒男单首轮2场内战](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E9%A6%96%E8%BD%AE2%E5%9C%BA%E5%86%85%E6%88%98%23) `89.7K 🔥` `NEW`
1. [智力已达人类低谷](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%8A%9B%E5%B7%B2%E8%BE%BE%E4%BA%BA%E7%B1%BB%E4%BD%8E%E8%B0%B7%23) `89.7K 🔥` `NEW`
1. [WTT重庆冠军赛](https://s.weibo.com/weibo?q=%23WTT%E9%87%8D%E5%BA%86%E5%86%A0%E5%86%9B%E8%B5%9B%23) `89.7K 🔥` `NEW`
1. [早春第一股时髦风是内衣外穿](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E7%AC%AC%E4%B8%80%E8%82%A1%E6%97%B6%E9%AB%A6%E9%A3%8E%E6%98%AF%E5%86%85%E8%A1%A3%E5%A4%96%E7%A9%BF%23) `89.5K 🔥` `NEW`
1. [王楚钦浅浅一笑 (Wang Chuqin smiled lightly)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B5%85%E6%B5%85%E4%B8%80%E7%AC%91%23) `89.5K 🔥` `NEW`
1. [王毅回应两岸统一时间表](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%B2%B8%E7%BB%9F%E4%B8%80%E6%97%B6%E9%97%B4%E8%A1%A8%23) `1.1M 🔥` `+402%`
1. [华春莹一口气吃了两颗化橘红 (Hua Chunying ate two orange-red pills in one breath)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%98%A5%E8%8E%B9%E4%B8%80%E5%8F%A3%E6%B0%94%E5%90%83%E4%BA%86%E4%B8%A4%E9%A2%97%E5%8C%96%E6%A9%98%E7%BA%A2%23) `820.2K 🔥` `+337%`
1. [伊朗亮底线](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BA%AE%E5%BA%95%E7%BA%BF%23) `410.3K 🔥` `+269%`
1. [建议减少中小学学科数量](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%87%8F%E5%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%A6%E5%AD%A6%E7%A7%91%E6%95%B0%E9%87%8F%23) `322.0K 🔥` `+219%`
1. [伊朗选出新最高领袖 (Iran elects new supreme leader)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%89%E5%87%BA%E6%96%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%23) `320.7K 🔥` `+129%`
1. [108公斤27岁女生花1年减掉108斤](https://s.weibo.com/weibo?q=%23108%E5%85%AC%E6%96%A427%E5%B2%81%E5%A5%B3%E7%94%9F%E8%8A%B11%E5%B9%B4%E5%87%8F%E6%8E%89108%E6%96%A4%23) `300.9K 🔥` `+121%`
1. [姐妹们用千问AI下单快乐过节 (Sisters use Qianwen AI to place orders and have a happy holiday)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A6%B9%E4%BB%AC%E7%94%A8%E5%8D%83%E9%97%AEAI%E4%B8%8B%E5%8D%95%E5%BF%AB%E4%B9%90%E8%BF%87%E8%8A%82%23) `615.5K 🔥`
1. [马来西亚通报MH370搜寻最新进展 (Malaysia reports latest progress in search for MH370)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E9%80%9A%E6%8A%A5MH370%E6%90%9C%E5%AF%BB%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `445.6K 🔥`
1. [妇女节红包](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%E7%BA%A2%E5%8C%85%23) `165.6K 🔥`
1. [妇女节 卫生巾半价](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%20%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%8D%8A%E4%BB%B7%23) `160.3K 🔥`
1. [张凯丽 网红能当一辈子吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%20%E7%BD%91%E7%BA%A2%E8%83%BD%E5%BD%93%E4%B8%80%E8%BE%88%E5%AD%90%E5%90%97%23) `146.0K 🔥`
1. [没有任何一个决定会毁了你的一生](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E4%B8%80%E4%B8%AA%E5%86%B3%E5%AE%9A%E4%BC%9A%E6%AF%81%E4%BA%86%E4%BD%A0%E7%9A%84%E4%B8%80%E7%94%9F%23) `138.2K 🔥`
1. [GW对战Gr](https://s.weibo.com/weibo?q=%23GW%E5%AF%B9%E6%88%98Gr%23) `120.1K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `117.8K 🔥`
1. [张凌赫田曦薇下意识的牵手 (Zhang Linghe and Tian Xiwei subconsciously held hands)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%8B%E6%84%8F%E8%AF%86%E7%9A%84%E7%89%B5%E6%89%8B%23) `117.7K 🔥`
1. [霍去病团队近20人非3人 (Huo Qubing’s team consists of nearly 20 people but 3 people)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%8E%BB%E7%97%85%E5%9B%A2%E9%98%9F%E8%BF%9120%E4%BA%BA%E9%9D%9E3%E4%BA%BA%23) `116.9K 🔥`
1. [惠英红 是妇女节快乐](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E6%98%AF%E5%A6%87%E5%A5%B3%E8%8A%82%E5%BF%AB%E4%B9%90%23) `116.0K 🔥`
1. [岳雨婷看秀待遇](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E7%9C%8B%E7%A7%80%E5%BE%85%E9%81%87%23) `91.4K 🔥`
1. [田曦薇演技好灵](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%BC%94%E6%8A%80%E5%A5%BD%E7%81%B5%23) `91.4K 🔥`
1. [伊朗说具备进行超半年高强度战争能力 (Iran says it has the capability to carry out high-intensity war for more than half a year)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E5%85%B7%E5%A4%87%E8%BF%9B%E8%A1%8C%E8%B6%85%E5%8D%8A%E5%B9%B4%E9%AB%98%E5%BC%BA%E5%BA%A6%E6%88%98%E4%BA%89%E8%83%BD%E5%8A%9B%23) `91.1K 🔥`
1. [迪拜黄金打折售卖 (gold sale in dubai)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E9%BB%84%E9%87%91%E6%89%93%E6%8A%98%E5%94%AE%E5%8D%96%23) `90.0K 🔥`
1. [杨紫左手牵娃右手抱娃 (Yang Zi holds the baby with her left hand and hugs the baby with her right hand)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%B7%A6%E6%89%8B%E7%89%B5%E5%A8%83%E5%8F%B3%E6%89%8B%E6%8A%B1%E5%A8%83%23) `90.0K 🔥`
1. [云南蓝莓](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E8%93%9D%E8%8E%93%23) `89.9K 🔥`
1. [陆虎是看着张钰琪出道的](https://s.weibo.com/weibo?q=%23%E9%99%86%E8%99%8E%E6%98%AF%E7%9C%8B%E7%9D%80%E5%BC%A0%E9%92%B0%E7%90%AA%E5%87%BA%E9%81%93%E7%9A%84%23) `89.8K 🔥`
1. [1家4姐妹3个查出卵巢癌](https://s.weibo.com/weibo?q=%231%E5%AE%B64%E5%A7%90%E5%A6%B93%E4%B8%AA%E6%9F%A5%E5%87%BA%E5%8D%B5%E5%B7%A2%E7%99%8C%23) `89.8K 🔥`
1. [70岁网瘾老人刷手机近视2300度 (A 70-year-old Internet addict suffers from 2,300-degree myopia while using his mobile phone)](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E7%BD%91%E7%98%BE%E8%80%81%E4%BA%BA%E5%88%B7%E6%89%8B%E6%9C%BA%E8%BF%91%E8%A7%862300%E5%BA%A6%23) `89.6K 🔥`
1. [妇女节 (women's day)](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%23) `442.4K 🔥` `-41%`
1. [女孩患癌复查结果不好妈妈骗她及格了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%82%A3%E7%99%8C%E5%A4%8D%E6%9F%A5%E7%BB%93%E6%9E%9C%E4%B8%8D%E5%A5%BD%E5%A6%88%E5%A6%88%E9%AA%97%E5%A5%B9%E5%8F%8A%E6%A0%BC%E4%BA%86%23) `90.0K 🔥` `-33%`
1. [名侦探学院 (Detective Academy)](https://s.weibo.com/weibo?q=%23%E5%90%8D%E4%BE%A6%E6%8E%A2%E5%AD%A6%E9%99%A2%23) `89.9K 🔥` `-37%`
1. [逐玉毛林林张凌赫好权威的母子 (Zhuyu Mao Linlin Zhang Linghe is a very authoritative mother and son)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%AF%9B%E6%9E%97%E6%9E%97%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A5%BD%E6%9D%83%E5%A8%81%E7%9A%84%E6%AF%8D%E5%AD%90%23) `89.6K 🔥` `-30%`
1. [台湾绝无可能成为国家](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%BB%9D%E6%97%A0%E5%8F%AF%E8%83%BD%E6%88%90%E4%B8%BA%E5%9B%BD%E5%AE%B6%23) `89.6K 🔥` `-48%`

Updated at 2026-03-08 16:46:07

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
