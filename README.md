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

1. [河北高考分数线 (Hebei college entrance examination score line)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `1.8M 🔥` `NEW`
1. [暴雨模式避险指南](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E6%A8%A1%E5%BC%8F%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23) `1.0M 🔥` `NEW`
1. [8月份双休的人有福了](https://s.weibo.com/weibo?q=%238%E6%9C%88%E4%BB%BD%E5%8F%8C%E4%BC%91%E7%9A%84%E4%BA%BA%E6%9C%89%E7%A6%8F%E4%BA%86%23) `959.4K 🔥` `NEW`
1. [哈兰德 恋与深空](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `838.3K 🔥` `NEW`
1. [离婚不离家被返聘当保姆了](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E4%B8%8D%E7%A6%BB%E5%AE%B6%E8%A2%AB%E8%BF%94%E8%81%98%E5%BD%93%E4%BF%9D%E5%A7%86%E4%BA%86%23) `832.8K 🔥` `NEW`
1. [昨夜将至没有废话全是狠活](https://s.weibo.com/weibo?q=%23%E6%98%A8%E5%A4%9C%E5%B0%86%E8%87%B3%E6%B2%A1%E6%9C%89%E5%BA%9F%E8%AF%9D%E5%85%A8%E6%98%AF%E7%8B%A0%E6%B4%BB%23) `818.4K 🔥` `NEW`
1. [张凌赫这一秒过火宣发张家玮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%AE%A3%E5%8F%91%E5%BC%A0%E5%AE%B6%E7%8E%AE%23) `818.0K 🔥` `NEW`
1. [第二十八年春](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E5%8D%81%E5%85%AB%E5%B9%B4%E6%98%A5%23) `817.2K 🔥` `NEW`
1. [特斯拉 豆包](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%20%E8%B1%86%E5%8C%85%23) `816.7K 🔥` `NEW`
1. [孟子义时隔六年回归现偶](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%97%B6%E9%9A%94%E5%85%AD%E5%B9%B4%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%81%B6%23) `816.7K 🔥` `NEW`
1. [李金铭农村婆婆发声 (Li Jinming’s rural mother-in-law speaks out)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E5%A9%86%E5%A9%86%E5%8F%91%E5%A3%B0%23) `811.5K 🔥` `NEW`
1. [全链条发力让汽车消费跑起来](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%93%BE%E6%9D%A1%E5%8F%91%E5%8A%9B%E8%AE%A9%E6%B1%BD%E8%BD%A6%E6%B6%88%E8%B4%B9%E8%B7%91%E8%B5%B7%E6%9D%A5%23) `771.6K 🔥` `NEW`
1. [官俊臣高考成绩](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `770.4K 🔥` `NEW`
1. [千里江山图](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%87%8C%E6%B1%9F%E5%B1%B1%E5%9B%BE%23) `627.1K 🔥` `NEW`
1. [1点点致歉](https://s.weibo.com/weibo?q=%231%E7%82%B9%E7%82%B9%E8%87%B4%E6%AD%89%23) `568.3K 🔥` `NEW`
1. [为8000奖学金炼化全班22人](https://s.weibo.com/weibo?q=%23%E4%B8%BA8000%E5%A5%96%E5%AD%A6%E9%87%91%E7%82%BC%E5%8C%96%E5%85%A8%E7%8F%AD22%E4%BA%BA%23) `543.5K 🔥` `NEW`
1. [痞幼回应像孙怡](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E5%9B%9E%E5%BA%94%E5%83%8F%E5%AD%99%E6%80%A1%23) `456.2K 🔥` `NEW`
1. [韩国消防员被强迫陪酒后死亡](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B6%88%E9%98%B2%E5%91%98%E8%A2%AB%E5%BC%BA%E8%BF%AB%E9%99%AA%E9%85%92%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `434.9K 🔥` `NEW`
1. [Lisa确认分手](https://s.weibo.com/weibo?q=%23Lisa%E7%A1%AE%E8%AE%A4%E5%88%86%E6%89%8B%23) `434.3K 🔥` `NEW`
1. [网约车跨城费](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E8%B7%A8%E5%9F%8E%E8%B4%B9%23) `422.7K 🔥` `NEW`
1. [大奉打更人第二季](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A5%89%E6%89%93%E6%9B%B4%E4%BA%BA%E7%AC%AC%E4%BA%8C%E5%AD%A3%23) `420.3K 🔥` `NEW`
1. [我欲乘风](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `381.5K 🔥` `NEW`
1. [孙子被儿子女友踢死爷爷不想认儿子](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E8%A2%AB%E5%84%BF%E5%AD%90%E5%A5%B3%E5%8F%8B%E8%B8%A2%E6%AD%BB%E7%88%B7%E7%88%B7%E4%B8%8D%E6%83%B3%E8%AE%A4%E5%84%BF%E5%AD%90%23) `380.8K 🔥` `NEW`
1. [王安宇出门打车也用滴滴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%87%BA%E9%97%A8%E6%89%93%E8%BD%A6%E4%B9%9F%E7%94%A8%E6%BB%B4%E6%BB%B4%23) `380.1K 🔥` `NEW`
1. [投入10万加盟零食店十几天就关门](https://s.weibo.com/weibo?q=%23%E6%8A%95%E5%85%A510%E4%B8%87%E5%8A%A0%E7%9B%9F%E9%9B%B6%E9%A3%9F%E5%BA%97%E5%8D%81%E5%87%A0%E5%A4%A9%E5%B0%B1%E5%85%B3%E9%97%A8%23) `379.8K 🔥` `NEW`
1. [聊斋预告](https://s.weibo.com/weibo?q=%23%E8%81%8A%E6%96%8B%E9%A2%84%E5%91%8A%23) `379.8K 🔥` `NEW`
1. [何小鹏晒前法拉利设计师](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%B0%8F%E9%B9%8F%E6%99%92%E5%89%8D%E6%B3%95%E6%8B%89%E5%88%A9%E8%AE%BE%E8%AE%A1%E5%B8%88%23) `345.4K 🔥` `NEW`
1. [多人被日军注入动物血后尿血](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BA%BA%E8%A2%AB%E6%97%A5%E5%86%9B%E6%B3%A8%E5%85%A5%E5%8A%A8%E7%89%A9%E8%A1%80%E5%90%8E%E5%B0%BF%E8%A1%80%23) `336.2K 🔥` `NEW`
1. [Dior大秀](https://s.weibo.com/weibo?q=%23Dior%E5%A4%A7%E7%A7%80%23) `335.6K 🔥` `NEW`
1. [河北2026高考分数线公布](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%972026%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%E5%85%AC%E5%B8%83%23) `330.1K 🔥` `NEW`
1. [白鹿与奥运冠军郭崎琪聊艺术体操 (Bailu talks about rhythmic gymnastics with Olympic champion Guo Qiqi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%8E%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%E9%83%AD%E5%B4%8E%E7%90%AA%E8%81%8A%E8%89%BA%E6%9C%AF%E4%BD%93%E6%93%8D%23) `324.9K 🔥` `NEW`
1. [民警称女孩自愿发生关系不属强奸](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E7%A7%B0%E5%A5%B3%E5%AD%A9%E8%87%AA%E6%84%BF%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E4%B8%8D%E5%B1%9E%E5%BC%BA%E5%A5%B8%23) `322.9K 🔥` `NEW`
1. [2026内蒙古分数线公布](https://s.weibo.com/weibo?q=%232026%E5%86%85%E8%92%99%E5%8F%A4%E5%88%86%E6%95%B0%E7%BA%BF%E5%85%AC%E5%B8%83%23) `312.0K 🔥` `NEW`
1. [张凌赫忘记和金靖拍过戏了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BF%98%E8%AE%B0%E5%92%8C%E9%87%91%E9%9D%96%E6%8B%8D%E8%BF%87%E6%88%8F%E4%BA%86%23) `311.5K 🔥` `NEW`
1. [金饰克价继续下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E7%BB%A7%E7%BB%AD%E4%B8%8B%E8%B7%8C%23) `311.2K 🔥` `NEW`
1. [杨紫公主裙下面是洞洞鞋](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%85%AC%E4%B8%BB%E8%A3%99%E4%B8%8B%E9%9D%A2%E6%98%AF%E6%B4%9E%E6%B4%9E%E9%9E%8B%23) `311.0K 🔥` `NEW`
1. [冯小刚说没有导演想给观众添堵](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B0%8F%E5%88%9A%E8%AF%B4%E6%B2%A1%E6%9C%89%E5%AF%BC%E6%BC%94%E6%83%B3%E7%BB%99%E8%A7%82%E4%BC%97%E6%B7%BB%E5%A0%B5%23) `310.2K 🔥` `NEW`
1. [实探广州城中村水电刺客](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E6%8E%A2%E5%B9%BF%E5%B7%9E%E5%9F%8E%E4%B8%AD%E6%9D%91%E6%B0%B4%E7%94%B5%E5%88%BA%E5%AE%A2%23) `309.9K 🔥` `NEW`
1. [鹅厂2026大剧片单](https://s.weibo.com/weibo?q=%23%E9%B9%85%E5%8E%822026%E5%A4%A7%E5%89%A7%E7%89%87%E5%8D%95%23) `309.6K 🔥` `NEW`
1. [SpaceX股价强势逆转](https://s.weibo.com/weibo?q=%23SpaceX%E8%82%A1%E4%BB%B7%E5%BC%BA%E5%8A%BF%E9%80%86%E8%BD%AC%23) `309.5K 🔥` `NEW`
1. [青岛农业藏着两条千亿级产业链 (Qingdao agriculture hides two industrial chains worth hundreds of billions)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E5%86%9C%E4%B8%9A%E8%97%8F%E7%9D%80%E4%B8%A4%E6%9D%A1%E5%8D%83%E4%BA%BF%E7%BA%A7%E4%BA%A7%E4%B8%9A%E9%93%BE%23) `307.6K 🔥` `NEW`
1. [一天8杯水你可能全喝错了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A98%E6%9D%AF%E6%B0%B4%E4%BD%A0%E5%8F%AF%E8%83%BD%E5%85%A8%E5%96%9D%E9%94%99%E4%BA%86%23) `306.8K 🔥` `NEW`
1. [马斯克已不是万亿富豪](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%B7%B2%E4%B8%8D%E6%98%AF%E4%B8%87%E4%BA%BF%E5%AF%8C%E8%B1%AA%23) `306.3K 🔥` `NEW`
1. [福建高考成绩](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `306.1K 🔥` `NEW`
1. [领导八万六的沙发是我的奖金 (The leader's 86,000 sofa is my bonus)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%AF%BC%E5%85%AB%E4%B8%87%E5%85%AD%E7%9A%84%E6%B2%99%E5%8F%91%E6%98%AF%E6%88%91%E7%9A%84%E5%A5%96%E9%87%91%23) `769.1K 🔥` `+66%`
1. [小米自动驾驶浙赛圈速SUV总榜第11](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%B5%99%E8%B5%9B%E5%9C%88%E9%80%9FSUV%E6%80%BB%E6%A6%9C%E7%AC%AC11%23) `308.3K 🔥`
1. [高考分数线 (College Entrance Examination Score Cutoff)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `1.4M 🔥` `-46%`
1. [千万不要买路边切好的半个西瓜](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%B9%B0%E8%B7%AF%E8%BE%B9%E5%88%87%E5%A5%BD%E7%9A%84%E5%8D%8A%E4%B8%AA%E8%A5%BF%E7%93%9C%23) `692.2K 🔥` `-59%`
1. [以色列证实向伊朗偷运数万星链](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%AF%81%E5%AE%9E%E5%90%91%E4%BC%8A%E6%9C%97%E5%81%B7%E8%BF%90%E6%95%B0%E4%B8%87%E6%98%9F%E9%93%BE%23) `330.2K 🔥` `-47%`
1. [逆水寒 丢人](https://s.weibo.com/weibo?q=%23%E9%80%86%E6%B0%B4%E5%AF%92%20%E4%B8%A2%E4%BA%BA%23) `327.9K 🔥` `-63%`
1. [平台通报李金铭假婆婆事件 (Platform reports Li Jinming’s fake mother-in-law incident)](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E9%80%9A%E6%8A%A5%E6%9D%8E%E9%87%91%E9%93%AD%E5%81%87%E5%A9%86%E5%A9%86%E4%BA%8B%E4%BB%B6%23) `304.9K 🔥` `-60%`

Updated at 2026-06-24 16:05:00

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
