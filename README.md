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

1. [尹锡悦被判无期徒刑 (Yin Xiyue was sentenced to life imprisonment)](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%E5%BE%92%E5%88%91%23) `1.5M 🔥` `NEW`
1. [玩手机是一件很私人的事情](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%98%AF%E4%B8%80%E4%BB%B6%E5%BE%88%E7%A7%81%E4%BA%BA%E7%9A%84%E4%BA%8B%E6%83%85%23) `214.8K 🔥` `NEW`
1. [宋佳刘诗诗有条通天道你俩走不走](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E5%88%98%E8%AF%97%E8%AF%97%E6%9C%89%E6%9D%A1%E9%80%9A%E5%A4%A9%E9%81%93%E4%BD%A0%E4%BF%A9%E8%B5%B0%E4%B8%8D%E8%B5%B0%23) `201.9K 🔥` `NEW`
1. [尹锡悦内乱头目罪罪名成立](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%86%85%E4%B9%B1%E5%A4%B4%E7%9B%AE%E7%BD%AA%E7%BD%AA%E5%90%8D%E6%88%90%E7%AB%8B%23) `181.9K 🔥` `NEW`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `123.5K 🔥` `NEW`
1. [大连焖子](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E7%84%96%E5%AD%90%23) `114.1K 🔥` `NEW`
1. [男子被烟花炸伤眼球几乎全部流出](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E7%83%9F%E8%8A%B1%E7%82%B8%E4%BC%A4%E7%9C%BC%E7%90%83%E5%87%A0%E4%B9%8E%E5%85%A8%E9%83%A8%E6%B5%81%E5%87%BA%23) `111.2K 🔥` `NEW`
1. [熊出没不仅有女主角还有两位](https://s.weibo.com/weibo?q=%23%E7%86%8A%E5%87%BA%E6%B2%A1%E4%B8%8D%E4%BB%85%E6%9C%89%E5%A5%B3%E4%B8%BB%E8%A7%92%E8%BF%98%E6%9C%89%E4%B8%A4%E4%BD%8D%23) `100.7K 🔥` `NEW`
1. [法国1万人村庄连续10年自费过春节](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD1%E4%B8%87%E4%BA%BA%E6%9D%91%E5%BA%84%E8%BF%9E%E7%BB%AD10%E5%B9%B4%E8%87%AA%E8%B4%B9%E8%BF%87%E6%98%A5%E8%8A%82%23) `99.9K 🔥` `NEW`
1. [大年初三既是休息日也是聚财日](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%89%E6%97%A2%E6%98%AF%E4%BC%91%E6%81%AF%E6%97%A5%E4%B9%9F%E6%98%AF%E8%81%9A%E8%B4%A2%E6%97%A5%23) `90.3K 🔥` `NEW`
1. [李兰迪说串门组都是她的舞蹈老师 (Li Randi said that the visiting group is all her dance teacher)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E8%AF%B4%E4%B8%B2%E9%97%A8%E7%BB%84%E9%83%BD%E6%98%AF%E5%A5%B9%E7%9A%84%E8%88%9E%E8%B9%88%E8%80%81%E5%B8%88%23) `88.7K 🔥` `NEW`
1. [苏翊鸣右手蛋糕左手金牌](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%8F%B3%E6%89%8B%E8%9B%8B%E7%B3%95%E5%B7%A6%E6%89%8B%E9%87%91%E7%89%8C%23) `87.1K 🔥` `NEW`
1. [金智秀新剧预告](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%96%B0%E5%89%A7%E9%A2%84%E5%91%8A%23) `74.3K 🔥` `NEW`
1. [韩媒嘲讽林孝埈归化失败](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E5%98%B2%E8%AE%BD%E6%9E%97%E5%AD%9D%E5%9F%88%E5%BD%92%E5%8C%96%E5%A4%B1%E8%B4%A5%23) `72.8K 🔥` `NEW`
1. [这才叫有效送礼](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E5%8F%AB%E6%9C%89%E6%95%88%E9%80%81%E7%A4%BC%23) `69.8K 🔥` `NEW`
1. [美军或对伊朗展开踹门行动](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%88%96%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%B1%95%E5%BC%80%E8%B8%B9%E9%97%A8%E8%A1%8C%E5%8A%A8%23) `68.9K 🔥` `NEW`
1. [俄罗斯称美打击伊朗后果严重](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%A7%B0%E7%BE%8E%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E5%90%8E%E6%9E%9C%E4%B8%A5%E9%87%8D%23) `67.6K 🔥` `NEW`
1. [秦岚夸李沁像清水芙蓉般漂亮](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%A4%B8%E6%9D%8E%E6%B2%81%E5%83%8F%E6%B8%85%E6%B0%B4%E8%8A%99%E8%93%89%E8%88%AC%E6%BC%82%E4%BA%AE%23) `61.6K 🔥` `NEW`
1. [王濛观赛短道速滑眼含热泪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%A7%82%E8%B5%9B%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E7%9C%BC%E5%90%AB%E7%83%AD%E6%B3%AA%23) `60.9K 🔥` `NEW`
1. [爱猫女老时候](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%8C%AB%E5%A5%B3%E8%80%81%E6%97%B6%E5%80%99%23) `60.4K 🔥` `NEW`
1. [浙江人全部南下了吗 (Have all Zhejiang people gone south?)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E4%BA%BA%E5%85%A8%E9%83%A8%E5%8D%97%E4%B8%8B%E4%BA%86%E5%90%97%23) `55.4K 🔥` `NEW`
1. [体态是情绪的外在表达之一](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%80%81%E6%98%AF%E6%83%85%E7%BB%AA%E7%9A%84%E5%A4%96%E5%9C%A8%E8%A1%A8%E8%BE%BE%E4%B9%8B%E4%B8%80%23) `54.3K 🔥` `NEW`
1. [伊朗全面战备状态](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%A8%E9%9D%A2%E6%88%98%E5%A4%87%E7%8A%B6%E6%80%81%23) `53.9K 🔥` `NEW`
1. [妻子回应丈夫初二坐丈人腿上告状](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%88%E5%A4%AB%E5%88%9D%E4%BA%8C%E5%9D%90%E4%B8%88%E4%BA%BA%E8%85%BF%E4%B8%8A%E5%91%8A%E7%8A%B6%23) `892.7K 🔥` `+154%`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `90.7K 🔥` `+28%`
1. [春节档佳片云集总有一款适合你](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%E4%BD%B3%E7%89%87%E4%BA%91%E9%9B%86%E6%80%BB%E6%9C%89%E4%B8%80%E6%AC%BE%E9%80%82%E5%90%88%E4%BD%A0%23) `706.3K 🔥`
1. [印一大学展出泡沫无人机被赶出峰会](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E4%B8%80%E5%A4%A7%E5%AD%A6%E5%B1%95%E5%87%BA%E6%B3%A1%E6%B2%AB%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%B3%B0%E4%BC%9A%23) `159.8K 🔥`
1. [伊朗备战](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%87%E6%88%98%23) `122.7K 🔥`
1. [杨幂听到刘耀文说他老了的反应](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%90%AC%E5%88%B0%E5%88%98%E8%80%80%E6%96%87%E8%AF%B4%E4%BB%96%E8%80%81%E4%BA%86%E7%9A%84%E5%8F%8D%E5%BA%94%23) `119.3K 🔥`
1. [谷爱凌说本可以选择退役但我没有](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E6%9C%AC%E5%8F%AF%E4%BB%A5%E9%80%89%E6%8B%A9%E9%80%80%E5%BD%B9%E4%BD%86%E6%88%91%E6%B2%A1%E6%9C%89%23) `70.3K 🔥`
1. [惊蛰无声致敬隐姓埋名的他们 (Jingzhe silently pays tribute to them who remain anonymous)](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E8%87%B4%E6%95%AC%E9%9A%90%E5%A7%93%E5%9F%8B%E5%90%8D%E7%9A%84%E4%BB%96%E4%BB%AC%23) `58.7K 🔥`
1. [我承认之前对吴京太大声了](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%89%BF%E8%AE%A4%E4%B9%8B%E5%89%8D%E5%AF%B9%E5%90%B4%E4%BA%AC%E5%A4%AA%E5%A4%A7%E5%A3%B0%E4%BA%86%23) `326.5K 🔥` `-47%`
1. [飞驰人生3同期票房超哪吒2 (Flying Life 3 surpassed Nezha 2 at the box office during the same period)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E5%90%8C%E6%9C%9F%E7%A5%A8%E6%88%BF%E8%B6%85%E5%93%AA%E5%90%922%23) `241.2K 🔥` `-77%`
1. [苏翊鸣说储备了没有人实现过的动作](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%AF%B4%E5%82%A8%E5%A4%87%E4%BA%86%E6%B2%A1%E6%9C%89%E4%BA%BA%E5%AE%9E%E7%8E%B0%E8%BF%87%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `126.3K 🔥` `-84%`
1. [白鹿韩国](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%9F%A9%E5%9B%BD%23) `125.9K 🔥` `-35%`
1. [陈丽君是怎么面试上镖人的 (How did Chen Lijun interview an escort?)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%98%AF%E6%80%8E%E4%B9%88%E9%9D%A2%E8%AF%95%E4%B8%8A%E9%95%96%E4%BA%BA%E7%9A%84%23) `120.7K 🔥` `-59%`
1. [春晚为什么不给我看这个 (Why didn't you show me this during the Spring Festival Gala?)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%BB%99%E6%88%91%E7%9C%8B%E8%BF%99%E4%B8%AA%23) `118.6K 🔥` `-57%`
1. [白鹿曾舜晞陈鹤一梁永棋韩国旅游](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E8%88%9C%E6%99%9E%E9%99%88%E9%B9%A4%E4%B8%80%E6%A2%81%E6%B0%B8%E6%A3%8B%E9%9F%A9%E5%9B%BD%E6%97%85%E6%B8%B8%23) `116.6K 🔥` `-37%`
1. [香港尖沙咀市民排队看英歌舞](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%B0%96%E6%B2%99%E5%92%80%E5%B8%82%E6%B0%91%E6%8E%92%E9%98%9F%E7%9C%8B%E8%8B%B1%E6%AD%8C%E8%88%9E%23) `115.9K 🔥` `-40%`
1. [林孝埈已为中国短道燃尽所有](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E5%B7%B2%E4%B8%BA%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E7%87%83%E5%B0%BD%E6%89%80%E6%9C%89%23) `112.4K 🔥` `-46%`
1. [蔡徐坤Chinese New Year](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4Chinese%20New%20Year%23) `107.9K 🔥` `-44%`
1. [徐梦桃回复黄奕了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%9B%9E%E5%A4%8D%E9%BB%84%E5%A5%95%E4%BA%86%23) `100.5K 🔥` `-48%`
1. [初三一定记得睡懒觉 (Be sure to sleep in in the third grade of junior high school)](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%89%E4%B8%80%E5%AE%9A%E8%AE%B0%E5%BE%97%E7%9D%A1%E6%87%92%E8%A7%89%23) `93.7K 🔥` `-55%`
1. [谷爱凌这串笑声嘲讽拉满 (Gu Ailing’s string of laughter mocked Laman)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E4%B8%B2%E7%AC%91%E5%A3%B0%E5%98%B2%E8%AE%BD%E6%8B%89%E6%BB%A1%23) `89.7K 🔥` `-53%`
1. [时薪150和时薪800主播的区别](https://s.weibo.com/weibo?q=%23%E6%97%B6%E8%96%AA150%E5%92%8C%E6%97%B6%E8%96%AA800%E4%B8%BB%E6%92%AD%E7%9A%84%E5%8C%BA%E5%88%AB%23) `83.4K 🔥` `-54%`
1. [饿是血糖最诚实的闹钟 (Hungry is the most honest alarm clock for blood sugar)](https://s.weibo.com/weibo?q=%23%E9%A5%BF%E6%98%AF%E8%A1%80%E7%B3%96%E6%9C%80%E8%AF%9A%E5%AE%9E%E7%9A%84%E9%97%B9%E9%92%9F%23) `69.8K 🔥` `-24%`
1. [飞驰人生3林臻东到底多有钱](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E6%9E%97%E8%87%BB%E4%B8%9C%E5%88%B0%E5%BA%95%E5%A4%9A%E6%9C%89%E9%92%B1%23) `69.7K 🔥` `-49%`
1. [拍了三个月得闲谨制妈妈却没认出自己](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E4%BA%86%E4%B8%89%E4%B8%AA%E6%9C%88%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%E5%A6%88%E5%A6%88%E5%8D%B4%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%87%AA%E5%B7%B1%23) `66.5K 🔥` `-26%`
1. [马丽救场马丽](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E6%95%91%E5%9C%BA%E9%A9%AC%E4%B8%BD%23) `60.7K 🔥` `-34%`
1. [女婿连续2年告状今年坐在丈人腿上](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A9%BF%E8%BF%9E%E7%BB%AD2%E5%B9%B4%E5%91%8A%E7%8A%B6%E4%BB%8A%E5%B9%B4%E5%9D%90%E5%9C%A8%E4%B8%88%E4%BA%BA%E8%85%BF%E4%B8%8A%23) `56.1K 🔥` `-48%`

Updated at 2026-02-19 15:29:25

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
