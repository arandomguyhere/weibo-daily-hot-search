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

1. [浪姐四公小考排名 (Ranking of Lang Jie and Si Gong’s quiz)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E5%B0%8F%E8%80%83%E6%8E%92%E5%90%8D%23) `641.5K 🔥` `NEW`
1. [刘国正采访偏见球迷也不舒服](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%AD%A3%E9%87%87%E8%AE%BF%E5%81%8F%E8%A7%81%E7%90%83%E8%BF%B7%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%23) `465.2K 🔥` `NEW`
1. [多地和降雨赛跑全力保粮](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%92%8C%E9%99%8D%E9%9B%A8%E8%B5%9B%E8%B7%91%E5%85%A8%E5%8A%9B%E4%BF%9D%E7%B2%AE%23) `356.5K 🔥` `NEW`
1. [成毅纯享全球品牌代言人](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%BA%AF%E4%BA%AB%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `356.2K 🔥` `NEW`
1. [白玉兰的口碑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E7%9A%84%E5%8F%A3%E7%A2%91%23) `355.8K 🔥` `NEW`
1. [五个女博士被投诉喝了过敏](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%AA%E5%A5%B3%E5%8D%9A%E5%A3%AB%E8%A2%AB%E6%8A%95%E8%AF%89%E5%96%9D%E4%BA%86%E8%BF%87%E6%95%8F%23) `353.9K 🔥` `NEW`
1. [现发4嘉宾阵容](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%8F%914%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `296.6K 🔥` `NEW`
1. [极狐问道V9志同道合的伙伴们](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%8B%90%E9%97%AE%E9%81%93V9%E5%BF%97%E5%90%8C%E9%81%93%E5%90%88%E7%9A%84%E4%BC%99%E4%BC%B4%E4%BB%AC%23) `286.6K 🔥` `NEW`
1. [人真的需要不断流动的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9C%9F%E7%9A%84%E9%9C%80%E8%A6%81%E4%B8%8D%E6%96%AD%E6%B5%81%E5%8A%A8%E7%9A%84%23) `283.1K 🔥` `NEW`
1. [武契奇夫人试穿旗袍直呼太喜欢了](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%A4%AB%E4%BA%BA%E8%AF%95%E7%A9%BF%E6%97%97%E8%A2%8D%E7%9B%B4%E5%91%BC%E5%A4%AA%E5%96%9C%E6%AC%A2%E4%BA%86%23) `251.4K 🔥` `NEW`
1. [洗衣机长时间不清理比马桶还脏 (If the washing machine is not cleaned for a long time, it will be dirtier than the toilet.)](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%9C%BA%E9%95%BF%E6%97%B6%E9%97%B4%E4%B8%8D%E6%B8%85%E7%90%86%E6%AF%94%E9%A9%AC%E6%A1%B6%E8%BF%98%E8%84%8F%23) `227.1K 🔥` `NEW`
1. [巴基斯坦拒绝美国](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%8B%92%E7%BB%9D%E7%BE%8E%E5%9B%BD%23) `226.9K 🔥` `NEW`
1. [王鹤棣父亲回应店铺遭多条差评](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%BA%97%E9%93%BA%E9%81%AD%E5%A4%9A%E6%9D%A1%E5%B7%AE%E8%AF%84%23) `225.7K 🔥` `NEW`
1. [于正回复余华](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%A4%8D%E4%BD%99%E5%8D%8E%23) `224.1K 🔥` `NEW`
1. [雷军回应武契奇说小米车漂亮但买不起](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E6%AD%A6%E5%A5%91%E5%A5%87%E8%AF%B4%E5%B0%8F%E7%B1%B3%E8%BD%A6%E6%BC%82%E4%BA%AE%E4%BD%86%E4%B9%B0%E4%B8%8D%E8%B5%B7%23) `223.7K 🔥` `NEW`
1. [姜太显撞脸宋威龙](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A4%AA%E6%98%BE%E6%92%9E%E8%84%B8%E5%AE%8B%E5%A8%81%E9%BE%99%23) `221.8K 🔥` `NEW`
1. [钟铉雪莉荷拉赛纶的心理医生](https://s.weibo.com/weibo?q=%23%E9%92%9F%E9%93%89%E9%9B%AA%E8%8E%89%E8%8D%B7%E6%8B%89%E8%B5%9B%E7%BA%B6%E7%9A%84%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%23) `221.5K 🔥` `NEW`
1. [女子被养2年猫攻击致颅部3级损伤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%85%BB2%E5%B9%B4%E7%8C%AB%E6%94%BB%E5%87%BB%E8%87%B4%E9%A2%85%E9%83%A83%E7%BA%A7%E6%8D%9F%E4%BC%A4%23) `219.8K 🔥` `NEW`
1. [王鹤棣风波不该让棣爸油炸买单](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%A3%8E%E6%B3%A2%E4%B8%8D%E8%AF%A5%E8%AE%A9%E6%A3%A3%E7%88%B8%E6%B2%B9%E7%82%B8%E4%B9%B0%E5%8D%95%23) `219.1K 🔥` `NEW`
1. [法拉利暴跌](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E6%9A%B4%E8%B7%8C%23) `217.2K 🔥` `NEW`
1. [薛小婉 道歉等着下辈子吧 (Xue Xiaowan, please wait until the next life to apologize.)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%B0%8F%E5%A9%89%20%E9%81%93%E6%AD%89%E7%AD%89%E7%9D%80%E4%B8%8B%E8%BE%88%E5%AD%90%E5%90%A7%23) `214.2K 🔥` `NEW`
1. [刘亦菲 咸雪](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E5%92%B8%E9%9B%AA%23) `208.0K 🔥` `NEW`
1. [女干部展示不到100元的耳环](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%B9%B2%E9%83%A8%E5%B1%95%E7%A4%BA%E4%B8%8D%E5%88%B0100%E5%85%83%E7%9A%84%E8%80%B3%E7%8E%AF%23) `200.5K 🔥` `NEW`
1. [尔康从缅甸回云南了](https://s.weibo.com/weibo?q=%23%E5%B0%94%E5%BA%B7%E4%BB%8E%E7%BC%85%E7%94%B8%E5%9B%9E%E4%BA%91%E5%8D%97%E4%BA%86%23) `198.4K 🔥` `NEW`
1. [于正也不舒服](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%23) `194.2K 🔥` `NEW`
1. [小米将发布新一代OS](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%B0%86%E5%8F%91%E5%B8%83%E6%96%B0%E4%B8%80%E4%BB%A3OS%23) `192.7K 🔥` `NEW`
1. [薛小婉小号](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%B0%8F%E5%A9%89%E5%B0%8F%E5%8F%B7%23) `187.4K 🔥` `NEW`
1. [68岁丈夫出轨90后住汤臣一品](https://s.weibo.com/weibo?q=%2368%E5%B2%81%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A890%E5%90%8E%E4%BD%8F%E6%B1%A4%E8%87%A3%E4%B8%80%E5%93%81%23) `182.4K 🔥` `NEW`
1. [主播用果园背景卖货却说去开个空调](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E7%94%A8%E6%9E%9C%E5%9B%AD%E8%83%8C%E6%99%AF%E5%8D%96%E8%B4%A7%E5%8D%B4%E8%AF%B4%E5%8E%BB%E5%BC%80%E4%B8%AA%E7%A9%BA%E8%B0%83%23) `182.3K 🔥` `NEW`
1. [男子吃完面加6勺辣椒酱被店主曝光](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E5%AE%8C%E9%9D%A2%E5%8A%A06%E5%8B%BA%E8%BE%A3%E6%A4%92%E9%85%B1%E8%A2%AB%E5%BA%97%E4%B8%BB%E6%9B%9D%E5%85%89%23) `171.5K 🔥` `NEW`
1. [内娱演员白玉兰奖首提年龄 (Age of first nomination for Domestic Entertainment Actor Magnolia Award)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%BC%94%E5%91%98%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%E9%A6%96%E6%8F%90%E5%B9%B4%E9%BE%84%23) `152.0K 🔥` `NEW`
1. [刘耀文故意晒左脸耳洞](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%95%85%E6%84%8F%E6%99%92%E5%B7%A6%E8%84%B8%E8%80%B3%E6%B4%9E%23) `151.6K 🔥` `NEW`
1. [妻子反常男子排查家中发现藏女邻居](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8F%8D%E5%B8%B8%E7%94%B7%E5%AD%90%E6%8E%92%E6%9F%A5%E5%AE%B6%E4%B8%AD%E5%8F%91%E7%8E%B0%E8%97%8F%E5%A5%B3%E9%82%BB%E5%B1%85%23) `150.5K 🔥` `NEW`
1. [黄灿灿发了11张浪姐合照](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%8F%91%E4%BA%8611%E5%BC%A0%E6%B5%AA%E5%A7%90%E5%90%88%E7%85%A7%23) `148.7K 🔥` `NEW`
1. [张子墨 张峻豪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E5%A2%A8%20%E5%BC%A0%E5%B3%BB%E8%B1%AA%23) `145.2K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `141.4K 🔥` `NEW`
1. [温岚在ICU抢救了10天](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%E5%9C%A8ICU%E6%8A%A2%E6%95%91%E4%BA%8610%E5%A4%A9%23) `139.3K 🔥` `NEW`
1. [欧豪粉丝五连质问工作室](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%B1%AA%E7%B2%89%E4%B8%9D%E4%BA%94%E8%BF%9E%E8%B4%A8%E9%97%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `137.4K 🔥` `NEW`
1. [原来蟑螂真的可能越踩越多](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%9F%91%E8%9E%82%E7%9C%9F%E7%9A%84%E5%8F%AF%E8%83%BD%E8%B6%8A%E8%B8%A9%E8%B6%8A%E5%A4%9A%23) `134.7K 🔥` `NEW`
1. [为什么浪姐女导演吴梦知要离职](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B5%AA%E5%A7%90%E5%A5%B3%E5%AF%BC%E6%BC%94%E5%90%B4%E6%A2%A6%E7%9F%A5%E8%A6%81%E7%A6%BB%E8%81%8C%23) `132.2K 🔥` `NEW`
1. [曾沛慈时尚首封 (Zeng Peici’s first fashion cover)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%97%B6%E5%B0%9A%E9%A6%96%E5%B0%81%23) `132.0K 🔥` `NEW`
1. [乙酰氨基酚和布洛芬的差异](https://s.weibo.com/weibo?q=%23%E4%B9%99%E9%85%B0%E6%B0%A8%E5%9F%BA%E9%85%9A%E5%92%8C%E5%B8%83%E6%B4%9B%E8%8A%AC%E7%9A%84%E5%B7%AE%E5%BC%82%23) `115.8K 🔥` `NEW`
1. [CBA总决赛](https://s.weibo.com/weibo?q=%23CBA%E6%80%BB%E5%86%B3%E8%B5%9B%23) `113.2K 🔥` `NEW`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `105.8K 🔥` `NEW`
1. [WBG出征2026EWC电竞世俱杯](https://s.weibo.com/weibo?q=%23WBG%E5%87%BA%E5%BE%812026EWC%E7%94%B5%E7%AB%9E%E4%B8%96%E4%BF%B1%E6%9D%AF%23) `104.5K 🔥` `NEW`
1. [武契奇在小米工厂下单了](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%9C%A8%E5%B0%8F%E7%B1%B3%E5%B7%A5%E5%8E%82%E4%B8%8B%E5%8D%95%E4%BA%86%23) `102.5K 🔥` `NEW`
1. [印度被烤糊了](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E8%A2%AB%E7%83%A4%E7%B3%8A%E4%BA%86%23) `97.4K 🔥` `NEW`
1. [车行老板说油车掉价20万都没人买](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E8%A1%8C%E8%80%81%E6%9D%BF%E8%AF%B4%E6%B2%B9%E8%BD%A6%E6%8E%89%E4%BB%B720%E4%B8%87%E9%83%BD%E6%B2%A1%E4%BA%BA%E4%B9%B0%23) `95.9K 🔥` `NEW`
1. [9岁姐姐带7岁弟弟抢盖10000斤大蒜](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A7%90%E5%A7%90%E5%B8%A67%E5%B2%81%E5%BC%9F%E5%BC%9F%E6%8A%A2%E7%9B%9610000%E6%96%A4%E5%A4%A7%E8%92%9C%23) `94.5K 🔥` `NEW`
1. [小胖在陈伯直播间](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96%E5%9C%A8%E9%99%88%E4%BC%AF%E7%9B%B4%E6%92%AD%E9%97%B4%23) `94.1K 🔥` `NEW`
1. [小米一季度净利润60.72亿 (Xiaomi's first quarter net profit was 6.072 billion)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%80%E5%AD%A3%E5%BA%A6%E5%87%80%E5%88%A9%E6%B6%A660.72%E4%BA%BF%23) `88.7K 🔥` `NEW`

Updated at 2026-05-27 00:59:42

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
