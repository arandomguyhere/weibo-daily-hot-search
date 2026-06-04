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

1. [泡泡玛特告奈雪的茶获赔32万 (Bubble Mart sues Nai Xue’s tea and wins compensation of RMB 320,000)](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%91%8A%E5%A5%88%E9%9B%AA%E7%9A%84%E8%8C%B6%E8%8E%B7%E8%B5%9432%E4%B8%87%23) `779.8K 🔥` `NEW`
1. [端午小长假购票提醒收好](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%B0%8F%E9%95%BF%E5%81%87%E8%B4%AD%E7%A5%A8%E6%8F%90%E9%86%92%E6%94%B6%E5%A5%BD%23) `603.3K 🔥` `NEW`
1. [不要穿灰色裤子去健身房](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%A9%BF%E7%81%B0%E8%89%B2%E8%A3%A4%E5%AD%90%E5%8E%BB%E5%81%A5%E8%BA%AB%E6%88%BF%23) `575.6K 🔥` `NEW`
1. [吃外卖4年的最好证明](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%A4%96%E5%8D%964%E5%B9%B4%E7%9A%84%E6%9C%80%E5%A5%BD%E8%AF%81%E6%98%8E%23) `569.9K 🔥` `NEW`
1. [现在回小卖部简直是降维打击](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%9B%9E%E5%B0%8F%E5%8D%96%E9%83%A8%E7%AE%80%E7%9B%B4%E6%98%AF%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB%23) `506.6K 🔥` `NEW`
1. [赵露思自由点新品发布会](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9C%B2%E6%80%9D%E8%87%AA%E7%94%B1%E7%82%B9%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A%23) `497.7K 🔥` `NEW`
1. [时代峰峻 电影咖](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%20%E7%94%B5%E5%BD%B1%E5%92%96%23) `469.4K 🔥` `NEW`
1. [睫毛没把自己当异物](https://s.weibo.com/weibo?q=%23%E7%9D%AB%E6%AF%9B%E6%B2%A1%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%BD%93%E5%BC%82%E7%89%A9%23) `330.5K 🔥` `NEW`
1. [2030年AI耗水量够13亿人用一年](https://s.weibo.com/weibo?q=%232030%E5%B9%B4AI%E8%80%97%E6%B0%B4%E9%87%8F%E5%A4%9F13%E4%BA%BF%E4%BA%BA%E7%94%A8%E4%B8%80%E5%B9%B4%23) `329.9K 🔥` `NEW`
1. [刘亦菲北电同学聚会照](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%8C%97%E7%94%B5%E5%90%8C%E5%AD%A6%E8%81%9A%E4%BC%9A%E7%85%A7%23) `326.4K 🔥` `NEW`
1. [疑似女子当街踩踏他人头部 (Suspected woman stamped on someone's head in the street)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%A5%B3%E5%AD%90%E5%BD%93%E8%A1%97%E8%B8%A9%E8%B8%8F%E4%BB%96%E4%BA%BA%E5%A4%B4%E9%83%A8%23) `325.5K 🔥` `NEW`
1. [物业骂业主住不起就滚](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E9%AA%82%E4%B8%9A%E4%B8%BB%E4%BD%8F%E4%B8%8D%E8%B5%B7%E5%B0%B1%E6%BB%9A%23) `322.9K 🔥` `NEW`
1. [李荣浩亲吻杨丞琳播放量2亿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E4%BA%B2%E5%90%BB%E6%9D%A8%E4%B8%9E%E7%90%B3%E6%92%AD%E6%94%BE%E9%87%8F2%E4%BA%BF%23) `321.9K 🔥` `NEW`
1. [杭州四季青半裸男团表演引争议](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%9B%9B%E5%AD%A3%E9%9D%92%E5%8D%8A%E8%A3%B8%E7%94%B7%E5%9B%A2%E8%A1%A8%E6%BC%94%E5%BC%95%E4%BA%89%E8%AE%AE%23) `317.3K 🔥` `NEW`
1. [美股芯片巨头暴跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E8%8A%AF%E7%89%87%E5%B7%A8%E5%A4%B4%E6%9A%B4%E8%B7%8C%23) `315.4K 🔥` `NEW`
1. [全球央行扫货黄金](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E5%A4%AE%E8%A1%8C%E6%89%AB%E8%B4%A7%E9%BB%84%E9%87%91%23) `313.9K 🔥` `NEW`
1. [杨颖要求黑粉公开赔礼道歉](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E9%A2%96%E8%A6%81%E6%B1%82%E9%BB%91%E7%B2%89%E5%85%AC%E5%BC%80%E8%B5%94%E7%A4%BC%E9%81%93%E6%AD%89%23) `311.4K 🔥` `NEW`
1. [是要吊销我的奶瓶吗](https://s.weibo.com/weibo?q=%23%E6%98%AF%E8%A6%81%E5%90%8A%E9%94%80%E6%88%91%E7%9A%84%E5%A5%B6%E7%93%B6%E5%90%97%23) `307.3K 🔥` `NEW`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `306.1K 🔥` `NEW`
1. [刘亦菲又自己乱剪头发了](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%8F%88%E8%87%AA%E5%B7%B1%E4%B9%B1%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `304.3K 🔥` `NEW`
1. [马頔一心动就咬李纯脑袋 (Ma Di bit Li Chun's head whenever his heart moved.)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%80%E5%BF%83%E5%8A%A8%E5%B0%B1%E5%92%AC%E6%9D%8E%E7%BA%AF%E8%84%91%E8%A2%8B%23) `302.6K 🔥` `NEW`
1. [在工位上看到我爸发的消息](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%B7%A5%E4%BD%8D%E4%B8%8A%E7%9C%8B%E5%88%B0%E6%88%91%E7%88%B8%E5%8F%91%E7%9A%84%E6%B6%88%E6%81%AF%23) `302.2K 🔥` `NEW`
1. [曝光不戴头盔人员透露单位引关注](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%85%89%E4%B8%8D%E6%88%B4%E5%A4%B4%E7%9B%94%E4%BA%BA%E5%91%98%E9%80%8F%E9%9C%B2%E5%8D%95%E4%BD%8D%E5%BC%95%E5%85%B3%E6%B3%A8%23) `299.5K 🔥` `NEW`
1. [半导体集体爆涨原因](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E9%9B%86%E4%BD%93%E7%88%86%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `298.2K 🔥` `NEW`
1. [四太梁安琪一家吃饺子的排场](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%A4%AA%E6%A2%81%E5%AE%89%E7%90%AA%E4%B8%80%E5%AE%B6%E5%90%83%E9%A5%BA%E5%AD%90%E7%9A%84%E6%8E%92%E5%9C%BA%23) `296.7K 🔥` `NEW`
1. [猴哥说车前妻自曝曾被男明星搭讪](https://s.weibo.com/weibo?q=%23%E7%8C%B4%E5%93%A5%E8%AF%B4%E8%BD%A6%E5%89%8D%E5%A6%BB%E8%87%AA%E6%9B%9D%E6%9B%BE%E8%A2%AB%E7%94%B7%E6%98%8E%E6%98%9F%E6%90%AD%E8%AE%AA%23) `295.6K 🔥` `NEW`
1. [17岁女孩搓澡太用力竟致黄体破裂](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%90%93%E6%BE%A1%E5%A4%AA%E7%94%A8%E5%8A%9B%E7%AB%9F%E8%87%B4%E9%BB%84%E4%BD%93%E7%A0%B4%E8%A3%82%23) `293.2K 🔥` `NEW`
1. [美丽中国行](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `291.9K 🔥` `NEW`
1. [加满一箱油能少花20.5元](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%BB%A1%E4%B8%80%E7%AE%B1%E6%B2%B9%E8%83%BD%E5%B0%91%E8%8A%B120.5%E5%85%83%23) `287.6K 🔥` `NEW`
1. [杨天真胳膊怎么了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E8%83%B3%E8%86%8A%E6%80%8E%E4%B9%88%E4%BA%86%23) `285.6K 🔥` `NEW`
1. [范丞丞赵今麦电影开通官微 (Fan Chengcheng and Zhao Jinmai’s movie launches official WeChat account)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%94%B5%E5%BD%B1%E5%BC%80%E9%80%9A%E5%AE%98%E5%BE%AE%23) `284.1K 🔥` `NEW`
1. [樊振东回应职业发展传闻](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BA%94%E8%81%8C%E4%B8%9A%E5%8F%91%E5%B1%95%E4%BC%A0%E9%97%BB%23) `283.4K 🔥` `NEW`
1. [曝iPhone18Pro首发第二代灵动岛](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E9%A6%96%E5%8F%91%E7%AC%AC%E4%BA%8C%E4%BB%A3%E7%81%B5%E5%8A%A8%E5%B2%9B%23) `281.5K 🔥` `NEW`
1. [起底2188元一碗面关联门店](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E5%BA%952188%E5%85%83%E4%B8%80%E7%A2%97%E9%9D%A2%E5%85%B3%E8%81%94%E9%97%A8%E5%BA%97%23) `279.7K 🔥` `NEW`
1. [女子花8.3万买5部手机店员报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B18.3%E4%B8%87%E4%B9%B05%E9%83%A8%E6%89%8B%E6%9C%BA%E5%BA%97%E5%91%98%E6%8A%A5%E8%AD%A6%23) `278.3K 🔥` `NEW`
1. [做咖啡喝咖啡送咖啡的都辛苦](https://s.weibo.com/weibo?q=%23%E5%81%9A%E5%92%96%E5%95%A1%E5%96%9D%E5%92%96%E5%95%A1%E9%80%81%E5%92%96%E5%95%A1%E7%9A%84%E9%83%BD%E8%BE%9B%E8%8B%A6%23) `277.1K 🔥` `NEW`
1. [灵魂摆渡演技最差的出现了](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E6%BC%94%E6%8A%80%E6%9C%80%E5%B7%AE%E7%9A%84%E5%87%BA%E7%8E%B0%E4%BA%86%23) `275.1K 🔥` `NEW`
1. [奚梦瑶对婆婆的称呼](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%AF%B9%E5%A9%86%E5%A9%86%E7%9A%84%E7%A7%B0%E5%91%BC%23) `273.1K 🔥` `NEW`
1. [乌军用星链无人机炸毁俄护卫舰](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%86%9B%E7%94%A8%E6%98%9F%E9%93%BE%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%82%B8%E6%AF%81%E4%BF%84%E6%8A%A4%E5%8D%AB%E8%88%B0%23) `272.3K 🔥` `NEW`
1. [郭聪明自曝欠了很多债](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%81%AA%E6%98%8E%E8%87%AA%E6%9B%9D%E6%AC%A0%E4%BA%86%E5%BE%88%E5%A4%9A%E5%80%BA%23) `270.2K 🔥` `NEW`
1. [seventeen游乐园合照 (Seventeen amusement park photo)](https://s.weibo.com/weibo?q=%23seventeen%E6%B8%B8%E4%B9%90%E5%9B%AD%E5%90%88%E7%85%A7%23) `269.5K 🔥` `NEW`
1. [假如iPhone变可换电池](https://s.weibo.com/weibo?q=%23%E5%81%87%E5%A6%82iPhone%E5%8F%98%E5%8F%AF%E6%8D%A2%E7%94%B5%E6%B1%A0%23) `268.1K 🔥` `NEW`
1. [主角和小巷人家是一个时代的](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%92%8C%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E6%98%AF%E4%B8%80%E4%B8%AA%E6%97%B6%E4%BB%A3%E7%9A%84%23) `266.5K 🔥` `NEW`
1. [翘楚男演员 分不清 (Top male actors can’t tell the difference)](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E7%94%B7%E6%BC%94%E5%91%98%20%E5%88%86%E4%B8%8D%E6%B8%85%23) `1.1M 🔥` `+255%`
1. [空调28度会比26度省电吗](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%8328%E5%BA%A6%E4%BC%9A%E6%AF%9426%E5%BA%A6%E7%9C%81%E7%94%B5%E5%90%97%23) `320.6K 🔥`
1. [小英都变张元英了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E9%83%BD%E5%8F%98%E5%BC%A0%E5%85%83%E8%8B%B1%E4%BA%86%23) `308.8K 🔥`
1. [韩栋直播哭诉没戏拍 (Han Dong cried live and complained about not being able to film)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%A0%8B%E7%9B%B4%E6%92%AD%E5%93%AD%E8%AF%89%E6%B2%A1%E6%88%8F%E6%8B%8D%23) `290.2K 🔥`
1. [刘冲抢了方媛的单人间](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E6%8A%A2%E4%BA%86%E6%96%B9%E5%AA%9B%E7%9A%84%E5%8D%95%E4%BA%BA%E9%97%B4%23) `289.1K 🔥`
1. [NBA总决赛球迷冲场](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E5%86%B3%E8%B5%9B%E7%90%83%E8%BF%B7%E5%86%B2%E5%9C%BA%23) `328.5K 🔥` `-60%`
1. [平均睡眠7小时却3年出现2次脑梗](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%9D%87%E7%9D%A1%E7%9C%A07%E5%B0%8F%E6%97%B6%E5%8D%B43%E5%B9%B4%E5%87%BA%E7%8E%B02%E6%AC%A1%E8%84%91%E6%A2%97%23) `318.7K 🔥` `-49%`
1. [中国不存在所谓强迫劳动 (There is no so-called forced labor in China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%89%80%E8%B0%93%E5%BC%BA%E8%BF%AB%E5%8A%B3%E5%8A%A8%23) `312.7K 🔥` `-72%`

Updated at 2026-06-04 17:05:02

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
