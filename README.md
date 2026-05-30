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

1. [南开大学通报论文数据存疑问题 (Nankai University reports questionable issues with paper data)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E8%AE%BA%E6%96%87%E6%95%B0%E6%8D%AE%E5%AD%98%E7%96%91%E9%97%AE%E9%A2%98%23) `1.1M 🔥` `NEW`
1. [这些国产大国重器太提气](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%9B%BD%E4%BA%A7%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E5%A4%AA%E6%8F%90%E6%B0%94%23) `843.0K 🔥` `NEW`
1. [京东超市618低至5折](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%B6%85%E5%B8%82618%E4%BD%8E%E8%87%B35%E6%8A%98%23) `842.3K 🔥` `NEW`
1. [攻玉](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%23) `583.6K 🔥` `NEW`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `516.1K 🔥` `NEW`
1. [中山大学通报论文学术不端](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E8%AE%BA%E6%96%87%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%23) `487.9K 🔥` `NEW`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `377.5K 🔥` `NEW`
1. [住半年女租客床头插座发现摄像头](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E5%8D%8A%E5%B9%B4%E5%A5%B3%E7%A7%9F%E5%AE%A2%E5%BA%8A%E5%A4%B4%E6%8F%92%E5%BA%A7%E5%8F%91%E7%8E%B0%E6%91%84%E5%83%8F%E5%A4%B4%23) `335.8K 🔥` `NEW`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `222.7K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `215.2K 🔥` `NEW`
1. [陈小春连怼导演四次 (Jordan Chan criticized the director four times in a row)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E8%BF%9E%E6%80%BC%E5%AF%BC%E6%BC%94%E5%9B%9B%E6%AC%A1%23) `179.7K 🔥` `NEW`
1. [大爷协议娶小24岁女子2年便闹离婚](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%8D%8F%E8%AE%AE%E5%A8%B6%E5%B0%8F24%E5%B2%81%E5%A5%B3%E5%AD%902%E5%B9%B4%E4%BE%BF%E9%97%B9%E7%A6%BB%E5%A9%9A%23) `176.3K 🔥` `NEW`
1. [国乐无双](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%23) `176.0K 🔥` `NEW`
1. [窦靖童说到底谁给我投的票](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E8%AF%B4%E5%88%B0%E5%BA%95%E8%B0%81%E7%BB%99%E6%88%91%E6%8A%95%E7%9A%84%E7%A5%A8%23) `175.5K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `130.9K 🔥` `NEW`
1. [幼儿园老师疑威胁剪掉幼童舌头](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%80%81%E5%B8%88%E7%96%91%E5%A8%81%E8%83%81%E5%89%AA%E6%8E%89%E5%B9%BC%E7%AB%A5%E8%88%8C%E5%A4%B4%23) `118.6K 🔥` `NEW`
1. [外甥一声吼舅舅直接CPU烧了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%94%A5%E4%B8%80%E5%A3%B0%E5%90%BC%E8%88%85%E8%88%85%E7%9B%B4%E6%8E%A5CPU%E7%83%A7%E4%BA%86%23) `117.4K 🔥` `NEW`
1. [高会泡泡违禁词](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%E6%B3%A1%E6%B3%A1%E8%BF%9D%E7%A6%81%E8%AF%8D%23) `117.2K 🔥` `NEW`
1. [加拿大感谢中国](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `105.4K 🔥` `NEW`
1. [侯明昊工作室 行程图](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `103.4K 🔥` `NEW`
1. [美芯片股再度爆发 (U.S. chip stocks explode again)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%8A%AF%E7%89%87%E8%82%A1%E5%86%8D%E5%BA%A6%E7%88%86%E5%8F%91%23) `99.5K 🔥` `NEW`
1. [念相思开机](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%BC%80%E6%9C%BA%23) `850.4K 🔥` `+450%`
1. [麦当劳汉堡缩小比例](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E6%B1%89%E5%A0%A1%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%23) `842.2K 🔥` `+31%`
1. [徐志胜在桃花坞聊沈月王鹤棣](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%9C%A8%E6%A1%83%E8%8A%B1%E5%9D%9E%E8%81%8A%E6%B2%88%E6%9C%88%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `840.3K 🔥` `+103%`
1. [上班斯道普华莱士喊我过六一了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%96%AF%E9%81%93%E6%99%AE%E5%8D%8E%E8%8E%B1%E5%A3%AB%E5%96%8A%E6%88%91%E8%BF%87%E5%85%AD%E4%B8%80%E4%BA%86%23) `810.3K 🔥` `+27%`
1. [刘诗诗 从此不敢见观音](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E4%BB%8E%E6%AD%A4%E4%B8%8D%E6%95%A2%E8%A7%81%E8%A7%82%E9%9F%B3%23) `502.1K 🔥` `+238%`
1. [陈都灵化着妆睡着了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%8C%96%E7%9D%80%E5%A6%86%E7%9D%A1%E7%9D%80%E4%BA%86%23) `336.9K 🔥` `+76%`
1. [张维威回应隐瞒肖旭恋情 (Zhang Weiwei responded to concealing Xiao Xu’s relationship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E5%A8%81%E5%9B%9E%E5%BA%94%E9%9A%90%E7%9E%92%E8%82%96%E6%97%AD%E6%81%8B%E6%83%85%23) `335.7K 🔥` `+57%`
1. [BLG对战WE](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98WE%23) `282.7K 🔥` `+97%`
1. [两千亿巨头高管减持套现超4.3亿](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8D%83%E4%BA%BF%E5%B7%A8%E5%A4%B4%E9%AB%98%E7%AE%A1%E5%87%8F%E6%8C%81%E5%A5%97%E7%8E%B0%E8%B6%854.3%E4%BA%BF%23) `216.0K 🔥` `+26%`
1. [网友阻止印度游客在水源区洗澡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%98%BB%E6%AD%A2%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B0%B4%E6%BA%90%E5%8C%BA%E6%B4%97%E6%BE%A1%23) `841.9K 🔥`
1. [对早睡起了敬意 (Respect for going to bed early)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%97%A9%E7%9D%A1%E8%B5%B7%E4%BA%86%E6%95%AC%E6%84%8F%23) `610.0K 🔥`
1. [张雪机车阿拉贡站第8](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E9%98%BF%E6%8B%89%E8%B4%A1%E7%AB%99%E7%AC%AC8%23) `520.4K 🔥`
1. [她家长真去找你你又不敢见](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E5%AE%B6%E9%95%BF%E7%9C%9F%E5%8E%BB%E6%89%BE%E4%BD%A0%E4%BD%A0%E5%8F%88%E4%B8%8D%E6%95%A2%E8%A7%81%23) `499.6K 🔥`
1. [万花世界原主换了一个人演 (The original host of Wanhua World has been replaced by another person)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8E%9F%E4%B8%BB%E6%8D%A2%E4%BA%86%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%BC%94%23) `492.5K 🔥`
1. [致13人遇难客车车厢里有电动车](https://s.weibo.com/weibo?q=%23%E8%87%B413%E4%BA%BA%E9%81%87%E9%9A%BE%E5%AE%A2%E8%BD%A6%E8%BD%A6%E5%8E%A2%E9%87%8C%E6%9C%89%E7%94%B5%E5%8A%A8%E8%BD%A6%23) `444.9K 🔥`
1. [高志凯预测全球将爆发的危机](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BF%97%E5%87%AF%E9%A2%84%E6%B5%8B%E5%85%A8%E7%90%83%E5%B0%86%E7%88%86%E5%8F%91%E7%9A%84%E5%8D%B1%E6%9C%BA%23) `415.6K 🔥`
1. [曝唐嫣罗晋经常一起参加女儿活动](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E7%BB%8F%E5%B8%B8%E4%B8%80%E8%B5%B7%E5%8F%82%E5%8A%A0%E5%A5%B3%E5%84%BF%E6%B4%BB%E5%8A%A8%23) `335.5K 🔥`
1. [爷爷不泡茶樱桃小丸子](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%E6%A8%B1%E6%A1%83%E5%B0%8F%E4%B8%B8%E5%AD%90%23) `283.6K 🔥`
1. [一个人的执行力怎么可以这么强](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E6%89%A7%E8%A1%8C%E5%8A%9B%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%BF%99%E4%B9%88%E5%BC%BA%23) `180.3K 🔥`
1. [这样的衣服才配预售](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E8%A1%A3%E6%9C%8D%E6%89%8D%E9%85%8D%E9%A2%84%E5%94%AE%23) `139.7K 🔥`
1. [微信几乎把每个人捆绑在线上](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `508.2K 🔥` `-51%`
1. [神仙肉 (Fairy Meat)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `277.9K 🔥` `-45%`
1. [住东北就别熬夜了](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E4%B8%9C%E5%8C%97%E5%B0%B1%E5%88%AB%E7%86%AC%E5%A4%9C%E4%BA%86%23) `218.0K 🔥` `-41%`
1. [广东已经从红烧鸡腿变成大紫薯了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%B7%B2%E7%BB%8F%E4%BB%8E%E7%BA%A2%E7%83%A7%E9%B8%A1%E8%85%BF%E5%8F%98%E6%88%90%E5%A4%A7%E7%B4%AB%E8%96%AF%E4%BA%86%23) `217.6K 🔥` `-79%`
1. [鹿晗不让节目组说](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%B8%8D%E8%AE%A9%E8%8A%82%E7%9B%AE%E7%BB%84%E8%AF%B4%23) `205.5K 🔥` `-43%`
1. [虞书欣侯明昊念相思](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E5%BF%B5%E7%9B%B8%E6%80%9D%23) `139.2K 🔥` `-34%`
1. [女子想买1斤荔枝一个操作收到100斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%B3%E4%B9%B01%E6%96%A4%E8%8D%94%E6%9E%9D%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E6%94%B6%E5%88%B0100%E6%96%A4%23) `138.0K 🔥` `-38%`
1. [孙怡说唐艺昕保输](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%AF%B4%E5%94%90%E8%89%BA%E6%98%95%E4%BF%9D%E8%BE%93%23) `117.2K 🔥` `-27%`
1. [六一表演小朋友失误却意外出彩](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%80%E8%A1%A8%E6%BC%94%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%A4%B1%E8%AF%AF%E5%8D%B4%E6%84%8F%E5%A4%96%E5%87%BA%E5%BD%A9%23) `111.2K 🔥` `-46%`
1. [时代峰峻高会泡泡工作人员代聊](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E6%B3%A1%E6%B3%A1%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E4%BB%A3%E8%81%8A%23) `109.3K 🔥` `-47%`
1. [生命树被标注白玉兰奖 (Tree of Life Awarded Magnolia Award)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%A2%AB%E6%A0%87%E6%B3%A8%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `106.8K 🔥` `-43%`

Updated at 2026-05-30 20:51:33

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
