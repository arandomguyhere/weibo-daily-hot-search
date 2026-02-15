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

1. [迪奥开运红 (Dior Lucky Red)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E5%BC%80%E8%BF%90%E7%BA%A2%23) `257.4K 🔥` `NEW`
1. [2026NBA全明星](https://s.weibo.com/weibo?q=%232026NBA%E5%85%A8%E6%98%8E%E6%98%9F%23) `31.6K 🔥` `NEW`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `701.3K 🔥` `+35%`
1. [升温后有东北人500斤年货无处安放 (After the temperature rises, a Northeasterner has nowhere to put 500 kilograms of new year’s goods.)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E6%B8%A9%E5%90%8E%E6%9C%89%E4%B8%9C%E5%8C%97%E4%BA%BA500%E6%96%A4%E5%B9%B4%E8%B4%A7%E6%97%A0%E5%A4%84%E5%AE%89%E6%94%BE%23) `499.2K 🔥` `+35%`
1. [骏马贺新春电子贺卡 (Horse Happy New Year e-card)](https://s.weibo.com/weibo?q=%23%E9%AA%8F%E9%A9%AC%E8%B4%BA%E6%96%B0%E6%98%A5%E7%94%B5%E5%AD%90%E8%B4%BA%E5%8D%A1%23) `405.1K 🔥` `+39%`
1. [有人提前2天上高速省1400元高速费 (Someone took the expressway 2 days in advance and saved 1,400 yuan on expressway tolls)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%8F%90%E5%89%8D2%E5%A4%A9%E4%B8%8A%E9%AB%98%E9%80%9F%E7%9C%811400%E5%85%83%E9%AB%98%E9%80%9F%E8%B4%B9%23) `76.7K 🔥` `+66%`
1. [隋文静韩聪短节目72.66分 (Sui Wenjing and Han Cong’s short program scored 72.66 points)](https://s.weibo.com/weibo?q=%23%E9%9A%8B%E6%96%87%E9%9D%99%E9%9F%A9%E8%81%AA%E7%9F%AD%E8%8A%82%E7%9B%AE72.66%E5%88%86%23) `70.7K 🔥` `+54%`
1. [爱泼斯坦案名单竟出现梦露等人 (Monroe and others appear on Epstein case list)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%90%8D%E5%8D%95%E7%AB%9F%E5%87%BA%E7%8E%B0%E6%A2%A6%E9%9C%B2%E7%AD%89%E4%BA%BA%23) `70.6K 🔥` `+53%`
1. [县公务员称合适比喜欢更长久 (County civil servants say "fitting lasts longer than liking")](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%85%AC%E5%8A%A1%E5%91%98%E7%A7%B0%E5%90%88%E9%80%82%E6%AF%94%E5%96%9C%E6%AC%A2%E6%9B%B4%E9%95%BF%E4%B9%85%23) `70.4K 🔥` `+76%`
1. [生命树大结局 (tree of life finale)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%A4%A7%E7%BB%93%E5%B1%80%23) `50.7K 🔥` `+43%`
1. [曾坪刘奇晋级大跳台决赛 (Zeng Ping and Liu Qi advance to the big platform finals)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%9D%AA%E5%88%98%E5%A5%87%E6%99%8B%E7%BA%A7%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%86%B3%E8%B5%9B%23) `50.3K 🔥` `+42%`
1. [马思纯](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%23) `49.7K 🔥` `+41%`
1. [学术界 仅退款 (Academia Refunds Only)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%9C%AF%E7%95%8C%20%E4%BB%85%E9%80%80%E6%AC%BE%23) `49.3K 🔥` `+41%`
1. [黄金和房子买哪个更保值 (Which one is more valuable to buy, gold or a house?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%92%8C%E6%88%BF%E5%AD%90%E4%B9%B0%E5%93%AA%E4%B8%AA%E6%9B%B4%E4%BF%9D%E5%80%BC%23) `48.8K 🔥` `+63%`
1. [黄金中事件 录音 (Golden Incident Recording)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%AD%E4%BA%8B%E4%BB%B6%20%E5%BD%95%E9%9F%B3%23) `47.9K 🔥` `+37%`
1. [隋文静韩聪双人滑短节目 (Sui Wenjing and Han Cong pair skating short program)](https://s.weibo.com/weibo?q=%23%E9%9A%8B%E6%96%87%E9%9D%99%E9%9F%A9%E8%81%AA%E5%8F%8C%E4%BA%BA%E6%BB%91%E7%9F%AD%E8%8A%82%E7%9B%AE%23) `47.8K 🔥` `+37%`
1. [元宝红包 (Yuanbao red envelope)](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E7%BA%A2%E5%8C%85%23) `46.2K 🔥` `+37%`
1. [田曦薇首登央视春晚](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%A6%96%E7%99%BB%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `44.6K 🔥` `+38%`
1. [高度近视的日常就王楚然这样](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%E7%9A%84%E6%97%A5%E5%B8%B8%E5%B0%B1%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BF%99%E6%A0%B7%23) `42.4K 🔥` `+28%`
1. [姐姐脱落的乳牙呛入1岁宝宝气道 (Sister's fallen deciduous tooth chokes in 1-year-old baby's airway)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%84%B1%E8%90%BD%E7%9A%84%E4%B9%B3%E7%89%99%E5%91%9B%E5%85%A51%E5%B2%81%E5%AE%9D%E5%AE%9D%E6%B0%94%E9%81%93%23) `39.6K 🔥` `+69%`
1. [李子柒回应作品更新慢 (Li Ziqi responded to the slow update of works)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%90%E6%9F%92%E5%9B%9E%E5%BA%94%E4%BD%9C%E5%93%81%E6%9B%B4%E6%96%B0%E6%85%A2%23) `38.4K 🔥` `+59%`
1. [辣目洋子这么瘦了 (Yoko Lame is so thin)](https://s.weibo.com/weibo?q=%23%E8%BE%A3%E7%9B%AE%E6%B4%8B%E5%AD%90%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `37.9K 🔥` `+39%`
1. [男子聚会被下药提前离场躲过一劫](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%81%9A%E4%BC%9A%E8%A2%AB%E4%B8%8B%E8%8D%AF%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%E8%BA%B2%E8%BF%87%E4%B8%80%E5%8A%AB%23) `37.7K 🔥` `+41%`
1. [烟花 (fireworks)](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%23) `36.3K 🔥` `+33%`
1. [这是普通人接触到的行业天花板了 (This is the industry ceiling that ordinary people are exposed to.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%99%AE%E9%80%9A%E4%BA%BA%E6%8E%A5%E8%A7%A6%E5%88%B0%E7%9A%84%E8%A1%8C%E4%B8%9A%E5%A4%A9%E8%8A%B1%E6%9D%BF%E4%BA%86%23) `35.7K 🔥` `+38%`
1. [被卖菜爷爷的微信名感动了 (I was moved by the WeChat name of the vegetable seller)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%8D%96%E8%8F%9C%E7%88%B7%E7%88%B7%E7%9A%84%E5%BE%AE%E4%BF%A1%E5%90%8D%E6%84%9F%E5%8A%A8%E4%BA%86%23) `34.0K 🔥` `+51%`
1. [一栗小莎子大年初四化疗 (Yili Xiaoshazi received chemotherapy on the fourth day of the Lunar New Year)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%9B%9B%E5%8C%96%E7%96%97%23) `32.9K 🔥` `+49%`
1. [王安宇胡先煦范丞丞熟人局 (Wang Anyu, Hu Xianxu, Fan Chengcheng, Acquaintance Bureau)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%83%A1%E5%85%88%E7%85%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%86%9F%E4%BA%BA%E5%B1%80%23) `31.6K 🔥` `+43%`
1. [千问红包雨](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `31.6K 🔥` `+36%`
1. [马年祝福壁纸 (Year of the Horse Blessings Wallpaper)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E7%A5%9D%E7%A6%8F%E5%A3%81%E7%BA%B8%23) `31.6K 🔥` `+35%`
1. [中国冰壶女队5比6美国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E5%A5%B3%E9%98%9F5%E6%AF%946%E7%BE%8E%E5%9B%BD%23) `31.6K 🔥` `+43%`
1. [周深 小品天赋](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%20%E5%B0%8F%E5%93%81%E5%A4%A9%E8%B5%8B%23) `31.6K 🔥` `+43%`
1. [央妈王安宇粉上了 (Yang Ma Wang Anyu is a fan)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%A6%88%E7%8E%8B%E5%AE%89%E5%AE%87%E7%B2%89%E4%B8%8A%E4%BA%86%23) `31.6K 🔥` `+43%`
1. [樊振东身穿中国红队服 (Fan Zhendong wears Chinese red team uniform)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BA%AB%E7%A9%BF%E4%B8%AD%E5%9B%BD%E7%BA%A2%E9%98%9F%E6%9C%8D%23) `31.6K 🔥` `+43%`
1. [春晚彩排](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%BD%A9%E6%8E%92%23) `31.6K 🔥` `+42%`
1. [辽宁卫视春晚 (Liaoning TV Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `31.6K 🔥` `+43%`
1. [云旗 明年还要一起玩 (Yun Qi, we want to play together next year)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%20%E6%98%8E%E5%B9%B4%E8%BF%98%E8%A6%81%E4%B8%80%E8%B5%B7%E7%8E%A9%23) `31.6K 🔥` `+43%`
1. [伤心swimming 语言成绩 (Sad swimming language scores)](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%20%E8%AF%AD%E8%A8%80%E6%88%90%E7%BB%A9%23) `31.6K 🔥` `+43%`
1. [用砂糖橘制作马年小橘灯 (Use sugar oranges to make small orange lanterns for the Year of the Horse)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%A0%82%E7%B3%96%E6%A9%98%E5%88%B6%E4%BD%9C%E9%A9%AC%E5%B9%B4%E5%B0%8F%E6%A9%98%E7%81%AF%23) `31.6K 🔥` `+43%`
1. [王菲春晚歌曲原唱作品曾亮相歌手 (Faye Wong's Spring Festival Gala song original works have appeared on the singer's list)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%98%A5%E6%99%9A%E6%AD%8C%E6%9B%B2%E5%8E%9F%E5%94%B1%E4%BD%9C%E5%93%81%E6%9B%BE%E4%BA%AE%E7%9B%B8%E6%AD%8C%E6%89%8B%23) `31.6K 🔥` `+43%`
1. [猫爪美甲 (Cat claw manicure)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%88%AA%E7%BE%8E%E7%94%B2%23) `31.6K 🔥` `+43%`
1. [隋文静韩聪晋级双人自由滑 (Sui Wenjing and Han Cong advance to pairs free skate)](https://s.weibo.com/weibo?q=%23%E9%9A%8B%E6%96%87%E9%9D%99%E9%9F%A9%E8%81%AA%E6%99%8B%E7%BA%A7%E5%8F%8C%E4%BA%BA%E8%87%AA%E7%94%B1%E6%BB%91%23) `31.6K 🔥` `+43%`
1. [冬奥速度滑冰女子500米 (Winter Olympics speed skating women's 500 meters)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E9%80%9F%E5%BA%A6%E6%BB%91%E5%86%B0%E5%A5%B3%E5%AD%90500%E7%B1%B3%23) `31.6K 🔥` `+43%`
1. [郝熠然隔空投送瞬间 (Hao Yiran delivers the moment through the air)](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E9%9A%94%E7%A9%BA%E6%8A%95%E9%80%81%E7%9E%AC%E9%97%B4%23) `31.6K 🔥` `+43%`
1. [王菲只需轻轻出手 (Faye Wong just needs to take action gently)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%8F%AA%E9%9C%80%E8%BD%BB%E8%BD%BB%E5%87%BA%E6%89%8B%23) `31.6K 🔥` `+43%`
1. [荷兰包揽速滑女子500米金银牌 (Netherlands wins women's 500m speed skating gold and silver medals)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%8C%85%E6%8F%BD%E9%80%9F%E6%BB%91%E5%A5%B3%E5%AD%90500%E7%B1%B3%E9%87%91%E9%93%B6%E7%89%8C%23) `31.6K 🔥` `+84%`
1. [惊蛰无声芭莎电影新春封面](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E8%8A%AD%E8%8E%8E%E7%94%B5%E5%BD%B1%E6%96%B0%E6%98%A5%E5%B0%81%E9%9D%A2%23) `31.6K 🔥` `+43%`
1. [生命树后劲真大 (The tree of life has great stamina)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%90%8E%E5%8A%B2%E7%9C%9F%E5%A4%A7%23) `31.6K 🔥` `+43%`
1. [中国冰壶女队vs美国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E5%A5%B3%E9%98%9Fvs%E7%BE%8E%E5%9B%BD%23) `31.6K 🔥` `+43%`
1. [宋小宝小品 笑点](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B0%8F%E5%AE%9D%E5%B0%8F%E5%93%81%20%E7%AC%91%E7%82%B9%23) `54.3K 🔥`
1. [2026红包分组 (2026 red envelope grouping)](https://s.weibo.com/weibo?q=%232026%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `32.7K 🔥`
1. [追觅吹风机耀动中国年 (Looking for hair dryers to celebrate the Chinese New Year)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E5%90%B9%E9%A3%8E%E6%9C%BA%E8%80%80%E5%8A%A8%E4%B8%AD%E5%9B%BD%E5%B9%B4%23) `70.5K 🔥` `-69%`

Updated at 2026-02-16 07:13:12

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
