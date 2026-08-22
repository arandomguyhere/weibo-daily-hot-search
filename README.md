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

1. [临沂爆炸涉非法储存炸药 (Linyi explosion involves illegal storage of explosives)](https://s.weibo.com/weibo?q=%23%E4%B8%B4%E6%B2%82%E7%88%86%E7%82%B8%E6%B6%89%E9%9D%9E%E6%B3%95%E5%82%A8%E5%AD%98%E7%82%B8%E8%8D%AF%23) `409.8K 🔥` `NEW`
1. [浮生](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%23) `192.6K 🔥` `NEW`
1. [诱导粉丝打赏2500万女主播父亲发声](https://s.weibo.com/weibo?q=%23%E8%AF%B1%E5%AF%BC%E7%B2%89%E4%B8%9D%E6%89%93%E8%B5%8F2500%E4%B8%87%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `182.6K 🔥` `NEW`
1. [美国偶遇田亮叶一茜森碟](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%81%B6%E9%81%87%E7%94%B0%E4%BA%AE%E5%8F%B6%E4%B8%80%E8%8C%9C%E6%A3%AE%E7%A2%9F%23) `178.6K 🔥` `NEW`
1. [声音被AI侵权后反给免费配音](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E9%9F%B3%E8%A2%ABAI%E4%BE%B5%E6%9D%83%E5%90%8E%E5%8F%8D%E7%BB%99%E5%85%8D%E8%B4%B9%E9%85%8D%E9%9F%B3%23) `169.9K 🔥` `NEW`
1. [曾辉口碑](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%8F%A3%E7%A2%91%23) `168.2K 🔥` `NEW`
1. [妻子未提供精卵不享有胚胎处置权](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E6%9C%AA%E6%8F%90%E4%BE%9B%E7%B2%BE%E5%8D%B5%E4%B8%8D%E4%BA%AB%E6%9C%89%E8%83%9A%E8%83%8E%E5%A4%84%E7%BD%AE%E6%9D%83%23) `165.8K 🔥` `NEW`
1. [陈妍希怼恶评](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%80%BC%E6%81%B6%E8%AF%84%23) `163.9K 🔥` `NEW`
1. [霸总开着劳斯莱斯吃路边小馆](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E6%80%BB%E5%BC%80%E7%9D%80%E5%8A%B3%E6%96%AF%E8%8E%B1%E6%96%AF%E5%90%83%E8%B7%AF%E8%BE%B9%E5%B0%8F%E9%A6%86%23) `137.8K 🔥` `NEW`
1. [印度少年为要手机致一家三口坠崖](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%B0%91%E5%B9%B4%E4%B8%BA%E8%A6%81%E6%89%8B%E6%9C%BA%E8%87%B4%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%9D%A0%E5%B4%96%23) `134.7K 🔥` `NEW`
1. [诱导榜一大哥打赏2500万主播被控诈骗 (The anchor who induced the top brother to reward 25 million yuan was accused of fraud)](https://s.weibo.com/weibo?q=%23%E8%AF%B1%E5%AF%BC%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E6%89%93%E8%B5%8F2500%E4%B8%87%E4%B8%BB%E6%92%AD%E8%A2%AB%E6%8E%A7%E8%AF%88%E9%AA%97%23) `125.9K 🔥` `NEW`
1. [浮生杀青](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%E6%9D%80%E9%9D%92%23) `120.2K 🔥` `NEW`
1. [库里2910万美元出售1650平豪宅](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C2910%E4%B8%87%E7%BE%8E%E5%85%83%E5%87%BA%E5%94%AE1650%E5%B9%B3%E8%B1%AA%E5%AE%85%23) `117.8K 🔥` `NEW`
1. [2026年亚运会](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `114.1K 🔥` `NEW`
1. [女子用口罩完美复刻香奈儿无底鞋](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E5%8F%A3%E7%BD%A9%E5%AE%8C%E7%BE%8E%E5%A4%8D%E5%88%BB%E9%A6%99%E5%A5%88%E5%84%BF%E6%97%A0%E5%BA%95%E9%9E%8B%23) `107.5K 🔥` `NEW`
1. [权志龙父母现身BIGBANG演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E7%88%B6%E6%AF%8D%E7%8E%B0%E8%BA%ABBIGBANG%E6%BC%94%E5%94%B1%E4%BC%9A%23) `90.1K 🔥` `NEW`
1. [奚梦瑶超模展示天资中](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E8%B6%85%E6%A8%A1%E5%B1%95%E7%A4%BA%E5%A4%A9%E8%B5%84%E4%B8%AD%23) `86.9K 🔥` `NEW`
1. [阿森纳3比0考文垂](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B33%E6%AF%940%E8%80%83%E6%96%87%E5%9E%82%23) `86.9K 🔥` `NEW`
1. [女星穿香奈儿无底鞋脚掌变黑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%9F%E7%A9%BF%E9%A6%99%E5%A5%88%E5%84%BF%E6%97%A0%E5%BA%95%E9%9E%8B%E8%84%9A%E6%8E%8C%E5%8F%98%E9%BB%91%23) `812.5K 🔥` `+123%`
1. [全球首例为蟒蛇实施人类癌症疗法](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%BE%8B%E4%B8%BA%E8%9F%92%E8%9B%87%E5%AE%9E%E6%96%BD%E4%BA%BA%E7%B1%BB%E7%99%8C%E7%97%87%E7%96%97%E6%B3%95%23) `244.1K 🔥` `+54%`
1. [厚本新剧美成这样了 (Houben’s new drama is so beautiful)](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%E6%96%B0%E5%89%A7%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `164.4K 🔥` `+87%`
1. [女婴被遗弃在福州福利院门口](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A9%B4%E8%A2%AB%E9%81%97%E5%BC%83%E5%9C%A8%E7%A6%8F%E5%B7%9E%E7%A6%8F%E5%88%A9%E9%99%A2%E9%97%A8%E5%8F%A3%23) `159.4K 🔥` `+22%`
1. [外国网友怀疑中国农村是AI (Foreign netizens suspect that China’s rural areas are caused by AI)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%80%80%E7%96%91%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91%E6%98%AFAI%23) `1.1M 🔥`
1. [多元消费场景激发经济澎湃活力 (Diversified consumption scenarios stimulate economic vitality)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%85%83%E6%B6%88%E8%B4%B9%E5%9C%BA%E6%99%AF%E6%BF%80%E5%8F%91%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `615.7K 🔥`
1. [无法对小时候的杯子祛魅](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%B3%95%E5%AF%B9%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E6%9D%AF%E5%AD%90%E7%A5%9B%E9%AD%85%23) `518.4K 🔥`
1. [曾辉手机壳是跟韩雨彤的合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%98%AF%E8%B7%9F%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%9A%84%E5%90%88%E7%85%A7%23) `190.6K 🔥`
1. [大妈骑车戴三级头震惊辅警 (The aunt wearing a three-level headgear while riding a bicycle shocked the auxiliary police)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E9%AA%91%E8%BD%A6%E6%88%B4%E4%B8%89%E7%BA%A7%E5%A4%B4%E9%9C%87%E6%83%8A%E8%BE%85%E8%AD%A6%23) `190.3K 🔥`
1. [董璇让粉丝不要总是给小酒窝买盲盒了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E8%AE%A9%E7%B2%89%E4%B8%9D%E4%B8%8D%E8%A6%81%E6%80%BB%E6%98%AF%E7%BB%99%E5%B0%8F%E9%85%92%E7%AA%9D%E4%B9%B0%E7%9B%B2%E7%9B%92%E4%BA%86%23) `187.9K 🔥`
1. [陈柏霖当庭认罪](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `184.4K 🔥`
1. [世界杯决赛禁赛处罚出炉 (World Cup final ban penalty released)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E7%A6%81%E8%B5%9B%E5%A4%84%E7%BD%9A%E5%87%BA%E7%82%89%23) `177.6K 🔥`
1. [黑灯 弹壳](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%81%AF%20%E5%BC%B9%E5%A3%B3%23) `176.4K 🔥`
1. [94岁老战士穿外骨骼感觉年轻了](https://s.weibo.com/weibo?q=%2394%E5%B2%81%E8%80%81%E6%88%98%E5%A3%AB%E7%A9%BF%E5%A4%96%E9%AA%A8%E9%AA%BC%E6%84%9F%E8%A7%89%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `175.1K 🔥`
1. [女生暗恋被拒5年收到一箱青春档案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%9A%97%E6%81%8B%E8%A2%AB%E6%8B%925%E5%B9%B4%E6%94%B6%E5%88%B0%E4%B8%80%E7%AE%B1%E9%9D%92%E6%98%A5%E6%A1%A3%E6%A1%88%23) `175.0K 🔥`
1. [克莱加盟热火原因 (Klay’s reasons for joining the Heat)](https://s.weibo.com/weibo?q=%23%E5%85%8B%E8%8E%B1%E5%8A%A0%E7%9B%9F%E7%83%AD%E7%81%AB%E5%8E%9F%E5%9B%A0%23) `155.2K 🔥`
1. [樊振东 德甲联赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%20%E5%BE%B7%E7%94%B2%E8%81%94%E8%B5%9B%23) `99.9K 🔥`
1. [宋威龙直播 (Song Weilong live broadcast)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9B%B4%E6%92%AD%23) `92.8K 🔥`
1. [门把手缺陷引发最大规模召回 (Door handle defect triggers largest recall)](https://s.weibo.com/weibo?q=%23%E9%97%A8%E6%8A%8A%E6%89%8B%E7%BC%BA%E9%99%B7%E5%BC%95%E5%8F%91%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%AC%E5%9B%9E%23) `86.3K 🔥`
1. [欢子 退赛](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E9%80%80%E8%B5%9B%23) `399.9K 🔥` `-29%`
1. [丈夫拍妻子出轨却因妨害隐私获刑](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%8B%8D%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E5%8D%B4%E5%9B%A0%E5%A6%A8%E5%AE%B3%E9%9A%90%E7%A7%81%E8%8E%B7%E5%88%91%23) `221.1K 🔥` `-30%`
1. [鸭货为何不好卖了 (Why are duck products so hard to sell?)](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%B4%A7%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `206.6K 🔥` `-30%`
1. [张俪辞退修图师反转 (Zhang Li fires retoucher and reverses course)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BF%AA%E8%BE%9E%E9%80%80%E4%BF%AE%E5%9B%BE%E5%B8%88%E5%8F%8D%E8%BD%AC%23) `181.5K 🔥` `-21%`
1. [官方通报旅客买票占座放零食事件 (Official reports on incident of passengers buying tickets, occupying seats and giving snacks)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%85%E5%AE%A2%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E4%BA%8B%E4%BB%B6%23) `174.7K 🔥` `-26%`
1. [张彬彬曹骏李光洁吃了演员身份的亏 (Zhang Binbin, Cao Jun, and Li Guangjie suffered the loss of being an actor)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E6%9B%B9%E9%AA%8F%E6%9D%8E%E5%85%89%E6%B4%81%E5%90%83%E4%BA%86%E6%BC%94%E5%91%98%E8%BA%AB%E4%BB%BD%E7%9A%84%E4%BA%8F%23) `127.3K 🔥` `-39%`
1. [李现下意识伸手扶张婧仪 (Li Xian subconsciously reached out to help Zhang Jingyi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E4%B8%8B%E6%84%8F%E8%AF%86%E4%BC%B8%E6%89%8B%E6%89%B6%E5%BC%A0%E5%A9%A7%E4%BB%AA%23) `109.8K 🔥` `-40%`
1. [这7种异常和缺维生素B有关](https://s.weibo.com/weibo?q=%23%E8%BF%997%E7%A7%8D%E5%BC%82%E5%B8%B8%E5%92%8C%E7%BC%BA%E7%BB%B4%E7%94%9F%E7%B4%A0B%E6%9C%89%E5%85%B3%23) `108.4K 🔥` `-27%`
1. [人绞尽脑汁不如命运随手一挥 (It is better to rack one's brains than to let fate take a swipe at you)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%BB%9E%E5%B0%BD%E8%84%91%E6%B1%81%E4%B8%8D%E5%A6%82%E5%91%BD%E8%BF%90%E9%9A%8F%E6%89%8B%E4%B8%80%E6%8C%A5%23) `108.3K 🔥` `-32%`
1. [C罗新赛季首秀即破门](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%96%B0%E8%B5%9B%E5%AD%A3%E9%A6%96%E7%A7%80%E5%8D%B3%E7%A0%B4%E9%97%A8%23) `105.0K 🔥` `-24%`
1. [欢子入院治疗](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E5%85%A5%E9%99%A2%E6%B2%BB%E7%96%97%23) `103.3K 🔥` `-27%`
1. [张雅琪路人缘 (Popularity of Zhang Yaqi)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `93.3K 🔥` `-36%`
1. [特朗普吐槽李在明](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%90%E6%A7%BD%E6%9D%8E%E5%9C%A8%E6%98%8E%23) `91.2K 🔥` `-35%`

Updated at 2026-08-22 11:22:19

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
