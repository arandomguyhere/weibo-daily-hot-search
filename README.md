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

1. [腾讯317万年终奖员工因泄密被辞退 (Tencent employee with annual bonus of RMB 3.17 million was fired for leaking secrets)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF317%E4%B8%87%E5%B9%B4%E7%BB%88%E5%A5%96%E5%91%98%E5%B7%A5%E5%9B%A0%E6%B3%84%E5%AF%86%E8%A2%AB%E8%BE%9E%E9%80%80%23) `2.1M 🔥` `NEW`
1. [王虹获奖别再说寒门难出贵子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E8%8E%B7%E5%A5%96%E5%88%AB%E5%86%8D%E8%AF%B4%E5%AF%92%E9%97%A8%E9%9A%BE%E5%87%BA%E8%B4%B5%E5%AD%90%23) `1.1M 🔥` `NEW`
1. [高温天气如何防护](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%B8%A9%E5%A4%A9%E6%B0%94%E5%A6%82%E4%BD%95%E9%98%B2%E6%8A%A4%23) `937.4K 🔥` `NEW`
1. [对月薪三万有了直观的感受](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%9C%88%E8%96%AA%E4%B8%89%E4%B8%87%E6%9C%89%E4%BA%86%E7%9B%B4%E8%A7%82%E7%9A%84%E6%84%9F%E5%8F%97%23) `928.5K 🔥` `NEW`
1. [白鹿你终于原谅现偶了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BD%A0%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%E4%BA%86%23) `910.9K 🔥` `NEW`
1. [故宫下周一免费开放](https://s.weibo.com/weibo?q=%23%E6%95%85%E5%AE%AB%E4%B8%8B%E5%91%A8%E4%B8%80%E5%85%8D%E8%B4%B9%E5%BC%80%E6%94%BE%23) `882.0K 🔥` `NEW`
1. [王虹说北大同学叫邓煜邓神](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E8%AF%B4%E5%8C%97%E5%A4%A7%E5%90%8C%E5%AD%A6%E5%8F%AB%E9%82%93%E7%85%9C%E9%82%93%E7%A5%9E%23) `605.4K 🔥` `NEW`
1. [九门全员齐聚](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%85%A8%E5%91%98%E9%BD%90%E8%81%9A%23) `513.9K 🔥` `NEW`
1. [小米汽车公布增程器](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%85%AC%E5%B8%83%E5%A2%9E%E7%A8%8B%E5%99%A8%23) `428.7K 🔥` `NEW`
1. [Xun采访说Wenbo比较稳](https://s.weibo.com/weibo?q=%23Xun%E9%87%87%E8%AE%BF%E8%AF%B4Wenbo%E6%AF%94%E8%BE%83%E7%A8%B3%23) `421.0K 🔥` `NEW`
1. [当你的出行搭子是王俊凯 (When your travel companion is Wang Junkai)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E7%9A%84%E5%87%BA%E8%A1%8C%E6%90%AD%E5%AD%90%E6%98%AF%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `414.2K 🔥` `NEW`
1. [男子在家裸体被邻居拍照发群](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A3%B8%E4%BD%93%E8%A2%AB%E9%82%BB%E5%B1%85%E6%8B%8D%E7%85%A7%E5%8F%91%E7%BE%A4%23) `410.5K 🔥` `NEW`
1. [白鹿摔倒报平安](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%91%94%E5%80%92%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `396.8K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `379.3K 🔥` `NEW`
1. [官俊臣班成绩 全名校阵容](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E7%8F%AD%E6%88%90%E7%BB%A9%20%E5%85%A8%E5%90%8D%E6%A0%A1%E9%98%B5%E5%AE%B9%23) `373.9K 🔥` `NEW`
1. [攻玉](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%23) `367.4K 🔥` `NEW`
1. [花点小钱也能厚待自己](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E7%82%B9%E5%B0%8F%E9%92%B1%E4%B9%9F%E8%83%BD%E5%8E%9A%E5%BE%85%E8%87%AA%E5%B7%B1%23) `365.6K 🔥` `NEW`
1. [邓煜谈是否回国发展](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%E8%B0%88%E6%98%AF%E5%90%A6%E5%9B%9E%E5%9B%BD%E5%8F%91%E5%B1%95%23) `361.0K 🔥` `NEW`
1. [赛里木湖景区通报工作人员殴打司机](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E6%99%AF%E5%8C%BA%E9%80%9A%E6%8A%A5%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%AE%B4%E6%89%93%E5%8F%B8%E6%9C%BA%23) `357.1K 🔥` `NEW`
1. [孙伊涵说这有什么好骗人的](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BC%8A%E6%B6%B5%E8%AF%B4%E8%BF%99%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E9%AA%97%E4%BA%BA%E7%9A%84%23) `354.0K 🔥` `NEW`
1. [苗苗自己剪了短发 (Miaomiao cut her hair short)](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E8%87%AA%E5%B7%B1%E5%89%AA%E4%BA%86%E7%9F%AD%E5%8F%91%23) `353.6K 🔥` `NEW`
1. [开到荼蘼开机蛋糕](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%BC%80%E6%9C%BA%E8%9B%8B%E7%B3%95%23) `352.4K 🔥` `NEW`
1. [燕云十六声](https://s.weibo.com/weibo?q=%23%E7%87%95%E4%BA%91%E5%8D%81%E5%85%AD%E5%A3%B0%23) `338.7K 🔥` `NEW`
1. [小羊不舍女游客哭着追了3里地](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%BE%8A%E4%B8%8D%E8%88%8D%E5%A5%B3%E6%B8%B8%E5%AE%A2%E5%93%AD%E7%9D%80%E8%BF%BD%E4%BA%863%E9%87%8C%E5%9C%B0%23) `338.2K 🔥` `NEW`
1. [力箭一号火箭已将110颗卫星送入太空](https://s.weibo.com/weibo?q=%23%E5%8A%9B%E7%AE%AD%E4%B8%80%E5%8F%B7%E7%81%AB%E7%AE%AD%E5%B7%B2%E5%B0%86110%E9%A2%97%E5%8D%AB%E6%98%9F%E9%80%81%E5%85%A5%E5%A4%AA%E7%A9%BA%23) `337.9K 🔥` `NEW`
1. [Jennie新歌](https://s.weibo.com/weibo?q=%23Jennie%E6%96%B0%E6%AD%8C%23) `337.9K 🔥` `NEW`
1. [孙伊涵转发区](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BC%8A%E6%B6%B5%E8%BD%AC%E5%8F%91%E5%8C%BA%23) `315.0K 🔥` `NEW`
1. [10岁男孩日饮7升水确诊尿崩症](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E7%94%B7%E5%AD%A9%E6%97%A5%E9%A5%AE7%E5%8D%87%E6%B0%B4%E7%A1%AE%E8%AF%8A%E5%B0%BF%E5%B4%A9%E7%97%87%23) `285.7K 🔥` `NEW`
1. [这辈子来报恩的西瓜](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%BE%88%E5%AD%90%E6%9D%A5%E6%8A%A5%E6%81%A9%E7%9A%84%E8%A5%BF%E7%93%9C%23) `228.1K 🔥` `NEW`
1. [朱志鑫 预制祝福](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E9%A2%84%E5%88%B6%E7%A5%9D%E7%A6%8F%23) `219.4K 🔥` `NEW`
1. [开到荼蘼 (Open until Tumi)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%23) `210.1K 🔥` `NEW`
1. [女子运动过度确诊横纹肌溶解](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E8%BF%87%E5%BA%A6%E7%A1%AE%E8%AF%8A%E6%A8%AA%E7%BA%B9%E8%82%8C%E6%BA%B6%E8%A7%A3%23) `208.9K 🔥` `NEW`
1. [70岁爷爷给4岁孙子自制玩具走红](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E7%88%B7%E7%88%B7%E7%BB%994%E5%B2%81%E5%AD%99%E5%AD%90%E8%87%AA%E5%88%B6%E7%8E%A9%E5%85%B7%E8%B5%B0%E7%BA%A2%23) `202.4K 🔥` `NEW`
1. [为什么Agent吹了这么久普通人不用](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88Agent%E5%90%B9%E4%BA%86%E8%BF%99%E4%B9%88%E4%B9%85%E6%99%AE%E9%80%9A%E4%BA%BA%E4%B8%8D%E7%94%A8%23) `196.3K 🔥` `NEW`
1. [陈瑶九门打戏](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E4%B9%9D%E9%97%A8%E6%89%93%E6%88%8F%23) `193.8K 🔥` `NEW`
1. [付辛博新剧爱上哥哥难道是我的错吗](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A%E6%96%B0%E5%89%A7%E7%88%B1%E4%B8%8A%E5%93%A5%E5%93%A5%E9%9A%BE%E9%81%93%E6%98%AF%E6%88%91%E7%9A%84%E9%94%99%E5%90%97%23) `188.0K 🔥` `NEW`
1. [毛大庆 敬一丹](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%A4%A7%E5%BA%86%20%E6%95%AC%E4%B8%80%E4%B8%B9%23) `170.0K 🔥` `NEW`
1. [王虹大二转数学系一度垫底](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%A4%A7%E4%BA%8C%E8%BD%AC%E6%95%B0%E5%AD%A6%E7%B3%BB%E4%B8%80%E5%BA%A6%E5%9E%AB%E5%BA%95%23) `169.3K 🔥` `NEW`
1. [半导体设备龙头暴涨](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E8%AE%BE%E5%A4%87%E9%BE%99%E5%A4%B4%E6%9A%B4%E6%B6%A8%23) `169.2K 🔥` `NEW`
1. [吴世勋中文歌失重色](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E4%B8%AD%E6%96%87%E6%AD%8C%E5%A4%B1%E9%87%8D%E8%89%B2%23) `169.1K 🔥` `NEW`
1. [惠英红好牛的肌肉线条 (Huiying Honghao Niu’s muscle lines)](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%A5%BD%E7%89%9B%E7%9A%84%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23) `147.9K 🔥` `NEW`
1. [杨洋同款岚图追光S预售开启 (Yang Yang’s same model Lantu Chasing Light S is now available for pre-sale)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%90%8C%E6%AC%BE%E5%B2%9A%E5%9B%BE%E8%BF%BD%E5%85%89S%E9%A2%84%E5%94%AE%E5%BC%80%E5%90%AF%23) `768.6K 🔥` `+110%`
1. [王亚飞化的谷爱凌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BA%9A%E9%A3%9E%E5%8C%96%E7%9A%84%E8%B0%B7%E7%88%B1%E5%87%8C%23) `317.0K 🔥` `+101%`
1. [王虹 (Wang Hong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%23) `192.5K 🔥`
1. [孙伊涵当妈](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BC%8A%E6%B6%B5%E5%BD%93%E5%A6%88%23) `390.4K 🔥` `-30%`
1. [显卡涨价](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%8D%A1%E6%B6%A8%E4%BB%B7%23) `362.0K 🔥` `-56%`
1. [彭冠英搭档全是市场上的女顶流](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%86%A0%E8%8B%B1%E6%90%AD%E6%A1%A3%E5%85%A8%E6%98%AF%E5%B8%82%E5%9C%BA%E4%B8%8A%E7%9A%84%E5%A5%B3%E9%A1%B6%E6%B5%81%23) `355.4K 🔥` `-59%`
1. [韦东奕曾连续多天听王虹讲座](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E6%9B%BE%E8%BF%9E%E7%BB%AD%E5%A4%9A%E5%A4%A9%E5%90%AC%E7%8E%8B%E8%99%B9%E8%AE%B2%E5%BA%A7%23) `353.9K 🔥` `-36%`
1. [法国总统马克龙祝贺王虹](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%80%BB%E7%BB%9F%E9%A9%AC%E5%85%8B%E9%BE%99%E7%A5%9D%E8%B4%BA%E7%8E%8B%E8%99%B9%23) `341.7K 🔥` `-59%`
1. [李小冉维护王濛](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%BB%B4%E6%8A%A4%E7%8E%8B%E6%BF%9B%23) `312.4K 🔥` `-45%`
1. [丘成桐希望王虹邓煜回国任教](https://s.weibo.com/weibo?q=%23%E4%B8%98%E6%88%90%E6%A1%90%E5%B8%8C%E6%9C%9B%E7%8E%8B%E8%99%B9%E9%82%93%E7%85%9C%E5%9B%9E%E5%9B%BD%E4%BB%BB%E6%95%99%23) `285.4K 🔥` `-87%`

Updated at 2026-07-24 12:32:16

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
