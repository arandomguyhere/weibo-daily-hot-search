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

1. [任嘉伦内娱新规第一人 (Ren Jialun is the first person to create new internal entertainment regulations)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E5%86%85%E5%A8%B1%E6%96%B0%E8%A7%84%E7%AC%AC%E4%B8%80%E4%BA%BA%23) `605.6K 🔥` `NEW`
1. [第28届上影节开幕式](https://s.weibo.com/weibo?q=%23%E7%AC%AC28%E5%B1%8A%E4%B8%8A%E5%BD%B1%E8%8A%82%E5%BC%80%E5%B9%95%E5%BC%8F%23) `569.2K 🔥` `NEW`
1. [陈赫给Angelababy刷礼物](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E7%BB%99Angelababy%E5%88%B7%E7%A4%BC%E7%89%A9%23) `352.2K 🔥` `NEW`
1. [男子买9万LV包送女友疑似展销品](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B09%E4%B8%87LV%E5%8C%85%E9%80%81%E5%A5%B3%E5%8F%8B%E7%96%91%E4%BC%BC%E5%B1%95%E9%94%80%E5%93%81%23) `314.4K 🔥` `NEW`
1. [王鹤棣闪现长城](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%97%AA%E7%8E%B0%E9%95%BF%E5%9F%8E%23) `298.0K 🔥` `NEW`
1. [莫离的女二](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%9A%84%E5%A5%B3%E4%BA%8C%23) `289.9K 🔥` `NEW`
1. [山姆买到临期食品怎能反怪消费者](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%B9%B0%E5%88%B0%E4%B8%B4%E6%9C%9F%E9%A3%9F%E5%93%81%E6%80%8E%E8%83%BD%E5%8F%8D%E6%80%AA%E6%B6%88%E8%B4%B9%E8%80%85%23) `268.8K 🔥` `NEW`
1. [陈小春为了宋亚轩已成正规军](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E4%B8%BA%E4%BA%86%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%B7%B2%E6%88%90%E6%AD%A3%E8%A7%84%E5%86%9B%23) `267.5K 🔥` `NEW`
1. [张杰来给音综上强度了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%9D%A5%E7%BB%99%E9%9F%B3%E7%BB%BC%E4%B8%8A%E5%BC%BA%E5%BA%A6%E4%BA%86%23) `244.0K 🔥` `NEW`
1. [英格兰国家队我帮你们破案了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%9B%BD%E5%AE%B6%E9%98%9F%E6%88%91%E5%B8%AE%E4%BD%A0%E4%BB%AC%E7%A0%B4%E6%A1%88%E4%BA%86%23) `239.7K 🔥` `NEW`
1. [EDG八强赛对阵FUT (EDG quarterfinals vs. FUT)](https://s.weibo.com/weibo?q=%23EDG%E5%85%AB%E5%BC%BA%E8%B5%9B%E5%AF%B9%E9%98%B5FUT%23) `237.5K 🔥` `NEW`
1. [张极张泽禹攀岩](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E5%BC%A0%E6%B3%BD%E7%A6%B9%E6%94%80%E5%B2%A9%23) `232.8K 🔥` `NEW`
1. [特朗普政府多次使用日本动漫素材](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BF%E5%BA%9C%E5%A4%9A%E6%AC%A1%E4%BD%BF%E7%94%A8%E6%97%A5%E6%9C%AC%E5%8A%A8%E6%BC%AB%E7%B4%A0%E6%9D%90%23) `227.4K 🔥` `NEW`
1. [Xun说WE阵容太垃圾了](https://s.weibo.com/weibo?q=%23Xun%E8%AF%B4WE%E9%98%B5%E5%AE%B9%E5%A4%AA%E5%9E%83%E5%9C%BE%E4%BA%86%23) `199.9K 🔥` `NEW`
1. [有驱蚊液成本几毛卖30块](https://s.weibo.com/weibo?q=%23%E6%9C%89%E9%A9%B1%E8%9A%8A%E6%B6%B2%E6%88%90%E6%9C%AC%E5%87%A0%E6%AF%9B%E5%8D%9630%E5%9D%97%23) `174.2K 🔥` `NEW`
1. [斯纳吉歌手淘汰后ins发文](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%BA%B3%E5%90%89%E6%AD%8C%E6%89%8B%E6%B7%98%E6%B1%B0%E5%90%8Eins%E5%8F%91%E6%96%87%23) `173.8K 🔥` `NEW`
1. [王安宇真的是我带过最难带的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%9C%9F%E7%9A%84%E6%98%AF%E6%88%91%E5%B8%A6%E8%BF%87%E6%9C%80%E9%9A%BE%E5%B8%A6%E7%9A%84%23) `173.5K 🔥` `NEW`
1. [梁朝伟背手刘嘉玲独美](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%83%8C%E6%89%8B%E5%88%98%E5%98%89%E7%8E%B2%E7%8B%AC%E7%BE%8E%23) `163.8K 🔥` `NEW`
1. [李斌解释蔚来怎么又行了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E8%A7%A3%E9%87%8A%E8%94%9A%E6%9D%A5%E6%80%8E%E4%B9%88%E5%8F%88%E8%A1%8C%E4%BA%86%23) `146.2K 🔥` `NEW`
1. [陈小春宋亚轩脑来的](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%84%91%E6%9D%A5%E7%9A%84%23) `141.7K 🔥` `NEW`
1. [考编第一被人递补维权后岗位取消 (The position that ranked first in the examination was canceled after safeguarding rights.)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%BC%96%E7%AC%AC%E4%B8%80%E8%A2%AB%E4%BA%BA%E9%80%92%E8%A1%A5%E7%BB%B4%E6%9D%83%E5%90%8E%E5%B2%97%E4%BD%8D%E5%8F%96%E6%B6%88%23) `1.1M 🔥` `+307%`
1. [美国女市长性侵16岁男孩被判90天监禁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%B8%82%E9%95%BF%E6%80%A7%E4%BE%B516%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E5%88%A490%E5%A4%A9%E7%9B%91%E7%A6%81%23) `810.2K 🔥` `+200%`
1. [那我花钱去拔智齿算什么](https://s.weibo.com/weibo?q=%23%E9%82%A3%E6%88%91%E8%8A%B1%E9%92%B1%E5%8E%BB%E6%8B%94%E6%99%BA%E9%BD%BF%E7%AE%97%E4%BB%80%E4%B9%88%23) `588.1K 🔥` `+260%`
1. [军师 你别偷偷跟你女朋友聊天了](https://s.weibo.com/weibo?q=%23%E5%86%9B%E5%B8%88%20%E4%BD%A0%E5%88%AB%E5%81%B7%E5%81%B7%E8%B7%9F%E4%BD%A0%E5%A5%B3%E6%9C%8B%E5%8F%8B%E8%81%8A%E5%A4%A9%E4%BA%86%23) `552.7K 🔥` `+104%`
1. [高圆圆让C](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E8%AE%A9C%23) `383.6K 🔥` `+41%`
1. [姜十七承认整容了 (Jiang Shiqi admitted to having plastic surgery)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%8D%81%E4%B8%83%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `383.1K 🔥` `+22%`
1. [全球艾滋病应对正进入危险时刻](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%89%BE%E6%BB%8B%E7%97%85%E5%BA%94%E5%AF%B9%E6%AD%A3%E8%BF%9B%E5%85%A5%E5%8D%B1%E9%99%A9%E6%97%B6%E5%88%BB%23) `370.3K 🔥` `+110%`
1. [甲亢哥预测C罗夺冠被驱逐](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E9%A2%84%E6%B5%8BC%E7%BD%97%E5%A4%BA%E5%86%A0%E8%A2%AB%E9%A9%B1%E9%80%90%23) `267.7K 🔥` `+55%`
1. [突然理解了自己为什么物欲这么高](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E7%89%A9%E6%AC%B2%E8%BF%99%E4%B9%88%E9%AB%98%23) `577.4K 🔥`
1. [Angelababy的榜一是陈赫](https://s.weibo.com/weibo?q=%23Angelababy%E7%9A%84%E6%A6%9C%E4%B8%80%E6%98%AF%E9%99%88%E8%B5%AB%23) `383.2K 🔥`
1. [孙怡真给曾沛慈下聘礼了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9C%9F%E7%BB%99%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%8B%E8%81%98%E7%A4%BC%E4%BA%86%23) `382.6K 🔥`
1. [这才是AI发展真正的意义 (This is the true meaning of AI development)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AFAI%E5%8F%91%E5%B1%95%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%84%8F%E4%B9%89%23) `271.2K 🔥`
1. [张雪机车德比斯升至积分榜第2](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E5%8D%87%E8%87%B3%E7%A7%AF%E5%88%86%E6%A6%9C%E7%AC%AC2%23) `247.7K 🔥`
1. [Anthropic禁止非美用户使用模型](https://s.weibo.com/weibo?q=%23Anthropic%E7%A6%81%E6%AD%A2%E9%9D%9E%E7%BE%8E%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%9E%8B%23) `223.2K 🔥`
1. [外籍旅客带少数民族服装出境被拦](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E6%97%85%E5%AE%A2%E5%B8%A6%E5%B0%91%E6%95%B0%E6%B0%91%E6%97%8F%E6%9C%8D%E8%A3%85%E5%87%BA%E5%A2%83%E8%A2%AB%E6%8B%A6%23) `168.0K 🔥`
1. [雷军测试直播计划7小时实际5小时](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%B5%8B%E8%AF%95%E7%9B%B4%E6%92%AD%E8%AE%A1%E5%88%927%E5%B0%8F%E6%97%B6%E5%AE%9E%E9%99%855%E5%B0%8F%E6%97%B6%23) `149.0K 🔥`
1. [一代代中国人守护华夏文脉](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BB%A3%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AE%88%E6%8A%A4%E5%8D%8E%E5%A4%8F%E6%96%87%E8%84%89%23) `635.9K 🔥` `-23%`
1. [张雪机车六冠王](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%85%AD%E5%86%A0%E7%8E%8B%23) `545.1K 🔥` `-61%`
1. [我的朋友圈点赞原则 (Like principles for my circle of friends)](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%82%B9%E8%B5%9E%E5%8E%9F%E5%88%99%23) `522.6K 🔥` `-32%`
1. [女生分手男方要求返还彩礼被告强奸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%88%86%E6%89%8B%E7%94%B7%E6%96%B9%E8%A6%81%E6%B1%82%E8%BF%94%E8%BF%98%E5%BD%A9%E7%A4%BC%E8%A2%AB%E5%91%8A%E5%BC%BA%E5%A5%B8%23) `383.1K 🔥` `-50%`
1. [Bin MSI我又来了](https://s.weibo.com/weibo?q=%23Bin%20MSI%E6%88%91%E5%8F%88%E6%9D%A5%E4%BA%86%23) `222.2K 🔥` `-47%`
1. [林俊杰蔡依林合体鸟巢](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E8%94%A1%E4%BE%9D%E6%9E%97%E5%90%88%E4%BD%93%E9%B8%9F%E5%B7%A2%23) `218.9K 🔥` `-65%`
1. [SpaceX亏损达413亿美元 (SpaceX loses $41.3 billion)](https://s.weibo.com/weibo?q=%23SpaceX%E4%BA%8F%E6%8D%9F%E8%BE%BE413%E4%BA%BF%E7%BE%8E%E5%85%83%23) `203.4K 🔥` `-31%`
1. [六级答案](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E7%AD%94%E6%A1%88%23) `200.0K 🔥` `-26%`
1. [程潇红毯](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E7%BA%A2%E6%AF%AF%23) `199.7K 🔥` `-32%`
1. [黑豹乐队前主唱张克芃去世](https://s.weibo.com/weibo?q=%23%E9%BB%91%E8%B1%B9%E4%B9%90%E9%98%9F%E5%89%8D%E4%B8%BB%E5%94%B1%E5%BC%A0%E5%85%8B%E8%8A%83%E5%8E%BB%E4%B8%96%23) `178.3K 🔥` `-34%`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `162.3K 🔥` `-58%`
1. [男子带10万现金还贷被银行拒收](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%A610%E4%B8%87%E7%8E%B0%E9%87%91%E8%BF%98%E8%B4%B7%E8%A2%AB%E9%93%B6%E8%A1%8C%E6%8B%92%E6%94%B6%23) `154.5K 🔥` `-65%`
1. [白鹿莫离全网播放量破亿](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E5%85%A8%E7%BD%91%E6%92%AD%E6%94%BE%E9%87%8F%E7%A0%B4%E4%BA%BF%23) `153.7K 🔥` `-40%`
1. [找工作就是运气问题](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%B7%A5%E4%BD%9C%E5%B0%B1%E6%98%AF%E8%BF%90%E6%B0%94%E9%97%AE%E9%A2%98%23) `152.1K 🔥` `-44%`
1. [福原爱首谈与现任丈夫恋爱故事](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%8E%9F%E7%88%B1%E9%A6%96%E8%B0%88%E4%B8%8E%E7%8E%B0%E4%BB%BB%E4%B8%88%E5%A4%AB%E6%81%8B%E7%88%B1%E6%95%85%E4%BA%8B%23) `146.1K 🔥` `-57%`

Updated at 2026-06-13 23:54:52

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
