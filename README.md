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

1. [陈光标捐给嫣然医院1000万 (Chen Guangbiao donated 10 million to Yanran Hospital)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%85%89%E6%A0%87%E6%8D%90%E7%BB%99%E5%AB%A3%E7%84%B6%E5%8C%BB%E9%99%A21000%E4%B8%87%23) `767.5K 🔥` `NEW`
1. [陈光标将送张雪豪车变现捐赠嫣然](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%85%89%E6%A0%87%E5%B0%86%E9%80%81%E5%BC%A0%E9%9B%AA%E8%B1%AA%E8%BD%A6%E5%8F%98%E7%8E%B0%E6%8D%90%E8%B5%A0%E5%AB%A3%E7%84%B6%23) `193.4K 🔥` `NEW`
1. [迪丽热巴陈飞宇鬼新娘转场](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E9%AC%BC%E6%96%B0%E5%A8%98%E8%BD%AC%E5%9C%BA%23) `123.5K 🔥` `NEW`
1. [鸡煲店媳妇双手因拔鸡毛剁鸡已发白](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E5%BA%97%E5%AA%B3%E5%A6%87%E5%8F%8C%E6%89%8B%E5%9B%A0%E6%8B%94%E9%B8%A1%E6%AF%9B%E5%89%81%E9%B8%A1%E5%B7%B2%E5%8F%91%E7%99%BD%23) `105.0K 🔥` `NEW`
1. [李楷灿ins直播](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A5%B7%E7%81%BFins%E7%9B%B4%E6%92%AD%23) `97.5K 🔥` `NEW`
1. [张雪机车严正声明](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `88.5K 🔥` `NEW`
1. [考古张月](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%8F%A4%E5%BC%A0%E6%9C%88%23) `85.7K 🔥` `NEW`
1. [散粉高反](https://s.weibo.com/weibo?q=%23%E6%95%A3%E7%B2%89%E9%AB%98%E5%8F%8D%23) `84.8K 🔥` `NEW`
1. [王楚钦滑到劈叉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%BB%91%E5%88%B0%E5%8A%88%E5%8F%89%23) `82.7K 🔥` `NEW`
1. [伊朗山民参与搜寻失踪美军飞行员](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%B1%E6%B0%91%E5%8F%82%E4%B8%8E%E6%90%9C%E5%AF%BB%E5%A4%B1%E8%B8%AA%E7%BE%8E%E5%86%9B%E9%A3%9E%E8%A1%8C%E5%91%98%23) `71.6K 🔥` `NEW`
1. [王灿晒与婆婆合影 (Wang Canshai took a photo with her mother-in-law)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%81%BF%E6%99%92%E4%B8%8E%E5%A9%86%E5%A9%86%E5%90%88%E5%BD%B1%23) `71.4K 🔥` `NEW`
1. [多名游客称被困玉龙雪山山顶](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E6%B8%B8%E5%AE%A2%E7%A7%B0%E8%A2%AB%E5%9B%B0%E7%8E%89%E9%BE%99%E9%9B%AA%E5%B1%B1%E5%B1%B1%E9%A1%B6%23) `60.2K 🔥` `NEW`
1. [镜头是爱意的具象化](https://s.weibo.com/weibo?q=%23%E9%95%9C%E5%A4%B4%E6%98%AF%E7%88%B1%E6%84%8F%E7%9A%84%E5%85%B7%E8%B1%A1%E5%8C%96%23) `56.1K 🔥` `NEW`
1. [被成都高铁大屏的表白硬控了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%88%90%E9%83%BD%E9%AB%98%E9%93%81%E5%A4%A7%E5%B1%8F%E7%9A%84%E8%A1%A8%E7%99%BD%E7%A1%AC%E6%8E%A7%E4%BA%86%23) `54.8K 🔥` `NEW`
1. [孙颖莎笑眯眯路过混采区](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AC%91%E7%9C%AF%E7%9C%AF%E8%B7%AF%E8%BF%87%E6%B7%B7%E9%87%87%E5%8C%BA%23) `53.9K 🔥` `NEW`
1. [王楚钦淘汰卫冕冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B7%98%E6%B1%B0%E5%8D%AB%E5%86%95%E5%86%A0%E5%86%9B%23) `1.1M 🔥` `+36%`
1. [女子开车撞劫匪致1死2伤被判无罪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E8%BD%A6%E6%92%9E%E5%8A%AB%E5%8C%AA%E8%87%B41%E6%AD%BB2%E4%BC%A4%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `290.9K 🔥` `+54%`
1. [桃花坞](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%23) `262.2K 🔥` `+232%`
1. [伊朗媒体发布被击落美军机图像](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%8F%91%E5%B8%83%E8%A2%AB%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9B%E6%9C%BA%E5%9B%BE%E5%83%8F%23) `195.7K 🔥` `+125%`
1. [以色列民众先破防了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B0%91%E4%BC%97%E5%85%88%E7%A0%B4%E9%98%B2%E4%BA%86%23) `124.4K 🔥` `+67%`
1. [王楚钦雨果爆分 (Wang Chuqin Hugo scores points)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%9B%A8%E6%9E%9C%E7%88%86%E5%88%86%23) `97.0K 🔥` `+22%`
1. [两广地区的祭祖有多夸张](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B9%BF%E5%9C%B0%E5%8C%BA%E7%9A%84%E7%A5%AD%E7%A5%96%E6%9C%89%E5%A4%9A%E5%A4%B8%E5%BC%A0%23) `87.5K 🔥` `+42%`
1. [清明时节一起敬读碑文 (Let’s read the inscription together during the Qingming Festival)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E6%97%B6%E8%8A%82%E4%B8%80%E8%B5%B7%E6%95%AC%E8%AF%BB%E7%A2%91%E6%96%87%23) `595.0K 🔥`
1. [美炸毁2架执行救援故障运输机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%82%B8%E6%AF%812%E6%9E%B6%E6%89%A7%E8%A1%8C%E6%95%91%E6%8F%B4%E6%95%85%E9%9A%9C%E8%BF%90%E8%BE%93%E6%9C%BA%23) `500.5K 🔥`
1. [蓝色果然抑制食欲](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%89%B2%E6%9E%9C%E7%84%B6%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%23) `289.5K 🔥`
1. [谢娜抚养权判给谁了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `188.8K 🔥`
1. [叔叔无儿女临终给三侄儿每人留5千 (On his deathbed, the childless uncle left 5,000 to each of his three nephews.)](https://s.weibo.com/weibo?q=%23%E5%8F%94%E5%8F%94%E6%97%A0%E5%84%BF%E5%A5%B3%E4%B8%B4%E7%BB%88%E7%BB%99%E4%B8%89%E4%BE%84%E5%84%BF%E6%AF%8F%E4%BA%BA%E7%95%995%E5%8D%83%23) `184.7K 🔥`
1. [文淇称妇科检查时医生对其有敌意](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E7%A7%B0%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E6%97%B6%E5%8C%BB%E7%94%9F%E5%AF%B9%E5%85%B6%E6%9C%89%E6%95%8C%E6%84%8F%23) `182.9K 🔥`
1. [网传白玉兰最佳女主初选投票](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E5%88%9D%E9%80%89%E6%8A%95%E7%A5%A8%23) `181.4K 🔥`
1. [张凌赫拍的云 (Clouds photographed by Zhang Linghe)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%8D%E7%9A%84%E4%BA%91%23) `143.1K 🔥`
1. [吴镇宇说张伦硕认识钟丽缇不工作了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E8%AF%B4%E5%BC%A0%E4%BC%A6%E7%A1%95%E8%AE%A4%E8%AF%86%E9%92%9F%E4%B8%BD%E7%BC%87%E4%B8%8D%E5%B7%A5%E4%BD%9C%E4%BA%86%23) `125.7K 🔥`
1. [撒贝宁 章子怡](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%20%E7%AB%A0%E5%AD%90%E6%80%A1%23) `124.8K 🔥`
1. [小英自曝给女儿剪短发的原因](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E8%87%AA%E6%9B%9D%E7%BB%99%E5%A5%B3%E5%84%BF%E5%89%AA%E7%9F%AD%E5%8F%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `99.7K 🔥`
1. [油价暴涨金价大跌 (Oil prices surge, gold prices plummet)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%9A%B4%E6%B6%A8%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%23) `88.0K 🔥`
1. [浪姐美帝 (Lang Jie Mei Di)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%BE%8E%E5%B8%9D%23) `76.0K 🔥`
1. [南方夏天不要穿纯棉](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%A4%8F%E5%A4%A9%E4%B8%8D%E8%A6%81%E7%A9%BF%E7%BA%AF%E6%A3%89%23) `73.8K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `73.7K 🔥`
1. [美持续升级战争与声称谈判相矛盾 (The United States’ continued escalation of war contradicts claims of negotiation)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%8C%81%E7%BB%AD%E5%8D%87%E7%BA%A7%E6%88%98%E4%BA%89%E4%B8%8E%E5%A3%B0%E7%A7%B0%E8%B0%88%E5%88%A4%E7%9B%B8%E7%9F%9B%E7%9B%BE%23) `52.8K 🔥`
1. [王楚钦说我也是第一次进世界杯决赛 (Wang Chuqin said it was also my first time to reach the World Cup finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E6%88%91%E4%B9%9F%E6%98%AF%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `237.4K 🔥` `-78%`
1. [曝姐姐们集体抗议浪姐直播](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A7%90%E5%A7%90%E4%BB%AC%E9%9B%86%E4%BD%93%E6%8A%97%E8%AE%AE%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `189.3K 🔥` `-68%`
1. [快递遭血液污染暴露顺丰两大硬伤](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E9%81%AD%E8%A1%80%E6%B6%B2%E6%B1%A1%E6%9F%93%E6%9A%B4%E9%9C%B2%E9%A1%BA%E4%B8%B0%E4%B8%A4%E5%A4%A7%E7%A1%AC%E4%BC%A4%23) `178.4K 🔥` `-21%`
1. [陈都灵曾舜晞 戏份](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%9B%BE%E8%88%9C%E6%99%9E%20%E6%88%8F%E4%BB%BD%23) `157.6K 🔥` `-27%`
1. [伊朗籍男子在日本被殴打致死 (Iranian man beaten to death in Japan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%B1%8D%E7%94%B7%E5%AD%90%E5%9C%A8%E6%97%A5%E6%9C%AC%E8%A2%AB%E6%AE%B4%E6%89%93%E8%87%B4%E6%AD%BB%23) `127.0K 🔥` `-32%`
1. [松岛辉空摔拍](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%91%94%E6%8B%8D%23) `92.4K 🔥` `-28%`
1. [五哈6观后感](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E8%A7%82%E5%90%8E%E6%84%9F%23) `86.6K 🔥` `-21%`
1. [申裕斌创造韩国女乒历史 (Shin Yu-bin creates Korean women’s table tennis history)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%A3%95%E6%96%8C%E5%88%9B%E9%80%A0%E9%9F%A9%E5%9B%BD%E5%A5%B3%E4%B9%92%E5%8E%86%E5%8F%B2%23) `82.6K 🔥` `-35%`
1. [伊朗称美试图杀害被击落美战机飞行员](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E8%AF%95%E5%9B%BE%E6%9D%80%E5%AE%B3%E8%A2%AB%E5%87%BB%E8%90%BD%E7%BE%8E%E6%88%98%E6%9C%BA%E9%A3%9E%E8%A1%8C%E5%91%98%23) `72.6K 🔥` `-22%`
1. [吴京夸谢楠飒](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%A4%B8%E8%B0%A2%E6%A5%A0%E9%A3%92%23) `70.2K 🔥` `-37%`
1. [沈月核心好强 (Shen Yue’s core is so strong)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%A0%B8%E5%BF%83%E5%A5%BD%E5%BC%BA%23) `59.0K 🔥` `-27%`
1. [这种东西身上寄生虫多达6000条 (This thing has as many as 6,000 parasites on its body)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E4%B8%9C%E8%A5%BF%E8%BA%AB%E4%B8%8A%E5%AF%84%E7%94%9F%E8%99%AB%E5%A4%9A%E8%BE%BE6000%E6%9D%A1%23) `58.8K 🔥` `-26%`

Updated at 2026-04-05 17:07:46

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
