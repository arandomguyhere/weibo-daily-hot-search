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

1. [米兰大跳台 摔了好多人 (Many people fell on the Milan diving platform)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%A4%A7%E8%B7%B3%E5%8F%B0%20%E6%91%94%E4%BA%86%E5%A5%BD%E5%A4%9A%E4%BA%BA%23) `22.7K 🔥` `NEW`
1. [苏翊鸣与父母拥抱](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%8E%E7%88%B6%E6%AF%8D%E6%8B%A5%E6%8A%B1%23) `22.4K 🔥` `NEW`
1. [只有苏翊鸣两次站上领奖台](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%A4%E6%AC%A1%E7%AB%99%E4%B8%8A%E9%A2%86%E5%A5%96%E5%8F%B0%23) `22.3K 🔥` `NEW`
1. [苏翊鸣说身披五星红旗最骄傲](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%AF%B4%E8%BA%AB%E6%8A%AB%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%E6%9C%80%E9%AA%84%E5%82%B2%23) `19.4K 🔥` `NEW`
1. [原来网感真的能练出来](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%BD%91%E6%84%9F%E7%9C%9F%E7%9A%84%E8%83%BD%E7%BB%83%E5%87%BA%E6%9D%A5%23) `19.2K 🔥` `NEW`
1. [川大博导被举报83页材料公开 (Sichuan University PhD supervisor was reported to have made 83 pages of materials public)](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E5%A4%A7%E5%8D%9A%E5%AF%BC%E8%A2%AB%E4%B8%BE%E6%8A%A583%E9%A1%B5%E6%9D%90%E6%96%99%E5%85%AC%E5%BC%80%23) `45.7K 🔥` `+22%`
1. [苏翊鸣集齐冬奥会金银铜牌 (Su Yiming collects gold, silver and bronze medals at Winter Olympics)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E9%9B%86%E9%BD%90%E5%86%AC%E5%A5%A5%E4%BC%9A%E9%87%91%E9%93%B6%E9%93%9C%E7%89%8C%23) `44.9K 🔥` `+30%`
1. [11年了大姐还在骂明台 (It’s been 11 years and my eldest sister is still scolding Mingtai)](https://s.weibo.com/weibo?q=%2311%E5%B9%B4%E4%BA%86%E5%A4%A7%E5%A7%90%E8%BF%98%E5%9C%A8%E9%AA%82%E6%98%8E%E5%8F%B0%23) `31.7K 🔥` `+28%`
1. [脚臭的人洗脚时建议加点盐](https://s.weibo.com/weibo?q=%23%E8%84%9A%E8%87%AD%E7%9A%84%E4%BA%BA%E6%B4%97%E8%84%9A%E6%97%B6%E5%BB%BA%E8%AE%AE%E5%8A%A0%E7%82%B9%E7%9B%90%23) `19.6K 🔥` `+21%`
1. [日本裁判](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A3%81%E5%88%A4%23) `142.2K 🔥`
1. [中国元素绽放米兰冬奥舞台 (Chinese elements bloom on the Milan Winter Olympics stage)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%83%E7%B4%A0%E7%BB%BD%E6%94%BE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%88%9E%E5%8F%B0%23) `106.2K 🔥`
1. [92岁老人集装箱离世留下19万存款 (92-year-old man died in a container and left a deposit of 190,000)](https://s.weibo.com/weibo?q=%2392%E5%B2%81%E8%80%81%E4%BA%BA%E9%9B%86%E8%A3%85%E7%AE%B1%E7%A6%BB%E4%B8%96%E7%95%99%E4%B8%8B19%E4%B8%87%E5%AD%98%E6%AC%BE%23) `36.5K 🔥`
1. [男子因1条评论杀害2人 (Man kills 2 people over 1 comment)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A01%E6%9D%A1%E8%AF%84%E8%AE%BA%E6%9D%80%E5%AE%B32%E4%BA%BA%23) `36.5K 🔥`
1. [朴成训看花滑团体赛 (Park Sung-hoon watches the figure skating team competition)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%88%90%E8%AE%AD%E7%9C%8B%E8%8A%B1%E6%BB%91%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `36.3K 🔥`
1. [苏翊鸣 触雪](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%20%E8%A7%A6%E9%9B%AA%23) `31.1K 🔥`
1. [成何体统 (In what manner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `30.4K 🔥`
1. [芒果女主持上新了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%B8%8A%E6%96%B0%E4%BA%86%23) `29.7K 🔥`
1. [Bin自拍晒身材照](https://s.weibo.com/weibo?q=%23Bin%E8%87%AA%E6%8B%8D%E6%99%92%E8%BA%AB%E6%9D%90%E7%85%A7%23) `28.2K 🔥`
1. [天津首例不满16岁未成年人被行拘 (Tianjin’s first case of minor under 16 being detained)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E9%A6%96%E4%BE%8B%E4%B8%8D%E6%BB%A116%E5%B2%81%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `28.1K 🔥`
1. [乌克兰紧急求助波兰 (Ukraine seeks emergency help from Poland)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E7%B4%A7%E6%80%A5%E6%B1%82%E5%8A%A9%E6%B3%A2%E5%85%B0%23) `25.3K 🔥`
1. [马伯骞回关虞书欣 (Ma Boqian returns to Guan Yu Shuxin)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%9B%9E%E5%85%B3%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `23.7K 🔥`
1. [山西朔州车间爆炸已致7人遇难 (Explosion in Shanxi Shuozhou workshop kills 7 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%9C%94%E5%B7%9E%E8%BD%A6%E9%97%B4%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B47%E4%BA%BA%E9%81%87%E9%9A%BE%23) `23.1K 🔥`
1. [男子网购椅子竟多出15公斤银板 (Man buys chairs online but ends up with 15 kilograms more silver plate)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%AD%E6%A4%85%E5%AD%90%E7%AB%9F%E5%A4%9A%E5%87%BA15%E5%85%AC%E6%96%A4%E9%93%B6%E6%9D%BF%23) `22.9K 🔥`
1. [甲状腺是怎么一步一步失控的](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%98%AF%E6%80%8E%E4%B9%88%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E5%A4%B1%E6%8E%A7%E7%9A%84%23) `22.6K 🔥`
1. [单板大跳台好卷 (Great single board jumping platform)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%A5%BD%E5%8D%B7%23) `22.4K 🔥`
1. [单板滑雪决赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E5%86%B3%E8%B5%9B%23) `22.1K 🔥`
1. [白鹿 我选蒋奇明 (Bailu I choose Jiang Qiming)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%88%91%E9%80%89%E8%92%8B%E5%A5%87%E6%98%8E%23) `21.8K 🔥`
1. [林诗栋惨遭逆转无缘4强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%83%A8%E9%81%AD%E9%80%86%E8%BD%AC%E6%97%A0%E7%BC%984%E5%BC%BA%23) `20.2K 🔥`
1. [生命树张扬去世 (The tree of life Zhang Yang passed away)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%BC%A0%E6%89%AC%E5%8E%BB%E4%B8%96%23) `19.3K 🔥`
1. [唐宫奇案](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `19.2K 🔥`
1. [2026年米兰科尔蒂纳冬奥会 (2026 Milan Cortina Winter Olympics)](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E7%B1%B3%E5%85%B0%E7%A7%91%E5%B0%94%E8%92%82%E7%BA%B3%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `19.2K 🔥`
1. [立威廉得知恶耗时才49岁](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%E5%BE%97%E7%9F%A5%E6%81%B6%E8%80%97%E6%97%B6%E6%89%8D49%E5%B2%81%23) `19.2K 🔥`
1. [周深舞台光芒万丈 (Zhou Shen's stage shines brightly)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E8%88%9E%E5%8F%B0%E5%85%89%E8%8A%92%E4%B8%87%E4%B8%88%23) `19.2K 🔥`
1. [官方通报教师用手背打学生脸 (Official reports teacher slapped student in face with back of hand)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%95%99%E5%B8%88%E7%94%A8%E6%89%8B%E8%83%8C%E6%89%93%E5%AD%A6%E7%94%9F%E8%84%B8%23) `19.2K 🔥`
1. [白鹿穿高定录综艺 (White Deer Wears Haute Couture Variety Show)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A9%BF%E9%AB%98%E5%AE%9A%E5%BD%95%E7%BB%BC%E8%89%BA%23) `19.2K 🔥`
1. [谷爱凌第二轮75.30分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E8%BD%AE75.30%E5%88%86%23) `19.2K 🔥`
1. [苏翊鸣大跳台铜牌 (Su Yiming bronze medal in big platform)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%93%9C%E7%89%8C%23) `313.7K 🔥` `-37%`
1. [苏翊鸣大跳台高燃上场时刻 (Su Yiming's big diving show was a great moment on the stage.)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%AB%98%E7%87%83%E4%B8%8A%E5%9C%BA%E6%97%B6%E5%88%BB%23) `94.9K 🔥` `-68%`
1. [Bin](https://s.weibo.com/weibo?q=%23Bin%23) `74.1K 🔥` `-22%`
1. [金博洋84.15分](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B84.15%E5%88%86%23) `59.6K 🔥` `-43%`
1. [苏翊鸣决赛](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%86%B3%E8%B5%9B%23) `44.6K 🔥` `-30%`
1. [苏翊鸣第三跳80.25分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%B8%89%E8%B7%B380.25%E5%88%86%23) `41.0K 🔥` `-50%`
1. [花样滑冰团体赛 (Figure skating team competition)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%A0%B7%E6%BB%91%E5%86%B0%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `33.6K 🔥` `-29%`
1. [苏翊鸣第二跳73.75分 (Su Yiming’s second jump scored 73.75 points)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%BA%8C%E8%B7%B373.75%E5%88%86%23) `32.0K 🔥` `-35%`
1. [苏翊鸣太帅了 (Su Yiming is so handsome)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%AA%E5%B8%85%E4%BA%86%23) `28.3K 🔥` `-31%`
1. [苏翊鸣第一跳1980](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%B8%80%E8%B7%B31980%23) `27.4K 🔥` `-27%`
1. [中国队米兰首枚奖牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%B1%B3%E5%85%B0%E9%A6%96%E6%9E%9A%E5%A5%96%E7%89%8C%23) `26.1K 🔥` `-26%`
1. [谷爱凌第一滑摔倒 (Gu Ailing fell down in her first slip)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `24.9K 🔥` `-26%`
1. [金博洋短节目](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B%E7%9F%AD%E8%8A%82%E7%9B%AE%23) `23.0K 🔥` `-46%`
1. [成何体统 癫剧 (What kind of body is epileptic drama)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E7%99%AB%E5%89%A7%23) `19.9K 🔥` `-22%`

Updated at 2026-02-08 05:31:38

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
