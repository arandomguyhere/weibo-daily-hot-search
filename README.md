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

1. [耳机左右耳电量未解之谜 (The mystery of the battery capacity of the left and right earphones)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%9C%BA%E5%B7%A6%E5%8F%B3%E8%80%B3%E7%94%B5%E9%87%8F%E6%9C%AA%E8%A7%A3%E4%B9%8B%E8%B0%9C%23) `833.9K 🔥` `NEW`
1. [白海豚正式登陆](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%AD%A3%E5%BC%8F%E7%99%BB%E9%99%86%23) `549.8K 🔥` `NEW`
1. [上海人非必要不出门](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%BA%E9%9D%9E%E5%BF%85%E8%A6%81%E4%B8%8D%E5%87%BA%E9%97%A8%23) `370.1K 🔥` `NEW`
1. [16岁女孩连续多杯奶茶后进ICU](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%BF%9E%E7%BB%AD%E5%A4%9A%E6%9D%AF%E5%A5%B6%E8%8C%B6%E5%90%8E%E8%BF%9BICU%23) `368.3K 🔥` `NEW`
1. [郑雅贤回应裙子穿反了](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%9B%85%E8%B4%A4%E5%9B%9E%E5%BA%94%E8%A3%99%E5%AD%90%E7%A9%BF%E5%8F%8D%E4%BA%86%23) `360.3K 🔥` `NEW`
1. [上海今明两天有出现龙卷潜势](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BB%8A%E6%98%8E%E4%B8%A4%E5%A4%A9%E6%9C%89%E5%87%BA%E7%8E%B0%E9%BE%99%E5%8D%B7%E6%BD%9C%E5%8A%BF%23) `339.7K 🔥` `NEW`
1. [欢迎来龙餐馆 笑半场哭半场](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%20%E7%AC%91%E5%8D%8A%E5%9C%BA%E5%93%AD%E5%8D%8A%E5%9C%BA%23) `334.6K 🔥` `NEW`
1. [花开锦绣 强剧情](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%20%E5%BC%BA%E5%89%A7%E6%83%85%23) `332.6K 🔥` `NEW`
1. [钟睒睒认为电商平台本质就是中间商](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%9D%92%E7%9D%92%E8%AE%A4%E4%B8%BA%E7%94%B5%E5%95%86%E5%B9%B3%E5%8F%B0%E6%9C%AC%E8%B4%A8%E5%B0%B1%E6%98%AF%E4%B8%AD%E9%97%B4%E5%95%86%23) `318.3K 🔥` `NEW`
1. [白海豚提前登陆 (White dolphins land early)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23) `4.3M 🔥` `+117%`
1. [上海市要求及时果断停课停工](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B8%82%E8%A6%81%E6%B1%82%E5%8F%8A%E6%97%B6%E6%9E%9C%E6%96%AD%E5%81%9C%E8%AF%BE%E5%81%9C%E5%B7%A5%23) `1.6M 🔥` `+59%`
1. [台风琵鹭来了 (Typhoon Spoonbill is coming)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%90%B5%E9%B9%AD%E6%9D%A5%E4%BA%86%23) `831.1K 🔥` `+64%`
1. [苏醒 控制内娱几乎实锤了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%20%E6%8E%A7%E5%88%B6%E5%86%85%E5%A8%B1%E5%87%A0%E4%B9%8E%E5%AE%9E%E9%94%A4%E4%BA%86%23) `733.7K 🔥` `+46%`
1. [天云长文解释](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%BA%91%E9%95%BF%E6%96%87%E8%A7%A3%E9%87%8A%23) `345.5K 🔥` `+37%`
1. [披哥6初舞台歌单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A56%E5%88%9D%E8%88%9E%E5%8F%B0%E6%AD%8C%E5%8D%95%23) `336.0K 🔥` `+25%`
1. [Flandre愿意和Bin轮换](https://s.weibo.com/weibo?q=%23Flandre%E6%84%BF%E6%84%8F%E5%92%8CBin%E8%BD%AE%E6%8D%A2%23) `331.0K 🔥` `+23%`
1. [迪丽热巴周星驰刘嘉玲合照](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%91%A8%E6%98%9F%E9%A9%B0%E5%88%98%E5%98%89%E7%8E%B2%E5%90%88%E7%85%A7%23) `328.3K 🔥` `+40%`
1. [白鹿cha了印尼咳嗽舞](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BFcha%E4%BA%86%E5%8D%B0%E5%B0%BC%E5%92%B3%E5%97%BD%E8%88%9E%23) `324.2K 🔥` `+42%`
1. [黄仁勋带崩海力士](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%B8%A6%E5%B4%A9%E6%B5%B7%E5%8A%9B%E5%A3%AB%23) `321.1K 🔥` `+45%`
1. [一组数据读懂中国经济底气 (A set of data to understand China’s economic confidence)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E8%AF%BB%E6%87%82%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%BA%95%E6%B0%94%23) `943.7K 🔥`
1. [中国留学生写差评的方式太隐晦了 (The way Chinese students write negative reviews is too subtle)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%86%99%E5%B7%AE%E8%AF%84%E7%9A%84%E6%96%B9%E5%BC%8F%E5%A4%AA%E9%9A%90%E6%99%A6%E4%BA%86%23) `735.4K 🔥`
1. [工资5000能存4999的吃法 (How to save 4999 with a salary of 5000)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%845000%E8%83%BD%E5%AD%984999%E7%9A%84%E5%90%83%E6%B3%95%23) `590.6K 🔥`
1. [老坛酸菜 脚踩 (Laotan pickled cabbage)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%9D%9B%E9%85%B8%E8%8F%9C%20%E8%84%9A%E8%B8%A9%23) `443.1K 🔥`
1. [田曦薇没刘海差点认不出来 (Tian Xiwei is almost unrecognizable without bangs)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E5%88%98%E6%B5%B7%E5%B7%AE%E7%82%B9%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `434.5K 🔥`
1. [寒山寺猫咪吵架回头全是人](https://s.weibo.com/weibo?q=%23%E5%AF%92%E5%B1%B1%E5%AF%BA%E7%8C%AB%E5%92%AA%E5%90%B5%E6%9E%B6%E5%9B%9E%E5%A4%B4%E5%85%A8%E6%98%AF%E4%BA%BA%23) `429.2K 🔥`
1. [在泰被杀男子是中国豪华游艇商之子](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B3%B0%E8%A2%AB%E6%9D%80%E7%94%B7%E5%AD%90%E6%98%AF%E4%B8%AD%E5%9B%BD%E8%B1%AA%E5%8D%8E%E6%B8%B8%E8%89%87%E5%95%86%E4%B9%8B%E5%AD%90%23) `422.7K 🔥`
1. [花开锦绣 好看 (Beautiful flowers blooming)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%20%E5%A5%BD%E7%9C%8B%23) `408.5K 🔥`
1. [BLG官宣Flandre加入 (BLG officially announced that Flandre has joined)](https://s.weibo.com/weibo?q=%23BLG%E5%AE%98%E5%AE%A3Flandre%E5%8A%A0%E5%85%A5%23) `372.3K 🔥`
1. [程潇身材比例](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E8%BA%AB%E6%9D%90%E6%AF%94%E4%BE%8B%23) `358.4K 🔥`
1. [大鹏代杨幂发言](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%B9%8F%E4%BB%A3%E6%9D%A8%E5%B9%82%E5%8F%91%E8%A8%80%23) `355.5K 🔥`
1. [宇树科技中一签需缴7.54万元](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E4%B8%80%E7%AD%BE%E9%9C%80%E7%BC%B47.54%E4%B8%87%E5%85%83%23) `354.2K 🔥`
1. [披荆斩棘阵容官宣 (Official announcement of the lineup to overcome all obstacles)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `347.9K 🔥`
1. [张含韵背了杨博文痛包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%90%AB%E9%9F%B5%E8%83%8C%E4%BA%86%E6%9D%A8%E5%8D%9A%E6%96%87%E7%97%9B%E5%8C%85%23) `341.6K 🔥`
1. [儿子去世老人要查孙子血缘儿媳拒绝](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E8%A6%81%E6%9F%A5%E5%AD%99%E5%AD%90%E8%A1%80%E7%BC%98%E5%84%BF%E5%AA%B3%E6%8B%92%E7%BB%9D%23) `338.9K 🔥`
1. [韩雨彤 鼻子 (Han Yutong nose)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%20%E9%BC%BB%E5%AD%90%23) `329.0K 🔥`
1. [上海中心大厦千吨阻尼器摆动明显 (Shanghai Tower's 1,000-ton damper swings significantly)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%AD%E5%BF%83%E5%A4%A7%E5%8E%A6%E5%8D%83%E5%90%A8%E9%98%BB%E5%B0%BC%E5%99%A8%E6%91%86%E5%8A%A8%E6%98%8E%E6%98%BE%23) `326.6K 🔥`
1. [iPhone17下周或涨价](https://s.weibo.com/weibo?q=%23iPhone17%E4%B8%8B%E5%91%A8%E6%88%96%E6%B6%A8%E4%BB%B7%23) `322.7K 🔥`
1. [九门吴老狗变干尸 (Jiumen Wu old dog turns into mummy)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%90%B4%E8%80%81%E7%8B%97%E5%8F%98%E5%B9%B2%E5%B0%B8%23) `316.4K 🔥`
1. [刘耀文百花奖人没到但感言到了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%99%BE%E8%8A%B1%E5%A5%96%E4%BA%BA%E6%B2%A1%E5%88%B0%E4%BD%86%E6%84%9F%E8%A8%80%E5%88%B0%E4%BA%86%23) `445.7K 🔥` `-36%`
1. [原来性格还会影响一个人的声音](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%80%A7%E6%A0%BC%E8%BF%98%E4%BC%9A%E5%BD%B1%E5%93%8D%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E5%A3%B0%E9%9F%B3%23) `425.0K 🔥` `-55%`
1. [白海豚 龙卷风](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `370.9K 🔥` `-39%`
1. [金智秀直播力挺哥哥 (Kim Ji Soo supports her brother during live broadcast)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E7%9B%B4%E6%92%AD%E5%8A%9B%E6%8C%BA%E5%93%A5%E5%93%A5%23) `365.6K 🔥` `-26%`
1. [月经前的9个身体信号](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%89%8D%E7%9A%849%E4%B8%AA%E8%BA%AB%E4%BD%93%E4%BF%A1%E5%8F%B7%23) `364.0K 🔥` `-26%`
1. [BLG经理谈Bin和Flandre](https://s.weibo.com/weibo?q=%23BLG%E7%BB%8F%E7%90%86%E8%B0%88Bin%E5%92%8CFlandre%23) `362.6K 🔥` `-37%`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `359.1K 🔥` `-28%`
1. [小巷人家披荆斩棘团建](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%A2%E5%BB%BA%23) `352.6K 🔥` `-29%`
1. [折叠屏iPhone配色](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0%E5%B1%8FiPhone%E9%85%8D%E8%89%B2%23) `350.2K 🔥` `-30%`
1. [王传君潮得有点不敢认了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%BD%AE%E5%BE%97%E6%9C%89%E7%82%B9%E4%B8%8D%E6%95%A2%E8%AE%A4%E4%BA%86%23) `349.1K 🔥` `-22%`
1. [孙颖莎前十中唯一运动员](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%89%8D%E5%8D%81%E4%B8%AD%E5%94%AF%E4%B8%80%E8%BF%90%E5%8A%A8%E5%91%98%23) `343.0K 🔥` `-31%`
1. [终末地梨诺](https://s.weibo.com/weibo?q=%23%E7%BB%88%E6%9C%AB%E5%9C%B0%E6%A2%A8%E8%AF%BA%23) `319.6K 🔥` `-37%`

Updated at 2026-08-09 18:16:27

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
