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

1. [王楚钦称跟樊振东打出了自己的问题 (Wang Chuqin said he had resolved his own issues with Fan Zhendong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%A7%B0%E8%B7%9F%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%89%93%E5%87%BA%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E9%97%AE%E9%A2%98%23) `1.1M 🔥` `NEW`
1. [外国人来中国旅游更火了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%97%85%E6%B8%B8%E6%9B%B4%E7%81%AB%E4%BA%86%23) `755.5K 🔥` `NEW`
1. [上海女子爬树压塌20年樱花树](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%90%E7%88%AC%E6%A0%91%E5%8E%8B%E5%A1%8C20%E5%B9%B4%E6%A8%B1%E8%8A%B1%E6%A0%91%23) `691.5K 🔥` `NEW`
1. [伊朗说克制已结束](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E5%85%8B%E5%88%B6%E5%B7%B2%E7%BB%93%E6%9D%9F%23) `657.5K 🔥` `NEW`
1. [韩国回应特朗普](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%23) `261.8K 🔥` `NEW`
1. [思文当妈](https://s.weibo.com/weibo?q=%23%E6%80%9D%E6%96%87%E5%BD%93%E5%A6%88%23) `261.7K 🔥` `NEW`
1. [华境S全维安全王中王](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%A2%83S%E5%85%A8%E7%BB%B4%E5%AE%89%E5%85%A8%E7%8E%8B%E4%B8%AD%E7%8E%8B%23) `261.6K 🔥` `NEW`
1. [iPhone三款新机机模出炉](https://s.weibo.com/weibo?q=%23iPhone%E4%B8%89%E6%AC%BE%E6%96%B0%E6%9C%BA%E6%9C%BA%E6%A8%A1%E5%87%BA%E7%82%89%23) `261.4K 🔥` `NEW`
1. [中方表态特朗普威胁伊朗最后期限](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%A1%A8%E6%80%81%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E4%BC%8A%E6%9C%97%E6%9C%80%E5%90%8E%E6%9C%9F%E9%99%90%23) `261.3K 🔥` `NEW`
1. [刘耀文 耳洞](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%20%E8%80%B3%E6%B4%9E%23) `205.4K 🔥` `NEW`
1. [237平独居视频破1100万 (237 videos of living alone exceeded 11 million)](https://s.weibo.com/weibo?q=%23237%E5%B9%B3%E7%8B%AC%E5%B1%85%E8%A7%86%E9%A2%91%E7%A0%B41100%E4%B8%87%23) `200.6K 🔥` `NEW`
1. [迟重瑞说不畏惧陈丽华的强](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E9%87%8D%E7%91%9E%E8%AF%B4%E4%B8%8D%E7%95%8F%E6%83%A7%E9%99%88%E4%B8%BD%E5%8D%8E%E7%9A%84%E5%BC%BA%23) `190.7K 🔥` `NEW`
1. [葛夕自曝与爸爸二十年没联系](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E8%87%AA%E6%9B%9D%E4%B8%8E%E7%88%B8%E7%88%B8%E4%BA%8C%E5%8D%81%E5%B9%B4%E6%B2%A1%E8%81%94%E7%B3%BB%23) `154.5K 🔥` `NEW`
1. [我见迪丽热巴就这样](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A7%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `137.9K 🔥` `NEW`
1. [把易梦玲认成了柳智敏](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E6%98%93%E6%A2%A6%E7%8E%B2%E8%AE%A4%E6%88%90%E4%BA%86%E6%9F%B3%E6%99%BA%E6%95%8F%23) `114.8K 🔥` `NEW`
1. [长沙一女子获7天带薪雨假](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%B8%80%E5%A5%B3%E5%AD%90%E8%8E%B77%E5%A4%A9%E5%B8%A6%E8%96%AA%E9%9B%A8%E5%81%87%23) `113.2K 🔥` `NEW`
1. [陈光标称捐千万嫣然感谢信未明确](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%85%89%E6%A0%87%E7%A7%B0%E6%8D%90%E5%8D%83%E4%B8%87%E5%AB%A3%E7%84%B6%E6%84%9F%E8%B0%A2%E4%BF%A1%E6%9C%AA%E6%98%8E%E7%A1%AE%23) `113.1K 🔥` `NEW`
1. [时隔近一年郭艾伦再向周深道歉](https://s.weibo.com/weibo?q=%23%E6%97%B6%E9%9A%94%E8%BF%91%E4%B8%80%E5%B9%B4%E9%83%AD%E8%89%BE%E4%BC%A6%E5%86%8D%E5%90%91%E5%91%A8%E6%B7%B1%E9%81%93%E6%AD%89%23) `111.7K 🔥` `NEW`
1. [孙俪越长越像邓超了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E8%B6%8A%E9%95%BF%E8%B6%8A%E5%83%8F%E9%82%93%E8%B6%85%E4%BA%86%23) `102.2K 🔥` `NEW`
1. [1元公交雨中喷水乘客说体谅体谅](https://s.weibo.com/weibo?q=%231%E5%85%83%E5%85%AC%E4%BA%A4%E9%9B%A8%E4%B8%AD%E5%96%B7%E6%B0%B4%E4%B9%98%E5%AE%A2%E8%AF%B4%E4%BD%93%E8%B0%85%E4%BD%93%E8%B0%85%23) `93.5K 🔥` `NEW`
1. [猪八戒扮演者马德华将送别陈丽华 (Ma Dehua, who plays Zhu Bajie, will bid farewell to Chen Laiwa)](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E5%85%AB%E6%88%92%E6%89%AE%E6%BC%94%E8%80%85%E9%A9%AC%E5%BE%B7%E5%8D%8E%E5%B0%86%E9%80%81%E5%88%AB%E9%99%88%E4%B8%BD%E5%8D%8E%23) `86.0K 🔥` `NEW`
1. [老师笑了半天才决定放过你](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E5%86%B3%E5%AE%9A%E6%94%BE%E8%BF%87%E4%BD%A0%23) `85.6K 🔥` `NEW`
1. [莫氏鸡煲真的干不动了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%9C%9F%E7%9A%84%E5%B9%B2%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `83.8K 🔥` `NEW`
1. [伊朗哈尔克岛再次遭袭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%93%88%E5%B0%94%E5%85%8B%E5%B2%9B%E5%86%8D%E6%AC%A1%E9%81%AD%E8%A2%AD%23) `81.9K 🔥` `NEW`
1. [过三月和过四月的速度不一样](https://s.weibo.com/weibo?q=%23%E8%BF%87%E4%B8%89%E6%9C%88%E5%92%8C%E8%BF%87%E5%9B%9B%E6%9C%88%E7%9A%84%E9%80%9F%E5%BA%A6%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `78.7K 🔥` `NEW`
1. [陈丽华的紫檀展品从未卖过一件](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E7%9A%84%E7%B4%AB%E6%AA%80%E5%B1%95%E5%93%81%E4%BB%8E%E6%9C%AA%E5%8D%96%E8%BF%87%E4%B8%80%E4%BB%B6%23) `76.8K 🔥` `NEW`
1. [教育具有长期性和滞后性](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%85%B7%E6%9C%89%E9%95%BF%E6%9C%9F%E6%80%A7%E5%92%8C%E6%BB%9E%E5%90%8E%E6%80%A7%23) `784.2K 🔥` `+166%`
1. [美以袭击哈尔克岛](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E5%93%88%E5%B0%94%E5%85%8B%E5%B2%9B%23) `734.2K 🔥` `+99%`
1. [华晨宇的民宿定价3块钱 (Hua Chenyu’s B&B is priced at 3 yuan)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%9A%84%E6%B0%91%E5%AE%BF%E5%AE%9A%E4%BB%B73%E5%9D%97%E9%92%B1%23) `701.8K 🔥` `+29%`
1. [曾沛慈热度断层第一](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%83%AD%E5%BA%A6%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `338.0K 🔥` `+43%`
1. [联合国警告特朗普](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD%E8%AD%A6%E5%91%8A%E7%89%B9%E6%9C%97%E6%99%AE%23) `261.5K 🔥` `+28%`
1. [危险关系 (Dangerous Liaisons)](https://s.weibo.com/weibo?q=%23%E5%8D%B1%E9%99%A9%E5%85%B3%E7%B3%BB%23) `106.8K 🔥` `+29%`
1. [曝某牛奶直播间涉黄涉低俗](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E7%89%9B%E5%A5%B6%E7%9B%B4%E6%92%AD%E9%97%B4%E6%B6%89%E9%BB%84%E6%B6%89%E4%BD%8E%E4%BF%97%23) `429.8K 🔥`
1. [把蓝莓当消炎药吃](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%93%9D%E8%8E%93%E5%BD%93%E6%B6%88%E7%82%8E%E8%8D%AF%E5%90%83%23) `261.8K 🔥`
1. [迟重瑞为陈丽华光头36年](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E9%87%8D%E7%91%9E%E4%B8%BA%E9%99%88%E4%B8%BD%E5%8D%8E%E5%85%89%E5%A4%B436%E5%B9%B4%23) `261.4K 🔥`
1. [虞书欣工作室 审美](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%AE%A1%E7%BE%8E%23) `246.9K 🔥`
1. [央行抛售引发金价地震 (Central bank selling triggers gold price earthquake)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E6%8A%9B%E5%94%AE%E5%BC%95%E5%8F%91%E9%87%91%E4%BB%B7%E5%9C%B0%E9%9C%87%23) `209.5K 🔥`
1. [向太自曝曾多次拆散向佐恋情](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%87%AA%E6%9B%9D%E6%9B%BE%E5%A4%9A%E6%AC%A1%E6%8B%86%E6%95%A3%E5%90%91%E4%BD%90%E6%81%8B%E6%83%85%23) `205.1K 🔥`
1. [裴珍映 假体](https://s.weibo.com/weibo?q=%23%E8%A3%B4%E7%8F%8D%E6%98%A0%20%E5%81%87%E4%BD%93%23) `200.5K 🔥`
1. [浪姐取消直播后被喊话退钱 (Sister Lang was asked to refund her money after canceling the live broadcast)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%96%E6%B6%88%E7%9B%B4%E6%92%AD%E5%90%8E%E8%A2%AB%E5%96%8A%E8%AF%9D%E9%80%80%E9%92%B1%23) `135.5K 🔥`
1. [开心消消乐](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%23) `261.9K 🔥` `-21%`
1. [孟子义 现偶](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%20%E7%8E%B0%E5%81%B6%23) `225.8K 🔥` `-39%`
1. [伊朗对美以发动第99波打击 (Iran launches 99th wave of strikes against the United States and Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E4%BB%A5%E5%8F%91%E5%8A%A8%E7%AC%AC99%E6%B3%A2%E6%89%93%E5%87%BB%23) `157.4K 🔥` `-47%`
1. [伊朗总统说已准备好牺牲](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E5%B7%B2%E5%87%86%E5%A4%87%E5%A5%BD%E7%89%BA%E7%89%B2%23) `145.9K 🔥` `-39%`
1. [两位小米联合创始人退出小米科技 (Two Xiaomi co-founders exit Xiaomi Technology)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BD%8D%E5%B0%8F%E7%B1%B3%E8%81%94%E5%90%88%E5%88%9B%E5%A7%8B%E4%BA%BA%E9%80%80%E5%87%BA%E5%B0%8F%E7%B1%B3%E7%A7%91%E6%8A%80%23) `125.3K 🔥` `-88%`
1. [十日终焉最新阵容 (The latest lineup of Ten Days End)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%9C%80%E6%96%B0%E9%98%B5%E5%AE%B9%23) `121.8K 🔥` `-54%`
1. [不要跟不熟的人互关 (Don’t interact with unfamiliar people)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%B7%9F%E4%B8%8D%E7%86%9F%E7%9A%84%E4%BA%BA%E4%BA%92%E5%85%B3%23) `103.0K 🔥` `-63%`
1. [国家继续出手调控油价 (The state continues to regulate oil prices)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BB%A7%E7%BB%AD%E5%87%BA%E6%89%8B%E8%B0%83%E6%8E%A7%E6%B2%B9%E4%BB%B7%23) `100.8K 🔥` `-86%`
1. [唐嫣好有气质](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%A5%BD%E6%9C%89%E6%B0%94%E8%B4%A8%23) `97.1K 🔥` `-23%`
1. [张维伊馒头汉堡减肥法](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E4%BC%8A%E9%A6%92%E5%A4%B4%E6%B1%89%E5%A0%A1%E5%87%8F%E8%82%A5%E6%B3%95%23) `77.9K 🔥` `-57%`

Updated at 2026-04-07 22:19:19

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
