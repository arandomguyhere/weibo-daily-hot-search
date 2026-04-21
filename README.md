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

1. [巴萨 (Barcelona)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%23) `1.2M 🔥` `NEW`
1. [男子心脏停跳2天后生还](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%83%E8%84%8F%E5%81%9C%E8%B7%B32%E5%A4%A9%E5%90%8E%E7%94%9F%E8%BF%98%23) `852.5K 🔥` `NEW`
1. [中国工业成绩单亮了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%B8%9A%E6%88%90%E7%BB%A9%E5%8D%95%E4%BA%AE%E4%BA%86%23) `676.7K 🔥` `NEW`
1. [吃原型食物](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%8E%9F%E5%9E%8B%E9%A3%9F%E7%89%A9%23) `548.4K 🔥` `NEW`
1. [转飞猪抢票符 冲徐良南昌站](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E9%A3%9E%E7%8C%AA%E6%8A%A2%E7%A5%A8%E7%AC%A6%20%E5%86%B2%E5%BE%90%E8%89%AF%E5%8D%97%E6%98%8C%E7%AB%99%23) `359.9K 🔥` `NEW`
1. [姚晨为救护车改道去世女子发声](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%99%A8%E4%B8%BA%E6%95%91%E6%8A%A4%E8%BD%A6%E6%94%B9%E9%81%93%E5%8E%BB%E4%B8%96%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `353.7K 🔥` `NEW`
1. [白鹿给助理呵呵做饭](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E5%8A%A9%E7%90%86%E5%91%B5%E5%91%B5%E5%81%9A%E9%A5%AD%23) `353.0K 🔥` `NEW`
1. [伊朗储油罐要满了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%82%A8%E6%B2%B9%E7%BD%90%E8%A6%81%E6%BB%A1%E4%BA%86%23) `350.2K 🔥` `NEW`
1. [OPPO哈苏双两亿影像给到夯](https://s.weibo.com/weibo?q=%23OPPO%E5%93%88%E8%8B%8F%E5%8F%8C%E4%B8%A4%E4%BA%BF%E5%BD%B1%E5%83%8F%E7%BB%99%E5%88%B0%E5%A4%AF%23) `348.9K 🔥` `NEW`
1. [王濛有几百支口红](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%9C%89%E5%87%A0%E7%99%BE%E6%94%AF%E5%8F%A3%E7%BA%A2%23) `348.0K 🔥` `NEW`
1. [贝克汉姆回复50米吊射破门高中生 (Beckham responded with a 50-meter lob and scored against a high school student)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%9B%9E%E5%A4%8D50%E7%B1%B3%E5%90%8A%E5%B0%84%E7%A0%B4%E9%97%A8%E9%AB%98%E4%B8%AD%E7%94%9F%23) `343.3K 🔥` `NEW`
1. [挪用1700万打赏女生发声](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E7%94%9F%E5%8F%91%E5%A3%B0%23) `339.6K 🔥` `NEW`
1. [宁德时代](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%23) `337.5K 🔥` `NEW`
1. [Tim说OPPOFindX9Ultra是口袋电影机](https://s.weibo.com/weibo?q=%23Tim%E8%AF%B4OPPOFindX9Ultra%E6%98%AF%E5%8F%A3%E8%A2%8B%E7%94%B5%E5%BD%B1%E6%9C%BA%23) `335.8K 🔥` `NEW`
1. [女子拍下日本地震时画面](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%8B%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E6%97%B6%E7%94%BB%E9%9D%A2%23) `330.2K 🔥` `NEW`
1. [遭老板性侵女子主张应赔付250余万](https://s.weibo.com/weibo?q=%23%E9%81%AD%E8%80%81%E6%9D%BF%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%AD%90%E4%B8%BB%E5%BC%A0%E5%BA%94%E8%B5%94%E4%BB%98250%E4%BD%99%E4%B8%87%23) `325.6K 🔥` `NEW`
1. [官方通报南昌虐婴事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%97%E6%98%8C%E8%99%90%E5%A9%B4%E4%BA%8B%E4%BB%B6%23) `322.9K 🔥` `NEW`
1. [人与人最大的区别就是出门](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E5%8C%BA%E5%88%AB%E5%B0%B1%E6%98%AF%E5%87%BA%E9%97%A8%23) `320.3K 🔥` `NEW`
1. [浪胃仙自曝整容失败](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E8%83%83%E4%BB%99%E8%87%AA%E6%9B%9D%E6%95%B4%E5%AE%B9%E5%A4%B1%E8%B4%A5%23) `318.9K 🔥` `NEW`
1. [女儿吞百万养老钱将母亲送养老院](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%90%9E%E7%99%BE%E4%B8%87%E5%85%BB%E8%80%81%E9%92%B1%E5%B0%86%E6%AF%8D%E4%BA%B2%E9%80%81%E5%85%BB%E8%80%81%E9%99%A2%23) `310.8K 🔥` `NEW`
1. [宁德时代吴凯称多化学体系是必选项 (CATL Wu Kai says multi-chemical system is a must)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%90%B4%E5%87%AF%E7%A7%B0%E5%A4%9A%E5%8C%96%E5%AD%A6%E4%BD%93%E7%B3%BB%E6%98%AF%E5%BF%85%E9%80%89%E9%A1%B9%23) `308.8K 🔥` `NEW`
1. [萨巴伦卡获劳伦斯最佳女运动员](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E8%8E%B7%E5%8A%B3%E4%BC%A6%E6%96%AF%E6%9C%80%E4%BD%B3%E5%A5%B3%E8%BF%90%E5%8A%A8%E5%91%98%23) `307.1K 🔥` `NEW`
1. [郭晓婷王天辰 夫妻相](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E5%A4%AB%E5%A6%BB%E7%9B%B8%23) `305.4K 🔥` `NEW`
1. [官方通报干警配偶拍得6千万债权](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%B9%B2%E8%AD%A6%E9%85%8D%E5%81%B6%E6%8B%8D%E5%BE%976%E5%8D%83%E4%B8%87%E5%80%BA%E6%9D%83%23) `300.2K 🔥` `NEW`
1. [身上出现肉疙瘩警惕这4种瘤](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E8%82%89%E7%96%99%E7%98%A9%E8%AD%A6%E6%83%95%E8%BF%994%E7%A7%8D%E7%98%A4%23) `293.2K 🔥` `NEW`
1. [马頔的装修费是五哈凑的](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E7%9A%84%E8%A3%85%E4%BF%AE%E8%B4%B9%E6%98%AF%E4%BA%94%E5%93%88%E5%87%91%E7%9A%84%23) `291.0K 🔥` `NEW`
1. [虞书欣新歌](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8C%23) `361.3K 🔥`
1. [红米发布会](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `359.5K 🔥`
1. [董力给阿诺发全职妈妈工资](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8A%9B%E7%BB%99%E9%98%BF%E8%AF%BA%E5%8F%91%E5%85%A8%E8%81%8C%E5%A6%88%E5%A6%88%E5%B7%A5%E8%B5%84%23) `357.0K 🔥`
1. [姆巴佩喊你补水啦](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%96%8A%E4%BD%A0%E8%A1%A5%E6%B0%B4%E5%95%A6%23) `356.3K 🔥`
1. [KTV服务员被指强奸14岁女生 (KTV waiter accused of raping 14-year-old girl)](https://s.weibo.com/weibo?q=%23KTV%E6%9C%8D%E5%8A%A1%E5%91%98%E8%A2%AB%E6%8C%87%E5%BC%BA%E5%A5%B814%E5%B2%81%E5%A5%B3%E7%94%9F%23) `346.2K 🔥`
1. [张继科说祖国荣誉高于一切 (Zhang Jike said the honor of the motherland is above all else)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E7%A5%96%E5%9B%BD%E8%8D%A3%E8%AA%89%E9%AB%98%E4%BA%8E%E4%B8%80%E5%88%87%23) `341.4K 🔥`
1. [杨蓉面部烫伤恢复近照 (Recent photos of Yang Rong recovering from facial burns)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E9%9D%A2%E9%83%A8%E7%83%AB%E4%BC%A4%E6%81%A2%E5%A4%8D%E8%BF%91%E7%85%A7%23) `341.2K 🔥`
1. [时代少年团 团体工作室](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%9B%A2%E4%BD%93%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `333.4K 🔥`
1. [张翰回应去移民局 (Zhang Han responded by going to the Immigration Bureau)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%B0%E5%9B%9E%E5%BA%94%E5%8E%BB%E7%A7%BB%E6%B0%91%E5%B1%80%23) `331.6K 🔥`
1. [李荣浩直播手机掉水里了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9B%B4%E6%92%AD%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B0%B4%E9%87%8C%E4%BA%86%23) `329.4K 🔥`
1. [孙俪儿子画个妆直接能演甄嬛了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%84%BF%E5%AD%90%E7%94%BB%E4%B8%AA%E5%A6%86%E7%9B%B4%E6%8E%A5%E8%83%BD%E6%BC%94%E7%94%84%E5%AC%9B%E4%BA%86%23) `326.8K 🔥`
1. [孙艺洲模仿李小冉心愿便利贴](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E6%B4%B2%E6%A8%A1%E4%BB%BF%E6%9D%8E%E5%B0%8F%E5%86%89%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `324.0K 🔥`
1. [业内评价白鹿](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%AF%84%E4%BB%B7%E7%99%BD%E9%B9%BF%23) `316.6K 🔥`
1. [丁程鑫裸半身游泳](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%A3%B8%E5%8D%8A%E8%BA%AB%E6%B8%B8%E6%B3%B3%23) `314.2K 🔥`
1. [垫底辣孩与路人合照状态](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E4%B8%8E%E8%B7%AF%E4%BA%BA%E5%90%88%E7%85%A7%E7%8A%B6%E6%80%81%23) `311.6K 🔥`
1. [父母再生7弟20岁小伙直言扛不动 (A 20-year-old boy whose parents gave birth to a seventh child said he couldn’t handle it)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%86%8D%E7%94%9F7%E5%BC%9F20%E5%B2%81%E5%B0%8F%E4%BC%99%E7%9B%B4%E8%A8%80%E6%89%9B%E4%B8%8D%E5%8A%A8%23) `303.8K 🔥`
1. [邓紫棋改编周杰伦的爱琴海](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E6%94%B9%E7%BC%96%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E7%88%B1%E7%90%B4%E6%B5%B7%23) `302.5K 🔥`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `298.9K 🔥`
1. [杨幂冯湮儿太后微服私访 (Yang Mi and Feng Yaner's private interview in private)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%86%AF%E6%B9%AE%E5%84%BF%E5%A4%AA%E5%90%8E%E5%BE%AE%E6%9C%8D%E7%A7%81%E8%AE%BF%23) `296.6K 🔥`
1. [宋承炫宣布当爸](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%89%BF%E7%82%AB%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%23) `294.5K 🔥`
1. [新女团UNCHILD出道](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A5%B3%E5%9B%A2UNCHILD%E5%87%BA%E9%81%93%23) `291.8K 🔥`
1. [肯德基多要酱收费](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%A4%9A%E8%A6%81%E9%85%B1%E6%94%B6%E8%B4%B9%23) `613.6K 🔥` `-45%`
1. [唐诡导演 真人能演为啥让AI演](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%AF%A1%E5%AF%BC%E6%BC%94%20%E7%9C%9F%E4%BA%BA%E8%83%BD%E6%BC%94%E4%B8%BA%E5%95%A5%E8%AE%A9AI%E6%BC%94%23) `359.8K 🔥` `-54%`
1. [老外回国后得连夜写篇意林 (After the foreigner returns to China, he has to write an essay overnight)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E5%9B%9E%E5%9B%BD%E5%90%8E%E5%BE%97%E8%BF%9E%E5%A4%9C%E5%86%99%E7%AF%87%E6%84%8F%E6%9E%97%23) `315.7K 🔥` `-54%`
1. [急救车绕开三甲医院将患者拉至民营医院](https://s.weibo.com/weibo?q=%23%E6%80%A5%E6%95%91%E8%BD%A6%E7%BB%95%E5%BC%80%E4%B8%89%E7%94%B2%E5%8C%BB%E9%99%A2%E5%B0%86%E6%82%A3%E8%80%85%E6%8B%89%E8%87%B3%E6%B0%91%E8%90%A5%E5%8C%BB%E9%99%A2%23) `288.5K 🔥` `-21%`

Updated at 2026-04-21 22:25:34

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
