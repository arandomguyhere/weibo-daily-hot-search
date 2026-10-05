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

1. [法医确认煲汤内有蔡天凤身体组织](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E7%A1%AE%E8%AE%A4%E7%85%B2%E6%B1%A4%E5%86%85%E6%9C%89%E8%94%A1%E5%A4%A9%E5%87%A4%E8%BA%AB%E4%BD%93%E7%BB%84%E7%BB%87%23) `718.3K 🔥` `NEW`
1. [女子遭网暴才得知半年前被造黄谣](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E7%BD%91%E6%9A%B4%E6%89%8D%E5%BE%97%E7%9F%A5%E5%8D%8A%E5%B9%B4%E5%89%8D%E8%A2%AB%E9%80%A0%E9%BB%84%E8%B0%A3%23) `240.5K 🔥` `NEW`
1. [李勒优现在正在拼豆店打工](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E7%8E%B0%E5%9C%A8%E6%AD%A3%E5%9C%A8%E6%8B%BC%E8%B1%86%E5%BA%97%E6%89%93%E5%B7%A5%23) `121.9K 🔥` `NEW`
1. [法国4比1比利时](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD4%E6%AF%941%E6%AF%94%E5%88%A9%E6%97%B6%23) `116.5K 🔥` `NEW`
1. [缅甸电诈园区或卷土重来](https://s.weibo.com/weibo?q=%23%E7%BC%85%E7%94%B8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%88%96%E5%8D%B7%E5%9C%9F%E9%87%8D%E6%9D%A5%23) `106.4K 🔥` `NEW`
1. [代露娃多年好友发声](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E5%A4%9A%E5%B9%B4%E5%A5%BD%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `104.9K 🔥` `NEW`
1. [男孩买3瓶饮料连中71瓶](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E4%B9%B03%E7%93%B6%E9%A5%AE%E6%96%99%E8%BF%9E%E4%B8%AD71%E7%93%B6%23) `85.2K 🔥` `NEW`
1. [中网男单决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E7%94%B7%E5%8D%95%E5%86%B3%E8%B5%9B%23) `66.7K 🔥` `NEW`
1. [袁绍辉后来纳了两个妾](https://s.weibo.com/weibo?q=%23%E8%A2%81%E7%BB%8D%E8%BE%89%E5%90%8E%E6%9D%A5%E7%BA%B3%E4%BA%86%E4%B8%A4%E4%B8%AA%E5%A6%BE%23) `62.2K 🔥` `NEW`
1. [伦敦冰箱贴竟印着郑州](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E5%86%B0%E7%AE%B1%E8%B4%B4%E7%AB%9F%E5%8D%B0%E7%9D%80%E9%83%91%E5%B7%9E%23) `61.7K 🔥` `NEW`
1. [S16瑞士轮第一轮分组](https://s.weibo.com/weibo?q=%23S16%E7%91%9E%E5%A3%AB%E8%BD%AE%E7%AC%AC%E4%B8%80%E8%BD%AE%E5%88%86%E7%BB%84%23) `61.2K 🔥` `NEW`
1. [黄渤怼起小S来也是手拿把掐的](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%E6%80%BC%E8%B5%B7%E5%B0%8FS%E6%9D%A5%E4%B9%9F%E6%98%AF%E6%89%8B%E6%8B%BF%E6%8A%8A%E6%8E%90%E7%9A%84%23) `60.9K 🔥` `NEW`
1. [杜翠雀最后的戏份给雀姐调成啥了](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E7%BF%A0%E9%9B%80%E6%9C%80%E5%90%8E%E7%9A%84%E6%88%8F%E4%BB%BD%E7%BB%99%E9%9B%80%E5%A7%90%E8%B0%83%E6%88%90%E5%95%A5%E4%BA%86%23) `60.5K 🔥` `NEW`
1. [回老家掰苞米感觉世界割裂](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E8%80%81%E5%AE%B6%E6%8E%B0%E8%8B%9E%E7%B1%B3%E6%84%9F%E8%A7%89%E4%B8%96%E7%95%8C%E5%89%B2%E8%A3%82%23) `60.2K 🔥` `NEW`
1. [东哥称明星美女难接触科技新贵](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%93%A5%E7%A7%B0%E6%98%8E%E6%98%9F%E7%BE%8E%E5%A5%B3%E9%9A%BE%E6%8E%A5%E8%A7%A6%E7%A7%91%E6%8A%80%E6%96%B0%E8%B4%B5%23) `59.5K 🔥` `NEW`
1. [宝盖身世](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E7%9B%96%E8%BA%AB%E4%B8%96%23) `59.4K 🔥` `NEW`
1. [狸花猫偷吃两只猫看呆](https://s.weibo.com/weibo?q=%23%E7%8B%B8%E8%8A%B1%E7%8C%AB%E5%81%B7%E5%90%83%E4%B8%A4%E5%8F%AA%E7%8C%AB%E7%9C%8B%E5%91%86%23) `57.4K 🔥` `NEW`
1. [港媒拍到杨幂又悄悄到香港了](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E5%AA%92%E6%8B%8D%E5%88%B0%E6%9D%A8%E5%B9%82%E5%8F%88%E6%82%84%E6%82%84%E5%88%B0%E9%A6%99%E6%B8%AF%E4%BA%86%23) `52.7K 🔥` `NEW`
1. [中网](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%23) `48.3K 🔥` `NEW`
1. [王者年度总决赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%B9%B4%E5%BA%A6%E6%80%BB%E5%86%B3%E8%B5%9B%23) `45.3K 🔥` `NEW`
1. [童年阴影小刺猬竟是板栗](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E5%B9%B4%E9%98%B4%E5%BD%B1%E5%B0%8F%E5%88%BA%E7%8C%AC%E7%AB%9F%E6%98%AF%E6%9D%BF%E6%A0%97%23) `44.0K 🔥` `NEW`
1. [黄金睡眠时长出炉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9D%A1%E7%9C%A0%E6%97%B6%E9%95%BF%E5%87%BA%E7%82%89%23) `531.5K 🔥` `+277%`
1. [参加过的最混乱婚礼](https://s.weibo.com/weibo?q=%23%E5%8F%82%E5%8A%A0%E8%BF%87%E7%9A%84%E6%9C%80%E6%B7%B7%E4%B9%B1%E5%A9%9A%E7%A4%BC%23) `194.5K 🔥` `+42%`
1. [中国空心光纤网速更快了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E5%BF%83%E5%85%89%E7%BA%A4%E7%BD%91%E9%80%9F%E6%9B%B4%E5%BF%AB%E4%BA%86%23) `413.4K 🔥`
1. [三千的工资愣是存了80万](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8D%83%E7%9A%84%E5%B7%A5%E8%B5%84%E6%84%A3%E6%98%AF%E5%AD%98%E4%BA%8680%E4%B8%87%23) `204.8K 🔥`
1. [中国警方缅北战火下挖出同胞遗体](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AD%A6%E6%96%B9%E7%BC%85%E5%8C%97%E6%88%98%E7%81%AB%E4%B8%8B%E6%8C%96%E5%87%BA%E5%90%8C%E8%83%9E%E9%81%97%E4%BD%93%23) `190.8K 🔥`
1. [王一博CHANEL大秀出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9ACHANEL%E5%A4%A7%E7%A7%80%E5%87%BA%E5%9B%BE%23) `146.7K 🔥`
1. [孙心然0比2高芙](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B60%E6%AF%942%E9%AB%98%E8%8A%99%23) `115.8K 🔥`
1. [代露娃不被同情的原因](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%B8%8D%E8%A2%AB%E5%90%8C%E6%83%85%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `346.5K 🔥` `-24%`
1. [未来几年能留住现金流最重要](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E5%87%A0%E5%B9%B4%E8%83%BD%E7%95%99%E4%BD%8F%E7%8E%B0%E9%87%91%E6%B5%81%E6%9C%80%E9%87%8D%E8%A6%81%23) `341.2K 🔥` `-29%`
1. [孙颖莎开始整顿乒乓球观赛礼仪](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BC%80%E5%A7%8B%E6%95%B4%E9%A1%BF%E4%B9%92%E4%B9%93%E7%90%83%E8%A7%82%E8%B5%9B%E7%A4%BC%E4%BB%AA%23) `259.7K 🔥` `-51%`
1. [谭松韵面相都变了](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23) `230.6K 🔥` `-44%`
1. [刘亦菲 掉代言](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E6%8E%89%E4%BB%A3%E8%A8%80%23) `190.8K 🔥` `-52%`
1. [建议大家买房一定要远离公园](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%88%BF%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E5%85%AC%E5%9B%AD%23) `137.0K 🔥` `-37%`
1. [游客免费住宿舍学生同意了吗](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%85%8D%E8%B4%B9%E4%BD%8F%E5%AE%BF%E8%88%8D%E5%AD%A6%E7%94%9F%E5%90%8C%E6%84%8F%E4%BA%86%E5%90%97%23) `101.5K 🔥` `-36%`
1. [缅北电诈园区枪决底层人员](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%9E%AA%E5%86%B3%E5%BA%95%E5%B1%82%E4%BA%BA%E5%91%98%23) `94.8K 🔥` `-62%`
1. [刘亦菲一下子加了五个代言](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%80%E4%B8%8B%E5%AD%90%E5%8A%A0%E4%BA%86%E4%BA%94%E4%B8%AA%E4%BB%A3%E8%A8%80%23) `94.1K 🔥` `-56%`
1. [林绣茹救了许兰香](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%BB%A3%E8%8C%B9%E6%95%91%E4%BA%86%E8%AE%B8%E5%85%B0%E9%A6%99%23) `86.9K 🔥` `-32%`
1. [张居正 胡歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%85%E6%AD%A3%20%E8%83%A1%E6%AD%8C%23) `86.8K 🔥` `-59%`
1. [刘学义没对谭松韵用绅士手](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%B2%A1%E5%AF%B9%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%94%A8%E7%BB%85%E5%A3%AB%E6%89%8B%23) `72.5K 🔥` `-53%`
1. [华为高通 芯片](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%AB%98%E9%80%9A%20%E8%8A%AF%E7%89%87%23) `65.0K 🔥` `-58%`
1. [李勒优回应](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8B%92%E4%BC%98%E5%9B%9E%E5%BA%94%23) `62.7K 🔥` `-84%`
1. [杭州会惩罚每一个不听劝的犟种](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%90%AC%E5%8A%9D%E7%9A%84%E7%8A%9F%E7%A7%8D%23) `62.4K 🔥` `-53%`
1. [中网广告牌闪动致重赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E5%B9%BF%E5%91%8A%E7%89%8C%E9%97%AA%E5%8A%A8%E8%87%B4%E9%87%8D%E8%B5%9B%23) `55.9K 🔥` `-58%`
1. [想要感染HPV一定得直接接触HPV](https://s.weibo.com/weibo?q=%23%E6%83%B3%E8%A6%81%E6%84%9F%E6%9F%93HPV%E4%B8%80%E5%AE%9A%E5%BE%97%E7%9B%B4%E6%8E%A5%E6%8E%A5%E8%A7%A6HPV%23) `55.6K 🔥` `-70%`
1. [王一博 熟男](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E7%86%9F%E7%94%B7%23) `55.1K 🔥` `-39%`
1. [金喜善16岁就美成这样](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%96%9C%E5%96%8416%E5%B2%81%E5%B0%B1%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `51.0K 🔥` `-53%`
1. [高芙为孙心然鼓掌](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%8A%99%E4%B8%BA%E5%AD%99%E5%BF%83%E7%84%B6%E9%BC%93%E6%8E%8C%23) `50.5K 🔥` `-76%`
1. [东北超](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%B6%85%23) `44.9K 🔥` `-54%`

Updated at 2026-10-06 07:14:14

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
