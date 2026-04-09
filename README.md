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

1. [大疆Pocket4 (DJI Pocket4)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `1.1M 🔥` `NEW`
1. [被送错医院死亡家属曾下跪求转院](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%80%81%E9%94%99%E5%8C%BB%E9%99%A2%E6%AD%BB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E6%9B%BE%E4%B8%8B%E8%B7%AA%E6%B1%82%E8%BD%AC%E9%99%A2%23) `809.3K 🔥` `NEW`
1. [13条举措加快建设分级诊疗体系](https://s.weibo.com/weibo?q=%2313%E6%9D%A1%E4%B8%BE%E6%8E%AA%E5%8A%A0%E5%BF%AB%E5%BB%BA%E8%AE%BE%E5%88%86%E7%BA%A7%E8%AF%8A%E7%96%97%E4%BD%93%E7%B3%BB%23) `627.1K 🔥` `NEW`
1. [伊朗总统说手扣扳机绝不抛弃黎巴嫩](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E6%89%8B%E6%89%A3%E6%89%B3%E6%9C%BA%E7%BB%9D%E4%B8%8D%E6%8A%9B%E5%BC%83%E9%BB%8E%E5%B7%B4%E5%AB%A9%23) `300.7K 🔥` `NEW`
1. [sbti mbti](https://s.weibo.com/weibo?q=%23sbti%20mbti%23) `274.0K 🔥` `NEW`
1. [以色列总理对美国提要求](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E5%AF%B9%E7%BE%8E%E5%9B%BD%E6%8F%90%E8%A6%81%E6%B1%82%23) `269.3K 🔥` `NEW`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `255.0K 🔥` `NEW`
1. [公众号批量删除AI写作文章](https://s.weibo.com/weibo?q=%23%E5%85%AC%E4%BC%97%E5%8F%B7%E6%89%B9%E9%87%8F%E5%88%A0%E9%99%A4AI%E5%86%99%E4%BD%9C%E6%96%87%E7%AB%A0%23) `229.9K 🔥` `NEW`
1. [王楚然折成这样了肚子没挤出一丝肉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%8A%98%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E8%82%9A%E5%AD%90%E6%B2%A1%E6%8C%A4%E5%87%BA%E4%B8%80%E4%B8%9D%E8%82%89%23) `216.0K 🔥` `NEW`
1. [偶遇王承渲在咖啡店打工](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E7%8E%8B%E6%89%BF%E6%B8%B2%E5%9C%A8%E5%92%96%E5%95%A1%E5%BA%97%E6%89%93%E5%B7%A5%23) `202.5K 🔥` `NEW`
1. [刘强东和章泽天新公司叫天强 (Liu Qiangdong and Zhang Zetian’s new company is called Tianqiang)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E5%92%8C%E7%AB%A0%E6%B3%BD%E5%A4%A9%E6%96%B0%E5%85%AC%E5%8F%B8%E5%8F%AB%E5%A4%A9%E5%BC%BA%23) `183.4K 🔥` `NEW`
1. [孔雪儿邓凯将门独后路透](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E8%B7%AF%E9%80%8F%23) `181.3K 🔥` `NEW`
1. [小米YU7入门级版本](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E5%85%A5%E9%97%A8%E7%BA%A7%E7%89%88%E6%9C%AC%23) `169.8K 🔥` `NEW`
1. [王彦霖 让宇文怀复活是什么意思](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BD%A6%E9%9C%96%20%E8%AE%A9%E5%AE%87%E6%96%87%E6%80%80%E5%A4%8D%E6%B4%BB%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%23) `166.2K 🔥` `NEW`
1. [爱尔眼科医院院长被指猥亵销售经理](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%B0%94%E7%9C%BC%E7%A7%91%E5%8C%BB%E9%99%A2%E9%99%A2%E9%95%BF%E8%A2%AB%E6%8C%87%E7%8C%A5%E4%BA%B5%E9%94%80%E5%94%AE%E7%BB%8F%E7%90%86%23) `147.1K 🔥` `NEW`
1. [蔚来ES9](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES9%23) `123.2K 🔥` `NEW`
1. [少女就该少女演](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%A5%B3%E5%B0%B1%E8%AF%A5%E5%B0%91%E5%A5%B3%E6%BC%94%23) `121.1K 🔥` `NEW`
1. [伊朗谈判条件今非昔比](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E6%9D%A1%E4%BB%B6%E4%BB%8A%E9%9D%9E%E6%98%94%E6%AF%94%23) `119.9K 🔥` `NEW`
1. [陈哲远玩陈飞宇我的最爱梗](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%8E%A9%E9%99%88%E9%A3%9E%E5%AE%87%E6%88%91%E7%9A%84%E6%9C%80%E7%88%B1%E6%A2%97%23) `118.2K 🔥` `NEW`
1. [男子卖房为母治病打赏女主播22.5万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E6%88%BF%E4%B8%BA%E6%AF%8D%E6%B2%BB%E7%97%85%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD22.5%E4%B8%87%23) `114.9K 🔥` `NEW`
1. [奔跑吧ins关注tws (Run on ins and follow tws)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7ins%E5%85%B3%E6%B3%A8tws%23) `113.7K 🔥` `NEW`
1. [钢铁森林 好看](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%20%E5%A5%BD%E7%9C%8B%23) `110.9K 🔥` `NEW`
1. [迪丽热巴是陈飞宇铁粉了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%98%AF%E9%99%88%E9%A3%9E%E5%AE%87%E9%93%81%E7%B2%89%E4%BA%86%23) `107.0K 🔥` `NEW`
1. [孟子义在浪姐成形容词了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%9C%A8%E6%B5%AA%E5%A7%90%E6%88%90%E5%BD%A2%E5%AE%B9%E8%AF%8D%E4%BA%86%23) `85.0K 🔥` `NEW`
1. [人民日报评吴克群](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%90%B4%E5%85%8B%E7%BE%A4%23) `84.7K 🔥` `NEW`
1. [男子拿母亲治病钱22.5万打赏女主播](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%BF%E6%AF%8D%E4%BA%B2%E6%B2%BB%E7%97%85%E9%92%B122.5%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD%23) `78.8K 🔥` `NEW`
1. [奔驰一季度中国销量暴跌27%](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%B8%AD%E5%9B%BD%E9%94%80%E9%87%8F%E6%9A%B4%E8%B7%8C27%25%23) `78.4K 🔥` `NEW`
1. [BLG战胜WE](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CWE%23) `73.8K 🔥` `NEW`
1. [王昶说不回应题外话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E8%AF%B4%E4%B8%8D%E5%9B%9E%E5%BA%94%E9%A2%98%E5%A4%96%E8%AF%9D%23) `72.0K 🔥` `NEW`
1. [有时候人被猫咬是自找的](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%97%B6%E5%80%99%E4%BA%BA%E8%A2%AB%E7%8C%AB%E5%92%AC%E6%98%AF%E8%87%AA%E6%89%BE%E7%9A%84%23) `68.1K 🔥` `NEW`
1. [降至300元的降脂针被纳入医保 (Lipid-lowering injections costing NT$300 are included in medical insurance)](https://s.weibo.com/weibo?q=%23%E9%99%8D%E8%87%B3300%E5%85%83%E7%9A%84%E9%99%8D%E8%84%82%E9%92%88%E8%A2%AB%E7%BA%B3%E5%85%A5%E5%8C%BB%E4%BF%9D%23) `275.3K 🔥` `+190%`
1. [男子开路虎加油500元后逃单](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BC%80%E8%B7%AF%E8%99%8E%E5%8A%A0%E6%B2%B9500%E5%85%83%E5%90%8E%E9%80%83%E5%8D%95%23) `222.3K 🔥` `+43%`
1. [陈添祥长文道歉](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B7%BB%E7%A5%A5%E9%95%BF%E6%96%87%E9%81%93%E6%AD%89%23) `177.2K 🔥` `+56%`
1. [瘫痪女孩误买邓紫棋演唱会票平台拒退](https://s.weibo.com/weibo?q=%23%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%A9%E8%AF%AF%E4%B9%B0%E9%82%93%E7%B4%AB%E6%A3%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E5%B9%B3%E5%8F%B0%E6%8B%92%E9%80%80%23) `167.4K 🔥`
1. [美议员称外星人已与人类接触 (US congressman says aliens have made contact with humans)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AE%AE%E5%91%98%E7%A7%B0%E5%A4%96%E6%98%9F%E4%BA%BA%E5%B7%B2%E4%B8%8E%E4%BA%BA%E7%B1%BB%E6%8E%A5%E8%A7%A6%23) `164.2K 🔥`
1. [三个内娱神奇工作室](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E5%86%85%E5%A8%B1%E7%A5%9E%E5%A5%87%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `158.0K 🔥`
1. [金莎孙丞潇领证 (Jinsha Sun Chengxiao receives the certificate)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E9%A2%86%E8%AF%81%23) `142.2K 🔥`
1. [孙杨张豆豆有孩子了 (Sun Yang and Zhang Doudou have a child)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `129.4K 🔥`
1. [迟重瑞现身陈丽华告别仪式 (Chi Chongrui appeared at Chan Laiwa's farewell ceremony)](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E9%87%8D%E7%91%9E%E7%8E%B0%E8%BA%AB%E9%99%88%E4%B8%BD%E5%8D%8E%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%23) `75.3K 🔥`
1. [猫咪浑身带火冲进店铺求助](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E6%B5%91%E8%BA%AB%E5%B8%A6%E7%81%AB%E5%86%B2%E8%BF%9B%E5%BA%97%E9%93%BA%E6%B1%82%E5%8A%A9%23) `73.3K 🔥`
1. [李亚鹏心疼张雪加码捐赠嫣然](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%BF%83%E7%96%BC%E5%BC%A0%E9%9B%AA%E5%8A%A0%E7%A0%81%E6%8D%90%E8%B5%A0%E5%AB%A3%E7%84%B6%23) `71.0K 🔥`
1. [一起给曾舜晞打Chill](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%B5%B7%E7%BB%99%E6%9B%BE%E8%88%9C%E6%99%9E%E6%89%93Chill%23) `272.0K 🔥` `-35%`
1. [刘畊宏再晒王俊凯小泡芙合照](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%86%8D%E6%99%92%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B0%8F%E6%B3%A1%E8%8A%99%E5%90%88%E7%85%A7%23) `122.3K 🔥` `-25%`
1. [女子头痛硬扛7天昏迷确诊李斯特菌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%B4%E7%97%9B%E7%A1%AC%E6%89%9B7%E5%A4%A9%E6%98%8F%E8%BF%B7%E7%A1%AE%E8%AF%8A%E6%9D%8E%E6%96%AF%E7%89%B9%E8%8F%8C%23) `116.0K 🔥` `-85%`
1. [伊朗威胁退出停火 (Iran threatens to withdraw from ceasefire)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A8%81%E8%83%81%E9%80%80%E5%87%BA%E5%81%9C%E7%81%AB%23) `107.0K 🔥` `-47%`
1. [白日提灯第28集无广 (Lantern in the Daytime Episode 28 Wu Guang)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%AC%AC28%E9%9B%86%E6%97%A0%E5%B9%BF%23) `104.5K 🔥` `-54%`
1. [胃病拖成胃癌会经历5个阶段 (Stomach disease will go through 5 stages leading to gastric cancer)](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%97%85%E6%8B%96%E6%88%90%E8%83%83%E7%99%8C%E4%BC%9A%E7%BB%8F%E5%8E%865%E4%B8%AA%E9%98%B6%E6%AE%B5%23) `94.3K 🔥` `-27%`
1. [爷爷卖16000个烧饼孙女打赏给主播 (Grandpa sold 16,000 sesame seed cakes and granddaughter rewarded the anchor)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%8D%9616000%E4%B8%AA%E7%83%A7%E9%A5%BC%E5%AD%99%E5%A5%B3%E6%89%93%E8%B5%8F%E7%BB%99%E4%B8%BB%E6%92%AD%23) `79.2K 🔥` `-51%`
1. [张元英看BTS演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%9C%8BBTS%E6%BC%94%E5%94%B1%E4%BC%9A%23) `75.7K 🔥` `-64%`
1. [巴基斯坦总理明确说停火包括黎巴嫩](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%90%86%E6%98%8E%E7%A1%AE%E8%AF%B4%E5%81%9C%E7%81%AB%E5%8C%85%E6%8B%AC%E9%BB%8E%E5%B7%B4%E5%AB%A9%23) `72.3K 🔥` `-71%`
1. [伊朗为黎巴嫩硬刚美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%BA%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%A1%AC%E5%88%9A%E7%BE%8E%E5%9B%BD%23) `71.7K 🔥` `-40%`

Updated at 2026-04-09 22:32:32

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
