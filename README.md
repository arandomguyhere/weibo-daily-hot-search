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

1. [易炼红被查 (Yi Lianhong was investigated)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%82%BC%E7%BA%A2%E8%A2%AB%E6%9F%A5%23) `1.2M 🔥` `NEW`
1. [谷爱凌错失金牌根本原因](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%94%99%E5%A4%B1%E9%87%91%E7%89%8C%E6%A0%B9%E6%9C%AC%E5%8E%9F%E5%9B%A0%23) `1.0M 🔥` `NEW`
1. [来北京过年吧](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E5%8C%97%E4%BA%AC%E8%BF%87%E5%B9%B4%E5%90%A7%23) `847.2K 🔥` `NEW`
1. [黑神话钟馗](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%23) `713.7K 🔥` `NEW`
1. [22岁当村支书28岁晒成绩火了](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%BD%93%E6%9D%91%E6%94%AF%E4%B9%A628%E5%B2%81%E6%99%92%E6%88%90%E7%BB%A9%E7%81%AB%E4%BA%86%23) `467.6K 🔥` `NEW`
1. [农村抑郁症确诊率低自杀率反而更高](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E6%8A%91%E9%83%81%E7%97%87%E7%A1%AE%E8%AF%8A%E7%8E%87%E4%BD%8E%E8%87%AA%E6%9D%80%E7%8E%87%E5%8F%8D%E8%80%8C%E6%9B%B4%E9%AB%98%23) `462.6K 🔥` `NEW`
1. [这个春节一起去看冰雪童话](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%98%A5%E8%8A%82%E4%B8%80%E8%B5%B7%E5%8E%BB%E7%9C%8B%E5%86%B0%E9%9B%AA%E7%AB%A5%E8%AF%9D%23) `382.4K 🔥` `NEW`
1. [不要对AI说谢谢](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%AF%B9AI%E8%AF%B4%E8%B0%A2%E8%B0%A2%23) `370.5K 🔥` `NEW`
1. [外国游客被长白山百万皇冠整破防了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%A2%AB%E9%95%BF%E7%99%BD%E5%B1%B1%E7%99%BE%E4%B8%87%E7%9A%87%E5%86%A0%E6%95%B4%E7%A0%B4%E9%98%B2%E4%BA%86%23) `353.4K 🔥` `NEW`
1. [金枝](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%23) `179.3K 🔥` `NEW`
1. [孙颖莎ELLE开季封面预告 (Sun Yingsha ELLE season opening cover preview)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%E5%BC%80%E5%AD%A3%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `179.3K 🔥` `NEW`
1. [宋威龙赵今麦贴脸比心](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B4%B4%E8%84%B8%E6%AF%94%E5%BF%83%23) `179.3K 🔥` `NEW`
1. [家长把4岁和8岁孩子塞进后备箱返乡](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%8A%8A4%E5%B2%81%E5%92%8C8%E5%B2%81%E5%AD%A9%E5%AD%90%E5%A1%9E%E8%BF%9B%E5%90%8E%E5%A4%87%E7%AE%B1%E8%BF%94%E4%B9%A1%23) `179.3K 🔥` `NEW`
1. [青岛真正的快乐在街上](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BF%AB%E4%B9%90%E5%9C%A8%E8%A1%97%E4%B8%8A%23) `179.2K 🔥` `NEW`
1. [过年走亲戚要化妆吗](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E8%B5%B0%E4%BA%B2%E6%88%9A%E8%A6%81%E5%8C%96%E5%A6%86%E5%90%97%23) `179.2K 🔥` `NEW`
1. [爱泼斯坦案文件6男子姓名被涂黑](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E6%96%87%E4%BB%B66%E7%94%B7%E5%AD%90%E5%A7%93%E5%90%8D%E8%A2%AB%E6%B6%82%E9%BB%91%23) `179.2K 🔥` `NEW`
1. [石破茂警诫高市早苗](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E7%A0%B4%E8%8C%82%E8%AD%A6%E8%AF%AB%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%23) `179.2K 🔥` `NEW`
1. [人民日报评南博事件通报](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%8D%97%E5%8D%9A%E4%BA%8B%E4%BB%B6%E9%80%9A%E6%8A%A5%23) `179.1K 🔥` `NEW`
1. [联合国秘书长中文拜年](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD%E7%A7%98%E4%B9%A6%E9%95%BF%E4%B8%AD%E6%96%87%E6%8B%9C%E5%B9%B4%23) `179.1K 🔥` `NEW`
1. [雷军回应美国高速出现YU7](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD%E9%AB%98%E9%80%9F%E5%87%BA%E7%8E%B0YU7%23) `179.1K 🔥` `NEW`
1. [李一桐陈星旭领衔主演金枝 (Li Yitong and Chen Xingxu star in Jin Zhi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%99%88%E6%98%9F%E6%97%AD%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E9%87%91%E6%9E%9D%23) `179.1K 🔥` `NEW`
1. [谢永儿官配](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%B0%B8%E5%84%BF%E5%AE%98%E9%85%8D%23) `179.1K 🔥` `NEW`
1. [黄金白银突然开跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E7%AA%81%E7%84%B6%E5%BC%80%E8%B7%8C%23) `179.0K 🔥` `NEW`
1. [龙麦这和官宣有什么区别](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%BA%A6%E8%BF%99%E5%92%8C%E5%AE%98%E5%AE%A3%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `179.0K 🔥` `NEW`
1. [辛芷蕾威尼斯之后的变化](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%A8%81%E5%B0%BC%E6%96%AF%E4%B9%8B%E5%90%8E%E7%9A%84%E5%8F%98%E5%8C%96%23) `179.0K 🔥` `NEW`
1. [AI 恐怖](https://s.weibo.com/weibo?q=%23AI%20%E6%81%90%E6%80%96%23) `179.0K 🔥` `NEW`
1. [金枝开机](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%E5%BC%80%E6%9C%BA%23) `179.0K 🔥` `NEW`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `178.9K 🔥` `NEW`
1. [胡意旋工伤2.0](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%84%8F%E6%97%8B%E5%B7%A5%E4%BC%A42.0%23) `178.9K 🔥` `NEW`
1. [县城转岗教师发声](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%9F%8E%E8%BD%AC%E5%B2%97%E6%95%99%E5%B8%88%E5%8F%91%E5%A3%B0%23) `124.0K 🔥` `NEW`
1. [范丞丞拍的胡先煦 (Hu Xianxu photographed by Fan Chengcheng)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%8B%8D%E7%9A%84%E8%83%A1%E5%85%88%E7%85%A6%23) `124.0K 🔥` `NEW`
1. [虞书欣诉黑粉名誉侵权](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%AF%89%E9%BB%91%E7%B2%89%E5%90%8D%E8%AA%89%E4%BE%B5%E6%9D%83%23) `123.8K 🔥` `NEW`
1. [老舅躲催婚带外甥一起跑路](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E8%BA%B2%E5%82%AC%E5%A9%9A%E5%B8%A6%E5%A4%96%E7%94%A5%E4%B8%80%E8%B5%B7%E8%B7%91%E8%B7%AF%23) `122.8K 🔥` `NEW`
1. [TF四代开机应援](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%BC%80%E6%9C%BA%E5%BA%94%E6%8F%B4%23) `121.5K 🔥` `NEW`
1. [林宥嘉 拉踩令人反感](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AE%A5%E5%98%89%20%E6%8B%89%E8%B8%A9%E4%BB%A4%E4%BA%BA%E5%8F%8D%E6%84%9F%23) `121.0K 🔥` `NEW`
1. [黄蜂活塞冲突](https://s.weibo.com/weibo?q=%23%E9%BB%84%E8%9C%82%E6%B4%BB%E5%A1%9E%E5%86%B2%E7%AA%81%23) `114.8K 🔥` `NEW`
1. [如果AI误诊应该由谁负责](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9CAI%E8%AF%AF%E8%AF%8A%E5%BA%94%E8%AF%A5%E7%94%B1%E8%B0%81%E8%B4%9F%E8%B4%A3%23) `113.4K 🔥` `NEW`
1. [米兰冬奥会偶遇关晓彤](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%BC%9A%E5%81%B6%E9%81%87%E5%85%B3%E6%99%93%E5%BD%A4%23) `113.4K 🔥` `NEW`
1. [套马](https://s.weibo.com/weibo?q=%23%E5%A5%97%E9%A9%AC%23) `112.9K 🔥` `NEW`
1. [TF我们的少年时代2开机](https://s.weibo.com/weibo?q=%23TF%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E6%9C%BA%23) `111.0K 🔥` `NEW`
1. [2026央视网络春晚节目单来了 (2026 CCTV Online Spring Festival Gala program list is here)](https://s.weibo.com/weibo?q=%232026%E5%A4%AE%E8%A7%86%E7%BD%91%E7%BB%9C%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9D%A5%E4%BA%86%23) `110.0K 🔥` `NEW`
1. [谷爱凌1个项目收入1墩1蒂娜](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C1%E4%B8%AA%E9%A1%B9%E7%9B%AE%E6%94%B6%E5%85%A51%E5%A2%A91%E8%92%82%E5%A8%9C%23) `109.4K 🔥` `NEW`
1. [中国选手林孝埈冬奥首秀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%89%E6%89%8B%E6%9E%97%E5%AD%9D%E5%9F%88%E5%86%AC%E5%A5%A5%E9%A6%96%E7%A7%80%23) `109.3K 🔥` `NEW`
1. [元宝红包](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E7%BA%A2%E5%8C%85%23) `104.8K 🔥` `NEW`
1. [天才游戏](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E6%B8%B8%E6%88%8F%23) `104.8K 🔥` `NEW`
1. [女子1月结婚2次孩子竟是第3人的](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%901%E6%9C%88%E7%BB%93%E5%A9%9A2%E6%AC%A1%E5%AD%A9%E5%AD%90%E7%AB%9F%E6%98%AF%E7%AC%AC3%E4%BA%BA%E7%9A%84%23) `102.3K 🔥` `NEW`
1. [问界M9星光之夜阵容夯爆了 (Wenjie M9 Starlight Night lineup is in full swing)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E6%98%9F%E5%85%89%E4%B9%8B%E5%A4%9C%E9%98%B5%E5%AE%B9%E5%A4%AF%E7%88%86%E4%BA%86%23) `719.1K 🔥` `+1596%`
1. [孙颖莎 ELLE](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20ELLE%23) `179.1K 🔥` `+146%`
1. [李沛恩解约](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%9B%E6%81%A9%E8%A7%A3%E7%BA%A6%23) `178.9K 🔥` `+135%`
1. [妻子孕期丈夫却在女厕爬马桶偷拍](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E4%B8%88%E5%A4%AB%E5%8D%B4%E5%9C%A8%E5%A5%B3%E5%8E%95%E7%88%AC%E9%A9%AC%E6%A1%B6%E5%81%B7%E6%8B%8D%23) `109.3K 🔥` `+32%`
1. [小年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `179.3K 🔥`
1. [女子孕期被疑出轨公公转650万安抚 (Woman suspected of cheating on her father-in-law during pregnancy sends 6.5 million yuan to comfort her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E8%A2%AB%E7%96%91%E5%87%BA%E8%BD%A8%E5%85%AC%E5%85%AC%E8%BD%AC650%E4%B8%87%E5%AE%89%E6%8A%9A%23) `179.3K 🔥`

Updated at 2026-02-10 11:22:55

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
