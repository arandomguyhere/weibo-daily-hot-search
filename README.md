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

1. [C罗最后一舞遗憾落幕 (Cristiano Ronaldo’s last dance ended with regret)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%9C%80%E5%90%8E%E4%B8%80%E8%88%9E%E9%81%97%E6%86%BE%E8%90%BD%E5%B9%95%23) `4.6M 🔥` `NEW`
1. [C罗哭了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%93%AD%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [葡萄牙0比1西班牙](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%990%E6%AF%941%E8%A5%BF%E7%8F%AD%E7%89%99%23) `508.3K 🔥` `NEW`
1. [还我佛得角](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%88%91%E4%BD%9B%E5%BE%97%E8%A7%92%23) `437.7K 🔥` `NEW`
1. [葡萄牙淘汰](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E6%B7%98%E6%B1%B0%23) `387.4K 🔥` `NEW`
1. [再见C罗 我的青春结束了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81C%E7%BD%97%20%E6%88%91%E7%9A%84%E9%9D%92%E6%98%A5%E7%BB%93%E6%9D%9F%E4%BA%86%23) `322.2K 🔥` `NEW`
1. [梅里诺绝杀](https://s.weibo.com/weibo?q=%23%E6%A2%85%E9%87%8C%E8%AF%BA%E7%BB%9D%E6%9D%80%23) `164.0K 🔥` `NEW`
1. [门德斯受伤](https://s.weibo.com/weibo?q=%23%E9%97%A8%E5%BE%B7%E6%96%AF%E5%8F%97%E4%BC%A4%23) `153.3K 🔥` `NEW`
1. [电影功夫女足7月11日上映](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B37%E6%9C%8811%E6%97%A5%E4%B8%8A%E6%98%A0%23) `73.6K 🔥` `NEW`
1. [美国队巴洛贡红牌禁赛暂缓执行](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%9F%E5%B7%B4%E6%B4%9B%E8%B4%A1%E7%BA%A2%E7%89%8C%E7%A6%81%E8%B5%9B%E6%9A%82%E7%BC%93%E6%89%A7%E8%A1%8C%23) `62.6K 🔥` `NEW`
1. [暴雨天牢记这些保命知识 (Remember these life-saving tips on rainy days)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A9%E7%89%A2%E8%AE%B0%E8%BF%99%E4%BA%9B%E4%BF%9D%E5%91%BD%E7%9F%A5%E8%AF%86%23) `755.4K 🔥` `+125%`
1. [亚马尔醒醒](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E9%86%92%E9%86%92%23) `411.6K 🔥` `+146%`
1. [LV被指垄断中国古纹样 (LV is accused of monopolizing ancient Chinese patterns)](https://s.weibo.com/weibo?q=%23LV%E8%A2%AB%E6%8C%87%E5%9E%84%E6%96%AD%E4%B8%AD%E5%9B%BD%E5%8F%A4%E7%BA%B9%E6%A0%B7%23) `184.8K 🔥` `+80%`
1. [比利时足协发表声明](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E8%B6%B3%E5%8D%8F%E5%8F%91%E8%A1%A8%E5%A3%B0%E6%98%8E%23) `183.5K 🔥` `+101%`
1. [广西灾情可能进一步扩大](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%81%BE%E6%83%85%E5%8F%AF%E8%83%BD%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%89%A9%E5%A4%A7%23) `175.9K 🔥` `+64%`
1. [广西抗洪 (Guangxi flood fighting)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `168.0K 🔥` `+38%`
1. [梅里诺进球](https://s.weibo.com/weibo?q=%23%E6%A2%85%E9%87%8C%E8%AF%BA%E8%BF%9B%E7%90%83%23) `136.8K 🔥` `+141%`
1. [FIFA称巴洛贡暂缓停赛是参考C罗](https://s.weibo.com/weibo?q=%23FIFA%E7%A7%B0%E5%B7%B4%E6%B4%9B%E8%B4%A1%E6%9A%82%E7%BC%93%E5%81%9C%E8%B5%9B%E6%98%AF%E5%8F%82%E8%80%83C%E7%BD%97%23) `123.8K 🔥` `+29%`
1. [内托洞洞鞋](https://s.weibo.com/weibo?q=%23%E5%86%85%E6%89%98%E6%B4%9E%E6%B4%9E%E9%9E%8B%23) `119.2K 🔥` `+29%`
1. [世界杯 令人心动的offer门将季](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%20%E4%BB%A4%E4%BA%BA%E5%BF%83%E5%8A%A8%E7%9A%84offer%E9%97%A8%E5%B0%86%E5%AD%A3%23) `106.2K 🔥` `+30%`
1. [LV胜诉敲响中国纹样版权保护警钟](https://s.weibo.com/weibo?q=%23LV%E8%83%9C%E8%AF%89%E6%95%B2%E5%93%8D%E4%B8%AD%E5%9B%BD%E7%BA%B9%E6%A0%B7%E7%89%88%E6%9D%83%E4%BF%9D%E6%8A%A4%E8%AD%A6%E9%92%9F%23) `106.2K 🔥` `+34%`
1. [南宁六蓝水库严重险情](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%AE%81%E5%85%AD%E8%93%9D%E6%B0%B4%E5%BA%93%E4%B8%A5%E9%87%8D%E9%99%A9%E6%83%85%23) `104.8K 🔥` `+65%`
1. [没有最好的朋友才是我最舒服的状态 (I am most comfortable without a best friend)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%9C%80%E5%A5%BD%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%89%8D%E6%98%AF%E6%88%91%E6%9C%80%E8%88%92%E6%9C%8D%E7%9A%84%E7%8A%B6%E6%80%81%23) `101.5K 🔥` `+51%`
1. [特朗普插手世界杯红牌](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8F%92%E6%89%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E7%BA%A2%E7%89%8C%23) `95.2K 🔥` `+42%`
1. [41岁C罗对战18岁天才亚马尔](https://s.weibo.com/weibo?q=%2341%E5%B2%81C%E7%BD%97%E5%AF%B9%E6%88%9818%E5%B2%81%E5%A4%A9%E6%89%8D%E4%BA%9A%E9%A9%AC%E5%B0%94%23) `80.0K 🔥` `+41%`
1. [葡萄牙西班牙 情敌对位](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E8%A5%BF%E7%8F%AD%E7%89%99%20%E6%83%85%E6%95%8C%E5%AF%B9%E4%BD%8D%23) `118.6K 🔥`
1. [word删除空白页 义务教育](https://s.weibo.com/weibo?q=%23word%E5%88%A0%E9%99%A4%E7%A9%BA%E7%99%BD%E9%A1%B5%20%E4%B9%89%E5%8A%A1%E6%95%99%E8%82%B2%23) `75.8K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `74.7K 🔥`
1. [广西洪水 超话求助 (Guangxi floods call for help)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%20%E8%B6%85%E8%AF%9D%E6%B1%82%E5%8A%A9%23) `66.7K 🔥`
1. [真正的强大是敢于让别人不舒服](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BC%BA%E5%A4%A7%E6%98%AF%E6%95%A2%E4%BA%8E%E8%AE%A9%E5%88%AB%E4%BA%BA%E4%B8%8D%E8%88%92%E6%9C%8D%23) `63.0K 🔥`
1. [广西贵港城区内涝空中视角](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%E5%9F%8E%E5%8C%BA%E5%86%85%E6%B6%9D%E7%A9%BA%E4%B8%AD%E8%A7%86%E8%A7%92%23) `62.8K 🔥`
1. [菲利克斯换下](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%88%A9%E5%85%8B%E6%96%AF%E6%8D%A2%E4%B8%8B%23) `62.2K 🔥`
1. [香蕉是世界上最善良的水果 (Banana is the kindest fruit in the world)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E6%98%AF%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E5%96%84%E8%89%AF%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `61.9K 🔥`
1. [小猫以为这是主人的猫砂](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%BB%A5%E4%B8%BA%E8%BF%99%E6%98%AF%E4%B8%BB%E4%BA%BA%E7%9A%84%E7%8C%AB%E7%A0%82%23) `61.9K 🔥`
1. [广西洪水 (Guangxi floods)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `61.9K 🔥`
1. [保洁阿姨在厕所吃饭景区连夜回应 (The cleaning lady was eating in the toilet and the scenic spot responded overnight)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E9%98%BF%E5%A7%A8%E5%9C%A8%E5%8E%95%E6%89%80%E5%90%83%E9%A5%AD%E6%99%AF%E5%8C%BA%E8%BF%9E%E5%A4%9C%E5%9B%9E%E5%BA%94%23) `61.9K 🔥`
1. [醪糟加牛奶放一放就可以做成冰酥酪 (Add the fermented glutinous rice grains and milk to make icing cheese)](https://s.weibo.com/weibo?q=%23%E9%86%AA%E7%B3%9F%E5%8A%A0%E7%89%9B%E5%A5%B6%E6%94%BE%E4%B8%80%E6%94%BE%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%81%9A%E6%88%90%E5%86%B0%E9%85%A5%E9%85%AA%23) `61.8K 🔥`
1. [以总理称印度是14亿人口小国](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%80%BB%E7%90%86%E7%A7%B0%E5%8D%B0%E5%BA%A6%E6%98%AF14%E4%BA%BF%E4%BA%BA%E5%8F%A3%E5%B0%8F%E5%9B%BD%23) `61.8K 🔥`
1. [房租才是我生活拮据的罪魁祸首](https://s.weibo.com/weibo?q=%23%E6%88%BF%E7%A7%9F%E6%89%8D%E6%98%AF%E6%88%91%E7%94%9F%E6%B4%BB%E6%8B%AE%E6%8D%AE%E7%9A%84%E7%BD%AA%E9%AD%81%E7%A5%B8%E9%A6%96%23) `61.8K 🔥`
1. [广西内涝求助](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%86%85%E6%B6%9D%E6%B1%82%E5%8A%A9%23) `61.8K 🔥`
1. [广西南宁通报水库灾情](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8D%97%E5%AE%81%E9%80%9A%E6%8A%A5%E6%B0%B4%E5%BA%93%E7%81%BE%E6%83%85%23) `61.8K 🔥`
1. [七七事变89周年](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%83%E4%BA%8B%E5%8F%9889%E5%91%A8%E5%B9%B4%23) `61.8K 🔥`
1. [广西南宁防汛救灾发布会 (Nanning, Guangxi Flood Prevention and Relief Press Conference)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8D%97%E5%AE%81%E9%98%B2%E6%B1%9B%E6%95%91%E7%81%BE%E5%8F%91%E5%B8%83%E4%BC%9A%23) `61.8K 🔥`
1. [虞书欣晒与陈靖可合照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%99%92%E4%B8%8E%E9%99%88%E9%9D%96%E5%8F%AF%E5%90%88%E7%85%A7%23) `61.8K 🔥`
1. [詹姆斯 湖人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%20%E6%B9%96%E4%BA%BA%23) `61.8K 🔥`
1. [C罗预测葡萄牙会获胜 (Ronaldo predicts Portugal win)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%A2%84%E6%B5%8B%E8%91%A1%E8%90%84%E7%89%99%E4%BC%9A%E8%8E%B7%E8%83%9C%23) `61.7K 🔥`
1. [葡萄牙vs西班牙 (Portugal vs Spain)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E8%A5%BF%E7%8F%AD%E7%89%99%23) `362.2K 🔥` `-83%`
1. [西班牙单刀空门不进 (Spain failed to score a single goal)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%8D%95%E5%88%80%E7%A9%BA%E9%97%A8%E4%B8%8D%E8%BF%9B%23) `185.3K 🔥` `-55%`
1. [葡萄牙门将两连扑](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%97%A8%E5%B0%86%E4%B8%A4%E8%BF%9E%E6%89%91%23) `89.1K 🔥` `-26%`
1. [双牙大战 心脏受不了](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E7%89%99%E5%A4%A7%E6%88%98%20%E5%BF%83%E8%84%8F%E5%8F%97%E4%B8%8D%E4%BA%86%23) `74.8K 🔥` `-49%`

Updated at 2026-07-07 06:22:27

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
