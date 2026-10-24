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

1. [父亲突发脑梗儿子用AI抢出救命时间](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%AA%81%E5%8F%91%E8%84%91%E6%A2%97%E5%84%BF%E5%AD%90%E7%94%A8AI%E6%8A%A2%E5%87%BA%E6%95%91%E5%91%BD%E6%97%B6%E9%97%B4%23) `1.1M 🔥` `NEW`
1. [任泽平账号违规被禁止关注](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%B3%BD%E5%B9%B3%E8%B4%A6%E5%8F%B7%E8%BF%9D%E8%A7%84%E8%A2%AB%E7%A6%81%E6%AD%A2%E5%85%B3%E6%B3%A8%23) `832.2K 🔥` `NEW`
1. [高质量发展看重庆](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E7%9C%8B%E9%87%8D%E5%BA%86%23) `693.7K 🔥` `NEW`
1. [跟着披哥上京东健康好物6.8折](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E6%8A%AB%E5%93%A5%E4%B8%8A%E4%BA%AC%E4%B8%9C%E5%81%A5%E5%BA%B7%E5%A5%BD%E7%89%A96.8%E6%8A%98%23) `687.6K 🔥` `NEW`
1. [杜兰特福克斯爆发冲突](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E7%A6%8F%E5%85%8B%E6%96%AF%E7%88%86%E5%8F%91%E5%86%B2%E7%AA%81%23) `655.4K 🔥` `NEW`
1. [张家齐被吐槽最不喜欢这个运动员太高调了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%A2%AB%E5%90%90%E6%A7%BD%E6%9C%80%E4%B8%8D%E5%96%9C%E6%AC%A2%E8%BF%99%E4%B8%AA%E8%BF%90%E5%8A%A8%E5%91%98%E5%A4%AA%E9%AB%98%E8%B0%83%E4%BA%86%23) `541.6K 🔥` `NEW`
1. [宝爸激动大叫吓得宝宝撤回一个清华](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E7%88%B8%E6%BF%80%E5%8A%A8%E5%A4%A7%E5%8F%AB%E5%90%93%E5%BE%97%E5%AE%9D%E5%AE%9D%E6%92%A4%E5%9B%9E%E4%B8%80%E4%B8%AA%E6%B8%85%E5%8D%8E%23) `498.8K 🔥` `NEW`
1. [官方辟谣广东海宴某小区住宅存放骨灰](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%B9%BF%E4%B8%9C%E6%B5%B7%E5%AE%B4%E6%9F%90%E5%B0%8F%E5%8C%BA%E4%BD%8F%E5%AE%85%E5%AD%98%E6%94%BE%E9%AA%A8%E7%81%B0%23) `462.0K 🔥` `NEW`
1. [年轻人正在抛弃帆布鞋](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%AD%A3%E5%9C%A8%E6%8A%9B%E5%BC%83%E5%B8%86%E5%B8%83%E9%9E%8B%23) `425.3K 🔥` `NEW`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `355.2K 🔥` `NEW`
1. [律师回应独生女继承2亿遭离婚分产](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%94%E7%8B%AC%E7%94%9F%E5%A5%B3%E7%BB%A7%E6%89%BF2%E4%BA%BF%E9%81%AD%E7%A6%BB%E5%A9%9A%E5%88%86%E4%BA%A7%23) `327.5K 🔥` `NEW`
1. [官方通报13岁女孩卖金项链被熔化](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A513%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8D%96%E9%87%91%E9%A1%B9%E9%93%BE%E8%A2%AB%E7%86%94%E5%8C%96%23) `319.8K 🔥` `NEW`
1. [大S最有野心的那一年淡妆走红毯](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E6%9C%80%E6%9C%89%E9%87%8E%E5%BF%83%E7%9A%84%E9%82%A3%E4%B8%80%E5%B9%B4%E6%B7%A1%E5%A6%86%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `305.0K 🔥` `NEW`
1. [AI短剧公司几乎不需要基础岗](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E5%85%AC%E5%8F%B8%E5%87%A0%E4%B9%8E%E4%B8%8D%E9%9C%80%E8%A6%81%E5%9F%BA%E7%A1%80%E5%B2%97%23) `289.8K 🔥` `NEW`
1. [迪丽热巴微指断层](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BE%AE%E6%8C%87%E6%96%AD%E5%B1%82%23) `285.5K 🔥` `NEW`
1. [S16抽签 内战](https://s.weibo.com/weibo?q=%23S16%E6%8A%BD%E7%AD%BE%20%E5%86%85%E6%88%98%23) `275.5K 🔥` `NEW`
1. [披哥9城大屏争夺战](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A59%E5%9F%8E%E5%A4%A7%E5%B1%8F%E4%BA%89%E5%A4%BA%E6%88%98%23) `261.9K 🔥` `NEW`
1. [抖音商城双11现货现发](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E5%95%86%E5%9F%8E%E5%8F%8C11%E7%8E%B0%E8%B4%A7%E7%8E%B0%E5%8F%91%23) `260.1K 🔥` `NEW`
1. [网友还原赵丽颖直播全程](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%BF%98%E5%8E%9F%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9B%B4%E6%92%AD%E5%85%A8%E7%A8%8B%23) `256.3K 🔥` `NEW`
1. [iPhoneDuo屏幕开裂](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%B1%8F%E5%B9%95%E5%BC%80%E8%A3%82%23) `247.8K 🔥` `NEW`
1. [黄多多回应第一次走红毯](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E5%9B%9E%E5%BA%94%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `239.3K 🔥` `NEW`
1. [陈星旭vogue上演贵公子](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%ADvogue%E4%B8%8A%E6%BC%94%E8%B4%B5%E5%85%AC%E5%AD%90%23) `235.7K 🔥` `NEW`
1. [欧阳娜娜VOGUE红毯最忙的人](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9CVOGUE%E7%BA%A2%E6%AF%AF%E6%9C%80%E5%BF%99%E7%9A%84%E4%BA%BA%23) `230.5K 🔥` `NEW`
1. [毛不易朋友为毛不易发声](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E6%9C%8B%E5%8F%8B%E4%B8%BA%E6%AF%9B%E4%B8%8D%E6%98%93%E5%8F%91%E5%A3%B0%23) `224.6K 🔥` `NEW`
1. [砍断妻子3根手指男子未取得谅解](https://s.weibo.com/weibo?q=%23%E7%A0%8D%E6%96%AD%E5%A6%BB%E5%AD%903%E6%A0%B9%E6%89%8B%E6%8C%87%E7%94%B7%E5%AD%90%E6%9C%AA%E5%8F%96%E5%BE%97%E8%B0%85%E8%A7%A3%23) `217.9K 🔥` `NEW`
1. [王志军任湖南省委书记](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%97%E5%86%9B%E4%BB%BB%E6%B9%96%E5%8D%97%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%23) `196.0K 🔥` `NEW`
1. [3毫米息肉1年长到3厘米已癌变](https://s.weibo.com/weibo?q=%233%E6%AF%AB%E7%B1%B3%E6%81%AF%E8%82%891%E5%B9%B4%E9%95%BF%E5%88%B03%E5%8E%98%E7%B1%B3%E5%B7%B2%E7%99%8C%E5%8F%98%23) `183.6K 🔥` `NEW`
1. [刘冲这个开毯蓄谋已久的吧](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E8%BF%99%E4%B8%AA%E5%BC%80%E6%AF%AF%E8%93%84%E8%B0%8B%E5%B7%B2%E4%B9%85%E7%9A%84%E5%90%A7%23) `183.5K 🔥` `NEW`
1. [字母哥两场71分热火两场惨败](https://s.weibo.com/weibo?q=%23%E5%AD%97%E6%AF%8D%E5%93%A5%E4%B8%A4%E5%9C%BA71%E5%88%86%E7%83%AD%E7%81%AB%E4%B8%A4%E5%9C%BA%E6%83%A8%E8%B4%A5%23) `177.6K 🔥` `NEW`
1. [泽连斯基再次喊话中国](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E5%86%8D%E6%AC%A1%E5%96%8A%E8%AF%9D%E4%B8%AD%E5%9B%BD%23) `177.6K 🔥` `NEW`
1. [内娱终于有个不爱穿裙子走红毯的](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%BB%88%E4%BA%8E%E6%9C%89%E4%B8%AA%E4%B8%8D%E7%88%B1%E7%A9%BF%E8%A3%99%E5%AD%90%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84%23) `177.2K 🔥` `NEW`
1. [TES抽到AL](https://s.weibo.com/weibo?q=%23TES%E6%8A%BD%E5%88%B0AL%23) `176.9K 🔥` `NEW`
1. [逐夏杀青](https://s.weibo.com/weibo?q=%23%E9%80%90%E5%A4%8F%E6%9D%80%E9%9D%92%23) `168.9K 🔥` `NEW`
1. [22岁女大学生确诊癌症妈妈后悔大哭](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E5%A6%88%E5%A6%88%E5%90%8E%E6%82%94%E5%A4%A7%E5%93%AD%23) `165.5K 🔥` `NEW`
1. [VOGUE红毯后台](https://s.weibo.com/weibo?q=%23VOGUE%E7%BA%A2%E6%AF%AF%E5%90%8E%E5%8F%B0%23) `137.9K 🔥` `NEW`
1. [Crisp破防](https://s.weibo.com/weibo?q=%23Crisp%E7%A0%B4%E9%98%B2%23) `136.9K 🔥` `NEW`
1. [Bin称尽量三比一出线](https://s.weibo.com/weibo?q=%23Bin%E7%A7%B0%E5%B0%BD%E9%87%8F%E4%B8%89%E6%AF%94%E4%B8%80%E5%87%BA%E7%BA%BF%23) `135.4K 🔥` `NEW`
1. [王一博新纪录片严浩翔新剧同一天开播](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%96%B0%E7%BA%AA%E5%BD%95%E7%89%87%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E5%89%A7%E5%90%8C%E4%B8%80%E5%A4%A9%E5%BC%80%E6%92%AD%23) `132.8K 🔥` `NEW`
1. [医生回应1岁多女童确诊糖尿病](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%941%E5%B2%81%E5%A4%9A%E5%A5%B3%E7%AB%A5%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%23) `121.0K 🔥` `NEW`
1. [妻子收到酒店弹窗丈夫自证清白](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E6%94%B6%E5%88%B0%E9%85%92%E5%BA%97%E5%BC%B9%E7%AA%97%E4%B8%88%E5%A4%AB%E8%87%AA%E8%AF%81%E6%B8%85%E7%99%BD%23) `117.7K 🔥` `NEW`
1. [快船vs湖人](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E8%88%B9vs%E6%B9%96%E4%BA%BA%23) `117.3K 🔥` `NEW`
1. [赵丽颖直播称没有关注粉丝](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9B%B4%E6%92%AD%E7%A7%B0%E6%B2%A1%E6%9C%89%E5%85%B3%E6%B3%A8%E7%B2%89%E4%B8%9D%23) `313.1K 🔥` `+25%`
1. [黄多多正式进圈](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%9C%88%23) `302.8K 🔥` `+22%`
1. [哈啰顺风车 涉黄](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%95%B0%E9%A1%BA%E9%A3%8E%E8%BD%A6%20%E6%B6%89%E9%BB%84%23) `272.3K 🔥`
1. [祖海官方账号认领迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E5%AE%98%E6%96%B9%E8%B4%A6%E5%8F%B7%E8%AE%A4%E9%A2%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `177.1K 🔥`
1. [泰国游客雍和宫许愿毫无破绽](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B8%B8%E5%AE%A2%E9%9B%8D%E5%92%8C%E5%AE%AB%E8%AE%B8%E6%84%BF%E6%AF%AB%E6%97%A0%E7%A0%B4%E7%BB%BD%23) `176.9K 🔥`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `135.7K 🔥`
1. [lpl瑞士轮首轮全败](https://s.weibo.com/weibo?q=%23lpl%E7%91%9E%E5%A3%AB%E8%BD%AE%E9%A6%96%E8%BD%AE%E5%85%A8%E8%B4%A5%23) `232.2K 🔥` `-86%`
1. [祖海认领](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E8%AE%A4%E9%A2%86%23) `177.3K 🔥` `-29%`
1. [喂猫吃药发现猫自己会吃](https://s.weibo.com/weibo?q=%23%E5%96%82%E7%8C%AB%E5%90%83%E8%8D%AF%E5%8F%91%E7%8E%B0%E7%8C%AB%E8%87%AA%E5%B7%B1%E4%BC%9A%E5%90%83%23) `139.6K 🔥` `-21%`

Updated at 2026-10-24 12:29:43

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
