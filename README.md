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

1. [跟着刘宇宁上京东618更便宜 (It’s cheaper to follow Liu Yuning on JD.com 618)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%8A%E4%BA%AC%E4%B8%9C618%E6%9B%B4%E4%BE%BF%E5%AE%9C%23) `204.2K 🔥` `NEW`
1. [LPL](https://s.weibo.com/weibo?q=%23LPL%23) `33.0K 🔥` `NEW`
1. [蔡徐坤马来西亚音乐节压轴](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E9%9F%B3%E4%B9%90%E8%8A%82%E5%8E%8B%E8%BD%B4%23) `33.0K 🔥` `NEW`
1. [熬夜看欧冠](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9C%8B%E6%AC%A7%E5%86%A0%23) `33.0K 🔥` `NEW`
1. [万花世界预约](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E9%A2%84%E7%BA%A6%23) `33.0K 🔥` `NEW`
1. [巴黎圣日耳曼5比4阿森纳](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC5%E6%AF%944%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `106.0K 🔥` `+107%`
1. [姆巴佩](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `544.0K 🔥`
1. [徐志胜在桃花坞聊沈月王鹤棣](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%9C%A8%E6%A1%83%E8%8A%B1%E5%9D%9E%E8%81%8A%E6%B2%88%E6%9C%88%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `118.4K 🔥`
1. [鸟巢偶遇王菲看谢霆锋演唱会](https://s.weibo.com/weibo?q=%23%E9%B8%9F%E5%B7%A2%E5%81%B6%E9%81%87%E7%8E%8B%E8%8F%B2%E7%9C%8B%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `79.2K 🔥`
1. [网友阻止印度游客在水源区洗澡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%98%BB%E6%AD%A2%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B0%B4%E6%BA%90%E5%8C%BA%E6%B4%97%E6%BE%A1%23) `72.3K 🔥`
1. [牙齿和情绪的关系 (The relationship between teeth and emotions)](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BD%BF%E5%92%8C%E6%83%85%E7%BB%AA%E7%9A%84%E5%85%B3%E7%B3%BB%23) `56.9K 🔥`
1. [这个时间点入睡才是真早睡 (Falling asleep at this time is really early.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%97%B6%E9%97%B4%E7%82%B9%E5%85%A5%E7%9D%A1%E6%89%8D%E6%98%AF%E7%9C%9F%E6%97%A9%E7%9D%A1%23) `38.1K 🔥`
1. [李昀锐一把就把关晓彤抱起来了 (Li Yunrui picked up Guan Xiaotong in one fell swoop)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%80%E6%8A%8A%E5%B0%B1%E6%8A%8A%E5%85%B3%E6%99%93%E5%BD%A4%E6%8A%B1%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `37.4K 🔥`
1. [大爷协议娶小24岁女子2年便闹离婚 (The uncle agreed to marry a woman 24 years younger and got divorced after 2 years)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%8D%8F%E8%AE%AE%E5%A8%B6%E5%B0%8F24%E5%B2%81%E5%A5%B3%E5%AD%902%E5%B9%B4%E4%BE%BF%E9%97%B9%E7%A6%BB%E5%A9%9A%23) `36.7K 🔥`
1. [陈小春发言宋亚轩又笑晕了 (Jordan Chan spoke and Song Yaxuan fainted with laughter again)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%8F%91%E8%A8%80%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8F%88%E7%AC%91%E6%99%95%E4%BA%86%23) `33.7K 🔥`
1. [用豆包免费学英语的两个方法 (Two ways to learn English for free with Doubao)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E8%B1%86%E5%8C%85%E5%85%8D%E8%B4%B9%E5%AD%A6%E8%8B%B1%E8%AF%AD%E7%9A%84%E4%B8%A4%E4%B8%AA%E6%96%B9%E6%B3%95%23) `33.2K 🔥`
1. [角球 (corner kick)](https://s.weibo.com/weibo?q=%23%E8%A7%92%E7%90%83%23) `33.0K 🔥`
1. [花间令2.0](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E9%97%B4%E4%BB%A42.0%23) `33.0K 🔥`
1. [攻玉](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%23) `33.0K 🔥`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `33.0K 🔥`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `33.0K 🔥`
1. [王安宇见面会 (Wang Anyu meeting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `33.0K 🔥`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `33.0K 🔥`
1. [万花世界原主换了一个人演](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8E%9F%E4%B8%BB%E6%8D%A2%E4%BA%86%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%BC%94%23) `33.0K 🔥`
1. [哈弗茨单刀破门](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%BC%97%E8%8C%A8%E5%8D%95%E5%88%80%E7%A0%B4%E9%97%A8%23) `33.0K 🔥`
1. [陈小春连怼导演四次](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E8%BF%9E%E6%80%BC%E5%AF%BC%E6%BC%94%E5%9B%9B%E6%AC%A1%23) `33.0K 🔥`
1. [巴黎卫冕欧冠冠军 (Paris retains Champions League title)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%8D%AB%E5%86%95%E6%AC%A7%E5%86%A0%E5%86%A0%E5%86%9B%23) `751.9K 🔥` `-35%`
1. [在上海找到创作主场](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8A%E6%B5%B7%E6%89%BE%E5%88%B0%E5%88%9B%E4%BD%9C%E4%B8%BB%E5%9C%BA%23) `210.6K 🔥` `-60%`
1. [欧冠决赛 难看](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%20%E9%9A%BE%E7%9C%8B%23) `186.1K 🔥` `-55%`
1. [点球大战 (Penalty shootout)](https://s.weibo.com/weibo?q=%23%E7%82%B9%E7%90%83%E5%A4%A7%E6%88%98%23) `96.7K 🔥` `-80%`
1. [阿森纳](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `75.7K 🔥` `-79%`
1. [欧冠决赛 (Champions League final)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `75.0K 🔥` `-82%`
1. [微信几乎把每个人捆绑在线上 (WeChat ties almost everyone online)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `73.4K 🔥` `-22%`
1. [欧冠裁判 (Champions League referee)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E8%A3%81%E5%88%A4%23) `66.0K 🔥` `-72%`
1. [麦当劳汉堡缩小比例](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E6%B1%89%E5%A0%A1%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%23) `55.1K 🔥` `-29%`
1. [欧冠加时赛 (Champions League overtime)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%8A%A0%E6%97%B6%E8%B5%9B%23) `45.2K 🔥` `-50%`
1. [巴黎圣日耳曼vs阿森纳](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BCvs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `45.2K 🔥` `-53%`
1. [宋亚轩又输给了李宇春](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8F%88%E8%BE%93%E7%BB%99%E4%BA%86%E6%9D%8E%E5%AE%87%E6%98%A5%23) `40.7K 🔥` `-29%`
1. [这样的衣服才配预售 (Only clothes like this are worthy of pre-sale)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E8%A1%A3%E6%9C%8D%E6%89%8D%E9%85%8D%E9%A2%84%E5%94%AE%23) `39.0K 🔥` `-23%`
1. [阿森纳进球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E8%BF%9B%E7%90%83%23) `38.9K 🔥` `-48%`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `38.4K 🔥` `-34%`
1. [10月大婴儿喝稀粥吃肉末3个月瘦3斤](https://s.weibo.com/weibo?q=%2310%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E5%96%9D%E7%A8%80%E7%B2%A5%E5%90%83%E8%82%89%E6%9C%AB3%E4%B8%AA%E6%9C%88%E7%98%A63%E6%96%A4%23) `37.1K 🔥` `-23%`
1. [爱奇艺解说](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%A7%A3%E8%AF%B4%23) `36.3K 🔥` `-58%`
1. [对早睡起了敬意](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%97%A9%E7%9D%A1%E8%B5%B7%E4%BA%86%E6%95%AC%E6%84%8F%23) `36.1K 🔥` `-29%`
1. [阿森纳黄牌 (arsenal yellow card)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E9%BB%84%E7%89%8C%23) `35.6K 🔥` `-39%`
1. [欧冠直播 (Champions League live broadcast)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E7%9B%B4%E6%92%AD%23) `35.5K 🔥` `-39%`
1. [用AI整理会议记录导致泄密](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E6%95%B4%E7%90%86%E4%BC%9A%E8%AE%AE%E8%AE%B0%E5%BD%95%E5%AF%BC%E8%87%B4%E6%B3%84%E5%AF%86%23) `34.2K 🔥` `-26%`
1. [念相思开机](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%BC%80%E6%9C%BA%23) `33.0K 🔥` `-33%`
1. [十二星座6月月运](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A76%E6%9C%88%E6%9C%88%E8%BF%90%23) `33.0K 🔥` `-21%`
1. [阿森纳首发](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E9%A6%96%E5%8F%91%23) `33.0K 🔥` `-29%`
1. [严浩翔rap (Yan Haoxiang rap)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94rap%23) `33.0K 🔥` `-26%`

Updated at 2026-05-31 05:13:56

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
