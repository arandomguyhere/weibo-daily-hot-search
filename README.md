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

1. [12306新增低人一等座提醒 (12306 Added lower first class seat reminder)](https://s.weibo.com/weibo?q=%2312306%E6%96%B0%E5%A2%9E%E4%BD%8E%E4%BA%BA%E4%B8%80%E7%AD%89%E5%BA%A7%E6%8F%90%E9%86%92%23) `315.3K 🔥` `NEW`
1. [霉变车厘子毒性可达砒霜68倍](https://s.weibo.com/weibo?q=%23%E9%9C%89%E5%8F%98%E8%BD%A6%E5%8E%98%E5%AD%90%E6%AF%92%E6%80%A7%E5%8F%AF%E8%BE%BE%E7%A0%92%E9%9C%9C68%E5%80%8D%23) `183.4K 🔥` `NEW`
1. [蒋欣 当年真的错怪你了](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `161.7K 🔥` `NEW`
1. [韩国粉丝喊话陈哲远必须演现偶](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%B2%89%E4%B8%9D%E5%96%8A%E8%AF%9D%E9%99%88%E5%93%B2%E8%BF%9C%E5%BF%85%E9%A1%BB%E6%BC%94%E7%8E%B0%E5%81%B6%23) `155.2K 🔥` `NEW`
1. [张馨予 你很有钱是吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%20%E4%BD%A0%E5%BE%88%E6%9C%89%E9%92%B1%E6%98%AF%E5%90%97%23) `148.5K 🔥` `NEW`
1. [孙颖莎 E人的I人属性](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20E%E4%BA%BA%E7%9A%84I%E4%BA%BA%E5%B1%9E%E6%80%A7%23) `148.2K 🔥` `NEW`
1. [妈妈做了一桌预制菜年夜饭](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%81%9A%E4%BA%86%E4%B8%80%E6%A1%8C%E9%A2%84%E5%88%B6%E8%8F%9C%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `133.5K 🔥` `NEW`
1. [建议把前额叶纳入择偶标准](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8A%8A%E5%89%8D%E9%A2%9D%E5%8F%B6%E7%BA%B3%E5%85%A5%E6%8B%A9%E5%81%B6%E6%A0%87%E5%87%86%23) `128.6K 🔥` `NEW`
1. [七莘路](https://s.weibo.com/weibo?q=%23%E4%B8%83%E8%8E%98%E8%B7%AF%23) `121.2K 🔥` `NEW`
1. [年前和年后的美甲店](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%89%8D%E5%92%8C%E5%B9%B4%E5%90%8E%E7%9A%84%E7%BE%8E%E7%94%B2%E5%BA%97%23) `111.9K 🔥` `NEW`
1. [张婧仪 别乱说我没多大 (Zhang Jingyi, don’t say nonsense that I’m not that old)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E5%88%AB%E4%B9%B1%E8%AF%B4%E6%88%91%E6%B2%A1%E5%A4%9A%E5%A4%A7%23) `107.9K 🔥` `NEW`
1. [上海地铁嘉闵线发生局部渗漏](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%98%89%E9%97%B5%E7%BA%BF%E5%8F%91%E7%94%9F%E5%B1%80%E9%83%A8%E6%B8%97%E6%BC%8F%23) `101.3K 🔥` `NEW`
1. [时团粉丝年底没钱就退款](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E7%B2%89%E4%B8%9D%E5%B9%B4%E5%BA%95%E6%B2%A1%E9%92%B1%E5%B0%B1%E9%80%80%E6%AC%BE%23) `91.3K 🔥` `NEW`
1. [王星越假期一半牙疼一半拔牙](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E5%81%87%E6%9C%9F%E4%B8%80%E5%8D%8A%E7%89%99%E7%96%BC%E4%B8%80%E5%8D%8A%E6%8B%94%E7%89%99%23) `89.3K 🔥` `NEW`
1. [重赛仍无缘奖牌选手抱怨国际滑联](https://s.weibo.com/weibo?q=%23%E9%87%8D%E8%B5%9B%E4%BB%8D%E6%97%A0%E7%BC%98%E5%A5%96%E7%89%8C%E9%80%89%E6%89%8B%E6%8A%B1%E6%80%A8%E5%9B%BD%E9%99%85%E6%BB%91%E8%81%94%23) `88.9K 🔥` `NEW`
1. [钎城的ssr卡呢](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%E7%9A%84ssr%E5%8D%A1%E5%91%A2%23) `86.6K 🔥` `NEW`
1. [生命树里袁弘和胡歌什么关系](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E9%87%8C%E8%A2%81%E5%BC%98%E5%92%8C%E8%83%A1%E6%AD%8C%E4%BB%80%E4%B9%88%E5%85%B3%E7%B3%BB%23) `81.1K 🔥` `NEW`
1. [王一博2025总结](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A2025%E6%80%BB%E7%BB%93%23) `76.1K 🔥` `NEW`
1. [刘耀文嘘从张峻豪](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%98%98%E4%BB%8E%E5%BC%A0%E5%B3%BB%E8%B1%AA%23) `75.8K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `74.3K 🔥` `NEW`
1. [王莉霞严重违纪违法被双开 (Wang Lixia was double fired for serious violation of discipline and law)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8E%89%E9%9C%9E%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `1.1M 🔥` `+360%`
1. [荷兰选手回应与廉子文碰撞 (Dutch player responds to collision with Lian Ziwen)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E9%80%89%E6%89%8B%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%BB%89%E5%AD%90%E6%96%87%E7%A2%B0%E6%92%9E%23) `249.0K 🔥` `+54%`
1. [为什么奶茶封口还要盖盖子](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A5%B6%E8%8C%B6%E5%B0%81%E5%8F%A3%E8%BF%98%E8%A6%81%E7%9B%96%E7%9B%96%E5%AD%90%23) `229.3K 🔥` `+148%`
1. [孙颖莎ELLE (Sun Yingsha ELLE)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%23) `158.6K 🔥` `+73%`
1. [安徽一小伙迎娶00后埃及女生](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%B8%80%E5%B0%8F%E4%BC%99%E8%BF%8E%E5%A8%B600%E5%90%8E%E5%9F%83%E5%8F%8A%E5%A5%B3%E7%94%9F%23) `153.6K 🔥` `+85%`
1. [辛芷蕾倪妮高叶 火象三人组](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%80%AA%E5%A6%AE%E9%AB%98%E5%8F%B6%20%E7%81%AB%E8%B1%A1%E4%B8%89%E4%BA%BA%E7%BB%84%23) `145.3K 🔥` `+24%`
1. [中国人离登月又近了一步 (The Chinese are one step closer to landing on the moon)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%A6%BB%E7%99%BB%E6%9C%88%E5%8F%88%E8%BF%91%E4%BA%86%E4%B8%80%E6%AD%A5%23) `649.4K 🔥`
1. [相亲吃烤肉](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BA%B2%E5%90%83%E7%83%A4%E8%82%89%23) `244.6K 🔥`
1. [孙颖莎ELLE 6个封面](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%206%E4%B8%AA%E5%B0%81%E9%9D%A2%23) `160.2K 🔥`
1. [赵樱子do高颅顶 (Zhao Yingzi do high skull)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90do%E9%AB%98%E9%A2%85%E9%A1%B6%23) `159.9K 🔥`
1. [ILLIT NewJeans](https://s.weibo.com/weibo?q=%23ILLIT%20NewJeans%23) `158.1K 🔥`
1. [李一桐发了49999的红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8F%91%E4%BA%8649999%E7%9A%84%E7%BA%A2%E5%8C%85%23) `157.2K 🔥`
1. [微博红包](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%BA%A2%E5%8C%85%23) `155.8K 🔥`
1. [宋威龙晒被赵今麦扯开的领带](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%99%92%E8%A2%AB%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%89%AF%E5%BC%80%E7%9A%84%E9%A2%86%E5%B8%A6%23) `154.1K 🔥`
1. [姐姐被藏尸位置就在弟弟店铺正上方 (The location where my sister’s body was buried is right above my brother’s shop.)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `152.3K 🔥`
1. [二胎妈妈跪求丈夫离婚放过自己 (Mother of second child begs her husband to divorce her and let her go)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E8%83%8E%E5%A6%88%E5%A6%88%E8%B7%AA%E6%B1%82%E4%B8%88%E5%A4%AB%E7%A6%BB%E5%A9%9A%E6%94%BE%E8%BF%87%E8%87%AA%E5%B7%B1%23) `151.5K 🔥`
1. [医生建议刷牙后先别漱口](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E5%88%B7%E7%89%99%E5%90%8E%E5%85%88%E5%88%AB%E6%BC%B1%E5%8F%A3%23) `150.8K 🔥`
1. [谁懂刘亦菲脸的对称度](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E5%88%98%E4%BA%A6%E8%8F%B2%E8%84%B8%E7%9A%84%E5%AF%B9%E7%A7%B0%E5%BA%A6%23) `149.6K 🔥`
1. [前妻回应陶白白爆火时飘了](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A6%BB%E5%9B%9E%E5%BA%94%E9%99%B6%E7%99%BD%E7%99%BD%E7%88%86%E7%81%AB%E6%97%B6%E9%A3%98%E4%BA%86%23) `135.1K 🔥`
1. [长期侧睡对颜值的影响](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%BE%A7%E7%9D%A1%E5%AF%B9%E9%A2%9C%E5%80%BC%E7%9A%84%E5%BD%B1%E5%93%8D%23) `98.0K 🔥`
1. [女子用药后突然耳聋药店只赔200](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E8%8D%AF%E5%90%8E%E7%AA%81%E7%84%B6%E8%80%B3%E8%81%8B%E8%8D%AF%E5%BA%97%E5%8F%AA%E8%B5%94200%23) `88.8K 🔥`
1. [钟南山院士说会用证据让全世界服气](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E9%99%A2%E5%A3%AB%E8%AF%B4%E4%BC%9A%E7%94%A8%E8%AF%81%E6%8D%AE%E8%AE%A9%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%8D%E6%B0%94%23) `824.5K 🔥` `-24%`
1. [从Deepseek到Seedance中国AI成了 (From Deepseek to Seedance China’s AI has become)](https://s.weibo.com/weibo?q=%23%E4%BB%8EDeepseek%E5%88%B0Seedance%E4%B8%AD%E5%9B%BDAI%E6%88%90%E4%BA%86%23) `180.3K 🔥` `-28%`
1. [杭州有一趟永不发车的列车](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9C%89%E4%B8%80%E8%B6%9F%E6%B0%B8%E4%B8%8D%E5%8F%91%E8%BD%A6%E7%9A%84%E5%88%97%E8%BD%A6%23) `161.9K 🔥` `-79%`
1. [两名小孩扔爆竹致1200年古树起火](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%90%8D%E5%B0%8F%E5%AD%A9%E6%89%94%E7%88%86%E7%AB%B9%E8%87%B41200%E5%B9%B4%E5%8F%A4%E6%A0%91%E8%B5%B7%E7%81%AB%23) `133.0K 🔥` `-36%`
1. [2025年全国结婚登记676.3万对](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0676.3%E4%B8%87%E5%AF%B9%23) `131.4K 🔥` `-27%`
1. [李一桐高情商公关 (Li Yitong's high emotional intelligence public relations)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%AB%98%E6%83%85%E5%95%86%E5%85%AC%E5%85%B3%23) `96.5K 🔥` `-37%`
1. [剧还没播先吻上王子文 (Before the drama even aired, I kissed Wang Ziwen)](https://s.weibo.com/weibo?q=%23%E5%89%A7%E8%BF%98%E6%B2%A1%E6%92%AD%E5%85%88%E5%90%BB%E4%B8%8A%E7%8E%8B%E5%AD%90%E6%96%87%23) `87.1K 🔥` `-35%`
1. [马思纯王楚然 表妹长大了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E8%A1%A8%E5%A6%B9%E9%95%BF%E5%A4%A7%E4%BA%86%23) `84.6K 🔥` `-45%`
1. [法国3名婴儿因食用问题奶粉死亡](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD3%E5%90%8D%E5%A9%B4%E5%84%BF%E5%9B%A0%E9%A3%9F%E7%94%A8%E9%97%AE%E9%A2%98%E5%A5%B6%E7%B2%89%E6%AD%BB%E4%BA%A1%23) `76.1K 🔥` `-57%`

Updated at 2026-02-12 15:44:51

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
