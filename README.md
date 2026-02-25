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

1. [离职后发现了不同人的时钟 (After I left my job, I discovered different people’s clocks.)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E5%90%8E%E5%8F%91%E7%8E%B0%E4%BA%86%E4%B8%8D%E5%90%8C%E4%BA%BA%E7%9A%84%E6%97%B6%E9%92%9F%23) `286.0K 🔥` `NEW`
1. [华策 狂野时代](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%AD%96%20%E7%8B%82%E9%87%8E%E6%97%B6%E4%BB%A3%23) `209.5K 🔥` `NEW`
1. [王安宇民及民以下身份的绝对好人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%B0%91%E5%8F%8A%E6%B0%91%E4%BB%A5%E4%B8%8B%E8%BA%AB%E4%BB%BD%E7%9A%84%E7%BB%9D%E5%AF%B9%E5%A5%BD%E4%BA%BA%23) `170.6K 🔥` `NEW`
1. [一顿饭付了63张五块钱](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A1%BF%E9%A5%AD%E4%BB%98%E4%BA%8663%E5%BC%A0%E4%BA%94%E5%9D%97%E9%92%B1%23) `164.1K 🔥` `NEW`
1. [社会救助法草案](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BC%9A%E6%95%91%E5%8A%A9%E6%B3%95%E8%8D%89%E6%A1%88%23) `123.1K 🔥` `NEW`
1. [广元大年初三失联男子已去世](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%85%83%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%89%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E5%B7%B2%E5%8E%BB%E4%B8%96%23) `120.5K 🔥` `NEW`
1. [黄晓明审美](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%AE%A1%E7%BE%8E%23) `109.1K 🔥` `NEW`
1. [宇宙少女回归](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E5%B0%91%E5%A5%B3%E5%9B%9E%E5%BD%92%23) `101.5K 🔥` `NEW`
1. [医生称完不成2.5万创收指标被待岗](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%AE%8C%E4%B8%8D%E6%88%902.5%E4%B8%87%E5%88%9B%E6%94%B6%E6%8C%87%E6%A0%87%E8%A2%AB%E5%BE%85%E5%B2%97%23) `83.3K 🔥` `NEW`
1. [华为阔屏大折叠曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E5%B1%8F%E5%A4%A7%E6%8A%98%E5%8F%A0%E6%9B%9D%E5%85%89%23) `79.4K 🔥` `NEW`
1. [博主称提前买明年春节机票省几千 (Blogger says you can save thousands by buying air tickets for next Spring Festival in advance)](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%A7%B0%E6%8F%90%E5%89%8D%E4%B9%B0%E6%98%8E%E5%B9%B4%E6%98%A5%E8%8A%82%E6%9C%BA%E7%A5%A8%E7%9C%81%E5%87%A0%E5%8D%83%23) `79.2K 🔥` `NEW`
1. [鹦鹉落海孩子崩溃爸爸去救险遇险](https://s.weibo.com/weibo?q=%23%E9%B9%A6%E9%B9%89%E8%90%BD%E6%B5%B7%E5%AD%A9%E5%AD%90%E5%B4%A9%E6%BA%83%E7%88%B8%E7%88%B8%E5%8E%BB%E6%95%91%E9%99%A9%E9%81%87%E9%99%A9%23) `79.0K 🔥` `NEW`
1. [岳父退还18万8彩礼又给12万陪嫁](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E7%88%B6%E9%80%80%E8%BF%9818%E4%B8%878%E5%BD%A9%E7%A4%BC%E5%8F%88%E7%BB%9912%E4%B8%87%E9%99%AA%E5%AB%81%23) `78.9K 🔥` `NEW`
1. [闵熙珍 hybe](https://s.weibo.com/weibo?q=%23%E9%97%B5%E7%86%99%E7%8F%8D%20hybe%23) `78.3K 🔥` `NEW`
1. [单依纯成立个人独资工作室](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%88%90%E7%AB%8B%E4%B8%AA%E4%BA%BA%E7%8B%AC%E8%B5%84%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `78.3K 🔥` `NEW`
1. [唐嫣黑长直皮草造型](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E9%BB%91%E9%95%BF%E7%9B%B4%E7%9A%AE%E8%8D%89%E9%80%A0%E5%9E%8B%23) `78.2K 🔥` `NEW`
1. [北京一独居女子去世房产归国家](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%B8%80%E7%8B%AC%E5%B1%85%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E6%88%BF%E4%BA%A7%E5%BD%92%E5%9B%BD%E5%AE%B6%23) `1.1M 🔥` `+709%`
1. [韩女子用ChatGPT策划连环杀人案](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%AD%90%E7%94%A8ChatGPT%E7%AD%96%E5%88%92%E8%BF%9E%E7%8E%AF%E6%9D%80%E4%BA%BA%E6%A1%88%23) `450.5K 🔥` `+291%`
1. [元宝骂人](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E9%AA%82%E4%BA%BA%23) `185.9K 🔥` `+55%`
1. [不要低估两片紫菜的威力](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E4%BD%8E%E4%BC%B0%E4%B8%A4%E7%89%87%E7%B4%AB%E8%8F%9C%E7%9A%84%E5%A8%81%E5%8A%9B%23) `183.7K 🔥` `+51%`
1. [春节档票房 回到18年 (Spring Festival box office returns to 2018)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%E7%A5%A8%E6%88%BF%20%E5%9B%9E%E5%88%B018%E5%B9%B4%23) `175.3K 🔥` `+121%`
1. [中秋请3天假堪比春节 (Taking 3 days off during the Mid-Autumn Festival is comparable to the Spring Festival)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%AF%B73%E5%A4%A9%E5%81%87%E5%A0%AA%E6%AF%94%E6%98%A5%E8%8A%82%23) `823.7K 🔥`
1. [春节消费节节高](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E8%8A%82%E8%8A%82%E9%AB%98%23) `628.9K 🔥`
1. [代露娃 短剧](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%20%E7%9F%AD%E5%89%A7%23) `563.6K 🔥`
1. [多少滞留三亚的人被自己穷笑了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B0%91%E6%BB%9E%E7%95%99%E4%B8%89%E4%BA%9A%E7%9A%84%E4%BA%BA%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%A9%B7%E7%AC%91%E4%BA%86%23) `238.7K 🔥`
1. [周杰伦演唱会 (Jay Chou concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `78.1K 🔥`
1. [王楚钦签了好多签名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%AD%BE%E4%BA%86%E5%A5%BD%E5%A4%9A%E7%AD%BE%E5%90%8D%23) `78.1K 🔥`
1. [女生患癌半年春节去世男友不离不弃 (A girl suffered from cancer and passed away during the Spring Festival half a year ago. Her boyfriend never left her.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%82%A3%E7%99%8C%E5%8D%8A%E5%B9%B4%E6%98%A5%E8%8A%82%E5%8E%BB%E4%B8%96%E7%94%B7%E5%8F%8B%E4%B8%8D%E7%A6%BB%E4%B8%8D%E5%BC%83%23) `282.3K 🔥` `-74%`
1. [不能用发照片当理由加微信了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%83%BD%E7%94%A8%E5%8F%91%E7%85%A7%E7%89%87%E5%BD%93%E7%90%86%E7%94%B1%E5%8A%A0%E5%BE%AE%E4%BF%A1%E4%BA%86%23) `193.0K 🔥` `-48%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `159.3K 🔥` `-28%`
1. [获退的18万彩礼已所剩无几 (There is not much left of the 180,000 refunded gift.)](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E9%80%80%E7%9A%8418%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%B7%B2%E6%89%80%E5%89%A9%E6%97%A0%E5%87%A0%23) `126.2K 🔥` `-27%`
1. [比尔盖茨承认有过婚外关系](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E6%89%BF%E8%AE%A4%E6%9C%89%E8%BF%87%E5%A9%9A%E5%A4%96%E5%85%B3%E7%B3%BB%23) `117.6K 🔥` `-29%`
1. [张杰声援谢娜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%A3%B0%E6%8F%B4%E8%B0%A2%E5%A8%9C%23) `116.4K 🔥` `-32%`
1. [钱枫近况](https://s.weibo.com/weibo?q=%23%E9%92%B1%E6%9E%AB%E8%BF%91%E5%86%B5%23) `116.0K 🔥` `-38%`
1. [两个月水费1847元水务公司怀疑马桶](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B0%B4%E8%B4%B91847%E5%85%83%E6%B0%B4%E5%8A%A1%E5%85%AC%E5%8F%B8%E6%80%80%E7%96%91%E9%A9%AC%E6%A1%B6%23) `109.8K 🔥` `-53%`
1. [唐嫣你又开始自己画眉毛了吗 (Tang Yan, have you started drawing your own eyebrows again?)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E4%BD%A0%E5%8F%88%E5%BC%80%E5%A7%8B%E8%87%AA%E5%B7%B1%E7%94%BB%E7%9C%89%E6%AF%9B%E4%BA%86%E5%90%97%23) `103.9K 🔥` `-36%`
1. [新娘说退18万彩礼是心疼丈夫的不易 (The bride said it was difficult for her husband to withdraw the 180,000 yuan gift)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E8%AF%B4%E9%80%8018%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%98%AF%E5%BF%83%E7%96%BC%E4%B8%88%E5%A4%AB%E7%9A%84%E4%B8%8D%E6%98%93%23) `98.5K 🔥` `-27%`
1. [网友新选的天涯四美](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%96%B0%E9%80%89%E7%9A%84%E5%A4%A9%E6%B6%AF%E5%9B%9B%E7%BE%8E%23) `95.5K 🔥` `-43%`
1. [谢娜恳请不要将镜头对准孩子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%81%B3%E8%AF%B7%E4%B8%8D%E8%A6%81%E5%B0%86%E9%95%9C%E5%A4%B4%E5%AF%B9%E5%87%86%E5%AD%A9%E5%AD%90%23) `94.5K 🔥` `-30%`
1. [小城市网购 AB货 (Small city online shopping AB goods)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E5%B8%82%E7%BD%91%E8%B4%AD%20AB%E8%B4%A7%23) `91.8K 🔥` `-54%`
1. [邵雨轩回应张小花比自己厉害 (Shao Yuxuan responded that Zhang Xiaohua is better than him)](https://s.weibo.com/weibo?q=%23%E9%82%B5%E9%9B%A8%E8%BD%A9%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%B0%8F%E8%8A%B1%E6%AF%94%E8%87%AA%E5%B7%B1%E5%8E%89%E5%AE%B3%23) `82.4K 🔥` `-54%`
1. [腾讯元宝向用户道歉](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D%E5%90%91%E7%94%A8%E6%88%B7%E9%81%93%E6%AD%89%23) `79.9K 🔥` `-48%`
1. [鹿哈官宣得女](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E5%AE%98%E5%AE%A3%E5%BE%97%E5%A5%B3%23) `79.8K 🔥` `-41%`
1. [杨幂柳智敏撞衫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9F%B3%E6%99%BA%E6%95%8F%E6%92%9E%E8%A1%AB%23) `79.5K 🔥` `-41%`
1. [彭佳慧被曝霸凌前经纪人](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E4%BD%B3%E6%85%A7%E8%A2%AB%E6%9B%9D%E9%9C%B8%E5%87%8C%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%23) `78.7K 🔥` `-41%`
1. [多家妇幼医院门口烟民扎堆](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%A6%87%E5%B9%BC%E5%8C%BB%E9%99%A2%E9%97%A8%E5%8F%A3%E7%83%9F%E6%B0%91%E6%89%8E%E5%A0%86%23) `78.4K 🔥` `-60%`
1. [极氪8X将首发新一代辅助驾驶技术 (Jikrypton 8X will debut a new generation of assisted driving technology)](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA8X%E5%B0%86%E9%A6%96%E5%8F%91%E6%96%B0%E4%B8%80%E4%BB%A3%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E6%8A%80%E6%9C%AF%23) `78.2K 🔥` `-36%`
1. [谷爱凌在北京补习吃绿舌头雪糕](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9C%A8%E5%8C%97%E4%BA%AC%E8%A1%A5%E4%B9%A0%E5%90%83%E7%BB%BF%E8%88%8C%E5%A4%B4%E9%9B%AA%E7%B3%95%23) `78.0K 🔥` `-36%`

Updated at 2026-02-25 18:31:32

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
