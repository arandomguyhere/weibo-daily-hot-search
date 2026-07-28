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

1. [柳周cp亲了 (Liu Zhou cp kissed)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%91%A8cp%E4%BA%B2%E4%BA%86%23) `774.8K 🔥` `NEW`
1. [Flandre离开AL](https://s.weibo.com/weibo?q=%23Flandre%E7%A6%BB%E5%BC%80AL%23) `598.0K 🔥` `NEW`
1. [御廷谣开播收视率](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%E5%BC%80%E6%92%AD%E6%94%B6%E8%A7%86%E7%8E%87%23) `487.2K 🔥` `NEW`
1. [张继科乒乓球百分大战](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E4%B9%92%E4%B9%93%E7%90%83%E7%99%BE%E5%88%86%E5%A4%A7%E6%88%98%23) `486.4K 🔥` `NEW`
1. [王虹形容北大discourage](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%BD%A2%E5%AE%B9%E5%8C%97%E5%A4%A7discourage%23) `483.8K 🔥` `NEW`
1. [SK海力士](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%23) `482.8K 🔥` `NEW`
1. [航拍日本强震后现状](https://s.weibo.com/weibo?q=%23%E8%88%AA%E6%8B%8D%E6%97%A5%E6%9C%AC%E5%BC%BA%E9%9C%87%E5%90%8E%E7%8E%B0%E7%8A%B6%23) `480.4K 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `478.8K 🔥` `NEW`
1. [陈哲远感谢于正](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%84%9F%E8%B0%A2%E4%BA%8E%E6%AD%A3%23) `478.2K 🔥` `NEW`
1. [人怎么能说出这么通透的话](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E8%AF%B4%E5%87%BA%E8%BF%99%E4%B9%88%E9%80%9A%E9%80%8F%E7%9A%84%E8%AF%9D%23) `465.2K 🔥` `NEW`
1. [尚公主 (Princess Shang)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `453.6K 🔥` `NEW`
1. [张凌赫是王楚然铁粉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%98%AF%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%93%81%E7%B2%89%23) `422.8K 🔥` `NEW`
1. [日本人吃那么少真的不饿吗](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%90%83%E9%82%A3%E4%B9%88%E5%B0%91%E7%9C%9F%E7%9A%84%E4%B8%8D%E9%A5%BF%E5%90%97%23) `288.3K 🔥` `NEW`
1. [易烊千玺小网站更新](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B0%8F%E7%BD%91%E7%AB%99%E6%9B%B4%E6%96%B0%23) `284.3K 🔥` `NEW`
1. [虞书欣给粉丝买手镯](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%BB%99%E7%B2%89%E4%B8%9D%E4%B9%B0%E6%89%8B%E9%95%AF%23) `278.9K 🔥` `NEW`
1. [张凌赫我最讨厌事后道歉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%88%91%E6%9C%80%E8%AE%A8%E5%8E%8C%E4%BA%8B%E5%90%8E%E9%81%93%E6%AD%89%23) `253.6K 🔥` `NEW`
1. [时代少年团突袭直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%AA%81%E8%A2%AD%E7%9B%B4%E6%92%AD%23) `248.8K 🔥` `NEW`
1. [周佑凌 柳柳](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%20%E6%9F%B3%E6%9F%B3%23) `221.2K 🔥` `NEW`
1. [重庆彭水新搜寻确认30名遇难者](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E6%96%B0%E6%90%9C%E5%AF%BB%E7%A1%AE%E8%AE%A430%E5%90%8D%E9%81%87%E9%9A%BE%E8%80%85%23) `216.7K 🔥` `NEW`
1. [该不该把家里的财务状况告诉孩子](https://s.weibo.com/weibo?q=%23%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%8A%8A%E5%AE%B6%E9%87%8C%E7%9A%84%E8%B4%A2%E5%8A%A1%E7%8A%B6%E5%86%B5%E5%91%8A%E8%AF%89%E5%AD%A9%E5%AD%90%23) `215.4K 🔥` `NEW`
1. [心理疾病和精神疾病的区别 (The difference between mental illness and mental illness)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E7%96%BE%E7%97%85%E5%92%8C%E7%B2%BE%E7%A5%9E%E7%96%BE%E7%97%85%E7%9A%84%E5%8C%BA%E5%88%AB%23) `212.8K 🔥` `NEW`
1. [马嘉祺高会发自拍](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%AB%98%E4%BC%9A%E5%8F%91%E8%87%AA%E6%8B%8D%23) `197.6K 🔥` `NEW`
1. [学生花3万元自费实习大多在做PPT](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F%E8%8A%B13%E4%B8%87%E5%85%83%E8%87%AA%E8%B4%B9%E5%AE%9E%E4%B9%A0%E5%A4%A7%E5%A4%9A%E5%9C%A8%E5%81%9APPT%23) `170.2K 🔥` `NEW`
1. [4个信号警惕肝病](https://s.weibo.com/weibo?q=%234%E4%B8%AA%E4%BF%A1%E5%8F%B7%E8%AD%A6%E6%83%95%E8%82%9D%E7%97%85%23) `154.5K 🔥` `NEW`
1. [AL大名单](https://s.weibo.com/weibo?q=%23AL%E5%A4%A7%E5%90%8D%E5%8D%95%23) `146.3K 🔥` `NEW`
1. [时代少年团 阿迪达斯](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%23) `142.2K 🔥` `NEW`
1. [两女子疑因男童卡住电梯门大打出手](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E7%96%91%E5%9B%A0%E7%94%B7%E7%AB%A5%E5%8D%A1%E4%BD%8F%E7%94%B5%E6%A2%AF%E9%97%A8%E5%A4%A7%E6%89%93%E5%87%BA%E6%89%8B%23) `136.8K 🔥` `NEW`
1. [大领导进来办公室要站起来吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A2%86%E5%AF%BC%E8%BF%9B%E6%9D%A5%E5%8A%9E%E5%85%AC%E5%AE%A4%E8%A6%81%E7%AB%99%E8%B5%B7%E6%9D%A5%E5%90%97%23) `545.1K 🔥` `+305%`
1. [日本地震山崩瞬间画面曝光](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E5%B1%B1%E5%B4%A9%E7%9E%AC%E9%97%B4%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `540.0K 🔥` `+41%`
1. [退货千万不要提前给取件码 (Never give a pickup code in advance when returning goods)](https://s.weibo.com/weibo?q=%23%E9%80%80%E8%B4%A7%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8F%90%E5%89%8D%E7%BB%99%E5%8F%96%E4%BB%B6%E7%A0%81%23) `2.9M 🔥`
1. [日本7.1级地震民众哭喊声一片](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%B0%91%E4%BC%97%E5%93%AD%E5%96%8A%E5%A3%B0%E4%B8%80%E7%89%87%23) `1.3M 🔥`
1. [人工智能相关产品成为中国外贸新名片 (Artificial intelligence related products have become China’s new business card for foreign trade)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E7%9B%B8%E5%85%B3%E4%BA%A7%E5%93%81%E6%88%90%E4%B8%BA%E4%B8%AD%E5%9B%BD%E5%A4%96%E8%B4%B8%E6%96%B0%E5%90%8D%E7%89%87%23) `1.1M 🔥`
1. [上海震感 (Shanghai earthquake)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%9C%87%E6%84%9F%23) `222.6K 🔥`
1. [赵钰琪14岁的美人胚子](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%92%B0%E7%90%AA14%E5%B2%81%E7%9A%84%E7%BE%8E%E4%BA%BA%E8%83%9A%E5%AD%90%23) `220.8K 🔥`
1. [女孩催促不要挡电梯被男孩母亲打](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%82%AC%E4%BF%83%E4%B8%8D%E8%A6%81%E6%8C%A1%E7%94%B5%E6%A2%AF%E8%A2%AB%E7%94%B7%E5%AD%A9%E6%AF%8D%E4%BA%B2%E6%89%93%23) `201.5K 🔥`
1. [王一博愁眉苦脸填表](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%84%81%E7%9C%89%E8%8B%A6%E8%84%B8%E5%A1%AB%E8%A1%A8%23) `182.9K 🔥`
1. [日本7.1级强震已致多人死亡](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%BC%BA%E9%9C%87%E5%B7%B2%E8%87%B4%E5%A4%9A%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `914.2K 🔥` `-27%`
1. [感冒灵正式纳入禁驾清单](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%86%92%E7%81%B5%E6%AD%A3%E5%BC%8F%E7%BA%B3%E5%85%A5%E7%A6%81%E9%A9%BE%E6%B8%85%E5%8D%95%23) `268.3K 🔥` `-52%`
1. [刘亦菲 富有且大方 (Liu Yifei is rich and generous)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E5%AF%8C%E6%9C%89%E4%B8%94%E5%A4%A7%E6%96%B9%23) `216.2K 🔥` `-44%`
1. [小欢喜原著结局](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%AC%A2%E5%96%9C%E5%8E%9F%E8%91%97%E7%BB%93%E5%B1%80%23) `216.0K 🔥` `-44%`
1. [陈哲远 播了播了播了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E6%92%AD%E4%BA%86%E6%92%AD%E4%BA%86%E6%92%AD%E4%BA%86%23) `215.1K 🔥` `-71%`
1. [花儿与少年8录制回国 (Flowers and Boys 8 recording returns to China)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%E5%BD%95%E5%88%B6%E5%9B%9E%E5%9B%BD%23) `195.7K 🔥` `-49%`
1. [日本熊本强震天空浮现巨型蘑菇云 (Giant mushroom cloud appears in the sky after strong earthquake in Kumamoto, Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%86%8A%E6%9C%AC%E5%BC%BA%E9%9C%87%E5%A4%A9%E7%A9%BA%E6%B5%AE%E7%8E%B0%E5%B7%A8%E5%9E%8B%E8%98%91%E8%8F%87%E4%BA%91%23) `187.1K 🔥` `-51%`
1. [张柏芝46岁骨相](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D46%E5%B2%81%E9%AA%A8%E7%9B%B8%23) `165.4K 🔥` `-47%`
1. [GMM致歉](https://s.weibo.com/weibo?q=%23GMM%E8%87%B4%E6%AD%89%23) `154.6K 🔥` `-59%`
1. [上海街头偶遇Angelababy (Encountering Angelababy on the streets of Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%A1%97%E5%A4%B4%E5%81%B6%E9%81%87Angelababy%23) `154.5K 🔥` `-54%`
1. [张馨予你辣到我了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E4%BD%A0%E8%BE%A3%E5%88%B0%E6%88%91%E4%BA%86%23) `150.4K 🔥` `-48%`
1. [曝修杰楷近况](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BF%AE%E6%9D%B0%E6%A5%B7%E8%BF%91%E5%86%B5%23) `142.9K 🔥` `-34%`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `129.7K 🔥` `-33%`
1. [奇瑞2000万的全球化含量有多高](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E2000%E4%B8%87%E7%9A%84%E5%85%A8%E7%90%83%E5%8C%96%E5%90%AB%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `129.3K 🔥` `-55%`

Updated at 2026-07-28 23:27:54

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
