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

1. [王楚钦说我也是第一次进世界杯决赛 (Wang Chuqin said it was also my first time to reach the World Cup finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E6%88%91%E4%B9%9F%E6%98%AF%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `1.1M 🔥` `NEW`
1. [王楚钦淘汰卫冕冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B7%98%E6%B1%B0%E5%8D%AB%E5%86%95%E5%86%A0%E5%86%9B%23) `784.2K 🔥` `NEW`
1. [女子开车撞劫匪致1死2伤被判无罪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E8%BD%A6%E6%92%9E%E5%8A%AB%E5%8C%AA%E8%87%B41%E6%AD%BB2%E4%BC%A4%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `189.1K 🔥` `NEW`
1. [吴京夸谢楠飒](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%A4%B8%E8%B0%A2%E6%A5%A0%E9%A3%92%23) `111.0K 🔥` `NEW`
1. [广西男子清明要拜十几座山](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%94%B7%E5%AD%90%E6%B8%85%E6%98%8E%E8%A6%81%E6%8B%9C%E5%8D%81%E5%87%A0%E5%BA%A7%E5%B1%B1%23) `110.2K 🔥` `NEW`
1. [伊朗媒体发布被击落美军机图像](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%8F%91%E5%B8%83%E8%A2%AB%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9B%E6%9C%BA%E5%9B%BE%E5%83%8F%23) `87.0K 🔥` `NEW`
1. [王楚钦雨果爆分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%9B%A8%E6%9E%9C%E7%88%86%E5%88%86%23) `79.2K 🔥` `NEW`
1. [桃花坞](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%23) `78.9K 🔥` `NEW`
1. [以色列民众先破防了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B0%91%E4%BC%97%E5%85%88%E7%A0%B4%E9%98%B2%E4%BA%86%23) `74.4K 🔥` `NEW`
1. [郭焱说王楚钦半决赛打得堪称完美](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%84%B1%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8D%8A%E5%86%B3%E8%B5%9B%E6%89%93%E5%BE%97%E5%A0%AA%E7%A7%B0%E5%AE%8C%E7%BE%8E%23) `63.4K 🔥` `NEW`
1. [美持续升级战争与声称谈判相矛盾 (The United States’ continued escalation of war contradicts claims of negotiation)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%8C%81%E7%BB%AD%E5%8D%87%E7%BA%A7%E6%88%98%E4%BA%89%E4%B8%8E%E5%A3%B0%E7%A7%B0%E8%B0%88%E5%88%A4%E7%9B%B8%E7%9F%9B%E7%9B%BE%23) `62.7K 🔥` `NEW`
1. [两广地区的祭祖有多夸张](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B9%BF%E5%9C%B0%E5%8C%BA%E7%9A%84%E7%A5%AD%E7%A5%96%E6%9C%89%E5%A4%9A%E5%A4%B8%E5%BC%A0%23) `61.7K 🔥` `NEW`
1. [男子坐大巴回家3小时车程变15小时](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9D%90%E5%A4%A7%E5%B7%B4%E5%9B%9E%E5%AE%B63%E5%B0%8F%E6%97%B6%E8%BD%A6%E7%A8%8B%E5%8F%9815%E5%B0%8F%E6%97%B6%23) `59.7K 🔥` `NEW`
1. [曾舜晞回复陈都灵](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%9B%9E%E5%A4%8D%E9%99%88%E9%83%BD%E7%81%B5%23) `59.4K 🔥` `NEW`
1. [戒掉解释自己的毛病](https://s.weibo.com/weibo?q=%23%E6%88%92%E6%8E%89%E8%A7%A3%E9%87%8A%E8%87%AA%E5%B7%B1%E7%9A%84%E6%AF%9B%E7%97%85%23) `55.9K 🔥` `NEW`
1. [鞠婧祎露芜衣好神性的圣女陨落](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%9C%B2%E8%8A%9C%E8%A1%A3%E5%A5%BD%E7%A5%9E%E6%80%A7%E7%9A%84%E5%9C%A3%E5%A5%B3%E9%99%A8%E8%90%BD%23) `55.8K 🔥` `NEW`
1. [蔡徐坤2026KUN全球巡回演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A42026KUN%E5%85%A8%E7%90%83%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `54.5K 🔥` `NEW`
1. [王楚钦赢球后放声呐喊](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B5%A2%E7%90%83%E5%90%8E%E6%94%BE%E5%A3%B0%E5%91%90%E5%96%8A%23) `52.0K 🔥` `NEW`
1. [美炸毁2架执行救援故障运输机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%82%B8%E6%AF%812%E6%9E%B6%E6%89%A7%E8%A1%8C%E6%95%91%E6%8F%B4%E6%95%85%E9%9A%9C%E8%BF%90%E8%BE%93%E6%9C%BA%23) `559.8K 🔥` `+174%`
1. [快递遭血液污染暴露顺丰两大硬伤](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E9%81%AD%E8%A1%80%E6%B6%B2%E6%B1%A1%E6%9F%93%E6%9A%B4%E9%9C%B2%E9%A1%BA%E4%B8%B0%E4%B8%A4%E5%A4%A7%E7%A1%AC%E4%BC%A4%23) `224.9K 🔥` `+33%`
1. [叔叔无儿女临终给三侄儿每人留5千 (On his deathbed, the childless uncle left 5,000 to each of his three nephews.)](https://s.weibo.com/weibo?q=%23%E5%8F%94%E5%8F%94%E6%97%A0%E5%84%BF%E5%A5%B3%E4%B8%B4%E7%BB%88%E7%BB%99%E4%B8%89%E4%BE%84%E5%84%BF%E6%AF%8F%E4%BA%BA%E7%95%995%E5%8D%83%23) `207.7K 🔥` `+39%`
1. [张凌赫拍的云 (Clouds photographed by Zhang Linghe)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%8D%E7%9A%84%E4%BA%91%23) `167.2K 🔥` `+23%`
1. [小英自曝给女儿剪短发的原因](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E8%87%AA%E6%9B%9D%E7%BB%99%E5%A5%B3%E5%84%BF%E5%89%AA%E7%9F%AD%E5%8F%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `99.6K 🔥` `+39%`
1. [沈月核心好强](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%A0%B8%E5%BF%83%E5%A5%BD%E5%BC%BA%23) `81.0K 🔥` `+29%`
1. [这种东西身上寄生虫多达6000条 (This thing has as many as 6,000 parasites on its body)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E4%B8%9C%E8%A5%BF%E8%BA%AB%E4%B8%8A%E5%AF%84%E7%94%9F%E8%99%AB%E5%A4%9A%E8%BE%BE6000%E6%9D%A1%23) `79.1K 🔥` `+21%`
1. [清明时节一起敬读碑文 (Let’s read the inscription together during the Qingming Festival)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E6%97%B6%E8%8A%82%E4%B8%80%E8%B5%B7%E6%95%AC%E8%AF%BB%E7%A2%91%E6%96%87%23) `607.3K 🔥`
1. [曝姐姐们集体抗议浪姐直播](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A7%90%E5%A7%90%E4%BB%AC%E9%9B%86%E4%BD%93%E6%8A%97%E8%AE%AE%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `585.5K 🔥`
1. [谢娜抚养权判给谁了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `188.9K 🔥`
1. [文淇称妇科检查时医生对其有敌意](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E7%A7%B0%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E6%97%B6%E5%8C%BB%E7%94%9F%E5%AF%B9%E5%85%B6%E6%9C%89%E6%95%8C%E6%84%8F%23) `188.7K 🔥`
1. [伊朗籍男子在日本被殴打致死 (Iranian man beaten to death in Japan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%B1%8D%E7%94%B7%E5%AD%90%E5%9C%A8%E6%97%A5%E6%9C%AC%E8%A2%AB%E6%AE%B4%E6%89%93%E8%87%B4%E6%AD%BB%23) `187.1K 🔥`
1. [网传白玉兰最佳女主初选投票](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E5%88%9D%E9%80%89%E6%8A%95%E7%A5%A8%23) `183.9K 🔥`
1. [吴镇宇说张伦硕认识钟丽缇不工作了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E8%AF%B4%E5%BC%A0%E4%BC%A6%E7%A1%95%E8%AE%A4%E8%AF%86%E9%92%9F%E4%B8%BD%E7%BC%87%E4%B8%8D%E5%B7%A5%E4%BD%9C%E4%BA%86%23) `135.3K 🔥`
1. [撒贝宁 章子怡](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%20%E7%AB%A0%E5%AD%90%E6%80%A1%23) `110.0K 🔥`
1. [五哈6观后感](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E8%A7%82%E5%90%8E%E6%84%9F%23) `109.8K 🔥`
1. [油价暴涨金价大跌 (Oil prices surge, gold prices plummet)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%9A%B4%E6%B6%A8%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%23) `108.0K 🔥`
1. [伊朗称美试图杀害被击落美战机飞行员](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E8%AF%95%E5%9B%BE%E6%9D%80%E5%AE%B3%E8%A2%AB%E5%87%BB%E8%90%BD%E7%BE%8E%E6%88%98%E6%9C%BA%E9%A3%9E%E8%A1%8C%E5%91%98%23) `93.2K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `79.3K 🔥`
1. [浪姐美帝](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%BE%8E%E5%B8%9D%23) `74.4K 🔥`
1. [裤子买长这样改简单又好看](https://s.weibo.com/weibo?q=%23%E8%A3%A4%E5%AD%90%E4%B9%B0%E9%95%BF%E8%BF%99%E6%A0%B7%E6%94%B9%E7%AE%80%E5%8D%95%E5%8F%88%E5%A5%BD%E7%9C%8B%23) `72.2K 🔥`
1. [南方夏天不要穿纯棉](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%A4%8F%E5%A4%A9%E4%B8%8D%E8%A6%81%E7%A9%BF%E7%BA%AF%E6%A3%89%23) `69.8K 🔥`
1. [蓝色果然抑制食欲](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%89%B2%E6%9E%9C%E7%84%B6%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%23) `255.4K 🔥` `-21%`
1. [陈都灵曾舜晞 戏份](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%9B%BE%E8%88%9C%E6%99%9E%20%E6%88%8F%E4%BB%BD%23) `215.8K 🔥` `-50%`
1. [王楚钦vs雨果](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E9%9B%A8%E6%9E%9C%23) `166.8K 🔥` `-84%`
1. [松岛辉空摔拍](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%91%94%E6%8B%8D%23) `127.8K 🔥` `-34%`
1. [申裕斌创造韩国女乒历史 (Shin Yu-bin creates Korean women’s table tennis history)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%A3%95%E6%96%8C%E5%88%9B%E9%80%A0%E9%9F%A9%E5%9B%BD%E5%A5%B3%E4%B9%92%E5%8E%86%E5%8F%B2%23) `127.3K 🔥` `-22%`
1. [王楚钦松岛辉空争冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E4%BA%89%E5%86%A0%23) `88.7K 🔥` `-45%`
1. [唐艺昕回应阚清子](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%BA%94%E9%98%9A%E6%B8%85%E5%AD%90%23) `78.8K 🔥` `-35%`
1. [田嘉瑞荧幕初吻是鞠婧祎](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%98%89%E7%91%9E%E8%8D%A7%E5%B9%95%E5%88%9D%E5%90%BB%E6%98%AF%E9%9E%A0%E5%A9%A7%E7%A5%8E%23) `62.4K 🔥` `-23%`
1. [新婚妻子孕期被骗43万丈夫崩溃](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A9%9A%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E8%A2%AB%E9%AA%9743%E4%B8%87%E4%B8%88%E5%A4%AB%E5%B4%A9%E6%BA%83%23) `61.7K 🔥` `-92%`
1. [中国散户又出手了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%95%A3%E6%88%B7%E5%8F%88%E5%87%BA%E6%89%8B%E4%BA%86%23) `52.2K 🔥` `-25%`

Updated at 2026-04-05 16:25:39

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
