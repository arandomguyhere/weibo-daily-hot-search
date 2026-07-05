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

1. [男子中了692万怕儿子躺平没敢告诉 (A man won 6.92 million and didn't dare to tell his son because he was afraid that he would be lying flat.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%AD%E4%BA%86692%E4%B8%87%E6%80%95%E5%84%BF%E5%AD%90%E8%BA%BA%E5%B9%B3%E6%B2%A1%E6%95%A2%E5%91%8A%E8%AF%89%23) `892.4K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `394.1K 🔥` `NEW`
1. [官方辟谣女护士被单位认定卖淫开除](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%A2%AB%E5%8D%95%E4%BD%8D%E8%AE%A4%E5%AE%9A%E5%8D%96%E6%B7%AB%E5%BC%80%E9%99%A4%23) `387.5K 🔥` `NEW`
1. [野狗骨头没错这就是南方烧烤](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%B2%A1%E9%94%99%E8%BF%99%E5%B0%B1%E6%98%AF%E5%8D%97%E6%96%B9%E7%83%A7%E7%83%A4%23) `387.5K 🔥` `NEW`
1. [微信能不能别给表情取名字了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E4%B8%8D%E8%83%BD%E5%88%AB%E7%BB%99%E8%A1%A8%E6%83%85%E5%8F%96%E5%90%8D%E5%AD%97%E4%BA%86%23) `382.9K 🔥` `NEW`
1. [迪丽热巴深V开到腰了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B7%B1V%E5%BC%80%E5%88%B0%E8%85%B0%E4%BA%86%23) `372.6K 🔥` `NEW`
1. [电动车违规上高架桥宝马车主是否冤枉](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%A8%E8%BD%A6%E8%BF%9D%E8%A7%84%E4%B8%8A%E9%AB%98%E6%9E%B6%E6%A1%A5%E5%AE%9D%E9%A9%AC%E8%BD%A6%E4%B8%BB%E6%98%AF%E5%90%A6%E5%86%A4%E6%9E%89%23) `366.4K 🔥` `NEW`
1. [灿如繁星登顶](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%99%BB%E9%A1%B6%23) `358.8K 🔥` `NEW`
1. [台湾致癌油风波持续扩大](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%87%B4%E7%99%8C%E6%B2%B9%E9%A3%8E%E6%B3%A2%E6%8C%81%E7%BB%AD%E6%89%A9%E5%A4%A7%23) `268.5K 🔥` `NEW`
1. [4名高考生打暑假工高温硬扛32吨货](https://s.weibo.com/weibo?q=%234%E5%90%8D%E9%AB%98%E8%80%83%E7%94%9F%E6%89%93%E6%9A%91%E5%81%87%E5%B7%A5%E9%AB%98%E6%B8%A9%E7%A1%AC%E6%89%9B32%E5%90%A8%E8%B4%A7%23) `267.2K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `265.8K 🔥` `NEW`
1. [曝杨超越与虎鲸谈崩了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%B8%8E%E8%99%8E%E9%B2%B8%E8%B0%88%E5%B4%A9%E4%BA%86%23) `264.2K 🔥` `NEW`
1. [田曦薇黄明昊向王安宇道歉](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%BB%84%E6%98%8E%E6%98%8A%E5%90%91%E7%8E%8B%E5%AE%89%E5%AE%87%E9%81%93%E6%AD%89%23) `263.6K 🔥` `NEW`
1. [白鹿把叶璃图片发了网盘](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%8A%E5%8F%B6%E7%92%83%E5%9B%BE%E7%89%87%E5%8F%91%E4%BA%86%E7%BD%91%E7%9B%98%23) `262.0K 🔥` `NEW`
1. [美国医生发现男婴在喘息仍宣告死亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8C%BB%E7%94%9F%E5%8F%91%E7%8E%B0%E7%94%B7%E5%A9%B4%E5%9C%A8%E5%96%98%E6%81%AF%E4%BB%8D%E5%AE%A3%E5%91%8A%E6%AD%BB%E4%BA%A1%23) `261.7K 🔥` `NEW`
1. [王橹杰第五名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%AC%AC%E4%BA%94%E5%90%8D%23) `260.9K 🔥` `NEW`
1. [狼队 A组](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%20A%E7%BB%84%23) `260.1K 🔥` `NEW`
1. [巴拉圭第99分钟了还在扒拉](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E7%AC%AC99%E5%88%86%E9%92%9F%E4%BA%86%E8%BF%98%E5%9C%A8%E6%89%92%E6%8B%89%23) `217.7K 🔥` `NEW`
1. [花儿与少年8墨西哥路透](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%E5%A2%A8%E8%A5%BF%E5%93%A5%E8%B7%AF%E9%80%8F%23) `203.8K 🔥` `NEW`
1. [微醺悦己的N种打开方式](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E9%86%BA%E6%82%A6%E5%B7%B1%E7%9A%84N%E7%A7%8D%E6%89%93%E5%BC%80%E6%96%B9%E5%BC%8F%23) `201.4K 🔥` `NEW`
1. [克洛普出任德国队主帅 (Klopp appointed as Germany coach)](https://s.weibo.com/weibo?q=%23%E5%85%8B%E6%B4%9B%E6%99%AE%E5%87%BA%E4%BB%BB%E5%BE%B7%E5%9B%BD%E9%98%9F%E4%B8%BB%E5%B8%85%23) `199.9K 🔥` `NEW`
1. [刘宇宁因为太强被导演制裁](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9B%A0%E4%B8%BA%E5%A4%AA%E5%BC%BA%E8%A2%AB%E5%AF%BC%E6%BC%94%E5%88%B6%E8%A3%81%23) `191.7K 🔥` `NEW`
1. [为什么欧洲人热死都不装空调](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%AC%A7%E6%B4%B2%E4%BA%BA%E7%83%AD%E6%AD%BB%E9%83%BD%E4%B8%8D%E8%A3%85%E7%A9%BA%E8%B0%83%23) `162.3K 🔥` `NEW`
1. [电力供给成中美AI博弈关键](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%9B%E4%BE%9B%E7%BB%99%E6%88%90%E4%B8%AD%E7%BE%8EAI%E5%8D%9A%E5%BC%88%E5%85%B3%E9%94%AE%23) `161.7K 🔥` `NEW`
1. [一代人有一代人的挂件](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E6%8C%82%E4%BB%B6%23) `379.6K 🔥` `+29%`
1. [哈兰德大战巴西前理发 (Haaland gets a haircut before Brazil game)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%A7%E6%88%98%E5%B7%B4%E8%A5%BF%E5%89%8D%E7%90%86%E5%8F%91%23) `392.4K 🔥`
1. [霉霉婚礼现场照片被泄漏](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E7%85%A7%E7%89%87%E8%A2%AB%E6%B3%84%E6%BC%8F%23) `369.9K 🔥`
1. [曝郭宇欣称非科班的抢了科班的戏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E7%A7%B0%E9%9D%9E%E7%A7%91%E7%8F%AD%E7%9A%84%E6%8A%A2%E4%BA%86%E7%A7%91%E7%8F%AD%E7%9A%84%E6%88%8F%23) `363.5K 🔥`
1. [宋威龙让文淇关特效](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%AE%A9%E6%96%87%E6%B7%87%E5%85%B3%E7%89%B9%E6%95%88%23) `269.3K 🔥`
1. [微信读书 赛博赎罪 (WeChat Reading Cyber ​​Atonement)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%20%E8%B5%9B%E5%8D%9A%E8%B5%8E%E7%BD%AA%23) `269.3K 🔥`
1. [特朗普皮一下赶紧躲回安全区](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%9A%AE%E4%B8%80%E4%B8%8B%E8%B5%B6%E7%B4%A7%E8%BA%B2%E5%9B%9E%E5%AE%89%E5%85%A8%E5%8C%BA%23) `267.8K 🔥`
1. [郭宇欣傲慢吐槽严子贤20分钟](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E5%82%B2%E6%85%A2%E5%90%90%E6%A7%BD%E4%B8%A5%E5%AD%90%E8%B4%A420%E5%88%86%E9%92%9F%23) `266.5K 🔥`
1. [有线耳机 (wired headphones)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%23) `262.9K 🔥`
1. [王力宏缝了39针 (Wang Leehom received 39 stitches)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `256.0K 🔥`
1. [黄一鸣女儿新账号被封](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E5%A5%B3%E5%84%BF%E6%96%B0%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%B0%81%23) `247.2K 🔥`
1. [草地牛 恋与深空](https://s.weibo.com/weibo?q=%23%E8%8D%89%E5%9C%B0%E7%89%9B%20%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `223.5K 🔥`
1. [奶奶删了77万条未读又来3万 (Grandma deleted 770,000 unread messages and received another 30,000.)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%88%A0%E4%BA%8677%E4%B8%87%E6%9D%A1%E6%9C%AA%E8%AF%BB%E5%8F%88%E6%9D%A53%E4%B8%87%23) `1.2M 🔥` `-30%`
1. [他们于无声处创造历史](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%AC%E4%BA%8E%E6%97%A0%E5%A3%B0%E5%A4%84%E5%88%9B%E9%80%A0%E5%8E%86%E5%8F%B2%23) `657.2K 🔥` `-38%`
1. [赛道见证日产电动技术真实力 (The track witnesses the true power of Nissan’s electric technology)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%81%93%E8%A7%81%E8%AF%81%E6%97%A5%E4%BA%A7%E7%94%B5%E5%8A%A8%E6%8A%80%E6%9C%AF%E7%9C%9F%E5%AE%9E%E5%8A%9B%23) `483.5K 🔥` `-40%`
1. [已经对所有自助烤肉祛魅了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%AF%B9%E6%89%80%E6%9C%89%E8%87%AA%E5%8A%A9%E7%83%A4%E8%82%89%E7%A5%9B%E9%AD%85%E4%BA%86%23) `388.1K 🔥` `-63%`
1. [佛得角旅游](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%97%85%E6%B8%B8%23) `376.4K 🔥` `-54%`
1. [TES道歉](https://s.weibo.com/weibo?q=%23TES%E9%81%93%E6%AD%89%23) `359.8K 🔥` `-66%`
1. [急诊偶遇王力宏](https://s.weibo.com/weibo?q=%23%E6%80%A5%E8%AF%8A%E5%81%B6%E9%81%87%E7%8E%8B%E5%8A%9B%E5%AE%8F%23) `265.1K 🔥` `-21%`
1. [朋友是远香近臭的](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E6%98%AF%E8%BF%9C%E9%A6%99%E8%BF%91%E8%87%AD%E7%9A%84%23) `264.7K 🔥` `-55%`
1. [迪丽热巴下次活动请直接租体育场](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8B%E6%AC%A1%E6%B4%BB%E5%8A%A8%E8%AF%B7%E7%9B%B4%E6%8E%A5%E7%A7%9F%E4%BD%93%E8%82%B2%E5%9C%BA%23) `260.3K 🔥` `-24%`
1. [TES全败 (TES lost all)](https://s.weibo.com/weibo?q=%23TES%E5%85%A8%E8%B4%A5%23) `216.0K 🔥` `-26%`
1. [刘耀文被李晨扯到露后背](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%A2%AB%E6%9D%8E%E6%99%A8%E6%89%AF%E5%88%B0%E9%9C%B2%E5%90%8E%E8%83%8C%23) `199.2K 🔥` `-35%`
1. [西藏文旅将兑换承诺奖励李要得50万 (Tibet Cultural Tourism will redeem its promised reward of 500,000 yuan to Li Yao)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%96%87%E6%97%85%E5%B0%86%E5%85%91%E6%8D%A2%E6%89%BF%E8%AF%BA%E5%A5%96%E5%8A%B1%E6%9D%8E%E8%A6%81%E5%BE%9750%E4%B8%87%23) `189.4K 🔥` `-55%`
1. [野狗骨头好好看](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%A5%BD%E5%A5%BD%E7%9C%8B%23) `188.7K 🔥` `-52%`
1. [刘烨感情时间线](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A8%E6%84%9F%E6%83%85%E6%97%B6%E9%97%B4%E7%BA%BF%23) `176.9K 🔥` `-40%`
1. [LV告完奶茶告鸭血粉丝](https://s.weibo.com/weibo?q=%23LV%E5%91%8A%E5%AE%8C%E5%A5%B6%E8%8C%B6%E5%91%8A%E9%B8%AD%E8%A1%80%E7%B2%89%E4%B8%9D%23) `163.5K 🔥` `-43%`
1. [我欲乘风 虞书欣](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `161.7K 🔥` `-57%`

Updated at 2026-07-05 19:41:45

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
