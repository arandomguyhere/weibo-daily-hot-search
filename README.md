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

1. [中秋节等于没放假](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%8A%82%E7%AD%89%E4%BA%8E%E6%B2%A1%E6%94%BE%E5%81%87%23) `2.0M 🔥` `NEW`
1. [今天全民国防教育日](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%85%A8%E6%B0%91%E5%9B%BD%E9%98%B2%E6%95%99%E8%82%B2%E6%97%A5%23) `1.3M 🔥` `NEW`
1. [亚运会开幕式](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%23) `930.1K 🔥` `NEW`
1. [西贝回应被曝倒闭](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%9B%9D%E5%80%92%E9%97%AD%23) `637.6K 🔥` `NEW`
1. [杭州 低空经济](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%20%E4%BD%8E%E7%A9%BA%E7%BB%8F%E6%B5%8E%23) `539.4K 🔥` `NEW`
1. [网民造谣山西长治有人员丢失被处罚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A3%E5%B1%B1%E8%A5%BF%E9%95%BF%E6%B2%BB%E6%9C%89%E4%BA%BA%E5%91%98%E4%B8%A2%E5%A4%B1%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `419.7K 🔥` `NEW`
1. [12306已拒绝出票133.1万张](https://s.weibo.com/weibo?q=%2312306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8133.1%E4%B8%87%E5%BC%A0%23) `366.0K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `303.6K 🔥` `NEW`
1. [调休](https://s.weibo.com/weibo?q=%23%E8%B0%83%E4%BC%91%23) `303.3K 🔥` `NEW`
1. [国乒队员不参加亚运会开幕式](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E9%98%9F%E5%91%98%E4%B8%8D%E5%8F%82%E5%8A%A0%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%23) `302.4K 🔥` `NEW`
1. [高市早苗凝视帅哥引热议](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%87%9D%E8%A7%86%E5%B8%85%E5%93%A5%E5%BC%95%E7%83%AD%E8%AE%AE%23) `301.6K 🔥` `NEW`
1. [papi家的大咪回喵星了](https://s.weibo.com/weibo?q=%23papi%E5%AE%B6%E7%9A%84%E5%A4%A7%E5%92%AA%E5%9B%9E%E5%96%B5%E6%98%9F%E4%BA%86%23) `300.2K 🔥` `NEW`
1. [中学老师发微信性骚扰学生被调岗](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%AD%A6%E8%80%81%E5%B8%88%E5%8F%91%E5%BE%AE%E4%BF%A1%E6%80%A7%E9%AA%9A%E6%89%B0%E5%AD%A6%E7%94%9F%E8%A2%AB%E8%B0%83%E5%B2%97%23) `299.1K 🔥` `NEW`
1. [粉笔再指控超格](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E5%86%8D%E6%8C%87%E6%8E%A7%E8%B6%85%E6%A0%BC%23) `298.2K 🔥` `NEW`
1. [我有王一博微信 想加](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%9C%89%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%AE%E4%BF%A1%20%E6%83%B3%E5%8A%A0%23) `296.6K 🔥` `NEW`
1. [向太自曝曾瞒着向华强打掉孩子](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%87%AA%E6%9B%9D%E6%9B%BE%E7%9E%92%E7%9D%80%E5%90%91%E5%8D%8E%E5%BC%BA%E6%89%93%E6%8E%89%E5%AD%A9%E5%AD%90%23) `277.1K 🔥` `NEW`
1. [沙特遭空袭当地华人凌晨收到警报](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E9%81%AD%E7%A9%BA%E8%A2%AD%E5%BD%93%E5%9C%B0%E5%8D%8E%E4%BA%BA%E5%87%8C%E6%99%A8%E6%94%B6%E5%88%B0%E8%AD%A6%E6%8A%A5%23) `274.2K 🔥` `NEW`
1. [日本19岁女孩卖淫日接待3至4人](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC19%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8D%96%E6%B7%AB%E6%97%A5%E6%8E%A5%E5%BE%853%E8%87%B34%E4%BA%BA%23) `273.9K 🔥` `NEW`
1. [田栩宁郝文辉友谊](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%A0%A9%E5%AE%81%E9%83%9D%E6%96%87%E8%BE%89%E5%8F%8B%E8%B0%8A%23) `273.8K 🔥` `NEW`
1. [iPhone18Pro1TB采用QLC](https://s.weibo.com/weibo?q=%23iPhone18Pro1TB%E9%87%87%E7%94%A8QLC%23) `270.2K 🔥` `NEW`
1. [男明星顶着蔬菜大棚就出来了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%98%8E%E6%98%9F%E9%A1%B6%E7%9D%80%E8%94%AC%E8%8F%9C%E5%A4%A7%E6%A3%9A%E5%B0%B1%E5%87%BA%E6%9D%A5%E4%BA%86%23) `246.5K 🔥` `NEW`
1. [vivo8KLive清晰到震撼](https://s.weibo.com/weibo?q=%23vivo8KLive%E6%B8%85%E6%99%B0%E5%88%B0%E9%9C%87%E6%92%BC%23) `226.9K 🔥` `NEW`
1. [生母回应姚策生父去世](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%AF%8D%E5%9B%9E%E5%BA%94%E5%A7%9A%E7%AD%96%E7%94%9F%E7%88%B6%E5%8E%BB%E4%B8%96%23) `226.9K 🔥` `NEW`
1. [林锦岐知道兰香的身份](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E7%9F%A5%E9%81%93%E5%85%B0%E9%A6%99%E7%9A%84%E8%BA%AB%E4%BB%BD%23) `195.5K 🔥` `NEW`
1. [单休我恨你](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BC%91%E6%88%91%E6%81%A8%E4%BD%A0%23) `194.1K 🔥` `NEW`
1. [上海世界技能大赛倒计时3天](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%96%E7%95%8C%E6%8A%80%E8%83%BD%E5%A4%A7%E8%B5%9B%E5%80%92%E8%AE%A1%E6%97%B63%E5%A4%A9%23) `188.4K 🔥` `NEW`
1. [全世界最不吃压力之人出现了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E4%B9%8B%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `188.3K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `187.8K 🔥` `NEW`
1. [P图果然只是为了还原美貌](https://s.weibo.com/weibo?q=%23P%E5%9B%BE%E6%9E%9C%E7%84%B6%E5%8F%AA%E6%98%AF%E4%B8%BA%E4%BA%86%E8%BF%98%E5%8E%9F%E7%BE%8E%E8%B2%8C%23) `184.9K 🔥` `NEW`
1. [劳务派遣 以老实人为燃料的制度](https://s.weibo.com/weibo?q=%23%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%20%E4%BB%A5%E8%80%81%E5%AE%9E%E4%BA%BA%E4%B8%BA%E7%87%83%E6%96%99%E7%9A%84%E5%88%B6%E5%BA%A6%23) `175.8K 🔥` `NEW`
1. [男子私聊发153部淫秽视频获刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%81%E8%81%8A%E5%8F%91153%E9%83%A8%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%8E%B7%E5%88%91%23) `163.9K 🔥` `NEW`
1. [中国男篮不再具备内线碾压亚洲优势](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E4%B8%8D%E5%86%8D%E5%85%B7%E5%A4%87%E5%86%85%E7%BA%BF%E7%A2%BE%E5%8E%8B%E4%BA%9A%E6%B4%B2%E4%BC%98%E5%8A%BF%23) `157.6K 🔥` `NEW`
1. [以为是抠门男友直到蛋糕转起来](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E6%8A%A0%E9%97%A8%E7%94%B7%E5%8F%8B%E7%9B%B4%E5%88%B0%E8%9B%8B%E7%B3%95%E8%BD%AC%E8%B5%B7%E6%9D%A5%23) `155.0K 🔥` `NEW`
1. [中国男篮曾独步亚洲](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%9B%BE%E7%8B%AC%E6%AD%A5%E4%BA%9A%E6%B4%B2%23) `147.6K 🔥` `NEW`
1. [惠英红 太雌了](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E5%A4%AA%E9%9B%8C%E4%BA%86%23) `147.4K 🔥` `NEW`
1. [肉包不吃肉 猫耳](https://s.weibo.com/weibo?q=%23%E8%82%89%E5%8C%85%E4%B8%8D%E5%90%83%E8%82%89%20%E7%8C%AB%E8%80%B3%23) `147.4K 🔥` `NEW`
1. [青年失业率 招聘门槛高](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B9%B4%E5%A4%B1%E4%B8%9A%E7%8E%87%20%E6%8B%9B%E8%81%98%E9%97%A8%E6%A7%9B%E9%AB%98%23) `146.6K 🔥` `NEW`
1. [兰香如故 知否梗](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E7%9F%A5%E5%90%A6%E6%A2%97%23) `145.1K 🔥` `NEW`
1. [发淫秽视频给朋友也算犯罪](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E7%BB%99%E6%9C%8B%E5%8F%8B%E4%B9%9F%E7%AE%97%E7%8A%AF%E7%BD%AA%23) `144.5K 🔥` `NEW`
1. [早春晴朗亲密戏都没有借位](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E4%BA%B2%E5%AF%86%E6%88%8F%E9%83%BD%E6%B2%A1%E6%9C%89%E5%80%9F%E4%BD%8D%23) `144.0K 🔥` `NEW`
1. [多方回应中学老师发微信性骚扰学生](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%AD%A6%E8%80%81%E5%B8%88%E5%8F%91%E5%BE%AE%E4%BF%A1%E6%80%A7%E9%AA%9A%E6%89%B0%E5%AD%A6%E7%94%9F%23) `134.2K 🔥` `NEW`
1. [王一博嘉人十月刊封面预告](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%98%89%E4%BA%BA%E5%8D%81%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `132.7K 🔥` `NEW`
1. [王俊凯要唱一直很安静](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A6%81%E5%94%B1%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99%23) `131.2K 🔥` `NEW`
1. [祖先在下面托了所有关系](https://s.weibo.com/weibo?q=%23%E7%A5%96%E5%85%88%E5%9C%A8%E4%B8%8B%E9%9D%A2%E6%89%98%E4%BA%86%E6%89%80%E6%9C%89%E5%85%B3%E7%B3%BB%23) `123.4K 🔥` `NEW`
1. [西贝被曝将彻底倒闭](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E8%A2%AB%E6%9B%9D%E5%B0%86%E5%BD%BB%E5%BA%95%E5%80%92%E9%97%AD%23) `3.6M 🔥` `+408%`
1. [挑情丑闻](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%83%85%E4%B8%91%E9%97%BB%23) `143.8K 🔥`
1. [舒畅 脸](https://s.weibo.com/weibo?q=%23%E8%88%92%E7%95%85%20%E8%84%B8%23) `297.3K 🔥` `-54%`
1. [肉包不吃肉 没有给过餐饮授权](https://s.weibo.com/weibo?q=%23%E8%82%89%E5%8C%85%E4%B8%8D%E5%90%83%E8%82%89%20%E6%B2%A1%E6%9C%89%E7%BB%99%E8%BF%87%E9%A4%90%E9%A5%AE%E6%8E%88%E6%9D%83%23) `295.8K 🔥` `-58%`
1. [建议大家少用这种充电宝](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%91%E7%94%A8%E8%BF%99%E7%A7%8D%E5%85%85%E7%94%B5%E5%AE%9D%23) `273.9K 🔥` `-54%`
1. [浙江商K大面积关门](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%95%86K%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%85%B3%E9%97%A8%23) `239.4K 🔥` `-64%`
1. [女装到底怎么了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E5%88%B0%E5%BA%95%E6%80%8E%E4%B9%88%E4%BA%86%23) `150.7K 🔥` `-86%`

Updated at 2026-09-19 17:24:12

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
