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

1. [李小冉拒绝万千惠 (Li Xiaoran refuses thousands of benefits)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%8B%92%E7%BB%9D%E4%B8%87%E5%8D%83%E6%83%A0%23) `339.3K 🔥` `NEW`
1. [莫氏鸡煲爆火后的离谱现状](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%88%86%E7%81%AB%E5%90%8E%E7%9A%84%E7%A6%BB%E8%B0%B1%E7%8E%B0%E7%8A%B6%23) `238.6K 🔥` `NEW`
1. [两个魔丸生了个灵珠](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E9%AD%94%E4%B8%B8%E7%94%9F%E4%BA%86%E4%B8%AA%E7%81%B5%E7%8F%A0%23) `237.8K 🔥` `NEW`
1. [温峥嵘爆灯被拒](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E7%88%86%E7%81%AF%E8%A2%AB%E6%8B%92%23) `236.8K 🔥` `NEW`
1. [王楚钦夺冠彻底撕碎依赖队友标签](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E5%86%A0%E5%BD%BB%E5%BA%95%E6%92%95%E7%A2%8E%E4%BE%9D%E8%B5%96%E9%98%9F%E5%8F%8B%E6%A0%87%E7%AD%BE%23) `215.6K 🔥` `NEW`
1. [TEN李永钦不续约](https://s.weibo.com/weibo?q=%23TEN%E6%9D%8E%E6%B0%B8%E9%92%A6%E4%B8%8D%E7%BB%AD%E7%BA%A6%23) `182.9K 🔥` `NEW`
1. [伊能静说还想再生一个](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E8%BF%98%E6%83%B3%E5%86%8D%E7%94%9F%E4%B8%80%E4%B8%AA%23) `165.5K 🔥` `NEW`
1. [王濛真要唱心愿便利贴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9C%9F%E8%A6%81%E5%94%B1%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `157.2K 🔥` `NEW`
1. [SuperJunior致歉](https://s.weibo.com/weibo?q=%23SuperJunior%E8%87%B4%E6%AD%89%23) `155.2K 🔥` `NEW`
1. [张月陈瑶双向奔赴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `120.7K 🔥` `NEW`
1. [赵丽颖高月香的舞蹈训练图 (Dance training pictures of Zhao Liying and Gao Yuexiang)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%AB%98%E6%9C%88%E9%A6%99%E7%9A%84%E8%88%9E%E8%B9%88%E8%AE%AD%E7%BB%83%E5%9B%BE%23) `120.6K 🔥` `NEW`
1. [岳云鹏已经瘦了8斤了](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E5%B7%B2%E7%BB%8F%E7%98%A6%E4%BA%868%E6%96%A4%E4%BA%86%23) `120.2K 🔥` `NEW`
1. [王楚钦点赞任达华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%82%B9%E8%B5%9E%E4%BB%BB%E8%BE%BE%E5%8D%8E%23) `117.5K 🔥` `NEW`
1. [张月陈瑶 头发是彼此衣服的颜色](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%20%E5%A4%B4%E5%8F%91%E6%98%AF%E5%BD%BC%E6%AD%A4%E8%A1%A3%E6%9C%8D%E7%9A%84%E9%A2%9C%E8%89%B2%23) `117.5K 🔥` `NEW`
1. [晴天曝Kanavi耍大牌](https://s.weibo.com/weibo?q=%23%E6%99%B4%E5%A4%A9%E6%9B%9DKanavi%E8%80%8D%E5%A4%A7%E7%89%8C%23) `114.5K 🔥` `NEW`
1. [女士用衣服救了娘俩](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A3%AB%E7%94%A8%E8%A1%A3%E6%9C%8D%E6%95%91%E4%BA%86%E5%A8%98%E4%BF%A9%23) `111.2K 🔥` `NEW`
1. [微信宣布这项功能将全面停运](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%AE%A3%E5%B8%83%E8%BF%99%E9%A1%B9%E5%8A%9F%E8%83%BD%E5%B0%86%E5%85%A8%E9%9D%A2%E5%81%9C%E8%BF%90%23) `107.4K 🔥` `NEW`
1. [贺娇龙摄影师还没走出来](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E6%91%84%E5%BD%B1%E5%B8%88%E8%BF%98%E6%B2%A1%E8%B5%B0%E5%87%BA%E6%9D%A5%23) `98.8K 🔥` `NEW`
1. [李小冉首选唐艺昕](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E9%A6%96%E9%80%89%E5%94%90%E8%89%BA%E6%98%95%23) `96.2K 🔥` `NEW`
1. [小时候睡觉前都要关机](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E7%9D%A1%E8%A7%89%E5%89%8D%E9%83%BD%E8%A6%81%E5%85%B3%E6%9C%BA%23) `92.6K 🔥` `NEW`
1. [媒体人称郭艾伦被骗似有隐情 (Media people said that Guo Ailun was deceived and seemed to have a hidden secret)](https://s.weibo.com/weibo?q=%23%E5%AA%92%E4%BD%93%E4%BA%BA%E7%A7%B0%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E9%AA%97%E4%BC%BC%E6%9C%89%E9%9A%90%E6%83%85%23) `88.6K 🔥` `NEW`
1. [孙颖莎夸照得真好看](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%B8%E7%85%A7%E5%BE%97%E7%9C%9F%E5%A5%BD%E7%9C%8B%23) `88.2K 🔥` `NEW`
1. [申京绝杀勇士](https://s.weibo.com/weibo?q=%23%E7%94%B3%E4%BA%AC%E7%BB%9D%E6%9D%80%E5%8B%87%E5%A3%AB%23) `78.0K 🔥` `NEW`
1. [阚清子 我把增高鞋垫拿出来](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%20%E6%88%91%E6%8A%8A%E5%A2%9E%E9%AB%98%E9%9E%8B%E5%9E%AB%E6%8B%BF%E5%87%BA%E6%9D%A5%23) `77.7K 🔥` `NEW`
1. [妻子被骗43万丈夫帮还后两人闹离婚](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E8%A2%AB%E9%AA%9743%E4%B8%87%E4%B8%88%E5%A4%AB%E5%B8%AE%E8%BF%98%E5%90%8E%E4%B8%A4%E4%BA%BA%E9%97%B9%E7%A6%BB%E5%A9%9A%23) `74.3K 🔥` `NEW`
1. [者来女喊乌兰图雅妈妈](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%E5%96%8A%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E5%A6%88%E5%A6%88%23) `69.5K 🔥` `NEW`
1. [这是浪姐还是非诚勿扰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%B5%AA%E5%A7%90%E8%BF%98%E6%98%AF%E9%9D%9E%E8%AF%9A%E5%8B%BF%E6%89%B0%23) `66.8K 🔥` `NEW`
1. [什么是踢猫效应](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E8%B8%A2%E7%8C%AB%E6%95%88%E5%BA%94%23) `65.9K 🔥` `NEW`
1. [俄一男子与列车员争执将其推下铁轨](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B8%80%E7%94%B7%E5%AD%90%E4%B8%8E%E5%88%97%E8%BD%A6%E5%91%98%E4%BA%89%E6%89%A7%E5%B0%86%E5%85%B6%E6%8E%A8%E4%B8%8B%E9%93%81%E8%BD%A8%23) `63.4K 🔥` `NEW`
1. [正午阳光首部正统武侠剧雨霖铃](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E9%A6%96%E9%83%A8%E6%AD%A3%E7%BB%9F%E6%AD%A6%E4%BE%A0%E5%89%A7%E9%9B%A8%E9%9C%96%E9%93%83%23) `1.1M 🔥` `+409%`
1. [女子住酒店发现装饰画后是门 (A woman staying in a hotel found a door behind a decorative painting)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E5%8F%91%E7%8E%B0%E8%A3%85%E9%A5%B0%E7%94%BB%E5%90%8E%E6%98%AF%E9%97%A8%23) `757.5K 🔥` `+160%`
1. [伊朗称或将封锁曼德海峡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%88%96%E5%B0%86%E5%B0%81%E9%94%81%E6%9B%BC%E5%BE%B7%E6%B5%B7%E5%B3%A1%23) `141.6K 🔥` `+24%`
1. [4月草木中都是思念](https://s.weibo.com/weibo?q=%234%E6%9C%88%E8%8D%89%E6%9C%A8%E4%B8%AD%E9%83%BD%E6%98%AF%E6%80%9D%E5%BF%B5%23) `622.2K 🔥`
1. [伊朗5名教授60多名大学生遭袭身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%975%E5%90%8D%E6%95%99%E6%8E%8860%E5%A4%9A%E5%90%8D%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%81%AD%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `235.6K 🔥`
1. [桃黑黑道歉 (Taoheihei apologizes)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E9%81%93%E6%AD%89%23) `177.4K 🔥`
1. [机票高铁双双涨价](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E9%AB%98%E9%93%81%E5%8F%8C%E5%8F%8C%E6%B6%A8%E4%BB%B7%23) `150.5K 🔥`
1. [王楚钦掌镜下的孙颖莎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8E%8C%E9%95%9C%E4%B8%8B%E7%9A%84%E5%AD%99%E9%A2%96%E8%8E%8E%23) `120.5K 🔥`
1. [乘风直播风味录播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E7%9B%B4%E6%92%AD%E9%A3%8E%E5%91%B3%E5%BD%95%E6%92%AD%23) `86.2K 🔥`
1. [知情人透露郭艾伦被骗细节](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E6%83%85%E4%BA%BA%E9%80%8F%E9%9C%B2%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E9%AA%97%E7%BB%86%E8%8A%82%23) `184.8K 🔥` `-77%`
1. [乘风2026一公选歌组队 (Chengfeng 2026 Yi Gong selects songs to form a team)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%80%E5%85%AC%E9%80%89%E6%AD%8C%E7%BB%84%E9%98%9F%23) `170.1K 🔥` `-84%`
1. [被酒店标记成水牛了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%85%92%E5%BA%97%E6%A0%87%E8%AE%B0%E6%88%90%E6%B0%B4%E7%89%9B%E4%BA%86%23) `163.8K 🔥` `-33%`
1. [六旬老人花119万整容后觉得没效果](https://s.weibo.com/weibo?q=%23%E5%85%AD%E6%97%AC%E8%80%81%E4%BA%BA%E8%8A%B1119%E4%B8%87%E6%95%B4%E5%AE%B9%E5%90%8E%E8%A7%89%E5%BE%97%E6%B2%A1%E6%95%88%E6%9E%9C%23) `120.8K 🔥` `-25%`
1. [Rookie和新女友一起逛街 (Rookie goes shopping with her new girlfriend)](https://s.weibo.com/weibo?q=%23Rookie%E5%92%8C%E6%96%B0%E5%A5%B3%E5%8F%8B%E4%B8%80%E8%B5%B7%E9%80%9B%E8%A1%97%23) `96.0K 🔥` `-24%`
1. [狗狗像端菜一样被端上来了](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E5%83%8F%E7%AB%AF%E8%8F%9C%E4%B8%80%E6%A0%B7%E8%A2%AB%E7%AB%AF%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `82.9K 🔥` `-23%`
1. [女主持人也得乘风破浪吗](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%BA%BA%E4%B9%9F%E5%BE%97%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%E5%90%97%23) `78.0K 🔥` `-54%`
1. [伊称特朗普的鲁莽正将美国拖入地狱](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E7%9A%84%E9%B2%81%E8%8E%BD%E6%AD%A3%E5%B0%86%E7%BE%8E%E5%9B%BD%E6%8B%96%E5%85%A5%E5%9C%B0%E7%8B%B1%23) `77.8K 🔥` `-55%`
1. [偶遇张杰王源一起打高尔夫](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%BC%A0%E6%9D%B0%E7%8E%8B%E6%BA%90%E4%B8%80%E8%B5%B7%E6%89%93%E9%AB%98%E5%B0%94%E5%A4%AB%23) `75.9K 🔥` `-54%`
1. [NINEPERCENT出道八周年](https://s.weibo.com/weibo?q=%23NINEPERCENT%E5%87%BA%E9%81%93%E5%85%AB%E5%91%A8%E5%B9%B4%23) `69.3K 🔥` `-57%`
1. [金银再下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E5%86%8D%E4%B8%8B%E8%B7%8C%23) `66.9K 🔥` `-40%`

Updated at 2026-04-06 14:20:08

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
