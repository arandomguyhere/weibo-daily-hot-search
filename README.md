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

1. [詹姆斯三分 (James three-pointer)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%89%E5%88%86%23) `1.8M 🔥` `NEW`
1. [韩国新恋综太炸裂了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%96%B0%E6%81%8B%E7%BB%BC%E5%A4%AA%E7%82%B8%E8%A3%82%E4%BA%86%23) `1.4M 🔥` `NEW`
1. [好客山东燃情淄博](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%AE%A2%E5%B1%B1%E4%B8%9C%E7%87%83%E6%83%85%E6%B7%84%E5%8D%9A%23) `920.5K 🔥` `NEW`
1. [浪姐 镜头霸凌](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E9%95%9C%E5%A4%B4%E9%9C%B8%E5%87%8C%23) `882.3K 🔥` `NEW`
1. [何宣林道歉](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E9%81%93%E6%AD%89%23) `832.1K 🔥` `NEW`
1. [湖人vs火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E7%81%AB%E7%AE%AD%23) `711.0K 🔥` `NEW`
1. [超话次元庆生季](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%AF%9D%E6%AC%A1%E5%85%83%E5%BA%86%E7%94%9F%E5%AD%A3%23) `648.8K 🔥` `NEW`
1. [恋与深空起诉派克特胜诉](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E8%B5%B7%E8%AF%89%E6%B4%BE%E5%85%8B%E7%89%B9%E8%83%9C%E8%AF%89%23) `566.5K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `377.7K 🔥` `NEW`
1. [日本民众坚决反对解禁武器出口](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E5%9D%9A%E5%86%B3%E5%8F%8D%E5%AF%B9%E8%A7%A3%E7%A6%81%E6%AD%A6%E5%99%A8%E5%87%BA%E5%8F%A3%23) `377.5K 🔥` `NEW`
1. [she合体爬山了 (She climbed the mountain together)](https://s.weibo.com/weibo?q=%23she%E5%90%88%E4%BD%93%E7%88%AC%E5%B1%B1%E4%BA%86%23) `374.1K 🔥` `NEW`
1. [陶昕然骄傲拒撕节目组](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E9%AA%84%E5%82%B2%E6%8B%92%E6%92%95%E8%8A%82%E7%9B%AE%E7%BB%84%23) `369.2K 🔥` `NEW`
1. [老人被83岁男室友打到大小便失禁](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%A2%AB83%E5%B2%81%E7%94%B7%E5%AE%A4%E5%8F%8B%E6%89%93%E5%88%B0%E5%A4%A7%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%23) `367.8K 🔥` `NEW`
1. [佳偶天成开播](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%BC%80%E6%92%AD%23) `363.9K 🔥` `NEW`
1. [东风奕派携华为乾崑年内上新3车](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E5%A5%95%E6%B4%BE%E6%90%BA%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%B9%B4%E5%86%85%E4%B8%8A%E6%96%B03%E8%BD%A6%23) `360.5K 🔥` `NEW`
1. [霍思燕的蒙古獒又夺冠了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E7%9A%84%E8%92%99%E5%8F%A4%E7%8D%92%E5%8F%88%E5%A4%BA%E5%86%A0%E4%BA%86%23) `357.5K 🔥` `NEW`
1. [幸运咖十万免单请你喝](https://s.weibo.com/weibo?q=%23%E5%B9%B8%E8%BF%90%E5%92%96%E5%8D%81%E4%B8%87%E5%85%8D%E5%8D%95%E8%AF%B7%E4%BD%A0%E5%96%9D%23) `354.9K 🔥` `NEW`
1. [唐艺昕离开李小冉后成了李小冉](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E7%A6%BB%E5%BC%80%E6%9D%8E%E5%B0%8F%E5%86%89%E5%90%8E%E6%88%90%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%23) `351.8K 🔥` `NEW`
1. [运动会上机器人突然抱住女生](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E4%BC%9A%E4%B8%8A%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%AA%81%E7%84%B6%E6%8A%B1%E4%BD%8F%E5%A5%B3%E7%94%9F%23) `351.5K 🔥` `NEW`
1. [詹姆斯三分绝平火箭](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%89%E5%88%86%E7%BB%9D%E5%B9%B3%E7%81%AB%E7%AE%AD%23) `346.1K 🔥` `NEW`
1. [网友称禁止吸烟标语旁免费发打火机 (Netizens said free lighters were given out next to the no-smoking signs)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E7%A6%81%E6%AD%A2%E5%90%B8%E7%83%9F%E6%A0%87%E8%AF%AD%E6%97%81%E5%85%8D%E8%B4%B9%E5%8F%91%E6%89%93%E7%81%AB%E6%9C%BA%23) `333.8K 🔥` `NEW`
1. [央视频发了张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E9%A2%91%E5%8F%91%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `315.7K 🔥` `NEW`
1. [希林娜依高说不怪唐艺昕](https://s.weibo.com/weibo?q=%23%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E8%AF%B4%E4%B8%8D%E6%80%AA%E5%94%90%E8%89%BA%E6%98%95%23) `300.6K 🔥` `NEW`
1. [孔刘金高银李栋旭聚餐](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%88%98%E9%87%91%E9%AB%98%E9%93%B6%E6%9D%8E%E6%A0%8B%E6%97%AD%E8%81%9A%E9%A4%90%23) `267.2K 🔥` `NEW`
1. [美国为何害怕中国大蒜](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%BA%E4%BD%95%E5%AE%B3%E6%80%95%E4%B8%AD%E5%9B%BD%E5%A4%A7%E8%92%9C%23) `265.2K 🔥` `NEW`
1. [詹姆斯一攻一防自我救赎](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%80%E6%94%BB%E4%B8%80%E9%98%B2%E8%87%AA%E6%88%91%E6%95%91%E8%B5%8E%23) `265.2K 🔥` `NEW`
1. [第一次见外国人误闯天家](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A4%96%E5%9B%BD%E4%BA%BA%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `265.1K 🔥` `NEW`
1. [国民党民众党联手弹劾赖清德](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E6%B0%91%E5%85%9A%E6%B0%91%E4%BC%97%E5%85%9A%E8%81%94%E6%89%8B%E5%BC%B9%E5%8A%BE%E8%B5%96%E6%B8%85%E5%BE%B7%23) `261.2K 🔥` `NEW`
1. [男生戴假发潜入女寝厕所笑出声被抓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%88%B4%E5%81%87%E5%8F%91%E6%BD%9C%E5%85%A5%E5%A5%B3%E5%AF%9D%E5%8E%95%E6%89%80%E7%AC%91%E5%87%BA%E5%A3%B0%E8%A2%AB%E6%8A%93%23) `257.9K 🔥` `NEW`
1. [日本特高课要还魂了吗](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%89%B9%E9%AB%98%E8%AF%BE%E8%A6%81%E8%BF%98%E9%AD%82%E4%BA%86%E5%90%97%23) `218.2K 🔥` `NEW`
1. [詹姆斯布朗尼空接 (James Browne alley-oop)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%B8%83%E6%9C%97%E5%B0%BC%E7%A9%BA%E6%8E%A5%23) `211.3K 🔥` `NEW`
1. [37岁男子4年虐杀超1500只猫](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E7%94%B7%E5%AD%904%E5%B9%B4%E8%99%90%E6%9D%80%E8%B6%851500%E5%8F%AA%E7%8C%AB%23) `207.3K 🔥` `NEW`
1. [真的建议大家去过简约生活](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E8%BF%87%E7%AE%80%E7%BA%A6%E7%94%9F%E6%B4%BB%23) `203.7K 🔥` `NEW`
1. [伊能静秦昊差点爆肝](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%A7%A6%E6%98%8A%E5%B7%AE%E7%82%B9%E7%88%86%E8%82%9D%23) `195.6K 🔥` `NEW`
1. [张豆豆读书孙杨要求正能量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E8%AF%BB%E4%B9%A6%E5%AD%99%E6%9D%A8%E8%A6%81%E6%B1%82%E6%AD%A3%E8%83%BD%E9%87%8F%23) `178.7K 🔥` `NEW`
1. [男孩咽喉竟有双胞胎兄弟残留](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%92%BD%E5%96%89%E7%AB%9F%E6%9C%89%E5%8F%8C%E8%83%9E%E8%83%8E%E5%85%84%E5%BC%9F%E6%AE%8B%E7%95%99%23) `169.4K 🔥` `NEW`
1. [司机因对向车滥用远光灯撞死行人](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%9B%A0%E5%AF%B9%E5%90%91%E8%BD%A6%E6%BB%A5%E7%94%A8%E8%BF%9C%E5%85%89%E7%81%AF%E6%92%9E%E6%AD%BB%E8%A1%8C%E4%BA%BA%23) `169.2K 🔥` `NEW`
1. [曝iPhone18配12GB内存](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18%E9%85%8D12GB%E5%86%85%E5%AD%98%23) `169.2K 🔥` `NEW`
1. [湖人八村变八神](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%85%AB%E6%9D%91%E5%8F%98%E5%85%AB%E7%A5%9E%23) `163.3K 🔥` `NEW`
1. [华晨宇演唱会为何获批又叫停](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%BA%E4%BD%95%E8%8E%B7%E6%89%B9%E5%8F%88%E5%8F%AB%E5%81%9C%23) `152.0K 🔥` `NEW`
1. [丁俊晖世界级K球 (Ding Junhui world-class K-ball)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E4%B8%96%E7%95%8C%E7%BA%A7K%E7%90%83%23) `149.9K 🔥` `NEW`
1. [A股又有重要调整](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%88%E6%9C%89%E9%87%8D%E8%A6%81%E8%B0%83%E6%95%B4%23) `144.5K 🔥` `NEW`
1. [张凌赫回应了台湾同胞的喜爱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E4%BA%86%E5%8F%B0%E6%B9%BE%E5%90%8C%E8%83%9E%E7%9A%84%E5%96%9C%E7%88%B1%23) `144.0K 🔥` `NEW`
1. [东方甄选回应明明天权离职](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E7%A6%BB%E8%81%8C%23) `143.9K 🔥` `NEW`
1. [东方甄选称尊重明明天权选择](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E7%A7%B0%E5%B0%8A%E9%87%8D%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E9%80%89%E6%8B%A9%23) `143.2K 🔥` `NEW`
1. [DeepSeekV4适配华为升腾](https://s.weibo.com/weibo?q=%23DeepSeekV4%E9%80%82%E9%85%8D%E5%8D%8E%E4%B8%BA%E5%8D%87%E8%85%BE%23) `142.5K 🔥` `NEW`
1. [东方甄选 明明天权离职](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%20%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E7%A6%BB%E8%81%8C%23) `642.6K 🔥` `+71%`
1. [羽协主席张军失联 (Badminton Association Chairman Zhang Jun is missing)](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E5%8D%8F%E4%B8%BB%E5%B8%AD%E5%BC%A0%E5%86%9B%E5%A4%B1%E8%81%94%23) `267.8K 🔥` `+38%`
1. [男子30年前被扣押2859克黄金未返还 (Man’s 2,859 grams of gold seized 30 years ago has not been returned)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9030%E5%B9%B4%E5%89%8D%E8%A2%AB%E6%89%A3%E6%8A%BC2859%E5%85%8B%E9%BB%84%E9%87%91%E6%9C%AA%E8%BF%94%E8%BF%98%23) `223.4K 🔥` `+26%`
1. [浪姐 赢了被淘汰 (Sister Lang won and was eliminated)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%B5%A2%E4%BA%86%E8%A2%AB%E6%B7%98%E6%B1%B0%23) `345.9K 🔥`
1. [陶昕然淘汰](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E6%B7%98%E6%B1%B0%23) `169.2K 🔥` `-61%`

Updated at 2026-04-25 11:31:03

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
