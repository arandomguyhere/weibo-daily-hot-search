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

1. [山西留神峪煤矿内部画面 (Interior picture of Shanxi Liushenyu Coal Mine)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E5%86%85%E9%83%A8%E7%94%BB%E9%9D%A2%23) `1.5M 🔥` `NEW`
1. [山西事故煤矿矿工晕倒一个多小时](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%BA%8B%E6%95%85%E7%85%A4%E7%9F%BF%E7%9F%BF%E5%B7%A5%E6%99%95%E5%80%92%E4%B8%80%E4%B8%AA%E5%A4%9A%E5%B0%8F%E6%97%B6%23) `1.2M 🔥` `NEW`
1. [庾澄庆格局](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E6%A0%BC%E5%B1%80%23) `1.1M 🔥` `NEW`
1. [吉利银河星耀7MAX上市9.88万起](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E9%93%B6%E6%B2%B3%E6%98%9F%E8%80%807MAX%E4%B8%8A%E5%B8%829.88%E4%B8%87%E8%B5%B7%23) `1.0M 🔥` `NEW`
1. [AG对战狼队](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `514.3K 🔥` `NEW`
1. [山西留神峪矿井外停满救护车](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%95%99%E7%A5%9E%E5%B3%AA%E7%9F%BF%E4%BA%95%E5%A4%96%E5%81%9C%E6%BB%A1%E6%95%91%E6%8A%A4%E8%BD%A6%23) `512.5K 🔥` `NEW`
1. [林一 沈月](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%20%E6%B2%88%E6%9C%88%23) `506.9K 🔥` `NEW`
1. [王鹤棣 拆cp](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E6%8B%86cp%23) `500.5K 🔥` `NEW`
1. [女子住院被朋友殴打昏迷数天后死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%99%A2%E8%A2%AB%E6%9C%8B%E5%8F%8B%E6%AE%B4%E6%89%93%E6%98%8F%E8%BF%B7%E6%95%B0%E5%A4%A9%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `496.6K 🔥` `NEW`
1. [棣月系超话头像变黑了](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BB%E8%B6%85%E8%AF%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%E4%BA%86%23) `490.7K 🔥` `NEW`
1. [徐留平被查 (Xu Liuping was investigated)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%95%99%E5%B9%B3%E8%A2%AB%E6%9F%A5%23) `489.3K 🔥` `NEW`
1. [易烊千玺给王源演唱会送花篮了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BB%99%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `482.6K 🔥` `NEW`
1. [巴基斯坦总理抵达杭州](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%90%86%E6%8A%B5%E8%BE%BE%E6%9D%AD%E5%B7%9E%23) `399.1K 🔥` `NEW`
1. [红旗金葵花携国宝非遗绽放蓉城](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%97%97%E9%87%91%E8%91%B5%E8%8A%B1%E6%90%BA%E5%9B%BD%E5%AE%9D%E9%9D%9E%E9%81%97%E7%BB%BD%E6%94%BE%E8%93%89%E5%9F%8E%23) `393.1K 🔥` `NEW`
1. [特朗普取消出席儿子婚礼返回白宫](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%96%E6%B6%88%E5%87%BA%E5%B8%AD%E5%84%BF%E5%AD%90%E5%A9%9A%E7%A4%BC%E8%BF%94%E5%9B%9E%E7%99%BD%E5%AE%AB%23) `388.8K 🔥` `NEW`
1. [iPhone20渲染视频](https://s.weibo.com/weibo?q=%23iPhone20%E6%B8%B2%E6%9F%93%E8%A7%86%E9%A2%91%23) `388.0K 🔥` `NEW`
1. [给杨幂干成外星人了](https://s.weibo.com/weibo?q=%23%E7%BB%99%E6%9D%A8%E5%B9%82%E5%B9%B2%E6%88%90%E5%A4%96%E6%98%9F%E4%BA%BA%E4%BA%86%23) `381.9K 🔥` `NEW`
1. [水蚁泛滥](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%9A%81%E6%B3%9B%E6%BB%A5%23) `379.7K 🔥` `NEW`
1. [谁家酒店在门口放个游泳池](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E9%85%92%E5%BA%97%E5%9C%A8%E9%97%A8%E5%8F%A3%E6%94%BE%E4%B8%AA%E6%B8%B8%E6%B3%B3%E6%B1%A0%23) `372.3K 🔥` `NEW`
1. [诸葛亮吃了两顿十万只箭就够了](https://s.weibo.com/weibo?q=%23%E8%AF%B8%E8%91%9B%E4%BA%AE%E5%90%83%E4%BA%86%E4%B8%A4%E9%A1%BF%E5%8D%81%E4%B8%87%E5%8F%AA%E7%AE%AD%E5%B0%B1%E5%A4%9F%E4%BA%86%23) `370.0K 🔥` `NEW`
1. [庾澄庆 被换6首歌 (Yu Chengqing was replaced by 6 songs)](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%20%E8%A2%AB%E6%8D%A26%E9%A6%96%E6%AD%8C%23) `369.1K 🔥` `NEW`
1. [男子忘记池里有鱼一年后瘦成蝌蚪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%98%E8%AE%B0%E6%B1%A0%E9%87%8C%E6%9C%89%E9%B1%BC%E4%B8%80%E5%B9%B4%E5%90%8E%E7%98%A6%E6%88%90%E8%9D%8C%E8%9A%AA%23) `364.1K 🔥` `NEW`
1. [5胞胎出院父母带烤全羊感谢](https://s.weibo.com/weibo?q=%235%E8%83%9E%E8%83%8E%E5%87%BA%E9%99%A2%E7%88%B6%E6%AF%8D%E5%B8%A6%E7%83%A4%E5%85%A8%E7%BE%8A%E6%84%9F%E8%B0%A2%23) `360.6K 🔥` `NEW`
1. [为了省停车费烧了一箱油](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BA%86%E7%9C%81%E5%81%9C%E8%BD%A6%E8%B4%B9%E7%83%A7%E4%BA%86%E4%B8%80%E7%AE%B1%E6%B2%B9%23) `356.2K 🔥` `NEW`
1. [吴彤为宋亚轩投入了最高版权](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E4%B8%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%8A%95%E5%85%A5%E4%BA%86%E6%9C%80%E9%AB%98%E7%89%88%E6%9D%83%23) `354.5K 🔥` `NEW`
1. [2026王者荣耀挑战者杯决赛](https://s.weibo.com/weibo?q=%232026%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%8C%91%E6%88%98%E8%80%85%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `350.5K 🔥` `NEW`
1. [Gemini挑杯决赛预测](https://s.weibo.com/weibo?q=%23Gemini%E6%8C%91%E6%9D%AF%E5%86%B3%E8%B5%9B%E9%A2%84%E6%B5%8B%23) `345.2K 🔥` `NEW`
1. [其实你根本不是怀念高中](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E4%BD%A0%E6%A0%B9%E6%9C%AC%E4%B8%8D%E6%98%AF%E6%80%80%E5%BF%B5%E9%AB%98%E4%B8%AD%23) `340.7K 🔥` `NEW`
1. [原来吃完虾不能马上运动](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%90%83%E5%AE%8C%E8%99%BE%E4%B8%8D%E8%83%BD%E9%A9%AC%E4%B8%8A%E8%BF%90%E5%8A%A8%23) `514.5K 🔥`
1. [山西煤矿事故已致90人死亡 (Shanxi coal mine accident kills 90 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%B7%B2%E8%87%B490%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `3.3M 🔥` `-69%`
1. [神23航天员乘组公布](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E8%88%AA%E5%A4%A9%E5%91%98%E4%B9%98%E7%BB%84%E5%85%AC%E5%B8%83%23) `1.2M 🔥` `-67%`
1. [沈月向王鹤棣道歉 (Shen Yue apologized to Wang Hedi)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%90%91%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%81%93%E6%AD%89%23) `1.2M 🔥` `-61%`
1. [手机点单 举报抽烟](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E7%82%B9%E5%8D%95%20%E4%B8%BE%E6%8A%A5%E6%8A%BD%E7%83%9F%23) `966.6K 🔥` `-23%`
1. [吴泽林语气](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E8%AF%AD%E6%B0%94%23) `476.5K 🔥` `-58%`
1. [不上班靠一对善良的夫妇救济](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E9%9D%A0%E4%B8%80%E5%AF%B9%E5%96%84%E8%89%AF%E7%9A%84%E5%A4%AB%E5%A6%87%E6%95%91%E6%B5%8E%23) `474.5K 🔥` `-25%`
1. [申请美国绿卡须返回原籍国提申请](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AF%B7%E7%BE%8E%E5%9B%BD%E7%BB%BF%E5%8D%A1%E9%A1%BB%E8%BF%94%E5%9B%9E%E5%8E%9F%E7%B1%8D%E5%9B%BD%E6%8F%90%E7%94%B3%E8%AF%B7%23) `402.2K 🔥` `-93%`
1. [沙溢跑男高反吸氧开车 (Sha Yi, a male high school student, inhales oxygen while driving)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E8%B7%91%E7%94%B7%E9%AB%98%E5%8F%8D%E5%90%B8%E6%B0%A7%E5%BC%80%E8%BD%A6%23) `401.7K 🔥` `-33%`
1. [明星看粉丝分析](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%9C%8B%E7%B2%89%E4%B8%9D%E5%88%86%E6%9E%90%23) `397.7K 🔥` `-36%`
1. [感情里有一个最微妙的悖论](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E9%87%8C%E6%9C%89%E4%B8%80%E4%B8%AA%E6%9C%80%E5%BE%AE%E5%A6%99%E7%9A%84%E6%82%96%E8%AE%BA%23) `395.5K 🔥` `-33%`
1. [赵又廷这么发高圆圆知道吗](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%8F%88%E5%BB%B7%E8%BF%99%E4%B9%88%E5%8F%91%E9%AB%98%E5%9C%86%E5%9C%86%E7%9F%A5%E9%81%93%E5%90%97%23) `392.1K 🔥` `-29%`
1. [孙亚龙买了两万克黄金](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E4%B9%B0%E4%BA%86%E4%B8%A4%E4%B8%87%E5%85%8B%E9%BB%84%E9%87%91%23) `384.3K 🔥` `-37%`
1. [秦统一至今麦子不过熟了2246次](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%BB%9F%E4%B8%80%E8%87%B3%E4%BB%8A%E9%BA%A6%E5%AD%90%E4%B8%8D%E8%BF%87%E7%86%9F%E4%BA%862246%E6%AC%A1%23) `383.5K 🔥` `-32%`
1. [曝白玉兰提名终极预测 (The ultimate prediction of Magnolia nominations revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E7%BB%88%E6%9E%81%E9%A2%84%E6%B5%8B%23) `376.5K 🔥` `-38%`
1. [女子捅死男友辩称正当防卫被判无期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8D%85%E6%AD%BB%E7%94%B7%E5%8F%8B%E8%BE%A9%E7%A7%B0%E6%AD%A3%E5%BD%93%E9%98%B2%E5%8D%AB%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `374.4K 🔥` `-35%`
1. [谢娜回应又被黄灿灿踩裙子了 (Xie Na responded that Huang Cancan stepped on her skirt again)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E5%8F%88%E8%A2%AB%E9%BB%84%E7%81%BF%E7%81%BF%E8%B8%A9%E8%A3%99%E5%AD%90%E4%BA%86%23) `367.9K 🔥` `-41%`
1. [小澈瘦了好多](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `362.8K 🔥` `-38%`
1. [夏天 苍蝇卵](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%20%E8%8B%8D%E8%9D%87%E5%8D%B5%23) `358.4K 🔥` `-42%`
1. [严浩翔将缺席下一期西游录制](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%B0%86%E7%BC%BA%E5%B8%AD%E4%B8%8B%E4%B8%80%E6%9C%9F%E8%A5%BF%E6%B8%B8%E5%BD%95%E5%88%B6%23) `352.3K 🔥` `-37%`
1. [美军F16击落神秘物体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9BF16%E5%87%BB%E8%90%BD%E7%A5%9E%E7%A7%98%E7%89%A9%E4%BD%93%23) `348.4K 🔥` `-40%`
1. [留神峪煤矿事故企业负责人被控制](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E4%BC%81%E4%B8%9A%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `346.8K 🔥` `-53%`
1. [阿尔及利亚四男偷游上海泳池](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%8F%8A%E5%88%A9%E4%BA%9A%E5%9B%9B%E7%94%B7%E5%81%B7%E6%B8%B8%E4%B8%8A%E6%B5%B7%E6%B3%B3%E6%B1%A0%23) `343.0K 🔥` `-33%`

Updated at 2026-05-23 17:27:21

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
