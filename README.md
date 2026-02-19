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

1. [春节不归人坚守汇成动人团圆 (People who have not returned during the Spring Festival stick to each other and form a touching reunion)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E4%B8%8D%E5%BD%92%E4%BA%BA%E5%9D%9A%E5%AE%88%E6%B1%87%E6%88%90%E5%8A%A8%E4%BA%BA%E5%9B%A2%E5%9C%86%23) `697.3K 🔥` `NEW`
1. [疯狂星期四调休](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E6%98%9F%E6%9C%9F%E5%9B%9B%E8%B0%83%E4%BC%91%23) `372.4K 🔥` `NEW`
1. [缺牙齿正在攻击缺牙齿](https://s.weibo.com/weibo?q=%23%E7%BC%BA%E7%89%99%E9%BD%BF%E6%AD%A3%E5%9C%A8%E6%94%BB%E5%87%BB%E7%BC%BA%E7%89%99%E9%BD%BF%23) `182.8K 🔥` `NEW`
1. [镖人票房破3亿](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E7%A0%B43%E4%BA%BF%23) `174.5K 🔥` `NEW`
1. [易烊千玺弟弟13岁近照](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%BC%9F%E5%BC%9F13%E5%B2%81%E8%BF%91%E7%85%A7%23) `124.5K 🔥` `NEW`
1. [周杰伦点评给他拜年的朋友](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%82%B9%E8%AF%84%E7%BB%99%E4%BB%96%E6%8B%9C%E5%B9%B4%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `107.1K 🔥` `NEW`
1. [白鹿用韩语和韩国粉丝聊天](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%94%A8%E9%9F%A9%E8%AF%AD%E5%92%8C%E9%9F%A9%E5%9B%BD%E7%B2%89%E4%B8%9D%E8%81%8A%E5%A4%A9%23) `106.7K 🔥` `NEW`
1. [旺旺雪饼vs仙贝](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%9B%AA%E9%A5%BCvs%E4%BB%99%E8%B4%9D%23) `103.2K 🔥` `NEW`
1. [韩延哽咽谈星河入梦排片](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BB%B6%E5%93%BD%E5%92%BD%E8%B0%88%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%E6%8E%92%E7%89%87%23) `99.8K 🔥` `NEW`
1. [金价迎来新一轮大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%8E%E6%9D%A5%E6%96%B0%E4%B8%80%E8%BD%AE%E5%A4%A7%E6%B6%A8%23) `98.6K 🔥` `NEW`
1. [苏翊鸣的米兰冬奥记忆 (Su Yiming’s memories of the Milan Winter Olympics)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%9A%84%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%AE%B0%E5%BF%86%23) `97.6K 🔥` `NEW`
1. [男子吐槽年夜饭12道菜仅受皮外伤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%90%E6%A7%BD%E5%B9%B4%E5%A4%9C%E9%A5%AD12%E9%81%93%E8%8F%9C%E4%BB%85%E5%8F%97%E7%9A%AE%E5%A4%96%E4%BC%A4%23) `95.1K 🔥` `NEW`
1. [俞灏明做猪肝一个活口都不留](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E7%81%8F%E6%98%8E%E5%81%9A%E7%8C%AA%E8%82%9D%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8F%A3%E9%83%BD%E4%B8%8D%E7%95%99%23) `93.8K 🔥` `NEW`
1. [曝Doinb参加TI15预选赛](https://s.weibo.com/weibo?q=%23%E6%9B%9DDoinb%E5%8F%82%E5%8A%A0TI15%E9%A2%84%E9%80%89%E8%B5%9B%23) `92.7K 🔥` `NEW`
1. [我将学会谷爱凌这个大笑方式](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%86%E5%AD%A6%E4%BC%9A%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E4%B8%AA%E5%A4%A7%E7%AC%91%E6%96%B9%E5%BC%8F%23) `91.5K 🔥` `NEW`
1. [女子接代探父母订单排到初九](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8E%A5%E4%BB%A3%E6%8E%A2%E7%88%B6%E6%AF%8D%E8%AE%A2%E5%8D%95%E6%8E%92%E5%88%B0%E5%88%9D%E4%B9%9D%23) `89.9K 🔥` `NEW`
1. [国际金银再次大涨](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E9%87%91%E9%93%B6%E5%86%8D%E6%AC%A1%E5%A4%A7%E6%B6%A8%23) `75.6K 🔥` `NEW`
1. [尔滨气温让冰雪大世界临时闭园了](https://s.weibo.com/weibo?q=%23%E5%B0%94%E6%BB%A8%E6%B0%94%E6%B8%A9%E8%AE%A9%E5%86%B0%E9%9B%AA%E5%A4%A7%E4%B8%96%E7%95%8C%E4%B8%B4%E6%97%B6%E9%97%AD%E5%9B%AD%E4%BA%86%23) `75.3K 🔥` `NEW`
1. [入境游火爆导游感叹没有淡季](https://s.weibo.com/weibo?q=%23%E5%85%A5%E5%A2%83%E6%B8%B8%E7%81%AB%E7%88%86%E5%AF%BC%E6%B8%B8%E6%84%9F%E5%8F%B9%E6%B2%A1%E6%9C%89%E6%B7%A1%E5%AD%A3%23) `74.1K 🔥` `NEW`
1. [周深尼格买提 魔术届卧龙凤雏](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%B0%BC%E6%A0%BC%E4%B9%B0%E6%8F%90%20%E9%AD%94%E6%9C%AF%E5%B1%8A%E5%8D%A7%E9%BE%99%E5%87%A4%E9%9B%8F%23) `73.0K 🔥` `NEW`
1. [高层看烟花有多吓人 (How scary is it to watch fireworks from high-rise buildings?)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B1%82%E7%9C%8B%E7%83%9F%E8%8A%B1%E6%9C%89%E5%A4%9A%E5%90%93%E4%BA%BA%23) `64.7K 🔥` `NEW`
1. [医院除夕夜来了12位爆竹炸伤患者](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E9%99%A4%E5%A4%95%E5%A4%9C%E6%9D%A5%E4%BA%8612%E4%BD%8D%E7%88%86%E7%AB%B9%E7%82%B8%E4%BC%A4%E6%82%A3%E8%80%85%23) `61.4K 🔥` `NEW`
1. [苏翊鸣 为了露表手忙脚乱](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%20%E4%B8%BA%E4%BA%86%E9%9C%B2%E8%A1%A8%E6%89%8B%E5%BF%99%E8%84%9A%E4%B9%B1%23) `832.3K 🔥` `+436%`
1. [王濛说自己以前快到教练都掐不上表](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%AF%B4%E8%87%AA%E5%B7%B1%E4%BB%A5%E5%89%8D%E5%BF%AB%E5%88%B0%E6%95%99%E7%BB%83%E9%83%BD%E6%8E%90%E4%B8%8D%E4%B8%8A%E8%A1%A8%23) `183.4K 🔥` `+175%`
1. [尹锡悦被判无期徒刑 (Yin Xiyue was sentenced to life imprisonment)](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%E5%BE%92%E5%88%91%23) `1.2M 🔥`
1. [玩手机是一件很私人的事情](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%98%AF%E4%B8%80%E4%BB%B6%E5%BE%88%E7%A7%81%E4%BA%BA%E7%9A%84%E4%BA%8B%E6%83%85%23) `181.3K 🔥`
1. [我承认之前对吴京太大声了](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%89%BF%E8%AE%A4%E4%B9%8B%E5%89%8D%E5%AF%B9%E5%90%B4%E4%BA%AC%E5%A4%AA%E5%A4%A7%E5%A3%B0%E4%BA%86%23) `171.0K 🔥`
1. [白鹿韩国](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%9F%A9%E5%9B%BD%23) `118.0K 🔥`
1. [李健 禁烟大使](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%20%E7%A6%81%E7%83%9F%E5%A4%A7%E4%BD%BF%23) `107.3K 🔥`
1. [美网红感叹美国人被教唆恨中国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E7%BA%A2%E6%84%9F%E5%8F%B9%E7%BE%8E%E5%9B%BD%E4%BA%BA%E8%A2%AB%E6%95%99%E5%94%86%E6%81%A8%E4%B8%AD%E5%9B%BD%23) `106.7K 🔥`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `104.9K 🔥`
1. [2名初中生扶摔倒女子遭索赔22万 (Two junior high school students helped a woman who fell down and were compensated for NT$220,000)](https://s.weibo.com/weibo?q=%232%E5%90%8D%E5%88%9D%E4%B8%AD%E7%94%9F%E6%89%B6%E6%91%94%E5%80%92%E5%A5%B3%E5%AD%90%E9%81%AD%E7%B4%A2%E8%B5%9422%E4%B8%87%23) `101.9K 🔥`
1. [陈丽君是怎么面试上镖人的 (How did Chen Lijun interview an escort?)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%98%AF%E6%80%8E%E4%B9%88%E9%9D%A2%E8%AF%95%E4%B8%8A%E9%95%96%E4%BA%BA%E7%9A%84%23) `100.4K 🔥`
1. [惊蛰无声原型](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E5%8E%9F%E5%9E%8B%23) `94.3K 🔥`
1. [镖人路演](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E8%B7%AF%E6%BC%94%23) `90.0K 🔥`
1. [杨幂听到刘耀文说他老了的反应](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%90%AC%E5%88%B0%E5%88%98%E8%80%80%E6%96%87%E8%AF%B4%E4%BB%96%E8%80%81%E4%BA%86%E7%9A%84%E5%8F%8D%E5%BA%94%23) `89.8K 🔥`
1. [蔡徐坤Chinese New Year (Cai XukunChinese New Year)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4Chinese%20New%20Year%23) `86.9K 🔥`
1. [梨形身材怎么买裤子](https://s.weibo.com/weibo?q=%23%E6%A2%A8%E5%BD%A2%E8%BA%AB%E6%9D%90%E6%80%8E%E4%B9%88%E4%B9%B0%E8%A3%A4%E5%AD%90%23) `64.5K 🔥`
1. [飞驰人生3后劲好大 (Flying Life 3 has great stamina)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E5%90%8E%E5%8A%B2%E5%A5%BD%E5%A4%A7%23) `182.5K 🔥` `-32%`
1. [妻子回应丈夫初二坐丈人腿上告状](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%88%E5%A4%AB%E5%88%9D%E4%BA%8C%E5%9D%90%E4%B8%88%E4%BA%BA%E8%85%BF%E4%B8%8A%E5%91%8A%E7%8A%B6%23) `124.9K 🔥` `-45%`
1. [春晚为什么不给我看这个 (Why didn't you show me this during the Spring Festival Gala?)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%BB%99%E6%88%91%E7%9C%8B%E8%BF%99%E4%B8%AA%23) `107.4K 🔥` `-29%`
1. [韩媒嘲讽林孝埈归化失败](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E5%98%B2%E8%AE%BD%E6%9E%97%E5%AD%9D%E5%9F%88%E5%BD%92%E5%8C%96%E5%A4%B1%E8%B4%A5%23) `103.4K 🔥` `-89%`
1. [宋佳刘诗诗有条通天道你俩走不走](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E5%88%98%E8%AF%97%E8%AF%97%E6%9C%89%E6%9D%A1%E9%80%9A%E5%A4%A9%E9%81%93%E4%BD%A0%E4%BF%A9%E8%B5%B0%E4%B8%8D%E8%B5%B0%23) `97.1K 🔥` `-64%`
1. [飞驰人生3同期票房超哪吒2 (Flying Life 3 surpassed Nezha 2 at the box office during the same period)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E5%90%8C%E6%9C%9F%E7%A5%A8%E6%88%BF%E8%B6%85%E5%93%AA%E5%90%922%23) `95.8K 🔥` `-48%`
1. [伊朗备战](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%87%E6%88%98%23) `75.8K 🔥` `-39%`
1. [机器人跳舞摔倒小伙查看时脸被踢破](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%B3%E8%88%9E%E6%91%94%E5%80%92%E5%B0%8F%E4%BC%99%E6%9F%A5%E7%9C%8B%E6%97%B6%E8%84%B8%E8%A2%AB%E8%B8%A2%E7%A0%B4%23) `71.5K 🔥` `-22%`
1. [父亲称英歌舞女孩知道自己火了 (Father says British singing and dancing girl knew she was popular)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%A7%B0%E8%8B%B1%E6%AD%8C%E8%88%9E%E5%A5%B3%E5%AD%A9%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E7%81%AB%E4%BA%86%23) `66.6K 🔥` `-36%`
1. [苏翊鸣右手蛋糕左手金牌](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%8F%B3%E6%89%8B%E8%9B%8B%E7%B3%95%E5%B7%A6%E6%89%8B%E9%87%91%E7%89%8C%23) `65.6K 🔥` `-36%`
1. [秦岚夸李沁像清水芙蓉般漂亮](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%A4%B8%E6%9D%8E%E6%B2%81%E5%83%8F%E6%B8%85%E6%B0%B4%E8%8A%99%E8%93%89%E8%88%AC%E6%BC%82%E4%BA%AE%23) `65.3K 🔥` `-30%`
1. [张杰说徐梦桃是中国的骄傲](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%AF%B4%E5%BE%90%E6%A2%A6%E6%A1%83%E6%98%AF%E4%B8%AD%E5%9B%BD%E7%9A%84%E9%AA%84%E5%82%B2%23) `62.6K 🔥` `-43%`
1. [林高远过年晒妈妈合照 (Lin Gaoyuan posted a photo of his mother during the Chinese New Year)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%AB%98%E8%BF%9C%E8%BF%87%E5%B9%B4%E6%99%92%E5%A6%88%E5%A6%88%E5%90%88%E7%85%A7%23) `59.1K 🔥` `-37%`

Updated at 2026-02-19 17:02:06

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
