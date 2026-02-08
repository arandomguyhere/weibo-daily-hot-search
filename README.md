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

1. [负责一颗卫星是什么体验 (What is it like to be in charge of a satellite?)](https://s.weibo.com/weibo?q=%23%E8%B4%9F%E8%B4%A3%E4%B8%80%E9%A2%97%E5%8D%AB%E6%98%9F%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `598.3K 🔥` `NEW`
1. [外卖小哥打翻32杯奶茶原地发愣](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%89%93%E7%BF%BB32%E6%9D%AF%E5%A5%B6%E8%8C%B6%E5%8E%9F%E5%9C%B0%E5%8F%91%E6%84%A3%23) `240.5K 🔥` `NEW`
1. [成何体统sos名场面](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9Fsos%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `236.0K 🔥` `NEW`
1. [吃上AI主理人的席了](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%B8%8AAI%E4%B8%BB%E7%90%86%E4%BA%BA%E7%9A%84%E5%B8%AD%E4%BA%86%23) `157.0K 🔥` `NEW`
1. [春晚彩排](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%BD%A9%E6%8E%92%23) `146.8K 🔥` `NEW`
1. [周震南把丰愉写进旋律里](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%9C%87%E5%8D%97%E6%8A%8A%E4%B8%B0%E6%84%89%E5%86%99%E8%BF%9B%E6%97%8B%E5%BE%8B%E9%87%8C%23) `142.9K 🔥` `NEW`
1. [小英想把送养出去6年的女儿接回家](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E6%83%B3%E6%8A%8A%E9%80%81%E5%85%BB%E5%87%BA%E5%8E%BB6%E5%B9%B4%E7%9A%84%E5%A5%B3%E5%84%BF%E6%8E%A5%E5%9B%9E%E5%AE%B6%23) `142.1K 🔥` `NEW`
1. [老一辈做饭好吃的原因](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%81%9A%E9%A5%AD%E5%A5%BD%E5%90%83%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `128.9K 🔥` `NEW`
1. [不会做饭的建议反复观看](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BC%9A%E5%81%9A%E9%A5%AD%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `103.5K 🔥` `NEW`
1. [海洋馆偶遇李纯马頔](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B4%8B%E9%A6%86%E5%81%B6%E9%81%87%E6%9D%8E%E7%BA%AF%E9%A9%AC%E9%A0%94%23) `87.2K 🔥` `NEW`
1. [许凯魏哲鸣新剧阴湿诡味好重 (Xu Kai and Wei Zheming’s new drama is so dank and weird)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%E9%AD%8F%E5%93%B2%E9%B8%A3%E6%96%B0%E5%89%A7%E9%98%B4%E6%B9%BF%E8%AF%A1%E5%91%B3%E5%A5%BD%E9%87%8D%23) `77.3K 🔥` `NEW`
1. [时代少年团认领团粉头子称号](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%AE%A4%E9%A2%86%E5%9B%A2%E7%B2%89%E5%A4%B4%E5%AD%90%E7%A7%B0%E5%8F%B7%23) `69.5K 🔥` `NEW`
1. [以为王力宏裤子只穿了一条腿](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E7%8E%8B%E5%8A%9B%E5%AE%8F%E8%A3%A4%E5%AD%90%E5%8F%AA%E7%A9%BF%E4%BA%86%E4%B8%80%E6%9D%A1%E8%85%BF%23) `65.8K 🔥` `NEW`
1. [比特币价格下挫17%](https://s.weibo.com/weibo?q=%23%E6%AF%94%E7%89%B9%E5%B8%81%E4%BB%B7%E6%A0%BC%E4%B8%8B%E6%8C%AB17%25%23) `65.1K 🔥` `NEW`
1. [吴昕用千问把长沙小吃点了个遍](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E7%94%A8%E5%8D%83%E9%97%AE%E6%8A%8A%E9%95%BF%E6%B2%99%E5%B0%8F%E5%90%83%E7%82%B9%E4%BA%86%E4%B8%AA%E9%81%8D%23) `64.5K 🔥` `NEW`
1. [女子吐槽飞机餐仅一根青菜配米饭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E9%A3%9E%E6%9C%BA%E9%A4%90%E4%BB%85%E4%B8%80%E6%A0%B9%E9%9D%92%E8%8F%9C%E9%85%8D%E7%B1%B3%E9%A5%AD%23) `1.1M 🔥` `+32%`
1. [成何体统 好看](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E5%A5%BD%E7%9C%8B%23) `231.2K 🔥` `+73%`
1. [没领证男子去世遭索18万彩礼女方发声](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E9%A2%86%E8%AF%81%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E9%81%AD%E7%B4%A218%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%A5%B3%E6%96%B9%E5%8F%91%E5%A3%B0%23) `168.3K 🔥` `+66%`
1. [邓超忘给孙俪准备16年纪念日的礼物](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%BF%98%E7%BB%99%E5%AD%99%E4%BF%AA%E5%87%86%E5%A4%8716%E5%B9%B4%E7%BA%AA%E5%BF%B5%E6%97%A5%E7%9A%84%E7%A4%BC%E7%89%A9%23) `166.3K 🔥`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `163.3K 🔥`
1. [爱泼斯坦在巴黎红房间拍下女孩跳舞](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%9C%A8%E5%B7%B4%E9%BB%8E%E7%BA%A2%E6%88%BF%E9%97%B4%E6%8B%8D%E4%B8%8B%E5%A5%B3%E5%AD%A9%E8%B7%B3%E8%88%9E%23) `161.6K 🔥`
1. [张凌赫 电竞男主 (Zhang Linghe E-sports male protagonist)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `160.1K 🔥`
1. [向太说郭碧婷从没开口要过东西](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E9%83%AD%E7%A2%A7%E5%A9%B7%E4%BB%8E%E6%B2%A1%E5%BC%80%E5%8F%A3%E8%A6%81%E8%BF%87%E4%B8%9C%E8%A5%BF%23) `154.2K 🔥`
1. [梁源发文怼吴克群](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%BA%90%E5%8F%91%E6%96%87%E6%80%BC%E5%90%B4%E5%85%8B%E7%BE%A4%23) `149.9K 🔥`
1. [老一辈对子女睡懒觉的执念](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%AF%B9%E5%AD%90%E5%A5%B3%E7%9D%A1%E6%87%92%E8%A7%89%E7%9A%84%E6%89%A7%E5%BF%B5%23) `146.9K 🔥`
1. [全球第四大汽车巨头爆雷](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC%E5%9B%9B%E5%A4%A7%E6%B1%BD%E8%BD%A6%E5%B7%A8%E5%A4%B4%E7%88%86%E9%9B%B7%23) `142.3K 🔥`
1. [华晨宇脖子上的唇印 (Lip prints on Hua Chenyu’s neck)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E8%84%96%E5%AD%90%E4%B8%8A%E7%9A%84%E5%94%87%E5%8D%B0%23) `142.1K 🔥`
1. [这才是真正的道歉](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%81%93%E6%AD%89%23) `141.4K 🔥`
1. [断联一年的闺蜜突然发消息](https://s.weibo.com/weibo?q=%23%E6%96%AD%E8%81%94%E4%B8%80%E5%B9%B4%E7%9A%84%E9%97%BA%E8%9C%9C%E7%AA%81%E7%84%B6%E5%8F%91%E6%B6%88%E6%81%AF%23) `140.7K 🔥`
1. [韩国运动员盒饭 (Korean athlete lunch box)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%BF%90%E5%8A%A8%E5%91%98%E7%9B%92%E9%A5%AD%23) `120.6K 🔥`
1. [王楚钦男单争冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E4%BA%89%E5%86%A0%23) `119.9K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `114.4K 🔥`
1. [QQ音乐超级巅峰之夜抢票](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E8%B6%85%E7%BA%A7%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E6%8A%A2%E7%A5%A8%23) `103.4K 🔥`
1. [华东政法大学学生起诉微信收提现费 (East China University of Political Science and Law students sue WeChat for charging cash withdrawal fees)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%9C%E6%94%BF%E6%B3%95%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E8%B5%B7%E8%AF%89%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%8F%90%E7%8E%B0%E8%B4%B9%23) `96.5K 🔥`
1. [TFING回应时代峰峻在微博之夜开会 (TFING responded to Shi Fengjun’s Weibo night meeting)](https://s.weibo.com/weibo?q=%23TFING%E5%9B%9E%E5%BA%94%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9C%A8%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%BC%80%E4%BC%9A%23) `74.4K 🔥`
1. [00后拜年方式](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E6%8B%9C%E5%B9%B4%E6%96%B9%E5%BC%8F%23) `70.7K 🔥`
1. [四川地震 (Sichuan earthquake)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `768.5K 🔥` `-29%`
1. [丁真劝向佐退圈](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%9C%9F%E5%8A%9D%E5%90%91%E4%BD%90%E9%80%80%E5%9C%88%23) `314.5K 🔥` `-34%`
1. [爸爸弯了一辈子的腰终于断了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BC%AF%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E8%85%B0%E7%BB%88%E4%BA%8E%E6%96%AD%E4%BA%86%23) `240.3K 🔥` `-30%`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `184.7K 🔥` `-41%`
1. [无畏契约直播 (Fearless Contract Live)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E7%9B%B4%E6%92%AD%23) `170.5K 🔥` `-54%`
1. [窗里窗外皆是归途的美好](https://s.weibo.com/weibo?q=%23%E7%AA%97%E9%87%8C%E7%AA%97%E5%A4%96%E7%9A%86%E6%98%AF%E5%BD%92%E9%80%94%E7%9A%84%E7%BE%8E%E5%A5%BD%23) `140.9K 🔥` `-77%`
1. [张本智和vs户上隼辅 (Tomokazu Hari vs. Hayasuke Togami)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8Cvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `133.8K 🔥` `-35%`
1. [白鹿发开播红包](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E5%BC%80%E6%92%AD%E7%BA%A2%E5%8C%85%23) `119.7K 🔥` `-28%`
1. [成都震感](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%9C%87%E6%84%9F%23) `103.7K 🔥` `-41%`
1. [李昀锐的桃花马在孟子义那](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%9A%84%E6%A1%83%E8%8A%B1%E9%A9%AC%E5%9C%A8%E5%AD%9F%E5%AD%90%E4%B9%89%E9%82%A3%23) `87.7K 🔥` `-30%`
1. [爱吃柚子的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%9F%9A%E5%AD%90%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `86.6K 🔥` `-31%`
1. [Bin腹肌对标Gala (Bin abdominal muscles benchmark Gala)](https://s.weibo.com/weibo?q=%23Bin%E8%85%B9%E8%82%8C%E5%AF%B9%E6%A0%87Gala%23) `86.1K 🔥` `-22%`
1. [谢依霖回应提问赵丽颖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E5%9B%9E%E5%BA%94%E6%8F%90%E9%97%AE%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `69.9K 🔥` `-26%`
1. [网红少年被男子发不实淫秽信息侵害](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%91%E5%B9%B4%E8%A2%AB%E7%94%B7%E5%AD%90%E5%8F%91%E4%B8%8D%E5%AE%9E%E6%B7%AB%E7%A7%BD%E4%BF%A1%E6%81%AF%E4%BE%B5%E5%AE%B3%23) `68.1K 🔥` `-34%`
1. [吴克群帮农民卖掉3万斤菜 (Wu Kequn helps farmers sell 30,000 kilograms of vegetables)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E5%B8%AE%E5%86%9C%E6%B0%91%E5%8D%96%E6%8E%893%E4%B8%87%E6%96%A4%E8%8F%9C%23) `67.9K 🔥` `-33%`

Updated at 2026-02-08 16:19:06

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
