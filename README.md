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

1. [五一档票房 (May Day box office)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%A1%A3%E7%A5%A8%E6%88%BF%23) `1.2M 🔥` `NEW`
1. [用画笔定格追光的他们是什么体验](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%94%BB%E7%AC%94%E5%AE%9A%E6%A0%BC%E8%BF%BD%E5%85%89%E7%9A%84%E4%BB%96%E4%BB%AC%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `685.4K 🔥` `NEW`
1. [安全背后有乾崑](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%85%A8%E8%83%8C%E5%90%8E%E6%9C%89%E4%B9%BE%E5%B4%91%23) `683.5K 🔥` `NEW`
1. [对方拒绝了你的恶意](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E6%8B%92%E7%BB%9D%E4%BA%86%E4%BD%A0%E7%9A%84%E6%81%B6%E6%84%8F%23) `681.8K 🔥` `NEW`
1. [何宣林 镜头](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E9%95%9C%E5%A4%B4%23) `669.8K 🔥` `NEW`
1. [穿普拉达的女王 米兰达坐经济舱](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B%20%E7%B1%B3%E5%85%B0%E8%BE%BE%E5%9D%90%E7%BB%8F%E6%B5%8E%E8%88%B1%23) `586.7K 🔥` `NEW`
1. [黄鳝被喂避孕药是传了30年的谣言](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%B3%9D%E8%A2%AB%E5%96%82%E9%81%BF%E5%AD%95%E8%8D%AF%E6%98%AF%E4%BC%A0%E4%BA%8630%E5%B9%B4%E7%9A%84%E8%B0%A3%E8%A8%80%23) `492.9K 🔥` `NEW`
1. [著名企业家李建宏国外遭车祸去世](https://s.weibo.com/weibo?q=%23%E8%91%97%E5%90%8D%E4%BC%81%E4%B8%9A%E5%AE%B6%E6%9D%8E%E5%BB%BA%E5%AE%8F%E5%9B%BD%E5%A4%96%E9%81%AD%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `484.8K 🔥` `NEW`
1. [不爱睡觉的国家迎来了最懂他的奶茶](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%88%B1%E7%9D%A1%E8%A7%89%E7%9A%84%E5%9B%BD%E5%AE%B6%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E6%87%82%E4%BB%96%E7%9A%84%E5%A5%B6%E8%8C%B6%23) `436.2K 🔥` `NEW`
1. [金靖回应瘦到认不出](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `399.4K 🔥` `NEW`
1. [何不同舟渡 檀健次卢昱晓曹骏 (Why don’t you cross by boat Tan Jianci Lu Yuxiao Cao Jun)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8D%E5%90%8C%E8%88%9F%E6%B8%A1%20%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E6%9B%B9%E9%AA%8F%23) `375.5K 🔥` `NEW`
1. [甲亢哥在深圳买的手机掉海里了](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B5%B7%E9%87%8C%E4%BA%86%23) `336.5K 🔥` `NEW`
1. [时代少年团演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `324.8K 🔥` `NEW`
1. [FPX.ZQ对战Wolves](https://s.weibo.com/weibo?q=%23FPX.ZQ%E5%AF%B9%E6%88%98Wolves%23) `314.0K 🔥` `NEW`
1. [被靠出了人形的北京地铁](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%9D%A0%E5%87%BA%E4%BA%86%E4%BA%BA%E5%BD%A2%E7%9A%84%E5%8C%97%E4%BA%AC%E5%9C%B0%E9%93%81%23) `294.5K 🔥` `NEW`
1. [精神科专家称年轻人急需养脑](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%A5%9E%E7%A7%91%E4%B8%93%E5%AE%B6%E7%A7%B0%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%80%A5%E9%9C%80%E5%85%BB%E8%84%91%23) `290.2K 🔥` `NEW`
1. [王濛选曲全是为了李小冉唐艺昕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%80%89%E6%9B%B2%E5%85%A8%E6%98%AF%E4%B8%BA%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%90%E8%89%BA%E6%98%95%23) `289.1K 🔥` `NEW`
1. [因为小三好看不让女儿好看](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E5%B0%8F%E4%B8%89%E5%A5%BD%E7%9C%8B%E4%B8%8D%E8%AE%A9%E5%A5%B3%E5%84%BF%E5%A5%BD%E7%9C%8B%23) `288.1K 🔥` `NEW`
1. [你初来人间她已是暮年](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%88%9D%E6%9D%A5%E4%BA%BA%E9%97%B4%E5%A5%B9%E5%B7%B2%E6%98%AF%E6%9A%AE%E5%B9%B4%23) `250.5K 🔥` `NEW`
1. [消失的人 捂眼](https://s.weibo.com/weibo?q=%23%E6%B6%88%E5%A4%B1%E7%9A%84%E4%BA%BA%20%E6%8D%82%E7%9C%BC%23) `209.8K 🔥` `NEW`
1. [38.5是分数不是温度 (38.5 is a fraction, not a temperature)](https://s.weibo.com/weibo?q=%2338.5%E6%98%AF%E5%88%86%E6%95%B0%E4%B8%8D%E6%98%AF%E6%B8%A9%E5%BA%A6%23) `175.0K 🔥` `NEW`
1. [陕西11岁失联男孩遗体被发现](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF11%E5%B2%81%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%A9%E9%81%97%E4%BD%93%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `159.7K 🔥` `NEW`
1. [觉得倒霉的可以看看张月](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E5%80%92%E9%9C%89%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B%E7%9C%8B%E5%BC%A0%E6%9C%88%23) `159.5K 🔥` `NEW`
1. [孙怡 智性恋爆发](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E6%99%BA%E6%80%A7%E6%81%8B%E7%88%86%E5%8F%91%23) `159.2K 🔥` `NEW`
1. [白鹿陈哲远有没有体面一点的拍摄方式](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%99%88%E5%93%B2%E8%BF%9C%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E6%8B%8D%E6%91%84%E6%96%B9%E5%BC%8F%23) `140.5K 🔥` `NEW`
1. [陈芋汐卢为10米台金牌](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%E5%8D%A2%E4%B8%BA10%E7%B1%B3%E5%8F%B0%E9%87%91%E7%89%8C%23) `123.0K 🔥` `NEW`
1. [小米汽车4月交付量超3万台 (Xiaomi Motors delivered more than 30,000 units in April)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A64%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%E8%B6%853%E4%B8%87%E5%8F%B0%23) `416.8K 🔥` `+43%`
1. [马龙出行带娃参加斯巴达](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%87%BA%E8%A1%8C%E5%B8%A6%E5%A8%83%E5%8F%82%E5%8A%A0%E6%96%AF%E5%B7%B4%E8%BE%BE%23) `308.1K 🔥` `+63%`
1. [DeepSeek梦话大赏](https://s.weibo.com/weibo?q=%23DeepSeek%E6%A2%A6%E8%AF%9D%E5%A4%A7%E8%B5%8F%23) `293.4K 🔥` `+108%`
1. [金饰克价回落买不买](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%9B%9E%E8%90%BD%E4%B9%B0%E4%B8%8D%E4%B9%B0%23) `171.6K 🔥` `+21%`
1. [南开大学已成立调查组 (Nankai University has established an investigation team)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E5%B7%B2%E6%88%90%E7%AB%8B%E8%B0%83%E6%9F%A5%E7%BB%84%23) `863.4K 🔥`
1. [豆包挑榴莲](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%8C%91%E6%A6%B4%E8%8E%B2%23) `423.0K 🔥`
1. [顾茜茜怀孕五个月了 (Gu Qianqian is five months pregnant)](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E8%8C%9C%E8%8C%9C%E6%80%80%E5%AD%95%E4%BA%94%E4%B8%AA%E6%9C%88%E4%BA%86%23) `378.1K 🔥`
1. [迪丽热巴和素人合影](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%92%8C%E7%B4%A0%E4%BA%BA%E5%90%88%E5%BD%B1%23) `333.1K 🔥`
1. [特朗普称美国结束对伊朗战争](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%9B%BD%E7%BB%93%E6%9D%9F%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%89%23) `318.3K 🔥`
1. [妈妈自曝曾故意不让瑶一瑶白天睡觉](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%87%AA%E6%9B%9D%E6%9B%BE%E6%95%85%E6%84%8F%E4%B8%8D%E8%AE%A9%E7%91%B6%E4%B8%80%E7%91%B6%E7%99%BD%E5%A4%A9%E7%9D%A1%E8%A7%89%23) `317.5K 🔥`
1. [孙怡选了阚清子](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%80%89%E4%BA%86%E9%98%9A%E6%B8%85%E5%AD%90%23) `317.3K 🔥`
1. [鸿蒙智行4月交付32759辆汽车](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C4%E6%9C%88%E4%BA%A4%E4%BB%9832759%E8%BE%86%E6%B1%BD%E8%BD%A6%23) `303.4K 🔥`
1. [深圳地铁去年亏超371亿元](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%9C%B0%E9%93%81%E5%8E%BB%E5%B9%B4%E4%BA%8F%E8%B6%85371%E4%BA%BF%E5%85%83%23) `295.0K 🔥`
1. [长沙地铁无人行李箱墙又出现了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%9C%B0%E9%93%81%E6%97%A0%E4%BA%BA%E8%A1%8C%E6%9D%8E%E7%AE%B1%E5%A2%99%E5%8F%88%E5%87%BA%E7%8E%B0%E4%BA%86%23) `291.8K 🔥`
1. [月销超7万零跑创新高](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%94%80%E8%B6%857%E4%B8%87%E9%9B%B6%E8%B7%91%E5%88%9B%E6%96%B0%E9%AB%98%23) `162.9K 🔥`
1. [中国首例脑机接口植入患者能下棋了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%BE%8B%E8%84%91%E6%9C%BA%E6%8E%A5%E5%8F%A3%E6%A4%8D%E5%85%A5%E6%82%A3%E8%80%85%E8%83%BD%E4%B8%8B%E6%A3%8B%E4%BA%86%23) `116.2K 🔥`
1. [面包要涨价了 (Bread is going to be more expensive)](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E5%8C%85%E8%A6%81%E6%B6%A8%E4%BB%B7%E4%BA%86%23) `112.4K 🔥`
1. [家里没遗传到父母优点的孩子](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E6%B2%A1%E9%81%97%E4%BC%A0%E5%88%B0%E7%88%B6%E6%AF%8D%E4%BC%98%E7%82%B9%E7%9A%84%E5%AD%A9%E5%AD%90%23) `377.8K 🔥` `-42%`
1. [曾沛慈个人喜爱度第五](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%AA%E4%BA%BA%E5%96%9C%E7%88%B1%E5%BA%A6%E7%AC%AC%E4%BA%94%23) `340.6K 🔥` `-47%`
1. [labubu冰箱被炒至19999元 (Labubu refrigerator is priced at 19,999 yuan)](https://s.weibo.com/weibo?q=%23labubu%E5%86%B0%E7%AE%B1%E8%A2%AB%E7%82%92%E8%87%B319999%E5%85%83%23) `317.5K 🔥` `-48%`
1. [陈瑶没选张月](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B2%A1%E9%80%89%E5%BC%A0%E6%9C%88%23) `246.3K 🔥` `-23%`
1. [陈璟翊 时代峰峻](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%92%9F%E7%BF%8A%20%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%23) `171.3K 🔥` `-43%`
1. [约基奇又打架了](https://s.weibo.com/weibo?q=%23%E7%BA%A6%E5%9F%BA%E5%A5%87%E5%8F%88%E6%89%93%E6%9E%B6%E4%BA%86%23) `151.8K 🔥` `-52%`
1. [五一就该让千问AI劳动](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%B0%B1%E8%AF%A5%E8%AE%A9%E5%8D%83%E9%97%AEAI%E5%8A%B3%E5%8A%A8%23) `115.5K 🔥` `-57%`
1. [时代少年团演唱会造型 (Times Youth League concert look)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%A0%E5%9E%8B%23) `115.3K 🔥` `-60%`

Updated at 2026-05-01 16:52:01

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
