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

1. [在上海找到创作主场 (Find your creative home in Shanghai)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8A%E6%B5%B7%E6%89%BE%E5%88%B0%E5%88%9B%E4%BD%9C%E4%B8%BB%E5%9C%BA%23) `1.1M 🔥` `NEW`
1. [鸟巢偶遇王菲看谢霆锋演唱会](https://s.weibo.com/weibo?q=%23%E9%B8%9F%E5%B7%A2%E5%81%B6%E9%81%87%E7%8E%8B%E8%8F%B2%E7%9C%8B%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `1.0M 🔥` `NEW`
1. [牙齿和情绪的关系](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BD%BF%E5%92%8C%E6%83%85%E7%BB%AA%E7%9A%84%E5%85%B3%E7%B3%BB%23) `1.0M 🔥` `NEW`
1. [百店发支付宝助威袋为南京队加油](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%BA%97%E5%8F%91%E6%94%AF%E4%BB%98%E5%AE%9D%E5%8A%A9%E5%A8%81%E8%A2%8B%E4%B8%BA%E5%8D%97%E4%BA%AC%E9%98%9F%E5%8A%A0%E6%B2%B9%23) `944.1K 🔥` `NEW`
1. [WE以下克上BLG](https://s.weibo.com/weibo?q=%23WE%E4%BB%A5%E4%B8%8B%E5%85%8B%E4%B8%8ABLG%23) `604.6K 🔥` `NEW`
1. [台湾网红馆长撞脸三星堆文物](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%BD%91%E7%BA%A2%E9%A6%86%E9%95%BF%E6%92%9E%E8%84%B8%E4%B8%89%E6%98%9F%E5%A0%86%E6%96%87%E7%89%A9%23) `294.9K 🔥` `NEW`
1. [朱一龙做瑜伽](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%81%9A%E7%91%9C%E4%BC%BD%23) `289.7K 🔥` `NEW`
1. [王嘉尔出发参加何猷君奚梦瑶婚礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%87%BA%E5%8F%91%E5%8F%82%E5%8A%A0%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%23) `287.2K 🔥` `NEW`
1. [十二星座6月月运](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A76%E6%9C%88%E6%9C%88%E8%BF%90%23) `282.0K 🔥` `NEW`
1. [花间令2.0](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E9%97%B4%E4%BB%A42.0%23) `275.6K 🔥` `NEW`
1. [WE战胜BLG (WE defeated BLG)](https://s.weibo.com/weibo?q=%23WE%E6%88%98%E8%83%9CBLG%23) `267.6K 🔥` `NEW`
1. [谢霆锋演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `256.8K 🔥` `NEW`
1. [潘宥诚主页里都是虞书欣在帮他宣传](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%AE%A5%E8%AF%9A%E4%B8%BB%E9%A1%B5%E9%87%8C%E9%83%BD%E6%98%AF%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9C%A8%E5%B8%AE%E4%BB%96%E5%AE%A3%E4%BC%A0%23) `254.8K 🔥` `NEW`
1. [万花世界回应](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%9B%9E%E5%BA%94%23) `214.0K 🔥` `NEW`
1. [宋亚轩智性恋要被迷晕了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%99%BA%E6%80%A7%E6%81%8B%E8%A6%81%E8%A2%AB%E8%BF%B7%E6%99%95%E4%BA%86%23) `209.8K 🔥` `NEW`
1. [在京东买新手机省了2000](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%BA%AC%E4%B8%9C%E4%B9%B0%E6%96%B0%E6%89%8B%E6%9C%BA%E7%9C%81%E4%BA%862000%23) `197.0K 🔥` `NEW`
1. [14岁女孩和同学吵架后吞下3枚刀片](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%92%8C%E5%90%8C%E5%AD%A6%E5%90%B5%E6%9E%B6%E5%90%8E%E5%90%9E%E4%B8%8B3%E6%9E%9A%E5%88%80%E7%89%87%23) `184.0K 🔥` `NEW`
1. [Monki偷家](https://s.weibo.com/weibo?q=%23Monki%E5%81%B7%E5%AE%B6%23) `161.3K 🔥` `NEW`
1. [河智苑打歌舞台](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E6%99%BA%E8%8B%91%E6%89%93%E6%AD%8C%E8%88%9E%E5%8F%B0%23) `160.3K 🔥` `NEW`
1. [多所高校撤销外语学院](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E6%92%A4%E9%94%80%E5%A4%96%E8%AF%AD%E5%AD%A6%E9%99%A2%23) `147.2K 🔥` `NEW`
1. [家业 (Family business)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `140.7K 🔥` `NEW`
1. [中俄等6国投弃权票](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E7%AD%896%E5%9B%BD%E6%8A%95%E5%BC%83%E6%9D%83%E7%A5%A8%23) `133.5K 🔥` `NEW`
1. [买重疾险确诊脑瘤没钱做手术遭拒赔](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E9%87%8D%E7%96%BE%E9%99%A9%E7%A1%AE%E8%AF%8A%E8%84%91%E7%98%A4%E6%B2%A1%E9%92%B1%E5%81%9A%E6%89%8B%E6%9C%AF%E9%81%AD%E6%8B%92%E8%B5%94%23) `130.7K 🔥` `NEW`
1. [毛毛 我不是管泽元](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%AF%9B%20%E6%88%91%E4%B8%8D%E6%98%AF%E7%AE%A1%E6%B3%BD%E5%85%83%23) `123.3K 🔥` `NEW`
1. [中山大学通报论文学术不端](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E8%AE%BA%E6%96%87%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%23) `1.2M 🔥` `+136%`
1. [BLG对战WE](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98WE%23) `645.3K 🔥` `+128%`
1. [她家长真去找你你又不敢见](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E5%AE%B6%E9%95%BF%E7%9C%9F%E5%8E%BB%E6%89%BE%E4%BD%A0%E4%BD%A0%E5%8F%88%E4%B8%8D%E6%95%A2%E8%A7%81%23) `615.1K 🔥` `+23%`
1. [大爷协议娶小24岁女子2年便闹离婚](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%8D%8F%E8%AE%AE%E5%A8%B6%E5%B0%8F24%E5%B2%81%E5%A5%B3%E5%AD%902%E5%B9%B4%E4%BE%BF%E9%97%B9%E7%A6%BB%E5%A9%9A%23) `245.3K 🔥` `+39%`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `204.7K 🔥` `+56%`
1. [这样的衣服才配预售](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E8%A1%A3%E6%9C%8D%E6%89%8D%E9%85%8D%E9%A2%84%E5%94%AE%23) `200.4K 🔥` `+44%`
1. [南开大学通报论文数据存疑问题 (Nankai University reports questionable issues with paper data)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E8%AE%BA%E6%96%87%E6%95%B0%E6%8D%AE%E5%AD%98%E7%96%91%E9%97%AE%E9%A2%98%23) `1.1M 🔥`
1. [徐志胜在桃花坞聊沈月王鹤棣 (Xu Zhisheng chats with Shen Yue and Wang Hedi in Taohuawu)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%9C%A8%E6%A1%83%E8%8A%B1%E5%9D%9E%E8%81%8A%E6%B2%88%E6%9C%88%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `968.4K 🔥`
1. [麦当劳汉堡缩小比例](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E6%B1%89%E5%A0%A1%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%23) `795.0K 🔥`
1. [刘诗诗 从此不敢见观音](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E4%BB%8E%E6%AD%A4%E4%B8%8D%E6%95%A2%E8%A7%81%E8%A7%82%E9%9F%B3%23) `602.2K 🔥`
1. [微信几乎把每个人捆绑在线上](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `600.2K 🔥`
1. [对早睡起了敬意 (Respect for going to bed early)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%97%A9%E7%9D%A1%E8%B5%B7%E4%BA%86%E6%95%AC%E6%84%8F%23) `578.6K 🔥`
1. [万花世界原主换了一个人演 (The original host of Wanhua World has been replaced by another person)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8E%9F%E4%B8%BB%E6%8D%A2%E4%BA%86%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%BC%94%23) `408.1K 🔥`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `398.6K 🔥`
1. [高志凯预测全球将爆发的危机](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BF%97%E5%87%AF%E9%A2%84%E6%B5%8B%E5%85%A8%E7%90%83%E5%B0%86%E7%88%86%E5%8F%91%E7%9A%84%E5%8D%B1%E6%9C%BA%23) `386.5K 🔥`
1. [两千亿巨头高管减持套现超4.3亿](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8D%83%E4%BA%BF%E5%B7%A8%E5%A4%B4%E9%AB%98%E7%AE%A1%E5%87%8F%E6%8C%81%E5%A5%97%E7%8E%B0%E8%B6%854.3%E4%BA%BF%23) `245.8K 🔥`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `202.5K 🔥`
1. [陈小春连怼导演四次 (Jordan Chan criticized the director four times in a row)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E8%BF%9E%E6%80%BC%E5%AF%BC%E6%BC%94%E5%9B%9B%E6%AC%A1%23) `156.2K 🔥`
1. [网友阻止印度游客在水源区洗澡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%98%BB%E6%AD%A2%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B0%B4%E6%BA%90%E5%8C%BA%E6%B4%97%E6%BE%A1%23) `554.7K 🔥` `-34%`
1. [攻玉](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%23) `358.9K 🔥` `-38%`
1. [念相思开机 (Thinking of lovesickness starts up)](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%BC%80%E6%9C%BA%23) `271.7K 🔥` `-68%`
1. [张雪机车阿拉贡站第8](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E9%98%BF%E6%8B%89%E8%B4%A1%E7%AB%99%E7%AC%AC8%23) `216.0K 🔥` `-58%`
1. [张维威回应隐瞒肖旭恋情 (Zhang Weiwei responded to concealing Xiao Xu’s relationship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E5%A8%81%E5%9B%9E%E5%BA%94%E9%9A%90%E7%9E%92%E8%82%96%E6%97%AD%E6%81%8B%E6%83%85%23) `203.4K 🔥` `-39%`
1. [曝唐嫣罗晋经常一起参加女儿活动](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E7%BB%8F%E5%B8%B8%E4%B8%80%E8%B5%B7%E5%8F%82%E5%8A%A0%E5%A5%B3%E5%84%BF%E6%B4%BB%E5%8A%A8%23) `194.2K 🔥` `-42%`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `176.5K 🔥` `-21%`
1. [神仙肉 (Fairy Meat)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `164.8K 🔥` `-41%`
1. [陈都灵化着妆睡着了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%8C%96%E7%9D%80%E5%A6%86%E7%9D%A1%E7%9D%80%E4%BA%86%23) `145.6K 🔥` `-57%`

Updated at 2026-05-30 22:24:35

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
