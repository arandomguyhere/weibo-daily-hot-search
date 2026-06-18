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

1. [天猫618正日子巅峰冲刺 (Tmall 618 is the peak of life)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB618%E6%AD%A3%E6%97%A5%E5%AD%90%E5%B7%85%E5%B3%B0%E5%86%B2%E5%88%BA%23) `2.3M 🔥` `NEW`
1. [梅西 C罗](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%20C%E7%BD%97%23) `2.3M 🔥` `NEW`
1. [网络辟谣标签](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `458.1K 🔥` `NEW`
1. [苹果为何涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%B8%BA%E4%BD%95%E6%B6%A8%E4%BB%B7%23) `230.0K 🔥` `NEW`
1. [梅西父亲被曝患癌](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E7%88%B6%E4%BA%B2%E8%A2%AB%E6%9B%9D%E6%82%A3%E7%99%8C%23) `226.8K 🔥` `NEW`
1. [张凌赫很久没人叫我学长了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BE%88%E4%B9%85%E6%B2%A1%E4%BA%BA%E5%8F%AB%E6%88%91%E5%AD%A6%E9%95%BF%E4%BA%86%23) `225.1K 🔥` `NEW`
1. [翘楚](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%23) `223.4K 🔥` `NEW`
1. [32岁的鞠婧祎](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E7%9A%84%E9%9E%A0%E5%A9%A7%E7%A5%8E%23) `222.7K 🔥` `NEW`
1. [丈夫脑死亡400余天妻子执意留身边](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E8%84%91%E6%AD%BB%E4%BA%A1400%E4%BD%99%E5%A4%A9%E5%A6%BB%E5%AD%90%E6%89%A7%E6%84%8F%E7%95%99%E8%BA%AB%E8%BE%B9%23) `221.4K 🔥` `NEW`
1. [曝20周年纪念款iPhone放弃纯直屏](https://s.weibo.com/weibo?q=%23%E6%9B%9D20%E5%91%A8%E5%B9%B4%E7%BA%AA%E5%BF%B5%E6%AC%BEiPhone%E6%94%BE%E5%BC%83%E7%BA%AF%E7%9B%B4%E5%B1%8F%23) `217.2K 🔥` `NEW`
1. [12岁男孩偷开邻居车高速狂飙6小时 (12-year-old boy stole neighbor's car and drove at high speed for 6 hours)](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E7%94%B7%E5%AD%A9%E5%81%B7%E5%BC%80%E9%82%BB%E5%B1%85%E8%BD%A6%E9%AB%98%E9%80%9F%E7%8B%82%E9%A3%996%E5%B0%8F%E6%97%B6%23) `216.1K 🔥` `NEW`
1. [英伟达SK海力士](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BESK%E6%B5%B7%E5%8A%9B%E5%A3%AB%23) `214.6K 🔥` `NEW`
1. [问心](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%83%23) `214.2K 🔥` `NEW`
1. [美联储加息预期降温](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E5%8A%A0%E6%81%AF%E9%A2%84%E6%9C%9F%E9%99%8D%E6%B8%A9%23) `212.5K 🔥` `NEW`
1. [72家A股公司提示风险](https://s.weibo.com/weibo?q=%2372%E5%AE%B6A%E8%82%A1%E5%85%AC%E5%8F%B8%E6%8F%90%E7%A4%BA%E9%A3%8E%E9%99%A9%23) `209.8K 🔥` `NEW`
1. [刘芮麟回复网友](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%8A%AE%E9%BA%9F%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23) `209.1K 🔥` `NEW`
1. [发现很多人不会上班](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%B8%8D%E4%BC%9A%E4%B8%8A%E7%8F%AD%23) `207.6K 🔥` `NEW`
1. [邓超报位置](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E6%8A%A5%E4%BD%8D%E7%BD%AE%23) `204.5K 🔥` `NEW`
1. [爸爸一家之主杨紫一家之王](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%80%E5%AE%B6%E4%B9%8B%E4%B8%BB%E6%9D%A8%E7%B4%AB%E4%B8%80%E5%AE%B6%E4%B9%8B%E7%8E%8B%23) `201.2K 🔥` `NEW`
1. [卫健委新规终结医生飞刀费乱象](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E6%96%B0%E8%A7%84%E7%BB%88%E7%BB%93%E5%8C%BB%E7%94%9F%E9%A3%9E%E5%88%80%E8%B4%B9%E4%B9%B1%E8%B1%A1%23) `200.9K 🔥` `NEW`
1. [鞠婧祎人鱼公主 (Ju Jingyi Mermaid Princess)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%BA%BA%E9%B1%BC%E5%85%AC%E4%B8%BB%23) `197.7K 🔥` `NEW`
1. [刘亦菲冰晶玫瑰高定](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%86%B0%E6%99%B6%E7%8E%AB%E7%91%B0%E9%AB%98%E5%AE%9A%23) `196.2K 🔥` `NEW`
1. [清华教授谈如何发现孩子天赋](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E6%95%99%E6%8E%88%E8%B0%88%E5%A6%82%E4%BD%95%E5%8F%91%E7%8E%B0%E5%AD%A9%E5%AD%90%E5%A4%A9%E8%B5%8B%23) `195.8K 🔥` `NEW`
1. [深圳暴雨](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9A%B4%E9%9B%A8%23) `190.9K 🔥` `NEW`
1. [王安宇又唱了想你的夜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%8F%88%E5%94%B1%E4%BA%86%E6%83%B3%E4%BD%A0%E7%9A%84%E5%A4%9C%23) `190.5K 🔥` `NEW`
1. [归鸾](https://s.weibo.com/weibo?q=%23%E5%BD%92%E9%B8%BE%23) `189.0K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `185.8K 🔥` `NEW`
1. [诸神黄昏只有C罗听进去了 (Only Cristiano Ronaldo listened to Ragnarok)](https://s.weibo.com/weibo?q=%23%E8%AF%B8%E7%A5%9E%E9%BB%84%E6%98%8F%E5%8F%AA%E6%9C%89C%E7%BD%97%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `2.4M 🔥` `+208%`
1. [开局之年看中国奋进陕西谱新篇](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%E5%A5%8B%E8%BF%9B%E9%99%95%E8%A5%BF%E8%B0%B1%E6%96%B0%E7%AF%87%23) `2.3M 🔥` `+128%`
1. [克罗地亚门将神了](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E9%97%A8%E5%B0%86%E7%A5%9E%E4%BA%86%23) `830.3K 🔥` `+24%`
1. [王安宇李昀锐笑妃给哭妃包场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%9D%8E%E6%98%80%E9%94%90%E7%AC%91%E5%A6%83%E7%BB%99%E5%93%AD%E5%A6%83%E5%8C%85%E5%9C%BA%23) `229.5K 🔥` `+137%`
1. [南部档案 (southern archives)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `228.8K 🔥` `+295%`
1. [豆包每天收入不足百万 (Doubao’s daily income is less than one million)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%AF%8F%E5%A4%A9%E6%94%B6%E5%85%A5%E4%B8%8D%E8%B6%B3%E7%99%BE%E4%B8%87%23) `227.8K 🔥` `+496%`
1. [抓特务](https://s.weibo.com/weibo?q=%23%E6%8A%93%E7%89%B9%E5%8A%A1%23) `218.4K 🔥` `+73%`
1. [去大医院看病总有种无力感](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%A4%A7%E5%8C%BB%E9%99%A2%E7%9C%8B%E7%97%85%E6%80%BB%E6%9C%89%E7%A7%8D%E6%97%A0%E5%8A%9B%E6%84%9F%23) `207.2K 🔥` `+165%`
1. [宝妈带1岁娃饭店避雨遭拼命驱赶 (Mom took shelter with her 1-year-old baby in a hotel from the rain but was driven away)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%B8%A61%E5%B2%81%E5%A8%83%E9%A5%AD%E5%BA%97%E9%81%BF%E9%9B%A8%E9%81%AD%E6%8B%BC%E5%91%BD%E9%A9%B1%E8%B5%B6%23) `205.4K 🔥` `+80%`
1. [美伊协议全文曝光 (Full text of US-Iran agreement exposed)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%8D%8F%E8%AE%AE%E5%85%A8%E6%96%87%E6%9B%9D%E5%85%89%23) `202.3K 🔥` `+58%`
1. [英格兰克罗地亚 好看](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%20%E5%A5%BD%E7%9C%8B%23) `198.8K 🔥` `+56%`
1. [同时养了小金毛和小伯恩山](https://s.weibo.com/weibo?q=%23%E5%90%8C%E6%97%B6%E5%85%BB%E4%BA%86%E5%B0%8F%E9%87%91%E6%AF%9B%E5%92%8C%E5%B0%8F%E4%BC%AF%E6%81%A9%E5%B1%B1%23) `193.6K 🔥` `+175%`
1. [现在买车增程还是纯电](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E4%B9%B0%E8%BD%A6%E5%A2%9E%E7%A8%8B%E8%BF%98%E6%98%AF%E7%BA%AF%E7%94%B5%23) `192.3K 🔥` `+317%`
1. [猫妈妈接纳孤儿小猫](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A6%88%E5%A6%88%E6%8E%A5%E7%BA%B3%E5%AD%A4%E5%84%BF%E5%B0%8F%E7%8C%AB%23) `187.5K 🔥` `+287%`
1. [C罗状态 (Ronaldo status)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%8A%B6%E6%80%81%23) `3.6M 🔥`
1. [刘诗诗刘亦菲活动生图](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%88%98%E4%BA%A6%E8%8F%B2%E6%B4%BB%E5%8A%A8%E7%94%9F%E5%9B%BE%23) `188.6K 🔥`
1. [英格兰4比2克罗地亚 (England 4-2 Croatia)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B04%E6%AF%942%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%23) `926.2K 🔥` `-40%`
1. [C罗 刚果保镖](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E5%88%9A%E6%9E%9C%E4%BF%9D%E9%95%96%23) `223.9K 🔥` `-71%`
1. [美联储](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%23) `219.2K 🔥` `-64%`
1. [葡萄牙vs民主刚果 (Portugal vs Democratic Congo)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `212.3K 🔥` `-55%`
1. [葡萄牙1比1民主刚果](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%991%E6%AF%941%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `210.5K 🔥` `-48%`
1. [C罗全场0射正](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%85%A8%E5%9C%BA0%E5%B0%84%E6%AD%A3%23) `203.3K 🔥` `-22%`
1. [克罗地亚世界波](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E4%B8%96%E7%95%8C%E6%B3%A2%23) `199.8K 🔥` `-28%`
1. [莫德里奇送点](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E9%80%81%E7%82%B9%23) `194.3K 🔥` `-31%`

Updated at 2026-06-18 08:19:35

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
