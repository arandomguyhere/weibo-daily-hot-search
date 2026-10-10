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

1. [男领导发淫秽照女下属母亲上门讨说法](https://s.weibo.com/weibo?q=%23%E7%94%B7%E9%A2%86%E5%AF%BC%E5%8F%91%E6%B7%AB%E7%A7%BD%E7%85%A7%E5%A5%B3%E4%B8%8B%E5%B1%9E%E6%AF%8D%E4%BA%B2%E4%B8%8A%E9%97%A8%E8%AE%A8%E8%AF%B4%E6%B3%95%23) `3.2M 🔥` `NEW`
1. [单亲妈妈仅退款童装勒索3千被刑拘](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E4%BB%85%E9%80%80%E6%AC%BE%E7%AB%A5%E8%A3%85%E5%8B%92%E7%B4%A23%E5%8D%83%E8%A2%AB%E5%88%91%E6%8B%98%23) `1.2M 🔥` `NEW`
1. [卫星互联网低轨27组卫星成功发射](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E4%BA%92%E8%81%94%E7%BD%91%E4%BD%8E%E8%BD%A827%E7%BB%84%E5%8D%AB%E6%98%9F%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%23) `1.1M 🔥` `NEW`
1. [国乒调整亚锦赛名单](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E8%B0%83%E6%95%B4%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%90%8D%E5%8D%95%23) `1.1M 🔥` `NEW`
1. [王仁君成功接班唐国强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E6%88%90%E5%8A%9F%E6%8E%A5%E7%8F%AD%E5%94%90%E5%9B%BD%E5%BC%BA%23) `898.8K 🔥` `NEW`
1. [买榴莲开出土豆太离谱](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%A6%B4%E8%8E%B2%E5%BC%80%E5%87%BA%E5%9C%9F%E8%B1%86%E5%A4%AA%E7%A6%BB%E8%B0%B1%23) `882.9K 🔥` `NEW`
1. [花少偶数季魔咒确实服了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%81%B6%E6%95%B0%E5%AD%A3%E9%AD%94%E5%92%92%E7%A1%AE%E5%AE%9E%E6%9C%8D%E4%BA%86%23) `722.4K 🔥` `NEW`
1. [核磁共振为什么这么贵](https://s.weibo.com/weibo?q=%23%E6%A0%B8%E7%A3%81%E5%85%B1%E6%8C%AF%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%99%E4%B9%88%E8%B4%B5%23) `654.8K 🔥` `NEW`
1. [警方通报王皓被围堵辱骂处理结果](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%8E%8B%E7%9A%93%E8%A2%AB%E5%9B%B4%E5%A0%B5%E8%BE%B1%E9%AA%82%E5%A4%84%E7%90%86%E7%BB%93%E6%9E%9C%23) `599.2K 🔥` `NEW`
1. [沐言爸爸 太烧心啦](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%20%E5%A4%AA%E7%83%A7%E5%BF%83%E5%95%A6%23) `588.1K 🔥` `NEW`
1. [黑客被日本运维整崩溃](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%AE%A2%E8%A2%AB%E6%97%A5%E6%9C%AC%E8%BF%90%E7%BB%B4%E6%95%B4%E5%B4%A9%E6%BA%83%23) `579.6K 🔥` `NEW`
1. [王仁君裤子太紧没及时回复赵丽颖](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E8%A3%A4%E5%AD%90%E5%A4%AA%E7%B4%A7%E6%B2%A1%E5%8F%8A%E6%97%B6%E5%9B%9E%E5%A4%8D%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `574.3K 🔥` `NEW`
1. [王曼昱摔倒蒯曼一脸担心](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%91%94%E5%80%92%E8%92%AF%E6%9B%BC%E4%B8%80%E8%84%B8%E6%8B%85%E5%BF%83%23) `567.2K 🔥` `NEW`
1. [林诗栋梁靖崑因伤取消亚锦赛报名](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%A2%81%E9%9D%96%E5%B4%91%E5%9B%A0%E4%BC%A4%E5%8F%96%E6%B6%88%E4%BA%9A%E9%94%A6%E8%B5%9B%E6%8A%A5%E5%90%8D%23) `567.2K 🔥` `NEW`
1. [我对我弟的慷慨程度](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AF%B9%E6%88%91%E5%BC%9F%E7%9A%84%E6%85%B7%E6%85%A8%E7%A8%8B%E5%BA%A6%23) `487.7K 🔥` `NEW`
1. [山姆 亲友卡新规](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%20%E4%BA%B2%E5%8F%8B%E5%8D%A1%E6%96%B0%E8%A7%84%23) `443.3K 🔥` `NEW`
1. [王曼昱反击摔倒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%8F%8D%E5%87%BB%E6%91%94%E5%80%92%23) `439.1K 🔥` `NEW`
1. [王曼昱摔倒所有人都紧张了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%91%94%E5%80%92%E6%89%80%E6%9C%89%E4%BA%BA%E9%83%BD%E7%B4%A7%E5%BC%A0%E4%BA%86%23) `409.2K 🔥` `NEW`
1. [小巷人家 奖缘](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%20%E5%A5%96%E7%BC%98%23) `408.9K 🔥` `NEW`
1. [鼓励灵活就业人员参加职工养老保险](https://s.weibo.com/weibo?q=%23%E9%BC%93%E5%8A%B1%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E5%91%98%E5%8F%82%E5%8A%A0%E8%81%8C%E5%B7%A5%E5%85%BB%E8%80%81%E4%BF%9D%E9%99%A9%23) `399.5K 🔥` `NEW`
1. [傅首尔靠跳绳瘦到140斤后](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E9%9D%A0%E8%B7%B3%E7%BB%B3%E7%98%A6%E5%88%B0140%E6%96%A4%E5%90%8E%23) `397.8K 🔥` `NEW`
1. [为什么热巴头发这么好](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%83%AD%E5%B7%B4%E5%A4%B4%E5%8F%91%E8%BF%99%E4%B9%88%E5%A5%BD%23) `384.8K 🔥` `NEW`
1. [曝徐良恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%AF%E6%81%8B%E6%83%85%23) `383.0K 🔥` `NEW`
1. [沐言爸爸回应生二胎](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E5%9B%9E%E5%BA%94%E7%94%9F%E4%BA%8C%E8%83%8E%23) `326.7K 🔥` `NEW`
1. [渣土车侧翻17岁女孩不幸身亡](https://s.weibo.com/weibo?q=%23%E6%B8%A3%E5%9C%9F%E8%BD%A6%E4%BE%A7%E7%BF%BB17%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%8D%E5%B9%B8%E8%BA%AB%E4%BA%A1%23) `307.4K 🔥` `NEW`
1. [女子转卖300万手表发现是男友偷的](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BD%AC%E5%8D%96300%E4%B8%87%E6%89%8B%E8%A1%A8%E5%8F%91%E7%8E%B0%E6%98%AF%E7%94%B7%E5%8F%8B%E5%81%B7%E7%9A%84%23) `294.0K 🔥` `NEW`
1. [徐梦洁网剧好一个乖乖女](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E7%BD%91%E5%89%A7%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3%23) `270.7K 🔥` `NEW`
1. [王仁君一看就不熬夜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E4%B8%80%E7%9C%8B%E5%B0%B1%E4%B8%8D%E7%86%AC%E5%A4%9C%23) `263.0K 🔥` `NEW`
1. [2026共创之夜阵容官宣](https://s.weibo.com/weibo?q=%232026%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `250.8K 🔥` `NEW`
1. [这就是为什么核磁共振这么贵](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BB%80%E4%B9%88%E6%A0%B8%E7%A3%81%E5%85%B1%E6%8C%AF%E8%BF%99%E4%B9%88%E8%B4%B5%23) `249.4K 🔥` `NEW`
1. [沈春阳到沈佳润房间要走10米走廊](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%98%A5%E9%98%B3%E5%88%B0%E6%B2%88%E4%BD%B3%E6%B6%A6%E6%88%BF%E9%97%B4%E8%A6%81%E8%B5%B010%E7%B1%B3%E8%B5%B0%E5%BB%8A%23) `235.9K 🔥` `NEW`
1. [两名内地女学生在澳门非法旅拍被捕](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%90%8D%E5%86%85%E5%9C%B0%E5%A5%B3%E5%AD%A6%E7%94%9F%E5%9C%A8%E6%BE%B3%E9%97%A8%E9%9D%9E%E6%B3%95%E6%97%85%E6%8B%8D%E8%A2%AB%E6%8D%95%23) `235.1K 🔥` `NEW`
1. [莫氏鸡煲老板又背贷款搞养殖](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%8F%88%E8%83%8C%E8%B4%B7%E6%AC%BE%E6%90%9E%E5%85%BB%E6%AE%96%23) `234.6K 🔥` `NEW`
1. [买榴莲开出土豆事件后续](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%A6%B4%E8%8E%B2%E5%BC%80%E5%87%BA%E5%9C%9F%E8%B1%86%E4%BA%8B%E4%BB%B6%E5%90%8E%E7%BB%AD%23) `228.9K 🔥` `NEW`
1. [张佳宁恭喜王仁君](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BD%B3%E5%AE%81%E6%81%AD%E5%96%9C%E7%8E%8B%E4%BB%81%E5%90%9B%23) `221.1K 🔥` `NEW`
1. [王仁君这段台词功底](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E8%BF%99%E6%AE%B5%E5%8F%B0%E8%AF%8D%E5%8A%9F%E5%BA%95%23) `220.9K 🔥` `NEW`
1. [刘宇宁献唱玉簟秋主题曲](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%8C%AE%E5%94%B1%E7%8E%89%E7%B0%9F%E7%A7%8B%E4%B8%BB%E9%A2%98%E6%9B%B2%23) `220.9K 🔥` `NEW`
1. [早田希娜凑前关心王曼昱摔倒](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E5%87%91%E5%89%8D%E5%85%B3%E5%BF%83%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%91%94%E5%80%92%23) `220.9K 🔥` `NEW`
1. [飞天奖神图有了](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%E7%A5%9E%E5%9B%BE%E6%9C%89%E4%BA%86%23) `214.3K 🔥` `NEW`
1. [雅思](https://s.weibo.com/weibo?q=%23%E9%9B%85%E6%80%9D%23) `196.0K 🔥` `NEW`
1. [沈春阳到女儿沈佳润房间叫起床](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%98%A5%E9%98%B3%E5%88%B0%E5%A5%B3%E5%84%BF%E6%B2%88%E4%BD%B3%E6%B6%A6%E6%88%BF%E9%97%B4%E5%8F%AB%E8%B5%B7%E5%BA%8A%23) `188.7K 🔥` `NEW`
1. [王曼昱蒯曼13天2冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%92%AF%E6%9B%BC13%E5%A4%A92%E5%86%A0%23) `183.6K 🔥` `NEW`
1. [半个车圈都在劝峰哥少说两句](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E8%BD%A6%E5%9C%88%E9%83%BD%E5%9C%A8%E5%8A%9D%E5%B3%B0%E5%93%A5%E5%B0%91%E8%AF%B4%E4%B8%A4%E5%8F%A5%23) `181.0K 🔥` `NEW`
1. [白敬亭王安宇载入狼人杀史册的一段](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E7%8E%8B%E5%AE%89%E5%AE%87%E8%BD%BD%E5%85%A5%E7%8B%BC%E4%BA%BA%E6%9D%80%E5%8F%B2%E5%86%8C%E7%9A%84%E4%B8%80%E6%AE%B5%23) `178.7K 🔥` `NEW`
1. [宋佳下沉口碑](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `172.3K 🔥` `NEW`
1. [博主愿花二十万彩礼娶闺蜜](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E6%84%BF%E8%8A%B1%E4%BA%8C%E5%8D%81%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%A8%B6%E9%97%BA%E8%9C%9C%23) `171.4K 🔥` `NEW`
1. [2026王者嘉年华](https://s.weibo.com/weibo?q=%232026%E7%8E%8B%E8%80%85%E5%98%89%E5%B9%B4%E5%8D%8E%23) `166.2K 🔥` `NEW`
1. [谢霆锋同款银河战舰700全球上市](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E5%90%8C%E6%AC%BE%E9%93%B6%E6%B2%B3%E6%88%98%E8%88%B0700%E5%85%A8%E7%90%83%E4%B8%8A%E5%B8%82%23) `863.6K 🔥`
1. [沐言爸爸隐婚生子女儿走红后才公开](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%88%B8%E7%88%B8%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%E5%A5%B3%E5%84%BF%E8%B5%B0%E7%BA%A2%E5%90%8E%E6%89%8D%E5%85%AC%E5%BC%80%23) `394.2K 🔥`
1. [女子仅退款9斤蜜薯称有本事来拿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE9%E6%96%A4%E8%9C%9C%E8%96%AF%E7%A7%B0%E6%9C%89%E6%9C%AC%E4%BA%8B%E6%9D%A5%E6%8B%BF%23) `589.4K 🔥` `-73%`

Updated at 2026-10-10 15:13:36

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
