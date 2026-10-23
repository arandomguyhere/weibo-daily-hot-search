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

1. [别再嫌再见朋友请来的咖糊了](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%86%8D%E5%AB%8C%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E8%AF%B7%E6%9D%A5%E7%9A%84%E5%92%96%E7%B3%8A%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [胡锡进说股票跌得心疼](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%AF%B4%E8%82%A1%E7%A5%A8%E8%B7%8C%E5%BE%97%E5%BF%83%E7%96%BC%23) `866.2K 🔥` `NEW`
1. [多方救援力量赶往震中](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E6%95%91%E6%8F%B4%E5%8A%9B%E9%87%8F%E8%B5%B6%E5%BE%80%E9%9C%87%E4%B8%AD%23) `832.8K 🔥` `NEW`
1. [曝迪丽热巴开毯](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BC%80%E6%AF%AF%23) `813.4K 🔥` `NEW`
1. [华强北商家说iPhoneDuo毫无技术含量](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%BC%BA%E5%8C%97%E5%95%86%E5%AE%B6%E8%AF%B4iPhoneDuo%E6%AF%AB%E6%97%A0%E6%8A%80%E6%9C%AF%E5%90%AB%E9%87%8F%23) `791.8K 🔥` `NEW`
1. [VOGUE明星出图](https://s.weibo.com/weibo?q=%23VOGUE%E6%98%8E%E6%98%9F%E5%87%BA%E5%9B%BE%23) `787.6K 🔥` `NEW`
1. [孟子义尚公主剧宣排面](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%89%A7%E5%AE%A3%E6%8E%92%E9%9D%A2%23) `585.1K 🔥` `NEW`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `399.4K 🔥` `NEW`
1. [NBA回应76人29分大逆转骑士](https://s.weibo.com/weibo?q=%23NBA%E5%9B%9E%E5%BA%9476%E4%BA%BA29%E5%88%86%E5%A4%A7%E9%80%86%E8%BD%AC%E9%AA%91%E5%A3%AB%23) `391.3K 🔥` `NEW`
1. [金饰价格一夜崩了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%80%E5%A4%9C%E5%B4%A9%E4%BA%86%23) `363.9K 🔥` `NEW`
1. [黄子韬公司被强制执行2040万](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%85%AC%E5%8F%B8%E8%A2%AB%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C2040%E4%B8%87%23) `361.6K 🔥` `NEW`
1. [再见朋友厉娜许飞好纯粹的恨](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E5%8E%89%E5%A8%9C%E8%AE%B8%E9%A3%9E%E5%A5%BD%E7%BA%AF%E7%B2%B9%E7%9A%84%E6%81%A8%23) `359.6K 🔥` `NEW`
1. [何穗 拿到大结果了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%20%E6%8B%BF%E5%88%B0%E5%A4%A7%E7%BB%93%E6%9E%9C%E4%BA%86%23) `351.2K 🔥` `NEW`
1. [雷鸟](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%B8%9F%23) `349.2K 🔥` `NEW`
1. [短剧女王徐艺真想和赵丽颖合作](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%A5%B3%E7%8E%8B%E5%BE%90%E8%89%BA%E7%9C%9F%E6%83%B3%E5%92%8C%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%90%88%E4%BD%9C%23) `338.9K 🔥` `NEW`
1. [田曦薇今天的超话你自己签吧](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BB%8A%E5%A4%A9%E7%9A%84%E8%B6%85%E8%AF%9D%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%AD%BE%E5%90%A7%23) `336.5K 🔥` `NEW`
1. [小城良方刘铮亮母亲遗体找到了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%88%98%E9%93%AE%E4%BA%AE%E6%AF%8D%E4%BA%B2%E9%81%97%E4%BD%93%E6%89%BE%E5%88%B0%E4%BA%86%23) `335.3K 🔥` `NEW`
1. [苹果为西藏那曲捐款](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%B8%BA%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B2%E6%8D%90%E6%AC%BE%23) `334.1K 🔥` `NEW`
1. [丁禹兮怪好吃认证](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%80%AA%E5%A5%BD%E5%90%83%E8%AE%A4%E8%AF%81%23) `332.4K 🔥` `NEW`
1. [张亮请张亮吃张亮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%AE%E8%AF%B7%E5%BC%A0%E4%BA%AE%E5%90%83%E5%BC%A0%E4%BA%AE%23) `330.8K 🔥` `NEW`
1. [曝杨紫琼刘亦菲压轴VOGUE红毯](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E7%B4%AB%E7%90%BC%E5%88%98%E4%BA%A6%E8%8F%B2%E5%8E%8B%E8%BD%B4VOGUE%E7%BA%A2%E6%AF%AF%23) `328.9K 🔥` `NEW`
1. [撕完苹果内屏磨砂膜再贴回去要花398](https://s.weibo.com/weibo?q=%23%E6%92%95%E5%AE%8C%E8%8B%B9%E6%9E%9C%E5%86%85%E5%B1%8F%E7%A3%A8%E7%A0%82%E8%86%9C%E5%86%8D%E8%B4%B4%E5%9B%9E%E5%8E%BB%E8%A6%81%E8%8A%B1398%23) `326.5K 🔥` `NEW`
1. [iPhoneDuo PuraXMax](https://s.weibo.com/weibo?q=%23iPhoneDuo%20PuraXMax%23) `324.6K 🔥` `NEW`
1. [外卖小哥闪婚娶美国女博士宣布离婚](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E9%97%AA%E5%A9%9A%E5%A8%B6%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%8D%9A%E5%A3%AB%E5%AE%A3%E5%B8%83%E7%A6%BB%E5%A9%9A%23) `323.7K 🔥` `NEW`
1. [金价突然暴跌原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%AA%81%E7%84%B6%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `322.8K 🔥` `NEW`
1. [曝迪丽热巴VOGUE盛典穿祖海高定](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4VOGUE%E7%9B%9B%E5%85%B8%E7%A9%BF%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%23) `303.2K 🔥` `NEW`
1. [曾舜晞叫孟子义暮晚摇王法姐](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%8F%AB%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9A%AE%E6%99%9A%E6%91%87%E7%8E%8B%E6%B3%95%E5%A7%90%23) `287.2K 🔥` `NEW`
1. [曝VOGUE盛典红毯女明星高定](https://s.weibo.com/weibo?q=%23%E6%9B%9DVOGUE%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%E5%A5%B3%E6%98%8E%E6%98%9F%E9%AB%98%E5%AE%9A%23) `280.6K 🔥` `NEW`
1. [苹果折叠屏开售](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E5%B1%8F%E5%BC%80%E5%94%AE%23) `266.7K 🔥` `NEW`
1. [200斤女子患多囊胎儿足月才知怀孕](https://s.weibo.com/weibo?q=%23200%E6%96%A4%E5%A5%B3%E5%AD%90%E6%82%A3%E5%A4%9A%E5%9B%8A%E8%83%8E%E5%84%BF%E8%B6%B3%E6%9C%88%E6%89%8D%E7%9F%A5%E6%80%80%E5%AD%95%23) `259.5K 🔥` `NEW`
1. [爸妈给儿子过十八岁生日礼看哭网友](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E7%BB%99%E5%84%BF%E5%AD%90%E8%BF%87%E5%8D%81%E5%85%AB%E5%B2%81%E7%94%9F%E6%97%A5%E7%A4%BC%E7%9C%8B%E5%93%AD%E7%BD%91%E5%8F%8B%23) `254.4K 🔥` `NEW`
1. [王一博这一套完全老公级别](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BF%99%E4%B8%80%E5%A5%97%E5%AE%8C%E5%85%A8%E8%80%81%E5%85%AC%E7%BA%A7%E5%88%AB%23) `253.1K 🔥` `NEW`
1. [詹姆斯创生涯最大逆转](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%88%9B%E7%94%9F%E6%B6%AF%E6%9C%80%E5%A4%A7%E9%80%86%E8%BD%AC%23) `249.4K 🔥` `NEW`
1. [iPhoneDuo上手后我选华为](https://s.weibo.com/weibo?q=%23iPhoneDuo%E4%B8%8A%E6%89%8B%E5%90%8E%E6%88%91%E9%80%89%E5%8D%8E%E4%B8%BA%23) `235.7K 🔥` `NEW`
1. [嫁金钗单更给我时间反复品味](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%8D%95%E6%9B%B4%E7%BB%99%E6%88%91%E6%97%B6%E9%97%B4%E5%8F%8D%E5%A4%8D%E5%93%81%E5%91%B3%23) `226.7K 🔥` `NEW`
1. [Skip谈76人29分大逆转骑士](https://s.weibo.com/weibo?q=%23Skip%E8%B0%8876%E4%BA%BA29%E5%88%86%E5%A4%A7%E9%80%86%E8%BD%AC%E9%AA%91%E5%A3%AB%23) `224.5K 🔥` `NEW`
1. [曝VOGUE红毯按首字母走](https://s.weibo.com/weibo?q=%23%E6%9B%9DVOGUE%E7%BA%A2%E6%AF%AF%E6%8C%89%E9%A6%96%E5%AD%97%E6%AF%8D%E8%B5%B0%23) `210.1K 🔥` `NEW`
1. [孔德昕谈76人29分大逆转骑士](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%BE%B7%E6%98%95%E8%B0%8876%E4%BA%BA29%E5%88%86%E5%A4%A7%E9%80%86%E8%BD%AC%E9%AA%91%E5%A3%AB%23) `205.9K 🔥` `NEW`
1. [魏娆要为陆濯殉情](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A8%86%E8%A6%81%E4%B8%BA%E9%99%86%E6%BF%AF%E6%AE%89%E6%83%85%23) `201.2K 🔥` `NEW`
1. [LACOSTE上海广富林大秀](https://s.weibo.com/weibo?q=%23LACOSTE%E4%B8%8A%E6%B5%B7%E5%B9%BF%E5%AF%8C%E6%9E%97%E5%A4%A7%E7%A7%80%23) `198.6K 🔥` `NEW`
1. [华为折叠老用户首批买到Duo](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%8A%98%E5%8F%A0%E8%80%81%E7%94%A8%E6%88%B7%E9%A6%96%E6%89%B9%E4%B9%B0%E5%88%B0Duo%23) `198.3K 🔥` `NEW`
1. [周芙得知真相却还要杀魏娆](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%8A%99%E5%BE%97%E7%9F%A5%E7%9C%9F%E7%9B%B8%E5%8D%B4%E8%BF%98%E8%A6%81%E6%9D%80%E9%AD%8F%E5%A8%86%23) `183.1K 🔥` `NEW`
1. [范玮琪到不了因音色再爆红](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E5%88%B0%E4%B8%8D%E4%BA%86%E5%9B%A0%E9%9F%B3%E8%89%B2%E5%86%8D%E7%88%86%E7%BA%A2%23) `180.8K 🔥` `NEW`
1. [女子被狗追1小时才发现是房东丢的](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%8B%97%E8%BF%BD1%E5%B0%8F%E6%97%B6%E6%89%8D%E5%8F%91%E7%8E%B0%E6%98%AF%E6%88%BF%E4%B8%9C%E4%B8%A2%E7%9A%84%23) `180.0K 🔥` `NEW`
1. [两女生投150万开无烟酒吧倒闭](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E7%94%9F%E6%8A%95150%E4%B8%87%E5%BC%80%E6%97%A0%E7%83%9F%E9%85%92%E5%90%A7%E5%80%92%E9%97%AD%23) `352.8K 🔥`
1. [骚扰来电不接和挂断区别很大](https://s.weibo.com/weibo?q=%23%E9%AA%9A%E6%89%B0%E6%9D%A5%E7%94%B5%E4%B8%8D%E6%8E%A5%E5%92%8C%E6%8C%82%E6%96%AD%E5%8C%BA%E5%88%AB%E5%BE%88%E5%A4%A7%23) `339.8K 🔥`
1. [西藏7级地震](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `365.0K 🔥` `-80%`
1. [在星巴克开会1小时被提醒点单5次](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E5%BC%80%E4%BC%9A1%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%8F%90%E9%86%92%E7%82%B9%E5%8D%955%E6%AC%A1%23) `312.8K 🔥` `-74%`
1. [盛艾敬被批不尊重前辈只顾着自己跳舞](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E8%A2%AB%E6%89%B9%E4%B8%8D%E5%B0%8A%E9%87%8D%E5%89%8D%E8%BE%88%E5%8F%AA%E9%A1%BE%E7%9D%80%E8%87%AA%E5%B7%B1%E8%B7%B3%E8%88%9E%23) `231.2K 🔥` `-33%`

Updated at 2026-10-23 13:05:39

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
