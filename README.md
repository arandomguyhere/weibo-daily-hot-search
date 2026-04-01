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

1. [男子靠AI开一人公司年营收达150万 (Man relies on AI to start a one-person company with annual revenue of 1.5 million)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%9D%A0AI%E5%BC%80%E4%B8%80%E4%BA%BA%E5%85%AC%E5%8F%B8%E5%B9%B4%E8%90%A5%E6%94%B6%E8%BE%BE150%E4%B8%87%23) `1.1M 🔥` `NEW`
1. [周杰伦的歌给刘畊宏跳操不收钱](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E6%AD%8C%E7%BB%99%E5%88%98%E7%95%8A%E5%AE%8F%E8%B7%B3%E6%93%8D%E4%B8%8D%E6%94%B6%E9%92%B1%23) `516.6K 🔥` `NEW`
1. [浙创投为张雪机车投资9000万](https://s.weibo.com/weibo?q=%23%E6%B5%99%E5%88%9B%E6%8A%95%E4%B8%BA%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%95%E8%B5%849000%E4%B8%87%23) `325.9K 🔥` `NEW`
1. [浪姐7人气排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E4%BA%BA%E6%B0%94%E6%8E%92%E5%90%8D%23) `272.1K 🔥` `NEW`
1. [扭扭捏捏到落落大方的方法](https://s.weibo.com/weibo?q=%23%E6%89%AD%E6%89%AD%E6%8D%8F%E6%8D%8F%E5%88%B0%E8%90%BD%E8%90%BD%E5%A4%A7%E6%96%B9%E7%9A%84%E6%96%B9%E6%B3%95%23) `183.5K 🔥` `NEW`
1. [王者荣耀新赛季](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%96%B0%E8%B5%9B%E5%AD%A3%23) `181.3K 🔥` `NEW`
1. [火箭少女101为徐梦洁打call](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%AD%E5%B0%91%E5%A5%B3101%E4%B8%BA%E5%BE%90%E6%A2%A6%E6%B4%81%E6%89%93call%23) `178.2K 🔥` `NEW`
1. [陈红起到一个美图秀秀的作用](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BA%A2%E8%B5%B7%E5%88%B0%E4%B8%80%E4%B8%AA%E7%BE%8E%E5%9B%BE%E7%A7%80%E7%A7%80%E7%9A%84%E4%BD%9C%E7%94%A8%23) `176.6K 🔥` `NEW`
1. [张国荣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%9B%BD%E8%8D%A3%23) `175.2K 🔥` `NEW`
1. [休假羞耻该终结了](https://s.weibo.com/weibo?q=%23%E4%BC%91%E5%81%87%E7%BE%9E%E8%80%BB%E8%AF%A5%E7%BB%88%E7%BB%93%E4%BA%86%23) `174.5K 🔥` `NEW`
1. [歼35为歼8护航 (J-35 escorts J-8)](https://s.weibo.com/weibo?q=%23%E6%AD%BC35%E4%B8%BA%E6%AD%BC8%E6%8A%A4%E8%88%AA%23) `162.3K 🔥` `NEW`
1. [陈飞宇为了逼真在眼睛里滴血浆](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E4%B8%BA%E4%BA%86%E9%80%BC%E7%9C%9F%E5%9C%A8%E7%9C%BC%E7%9D%9B%E9%87%8C%E6%BB%B4%E8%A1%80%E6%B5%86%23) `144.1K 🔥` `NEW`
1. [特朗普称两到三周结束战事](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%B8%A4%E5%88%B0%E4%B8%89%E5%91%A8%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%8B%23) `114.4K 🔥` `NEW`
1. [美以袭击伊朗能源设施致大规模停电](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E8%83%BD%E6%BA%90%E8%AE%BE%E6%96%BD%E8%87%B4%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%81%9C%E7%94%B5%23) `109.6K 🔥` `NEW`
1. [莱万无缘世界杯](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E4%B8%87%E6%97%A0%E7%BC%98%E4%B8%96%E7%95%8C%E6%9D%AF%23) `103.5K 🔥` `NEW`
1. [白宫说特朗普将就伊朗问题发表讲话](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E8%AF%B4%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E5%B0%B1%E4%BC%8A%E6%9C%97%E9%97%AE%E9%A2%98%E5%8F%91%E8%A1%A8%E8%AE%B2%E8%AF%9D%23) `102.0K 🔥` `NEW`
1. [月鳞绮纪全阵容海报](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%85%A8%E9%98%B5%E5%AE%B9%E6%B5%B7%E6%8A%A5%23) `88.6K 🔥` `NEW`
1. [25年前的新闻联播看得泪流满面](https://s.weibo.com/weibo?q=%2325%E5%B9%B4%E5%89%8D%E7%9A%84%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%E7%9C%8B%E5%BE%97%E6%B3%AA%E6%B5%81%E6%BB%A1%E9%9D%A2%23) `86.7K 🔥` `NEW`
1. [好六街 田作之赫](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%85%AD%E8%A1%97%20%E7%94%B0%E4%BD%9C%E4%B9%8B%E8%B5%AB%23) `80.8K 🔥` `NEW`
1. [美军向中东部署第三艘航母](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%90%91%E4%B8%AD%E4%B8%9C%E9%83%A8%E7%BD%B2%E7%AC%AC%E4%B8%89%E8%89%98%E8%88%AA%E6%AF%8D%23) `80.4K 🔥` `NEW`
1. [意大利队主帅称自己已经麻木 (Italy coach says he is numb)](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E9%98%9F%E4%B8%BB%E5%B8%85%E7%A7%B0%E8%87%AA%E5%B7%B1%E5%B7%B2%E7%BB%8F%E9%BA%BB%E6%9C%A8%23) `79.9K 🔥` `NEW`
1. [张雪称影视版权给顶级团队](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%A7%B0%E5%BD%B1%E8%A7%86%E7%89%88%E6%9D%83%E7%BB%99%E9%A1%B6%E7%BA%A7%E5%9B%A2%E9%98%9F%23) `784.8K 🔥` `+1421%`
1. [未发现鞠婧祎涉税问题 (No tax-related issues with Ju Jingyi were found)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%B6%89%E7%A8%8E%E9%97%AE%E9%A2%98%23) `301.5K 🔥` `+107%`
1. [俄罗斯运输机坠毁29人遇难](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%BF%90%E8%BE%93%E6%9C%BA%E5%9D%A0%E6%AF%8129%E4%BA%BA%E9%81%87%E9%9A%BE%23) `202.3K 🔥` `+74%`
1. [站姐团建 (Station sister team building)](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%A7%90%E5%9B%A2%E5%BB%BA%23) `190.7K 🔥` `+31%`
1. [鞠婧祎 此身分明了 (Ju Jingyi’s identity is clear)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E6%AD%A4%E8%BA%AB%E5%88%86%E6%98%8E%E4%BA%86%23) `189.9K 🔥` `+32%`
1. [4岁女孩独自买汉堡遭陌生女子踢踹](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%8B%AC%E8%87%AA%E4%B9%B0%E6%B1%89%E5%A0%A1%E9%81%AD%E9%99%8C%E7%94%9F%E5%A5%B3%E5%AD%90%E8%B8%A2%E8%B8%B9%23) `188.5K 🔥` `+65%`
1. [张凌赫金桐儇站姐互发](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%87%91%E6%A1%90%E5%84%87%E7%AB%99%E5%A7%90%E4%BA%92%E5%8F%91%23) `186.9K 🔥` `+134%`
1. [伊朗打击美军指挥中心](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E6%8C%87%E6%8C%A5%E4%B8%AD%E5%BF%83%23) `186.3K 🔥` `+30%`
1. [愚人节](https://s.weibo.com/weibo?q=%23%E6%84%9A%E4%BA%BA%E8%8A%82%23) `184.9K 🔥` `+29%`
1. [单依纯拉黑网友 (Shan Yichun blocks netizens)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%8B%89%E9%BB%91%E7%BD%91%E5%8F%8B%23) `183.9K 🔥` `+27%`
1. [运动员退役后从146斤暴涨至523斤 (After the athlete retired, his weight skyrocketed from 146 pounds to 523 pounds)](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%91%98%E9%80%80%E5%BD%B9%E5%90%8E%E4%BB%8E146%E6%96%A4%E6%9A%B4%E6%B6%A8%E8%87%B3523%E6%96%A4%23) `182.7K 🔥` `+28%`
1. [en王翊恩 结婚但没同居](https://s.weibo.com/weibo?q=%23en%E7%8E%8B%E7%BF%8A%E6%81%A9%20%E7%BB%93%E5%A9%9A%E4%BD%86%E6%B2%A1%E5%90%8C%E5%B1%85%23) `180.0K 🔥` `+28%`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `176.0K 🔥` `+187%`
1. [辽宁舰山东舰福建舰呼叫](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E8%88%B0%E5%B1%B1%E4%B8%9C%E8%88%B0%E7%A6%8F%E5%BB%BA%E8%88%B0%E5%91%BC%E5%8F%AB%23) `125.5K 🔥` `+143%`
1. [十五五规划背后的90后力量 (The post-90s generation behind the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E8%83%8C%E5%90%8E%E7%9A%8490%E5%90%8E%E5%8A%9B%E9%87%8F%23) `592.2K 🔥`
1. [妻子5次试管成功同年丈夫与情人生子 (Wife succeeded in IVF 5 times and husband gave birth to a child with his lover in the same year)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%905%E6%AC%A1%E8%AF%95%E7%AE%A1%E6%88%90%E5%8A%9F%E5%90%8C%E5%B9%B4%E4%B8%88%E5%A4%AB%E4%B8%8E%E6%83%85%E4%BA%BA%E7%94%9F%E5%AD%90%23) `136.7K 🔥`
1. [英格兰0比1日本](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B00%E6%AF%941%E6%97%A5%E6%9C%AC%23) `132.1K 🔥`
1. [杨紫也被女装背刺了 (Yang Zi was also stabbed in the back while dressed as a woman)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B9%9F%E8%A2%AB%E5%A5%B3%E8%A3%85%E8%83%8C%E5%88%BA%E4%BA%86%23) `131.0K 🔥`
1. [4月最吸金的星座](https://s.weibo.com/weibo?q=%234%E6%9C%88%E6%9C%80%E5%90%B8%E9%87%91%E7%9A%84%E6%98%9F%E5%BA%A7%23) `129.9K 🔥`
1. [女子回应获3亿遗产引丈夫子女不满 (A woman responds to the dissatisfaction of her husband and children after receiving an inheritance of 300 million yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%8E%B73%E4%BA%BF%E9%81%97%E4%BA%A7%E5%BC%95%E4%B8%88%E5%A4%AB%E5%AD%90%E5%A5%B3%E4%B8%8D%E6%BB%A1%23) `110.6K 🔥`
1. [意大利连续3届无缘世界杯 (Italy misses 3rd consecutive World Cup)](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E8%BF%9E%E7%BB%AD3%E5%B1%8A%E6%97%A0%E7%BC%98%E4%B8%96%E7%95%8C%E6%9D%AF%23) `263.4K 🔥` `-73%`
1. [曝雷军押注的中年人泡泡玛特将上市 (It is revealed that Lei Jun’s bet on middle-aged Bubble Mart will be listed on the market)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9B%B7%E5%86%9B%E6%8A%BC%E6%B3%A8%E7%9A%84%E4%B8%AD%E5%B9%B4%E4%BA%BA%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B0%86%E4%B8%8A%E5%B8%82%23) `191.1K 🔥` `-72%`
1. [蓝莓](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%23) `178.9K 🔥` `-58%`
1. [抗癌博主朱明月去世其女发声](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E6%9C%B1%E6%98%8E%E6%9C%88%E5%8E%BB%E4%B8%96%E5%85%B6%E5%A5%B3%E5%8F%91%E5%A3%B0%23) `130.9K 🔥` `-55%`
1. [十二星座4月月运 (Twelve zodiac signs in April)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A74%E6%9C%88%E6%9C%88%E8%BF%90%23) `103.5K 🔥` `-27%`
1. [宋雨琦对接回应不录跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%BD%95%E8%B7%91%E7%94%B7%23) `93.0K 🔥` `-25%`
1. [香港开往上海高铁车厢出现大量蚊虫](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%BC%80%E5%BE%80%E4%B8%8A%E6%B5%B7%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%87%BA%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%9A%8A%E8%99%AB%23) `81.4K 🔥` `-26%`
1. [中国无人机蜂群突击铺天盖地 (China's drone swarms attack overwhelmingly)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%9C%82%E7%BE%A4%E7%AA%81%E5%87%BB%E9%93%BA%E5%A4%A9%E7%9B%96%E5%9C%B0%23) `80.8K 🔥` `-59%`
1. [杨幂拼豆庆祝绿苑二十周年 (Yang Mi celebrates the 20th anniversary of Green Garden with Pindou)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8B%BC%E8%B1%86%E5%BA%86%E7%A5%9D%E7%BB%BF%E8%8B%91%E4%BA%8C%E5%8D%81%E5%91%A8%E5%B9%B4%23) `79.0K 🔥` `-44%`

Updated at 2026-04-01 09:10:08

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
