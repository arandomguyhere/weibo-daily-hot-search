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

1. [女子单板U池决赛 (Women's Snowboard U Pool Finals)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%95%E6%9D%BFU%E6%B1%A0%E5%86%B3%E8%B5%9B%23) `100.5K 🔥` `NEW`
1. [范可新晋级500米半决赛](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%8F%AF%E6%96%B0%E6%99%8B%E7%BA%A7500%E7%B1%B3%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `50.6K 🔥` `NEW`
1. [武绍桐第二滑70.25分](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%BB%8D%E6%A1%90%E7%AC%AC%E4%BA%8C%E6%BB%9170.25%E5%88%86%23) `50.5K 🔥` `NEW`
1. [王欣然犯规无缘晋级](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AC%A3%E7%84%B6%E7%8A%AF%E8%A7%84%E6%97%A0%E7%BC%98%E6%99%8B%E7%BA%A7%23) `50.5K 🔥` `NEW`
1. [任子威说要当心韩国选手](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%AF%B4%E8%A6%81%E5%BD%93%E5%BF%83%E9%9F%A9%E5%9B%BD%E9%80%89%E6%89%8B%23) `38.9K 🔥` `NEW`
1. [蔡雪桐的冬奥松弛感](https://s.weibo.com/weibo?q=%23%E8%94%A1%E9%9B%AA%E6%A1%90%E7%9A%84%E5%86%AC%E5%A5%A5%E6%9D%BE%E5%BC%9B%E6%84%9F%23) `32.8K 🔥` `NEW`
1. [张楚桐犯规](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A5%9A%E6%A1%90%E7%8A%AF%E8%A7%84%23) `30.6K 🔥` `NEW`
1. [武绍桐U池首轮67.75分](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%BB%8D%E6%A1%90U%E6%B1%A0%E9%A6%96%E8%BD%AE67.75%E5%88%86%23) `23.3K 🔥` `NEW`
1. [米兰冬奥会冰壶女子团体赛](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%BC%9A%E5%86%B0%E5%A3%B6%E5%A5%B3%E5%AD%90%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `21.5K 🔥` `NEW`
1. [蔡雪桐第一滑73分](https://s.weibo.com/weibo?q=%23%E8%94%A1%E9%9B%AA%E6%A1%90%E7%AC%AC%E4%B8%80%E6%BB%9173%E5%88%86%23) `18.0K 🔥` `NEW`
1. [左航有新朋友来家一起过年了 (Zuo Hang has new friends coming to celebrate the New Year with him)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%9C%89%E6%96%B0%E6%9C%8B%E5%8F%8B%E6%9D%A5%E5%AE%B6%E4%B8%80%E8%B5%B7%E8%BF%87%E5%B9%B4%E4%BA%86%23) `16.4K 🔥` `NEW`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `56.9K 🔥` `+35%`
1. [虞书欣衣帽间](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A1%A3%E5%B8%BD%E9%97%B4%23) `50.1K 🔥` `+26%`
1. [Deepseek被指变冷淡了](https://s.weibo.com/weibo?q=%23Deepseek%E8%A2%AB%E6%8C%87%E5%8F%98%E5%86%B7%E6%B7%A1%E4%BA%86%23) `71.4K 🔥`
1. [微博之夜 台上顶流台下好友](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E5%8F%B0%E4%B8%8A%E9%A1%B6%E6%B5%81%E5%8F%B0%E4%B8%8B%E5%A5%BD%E5%8F%8B%23) `48.6K 🔥`
1. [10岁女生校内晕倒称遭多名男生殴打 (A 10-year-old girl fainted at school and said she was beaten by multiple boys)](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E5%A5%B3%E7%94%9F%E6%A0%A1%E5%86%85%E6%99%95%E5%80%92%E7%A7%B0%E9%81%AD%E5%A4%9A%E5%90%8D%E7%94%B7%E7%94%9F%E6%AE%B4%E6%89%93%23) `46.6K 🔥`
1. [王者荣耀马年全明星表演赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E9%A9%AC%E5%B9%B4%E5%85%A8%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `35.2K 🔥`
1. [律师解读杨幂新增60件告黑案](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E6%9D%A8%E5%B9%82%E6%96%B0%E5%A2%9E60%E4%BB%B6%E5%91%8A%E9%BB%91%E6%A1%88%23) `34.3K 🔥`
1. [宋亚轩遇到了最懂他的刘耀文 (Song Yaxuan met Liu Yaowen who understood him best)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%80%E6%87%82%E4%BB%96%E7%9A%84%E5%88%98%E8%80%80%E6%96%87%23) `34.2K 🔥`
1. [吃烤全羊发现大量粪便店家赔偿1500 (After eating a roasted whole lamb and finding a lot of feces, the store compensated me 1,500)](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%83%A4%E5%85%A8%E7%BE%8A%E5%8F%91%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%B2%AA%E4%BE%BF%E5%BA%97%E5%AE%B6%E8%B5%94%E5%81%BF1500%23) `32.8K 🔥`
1. [男子就医喊饿竟是全身血液已近流干 (A man went to the doctor and complained that he was hungry, but it turned out that the blood in his body was almost dry)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%96%8A%E9%A5%BF%E7%AB%9F%E6%98%AF%E5%85%A8%E8%BA%AB%E8%A1%80%E6%B6%B2%E5%B7%B2%E8%BF%91%E6%B5%81%E5%B9%B2%23) `32.3K 🔥`
1. [远洋船员持菜刀砍杀船长后分尸抛海](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E6%B4%8B%E8%88%B9%E5%91%98%E6%8C%81%E8%8F%9C%E5%88%80%E7%A0%8D%E6%9D%80%E8%88%B9%E9%95%BF%E5%90%8E%E5%88%86%E5%B0%B8%E6%8A%9B%E6%B5%B7%23) `31.6K 🔥`
1. [年少有为](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%23) `28.4K 🔥`
1. [六国联名反对欧盟加大对华限制 (Six countries jointly oppose the EU's increased restrictions on China)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%9B%BD%E8%81%94%E5%90%8D%E5%8F%8D%E5%AF%B9%E6%AC%A7%E7%9B%9F%E5%8A%A0%E5%A4%A7%E5%AF%B9%E5%8D%8E%E9%99%90%E5%88%B6%23) `23.7K 🔥`
1. [8岁小孩姐徒步117公里回老家](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%B0%8F%E5%AD%A9%E5%A7%90%E5%BE%92%E6%AD%A5117%E5%85%AC%E9%87%8C%E5%9B%9E%E8%80%81%E5%AE%B6%23) `23.6K 🔥`
1. [唐宫奇案 (Strange Cases in Tang Palace)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `21.5K 🔥`
1. [微博之夜 绝美打光 (Weibo night, beautiful lighting)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E7%BB%9D%E7%BE%8E%E6%89%93%E5%85%89%23) `21.3K 🔥`
1. [我家的C位年货](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E7%9A%84C%E4%BD%8D%E5%B9%B4%E8%B4%A7%23) `59.7K 🔥` `-27%`
1. [丞磊在飞机上帮王楚然剔牙](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E5%B8%AE%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%94%E7%89%99%23) `56.1K 🔥` `-31%`
1. [王者荣耀超话爆了 (King of Glory is super exciting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%B6%85%E8%AF%9D%E7%88%86%E4%BA%86%23) `52.5K 🔥` `-52%`
1. [22岁主播每天焊妆两次确诊肺炎 (The 22-year-old anchor was diagnosed with pneumonia after welding makeup twice a day)](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E4%B8%BB%E6%92%AD%E6%AF%8F%E5%A4%A9%E7%84%8A%E5%A6%86%E4%B8%A4%E6%AC%A1%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%82%8E%23) `50.8K 🔥` `-28%`
1. [连续五年都没有年三十 (No New Year's Eve for five consecutive years)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%BA%94%E5%B9%B4%E9%83%BD%E6%B2%A1%E6%9C%89%E5%B9%B4%E4%B8%89%E5%8D%81%23) `48.5K 🔥` `-65%`
1. [速度滑冰女子5000米](https://s.weibo.com/weibo?q=%23%E9%80%9F%E5%BA%A6%E6%BB%91%E5%86%B0%E5%A5%B3%E5%AD%905000%E7%B1%B3%23) `34.6K 🔥` `-44%`
1. [意大利老将5000米0.1秒绝杀夺金](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E8%80%81%E5%B0%865000%E7%B1%B30.1%E7%A7%92%E7%BB%9D%E6%9D%80%E5%A4%BA%E9%87%91%23) `31.8K 🔥` `-60%`
1. [蒋欣 当年真的错怪你了 (Jiang Xin, I really blamed you wrongly back then)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `29.1K 🔥` `-28%`
1. [坏果太多胖东来下架全部智利车厘子](https://s.weibo.com/weibo?q=%23%E5%9D%8F%E6%9E%9C%E5%A4%AA%E5%A4%9A%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%8B%E6%9E%B6%E5%85%A8%E9%83%A8%E6%99%BA%E5%88%A9%E8%BD%A6%E5%8E%98%E5%AD%90%23) `27.1K 🔥` `-28%`
1. [母亲花6万为智力残障儿子娶外籍妻子](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%B16%E4%B8%87%E4%B8%BA%E6%99%BA%E5%8A%9B%E6%AE%8B%E9%9A%9C%E5%84%BF%E5%AD%90%E5%A8%B6%E5%A4%96%E7%B1%8D%E5%A6%BB%E5%AD%90%23) `23.7K 🔥` `-27%`
1. [中国雪橇队米兰冬奥书写新历史 (Chinese bobsled team writes new history at Milan Winter Olympics)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%9B%AA%E6%A9%87%E9%98%9F%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%B9%A6%E5%86%99%E6%96%B0%E5%8E%86%E5%8F%B2%23) `20.6K 🔥` `-60%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `19.1K 🔥` `-28%`
1. [36岁何穗状态 (36-year-old He Sui's status)](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E4%BD%95%E7%A9%97%E7%8A%B6%E6%80%81%23) `19.0K 🔥` `-24%`
1. [张凌赫粉丝爬半天山拍了三遍林允](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B2%89%E4%B8%9D%E7%88%AC%E5%8D%8A%E5%A4%A9%E5%B1%B1%E6%8B%8D%E4%BA%86%E4%B8%89%E9%81%8D%E6%9E%97%E5%85%81%23) `18.9K 🔥` `-27%`
1. [肥猫郑则仕减重70斤感谢周润发](https://s.weibo.com/weibo?q=%23%E8%82%A5%E7%8C%AB%E9%83%91%E5%88%99%E4%BB%95%E5%87%8F%E9%87%8D70%E6%96%A4%E6%84%9F%E8%B0%A2%E5%91%A8%E6%B6%A6%E5%8F%91%23) `18.4K 🔥` `-27%`
1. [女子火车上熟睡8000元手机被偷 (Woman's 8,000 yuan mobile phone stolen while sleeping on train)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%81%AB%E8%BD%A6%E4%B8%8A%E7%86%9F%E7%9D%A18000%E5%85%83%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%81%B7%23) `18.0K 🔥` `-28%`
1. [33岁男子开特斯拉跑货拉拉 (33-year-old man drives Tesla to Lala Lalam)](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E7%94%B7%E5%AD%90%E5%BC%80%E7%89%B9%E6%96%AF%E6%8B%89%E8%B7%91%E8%B4%A7%E6%8B%89%E6%8B%89%23) `17.9K 🔥` `-29%`
1. [太平年看哭了](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E7%9C%8B%E5%93%AD%E4%BA%86%23) `17.8K 🔥` `-29%`
1. [太平年大结局](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E5%A4%A7%E7%BB%93%E5%B1%80%23) `16.4K 🔥` `-45%`
1. [米兰冬奥中国单板双姝逐梦](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%B8%AD%E5%9B%BD%E5%8D%95%E6%9D%BF%E5%8F%8C%E5%A7%9D%E9%80%90%E6%A2%A6%23) `15.9K 🔥` `-84%`
1. [蔡徐坤回复无畏](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E5%9B%9E%E5%A4%8D%E6%97%A0%E7%95%8F%23) `15.7K 🔥` `-48%`
1. [檀健次干净白皙皮肤肌肉线条](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%B9%B2%E5%87%80%E7%99%BD%E7%9A%99%E7%9A%AE%E8%82%A4%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23) `15.6K 🔥` `-38%`
1. [马嘉祺黑西装live](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%BB%91%E8%A5%BF%E8%A3%85live%23) `15.5K 🔥` `-38%`

Updated at 2026-02-13 03:38:58

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
