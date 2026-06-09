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

1. [山西查处多起AI生成灾害事故谣言 (Shanxi investigates and deals with rumors of multiple AI-generated disaster accidents)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%9F%A5%E5%A4%84%E5%A4%9A%E8%B5%B7AI%E7%94%9F%E6%88%90%E7%81%BE%E5%AE%B3%E4%BA%8B%E6%95%85%E8%B0%A3%E8%A8%80%23) `138.1K 🔥` `NEW`
1. [塞尔达传说时之笛重制版](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%B0%94%E8%BE%BE%E4%BC%A0%E8%AF%B4%E6%97%B6%E4%B9%8B%E7%AC%9B%E9%87%8D%E5%88%B6%E7%89%88%23) `48.9K 🔥` `NEW`
1. [谷歌英伟达](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `45.0K 🔥` `NEW`
1. [宝宝装睡骗过妈妈爬起来玩平板](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%AE%9D%E8%A3%85%E7%9D%A1%E9%AA%97%E8%BF%87%E5%A6%88%E5%A6%88%E7%88%AC%E8%B5%B7%E6%9D%A5%E7%8E%A9%E5%B9%B3%E6%9D%BF%23) `45.0K 🔥` `NEW`
1. [口味代表了你的身体状态](https://s.weibo.com/weibo?q=%23%E5%8F%A3%E5%91%B3%E4%BB%A3%E8%A1%A8%E4%BA%86%E4%BD%A0%E7%9A%84%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%23) `45.0K 🔥` `NEW`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `45.0K 🔥` `NEW`
1. [洗澡半小时拖延两小时](https://s.weibo.com/weibo?q=%23%E6%B4%97%E6%BE%A1%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%8B%96%E5%BB%B6%E4%B8%A4%E5%B0%8F%E6%97%B6%23) `45.0K 🔥` `NEW`
1. [时之笛](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%B9%8B%E7%AC%9B%23) `45.0K 🔥` `NEW`
1. [莫离直播弹幕](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%9B%B4%E6%92%AD%E5%BC%B9%E5%B9%95%23) `45.0K 🔥` `NEW`
1. [DRG生死战对阵XLG](https://s.weibo.com/weibo?q=%23DRG%E7%94%9F%E6%AD%BB%E6%88%98%E5%AF%B9%E9%98%B5XLG%23) `45.0K 🔥` `NEW`
1. [东北冷涡 (Northeast Cold Vortex)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E5%86%B7%E6%B6%A1%23) `45.0K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `45.0K 🔥` `NEW`
1. [Prada深圳湾新店很热闹](https://s.weibo.com/weibo?q=%23Prada%E6%B7%B1%E5%9C%B3%E6%B9%BE%E6%96%B0%E5%BA%97%E5%BE%88%E7%83%AD%E9%97%B9%23) `45.0K 🔥` `NEW`
1. [人应该花时间研究自己](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%BA%94%E8%AF%A5%E8%8A%B1%E6%97%B6%E9%97%B4%E7%A0%94%E7%A9%B6%E8%87%AA%E5%B7%B1%23) `45.0K 🔥` `NEW`
1. [iOS27升级](https://s.weibo.com/weibo?q=%23iOS27%E5%8D%87%E7%BA%A7%23) `45.0K 🔥` `NEW`
1. [NBA总决赛场外现暴力冲突](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E5%86%B3%E8%B5%9B%E5%9C%BA%E5%A4%96%E7%8E%B0%E6%9A%B4%E5%8A%9B%E5%86%B2%E7%AA%81%23) `45.0K 🔥` `NEW`
1. [爸妈来之后冰箱都老了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E6%9D%A5%E4%B9%8B%E5%90%8E%E5%86%B0%E7%AE%B1%E9%83%BD%E8%80%81%E4%BA%86%23) `45.0K 🔥` `NEW`
1. [AL爱笑群聊截图是P的](https://s.weibo.com/weibo?q=%23AL%E7%88%B1%E7%AC%91%E7%BE%A4%E8%81%8A%E6%88%AA%E5%9B%BE%E6%98%AFP%E7%9A%84%23) `45.0K 🔥` `NEW`
1. [鹅腿阿姨卖的是鸭腿](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%E5%8D%96%E7%9A%84%E6%98%AF%E9%B8%AD%E8%85%BF%23) `549.0K 🔥` `+164%`
1. [新手机回避症](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%89%8B%E6%9C%BA%E5%9B%9E%E9%81%BF%E7%97%87%23) `189.4K 🔥` `-63%`
1. [视频感受朝方欢送仪式热烈氛围 (Video to feel the warm atmosphere of North Korea's farewell ceremony)](https://s.weibo.com/weibo?q=%23%E8%A7%86%E9%A2%91%E6%84%9F%E5%8F%97%E6%9C%9D%E6%96%B9%E6%AC%A2%E9%80%81%E4%BB%AA%E5%BC%8F%E7%83%AD%E7%83%88%E6%B0%9B%E5%9B%B4%23) `167.8K 🔥` `-71%`
1. [谢娜演唱会主办方回应](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%BB%E5%8A%9E%E6%96%B9%E5%9B%9E%E5%BA%94%23) `164.4K 🔥` `-71%`
1. [白鹿直播美颜灯没电了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%E7%BE%8E%E9%A2%9C%E7%81%AF%E6%B2%A1%E7%94%B5%E4%BA%86%23) `151.9K 🔥` `-70%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `140.9K 🔥` `-74%`
1. [3岁女童10楼坠亡亲戚赔91万](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A510%E6%A5%BC%E5%9D%A0%E4%BA%A1%E4%BA%B2%E6%88%9A%E8%B5%9491%E4%B8%87%23) `135.3K 🔥` `-73%`
1. [一个模仿印度人制作饮料的视频火了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%A8%A1%E4%BB%BF%E5%8D%B0%E5%BA%A6%E4%BA%BA%E5%88%B6%E4%BD%9C%E9%A5%AE%E6%96%99%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `118.6K 🔥` `-76%`
1. [小伙月薪3000签1850万购房合同](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%9C%88%E8%96%AA3000%E7%AD%BE1850%E4%B8%87%E8%B4%AD%E6%88%BF%E5%90%88%E5%90%8C%23) `96.7K 🔥` `-84%`
1. [莫离热度像跳楼机 (Mo Li is as hot as a jumping machine)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%83%AD%E5%BA%A6%E5%83%8F%E8%B7%B3%E6%A5%BC%E6%9C%BA%23) `71.9K 🔥` `-91%`
1. [Prada群星大合影](https://s.weibo.com/weibo?q=%23Prada%E7%BE%A4%E6%98%9F%E5%A4%A7%E5%90%88%E5%BD%B1%23) `66.5K 🔥` `-79%`
1. [瘦的真相就两个字扛饿](https://s.weibo.com/weibo?q=%23%E7%98%A6%E7%9A%84%E7%9C%9F%E7%9B%B8%E5%B0%B1%E4%B8%A4%E4%B8%AA%E5%AD%97%E6%89%9B%E9%A5%BF%23) `63.1K 🔥` `-75%`
1. [言语利他 行动利己](https://s.weibo.com/weibo?q=%23%E8%A8%80%E8%AF%AD%E5%88%A9%E4%BB%96%20%E8%A1%8C%E5%8A%A8%E5%88%A9%E5%B7%B1%23) `58.4K 🔥` `-47%`
1. [周翊然官配发力了 (Zhou Yiran's official assignment has shown strength)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E5%AE%98%E9%85%8D%E5%8F%91%E5%8A%9B%E4%BA%86%23) `56.1K 🔥` `-82%`
1. [金正恩夫妇前往机场送行](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E5%A4%AB%E5%A6%87%E5%89%8D%E5%BE%80%E6%9C%BA%E5%9C%BA%E9%80%81%E8%A1%8C%23) `54.2K 🔥` `-57%`
1. [关晓彤吻戏](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%BB%E6%88%8F%23) `49.9K 🔥` `-79%`
1. [苹果市值一夜蒸发超1.5万亿](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E8%92%B8%E5%8F%91%E8%B6%851.5%E4%B8%87%E4%BA%BF%23) `45.0K 🔥` `-74%`
1. [女子称移动159元套餐比不上39元套餐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%A7%BB%E5%8A%A8159%E5%85%83%E5%A5%97%E9%A4%90%E6%AF%94%E4%B8%8D%E4%B8%8A39%E5%85%83%E5%A5%97%E9%A4%90%23) `45.0K 🔥` `-74%`
1. [原来泡面已经到这种程度了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B3%A1%E9%9D%A2%E5%B7%B2%E7%BB%8F%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `45.0K 🔥` `-80%`
1. [五哈节目组没收克州文旅钱](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E8%8A%82%E7%9B%AE%E7%BB%84%E6%B2%A1%E6%94%B6%E5%85%8B%E5%B7%9E%E6%96%87%E6%97%85%E9%92%B1%23) `45.0K 🔥` `-68%`
1. [对上班过劳肥有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%8A%E7%8F%AD%E8%BF%87%E5%8A%B3%E8%82%A5%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `45.0K 🔥` `-68%`
1. [温峥嵘没参加浪姐五公小考](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E6%B2%A1%E5%8F%82%E5%8A%A0%E6%B5%AA%E5%A7%90%E4%BA%94%E5%85%AC%E5%B0%8F%E8%80%83%23) `45.0K 🔥` `-77%`
1. [原来防晒衣真的不能烘干](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%98%B2%E6%99%92%E8%A1%A3%E7%9C%9F%E7%9A%84%E4%B8%8D%E8%83%BD%E7%83%98%E5%B9%B2%23) `45.0K 🔥` `-71%`
1. [国足0比0泰国 (National football team 0-0 Thailand)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B30%E6%AF%940%E6%B3%B0%E5%9B%BD%23) `45.0K 🔥` `-91%`
1. [陈瑶浪姐合照含月量好高 (Sister Chen Yaolang’s photo contains a very high monthly value)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B5%AA%E5%A7%90%E5%90%88%E7%85%A7%E5%90%AB%E6%9C%88%E9%87%8F%E5%A5%BD%E9%AB%98%23) `45.0K 🔥` `-73%`
1. [母亲离婚当天遇害女儿指认藏尸地 (Mother was killed on the day of divorce, daughter identifies where body is hidden)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%A6%BB%E5%A9%9A%E5%BD%93%E5%A4%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E5%84%BF%E6%8C%87%E8%AE%A4%E8%97%8F%E5%B0%B8%E5%9C%B0%23) `45.0K 🔥` `-75%`
1. [高考完的第一个晚上真的会很幸福](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%AE%8C%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%99%9A%E4%B8%8A%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BE%88%E5%B9%B8%E7%A6%8F%23) `45.0K 🔥` `-71%`
1. [孟羽童向平安高管求职](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%BD%E7%AB%A5%E5%90%91%E5%B9%B3%E5%AE%89%E9%AB%98%E7%AE%A1%E6%B1%82%E8%81%8C%23) `45.0K 🔥` `-59%`
1. [司机夜间撞29只羊后赔偿32只羊](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%A4%9C%E9%97%B4%E6%92%9E29%E5%8F%AA%E7%BE%8A%E5%90%8E%E8%B5%94%E5%81%BF32%E5%8F%AA%E7%BE%8A%23) `45.0K 🔥` `-62%`
1. [北京天气 宜居城市](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94%20%E5%AE%9C%E5%B1%85%E5%9F%8E%E5%B8%82%23) `45.0K 🔥` `-54%`
1. [张月团曾沛慈团pk心之火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2pk%E5%BF%83%E4%B9%8B%E7%81%AB%23) `45.0K 🔥` `-73%`
1. [哈啰单车被曝曾欲干掉竞品关键人](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%95%B0%E5%8D%95%E8%BD%A6%E8%A2%AB%E6%9B%9D%E6%9B%BE%E6%AC%B2%E5%B9%B2%E6%8E%89%E7%AB%9E%E5%93%81%E5%85%B3%E9%94%AE%E4%BA%BA%23) `45.0K 🔥` `-80%`
1. [任天堂直面会](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%A4%A9%E5%A0%82%E7%9B%B4%E9%9D%A2%E4%BC%9A%23) `45.0K 🔥` `-59%`

Updated at 2026-06-10 02:57:52

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
