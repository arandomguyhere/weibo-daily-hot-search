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

1. [2026新春走基层 (2026 New Year Goes to the Grassroots)](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `739.2K 🔥` `NEW`
1. [虞书欣何与 神仙肉](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BD%95%E4%B8%8E%20%E7%A5%9E%E4%BB%99%E8%82%89%23) `615.9K 🔥` `NEW`
1. [DK战胜T1](https://s.weibo.com/weibo?q=%23DK%E6%88%98%E8%83%9CT1%23) `391.6K 🔥` `NEW`
1. [张凌赫 刺棠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E5%88%BA%E6%A3%A0%23) `387.2K 🔥` `NEW`
1. [王濛祝贺谷爱凌李方慧](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%A5%9D%E8%B4%BA%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9D%8E%E6%96%B9%E6%85%A7%23) `348.4K 🔥` `NEW`
1. [白鹿这眼线是自己画的吧](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%BF%99%E7%9C%BC%E7%BA%BF%E6%98%AF%E8%87%AA%E5%B7%B1%E7%94%BB%E7%9A%84%E5%90%A7%23) `312.6K 🔥` `NEW`
1. [谷爱凌U池卫冕成功](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CU%E6%B1%A0%E5%8D%AB%E5%86%95%E6%88%90%E5%8A%9F%23) `273.1K 🔥` `NEW`
1. [拾石村小妈祖巡游终于有翻译版本了](https://s.weibo.com/weibo?q=%23%E6%8B%BE%E7%9F%B3%E6%9D%91%E5%B0%8F%E5%A6%88%E7%A5%96%E5%B7%A1%E6%B8%B8%E7%BB%88%E4%BA%8E%E6%9C%89%E7%BF%BB%E8%AF%91%E7%89%88%E6%9C%AC%E4%BA%86%23) `270.6K 🔥` `NEW`
1. [王楚钦比赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%AF%94%E8%B5%9B%23) `203.3K 🔥` `NEW`
1. [64岁演员江华暴瘦引网友担忧](https://s.weibo.com/weibo?q=%2364%E5%B2%81%E6%BC%94%E5%91%98%E6%B1%9F%E5%8D%8E%E6%9A%B4%E7%98%A6%E5%BC%95%E7%BD%91%E5%8F%8B%E6%8B%85%E5%BF%A7%23) `194.6K 🔥` `NEW`
1. [贝加尔湖溺亡中国游客遗体全部打捞上岸 (All bodies of Chinese tourists who drowned in Lake Baikal were recovered)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E6%BA%BA%E4%BA%A1%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E9%81%97%E4%BD%93%E5%85%A8%E9%83%A8%E6%89%93%E6%8D%9E%E4%B8%8A%E5%B2%B8%23) `158.8K 🔥` `NEW`
1. [李方慧回应银牌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%B9%E6%85%A7%E5%9B%9E%E5%BA%94%E9%93%B6%E7%89%8C%23) `158.1K 🔥` `NEW`
1. [DK让二追三T1](https://s.weibo.com/weibo?q=%23DK%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89T1%23) `149.1K 🔥` `NEW`
1. [北京市委市政府贺电](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%B8%82%E5%A7%94%E5%B8%82%E6%94%BF%E5%BA%9C%E8%B4%BA%E7%94%B5%23) `146.6K 🔥` `NEW`
1. [刘少昂直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E7%9B%B4%E6%92%AD%23) `137.8K 🔥` `NEW`
1. [侯明昊直播](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E7%9B%B4%E6%92%AD%23) `126.0K 🔥` `NEW`
1. [没有女孩做出来李方慧做到了](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E5%A5%B3%E5%AD%A9%E5%81%9A%E5%87%BA%E6%9D%A5%E6%9D%8E%E6%96%B9%E6%85%A7%E5%81%9A%E5%88%B0%E4%BA%86%23) `118.0K 🔥` `NEW`
1. [第一批返深大军已堵哭](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E8%BF%94%E6%B7%B1%E5%A4%A7%E5%86%9B%E5%B7%B2%E5%A0%B5%E5%93%AD%23) `111.4K 🔥` `NEW`
1. [深圳北站凌晨打车排队人数超200人](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%8C%97%E7%AB%99%E5%87%8C%E6%99%A8%E6%89%93%E8%BD%A6%E6%8E%92%E9%98%9F%E4%BA%BA%E6%95%B0%E8%B6%85200%E4%BA%BA%23) `105.8K 🔥` `NEW`
1. [时代少年团 一年一度的楼斯卡](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E4%B8%80%E5%B9%B4%E4%B8%80%E5%BA%A6%E7%9A%84%E6%A5%BC%E6%96%AF%E5%8D%A1%23) `103.4K 🔥` `NEW`
1. [T1对战DK (T1 vs. DK)](https://s.weibo.com/weibo?q=%23T1%E5%AF%B9%E6%88%98DK%23) `102.2K 🔥` `NEW`
1. [皇家马德里道歉](https://s.weibo.com/weibo?q=%23%E7%9A%87%E5%AE%B6%E9%A9%AC%E5%BE%B7%E9%87%8C%E9%81%93%E6%AD%89%23) `101.2K 🔥` `NEW`
1. [真的很喜欢引导型的恋人](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BE%88%E5%96%9C%E6%AC%A2%E5%BC%95%E5%AF%BC%E5%9E%8B%E7%9A%84%E6%81%8B%E4%BA%BA%23) `100.8K 🔥` `NEW`
1. [谷爱凌唱国歌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%94%B1%E5%9B%BD%E6%AD%8C%23) `604.2K 🔥` `+44%`
1. [日本一寺庙举行裸祭上万名男性参加](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%80%E5%AF%BA%E5%BA%99%E4%B8%BE%E8%A1%8C%E8%A3%B8%E7%A5%AD%E4%B8%8A%E4%B8%87%E5%90%8D%E7%94%B7%E6%80%A7%E5%8F%82%E5%8A%A0%23) `211.2K 🔥` `+156%`
1. [谷爱凌 九亿少女的梦](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%20%E4%B9%9D%E4%BA%BF%E5%B0%91%E5%A5%B3%E7%9A%84%E6%A2%A6%23) `435.9K 🔥`
1. [女子U型场地决赛 (Women's halfpipe final)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90U%E5%9E%8B%E5%9C%BA%E5%9C%B0%E5%86%B3%E8%B5%9B%23) `391.5K 🔥`
1. [孟子义李昀锐 四搭](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E5%9B%9B%E6%90%AD%23) `390.5K 🔥`
1. [短道速滑](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `242.3K 🔥`
1. [大年初五8岁男童虎跳峡坠崖遇难 (An 8-year-old boy died after falling off a cliff in Tiger Leaping Gorge on the fifth day of the Lunar New Year)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%948%E5%B2%81%E7%94%B7%E7%AB%A5%E8%99%8E%E8%B7%B3%E5%B3%A1%E5%9D%A0%E5%B4%96%E9%81%87%E9%9A%BE%23) `211.8K 🔥`
1. [五代物料](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%BB%A3%E7%89%A9%E6%96%99%23) `151.8K 🔥`
1. [央视女解说看谷爱凌夺冠哽咽了](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%A5%B3%E8%A7%A3%E8%AF%B4%E7%9C%8B%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%BA%E5%86%A0%E5%93%BD%E5%92%BD%E4%BA%86%23) `132.0K 🔥`
1. [仙逆 (Immortal Ni)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `117.9K 🔥`
1. [DK让二追二T1](https://s.weibo.com/weibo?q=%23DK%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%BA%8CT1%23) `114.4K 🔥`
1. [谷爱凌金牌 (Gu Ailing gold medal)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%87%91%E7%89%8C%23) `1.9M 🔥` `-72%`
1. [谷爱凌追平王濛冬奥奖牌纪录 (Gu Ailing equals Wang Meng’s Winter Olympic medal record)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%BD%E5%B9%B3%E7%8E%8B%E6%BF%9B%E5%86%AC%E5%A5%A5%E5%A5%96%E7%89%8C%E7%BA%AA%E5%BD%95%23) `913.0K 🔥` `-41%`
1. [谷爱凌第三滑94.75分 (Gu Ailing skated third with 94.75 points)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%89%E6%BB%9194.75%E5%88%86%23) `481.1K 🔥` `-36%`
1. [中国队5金4银6铜收官 (The Chinese team finished with 5 golds, 4 silvers and 6 bronzes)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F5%E9%87%914%E9%93%B66%E9%93%9C%E6%94%B6%E5%AE%98%23) `410.8K 🔥` `-49%`
1. [谷爱凌金色蝴蝶结](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%87%91%E8%89%B2%E8%9D%B4%E8%9D%B6%E7%BB%93%23) `275.8K 🔥` `-21%`
1. [果然爱情公寓不是拍给当时的我们看的](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%B8%8D%E6%98%AF%E6%8B%8D%E7%BB%99%E5%BD%93%E6%97%B6%E7%9A%84%E6%88%91%E4%BB%AC%E7%9C%8B%E7%9A%84%23) `222.0K 🔥` `-43%`
1. [谷爱凌一战刷爆多项纪录](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%80%E6%88%98%E5%88%B7%E7%88%86%E5%A4%9A%E9%A1%B9%E7%BA%AA%E5%BD%95%23) `214.0K 🔥` `-58%`
1. [孙耀威当年真没骗人简直是仙女下凡](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%80%80%E5%A8%81%E5%BD%93%E5%B9%B4%E7%9C%9F%E6%B2%A1%E9%AA%97%E4%BA%BA%E7%AE%80%E7%9B%B4%E6%98%AF%E4%BB%99%E5%A5%B3%E4%B8%8B%E5%87%A1%23) `209.4K 🔥` `-38%`
1. [李峋的vlog全是公主 (Li Xun’s vlogs are all about princesses)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B3%8B%E7%9A%84vlog%E5%85%A8%E6%98%AF%E5%85%AC%E4%B8%BB%23) `148.0K 🔥` `-47%`
1. [谷爱凌李方慧 慧当凌绝顶](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9D%8E%E6%96%B9%E6%85%A7%20%E6%85%A7%E5%BD%93%E5%87%8C%E7%BB%9D%E9%A1%B6%23) `146.6K 🔥` `-45%`
1. [淀粉肠进入瑜伽裤时代 (Starch intestine enters the era of yoga pants)](https://s.weibo.com/weibo?q=%23%E6%B7%80%E7%B2%89%E8%82%A0%E8%BF%9B%E5%85%A5%E7%91%9C%E4%BC%BD%E8%A3%A4%E6%97%B6%E4%BB%A3%23) `143.7K 🔥` `-39%`
1. [韩国队抗议米兰冬奥至少4次印错国旗 (The South Korean team protested at least 4 times the wrong flag was printed at the Milan Winter Olympics)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E6%8A%97%E8%AE%AE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%87%B3%E5%B0%914%E6%AC%A1%E5%8D%B0%E9%94%99%E5%9B%BD%E6%97%97%23) `132.9K 🔥` `-46%`
1. [杨幂演技](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%BC%94%E6%8A%80%23) `125.6K 🔥` `-41%`
1. [厚本 长剧](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%20%E9%95%BF%E5%89%A7%23) `115.4K 🔥` `-50%`
1. [远嫁姐姐回家 47岁弟弟激动得像孩子](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E5%AB%81%E5%A7%90%E5%A7%90%E5%9B%9E%E5%AE%B6%2047%E5%B2%81%E5%BC%9F%E5%BC%9F%E6%BF%80%E5%8A%A8%E5%BE%97%E5%83%8F%E5%AD%A9%E5%AD%90%23) `112.5K 🔥` `-42%`
1. [奖牌榜 (medal table)](https://s.weibo.com/weibo?q=%23%E5%A5%96%E7%89%8C%E6%A6%9C%23) `101.6K 🔥` `-58%`

Updated at 2026-02-22 21:24:26

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
