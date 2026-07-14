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

1. [女子追尾身亡男友副驾睡觉被起诉 (Woman killed in rear-end collision, boyfriend charged while sleeping in front passenger seat)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%BD%E5%B0%BE%E8%BA%AB%E4%BA%A1%E7%94%B7%E5%8F%8B%E5%89%AF%E9%A9%BE%E7%9D%A1%E8%A7%89%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `849.6K 🔥` `NEW`
1. [一组高频数据看中国经济新动能](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E9%AB%98%E9%A2%91%E6%95%B0%E6%8D%AE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%96%B0%E5%8A%A8%E8%83%BD%23) `691.9K 🔥` `NEW`
1. [中国燃油车只剩最后一根续命稻草](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%87%83%E6%B2%B9%E8%BD%A6%E5%8F%AA%E5%89%A9%E6%9C%80%E5%90%8E%E4%B8%80%E6%A0%B9%E7%BB%AD%E5%91%BD%E7%A8%BB%E8%8D%89%23) `480.9K 🔥` `NEW`
1. [功夫女足破7亿票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A0%B47%E4%BA%BF%E7%A5%A8%E6%88%BF%23) `415.6K 🔥` `NEW`
1. [京东健康减重不难瘦大赛](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%81%A5%E5%BA%B7%E5%87%8F%E9%87%8D%E4%B8%8D%E9%9A%BE%E7%98%A6%E5%A4%A7%E8%B5%9B%23) `414.9K 🔥` `NEW`
1. [A股暴力拉升原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%9A%B4%E5%8A%9B%E6%8B%89%E5%8D%87%E5%8E%9F%E5%9B%A0%23) `413.1K 🔥` `NEW`
1. [妻子孕四月发现丈夫海量亲密照](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E5%9B%9B%E6%9C%88%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E6%B5%B7%E9%87%8F%E4%BA%B2%E5%AF%86%E7%85%A7%23) `408.0K 🔥` `NEW`
1. [世界杯半决赛裁判](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8D%8A%E5%86%B3%E8%B5%9B%E8%A3%81%E5%88%A4%23) `403.9K 🔥` `NEW`
1. [敌敌畏渗到大腿男生被下病危通知](https://s.weibo.com/weibo?q=%23%E6%95%8C%E6%95%8C%E7%95%8F%E6%B8%97%E5%88%B0%E5%A4%A7%E8%85%BF%E7%94%B7%E7%94%9F%E8%A2%AB%E4%B8%8B%E7%97%85%E5%8D%B1%E9%80%9A%E7%9F%A5%23) `393.9K 🔥` `NEW`
1. [台媒拍的曾沛慈的一天](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AA%92%E6%8B%8D%E7%9A%84%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9A%84%E4%B8%80%E5%A4%A9%23) `390.7K 🔥` `NEW`
1. [离开JYP的TWICE成员 (TWICE members who left JYP)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%BC%80JYP%E7%9A%84TWICE%E6%88%90%E5%91%98%23) `381.3K 🔥` `NEW`
1. [上咪咕见证世界杯四强决战巅峰](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%92%AA%E5%92%95%E8%A7%81%E8%AF%81%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%E5%86%B3%E6%88%98%E5%B7%85%E5%B3%B0%23) `371.3K 🔥` `NEW`
1. [宋威龙灵感来源张婧仪唯粉](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%81%B5%E6%84%9F%E6%9D%A5%E6%BA%90%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%94%AF%E7%B2%89%23) `368.4K 🔥` `NEW`
1. [杀害中国籍女医生嫌犯曾杀害亲妹](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E7%B1%8D%E5%A5%B3%E5%8C%BB%E7%94%9F%E5%AB%8C%E7%8A%AF%E6%9B%BE%E6%9D%80%E5%AE%B3%E4%BA%B2%E5%A6%B9%23) `359.2K 🔥` `NEW`
1. [迪丽热巴姐姐这一面我等了11年](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A7%90%E5%A7%90%E8%BF%99%E4%B8%80%E9%9D%A2%E6%88%91%E7%AD%89%E4%BA%8611%E5%B9%B4%23) `359.2K 🔥` `NEW`
1. [余宇涵看朱志鑫的大屏应援](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%AE%87%E6%B6%B5%E7%9C%8B%E6%9C%B1%E5%BF%97%E9%91%AB%E7%9A%84%E5%A4%A7%E5%B1%8F%E5%BA%94%E6%8F%B4%23) `344.1K 🔥` `NEW`
1. [小林栋哲考上中戏](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9E%97%E6%A0%8B%E5%93%B2%E8%80%83%E4%B8%8A%E4%B8%AD%E6%88%8F%23) `281.5K 🔥` `NEW`
1. [朋友圈只适合分享浮于表面的东西](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%AA%E9%80%82%E5%90%88%E5%88%86%E4%BA%AB%E6%B5%AE%E4%BA%8E%E8%A1%A8%E9%9D%A2%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `245.0K 🔥` `NEW`
1. [雀骨被曝遭举报](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E8%A2%AB%E6%9B%9D%E9%81%AD%E4%B8%BE%E6%8A%A5%23) `240.9K 🔥` `NEW`
1. [内娱请把古偶还给少男少女](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E6%8A%8A%E5%8F%A4%E5%81%B6%E8%BF%98%E7%BB%99%E5%B0%91%E7%94%B7%E5%B0%91%E5%A5%B3%23) `221.3K 🔥` `NEW`
1. [侯明昊缺席突围赛 (Hou Minghao missed the breakout match)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E7%BC%BA%E5%B8%AD%E7%AA%81%E5%9B%B4%E8%B5%9B%23) `221.0K 🔥` `NEW`
1. [丁禹兮刷不到的号直播](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%88%B7%E4%B8%8D%E5%88%B0%E7%9A%84%E5%8F%B7%E7%9B%B4%E6%92%AD%23) `219.7K 🔥` `NEW`
1. [英阿大战被FBI列为最高风险](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%E8%A2%ABFBI%E5%88%97%E4%B8%BA%E6%9C%80%E9%AB%98%E9%A3%8E%E9%99%A9%23) `215.2K 🔥` `NEW`
1. [李泽锋 养死士](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B3%BD%E9%94%8B%20%E5%85%BB%E6%AD%BB%E5%A3%AB%23) `214.9K 🔥` `NEW`
1. [摄影比赛一等奖照片确系AI生成](https://s.weibo.com/weibo?q=%23%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%E7%85%A7%E7%89%87%E7%A1%AE%E7%B3%BBAI%E7%94%9F%E6%88%90%23) `181.1K 🔥` `NEW`
1. [有些歌手在KTV永远不下班](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%9B%E6%AD%8C%E6%89%8B%E5%9C%A8KTV%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%B8%8B%E7%8F%AD%23) `180.8K 🔥` `NEW`
1. [小鹿老公备孕社死还有续集](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%80%81%E5%85%AC%E5%A4%87%E5%AD%95%E7%A4%BE%E6%AD%BB%E8%BF%98%E6%9C%89%E7%BB%AD%E9%9B%86%23) `180.8K 🔥` `NEW`
1. [请愿逐出阿根廷网站近期刚注册](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%84%BF%E9%80%90%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BD%91%E7%AB%99%E8%BF%91%E6%9C%9F%E5%88%9A%E6%B3%A8%E5%86%8C%23) `177.3K 🔥` `NEW`
1. [王俊凯巡演公售释出内场前排](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A1%E6%BC%94%E5%85%AC%E5%94%AE%E9%87%8A%E5%87%BA%E5%86%85%E5%9C%BA%E5%89%8D%E6%8E%92%23) `175.9K 🔥` `NEW`
1. [世界杯票价崩盘了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%A5%A8%E4%BB%B7%E5%B4%A9%E7%9B%98%E4%BA%86%23) `172.8K 🔥` `NEW`
1. [黄金超混穿越中国 (Gold super mix travels through China)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B6%85%E6%B7%B7%E7%A9%BF%E8%B6%8A%E4%B8%AD%E5%9B%BD%23) `172.1K 🔥` `NEW`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `171.7K 🔥` `NEW`
1. [感觉谈恋爱真的很尴尬](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%B0%88%E6%81%8B%E7%88%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E5%B0%B4%E5%B0%AC%23) `143.8K 🔥` `NEW`
1. [突然发现了神态的重要性](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%86%E7%A5%9E%E6%80%81%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `137.3K 🔥` `NEW`
1. [男子在河北投2100万建校成违章建筑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E6%B2%B3%E5%8C%97%E6%8A%952100%E4%B8%87%E5%BB%BA%E6%A0%A1%E6%88%90%E8%BF%9D%E7%AB%A0%E5%BB%BA%E7%AD%91%23) `136.6K 🔥` `NEW`
1. [工资向一线岗位倾斜](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E5%90%91%E4%B8%80%E7%BA%BF%E5%B2%97%E4%BD%8D%E5%80%BE%E6%96%9C%23) `674.8K 🔥` `+266%`
1. [虞书欣 全世界正数第一会穿搭 (Yu Shuxin is the best in the world at dressing up)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E5%85%A8%E4%B8%96%E7%95%8C%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E4%BC%9A%E7%A9%BF%E6%90%AD%23) `398.8K 🔥` `+114%`
1. [朴志效离开JYP](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BF%97%E6%95%88%E7%A6%BB%E5%BC%80JYP%23) `359.1K 🔥` `+22%`
1. [章若楠跑男化妆师评论区被阴阳白干](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%B7%91%E7%94%B7%E5%8C%96%E5%A6%86%E5%B8%88%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E9%98%B4%E9%98%B3%E7%99%BD%E5%B9%B2%23) `400.9K 🔥`
1. [温宜公主被北电录取](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%AE%9C%E5%85%AC%E4%B8%BB%E8%A2%AB%E5%8C%97%E7%94%B5%E5%BD%95%E5%8F%96%23) `385.8K 🔥`
1. [被长期主义的消费观震惊到了 (I was shocked by the long-term consumption outlook)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `382.6K 🔥`
1. [周星驰回应选角迪丽热巴](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%9B%9E%E5%BA%94%E9%80%89%E8%A7%92%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `377.0K 🔥`
1. [第一批注销校园卡的人发现不对劲了 (The first batch of people who canceled their campus cards realized something was wrong.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%B3%A8%E9%94%80%E6%A0%A1%E5%9B%AD%E5%8D%A1%E7%9A%84%E4%BA%BA%E5%8F%91%E7%8E%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2%E4%BA%86%23) `345.5K 🔥`
1. [沈阳抗洪](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%8A%97%E6%B4%AA%23) `222.4K 🔥`
1. [A股半导体产业](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E4%BA%A7%E4%B8%9A%23) `136.8K 🔥`
1. [南方人不要随便买豆荚冰箱贴](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%BA%BA%E4%B8%8D%E8%A6%81%E9%9A%8F%E4%BE%BF%E4%B9%B0%E8%B1%86%E8%8D%9A%E5%86%B0%E7%AE%B1%E8%B4%B4%23) `136.5K 🔥`
1. [疑AI照片拿了摄影比赛一等奖](https://s.weibo.com/weibo?q=%23%E7%96%91AI%E7%85%A7%E7%89%87%E6%8B%BF%E4%BA%86%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `1.2M 🔥` `-32%`
1. [请愿逐出阿根廷人数已超500万 (Number of people petitioning for deportation from Argentina exceeds 5 million)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%84%BF%E9%80%90%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BA%BA%E6%95%B0%E5%B7%B2%E8%B6%85500%E4%B8%87%23) `413.5K 🔥` `-49%`
1. [杨洋超张凌赫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%B6%85%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `372.0K 🔥` `-60%`
1. [时代峰峻辟谣左奇函女同学传闻](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%BE%9F%E8%B0%A3%E5%B7%A6%E5%A5%87%E5%87%BD%E5%A5%B3%E5%90%8C%E5%AD%A6%E4%BC%A0%E9%97%BB%23) `181.3K 🔥` `-49%`
1. [去音乐节后没有容貌焦虑了](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%9F%B3%E4%B9%90%E8%8A%82%E5%90%8E%E6%B2%A1%E6%9C%89%E5%AE%B9%E8%B2%8C%E7%84%A6%E8%99%91%E4%BA%86%23) `160.4K 🔥` `-79%`

Updated at 2026-07-14 19:51:15

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
