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

1. [中国新型战机超视距猎杀 (China's new fighter jet hunts beyond visual range)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E5%9E%8B%E6%88%98%E6%9C%BA%E8%B6%85%E8%A7%86%E8%B7%9D%E7%8C%8E%E6%9D%80%23) `391.3K 🔥` `NEW`
1. [只有真母单才懂这段吐槽有多真实](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E7%9C%9F%E6%AF%8D%E5%8D%95%E6%89%8D%E6%87%82%E8%BF%99%E6%AE%B5%E5%90%90%E6%A7%BD%E6%9C%89%E5%A4%9A%E7%9C%9F%E5%AE%9E%23) `120.1K 🔥` `NEW`
1. [远离只爱你功能性的人](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E7%A6%BB%E5%8F%AA%E7%88%B1%E4%BD%A0%E5%8A%9F%E8%83%BD%E6%80%A7%E7%9A%84%E4%BA%BA%23) `92.6K 🔥` `NEW`
1. [疑似第一批解暑冬瓜受害者出现了](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%AC%AC%E4%B8%80%E6%89%B9%E8%A7%A3%E6%9A%91%E5%86%AC%E7%93%9C%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `92.5K 🔥` `NEW`
1. [王俊凯老鸭汤到底有多好喝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%80%81%E9%B8%AD%E6%B1%A4%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E5%A5%BD%E5%96%9D%23) `92.4K 🔥` `NEW`
1. [陈瑶霍仙姑下线了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E9%9C%8D%E4%BB%99%E5%A7%91%E4%B8%8B%E7%BA%BF%E4%BA%86%23) `92.4K 🔥` `NEW`
1. [伊朗用了新武器](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E4%BA%86%E6%96%B0%E6%AD%A6%E5%99%A8%23) `92.3K 🔥` `NEW`
1. [赵心童8比10威尔逊](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A58%E6%AF%9410%E5%A8%81%E5%B0%94%E9%80%8A%23) `92.3K 🔥` `NEW`
1. [巨型章鱼紧紧吸在男子背上不肯下来](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%9E%8B%E7%AB%A0%E9%B1%BC%E7%B4%A7%E7%B4%A7%E5%90%B8%E5%9C%A8%E7%94%B7%E5%AD%90%E8%83%8C%E4%B8%8A%E4%B8%8D%E8%82%AF%E4%B8%8B%E6%9D%A5%23) `92.2K 🔥` `NEW`
1. [杭州出现罕见雨幡](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%87%BA%E7%8E%B0%E7%BD%95%E8%A7%81%E9%9B%A8%E5%B9%A1%23) `92.1K 🔥` `NEW`
1. [房主任改变不了女儿重复自己的命运 (Director Fang cannot change his daughter’s fate of repeating himself)](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%94%B9%E5%8F%98%E4%B8%8D%E4%BA%86%E5%A5%B3%E5%84%BF%E9%87%8D%E5%A4%8D%E8%87%AA%E5%B7%B1%E7%9A%84%E5%91%BD%E8%BF%90%23) `92.1K 🔥` `NEW`
1. [赵丽颖版尹新月为何成了白月光](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%89%88%E5%B0%B9%E6%96%B0%E6%9C%88%E4%B8%BA%E4%BD%95%E6%88%90%E4%BA%86%E7%99%BD%E6%9C%88%E5%85%89%23) `92.0K 🔥` `NEW`
1. [马斯克关注DeepSeek账号](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%85%B3%E6%B3%A8DeepSeek%E8%B4%A6%E5%8F%B7%23) `92.0K 🔥` `NEW`
1. [五公划区](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E5%88%92%E5%8C%BA%23) `91.9K 🔥` `NEW`
1. [梁靖崑儿子全场最燃](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E5%84%BF%E5%AD%90%E5%85%A8%E5%9C%BA%E6%9C%80%E7%87%83%23) `91.9K 🔥` `NEW`
1. [陈瑶演我看陈伟霆曾舜晞](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%BC%94%E6%88%91%E7%9C%8B%E9%99%88%E4%BC%9F%E9%9C%86%E6%9B%BE%E8%88%9C%E6%99%9E%23) `91.9K 🔥` `NEW`
1. [丁程鑫彩排戴着刘宇宁送的手串](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BD%A9%E6%8E%92%E6%88%B4%E7%9D%80%E5%88%98%E5%AE%87%E5%AE%81%E9%80%81%E7%9A%84%E6%89%8B%E4%B8%B2%23) `91.8K 🔥` `NEW`
1. [怀双胞胎1个流产1个105天后出生](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%8F%8C%E8%83%9E%E8%83%8E1%E4%B8%AA%E6%B5%81%E4%BA%A71%E4%B8%AA105%E5%A4%A9%E5%90%8E%E5%87%BA%E7%94%9F%23) `386.2K 🔥` `+90%`
1. [婚外胚胎案丈夫称患癌妻子是雷](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E4%B8%88%E5%A4%AB%E7%A7%B0%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E6%98%AF%E9%9B%B7%23) `284.5K 🔥` `+91%`
1. [奥德赛上座率](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `216.1K 🔥` `+66%`
1. [直观感受到什么是家道中落 (Intuitively feel what it means to have a poor family)](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BB%80%E4%B9%88%E6%98%AF%E5%AE%B6%E9%81%93%E4%B8%AD%E8%90%BD%23) `560.6K 🔥`
1. [房价还能重新上涨吗](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%BB%B7%E8%BF%98%E8%83%BD%E9%87%8D%E6%96%B0%E4%B8%8A%E6%B6%A8%E5%90%97%23) `167.6K 🔥`
1. [解放军建军99周年](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%BB%BA%E5%86%9B99%E5%91%A8%E5%B9%B4%23) `135.1K 🔥`
1. [公职人员停车受阻暴力损坏地锁](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E5%81%9C%E8%BD%A6%E5%8F%97%E9%98%BB%E6%9A%B4%E5%8A%9B%E6%8D%9F%E5%9D%8F%E5%9C%B0%E9%94%81%23) `130.6K 🔥`
1. [丈夫出轨做试管亲友劝原配接受现实 (Her husband cheated on her during in vitro fertilization, and her relatives and friends persuaded her first wife to accept the reality.)](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E5%81%9A%E8%AF%95%E7%AE%A1%E4%BA%B2%E5%8F%8B%E5%8A%9D%E5%8E%9F%E9%85%8D%E6%8E%A5%E5%8F%97%E7%8E%B0%E5%AE%9E%23) `466.1K 🔥` `-46%`
1. [曾舜晞说孟子义拍戏动过真感情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E8%AF%B4%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8B%8D%E6%88%8F%E5%8A%A8%E8%BF%87%E7%9C%9F%E6%84%9F%E6%83%85%23) `391.0K 🔥` `-42%`
1. [找对象的尽头是初高中同学](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AF%E5%88%9D%E9%AB%98%E4%B8%AD%E5%90%8C%E5%AD%A6%23) `296.3K 🔥` `-25%`
1. [气象局称发生超强厄尔尼诺概率在增大](https://s.weibo.com/weibo?q=%23%E6%B0%94%E8%B1%A1%E5%B1%80%E7%A7%B0%E5%8F%91%E7%94%9F%E8%B6%85%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E6%A6%82%E7%8E%87%E5%9C%A8%E5%A2%9E%E5%A4%A7%23) `269.4K 🔥` `-68%`
1. [雷军说晚安被指营销](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E6%99%9A%E5%AE%89%E8%A2%AB%E6%8C%87%E8%90%A5%E9%94%80%23) `246.8K 🔥` `-46%`
1. [房主任母女关系](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%AF%8D%E5%A5%B3%E5%85%B3%E7%B3%BB%23) `169.8K 🔥` `-34%`
1. [医生10级美颜照已换回正常](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F10%E7%BA%A7%E7%BE%8E%E9%A2%9C%E7%85%A7%E5%B7%B2%E6%8D%A2%E5%9B%9E%E6%AD%A3%E5%B8%B8%23) `166.9K 🔥` `-55%`
1. [出生时被抱错两女子错换37年人生 (Two women who were carried in the wrong hands at birth exchanged 37 years of their lives.)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E6%97%B6%E8%A2%AB%E6%8A%B1%E9%94%99%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%94%99%E6%8D%A237%E5%B9%B4%E4%BA%BA%E7%94%9F%23) `145.3K 🔥` `-35%`
1. [Bin Wenbo](https://s.weibo.com/weibo?q=%23Bin%20Wenbo%23) `139.4K 🔥` `-41%`
1. [31岁网文作者产子次日成半植物人](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E7%BD%91%E6%96%87%E4%BD%9C%E8%80%85%E4%BA%A7%E5%AD%90%E6%AC%A1%E6%97%A5%E6%88%90%E5%8D%8A%E6%A4%8D%E7%89%A9%E4%BA%BA%23) `138.8K 🔥` `-25%`
1. [发现赚钱方式对人影响很大](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%B5%9A%E9%92%B1%E6%96%B9%E5%BC%8F%E5%AF%B9%E4%BA%BA%E5%BD%B1%E5%93%8D%E5%BE%88%E5%A4%A7%23) `131.4K 🔥` `-23%`
1. [登机柜台出现了好小众词汇 (A niche word appeared at the check-in counter)](https://s.weibo.com/weibo?q=%23%E7%99%BB%E6%9C%BA%E6%9F%9C%E5%8F%B0%E5%87%BA%E7%8E%B0%E4%BA%86%E5%A5%BD%E5%B0%8F%E4%BC%97%E8%AF%8D%E6%B1%87%23) `120.1K 🔥` `-35%`
1. [人生是仅此一次的体验](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%98%AF%E4%BB%85%E6%AD%A4%E4%B8%80%E6%AC%A1%E7%9A%84%E4%BD%93%E9%AA%8C%23) `95.8K 🔥` `-37%`
1. [外婆朋友圈背景是床边一面墙](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%A9%86%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%83%8C%E6%99%AF%E6%98%AF%E5%BA%8A%E8%BE%B9%E4%B8%80%E9%9D%A2%E5%A2%99%23) `95.7K 🔥` `-26%`
1. [十个勤天将全员录制hi6](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%B0%86%E5%85%A8%E5%91%98%E5%BD%95%E5%88%B6hi6%23) `93.0K 🔥` `-38%`
1. [刘宪华上座率](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%AA%E5%8D%8E%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `92.7K 🔥` `-53%`
1. [时代少年团限定新发色](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%99%90%E5%AE%9A%E6%96%B0%E5%8F%91%E8%89%B2%23) `92.7K 🔥` `-44%`
1. [5万人游进西班牙后4.8万人游回去了](https://s.weibo.com/weibo?q=%235%E4%B8%87%E4%BA%BA%E6%B8%B8%E8%BF%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%90%8E4.8%E4%B8%87%E4%BA%BA%E6%B8%B8%E5%9B%9E%E5%8E%BB%E4%BA%86%23) `92.7K 🔥` `-33%`
1. [月薪6万躺平看云的神仙工作 (A magical job with a monthly salary of RMB 60,000, lying flat and watching the clouds)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA6%E4%B8%87%E8%BA%BA%E5%B9%B3%E7%9C%8B%E4%BA%91%E7%9A%84%E7%A5%9E%E4%BB%99%E5%B7%A5%E4%BD%9C%23) `92.6K 🔥` `-35%`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `92.5K 🔥` `-41%`
1. [王承渲终于回来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%89%BF%E6%B8%B2%E7%BB%88%E4%BA%8E%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `92.5K 🔥` `-40%`
1. [集中供冷是什么神仙体验](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%B8%AD%E4%BE%9B%E5%86%B7%E6%98%AF%E4%BB%80%E4%B9%88%E7%A5%9E%E4%BB%99%E4%BD%93%E9%AA%8C%23) `92.5K 🔥` `-23%`
1. [逐玉作者道歉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BD%9C%E8%80%85%E9%81%93%E6%AD%89%23) `92.3K 🔥` `-41%`
1. [张凌赫剧里的儿子跟本人好像](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%89%A7%E9%87%8C%E7%9A%84%E5%84%BF%E5%AD%90%E8%B7%9F%E6%9C%AC%E4%BA%BA%E5%A5%BD%E5%83%8F%23) `92.2K 🔥` `-39%`
1. [赵心童vs威尔逊](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5vs%E5%A8%81%E5%B0%94%E9%80%8A%23) `92.2K 🔥` `-22%`
1. [中超联赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%B6%85%E8%81%94%E8%B5%9B%23) `92.1K 🔥` `-23%`

Updated at 2026-08-02 01:44:01

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
