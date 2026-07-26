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

1. [演员王建隆去世 (Actor Wang Jianlong passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%8E%8B%E5%BB%BA%E9%9A%86%E5%8E%BB%E4%B8%96%23) `1.6M 🔥` `NEW`
1. [与湖造浪啤酒音乐节](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E6%B9%96%E9%80%A0%E6%B5%AA%E5%95%A4%E9%85%92%E9%9F%B3%E4%B9%90%E8%8A%82%23) `744.0K 🔥` `NEW`
1. [十个勤天演唱会取消](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `678.4K 🔥` `NEW`
1. [港版金秘书为何这样路透](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E7%89%88%E9%87%91%E7%A7%98%E4%B9%A6%E4%B8%BA%E4%BD%95%E8%BF%99%E6%A0%B7%E8%B7%AF%E9%80%8F%23) `590.2K 🔥` `NEW`
1. [基因编辑致死父母曝光为保护别人](https://s.weibo.com/weibo?q=%23%E5%9F%BA%E5%9B%A0%E7%BC%96%E8%BE%91%E8%87%B4%E6%AD%BB%E7%88%B6%E6%AF%8D%E6%9B%9D%E5%85%89%E4%B8%BA%E4%BF%9D%E6%8A%A4%E5%88%AB%E4%BA%BA%23) `565.9K 🔥` `NEW`
1. [周星驰不再依赖迪丽热巴算长大吗](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `495.8K 🔥` `NEW`
1. [中国女排1比3意大利女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%921%E6%AF%943%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A5%B3%E6%8E%92%23) `495.7K 🔥` `NEW`
1. [艾米晒北电录取通知书](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E6%99%92%E5%8C%97%E7%94%B5%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%23) `495.3K 🔥` `NEW`
1. [王一博第三名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%AC%AC%E4%B8%89%E5%90%8D%23) `495.2K 🔥` `NEW`
1. [湖南排队王谢光头辣椒炒肉菜谱曝光](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%8E%92%E9%98%9F%E7%8E%8B%E8%B0%A2%E5%85%89%E5%A4%B4%E8%BE%A3%E6%A4%92%E7%82%92%E8%82%89%E8%8F%9C%E8%B0%B1%E6%9B%9D%E5%85%89%23) `494.6K 🔥` `NEW`
1. [基因编辑 (gene editing)](https://s.weibo.com/weibo?q=%23%E5%9F%BA%E5%9B%A0%E7%BC%96%E8%BE%91%23) `494.6K 🔥` `NEW`
1. [十个勤天演唱会全额退票](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%A8%E9%A2%9D%E9%80%80%E7%A5%A8%23) `469.4K 🔥` `NEW`
1. [曝刘宇宁曾自称是87年的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AE%87%E5%AE%81%E6%9B%BE%E8%87%AA%E7%A7%B0%E6%98%AF87%E5%B9%B4%E7%9A%84%23) `441.4K 🔥` `NEW`
1. [甘肃渭源山洪已致10死](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E6%B8%AD%E6%BA%90%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B410%E6%AD%BB%23) `441.4K 🔥` `NEW`
1. [美国发生AI失控事故](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E7%94%9FAI%E5%A4%B1%E6%8E%A7%E4%BA%8B%E6%95%85%23) `437.5K 🔥` `NEW`
1. [艾米净身高165](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E5%87%80%E8%BA%AB%E9%AB%98165%23) `436.9K 🔥` `NEW`
1. [装修一半发现装到别人家师傅傻眼](https://s.weibo.com/weibo?q=%23%E8%A3%85%E4%BF%AE%E4%B8%80%E5%8D%8A%E5%8F%91%E7%8E%B0%E8%A3%85%E5%88%B0%E5%88%AB%E4%BA%BA%E5%AE%B6%E5%B8%88%E5%82%85%E5%82%BB%E7%9C%BC%23) `431.5K 🔥` `NEW`
1. [台风红霞现场画面](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `430.6K 🔥` `NEW`
1. [贫困生喝瑞幸被举报](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E5%9B%B0%E7%94%9F%E5%96%9D%E7%91%9E%E5%B9%B8%E8%A2%AB%E4%B8%BE%E6%8A%A5%23) `429.4K 🔥` `NEW`
1. [小狗护主咬死剧毒眼镜蛇嘴角中毒](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%8A%A4%E4%B8%BB%E5%92%AC%E6%AD%BB%E5%89%A7%E6%AF%92%E7%9C%BC%E9%95%9C%E8%9B%87%E5%98%B4%E8%A7%92%E4%B8%AD%E6%AF%92%23) `388.4K 🔥` `NEW`
1. [百花杀大结局 (The ending of Hundred Flowers Killing)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%A4%A7%E7%BB%93%E5%B1%80%23) `298.4K 🔥` `NEW`
1. [龙凤胎出生差2分钟身高差20厘米](https://s.weibo.com/weibo?q=%23%E9%BE%99%E5%87%A4%E8%83%8E%E5%87%BA%E7%94%9F%E5%B7%AE2%E5%88%86%E9%92%9F%E8%BA%AB%E9%AB%98%E5%B7%AE20%E5%8E%98%E7%B1%B3%23) `239.3K 🔥` `NEW`
1. [王楚然潜水服身材](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BD%9C%E6%B0%B4%E6%9C%8D%E8%BA%AB%E6%9D%90%23) `231.7K 🔥` `NEW`
1. [DYG对战WE](https://s.weibo.com/weibo?q=%23DYG%E5%AF%B9%E6%88%98WE%23) `212.9K 🔥` `NEW`
1. [丈夫见到妻子前后变化](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E8%A7%81%E5%88%B0%E5%A6%BB%E5%AD%90%E5%89%8D%E5%90%8E%E5%8F%98%E5%8C%96%23) `188.8K 🔥` `NEW`
1. [文化工作者要有文化含金量](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E5%B7%A5%E4%BD%9C%E8%80%85%E8%A6%81%E6%9C%89%E6%96%87%E5%8C%96%E5%90%AB%E9%87%91%E9%87%8F%23) `181.4K 🔥` `NEW`
1. [女子刚到广东学煲汤买了五只毛桃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%9A%E5%88%B0%E5%B9%BF%E4%B8%9C%E5%AD%A6%E7%85%B2%E6%B1%A4%E4%B9%B0%E4%BA%86%E4%BA%94%E5%8F%AA%E6%AF%9B%E6%A1%83%23) `165.2K 🔥` `NEW`
1. [中国女排vs意大利女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A5%B3%E6%8E%92%23) `164.7K 🔥` `NEW`
1. [网友面包店偶遇宋祖儿](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%9D%A2%E5%8C%85%E5%BA%97%E5%81%B6%E9%81%87%E5%AE%8B%E7%A5%96%E5%84%BF%23) `149.1K 🔥` `NEW`
1. [中国AI芯片国产替代率五年从10%升至40%](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E8%8A%AF%E7%89%87%E5%9B%BD%E4%BA%A7%E6%9B%BF%E4%BB%A3%E7%8E%87%E4%BA%94%E5%B9%B4%E4%BB%8E10%25%E5%8D%87%E8%87%B340%25%23) `148.4K 🔥` `NEW`
1. [佩德里赴约最燃高中生足球联赛 (Pedri's appointment with the most popular high school football league)](https://s.weibo.com/weibo?q=%23%E4%BD%A9%E5%BE%B7%E9%87%8C%E8%B5%B4%E7%BA%A6%E6%9C%80%E7%87%83%E9%AB%98%E4%B8%AD%E7%94%9F%E8%B6%B3%E7%90%83%E8%81%94%E8%B5%9B%23) `577.7K 🔥` `+63%`
1. [迪丽热巴听到周星驰被索吻的反应 (Dilraba's reaction when she heard that Stephen Chow was asked to kiss)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%AC%E5%88%B0%E5%91%A8%E6%98%9F%E9%A9%B0%E8%A2%AB%E7%B4%A2%E5%90%BB%E7%9A%84%E5%8F%8D%E5%BA%94%23) `205.8K 🔥` `+21%`
1. [哥伦比亚孕妇遇害腹中婴儿被夺走 (Colombian pregnant woman murdered, baby snatched from belly)](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%AD%95%E5%A6%87%E9%81%87%E5%AE%B3%E8%85%B9%E4%B8%AD%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%A4%BA%E8%B5%B0%23) `234.9K 🔥`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `169.4K 🔥`
1. [300斤女子减重150斤肚皮垂到了大腿](https://s.weibo.com/weibo?q=%23300%E6%96%A4%E5%A5%B3%E5%AD%90%E5%87%8F%E9%87%8D150%E6%96%A4%E8%82%9A%E7%9A%AE%E5%9E%82%E5%88%B0%E4%BA%86%E5%A4%A7%E8%85%BF%23) `163.9K 🔥`
1. [人真的可以幸福到这般境地](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E5%B9%B8%E7%A6%8F%E5%88%B0%E8%BF%99%E8%88%AC%E5%A2%83%E5%9C%B0%23) `160.4K 🔥`
1. [特斯拉人形机器人](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `148.2K 🔥`
1. [滞销西瓜被网红压价到一毛多一斤 (Slow-selling watermelons are priced down by internet celebrities to just over 10 cents per pound)](https://s.weibo.com/weibo?q=%23%E6%BB%9E%E9%94%80%E8%A5%BF%E7%93%9C%E8%A2%AB%E7%BD%91%E7%BA%A2%E5%8E%8B%E4%BB%B7%E5%88%B0%E4%B8%80%E6%AF%9B%E5%A4%9A%E4%B8%80%E6%96%A4%23) `902.6K 🔥` `-42%`
1. [神23乘组在轨已满60天](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%B9%98%E7%BB%84%E5%9C%A8%E8%BD%A8%E5%B7%B2%E6%BB%A160%E5%A4%A9%23) `744.3K 🔥` `-27%`
1. [晚饭后最好的耗糖运动](https://s.weibo.com/weibo?q=%23%E6%99%9A%E9%A5%AD%E5%90%8E%E6%9C%80%E5%A5%BD%E7%9A%84%E8%80%97%E7%B3%96%E8%BF%90%E5%8A%A8%23) `738.7K 🔥` `-27%`
1. [法院回应LV起诉开发商](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E5%9B%9E%E5%BA%94LV%E8%B5%B7%E8%AF%89%E5%BC%80%E5%8F%91%E5%95%86%23) `570.0K 🔥` `-55%`
1. [软孤立](https://s.weibo.com/weibo?q=%23%E8%BD%AF%E5%AD%A4%E7%AB%8B%23) `434.1K 🔥` `-29%`
1. [白鹿开到荼蘼 田壮壮造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%20%E7%94%B0%E5%A3%AE%E5%A3%AE%E9%80%A0%E5%9E%8B%23) `292.9K 🔥` `-52%`
1. [GR对战MRC (GR vs. MRC)](https://s.weibo.com/weibo?q=%23GR%E5%AF%B9%E6%88%98MRC%23) `246.3K 🔥` `-44%`
1. [苏新皓做了甘露寺美甲](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%81%9A%E4%BA%86%E7%94%98%E9%9C%B2%E5%AF%BA%E7%BE%8E%E7%94%B2%23) `238.8K 🔥` `-42%`
1. [那英曾劝张雅琪别天天照镜子](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%9B%BE%E5%8A%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E5%88%AB%E5%A4%A9%E5%A4%A9%E7%85%A7%E9%95%9C%E5%AD%90%23) `222.4K 🔥` `-38%`
1. [把安装师傅都约同一天处处是惊喜](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%AE%89%E8%A3%85%E5%B8%88%E5%82%85%E9%83%BD%E7%BA%A6%E5%90%8C%E4%B8%80%E5%A4%A9%E5%A4%84%E5%A4%84%E6%98%AF%E6%83%8A%E5%96%9C%23) `210.8K 🔥` `-66%`
1. [杨幂辣妹回归](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%BE%A3%E5%A6%B9%E5%9B%9E%E5%BD%92%23) `178.6K 🔥` `-68%`
1. [中餐厅张雅琪这个发型](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E5%BC%A0%E9%9B%85%E7%90%AA%E8%BF%99%E4%B8%AA%E5%8F%91%E5%9E%8B%23) `168.2K 🔥` `-67%`
1. [严浩翔对AI写rap词的反应](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%AF%B9AI%E5%86%99rap%E8%AF%8D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `165.2K 🔥` `-56%`
1. [A股重磅新规明起实施](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E7%A3%85%E6%96%B0%E8%A7%84%E6%98%8E%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `150.5K 🔥` `-75%`
1. [杨幂Prada发夹](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82Prada%E5%8F%91%E5%A4%B9%23) `148.2K 🔥` `-36%`

Updated at 2026-07-26 18:48:36

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
