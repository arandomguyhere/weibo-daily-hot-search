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

1. [C罗原计划世界杯后完婚 (Ronaldo originally planned to get married after the World Cup)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%8E%9F%E8%AE%A1%E5%88%92%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E5%AE%8C%E5%A9%9A%23) `1.0M 🔥` `NEW`
1. [电表里藏着中国经济的黑马](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A1%A8%E9%87%8C%E8%97%8F%E7%9D%80%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E7%9A%84%E9%BB%91%E9%A9%AC%23) `845.1K 🔥` `NEW`
1. [现在的人越来越少喝传统饮料了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E4%BA%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%E5%96%9D%E4%BC%A0%E7%BB%9F%E9%A5%AE%E6%96%99%E4%BA%86%23) `842.7K 🔥` `NEW`
1. [有时候真别怪女儿会被黄毛骗走](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%97%B6%E5%80%99%E7%9C%9F%E5%88%AB%E6%80%AA%E5%A5%B3%E5%84%BF%E4%BC%9A%E8%A2%AB%E9%BB%84%E6%AF%9B%E9%AA%97%E8%B5%B0%23) `821.5K 🔥` `NEW`
1. [数码全家桶必须用同品牌么](https://s.weibo.com/weibo?q=%23%E6%95%B0%E7%A0%81%E5%85%A8%E5%AE%B6%E6%A1%B6%E5%BF%85%E9%A1%BB%E7%94%A8%E5%90%8C%E5%93%81%E7%89%8C%E4%B9%88%23) `818.7K 🔥` `NEW`
1. [王俊凯广州演唱会获批](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8E%B7%E6%89%B9%23) `803.8K 🔥` `NEW`
1. [怪不得留学生喜欢叫自己留子](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E7%95%99%E5%AD%A6%E7%94%9F%E5%96%9C%E6%AC%A2%E5%8F%AB%E8%87%AA%E5%B7%B1%E7%95%99%E5%AD%90%23) `796.7K 🔥` `NEW`
1. [薛之谦新歌](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%96%B0%E6%AD%8C%23) `792.5K 🔥` `NEW`
1. [武契奇公开表示支持乌克兰](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%85%AC%E5%BC%80%E8%A1%A8%E7%A4%BA%E6%94%AF%E6%8C%81%E4%B9%8C%E5%85%8B%E5%85%B0%23) `775.5K 🔥` `NEW`
1. [呵呵回应白鹿告别欢娱](https://s.weibo.com/weibo?q=%23%E5%91%B5%E5%91%B5%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E5%91%8A%E5%88%AB%E6%AC%A2%E5%A8%B1%23) `769.0K 🔥` `NEW`
1. [TF运动会心率挑战 (TF Games Heart Rate Challenge)](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%BF%83%E7%8E%87%E6%8C%91%E6%88%98%23) `760.0K 🔥` `NEW`
1. [LV起诉宁波一日用百货店](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E5%AE%81%E6%B3%A2%E4%B8%80%E6%97%A5%E7%94%A8%E7%99%BE%E8%B4%A7%E5%BA%97%23) `747.6K 🔥` `NEW`
1. [原来减肥迈开腿是真的有用](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%87%8F%E8%82%A5%E8%BF%88%E5%BC%80%E8%85%BF%E6%98%AF%E7%9C%9F%E7%9A%84%E6%9C%89%E7%94%A8%23) `733.4K 🔥` `NEW`
1. [埃及裁判称阿根廷绝杀应判无效](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%A3%81%E5%88%A4%E7%A7%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E5%BA%94%E5%88%A4%E6%97%A0%E6%95%88%23) `720.6K 🔥` `NEW`
1. [让每一度电物尽其用](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E6%AF%8F%E4%B8%80%E5%BA%A6%E7%94%B5%E7%89%A9%E5%B0%BD%E5%85%B6%E7%94%A8%23) `691.6K 🔥` `NEW`
1. [老外AI手搓世界杯剧情](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96AI%E6%89%8B%E6%90%93%E4%B8%96%E7%95%8C%E6%9D%AF%E5%89%A7%E6%83%85%23) `684.4K 🔥` `NEW`
1. [王濛回应半决赛解说被指偏心](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%9E%E5%BA%94%E5%8D%8A%E5%86%B3%E8%B5%9B%E8%A7%A3%E8%AF%B4%E8%A2%AB%E6%8C%87%E5%81%8F%E5%BF%83%23) `673.4K 🔥` `NEW`
1. [王橹杰疑似身体不适](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%96%91%E4%BC%BC%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `660.0K 🔥` `NEW`
1. [柳智敏父亲服役引争议](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%88%B6%E4%BA%B2%E6%9C%8D%E5%BD%B9%E5%BC%95%E4%BA%89%E8%AE%AE%23) `592.6K 🔥` `NEW`
1. [中国夫妇在印尼浮潜时溺亡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%AB%E5%A6%87%E5%9C%A8%E5%8D%B0%E5%B0%BC%E6%B5%AE%E6%BD%9C%E6%97%B6%E6%BA%BA%E4%BA%A1%23) `590.5K 🔥` `NEW`
1. [我已经吹不了25度的空调了 (I can no longer blow the air conditioner at 25 degrees Celsius)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B7%B2%E7%BB%8F%E5%90%B9%E4%B8%8D%E4%BA%8625%E5%BA%A6%E7%9A%84%E7%A9%BA%E8%B0%83%E4%BA%86%23) `588.0K 🔥` `NEW`
1. [穆祉丞笑王橹杰脱靶](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%AC%91%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%84%B1%E9%9D%B6%23) `583.9K 🔥` `NEW`
1. [阿根廷绝杀球被质疑犯规在先](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E7%90%83%E8%A2%AB%E8%B4%A8%E7%96%91%E7%8A%AF%E8%A7%84%E5%9C%A8%E5%85%88%23) `578.2K 🔥` `NEW`
1. [迪丽热巴的高跟鞋大了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A4%A7%E4%BA%86%23) `575.1K 🔥` `NEW`
1. [终于看清毛毛虫是怎么走路的了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9C%8B%E6%B8%85%E6%AF%9B%E6%AF%9B%E8%99%AB%E6%98%AF%E6%80%8E%E4%B9%88%E8%B5%B0%E8%B7%AF%E7%9A%84%E4%BA%86%23) `574.0K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `569.5K 🔥` `NEW`
1. [穆祉丞跳高第一名](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%B7%B3%E9%AB%98%E7%AC%AC%E4%B8%80%E5%90%8D%23) `560.0K 🔥` `NEW`
1. [拿到毕业证前不要去很远的地方](https://s.weibo.com/weibo?q=%23%E6%8B%BF%E5%88%B0%E6%AF%95%E4%B8%9A%E8%AF%81%E5%89%8D%E4%B8%8D%E8%A6%81%E5%8E%BB%E5%BE%88%E8%BF%9C%E7%9A%84%E5%9C%B0%E6%96%B9%23) `559.4K 🔥` `NEW`
1. [苏新皓求婚饭撒](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%B1%82%E5%A9%9A%E9%A5%AD%E6%92%92%23) `544.5K 🔥` `NEW`
1. [纪梵希缎光艺境现场直击](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E6%A2%B5%E5%B8%8C%E7%BC%8E%E5%85%89%E8%89%BA%E5%A2%83%E7%8E%B0%E5%9C%BA%E7%9B%B4%E5%87%BB%23) `543.4K 🔥` `NEW`
1. [功夫女足9亿票房 (Kung Fu Girls 900 million box office)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B39%E4%BA%BF%E7%A5%A8%E6%88%BF%23) `541.3K 🔥` `NEW`
1. [上班后突然理解孙悟空了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E5%AD%99%E6%82%9F%E7%A9%BA%E4%BA%86%23) `538.0K 🔥` `NEW`
1. [黄瑞雪同志因病离世](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%91%9E%E9%9B%AA%E5%90%8C%E5%BF%97%E5%9B%A0%E7%97%85%E7%A6%BB%E4%B8%96%23) `533.8K 🔥` `NEW`
1. [上厕所羞耻症](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8E%95%E6%89%80%E7%BE%9E%E8%80%BB%E7%97%87%23) `529.4K 🔥` `NEW`
1. [C罗被恶搞最惨的一次](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%A2%AB%E6%81%B6%E6%90%9E%E6%9C%80%E6%83%A8%E7%9A%84%E4%B8%80%E6%AC%A1%23) `523.5K 🔥` `NEW`
1. [张月的女主剧在央视一热播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9A%84%E5%A5%B3%E4%B8%BB%E5%89%A7%E5%9C%A8%E5%A4%AE%E8%A7%86%E4%B8%80%E7%83%AD%E6%92%AD%23) `520.8K 🔥` `NEW`
1. [百万年薪是极少数人的天才税](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E5%B9%B4%E8%96%AA%E6%98%AF%E6%9E%81%E5%B0%91%E6%95%B0%E4%BA%BA%E7%9A%84%E5%A4%A9%E6%89%8D%E7%A8%8E%23) `519.9K 🔥` `NEW`
1. [王俊凯广州馆比重庆大很多](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B9%BF%E5%B7%9E%E9%A6%86%E6%AF%94%E9%87%8D%E5%BA%86%E5%A4%A7%E5%BE%88%E5%A4%9A%23) `515.8K 🔥` `NEW`
1. [阿迪达斯又放假了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%E5%8F%88%E6%94%BE%E5%81%87%E4%BA%86%23) `514.0K 🔥` `NEW`
1. [突然觉得有车真的很方便](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E6%9C%89%E8%BD%A6%E7%9C%9F%E7%9A%84%E5%BE%88%E6%96%B9%E4%BE%BF%23) `2.9M 🔥` `+380%`
1. [王玉雯官方身高172 (Wang Yuwen’s official height is 172)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%AE%98%E6%96%B9%E8%BA%AB%E9%AB%98172%23) `725.1K 🔥` `+91%`
1. [曝白鹿新宣传是迪丽热巴宣传](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E6%96%B0%E5%AE%A3%E4%BC%A0%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AE%A3%E4%BC%A0%23) `709.7K 🔥` `+28%`
1. [A股 (A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `659.2K 🔥`
1. [朱志鑫 青苹果](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E9%9D%92%E8%8B%B9%E6%9E%9C%23) `581.0K 🔥`
1. [曾硬刚王健林的80后干部被查](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%A1%AC%E5%88%9A%E7%8E%8B%E5%81%A5%E6%9E%97%E7%9A%8480%E5%90%8E%E5%B9%B2%E9%83%A8%E8%A2%AB%E6%9F%A5%23) `566.8K 🔥`
1. [张天陈奕辰分手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E9%99%88%E5%A5%95%E8%BE%B0%E5%88%86%E6%89%8B%23) `552.7K 🔥`
1. [长鑫科技中签](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%23) `548.8K 🔥`
1. [阿根廷球员偷看英格兰战术小抄 (Argentina players peek at England tactics cheat sheet)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E5%91%98%E5%81%B7%E7%9C%8B%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%88%98%E6%9C%AF%E5%B0%8F%E6%8A%84%23) `824.5K 🔥` `-60%`
1. [徐刘蔚被查](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%88%98%E8%94%9A%E8%A2%AB%E6%9F%A5%23) `562.6K 🔥` `-43%`
1. [偷票房 (Steal the box office)](https://s.weibo.com/weibo?q=%23%E5%81%B7%E7%A5%A8%E6%88%BF%23) `555.4K 🔥` `-27%`
1. [父母离婚孩子想跟爸爸被法院驳回](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E5%AD%A9%E5%AD%90%E6%83%B3%E8%B7%9F%E7%88%B8%E7%88%B8%E8%A2%AB%E6%B3%95%E9%99%A2%E9%A9%B3%E5%9B%9E%23) `527.2K 🔥` `-25%`

Updated at 2026-07-16 17:01:37

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
