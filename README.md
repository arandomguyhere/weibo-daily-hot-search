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

1. [LPL队伍全部出局 (All LPL teams are eliminated)](https://s.weibo.com/weibo?q=%23LPL%E9%98%9F%E4%BC%8D%E5%85%A8%E9%83%A8%E5%87%BA%E5%B1%80%23) `244.5K 🔥` `NEW`
1. [王俊凯史上最严演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E6%BC%94%E5%94%B1%E4%BC%9A%23) `234.7K 🔥` `NEW`
1. [邹市明冉莹颖已还清3家银行欠款](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%86%89%E8%8E%B9%E9%A2%96%E5%B7%B2%E8%BF%98%E6%B8%853%E5%AE%B6%E9%93%B6%E8%A1%8C%E6%AC%A0%E6%AC%BE%23) `126.2K 🔥` `NEW`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `113.3K 🔥` `NEW`
1. [霍建华 很不高兴为你签名](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%BB%BA%E5%8D%8E%20%E5%BE%88%E4%B8%8D%E9%AB%98%E5%85%B4%E4%B8%BA%E4%BD%A0%E7%AD%BE%E5%90%8D%23) `112.8K 🔥` `NEW`
1. [朱志鑫运动会](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `90.1K 🔥` `NEW`
1. [郑钦文无缘雅典赛四强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%97%A0%E7%BC%98%E9%9B%85%E5%85%B8%E8%B5%9B%E5%9B%9B%E5%BC%BA%23) `81.5K 🔥` `NEW`
1. [姜妍提醒王俊凯整理头发](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E6%8F%90%E9%86%92%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%95%B4%E7%90%86%E5%A4%B4%E5%8F%91%23) `79.2K 🔥` `NEW`
1. [恐怖游轮一刀未剪](https://s.weibo.com/weibo?q=%23%E6%81%90%E6%80%96%E6%B8%B8%E8%BD%AE%E4%B8%80%E5%88%80%E6%9C%AA%E5%89%AA%23) `77.7K 🔥` `NEW`
1. [DK战胜BLG众人反应](https://s.weibo.com/weibo?q=%23DK%E6%88%98%E8%83%9CBLG%E4%BC%97%E4%BA%BA%E5%8F%8D%E5%BA%94%23) `63.6K 🔥` `NEW`
1. [陈哲远模仿王楚然提裙子学到精髓了 (Chen Zheyuan imitated Wang Churan's skirt and learned the essence)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%A8%A1%E4%BB%BF%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%8F%90%E8%A3%99%E5%AD%90%E5%AD%A6%E5%88%B0%E7%B2%BE%E9%AB%93%E4%BA%86%23) `57.3K 🔥` `NEW`
1. [彭水垮塌再现逆行摩托大军](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E6%B0%B4%E5%9E%AE%E5%A1%8C%E5%86%8D%E7%8E%B0%E9%80%86%E8%A1%8C%E6%91%A9%E6%89%98%E5%A4%A7%E5%86%9B%23) `56.2K 🔥` `NEW`
1. [穆祉丞运动会](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `55.0K 🔥` `NEW`
1. [长途大巴可能真的要复活了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%80%94%E5%A4%A7%E5%B7%B4%E5%8F%AF%E8%83%BD%E7%9C%9F%E7%9A%84%E8%A6%81%E5%A4%8D%E6%B4%BB%E4%BA%86%23) `55.0K 🔥` `NEW`
1. [易烊千玺离骚迎来了真正的宣发期](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%A6%BB%E9%AA%9A%E8%BF%8E%E6%9D%A5%E4%BA%86%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `55.0K 🔥` `NEW`
1. [下车乘客目睹班车被滚落的巨石掩埋](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E8%BD%A6%E4%B9%98%E5%AE%A2%E7%9B%AE%E7%9D%B9%E7%8F%AD%E8%BD%A6%E8%A2%AB%E6%BB%9A%E8%90%BD%E7%9A%84%E5%B7%A8%E7%9F%B3%E6%8E%A9%E5%9F%8B%23) `54.9K 🔥` `NEW`
1. [功夫女足让韩国人破防了 (The Kung Fu Women’s Football Team allowed the Koreans to break their defense)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%AE%A9%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%A0%B4%E9%98%B2%E4%BA%86%23) `842.4K 🔥` `+91%`
1. [西班牙晒大力神杯](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%99%92%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `630.1K 🔥` `+349%`
1. [智能体互信互联互操作全球合作倡议](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E4%BD%93%E4%BA%92%E4%BF%A1%E4%BA%92%E8%81%94%E4%BA%92%E6%93%8D%E4%BD%9C%E5%85%A8%E7%90%83%E5%90%88%E4%BD%9C%E5%80%A1%E8%AE%AE%23) `622.0K 🔥` `+141%`
1. [年轻人一定要对钱有概念](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `621.6K 🔥` `+86%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `294.1K 🔥` `+109%`
1. [青岛与世界干杯 (Cheers to Qingdao and the world)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E4%B8%8E%E4%B8%96%E7%95%8C%E5%B9%B2%E6%9D%AF%23) `236.9K 🔥` `+32%`
1. [阿根廷决赛遇苦主裁判](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B3%E8%B5%9B%E9%81%87%E8%8B%A6%E4%B8%BB%E8%A3%81%E5%88%A4%23) `134.5K 🔥` `+147%`
1. [重庆彭水山体崩塌还有34人失联 (Pengshui mountain collapse in Chongqing leaves 34 people missing)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E8%BF%98%E6%9C%8934%E4%BA%BA%E5%A4%B1%E8%81%94%23) `129.7K 🔥` `+100%`
1. [人民日报评多个行业撤销大师称号](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%A4%9A%E4%B8%AA%E8%A1%8C%E4%B8%9A%E6%92%A4%E9%94%80%E5%A4%A7%E5%B8%88%E7%A7%B0%E5%8F%B7%23) `129.3K 🔥` `+162%`
1. [管泽元 (Guan Zeyuan)](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%23) `119.9K 🔥` `+126%`
1. [家长谈彩礼成了小家启动金 (Parents talk about the betrothal gift becoming the start-up fund for a small family)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E8%B0%88%E5%BD%A9%E7%A4%BC%E6%88%90%E4%BA%86%E5%B0%8F%E5%AE%B6%E5%90%AF%E5%8A%A8%E9%87%91%23) `116.6K 🔥` `+136%`
1. [看不见的咖啡因终于可视化了 (Invisible caffeine finally visualized)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E5%92%96%E5%95%A1%E5%9B%A0%E7%BB%88%E4%BA%8E%E5%8F%AF%E8%A7%86%E5%8C%96%E4%BA%86%23) `90.2K 🔥` `+59%`
1. [无意义的社交只会消耗自己](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%84%8F%E4%B9%89%E7%9A%84%E7%A4%BE%E4%BA%A4%E5%8F%AA%E4%BC%9A%E6%B6%88%E8%80%97%E8%87%AA%E5%B7%B1%23) `89.4K 🔥` `+55%`
1. [A股年内最强无差别杀跌 (A-shares saw the strongest indiscriminate decline this year)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B9%B4%E5%86%85%E6%9C%80%E5%BC%BA%E6%97%A0%E5%B7%AE%E5%88%AB%E6%9D%80%E8%B7%8C%23) `86.0K 🔥` `+74%`
1. [王楚然张凌赫额头吻 (Wang Churan and Zhang Linghe forehead kiss)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%A2%9D%E5%A4%B4%E5%90%BB%23) `85.9K 🔥` `+74%`
1. [没有什么稳定的工作 (No stable job)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BB%80%E4%B9%88%E7%A8%B3%E5%AE%9A%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `82.7K 🔥` `+59%`
1. [百花杀热度](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%83%AD%E5%BA%A6%23) `82.7K 🔥` `+67%`
1. [这一秒过火定档 (This second is too much.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%AE%9A%E6%A1%A3%23) `80.0K 🔥` `+62%`
1. [猫猫每一个猫窝都照顾到了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%8C%AB%E6%AF%8F%E4%B8%80%E4%B8%AA%E7%8C%AB%E7%AA%9D%E9%83%BD%E7%85%A7%E9%A1%BE%E5%88%B0%E4%BA%86%23) `78.5K 🔥` `+46%`
1. [张凌赫发了52个火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%91%E4%BA%8652%E4%B8%AA%E7%81%AB%23) `78.4K 🔥` `+58%`
1. [男孩故意拉倒餐车卤水洒了一地](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%95%85%E6%84%8F%E6%8B%89%E5%80%92%E9%A4%90%E8%BD%A6%E5%8D%A4%E6%B0%B4%E6%B4%92%E4%BA%86%E4%B8%80%E5%9C%B0%23) `77.9K 🔥` `+58%`
1. [印度12岁男孩河边遭鳄鱼袭击死亡 (12-year-old boy dies after being attacked by crocodile in river in India)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A612%E5%B2%81%E7%94%B7%E5%AD%A9%E6%B2%B3%E8%BE%B9%E9%81%AD%E9%B3%84%E9%B1%BC%E8%A2%AD%E5%87%BB%E6%AD%BB%E4%BA%A1%23) `77.8K 🔥` `+57%`
1. [挪威的垃圾桶也这么抽象](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E7%9A%84%E5%9E%83%E5%9C%BE%E6%A1%B6%E4%B9%9F%E8%BF%99%E4%B9%88%E6%8A%BD%E8%B1%A1%23) `77.8K 🔥` `+57%`
1. [德牧趴在还在麻醉状态的朋友身上哭泣](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%89%A7%E8%B6%B4%E5%9C%A8%E8%BF%98%E5%9C%A8%E9%BA%BB%E9%86%89%E7%8A%B6%E6%80%81%E7%9A%84%E6%9C%8B%E5%8F%8B%E8%BA%AB%E4%B8%8A%E5%93%AD%E6%B3%A3%23) `74.1K 🔥` `+50%`
1. [帮主人找菌子的狗被封菌犬](https://s.weibo.com/weibo?q=%23%E5%B8%AE%E4%B8%BB%E4%BA%BA%E6%89%BE%E8%8F%8C%E5%AD%90%E7%9A%84%E7%8B%97%E8%A2%AB%E5%B0%81%E8%8F%8C%E7%8A%AC%23) `70.1K 🔥` `+42%`
1. [功夫女足成今年第6部破10亿影片 (Kung Fu Girls becomes the 6th film to hit 1 billion this year)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%88%90%E4%BB%8A%E5%B9%B4%E7%AC%AC6%E9%83%A8%E7%A0%B410%E4%BA%BF%E5%BD%B1%E7%89%87%23) `64.7K 🔥` `+30%`
1. [8类女性更容易患乳腺癌](https://s.weibo.com/weibo?q=%238%E7%B1%BB%E5%A5%B3%E6%80%A7%E6%9B%B4%E5%AE%B9%E6%98%93%E6%82%A3%E4%B9%B3%E8%85%BA%E7%99%8C%23) `55.0K 🔥`
1. [任嘉伦 现在直接喊国超了吗](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%20%E7%8E%B0%E5%9C%A8%E7%9B%B4%E6%8E%A5%E5%96%8A%E5%9B%BD%E8%B6%85%E4%BA%86%E5%90%97%23) `55.0K 🔥`
1. [重庆彭水山体崩塌已致8死 (Chongqing Pengshui mountain collapse kills 8 people)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E5%B7%B2%E8%87%B48%E6%AD%BB%23) `55.0K 🔥`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `54.9K 🔥`
1. [矮个子穿吊带容易走光 (It is easy for short people to wear suspenders and expose themselves)](https://s.weibo.com/weibo?q=%23%E7%9F%AE%E4%B8%AA%E5%AD%90%E7%A9%BF%E5%90%8A%E5%B8%A6%E5%AE%B9%E6%98%93%E8%B5%B0%E5%85%89%23) `54.9K 🔥`
1. [A股今天暴跌原因 (Reasons why A shares plummeted today)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BB%8A%E5%A4%A9%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `54.9K 🔥`
1. [Bin连续被单杀](https://s.weibo.com/weibo?q=%23Bin%E8%BF%9E%E7%BB%AD%E8%A2%AB%E5%8D%95%E6%9D%80%23) `54.9K 🔥`
1. [JYP女团成员Angelababy](https://s.weibo.com/weibo?q=%23JYP%E5%A5%B3%E5%9B%A2%E6%88%90%E5%91%98Angelababy%23) `121.5K 🔥` `-66%`
1. [苏新皓发视频向粉丝道歉 (Su Xinhao posted a video to apologize to fans)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%8F%91%E8%A7%86%E9%A2%91%E5%90%91%E7%B2%89%E4%B8%9D%E9%81%93%E6%AD%89%23) `55.6K 🔥` `-85%`

Updated at 2026-07-18 07:28:10

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
