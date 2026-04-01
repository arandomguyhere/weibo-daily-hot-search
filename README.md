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

1. [2026款小鹏MONA今日上市 (2026 Xpeng MONA launched today)](https://s.weibo.com/weibo?q=%232026%E6%AC%BE%E5%B0%8F%E9%B9%8FMONA%E4%BB%8A%E6%97%A5%E4%B8%8A%E5%B8%82%23) `238.8K 🔥` `NEW`
1. [以色列遭开战以来最大规模导弹袭击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%81%AD%E5%BC%80%E6%88%98%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `213.5K 🔥` `NEW`
1. [迪丽热巴真的扭到我心巴上了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%9F%E7%9A%84%E6%89%AD%E5%88%B0%E6%88%91%E5%BF%83%E5%B7%B4%E4%B8%8A%E4%BA%86%23) `95.1K 🔥` `NEW`
1. [金价急速上涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E9%80%9F%E4%B8%8A%E6%B6%A8%23) `82.4K 🔥` `NEW`
1. [美以难阻伊朗导弹反击](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E9%9A%BE%E9%98%BB%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%8F%8D%E5%87%BB%23) `47.5K 🔥` `NEW`
1. [保时捷女销售再夺一季度销冠](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%94%AE%E5%86%8D%E5%A4%BA%E4%B8%80%E5%AD%A3%E5%BA%A6%E9%94%80%E5%86%A0%23) `43.8K 🔥` `NEW`
1. [鞠婧祎角色热度优酷年冠](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%A7%92%E8%89%B2%E7%83%AD%E5%BA%A6%E4%BC%98%E9%85%B7%E5%B9%B4%E5%86%A0%23) `37.2K 🔥` `NEW`
1. [家事法庭](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%BA%8B%E6%B3%95%E5%BA%AD%23) `35.5K 🔥` `NEW`
1. [与辉同行卖优思益销售额超千万](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%BE%89%E5%90%8C%E8%A1%8C%E5%8D%96%E4%BC%98%E6%80%9D%E7%9B%8A%E9%94%80%E5%94%AE%E9%A2%9D%E8%B6%85%E5%8D%83%E4%B8%87%23) `296.3K 🔥` `+53%`
1. [收到了去世好友的微信回复](https://s.weibo.com/weibo?q=%23%E6%94%B6%E5%88%B0%E4%BA%86%E5%8E%BB%E4%B8%96%E5%A5%BD%E5%8F%8B%E7%9A%84%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%A4%8D%23) `236.4K 🔥` `+42%`
1. [陈都灵两条剧宣视频已经删了 (Chen Duling's two drama promotional videos have been deleted)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E4%B8%A4%E6%9D%A1%E5%89%A7%E5%AE%A3%E8%A7%86%E9%A2%91%E5%B7%B2%E7%BB%8F%E5%88%A0%E4%BA%86%23) `109.3K 🔥`
1. [优思益](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `97.1K 🔥`
1. [国乒男线对德国3连败 (National table tennis men's line lost 3 games in a row against Germany)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E7%BA%BF%E5%AF%B9%E5%BE%B7%E5%9B%BD3%E8%BF%9E%E8%B4%A5%23) `417.9K 🔥` `-50%`
1. [十五五我们躬身加油干](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%88%91%E4%BB%AC%E8%BA%AC%E8%BA%AB%E5%8A%A0%E6%B2%B9%E5%B9%B2%23) `240.5K 🔥` `-49%`
1. [日本核原料能造5500枚核弹头](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%A0%B8%E5%8E%9F%E6%96%99%E8%83%BD%E9%80%A05500%E6%9E%9A%E6%A0%B8%E5%BC%B9%E5%A4%B4%23) `104.0K 🔥` `-36%`
1. [有线耳机爆火原因](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%88%86%E7%81%AB%E5%8E%9F%E5%9B%A0%23) `97.3K 🔥` `-37%`
1. [优思益声明](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%A3%B0%E6%98%8E%23) `97.3K 🔥` `-28%`
1. [杨紫 没人通知我啊 (Yang Zi, no one informed me)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E6%B2%A1%E4%BA%BA%E9%80%9A%E7%9F%A5%E6%88%91%E5%95%8A%23) `96.8K 🔥` `-29%`
1. [马立奥有妹妹了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E6%9C%89%E5%A6%B9%E5%A6%B9%E4%BA%86%23) `96.4K 🔥` `-29%`
1. [严屹宽鼓励张凌赫接受质疑](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E9%BC%93%E5%8A%B1%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8E%A5%E5%8F%97%E8%B4%A8%E7%96%91%23) `96.3K 🔥` `-28%`
1. [陈都灵工作室连夜招人整改](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%BF%9E%E5%A4%9C%E6%8B%9B%E4%BA%BA%E6%95%B4%E6%94%B9%23) `96.1K 🔥` `-28%`
1. [无需粉底液这才是军人本色](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%9C%80%E7%B2%89%E5%BA%95%E6%B6%B2%E8%BF%99%E6%89%8D%E6%98%AF%E5%86%9B%E4%BA%BA%E6%9C%AC%E8%89%B2%23) `95.8K 🔥` `-29%`
1. [被易烊千玺骗到了 (Deceived by Yi Yang Qianxi)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%AA%97%E5%88%B0%E4%BA%86%23) `95.6K 🔥` `-28%`
1. [黄子韬自曝不拍戏原因](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E8%87%AA%E6%9B%9D%E4%B8%8D%E6%8B%8D%E6%88%8F%E5%8E%9F%E5%9B%A0%23) `95.3K 🔥` `-28%`
1. [甲骨文3万人一觉睡醒工作没了](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%AA%A8%E6%96%873%E4%B8%87%E4%BA%BA%E4%B8%80%E8%A7%89%E7%9D%A1%E9%86%92%E5%B7%A5%E4%BD%9C%E6%B2%A1%E4%BA%86%23) `85.7K 🔥` `-35%`
1. [谷爱凌郭晶晶何超琼合照](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%83%AD%E6%99%B6%E6%99%B6%E4%BD%95%E8%B6%85%E7%90%BC%E5%90%88%E7%85%A7%23) `83.1K 🔥` `-51%`
1. [医生谈全红婵减肥一天只吃一顿饭](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%88%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%87%8F%E8%82%A5%E4%B8%80%E5%A4%A9%E5%8F%AA%E5%90%83%E4%B8%80%E9%A1%BF%E9%A5%AD%23) `82.9K 🔥` `-33%`
1. [阿信寸头](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E5%AF%B8%E5%A4%B4%23) `68.1K 🔥` `-46%`
1. [为什么木耳不能直接用水泡 (Why can’t fungus be soaked directly in water?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%A8%E8%80%B3%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E7%94%A8%E6%B0%B4%E6%B3%A1%23) `64.3K 🔥` `-48%`
1. [迪丽热巴祝大家随心所愚 (Dilireba wishes everyone to be as foolish as they want)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A5%9D%E5%A4%A7%E5%AE%B6%E9%9A%8F%E5%BF%83%E6%89%80%E6%84%9A%23) `52.0K 🔥` `-26%`
1. [你的公积金悄悄变多了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%AC%E7%A7%AF%E9%87%91%E6%82%84%E6%82%84%E5%8F%98%E5%A4%9A%E4%BA%86%23) `51.1K 🔥` `-67%`
1. [优思益问题被调查](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E9%97%AE%E9%A2%98%E8%A2%AB%E8%B0%83%E6%9F%A5%23) `50.8K 🔥` `-24%`
1. [内田有纪柏原崇结婚](https://s.weibo.com/weibo?q=%23%E5%86%85%E7%94%B0%E6%9C%89%E7%BA%AA%E6%9F%8F%E5%8E%9F%E5%B4%87%E7%BB%93%E5%A9%9A%23) `50.5K 🔥` `-58%`
1. [凯越机车致歉](https://s.weibo.com/weibo?q=%23%E5%87%AF%E8%B6%8A%E6%9C%BA%E8%BD%A6%E8%87%B4%E6%AD%89%23) `44.5K 🔥` `-66%`
1. [美以伊地面战一触即发 (The U.S.-Israeli ground war is about to break out)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E4%BC%8A%E5%9C%B0%E9%9D%A2%E6%88%98%E4%B8%80%E8%A7%A6%E5%8D%B3%E5%8F%91%23) `41.6K 🔥` `-31%`
1. [女子瞒重病订婚向男友索600万治病](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9E%92%E9%87%8D%E7%97%85%E8%AE%A2%E5%A9%9A%E5%90%91%E7%94%B7%E5%8F%8B%E7%B4%A2600%E4%B8%87%E6%B2%BB%E7%97%85%23) `41.2K 🔥` `-60%`
1. [特朗普称伊朗新政权总统请求停火](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%96%B0%E6%94%BF%E6%9D%83%E6%80%BB%E7%BB%9F%E8%AF%B7%E6%B1%82%E5%81%9C%E7%81%AB%23) `40.9K 🔥` `-42%`
1. [小车停车库半年车身写满留言](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%BD%A6%E5%81%9C%E8%BD%A6%E5%BA%93%E5%8D%8A%E5%B9%B4%E8%BD%A6%E8%BA%AB%E5%86%99%E6%BB%A1%E7%95%99%E8%A8%80%23) `40.6K 🔥` `-34%`
1. [白敬亭也在用有线耳机](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%B9%9F%E5%9C%A8%E7%94%A8%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%23) `39.0K 🔥` `-65%`
1. [以色列决定报复法国](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%86%B3%E5%AE%9A%E6%8A%A5%E5%A4%8D%E6%B3%95%E5%9B%BD%23) `38.9K 🔥` `-46%`
1. [丁程鑫发了严浩翔](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%91%E4%BA%86%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `38.3K 🔥` `-36%`
1. [妹妹看到姐姐遗体惨状当场崩溃](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E7%9C%8B%E5%88%B0%E5%A7%90%E5%A7%90%E9%81%97%E4%BD%93%E6%83%A8%E7%8A%B6%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `36.5K 🔥` `-45%`
1. [伊朗总统说遵从最高领袖指示](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E9%81%B5%E4%BB%8E%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E6%8C%87%E7%A4%BA%23) `35.8K 🔥` `-50%`
1. [这才叫热锅凉油](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E5%8F%AB%E7%83%AD%E9%94%85%E5%87%89%E6%B2%B9%23) `35.6K 🔥` `-67%`
1. [严浩翔发的是刘耀文 (Yan Haoxiang's hair is Liu Yaowen)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%91%E7%9A%84%E6%98%AF%E5%88%98%E8%80%80%E6%96%87%23) `35.6K 🔥` `-47%`
1. [七旬男子欲强奸女精神病人未遂](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E7%94%B7%E5%AD%90%E6%AC%B2%E5%BC%BA%E5%A5%B8%E5%A5%B3%E7%B2%BE%E7%A5%9E%E7%97%85%E4%BA%BA%E6%9C%AA%E9%81%82%23) `35.6K 🔥` `-46%`
1. [浙江国资回应投资张雪9000万](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%9B%BD%E8%B5%84%E5%9B%9E%E5%BA%94%E6%8A%95%E8%B5%84%E5%BC%A0%E9%9B%AA9000%E4%B8%87%23) `35.6K 🔥` `-41%`
1. [WB战胜JDG](https://s.weibo.com/weibo?q=%23WB%E6%88%98%E8%83%9CJDG%23) `35.5K 🔥` `-41%`
1. [张雪带火的红糖3天卖了2万多单](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B8%A6%E7%81%AB%E7%9A%84%E7%BA%A2%E7%B3%963%E5%A4%A9%E5%8D%96%E4%BA%862%E4%B8%87%E5%A4%9A%E5%8D%95%23) `35.5K 🔥` `-41%`
1. [公安部力挺张雪新手禁令 (The Ministry of Public Security supports Zhang Xue’s novice ban)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%83%A8%E5%8A%9B%E6%8C%BA%E5%BC%A0%E9%9B%AA%E6%96%B0%E6%89%8B%E7%A6%81%E4%BB%A4%23) `35.5K 🔥` `-42%`
1. [中方在联合国敲响警钟](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9C%A8%E8%81%94%E5%90%88%E5%9B%BD%E6%95%B2%E5%93%8D%E8%AD%A6%E9%92%9F%23) `35.5K 🔥` `-41%`

Updated at 2026-04-02 01:31:10

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
