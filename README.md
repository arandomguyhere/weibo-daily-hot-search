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

1. [春天里的中国向新而行 (China in spring moves towards newness)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%A4%A9%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%90%91%E6%96%B0%E8%80%8C%E8%A1%8C%23) `579.5K 🔥` `NEW`
1. [建议允许公积金直接抵首付还房贷](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B8%E5%85%AC%E7%A7%AF%E9%87%91%E7%9B%B4%E6%8E%A5%E6%8A%B5%E9%A6%96%E4%BB%98%E8%BF%98%E6%88%BF%E8%B4%B7%23) `554.3K 🔥` `NEW`
1. [世界从中国两会看到新机遇](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BB%8E%E4%B8%AD%E5%9B%BD%E4%B8%A4%E4%BC%9A%E7%9C%8B%E5%88%B0%E6%96%B0%E6%9C%BA%E9%81%87%23) `505.8K 🔥` `NEW`
1. [AG战胜DYG](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CDYG%23) `272.8K 🔥` `NEW`
1. [岳雨婷 司宫令](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%20%E5%8F%B8%E5%AE%AB%E4%BB%A4%23) `210.9K 🔥` `NEW`
1. [男子被遗忘核磁共振机涉事医生发声](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E9%81%97%E5%BF%98%E6%A0%B8%E7%A3%81%E5%85%B1%E6%8C%AF%E6%9C%BA%E6%B6%89%E4%BA%8B%E5%8C%BB%E7%94%9F%E5%8F%91%E5%A3%B0%23) `197.2K 🔥` `NEW`
1. [陈赫录综艺全身紫外线过敏](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%BD%95%E7%BB%BC%E8%89%BA%E5%85%A8%E8%BA%AB%E7%B4%AB%E5%A4%96%E7%BA%BF%E8%BF%87%E6%95%8F%23) `183.1K 🔥` `NEW`
1. [肾病恶化身体会发3次信号](https://s.weibo.com/weibo?q=%23%E8%82%BE%E7%97%85%E6%81%B6%E5%8C%96%E8%BA%AB%E4%BD%93%E4%BC%9A%E5%8F%913%E6%AC%A1%E4%BF%A1%E5%8F%B7%23) `183.0K 🔥` `NEW`
1. [霍尔木兹海峡将继续关闭](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%B0%86%E7%BB%A7%E7%BB%AD%E5%85%B3%E9%97%AD%23) `182.8K 🔥` `NEW`
1. [于谦也想要孙颖莎的小卡](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E8%B0%A6%E4%B9%9F%E6%83%B3%E8%A6%81%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E5%B0%8F%E5%8D%A1%23) `182.6K 🔥` `NEW`
1. [中方回应是否有中国民用商船遭袭 (China responds to whether any Chinese civilian merchant ships were attacked)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E6%9C%89%E4%B8%AD%E5%9B%BD%E6%B0%91%E7%94%A8%E5%95%86%E8%88%B9%E9%81%AD%E8%A2%AD%23) `182.5K 🔥` `NEW`
1. [Viper被椅子单杀](https://s.weibo.com/weibo?q=%23Viper%E8%A2%AB%E6%A4%85%E5%AD%90%E5%8D%95%E6%9D%80%23) `182.4K 🔥` `NEW`
1. [逐玉预告](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%A2%84%E5%91%8A%23) `182.2K 🔥` `NEW`
1. [中国显示技术领先国外一年多](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%98%BE%E7%A4%BA%E6%8A%80%E6%9C%AF%E9%A2%86%E5%85%88%E5%9B%BD%E5%A4%96%E4%B8%80%E5%B9%B4%E5%A4%9A%23) `181.9K 🔥` `NEW`
1. [公积金制度改革加速中](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E5%88%B6%E5%BA%A6%E6%94%B9%E9%9D%A9%E5%8A%A0%E9%80%9F%E4%B8%AD%23) `181.8K 🔥` `NEW`
1. [狼队 KSG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%20KSG%23) `181.7K 🔥` `NEW`
1. [美以无人机在伊朗接连折戟](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%9C%A8%E4%BC%8A%E6%9C%97%E6%8E%A5%E8%BF%9E%E6%8A%98%E6%88%9F%23) `181.6K 🔥` `NEW`
1. [种地吧4](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A74%23) `576.6K 🔥` `+199%`
1. [伊朗最高领袖公开声明 (Public statement by Iran's supreme leader)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%85%AC%E5%BC%80%E5%A3%B0%E6%98%8E%23) `540.8K 🔥` `+181%`
1. [李维嘉或将你好星期六常驻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E6%88%96%E5%B0%86%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E5%B8%B8%E9%A9%BB%23) `471.4K 🔥` `+140%`
1. [乃万演唱会取消](https://s.weibo.com/weibo?q=%23%E4%B9%83%E4%B8%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `293.3K 🔥` `+30%`
1. [中国女篮不敌比利时女篮 (Chinese women's basketball team loses to Belgian women's basketball team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E4%B8%8D%E6%95%8C%E6%AF%94%E5%88%A9%E6%97%B6%E5%A5%B3%E7%AF%AE%23) `240.4K 🔥` `+25%`
1. [专家建议放宽公积金提取限制 (Experts recommend relaxing provident fund withdrawal restrictions)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E6%94%BE%E5%AE%BD%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%E9%99%90%E5%88%B6%23) `1.0M 🔥`
1. [中方回应特朗普计划访华 (China responds to Trump's planned visit to China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%A1%E5%88%92%E8%AE%BF%E5%8D%8E%23) `712.7K 🔥`
1. [揭秘周冠宇3D新战术 (Revealing Zhou Guanyu’s new 3D tactics)](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E7%A7%98%E5%91%A8%E5%86%A0%E5%AE%873D%E6%96%B0%E6%88%98%E6%9C%AF%23) `532.8K 🔥`
1. [中国女篮vs比利时女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E6%AF%94%E5%88%A9%E6%97%B6%E5%A5%B3%E7%AF%AE%23) `528.2K 🔥`
1. [生态环境部部长现场拿出一枚芯片](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%80%81%E7%8E%AF%E5%A2%83%E9%83%A8%E9%83%A8%E9%95%BF%E7%8E%B0%E5%9C%BA%E6%8B%BF%E5%87%BA%E4%B8%80%E6%9E%9A%E8%8A%AF%E7%89%87%23) `520.4K 🔥`
1. [两会期间单位食堂少了个碗](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%E6%9C%9F%E9%97%B4%E5%8D%95%E4%BD%8D%E9%A3%9F%E5%A0%82%E5%B0%91%E4%BA%86%E4%B8%AA%E7%A2%97%23) `490.9K 🔥`
1. [中国109项硬核项目来了 (China’s 109 hard-core projects are here)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD109%E9%A1%B9%E7%A1%AC%E6%A0%B8%E9%A1%B9%E7%9B%AE%E6%9D%A5%E4%BA%86%23) `479.6K 🔥`
1. [天塌了山姆的三文鱼原来不能生吃](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A1%8C%E4%BA%86%E5%B1%B1%E5%A7%86%E7%9A%84%E4%B8%89%E6%96%87%E9%B1%BC%E5%8E%9F%E6%9D%A5%E4%B8%8D%E8%83%BD%E7%94%9F%E5%90%83%23) `235.3K 🔥`
1. [微信3大新功能 (3 new features of WeChat)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A13%E5%A4%A7%E6%96%B0%E5%8A%9F%E8%83%BD%23) `207.0K 🔥`
1. [20岁小伙泡沫尿1年多不重视致透析](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%B0%8F%E4%BC%99%E6%B3%A1%E6%B2%AB%E5%B0%BF1%E5%B9%B4%E5%A4%9A%E4%B8%8D%E9%87%8D%E8%A7%86%E8%87%B4%E9%80%8F%E6%9E%90%23) `206.7K 🔥`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `206.7K 🔥`
1. [谢征强吻樊长玉](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E5%BC%BA%E5%90%BB%E6%A8%8A%E9%95%BF%E7%8E%89%23) `201.4K 🔥`
1. [衣服洗不干净的原因找到了](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E6%B4%97%E4%B8%8D%E5%B9%B2%E5%87%80%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `184.3K 🔥`
1. [男子误吞12厘米筷子忍了8年才取出 (Man accidentally swallowed 12cm chopsticks and endured it for 8 years before taking them out)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E5%90%9E12%E5%8E%98%E7%B1%B3%E7%AD%B7%E5%AD%90%E5%BF%8D%E4%BA%868%E5%B9%B4%E6%89%8D%E5%8F%96%E5%87%BA%23) `183.2K 🔥`
1. [飞机上到处求摸摸的社交悍匪小狗](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E4%B8%8A%E5%88%B0%E5%A4%84%E6%B1%82%E6%91%B8%E6%91%B8%E7%9A%84%E7%A4%BE%E4%BA%A4%E6%82%8D%E5%8C%AA%E5%B0%8F%E7%8B%97%23) `183.0K 🔥`
1. [白鹿把孩子塞到王鹤棣怀里 (Bai Lu stuffed the child into Wang Hedi's arms)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%8A%E5%AD%A9%E5%AD%90%E5%A1%9E%E5%88%B0%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%80%80%E9%87%8C%23) `182.9K 🔥`
1. [逐玉神级镜头加一](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%A5%9E%E7%BA%A7%E9%95%9C%E5%A4%B4%E5%8A%A0%E4%B8%80%23) `182.7K 🔥`
1. [王楚钦vs弗朗西斯卡](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%BC%97%E6%9C%97%E8%A5%BF%E6%96%AF%E5%8D%A1%23) `182.2K 🔥`
1. [美国海军已逃离伊朗周边海域](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B5%B7%E5%86%9B%E5%B7%B2%E9%80%83%E7%A6%BB%E4%BC%8A%E6%9C%97%E5%91%A8%E8%BE%B9%E6%B5%B7%E5%9F%9F%23) `182.1K 🔥`
1. [大学生4个馒头卖了30000元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F4%E4%B8%AA%E9%A6%92%E5%A4%B4%E5%8D%96%E4%BA%8630000%E5%85%83%23) `182.0K 🔥`
1. [鞠婧祎彝族服饰造型](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BD%9D%E6%97%8F%E6%9C%8D%E9%A5%B0%E9%80%A0%E5%9E%8B%23) `181.9K 🔥`
1. [西安不倒翁小姐姐宣布离职 (The roly-poly girl from Xi'an announced her resignation)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8D%E5%80%92%E7%BF%81%E5%B0%8F%E5%A7%90%E5%A7%90%E5%AE%A3%E5%B8%83%E7%A6%BB%E8%81%8C%23) `302.6K 🔥` `-21%`
1. [我国人均有100棵树](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BA%BA%E5%9D%87%E6%9C%89100%E6%A3%B5%E6%A0%91%23) `207.3K 🔥` `-59%`
1. [女子腰臀部疼了8年终于找到元凶](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%85%B0%E8%87%80%E9%83%A8%E7%96%BC%E4%BA%868%E5%B9%B4%E7%BB%88%E4%BA%8E%E6%89%BE%E5%88%B0%E5%85%83%E5%87%B6%23) `206.9K 🔥` `-56%`
1. [AG对战DYG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98DYG%23) `206.4K 🔥` `-56%`
1. [伊朗空军指挥官遭袭身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A9%BA%E5%86%9B%E6%8C%87%E6%8C%A5%E5%AE%98%E9%81%AD%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `183.2K 🔥` `-65%`
1. [十四届全国人大四次会议闭幕会 (Closing Session of the Fourth Session of the 14th National People's Congress)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E9%97%AD%E5%B9%95%E4%BC%9A%23) `182.6K 🔥` `-66%`
1. [台湾地震 (Taiwan earthquake)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%9C%B0%E9%9C%87%23) `181.6K 🔥` `-40%`

Updated at 2026-03-12 22:35:10

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
