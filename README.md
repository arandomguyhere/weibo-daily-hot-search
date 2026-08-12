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

1. [新业态激活日常消费市场 (New business formats activate daily consumer market)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%9A%E6%80%81%E6%BF%80%E6%B4%BB%E6%97%A5%E5%B8%B8%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%23) `1.1M 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `1.1M 🔥` `NEW`
1. [李现王真儿李泽锋合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%8E%8B%E7%9C%9F%E5%84%BF%E6%9D%8E%E6%B3%BD%E9%94%8B%E5%90%88%E7%85%A7%23) `1.1M 🔥` `NEW`
1. [穿了和搭了的区别](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%BA%86%E5%92%8C%E6%90%AD%E4%BA%86%E7%9A%84%E5%8C%BA%E5%88%AB%23) `783.5K 🔥` `NEW`
1. [iPhone18Pro成本](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%88%90%E6%9C%AC%23) `755.0K 🔥` `NEW`
1. [台风浪卡生成](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B5%AA%E5%8D%A1%E7%94%9F%E6%88%90%23) `448.5K 🔥` `NEW`
1. [NBA历史首次父子对决](https://s.weibo.com/weibo?q=%23NBA%E5%8E%86%E5%8F%B2%E9%A6%96%E6%AC%A1%E7%88%B6%E5%AD%90%E5%AF%B9%E5%86%B3%23) `385.2K 🔥` `NEW`
1. [男子被炸街吵醒刺死骑行辅警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E7%82%B8%E8%A1%97%E5%90%B5%E9%86%92%E5%88%BA%E6%AD%BB%E9%AA%91%E8%A1%8C%E8%BE%85%E8%AD%A6%23) `384.2K 🔥` `NEW`
1. [黑尾酱疑似再婚](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%B0%BE%E9%85%B1%E7%96%91%E4%BC%BC%E5%86%8D%E5%A9%9A%23) `382.4K 🔥` `NEW`
1. [原来姚安娜是艺名](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A7%9A%E5%AE%89%E5%A8%9C%E6%98%AF%E8%89%BA%E5%90%8D%23) `379.8K 🔥` `NEW`
1. [时代峰峻防泄露把五代套黑塑料袋 (Times Fengjun anti-leakage cover with black plastic bag for the fifth generation)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%98%B2%E6%B3%84%E9%9C%B2%E6%8A%8A%E4%BA%94%E4%BB%A3%E5%A5%97%E9%BB%91%E5%A1%91%E6%96%99%E8%A2%8B%23) `375.0K 🔥` `NEW`
1. [31省上半年财政收入出炉](https://s.weibo.com/weibo?q=%2331%E7%9C%81%E4%B8%8A%E5%8D%8A%E5%B9%B4%E8%B4%A2%E6%94%BF%E6%94%B6%E5%85%A5%E5%87%BA%E7%82%89%23) `374.0K 🔥` `NEW`
1. [小酒窝和爸爸在一起就像小孩子](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%92%8C%E7%88%B8%E7%88%B8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%B0%B1%E5%83%8F%E5%B0%8F%E5%AD%A9%E5%AD%90%23) `368.5K 🔥` `NEW`
1. [高价洞洞鞋为什么卖不动了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%B7%E6%B4%9E%E6%B4%9E%E9%9E%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `368.3K 🔥` `NEW`
1. [胖东来因房东涨租关店](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%A0%E6%88%BF%E4%B8%9C%E6%B6%A8%E7%A7%9F%E5%85%B3%E5%BA%97%23) `364.1K 🔥` `NEW`
1. [曝七度空间新卫生巾全是污渍](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%83%E5%BA%A6%E7%A9%BA%E9%97%B4%E6%96%B0%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%85%A8%E6%98%AF%E6%B1%A1%E6%B8%8D%23) `359.2K 🔥` `NEW`
1. [朋友圈先私密几天再公开](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%85%88%E7%A7%81%E5%AF%86%E5%87%A0%E5%A4%A9%E5%86%8D%E5%85%AC%E5%BC%80%23) `357.1K 🔥` `NEW`
1. [杨幂王骁合作过10部剧](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%8E%8B%E9%AA%81%E5%90%88%E4%BD%9C%E8%BF%8710%E9%83%A8%E5%89%A7%23) `343.8K 🔥` `NEW`
1. [小鹏G9L挑战水陆空720度七重安全测试](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E6%8C%91%E6%88%98%E6%B0%B4%E9%99%86%E7%A9%BA720%E5%BA%A6%E4%B8%83%E9%87%8D%E5%AE%89%E5%85%A8%E6%B5%8B%E8%AF%95%23) `343.1K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `339.0K 🔥` `NEW`
1. [蔡徐坤喊你别熬夜 (Cai Xukun tells you not to stay up late)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E5%96%8A%E4%BD%A0%E5%88%AB%E7%86%AC%E5%A4%9C%23) `338.8K 🔥` `NEW`
1. [河南成强降雨中心](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%88%90%E5%BC%BA%E9%99%8D%E9%9B%A8%E4%B8%AD%E5%BF%83%23) `335.3K 🔥` `NEW`
1. [杨洋倩女幽魂cos](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%80%A9%E5%A5%B3%E5%B9%BD%E9%AD%82cos%23) `333.4K 🔥` `NEW`
1. [阚清子给粉丝准备了黄金](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%BB%99%E7%B2%89%E4%B8%9D%E5%87%86%E5%A4%87%E4%BA%86%E9%BB%84%E9%87%91%23) `329.3K 🔥` `NEW`
1. [影之刃零](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E4%B9%8B%E5%88%83%E9%9B%B6%23) `326.9K 🔥` `NEW`
1. [女子体重七八十斤暴食后肚子胀如怀孕](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%93%E9%87%8D%E4%B8%83%E5%85%AB%E5%8D%81%E6%96%A4%E6%9A%B4%E9%A3%9F%E5%90%8E%E8%82%9A%E5%AD%90%E8%83%80%E5%A6%82%E6%80%80%E5%AD%95%23) `320.4K 🔥` `NEW`
1. [乔治娜一开始并不相信C罗要娶她](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%B2%BB%E5%A8%9C%E4%B8%80%E5%BC%80%E5%A7%8B%E5%B9%B6%E4%B8%8D%E7%9B%B8%E4%BF%A1C%E7%BD%97%E8%A6%81%E5%A8%B6%E5%A5%B9%23) `282.4K 🔥` `NEW`
1. [陈锦鸿自曝因儿子自闭在最红时退圈](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%94%A6%E9%B8%BF%E8%87%AA%E6%9B%9D%E5%9B%A0%E5%84%BF%E5%AD%90%E8%87%AA%E9%97%AD%E5%9C%A8%E6%9C%80%E7%BA%A2%E6%97%B6%E9%80%80%E5%9C%88%23) `264.8K 🔥` `NEW`
1. [欧维丽隐瞒使用果渣油](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E7%BB%B4%E4%B8%BD%E9%9A%90%E7%9E%92%E4%BD%BF%E7%94%A8%E6%9E%9C%E6%B8%A3%E6%B2%B9%23) `252.3K 🔥` `NEW`
1. [Angelababy马尔代夫游客照](https://s.weibo.com/weibo?q=%23Angelababy%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E6%B8%B8%E5%AE%A2%E7%85%A7%23) `251.6K 🔥` `NEW`
1. [李现张婧仪这是剧宣不是官宣 (Li Xian, Zhang Jingyi, this is a drama announcement, not an official announcement)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%A0%E5%A9%A7%E4%BB%AA%E8%BF%99%E6%98%AF%E5%89%A7%E5%AE%A3%E4%B8%8D%E6%98%AF%E5%AE%98%E5%AE%A3%23) `250.9K 🔥` `NEW`
1. [Chatgpt把Deepseek当宿敌了](https://s.weibo.com/weibo?q=%23Chatgpt%E6%8A%8ADeepseek%E5%BD%93%E5%AE%BF%E6%95%8C%E4%BA%86%23) `227.2K 🔥` `NEW`
1. [陈俊生离婚后为什么对平儿不好](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F%E7%A6%BB%E5%A9%9A%E5%90%8E%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AF%B9%E5%B9%B3%E5%84%BF%E4%B8%8D%E5%A5%BD%23) `1.2M 🔥` `+164%`
1. [文俊辉内娱最稀缺的长跑型演员](https://s.weibo.com/weibo?q=%23%E6%96%87%E4%BF%8A%E8%BE%89%E5%86%85%E5%A8%B1%E6%9C%80%E7%A8%80%E7%BC%BA%E7%9A%84%E9%95%BF%E8%B7%91%E5%9E%8B%E6%BC%94%E5%91%98%23) `233.5K 🔥` `+62%`
1. [茅台的红丝带原来是这样用的](https://s.weibo.com/weibo?q=%23%E8%8C%85%E5%8F%B0%E7%9A%84%E7%BA%A2%E4%B8%9D%E5%B8%A6%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%99%E6%A0%B7%E7%94%A8%E7%9A%84%23) `386.6K 🔥`
1. [男子不堪炸街噪音刺死辅警被判死刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8D%E5%A0%AA%E7%82%B8%E8%A1%97%E5%99%AA%E9%9F%B3%E5%88%BA%E6%AD%BB%E8%BE%85%E8%AD%A6%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `378.2K 🔥`
1. [国行苹果AI支持机型](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%8C%E8%8B%B9%E6%9E%9CAI%E6%94%AF%E6%8C%81%E6%9C%BA%E5%9E%8B%23) `372.0K 🔥`
1. [步惊云脱口秀 杀猪盘](https://s.weibo.com/weibo?q=%23%E6%AD%A5%E6%83%8A%E4%BA%91%E8%84%B1%E5%8F%A3%E7%A7%80%20%E6%9D%80%E7%8C%AA%E7%9B%98%23) `352.6K 🔥`
1. [陈思诚现身女友家乡](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E7%8E%B0%E8%BA%AB%E5%A5%B3%E5%8F%8B%E5%AE%B6%E4%B9%A1%23) `324.5K 🔥`
1. [忙到晕倒炸鸡店员工已结算工资离职 (Fried chicken restaurant employee was so busy that he fainted and resigned after paying his salary)](https://s.weibo.com/weibo?q=%23%E5%BF%99%E5%88%B0%E6%99%95%E5%80%92%E7%82%B8%E9%B8%A1%E5%BA%97%E5%91%98%E5%B7%A5%E5%B7%B2%E7%BB%93%E7%AE%97%E5%B7%A5%E8%B5%84%E7%A6%BB%E8%81%8C%23) `324.5K 🔥`
1. [汪峰透露女儿留学时最扎心一幕](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E9%80%8F%E9%9C%B2%E5%A5%B3%E5%84%BF%E7%95%99%E5%AD%A6%E6%97%B6%E6%9C%80%E6%89%8E%E5%BF%83%E4%B8%80%E5%B9%95%23) `251.7K 🔥`
1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `2.7M 🔥` `-40%`
1. [高钾晚餐可以让人睡得更香 (A high-potassium dinner can help people sleep more soundly)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%92%BE%E6%99%9A%E9%A4%90%E5%8F%AF%E4%BB%A5%E8%AE%A9%E4%BA%BA%E7%9D%A1%E5%BE%97%E6%9B%B4%E9%A6%99%23) `861.3K 🔥` `-29%`
1. [C罗五个孩子出席婚礼 (Ronaldo's five children attended the wedding)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%BA%94%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%87%BA%E5%B8%AD%E5%A9%9A%E7%A4%BC%23) `344.2K 🔥` `-72%`
1. [业内认为蒋奇明是下一个大演员](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%AE%A4%E4%B8%BA%E8%92%8B%E5%A5%87%E6%98%8E%E6%98%AF%E4%B8%8B%E4%B8%80%E4%B8%AA%E5%A4%A7%E6%BC%94%E5%91%98%23) `282.4K 🔥` `-32%`
1. [日全食](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `252.4K 🔥` `-45%`
1. [白海豚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `250.9K 🔥` `-44%`
1. [六公主力挺赵丽颖百花奖 (Six Princesses Support Zhao Liying Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%85%AC%E4%B8%BB%E5%8A%9B%E6%8C%BA%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%99%BE%E8%8A%B1%E5%A5%96%23) `247.3K 🔥` `-58%`
1. [日本篡改历史被反噬了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%AF%A1%E6%94%B9%E5%8E%86%E5%8F%B2%E8%A2%AB%E5%8F%8D%E5%99%AC%E4%BA%86%23) `242.1K 🔥` `-35%`
1. [郭兰英逝世 (Guo Lanying passed away)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%85%B0%E8%8B%B1%E9%80%9D%E4%B8%96%23) `224.1K 🔥` `-40%`

Updated at 2026-08-12 12:28:01

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
