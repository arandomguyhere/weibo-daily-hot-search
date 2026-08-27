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

1. [孙宇晨起诉景甜 (Justin Sun sues Jing Tian)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AE%87%E6%99%A8%E8%B5%B7%E8%AF%89%E6%99%AF%E7%94%9C%23) `20.1M 🔥` `NEW`
1. [孙宇晨 我的女友景甜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AE%87%E6%99%A8%20%E6%88%91%E7%9A%84%E5%A5%B3%E5%8F%8B%E6%99%AF%E7%94%9C%23) `14.2M 🔥` `NEW`
1. [张继科直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E7%9B%B4%E6%92%AD%23) `13.7M 🔥` `NEW`
1. [来京东报销全网家装旧订单](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%BA%AC%E4%B8%9C%E6%8A%A5%E9%94%80%E5%85%A8%E7%BD%91%E5%AE%B6%E8%A3%85%E6%97%A7%E8%AE%A2%E5%8D%95%23) `5.7M 🔥` `NEW`
1. [龙骨焚箱](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%AA%A8%E7%84%9A%E7%AE%B1%23) `1.6M 🔥` `NEW`
1. [西藏吉隆泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `1.6M 🔥` `NEW`
1. [解放军和武警部队已派500余人救援](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%92%8C%E6%AD%A6%E8%AD%A6%E9%83%A8%E9%98%9F%E5%B7%B2%E6%B4%BE500%E4%BD%99%E4%BA%BA%E6%95%91%E6%8F%B4%23) `1.6M 🔥` `NEW`
1. [韩国恋综网红女嘉宾皮肤好神奇](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%81%8B%E7%BB%BC%E7%BD%91%E7%BA%A2%E5%A5%B3%E5%98%89%E5%AE%BE%E7%9A%AE%E8%82%A4%E5%A5%BD%E7%A5%9E%E5%A5%87%23) `1.6M 🔥` `NEW`
1. [西藏吉隆口岸最新航拍画面](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%9C%80%E6%96%B0%E8%88%AA%E6%8B%8D%E7%94%BB%E9%9D%A2%23) `1.6M 🔥` `NEW`
1. [赵心童登顶世界第一](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `1.6M 🔥` `NEW`
1. [蔚来最出圈的功能是实习生做的 (NIO’s most outstanding feature was made by interns)](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E6%9C%80%E5%87%BA%E5%9C%88%E7%9A%84%E5%8A%9F%E8%83%BD%E6%98%AF%E5%AE%9E%E4%B9%A0%E7%94%9F%E5%81%9A%E7%9A%84%23) `1.6M 🔥` `NEW`
1. [金鹰奖延期](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%BB%B6%E6%9C%9F%23) `1.6M 🔥` `NEW`
1. [尼泊尔山洪359人死亡910人失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA359%E4%BA%BA%E6%AD%BB%E4%BA%A1910%E4%BA%BA%E5%A4%B1%E8%81%94%23) `1.6M 🔥` `NEW`
1. [曾颖文笔 更胜一筹](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E9%A2%96%E6%96%87%E7%AC%94%20%E6%9B%B4%E8%83%9C%E4%B8%80%E7%AD%B9%23) `1.6M 🔥` `NEW`
1. [孙宇晨当年保存的照片](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AE%87%E6%99%A8%E5%BD%93%E5%B9%B4%E4%BF%9D%E5%AD%98%E7%9A%84%E7%85%A7%E7%89%87%23) `1.6M 🔥` `NEW`
1. [香港警方通报68岁老人掌掴5岁女童](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A568%E5%B2%81%E8%80%81%E4%BA%BA%E6%8E%8C%E6%8E%B45%E5%B2%81%E5%A5%B3%E7%AB%A5%23) `1.6M 🔥` `NEW`
1. [Claude全责](https://s.weibo.com/weibo?q=%23Claude%E5%85%A8%E8%B4%A3%23) `1.6M 🔥` `NEW`
1. [佳偶天成回款2.51亿](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%9B%9E%E6%AC%BE2.51%E4%BA%BF%23) `1.6M 🔥` `NEW`
1. [早春晴朗尺度震惊老外](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%B0%BA%E5%BA%A6%E9%9C%87%E6%83%8A%E8%80%81%E5%A4%96%23) `1.6M 🔥` `NEW`
1. [儿子越南坠海父母认其女友为干女儿](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%B6%8A%E5%8D%97%E5%9D%A0%E6%B5%B7%E7%88%B6%E6%AF%8D%E8%AE%A4%E5%85%B6%E5%A5%B3%E5%8F%8B%E4%B8%BA%E5%B9%B2%E5%A5%B3%E5%84%BF%23) `1.6M 🔥` `NEW`
1. [孙宇晨 曾颖 (Justin Sun Zeng Ying)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AE%87%E6%99%A8%20%E6%9B%BE%E9%A2%96%23) `1.6M 🔥` `NEW`
1. [星宇补偿被解聘学生1.5万已发放](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%AE%87%E8%A1%A5%E5%81%BF%E8%A2%AB%E8%A7%A3%E8%81%98%E5%AD%A6%E7%94%9F1.5%E4%B8%87%E5%B7%B2%E5%8F%91%E6%94%BE%23) `1.6M 🔥` `NEW`
1. [颖学](https://s.weibo.com/weibo?q=%23%E9%A2%96%E5%AD%A6%23) `1.6M 🔥` `NEW`
1. [Claude 不要把五千万美元给她](https://s.weibo.com/weibo?q=%23Claude%20%E4%B8%8D%E8%A6%81%E6%8A%8A%E4%BA%94%E5%8D%83%E4%B8%87%E7%BE%8E%E5%85%83%E7%BB%99%E5%A5%B9%23) `1.6M 🔥` `NEW`
1. [尼泊尔网友拍到泥石流冲断大桥](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E7%BD%91%E5%8F%8B%E6%8B%8D%E5%88%B0%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%86%B2%E6%96%AD%E5%A4%A7%E6%A1%A5%23) `1.6M 🔥` `NEW`
1. [刘耀文 B站](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%20B%E7%AB%99%23) `1.6M 🔥` `NEW`
1. [女子生下4胞胎丈夫感慨省了几十万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B4%E8%83%9E%E8%83%8E%E4%B8%88%E5%A4%AB%E6%84%9F%E6%85%A8%E7%9C%81%E4%BA%86%E5%87%A0%E5%8D%81%E4%B8%87%23) `1.6M 🔥` `NEW`
1. [尼泊尔冰崩7分钟到西藏吉隆](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%86%B0%E5%B4%A97%E5%88%86%E9%92%9F%E5%88%B0%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%23) `1.6M 🔥` `NEW`
1. [医疗费很贵 请你振作](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%96%97%E8%B4%B9%E5%BE%88%E8%B4%B5%20%E8%AF%B7%E4%BD%A0%E6%8C%AF%E4%BD%9C%23) `1.6M 🔥` `NEW`
1. [22岁女生患不宁腿综合征](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%A5%B3%E7%94%9F%E6%82%A3%E4%B8%8D%E5%AE%81%E8%85%BF%E7%BB%BC%E5%90%88%E5%BE%81%23) `1.6M 🔥` `NEW`
1. [清华美院 丑画 (Tsinghua Academy of Fine Arts Ugly Paintings)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E7%BE%8E%E9%99%A2%20%E4%B8%91%E7%94%BB%23) `1.6M 🔥` `NEW`
1. [票卖光了只有两人看 不全是为了票房](https://s.weibo.com/weibo?q=%23%E7%A5%A8%E5%8D%96%E5%85%89%E4%BA%86%E5%8F%AA%E6%9C%89%E4%B8%A4%E4%BA%BA%E7%9C%8B%20%E4%B8%8D%E5%85%A8%E6%98%AF%E4%B8%BA%E4%BA%86%E7%A5%A8%E6%88%BF%23) `1.6M 🔥` `NEW`
1. [一座失去皇后的凡尔赛宫](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BA%A7%E5%A4%B1%E5%8E%BB%E7%9A%87%E5%90%8E%E7%9A%84%E5%87%A1%E5%B0%94%E8%B5%9B%E5%AE%AB%23) `1.6M 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `1.6M 🔥` `NEW`
1. [刘翔我放得了自己别人放不了我](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E6%88%91%E6%94%BE%E5%BE%97%E4%BA%86%E8%87%AA%E5%B7%B1%E5%88%AB%E4%BA%BA%E6%94%BE%E4%B8%8D%E4%BA%86%E6%88%91%23) `1.6M 🔥` `NEW`
1. [花少2被称第五大名著](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E8%A2%AB%E7%A7%B0%E7%AC%AC%E4%BA%94%E5%A4%A7%E5%90%8D%E8%91%97%23) `1.6M 🔥` `NEW`
1. [什么行为会让人好感度暴跌](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E8%A1%8C%E4%B8%BA%E4%BC%9A%E8%AE%A9%E4%BA%BA%E5%A5%BD%E6%84%9F%E5%BA%A6%E6%9A%B4%E8%B7%8C%23) `1.6M 🔥` `NEW`
1. [两兄妹被胡蜂蜇亡伤口均数百处](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%85%84%E5%A6%B9%E8%A2%AB%E8%83%A1%E8%9C%82%E8%9C%87%E4%BA%A1%E4%BC%A4%E5%8F%A3%E5%9D%87%E6%95%B0%E7%99%BE%E5%A4%84%23) `1.6M 🔥` `NEW`
1. [失踪104天遗体距住处400米](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%B8%AA104%E5%A4%A9%E9%81%97%E4%BD%93%E8%B7%9D%E4%BD%8F%E5%A4%84400%E7%B1%B3%23) `1.6M 🔥` `NEW`
1. [井柏然孙千半裸疗伤海报](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E5%8D%8A%E8%A3%B8%E7%96%97%E4%BC%A4%E6%B5%B7%E6%8A%A5%23) `1.6M 🔥` `NEW`
1. [台风沙德尔预报登陆时间推迟 (Typhoon Sadr's forecast landfall time delayed)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E9%A2%84%E6%8A%A5%E7%99%BB%E9%99%86%E6%97%B6%E9%97%B4%E6%8E%A8%E8%BF%9F%23) `1.6M 🔥` `NEW`
1. [乐山一男孩小区玩耍被垃圾车撞亡](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%B1%B1%E4%B8%80%E7%94%B7%E5%AD%A9%E5%B0%8F%E5%8C%BA%E7%8E%A9%E8%80%8D%E8%A2%AB%E5%9E%83%E5%9C%BE%E8%BD%A6%E6%92%9E%E4%BA%A1%23) `1.6M 🔥` `NEW`
1. [九尾说年总见](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E8%AF%B4%E5%B9%B4%E6%80%BB%E8%A7%81%23) `1.6M 🔥` `NEW`
1. [KPL十年十大年度记忆人物](https://s.weibo.com/weibo?q=%23KPL%E5%8D%81%E5%B9%B4%E5%8D%81%E5%A4%A7%E5%B9%B4%E5%BA%A6%E8%AE%B0%E5%BF%86%E4%BA%BA%E7%89%A9%23) `1.6M 🔥` `NEW`
1. [你永远斗不过一个读了王阳明的女生](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%B0%B8%E8%BF%9C%E6%96%97%E4%B8%8D%E8%BF%87%E4%B8%80%E4%B8%AA%E8%AF%BB%E4%BA%86%E7%8E%8B%E9%98%B3%E6%98%8E%E7%9A%84%E5%A5%B3%E7%94%9F%23) `1.6M 🔥` `NEW`
1. [橹穆手办](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E6%89%8B%E5%8A%9E%23) `1.6M 🔥` `NEW`
1. [梁洁新剧演出生理性痛感](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B4%81%E6%96%B0%E5%89%A7%E6%BC%94%E5%87%BA%E7%94%9F%E7%90%86%E6%80%A7%E7%97%9B%E6%84%9F%23) `1.6M 🔥` `NEW`
1. [中国特供奥迪反向进入德国价格翻倍](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%89%B9%E4%BE%9B%E5%A5%A5%E8%BF%AA%E5%8F%8D%E5%90%91%E8%BF%9B%E5%85%A5%E5%BE%B7%E5%9B%BD%E4%BB%B7%E6%A0%BC%E7%BF%BB%E5%80%8D%23) `1.6M 🔥` `NEW`
1. [9岁男孩小区内遭垃圾车碾轧身亡](https://s.weibo.com/weibo?q=%239%E5%B2%81%E7%94%B7%E5%AD%A9%E5%B0%8F%E5%8C%BA%E5%86%85%E9%81%AD%E5%9E%83%E5%9C%BE%E8%BD%A6%E7%A2%BE%E8%BD%A7%E8%BA%AB%E4%BA%A1%23) `1.6M 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `1.6M 🔥` `+322%`
1. [西藏泥石流遇难3人失联558人](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE3%E4%BA%BA%E5%A4%B1%E8%81%94558%E4%BA%BA%23) `1.6M 🔥` `-85%`

Updated at 2026-08-27 23:32:00

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
