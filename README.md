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

1. [十五五我们躬身加油干 (On the 15th, let’s work hard)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%88%91%E4%BB%AC%E8%BA%AC%E8%BA%AB%E5%8A%A0%E6%B2%B9%E5%B9%B2%23) `622.2K 🔥` `NEW`
1. [国乒男线对德国3连败](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E7%BA%BF%E5%AF%B9%E5%BE%B7%E5%9B%BD3%E8%BF%9E%E8%B4%A5%23) `277.1K 🔥` `NEW`
1. [收到了去世好友的微信回复](https://s.weibo.com/weibo?q=%23%E6%94%B6%E5%88%B0%E4%BA%86%E5%8E%BB%E4%B8%96%E5%A5%BD%E5%8F%8B%E7%9A%84%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%A4%8D%23) `258.6K 🔥` `NEW`
1. [梁靖崑vs奥恰洛夫](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91vs%E5%A5%A5%E6%81%B0%E6%B4%9B%E5%A4%AB%23) `204.6K 🔥` `NEW`
1. [最高法提示好好跟家人说话](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%AB%98%E6%B3%95%E6%8F%90%E7%A4%BA%E5%A5%BD%E5%A5%BD%E8%B7%9F%E5%AE%B6%E4%BA%BA%E8%AF%B4%E8%AF%9D%23) `184.4K 🔥` `NEW`
1. [杨紫 没人通知我啊](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E6%B2%A1%E4%BA%BA%E9%80%9A%E7%9F%A5%E6%88%91%E5%95%8A%23) `183.8K 🔥` `NEW`
1. [被易烊千玺骗到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%AA%97%E5%88%B0%E4%BA%86%23) `179.5K 🔥` `NEW`
1. [阿信寸头](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E5%AF%B8%E5%A4%B4%23) `178.1K 🔥` `NEW`
1. [车祸住院11天电子病历被改30次](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E7%A5%B8%E4%BD%8F%E9%99%A211%E5%A4%A9%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86%E8%A2%AB%E6%94%B930%E6%AC%A1%23) `175.3K 🔥` `NEW`
1. [家属公布输液后去世男童生化报告](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%85%AC%E5%B8%83%E8%BE%93%E6%B6%B2%E5%90%8E%E5%8E%BB%E4%B8%96%E7%94%B7%E7%AB%A5%E7%94%9F%E5%8C%96%E6%8A%A5%E5%91%8A%23) `173.7K 🔥` `NEW`
1. [为什么木耳不能直接用水泡 (Why can’t fungus be soaked directly in water?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%A8%E8%80%B3%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E7%94%A8%E6%B0%B4%E6%B3%A1%23) `172.4K 🔥` `NEW`
1. [黄子韬自曝不拍戏原因](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E8%87%AA%E6%9B%9D%E4%B8%8D%E6%8B%8D%E6%88%8F%E5%8E%9F%E5%9B%A0%23) `170.2K 🔥` `NEW`
1. [严屹宽鼓励张凌赫接受质疑](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E9%BC%93%E5%8A%B1%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8E%A5%E5%8F%97%E8%B4%A8%E7%96%91%23) `168.6K 🔥` `NEW`
1. [迪丽热巴祝大家随心所愚](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A5%9D%E5%A4%A7%E5%AE%B6%E9%9A%8F%E5%BF%83%E6%89%80%E6%84%9A%23) `166.0K 🔥` `NEW`
1. [家事法庭](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%BA%8B%E6%B3%95%E5%BA%AD%23) `138.8K 🔥` `NEW`
1. [夏之光站了鞠婧祎陈都灵中间我站哪](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%E7%AB%99%E4%BA%86%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%99%88%E9%83%BD%E7%81%B5%E4%B8%AD%E9%97%B4%E6%88%91%E7%AB%99%E5%93%AA%23) `125.3K 🔥` `NEW`
1. [谷爱凌郭晶晶何超琼合照](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%83%AD%E6%99%B6%E6%99%B6%E4%BD%95%E8%B6%85%E7%90%BC%E5%90%88%E7%85%A7%23) `124.2K 🔥` `NEW`
1. [得知妻子患红斑狼疮男子起诉离婚](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A5%E5%A6%BB%E5%AD%90%E6%82%A3%E7%BA%A2%E6%96%91%E7%8B%BC%E7%96%AE%E7%94%B7%E5%AD%90%E8%B5%B7%E8%AF%89%E7%A6%BB%E5%A9%9A%23) `122.2K 🔥` `NEW`
1. [乒乓球世界杯](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E4%B8%96%E7%95%8C%E6%9D%AF%23) `121.8K 🔥` `NEW`
1. [爸爸当家嘉宾恭喜马君妍马杨](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B6%E5%98%89%E5%AE%BE%E6%81%AD%E5%96%9C%E9%A9%AC%E5%90%9B%E5%A6%8D%E9%A9%AC%E6%9D%A8%23) `120.0K 🔥` `NEW`
1. [流感疫苗市场要变天了 (The flu vaccine market is about to change)](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%84%9F%E7%96%AB%E8%8B%97%E5%B8%82%E5%9C%BA%E8%A6%81%E5%8F%98%E5%A4%A9%E4%BA%86%23) `120.0K 🔥` `NEW`
1. [特朗普称将很快撤出伊朗战事](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B0%86%E5%BE%88%E5%BF%AB%E6%92%A4%E5%87%BA%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%8B%23) `103.3K 🔥` `NEW`
1. [有商家把不能听歌的有线耳机当项链卖](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%95%86%E5%AE%B6%E6%8A%8A%E4%B8%8D%E8%83%BD%E5%90%AC%E6%AD%8C%E7%9A%84%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E5%BD%93%E9%A1%B9%E9%93%BE%E5%8D%96%23) `93.3K 🔥` `NEW`
1. [前任.skill](https://s.weibo.com/weibo?q=%23%E5%89%8D%E4%BB%BB.skill%23) `88.0K 🔥` `NEW`
1. [高市早苗对马克龙施展龟派气功](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%AF%B9%E9%A9%AC%E5%85%8B%E9%BE%99%E6%96%BD%E5%B1%95%E9%BE%9F%E6%B4%BE%E6%B0%94%E5%8A%9F%23) `1.1M 🔥` `+523%`
1. [陈都灵工作室连夜招人整改](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%BF%9E%E5%A4%9C%E6%8B%9B%E4%BA%BA%E6%95%B4%E6%94%B9%23) `182.3K 🔥`
1. [女子瞒重病订婚向男友索600万治病](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9E%92%E9%87%8D%E7%97%85%E8%AE%A2%E5%A9%9A%E5%90%91%E7%94%B7%E5%8F%8B%E7%B4%A2600%E4%B8%87%E6%B2%BB%E7%97%85%23) `180.4K 🔥`
1. [有线耳机爆火原因 (Reasons why wired headphones explode)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%88%86%E7%81%AB%E5%8E%9F%E5%9B%A0%23) `785.3K 🔥` `-26%`
1. [你的公积金悄悄变多了 (Your provident fund has quietly increased)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%AC%E7%A7%AF%E9%87%91%E6%82%84%E6%82%84%E5%8F%98%E5%A4%9A%E4%BA%86%23) `304.2K 🔥` `-61%`
1. [凯越机车致歉](https://s.weibo.com/weibo?q=%23%E5%87%AF%E8%B6%8A%E6%9C%BA%E8%BD%A6%E8%87%B4%E6%AD%89%23) `231.2K 🔥` `-33%`
1. [这才叫热锅凉油](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E5%8F%AB%E7%83%AD%E9%94%85%E5%87%89%E6%B2%B9%23) `187.7K 🔥` `-42%`
1. [以色列决定报复法国](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%86%B3%E5%AE%9A%E6%8A%A5%E5%A4%8D%E6%B3%95%E5%9B%BD%23) `187.4K 🔥` `-45%`
1. [马立奥有妹妹了 (Mario has a sister)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E6%9C%89%E5%A6%B9%E5%A6%B9%E4%BA%86%23) `186.0K 🔥` `-42%`
1. [无需粉底液这才是军人本色](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%9C%80%E7%B2%89%E5%BA%95%E6%B6%B2%E8%BF%99%E6%89%8D%E6%98%AF%E5%86%9B%E4%BA%BA%E6%9C%AC%E8%89%B2%23) `177.4K 🔥` `-40%`
1. [内田有纪柏原崇结婚](https://s.weibo.com/weibo?q=%23%E5%86%85%E7%94%B0%E6%9C%89%E7%BA%AA%E6%9F%8F%E5%8E%9F%E5%B4%87%E7%BB%93%E5%A9%9A%23) `171.9K 🔥` `-46%`
1. [甲骨文3万人一觉睡醒工作没了](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%AA%A8%E6%96%873%E4%B8%87%E4%BA%BA%E4%B8%80%E8%A7%89%E7%9D%A1%E9%86%92%E5%B7%A5%E4%BD%9C%E6%B2%A1%E4%BA%86%23) `168.7K 🔥` `-46%`
1. [特朗普称伊朗新政权总统请求停火 (Trump says new Iranian regime president asks for ceasefire)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%96%B0%E6%94%BF%E6%9D%83%E6%80%BB%E7%BB%9F%E8%AF%B7%E6%B1%82%E5%81%9C%E7%81%AB%23) `166.7K 🔥` `-38%`
1. [李连杰 短剧](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%20%E7%9F%AD%E5%89%A7%23) `163.8K 🔥` `-48%`
1. [伊朗总统说遵从最高领袖指示](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E9%81%B5%E4%BB%8E%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E6%8C%87%E7%A4%BA%23) `152.5K 🔥` `-55%`
1. [杨紫直播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%23) `149.0K 🔥` `-51%`
1. [优思益声明](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%A3%B0%E6%98%8E%23) `143.2K 🔥` `-28%`
1. [严浩翔发的是刘耀文](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%91%E7%9A%84%E6%98%AF%E5%88%98%E8%80%80%E6%96%87%23) `136.6K 🔥` `-31%`
1. [妹妹看到姐姐遗体惨状当场崩溃](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E7%9C%8B%E5%88%B0%E5%A7%90%E5%A7%90%E9%81%97%E4%BD%93%E6%83%A8%E7%8A%B6%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `127.9K 🔥` `-42%`
1. [公安部力挺张雪新手禁令 (The Ministry of Public Security supports Zhang Xue’s novice ban)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%83%A8%E5%8A%9B%E6%8C%BA%E5%BC%A0%E9%9B%AA%E6%96%B0%E6%89%8B%E7%A6%81%E4%BB%A4%23) `125.9K 🔥` `-62%`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `120.1K 🔥` `-31%`
1. [七旬男子欲强奸女精神病人未遂 (Man in his 70s attempted to rape female mental patient but failed)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E7%94%B7%E5%AD%90%E6%AC%B2%E5%BC%BA%E5%A5%B8%E5%A5%B3%E7%B2%BE%E7%A5%9E%E7%97%85%E4%BA%BA%E6%9C%AA%E9%81%82%23) `94.8K 🔥` `-51%`
1. [丁程鑫发了严浩翔 (Ding Chengxin sent Yan Haoxiang)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%91%E4%BA%86%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `94.2K 🔥` `-39%`
1. [芭乐 早知道烂地里了](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%20%E6%97%A9%E7%9F%A5%E9%81%93%E7%83%82%E5%9C%B0%E9%87%8C%E4%BA%86%23) `90.0K 🔥` `-50%`
1. [日本超市卖蔬菜边角料](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B6%85%E5%B8%82%E5%8D%96%E8%94%AC%E8%8F%9C%E8%BE%B9%E8%A7%92%E6%96%99%23) `89.1K 🔥` `-23%`
1. [明星买张雪机车也得排队](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E4%B9%B0%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B9%9F%E5%BE%97%E6%8E%92%E9%98%9F%23) `83.8K 🔥` `-52%`

Updated at 2026-04-01 23:22:04

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
