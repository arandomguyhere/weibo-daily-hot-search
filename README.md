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

1. [B站春晚 夯 (Station B Spring Festival Gala)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%A5%E6%99%9A%20%E5%A4%AF%23) `2.2M 🔥` `NEW`
1. [泰山之巅18个人守护800万人](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%E4%B9%8B%E5%B7%8518%E4%B8%AA%E4%BA%BA%E5%AE%88%E6%8A%A4800%E4%B8%87%E4%BA%BA%23) `745.4K 🔥` `NEW`
1. [北京春晚 活人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%98%A5%E6%99%9A%20%E6%B4%BB%E4%BA%BA%23) `602.1K 🔥` `NEW`
1. [埃及土耳其等8国联合声明](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E5%9C%9F%E8%80%B3%E5%85%B6%E7%AD%898%E5%9B%BD%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `211.0K 🔥` `NEW`
1. [速度滑冰](https://s.weibo.com/weibo?q=%23%E9%80%9F%E5%BA%A6%E6%BB%91%E5%86%B0%23) `209.9K 🔥` `NEW`
1. [飞驰人生](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `206.8K 🔥` `NEW`
1. [千问投喂短剧霸总八个粽子](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E6%8A%95%E5%96%82%E7%9F%AD%E5%89%A7%E9%9C%B8%E6%80%BB%E5%85%AB%E4%B8%AA%E7%B2%BD%E5%AD%90%23) `206.3K 🔥` `NEW`
1. [俄外交部发言人拜年也玩谐音梗](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A4%96%E4%BA%A4%E9%83%A8%E5%8F%91%E8%A8%80%E4%BA%BA%E6%8B%9C%E5%B9%B4%E4%B9%9F%E7%8E%A9%E8%B0%90%E9%9F%B3%E6%A2%97%23) `192.5K 🔥` `NEW`
1. [宋小宝 我上坟都不敢这么烧](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B0%8F%E5%AE%9D%20%E6%88%91%E4%B8%8A%E5%9D%9F%E9%83%BD%E4%B8%8D%E6%95%A2%E8%BF%99%E4%B9%88%E7%83%A7%23) `185.9K 🔥` `NEW`
1. [年度女演员杨幂](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%BA%A6%E5%A5%B3%E6%BC%94%E5%91%98%E6%9D%A8%E5%B9%82%23) `178.9K 🔥` `NEW`
1. [B站春晚 好看 (Station B Spring Festival Gala is good-looking)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%A5%E6%99%9A%20%E5%A5%BD%E7%9C%8B%23) `178.0K 🔥` `NEW`
1. [冬奥会露内衣品牌女选手引来广告商](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%E9%9C%B2%E5%86%85%E8%A1%A3%E5%93%81%E7%89%8C%E5%A5%B3%E9%80%89%E6%89%8B%E5%BC%95%E6%9D%A5%E5%B9%BF%E5%91%8A%E5%95%86%23) `174.3K 🔥` `NEW`
1. [瞿颖胡兵 为啥没在一起](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%83%A1%E5%85%B5%20%E4%B8%BA%E5%95%A5%E6%B2%A1%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `172.8K 🔥` `NEW`
1. [比艺人还帅的韩国花滑天才](https://s.weibo.com/weibo?q=%23%E6%AF%94%E8%89%BA%E4%BA%BA%E8%BF%98%E5%B8%85%E7%9A%84%E9%9F%A9%E5%9B%BD%E8%8A%B1%E6%BB%91%E5%A4%A9%E6%89%8D%23) `172.4K 🔥` `NEW`
1. [AI都能给脱口秀冠军写开场白了](https://s.weibo.com/weibo?q=%23AI%E9%83%BD%E8%83%BD%E7%BB%99%E8%84%B1%E5%8F%A3%E7%A7%80%E5%86%A0%E5%86%9B%E5%86%99%E5%BC%80%E5%9C%BA%E7%99%BD%E4%BA%86%23) `171.7K 🔥` `NEW`
1. [失联博士生姐姐赴意寻人未果回国](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%81%94%E5%8D%9A%E5%A3%AB%E7%94%9F%E5%A7%90%E5%A7%90%E8%B5%B4%E6%84%8F%E5%AF%BB%E4%BA%BA%E6%9C%AA%E6%9E%9C%E5%9B%9E%E5%9B%BD%23) `171.3K 🔥` `NEW`
1. [同学您好 我是张兴朝的家崽](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%AD%A6%E6%82%A8%E5%A5%BD%20%E6%88%91%E6%98%AF%E5%BC%A0%E5%85%B4%E6%9C%9D%E7%9A%84%E5%AE%B6%E5%B4%BD%23) `171.1K 🔥` `NEW`
1. [正确走路姿势是用臀而不是腿](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E7%A1%AE%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%E6%98%AF%E7%94%A8%E8%87%80%E8%80%8C%E4%B8%8D%E6%98%AF%E8%85%BF%23) `162.9K 🔥` `NEW`
1. [小酒窝做管乐的花童了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%81%9A%E7%AE%A1%E4%B9%90%E7%9A%84%E8%8A%B1%E7%AB%A5%E4%BA%86%23) `126.3K 🔥` `NEW`
1. [中国电视剧年度盛典](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B5%E8%A7%86%E5%89%A7%E5%B9%B4%E5%BA%A6%E7%9B%9B%E5%85%B8%23) `124.3K 🔥` `NEW`
1. [广州烟花 (Guangzhou fireworks)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E7%83%9F%E8%8A%B1%23) `975.8K 🔥` `+292%`
1. [谷爱凌说这是4年以来第一次赛大跳台](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E8%BF%99%E6%98%AF4%E5%B9%B4%E4%BB%A5%E6%9D%A5%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%9B%E5%A4%A7%E8%B7%B3%E5%8F%B0%23) `204.8K 🔥` `+44%`
1. [总台使用Mate80竖屏直播春晚 (The main station uses Mate80 vertical screen to live broadcast the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%80%BB%E5%8F%B0%E4%BD%BF%E7%94%A8Mate80%E7%AB%96%E5%B1%8F%E7%9B%B4%E6%92%AD%E6%98%A5%E6%99%9A%23) `698.1K 🔥`
1. [老君山惊现灵气护罩](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%90%9B%E5%B1%B1%E6%83%8A%E7%8E%B0%E7%81%B5%E6%B0%94%E6%8A%A4%E7%BD%A9%23) `210.7K 🔥`
1. [千万别贪便宜买监控](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E8%B4%AA%E4%BE%BF%E5%AE%9C%E4%B9%B0%E7%9B%91%E6%8E%A7%23) `207.3K 🔥`
1. [谷爱凌U型场地数据近乎完美 (Gu Ailing’s U-shaped field data is almost perfect)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CU%E5%9E%8B%E5%9C%BA%E5%9C%B0%E6%95%B0%E6%8D%AE%E8%BF%91%E4%B9%8E%E5%AE%8C%E7%BE%8E%23) `201.6K 🔥`
1. [爸妈来后冰箱都变老了 (The refrigerator has become old since my parents came here.)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E6%9D%A5%E5%90%8E%E5%86%B0%E7%AE%B1%E9%83%BD%E5%8F%98%E8%80%81%E4%BA%86%23) `198.2K 🔥`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `188.5K 🔥`
1. [B站春晚](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%A5%E6%99%9A%23) `182.5K 🔥`
1. [金价银价直线跳水](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `179.6K 🔥`
1. [母女过年炸丸子变大型翻车现场](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E8%BF%87%E5%B9%B4%E7%82%B8%E4%B8%B8%E5%AD%90%E5%8F%98%E5%A4%A7%E5%9E%8B%E7%BF%BB%E8%BD%A6%E7%8E%B0%E5%9C%BA%23) `174.7K 🔥`
1. [王菲春晚原唱是李雪琴北大闺蜜 (Faye Wong's original singer for the Spring Festival Gala is Li Xueqin, her best friend from Peking University)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%98%A5%E6%99%9A%E5%8E%9F%E5%94%B1%E6%98%AF%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%8C%97%E5%A4%A7%E9%97%BA%E8%9C%9C%23) `174.7K 🔥`
1. [穆祉丞高会 落叶归根](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%AB%98%E4%BC%9A%20%E8%90%BD%E5%8F%B6%E5%BD%92%E6%A0%B9%23) `174.6K 🔥`
1. [刘少昂换四叶草挂件](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E6%8D%A2%E5%9B%9B%E5%8F%B6%E8%8D%89%E6%8C%82%E4%BB%B6%23) `174.5K 🔥`
1. [飞驰人生3票房 (Flying Life 3 box office)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E7%A5%A8%E6%88%BF%23) `174.4K 🔥`
1. [镖人 武侠群像](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E6%AD%A6%E4%BE%A0%E7%BE%A4%E5%83%8F%23) `174.1K 🔥`
1. [杨幂朱一龙吻戏 (Yang Mi and Zhu Yilong kiss scene)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9C%B1%E4%B8%80%E9%BE%99%E5%90%BB%E6%88%8F%23) `173.5K 🔥`
1. [英国男子打砸香港机场自助机器](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E7%94%B7%E5%AD%90%E6%89%93%E7%A0%B8%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E8%87%AA%E5%8A%A9%E6%9C%BA%E5%99%A8%23) `173.3K 🔥`
1. [王楚然一脸懵不像演的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%80%E8%84%B8%E6%87%B5%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `166.5K 🔥`
1. [冯巩 我想死你们了](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B7%A9%20%E6%88%91%E6%83%B3%E6%AD%BB%E4%BD%A0%E4%BB%AC%E4%BA%86%23) `161.2K 🔥`
1. [岳云鹏一个人上春山](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8A%E6%98%A5%E5%B1%B1%23) `160.5K 🔥`
1. [大年初一不煮饭 (No cooking on New Year’s Day)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E4%B8%8D%E7%85%AE%E9%A5%AD%23) `116.0K 🔥`
1. [很火但难吃的小吃](https://s.weibo.com/weibo?q=%23%E5%BE%88%E7%81%AB%E4%BD%86%E9%9A%BE%E5%90%83%E7%9A%84%E5%B0%8F%E5%90%83%23) `320.5K 🔥` `-56%`
1. [镖人 真的好看 (The escort is really good-looking)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%9C%8B%23) `307.7K 🔥` `-55%`
1. [看飞驰人生接美的好风 (Watch the beautiful scenery of flying life)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%E6%8E%A5%E7%BE%8E%E7%9A%84%E5%A5%BD%E9%A3%8E%23) `288.1K 🔥` `-52%`
1. [北京台春晚](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8F%B0%E6%98%A5%E6%99%9A%23) `284.4K 🔥` `-76%`
1. [沙溢给白鹿发了多少压岁钱](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E7%BB%99%E7%99%BD%E9%B9%BF%E5%8F%91%E4%BA%86%E5%A4%9A%E5%B0%91%E5%8E%8B%E5%B2%81%E9%92%B1%23) `208.1K 🔥` `-62%`
1. [全国初二回娘家的女婿belike](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%88%9D%E4%BA%8C%E5%9B%9E%E5%A8%98%E5%AE%B6%E7%9A%84%E5%A5%B3%E5%A9%BFbelike%23) `205.5K 🔥` `-77%`
1. [时代少年团红包 (Times Youth League red envelope)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%BA%A2%E5%8C%85%23) `174.4K 🔥` `-78%`
1. [三文鱼其实是海底大肥猪 (Salmon is actually a big fat pig on the bottom of the sea)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%96%87%E9%B1%BC%E5%85%B6%E5%AE%9E%E6%98%AF%E6%B5%B7%E5%BA%95%E5%A4%A7%E8%82%A5%E7%8C%AA%23) `126.6K 🔥` `-28%`
1. [不是年味淡了而是轮到我们做主了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%98%AF%E5%B9%B4%E5%91%B3%E6%B7%A1%E4%BA%86%E8%80%8C%E6%98%AF%E8%BD%AE%E5%88%B0%E6%88%91%E4%BB%AC%E5%81%9A%E4%B8%BB%E4%BA%86%23) `116.0K 🔥` `-34%`

Updated at 2026-02-17 22:28:21

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
