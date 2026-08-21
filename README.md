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

1. [官方通报旅客买票占座放零食事件 (Official reports on incident of passengers buying tickets, occupying seats and giving snacks)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%85%E5%AE%A2%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E4%BA%8B%E4%BB%B6%23) `903.6K 🔥` `NEW`
1. [临沂爆炸事故1死2失联](https://s.weibo.com/weibo?q=%23%E4%B8%B4%E6%B2%82%E7%88%86%E7%82%B8%E4%BA%8B%E6%95%851%E6%AD%BB2%E5%A4%B1%E8%81%94%23) `479.9K 🔥` `NEW`
1. [顺其自然 难听](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E5%85%B6%E8%87%AA%E7%84%B6%20%E9%9A%BE%E5%90%AC%23) `456.9K 🔥` `NEW`
1. [易烊千玺把乌兰布和泥土变成了礼物](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%8A%8A%E4%B9%8C%E5%85%B0%E5%B8%83%E5%92%8C%E6%B3%A5%E5%9C%9F%E5%8F%98%E6%88%90%E4%BA%86%E7%A4%BC%E7%89%A9%23) `456.7K 🔥` `NEW`
1. [欢子 摆烂](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E6%91%86%E7%83%82%23) `445.0K 🔥` `NEW`
1. [曾辉把小沈阳唱笑了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%8A%8A%E5%B0%8F%E6%B2%88%E9%98%B3%E5%94%B1%E7%AC%91%E4%BA%86%23) `423.7K 🔥` `NEW`
1. [辽宁一处长遭枪击25年未破案](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E4%B8%80%E5%A4%84%E9%95%BF%E9%81%AD%E6%9E%AA%E5%87%BB25%E5%B9%B4%E6%9C%AA%E7%A0%B4%E6%A1%88%23) `364.2K 🔥` `NEW`
1. [成都铁路局回应](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%93%81%E8%B7%AF%E5%B1%80%E5%9B%9E%E5%BA%94%23) `290.9K 🔥` `NEW`
1. [张彬彬组 努力且心酸](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E7%BB%84%20%E5%8A%AA%E5%8A%9B%E4%B8%94%E5%BF%83%E9%85%B8%23) `269.4K 🔥` `NEW`
1. [TES对战BLG](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98BLG%23) `222.7K 🔥` `NEW`
1. [汪苏泷联名2来了 (Wang Sulong's collaboration 2 is here)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%81%94%E5%90%8D2%E6%9D%A5%E4%BA%86%23) `222.3K 🔥` `NEW`
1. [BLG战胜TES](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CTES%23) `209.2K 🔥` `NEW`
1. [李现王嘉尔生图](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%8E%8B%E5%98%89%E5%B0%94%E7%94%9F%E5%9B%BE%23) `205.5K 🔥` `NEW`
1. [梁王组合晋级男双半决赛](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E7%BB%84%E5%90%88%E6%99%8B%E7%BA%A7%E7%94%B7%E5%8F%8C%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `203.6K 🔥` `NEW`
1. [张碧晨铁了心要把我唱哭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E9%93%81%E4%BA%86%E5%BF%83%E8%A6%81%E6%8A%8A%E6%88%91%E5%94%B1%E5%93%AD%23) `191.7K 🔥` `NEW`
1. [西南铁路通报旅客买票占座放零食](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%8D%97%E9%93%81%E8%B7%AF%E9%80%9A%E6%8A%A5%E6%97%85%E5%AE%A2%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%23) `189.9K 🔥` `NEW`
1. [李光洁 演员哪敢随便改剧本](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%89%E6%B4%81%20%E6%BC%94%E5%91%98%E5%93%AA%E6%95%A2%E9%9A%8F%E4%BE%BF%E6%94%B9%E5%89%A7%E6%9C%AC%23) `186.0K 🔥` `NEW`
1. [第一次当妈妈的真实感受](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%BD%93%E5%A6%88%E5%A6%88%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `176.1K 🔥` `NEW`
1. [多元消费场景激发经济澎湃活力 (Diversified consumption scenarios stimulate economic vitality)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%85%83%E6%B6%88%E8%B4%B9%E5%9C%BA%E6%99%AF%E6%BF%80%E5%8F%91%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `874.4K 🔥` `+27%`
1. [小沈阳摔了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%91%94%E4%BA%86%23) `855.7K 🔥` `+35%`
1. [微信聊天框 难看](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E6%A1%86%20%E9%9A%BE%E7%9C%8B%23) `776.4K 🔥` `+26%`
1. [艾热看曾辉唱rap的表情 (Ai Re looks at Zeng Hui’s expression when he sings rap)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E7%9C%8B%E6%9B%BE%E8%BE%89%E5%94%B1rap%E7%9A%84%E8%A1%A8%E6%83%85%23) `590.4K 🔥` `+59%`
1. [妻子偷拍女子洗澡丈夫负责点评](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%AD%90%E6%B4%97%E6%BE%A1%E4%B8%88%E5%A4%AB%E8%B4%9F%E8%B4%A3%E7%82%B9%E8%AF%84%23) `434.5K 🔥` `+66%`
1. [第一批用上微信按住转文字的人发声](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8%E4%B8%8A%E5%BE%AE%E4%BF%A1%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%E7%9A%84%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `408.3K 🔥` `+109%`
1. [王桥小区爆炸原因](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A1%A5%E5%B0%8F%E5%8C%BA%E7%88%86%E7%82%B8%E5%8E%9F%E5%9B%A0%23) `394.2K 🔥` `+147%`
1. [警方通报男子KTV厕所殴打女子 (Police report man assaulting woman in KTV restroom)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90KTV%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%23) `1.3M 🔥`
1. [云南白药京东超级品牌日 (Yunnan Baiyao JD Super Brand Day)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E7%99%BD%E8%8D%AF%E4%BA%AC%E4%B8%9C%E8%B6%85%E7%BA%A7%E5%93%81%E7%89%8C%E6%97%A5%23) `650.4K 🔥`
1. [这就是伯牙子期](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BC%AF%E7%89%99%E5%AD%90%E6%9C%9F%23) `598.1K 🔥`
1. [汤家凤怼北大副院长张丹丹](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%AE%B6%E5%87%A4%E6%80%BC%E5%8C%97%E5%A4%A7%E5%89%AF%E9%99%A2%E9%95%BF%E5%BC%A0%E4%B8%B9%E4%B8%B9%23) `455.2K 🔥`
1. [陈柏霖当庭认罪](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `454.2K 🔥`
1. [虞书欣娜扎撞衫](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A8%9C%E6%89%8E%E6%92%9E%E8%A1%AB%23) `453.1K 🔥`
1. [影院午睡2.5小时仅1元多](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%88%E7%9D%A12.5%E5%B0%8F%E6%97%B6%E4%BB%851%E5%85%83%E5%A4%9A%23) `452.8K 🔥`
1. [舒淇美成这样还有什么烦恼](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E8%BF%98%E6%9C%89%E4%BB%80%E4%B9%88%E7%83%A6%E6%81%BC%23) `448.7K 🔥`
1. [曝时代峰峻要给F1赔15.5亿 (It is revealed that Times Fengjun will pay 1.55 billion to F1)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A6%81%E7%BB%99F1%E8%B5%9415.5%E4%BA%BF%23) `361.6K 🔥`
1. [女子暗恋8年终等来回应 (Woman waits for response after 8 years of secret love)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%97%E6%81%8B8%E5%B9%B4%E7%BB%88%E7%AD%89%E6%9D%A5%E5%9B%9E%E5%BA%94%23) `355.0K 🔥`
1. [艾热去歌手吧](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E5%8E%BB%E6%AD%8C%E6%89%8B%E5%90%A7%23) `347.5K 🔥`
1. [张函瑞的马陆被卖了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E7%9A%84%E9%A9%AC%E9%99%86%E8%A2%AB%E5%8D%96%E4%BA%86%23) `294.6K 🔥`
1. [金价涨嗨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B6%A8%E5%97%A8%E4%BA%86%23) `269.4K 🔥`
1. [哀人组太好听了](https://s.weibo.com/weibo?q=%23%E5%93%80%E4%BA%BA%E7%BB%84%E5%A4%AA%E5%A5%BD%E5%90%AC%E4%BA%86%23) `206.5K 🔥`
1. [多家车企启动召回](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E8%BD%A6%E4%BC%81%E5%90%AF%E5%8A%A8%E5%8F%AC%E5%9B%9E%23) `183.9K 🔥`
1. [长江存储IPO审核状态变更](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%AD%98%E5%82%A8IPO%E5%AE%A1%E6%A0%B8%E7%8A%B6%E6%80%81%E5%8F%98%E6%9B%B4%23) `163.4K 🔥`
1. [LV将彻底退出贵州市场](https://s.weibo.com/weibo?q=%23LV%E5%B0%86%E5%BD%BB%E5%BA%95%E9%80%80%E5%87%BA%E8%B4%B5%E5%B7%9E%E5%B8%82%E5%9C%BA%23) `666.9K 🔥` `-21%`
1. [马思纯又瘦了 (Ma Sichun lost weight again)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%8F%88%E7%98%A6%E4%BA%86%23) `269.7K 🔥` `-26%`
1. [上汽大众拒绝速成车](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B1%BD%E5%A4%A7%E4%BC%97%E6%8B%92%E7%BB%9D%E9%80%9F%E6%88%90%E8%BD%A6%23) `269.4K 🔥` `-29%`
1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `243.9K 🔥` `-25%`
1. [为什么建议定期更换水杯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E8%AE%AE%E5%AE%9A%E6%9C%9F%E6%9B%B4%E6%8D%A2%E6%B0%B4%E6%9D%AF%23) `218.3K 🔥` `-27%`
1. [AG状态 (AG status)](https://s.weibo.com/weibo?q=%23AG%E7%8A%B6%E6%80%81%23) `209.5K 🔥` `-46%`
1. [电视应该为老人做减法吗](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%BA%94%E8%AF%A5%E4%B8%BA%E8%80%81%E4%BA%BA%E5%81%9A%E5%87%8F%E6%B3%95%E5%90%97%23) `194.6K 🔥` `-40%`
1. [女子游泳馆内偷拍他人洗澡发给丈夫 (Secretly filming someone taking a shower in a women's swimming pool and sending it to her husband)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%B8%E6%B3%B3%E9%A6%86%E5%86%85%E5%81%B7%E6%8B%8D%E4%BB%96%E4%BA%BA%E6%B4%97%E6%BE%A1%E5%8F%91%E7%BB%99%E4%B8%88%E5%A4%AB%23) `171.2K 🔥` `-28%`
1. [微信 按住转文字 (WeChat press and hold to text)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%23) `160.7K 🔥` `-57%`
1. [中餐厅给张雅琪配了时钟后期 (The Chinese restaurant assigned Zhang Yaqi a clock later)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E7%BB%99%E5%BC%A0%E9%9B%85%E7%90%AA%E9%85%8D%E4%BA%86%E6%97%B6%E9%92%9F%E5%90%8E%E6%9C%9F%23) `160.0K 🔥` `-34%`

Updated at 2026-08-21 22:31:23

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
