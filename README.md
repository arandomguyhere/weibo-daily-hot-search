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

1. [全球最赚钱公司中国占七席](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E8%B5%9A%E9%92%B1%E5%85%AC%E5%8F%B8%E4%B8%AD%E5%9B%BD%E5%8D%A0%E4%B8%83%E5%B8%AD%23) `3.8M 🔥` `NEW`
1. [微博视界大会节目单](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E8%A7%86%E7%95%8C%E5%A4%A7%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `1.2M 🔥` `NEW`
1. [广交会亮出国货新风采](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E4%BA%AE%E5%87%BA%E5%9B%BD%E8%B4%A7%E6%96%B0%E9%A3%8E%E9%87%87%23) `942.1K 🔥` `NEW`
1. [艾米 36码的脚穿40码的鞋](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%2036%E7%A0%81%E7%9A%84%E8%84%9A%E7%A9%BF40%E7%A0%81%E7%9A%84%E9%9E%8B%23) `589.6K 🔥` `NEW`
1. [卖650万捐赠房产要缴450万的税](https://s.weibo.com/weibo?q=%23%E5%8D%96650%E4%B8%87%E6%8D%90%E8%B5%A0%E6%88%BF%E4%BA%A7%E8%A6%81%E7%BC%B4450%E4%B8%87%E7%9A%84%E7%A8%8E%23) `484.2K 🔥` `NEW`
1. [狐狸叼着高原大米饭路过王一博](https://s.weibo.com/weibo?q=%23%E7%8B%90%E7%8B%B8%E5%8F%BC%E7%9D%80%E9%AB%98%E5%8E%9F%E5%A4%A7%E7%B1%B3%E9%A5%AD%E8%B7%AF%E8%BF%87%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `322.3K 🔥` `NEW`
1. [43岁博士辞职因书太多开了家书店](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E5%8D%9A%E5%A3%AB%E8%BE%9E%E8%81%8C%E5%9B%A0%E4%B9%A6%E5%A4%AA%E5%A4%9A%E5%BC%80%E4%BA%86%E5%AE%B6%E4%B9%A6%E5%BA%97%23) `308.3K 🔥` `NEW`
1. [微博视界大会红毯](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E8%A7%86%E7%95%8C%E5%A4%A7%E4%BC%9A%E7%BA%A2%E6%AF%AF%23) `244.3K 🔥` `NEW`
1. [胃癌里最会伪装的印戒细胞癌](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E9%87%8C%E6%9C%80%E4%BC%9A%E4%BC%AA%E8%A3%85%E7%9A%84%E5%8D%B0%E6%88%92%E7%BB%86%E8%83%9E%E7%99%8C%23) `243.7K 🔥` `NEW`
1. [伦德博格谈库里晃倒东契奇](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E5%BE%B7%E5%8D%9A%E6%A0%BC%E8%B0%88%E5%BA%93%E9%87%8C%E6%99%83%E5%80%92%E4%B8%9C%E5%A5%91%E5%A5%87%23) `241.7K 🔥` `NEW`
1. [娜扎直播卸妆卸了个寂寞](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%9B%B4%E6%92%AD%E5%8D%B8%E5%A6%86%E5%8D%B8%E4%BA%86%E4%B8%AA%E5%AF%82%E5%AF%9E%23) `240.4K 🔥` `NEW`
1. [江苏反思2008年高考改革](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E5%8F%8D%E6%80%9D2008%E5%B9%B4%E9%AB%98%E8%80%83%E6%94%B9%E9%9D%A9%23) `234.7K 🔥` `NEW`
1. [小酒窝收到董璇张维伊送的小狗哭了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%94%B6%E5%88%B0%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E9%80%81%E7%9A%84%E5%B0%8F%E7%8B%97%E5%93%AD%E4%BA%86%23) `232.9K 🔥` `NEW`
1. [孟子义蝴蝶抹胸](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%9D%B4%E8%9D%B6%E6%8A%B9%E8%83%B8%23) `231.2K 🔥` `NEW`
1. [南柱赫还是和李圣经在一起帅](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%9F%B1%E8%B5%AB%E8%BF%98%E6%98%AF%E5%92%8C%E6%9D%8E%E5%9C%A3%E7%BB%8F%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%B8%85%23) `231.1K 🔥` `NEW`
1. [男人看似喜欢你却不推进关系](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%BA%BA%E7%9C%8B%E4%BC%BC%E5%96%9C%E6%AC%A2%E4%BD%A0%E5%8D%B4%E4%B8%8D%E6%8E%A8%E8%BF%9B%E5%85%B3%E7%B3%BB%23) `225.9K 🔥` `NEW`
1. [勒布伦2比1孙颖莎](https://s.weibo.com/weibo?q=%23%E5%8B%92%E5%B8%83%E4%BC%A62%E6%AF%941%E5%AD%99%E9%A2%96%E8%8E%8E%23) `220.5K 🔥` `NEW`
1. [国行苹果智能首批功能](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%8C%E8%8B%B9%E6%9E%9C%E6%99%BA%E8%83%BD%E9%A6%96%E6%89%B9%E5%8A%9F%E8%83%BD%23) `213.4K 🔥` `NEW`
1. [李昀锐向镜头展示尚公主言尚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%90%91%E9%95%9C%E5%A4%B4%E5%B1%95%E7%A4%BA%E5%B0%9A%E5%85%AC%E4%B8%BB%E8%A8%80%E5%B0%9A%23) `208.5K 🔥` `NEW`
1. [张一鸣不到30岁微博汇总](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E9%B8%A3%E4%B8%8D%E5%88%B030%E5%B2%81%E5%BE%AE%E5%8D%9A%E6%B1%87%E6%80%BB%23) `198.8K 🔥` `NEW`
1. [厉娜自曝演日本人的时候130斤](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%87%AA%E6%9B%9D%E6%BC%94%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%9A%84%E6%97%B6%E5%80%99130%E6%96%A4%23) `195.9K 🔥` `NEW`
1. [张萌马天宇其实是最难和好的一对](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%85%B6%E5%AE%9E%E6%98%AF%E6%9C%80%E9%9A%BE%E5%92%8C%E5%A5%BD%E7%9A%84%E4%B8%80%E5%AF%B9%23) `195.4K 🔥` `NEW`
1. [女子吃了1盘猪蹄170斤瘦到88斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E4%BA%861%E7%9B%98%E7%8C%AA%E8%B9%84170%E6%96%A4%E7%98%A6%E5%88%B088%E6%96%A4%23) `195.1K 🔥` `NEW`
1. [胃癌早期无明显胃痛](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E6%97%A9%E6%9C%9F%E6%97%A0%E6%98%8E%E6%98%BE%E8%83%83%E7%97%9B%23) `194.1K 🔥` `NEW`
1. [娜扎的素颜给了导演一点小震撼](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%9A%84%E7%B4%A0%E9%A2%9C%E7%BB%99%E4%BA%86%E5%AF%BC%E6%BC%94%E4%B8%80%E7%82%B9%E5%B0%8F%E9%9C%87%E6%92%BC%23) `194.1K 🔥` `NEW`
1. [孙千劲劲儿的好带感](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%8A%B2%E5%8A%B2%E5%84%BF%E7%9A%84%E5%A5%BD%E5%B8%A6%E6%84%9F%23) `193.5K 🔥` `NEW`
1. [白敬亭王楚然荧幕初吻都是马思纯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%8D%A7%E5%B9%95%E5%88%9D%E5%90%BB%E9%83%BD%E6%98%AF%E9%A9%AC%E6%80%9D%E7%BA%AF%23) `188.6K 🔥` `NEW`
1. [巴西女子去健身房被男子带走性侵](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E5%8E%BB%E5%81%A5%E8%BA%AB%E6%88%BF%E8%A2%AB%E7%94%B7%E5%AD%90%E5%B8%A6%E8%B5%B0%E6%80%A7%E4%BE%B5%23) `188.1K 🔥` `NEW`
1. [孟子义黑色拖地礼裙](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E9%BB%91%E8%89%B2%E6%8B%96%E5%9C%B0%E7%A4%BC%E8%A3%99%23) `184.0K 🔥` `NEW`
1. [月薪4000一年攒了2万4](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA4000%E4%B8%80%E5%B9%B4%E6%94%92%E4%BA%862%E4%B8%874%23) `180.1K 🔥` `NEW`
1. [字辈居然可以放在最后一个字](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%BE%88%E5%B1%85%E7%84%B6%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%9C%A8%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%AD%97%23) `177.2K 🔥` `NEW`
1. [刘耀文 深圳](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%20%E6%B7%B1%E5%9C%B3%23) `165.2K 🔥` `NEW`
1. [王子璇悬崖悟道太烧心了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%82%AC%E5%B4%96%E6%82%9F%E9%81%93%E5%A4%AA%E7%83%A7%E5%BF%83%E4%BA%86%23) `159.0K 🔥` `NEW`
1. [湖人四将合砍7分](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%9B%9B%E5%B0%86%E5%90%88%E7%A0%8D7%E5%88%86%23) `152.3K 🔥` `NEW`
1. [微博视界大会](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E8%A7%86%E7%95%8C%E5%A4%A7%E4%BC%9A%23) `140.7K 🔥` `NEW`
1. [女客服被顾客骂到离职](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AE%A2%E6%9C%8D%E8%A2%AB%E9%A1%BE%E5%AE%A2%E9%AA%82%E5%88%B0%E7%A6%BB%E8%81%8C%23) `140.4K 🔥` `NEW`
1. [王子璇眼里文吉儿已经是零分朋友了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E7%9C%BC%E9%87%8C%E6%96%87%E5%90%89%E5%84%BF%E5%B7%B2%E7%BB%8F%E6%98%AF%E9%9B%B6%E5%88%86%E6%9C%8B%E5%8F%8B%E4%BA%86%23) `131.7K 🔥` `NEW`
1. [小城良方让爱奇艺嘎嘎回血](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%AE%A9%E7%88%B1%E5%A5%87%E8%89%BA%E5%98%8E%E5%98%8E%E5%9B%9E%E8%A1%80%23) `127.6K 🔥` `NEW`
1. [庞博孙乐言主持](https://s.weibo.com/weibo?q=%23%E5%BA%9E%E5%8D%9A%E5%AD%99%E4%B9%90%E8%A8%80%E4%B8%BB%E6%8C%81%23) `123.5K 🔥` `NEW`
1. [男子派出所内抢夺警枪打妻子被判4年](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B4%BE%E5%87%BA%E6%89%80%E5%86%85%E6%8A%A2%E5%A4%BA%E8%AD%A6%E6%9E%AA%E6%89%93%E5%A6%BB%E5%AD%90%E8%A2%AB%E5%88%A44%E5%B9%B4%23) `119.0K 🔥` `NEW`
1. [徐静雨谈库里晃倒东契奇](https://s.weibo.com/weibo?q=%23%E5%BE%90%E9%9D%99%E9%9B%A8%E8%B0%88%E5%BA%93%E9%87%8C%E6%99%83%E5%80%92%E4%B8%9C%E5%A5%91%E5%A5%87%23) `118.7K 🔥` `NEW`
1. [胡先煦 王楚然跟我抢女主干啥](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%20%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%B7%9F%E6%88%91%E6%8A%A2%E5%A5%B3%E4%B8%BB%E5%B9%B2%E5%95%A5%23) `118.0K 🔥` `NEW`
1. [苹果AI首批仅支持部分iPhone](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%E9%A6%96%E6%89%B9%E4%BB%85%E6%94%AF%E6%8C%81%E9%83%A8%E5%88%86iPhone%23) `116.2K 🔥` `NEW`
1. [昂跑未与姆巴佩解约或两头皆输](https://s.weibo.com/weibo?q=%23%E6%98%82%E8%B7%91%E6%9C%AA%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%A7%A3%E7%BA%A6%E6%88%96%E4%B8%A4%E5%A4%B4%E7%9A%86%E8%BE%93%23) `115.9K 🔥` `NEW`
1. [上淘宝趋势爆款5折起](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E8%B6%8B%E5%8A%BF%E7%88%86%E6%AC%BE5%E6%8A%98%E8%B5%B7%23) `892.8K 🔥` `+892%`
1. [针脚里的她力量](https://s.weibo.com/weibo?q=%23%E9%92%88%E8%84%9A%E9%87%8C%E7%9A%84%E5%A5%B9%E5%8A%9B%E9%87%8F%23) `317.0K 🔥` `+320%`
1. [波兰政变](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%85%B0%E6%94%BF%E5%8F%98%23) `238.6K 🔥` `-64%`
1. [吾恩去世](https://s.weibo.com/weibo?q=%23%E5%90%BE%E6%81%A9%E5%8E%BB%E4%B8%96%23) `236.3K 🔥` `-24%`
1. [女硕士案 性同意认定](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%A1%95%E5%A3%AB%E6%A1%88%20%E6%80%A7%E5%90%8C%E6%84%8F%E8%AE%A4%E5%AE%9A%23) `134.7K 🔥` `-54%`
1. [付辛博 井柏然](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A%20%E4%BA%95%E6%9F%8F%E7%84%B6%23) `126.8K 🔥` `-58%`

Updated at 2026-10-31 16:57:34

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
