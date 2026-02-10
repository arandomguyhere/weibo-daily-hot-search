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

1. [瑞幸 错别字 (Luckin typo)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E9%94%99%E5%88%AB%E5%AD%97%23) `1.2M 🔥` `NEW`
1. [中国人自己的新年气氛组](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%B0%E5%B9%B4%E6%B0%94%E6%B0%9B%E7%BB%84%23) `683.3K 🔥` `NEW`
1. [46岁女儿被89岁妈妈轻拍哄睡](https://s.weibo.com/weibo?q=%2346%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB89%E5%B2%81%E5%A6%88%E5%A6%88%E8%BD%BB%E6%8B%8D%E5%93%84%E7%9D%A1%23) `379.3K 🔥` `NEW`
1. [骑手给妻子换手机被反复要求退货](https://s.weibo.com/weibo?q=%23%E9%AA%91%E6%89%8B%E7%BB%99%E5%A6%BB%E5%AD%90%E6%8D%A2%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%8F%8D%E5%A4%8D%E8%A6%81%E6%B1%82%E9%80%80%E8%B4%A7%23) `372.3K 🔥` `NEW`
1. [杨紫迎来剧生嫡长女](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%BF%8E%E6%9D%A5%E5%89%A7%E7%94%9F%E5%AB%A1%E9%95%BF%E5%A5%B3%23) `320.7K 🔥` `NEW`
1. [电影火拼冲锋队薪火锐战](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E7%81%AB%E6%8B%BC%E5%86%B2%E9%94%8B%E9%98%9F%E8%96%AA%E7%81%AB%E9%94%90%E6%88%98%23) `315.1K 🔥` `NEW`
1. [易烊千玺 别剧透](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E5%88%AB%E5%89%A7%E9%80%8F%23) `215.6K 🔥` `NEW`
1. [成毅杀青不限量奶茶](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%9D%80%E9%9D%92%E4%B8%8D%E9%99%90%E9%87%8F%E5%A5%B6%E8%8C%B6%23) `173.7K 🔥` `NEW`
1. [虞书欣新歌WouldYouLikeThat](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8CWouldYouLikeThat%23) `136.5K 🔥` `NEW`
1. [导演张中一病逝](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E5%BC%A0%E4%B8%AD%E4%B8%80%E7%97%85%E9%80%9D%23) `112.4K 🔥` `NEW`
1. [在青岛举杯接福 (Raise a glass to receive blessings in Qingdao)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9D%92%E5%B2%9B%E4%B8%BE%E6%9D%AF%E6%8E%A5%E7%A6%8F%23) `110.4K 🔥` `NEW`
1. [安徽一大姨烫头6小时狗都等emo了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%B8%80%E5%A4%A7%E5%A7%A8%E7%83%AB%E5%A4%B46%E5%B0%8F%E6%97%B6%E7%8B%97%E9%83%BD%E7%AD%89emo%E4%BA%86%23) `109.5K 🔥` `NEW`
1. [蔡徐坤colder花絮](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4colder%E8%8A%B1%E7%B5%AE%23) `100.6K 🔥` `NEW`
1. [春节档预售票房](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%E9%A2%84%E5%94%AE%E7%A5%A8%E6%88%BF%23) `96.9K 🔥` `NEW`
1. [第一批放假的人已经在逛早市了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%94%BE%E5%81%87%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%9C%A8%E9%80%9B%E6%97%A9%E5%B8%82%E4%BA%86%23) `94.2K 🔥` `NEW`
1. [BLACKPINK什么时候换人了](https://s.weibo.com/weibo?q=%23BLACKPINK%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%8D%A2%E4%BA%BA%E4%BA%86%23) `94.1K 🔥` `NEW`
1. [我们的少年时代2开机路透](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E6%9C%BA%E8%B7%AF%E9%80%8F%23) `93.1K 🔥` `NEW`
1. [山东金矿事故致7死11人被控制](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%87%91%E7%9F%BF%E4%BA%8B%E6%95%85%E8%87%B47%E6%AD%BB11%E4%BA%BA%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `92.7K 🔥` `NEW`
1. [过年终于敢开电车回老家了](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E7%BB%88%E4%BA%8E%E6%95%A2%E5%BC%80%E7%94%B5%E8%BD%A6%E5%9B%9E%E8%80%81%E5%AE%B6%E4%BA%86%23) `91.6K 🔥` `NEW`
1. [雷霆战胜湖人](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86%E6%88%98%E8%83%9C%E6%B9%96%E4%BA%BA%23) `91.4K 🔥` `NEW`
1. [勇士绝杀灰熊 (Warriors beat Grizzlies)](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%AB%E7%BB%9D%E6%9D%80%E7%81%B0%E7%86%8A%23) `91.3K 🔥` `NEW`
1. [元宝回应微信福袋](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%9B%9E%E5%BA%94%E5%BE%AE%E4%BF%A1%E7%A6%8F%E8%A2%8B%23) `89.4K 🔥` `NEW`
1. [手机出现这些问题就是被控屏了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%87%BA%E7%8E%B0%E8%BF%99%E4%BA%9B%E9%97%AE%E9%A2%98%E5%B0%B1%E6%98%AF%E8%A2%AB%E6%8E%A7%E5%B1%8F%E4%BA%86%23) `89.3K 🔥` `NEW`
1. [西夏王陵 审美](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%A4%8F%E7%8E%8B%E9%99%B5%20%E5%AE%A1%E7%BE%8E%23) `87.1K 🔥` `NEW`
1. [周大福定价黄金又要涨价了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E5%AE%9A%E4%BB%B7%E9%BB%84%E9%87%91%E5%8F%88%E8%A6%81%E6%B6%A8%E4%BB%B7%E4%BA%86%23) `86.3K 🔥` `NEW`
1. [现在的老人vs以后的老人](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%80%81%E4%BA%BAvs%E4%BB%A5%E5%90%8E%E7%9A%84%E8%80%81%E4%BA%BA%23) `85.0K 🔥` `NEW`
1. [元宝微信发红包](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%BE%AE%E4%BF%A1%E5%8F%91%E7%BA%A2%E5%8C%85%23) `933.3K 🔥` `+722%`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `307.9K 🔥` `+80%`
1. [外卖员跑腿买药被判贩卖毒品罪](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E8%B7%91%E8%85%BF%E4%B9%B0%E8%8D%AF%E8%A2%AB%E5%88%A4%E8%B4%A9%E5%8D%96%E6%AF%92%E5%93%81%E7%BD%AA%23) `217.5K 🔥` `+35%`
1. [谷爱凌回应特朗普大骂冬奥运动员](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%A7%E9%AA%82%E5%86%AC%E5%A5%A5%E8%BF%90%E5%8A%A8%E5%91%98%23) `208.3K 🔥` `+25%`
1. [黑神话钟馗 (Black myth Zhong Kui)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%23) `285.4K 🔥`
1. [车祸后妹妹以为冷却液是血嚎啕大哭 (After the car accident, my sister cried because she thought the coolant was blood.)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E7%A5%B8%E5%90%8E%E5%A6%B9%E5%A6%B9%E4%BB%A5%E4%B8%BA%E5%86%B7%E5%8D%B4%E6%B6%B2%E6%98%AF%E8%A1%80%E5%9A%8E%E5%95%95%E5%A4%A7%E5%93%AD%23) `191.5K 🔥`
1. [女子孕期被疑出轨公公转650万安抚 (Woman suspected of cheating on her father-in-law during pregnancy sends 6.5 million yuan to comfort her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E8%A2%AB%E7%96%91%E5%87%BA%E8%BD%A8%E5%85%AC%E5%85%AC%E8%BD%AC650%E4%B8%87%E5%AE%89%E6%8A%9A%23) `173.8K 🔥`
1. [AI短剧](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%23) `155.0K 🔥`
1. [羊了个羊](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E4%BA%86%E4%B8%AA%E7%BE%8A%23) `109.8K 🔥`
1. [元宝红包](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E7%BA%A2%E5%8C%85%23) `97.5K 🔥`
1. [易炼红被查 (Yi Lianhong was investigated)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%82%BC%E7%BA%A2%E8%A2%AB%E6%9F%A5%23) `249.6K 🔥` `-78%`
1. [汕头亚朵酒店春节一晚4200 (Shantou Atour Hotel Spring Festival one night 4200)](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E4%BA%9A%E6%9C%B5%E9%85%92%E5%BA%97%E6%98%A5%E8%8A%82%E4%B8%80%E6%99%9A4200%23) `129.7K 🔥` `-55%`
1. [弯刀裤](https://s.weibo.com/weibo?q=%23%E5%BC%AF%E5%88%80%E8%A3%A4%23) `110.3K 🔥` `-35%`
1. [杨紫新剧1集头发全白了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A71%E9%9B%86%E5%A4%B4%E5%8F%91%E5%85%A8%E7%99%BD%E4%BA%86%23) `110.1K 🔥` `-35%`
1. [董璇张维伊陪小酒窝上课](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E9%99%AA%E5%B0%8F%E9%85%92%E7%AA%9D%E4%B8%8A%E8%AF%BE%23) `109.3K 🔥` `-32%`
1. [2026央视网络春晚节目单来了 (2026 CCTV Online Spring Festival Gala program list is here)](https://s.weibo.com/weibo?q=%232026%E5%A4%AE%E8%A7%86%E7%BD%91%E7%BB%9C%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9D%A5%E4%BA%86%23) `108.9K 🔥` `-87%`
1. [孙颖莎ELLE开季封面预告 (Sun Yingsha ELLE season opening cover preview)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%E5%BC%80%E5%AD%A3%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `107.2K 🔥` `-34%`
1. [金枝](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%23) `106.2K 🔥` `-33%`
1. [宋威龙赵今麦代言娇兰](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E4%BB%A3%E8%A8%80%E5%A8%87%E5%85%B0%23) `105.3K 🔥` `-36%`
1. [不要对AI说谢谢](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%AF%B9AI%E8%AF%B4%E8%B0%A2%E8%B0%A2%23) `100.7K 🔥` `-39%`
1. [李一桐陈星旭领衔主演金枝 (Li Yitong and Chen Xingxu star in Jin Zhi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%99%88%E6%98%9F%E6%97%AD%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E9%87%91%E6%9E%9D%23) `100.4K 🔥` `-37%`
1. [向太自曝因脑下垂体瘤一直发胖 (Xiang Tai reveals that he has been gaining weight due to pituitary gland tumor)](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%87%AA%E6%9B%9D%E5%9B%A0%E8%84%91%E4%B8%8B%E5%9E%82%E4%BD%93%E7%98%A4%E4%B8%80%E7%9B%B4%E5%8F%91%E8%83%96%23) `95.6K 🔥` `-40%`
1. [小年 (Xiaonian)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `89.4K 🔥` `-29%`
1. [家长把4岁和8岁孩子塞进后备箱返乡 (Parents put 4-year-old and 8-year-old children in the trunk and return home)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%8A%8A4%E5%B2%81%E5%92%8C8%E5%B2%81%E5%AD%A9%E5%AD%90%E5%A1%9E%E8%BF%9B%E5%90%8E%E5%A4%87%E7%AE%B1%E8%BF%94%E4%B9%A1%23) `87.1K 🔥` `-46%`
1. [谷爱凌错失金牌根本原因](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%94%99%E5%A4%B1%E9%87%91%E7%89%8C%E6%A0%B9%E6%9C%AC%E5%8E%9F%E5%9B%A0%23) `84.7K 🔥` `-48%`

Updated at 2026-02-10 14:38:45

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
