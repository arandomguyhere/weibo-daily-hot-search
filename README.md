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

1. [李荣浩方否认恋人抄袭 (Li Ronghao denies plagiarism by his lover)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%96%B9%E5%90%A6%E8%AE%A4%E6%81%8B%E4%BA%BA%E6%8A%84%E8%A2%AD%23) `614.6K 🔥` `NEW`
1. [TF塑光T气垫发布会](https://s.weibo.com/weibo?q=%23TF%E5%A1%91%E5%85%89T%E6%B0%94%E5%9E%AB%E5%8F%91%E5%B8%83%E4%BC%9A%23) `185.5K 🔥` `NEW`
1. [火旺 宋威龙](https://s.weibo.com/weibo?q=%23%E7%81%AB%E6%97%BA%20%E5%AE%8B%E5%A8%81%E9%BE%99%23) `174.8K 🔥` `NEW`
1. [月鳞绮纪第三](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%AC%AC%E4%B8%89%23) `139.8K 🔥` `NEW`
1. [浙江宣传谈张雪说一个子都没有](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E8%B0%88%E5%BC%A0%E9%9B%AA%E8%AF%B4%E4%B8%80%E4%B8%AA%E5%AD%90%E9%83%BD%E6%B2%A1%E6%9C%89%23) `125.3K 🔥` `NEW`
1. [乘风每年邀请一个周杰伦前任](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E6%AF%8F%E5%B9%B4%E9%82%80%E8%AF%B7%E4%B8%80%E4%B8%AA%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%89%8D%E4%BB%BB%23) `92.3K 🔥` `NEW`
1. [男子趁妻子去厕所上台相亲](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B6%81%E5%A6%BB%E5%AD%90%E5%8E%BB%E5%8E%95%E6%89%80%E4%B8%8A%E5%8F%B0%E7%9B%B8%E4%BA%B2%23) `87.8K 🔥` `NEW`
1. [曝顶帅男演员被富婆大闹片场](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%A1%B6%E5%B8%85%E7%94%B7%E6%BC%94%E5%91%98%E8%A2%AB%E5%AF%8C%E5%A9%86%E5%A4%A7%E9%97%B9%E7%89%87%E5%9C%BA%23) `87.1K 🔥` `NEW`
1. [曾舜晞工作室致歉](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%87%B4%E6%AD%89%23) `85.8K 🔥` `NEW`
1. [鞠婧祎换了露芜衣头像](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%8D%A2%E4%BA%86%E9%9C%B2%E8%8A%9C%E8%A1%A3%E5%A4%B4%E5%83%8F%23) `76.9K 🔥` `NEW`
1. [伊朗公布最新战果 (Iran announces latest results)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E6%9C%80%E6%96%B0%E6%88%98%E6%9E%9C%23) `75.2K 🔥` `NEW`
1. [晁然优思益事件情况说明](https://s.weibo.com/weibo?q=%23%E6%99%81%E7%84%B6%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BA%8B%E4%BB%B6%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%23) `75.1K 🔥` `NEW`
1. [三年后狗近视得找不到饭盆](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B9%B4%E5%90%8E%E7%8B%97%E8%BF%91%E8%A7%86%E5%BE%97%E6%89%BE%E4%B8%8D%E5%88%B0%E9%A5%AD%E7%9B%86%23) `74.5K 🔥` `NEW`
1. [人摸到咪的痒痒肉了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%91%B8%E5%88%B0%E5%92%AA%E7%9A%84%E7%97%92%E7%97%92%E8%82%89%E4%BA%86%23) `72.7K 🔥` `NEW`
1. [乘风2026初舞台pk](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%88%9D%E8%88%9E%E5%8F%B0pk%23) `71.4K 🔥` `NEW`
1. [张雪师父回应向张雪要新车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B8%88%E7%88%B6%E5%9B%9E%E5%BA%94%E5%90%91%E5%BC%A0%E9%9B%AA%E8%A6%81%E6%96%B0%E8%BD%A6%23) `70.7K 🔥` `NEW`
1. [黄金白银大跌特跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%A4%A7%E8%B7%8C%E7%89%B9%E8%B7%8C%23) `67.2K 🔥` `NEW`
1. [伊称霍尔木兹海峡将对敌人永久关闭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%B0%86%E5%AF%B9%E6%95%8C%E4%BA%BA%E6%B0%B8%E4%B9%85%E5%85%B3%E9%97%AD%23) `62.4K 🔥` `NEW`
1. [新疆种出了优质车厘子](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E7%A7%8D%E5%87%BA%E4%BA%86%E4%BC%98%E8%B4%A8%E8%BD%A6%E5%8E%98%E5%AD%90%23) `62.0K 🔥` `NEW`
1. [同事离职显得我很命苦](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E7%A6%BB%E8%81%8C%E6%98%BE%E5%BE%97%E6%88%91%E5%BE%88%E5%91%BD%E8%8B%A6%23) `61.9K 🔥` `NEW`
1. [法国冠军车手谈张雪 (French champion driver talks about Zhang Xue)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%86%A0%E5%86%9B%E8%BD%A6%E6%89%8B%E8%B0%88%E5%BC%A0%E9%9B%AA%23) `54.2K 🔥` `NEW`
1. [女子104000元买80g金条店员报警 (Woman bought 80g gold bar for 104,000 yuan and store clerk called the police)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90104000%E5%85%83%E4%B9%B080g%E9%87%91%E6%9D%A1%E5%BA%97%E5%91%98%E6%8A%A5%E8%AD%A6%23) `1.1M 🔥` `+26%`
1. [张雪机车夺冠车手发声](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E8%BD%A6%E6%89%8B%E5%8F%91%E5%A3%B0%23) `808.9K 🔥` `+809%`
1. [华为畅享90满电奔赴 (Huawei Enjoys 90% Charge on the Road)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E7%95%85%E4%BA%AB90%E6%BB%A1%E7%94%B5%E5%A5%94%E8%B5%B4%23) `645.8K 🔥` `+102%`
1. [糯米藕](https://s.weibo.com/weibo?q=%23%E7%B3%AF%E7%B1%B3%E8%97%95%23) `179.8K 🔥` `+124%`
1. [警方通报司机猥亵后排女乘客](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8F%B8%E6%9C%BA%E7%8C%A5%E4%BA%B5%E5%90%8E%E6%8E%92%E5%A5%B3%E4%B9%98%E5%AE%A2%23) `106.9K 🔥` `+36%`
1. [又是赏花好时节 (It’s a good time to enjoy flowers again)](https://s.weibo.com/weibo?q=%23%E5%8F%88%E6%98%AF%E8%B5%8F%E8%8A%B1%E5%A5%BD%E6%97%B6%E8%8A%82%23) `646.1K 🔥`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `203.6K 🔥`
1. [中方回应特朗普鼓动各国抢石油](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E9%BC%93%E5%8A%A8%E5%90%84%E5%9B%BD%E6%8A%A2%E7%9F%B3%E6%B2%B9%23) `173.6K 🔥`
1. [男孩捡50g金条咬了一口竟是真的](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%8D%A150g%E9%87%91%E6%9D%A1%E5%92%AC%E4%BA%86%E4%B8%80%E5%8F%A3%E7%AB%9F%E6%98%AF%E7%9C%9F%E7%9A%84%23) `159.5K 🔥`
1. [董宇辉曾说产品上播10天前有人试吃](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E6%9B%BE%E8%AF%B4%E4%BA%A7%E5%93%81%E4%B8%8A%E6%92%AD10%E5%A4%A9%E5%89%8D%E6%9C%89%E4%BA%BA%E8%AF%95%E5%90%83%23) `145.7K 🔥`
1. [刘晓艳网课现场没有学生一个人聊嗨了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E7%BD%91%E8%AF%BE%E7%8E%B0%E5%9C%BA%E6%B2%A1%E6%9C%89%E5%AD%A6%E7%94%9F%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%81%8A%E5%97%A8%E4%BA%86%23) `117.6K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `91.4K 🔥`
1. [银行回应老人存10万变7万](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E8%80%81%E4%BA%BA%E5%AD%9810%E4%B8%87%E5%8F%987%E4%B8%87%23) `83.6K 🔥`
1. [伊朗拒绝谈判的真实底牌 (Iran’s real trump card for refusing to negotiate)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%92%E7%BB%9D%E8%B0%88%E5%88%A4%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%BA%95%E7%89%8C%23) `76.1K 🔥`
1. [熬夜在身上留下的明显反应 (The obvious reaction left on the body after staying up late)](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E5%9C%A8%E8%BA%AB%E4%B8%8A%E7%95%99%E4%B8%8B%E7%9A%84%E6%98%8E%E6%98%BE%E5%8F%8D%E5%BA%94%23) `69.6K 🔥`
1. [某国领馆人员违规搜集我农作物情况](https://s.weibo.com/weibo?q=%23%E6%9F%90%E5%9B%BD%E9%A2%86%E9%A6%86%E4%BA%BA%E5%91%98%E8%BF%9D%E8%A7%84%E6%90%9C%E9%9B%86%E6%88%91%E5%86%9C%E4%BD%9C%E7%89%A9%E6%83%85%E5%86%B5%23) `62.2K 🔥`
1. [被时代淘汰的水果](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%B7%98%E6%B1%B0%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `191.9K 🔥` `-76%`
1. [张杰回应张凌赫送花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%81%E8%8A%B1%E7%AF%AE%23) `155.7K 🔥` `-31%`
1. [优思益营销策划公司被立案调查 (Yousiyi Marketing Planning Company was placed under investigation)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E8%90%A5%E9%94%80%E7%AD%96%E5%88%92%E5%85%AC%E5%8F%B8%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `145.7K 🔥` `-37%`
1. [美国一婴儿光天化日在街头被枪杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%A9%B4%E5%84%BF%E5%85%89%E5%A4%A9%E5%8C%96%E6%97%A5%E5%9C%A8%E8%A1%97%E5%A4%B4%E8%A2%AB%E6%9E%AA%E6%9D%80%23) `136.4K 🔥` `-36%`
1. [李若彤发布致歉声明 (Li Ruotong issued an apology statement)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E5%8F%91%E5%B8%83%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `82.8K 🔥` `-50%`
1. [比papi更像苏菲玛索的人找到了](https://s.weibo.com/weibo?q=%23%E6%AF%94papi%E6%9B%B4%E5%83%8F%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2%E7%9A%84%E4%BA%BA%E6%89%BE%E5%88%B0%E4%BA%86%23) `81.0K 🔥` `-26%`
1. [山西一饭店发现3人死亡](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%80%E9%A5%AD%E5%BA%97%E5%8F%91%E7%8E%B03%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `77.9K 🔥` `-26%`
1. [阿花花酱 优思益 (Ahuahuajiang Yousiyi)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%8A%B1%E8%8A%B1%E9%85%B1%20%E4%BC%98%E6%80%9D%E7%9B%8A%23) `77.6K 🔥` `-49%`
1. [女子哭诉3个兄妹不照顾92岁母亲](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%93%AD%E8%AF%893%E4%B8%AA%E5%85%84%E5%A6%B9%E4%B8%8D%E7%85%A7%E9%A1%BE92%E5%B2%81%E6%AF%8D%E4%BA%B2%23) `63.8K 🔥` `-44%`
1. [乘风一口气官宣34位送考人](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%98%E5%AE%A334%E4%BD%8D%E9%80%81%E8%80%83%E4%BA%BA%23) `63.6K 🔥` `-37%`
1. [胡彦斌连夜关闭了人脸支付](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E8%BF%9E%E5%A4%9C%E5%85%B3%E9%97%AD%E4%BA%86%E4%BA%BA%E8%84%B8%E6%94%AF%E4%BB%98%23) `60.4K 🔥` `-43%`
1. [王楚钦说香港总决赛受伤呼吸都疼 (Wang Chuqin said he was injured in the Hong Kong Finals and it hurt to breathe.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E9%A6%99%E6%B8%AF%E6%80%BB%E5%86%B3%E8%B5%9B%E5%8F%97%E4%BC%A4%E5%91%BC%E5%90%B8%E9%83%BD%E7%96%BC%23) `58.0K 🔥` `-29%`
1. [带娃一个月终于懂了妈妈的月子病](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%A8%83%E4%B8%80%E4%B8%AA%E6%9C%88%E7%BB%88%E4%BA%8E%E6%87%82%E4%BA%86%E5%A6%88%E5%A6%88%E7%9A%84%E6%9C%88%E5%AD%90%E7%97%85%23) `57.3K 🔥` `-28%`

Updated at 2026-04-02 17:44:28

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
