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

1. [灵魂摆渡电影全AI生成 (Soul Ferry movie is fully AI-generated)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E7%94%B5%E5%BD%B1%E5%85%A8AI%E7%94%9F%E6%88%90%23) `806.9K 🔥` `NEW`
1. [义乌请量产吧](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C%E8%AF%B7%E9%87%8F%E4%BA%A7%E5%90%A7%23) `557.1K 🔥` `NEW`
1. [乐道L90蔚来世界模型版](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%81%93L90%E8%94%9A%E6%9D%A5%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E7%89%88%23) `511.5K 🔥` `NEW`
1. [哪吒造车3年烧掉183亿](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E9%80%A0%E8%BD%A63%E5%B9%B4%E7%83%A7%E6%8E%89183%E4%BA%BF%23) `510.0K 🔥` `NEW`
1. [光明日报发虞书欣新歌](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%98%8E%E6%97%A5%E6%8A%A5%E5%8F%91%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8C%23) `508.6K 🔥` `NEW`
1. [谢娜 没票的朋友们别着急](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E6%B2%A1%E7%A5%A8%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%BB%AC%E5%88%AB%E7%9D%80%E6%80%A5%23) `507.3K 🔥` `NEW`
1. [迅猛龙开付费直播](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E5%BC%80%E4%BB%98%E8%B4%B9%E7%9B%B4%E6%92%AD%23) `494.1K 🔥` `NEW`
1. [能量密度是衡量电池技术的核心指标](https://s.weibo.com/weibo?q=%23%E8%83%BD%E9%87%8F%E5%AF%86%E5%BA%A6%E6%98%AF%E8%A1%A1%E9%87%8F%E7%94%B5%E6%B1%A0%E6%8A%80%E6%9C%AF%E7%9A%84%E6%A0%B8%E5%BF%83%E6%8C%87%E6%A0%87%23) `491.6K 🔥` `NEW`
1. [亚足联认定马宁亚冠判罚公正](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%B6%B3%E8%81%94%E8%AE%A4%E5%AE%9A%E9%A9%AC%E5%AE%81%E4%BA%9A%E5%86%A0%E5%88%A4%E7%BD%9A%E5%85%AC%E6%AD%A3%23) `474.3K 🔥` `NEW`
1. [走丢男童父母送女孩终身免费牛排卡](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E4%B8%A2%E7%94%B7%E7%AB%A5%E7%88%B6%E6%AF%8D%E9%80%81%E5%A5%B3%E5%AD%A9%E7%BB%88%E8%BA%AB%E5%85%8D%E8%B4%B9%E7%89%9B%E6%8E%92%E5%8D%A1%23) `472.7K 🔥` `NEW`
1. [宁德时代新电池续航可超1500km (CATL’s new battery life can exceed 1,500km)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E6%96%B0%E7%94%B5%E6%B1%A0%E7%BB%AD%E8%88%AA%E5%8F%AF%E8%B6%851500km%23) `446.0K 🔥` `NEW`
1. [乐道L90价格](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%81%93L90%E4%BB%B7%E6%A0%BC%23) `444.8K 🔥` `NEW`
1. [生了7个娃还想再生的男子年近50岁](https://s.weibo.com/weibo?q=%23%E7%94%9F%E4%BA%867%E4%B8%AA%E5%A8%83%E8%BF%98%E6%83%B3%E5%86%8D%E7%94%9F%E7%9A%84%E7%94%B7%E5%AD%90%E5%B9%B4%E8%BF%9150%E5%B2%81%23) `442.9K 🔥` `NEW`
1. [巴萨下架不当图片内容](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%E4%B8%8B%E6%9E%B6%E4%B8%8D%E5%BD%93%E5%9B%BE%E7%89%87%E5%86%85%E5%AE%B9%23) `435.2K 🔥` `NEW`
1. [温峥嵘 一开口还是这个死动静](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%20%E4%B8%80%E5%BC%80%E5%8F%A3%E8%BF%98%E6%98%AF%E8%BF%99%E4%B8%AA%E6%AD%BB%E5%8A%A8%E9%9D%99%23) `428.5K 🔥` `NEW`
1. [中韩同日表态](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%9F%A9%E5%90%8C%E6%97%A5%E8%A1%A8%E6%80%81%23) `424.8K 🔥` `NEW`
1. [陈都灵跳误闯天家](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E8%B7%B3%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `414.2K 🔥` `NEW`
1. [窈窈有期第一集硬刚第二集删除](https://s.weibo.com/weibo?q=%23%E7%AA%88%E7%AA%88%E6%9C%89%E6%9C%9F%E7%AC%AC%E4%B8%80%E9%9B%86%E7%A1%AC%E5%88%9A%E7%AC%AC%E4%BA%8C%E9%9B%86%E5%88%A0%E9%99%A4%23) `410.3K 🔥` `NEW`
1. [小伙养6个弟妹又有7弟外婆发声](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%85%BB6%E4%B8%AA%E5%BC%9F%E5%A6%B9%E5%8F%88%E6%9C%897%E5%BC%9F%E5%A4%96%E5%A9%86%E5%8F%91%E5%A3%B0%23) `405.7K 🔥` `NEW`
1. [男子心脏停跳2天后生还](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%83%E8%84%8F%E5%81%9C%E8%B7%B32%E5%A4%A9%E5%90%8E%E7%94%9F%E8%BF%98%23) `1.1M 🔥` `+32%`
1. [伊朗储油罐要满了 (Iran’s oil storage tanks are filling up)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%82%A8%E6%B2%B9%E7%BD%90%E8%A6%81%E6%BB%A1%E4%BA%86%23) `511.7K 🔥` `+46%`
1. [姆巴佩喊你补水啦](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%96%8A%E4%BD%A0%E8%A1%A5%E6%B0%B4%E5%95%A6%23) `503.8K 🔥` `+41%`
1. [杨蓉面部烫伤恢复近照 (Recent photos of Yang Rong recovering from facial burns)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E9%9D%A2%E9%83%A8%E7%83%AB%E4%BC%A4%E6%81%A2%E5%A4%8D%E8%BF%91%E7%85%A7%23) `500.8K 🔥` `+47%`
1. [白鹿给助理呵呵做饭](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E5%8A%A9%E7%90%86%E5%91%B5%E5%91%B5%E5%81%9A%E9%A5%AD%23) `498.0K 🔥` `+41%`
1. [姚晨为救护车改道去世女子发声](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%99%A8%E4%B8%BA%E6%95%91%E6%8A%A4%E8%BD%A6%E6%94%B9%E9%81%93%E5%8E%BB%E4%B8%96%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `489.7K 🔥` `+38%`
1. [贝克汉姆回复50米吊射破门高中生 (Beckham responded with a 50-meter lob and scored against a high school student)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%9B%9E%E5%A4%8D50%E7%B1%B3%E5%90%8A%E5%B0%84%E7%A0%B4%E9%97%A8%E9%AB%98%E4%B8%AD%E7%94%9F%23) `485.5K 🔥` `+41%`
1. [人与人最大的区别就是出门](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E5%8C%BA%E5%88%AB%E5%B0%B1%E6%98%AF%E5%87%BA%E9%97%A8%23) `484.0K 🔥` `+51%`
1. [董力给阿诺发全职妈妈工资](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8A%9B%E7%BB%99%E9%98%BF%E8%AF%BA%E5%8F%91%E5%85%A8%E8%81%8C%E5%A6%88%E5%A6%88%E5%B7%A5%E8%B5%84%23) `480.9K 🔥` `+35%`
1. [挪用1700万打赏女生发声](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E7%94%9F%E5%8F%91%E5%A3%B0%23) `480.3K 🔥` `+41%`
1. [时代少年团 团体工作室](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%9B%A2%E4%BD%93%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `477.3K 🔥` `+43%`
1. [张翰回应去移民局 (Zhang Han responded by going to the Immigration Bureau)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%B0%E5%9B%9E%E5%BA%94%E5%8E%BB%E7%A7%BB%E6%B0%91%E5%B1%80%23) `469.1K 🔥` `+41%`
1. [OPPO哈苏双两亿影像给到夯](https://s.weibo.com/weibo?q=%23OPPO%E5%93%88%E8%8B%8F%E5%8F%8C%E4%B8%A4%E4%BA%BF%E5%BD%B1%E5%83%8F%E7%BB%99%E5%88%B0%E5%A4%AF%23) `464.9K 🔥` `+33%`
1. [浪胃仙自曝整容失败](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E8%83%83%E4%BB%99%E8%87%AA%E6%9B%9D%E6%95%B4%E5%AE%B9%E5%A4%B1%E8%B4%A5%23) `461.9K 🔥` `+45%`
1. [李荣浩直播手机掉水里了 (Li Ronghao dropped his phone into the water during live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9B%B4%E6%92%AD%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B0%B4%E9%87%8C%E4%BA%86%23) `459.1K 🔥` `+39%`
1. [女子拍下日本地震时画面](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%8B%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E6%97%B6%E7%94%BB%E9%9D%A2%23) `455.8K 🔥` `+38%`
1. [垫底辣孩与路人合照状态](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E4%B8%8E%E8%B7%AF%E4%BA%BA%E5%90%88%E7%85%A7%E7%8A%B6%E6%80%81%23) `453.3K 🔥` `+45%`
1. [宁德时代](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%23) `451.7K 🔥` `+34%`
1. [郭晓婷王天辰 夫妻相](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E5%A4%AB%E5%A6%BB%E7%9B%B8%23) `448.5K 🔥` `+47%`
1. [业内评价白鹿](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%AF%84%E4%BB%B7%E7%99%BD%E9%B9%BF%23) `440.2K 🔥` `+39%`
1. [唐诡导演 真人能演为啥让AI演](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%AF%A1%E5%AF%BC%E6%BC%94%20%E7%9C%9F%E4%BA%BA%E8%83%BD%E6%BC%94%E4%B8%BA%E5%95%A5%E8%AE%A9AI%E6%BC%94%23) `436.2K 🔥` `+21%`
1. [丁程鑫裸半身游泳](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%A3%B8%E5%8D%8A%E8%BA%AB%E6%B8%B8%E6%B3%B3%23) `433.0K 🔥` `+38%`
1. [遭老板性侵女子主张应赔付250余万](https://s.weibo.com/weibo?q=%23%E9%81%AD%E8%80%81%E6%9D%BF%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%AD%90%E4%B8%BB%E5%BC%A0%E5%BA%94%E8%B5%94%E4%BB%98250%E4%BD%99%E4%B8%87%23) `428.0K 🔥` `+31%`
1. [身上出现肉疙瘩警惕这4种瘤](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E8%82%89%E7%96%99%E7%98%A9%E8%AD%A6%E6%83%95%E8%BF%994%E7%A7%8D%E7%98%A4%23) `420.8K 🔥` `+44%`
1. [邓紫棋改编周杰伦的爱琴海 (Deng Ziqi adapted Jay Chou's Aegean Sea)](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E6%94%B9%E7%BC%96%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E7%88%B1%E7%90%B4%E6%B5%B7%23) `416.8K 🔥` `+38%`
1. [官方通报南昌虐婴事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%97%E6%98%8C%E8%99%90%E5%A9%B4%E4%BA%8B%E4%BB%B6%23) `412.6K 🔥` `+28%`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `407.3K 🔥` `+36%`
1. [中国工业成绩单亮了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%B8%9A%E6%88%90%E7%BB%A9%E5%8D%95%E4%BA%AE%E4%BA%86%23) `641.1K 🔥`
1. [吃原型食物](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%8E%9F%E5%9E%8B%E9%A3%9F%E7%89%A9%23) `497.5K 🔥`
1. [虞书欣新歌](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8C%23) `422.0K 🔥`
1. [全新深蓝S07华为乾崑激光版15.99万起](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E6%B7%B1%E8%93%9DS07%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%BF%80%E5%85%89%E7%89%8815.99%E4%B8%87%E8%B5%B7%23) `621.8K 🔥` `-29%`
1. [巴萨 (Barcelona)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%23) `529.0K 🔥` `-54%`
1. [肯德基多要酱收费](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%A4%9A%E8%A6%81%E9%85%B1%E6%94%B6%E8%B4%B9%23) `466.5K 🔥` `-24%`

Updated at 2026-04-21 23:52:17

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
