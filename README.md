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

1. [一直以为吃播是需要食材的 (I always thought that eating and broadcasting requires ingredients.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E5%90%83%E6%92%AD%E6%98%AF%E9%9C%80%E8%A6%81%E9%A3%9F%E6%9D%90%E7%9A%84%23) `144.8K 🔥` `NEW`
1. [不负时光得畅所愿](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%B4%9F%E6%97%B6%E5%85%89%E5%BE%97%E7%95%85%E6%89%80%E6%84%BF%23) `140.5K 🔥` `NEW`
1. [亚马尔世界杯身价第一](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BA%AB%E4%BB%B7%E7%AC%AC%E4%B8%80%23) `113.6K 🔥` `NEW`
1. [梁朝伟说不记得和辛芷蕾合作过](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%AF%B4%E4%B8%8D%E8%AE%B0%E5%BE%97%E5%92%8C%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%90%88%E4%BD%9C%E8%BF%87%23) `108.3K 🔥` `NEW`
1. [加拿大开幕式 翻车](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%BC%80%E5%B9%95%E5%BC%8F%20%E7%BF%BB%E8%BD%A6%23) `102.7K 🔥` `NEW`
1. [世界杯加拿大开幕式](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%BC%80%E5%B9%95%E5%BC%8F%23) `69.3K 🔥` `NEW`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `64.9K 🔥` `NEW`
1. [上班人身上独有的疲惫气息](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E4%BA%BA%E8%BA%AB%E4%B8%8A%E7%8B%AC%E6%9C%89%E7%9A%84%E7%96%B2%E6%83%AB%E6%B0%94%E6%81%AF%23) `64.7K 🔥` `NEW`
1. [马斯克回应史上最大IPO](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%BA%94%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7IPO%23) `64.6K 🔥` `NEW`
1. [许我耀眼 首尔电视剧大赏](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%88%91%E8%80%80%E7%9C%BC%20%E9%A6%96%E5%B0%94%E7%94%B5%E8%A7%86%E5%89%A7%E5%A4%A7%E8%B5%8F%23) `64.2K 🔥` `NEW`
1. [冯建宇去歌手了 (Feng Jianyu became a singer)](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%BB%BA%E5%AE%87%E5%8E%BB%E6%AD%8C%E6%89%8B%E4%BA%86%23) `63.8K 🔥` `NEW`
1. [张远歌手补位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%AD%8C%E6%89%8B%E8%A1%A5%E4%BD%8D%23) `63.5K 🔥` `NEW`
1. [1分钱买到烂垃圾桶商家补发10个全损](https://s.weibo.com/weibo?q=%231%E5%88%86%E9%92%B1%E4%B9%B0%E5%88%B0%E7%83%82%E5%9E%83%E5%9C%BE%E6%A1%B6%E5%95%86%E5%AE%B6%E8%A1%A5%E5%8F%9110%E4%B8%AA%E5%85%A8%E6%8D%9F%23) `63.4K 🔥` `NEW`
1. [周柯宇震惊丁程鑫张凌赫颜值](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E9%9C%87%E6%83%8A%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%A2%9C%E5%80%BC%23) `63.1K 🔥` `NEW`
1. [顾客买肉被老板杀害家属求判死刑](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E4%B9%B0%E8%82%89%E8%A2%AB%E8%80%81%E6%9D%BF%E6%9D%80%E5%AE%B3%E5%AE%B6%E5%B1%9E%E6%B1%82%E5%88%A4%E6%AD%BB%E5%88%91%23) `63.0K 🔥` `NEW`
1. [买连衣裙 看手肘](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E7%9C%8B%E6%89%8B%E8%82%98%23) `62.8K 🔥` `NEW`
1. [耀眼 团综](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%20%E5%9B%A2%E7%BB%BC%23) `62.6K 🔥` `NEW`
1. [穿洞洞鞋记得坐垂直电梯](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E8%AE%B0%E5%BE%97%E5%9D%90%E5%9E%82%E7%9B%B4%E7%94%B5%E6%A2%AF%23) `365.2K 🔥` `-27%`
1. [张碧晨淘汰 (Zhang Bichen eliminated)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%B7%98%E6%B1%B0%23) `268.3K 🔥` `-87%`
1. [活力中国调研行](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%8A%9B%E4%B8%AD%E5%9B%BD%E8%B0%83%E7%A0%94%E8%A1%8C%23) `223.3K 🔥` `-61%`
1. [球迷惊喜日京东拍卖限量球衣](https://s.weibo.com/weibo?q=%23%E7%90%83%E8%BF%B7%E6%83%8A%E5%96%9C%E6%97%A5%E4%BA%AC%E4%B8%9C%E6%8B%8D%E5%8D%96%E9%99%90%E9%87%8F%E7%90%83%E8%A1%A3%23) `223.2K 🔥` `-61%`
1. [侯明昊 歌手 (Hou Minghao singer)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E6%AD%8C%E6%89%8B%23) `223.1K 🔥` `-54%`
1. [31岁幼师溺水身亡母亲悲痛发声](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E5%B9%BC%E5%B8%88%E6%BA%BA%E6%B0%B4%E8%BA%AB%E4%BA%A1%E6%AF%8D%E4%BA%B2%E6%82%B2%E7%97%9B%E5%8F%91%E5%A3%B0%23) `216.1K 🔥` `-63%`
1. [罗拉王能能陪看半熟恋人](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8B%89%E7%8E%8B%E8%83%BD%E8%83%BD%E9%99%AA%E7%9C%8B%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA%23) `137.0K 🔥` `-28%`
1. [尤长靖 董岩磊](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%20%E8%91%A3%E5%B2%A9%E7%A3%8A%23) `132.5K 🔥` `-34%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `118.0K 🔥` `-47%`
1. [千万不要长时间戴耳机](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E9%95%BF%E6%97%B6%E9%97%B4%E6%88%B4%E8%80%B3%E6%9C%BA%23) `114.3K 🔥` `-74%`
1. [那英一边哭一边口出狂言](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E4%B8%80%E8%BE%B9%E5%93%AD%E4%B8%80%E8%BE%B9%E5%8F%A3%E5%87%BA%E7%8B%82%E8%A8%80%23) `111.2K 🔥` `-43%`
1. [女友失联最终发现被送素质教育基地](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%8B%E5%A4%B1%E8%81%94%E6%9C%80%E7%BB%88%E5%8F%91%E7%8E%B0%E8%A2%AB%E9%80%81%E7%B4%A0%E8%B4%A8%E6%95%99%E8%82%B2%E5%9F%BA%E5%9C%B0%23) `104.5K 🔥` `-57%`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `103.5K 🔥` `-75%`
1. [何炅的目光快把那英烧穿了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%9A%84%E7%9B%AE%E5%85%89%E5%BF%AB%E6%8A%8A%E9%82%A3%E8%8B%B1%E7%83%A7%E7%A9%BF%E4%BA%86%23) `102.5K 🔥` `-43%`
1. [耳帝 (Erdi)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%23) `100.0K 🔥` `-54%`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `92.7K 🔥` `-51%`
1. [作家自曝用AI写作](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E5%AE%B6%E8%87%AA%E6%9B%9D%E7%94%A8AI%E5%86%99%E4%BD%9C%23) `92.2K 🔥` `-48%`
1. [歌手补位](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%A1%A5%E4%BD%8D%23) `92.0K 🔥` `-89%`
1. [官方通报女大学生腹泻6小时后身亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%85%B9%E6%B3%BB6%E5%B0%8F%E6%97%B6%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `82.9K 🔥` `-56%`
1. [蔡依林叫马龙宝宝](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%8F%AB%E9%A9%AC%E9%BE%99%E5%AE%9D%E5%AE%9D%23) `81.2K 🔥` `-57%`
1. [窦靖童 陈土豆](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%20%E9%99%88%E5%9C%9F%E8%B1%86%23) `75.2K 🔥` `-59%`
1. [陈瑶拒绝了张月三次](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%8B%92%E7%BB%9D%E4%BA%86%E5%BC%A0%E6%9C%88%E4%B8%89%E6%AC%A1%23) `74.9K 🔥` `-58%`
1. [中国球迷还不习惯没有意大利队 (Chinese fans are still not used to not having an Italian team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E8%BF%98%E4%B8%8D%E4%B9%A0%E6%83%AF%E6%B2%A1%E6%9C%89%E6%84%8F%E5%A4%A7%E5%88%A9%E9%98%9F%23) `67.9K 🔥` `-52%`
1. [吃完虾千万不要剧烈运动 (Do not exercise strenuously after eating shrimp)](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AE%8C%E8%99%BE%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%89%A7%E7%83%88%E8%BF%90%E5%8A%A8%23) `67.1K 🔥` `-71%`
1. [世界杯裁判马宁回应敢判敢罚 (World Cup referee Ma Ning responded that he dared to make decisions and punished)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%A3%81%E5%88%A4%E9%A9%AC%E5%AE%81%E5%9B%9E%E5%BA%94%E6%95%A2%E5%88%A4%E6%95%A2%E7%BD%9A%23) `64.7K 🔥` `-65%`
1. [小米SU7一拆一个不吱声](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3SU7%E4%B8%80%E6%8B%86%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%90%B1%E5%A3%B0%23) `64.7K 🔥` `-69%`
1. [因为饼干太好吃而察觉到不对劲](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E9%A5%BC%E5%B9%B2%E5%A4%AA%E5%A5%BD%E5%90%83%E8%80%8C%E5%AF%9F%E8%A7%89%E5%88%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `64.5K 🔥` `-66%`
1. [谁给黄子弘凡谭松韵想的ending (Who gave Huang Zihong and Tan Songyun the ending they wanted?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%83%B3%E7%9A%84ending%23) `64.3K 🔥` `-60%`
1. [蔡依林鸟巢上座率](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E9%B8%9F%E5%B7%A2%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `64.0K 🔥` `-64%`
1. [歌手今晚淘汰三人](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E4%BB%8A%E6%99%9A%E6%B7%98%E6%B1%B0%E4%B8%89%E4%BA%BA%23) `63.9K 🔥` `-63%`
1. [挪威队的合照简直治愈强迫症 (The photo of the Norwegian team is a cure for obsessive-compulsive disorder)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%98%9F%E7%9A%84%E5%90%88%E7%85%A7%E7%AE%80%E7%9B%B4%E6%B2%BB%E6%84%88%E5%BC%BA%E8%BF%AB%E7%97%87%23) `63.7K 🔥` `-67%`
1. [消失的猫咪](https://s.weibo.com/weibo?q=%23%E6%B6%88%E5%A4%B1%E7%9A%84%E7%8C%AB%E5%92%AA%23) `63.2K 🔥` `-59%`
1. [多家干锅鹅翅火速改名干锅鸭翅](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%B9%B2%E9%94%85%E9%B9%85%E7%BF%85%E7%81%AB%E9%80%9F%E6%94%B9%E5%90%8D%E5%B9%B2%E9%94%85%E9%B8%AD%E7%BF%85%23) `62.7K 🔥` `-65%`
1. [胡彦斌 有编曲没嗓子](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%20%E6%9C%89%E7%BC%96%E6%9B%B2%E6%B2%A1%E5%97%93%E5%AD%90%23) `62.3K 🔥` `-60%`
1. [拿饮料自闭症男孩妈妈登门感谢店主](https://s.weibo.com/weibo?q=%23%E6%8B%BF%E9%A5%AE%E6%96%99%E8%87%AA%E9%97%AD%E7%97%87%E7%94%B7%E5%AD%A9%E5%A6%88%E5%A6%88%E7%99%BB%E9%97%A8%E6%84%9F%E8%B0%A2%E5%BA%97%E4%B8%BB%23) `62.3K 🔥` `-61%`

Updated at 2026-06-13 02:30:58

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
