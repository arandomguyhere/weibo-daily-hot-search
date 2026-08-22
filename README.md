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

1. [亚运会 (Asian Games)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [惠民生促消费双向发力激活内需](https://s.weibo.com/weibo?q=%23%E6%83%A0%E6%B0%91%E7%94%9F%E4%BF%83%E6%B6%88%E8%B4%B9%E5%8F%8C%E5%90%91%E5%8F%91%E5%8A%9B%E6%BF%80%E6%B4%BB%E5%86%85%E9%9C%80%23) `1.1M 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `276.6K 🔥` `NEW`
1. [李乃文声明王玉雯哭跟他没关系](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E5%A3%B0%E6%98%8E%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%93%AD%E8%B7%9F%E4%BB%96%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `275.1K 🔥` `NEW`
1. [美加谈判破裂加拿大硬刚](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E8%B0%88%E5%88%A4%E7%A0%B4%E8%A3%82%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%A1%AC%E5%88%9A%23) `274.4K 🔥` `NEW`
1. [关晓彤走机场也戴负重手环](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%B5%B0%E6%9C%BA%E5%9C%BA%E4%B9%9F%E6%88%B4%E8%B4%9F%E9%87%8D%E6%89%8B%E7%8E%AF%23) `221.1K 🔥` `NEW`
1. [奔县游为啥成了游客心头好](https://s.weibo.com/weibo?q=%23%E5%A5%94%E5%8E%BF%E6%B8%B8%E4%B8%BA%E5%95%A5%E6%88%90%E4%BA%86%E6%B8%B8%E5%AE%A2%E5%BF%83%E5%A4%B4%E5%A5%BD%23) `214.1K 🔥` `NEW`
1. [亲人离世查存款将不再难](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E4%BA%BA%E7%A6%BB%E4%B8%96%E6%9F%A5%E5%AD%98%E6%AC%BE%E5%B0%86%E4%B8%8D%E5%86%8D%E9%9A%BE%23) `212.4K 🔥` `NEW`
1. [TIMA国际音乐大赏](https://s.weibo.com/weibo?q=%23TIMA%E5%9B%BD%E9%99%85%E9%9F%B3%E4%B9%90%E5%A4%A7%E8%B5%8F%23) `171.4K 🔥` `NEW`
1. [彭小苒快40岁了](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E5%BF%AB40%E5%B2%81%E4%BA%86%23) `169.4K 🔥` `NEW`
1. [万岁山NPC 你没特色你不重要 (Long Live Mountain NPC, you have no special features and you are not important.)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%B2%81%E5%B1%B1NPC%20%E4%BD%A0%E6%B2%A1%E7%89%B9%E8%89%B2%E4%BD%A0%E4%B8%8D%E9%87%8D%E8%A6%81%23) `166.1K 🔥` `NEW`
1. [女子游泳换气吸入消毒粉口吐白沫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%B8%E6%B3%B3%E6%8D%A2%E6%B0%94%E5%90%B8%E5%85%A5%E6%B6%88%E6%AF%92%E7%B2%89%E5%8F%A3%E5%90%90%E7%99%BD%E6%B2%AB%23) `165.4K 🔥` `NEW`
1. [巫山 拐卖](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%B1%B1%20%E6%8B%90%E5%8D%96%23) `144.7K 🔥` `NEW`
1. [消费品以旧换新带动绿色智能消费增长](https://s.weibo.com/weibo?q=%23%E6%B6%88%E8%B4%B9%E5%93%81%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%B8%A6%E5%8A%A8%E7%BB%BF%E8%89%B2%E6%99%BA%E8%83%BD%E6%B6%88%E8%B4%B9%E5%A2%9E%E9%95%BF%23) `143.0K 🔥` `NEW`
1. [晋江作者大会](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `1.1M 🔥` `+46%`
1. [白血病不再是不治之症](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%A1%80%E7%97%85%E4%B8%8D%E5%86%8D%E6%98%AF%E4%B8%8D%E6%B2%BB%E4%B9%8B%E7%97%87%23) `1.0M 🔥` `+42%`
1. [稚楚美到我了 (Childish and beautiful to me)](https://s.weibo.com/weibo?q=%23%E7%A8%9A%E6%A5%9A%E7%BE%8E%E5%88%B0%E6%88%91%E4%BA%86%23) `713.3K 🔥` `+95%`
1. [30万内终于等到带quattro的智能SUV (Finally waited for a smart SUV with quattro for less than 300,000 yuan)](https://s.weibo.com/weibo?q=%2330%E4%B8%87%E5%86%85%E7%BB%88%E4%BA%8E%E7%AD%89%E5%88%B0%E5%B8%A6quattro%E7%9A%84%E6%99%BA%E8%83%BDSUV%23) `533.6K 🔥` `+65%`
1. [张月不愧是从浪姐进修回来的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E4%B8%8D%E6%84%A7%E6%98%AF%E4%BB%8E%E6%B5%AA%E5%A7%90%E8%BF%9B%E4%BF%AE%E5%9B%9E%E6%9D%A5%E7%9A%84%23) `515.9K 🔥` `+34%`
1. [医生说再差的精子都能做试管](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%86%8D%E5%B7%AE%E7%9A%84%E7%B2%BE%E5%AD%90%E9%83%BD%E8%83%BD%E5%81%9A%E8%AF%95%E7%AE%A1%23) `277.2K 🔥` `+26%`
1. [ACC辅助驾驶追撞致3人死亡](https://s.weibo.com/weibo?q=%23ACC%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E8%BF%BD%E6%92%9E%E8%87%B43%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `274.2K 🔥` `+81%`
1. [周也是电竞文女主吧](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%98%AF%E7%94%B5%E7%AB%9E%E6%96%87%E5%A5%B3%E4%B8%BB%E5%90%A7%23) `261.4K 🔥` `+48%`
1. [荣耀CEO祝贺闪电破人类百米世界纪录 (Honor CEO congratulates Lightning on breaking the human 100-meter world record)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80CEO%E7%A5%9D%E8%B4%BA%E9%97%AA%E7%94%B5%E7%A0%B4%E4%BA%BA%E7%B1%BB%E7%99%BE%E7%B1%B3%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `231.7K 🔥` `+59%`
1. [699分农家女孩已去清华报到](https://s.weibo.com/weibo?q=%23699%E5%88%86%E5%86%9C%E5%AE%B6%E5%A5%B3%E5%AD%A9%E5%B7%B2%E5%8E%BB%E6%B8%85%E5%8D%8E%E6%8A%A5%E5%88%B0%23) `165.3K 🔥` `+45%`
1. [55元捡漏1.41万项链女子获5元补偿](https://s.weibo.com/weibo?q=%2355%E5%85%83%E6%8D%A1%E6%BC%8F1.41%E4%B8%87%E9%A1%B9%E9%93%BE%E5%A5%B3%E5%AD%90%E8%8E%B75%E5%85%83%E8%A1%A5%E5%81%BF%23) `1.2M 🔥`
1. [黑灯连发三条怼梁源 (Black Lantern sends out three messages in succession to attack Liang Yuan)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%81%AF%E8%BF%9E%E5%8F%91%E4%B8%89%E6%9D%A1%E6%80%BC%E6%A2%81%E6%BA%90%23) `442.6K 🔥`
1. [云南 二手烟](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%20%E4%BA%8C%E6%89%8B%E7%83%9F%23) `277.7K 🔥`
1. [陈伟霆十年了还没释怀人贩子梗 (William Chan still hasn’t let go of the human trafficker plot after ten years)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%8D%81%E5%B9%B4%E4%BA%86%E8%BF%98%E6%B2%A1%E9%87%8A%E6%80%80%E4%BA%BA%E8%B4%A9%E5%AD%90%E6%A2%97%23) `276.5K 🔥`
1. [时代峰峻伴手礼太小方了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%BC%B4%E6%89%8B%E7%A4%BC%E5%A4%AA%E5%B0%8F%E6%96%B9%E4%BA%86%23) `275.7K 🔥`
1. [父子因iPhone争执坠崖母亲也跳下](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E5%9B%A0iPhone%E4%BA%89%E6%89%A7%E5%9D%A0%E5%B4%96%E6%AF%8D%E4%BA%B2%E4%B9%9F%E8%B7%B3%E4%B8%8B%23) `256.7K 🔥`
1. [TF五代一公](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E4%B8%80%E5%85%AC%23) `254.6K 🔥`
1. [章若楠今年每套私服穿搭都好能打](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E4%BB%8A%E5%B9%B4%E6%AF%8F%E5%A5%97%E7%A7%81%E6%9C%8D%E7%A9%BF%E6%90%AD%E9%83%BD%E5%A5%BD%E8%83%BD%E6%89%93%23) `216.1K 🔥`
1. [长江存储利润](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%AD%98%E5%82%A8%E5%88%A9%E6%B6%A6%23) `215.9K 🔥`
1. [居家办公都发展成这样了 (Home working has developed into this)](https://s.weibo.com/weibo?q=%23%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC%E9%83%BD%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `211.7K 🔥`
1. [张凌赫周也无畏契约直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%91%A8%E4%B9%9F%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E7%9B%B4%E6%92%AD%23) `203.6K 🔥`
1. [我对生理期的态度belike (My attitude towards menstrual periods belike)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AF%B9%E7%94%9F%E7%90%86%E6%9C%9F%E7%9A%84%E6%80%81%E5%BA%A6belike%23) `200.8K 🔥`
1. [欢子 退赛 (Huanzi withdrew)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E9%80%80%E8%B5%9B%23) `189.9K 🔥`
1. [付费占座行不行总算说明白了 (It’s finally clear whether it’s okay to pay for a seat)](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E5%8D%A0%E5%BA%A7%E8%A1%8C%E4%B8%8D%E8%A1%8C%E6%80%BB%E7%AE%97%E8%AF%B4%E6%98%8E%E7%99%BD%E4%BA%86%23) `175.4K 🔥`
1. [王楚然中不溜时期](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%AD%E4%B8%8D%E6%BA%9C%E6%97%B6%E6%9C%9F%23) `160.0K 🔥`
1. [2026年亚运会 (2026 Asian Games)](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `146.9K 🔥`
1. [张凌赫瓦男神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%93%A6%E7%94%B7%E7%A5%9E%23) `134.4K 🔥`
1. [李在明称清算亲日派后代](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E7%A7%B0%E6%B8%85%E7%AE%97%E4%BA%B2%E6%97%A5%E6%B4%BE%E5%90%8E%E4%BB%A3%23) `123.5K 🔥`
1. [那英酒红露背裙 (Naying wine red backless skirt)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E9%85%92%E7%BA%A2%E9%9C%B2%E8%83%8C%E8%A3%99%23) `122.9K 🔥`
1. [晋江作者大会淮上 (Jinjiang Author Conference Huaishang)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%E6%B7%AE%E4%B8%8A%23) `277.1K 🔥` `-64%`
1. [巫哲好帅 (Wu Zhe is so handsome)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E5%A5%BD%E5%B8%85%23) `276.9K 🔥` `-64%`
1. [马斯克回应癌症疫苗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%BA%94%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `275.2K 🔥` `-66%`
1. [巫哲首次公开露脸 (Wu Zhe's first public appearance)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E9%9C%B2%E8%84%B8%23) `258.7K 🔥` `-67%`
1. [刘宇宁杨超越体型差](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BD%93%E5%9E%8B%E5%B7%AE%23) `213.6K 🔥` `-28%`
1. [一斤鸭脖能买一斤牛肉一斤排骨](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%96%A4%E9%B8%AD%E8%84%96%E8%83%BD%E4%B9%B0%E4%B8%80%E6%96%A4%E7%89%9B%E8%82%89%E4%B8%80%E6%96%A4%E6%8E%92%E9%AA%A8%23) `206.8K 🔥` `-39%`
1. [王玉雯一句话把刘宇宁整不会了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%8A%8A%E5%88%98%E5%AE%87%E5%AE%81%E6%95%B4%E4%B8%8D%E4%BC%9A%E4%BA%86%23) `142.6K 🔥` `-36%`
1. [二十届中央纪委六次全会公报](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%B8%AD%E5%A4%AE%E7%BA%AA%E5%A7%94%E5%85%AD%E6%AC%A1%E5%85%A8%E4%BC%9A%E5%85%AC%E6%8A%A5%23) `123.1K 🔥` `-61%`

Updated at 2026-08-22 15:57:06

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
