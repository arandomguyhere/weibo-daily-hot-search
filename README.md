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

1. [京东生鲜请您吃贵妃荔枝 (JD.com invites you to eat imperial lychees)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E7%94%9F%E9%B2%9C%E8%AF%B7%E6%82%A8%E5%90%83%E8%B4%B5%E5%A6%83%E8%8D%94%E6%9E%9D%23) `727.9K 🔥` `NEW`
1. [那些曾经是好朋友结果不来往的cp](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%BA%9B%E6%9B%BE%E7%BB%8F%E6%98%AF%E5%A5%BD%E6%9C%8B%E5%8F%8B%E7%BB%93%E6%9E%9C%E4%B8%8D%E6%9D%A5%E5%BE%80%E7%9A%84cp%23) `721.3K 🔥` `NEW`
1. [不舒服学](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%88%92%E6%9C%8D%E5%AD%A6%23) `425.6K 🔥` `NEW`
1. [10.99万入手与众07夯爆了](https://s.weibo.com/weibo?q=%2310.99%E4%B8%87%E5%85%A5%E6%89%8B%E4%B8%8E%E4%BC%9707%E5%A4%AF%E7%88%86%E4%BA%86%23) `343.1K 🔥` `NEW`
1. [奕派M8华派黄金标准大六座](https://s.weibo.com/weibo?q=%23%E5%A5%95%E6%B4%BEM8%E5%8D%8E%E6%B4%BE%E9%BB%84%E9%87%91%E6%A0%87%E5%87%86%E5%A4%A7%E5%85%AD%E5%BA%A7%23) `340.3K 🔥` `NEW`
1. [网购iPad开箱发现里面写着Aqqle](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%B4%ADiPad%E5%BC%80%E7%AE%B1%E5%8F%91%E7%8E%B0%E9%87%8C%E9%9D%A2%E5%86%99%E7%9D%80Aqqle%23) `339.6K 🔥` `NEW`
1. [玉龙雪山被指嘲讽标语已拆除](https://s.weibo.com/weibo?q=%23%E7%8E%89%E9%BE%99%E9%9B%AA%E5%B1%B1%E8%A2%AB%E6%8C%87%E5%98%B2%E8%AE%BD%E6%A0%87%E8%AF%AD%E5%B7%B2%E6%8B%86%E9%99%A4%23) `337.9K 🔥` `NEW`
1. [国务院工作组赴广西柳州震区](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%A1%E9%99%A2%E5%B7%A5%E4%BD%9C%E7%BB%84%E8%B5%B4%E5%B9%BF%E8%A5%BF%E6%9F%B3%E5%B7%9E%E9%9C%87%E5%8C%BA%23) `335.6K 🔥` `NEW`
1. [赵嘉敏去看一诺决赛](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%98%89%E6%95%8F%E5%8E%BB%E7%9C%8B%E4%B8%80%E8%AF%BA%E5%86%B3%E8%B5%9B%23) `326.3K 🔥` `NEW`
1. [AI光算力第一股上市首日暴涨380%](https://s.weibo.com/weibo?q=%23AI%E5%85%89%E7%AE%97%E5%8A%9B%E7%AC%AC%E4%B8%80%E8%82%A1%E4%B8%8A%E5%B8%82%E9%A6%96%E6%97%A5%E6%9A%B4%E6%B6%A8380%25%23) `324.7K 🔥` `NEW`
1. [丁程鑫误入巨人国 (Ding Chengxin accidentally entered the Giant Kingdom)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%AF%E5%85%A5%E5%B7%A8%E4%BA%BA%E5%9B%BD%23) `322.6K 🔥` `NEW`
1. [十万级智能纯电轿跑新高度](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%87%E7%BA%A7%E6%99%BA%E8%83%BD%E7%BA%AF%E7%94%B5%E8%BD%BF%E8%B7%91%E6%96%B0%E9%AB%98%E5%BA%A6%23) `321.5K 🔥` `NEW`
1. [孕妻脑梗变3岁丈夫900多天不离不弃](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%BB%E8%84%91%E6%A2%97%E5%8F%983%E5%B2%81%E4%B8%88%E5%A4%AB900%E5%A4%9A%E5%A4%A9%E4%B8%8D%E7%A6%BB%E4%B8%8D%E5%BC%83%23) `315.4K 🔥` `NEW`
1. [国家卫健委组织专家赴山西](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8D%AB%E5%81%A5%E5%A7%94%E7%BB%84%E7%BB%87%E4%B8%93%E5%AE%B6%E8%B5%B4%E5%B1%B1%E8%A5%BF%23) `310.7K 🔥` `NEW`
1. [邓超一盆水把鹿晗泼回了扁头](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E4%B8%80%E7%9B%86%E6%B0%B4%E6%8A%8A%E9%B9%BF%E6%99%97%E6%B3%BC%E5%9B%9E%E4%BA%86%E6%89%81%E5%A4%B4%23) `306.8K 🔥` `NEW`
1. [小狗护主中弹三次手术后出院](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%8A%A4%E4%B8%BB%E4%B8%AD%E5%BC%B9%E4%B8%89%E6%AC%A1%E6%89%8B%E6%9C%AF%E5%90%8E%E5%87%BA%E9%99%A2%23) `301.8K 🔥` `NEW`
1. [一诺射手开团](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%B0%84%E6%89%8B%E5%BC%80%E5%9B%A2%23) `299.3K 🔥` `NEW`
1. [登神](https://s.weibo.com/weibo?q=%23%E7%99%BB%E7%A5%9E%23) `294.7K 🔥` `NEW`
1. [ally打肉毒导致脸部僵硬](https://s.weibo.com/weibo?q=%23ally%E6%89%93%E8%82%89%E6%AF%92%E5%AF%BC%E8%87%B4%E8%84%B8%E9%83%A8%E5%83%B5%E7%A1%AC%23) `291.6K 🔥` `NEW`
1. [山西煤矿爆炸点附近出现积水](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E7%82%B9%E9%99%84%E8%BF%91%E5%87%BA%E7%8E%B0%E7%A7%AF%E6%B0%B4%23) `290.7K 🔥` `NEW`
1. [iPhone20渲染视频 (iPhone20 rendering video)](https://s.weibo.com/weibo?q=%23iPhone20%E6%B8%B2%E6%9F%93%E8%A7%86%E9%A2%91%23) `930.8K 🔥` `+140%`
1. [庾澄庆 被换6首歌 (Yu Chengqing was replaced by 6 songs)](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%20%E8%A2%AB%E6%8D%A26%E9%A6%96%E6%AD%8C%23) `711.6K 🔥` `+93%`
1. [AG对战狼队](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `596.7K 🔥`
1. [易烊千玺给王源演唱会送花篮了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BB%99%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `466.4K 🔥`
1. [林一 沈月](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%20%E6%B2%88%E6%9C%88%23) `448.0K 🔥`
1. [女子住院被朋友殴打昏迷数天后死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%99%A2%E8%A2%AB%E6%9C%8B%E5%8F%8B%E6%AE%B4%E6%89%93%E6%98%8F%E8%BF%B7%E6%95%B0%E5%A4%A9%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `440.2K 🔥`
1. [申请美国绿卡须返回原籍国提申请](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AF%B7%E7%BE%8E%E5%9B%BD%E7%BB%BF%E5%8D%A1%E9%A1%BB%E8%BF%94%E5%9B%9E%E5%8E%9F%E7%B1%8D%E5%9B%BD%E6%8F%90%E7%94%B3%E8%AF%B7%23) `384.9K 🔥`
1. [沙溢跑男高反吸氧开车 (Sha Yi, a male high school student, inhales oxygen while driving)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E8%B7%91%E7%94%B7%E9%AB%98%E5%8F%8D%E5%90%B8%E6%B0%A7%E5%BC%80%E8%BD%A6%23) `328.3K 🔥`
1. [赵又廷这么发高圆圆知道吗](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%8F%88%E5%BB%B7%E8%BF%99%E4%B9%88%E5%8F%91%E9%AB%98%E5%9C%86%E5%9C%86%E7%9F%A5%E9%81%93%E5%90%97%23) `318.7K 🔥`
1. [感情里有一个最微妙的悖论](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E9%87%8C%E6%9C%89%E4%B8%80%E4%B8%AA%E6%9C%80%E5%BE%AE%E5%A6%99%E7%9A%84%E6%82%96%E8%AE%BA%23) `318.1K 🔥`
1. [男子忘记池里有鱼一年后瘦成蝌蚪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%98%E8%AE%B0%E6%B1%A0%E9%87%8C%E6%9C%89%E9%B1%BC%E4%B8%80%E5%B9%B4%E5%90%8E%E7%98%A6%E6%88%90%E8%9D%8C%E8%9A%AA%23) `309.8K 🔥`
1. [谁家酒店在门口放个游泳池](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E9%85%92%E5%BA%97%E5%9C%A8%E9%97%A8%E5%8F%A3%E6%94%BE%E4%B8%AA%E6%B8%B8%E6%B3%B3%E6%B1%A0%23) `304.6K 🔥`
1. [吴彤为宋亚轩投入了最高版权 (Wu Tong invested the highest copyright for Song Yaxuan)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E4%B8%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%8A%95%E5%85%A5%E4%BA%86%E6%9C%80%E9%AB%98%E7%89%88%E6%9D%83%23) `301.4K 🔥`
1. [美军F16击落神秘物体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9BF16%E5%87%BB%E8%90%BD%E7%A5%9E%E7%A7%98%E7%89%A9%E4%BD%93%23) `295.2K 🔥`
1. [为了省停车费烧了一箱油](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BA%86%E7%9C%81%E5%81%9C%E8%BD%A6%E8%B4%B9%E7%83%A7%E4%BA%86%E4%B8%80%E7%AE%B1%E6%B2%B9%23) `288.8K 🔥`
1. [山西煤矿事故已致90人死亡 (Shanxi coal mine accident kills 90 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%B7%B2%E8%87%B490%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `1.9M 🔥` `-44%`
1. [神23航天员乘组公布](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E8%88%AA%E5%A4%A9%E5%91%98%E4%B9%98%E7%BB%84%E5%85%AC%E5%B8%83%23) `738.2K 🔥` `-39%`
1. [山西留神峪煤矿内部画面 (Interior picture of Shanxi Liushenyu Coal Mine)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E5%86%85%E9%83%A8%E7%94%BB%E9%9D%A2%23) `685.3K 🔥` `-54%`
1. [手机点单 举报抽烟](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E7%82%B9%E5%8D%95%20%E4%B8%BE%E6%8A%A5%E6%8A%BD%E7%83%9F%23) `647.5K 🔥` `-33%`
1. [山西事故煤矿矿工晕倒一个多小时](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%BA%8B%E6%95%85%E7%85%A4%E7%9F%BF%E7%9F%BF%E5%B7%A5%E6%99%95%E5%80%92%E4%B8%80%E4%B8%AA%E5%A4%9A%E5%B0%8F%E6%97%B6%23) `634.4K 🔥` `-46%`
1. [王鹤棣 拆cp](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E6%8B%86cp%23) `385.3K 🔥` `-23%`
1. [庾澄庆格局](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E6%A0%BC%E5%B1%80%23) `345.2K 🔥` `-70%`
1. [沈月向王鹤棣道歉 (Shen Yue apologized to Wang Hedi)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%90%91%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%81%93%E6%AD%89%23) `343.6K 🔥` `-71%`
1. [棣月系超话头像变黑了](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BB%E8%B6%85%E8%AF%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%E4%BA%86%23) `335.1K 🔥` `-32%`
1. [不上班靠一对善良的夫妇救济](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E9%9D%A0%E4%B8%80%E5%AF%B9%E5%96%84%E8%89%AF%E7%9A%84%E5%A4%AB%E5%A6%87%E6%95%91%E6%B5%8E%23) `331.9K 🔥` `-30%`
1. [徐留平被查 (Xu Liuping was investigated)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%95%99%E5%B9%B3%E8%A2%AB%E6%9F%A5%23) `331.1K 🔥` `-32%`
1. [原来吃完虾不能马上运动 (It turns out that you can’t exercise immediately after eating shrimp.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%90%83%E5%AE%8C%E8%99%BE%E4%B8%8D%E8%83%BD%E9%A9%AC%E4%B8%8A%E8%BF%90%E5%8A%A8%23) `329.4K 🔥` `-36%`
1. [山西留神峪矿井外停满救护车](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%95%99%E7%A5%9E%E5%B3%AA%E7%9F%BF%E4%BA%95%E5%A4%96%E5%81%9C%E6%BB%A1%E6%95%91%E6%8A%A4%E8%BD%A6%23) `314.0K 🔥` `-39%`
1. [吴泽林语气](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E8%AF%AD%E6%B0%94%23) `312.7K 🔥` `-34%`
1. [明星看粉丝分析](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%9C%8B%E7%B2%89%E4%B8%9D%E5%88%86%E6%9E%90%23) `305.9K 🔥` `-23%`
1. [孙亚龙买了两万克黄金](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E4%B9%B0%E4%BA%86%E4%B8%A4%E4%B8%87%E5%85%8B%E9%BB%84%E9%87%91%23) `296.7K 🔥` `-23%`

Updated at 2026-05-23 18:55:00

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
