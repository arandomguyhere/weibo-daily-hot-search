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

1. [陆虎15分钟卖出一套房 (Land Rover sells a house in 15 minutes)](https://s.weibo.com/weibo?q=%23%E9%99%86%E8%99%8E15%E5%88%86%E9%92%9F%E5%8D%96%E5%87%BA%E4%B8%80%E5%A5%97%E6%88%BF%23) `224.9K 🔥` `NEW`
1. [美11岁男孩枪杀养父称没想过后果](https://s.weibo.com/weibo?q=%23%E7%BE%8E11%E5%B2%81%E7%94%B7%E5%AD%A9%E6%9E%AA%E6%9D%80%E5%85%BB%E7%88%B6%E7%A7%B0%E6%B2%A1%E6%83%B3%E8%BF%87%E5%90%8E%E6%9E%9C%23) `178.7K 🔥` `NEW`
1. [陈飞宇孙千新剧首播口碑](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%AD%99%E5%8D%83%E6%96%B0%E5%89%A7%E9%A6%96%E6%92%AD%E5%8F%A3%E7%A2%91%23) `178.7K 🔥` `NEW`
1. [张凯毅生娃](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E6%AF%85%E7%94%9F%E5%A8%83%23) `171.0K 🔥` `NEW`
1. [水煮肉片吃出纸店家回怼你咋呼啥](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E7%85%AE%E8%82%89%E7%89%87%E5%90%83%E5%87%BA%E7%BA%B8%E5%BA%97%E5%AE%B6%E5%9B%9E%E6%80%BC%E4%BD%A0%E5%92%8B%E5%91%BC%E5%95%A5%23) `153.2K 🔥` `NEW`
1. [杨洋回应骨折](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%AA%A8%E6%8A%98%23) `129.9K 🔥` `NEW`
1. [我家那小子开播](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E5%BC%80%E6%92%AD%23) `127.0K 🔥` `NEW`
1. [飞驰人生3票房20亿彩蛋](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E7%A5%A8%E6%88%BF20%E4%BA%BF%E5%BD%A9%E8%9B%8B%23) `100.6K 🔥` `NEW`
1. [62岁老伯吃饭误吞枣核肚大如孕妇](https://s.weibo.com/weibo?q=%2362%E5%B2%81%E8%80%81%E4%BC%AF%E5%90%83%E9%A5%AD%E8%AF%AF%E5%90%9E%E6%9E%A3%E6%A0%B8%E8%82%9A%E5%A4%A7%E5%A6%82%E5%AD%95%E5%A6%87%23) `77.5K 🔥` `NEW`
1. [官方通报男孩景区游玩时突发坠崖](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%A9%E6%99%AF%E5%8C%BA%E6%B8%B8%E7%8E%A9%E6%97%B6%E7%AA%81%E5%8F%91%E5%9D%A0%E5%B4%96%23) `72.8K 🔥` `NEW`
1. [乌噜噜 魔礼海 (Wu Lulu Demonic Sea)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%99%9C%E5%99%9C%20%E9%AD%94%E7%A4%BC%E6%B5%B7%23) `71.0K 🔥` `NEW`
1. [命运托举你的方式有时很意外](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E6%89%98%E4%B8%BE%E4%BD%A0%E7%9A%84%E6%96%B9%E5%BC%8F%E6%9C%89%E6%97%B6%E5%BE%88%E6%84%8F%E5%A4%96%23) `69.8K 🔥` `NEW`
1. [一家人春节自驾11天游7城仅花8千](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%BA%BA%E6%98%A5%E8%8A%82%E8%87%AA%E9%A9%BE11%E5%A4%A9%E6%B8%B87%E5%9F%8E%E4%BB%85%E8%8A%B18%E5%8D%83%23) `63.9K 🔥` `NEW`
1. [原来小狗也有门禁啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B0%8F%E7%8B%97%E4%B9%9F%E6%9C%89%E9%97%A8%E7%A6%81%E5%95%8A%23) `62.7K 🔥` `NEW`
1. [周启豪3比1阿鲁纳](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AA3%E6%AF%941%E9%98%BF%E9%B2%81%E7%BA%B3%23) `62.6K 🔥` `NEW`
1. [厚本进组不让江山](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%E8%BF%9B%E7%BB%84%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%23) `451.4K 🔥` `+188%`
1. [香港宏福苑7座受灾楼宇将拆除](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%AE%8F%E7%A6%8F%E8%8B%917%E5%BA%A7%E5%8F%97%E7%81%BE%E6%A5%BC%E5%AE%87%E5%B0%86%E6%8B%86%E9%99%A4%23) `254.9K 🔥` `+52%`
1. [姥姥说上次吃还是在旧社会](https://s.weibo.com/weibo?q=%23%E5%A7%A5%E5%A7%A5%E8%AF%B4%E4%B8%8A%E6%AC%A1%E5%90%83%E8%BF%98%E6%98%AF%E5%9C%A8%E6%97%A7%E7%A4%BE%E4%BC%9A%23) `251.5K 🔥` `+119%`
1. [美国11岁男孩被没收游戏机爆头养父](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD11%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E6%B2%A1%E6%94%B6%E6%B8%B8%E6%88%8F%E6%9C%BA%E7%88%86%E5%A4%B4%E5%85%BB%E7%88%B6%23) `187.8K 🔥` `+103%`
1. [沈妙原型 王艳](https://s.weibo.com/weibo?q=%23%E6%B2%88%E5%A6%99%E5%8E%9F%E5%9E%8B%20%E7%8E%8B%E8%89%B3%23) `1.1M 🔥`
1. [若决赛取消谷爱凌将无缘奖牌 (If the final is canceled, Gu Ailing will miss the medal)](https://s.weibo.com/weibo?q=%23%E8%8B%A5%E5%86%B3%E8%B5%9B%E5%8F%96%E6%B6%88%E8%B0%B7%E7%88%B1%E5%87%8C%E5%B0%86%E6%97%A0%E7%BC%98%E5%A5%96%E7%89%8C%23) `781.1K 🔥`
1. [春运前20天预计流动量超50亿人次 (The number of people traveling during the first 20 days of Spring Festival travel is expected to exceed 5 billion)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%BF%90%E5%89%8D20%E5%A4%A9%E9%A2%84%E8%AE%A1%E6%B5%81%E5%8A%A8%E9%87%8F%E8%B6%8550%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `631.3K 🔥`
1. [高速堵车](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%A0%B5%E8%BD%A6%23) `235.0K 🔥`
1. [齐思钧回应分手 (Qi Sijun responded to the breakup)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E5%9B%9E%E5%BA%94%E5%88%86%E6%89%8B%23) `185.6K 🔥`
1. [杨洋手部骨折](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%89%8B%E9%83%A8%E9%AA%A8%E6%8A%98%23) `183.9K 🔥`
1. [伊朗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `179.3K 🔥`
1. [突然意识到经常习惯性霸凌自己](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E7%BB%8F%E5%B8%B8%E4%B9%A0%E6%83%AF%E6%80%A7%E9%9C%B8%E5%87%8C%E8%87%AA%E5%B7%B1%23) `151.7K 🔥`
1. [东北夫妻节后返程一家人都哭了](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E5%A4%AB%E5%A6%BB%E8%8A%82%E5%90%8E%E8%BF%94%E7%A8%8B%E4%B8%80%E5%AE%B6%E4%BA%BA%E9%83%BD%E5%93%AD%E4%BA%86%23) `136.3K 🔥`
1. [特朗普开始报复了 (Trump is taking revenge)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%BC%80%E5%A7%8B%E6%8A%A5%E5%A4%8D%E4%BA%86%23) `132.3K 🔥`
1. [带半瓶茅台乘火车被拦欲当场喝完](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%8D%8A%E7%93%B6%E8%8C%85%E5%8F%B0%E4%B9%98%E7%81%AB%E8%BD%A6%E8%A2%AB%E6%8B%A6%E6%AC%B2%E5%BD%93%E5%9C%BA%E5%96%9D%E5%AE%8C%23) `128.2K 🔥`
1. [家里有三个女儿出门有多难](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E6%9C%89%E4%B8%89%E4%B8%AA%E5%A5%B3%E5%84%BF%E5%87%BA%E9%97%A8%E6%9C%89%E5%A4%9A%E9%9A%BE%23) `126.5K 🔥`
1. [王鹤棣自曝新疆拍戏胖到140斤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%87%AA%E6%9B%9D%E6%96%B0%E7%96%86%E6%8B%8D%E6%88%8F%E8%83%96%E5%88%B0140%E6%96%A4%23) `103.1K 🔥`
1. [哈尔滨冰雪大世界退票后下届免费看](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E5%86%B0%E9%9B%AA%E5%A4%A7%E4%B8%96%E7%95%8C%E9%80%80%E7%A5%A8%E5%90%8E%E4%B8%8B%E5%B1%8A%E5%85%8D%E8%B4%B9%E7%9C%8B%23) `102.3K 🔥`
1. [徐梦桃的金牌有划痕了 (Xu Mengtao’s gold medal is scratched)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%9A%84%E9%87%91%E7%89%8C%E6%9C%89%E5%88%92%E7%97%95%E4%BA%86%23) `96.8K 🔥`
1. [真正的城巴佬](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%9F%8E%E5%B7%B4%E4%BD%AC%23) `85.2K 🔥`
1. [林孝埈再次道歉](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E5%86%8D%E6%AC%A1%E9%81%93%E6%AD%89%23) `241.2K 🔥` `-51%`
1. [泰国官方通报清迈72只老虎死亡](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B8%85%E8%BF%8872%E5%8F%AA%E8%80%81%E8%99%8E%E6%AD%BB%E4%BA%A1%23) `189.3K 🔥` `-52%`
1. [镖人口碑升至第一](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E5%8F%A3%E7%A2%91%E5%8D%87%E8%87%B3%E7%AC%AC%E4%B8%80%23) `135.2K 🔥` `-34%`
1. [将门毒后用程少商的个人曲](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E7%94%A8%E7%A8%8B%E5%B0%91%E5%95%86%E7%9A%84%E4%B8%AA%E4%BA%BA%E6%9B%B2%23) `133.5K 🔥` `-39%`
1. [王鹤棣宋茜恳求观众多给一些机会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%8B%E8%8C%9C%E6%81%B3%E6%B1%82%E8%A7%82%E4%BC%97%E5%A4%9A%E7%BB%99%E4%B8%80%E4%BA%9B%E6%9C%BA%E4%BC%9A%23) `131.7K 🔥` `-28%`
1. [谷爱凌U型场地决赛或取消 (Gu Ailing’s U-shaped field final may be cancelled)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CU%E5%9E%8B%E5%9C%BA%E5%9C%B0%E5%86%B3%E8%B5%9B%E6%88%96%E5%8F%96%E6%B6%88%23) `95.6K 🔥` `-43%`
1. [李昀锐被偶遇教路人拍照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%A2%AB%E5%81%B6%E9%81%87%E6%95%99%E8%B7%AF%E4%BA%BA%E6%8B%8D%E7%85%A7%23) `72.7K 🔥` `-44%`
1. [75岁钓帝黑大爷去世](https://s.weibo.com/weibo?q=%2375%E5%B2%81%E9%92%93%E5%B8%9D%E9%BB%91%E5%A4%A7%E7%88%B7%E5%8E%BB%E4%B8%96%23) `70.8K 🔥` `-23%`
1. [打麻将公式](https://s.weibo.com/weibo?q=%23%E6%89%93%E9%BA%BB%E5%B0%86%E5%85%AC%E5%BC%8F%23) `70.4K 🔥` `-31%`
1. [小伙刚还清车贷宝马几乎撞报废 (The guy just paid off his car loan and his BMW was almost totaled)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%88%9A%E8%BF%98%E6%B8%85%E8%BD%A6%E8%B4%B7%E5%AE%9D%E9%A9%AC%E5%87%A0%E4%B9%8E%E6%92%9E%E6%8A%A5%E5%BA%9F%23) `70.4K 🔥` `-51%`
1. [时代少年团演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `69.3K 🔥` `-30%`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `69.2K 🔥` `-25%`
1. [躺太久身体会越躺越虚](https://s.weibo.com/weibo?q=%23%E8%BA%BA%E5%A4%AA%E4%B9%85%E8%BA%AB%E4%BD%93%E4%BC%9A%E8%B6%8A%E8%BA%BA%E8%B6%8A%E8%99%9A%23) `66.5K 🔥` `-44%`
1. [伊能静衣服吊牌没摘 (Yi Nengjing didn’t take off her clothes tag)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%A1%A3%E6%9C%8D%E5%90%8A%E7%89%8C%E6%B2%A1%E6%91%98%23) `66.0K 🔥` `-54%`
1. [李昀锐当上宋雨琦站哥了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%BD%93%E4%B8%8A%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%AB%99%E5%93%A5%E4%BA%86%23) `62.5K 🔥` `-22%`

Updated at 2026-02-22 13:59:45

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
