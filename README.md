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

1. [左奇函哭了 (Zuo Qihan cried)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E5%93%AD%E4%BA%86%23) `335.0K 🔥` `NEW`
1. [男子将女邻居电话写公厕造黄谣获刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E5%A5%B3%E9%82%BB%E5%B1%85%E7%94%B5%E8%AF%9D%E5%86%99%E5%85%AC%E5%8E%95%E9%80%A0%E9%BB%84%E8%B0%A3%E8%8E%B7%E5%88%91%23) `298.3K 🔥` `NEW`
1. [高铁咸猪手男子被拘留](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%92%B8%E7%8C%AA%E6%89%8B%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8B%98%E7%95%99%23) `232.0K 🔥` `NEW`
1. [四代什么时候出道](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%BB%A3%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%87%BA%E9%81%93%23) `216.8K 🔥` `NEW`
1. [马嘉祺高会更新](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%AB%98%E4%BC%9A%E6%9B%B4%E6%96%B0%23) `203.2K 🔥` `NEW`
1. [陈伟霆为九门十年不接军装戏](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B8%BA%E4%B9%9D%E9%97%A8%E5%8D%81%E5%B9%B4%E4%B8%8D%E6%8E%A5%E5%86%9B%E8%A3%85%E6%88%8F%23) `198.0K 🔥` `NEW`
1. [七夕真的不是和谁过都一样](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E7%9C%9F%E7%9A%84%E4%B8%8D%E6%98%AF%E5%92%8C%E8%B0%81%E8%BF%87%E9%83%BD%E4%B8%80%E6%A0%B7%23) `168.3K 🔥` `NEW`
1. [曹骏初舞台人气票数倒挂](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%88%9D%E8%88%9E%E5%8F%B0%E4%BA%BA%E6%B0%94%E7%A5%A8%E6%95%B0%E5%80%92%E6%8C%82%23) `688.5K 🔥` `+58%`
1. [左奇函 身体状况](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%20%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `389.1K 🔥` `+22%`
1. [大批AI博主停更了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9AI%E5%8D%9A%E4%B8%BB%E5%81%9C%E6%9B%B4%E4%BA%86%23) `1.6M 🔥`
1. [榴莲价格彻底崩了 (Durian prices have completely collapsed)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%E5%BD%BB%E5%BA%95%E5%B4%A9%E4%BA%86%23) `1.2M 🔥`
1. [未来5年我国能源蓝图划重点 (Focus on my country’s energy blueprint for the next five years)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E6%88%91%E5%9B%BD%E8%83%BD%E6%BA%90%E8%93%9D%E5%9B%BE%E5%88%92%E9%87%8D%E7%82%B9%23) `726.9K 🔥`
1. [只有中国人才能识别的加密暗号](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%89%8D%E8%83%BD%E8%AF%86%E5%88%AB%E7%9A%84%E5%8A%A0%E5%AF%86%E6%9A%97%E5%8F%B7%23) `650.0K 🔥`
1. [曝iPhone18ProMax独占可变光圈](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18ProMax%E7%8B%AC%E5%8D%A0%E5%8F%AF%E5%8F%98%E5%85%89%E5%9C%88%23) `511.7K 🔥`
1. [杭州涉事招商蛇口高管已被免职](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%B6%89%E4%BA%8B%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E9%AB%98%E7%AE%A1%E5%B7%B2%E8%A2%AB%E5%85%8D%E8%81%8C%23) `491.7K 🔥`
1. [公积金用途又变多了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E7%94%A8%E9%80%94%E5%8F%88%E5%8F%98%E5%A4%9A%E4%BA%86%23) `454.1K 🔥`
1. [泡面不健康不是因为防腐剂](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%E4%B8%8D%E5%81%A5%E5%BA%B7%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%98%B2%E8%85%90%E5%89%82%23) `442.9K 🔥`
1. [桃黑黑回应控诉](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%9B%9E%E5%BA%94%E6%8E%A7%E8%AF%89%23) `438.1K 🔥`
1. [曝时代少年团工作人员公费旅游](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%85%AC%E8%B4%B9%E6%97%85%E6%B8%B8%23) `419.3K 🔥`
1. [彭宇案 彭宇确实碰了老人 (Peng Yu case: Peng Yu did touch the old man)](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%AE%87%E6%A1%88%20%E5%BD%AD%E5%AE%87%E7%A1%AE%E5%AE%9E%E7%A2%B0%E4%BA%86%E8%80%81%E4%BA%BA%23) `392.0K 🔥`
1. [女孩顺风车内暴晒2小时向家人求救 (Girl was exposed to the sun for 2 hours in a hitchhiking car and asked for help from her family)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%A1%BA%E9%A3%8E%E8%BD%A6%E5%86%85%E6%9A%B4%E6%99%922%E5%B0%8F%E6%97%B6%E5%90%91%E5%AE%B6%E4%BA%BA%E6%B1%82%E6%95%91%23) `364.6K 🔥`
1. [建议大家开车一定要专心](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%BC%80%E8%BD%A6%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%93%E5%BF%83%23) `358.5K 🔥`
1. [金价回调半年抛压基本释放](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%9B%9E%E8%B0%83%E5%8D%8A%E5%B9%B4%E6%8A%9B%E5%8E%8B%E5%9F%BA%E6%9C%AC%E9%87%8A%E6%94%BE%23) `343.2K 🔥`
1. [顶替案弟弟首次听闻自己是双胞胎 (The younger brother in the substitution case heard for the first time that he was a twin)](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%BC%9F%E5%BC%9F%E9%A6%96%E6%AC%A1%E5%90%AC%E9%97%BB%E8%87%AA%E5%B7%B1%E6%98%AF%E5%8F%8C%E8%83%9E%E8%83%8E%23) `236.3K 🔥`
1. [结婚后才明白的事](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%8B%23) `226.3K 🔥`
1. [急性子小姐和慢吞吞先生](https://s.weibo.com/weibo?q=%23%E6%80%A5%E6%80%A7%E5%AD%90%E5%B0%8F%E5%A7%90%E5%92%8C%E6%85%A2%E5%90%9E%E5%90%9E%E5%85%88%E7%94%9F%23) `205.0K 🔥`
1. [迪丽热巴大学时期的照片](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%A7%E5%AD%A6%E6%97%B6%E6%9C%9F%E7%9A%84%E7%85%A7%E7%89%87%23) `191.5K 🔥`
1. [王菲基因发力了 (Faye Wong’s genes are working)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%9F%BA%E5%9B%A0%E5%8F%91%E5%8A%9B%E4%BA%86%23) `184.2K 🔥`
1. [怎么发现一个人不是好人 (How do you find out that someone is not a good person?)](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E5%8F%91%E7%8E%B0%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8D%E6%98%AF%E5%A5%BD%E4%BA%BA%23) `180.6K 🔥`
1. [王橹杰收官碧海](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%94%B6%E5%AE%98%E7%A2%A7%E6%B5%B7%23) `179.6K 🔥`
1. [解九假死](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E4%B9%9D%E5%81%87%E6%AD%BB%23) `168.3K 🔥`
1. [张凌赫方辟谣合照收费](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%90%88%E7%85%A7%E6%94%B6%E8%B4%B9%23) `168.3K 🔥`
1. [段奕宏叫王宝强宝宝](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%95%E5%AE%8F%E5%8F%AB%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%AE%9D%E5%AE%9D%23) `168.3K 🔥`
1. [郭敬明发百妖谱原始帧 (Guo Jingming released the original frame of the Hundred Demons Spectrum)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E7%99%BE%E5%A6%96%E8%B0%B1%E5%8E%9F%E5%A7%8B%E5%B8%A7%23) `496.0K 🔥` `-21%`
1. [陈奕恒哭了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%93%AD%E4%BA%86%23) `371.0K 🔥` `-24%`
1. [蓝盈莹承认恋情 (Lan Yingying admits love affair)](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `314.9K 🔥` `-25%`
1. [Jennie不得不用头发遮挡 (Jennie had to cover it up with her hair)](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%94%A8%E5%A4%B4%E5%8F%91%E9%81%AE%E6%8C%A1%23) `290.3K 🔥` `-30%`
1. [陈奕恒腹肌](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E8%85%B9%E8%82%8C%23) `272.6K 🔥` `-36%`
1. [越不操心的人越是人生赢家 (The less worried people are, the more successful they are in life.)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E4%B8%8D%E6%93%8D%E5%BF%83%E7%9A%84%E4%BA%BA%E8%B6%8A%E6%98%AF%E4%BA%BA%E7%94%9F%E8%B5%A2%E5%AE%B6%23) `260.3K 🔥` `-36%`
1. [曹骏 蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%20%E8%93%9D%E7%9B%88%E8%8E%B9%23) `257.1K 🔥` `-23%`
1. [大牛股15天10板](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%89%9B%E8%82%A115%E5%A4%A910%E6%9D%BF%23) `245.7K 🔥` `-43%`
1. [中国男篮不敌新西兰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E4%B8%8D%E6%95%8C%E6%96%B0%E8%A5%BF%E5%85%B0%23) `236.5K 🔥` `-32%`
1. [BLACKPINK发文道歉](https://s.weibo.com/weibo?q=%23BLACKPINK%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `230.4K 🔥` `-27%`
1. [茜拉自曝将移居中国](https://s.weibo.com/weibo?q=%23%E8%8C%9C%E6%8B%89%E8%87%AA%E6%9B%9D%E5%B0%86%E7%A7%BB%E5%B1%85%E4%B8%AD%E5%9B%BD%23) `227.5K 🔥` `-48%`
1. [大冰瘦了30斤 (Da Bing lost 30 pounds)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%98%A6%E4%BA%8630%E6%96%A4%23) `211.6K 🔥` `-24%`
1. [赵今麦墨镜吊带ccd](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A2%A8%E9%95%9C%E5%90%8A%E5%B8%A6ccd%23) `204.2K 🔥` `-49%`
1. [什么样的家庭可以买40万的车](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%E5%AE%B6%E5%BA%AD%E5%8F%AF%E4%BB%A5%E4%B9%B040%E4%B8%87%E7%9A%84%E8%BD%A6%23) `193.6K 🔥` `-59%`
1. [iPhone17国内销量曝光](https://s.weibo.com/weibo?q=%23iPhone17%E5%9B%BD%E5%86%85%E9%94%80%E9%87%8F%E6%9B%9D%E5%85%89%23) `188.3K 🔥` `-41%`
1. [金允植直播](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%85%81%E6%A4%8D%E7%9B%B4%E6%92%AD%23) `186.6K 🔥` `-25%`

Updated at 2026-08-17 23:10:57

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
