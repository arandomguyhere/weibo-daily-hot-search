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

1. [看演唱会发现自己脊柱侧弯了 (While watching a concert, I discovered that I have scoliosis.)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E8%84%8A%E6%9F%B1%E4%BE%A7%E5%BC%AF%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [美丽中国行](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `637.3K 🔥` `NEW`
1. [高考氛围 淡淡的](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%B0%9B%E5%9B%B4%20%E6%B7%A1%E6%B7%A1%E7%9A%84%23) `602.0K 🔥` `NEW`
1. [意识到了一杯奶茶钱真不是小钱](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%86%E4%B8%80%E6%9D%AF%E5%A5%B6%E8%8C%B6%E9%92%B1%E7%9C%9F%E4%B8%8D%E6%98%AF%E5%B0%8F%E9%92%B1%23) `588.7K 🔥` `NEW`
1. [小的是多大的 小的是我](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%9A%84%E6%98%AF%E5%A4%9A%E5%A4%A7%E7%9A%84%20%E5%B0%8F%E7%9A%84%E6%98%AF%E6%88%91%23) `457.2K 🔥` `NEW`
1. [拉芳全球品牌代言人鞠婧祎](https://s.weibo.com/weibo?q=%23%E6%8B%89%E8%8A%B3%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E9%9E%A0%E5%A9%A7%E7%A5%8E%23) `451.3K 🔥` `NEW`
1. [时代峰峻两位艺人入选瞩目影人](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%B8%A4%E4%BD%8D%E8%89%BA%E4%BA%BA%E5%85%A5%E9%80%89%E7%9E%A9%E7%9B%AE%E5%BD%B1%E4%BA%BA%23) `451.3K 🔥` `NEW`
1. [抖音副总裁回应豆包误判蘑菇](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E5%89%AF%E6%80%BB%E8%A3%81%E5%9B%9E%E5%BA%94%E8%B1%86%E5%8C%85%E8%AF%AF%E5%88%A4%E8%98%91%E8%8F%87%23) `429.4K 🔥` `NEW`
1. [挪威队带300公斤鱼出征世界杯](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%98%9F%E5%B8%A6300%E5%85%AC%E6%96%A4%E9%B1%BC%E5%87%BA%E5%BE%81%E4%B8%96%E7%95%8C%E6%9D%AF%23) `406.9K 🔥` `NEW`
1. [外交部回应黄岩岛不明结构物消失](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E9%BB%84%E5%B2%A9%E5%B2%9B%E4%B8%8D%E6%98%8E%E7%BB%93%E6%9E%84%E7%89%A9%E6%B6%88%E5%A4%B1%23) `377.4K 🔥` `NEW`
1. [康师傅冰红茶卖不动了 (Master Kong’s iced black tea can no longer be sold)](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%B8%88%E5%82%85%E5%86%B0%E7%BA%A2%E8%8C%B6%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `334.2K 🔥` `NEW`
1. [孙怡赵今麦同框](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%90%8C%E6%A1%86%23) `333.2K 🔥` `NEW`
1. [谢震廷自首](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%87%E5%BB%B7%E8%87%AA%E9%A6%96%23) `322.3K 🔥` `NEW`
1. [浪姐四公妆造图](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E5%A6%86%E9%80%A0%E5%9B%BE%23) `286.4K 🔥` `NEW`
1. [特朗普开会睡觉视频曝光](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%BC%80%E4%BC%9A%E7%9D%A1%E8%A7%89%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `269.3K 🔥` `NEW`
1. [男子高铁上用电风扇目击者发声](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AB%98%E9%93%81%E4%B8%8A%E7%94%A8%E7%94%B5%E9%A3%8E%E6%89%87%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `268.5K 🔥` `NEW`
1. [留守妇女反抗性骚扰被杀抛尸案将开庭](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%AE%88%E5%A6%87%E5%A5%B3%E5%8F%8D%E6%8A%97%E6%80%A7%E9%AA%9A%E6%89%B0%E8%A2%AB%E6%9D%80%E6%8A%9B%E5%B0%B8%E6%A1%88%E5%B0%86%E5%BC%80%E5%BA%AD%23) `268.1K 🔥` `NEW`
1. [虞书欣花苞公主](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%8A%B1%E8%8B%9E%E5%85%AC%E4%B8%BB%23) `267.5K 🔥` `NEW`
1. [2岁娃近视300度只因长辈常用手机哄](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A8%83%E8%BF%91%E8%A7%86300%E5%BA%A6%E5%8F%AA%E5%9B%A0%E9%95%BF%E8%BE%88%E5%B8%B8%E7%94%A8%E6%89%8B%E6%9C%BA%E5%93%84%23) `267.0K 🔥` `NEW`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `266.3K 🔥` `NEW`
1. [奚梦瑶坐货车去拍婚纱照 (Xi Mengyao took a truck to take wedding photos)](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%9D%90%E8%B4%A7%E8%BD%A6%E5%8E%BB%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `234.0K 🔥` `NEW`
1. [沈月李嘉琦重庆落地签](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%9D%8E%E5%98%89%E7%90%A6%E9%87%8D%E5%BA%86%E8%90%BD%E5%9C%B0%E7%AD%BE%23) `228.0K 🔥` `NEW`
1. [乒超赛程](https://s.weibo.com/weibo?q=%23%E4%B9%92%E8%B6%85%E8%B5%9B%E7%A8%8B%23) `223.5K 🔥` `NEW`
1. [周杰伦北京抢票](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%8C%97%E4%BA%AC%E6%8A%A2%E7%A5%A8%23) `213.5K 🔥` `NEW`
1. [麦当劳头顶长包了](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E5%A4%B4%E9%A1%B6%E9%95%BF%E5%8C%85%E4%BA%86%23) `213.5K 🔥` `NEW`
1. [奚梦瑶儿子盼何猷君追平身高](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%84%BF%E5%AD%90%E7%9B%BC%E4%BD%95%E7%8C%B7%E5%90%9B%E8%BF%BD%E5%B9%B3%E8%BA%AB%E9%AB%98%23) `213.4K 🔥` `NEW`
1. [陈学冬12部主演作品11部无法上线](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AD%A6%E5%86%AC12%E9%83%A8%E4%B8%BB%E6%BC%94%E4%BD%9C%E5%93%8111%E9%83%A8%E6%97%A0%E6%B3%95%E4%B8%8A%E7%BA%BF%23) `213.4K 🔥` `NEW`
1. [中央空调才是电费刺客](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E7%A9%BA%E8%B0%83%E6%89%8D%E6%98%AF%E7%94%B5%E8%B4%B9%E5%88%BA%E5%AE%A2%23) `213.4K 🔥` `NEW`
1. [aespa一位](https://s.weibo.com/weibo?q=%23aespa%E4%B8%80%E4%BD%8D%23) `213.3K 🔥` `NEW`
1. [鲁豫脑袋大 梅婷是花瓶 郎朗效果差](https://s.weibo.com/weibo?q=%23%E9%B2%81%E8%B1%AB%E8%84%91%E8%A2%8B%E5%A4%A7%20%E6%A2%85%E5%A9%B7%E6%98%AF%E8%8A%B1%E7%93%B6%20%E9%83%8E%E6%9C%97%E6%95%88%E6%9E%9C%E5%B7%AE%23) `212.8K 🔥` `NEW`
1. [追觅高管称旗下所有基金投资合规 (Zhuimi executives said that all fund investments are in compliance with regulations)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E9%AB%98%E7%AE%A1%E7%A7%B0%E6%97%97%E4%B8%8B%E6%89%80%E6%9C%89%E5%9F%BA%E9%87%91%E6%8A%95%E8%B5%84%E5%90%88%E8%A7%84%23) `210.2K 🔥` `NEW`
1. [高考期间有必要禁豆包吗](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%9C%9F%E9%97%B4%E6%9C%89%E5%BF%85%E8%A6%81%E7%A6%81%E8%B1%86%E5%8C%85%E5%90%97%23) `209.6K 🔥` `NEW`
1. [汪苏泷坐三轮比上歌手还紧张](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%9D%90%E4%B8%89%E8%BD%AE%E6%AF%94%E4%B8%8A%E6%AD%8C%E6%89%8B%E8%BF%98%E7%B4%A7%E5%BC%A0%23) `208.9K 🔥` `NEW`
1. [刘诗诗杨幂再次同奖提名](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%9D%A8%E5%B9%82%E5%86%8D%E6%AC%A1%E5%90%8C%E5%A5%96%E6%8F%90%E5%90%8D%23) `207.8K 🔥` `NEW`
1. [蔚来副总裁回应理想汽车](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E5%89%AF%E6%80%BB%E8%A3%81%E5%9B%9E%E5%BA%94%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%23) `207.0K 🔥` `NEW`
1. [一定要警惕路边的提拉米苏](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E8%AD%A6%E6%83%95%E8%B7%AF%E8%BE%B9%E7%9A%84%E6%8F%90%E6%8B%89%E7%B1%B3%E8%8B%8F%23) `206.2K 🔥` `NEW`
1. [二手油车价格](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E6%B2%B9%E8%BD%A6%E4%BB%B7%E6%A0%BC%23) `205.1K 🔥` `NEW`
1. [C罗詹姆斯爆笑互让球王](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%A9%B9%E5%A7%86%E6%96%AF%E7%88%86%E7%AC%91%E4%BA%92%E8%AE%A9%E7%90%83%E7%8E%8B%23) `203.9K 🔥` `NEW`
1. [男子坠海漂7天全身晒到流脓生还](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9D%A0%E6%B5%B7%E6%BC%827%E5%A4%A9%E5%85%A8%E8%BA%AB%E6%99%92%E5%88%B0%E6%B5%81%E8%84%93%E7%94%9F%E8%BF%98%23) `203.4K 🔥` `NEW`
1. [减脂人如何打破烧钱魔咒](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%84%82%E4%BA%BA%E5%A6%82%E4%BD%95%E6%89%93%E7%A0%B4%E7%83%A7%E9%92%B1%E9%AD%94%E5%92%92%23) `196.0K 🔥` `NEW`
1. [日本或将南京大屠杀改为南京事件 (Japan may change the Nanjing Massacre to the Nanjing Incident)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%88%96%E5%B0%86%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E6%94%B9%E4%B8%BA%E5%8D%97%E4%BA%AC%E4%BA%8B%E4%BB%B6%23) `194.9K 🔥` `NEW`
1. [男子落水7天6夜从海口漂到澄迈](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%90%BD%E6%B0%B47%E5%A4%A96%E5%A4%9C%E4%BB%8E%E6%B5%B7%E5%8F%A3%E6%BC%82%E5%88%B0%E6%BE%84%E8%BF%88%23) `802.7K 🔥` `+464%`
1. [陈学冬 避谶](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AD%A6%E5%86%AC%20%E9%81%BF%E8%B0%B6%23) `335.4K 🔥`
1. [判断孩子有没有学霸潜质](https://s.weibo.com/weibo?q=%23%E5%88%A4%E6%96%AD%E5%AD%A9%E5%AD%90%E6%9C%89%E6%B2%A1%E6%9C%89%E5%AD%A6%E9%9C%B8%E6%BD%9C%E8%B4%A8%23) `298.4K 🔥`
1. [高考加油红包](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8A%A0%E6%B2%B9%E7%BA%A2%E5%8C%85%23) `213.3K 🔥`
1. [华为nova16系列正式开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAnova16%E7%B3%BB%E5%88%97%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%94%AE%23) `629.2K 🔥` `-28%`
1. [豆包首次付费后月活减少610万 (Doubao’s monthly activity dropped by 6.1 million after the first payment)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E9%A6%96%E6%AC%A1%E4%BB%98%E8%B4%B9%E5%90%8E%E6%9C%88%E6%B4%BB%E5%87%8F%E5%B0%91610%E4%B8%87%23) `234.2K 🔥` `-80%`
1. [南开大学一学生被电诈220万](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E4%B8%80%E5%AD%A6%E7%94%9F%E8%A2%AB%E7%94%B5%E8%AF%88220%E4%B8%87%23) `231.2K 🔥` `-56%`
1. [实习医生无证拔牙致患者死亡获刑 (Intern doctor jailed for pulling tooth without license, causing patient's death)](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E5%8C%BB%E7%94%9F%E6%97%A0%E8%AF%81%E6%8B%94%E7%89%99%E8%87%B4%E6%82%A3%E8%80%85%E6%AD%BB%E4%BA%A1%E8%8E%B7%E5%88%91%23) `213.4K 🔥` `-22%`
1. [李晨曾送了好多艺人水晶兔子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%9B%BE%E9%80%81%E4%BA%86%E5%A5%BD%E5%A4%9A%E8%89%BA%E4%BA%BA%E6%B0%B4%E6%99%B6%E5%85%94%E5%AD%90%23) `213.4K 🔥` `-31%`
1. [C罗姆巴佩詹姆斯超燃世界杯短片](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%A9%B9%E5%A7%86%E6%96%AF%E8%B6%85%E7%87%83%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9F%AD%E7%89%87%23) `204.2K 🔥` `-52%`

Updated at 2026-06-05 18:12:24

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
