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

1. [京东秒送请球迷1元喝冰啤 (JD.com offers fans a cold beer for 1 yuan instantly)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E7%A7%92%E9%80%81%E8%AF%B7%E7%90%83%E8%BF%B71%E5%85%83%E5%96%9D%E5%86%B0%E5%95%A4%23) `301.5K 🔥` `NEW`
1. [加拿大1比1波黑](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A71%E6%AF%941%E6%B3%A2%E9%BB%91%23) `149.1K 🔥` `NEW`
1. [加拿大扳平比分](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%89%B3%E5%B9%B3%E6%AF%94%E5%88%86%23) `49.7K 🔥` `NEW`
1. [我在歌手2026很想吴青峰](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9C%A8%E6%AD%8C%E6%89%8B2026%E5%BE%88%E6%83%B3%E5%90%B4%E9%9D%92%E5%B3%B0%23) `40.7K 🔥` `NEW`
1. [范志毅预测冠军和管泽元杠上了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E9%A2%84%E6%B5%8B%E5%86%A0%E5%86%9B%E5%92%8C%E7%AE%A1%E6%B3%BD%E5%85%83%E6%9D%A0%E4%B8%8A%E4%BA%86%23) `31.6K 🔥` `NEW`
1. [波黑神奇救险](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E9%BB%91%E7%A5%9E%E5%A5%87%E6%95%91%E9%99%A9%23) `30.9K 🔥` `NEW`
1. [加拿大 田径队](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%20%E7%94%B0%E5%BE%84%E9%98%9F%23) `26.8K 🔥` `NEW`
1. [加拿大开幕式 翻车](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%BC%80%E5%B9%95%E5%BC%8F%20%E7%BF%BB%E8%BD%A6%23) `1.4M 🔥` `+54%`
1. [加拿大vs波黑 (Canada vs Bosnia and Herzegovina)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7vs%E6%B3%A2%E9%BB%91%23) `394.1K 🔥` `+51%`
1. [活力中国调研行](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%8A%9B%E4%B8%AD%E5%9B%BD%E8%B0%83%E7%A0%94%E8%A1%8C%23) `314.8K 🔥` `+88%`
1. [31岁幼师溺水身亡母亲悲痛发声](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E5%B9%BC%E5%B8%88%E6%BA%BA%E6%B0%B4%E8%BA%AB%E4%BA%A1%E6%AF%8D%E4%BA%B2%E6%82%B2%E7%97%9B%E5%8F%91%E5%A3%B0%23) `219.8K 🔥` `+84%`
1. [张碧晨淘汰 (Zhang Bichen eliminated)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%B7%98%E6%B1%B0%23) `164.5K 🔥` `+99%`
1. [一直以为吃播是需要食材的 (I always thought that eating and broadcasting requires ingredients.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E5%90%83%E6%92%AD%E6%98%AF%E9%9C%80%E8%A6%81%E9%A3%9F%E6%9D%90%E7%9A%84%23) `133.8K 🔥` `+70%`
1. [女友失联最终发现被送素质教育基地 (My girlfriend lost contact and was eventually found to have been sent to a quality education base)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%8B%E5%A4%B1%E8%81%94%E6%9C%80%E7%BB%88%E5%8F%91%E7%8E%B0%E8%A2%AB%E9%80%81%E7%B4%A0%E8%B4%A8%E6%95%99%E8%82%B2%E5%9F%BA%E5%9C%B0%23) `110.6K 🔥` `+91%`
1. [上班人身上独有的疲惫气息](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E4%BA%BA%E8%BA%AB%E4%B8%8A%E7%8B%AC%E6%9C%89%E7%9A%84%E7%96%B2%E6%83%AB%E6%B0%94%E6%81%AF%23) `94.6K 🔥` `+96%`
1. [侯明昊 歌手 (Hou Minghao singer)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E6%AD%8C%E6%89%8B%23) `94.2K 🔥` `+43%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `93.4K 🔥` `+23%`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `57.3K 🔥` `+30%`
1. [加拿大开幕式 草台班子](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%BC%80%E5%B9%95%E5%BC%8F%20%E8%8D%89%E5%8F%B0%E7%8F%AD%E5%AD%90%23) `57.0K 🔥` `+46%`
1. [1分钱买到烂垃圾桶商家补发10个全损 (I bought a rotten trash can for 1 cent and the merchant reissued 10 total loss ones.)](https://s.weibo.com/weibo?q=%231%E5%88%86%E9%92%B1%E4%B9%B0%E5%88%B0%E7%83%82%E5%9E%83%E5%9C%BE%E6%A1%B6%E5%95%86%E5%AE%B6%E8%A1%A5%E5%8F%9110%E4%B8%AA%E5%85%A8%E6%8D%9F%23) `48.7K 🔥` `+54%`
1. [不负时光得畅所愿](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%B4%9F%E6%97%B6%E5%85%89%E5%BE%97%E7%95%85%E6%89%80%E6%84%BF%23) `140.7K 🔥`
1. [尤长靖 董岩磊 (You Changjing Dong Yanlei)](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%20%E8%91%A3%E5%B2%A9%E7%A3%8A%23) `117.1K 🔥`
1. [穿洞洞鞋记得坐垂直电梯](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E8%AE%B0%E5%BE%97%E5%9D%90%E5%9E%82%E7%9B%B4%E7%94%B5%E6%A2%AF%23) `73.7K 🔥`
1. [那英一边哭一边口出狂言](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E4%B8%80%E8%BE%B9%E5%93%AD%E4%B8%80%E8%BE%B9%E5%8F%A3%E5%87%BA%E7%8B%82%E8%A8%80%23) `66.9K 🔥`
1. [世界杯加拿大开幕式](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%BC%80%E5%B9%95%E5%BC%8F%23) `52.2K 🔥`
1. [中国球迷还不习惯没有意大利队 (Chinese fans are still not used to not having an Italian team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E8%BF%98%E4%B8%8D%E4%B9%A0%E6%83%AF%E6%B2%A1%E6%9C%89%E6%84%8F%E5%A4%A7%E5%88%A9%E9%98%9F%23) `47.4K 🔥`
1. [歌手补位](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%A1%A5%E4%BD%8D%23) `44.4K 🔥`
1. [吃完虾千万不要剧烈运动 (Do not exercise strenuously after eating shrimp)](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AE%8C%E8%99%BE%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%89%A7%E7%83%88%E8%BF%90%E5%8A%A8%23) `37.1K 🔥`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `35.1K 🔥`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `34.6K 🔥`
1. [中方将采取一切必要措施维护权益](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E9%87%87%E5%8F%96%E4%B8%80%E5%88%87%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD%E7%BB%B4%E6%8A%A4%E6%9D%83%E7%9B%8A%23) `34.6K 🔥`
1. [挪威队的合照简直治愈强迫症 (The photo of the Norwegian team is a cure for obsessive-compulsive disorder)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%98%9F%E7%9A%84%E5%90%88%E7%85%A7%E7%AE%80%E7%9B%B4%E6%B2%BB%E6%84%88%E5%BC%BA%E8%BF%AB%E7%97%87%23) `34.0K 🔥`
1. [世界杯裁判马宁回应敢判敢罚 (World Cup referee Ma Ning responded that he dared to make decisions and punished)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%A3%81%E5%88%A4%E9%A9%AC%E5%AE%81%E5%9B%9E%E5%BA%94%E6%95%A2%E5%88%A4%E6%95%A2%E7%BD%9A%23) `33.5K 🔥`
1. [千万不要长时间戴耳机](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E9%95%BF%E6%97%B6%E9%97%B4%E6%88%B4%E8%80%B3%E6%9C%BA%23) `33.4K 🔥`
1. [马斯克回应史上最大IPO](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%BA%94%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7IPO%23) `29.6K 🔥`
1. [蔡依林叫马龙宝宝](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%8F%AB%E9%A9%AC%E9%BE%99%E5%AE%9D%E5%AE%9D%23) `28.0K 🔥`
1. [何炅的目光快把那英烧穿了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%9A%84%E7%9B%AE%E5%85%89%E5%BF%AB%E6%8A%8A%E9%82%A3%E8%8B%B1%E7%83%A7%E7%A9%BF%E4%BA%86%23) `27.6K 🔥`
1. [陈瑶拒绝了张月三次](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%8B%92%E7%BB%9D%E4%BA%86%E5%BC%A0%E6%9C%88%E4%B8%89%E6%AC%A1%23) `27.2K 🔥`
1. [耳帝 (Erdi)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%23) `26.2K 🔥`
1. [窦靖童 陈土豆](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%20%E9%99%88%E5%9C%9F%E8%B1%86%23) `26.0K 🔥`
1. [因为饼干太好吃而察觉到不对劲](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E9%A5%BC%E5%B9%B2%E5%A4%AA%E5%A5%BD%E5%90%83%E8%80%8C%E5%AF%9F%E8%A7%89%E5%88%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `25.9K 🔥`
1. [波黑进球 (Bosnia and Herzegovina goal)](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E9%BB%91%E8%BF%9B%E7%90%83%23) `49.8K 🔥` `-41%`
1. [亚马尔世界杯身价第一](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BA%AB%E4%BB%B7%E7%AC%AC%E4%B8%80%23) `41.6K 🔥` `-36%`
1. [罗拉王能能陪看半熟恋人](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8B%89%E7%8E%8B%E8%83%BD%E8%83%BD%E9%99%AA%E7%9C%8B%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA%23) `28.8K 🔥` `-51%`
1. [梁朝伟说不记得和辛芷蕾合作过 (Tony Leung said he didn’t remember working with Xin Zhilei)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%AF%B4%E4%B8%8D%E8%AE%B0%E5%BE%97%E5%92%8C%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%90%88%E4%BD%9C%E8%BF%87%23) `25.1K 🔥` `-51%`
1. [天赐的声音7](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%9A%84%E5%A3%B0%E9%9F%B37%23) `24.8K 🔥` `-21%`
1. [歌手今晚淘汰三人](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E4%BB%8A%E6%99%9A%E6%B7%98%E6%B1%B0%E4%B8%89%E4%BA%BA%23) `24.8K 🔥` `-21%`
1. [官方通报女大学生腹泻6小时后身亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%85%B9%E6%B3%BB6%E5%B0%8F%E6%97%B6%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `24.8K 🔥` `-35%`
1. [在关系中好奇比共情更重要](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%85%B3%E7%B3%BB%E4%B8%AD%E5%A5%BD%E5%A5%87%E6%AF%94%E5%85%B1%E6%83%85%E6%9B%B4%E9%87%8D%E8%A6%81%23) `24.8K 🔥` `-21%`
1. [顾客买肉被老板杀害家属求判死刑](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E4%B9%B0%E8%82%89%E8%A2%AB%E8%80%81%E6%9D%BF%E6%9D%80%E5%AE%B3%E5%AE%B6%E5%B1%9E%E6%B1%82%E5%88%A4%E6%AD%BB%E5%88%91%23) `24.8K 🔥` `-21%`
1. [作家自曝用AI写作](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E5%AE%B6%E8%87%AA%E6%9B%9D%E7%94%A8AI%E5%86%99%E4%BD%9C%23) `24.8K 🔥` `-21%`
1. [张远歌手补位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%AD%8C%E6%89%8B%E8%A1%A5%E4%BD%8D%23) `24.8K 🔥` `-21%`

Updated at 2026-06-13 06:14:03

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
