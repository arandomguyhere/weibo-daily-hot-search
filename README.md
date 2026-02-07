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

1. [日媒称谷爱凌摔倒是赛道问题 (Japanese media said Gu Ailing’s fall was due to a track problem)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E7%A7%B0%E8%B0%B7%E7%88%B1%E5%87%8C%E6%91%94%E5%80%92%E6%98%AF%E8%B5%9B%E9%81%93%E9%97%AE%E9%A2%98%23) `113.9K 🔥` `NEW`
1. [赵丽颖2025年全球观众最喜爱演员](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%962025%E5%B9%B4%E5%85%A8%E7%90%83%E8%A7%82%E4%BC%97%E6%9C%80%E5%96%9C%E7%88%B1%E6%BC%94%E5%91%98%23) `111.6K 🔥` `NEW`
1. [王力宏 我们不是那种节目](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%20%E6%88%91%E4%BB%AC%E4%B8%8D%E6%98%AF%E9%82%A3%E7%A7%8D%E8%8A%82%E7%9B%AE%23) `62.0K 🔥` `NEW`
1. [北奥12人仅剩苏翊鸣坚守](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A5%A512%E4%BA%BA%E4%BB%85%E5%89%A9%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%9D%9A%E5%AE%88%23) `55.1K 🔥` `NEW`
1. [苏翊鸣米兰冬奥摘铜](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E6%91%98%E9%93%9C%23) `36.2K 🔥` `NEW`
1. [隋文静看金博洋短节目哭了](https://s.weibo.com/weibo?q=%23%E9%9A%8B%E6%96%87%E9%9D%99%E7%9C%8B%E9%87%91%E5%8D%9A%E6%B4%8B%E7%9F%AD%E8%8A%82%E7%9B%AE%E5%93%AD%E4%BA%86%23) `36.2K 🔥` `NEW`
1. [苏翊鸣大跳台铜牌 (Su Yiming bronze medal in big platform)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%93%9C%E7%89%8C%23) `907.0K 🔥` `+47%`
1. [川大博导被举报83页材料公开 (Sichuan University PhD supervisor was reported to have made 83 pages of materials public)](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E5%A4%A7%E5%8D%9A%E5%AF%BC%E8%A2%AB%E4%B8%BE%E6%8A%A583%E9%A1%B5%E6%9D%90%E6%96%99%E5%85%AC%E5%BC%80%23) `654.6K 🔥` `+47%`
1. [中国元素绽放米兰冬奥舞台 (Chinese elements bloom on the Milan Winter Olympics stage)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%83%E7%B4%A0%E7%BB%BD%E6%94%BE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%88%9E%E5%8F%B0%23) `539.7K 🔥` `+47%`
1. [吃盼盼看冬奥 (Eat and watch the Winter Olympics)](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%9B%BC%E7%9B%BC%E7%9C%8B%E5%86%AC%E5%A5%A5%23) `420.7K 🔥` `+189%`
1. [撞人致死孕妇开的是脱保二手车 (The pregnant woman who hit someone and died was driving a second-hand car that was out of warranty)](https://s.weibo.com/weibo?q=%23%E6%92%9E%E4%BA%BA%E8%87%B4%E6%AD%BB%E5%AD%95%E5%A6%87%E5%BC%80%E7%9A%84%E6%98%AF%E8%84%B1%E4%BF%9D%E4%BA%8C%E6%89%8B%E8%BD%A6%23) `353.7K 🔥` `+1109%`
1. [11年了大姐还在骂明台 (It’s been 11 years and my eldest sister is still scolding Mingtai)](https://s.weibo.com/weibo?q=%2311%E5%B9%B4%E4%BA%86%E5%A4%A7%E5%A7%90%E8%BF%98%E5%9C%A8%E9%AA%82%E6%98%8E%E5%8F%B0%23) `161.0K 🔥` `+99%`
1. [92岁老人集装箱离世留下19万存款 (92-year-old man died in a container and left a deposit of 190,000)](https://s.weibo.com/weibo?q=%2392%E5%B2%81%E8%80%81%E4%BA%BA%E9%9B%86%E8%A3%85%E7%AE%B1%E7%A6%BB%E4%B8%96%E7%95%99%E4%B8%8B19%E4%B8%87%E5%AD%98%E6%AC%BE%23) `142.8K 🔥` `+57%`
1. [男子网购椅子竟多出15公斤银板 (Man buys chairs online but ends up with 15 kilograms more silver plate)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%AD%E6%A4%85%E5%AD%90%E7%AB%9F%E5%A4%9A%E5%87%BA15%E5%85%AC%E6%96%A4%E9%93%B6%E6%9D%BF%23) `115.4K 🔥` `+130%`
1. [金博洋84.15分](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B84.15%E5%88%86%23) `111.9K 🔥` `+65%`
1. [男子因1条评论杀害2人 (Man kills 2 people over 1 comment)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A01%E6%9D%A1%E8%AF%84%E8%AE%BA%E6%9D%80%E5%AE%B32%E4%BA%BA%23) `111.7K 🔥` `+97%`
1. [Bin](https://s.weibo.com/weibo?q=%23Bin%23) `110.9K 🔥` `+37%`
1. [苏翊鸣 触雪](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%20%E8%A7%A6%E9%9B%AA%23) `94.3K 🔥` `+99%`
1. [林诗栋惨遭逆转无缘4强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%83%A8%E9%81%AD%E9%80%86%E8%BD%AC%E6%97%A0%E7%BC%984%E5%BC%BA%23) `84.9K 🔥` `+164%`
1. [官方通报教师用手背打学生脸 (Official reports teacher slapped student in face with back of hand)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%95%99%E5%B8%88%E7%94%A8%E6%89%8B%E8%83%8C%E6%89%93%E5%AD%A6%E7%94%9F%E8%84%B8%23) `83.4K 🔥` `+124%`
1. [山西朔州车间爆炸已致7人遇难 (Explosion in Shanxi Shuozhou workshop kills 7 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%9C%94%E5%B7%9E%E8%BD%A6%E9%97%B4%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B47%E4%BA%BA%E9%81%87%E9%9A%BE%23) `80.1K 🔥` `+54%`
1. [苏翊鸣第三跳80.25分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%B8%89%E8%B7%B380.25%E5%88%86%23) `76.6K 🔥` `+99%`
1. [生命树张扬去世 (The tree of life Zhang Yang passed away)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%BC%A0%E6%89%AC%E5%8E%BB%E4%B8%96%23) `73.2K 🔥` `+128%`
1. [Bin自拍晒身材照 (Bin takes selfies to show off body photos)](https://s.weibo.com/weibo?q=%23Bin%E8%87%AA%E6%8B%8D%E6%99%92%E8%BA%AB%E6%9D%90%E7%85%A7%23) `73.1K 🔥` `+98%`
1. [天津首例不满16岁未成年人被行拘 (Tianjin’s first case of minor under 16 being detained)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E9%A6%96%E4%BE%8B%E4%B8%8D%E6%BB%A116%E5%B2%81%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `73.0K 🔥` `+99%`
1. [甲状腺是怎么一步一步失控的 (How does the thyroid gland go out of control step by step?)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%98%AF%E6%80%8E%E4%B9%88%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E5%A4%B1%E6%8E%A7%E7%9A%84%23) `73.0K 🔥` `+101%`
1. [苏翊鸣决赛](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%86%B3%E8%B5%9B%23) `72.9K 🔥` `+38%`
1. [谷爱凌第一滑摔倒 (Gu Ailing fell down in her first slip)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `70.3K 🔥` `+61%`
1. [成何体统 癫剧 (What kind of body is epileptic drama)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E7%99%AB%E5%89%A7%23) `66.1K 🔥` `+130%`
1. [孙颖莎6比11陈熠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E6%E6%AF%9411%E9%99%88%E7%86%A0%23) `65.0K 🔥` `+81%`
1. [苏翊鸣第二跳73.75分 (Su Yiming’s second jump scored 73.75 points)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%BA%8C%E8%B7%B373.75%E5%88%86%23) `59.9K 🔥` `+62%`
1. [乌克兰紧急求助波兰 (Ukraine seeks emergency help from Poland)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E7%B4%A7%E6%80%A5%E6%B1%82%E5%8A%A9%E6%B3%A2%E5%85%B0%23) `55.4K 🔥` `+32%`
1. [米兰大跳台 摔了好多人 (Many people fell on the Milan diving platform)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%A4%A7%E8%B7%B3%E5%8F%B0%20%E6%91%94%E4%BA%86%E5%A5%BD%E5%A4%9A%E4%BA%BA%23) `54.9K 🔥` `+87%`
1. [苏翊鸣第一跳1980 (Su Yiming's first dance in 1980)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%B8%80%E8%B7%B31980%23) `54.6K 🔥` `+72%`
1. [脚臭的人洗脚时建议加点盐](https://s.weibo.com/weibo?q=%23%E8%84%9A%E8%87%AD%E7%9A%84%E4%BA%BA%E6%B4%97%E8%84%9A%E6%97%B6%E5%BB%BA%E8%AE%AE%E5%8A%A0%E7%82%B9%E7%9B%90%23) `53.6K 🔥` `+105%`
1. [立威廉得知恶耗时才49岁](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%E5%BE%97%E7%9F%A5%E6%81%B6%E8%80%97%E6%97%B6%E6%89%8D49%E5%B2%81%23) `50.3K 🔥` `+57%`
1. [白鹿穿高定录综艺 (White Deer Wears Haute Couture Variety Show)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A9%BF%E9%AB%98%E5%AE%9A%E5%BD%95%E7%BB%BC%E8%89%BA%23) `50.2K 🔥` `+83%`
1. [苏翊鸣暂列第二 (Su Yiming is temporarily ranked second)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%9A%82%E5%88%97%E7%AC%AC%E4%BA%8C%23) `37.9K 🔥` `+47%`
1. [芒果女主持上新了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%B8%8A%E6%96%B0%E4%BA%86%23) `37.6K 🔥` `+28%`
1. [苏翊鸣太帅了 (Su Yiming is so handsome)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%AA%E5%B8%85%E4%BA%86%23) `36.2K 🔥` `+39%`
1. [演员立威廉已重新安排遗嘱](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%AB%8B%E5%A8%81%E5%BB%89%E5%B7%B2%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E9%81%97%E5%98%B1%23) `36.2K 🔥` `+49%`
1. [马伯骞回关虞书欣 (Ma Boqian returns to Guan Yu Shuxin)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%9B%9E%E5%85%B3%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `36.2K 🔥` `+36%`
1. [唐宫奇案](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `36.2K 🔥` `+62%`
1. [苏翊鸣教科书般的1980 (Su Yiming’s textbook-like 1980)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%95%99%E7%A7%91%E4%B9%A6%E8%88%AC%E7%9A%841980%23) `36.2K 🔥` `+49%`
1. [朴成训看花滑团体赛 (Park Sung-hoon watches the figure skating team competition)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%88%90%E8%AE%AD%E7%9C%8B%E8%8A%B1%E6%BB%91%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `36.2K 🔥` `+31%`
1. [成何体统 看哭了](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E7%9C%8B%E5%93%AD%E4%BA%86%23) `36.2K 🔥` `+71%`
1. [苏翊鸣说身披五星红旗最骄傲](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%AF%B4%E8%BA%AB%E6%8A%AB%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%E6%9C%80%E9%AA%84%E5%82%B2%23) `36.2K 🔥` `+72%`
1. [日本裁判 (Japanese referee)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A3%81%E5%88%A4%23) `137.9K 🔥`
1. [花样滑冰团体赛 (Figure skating team competition)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%A0%B7%E6%BB%91%E5%86%B0%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `36.2K 🔥`
1. [白鹿 我选蒋奇明 (Bailu I choose Jiang Qiming)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%88%91%E9%80%89%E8%92%8B%E5%A5%87%E6%98%8E%23) `37.2K 🔥` `-36%`

Updated at 2026-02-08 07:32:35

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
