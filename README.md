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

1. [Prada米兰女装秀](https://s.weibo.com/weibo?q=%23Prada%E7%B1%B3%E5%85%B0%E5%A5%B3%E8%A3%85%E7%A7%80%23) `598.0K 🔥` `NEW`
1. [AI或可替代教师只需一个班主任](https://s.weibo.com/weibo?q=%23AI%E6%88%96%E5%8F%AF%E6%9B%BF%E4%BB%A3%E6%95%99%E5%B8%88%E5%8F%AA%E9%9C%80%E4%B8%80%E4%B8%AA%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `555.2K 🔥` `NEW`
1. [潘展乐张展硕接力逆转](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E5%BC%A0%E5%B1%95%E7%A1%95%E6%8E%A5%E5%8A%9B%E9%80%86%E8%BD%AC%23) `144.7K 🔥` `NEW`
1. [林锦岐许兰香洞房强制爱](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E8%AE%B8%E5%85%B0%E9%A6%99%E6%B4%9E%E6%88%BF%E5%BC%BA%E5%88%B6%E7%88%B1%23) `122.5K 🔥` `NEW`
1. [王俊凯回复王源用了波浪号](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%A4%8D%E7%8E%8B%E6%BA%90%E7%94%A8%E4%BA%86%E6%B3%A2%E6%B5%AA%E5%8F%B7%23) `121.2K 🔥` `NEW`
1. [油价节前或大涨](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E8%8A%82%E5%89%8D%E6%88%96%E5%A4%A7%E6%B6%A8%23) `119.1K 🔥` `NEW`
1. [面包和馒头经常吃哪个更健康](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E5%8C%85%E5%92%8C%E9%A6%92%E5%A4%B4%E7%BB%8F%E5%B8%B8%E5%90%83%E5%93%AA%E4%B8%AA%E6%9B%B4%E5%81%A5%E5%BA%B7%23) `115.6K 🔥` `NEW`
1. [对一千块钱的概念越来越模糊了](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%80%E5%8D%83%E5%9D%97%E9%92%B1%E7%9A%84%E6%A6%82%E5%BF%B5%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%A8%A1%E7%B3%8A%E4%BA%86%23) `103.5K 🔥` `NEW`
1. [中国女排3比2逆转泰国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%942%E9%80%86%E8%BD%AC%E6%B3%B0%E5%9B%BD%23) `92.6K 🔥` `NEW`
1. [王俊凯居家人夫感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B1%85%E5%AE%B6%E4%BA%BA%E5%A4%AB%E6%84%9F%23) `75.4K 🔥` `NEW`
1. [兰香如故27集预告给我磕活了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%8527%E9%9B%86%E9%A2%84%E5%91%8A%E7%BB%99%E6%88%91%E7%A3%95%E6%B4%BB%E4%BA%86%23) `62.8K 🔥` `NEW`
1. [食客评罗永浩点赞回锅肉](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E5%AE%A2%E8%AF%84%E7%BD%97%E6%B0%B8%E6%B5%A9%E7%82%B9%E8%B5%9E%E5%9B%9E%E9%94%85%E8%82%89%23) `55.6K 🔥` `NEW`
1. [盛李豪父母成立体育公司](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E6%9D%8E%E8%B1%AA%E7%88%B6%E6%AF%8D%E6%88%90%E7%AB%8B%E4%BD%93%E8%82%B2%E5%85%AC%E5%8F%B8%23) `54.7K 🔥` `NEW`
1. [张展硕回应分段1分42秒92最快](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E5%9B%9E%E5%BA%94%E5%88%86%E6%AE%B51%E5%88%8642%E7%A7%9292%E6%9C%80%E5%BF%AB%23) `47.9K 🔥` `NEW`
1. [印度一对情侣晚归被多人围堵施暴](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%AF%B9%E6%83%85%E4%BE%A3%E6%99%9A%E5%BD%92%E8%A2%AB%E5%A4%9A%E4%BA%BA%E5%9B%B4%E5%A0%B5%E6%96%BD%E6%9A%B4%23) `45.7K 🔥` `NEW`
1. [潘展乐 张展硕](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%20%E5%BC%A0%E5%B1%95%E7%A1%95%23) `2.0M 🔥` `+3756%`
1. [16岁少年与14岁女孩发生关系判3年](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%B0%91%E5%B9%B4%E4%B8%8E14%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E5%88%A43%E5%B9%B4%23) `908.0K 🔥` `+1969%`
1. [两部门紧急拨付2亿支持4省救灾](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E9%83%A8%E9%97%A8%E7%B4%A7%E6%80%A5%E6%8B%A8%E4%BB%982%E4%BA%BF%E6%94%AF%E6%8C%814%E7%9C%81%E6%95%91%E7%81%BE%23) `613.8K 🔥` `+1006%`
1. [中国女子仙本那旅游遭男子闯入脱衣](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E4%BB%99%E6%9C%AC%E9%82%A3%E6%97%85%E6%B8%B8%E9%81%AD%E7%94%B7%E5%AD%90%E9%97%AF%E5%85%A5%E8%84%B1%E8%A1%A3%23) `200.8K 🔥` `+79%`
1. [X300 X500](https://s.weibo.com/weibo?q=%23X300%20X500%23) `158.4K 🔥` `+182%`
1. [王俊凯浪莎品牌全球代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%B5%AA%E8%8E%8E%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `152.2K 🔥` `+216%`
1. [名古屋亚运会游泳](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B8%B8%E6%B3%B3%23) `149.2K 🔥` `+239%`
1. [曝金鹰奖最佳男女主](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E5%A5%B3%E4%B8%BB%23) `122.1K 🔥` `+138%`
1. [16岁小伙被判强奸罪家属发声](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%B0%8F%E4%BC%99%E8%A2%AB%E5%88%A4%E5%BC%BA%E5%A5%B8%E7%BD%AA%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `120.9K 🔥` `+175%`
1. [吴尊晒NeiNei穿婚服](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E6%99%92NeiNei%E7%A9%BF%E5%A9%9A%E6%9C%8D%23) `119.6K 🔥` `+154%`
1. [曝某S加女主片酬从几千万降至100万](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90S%E5%8A%A0%E5%A5%B3%E4%B8%BB%E7%89%87%E9%85%AC%E4%BB%8E%E5%87%A0%E5%8D%83%E4%B8%87%E9%99%8D%E8%87%B3100%E4%B8%87%23) `118.6K 🔥` `+135%`
1. [鹿晗养头发的痛](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%85%BB%E5%A4%B4%E5%8F%91%E7%9A%84%E7%97%9B%23) `117.9K 🔥` `+170%`
1. [王一博香港帆船比赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%A6%99%E6%B8%AF%E5%B8%86%E8%88%B9%E6%AF%94%E8%B5%9B%23) `116.5K 🔥` `+227%`
1. [罗永浩已取证将起诉](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%B7%B2%E5%8F%96%E8%AF%81%E5%B0%86%E8%B5%B7%E8%AF%89%23) `116.3K 🔥` `+166%`
1. [vivo X500定价给友商压力](https://s.weibo.com/weibo?q=%23vivo%20X500%E5%AE%9A%E4%BB%B7%E7%BB%99%E5%8F%8B%E5%95%86%E5%8E%8B%E5%8A%9B%23) `115.7K 🔥` `+164%`
1. [柬埔寨电诈园区内部曝光](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%86%85%E9%83%A8%E6%9B%9D%E5%85%89%23) `115.7K 🔥` `+226%`
1. [你身体缺什么其实早就显露出来了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%BA%AB%E4%BD%93%E7%BC%BA%E4%BB%80%E4%B9%88%E5%85%B6%E5%AE%9E%E6%97%A9%E5%B0%B1%E6%98%BE%E9%9C%B2%E5%87%BA%E6%9D%A5%E4%BA%86%23) `115.6K 🔥` `+219%`
1. [初中生早餐 碳水配碳水](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%97%A9%E9%A4%90%20%E7%A2%B3%E6%B0%B4%E9%85%8D%E7%A2%B3%E6%B0%B4%23) `115.6K 🔥` `+224%`
1. [张展硕潘展乐追回三秒差距](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E6%BD%98%E5%B1%95%E4%B9%90%E8%BF%BD%E5%9B%9E%E4%B8%89%E7%A7%92%E5%B7%AE%E8%B7%9D%23) `115.6K 🔥` `+224%`
1. [Lisa疑似与blue谈恋爱了](https://s.weibo.com/weibo?q=%23Lisa%E7%96%91%E4%BC%BC%E4%B8%8Eblue%E8%B0%88%E6%81%8B%E7%88%B1%E4%BA%86%23) `115.6K 🔥` `+147%`
1. [杨紫直播皮肤状态](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%E7%9A%AE%E8%82%A4%E7%8A%B6%E6%80%81%23) `115.6K 🔥` `+226%`
1. [五个月坚持下来减重15斤](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%AA%E6%9C%88%E5%9D%9A%E6%8C%81%E4%B8%8B%E6%9D%A5%E5%87%8F%E9%87%8D15%E6%96%A4%23) `109.9K 🔥` `+209%`
1. [关晓彤孟子义对视绷不住一点](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%AD%9F%E5%AD%90%E4%B9%89%E5%AF%B9%E8%A7%86%E7%BB%B7%E4%B8%8D%E4%BD%8F%E4%B8%80%E7%82%B9%23) `96.4K 🔥` `+170%`
1. [闲鱼快成黄鱼了](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%BF%AB%E6%88%90%E9%BB%84%E9%B1%BC%E4%BA%86%23) `92.3K 🔥` `+159%`
1. [28岁上海读博的我迷茫了](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E4%B8%8A%E6%B5%B7%E8%AF%BB%E5%8D%9A%E7%9A%84%E6%88%91%E8%BF%B7%E8%8C%AB%E4%BA%86%23) `91.8K 🔥` `+159%`
1. [贾国龙 公关](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%9B%BD%E9%BE%99%20%E5%85%AC%E5%85%B3%23) `82.2K 🔥` `+117%`
1. [校方回应男生逃避军训飞往上海旅游](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E7%94%9F%E9%80%83%E9%81%BF%E5%86%9B%E8%AE%AD%E9%A3%9E%E5%BE%80%E4%B8%8A%E6%B5%B7%E6%97%85%E6%B8%B8%23) `76.2K 🔥` `+115%`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `70.7K 🔥` `+79%`
1. [一刀切开赌石的瞬间安静了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%88%80%E5%88%87%E5%BC%80%E8%B5%8C%E7%9F%B3%E7%9A%84%E7%9E%AC%E9%97%B4%E5%AE%89%E9%9D%99%E4%BA%86%23) `65.5K 🔥` `+84%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `63.2K 🔥` `+44%`
1. [16岁小伙涉强奸证人称双方谈恋爱](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%B0%8F%E4%BC%99%E6%B6%89%E5%BC%BA%E5%A5%B8%E8%AF%81%E4%BA%BA%E7%A7%B0%E5%8F%8C%E6%96%B9%E8%B0%88%E6%81%8B%E7%88%B1%23) `61.9K 🔥` `+74%`
1. [谁发明的婚礼大棉棒](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%E5%A9%9A%E7%A4%BC%E5%A4%A7%E6%A3%89%E6%A3%92%23) `60.8K 🔥` `+70%`
1. [LPL瑞士轮现状](https://s.weibo.com/weibo?q=%23LPL%E7%91%9E%E5%A3%AB%E8%BD%AE%E7%8E%B0%E7%8A%B6%23) `58.6K 🔥` `+65%`
1. [重庆理工大学通报女子称遭性侵](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E6%80%A7%E4%BE%B5%23) `50.8K 🔥` `+44%`
1. [一瓯春](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%93%AF%E6%98%A5%23) `50.3K 🔥` `+42%`
1. [女子仙本那旅游凌晨遭男子闯入脱衣](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%99%E6%9C%AC%E9%82%A3%E6%97%85%E6%B8%B8%E5%87%8C%E6%99%A8%E9%81%AD%E7%94%B7%E5%AD%90%E9%97%AF%E5%85%A5%E8%84%B1%E8%A1%A3%23) `48.9K 🔥` `+38%`

Updated at 2026-09-22 07:27:20

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
