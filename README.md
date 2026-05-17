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

1. [樊振东0比3大勒布伦 (Fan Zhendong 0-3 LeBron)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C0%E6%AF%943%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `5.2M 🔥` `NEW`
1. [樊振东vs小勒布伦](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E5%B0%8F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `2.7M 🔥` `NEW`
1. [欧冠决赛](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `1.7M 🔥` `NEW`
1. [莫雷加德称很开心与樊振东做队友](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E7%A7%B0%E5%BE%88%E5%BC%80%E5%BF%83%E4%B8%8E%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%81%9A%E9%98%9F%E5%8F%8B%23) `1.1M 🔥` `NEW`
1. [刘浩存穿十厘米高跟鞋定点转圈](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%A9%BF%E5%8D%81%E5%8E%98%E7%B1%B3%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%AE%9A%E7%82%B9%E8%BD%AC%E5%9C%88%23) `935.7K 🔥` `NEW`
1. [樊振东热身现场响起真的爱你](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%83%AD%E8%BA%AB%E7%8E%B0%E5%9C%BA%E5%93%8D%E8%B5%B7%E7%9C%9F%E7%9A%84%E7%88%B1%E4%BD%A0%23) `889.7K 🔥` `NEW`
1. [谢娜晒和李小冉聊天记录](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E5%92%8C%E6%9D%8E%E5%B0%8F%E5%86%89%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `877.3K 🔥` `NEW`
1. [杨紫曾被自己的脖子吓到](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9B%BE%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%9A%84%E8%84%96%E5%AD%90%E5%90%93%E5%88%B0%23) `520.2K 🔥` `NEW`
1. [马尔代夫发生史上最严重单次潜水事故](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E5%8F%91%E7%94%9F%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E9%87%8D%E5%8D%95%E6%AC%A1%E6%BD%9C%E6%B0%B4%E4%BA%8B%E6%95%85%23) `253.8K 🔥` `NEW`
1. [关键局还得看清融](https://s.weibo.com/weibo?q=%23%E5%85%B3%E9%94%AE%E5%B1%80%E8%BF%98%E5%BE%97%E7%9C%8B%E6%B8%85%E8%9E%8D%23) `253.6K 🔥` `NEW`
1. [樊振东率队冲冠 (Fan Zhendong leads the team to the championship)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%8E%87%E9%98%9F%E5%86%B2%E5%86%A0%23) `253.4K 🔥` `NEW`
1. [下身瘫痪女子育女后丈夫消失7年](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E8%BA%AB%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%90%E8%82%B2%E5%A5%B3%E5%90%8E%E4%B8%88%E5%A4%AB%E6%B6%88%E5%A4%B17%E5%B9%B4%23) `253.1K 🔥` `NEW`
1. [广西皮卡坠河相关责任人被控制](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%AE%E5%8D%A1%E5%9D%A0%E6%B2%B3%E7%9B%B8%E5%85%B3%E8%B4%A3%E4%BB%BB%E4%BA%BA%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `252.9K 🔥` `NEW`
1. [张雪机车回应收获第五冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%BA%94%E6%94%B6%E8%8E%B7%E7%AC%AC%E4%BA%94%E5%86%A0%23) `252.7K 🔥` `NEW`
1. [丈夫买房后去世物业拒给家属钥匙](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E4%B9%B0%E6%88%BF%E5%90%8E%E5%8E%BB%E4%B8%96%E7%89%A9%E4%B8%9A%E6%8B%92%E7%BB%99%E5%AE%B6%E5%B1%9E%E9%92%A5%E5%8C%99%23) `252.5K 🔥` `NEW`
1. [家业热度](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E7%83%AD%E5%BA%A6%23) `251.2K 🔥` `NEW`
1. [长鑫科技一季度营收同比增长719.13%](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%80%E5%AD%A3%E5%BA%A6%E8%90%A5%E6%94%B6%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF719.13%25%23) `251.0K 🔥` `NEW`
1. [杨紫家业央8首播收视率](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AE%B6%E4%B8%9A%E5%A4%AE8%E9%A6%96%E6%92%AD%E6%94%B6%E8%A7%86%E7%8E%87%23) `250.7K 🔥` `NEW`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `249.8K 🔥` `NEW`
1. [央视曝光垃圾围村乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%9E%83%E5%9C%BE%E5%9B%B4%E6%9D%91%E4%B9%B1%E8%B1%A1%23) `248.6K 🔥` `NEW`
1. [信挑杯三连MVP (Xin picked cup three consecutive MVPs)](https://s.weibo.com/weibo?q=%23%E4%BF%A1%E6%8C%91%E6%9D%AF%E4%B8%89%E8%BF%9EMVP%23) `248.4K 🔥` `NEW`
1. [吴敬平谈樊振东留洋](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%95%AC%E5%B9%B3%E8%B0%88%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%95%99%E6%B4%8B%23) `247.8K 🔥` `NEW`
1. [张雪机车昙花五现了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%98%99%E8%8A%B1%E4%BA%94%E7%8E%B0%E4%BA%86%23) `247.2K 🔥` `NEW`
1. [中国刻蚀机之父从0干出2000亿市值](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%88%BB%E8%9A%80%E6%9C%BA%E4%B9%8B%E7%88%B6%E4%BB%8E0%E5%B9%B2%E5%87%BA2000%E4%BA%BF%E5%B8%82%E5%80%BC%23) `239.8K 🔥` `NEW`
1. [张凌赫gucci大秀登美趋第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABgucci%E5%A4%A7%E7%A7%80%E7%99%BB%E7%BE%8E%E8%B6%8B%E7%AC%AC%E4%B8%80%23) `239.6K 🔥` `NEW`
1. [以德润网](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%BE%B7%E6%B6%A6%E7%BD%91%23) `2.1M 🔥` `+163%`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `2.1M 🔥` `+348%`
1. [张雪机车夺得5冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%BE%975%E5%86%A0%23) `1.7M 🔥` `+60%`
1. [李冰冰亮相戛纳红毯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E4%BA%AE%E7%9B%B8%E6%88%9B%E7%BA%B3%E7%BA%A2%E6%AF%AF%23) `1.3M 🔥` `+344%`
1. [李一桐评论去世粉丝博文](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E8%AF%84%E8%AE%BA%E5%8E%BB%E4%B8%96%E7%B2%89%E4%B8%9D%E5%8D%9A%E6%96%87%23) `876.8K 🔥` `+166%`
1. [20万出头就能买四驱空悬中大型SUV (You can buy a medium to large SUV with four-wheel drive and air suspension for just over 200,000 yuan)](https://s.weibo.com/weibo?q=%2320%E4%B8%87%E5%87%BA%E5%A4%B4%E5%B0%B1%E8%83%BD%E4%B9%B0%E5%9B%9B%E9%A9%B1%E7%A9%BA%E6%82%AC%E4%B8%AD%E5%A4%A7%E5%9E%8BSUV%23) `240.2K 🔥` `+37%`
1. [电脑微信会惩罚每一个恋旧的人 (Computer WeChat will punish everyone who is nostalgic)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E5%BE%AE%E4%BF%A1%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E6%81%8B%E6%97%A7%E7%9A%84%E4%BA%BA%23) `858.5K 🔥`
1. [苹果华为小米大幅降价原因 (Reasons why Apple, Huawei and Xiaomi slashed prices)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E5%A4%A7%E5%B9%85%E9%99%8D%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `345.5K 🔥`
1. [狼队对战JDG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98JDG%23) `249.4K 🔥`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `240.7K 🔥`
1. [樊振东欧冠决赛对阵 (Fan Zhendong Champions League final matchup)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%E5%AF%B9%E9%98%B5%23) `239.4K 🔥`
1. [樊振东vs大勒布伦 (Fan Zhendong vs Le Brun)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `1.3M 🔥` `-45%`
1. [张真源头像 (Zhang Zhen's source portrait)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%A4%B4%E5%83%8F%23) `252.1K 🔥` `-24%`
1. [金珉奎 夜店](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%8F%89%E5%A5%8E%20%E5%A4%9C%E5%BA%97%23) `252.0K 🔥` `-44%`
1. [八旬老人公交上闭眼休息实则已死亡](https://s.weibo.com/weibo?q=%23%E5%85%AB%E6%97%AC%E8%80%81%E4%BA%BA%E5%85%AC%E4%BA%A4%E4%B8%8A%E9%97%AD%E7%9C%BC%E4%BC%91%E6%81%AF%E5%AE%9E%E5%88%99%E5%B7%B2%E6%AD%BB%E4%BA%A1%23) `251.8K 🔥` `-24%`
1. [小S发文晒全家福](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%8F%91%E6%96%87%E6%99%92%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `251.4K 🔥` `-36%`
1. [男子手机号被豆包乱标成卖猪电话](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%8B%E6%9C%BA%E5%8F%B7%E8%A2%AB%E8%B1%86%E5%8C%85%E4%B9%B1%E6%A0%87%E6%88%90%E5%8D%96%E7%8C%AA%E7%94%B5%E8%AF%9D%23) `250.5K 🔥` `-24%`
1. [杨超越摆拍800张选9张](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%91%86%E6%8B%8D800%E5%BC%A0%E9%80%899%E5%BC%A0%23) `250.2K 🔥` `-32%`
1. [起个日本名一听就是天津人](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E4%B8%AA%E6%97%A5%E6%9C%AC%E5%90%8D%E4%B8%80%E5%90%AC%E5%B0%B1%E6%98%AF%E5%A4%A9%E6%B4%A5%E4%BA%BA%23) `249.6K 🔥` `-41%`
1. [张真源严浩翔初现印象排名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%88%9D%E7%8E%B0%E5%8D%B0%E8%B1%A1%E6%8E%92%E5%90%8D%23) `249.2K 🔥` `-24%`
1. [姜乘澜 这化妆技术还说啥了 (Jiang Chenglan, what else can I say about this makeup technique?)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%20%E8%BF%99%E5%8C%96%E5%A6%86%E6%8A%80%E6%9C%AF%E8%BF%98%E8%AF%B4%E5%95%A5%E4%BA%86%23) `249.0K 🔥` `-24%`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `248.0K 🔥` `-24%`
1. [白鹿李昀锐是李晨让牵的 (Bailu Li Yunrui was led by Li Chen)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%98%AF%E6%9D%8E%E6%99%A8%E8%AE%A9%E7%89%B5%E7%9A%84%23) `247.6K 🔥` `-59%`
1. [孕妇大出血准妈妈让出救命手术台 (Pregnant woman bleeding heavily gives way to life-saving operating table)](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E5%A4%A7%E5%87%BA%E8%A1%80%E5%87%86%E5%A6%88%E5%A6%88%E8%AE%A9%E5%87%BA%E6%95%91%E5%91%BD%E6%89%8B%E6%9C%AF%E5%8F%B0%23) `247.5K 🔥` `-48%`
1. [中国有多少城市能撑起来七日游 (How many cities in China can support a seven-day tour?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%89%E5%A4%9A%E5%B0%91%E5%9F%8E%E5%B8%82%E8%83%BD%E6%92%91%E8%B5%B7%E6%9D%A5%E4%B8%83%E6%97%A5%E6%B8%B8%23) `245.4K 🔥` `-64%`
1. [中美阿三国联合打击电诈 (China, the United States and Afghanistan jointly combat e-mail fraud)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%98%BF%E4%B8%89%E5%9B%BD%E8%81%94%E5%90%88%E6%89%93%E5%87%BB%E7%94%B5%E8%AF%88%23) `240.4K 🔥` `-28%`

Updated at 2026-05-17 22:13:23

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
