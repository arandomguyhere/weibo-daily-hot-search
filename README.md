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

1. [浪姐四公 披哥帮唱 (Lang Jie Si Gong and Pi Ge help sing)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%20%E6%8A%AB%E5%93%A5%E5%B8%AE%E5%94%B1%23) `1.7M 🔥` `NEW`
1. [印度被烤糊了](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E8%A2%AB%E7%83%A4%E7%B3%8A%E4%BA%86%23) `904.6K 🔥` `NEW`
1. [多地和降雨赛跑全力保粮](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%92%8C%E9%99%8D%E9%9B%A8%E8%B5%9B%E8%B7%91%E5%85%A8%E5%8A%9B%E4%BF%9D%E7%B2%AE%23) `860.1K 🔥` `NEW`
1. [现发4嘉宾阵容](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%8F%914%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `822.2K 🔥` `NEW`
1. [人真的需要不断流动的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9C%9F%E7%9A%84%E9%9C%80%E8%A6%81%E4%B8%8D%E6%96%AD%E6%B5%81%E5%8A%A8%E7%9A%84%23) `783.5K 🔥` `NEW`
1. [CBA总决赛](https://s.weibo.com/weibo?q=%23CBA%E6%80%BB%E5%86%B3%E8%B5%9B%23) `412.2K 🔥` `NEW`
1. [乙酰氨基酚和布洛芬的差异](https://s.weibo.com/weibo?q=%23%E4%B9%99%E9%85%B0%E6%B0%A8%E5%9F%BA%E9%85%9A%E5%92%8C%E5%B8%83%E6%B4%9B%E8%8A%AC%E7%9A%84%E5%B7%AE%E5%BC%82%23) `382.7K 🔥` `NEW`
1. [车行老板说油车掉价20万都没人买](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E8%A1%8C%E8%80%81%E6%9D%BF%E8%AF%B4%E6%B2%B9%E8%BD%A6%E6%8E%89%E4%BB%B720%E4%B8%87%E9%83%BD%E6%B2%A1%E4%BA%BA%E4%B9%B0%23) `382.2K 🔥` `NEW`
1. [从严惩处留神峪煤矿爆炸责任人](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E4%B8%A5%E6%83%A9%E5%A4%84%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E8%B4%A3%E4%BB%BB%E4%BA%BA%23) `379.7K 🔥` `NEW`
1. [王鹤棣父亲回应店铺遭多条差评](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%BA%97%E9%93%BA%E9%81%AD%E5%A4%9A%E6%9D%A1%E5%B7%AE%E8%AF%84%23) `378.4K 🔥` `NEW`
1. [于正也不舒服 (Yu Zheng also feels uncomfortable)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%23) `375.6K 🔥` `NEW`
1. [刘耀文故意晒左脸耳洞](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%95%85%E6%84%8F%E6%99%92%E5%B7%A6%E8%84%B8%E8%80%B3%E6%B4%9E%23) `373.5K 🔥` `NEW`
1. [白玉兰的口碑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E7%9A%84%E5%8F%A3%E7%A2%91%23) `370.3K 🔥` `NEW`
1. [刘国正采访](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%AD%A3%E9%87%87%E8%AE%BF%23) `369.8K 🔥` `NEW`
1. [男子吃完面加6勺辣椒酱被店主曝光](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E5%AE%8C%E9%9D%A2%E5%8A%A06%E5%8B%BA%E8%BE%A3%E6%A4%92%E9%85%B1%E8%A2%AB%E5%BA%97%E4%B8%BB%E6%9B%9D%E5%85%89%23) `364.2K 🔥` `NEW`
1. [直到警察联系她才知遭性侵](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E5%88%B0%E8%AD%A6%E5%AF%9F%E8%81%94%E7%B3%BB%E5%A5%B9%E6%89%8D%E7%9F%A5%E9%81%AD%E6%80%A7%E4%BE%B5%23) `361.3K 🔥` `NEW`
1. [欧豪粉丝五连质问工作室](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%B1%AA%E7%B2%89%E4%B8%9D%E4%BA%94%E8%BF%9E%E8%B4%A8%E9%97%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `360.2K 🔥` `NEW`
1. [母亲虐待女儿并售卖其裸照获刑七年](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%99%90%E5%BE%85%E5%A5%B3%E5%84%BF%E5%B9%B6%E5%94%AE%E5%8D%96%E5%85%B6%E8%A3%B8%E7%85%A7%E8%8E%B7%E5%88%91%E4%B8%83%E5%B9%B4%23) `358.0K 🔥` `NEW`
1. [国外亿万富翁公开女友妇科检查结果](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E4%BA%BF%E4%B8%87%E5%AF%8C%E7%BF%81%E5%85%AC%E5%BC%80%E5%A5%B3%E5%8F%8B%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `355.6K 🔥` `NEW`
1. [偶遇李到晛林智妍逛街](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E6%9D%8E%E5%88%B0%E6%99%9B%E6%9E%97%E6%99%BA%E5%A6%8D%E9%80%9B%E8%A1%97%23) `351.7K 🔥` `NEW`
1. [华为押注新工艺追赶台积电 (Huawei bets on new processes to catch up with TSMC)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%8A%BC%E6%B3%A8%E6%96%B0%E5%B7%A5%E8%89%BA%E8%BF%BD%E8%B5%B6%E5%8F%B0%E7%A7%AF%E7%94%B5%23) `347.1K 🔥` `NEW`
1. [曾沛慈时尚首封](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%97%B6%E5%B0%9A%E9%A6%96%E5%B0%81%23) `346.5K 🔥` `NEW`
1. [9岁姐姐带7岁弟弟抢盖10000斤大蒜](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A7%90%E5%A7%90%E5%B8%A67%E5%B2%81%E5%BC%9F%E5%BC%9F%E6%8A%A2%E7%9B%9610000%E6%96%A4%E5%A4%A7%E8%92%9C%23) `344.0K 🔥` `NEW`
1. [小米一季度净利润60.72亿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%80%E5%AD%A3%E5%BA%A6%E5%87%80%E5%88%A9%E6%B6%A660.72%E4%BA%BF%23) `343.1K 🔥` `NEW`
1. [为什么浪姐女导演吴梦知要离职](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B5%AA%E5%A7%90%E5%A5%B3%E5%AF%BC%E6%BC%94%E5%90%B4%E6%A2%A6%E7%9F%A5%E8%A6%81%E7%A6%BB%E8%81%8C%23) `341.1K 🔥` `NEW`
1. [时代峰峻回应张子墨被指抄袭](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%AD%90%E5%A2%A8%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%23) `339.2K 🔥` `NEW`
1. [吴磊高温骑行被晒分层了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E9%AB%98%E6%B8%A9%E9%AA%91%E8%A1%8C%E8%A2%AB%E6%99%92%E5%88%86%E5%B1%82%E4%BA%86%23) `334.2K 🔥` `NEW`
1. [韩剧使用中国藩属礼制主创全员道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%89%A7%E4%BD%BF%E7%94%A8%E4%B8%AD%E5%9B%BD%E8%97%A9%E5%B1%9E%E7%A4%BC%E5%88%B6%E4%B8%BB%E5%88%9B%E5%85%A8%E5%91%98%E9%81%93%E6%AD%89%23) `333.2K 🔥` `NEW`
1. [潘宥诚力挺白鹿](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%AE%A5%E8%AF%9A%E5%8A%9B%E6%8C%BA%E7%99%BD%E9%B9%BF%23) `329.0K 🔥` `NEW`
1. [妻子反常男子排查家中发现藏女邻居](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8F%8D%E5%B8%B8%E7%94%B7%E5%AD%90%E6%8E%92%E6%9F%A5%E5%AE%B6%E4%B8%AD%E5%8F%91%E7%8E%B0%E8%97%8F%E5%A5%B3%E9%82%BB%E5%B1%85%23) `325.2K 🔥` `NEW`
1. [忆秦娥突然懂李慧娘了 (Yi Qin'e suddenly understood Li Huiniang)](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E7%AA%81%E7%84%B6%E6%87%82%E6%9D%8E%E6%85%A7%E5%A8%98%E4%BA%86%23) `324.1K 🔥` `NEW`
1. [徐明浩cos佐罗](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%98%8E%E6%B5%A9cos%E4%BD%90%E7%BD%97%23) `322.4K 🔥` `NEW`
1. [洛夫顿受伤](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%A4%AB%E9%A1%BF%E5%8F%97%E4%BC%A4%23) `321.5K 🔥` `NEW`
1. [关晓彤工作室视频是李昀锐拍的](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%A7%86%E9%A2%91%E6%98%AF%E6%9D%8E%E6%98%80%E9%94%90%E6%8B%8D%E7%9A%84%23) `318.5K 🔥` `NEW`
1. [68岁男子出轨小35岁女子并转账4800万](https://s.weibo.com/weibo?q=%2368%E5%B2%81%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E5%B0%8F35%E5%B2%81%E5%A5%B3%E5%AD%90%E5%B9%B6%E8%BD%AC%E8%B4%A64800%E4%B8%87%23) `317.6K 🔥` `NEW`
1. [黄圣依9岁儿子正面照](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D9%E5%B2%81%E5%84%BF%E5%AD%90%E6%AD%A3%E9%9D%A2%E7%85%A7%23) `315.7K 🔥` `NEW`
1. [小米将发布新一代OS](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%B0%86%E5%8F%91%E5%B8%83%E6%96%B0%E4%B8%80%E4%BB%A3OS%23) `313.2K 🔥` `NEW`
1. [雷军回应小米一季度财报](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E4%B8%80%E5%AD%A3%E5%BA%A6%E8%B4%A2%E6%8A%A5%23) `309.8K 🔥` `NEW`
1. [利剑玫瑰为何无缘白玉兰提名](https://s.weibo.com/weibo?q=%23%E5%88%A9%E5%89%91%E7%8E%AB%E7%91%B0%E4%B8%BA%E4%BD%95%E6%97%A0%E7%BC%98%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%23) `308.1K 🔥` `NEW`
1. [王鹤棣不舒服文学已升级](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E8%88%92%E6%9C%8D%E6%96%87%E5%AD%A6%E5%B7%B2%E5%8D%87%E7%BA%A7%23) `366.9K 🔥`
1. [温岚在ICU抢救了10天 (Wen Lan spent 10 days in ICU)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%E5%9C%A8ICU%E6%8A%A2%E6%95%91%E4%BA%8610%E5%A4%A9%23) `356.7K 🔥`
1. [王星越说有女朋友了拒加微信 (The more Wang Xing said he had a girlfriend, the more he refused to join WeChat)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E8%AF%B4%E6%9C%89%E5%A5%B3%E6%9C%8B%E5%8F%8B%E4%BA%86%E6%8B%92%E5%8A%A0%E5%BE%AE%E4%BF%A1%23) `353.2K 🔥`
1. [大爷地铁上疑偷拍拒删视频遭掌掴](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%9C%B0%E9%93%81%E4%B8%8A%E7%96%91%E5%81%B7%E6%8B%8D%E6%8B%92%E5%88%A0%E8%A7%86%E9%A2%91%E9%81%AD%E6%8E%8C%E6%8E%B4%23) `350.1K 🔥`
1. [沈月涨粉超55万 (Shen Yue’s followers increased by over 550,000)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%B6%A8%E7%B2%89%E8%B6%8555%E4%B8%87%23) `327.2K 🔥`
1. [鸿蒙智行正式起诉自媒体圈内人](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E6%AD%A3%E5%BC%8F%E8%B5%B7%E8%AF%89%E8%87%AA%E5%AA%92%E4%BD%93%E5%9C%88%E5%86%85%E4%BA%BA%23) `311.3K 🔥`
1. [女干部展示不到100元的耳环 (Female cadre shows off earrings costing less than 100 yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%B9%B2%E9%83%A8%E5%B1%95%E7%A4%BA%E4%B8%8D%E5%88%B0100%E5%85%83%E7%9A%84%E8%80%B3%E7%8E%AF%23) `374.4K 🔥` `-86%`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `365.2K 🔥` `-76%`
1. [嗑cp是一个很私人的事儿](https://s.weibo.com/weibo?q=%23%E5%97%91cp%E6%98%AF%E4%B8%80%E4%B8%AA%E5%BE%88%E7%A7%81%E4%BA%BA%E7%9A%84%E4%BA%8B%E5%84%BF%23) `336.5K 🔥` `-55%`
1. [肯德基热干面](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E7%83%AD%E5%B9%B2%E9%9D%A2%23) `331.2K 🔥` `-48%`

Updated at 2026-05-26 21:36:08

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
