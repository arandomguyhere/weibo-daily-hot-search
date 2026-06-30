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

1. [德国队已原地解散 (The German team has been disbanded)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%98%9F%E5%B7%B2%E5%8E%9F%E5%9C%B0%E8%A7%A3%E6%95%A3%23) `1.4M 🔥` `NEW`
1. [百年征程信仰之光](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%B9%B4%E5%BE%81%E7%A8%8B%E4%BF%A1%E4%BB%B0%E4%B9%8B%E5%85%89%23) `697.4K 🔥` `NEW`
1. [造谣小米汽车销售公司被罚40万](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E9%94%80%E5%94%AE%E5%85%AC%E5%8F%B8%E8%A2%AB%E7%BD%9A40%E4%B8%87%23) `461.4K 🔥` `NEW`
1. [多囊卵巢综合征正式更名](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E6%AD%A3%E5%BC%8F%E6%9B%B4%E5%90%8D%23) `459.9K 🔥` `NEW`
1. [现在就出发4 接原班人马](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%20%E6%8E%A5%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `229.7K 🔥` `NEW`
1. [A股上半年10大牛股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%8A%E5%8D%8A%E5%B9%B410%E5%A4%A7%E7%89%9B%E8%82%A1%23) `227.4K 🔥` `NEW`
1. [37岁工程师猝死未被认定工伤](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%8C%9D%E6%AD%BB%E6%9C%AA%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%B7%A5%E4%BC%A4%23) `225.2K 🔥` `NEW`
1. [白鹿演蚌精vs虞书欣演蚌精](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E8%9A%8C%E7%B2%BEvs%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%BC%94%E8%9A%8C%E7%B2%BE%23) `223.7K 🔥` `NEW`
1. [沈梦辰哪个是杜海涛哪个是张凌赫](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%93%AA%E4%B8%AA%E6%98%AF%E6%9D%9C%E6%B5%B7%E6%B6%9B%E5%93%AA%E4%B8%AA%E6%98%AF%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `221.0K 🔥` `NEW`
1. [老板让我把咖啡放冰箱](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E8%AE%A9%E6%88%91%E6%8A%8A%E5%92%96%E5%95%A1%E6%94%BE%E5%86%B0%E7%AE%B1%23) `219.0K 🔥` `NEW`
1. [杨紫爸爸回应杨紫改名 (Yang Zi’s father responded to Yang Zi’s name change)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%88%B8%E7%88%B8%E5%9B%9E%E5%BA%94%E6%9D%A8%E7%B4%AB%E6%94%B9%E5%90%8D%23) `218.9K 🔥` `NEW`
1. [沈月陈鑫海贺峻霖合照](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E9%99%88%E9%91%AB%E6%B5%B7%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%90%88%E7%85%A7%23) `218.6K 🔥` `NEW`
1. [夫妻月入两万被登记困难职工引质疑](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%9C%88%E5%85%A5%E4%B8%A4%E4%B8%87%E8%A2%AB%E7%99%BB%E8%AE%B0%E5%9B%B0%E9%9A%BE%E8%81%8C%E5%B7%A5%E5%BC%95%E8%B4%A8%E7%96%91%23) `218.5K 🔥` `NEW`
1. [乒乓球收视率远不及世界杯](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%94%B6%E8%A7%86%E7%8E%87%E8%BF%9C%E4%B8%8D%E5%8F%8A%E4%B8%96%E7%95%8C%E6%9D%AF%23) `218.5K 🔥` `NEW`
1. [巴西淘汰日本后球员晒照吃寿司](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%B7%98%E6%B1%B0%E6%97%A5%E6%9C%AC%E5%90%8E%E7%90%83%E5%91%98%E6%99%92%E7%85%A7%E5%90%83%E5%AF%BF%E5%8F%B8%23) `218.3K 🔥` `NEW`
1. [韩红基金会回应博主称捐赠后无记录](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%9B%9E%E5%BA%94%E5%8D%9A%E4%B8%BB%E7%A7%B0%E6%8D%90%E8%B5%A0%E5%90%8E%E6%97%A0%E8%AE%B0%E5%BD%95%23) `218.3K 🔥` `NEW`
1. [刘亚仁复出签约金50亿](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%9A%E4%BB%81%E5%A4%8D%E5%87%BA%E7%AD%BE%E7%BA%A6%E9%87%9150%E4%BA%BF%23) `218.2K 🔥` `NEW`
1. [黄灿灿回复了张月](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%9B%9E%E5%A4%8D%E4%BA%86%E5%BC%A0%E6%9C%88%23) `218.1K 🔥` `NEW`
1. [王一博人鱼立项](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%BA%E9%B1%BC%E7%AB%8B%E9%A1%B9%23) `218.0K 🔥` `NEW`
1. [科创50指数半年大涨超64%](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%88%9B50%E6%8C%87%E6%95%B0%E5%8D%8A%E5%B9%B4%E5%A4%A7%E6%B6%A8%E8%B6%8564%25%23) `218.0K 🔥` `NEW`
1. [刘满仓被判无期 (Liu Mancang was sentenced to life imprisonment)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%BB%A1%E4%BB%93%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `218.0K 🔥` `NEW`
1. [贾玲减肥成功后坚持健身](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E7%8E%B2%E5%87%8F%E8%82%A5%E6%88%90%E5%8A%9F%E5%90%8E%E5%9D%9A%E6%8C%81%E5%81%A5%E8%BA%AB%23) `217.9K 🔥` `NEW`
1. [iPhone18Pro樱桃红](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%A8%B1%E6%A1%83%E7%BA%A2%23) `217.8K 🔥` `NEW`
1. [韩红道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E9%81%93%E6%AD%89%23) `217.7K 🔥` `NEW`
1. [杨紫父亲称杨旎奥全国没有重名](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%88%B6%E4%BA%B2%E7%A7%B0%E6%9D%A8%E6%97%8E%E5%A5%A5%E5%85%A8%E5%9B%BD%E6%B2%A1%E6%9C%89%E9%87%8D%E5%90%8D%23) `217.7K 🔥` `NEW`
1. [空调这几年到底进化了多少](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E8%BF%99%E5%87%A0%E5%B9%B4%E5%88%B0%E5%BA%95%E8%BF%9B%E5%8C%96%E4%BA%86%E5%A4%9A%E5%B0%91%23) `217.6K 🔥` `NEW`
1. [窦文涛对papi酱观点不可思议](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E6%96%87%E6%B6%9B%E5%AF%B9papi%E9%85%B1%E8%A7%82%E7%82%B9%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AE%AE%23) `217.5K 🔥` `NEW`
1. [张家界玻璃桥印度游客堵塞栈道](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E7%8E%BB%E7%92%83%E6%A1%A5%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%A0%B5%E5%A1%9E%E6%A0%88%E9%81%93%23) `217.4K 🔥` `NEW`
1. [51岁初产妇胎盘打洞8秒抢出宝宝](https://s.weibo.com/weibo?q=%2351%E5%B2%81%E5%88%9D%E4%BA%A7%E5%A6%87%E8%83%8E%E7%9B%98%E6%89%93%E6%B4%9E8%E7%A7%92%E6%8A%A2%E5%87%BA%E5%AE%9D%E5%AE%9D%23) `181.0K 🔥` `NEW`
1. [27岁就这样了很精彩](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E5%B0%B1%E8%BF%99%E6%A0%B7%E4%BA%86%E5%BE%88%E7%B2%BE%E5%BD%A9%23) `172.1K 🔥` `NEW`
1. [李飞提醒宋亚轩不要驼背 (Li Fei reminds Song Yaxuan not to hunch back)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E6%8F%90%E9%86%92%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%8D%E8%A6%81%E9%A9%BC%E8%83%8C%23) `168.2K 🔥` `NEW`
1. [田馥甄好会扭](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E5%A5%BD%E4%BC%9A%E6%89%AD%23) `151.2K 🔥` `NEW`
1. [孙兴慜街头遇球迷疯狂鞠躬致歉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%85%B4%E6%85%9C%E8%A1%97%E5%A4%B4%E9%81%87%E7%90%83%E8%BF%B7%E7%96%AF%E7%8B%82%E9%9E%A0%E8%BA%AC%E8%87%B4%E6%AD%89%23) `133.1K 🔥` `NEW`
1. [电影好一个乖乖女立项](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3%E7%AB%8B%E9%A1%B9%23) `127.1K 🔥` `NEW`
1. [火锅店菜单现白罗伞](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%94%85%E5%BA%97%E8%8F%9C%E5%8D%95%E7%8E%B0%E7%99%BD%E7%BD%97%E4%BC%9E%23) `126.7K 🔥` `NEW`
1. [TCL被要求10天交货](https://s.weibo.com/weibo?q=%23TCL%E8%A2%AB%E8%A6%81%E6%B1%8210%E5%A4%A9%E4%BA%A4%E8%B4%A7%23) `126.7K 🔥` `NEW`
1. [日本在外网翻车](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E5%A4%96%E7%BD%91%E7%BF%BB%E8%BD%A6%23) `896.8K 🔥`
1. [马宁怒怼巴拉圭教练组 (Manin angrily criticizes Paraguay coaching staff)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%80%92%E6%80%BC%E5%B7%B4%E6%8B%89%E5%9C%AD%E6%95%99%E7%BB%83%E7%BB%84%23) `498.3K 🔥` `-53%`
1. [金鹰奖最佳女主角候选](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E5%80%99%E9%80%89%23) `454.9K 🔥` `-74%`
1. [现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `219.0K 🔥` `-79%`
1. [女子开腹手术后才知脂肪是保命符](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E8%85%B9%E6%89%8B%E6%9C%AF%E5%90%8E%E6%89%8D%E7%9F%A5%E8%84%82%E8%82%AA%E6%98%AF%E4%BF%9D%E5%91%BD%E7%AC%A6%23) `218.8K 🔥` `-71%`
1. [Angelababy 我保证她是天使 (Angelababy I promise she is an angel)](https://s.weibo.com/weibo?q=%23Angelababy%20%E6%88%91%E4%BF%9D%E8%AF%81%E5%A5%B9%E6%98%AF%E5%A4%A9%E4%BD%BF%23) `218.7K 🔥` `-73%`
1. [优必选超仿生机器人](https://s.weibo.com/weibo?q=%23%E4%BC%98%E5%BF%85%E9%80%89%E8%B6%85%E4%BB%BF%E7%94%9F%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `218.7K 🔥` `-70%`
1. [iPhone18ProMax银灰色 (iPhone18ProMax silver gray)](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E9%93%B6%E7%81%B0%E8%89%B2%23) `218.4K 🔥` `-70%`
1. [恋与深空将引狼入室浪漫化不可取](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%B0%86%E5%BC%95%E7%8B%BC%E5%85%A5%E5%AE%A4%E6%B5%AA%E6%BC%AB%E5%8C%96%E4%B8%8D%E5%8F%AF%E5%8F%96%23) `218.2K 🔥` `-73%`
1. [曝大肚女生跑到剧组找男演员负责](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%A7%E8%82%9A%E5%A5%B3%E7%94%9F%E8%B7%91%E5%88%B0%E5%89%A7%E7%BB%84%E6%89%BE%E7%94%B7%E6%BC%94%E5%91%98%E8%B4%9F%E8%B4%A3%23) `186.4K 🔥` `-74%`
1. [黄灿灿工作室把账号当朋友圈发](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%8A%8A%E8%B4%A6%E5%8F%B7%E5%BD%93%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%91%23) `161.9K 🔥` `-77%`
1. [内马尔记仇](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E8%AE%B0%E4%BB%87%23) `151.5K 🔥` `-81%`
1. [华表奖](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%A1%A8%E5%A5%96%23) `146.5K 🔥` `-41%`
1. [穆祉丞合照 厂牌调色](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%90%88%E7%85%A7%20%E5%8E%82%E7%89%8C%E8%B0%83%E8%89%B2%23) `127.0K 🔥` `-49%`

Updated at 2026-06-30 19:47:10

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
