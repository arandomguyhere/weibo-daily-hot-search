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

1. [退货千万不要提前给取件码 (Never give a pickup code in advance when returning goods)](https://s.weibo.com/weibo?q=%23%E9%80%80%E8%B4%A7%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8F%90%E5%89%8D%E7%BB%99%E5%8F%96%E4%BB%B6%E7%A0%81%23) `1.5M 🔥` `NEW`
1. [SK海力士](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%23) `761.1K 🔥` `NEW`
1. [上半年我国环境空气质量稳中向好](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E6%88%91%E5%9B%BD%E7%8E%AF%E5%A2%83%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F%E7%A8%B3%E4%B8%AD%E5%90%91%E5%A5%BD%23) `665.6K 🔥` `NEW`
1. [日本7.1级地震民众哭喊声一片](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%B0%91%E4%BC%97%E5%93%AD%E5%96%8A%E5%A3%B0%E4%B8%80%E7%89%87%23) `630.0K 🔥` `NEW`
1. [日本坍塌购物中心多人确认死亡](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9D%8D%E5%A1%8C%E8%B4%AD%E7%89%A9%E4%B8%AD%E5%BF%83%E5%A4%9A%E4%BA%BA%E7%A1%AE%E8%AE%A4%E6%AD%BB%E4%BA%A1%23) `561.9K 🔥` `NEW`
1. [日本7.1级强震已致多人死亡](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%BC%BA%E9%9C%87%E5%B7%B2%E8%87%B4%E5%A4%9A%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `534.5K 🔥` `NEW`
1. [爷爷不泡茶首创荔枝冰酿](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%E9%A6%96%E5%88%9B%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%BF%23) `519.9K 🔥` `NEW`
1. [男友逼坠楼生还女孩返还恋爱开销](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E9%80%BC%E5%9D%A0%E6%A5%BC%E7%94%9F%E8%BF%98%E5%A5%B3%E5%AD%A9%E8%BF%94%E8%BF%98%E6%81%8B%E7%88%B1%E5%BC%80%E9%94%80%23) `519.7K 🔥` `NEW`
1. [蜘蛛侠](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%23) `468.7K 🔥` `NEW`
1. [赵昭仪御廷谣演技](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E5%BE%A1%E5%BB%B7%E8%B0%A3%E6%BC%94%E6%8A%80%23) `413.3K 🔥` `NEW`
1. [柳周cp亲了 (Liu Zhou cp kissed)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%91%A8cp%E4%BA%B2%E4%BA%86%23) `329.3K 🔥` `NEW`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `325.3K 🔥` `NEW`
1. [曝Bin圣枪哥处境相反](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E5%9C%A3%E6%9E%AA%E5%93%A5%E5%A4%84%E5%A2%83%E7%9B%B8%E5%8F%8D%23) `282.4K 🔥` `NEW`
1. [航拍日本强震后现状](https://s.weibo.com/weibo?q=%23%E8%88%AA%E6%8B%8D%E6%97%A5%E6%9C%AC%E5%BC%BA%E9%9C%87%E5%90%8E%E7%8E%B0%E7%8A%B6%23) `277.9K 🔥` `NEW`
1. [人怎么能说出这么通透的话](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E8%AF%B4%E5%87%BA%E8%BF%99%E4%B9%88%E9%80%9A%E9%80%8F%E7%9A%84%E8%AF%9D%23) `267.7K 🔥` `NEW`
1. [艾米晒与侯明昊9张合照](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E6%99%92%E4%B8%8E%E4%BE%AF%E6%98%8E%E6%98%8A9%E5%BC%A0%E5%90%88%E7%85%A7%23) `242.0K 🔥` `NEW`
1. [CHINAJOY](https://s.weibo.com/weibo?q=%23CHINAJOY%23) `239.1K 🔥` `NEW`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `236.9K 🔥` `NEW`
1. [张凌赫我最讨厌事后道歉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%88%91%E6%9C%80%E8%AE%A8%E5%8E%8C%E4%BA%8B%E5%90%8E%E9%81%93%E6%AD%89%23) `236.9K 🔥` `NEW`
1. [Flandre离开AL](https://s.weibo.com/weibo?q=%23Flandre%E7%A6%BB%E5%BC%80AL%23) `236.5K 🔥` `NEW`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `234.2K 🔥` `NEW`
1. [王虹留学3位北大数院老师写推荐信](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E7%95%99%E5%AD%A63%E4%BD%8D%E5%8C%97%E5%A4%A7%E6%95%B0%E9%99%A2%E8%80%81%E5%B8%88%E5%86%99%E6%8E%A8%E8%8D%90%E4%BF%A1%23) `231.1K 🔥` `NEW`
1. [男童挡电梯20秒等家长女子催促被打](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%8C%A1%E7%94%B5%E6%A2%AF20%E7%A7%92%E7%AD%89%E5%AE%B6%E9%95%BF%E5%A5%B3%E5%AD%90%E5%82%AC%E4%BF%83%E8%A2%AB%E6%89%93%23) `229.0K 🔥` `NEW`
1. [广东夫妇赶海船被撞翻父逃生母溺亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%A4%AB%E5%A6%87%E8%B5%B6%E6%B5%B7%E8%88%B9%E8%A2%AB%E6%92%9E%E7%BF%BB%E7%88%B6%E9%80%83%E7%94%9F%E6%AF%8D%E6%BA%BA%E4%BA%A1%23) `224.3K 🔥` `NEW`
1. [AI公司 原版书籍销毁](https://s.weibo.com/weibo?q=%23AI%E5%85%AC%E5%8F%B8%20%E5%8E%9F%E7%89%88%E4%B9%A6%E7%B1%8D%E9%94%80%E6%AF%81%23) `218.3K 🔥` `NEW`
1. [日本地震山崩瞬间画面曝光](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E5%B1%B1%E5%B4%A9%E7%9E%AC%E9%97%B4%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `217.5K 🔥` `NEW`
1. [大领导进来办公室要站起来吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A2%86%E5%AF%BC%E8%BF%9B%E6%9D%A5%E5%8A%9E%E5%85%AC%E5%AE%A4%E8%A6%81%E7%AB%99%E8%B5%B7%E6%9D%A5%E5%90%97%23) `201.4K 🔥` `NEW`
1. [陈哲远感谢于正](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%84%9F%E8%B0%A2%E4%BA%8E%E6%AD%A3%23) `193.1K 🔥` `NEW`
1. [张凌赫是王楚然铁粉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%98%AF%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%93%81%E7%B2%89%23) `190.7K 🔥` `NEW`
1. [心理疾病和精神疾病的区别](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E7%96%BE%E7%97%85%E5%92%8C%E7%B2%BE%E7%A5%9E%E7%96%BE%E7%97%85%E7%9A%84%E5%8C%BA%E5%88%AB%23) `185.5K 🔥` `NEW`
1. [普京称俄罗斯未来岌岌可危 (Putin says Russia's future is at stake)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E4%BF%84%E7%BD%97%E6%96%AF%E6%9C%AA%E6%9D%A5%E5%B2%8C%E5%B2%8C%E5%8F%AF%E5%8D%B1%23) `174.5K 🔥` `NEW`
1. [御廷谣开播收视率](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%E5%BC%80%E6%92%AD%E6%94%B6%E8%A7%86%E7%8E%87%23) `172.6K 🔥` `NEW`
1. [狼队锁第三轮S组](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E9%94%81%E7%AC%AC%E4%B8%89%E8%BD%AES%E7%BB%84%23) `167.9K 🔥` `NEW`
1. [周佑凌 柳柳](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%20%E6%9F%B3%E6%9F%B3%23) `162.9K 🔥` `NEW`
1. [库库雷利亚真去纹身了](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%BA%93%E9%9B%B7%E5%88%A9%E4%BA%9A%E7%9C%9F%E5%8E%BB%E7%BA%B9%E8%BA%AB%E4%BA%86%23) `152.1K 🔥` `NEW`
1. [哈啰电车突然落锁致十级伤残](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%95%B0%E7%94%B5%E8%BD%A6%E7%AA%81%E7%84%B6%E8%90%BD%E9%94%81%E8%87%B4%E5%8D%81%E7%BA%A7%E4%BC%A4%E6%AE%8B%23) `145.9K 🔥` `NEW`
1. [该不该把家里的财务状况告诉孩子](https://s.weibo.com/weibo?q=%23%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%8A%8A%E5%AE%B6%E9%87%8C%E7%9A%84%E8%B4%A2%E5%8A%A1%E7%8A%B6%E5%86%B5%E5%91%8A%E8%AF%89%E5%AD%A9%E5%AD%90%23) `141.9K 🔥` `NEW`
1. [艾米还有四部待播剧](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E8%BF%98%E6%9C%89%E5%9B%9B%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%23) `125.9K 🔥` `NEW`
1. [上海震感](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%9C%87%E6%84%9F%23) `124.1K 🔥` `NEW`
1. [陈哲远 播了播了播了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E6%92%AD%E4%BA%86%E6%92%AD%E4%BA%86%E6%92%AD%E4%BA%86%23) `110.8K 🔥` `NEW`
1. [严浩翔唱了特别的人 (Yan Haoxiang sang a special person)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%94%B1%E4%BA%86%E7%89%B9%E5%88%AB%E7%9A%84%E4%BA%BA%23) `105.6K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `105.5K 🔥` `NEW`
1. [丁程鑫刘耀文给张真源打歌](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%88%98%E8%80%80%E6%96%87%E7%BB%99%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%89%93%E6%AD%8C%23) `104.5K 🔥` `NEW`
1. [日本人吃那么少真的不饿吗](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%90%83%E9%82%A3%E4%B9%88%E5%B0%91%E7%9C%9F%E7%9A%84%E4%B8%8D%E9%A5%BF%E5%90%97%23) `96.3K 🔥` `NEW`
1. [日本地震熊本商场爆炸瞬间](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%86%8A%E6%9C%AC%E5%95%86%E5%9C%BA%E7%88%86%E7%82%B8%E7%9E%AC%E9%97%B4%23) `95.8K 🔥` `NEW`
1. [小欢喜原著结局](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%AC%A2%E5%96%9C%E5%8E%9F%E8%91%97%E7%BB%93%E5%B1%80%23) `91.1K 🔥` `NEW`
1. [花儿与少年8录制回国](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%E5%BD%95%E5%88%B6%E5%9B%9E%E5%9B%BD%23) `88.3K 🔥` `NEW`
1. [两女子疑因男童卡住电梯门大打出手](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E7%96%91%E5%9B%A0%E7%94%B7%E7%AB%A5%E5%8D%A1%E4%BD%8F%E7%94%B5%E6%A2%AF%E9%97%A8%E5%A4%A7%E6%89%93%E5%87%BA%E6%89%8B%23) `88.1K 🔥` `NEW`
1. [漯河一女子挑葡萄时与天降断枝擦肩](https://s.weibo.com/weibo?q=%23%E6%BC%AF%E6%B2%B3%E4%B8%80%E5%A5%B3%E5%AD%90%E6%8C%91%E8%91%A1%E8%90%84%E6%97%B6%E4%B8%8E%E5%A4%A9%E9%99%8D%E6%96%AD%E6%9E%9D%E6%93%A6%E8%82%A9%23) `88.0K 🔥` `NEW`
1. [女孩催促不要挡电梯被男孩母亲打](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%82%AC%E4%BF%83%E4%B8%8D%E8%A6%81%E6%8C%A1%E7%94%B5%E6%A2%AF%E8%A2%AB%E7%94%B7%E5%AD%A9%E6%AF%8D%E4%BA%B2%E6%89%93%23) `87.5K 🔥` `NEW`
1. [日本熊本强震天空浮现巨型蘑菇云 (Giant mushroom cloud appears in the sky after strong earthquake in Kumamoto, Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%86%8A%E6%9C%AC%E5%BC%BA%E9%9C%87%E5%A4%A9%E7%A9%BA%E6%B5%AE%E7%8E%B0%E5%B7%A8%E5%9E%8B%E8%98%91%E8%8F%87%E4%BA%91%23) `87.3K 🔥` `NEW`

Updated at 2026-07-29 01:01:25

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
