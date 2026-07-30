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

1. [猫咪面对小宝宝只挥拳不露尖爪 (The cat only punches the baby but does not show its sharp claws)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E9%9D%A2%E5%AF%B9%E5%B0%8F%E5%AE%9D%E5%AE%9D%E5%8F%AA%E6%8C%A5%E6%8B%B3%E4%B8%8D%E9%9C%B2%E5%B0%96%E7%88%AA%23) `26.0K 🔥` `NEW`
1. [凤囚凰 古偶烂片史上难以逾越的高峰 (Phoenix Prisoner: An insurmountable peak in the history of bad ancient puppet films)](https://s.weibo.com/weibo?q=%23%E5%87%A4%E5%9B%9A%E5%87%B0%20%E5%8F%A4%E5%81%B6%E7%83%82%E7%89%87%E5%8F%B2%E4%B8%8A%E9%9A%BE%E4%BB%A5%E9%80%BE%E8%B6%8A%E7%9A%84%E9%AB%98%E5%B3%B0%23) `169.3K 🔥` `+69%`
1. [长江十年行](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%8D%81%E5%B9%B4%E8%A1%8C%23) `137.8K 🔥` `+73%`
1. [读者说抄袭晋江法务就来了 (Here comes the reader who said he plagiarized Jinjiang Legal Affairs)](https://s.weibo.com/weibo?q=%23%E8%AF%BB%E8%80%85%E8%AF%B4%E6%8A%84%E8%A2%AD%E6%99%8B%E6%B1%9F%E6%B3%95%E5%8A%A1%E5%B0%B1%E6%9D%A5%E4%BA%86%23) `55.0K 🔥` `+27%`
1. [15岁女孩凌晨到景区游玩后溺亡](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%87%8C%E6%99%A8%E5%88%B0%E6%99%AF%E5%8C%BA%E6%B8%B8%E7%8E%A9%E5%90%8E%E6%BA%BA%E4%BA%A1%23) `45.9K 🔥` `+48%`
1. [6旬老人坚持地中海饮食3个月瘦37斤](https://s.weibo.com/weibo?q=%236%E6%97%AC%E8%80%81%E4%BA%BA%E5%9D%9A%E6%8C%81%E5%9C%B0%E4%B8%AD%E6%B5%B7%E9%A5%AE%E9%A3%9F3%E4%B8%AA%E6%9C%88%E7%98%A637%E6%96%A4%23) `40.1K 🔥` `+28%`
1. [豆包究竟见过多少人的糗事](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%A9%B6%E7%AB%9F%E8%A7%81%E8%BF%87%E5%A4%9A%E5%B0%91%E4%BA%BA%E7%9A%84%E7%B3%97%E4%BA%8B%23) `236.0K 🔥`
1. [陈伟霆九门老九门出场对比](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B9%9D%E9%97%A8%E8%80%81%E4%B9%9D%E9%97%A8%E5%87%BA%E5%9C%BA%E5%AF%B9%E6%AF%94%23) `82.3K 🔥`
1. [莲子切开里面有个小娃娃](https://s.weibo.com/weibo?q=%23%E8%8E%B2%E5%AD%90%E5%88%87%E5%BC%80%E9%87%8C%E9%9D%A2%E6%9C%89%E4%B8%AA%E5%B0%8F%E5%A8%83%E5%A8%83%23) `73.0K 🔥`
1. [小米澎程N90价格 (Xiaomi Pengcheng N90 price)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%E4%BB%B7%E6%A0%BC%23) `72.4K 🔥`
1. [浪7结束了但没完全结束 (Wave 7 is over but not completely over)](https://s.weibo.com/weibo?q=%23%E6%B5%AA7%E7%BB%93%E6%9D%9F%E4%BA%86%E4%BD%86%E6%B2%A1%E5%AE%8C%E5%85%A8%E7%BB%93%E6%9D%9F%23) `46.5K 🔥`
1. [陕西公公强奸儿媳案二审维持原判 (Shaanxi father-in-law rapes daughter-in-law case, second trial upholds original verdict)](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E5%85%AC%E5%85%AC%E5%BC%BA%E5%A5%B8%E5%84%BF%E5%AA%B3%E6%A1%88%E4%BA%8C%E5%AE%A1%E7%BB%B4%E6%8C%81%E5%8E%9F%E5%88%A4%23) `40.7K 🔥`
1. [尹新月 赵丽颖](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%20%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `40.4K 🔥`
1. [小米澎程N70](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN70%23) `40.2K 🔥`
1. [泰国部长称不欢迎给他人造成损害的游客](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%83%A8%E9%95%BF%E7%A7%B0%E4%B8%8D%E6%AC%A2%E8%BF%8E%E7%BB%99%E4%BB%96%E4%BA%BA%E9%80%A0%E6%88%90%E6%8D%9F%E5%AE%B3%E7%9A%84%E6%B8%B8%E5%AE%A2%23) `40.1K 🔥`
1. [白玉兰自己也在回味 (Magnolia herself is also reminiscing)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%87%AA%E5%B7%B1%E4%B9%9F%E5%9C%A8%E5%9B%9E%E5%91%B3%23) `40.0K 🔥`
1. [日元](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%83%23) `36.1K 🔥`
1. [披荆斩棘阵容](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%98%B5%E5%AE%B9%23) `35.7K 🔥`
1. [吵架后从18楼跳下女子称很后悔 (Woman jumps from 18th floor after quarrel says she regrets it)](https://s.weibo.com/weibo?q=%23%E5%90%B5%E6%9E%B6%E5%90%8E%E4%BB%8E18%E6%A5%BC%E8%B7%B3%E4%B8%8B%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%BE%88%E5%90%8E%E6%82%94%23) `34.7K 🔥`
1. [建议大家不要活在朋友圈 (I suggest you not to live in the circle of friends)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E6%B4%BB%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `34.0K 🔥`
1. [男子带猫打针暴打猫咪大闹医院](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%A6%E7%8C%AB%E6%89%93%E9%92%88%E6%9A%B4%E6%89%93%E7%8C%AB%E5%92%AA%E5%A4%A7%E9%97%B9%E5%8C%BB%E9%99%A2%23) `33.9K 🔥`
1. [你甚至可以看到植物打人](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%94%9A%E8%87%B3%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E6%A4%8D%E7%89%A9%E6%89%93%E4%BA%BA%23) `33.3K 🔥`
1. [小米澎程N90](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%23) `32.0K 🔥`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `30.6K 🔥`
1. [多囊卵巢综合征为什么要更名](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%9B%B4%E5%90%8D%23) `30.3K 🔥`
1. [马特达蒙说好莱坞让张艺谋失望了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%89%B9%E8%BE%BE%E8%92%99%E8%AF%B4%E5%A5%BD%E8%8E%B1%E5%9D%9E%E8%AE%A9%E5%BC%A0%E8%89%BA%E8%B0%8B%E5%A4%B1%E6%9C%9B%E4%BA%86%23) `28.2K 🔥`
1. [Meta大跌9% (Meta fell 9%)](https://s.weibo.com/weibo?q=%23Meta%E5%A4%A7%E8%B7%8C9%25%23) `27.4K 🔥`
1. [婚外胚胎事件患癌妻子愤怒发声](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E4%BA%8B%E4%BB%B6%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E6%84%A4%E6%80%92%E5%8F%91%E5%A3%B0%23) `27.4K 🔥`
1. [货车夫妻忘付饭钱13天后回店补27元 (Couple in truck forgets to pay for meal 13 days later and goes back to store to pay NT$27)](https://s.weibo.com/weibo?q=%23%E8%B4%A7%E8%BD%A6%E5%A4%AB%E5%A6%BB%E5%BF%98%E4%BB%98%E9%A5%AD%E9%92%B113%E5%A4%A9%E5%90%8E%E5%9B%9E%E5%BA%97%E8%A1%A527%E5%85%83%23) `27.2K 🔥`
1. [腾讯因为没有文档文化无法蒸馏](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%9B%A0%E4%B8%BA%E6%B2%A1%E6%9C%89%E6%96%87%E6%A1%A3%E6%96%87%E5%8C%96%E6%97%A0%E6%B3%95%E8%92%B8%E9%A6%8F%23) `26.9K 🔥`
1. [狗养的还是第一次见](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%85%BB%E7%9A%84%E8%BF%98%E6%98%AF%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%23) `26.0K 🔥`
1. [豆包飞书团队合并](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E9%A3%9E%E4%B9%A6%E5%9B%A2%E9%98%9F%E5%90%88%E5%B9%B6%23) `26.0K 🔥`
1. [小米澎程发布会 (Xiaomi Pengcheng press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8F%91%E5%B8%83%E4%BC%9A%23) `26.0K 🔥`
1. [马云现身哈尔滨街头 (Jack Ma appears on the streets of Harbin)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BA%91%E7%8E%B0%E8%BA%AB%E5%93%88%E5%B0%94%E6%BB%A8%E8%A1%97%E5%A4%B4%23) `26.0K 🔥`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `26.0K 🔥`
1. [宇树科技股票发行安排](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%82%A1%E7%A5%A8%E5%8F%91%E8%A1%8C%E5%AE%89%E6%8E%92%23) `26.0K 🔥`
1. [王腾买了小米N90Max](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E4%B9%B0%E4%BA%86%E5%B0%8F%E7%B1%B3N90Max%23) `26.0K 🔥`
1. [男子因猫咪打针时哈气大闹宠物店 (Man caused a scene in a pet store because his cat was so angry when he got an injection)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E7%8C%AB%E5%92%AA%E6%89%93%E9%92%88%E6%97%B6%E5%93%88%E6%B0%94%E5%A4%A7%E9%97%B9%E5%AE%A0%E7%89%A9%E5%BA%97%23) `26.0K 🔥`
1. [蜘蛛侠](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%23) `26.0K 🔥`
1. [是谁一直在往中文里加片假名 (Who keeps adding katakana to Chinese?)](https://s.weibo.com/weibo?q=%23%E6%98%AF%E8%B0%81%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%BE%80%E4%B8%AD%E6%96%87%E9%87%8C%E5%8A%A0%E7%89%87%E5%81%87%E5%90%8D%23) `26.0K 🔥`
1. [重庆彭水山体崩塌致51人遇难10人失联 (A mountain collapse in Pengshui, Chongqing killed 51 people and left 10 missing)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E8%87%B451%E4%BA%BA%E9%81%87%E9%9A%BE10%E4%BA%BA%E5%A4%B1%E8%81%94%23) `26.0K 🔥`
1. [南部战区位黄岩岛领海领空战备警巡](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%88%98%E5%8C%BA%E4%BD%8D%E9%BB%84%E5%B2%A9%E5%B2%9B%E9%A2%86%E6%B5%B7%E9%A2%86%E7%A9%BA%E6%88%98%E5%A4%87%E8%AD%A6%E5%B7%A1%23) `26.0K 🔥`
1. [怎么会有这么美好的恋爱关系](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E4%BC%9A%E6%9C%89%E8%BF%99%E4%B9%88%E7%BE%8E%E5%A5%BD%E7%9A%84%E6%81%8B%E7%88%B1%E5%85%B3%E7%B3%BB%23) `26.0K 🔥`
1. [蔡徐坤伴手礼 (Cai Xukun's souvenirs)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `26.0K 🔥`
1. [王楚然开着张凌赫就出来了 (Wang Churan drove out with Zhang Linghe.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%BC%80%E7%9D%80%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%B1%E5%87%BA%E6%9D%A5%E4%BA%86%23) `26.0K 🔥`
1. [Mikimoto光启万象自有锋芒](https://s.weibo.com/weibo?q=%23Mikimoto%E5%85%89%E5%90%AF%E4%B8%87%E8%B1%A1%E8%87%AA%E6%9C%89%E9%94%8B%E8%8A%92%23) `26.0K 🔥`
1. [EDGM让二追三KSG](https://s.weibo.com/weibo?q=%23EDGM%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89KSG%23) `26.0K 🔥`
1. [曝BLG联系不到Bin (It is revealed that BLG cannot contact Bin)](https://s.weibo.com/weibo?q=%23%E6%9B%9DBLG%E8%81%94%E7%B3%BB%E4%B8%8D%E5%88%B0Bin%23) `40.7K 🔥` `-24%`
1. [洪水中锁死狮子该不该](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B0%B4%E4%B8%AD%E9%94%81%E6%AD%BB%E7%8B%AE%E5%AD%90%E8%AF%A5%E4%B8%8D%E8%AF%A5%23) `40.5K 🔥` `-30%`
1. [日元全线飙升 (Japanese yen surges across the board)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%83%E5%85%A8%E7%BA%BF%E9%A3%99%E5%8D%87%23) `40.4K 🔥` `-41%`

Updated at 2026-07-31 05:48:07

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
