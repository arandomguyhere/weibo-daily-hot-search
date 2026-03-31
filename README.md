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

1. [瑞幸 紫椰子 (Luckin Purple Coconut)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E7%B4%AB%E6%A4%B0%E5%AD%90%23) `1.2M 🔥` `NEW`
1. [国足负于10人喀麦隆](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%B4%9F%E4%BA%8E10%E4%BA%BA%E5%96%80%E9%BA%A6%E9%9A%86%23) `840.2K 🔥` `NEW`
1. [4月一批新规将施行](https://s.weibo.com/weibo?q=%234%E6%9C%88%E4%B8%80%E6%89%B9%E6%96%B0%E8%A7%84%E5%B0%86%E6%96%BD%E8%A1%8C%23) `652.8K 🔥` `NEW`
1. [Ruler 韩国兵役](https://s.weibo.com/weibo?q=%23Ruler%20%E9%9F%A9%E5%9B%BD%E5%85%B5%E5%BD%B9%23) `338.2K 🔥` `NEW`
1. [范世錡怎么了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%96%E9%8C%A1%E6%80%8E%E4%B9%88%E4%BA%86%23) `213.6K 🔥` `NEW`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `211.4K 🔥` `NEW`
1. [乘风2026助力团王俊凯](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%8A%A9%E5%8A%9B%E5%9B%A2%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `195.2K 🔥` `NEW`
1. [瑷尔博士抗衰老的中国解法](https://s.weibo.com/weibo?q=%23%E7%91%B7%E5%B0%94%E5%8D%9A%E5%A3%AB%E6%8A%97%E8%A1%B0%E8%80%81%E7%9A%84%E4%B8%AD%E5%9B%BD%E8%A7%A3%E6%B3%95%23) `191.4K 🔥` `NEW`
1. [连线张雪纪录片拍摄者](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BA%BF%E5%BC%A0%E9%9B%AA%E7%BA%AA%E5%BD%95%E7%89%87%E6%8B%8D%E6%91%84%E8%80%85%23) `187.4K 🔥` `NEW`
1. [鞠婧祎工作室改名字了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%94%B9%E5%90%8D%E5%AD%97%E4%BA%86%23) `173.1K 🔥` `NEW`
1. [陈妍希跟腱断裂 (Michelle Chen's Achilles tendon rupture)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%B7%9F%E8%85%B1%E6%96%AD%E8%A3%82%23) `165.5K 🔥` `NEW`
1. [小米YU7GT新配色现身纽北](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E6%96%B0%E9%85%8D%E8%89%B2%E7%8E%B0%E8%BA%AB%E7%BA%BD%E5%8C%97%23) `165.2K 🔥` `NEW`
1. [4月5月6月每个月都有假](https://s.weibo.com/weibo?q=%234%E6%9C%885%E6%9C%886%E6%9C%88%E6%AF%8F%E4%B8%AA%E6%9C%88%E9%83%BD%E6%9C%89%E5%81%87%23) `121.9K 🔥` `NEW`
1. [五菱华为乾崑双向奔赴](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%8F%B1%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `120.5K 🔥` `NEW`
1. [乘风2026排名](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E6%8E%92%E5%90%8D%23) `113.2K 🔥` `NEW`
1. [上班心态](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%BF%83%E6%80%81%23) `96.8K 🔥` `NEW`
1. [曾毅扔伞报复玲花](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%AF%85%E6%89%94%E4%BC%9E%E6%8A%A5%E5%A4%8D%E7%8E%B2%E8%8A%B1%23) `94.4K 🔥` `NEW`
1. [曝LCK删除Ruler片段](https://s.weibo.com/weibo?q=%23%E6%9B%9DLCK%E5%88%A0%E9%99%A4Ruler%E7%89%87%E6%AE%B5%23) `94.4K 🔥` `NEW`
1. [徐梦洁sugar初舞台](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81sugar%E5%88%9D%E8%88%9E%E5%8F%B0%23) `93.6K 🔥` `NEW`
1. [狗狗消费降级后脸色都变了](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E6%B6%88%E8%B4%B9%E9%99%8D%E7%BA%A7%E5%90%8E%E8%84%B8%E8%89%B2%E9%83%BD%E5%8F%98%E4%BA%86%23) `89.9K 🔥` `NEW`
1. [红果回应普通人形象被AI短剧盗脸 (Hongguo responded that the image of ordinary people was stolen by AI skits)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%9B%9E%E5%BA%94%E6%99%AE%E9%80%9A%E4%BA%BA%E5%BD%A2%E8%B1%A1%E8%A2%ABAI%E7%9F%AD%E5%89%A7%E7%9B%97%E8%84%B8%23) `85.9K 🔥` `NEW`
1. [B站明日将下线猜你喜欢算法](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%8E%E6%97%A5%E5%B0%86%E4%B8%8B%E7%BA%BF%E7%8C%9C%E4%BD%A0%E5%96%9C%E6%AC%A2%E7%AE%97%E6%B3%95%23) `85.4K 🔥` `NEW`
1. [DeepSeek被做成纸扎了](https://s.weibo.com/weibo?q=%23DeepSeek%E8%A2%AB%E5%81%9A%E6%88%90%E7%BA%B8%E6%89%8E%E4%BA%86%23) `81.4K 🔥` `NEW`
1. [王楚然请粉丝吃串串](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%AF%B7%E7%B2%89%E4%B8%9D%E5%90%83%E4%B8%B2%E4%B8%B2%23) `80.7K 🔥` `NEW`
1. [朱莉眼睛怎么了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%8E%89%E7%9C%BC%E7%9D%9B%E6%80%8E%E4%B9%88%E4%BA%86%23) `77.7K 🔥` `NEW`
1. [范世錡工作室回应被删](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%96%E9%8C%A1%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%88%A0%23) `395.3K 🔥` `+56%`
1. [麻辣烫里最夯的是啥菜](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%87%8C%E6%9C%80%E5%A4%AF%E7%9A%84%E6%98%AF%E5%95%A5%E8%8F%9C%23) `336.7K 🔥` `+31%`
1. [米饭拌白糖](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E9%A5%AD%E6%8B%8C%E7%99%BD%E7%B3%96%23) `291.3K 🔥` `+39%`
1. [李健硬要给许飞版权费 (Li Jian insists on paying royalties to Xu Fei)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E7%A1%AC%E8%A6%81%E7%BB%99%E8%AE%B8%E9%A3%9E%E7%89%88%E6%9D%83%E8%B4%B9%23) `262.1K 🔥` `+40%`
1. [人民日报曾评单依纯李白改编争议 (People's Daily once commented on the controversy over Shan Yichun's adaptation of Li Bai)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%9B%BE%E8%AF%84%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%9D%8E%E7%99%BD%E6%94%B9%E7%BC%96%E4%BA%89%E8%AE%AE%23) `212.7K 🔥` `+41%`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `215.7K 🔥`
1. [怪不得公司一边招人一边裁员](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%85%AC%E5%8F%B8%E4%B8%80%E8%BE%B9%E6%8B%9B%E4%BA%BA%E4%B8%80%E8%BE%B9%E8%A3%81%E5%91%98%23) `214.7K 🔥`
1. [广州长隆回应狮子静坐淋雨 (Guangzhou Chimelong responds to lion sit-in and gets rained on)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%95%BF%E9%9A%86%E5%9B%9E%E5%BA%94%E7%8B%AE%E5%AD%90%E9%9D%99%E5%9D%90%E6%B7%8B%E9%9B%A8%23) `213.3K 🔥`
1. [严浩翔考核试卷](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%80%83%E6%A0%B8%E8%AF%95%E5%8D%B7%23) `211.7K 🔥`
1. [痞幼直播时抽烟](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E7%9B%B4%E6%92%AD%E6%97%B6%E6%8A%BD%E7%83%9F%23) `180.1K 🔥`
1. [黄油年糕被改名为韩国年糕](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B2%B9%E5%B9%B4%E7%B3%95%E8%A2%AB%E6%94%B9%E5%90%8D%E4%B8%BA%E9%9F%A9%E5%9B%BD%E5%B9%B4%E7%B3%95%23) `174.4K 🔥`
1. [动荡的内娱迎来了最清醒的粉丝](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E8%8D%A1%E7%9A%84%E5%86%85%E5%A8%B1%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E6%B8%85%E9%86%92%E7%9A%84%E7%B2%89%E4%B8%9D%23) `127.4K 🔥`
1. [中国3艘船成功通过霍尔木兹海峡 (Three Chinese ships successfully passed through the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD3%E8%89%98%E8%88%B9%E6%88%90%E5%8A%9F%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `120.1K 🔥`
1. [辛苦考上幼师后幼儿园却没了](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8B%A6%E8%80%83%E4%B8%8A%E5%B9%BC%E5%B8%88%E5%90%8E%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%8D%B4%E6%B2%A1%E4%BA%86%23) `119.8K 🔥`
1. [我不成仙](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E6%88%90%E4%BB%99%23) `107.9K 🔥`
1. [每天午睡vs从不午睡有多大差别 (What’s the difference between napping every day vs. never napping?)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%8D%88%E7%9D%A1vs%E4%BB%8E%E4%B8%8D%E5%8D%88%E7%9D%A1%E6%9C%89%E5%A4%9A%E5%A4%A7%E5%B7%AE%E5%88%AB%23) `107.0K 🔥`
1. [AI演员 拼尸块 (AI actor pieced together corpse)](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%20%E6%8B%BC%E5%B0%B8%E5%9D%97%23) `99.5K 🔥`
1. [京东AI家电家居以旧换新不止5折 (JD AI home appliances trade-in for new ones is more than 50% off)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CAI%E5%AE%B6%E7%94%B5%E5%AE%B6%E5%B1%85%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E4%B8%8D%E6%AD%A25%E6%8A%98%23) `614.2K 🔥` `-52%`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `255.5K 🔥` `-77%`
1. [曾沛慈人气第一](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%BA%BA%E6%B0%94%E7%AC%AC%E4%B8%80%23) `215.1K 🔥` `-60%`
1. [鞠婧祎工作室声明 (Ju Jingyi Studio Statement)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `185.7K 🔥` `-97%`
1. [一年前离职的时候就预判了今天](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E5%89%8D%E7%A6%BB%E8%81%8C%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E9%A2%84%E5%88%A4%E4%BA%86%E4%BB%8A%E5%A4%A9%23) `114.5K 🔥` `-53%`
1. [爸爸去哪儿的阿拉蕾长大了 (Arale from Where Are We Going, Dad? has grown up.)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF%E7%9A%84%E9%98%BF%E6%8B%89%E8%95%BE%E9%95%BF%E5%A4%A7%E4%BA%86%23) `95.9K 🔥` `-35%`
1. [乘风2026 (Chengfeng 2026)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `87.3K 🔥` `-79%`
1. [森林北自曝曾抑制身高 (Forest North revealed that he had suppressed his height)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E8%87%AA%E6%9B%9D%E6%9B%BE%E6%8A%91%E5%88%B6%E8%BA%AB%E9%AB%98%23) `82.9K 🔥` `-36%`

Updated at 2026-03-31 17:35:24

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
