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

1. [税务局职工被曝上班脚翘桌上玩手游 (A tax bureau employee was exposed playing mobile games with his feet up on the table at work)](https://s.weibo.com/weibo?q=%23%E7%A8%8E%E5%8A%A1%E5%B1%80%E8%81%8C%E5%B7%A5%E8%A2%AB%E6%9B%9D%E4%B8%8A%E7%8F%AD%E8%84%9A%E7%BF%98%E6%A1%8C%E4%B8%8A%E7%8E%A9%E6%89%8B%E6%B8%B8%23) `1.8M 🔥` `NEW`
1. [监狱来的妈妈报审存在违规](https://s.weibo.com/weibo?q=%23%E7%9B%91%E7%8B%B1%E6%9D%A5%E7%9A%84%E5%A6%88%E5%A6%88%E6%8A%A5%E5%AE%A1%E5%AD%98%E5%9C%A8%E8%BF%9D%E8%A7%84%23) `1.1M 🔥` `NEW`
1. [南方还有2轮强降雨](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E8%BF%98%E6%9C%892%E8%BD%AE%E5%BC%BA%E9%99%8D%E9%9B%A8%23) `926.6K 🔥` `NEW`
1. [小米YU7GT及17Max今日发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E5%8F%8A17Max%E4%BB%8A%E6%97%A5%E5%8F%91%E5%B8%83%23) `869.3K 🔥` `NEW`
1. [孙杨向张豆豆道歉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%90%91%E5%BC%A0%E8%B1%86%E8%B1%86%E9%81%93%E6%AD%89%23) `856.8K 🔥` `NEW`
1. [17人终身禁止从事足球有关活动](https://s.weibo.com/weibo?q=%2317%E4%BA%BA%E7%BB%88%E8%BA%AB%E7%A6%81%E6%AD%A2%E4%BB%8E%E4%BA%8B%E8%B6%B3%E7%90%83%E6%9C%89%E5%85%B3%E6%B4%BB%E5%8A%A8%23) `438.2K 🔥` `NEW`
1. [WBG战胜BLG](https://s.weibo.com/weibo?q=%23WBG%E6%88%98%E8%83%9CBLG%23) `400.6K 🔥` `NEW`
1. [特朗普称卸任后不排除去竞选以总理](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%8D%B8%E4%BB%BB%E5%90%8E%E4%B8%8D%E6%8E%92%E9%99%A4%E5%8E%BB%E7%AB%9E%E9%80%89%E4%BB%A5%E6%80%BB%E7%90%86%23) `355.7K 🔥` `NEW`
1. [监狱来的妈妈报审等违规停止上映](https://s.weibo.com/weibo?q=%23%E7%9B%91%E7%8B%B1%E6%9D%A5%E7%9A%84%E5%A6%88%E5%A6%88%E6%8A%A5%E5%AE%A1%E7%AD%89%E8%BF%9D%E8%A7%84%E5%81%9C%E6%AD%A2%E4%B8%8A%E6%98%A0%23) `351.5K 🔥` `NEW`
1. [金秀贤从全民唾骂到沉冤得雪](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E4%BB%8E%E5%85%A8%E6%B0%91%E5%94%BE%E9%AA%82%E5%88%B0%E6%B2%89%E5%86%A4%E5%BE%97%E9%9B%AA%23) `347.8K 🔥` `NEW`
1. [A股跌破4100 (A shares fell below 4100)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%B7%8C%E7%A0%B44100%23) `342.7K 🔥` `NEW`
1. [李佳琦胖出啤酒肚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%83%96%E5%87%BA%E5%95%A4%E9%85%92%E8%82%9A%23) `340.2K 🔥` `NEW`
1. [金赛纶聊天记录被篡改](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%B5%9B%E7%BA%B6%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E8%A2%AB%E7%AF%A1%E6%94%B9%23) `338.7K 🔥` `NEW`
1. [蔚来辟谣乐道宣传片女主](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E8%BE%9F%E8%B0%A3%E4%B9%90%E9%81%93%E5%AE%A3%E4%BC%A0%E7%89%87%E5%A5%B3%E4%B8%BB%23) `330.1K 🔥` `NEW`
1. [36岁高三老师高考前倒在讲台去世](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E9%AB%98%E4%B8%89%E8%80%81%E5%B8%88%E9%AB%98%E8%80%83%E5%89%8D%E5%80%92%E5%9C%A8%E8%AE%B2%E5%8F%B0%E5%8E%BB%E4%B8%96%23) `325.8K 🔥` `NEW`
1. [小黄豆520收到一束油漆花](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86520%E6%94%B6%E5%88%B0%E4%B8%80%E6%9D%9F%E6%B2%B9%E6%BC%86%E8%8A%B1%23) `321.0K 🔥` `NEW`
1. [陕西省戏曲研究院连夜开通官微](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E7%9C%81%E6%88%8F%E6%9B%B2%E7%A0%94%E7%A9%B6%E9%99%A2%E8%BF%9E%E5%A4%9C%E5%BC%80%E9%80%9A%E5%AE%98%E5%BE%AE%23) `313.2K 🔥` `NEW`
1. [易烊千玺每一步都被好好保存](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%AF%8F%E4%B8%80%E6%AD%A5%E9%83%BD%E8%A2%AB%E5%A5%BD%E5%A5%BD%E4%BF%9D%E5%AD%98%23) `237.7K 🔥` `NEW`
1. [良陈美锦大结局](https://s.weibo.com/weibo?q=%23%E8%89%AF%E9%99%88%E7%BE%8E%E9%94%A6%E5%A4%A7%E7%BB%93%E5%B1%80%23) `237.2K 🔥` `NEW`
1. [日本乒乓球队亚运会名单](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B9%92%E4%B9%93%E7%90%83%E9%98%9F%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%90%8D%E5%8D%95%23) `229.4K 🔥` `NEW`
1. [终于实现618现货自由 (Finally achieved 618 spot freedom)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E5%AE%9E%E7%8E%B0618%E7%8E%B0%E8%B4%A7%E8%87%AA%E7%94%B1%23) `224.9K 🔥` `NEW`
1. [不小心把DeepSeek叫成豆包](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8A%8ADeepSeek%E5%8F%AB%E6%88%90%E8%B1%86%E5%8C%85%23) `224.2K 🔥` `NEW`
1. [马頔带李纯看极光准备了头纱](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%B8%A6%E6%9D%8E%E7%BA%AF%E7%9C%8B%E6%9E%81%E5%85%89%E5%87%86%E5%A4%87%E4%BA%86%E5%A4%B4%E7%BA%B1%23) `223.3K 🔥` `NEW`
1. [618买数码产品别抄错作业](https://s.weibo.com/weibo?q=%23618%E4%B9%B0%E6%95%B0%E7%A0%81%E4%BA%A7%E5%93%81%E5%88%AB%E6%8A%84%E9%94%99%E4%BD%9C%E4%B8%9A%23) `218.3K 🔥` `NEW`
1. [小黄豆追星运](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E8%BF%BD%E6%98%9F%E8%BF%90%23) `216.0K 🔥` `NEW`
1. [生源减少后小学老师开始转岗](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%BA%90%E5%87%8F%E5%B0%91%E5%90%8E%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E5%BC%80%E5%A7%8B%E8%BD%AC%E5%B2%97%23) `205.9K 🔥` `NEW`
1. [A股跳水冲高回落](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%B7%B3%E6%B0%B4%E5%86%B2%E9%AB%98%E5%9B%9E%E8%90%BD%23) `159.9K 🔥` `NEW`
1. [虞书欣为洪潇林柏叡新剧打call](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%BA%E6%B4%AA%E6%BD%87%E6%9E%97%E6%9F%8F%E5%8F%A1%E6%96%B0%E5%89%A7%E6%89%93call%23) `159.6K 🔥` `NEW`
1. [鹿晗看见人就开始拜](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%9C%8B%E8%A7%81%E4%BA%BA%E5%B0%B1%E5%BC%80%E5%A7%8B%E6%8B%9C%23) `153.6K 🔥` `NEW`
1. [洛克王国世界](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%23) `147.0K 🔥` `NEW`
1. [监狱来的妈妈停映 (Prison Mom is suspended)](https://s.weibo.com/weibo?q=%23%E7%9B%91%E7%8B%B1%E6%9D%A5%E7%9A%84%E5%A6%88%E5%A6%88%E5%81%9C%E6%98%A0%23) `140.8K 🔥` `NEW`
1. [多家航司不给免费带20寸行李箱登机](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E8%88%AA%E5%8F%B8%E4%B8%8D%E7%BB%99%E5%85%8D%E8%B4%B9%E5%B8%A620%E5%AF%B8%E8%A1%8C%E6%9D%8E%E7%AE%B1%E7%99%BB%E6%9C%BA%23) `139.1K 🔥` `NEW`
1. [胡先煦拼豆最累的是嘴](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E6%8B%BC%E8%B1%86%E6%9C%80%E7%B4%AF%E7%9A%84%E6%98%AF%E5%98%B4%23) `136.4K 🔥` `NEW`
1. [世乒赛马龙指导王曼昱](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%E9%A9%AC%E9%BE%99%E6%8C%87%E5%AF%BC%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `135.3K 🔥` `NEW`
1. [给阿嬷的情书从1000多人中选出南枝](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E4%BB%8E1000%E5%A4%9A%E4%BA%BA%E4%B8%AD%E9%80%89%E5%87%BA%E5%8D%97%E6%9E%9D%23) `134.3K 🔥` `NEW`
1. [怪不得陈哲远吃大米饭那么开心](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%99%88%E5%93%B2%E8%BF%9C%E5%90%83%E5%A4%A7%E7%B1%B3%E9%A5%AD%E9%82%A3%E4%B9%88%E5%BC%80%E5%BF%83%23) `132.9K 🔥` `NEW`
1. [面试空窗期](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E7%A9%BA%E7%AA%97%E6%9C%9F%23) `249.4K 🔥` `+30%`
1. [曝铁证王玉雯换张艺凡](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%93%81%E8%AF%81%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%8D%A2%E5%BC%A0%E8%89%BA%E5%87%A1%23) `426.8K 🔥` `-40%`
1. [天猫618优惠飓风来袭](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB618%E4%BC%98%E6%83%A0%E9%A3%93%E9%A3%8E%E6%9D%A5%E8%A2%AD%23) `411.1K 🔥` `-39%`
1. [雷军晒YU7GT团队](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%92YU7GT%E5%9B%A2%E9%98%9F%23) `354.0K 🔥` `-40%`
1. [孙杨当众让张豆豆给他道歉 (Sun Yang asked Zhang Doudou to apologize to him in public)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BD%93%E4%BC%97%E8%AE%A9%E5%BC%A0%E8%B1%86%E8%B1%86%E7%BB%99%E4%BB%96%E9%81%93%E6%AD%89%23) `346.9K 🔥` `-54%`
1. [米粉店老板回应本地人7元游客13元 (Rice noodle shop owner responds: locals pay 7 yuan, tourists pay 13 yuan)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E7%B2%89%E5%BA%97%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E6%9C%AC%E5%9C%B0%E4%BA%BA7%E5%85%83%E6%B8%B8%E5%AE%A213%E5%85%83%23) `337.2K 🔥` `-71%`
1. [金秀贤案件反转](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E6%A1%88%E4%BB%B6%E5%8F%8D%E8%BD%AC%23) `333.6K 🔥` `-42%`
1. [月经期洗澡停经 下丘脑对温度敏感](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E6%9C%9F%E6%B4%97%E6%BE%A1%E5%81%9C%E7%BB%8F%20%E4%B8%8B%E4%B8%98%E8%84%91%E5%AF%B9%E6%B8%A9%E5%BA%A6%E6%95%8F%E6%84%9F%23) `317.7K 🔥` `-27%`
1. [姜乘澜 化妆要顺应头发质感](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%20%E5%8C%96%E5%A6%86%E8%A6%81%E9%A1%BA%E5%BA%94%E5%A4%B4%E5%8F%91%E8%B4%A8%E6%84%9F%23) `312.5K 🔥` `-47%`
1. [袁隆平夫人祭拜前拒绝了搀扶](https://s.weibo.com/weibo?q=%23%E8%A2%81%E9%9A%86%E5%B9%B3%E5%A4%AB%E4%BA%BA%E7%A5%AD%E6%8B%9C%E5%89%8D%E6%8B%92%E7%BB%9D%E4%BA%86%E6%90%80%E6%89%B6%23) `303.4K 🔥` `-28%`
1. [奶奶一天的接待量](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E4%B8%80%E5%A4%A9%E7%9A%84%E6%8E%A5%E5%BE%85%E9%87%8F%23) `297.5K 🔥` `-55%`
1. [王玉雯的资源](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E7%9A%84%E8%B5%84%E6%BA%90%23) `208.1K 🔥` `-64%`
1. [刘亦菲超900天没组进](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%B6%85900%E5%A4%A9%E6%B2%A1%E7%BB%84%E8%BF%9B%23) `204.2K 🔥` `-43%`
1. [王菲唱主角 单纯喜欢张嘉益 (Faye Wong plays the leading role and simply likes Zhang Jiayi)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%94%B1%E4%B8%BB%E8%A7%92%20%E5%8D%95%E7%BA%AF%E5%96%9C%E6%AC%A2%E5%BC%A0%E5%98%89%E7%9B%8A%23) `174.9K 🔥` `-58%`
1. [宋亚轩买家秀vs卖家秀](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B9%B0%E5%AE%B6%E7%A7%80vs%E5%8D%96%E5%AE%B6%E7%A7%80%23) `143.8K 🔥` `-68%`

Updated at 2026-05-21 16:59:07

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
