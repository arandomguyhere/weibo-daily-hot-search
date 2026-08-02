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

1. [嘲讽张继科解说已解除合作关系 (Mocking Zhang Jike’s explanation that the partnership has been terminated)](https://s.weibo.com/weibo?q=%23%E5%98%B2%E8%AE%BD%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%A7%A3%E8%AF%B4%E5%B7%B2%E8%A7%A3%E9%99%A4%E5%90%88%E4%BD%9C%E5%85%B3%E7%B3%BB%23) `1.1M 🔥` `NEW`
1. [王俊凯大麦一开2158张票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A4%A7%E9%BA%A6%E4%B8%80%E5%BC%802158%E5%BC%A0%E7%A5%A8%23) `685.3K 🔥` `NEW`
1. [长沙一高层住宅火灾致4死2伤](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%B8%80%E9%AB%98%E5%B1%82%E4%BD%8F%E5%AE%85%E7%81%AB%E7%81%BE%E8%87%B44%E6%AD%BB2%E4%BC%A4%23) `622.6K 🔥` `NEW`
1. [三个字让我爸做了一辈子饭](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E5%AD%97%E8%AE%A9%E6%88%91%E7%88%B8%E5%81%9A%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E9%A5%AD%23) `527.9K 🔥` `NEW`
1. [张凌赫的妈妈公开了和家人的合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E5%A6%88%E5%A6%88%E5%85%AC%E5%BC%80%E4%BA%86%E5%92%8C%E5%AE%B6%E4%BA%BA%E7%9A%84%E5%90%88%E7%85%A7%23) `340.1K 🔥` `NEW`
1. [近视600度是眼球风险临界值](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86600%E5%BA%A6%E6%98%AF%E7%9C%BC%E7%90%83%E9%A3%8E%E9%99%A9%E4%B8%B4%E7%95%8C%E5%80%BC%23) `318.0K 🔥` `NEW`
1. [黄宗泽和胡杏儿老公拥抱](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD%E5%92%8C%E8%83%A1%E6%9D%8F%E5%84%BF%E8%80%81%E5%85%AC%E6%8B%A5%E6%8A%B1%23) `313.1K 🔥` `NEW`
1. [公积金10万亿账户迎来全面激活](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%9110%E4%B8%87%E4%BA%BF%E8%B4%A6%E6%88%B7%E8%BF%8E%E6%9D%A5%E5%85%A8%E9%9D%A2%E6%BF%80%E6%B4%BB%23) `309.9K 🔥` `NEW`
1. [王鹤棣没有让女人空手而归的义务](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B2%A1%E6%9C%89%E8%AE%A9%E5%A5%B3%E4%BA%BA%E7%A9%BA%E6%89%8B%E8%80%8C%E5%BD%92%E7%9A%84%E4%B9%89%E5%8A%A1%23) `308.2K 🔥` `NEW`
1. [房主任谈再婚被女儿怼](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E8%B0%88%E5%86%8D%E5%A9%9A%E8%A2%AB%E5%A5%B3%E5%84%BF%E6%80%BC%23) `296.7K 🔥` `NEW`
1. [Gemini直播 (Gemini live broadcast)](https://s.weibo.com/weibo?q=%23Gemini%E7%9B%B4%E6%92%AD%23) `265.5K 🔥` `NEW`
1. [在CJ骁龙馆演凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%9C%A8CJ%E9%AA%81%E9%BE%99%E9%A6%86%E6%BC%94%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `259.7K 🔥` `NEW`
1. [开家煎饺店叫小荷才露](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AE%B6%E7%85%8E%E9%A5%BA%E5%BA%97%E5%8F%AB%E5%B0%8F%E8%8D%B7%E6%89%8D%E9%9C%B2%23) `236.8K 🔥` `NEW`
1. [和平精英刺激空投节](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E5%88%BA%E6%BF%80%E7%A9%BA%E6%8A%95%E8%8A%82%23) `232.9K 🔥` `NEW`
1. [王俊凯演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `223.0K 🔥` `NEW`
1. [青岛火灾](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%81%AB%E7%81%BE%23) `217.0K 🔥` `NEW`
1. [刺激之夜全明星COS造型预告](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%BF%80%E4%B9%8B%E5%A4%9C%E5%85%A8%E6%98%8E%E6%98%9FCOS%E9%80%A0%E5%9E%8B%E9%A2%84%E5%91%8A%23) `194.9K 🔥` `NEW`
1. [起猛了看到雪糕现原形了](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E7%8C%9B%E4%BA%86%E7%9C%8B%E5%88%B0%E9%9B%AA%E7%B3%95%E7%8E%B0%E5%8E%9F%E5%BD%A2%E4%BA%86%23) `191.3K 🔥` `NEW`
1. [瑞幸员工对嘴喷奶油物料已废弃](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%91%98%E5%B7%A5%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%E7%89%A9%E6%96%99%E5%B7%B2%E5%BA%9F%E5%BC%83%23) `187.2K 🔥` `NEW`
1. [RC冠军](https://s.weibo.com/weibo?q=%23RC%E5%86%A0%E5%86%9B%23) `182.3K 🔥` `NEW`
1. [王楚钦缺席WTT横滨冠军赛 (Wang Chuqin misses WTT Yokohama Championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%BC%BA%E5%B8%ADWTT%E6%A8%AA%E6%BB%A8%E5%86%A0%E5%86%9B%E8%B5%9B%23) `181.8K 🔥` `NEW`
1. [假结婚证做试管 代孕](https://s.weibo.com/weibo?q=%23%E5%81%87%E7%BB%93%E5%A9%9A%E8%AF%81%E5%81%9A%E8%AF%95%E7%AE%A1%20%E4%BB%A3%E5%AD%95%23) `180.9K 🔥` `NEW`
1. [趁着年轻一定要多睡觉](https://s.weibo.com/weibo?q=%23%E8%B6%81%E7%9D%80%E5%B9%B4%E8%BD%BB%E4%B8%80%E5%AE%9A%E8%A6%81%E5%A4%9A%E7%9D%A1%E8%A7%89%23) `162.1K 🔥` `NEW`
1. [56岁鲁豫这状态好成啥了](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%B2%81%E8%B1%AB%E8%BF%99%E7%8A%B6%E6%80%81%E5%A5%BD%E6%88%90%E5%95%A5%E4%BA%86%23) `154.4K 🔥` `NEW`
1. [Seedance2.0脸部恐怖谷明显](https://s.weibo.com/weibo?q=%23Seedance2.0%E8%84%B8%E9%83%A8%E6%81%90%E6%80%96%E8%B0%B7%E6%98%8E%E6%98%BE%23) `154.4K 🔥` `NEW`
1. [孙东旭明明天权首播卖超500万元](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9C%E6%97%AD%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E9%A6%96%E6%92%AD%E5%8D%96%E8%B6%85500%E4%B8%87%E5%85%83%23) `153.9K 🔥` `NEW`
1. [泰国总理回应俄罗斯姐弟被谋杀](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E5%9B%9E%E5%BA%94%E4%BF%84%E7%BD%97%E6%96%AF%E5%A7%90%E5%BC%9F%E8%A2%AB%E8%B0%8B%E6%9D%80%23) `153.6K 🔥` `NEW`
1. [银行 午休](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%20%E5%8D%88%E4%BC%91%23) `1.6M 🔥` `+24%`
1. [为什么现在的超市都不需要存包了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%B6%85%E5%B8%82%E9%83%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E5%AD%98%E5%8C%85%E4%BA%86%23) `750.0K 🔥` `+134%`
1. [Mikimoto高级珠宝亚洲首展](https://s.weibo.com/weibo?q=%23Mikimoto%E9%AB%98%E7%BA%A7%E7%8F%A0%E5%AE%9D%E4%BA%9A%E6%B4%B2%E9%A6%96%E5%B1%95%23) `612.3K 🔥`
1. [印度韩国突然宣称有媲美DeepSeek大模型 (India and South Korea suddenly claim to have large models comparable to DeepSeek)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%9F%A9%E5%9B%BD%E7%AA%81%E7%84%B6%E5%AE%A3%E7%A7%B0%E6%9C%89%E5%AA%B2%E7%BE%8EDeepSeek%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `592.1K 🔥`
1. [黄晓明口型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%8F%A3%E5%9E%8B%23) `352.4K 🔥`
1. [天总曝一线明星一部戏收入仅一百多万](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%80%BB%E6%9B%9D%E4%B8%80%E7%BA%BF%E6%98%8E%E6%98%9F%E4%B8%80%E9%83%A8%E6%88%8F%E6%94%B6%E5%85%A5%E4%BB%85%E4%B8%80%E7%99%BE%E5%A4%9A%E4%B8%87%23) `314.7K 🔥`
1. [地铁吐血女孩为嫣然基金捐99999元](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E4%B8%BA%E5%AB%A3%E7%84%B6%E5%9F%BA%E9%87%91%E6%8D%9099999%E5%85%83%23) `283.0K 🔥`
1. [登山公司称10人探险队全部遇难](https://s.weibo.com/weibo?q=%23%E7%99%BB%E5%B1%B1%E5%85%AC%E5%8F%B8%E7%A7%B010%E4%BA%BA%E6%8E%A2%E9%99%A9%E9%98%9F%E5%85%A8%E9%83%A8%E9%81%87%E9%9A%BE%23) `263.5K 🔥`
1. [罗正 前女友](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%20%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `256.1K 🔥`
1. [母亲把女儿当情绪垃圾桶](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E6%8A%8A%E5%A5%B3%E5%84%BF%E5%BD%93%E6%83%85%E7%BB%AA%E5%9E%83%E5%9C%BE%E6%A1%B6%23) `253.5K 🔥`
1. [闪迪业绩](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%BF%AA%E4%B8%9A%E7%BB%A9%23) `222.6K 🔥`
1. [新一代通信网建设加快](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E9%80%9A%E4%BF%A1%E7%BD%91%E5%BB%BA%E8%AE%BE%E5%8A%A0%E5%BF%AB%23) `826.4K 🔥` `-31%`
1. [日本地震灾区呼吁不要再送千纸鹤](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BE%E5%8C%BA%E5%91%BC%E5%90%81%E4%B8%8D%E8%A6%81%E5%86%8D%E9%80%81%E5%8D%83%E7%BA%B8%E9%B9%A4%23) `397.5K 🔥` `-40%`
1. [女孩截图假付款 (Girl screenshot fake payment)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%88%AA%E5%9B%BE%E5%81%87%E4%BB%98%E6%AC%BE%23) `262.0K 🔥` `-84%`
1. [集中供冷真的来了 (Centralized cooling is really here)](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%B8%AD%E4%BE%9B%E5%86%B7%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `253.4K 🔥` `-71%`
1. [赞达亚戴3000年文物耳环被批](https://s.weibo.com/weibo?q=%23%E8%B5%9E%E8%BE%BE%E4%BA%9A%E6%88%B43000%E5%B9%B4%E6%96%87%E7%89%A9%E8%80%B3%E7%8E%AF%E8%A2%AB%E6%89%B9%23) `242.6K 🔥` `-56%`
1. [瑞幸员工对嘴喷奶油 (Luckin employee sprays cream on mouth)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%91%98%E5%B7%A5%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%23) `222.5K 🔥` `-81%`
1. [瑞幸回应门店员工被曝用奶油枪喂食 (Luckin responds to store employees who were exposed to feeding them with cream guns)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%9B%9E%E5%BA%94%E9%97%A8%E5%BA%97%E5%91%98%E5%B7%A5%E8%A2%AB%E6%9B%9D%E7%94%A8%E5%A5%B6%E6%B2%B9%E6%9E%AA%E5%96%82%E9%A3%9F%23) `222.3K 🔥` `-31%`
1. [情侣是一种很诡异的亲密关系](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BE%88%E8%AF%A1%E5%BC%82%E7%9A%84%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%23) `180.1K 🔥` `-44%`
1. [施南生追思会 大家都老了 (Shi Nansheng’s memorial service. Everyone is old)](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E8%BF%BD%E6%80%9D%E4%BC%9A%20%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%80%81%E4%BA%86%23) `177.0K 🔥` `-36%`
1. [TF四代青岛演唱会官宣](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `169.3K 🔥` `-47%`
1. [天才女友 AI片头](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%20AI%E7%89%87%E5%A4%B4%23) `155.8K 🔥` `-63%`
1. [TF家族五公划区](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E4%BA%94%E5%85%AC%E5%88%92%E5%8C%BA%23) `154.1K 🔥` `-48%`

Updated at 2026-08-02 18:42:56

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
