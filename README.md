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

1. [女生患癌半年春节去世男友不离不弃 (A girl suffered from cancer and passed away during the Spring Festival half a year ago. Her boyfriend never left her.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%82%A3%E7%99%8C%E5%8D%8A%E5%B9%B4%E6%98%A5%E8%8A%82%E5%8E%BB%E4%B8%96%E7%94%B7%E5%8F%8B%E4%B8%8D%E7%A6%BB%E4%B8%8D%E5%BC%83%23) `1.1M 🔥` `NEW`
1. [春节消费节节高](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E8%8A%82%E8%8A%82%E9%AB%98%23) `643.4K 🔥` `NEW`
1. [代露娃 短剧](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%20%E7%9F%AD%E5%89%A7%23) `637.1K 🔥` `NEW`
1. [不能用发照片当理由加微信了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%83%BD%E7%94%A8%E5%8F%91%E7%85%A7%E7%89%87%E5%BD%93%E7%90%86%E7%94%B1%E5%8A%A0%E5%BE%AE%E4%BF%A1%E4%BA%86%23) `369.7K 🔥` `NEW`
1. [张杰声援谢娜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%A3%B0%E6%8F%B4%E8%B0%A2%E5%A8%9C%23) `170.0K 🔥` `NEW`
1. [比尔盖茨承认有过婚外关系](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E6%89%BF%E8%AE%A4%E6%9C%89%E8%BF%87%E5%A9%9A%E5%A4%96%E5%85%B3%E7%B3%BB%23) `166.4K 🔥` `NEW`
1. [北京一独居女子去世房产归国家](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%B8%80%E7%8B%AC%E5%B1%85%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E6%88%BF%E4%BA%A7%E5%BD%92%E5%9B%BD%E5%AE%B6%23) `136.6K 🔥` `NEW`
1. [新娘说退18万彩礼是心疼丈夫的不易](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E8%AF%B4%E9%80%8018%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%98%AF%E5%BF%83%E7%96%BC%E4%B8%88%E5%A4%AB%E7%9A%84%E4%B8%8D%E6%98%93%23) `134.3K 🔥` `NEW`
1. [彭佳慧被曝霸凌前经纪人](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E4%BD%B3%E6%85%A7%E8%A2%AB%E6%9B%9D%E9%9C%B8%E5%87%8C%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%23) `132.7K 🔥` `NEW`
1. [丈夫回应被妻子控诉回娘家待不住](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%A6%BB%E5%AD%90%E6%8E%A7%E8%AF%89%E5%9B%9E%E5%A8%98%E5%AE%B6%E5%BE%85%E4%B8%8D%E4%BD%8F%23) `127.4K 🔥` `NEW`
1. [极氪8X将首发新一代辅助驾驶技术 (Jikrypton 8X will debut a new generation of assisted driving technology)](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA8X%E5%B0%86%E9%A6%96%E5%8F%91%E6%96%B0%E4%B8%80%E4%BB%A3%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E6%8A%80%E6%9C%AF%23) `122.9K 🔥` `NEW`
1. [不要低估两片紫菜的威力](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E4%BD%8E%E4%BC%B0%E4%B8%A4%E7%89%87%E7%B4%AB%E8%8F%9C%E7%9A%84%E5%A8%81%E5%8A%9B%23) `121.6K 🔥` `NEW`
1. [元宝骂人](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E9%AA%82%E4%BA%BA%23) `120.0K 🔥` `NEW`
1. [韩女子用ChatGPT策划连环杀人案](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%AD%90%E7%94%A8ChatGPT%E7%AD%96%E5%88%92%E8%BF%9E%E7%8E%AF%E6%9D%80%E4%BA%BA%E6%A1%88%23) `115.2K 🔥` `NEW`
1. [大疆反击美国禁令](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E5%8F%8D%E5%87%BB%E7%BE%8E%E5%9B%BD%E7%A6%81%E4%BB%A4%23) `101.4K 🔥` `NEW`
1. [Jiejie成了赵力竭](https://s.weibo.com/weibo?q=%23Jiejie%E6%88%90%E4%BA%86%E8%B5%B5%E5%8A%9B%E7%AB%AD%23) `93.7K 🔥` `NEW`
1. [谷爱凌比赛时咬的是什么](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%AF%94%E8%B5%9B%E6%97%B6%E5%92%AC%E7%9A%84%E6%98%AF%E4%BB%80%E4%B9%88%23) `90.2K 🔥` `NEW`
1. [长大后理解王宝强在安检前这一幕了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E7%90%86%E8%A7%A3%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%9C%A8%E5%AE%89%E6%A3%80%E5%89%8D%E8%BF%99%E4%B8%80%E5%B9%95%E4%BA%86%23) `89.2K 🔥` `NEW`
1. [WBG对战iG](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98iG%23) `87.4K 🔥` `NEW`
1. [王楚钦签了好多签名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%AD%BE%E4%BA%86%E5%A5%BD%E5%A4%9A%E7%AD%BE%E5%90%8D%23) `80.5K 🔥` `NEW`
1. [春节档票房 回到18年 (Spring Festival box office returns to 2018)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%E7%A5%A8%E6%88%BF%20%E5%9B%9E%E5%88%B018%E5%B9%B4%23) `79.3K 🔥` `NEW`
1. [堵车久坐19小时女子心脏骤停险猝死](https://s.weibo.com/weibo?q=%23%E5%A0%B5%E8%BD%A6%E4%B9%85%E5%9D%9019%E5%B0%8F%E6%97%B6%E5%A5%B3%E5%AD%90%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%E9%99%A9%E7%8C%9D%E6%AD%BB%23) `75.3K 🔥` `NEW`
1. [唐宫奇案回应打一星](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E5%9B%9E%E5%BA%94%E6%89%93%E4%B8%80%E6%98%9F%23) `74.0K 🔥` `NEW`
1. [多家妇幼医院门口烟民扎堆](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%A6%87%E5%B9%BC%E5%8C%BB%E9%99%A2%E9%97%A8%E5%8F%A3%E7%83%9F%E6%B0%91%E6%89%8E%E5%A0%86%23) `197.2K 🔥` `+98%`
1. [邵雨轩回应张小花比自己厉害 (Shao Yuxuan responded that Zhang Xiaohua is better than him)](https://s.weibo.com/weibo?q=%23%E9%82%B5%E9%9B%A8%E8%BD%A9%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%B0%8F%E8%8A%B1%E6%AF%94%E8%87%AA%E5%B7%B1%E5%8E%89%E5%AE%B3%23) `180.6K 🔥` `+28%`
1. [网友新选的天涯四美](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%96%B0%E9%80%89%E7%9A%84%E5%A4%A9%E6%B6%AF%E5%9B%9B%E7%BE%8E%23) `168.3K 🔥` `+45%`
1. [鹿哈官宣得女](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E5%AE%98%E5%AE%A3%E5%BE%97%E5%A5%B3%23) `136.3K 🔥` `+25%`
1. [杨幂柳智敏撞衫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9F%B3%E6%99%BA%E6%95%8F%E6%92%9E%E8%A1%AB%23) `133.9K 🔥` `+24%`
1. [于正从白月光事件后像变了个人](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%BB%8E%E7%99%BD%E6%9C%88%E5%85%89%E4%BA%8B%E4%BB%B6%E5%90%8E%E5%83%8F%E5%8F%98%E4%BA%86%E4%B8%AA%E4%BA%BA%23) `111.7K 🔥` `+24%`
1. [多少滞留三亚的人被自己穷笑了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B0%91%E6%BB%9E%E7%95%99%E4%B8%89%E4%BA%9A%E7%9A%84%E4%BA%BA%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%A9%B7%E7%AC%91%E4%BA%86%23) `281.0K 🔥`
1. [钱枫近况](https://s.weibo.com/weibo?q=%23%E9%92%B1%E6%9E%AB%E8%BF%91%E5%86%B5%23) `186.4K 🔥`
1. [唐嫣你又开始自己画眉毛了吗 (Tang Yan, have you started drawing your own eyebrows again?)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E4%BD%A0%E5%8F%88%E5%BC%80%E5%A7%8B%E8%87%AA%E5%B7%B1%E7%94%BB%E7%9C%89%E6%AF%9B%E4%BA%86%E5%90%97%23) `161.3K 🔥`
1. [腾讯元宝向用户道歉](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D%E5%90%91%E7%94%A8%E6%88%B7%E9%81%93%E6%AD%89%23) `154.4K 🔥`
1. [谢娜恳请不要将镜头对准孩子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%81%B3%E8%AF%B7%E4%B8%8D%E8%A6%81%E5%B0%86%E9%95%9C%E5%A4%B4%E5%AF%B9%E5%87%86%E5%AD%A9%E5%AD%90%23) `135.3K 🔥`
1. [曝短剧出现男演员揩油镜头 (Short drama reveals scenes of male actors taking advantage of others)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%AD%E5%89%A7%E5%87%BA%E7%8E%B0%E7%94%B7%E6%BC%94%E5%91%98%E6%8F%A9%E6%B2%B9%E9%95%9C%E5%A4%B4%23) `131.9K 🔥`
1. [谷爱凌在北京补习吃绿舌头雪糕](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9C%A8%E5%8C%97%E4%BA%AC%E8%A1%A5%E4%B9%A0%E5%90%83%E7%BB%BF%E8%88%8C%E5%A4%B4%E9%9B%AA%E7%B3%95%23) `122.5K 🔥`
1. [曝李佳琦过年给亲戚每人发了500红包](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%BF%87%E5%B9%B4%E7%BB%99%E4%BA%B2%E6%88%9A%E6%AF%8F%E4%BA%BA%E5%8F%91%E4%BA%86500%E7%BA%A2%E5%8C%85%23) `116.9K 🔥`
1. [王鹤棣一秒认出白鹿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%80%E7%A7%92%E8%AE%A4%E5%87%BA%E7%99%BD%E9%B9%BF%23) `99.4K 🔥`
1. [周杰伦演唱会 (Jay Chou concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `90.0K 🔥`
1. [日本以为中方会软化立场](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BB%A5%E4%B8%BA%E4%B8%AD%E6%96%B9%E4%BC%9A%E8%BD%AF%E5%8C%96%E7%AB%8B%E5%9C%BA%23) `81.2K 🔥`
1. [单依纯二巡官宣](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E4%BA%8C%E5%B7%A1%E5%AE%98%E5%AE%A3%23) `79.4K 🔥`
1. [中秋请3天假堪比春节](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%AF%B73%E5%A4%A9%E5%81%87%E5%A0%AA%E6%AF%94%E6%98%A5%E8%8A%82%23) `798.9K 🔥` `-28%`
1. [两个月水费1847元水务公司怀疑马桶](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B0%B4%E8%B4%B91847%E5%85%83%E6%B0%B4%E5%8A%A1%E5%85%AC%E5%8F%B8%E6%80%80%E7%96%91%E9%A9%AC%E6%A1%B6%23) `235.3K 🔥` `-34%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `222.3K 🔥` `-73%`
1. [小城市网购 AB货 (Small city online shopping AB goods)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E5%B8%82%E7%BD%91%E8%B4%AD%20AB%E8%B4%A7%23) `199.8K 🔥` `-36%`
1. [获退的18万彩礼已所剩无几 (There is not much left of the 180,000 refunded gift.)](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E9%80%80%E7%9A%8418%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%B7%B2%E6%89%80%E5%89%A9%E6%97%A0%E5%87%A0%23) `171.9K 🔥` `-27%`
1. [iPhone 自动打电话](https://s.weibo.com/weibo?q=%23iPhone%20%E8%87%AA%E5%8A%A8%E6%89%93%E7%94%B5%E8%AF%9D%23) `132.5K 🔥` `-29%`
1. [23岁香港女警在警署身亡](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E9%A6%99%E6%B8%AF%E5%A5%B3%E8%AD%A6%E5%9C%A8%E8%AD%A6%E7%BD%B2%E8%BA%AB%E4%BA%A1%23) `77.3K 🔥` `-56%`
1. [刘浩存从小就长这样](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%BB%8E%E5%B0%8F%E5%B0%B1%E9%95%BF%E8%BF%99%E6%A0%B7%23) `76.2K 🔥` `-27%`

Updated at 2026-02-25 17:30:43

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
