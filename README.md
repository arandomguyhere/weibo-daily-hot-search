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

1. [宁德时代宜宾基地回应](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%AE%9C%E5%AE%BE%E5%9F%BA%E5%9C%B0%E5%9B%9E%E5%BA%94%23) `2.1M 🔥` `NEW`
1. [iPhone18系列](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%23) `993.6K 🔥` `NEW`
1. [司美格鲁肽有5大副作用](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E6%9C%895%E5%A4%A7%E5%89%AF%E4%BD%9C%E7%94%A8%23) `655.2K 🔥` `NEW`
1. [人民日报锐评一边高消费一边领低保](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E9%94%90%E8%AF%84%E4%B8%80%E8%BE%B9%E9%AB%98%E6%B6%88%E8%B4%B9%E4%B8%80%E8%BE%B9%E9%A2%86%E4%BD%8E%E4%BF%9D%23) `453.9K 🔥` `NEW`
1. [栾念尚之桃穿得太少了](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E7%A9%BF%E5%BE%97%E5%A4%AA%E5%B0%91%E4%BA%86%23) `400.2K 🔥` `NEW`
1. [桃花姬的芭芭芭比到底是什么歌](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%A7%AC%E7%9A%84%E8%8A%AD%E8%8A%AD%E8%8A%AD%E6%AF%94%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E4%B9%88%E6%AD%8C%23) `400.0K 🔥` `NEW`
1. [西安大雁塔投物女子已被警方找到](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E5%A4%A7%E9%9B%81%E5%A1%94%E6%8A%95%E7%89%A9%E5%A5%B3%E5%AD%90%E5%B7%B2%E8%A2%AB%E8%AD%A6%E6%96%B9%E6%89%BE%E5%88%B0%23) `399.6K 🔥` `NEW`
1. [女孩狂喝椰子水汇报工作时突然晕厥](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%8B%82%E5%96%9D%E6%A4%B0%E5%AD%90%E6%B0%B4%E6%B1%87%E6%8A%A5%E5%B7%A5%E4%BD%9C%E6%97%B6%E7%AA%81%E7%84%B6%E6%99%95%E5%8E%A5%23) `393.1K 🔥` `NEW`
1. [王者万象棋首支职业战队成立](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E4%B8%87%E8%B1%A1%E6%A3%8B%E9%A6%96%E6%94%AF%E8%81%8C%E4%B8%9A%E6%88%98%E9%98%9F%E6%88%90%E7%AB%8B%23) `389.3K 🔥` `NEW`
1. [赖冠霖疑似结婚了](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E7%96%91%E4%BC%BC%E7%BB%93%E5%A9%9A%E4%BA%86%23) `383.6K 🔥` `NEW`
1. [宁德时代](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%23) `378.9K 🔥` `NEW`
1. [刘亦菲删除照片](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%88%A0%E9%99%A4%E7%85%A7%E7%89%87%23) `375.5K 🔥` `NEW`
1. [duo是什么意思](https://s.weibo.com/weibo?q=%23duo%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%23) `372.3K 🔥` `NEW`
1. [尼古拉斯凯奇房塌了](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%8F%A4%E6%8B%89%E6%96%AF%E5%87%AF%E5%A5%87%E6%88%BF%E5%A1%8C%E4%BA%86%23) `370.2K 🔥` `NEW`
1. [美网男单18年无人能卫冕](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E7%94%B7%E5%8D%9518%E5%B9%B4%E6%97%A0%E4%BA%BA%E8%83%BD%E5%8D%AB%E5%86%95%23) `363.8K 🔥` `NEW`
1. [A股市场正在经历一场深刻的风格重塑](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B8%82%E5%9C%BA%E6%AD%A3%E5%9C%A8%E7%BB%8F%E5%8E%86%E4%B8%80%E5%9C%BA%E6%B7%B1%E5%88%BB%E7%9A%84%E9%A3%8E%E6%A0%BC%E9%87%8D%E5%A1%91%23) `360.9K 🔥` `NEW`
1. [栾念尚之桃女儿没有上线](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E5%A5%B3%E5%84%BF%E6%B2%A1%E6%9C%89%E4%B8%8A%E7%BA%BF%23) `358.7K 🔥` `NEW`
1. [女子隧道内爬出副驾从车顶跳下](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9A%A7%E9%81%93%E5%86%85%E7%88%AC%E5%87%BA%E5%89%AF%E9%A9%BE%E4%BB%8E%E8%BD%A6%E9%A1%B6%E8%B7%B3%E4%B8%8B%23) `356.3K 🔥` `NEW`
1. [赖冠霖 转行](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%20%E8%BD%AC%E8%A1%8C%23) `355.3K 🔥` `NEW`
1. [iPhone Duo](https://s.weibo.com/weibo?q=%23iPhone%20Duo%23) `352.4K 🔥` `NEW`
1. [人社局回应星宇HR总监岗位存在](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%A4%BE%E5%B1%80%E5%9B%9E%E5%BA%94%E6%98%9F%E5%AE%87HR%E6%80%BB%E7%9B%91%E5%B2%97%E4%BD%8D%E5%AD%98%E5%9C%A8%23) `349.8K 🔥` `NEW`
1. [鲜花饼 吐痰](https://s.weibo.com/weibo?q=%23%E9%B2%9C%E8%8A%B1%E9%A5%BC%20%E5%90%90%E7%97%B0%23) `348.7K 🔥` `NEW`
1. [陈伟霆何穗一家三口同框](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%BD%95%E7%A9%97%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%8C%E6%A1%86%23) `345.2K 🔥` `NEW`
1. [三十而已被裁掉合照的顾佳](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8D%81%E8%80%8C%E5%B7%B2%E8%A2%AB%E8%A3%81%E6%8E%89%E5%90%88%E7%85%A7%E7%9A%84%E9%A1%BE%E4%BD%B3%23) `342.5K 🔥` `NEW`
1. [湖南黄金涨停](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E9%BB%84%E9%87%91%E6%B6%A8%E5%81%9C%23) `333.3K 🔥` `NEW`
1. [李兰迪何与在古装剧办现代婚礼](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E4%BD%95%E4%B8%8E%E5%9C%A8%E5%8F%A4%E8%A3%85%E5%89%A7%E5%8A%9E%E7%8E%B0%E4%BB%A3%E5%A9%9A%E7%A4%BC%23) `327.8K 🔥` `NEW`
1. [栾念为了要名分不择手段](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E4%B8%BA%E4%BA%86%E8%A6%81%E5%90%8D%E5%88%86%E4%B8%8D%E6%8B%A9%E6%89%8B%E6%AE%B5%23) `327.4K 🔥` `NEW`
1. [Duo 手机iPad二合一](https://s.weibo.com/weibo?q=%23Duo%20%E6%89%8B%E6%9C%BAiPad%E4%BA%8C%E5%90%88%E4%B8%80%23) `327.3K 🔥` `NEW`
1. [姜乘澜回应欠款千万被限高](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E5%9B%9E%E5%BA%94%E6%AC%A0%E6%AC%BE%E5%8D%83%E4%B8%87%E8%A2%AB%E9%99%90%E9%AB%98%23) `321.6K 🔥` `NEW`
1. [上海偶遇IU逛街](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87IU%E9%80%9B%E8%A1%97%23) `321.1K 🔥` `NEW`
1. [小米澎程攻防需求误发](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E6%94%BB%E9%98%B2%E9%9C%80%E6%B1%82%E8%AF%AF%E5%8F%91%23) `309.7K 🔥` `NEW`
1. [邓帅举行婚礼](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%B8%85%E4%B8%BE%E8%A1%8C%E5%A9%9A%E7%A4%BC%23) `291.7K 🔥` `NEW`
1. [Karsa曝Ming聊天记录](https://s.weibo.com/weibo?q=%23Karsa%E6%9B%9DMing%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `260.4K 🔥` `NEW`
1. [杨幂黑色抹胸辣妹](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E9%BB%91%E8%89%B2%E6%8A%B9%E8%83%B8%E8%BE%A3%E5%A6%B9%23) `253.3K 🔥` `NEW`
1. [龚俊的腹肌像拿尺子量出来的](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E7%9A%84%E8%85%B9%E8%82%8C%E5%83%8F%E6%8B%BF%E5%B0%BA%E5%AD%90%E9%87%8F%E5%87%BA%E6%9D%A5%E7%9A%84%23) `180.6K 🔥` `NEW`
1. [栾念对尚之桃一见钟情的原因](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%AF%B9%E5%B0%9A%E4%B9%8B%E6%A1%83%E4%B8%80%E8%A7%81%E9%92%9F%E6%83%85%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `159.5K 🔥` `NEW`
1. [周深还是选了折耳根月饼](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E8%BF%98%E6%98%AF%E9%80%89%E4%BA%86%E6%8A%98%E8%80%B3%E6%A0%B9%E6%9C%88%E9%A5%BC%23) `154.5K 🔥` `NEW`
1. [Images2.5发布 设计师天真的塌了](https://s.weibo.com/weibo?q=%23Images2.5%E5%8F%91%E5%B8%83%20%E8%AE%BE%E8%AE%A1%E5%B8%88%E5%A4%A9%E7%9C%9F%E7%9A%84%E5%A1%8C%E4%BA%86%23) `150.1K 🔥` `NEW`
1. [王晓慧素到假睫毛都没贴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%85%A7%E7%B4%A0%E5%88%B0%E5%81%87%E7%9D%AB%E6%AF%9B%E9%83%BD%E6%B2%A1%E8%B4%B4%23) `149.7K 🔥` `NEW`
1. [美网将诞生新科男单冠军](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E5%B0%86%E8%AF%9E%E7%94%9F%E6%96%B0%E7%A7%91%E7%94%B7%E5%8D%95%E5%86%A0%E5%86%9B%23) `141.1K 🔥` `NEW`
1. [上海大爷也认识IU](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%A7%E7%88%B7%E4%B9%9F%E8%AE%A4%E8%AF%86IU%23) `135.1K 🔥` `NEW`
1. [孙绍骋被双开](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BB%8D%E9%AA%8B%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `134.6K 🔥` `NEW`
1. [王自如 守住 Fold 命名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%87%AA%E5%A6%82%20%E5%AE%88%E4%BD%8F%20Fold%20%E5%91%BD%E5%90%8D%23) `131.1K 🔥` `NEW`
1. [曝DeepSeek聘中信证券筹备IPO](https://s.weibo.com/weibo?q=%23%E6%9B%9DDeepSeek%E8%81%98%E4%B8%AD%E4%BF%A1%E8%AF%81%E5%88%B8%E7%AD%B9%E5%A4%87IPO%23) `120.9K 🔥` `NEW`
1. [贾哈称樊振东世界最佳](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%93%88%E7%A7%B0%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%96%E7%95%8C%E6%9C%80%E4%BD%B3%23) `118.7K 🔥` `NEW`
1. [小S看到女儿晒辣照的反应](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E7%9C%8B%E5%88%B0%E5%A5%B3%E5%84%BF%E6%99%92%E8%BE%A3%E7%85%A7%E7%9A%84%E5%8F%8D%E5%BA%94%23) `305.7K 🔥` `+46%`
1. [服贸会今日开幕](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E8%B4%B8%E4%BC%9A%E4%BB%8A%E6%97%A5%E5%BC%80%E5%B9%95%23) `771.7K 🔥`
1. [早春晴朗大结局](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%A4%A7%E7%BB%93%E5%B1%80%23) `387.9K 🔥` `-76%`
1. [梅姨在广州摆摊卖切块芒果](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%9C%A8%E5%B9%BF%E5%B7%9E%E6%91%86%E6%91%8A%E5%8D%96%E5%88%87%E5%9D%97%E8%8A%92%E6%9E%9C%23) `343.5K 🔥` `-64%`
1. [女孩去邻居家吃饭惨遭夫妻分尸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8E%BB%E9%82%BB%E5%B1%85%E5%AE%B6%E5%90%83%E9%A5%AD%E6%83%A8%E9%81%AD%E5%A4%AB%E5%A6%BB%E5%88%86%E5%B0%B8%23) `134.2K 🔥` `-83%`

Updated at 2026-09-09 17:55:28

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
