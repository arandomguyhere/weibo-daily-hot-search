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

1. [FIFA更新男足世界排名 (FIFA updates men's football world rankings)](https://s.weibo.com/weibo?q=%23FIFA%E6%9B%B4%E6%96%B0%E7%94%B7%E8%B6%B3%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%23) `874.0K 🔥` `NEW`
1. [一图读懂新一代通信网](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E8%AF%BB%E6%87%82%E6%96%B0%E4%B8%80%E4%BB%A3%E9%80%9A%E4%BF%A1%E7%BD%91%23) `798.0K 🔥` `NEW`
1. [张婧仪最佳赏味期来了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%E6%9D%A5%E4%BA%86%23) `795.1K 🔥` `NEW`
1. [Bin暂别赛场](https://s.weibo.com/weibo?q=%23Bin%E6%9A%82%E5%88%AB%E8%B5%9B%E5%9C%BA%23) `790.4K 🔥` `NEW`
1. [见识到三伏天的厉害了](https://s.weibo.com/weibo?q=%23%E8%A7%81%E8%AF%86%E5%88%B0%E4%B8%89%E4%BC%8F%E5%A4%A9%E7%9A%84%E5%8E%89%E5%AE%B3%E4%BA%86%23) `781.3K 🔥` `NEW`
1. [外卖员被3烈犬吓尖叫主人说不咬人](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E8%A2%AB3%E7%83%88%E7%8A%AC%E5%90%93%E5%B0%96%E5%8F%AB%E4%B8%BB%E4%BA%BA%E8%AF%B4%E4%B8%8D%E5%92%AC%E4%BA%BA%23) `754.4K 🔥` `NEW`
1. [BLG新上单](https://s.weibo.com/weibo?q=%23BLG%E6%96%B0%E4%B8%8A%E5%8D%95%23) `534.6K 🔥` `NEW`
1. [阿根廷队多人面临禁赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%A4%9A%E4%BA%BA%E9%9D%A2%E4%B8%B4%E7%A6%81%E8%B5%9B%23) `528.3K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `434.4K 🔥` `NEW`
1. [张凌赫王楚然素颜跳探戈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%B4%A0%E9%A2%9C%E8%B7%B3%E6%8E%A2%E6%88%88%23) `375.0K 🔥` `NEW`
1. [终于理解奶奶辈的衣服了 (I finally understand grandma’s clothes)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E5%A5%B6%E5%A5%B6%E8%BE%88%E7%9A%84%E8%A1%A3%E6%9C%8D%E4%BA%86%23) `371.6K 🔥` `NEW`
1. [上海暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `360.1K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `354.6K 🔥` `NEW`
1. [中方向菲律宾重申3点原则立场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%90%91%E8%8F%B2%E5%BE%8B%E5%AE%BE%E9%87%8D%E7%94%B33%E7%82%B9%E5%8E%9F%E5%88%99%E7%AB%8B%E5%9C%BA%23) `354.5K 🔥` `NEW`
1. [独居久了会影响个人性格吗](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%B1%85%E4%B9%85%E4%BA%86%E4%BC%9A%E5%BD%B1%E5%93%8D%E4%B8%AA%E4%BA%BA%E6%80%A7%E6%A0%BC%E5%90%97%23) `351.7K 🔥` `NEW`
1. [AI都扛不住反复焦虑的人](https://s.weibo.com/weibo?q=%23AI%E9%83%BD%E6%89%9B%E4%B8%8D%E4%BD%8F%E5%8F%8D%E5%A4%8D%E7%84%A6%E8%99%91%E7%9A%84%E4%BA%BA%23) `348.8K 🔥` `NEW`
1. [花七百万建宗祠木材腐烂成损坏房](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%B8%83%E7%99%BE%E4%B8%87%E5%BB%BA%E5%AE%97%E7%A5%A0%E6%9C%A8%E6%9D%90%E8%85%90%E7%83%82%E6%88%90%E6%8D%9F%E5%9D%8F%E6%88%BF%23) `347.3K 🔥` `NEW`
1. [谢贤第一任妻子哭到沙哑](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E7%AC%AC%E4%B8%80%E4%BB%BB%E5%A6%BB%E5%AD%90%E5%93%AD%E5%88%B0%E6%B2%99%E5%93%91%23) `345.6K 🔥` `NEW`
1. [小孩哥右手火腿肠左手鹦鹉尸体](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E5%8F%B3%E6%89%8B%E7%81%AB%E8%85%BF%E8%82%A0%E5%B7%A6%E6%89%8B%E9%B9%A6%E9%B9%89%E5%B0%B8%E4%BD%93%23) `343.7K 🔥` `NEW`
1. [BBA今年集体大降价](https://s.weibo.com/weibo?q=%23BBA%E4%BB%8A%E5%B9%B4%E9%9B%86%E4%BD%93%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `342.9K 🔥` `NEW`
1. [佛得角 世界杯最大赢家 (Cape Verde, the biggest winner of the World Cup)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%20%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E5%A4%A7%E8%B5%A2%E5%AE%B6%23) `293.3K 🔥` `NEW`
1. [谢霆锋听谢贤说终要离开时流泪](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E5%90%AC%E8%B0%A2%E8%B4%A4%E8%AF%B4%E7%BB%88%E8%A6%81%E7%A6%BB%E5%BC%80%E6%97%B6%E6%B5%81%E6%B3%AA%23) `285.3K 🔥` `NEW`
1. [魏大勋十日终焉戴眼镜路透](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%88%B4%E7%9C%BC%E9%95%9C%E8%B7%AF%E9%80%8F%23) `277.2K 🔥` `NEW`
1. [央视曝乙游年龄门槛形同虚设](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E4%B9%99%E6%B8%B8%E5%B9%B4%E9%BE%84%E9%97%A8%E6%A7%9B%E5%BD%A2%E5%90%8C%E8%99%9A%E8%AE%BE%23) `263.3K 🔥` `NEW`
1. [孙颖莎连续四年稳居女单世界第一](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%9E%E7%BB%AD%E5%9B%9B%E5%B9%B4%E7%A8%B3%E5%B1%85%E5%A5%B3%E5%8D%95%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `255.7K 🔥` `NEW`
1. [BLG回应Bin](https://s.weibo.com/weibo?q=%23BLG%E5%9B%9E%E5%BA%94Bin%23) `219.1K 🔥` `NEW`
1. [我将逐张学习章若楠的游客照](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%86%E9%80%90%E5%BC%A0%E5%AD%A6%E4%B9%A0%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%9A%84%E6%B8%B8%E5%AE%A2%E7%85%A7%23) `201.5K 🔥` `NEW`
1. [王楚钦当队长的背后](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BD%93%E9%98%9F%E9%95%BF%E7%9A%84%E8%83%8C%E5%90%8E%23) `191.3K 🔥` `NEW`
1. [李宇春喊辛芷蕾蕾蕾](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E5%96%8A%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%95%BE%E8%95%BE%23) `191.2K 🔥` `NEW`
1. [33岁外卖员脑梗倒地多日才被发现](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E5%A4%96%E5%8D%96%E5%91%98%E8%84%91%E6%A2%97%E5%80%92%E5%9C%B0%E5%A4%9A%E6%97%A5%E6%89%8D%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `190.9K 🔥` `NEW`
1. [用Deepseek找到最适合的工作 (Find the perfect job with Deepseek)](https://s.weibo.com/weibo?q=%23%E7%94%A8Deepseek%E6%89%BE%E5%88%B0%E6%9C%80%E9%80%82%E5%90%88%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `190.8K 🔥` `NEW`
1. [演唱会坐第一排到底是什么感觉](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9D%90%E7%AC%AC%E4%B8%80%E6%8E%92%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `190.8K 🔥` `NEW`
1. [赵又廷说上半年只接到10个剧本](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%8F%88%E5%BB%B7%E8%AF%B4%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%8F%AA%E6%8E%A5%E5%88%B010%E4%B8%AA%E5%89%A7%E6%9C%AC%23) `173.7K 🔥` `NEW`
1. [92岁独居老人离世留下500万遗产](https://s.weibo.com/weibo?q=%2392%E5%B2%81%E7%8B%AC%E5%B1%85%E8%80%81%E4%BA%BA%E7%A6%BB%E4%B8%96%E7%95%99%E4%B8%8B500%E4%B8%87%E9%81%97%E4%BA%A7%23) `170.7K 🔥` `NEW`
1. [内娱00花演技黑马杀回来了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B100%E8%8A%B1%E6%BC%94%E6%8A%80%E9%BB%91%E9%A9%AC%E6%9D%80%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `169.3K 🔥` `NEW`
1. [深圳地铁到底错在哪了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%9C%B0%E9%93%81%E5%88%B0%E5%BA%95%E9%94%99%E5%9C%A8%E5%93%AA%E4%BA%86%23) `151.1K 🔥` `NEW`
1. [育儿补贴可一键续领了](https://s.weibo.com/weibo?q=%23%E8%82%B2%E5%84%BF%E8%A1%A5%E8%B4%B4%E5%8F%AF%E4%B8%80%E9%94%AE%E7%BB%AD%E9%A2%86%E4%BA%86%23) `145.6K 🔥` `NEW`
1. [国家队密集买入ETF护盘](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%AF%86%E9%9B%86%E4%B9%B0%E5%85%A5ETF%E6%8A%A4%E7%9B%98%23) `134.8K 🔥` `NEW`
1. [张柏芝月中火速安排大儿子回香港](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%9C%88%E4%B8%AD%E7%81%AB%E9%80%9F%E5%AE%89%E6%8E%92%E5%A4%A7%E5%84%BF%E5%AD%90%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `367.3K 🔥`
1. [锋芝 原配真夫妻的含金量](https://s.weibo.com/weibo?q=%23%E9%94%8B%E8%8A%9D%20%E5%8E%9F%E9%85%8D%E7%9C%9F%E5%A4%AB%E5%A6%BB%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `363.5K 🔥`
1. [虞书欣 高妹 (Yu Shuxin Gao Mei)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E9%AB%98%E5%A6%B9%23) `150.9K 🔥`
1. [怡颗莓 致癌物 (Yikeberry carcinogen)](https://s.weibo.com/weibo?q=%23%E6%80%A1%E9%A2%97%E8%8E%93%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `1.4M 🔥` `-44%`
1. [王玉雯在白鹿面前很少化妆 (Wang Yuwen rarely puts on makeup in front of Bai Lu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%9C%A8%E7%99%BD%E9%B9%BF%E9%9D%A2%E5%89%8D%E5%BE%88%E5%B0%91%E5%8C%96%E5%A6%86%23) `358.7K 🔥` `-61%`
1. [印度首都爆发大规模抗议](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%A6%96%E9%83%BD%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8A%97%E8%AE%AE%23) `221.4K 🔥` `-23%`
1. [21岁和26岁差距真的很大](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%92%8C26%E5%B2%81%E5%B7%AE%E8%B7%9D%E7%9C%9F%E7%9A%84%E5%BE%88%E5%A4%A7%23) `207.0K 🔥` `-28%`
1. [26岁女子恋爱后体检发现自己是男性](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%AD%90%E6%81%8B%E7%88%B1%E5%90%8E%E4%BD%93%E6%A3%80%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E6%98%AF%E7%94%B7%E6%80%A7%23) `204.5K 🔥` `-41%`
1. [赵今麦郭俊辰三搭了 (Zhao Jinmai and Guo Junchen had a threesome)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%83%AD%E4%BF%8A%E8%BE%B0%E4%B8%89%E6%90%AD%E4%BA%86%23) `197.6K 🔥` `-64%`
1. [11岁男孩被泳池排水口吸住溺亡](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E6%B3%B3%E6%B1%A0%E6%8E%92%E6%B0%B4%E5%8F%A3%E5%90%B8%E4%BD%8F%E6%BA%BA%E4%BA%A1%23) `168.8K 🔥` `-44%`
1. [大家现在对20多元有什么概念](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E7%8E%B0%E5%9C%A8%E5%AF%B920%E5%A4%9A%E5%85%83%E6%9C%89%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `149.8K 🔥` `-44%`
1. [韩国网友希望黄子韬重回EXO (Korean netizens hope Huang Zitao returns to EXO)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%B8%8C%E6%9C%9B%E9%BB%84%E5%AD%90%E9%9F%AC%E9%87%8D%E5%9B%9EEXO%23) `139.6K 🔥` `-48%`

Updated at 2026-07-21 17:40:38

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
