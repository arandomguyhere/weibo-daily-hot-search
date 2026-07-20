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

1. [A股行情 (A-share market)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `1.3M 🔥` `NEW`
1. [我国区域外贸均衡发展成效显现](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8C%BA%E5%9F%9F%E5%A4%96%E8%B4%B8%E5%9D%87%E8%A1%A1%E5%8F%91%E5%B1%95%E6%88%90%E6%95%88%E6%98%BE%E7%8E%B0%23) `1.2M 🔥` `NEW`
1. [不太理解光脚穿洞洞鞋的人](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%A4%AA%E7%90%86%E8%A7%A3%E5%85%89%E8%84%9A%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%23) `1.2M 🔥` `NEW`
1. [西班牙两位公主再捧大力神杯](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E4%B8%A4%E4%BD%8D%E5%85%AC%E4%B8%BB%E5%86%8D%E6%8D%A7%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `1.1M 🔥` `NEW`
1. [全新坦克300上市19.98万元起](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%9D%A6%E5%85%8B300%E4%B8%8A%E5%B8%8219.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `922.9K 🔥` `NEW`
1. [昭阳公主定档](https://s.weibo.com/weibo?q=%23%E6%98%AD%E9%98%B3%E5%85%AC%E4%B8%BB%E5%AE%9A%E6%A1%A3%23) `577.7K 🔥` `NEW`
1. [余文乐宣布离婚](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E5%AE%A3%E5%B8%83%E7%A6%BB%E5%A9%9A%23) `554.6K 🔥` `NEW`
1. [奔跑吧投票](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%8A%95%E7%A5%A8%23) `539.6K 🔥` `NEW`
1. [选择性辞职](https://s.weibo.com/weibo?q=%23%E9%80%89%E6%8B%A9%E6%80%A7%E8%BE%9E%E8%81%8C%23) `514.6K 🔥` `NEW`
1. [王祖贤AI人脸授权](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4AI%E4%BA%BA%E8%84%B8%E6%8E%88%E6%9D%83%23) `489.5K 🔥` `NEW`
1. [余文乐老婆 (Shawn Yue's wife)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%80%81%E5%A9%86%23) `489.3K 🔥` `NEW`
1. [半导体板块半月回撤超40%](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9D%97%E5%8D%8A%E6%9C%88%E5%9B%9E%E6%92%A4%E8%B6%8540%25%23) `487.1K 🔥` `NEW`
1. [李宇春旅综首秀](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E6%97%85%E7%BB%BC%E9%A6%96%E7%A7%80%23) `484.2K 🔥` `NEW`
1. [孟子义回应角色同质化](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%9B%9E%E5%BA%94%E8%A7%92%E8%89%B2%E5%90%8C%E8%B4%A8%E5%8C%96%23) `480.9K 🔥` `NEW`
1. [DeepSeekV4能超越KimiK3吗](https://s.weibo.com/weibo?q=%23DeepSeekV4%E8%83%BD%E8%B6%85%E8%B6%8AKimiK3%E5%90%97%23) `479.2K 🔥` `NEW`
1. [男子杀害同居女子逃亡24年后落网](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E5%90%8C%E5%B1%85%E5%A5%B3%E5%AD%90%E9%80%83%E4%BA%A124%E5%B9%B4%E5%90%8E%E8%90%BD%E7%BD%91%23) `476.7K 🔥` `NEW`
1. [女子商场遛狗不拴绳引发冲突](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%95%86%E5%9C%BA%E9%81%9B%E7%8B%97%E4%B8%8D%E6%8B%B4%E7%BB%B3%E5%BC%95%E5%8F%91%E5%86%B2%E7%AA%81%23) `473.2K 🔥` `NEW`
1. [男生免疫力差易反复感染HPV](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%85%8D%E7%96%AB%E5%8A%9B%E5%B7%AE%E6%98%93%E5%8F%8D%E5%A4%8D%E6%84%9F%E6%9F%93HPV%23) `470.0K 🔥` `NEW`
1. [宋威龙向涵之Gucci大片](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%90%91%E6%B6%B5%E4%B9%8BGucci%E5%A4%A7%E7%89%87%23) `464.0K 🔥` `NEW`
1. [闪婚后一月妻子出轨多名男子](https://s.weibo.com/weibo?q=%23%E9%97%AA%E5%A9%9A%E5%90%8E%E4%B8%80%E6%9C%88%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E5%A4%9A%E5%90%8D%E7%94%B7%E5%AD%90%23) `463.6K 🔥` `NEW`
1. [盗梦空间被指抄袭红辣椒 (Inception accused of plagiarizing Paprika)](https://s.weibo.com/weibo?q=%23%E7%9B%97%E6%A2%A6%E7%A9%BA%E9%97%B4%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%E7%BA%A2%E8%BE%A3%E6%A4%92%23) `458.1K 🔥` `NEW`
1. [彭水山体崩塌孤石爆破作业首爆成功](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E5%AD%A4%E7%9F%B3%E7%88%86%E7%A0%B4%E4%BD%9C%E4%B8%9A%E9%A6%96%E7%88%86%E6%88%90%E5%8A%9F%23) `454.3K 🔥` `NEW`
1. [女子不堪家暴想离婚发现结婚证假的](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E5%A0%AA%E5%AE%B6%E6%9A%B4%E6%83%B3%E7%A6%BB%E5%A9%9A%E5%8F%91%E7%8E%B0%E7%BB%93%E5%A9%9A%E8%AF%81%E5%81%87%E7%9A%84%23) `452.1K 🔥` `NEW`
1. [下届世界杯看球时差](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9C%8B%E7%90%83%E6%97%B6%E5%B7%AE%23) `451.3K 🔥` `NEW`
1. [阿根廷数千人聚集街头扔瓶子石头](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%95%B0%E5%8D%83%E4%BA%BA%E8%81%9A%E9%9B%86%E8%A1%97%E5%A4%B4%E6%89%94%E7%93%B6%E5%AD%90%E7%9F%B3%E5%A4%B4%23) `444.4K 🔥` `NEW`
1. [想减肥报完游泳班的人天塌了](https://s.weibo.com/weibo?q=%23%E6%83%B3%E5%87%8F%E8%82%A5%E6%8A%A5%E5%AE%8C%E6%B8%B8%E6%B3%B3%E7%8F%AD%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `435.6K 🔥` `NEW`
1. [有人发明了无薪水工作](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E5%8F%91%E6%98%8E%E4%BA%86%E6%97%A0%E8%96%AA%E6%B0%B4%E5%B7%A5%E4%BD%9C%23) `431.0K 🔥` `NEW`
1. [想你了票房破亿](https://s.weibo.com/weibo?q=%23%E6%83%B3%E4%BD%A0%E4%BA%86%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `428.6K 🔥` `NEW`
1. [鹅鸭杀](https://s.weibo.com/weibo?q=%23%E9%B9%85%E9%B8%AD%E6%9D%80%23) `424.9K 🔥` `NEW`
1. [西足协主席称夺冠伸张了正义](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B6%B3%E5%8D%8F%E4%B8%BB%E5%B8%AD%E7%A7%B0%E5%A4%BA%E5%86%A0%E4%BC%B8%E5%BC%A0%E4%BA%86%E6%AD%A3%E4%B9%89%23) `422.5K 🔥` `NEW`
1. [庄法在乘风2026还是收敛了 (Zhuang Fa still restrained himself in Chengfeng 2026)](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E5%9C%A8%E4%B9%98%E9%A3%8E2026%E8%BF%98%E6%98%AF%E6%94%B6%E6%95%9B%E4%BA%86%23) `420.2K 🔥` `NEW`
1. [马嘉祺忙了一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%BF%99%E4%BA%86%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `418.4K 🔥` `NEW`
1. [手机充满电会伤电池吗](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%85%85%E6%BB%A1%E7%94%B5%E4%BC%9A%E4%BC%A4%E7%94%B5%E6%B1%A0%E5%90%97%23) `416.6K 🔥` `NEW`
1. [第一次见AI把自己卸载了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81AI%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%8D%B8%E8%BD%BD%E4%BA%86%23) `411.6K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `408.6K 🔥` `NEW`
1. [阿根廷队无法接受输掉决赛的事实](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E6%97%A0%E6%B3%95%E6%8E%A5%E5%8F%97%E8%BE%93%E6%8E%89%E5%86%B3%E8%B5%9B%E7%9A%84%E4%BA%8B%E5%AE%9E%23) `3.7M 🔥` `+418%`
1. [千万不要在网上买低价饮料](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E4%B9%B0%E4%BD%8E%E4%BB%B7%E9%A5%AE%E6%96%99%23) `1.2M 🔥`
1. [八仙 口碑爆了](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E5%8F%A3%E7%A2%91%E7%88%86%E4%BA%86%23) `859.1K 🔥`
1. [OpenAI称Kimi开源是减速主义](https://s.weibo.com/weibo?q=%23OpenAI%E7%A7%B0Kimi%E5%BC%80%E6%BA%90%E6%98%AF%E5%87%8F%E9%80%9F%E4%B8%BB%E4%B9%89%23) `570.0K 🔥`
1. [亚马尔和蒙牛有个冠军的新秘密 (Yamal and Mengniu have a new secret to becoming champions)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%92%8C%E8%92%99%E7%89%9B%E6%9C%89%E4%B8%AA%E5%86%A0%E5%86%9B%E7%9A%84%E6%96%B0%E7%A7%98%E5%AF%86%23) `1.2M 🔥` `-73%`
1. [西班牙领奖时阿根廷全队背过身 (Argentina's entire team turned their backs when Spain accepted the award)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A2%86%E5%A5%96%E6%97%B6%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%85%A8%E9%98%9F%E8%83%8C%E8%BF%87%E8%BA%AB%23) `809.8K 🔥` `-86%`
1. [认知水平高的人都有一个共性](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E7%9F%A5%E6%B0%B4%E5%B9%B3%E9%AB%98%E7%9A%84%E4%BA%BA%E9%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%85%B1%E6%80%A7%23) `502.0K 🔥` `-60%`
1. [大麦 抢不了票 (Damai can't get a ticket)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%20%E6%8A%A2%E4%B8%8D%E4%BA%86%E7%A5%A8%23) `472.3K 🔥` `-69%`
1. [张凌赫 旺老艺人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E6%97%BA%E8%80%81%E8%89%BA%E4%BA%BA%23) `467.6K 🔥` `-40%`
1. [林俊杰七七挽手看世界杯决赛](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%83%E4%B8%83%E6%8C%BD%E6%89%8B%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `460.9K 🔥` `-41%`
1. [遗传眼病孩子问为什么要生我 (The child with genetic eye disease asked why he had to give birth to me)](https://s.weibo.com/weibo?q=%23%E9%81%97%E4%BC%A0%E7%9C%BC%E7%97%85%E5%AD%A9%E5%AD%90%E9%97%AE%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%9F%E6%88%91%23) `448.5K 🔥` `-46%`
1. [阿根廷 脏](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `446.3K 🔥` `-80%`
1. [工作后不能和父母住太久 (You can’t live with your parents for too long after working)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E4%B8%8D%E8%83%BD%E5%92%8C%E7%88%B6%E6%AF%8D%E4%BD%8F%E5%A4%AA%E4%B9%85%23) `442.3K 🔥` `-31%`
1. [西班牙球员回应阿根廷全队背身](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%90%83%E5%91%98%E5%9B%9E%E5%BA%94%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%85%A8%E9%98%9F%E8%83%8C%E8%BA%AB%23) `439.8K 🔥` `-71%`
1. [姆巴佩金靴 (Mbappe golden boots)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%87%91%E9%9D%B4%23) `433.4K 🔥` `-38%`
1. [恐怖游轮女主身材](https://s.weibo.com/weibo?q=%23%E6%81%90%E6%80%96%E6%B8%B8%E8%BD%AE%E5%A5%B3%E4%B8%BB%E8%BA%AB%E6%9D%90%23) `427.7K 🔥` `-36%`
1. [女明星的簪花造型](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9F%E7%9A%84%E7%B0%AA%E8%8A%B1%E9%80%A0%E5%9E%8B%23) `412.4K 🔥` `-37%`

Updated at 2026-07-20 15:49:31

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
