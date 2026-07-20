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

1. [导演这段是要毁了长剧吗 (Is directing this episode going to ruin the long series?)](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E8%BF%99%E6%AE%B5%E6%98%AF%E8%A6%81%E6%AF%81%E4%BA%86%E9%95%BF%E5%89%A7%E5%90%97%23) `3.0M 🔥` `NEW`
1. [崇左地震](https://s.weibo.com/weibo?q=%23%E5%B4%87%E5%B7%A6%E5%9C%B0%E9%9C%87%23) `2.9M 🔥` `NEW`
1. [小时候吃的很多水果都慢慢消失了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E5%90%83%E7%9A%84%E5%BE%88%E5%A4%9A%E6%B0%B4%E6%9E%9C%E9%83%BD%E6%85%A2%E6%85%A2%E6%B6%88%E5%A4%B1%E4%BA%86%23) `782.6K 🔥` `NEW`
1. [复联5新预告](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E8%81%945%E6%96%B0%E9%A2%84%E5%91%8A%23) `721.6K 🔥` `NEW`
1. [王曼昱 乒超](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%20%E4%B9%92%E8%B6%85%23) `497.8K 🔥` `NEW`
1. [南宁震感](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%AE%81%E9%9C%87%E6%84%9F%23) `458.1K 🔥` `NEW`
1. [菲方人员用划桨长棍攻击我海警](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E4%BA%BA%E5%91%98%E7%94%A8%E5%88%92%E6%A1%A8%E9%95%BF%E6%A3%8D%E6%94%BB%E5%87%BB%E6%88%91%E6%B5%B7%E8%AD%A6%23) `435.8K 🔥` `NEW`
1. [周星驰 影帝谢贤一路好走](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%20%E5%BD%B1%E5%B8%9D%E8%B0%A2%E8%B4%A4%E4%B8%80%E8%B7%AF%E5%A5%BD%E8%B5%B0%23) `397.1K 🔥` `NEW`
1. [Zara阔腿裤存安全隐患](https://s.weibo.com/weibo?q=%23Zara%E9%98%94%E8%85%BF%E8%A3%A4%E5%AD%98%E5%AE%89%E5%85%A8%E9%9A%90%E6%82%A3%23) `371.3K 🔥` `NEW`
1. [成龙3年送别十多位好友](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%993%E5%B9%B4%E9%80%81%E5%88%AB%E5%8D%81%E5%A4%9A%E4%BD%8D%E5%A5%BD%E5%8F%8B%23) `370.9K 🔥` `NEW`
1. [湖南校长性侵案部分家属获司法救助 (Some family members of Hunan principal’s sexual assault case received judicial aid)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%A0%A1%E9%95%BF%E6%80%A7%E4%BE%B5%E6%A1%88%E9%83%A8%E5%88%86%E5%AE%B6%E5%B1%9E%E8%8E%B7%E5%8F%B8%E6%B3%95%E6%95%91%E5%8A%A9%23) `370.6K 🔥` `NEW`
1. [张峻豪19岁愿望](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA19%E5%B2%81%E6%84%BF%E6%9C%9B%23) `368.5K 🔥` `NEW`
1. [张家界会惩罚每一个不听劝的人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%90%AC%E5%8A%9D%E7%9A%84%E4%BA%BA%23) `368.4K 🔥` `NEW`
1. [宝妈发帖吐槽洗浴店被索赔100万](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%8F%91%E5%B8%96%E5%90%90%E6%A7%BD%E6%B4%97%E6%B5%B4%E5%BA%97%E8%A2%AB%E7%B4%A2%E8%B5%94100%E4%B8%87%23) `353.0K 🔥` `NEW`
1. [周星驰喊张小斐小斐姐](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%96%8A%E5%BC%A0%E5%B0%8F%E6%96%90%E5%B0%8F%E6%96%90%E5%A7%90%23) `324.9K 🔥` `NEW`
1. [上证指数](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%AF%81%E6%8C%87%E6%95%B0%23) `305.0K 🔥` `NEW`
1. [王玉雯别说了刘宇宁害羞了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%88%AB%E8%AF%B4%E4%BA%86%E5%88%98%E5%AE%87%E5%AE%81%E5%AE%B3%E7%BE%9E%E4%BA%86%23) `241.3K 🔥` `NEW`
1. [爱穿洞洞鞋的广东人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E5%B9%BF%E4%B8%9C%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `240.9K 🔥` `NEW`
1. [阿根廷队举动引发众怒](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E4%B8%BE%E5%8A%A8%E5%BC%95%E5%8F%91%E4%BC%97%E6%80%92%23) `219.7K 🔥` `NEW`
1. [这一秒过火辱追](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%BE%B1%E8%BF%BD%23) `201.0K 🔥` `NEW`
1. [世界杯的后劲有多大 (How powerful is the World Cup?)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9A%84%E5%90%8E%E5%8A%B2%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `201.0K 🔥` `NEW`
1. [月薪过万是什么感觉](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E8%BF%87%E4%B8%87%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `185.9K 🔥` `NEW`
1. [突然发现很多人不会用AI](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%B8%8D%E4%BC%9A%E7%94%A8AI%23) `166.3K 🔥` `NEW`
1. [KimiK3发布后Anthropic遭外网吐槽](https://s.weibo.com/weibo?q=%23KimiK3%E5%8F%91%E5%B8%83%E5%90%8EAnthropic%E9%81%AD%E5%A4%96%E7%BD%91%E5%90%90%E6%A7%BD%23) `166.0K 🔥` `NEW`
1. [卢昱晓举滚动字幕让粉丝快回家](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%BE%E6%BB%9A%E5%8A%A8%E5%AD%97%E5%B9%95%E8%AE%A9%E7%B2%89%E4%B8%9D%E5%BF%AB%E5%9B%9E%E5%AE%B6%23) `166.0K 🔥` `NEW`
1. [数读上半年工业和信息化经济成绩单](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%B7%A5%E4%B8%9A%E5%92%8C%E4%BF%A1%E6%81%AF%E5%8C%96%E7%BB%8F%E6%B5%8E%E6%88%90%E7%BB%A9%E5%8D%95%23) `1.5M 🔥` `+104%`
1. [最古老的降温方式](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%8F%A4%E8%80%81%E7%9A%84%E9%99%8D%E6%B8%A9%E6%96%B9%E5%BC%8F%23) `268.0K 🔥` `+59%`
1. [驾照考得早的好处还在提升](https://s.weibo.com/weibo?q=%23%E9%A9%BE%E7%85%A7%E8%80%83%E5%BE%97%E6%97%A9%E7%9A%84%E5%A5%BD%E5%A4%84%E8%BF%98%E5%9C%A8%E6%8F%90%E5%8D%87%23) `808.6K 🔥`
1. [张凌赫王楚然飞行员造型](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%A3%9E%E8%A1%8C%E5%91%98%E9%80%A0%E5%9E%8B%23) `456.9K 🔥`
1. [张柏芝头像变黑 (Cecilia Cheung's avatar turns black)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%23) `452.2K 🔥`
1. [性交易发现避孕套脱落勒索8万](https://s.weibo.com/weibo?q=%23%E6%80%A7%E4%BA%A4%E6%98%93%E5%8F%91%E7%8E%B0%E9%81%BF%E5%AD%95%E5%A5%97%E8%84%B1%E8%90%BD%E5%8B%92%E7%B4%A28%E4%B8%87%23) `447.1K 🔥`
1. [谢贤九成遗产留给两孙子 (Xie Xian left 90% of his inheritance to his two grandchildren)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E4%B9%9D%E6%88%90%E9%81%97%E4%BA%A7%E7%95%99%E7%BB%99%E4%B8%A4%E5%AD%99%E5%AD%90%23) `441.1K 🔥`
1. [看关晓彤吃才知道有紫色西蓝花](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%83%E6%89%8D%E7%9F%A5%E9%81%93%E6%9C%89%E7%B4%AB%E8%89%B2%E8%A5%BF%E8%93%9D%E8%8A%B1%23) `439.3K 🔥`
1. [谢贤去世 (Xie Xian passed away)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%23) `431.9K 🔥`
1. [白鹿奔跑吧下一季投票第一](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E4%B8%8B%E4%B8%80%E5%AD%A3%E6%8A%95%E7%A5%A8%E7%AC%AC%E4%B8%80%23) `428.6K 🔥`
1. [建议普通人都尽早用上AI](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%99%AE%E9%80%9A%E4%BA%BA%E9%83%BD%E5%B0%BD%E6%97%A9%E7%94%A8%E4%B8%8AAI%23) `369.4K 🔥`
1. [清华姚班 全球AI半壁江山 (Yao class at Tsinghua University accounts for half of the world’s AI)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A7%9A%E7%8F%AD%20%E5%85%A8%E7%90%83AI%E5%8D%8A%E5%A3%81%E6%B1%9F%E5%B1%B1%23) `1.2M 🔥` `-31%`
1. [乒超名单](https://s.weibo.com/weibo?q=%23%E4%B9%92%E8%B6%85%E5%90%8D%E5%8D%95%23) `419.2K 🔥` `-27%`
1. [谢贤曾多次夸赞张柏芝善待孙子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E6%9B%BE%E5%A4%9A%E6%AC%A1%E5%A4%B8%E8%B5%9E%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%96%84%E5%BE%85%E5%AD%99%E5%AD%90%23) `369.6K 🔥` `-21%`
1. [谢婷婷发文悼念父亲谢贤](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A9%B7%E5%A9%B7%E5%8F%91%E6%96%87%E6%82%BC%E5%BF%B5%E7%88%B6%E4%BA%B2%E8%B0%A2%E8%B4%A4%23) `345.8K 🔥` `-25%`
1. [情侣采10斤菌子被本地小孩扔到2斤](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%87%8710%E6%96%A4%E8%8F%8C%E5%AD%90%E8%A2%AB%E6%9C%AC%E5%9C%B0%E5%B0%8F%E5%AD%A9%E6%89%94%E5%88%B02%E6%96%A4%23) `304.9K 🔥` `-67%`
1. [文科生迎来了编程时代](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%A7%91%E7%94%9F%E8%BF%8E%E6%9D%A5%E4%BA%86%E7%BC%96%E7%A8%8B%E6%97%B6%E4%BB%A3%23) `265.5K 🔥` `-32%`
1. [谢贤年轻时有多帅](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%B9%B4%E8%BD%BB%E6%97%B6%E6%9C%89%E5%A4%9A%E5%B8%85%23) `232.5K 🔥` `-33%`
1. [菲方围顶冲撞中方巡逻艇 (Philippine side collides with Chinese patrol boat)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E5%9B%B4%E9%A1%B6%E5%86%B2%E6%92%9E%E4%B8%AD%E6%96%B9%E5%B7%A1%E9%80%BB%E8%89%87%23) `212.1K 🔥` `-61%`
1. [Bin BLG](https://s.weibo.com/weibo?q=%23Bin%20BLG%23) `201.1K 🔥` `-67%`
1. [张凌赫连续两部剧开播即登顶](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%9E%E7%BB%AD%E4%B8%A4%E9%83%A8%E5%89%A7%E5%BC%80%E6%92%AD%E5%8D%B3%E7%99%BB%E9%A1%B6%23) `201.0K 🔥` `-46%`
1. [小英cos贝微微](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1cos%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `192.0K 🔥` `-48%`
1. [妹妹在日薪差距2元的工作中纠结](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E5%9C%A8%E6%97%A5%E8%96%AA%E5%B7%AE%E8%B7%9D2%E5%85%83%E7%9A%84%E5%B7%A5%E4%BD%9C%E4%B8%AD%E7%BA%A0%E7%BB%93%23) `181.7K 🔥` `-64%`
1. [闫玉晨回应恋情](https://s.weibo.com/weibo?q=%23%E9%97%AB%E7%8E%89%E6%99%A8%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%23) `166.9K 🔥` `-47%`
1. [A股再次突变原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%86%8D%E6%AC%A1%E7%AA%81%E5%8F%98%E5%8E%9F%E5%9B%A0%23) `166.0K 🔥` `-66%`

Updated at 2026-07-20 23:07:55

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
