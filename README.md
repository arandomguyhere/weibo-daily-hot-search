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

1. [左航新手机带丢了 (Zuohang lost his new mobile phone strap)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%96%B0%E6%89%8B%E6%9C%BA%E5%B8%A6%E4%B8%A2%E4%BA%86%23) `88.3K 🔥` `NEW`
1. [丁程鑫说严浩翔是可以让人依靠的弟弟](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%B4%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%98%AF%E5%8F%AF%E4%BB%A5%E8%AE%A9%E4%BA%BA%E4%BE%9D%E9%9D%A0%E7%9A%84%E5%BC%9F%E5%BC%9F%23) `85.6K 🔥` `NEW`
1. [3女儿均非亲生男方盼尽快再婚](https://s.weibo.com/weibo?q=%233%E5%A5%B3%E5%84%BF%E5%9D%87%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E6%96%B9%E7%9B%BC%E5%B0%BD%E5%BF%AB%E5%86%8D%E5%A9%9A%23) `82.0K 🔥` `NEW`
1. [德牧把安全的位置换给了萨摩耶](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%89%A7%E6%8A%8A%E5%AE%89%E5%85%A8%E7%9A%84%E4%BD%8D%E7%BD%AE%E6%8D%A2%E7%BB%99%E4%BA%86%E8%90%A8%E6%91%A9%E8%80%B6%23) `81.3K 🔥` `NEW`
1. [辟谣恋情都按谷爱凌这个标准来 (To refute rumors about love affairs, follow Gu Ailing’s standards)](https://s.weibo.com/weibo?q=%23%E8%BE%9F%E8%B0%A3%E6%81%8B%E6%83%85%E9%83%BD%E6%8C%89%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E4%B8%AA%E6%A0%87%E5%87%86%E6%9D%A5%23) `1.1M 🔥` `+23%`
1. [披荆斩棘排名 (Ranking through all obstacles)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D%23) `684.4K 🔥` `+35%`
1. [为中国航天点赞 (Thumbs up for China Aerospace)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E7%82%B9%E8%B5%9E%23) `507.0K 🔥` `+28%`
1. [女主播希望停止榜一大哥病态折磨 (Female anchor hopes to stop the morbid torture of Big Brother)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B8%8C%E6%9C%9B%E5%81%9C%E6%AD%A2%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E7%97%85%E6%80%81%E6%8A%98%E7%A3%A8%23) `465.9K 🔥` `+30%`
1. [居民存款7月又少了6300亿 (Resident deposits fell by another 630 billion in July)](https://s.weibo.com/weibo?q=%23%E5%B1%85%E6%B0%91%E5%AD%98%E6%AC%BE7%E6%9C%88%E5%8F%88%E5%B0%91%E4%BA%866300%E4%BA%BF%23) `405.5K 🔥` `+79%`
1. [Jennie因服装问题道歉 (Jennie apologizes for clothing issue)](https://s.weibo.com/weibo?q=%23Jennie%E5%9B%A0%E6%9C%8D%E8%A3%85%E9%97%AE%E9%A2%98%E9%81%93%E6%AD%89%23) `284.0K 🔥` `+25%`
1. [王俊凯口误了 (Wang Junkai made a mistake)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%A3%E8%AF%AF%E4%BA%86%23) `212.9K 🔥` `+46%`
1. [王曼昱瑞典大满贯冠军 (Wang Manyu Swedish Grand Slam Champion)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%A0%E5%86%9B%23) `204.2K 🔥` `+43%`
1. [盗墓笔记 (Tomb robbing notes)](https://s.weibo.com/weibo?q=%23%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0%23) `147.7K 🔥` `+38%`
1. [有人要求政府联系某明星给自己过生日 (Someone asked the government to contact a certain celebrity to celebrate his birthday)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E8%A6%81%E6%B1%82%E6%94%BF%E5%BA%9C%E8%81%94%E7%B3%BB%E6%9F%90%E6%98%8E%E6%98%9F%E7%BB%99%E8%87%AA%E5%B7%B1%E8%BF%87%E7%94%9F%E6%97%A5%23) `128.7K 🔥` `+63%`
1. [王源年度最佳内地男歌手 (Wang Yuan Best Mainland Male Singer of the Year)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E5%86%85%E5%9C%B0%E7%94%B7%E6%AD%8C%E6%89%8B%23) `112.7K 🔥` `+71%`
1. [张睿披哥下沉市场口碑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%8A%AB%E5%93%A5%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `109.5K 🔥` `+28%`
1. [小沈阳初舞台第一 (Xiaoshenyang first stage)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%88%9D%E8%88%9E%E5%8F%B0%E7%AC%AC%E4%B8%80%23) `88.6K 🔥` `+36%`
1. [吴艳妮13秒12夺冠 (Wu Yanni won the championship in 13.12 seconds)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE13%E7%A7%9212%E5%A4%BA%E5%86%A0%23) `88.4K 🔥` `+44%`
1. [3孩2非亲生妻子给陌生男人发儿子照片](https://s.weibo.com/weibo?q=%233%E5%AD%A92%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A6%BB%E5%AD%90%E7%BB%99%E9%99%8C%E7%94%9F%E7%94%B7%E4%BA%BA%E5%8F%91%E5%84%BF%E5%AD%90%E7%85%A7%E7%89%87%23) `88.0K 🔥` `+49%`
1. [礼物要送有溢价的东西](https://s.weibo.com/weibo?q=%23%E7%A4%BC%E7%89%A9%E8%A6%81%E9%80%81%E6%9C%89%E6%BA%A2%E4%BB%B7%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `87.3K 🔥` `+51%`
1. [台风过后推开门我差点哭出来 (I almost cried when I opened the door after the typhoon.)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E8%BF%87%E5%90%8E%E6%8E%A8%E5%BC%80%E9%97%A8%E6%88%91%E5%B7%AE%E7%82%B9%E5%93%AD%E5%87%BA%E6%9D%A5%23) `86.8K 🔥` `+34%`
1. [C罗乔治娜婚礼合照 (Ronaldo Georgina wedding photos)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E5%A9%9A%E7%A4%BC%E5%90%88%E7%85%A7%23) `86.4K 🔥` `+50%`
1. [建议大家减少对日常琐事的决策时间 (It is recommended that everyone spend less time making decisions on daily trivial matters)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%87%8F%E5%B0%91%E5%AF%B9%E6%97%A5%E5%B8%B8%E7%90%90%E4%BA%8B%E7%9A%84%E5%86%B3%E7%AD%96%E6%97%B6%E9%97%B4%23) `86.1K 🔥` `+36%`
1. [女子送闺蜜手串后偷走金手镯 (Woman steals gold bracelet after giving it to best friend)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%80%81%E9%97%BA%E8%9C%9C%E6%89%8B%E4%B8%B2%E5%90%8E%E5%81%B7%E8%B5%B0%E9%87%91%E6%89%8B%E9%95%AF%23) `85.6K 🔥` `+41%`
1. [伊朗称美军已被驱逐不得进入海峡 (Iran says U.S. troops have been expelled and not allowed to enter strait)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%86%9B%E5%B7%B2%E8%A2%AB%E9%A9%B1%E9%80%90%E4%B8%8D%E5%BE%97%E8%BF%9B%E5%85%A5%E6%B5%B7%E5%B3%A1%23) `85.1K 🔥` `+48%`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `84.6K 🔥` `+47%`
1. [你是我见过炒蛋炒饭最干净的厨子了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E6%88%91%E8%A7%81%E8%BF%87%E7%82%92%E8%9B%8B%E7%82%92%E9%A5%AD%E6%9C%80%E5%B9%B2%E5%87%80%E7%9A%84%E5%8E%A8%E5%AD%90%E4%BA%86%23) `84.5K 🔥` `+47%`
1. [对症运动长脑子 (Symptomatic exercise strengthens the brain)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%97%87%E8%BF%90%E5%8A%A8%E9%95%BF%E8%84%91%E5%AD%90%23) `83.6K 🔥` `+45%`
1. [王曼昱vs王艺迪 (Wang Manyu vs Wang Yidi)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E7%8E%8B%E8%89%BA%E8%BF%AA%23) `83.4K 🔥` `+29%`
1. [旺旺的无糖产品连店员都没听过 (Even the store clerk has never heard of Want Want’s sugar-free products.)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E7%9A%84%E6%97%A0%E7%B3%96%E4%BA%A7%E5%93%81%E8%BF%9E%E5%BA%97%E5%91%98%E9%83%BD%E6%B2%A1%E5%90%AC%E8%BF%87%23) `83.0K 🔥` `+29%`
1. [过度提醒有时是种提前责备](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E6%8F%90%E9%86%92%E6%9C%89%E6%97%B6%E6%98%AF%E7%A7%8D%E6%8F%90%E5%89%8D%E8%B4%A3%E5%A4%87%23) `82.7K 🔥` `+29%`
1. [王橹杰 上春山 (Wang Lujie Shangchunshan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%B8%8A%E6%98%A5%E5%B1%B1%23) `81.5K 🔥` `+41%`
1. [狼队战胜AG (Wolves beat AG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG%23) `80.9K 🔥` `+40%`
1. [世界最丑狗大赛冠军 (World's Ugliest Dog Contest Winner)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9C%80%E4%B8%91%E7%8B%97%E5%A4%A7%E8%B5%9B%E5%86%A0%E5%86%9B%23) `80.4K 🔥` `+40%`
1. [王俊凯一直在咳嗽 (Wang Junkai has been coughing)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%92%B3%E5%97%BD%23) `80.3K 🔥` `+39%`
1. [TMEA获奖名单 (TMEA winners list)](https://s.weibo.com/weibo?q=%23TMEA%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `79.8K 🔥` `+39%`
1. [巴西一杀手指着男子头扣扳机结果卡壳 (A Brazilian killer pointed at a man's head and pulled the trigger, but it jammed)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E4%B8%80%E6%9D%80%E6%89%8B%E6%8C%87%E7%9D%80%E7%94%B7%E5%AD%90%E5%A4%B4%E6%89%A3%E6%89%B3%E6%9C%BA%E7%BB%93%E6%9E%9C%E5%8D%A1%E5%A3%B3%23) `79.4K 🔥` `+38%`
1. [四代跳Attention (Four generations of jump Attention)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%BB%A3%E8%B7%B3Attention%23) `79.1K 🔥` `+37%`
1. [王曼昱4比2王艺迪 (Wang Manyu 4 to 2 Wang Yidi)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%942%E7%8E%8B%E8%89%BA%E8%BF%AA%23) `78.9K 🔥` `+37%`
1. [披哥初舞台危险成员](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E5%88%9D%E8%88%9E%E5%8F%B0%E5%8D%B1%E9%99%A9%E6%88%90%E5%91%98%23) `78.4K 🔥` `+36%`
1. [谷爱凌最后一个吃到自己的瓜 (Gu Ailing was the last to eat her own melon)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%90%83%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `77.9K 🔥` `+35%`
1. [离世39岁儿科医生最后一条朋友圈 (The last post of the 39-year-old pediatrician who passed away in his circle of friends)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E4%B8%9639%E5%B2%81%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E6%9C%80%E5%90%8E%E4%B8%80%E6%9D%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `131.6K 🔥`
1. [谷爱凌否认恋情 (Gu Ailing denies love affair)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `117.2K 🔥`
1. [阿森纳3比0曼城 (Arsenal 3-0 Manchester City)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B33%E6%AF%940%E6%9B%BC%E5%9F%8E%23) `88.7K 🔥`
1. [沈佳润还是藏不住事的年纪 (Shen Jiarun is still at an age where she can’t hide things)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%BF%98%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%8B%E7%9A%84%E5%B9%B4%E7%BA%AA%23) `78.2K 🔥`
1. [丁程鑫从不遮掩自己农村家庭背景 (Ding Chengxin never hides his rural family background)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BB%8E%E4%B8%8D%E9%81%AE%E6%8E%A9%E8%87%AA%E5%B7%B1%E5%86%9C%E6%9D%91%E5%AE%B6%E5%BA%AD%E8%83%8C%E6%99%AF%23) `130.4K 🔥` `-48%`
1. [赵今麦好美 (Zhao Jinmai is so beautiful)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A5%BD%E7%BE%8E%23) `88.6K 🔥` `-67%`
1. [麦琳确实很适合亚裔妆容 (Mai Lin is really suitable for Asian makeup)](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%A1%AE%E5%AE%9E%E5%BE%88%E9%80%82%E5%90%88%E4%BA%9A%E8%A3%94%E5%A6%86%E5%AE%B9%23) `87.7K 🔥` `-54%`
1. [严浩翔的排面 (Yan Haoxiang's noodles)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%84%E6%8E%92%E9%9D%A2%23) `83.9K 🔥` `-62%`
1. [杜华 叔圈天菜是说不明白了](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%20%E5%8F%94%E5%9C%88%E5%A4%A9%E8%8F%9C%E6%98%AF%E8%AF%B4%E4%B8%8D%E6%98%8E%E7%99%BD%E4%BA%86%23) `82.2K 🔥` `-46%`

Updated at 2026-08-17 07:28:15

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
