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

1. [湖人售价120亿美元 (Lakers sold for $12 billion)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%94%AE%E4%BB%B7120%E4%BA%BF%E7%BE%8E%E5%85%83%23) `1.0M 🔥` `NEW`
1. [JDG战胜BLG](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CBLG%23) `779.6K 🔥` `NEW`
1. [188男团赴山海收藏卡红线宿命论](https://s.weibo.com/weibo?q=%23188%E7%94%B7%E5%9B%A2%E8%B5%B4%E5%B1%B1%E6%B5%B7%E6%94%B6%E8%97%8F%E5%8D%A1%E7%BA%A2%E7%BA%BF%E5%AE%BF%E5%91%BD%E8%AE%BA%23) `749.1K 🔥` `NEW`
1. [BLG对战JDG](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98JDG%23) `527.7K 🔥` `NEW`
1. [曝张真源将录制声生不息](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%B0%86%E5%BD%95%E5%88%B6%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%23) `450.2K 🔥` `NEW`
1. [市监局介入情感专家扑倒女客户](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E5%B1%80%E4%BB%8B%E5%85%A5%E6%83%85%E6%84%9F%E4%B8%93%E5%AE%B6%E6%89%91%E5%80%92%E5%A5%B3%E5%AE%A2%E6%88%B7%23) `410.2K 🔥` `NEW`
1. [内娱神剧 出轨雌竞](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%A5%9E%E5%89%A7%20%E5%87%BA%E8%BD%A8%E9%9B%8C%E7%AB%9E%23) `399.3K 🔥` `NEW`
1. [流星雨 许愿](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%98%9F%E9%9B%A8%20%E8%AE%B8%E6%84%BF%23) `388.2K 🔥` `NEW`
1. [普京说俄罗斯对日本没有诉求](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E4%BF%84%E7%BD%97%E6%96%AF%E5%AF%B9%E6%97%A5%E6%9C%AC%E6%B2%A1%E6%9C%89%E8%AF%89%E6%B1%82%23) `266.6K 🔥` `NEW`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `265.9K 🔥` `NEW`
1. [龙餐馆 老扎 (Dragon Restaurant Lao Zha)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E8%80%81%E6%89%8E%23) `265.8K 🔥` `NEW`
1. [3孩非亲生案女方称已确诊重度抑郁](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A5%B3%E6%96%B9%E7%A7%B0%E5%B7%B2%E7%A1%AE%E8%AF%8A%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23) `253.2K 🔥` `NEW`
1. [这段话缓解了我的焦虑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E7%BC%93%E8%A7%A3%E4%BA%86%E6%88%91%E7%9A%84%E7%84%A6%E8%99%91%23) `191.6K 🔥` `NEW`
1. [女子进店避雨后买9件衣服回馈善意](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%9B%E5%BA%97%E9%81%BF%E9%9B%A8%E5%90%8E%E4%B9%B09%E4%BB%B6%E8%A1%A3%E6%9C%8D%E5%9B%9E%E9%A6%88%E5%96%84%E6%84%8F%23) `179.5K 🔥` `NEW`
1. [卫健委介入17岁女孩流产监护人不知情](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E4%BB%8B%E5%85%A517%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%B5%81%E4%BA%A7%E7%9B%91%E6%8A%A4%E4%BA%BA%E4%B8%8D%E7%9F%A5%E6%83%85%23) `162.8K 🔥` `NEW`
1. [虞书欣丁禹兮 我欲乘风 (Yu Shuxin Ding Yuxi I want to ride on the wind)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%81%E7%A6%B9%E5%85%AE%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `773.4K 🔥` `+44%`
1. [英仙座流星雨](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BB%99%E5%BA%A7%E6%B5%81%E6%98%9F%E9%9B%A8%23) `725.7K 🔥` `+34%`
1. [任敏漂亮到不敢认](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E6%BC%82%E4%BA%AE%E5%88%B0%E4%B8%8D%E6%95%A2%E8%AE%A4%23) `445.0K 🔥` `+22%`
1. [李雪健已经完全听不见了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E7%BB%8F%E5%AE%8C%E5%85%A8%E5%90%AC%E4%B8%8D%E8%A7%81%E4%BA%86%23) `434.4K 🔥` `+34%`
1. [迪丽热巴扫货十分钟买了十几件](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%AB%E8%B4%A7%E5%8D%81%E5%88%86%E9%92%9F%E4%B9%B0%E4%BA%86%E5%8D%81%E5%87%A0%E4%BB%B6%23) `433.8K 🔥` `+39%`
1. [时代峰峻招聘薪资](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8B%9B%E8%81%98%E8%96%AA%E8%B5%84%23) `427.4K 🔥` `+59%`
1. [演唱会 11连坐 (Concert 11 consecutive seats)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%2011%E8%BF%9E%E5%9D%90%23) `422.6K 🔥` `+66%`
1. [内娱今年仅12人上身大牌高定 (There are only 12 people in domestic entertainment this year wearing high-end clothing from big brands)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E4%BB%8A%E5%B9%B4%E4%BB%8512%E4%BA%BA%E4%B8%8A%E8%BA%AB%E5%A4%A7%E7%89%8C%E9%AB%98%E5%AE%9A%23) `392.1K 🔥` `+48%`
1. [时代峰峻把所有岗位招了一遍](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8A%8A%E6%89%80%E6%9C%89%E5%B2%97%E4%BD%8D%E6%8B%9B%E4%BA%86%E4%B8%80%E9%81%8D%23) `379.8K 🔥` `+62%`
1. [日全食 (total solar eclipse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `351.4K 🔥` `+26%`
1. [马天宇 麦迪娜你要跟谁结婚](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E9%BA%A6%E8%BF%AA%E5%A8%9C%E4%BD%A0%E8%A6%81%E8%B7%9F%E8%B0%81%E7%BB%93%E5%A9%9A%23) `311.6K 🔥` `+24%`
1. [微信群聊可以彻底关闭通知了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%81%8A%E5%8F%AF%E4%BB%A5%E5%BD%BB%E5%BA%95%E5%85%B3%E9%97%AD%E9%80%9A%E7%9F%A5%E4%BA%86%23) `1.5M 🔥`
1. [新能源汽车月度新车销量占比首超60% (New energy vehicles accounted for more than 60% of monthly new car sales for the first time)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E6%9C%88%E5%BA%A6%E6%96%B0%E8%BD%A6%E9%94%80%E9%87%8F%E5%8D%A0%E6%AF%94%E9%A6%96%E8%B6%8560%25%23) `1.0M 🔥`
1. [银行能办结婚证了](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `435.7K 🔥`
1. [泰国失联女孩祁萌更新社媒](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A4%B1%E8%81%94%E5%A5%B3%E5%AD%A9%E7%A5%81%E8%90%8C%E6%9B%B4%E6%96%B0%E7%A4%BE%E5%AA%92%23) `433.0K 🔥`
1. [荣耀RobotPhone价格](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80RobotPhone%E4%BB%B7%E6%A0%BC%23) `412.8K 🔥`
1. [张睿 李若嘉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E6%9D%8E%E8%8B%A5%E5%98%89%23) `288.6K 🔥`
1. [送礼要送有溢价的东西](https://s.weibo.com/weibo?q=%23%E9%80%81%E7%A4%BC%E8%A6%81%E9%80%81%E6%9C%89%E6%BA%A2%E4%BB%B7%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `265.7K 🔥`
1. [美国7月CPI数据](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD7%E6%9C%88CPI%E6%95%B0%E6%8D%AE%23) `258.6K 🔥`
1. [迪丽热巴王一博早期广告短片 (Dilireba and Wang Yibo’s early advertising videos)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%97%A9%E6%9C%9F%E5%B9%BF%E5%91%8A%E7%9F%AD%E7%89%87%23) `258.6K 🔥`
1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `256.3K 🔥`
1. [周杰伦MV女孩回应](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6MV%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%23) `227.2K 🔥`
1. [长期饥一顿饱一顿的受害者出现了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E9%A5%A5%E4%B8%80%E9%A1%BF%E9%A5%B1%E4%B8%80%E9%A1%BF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `205.9K 🔥`
1. [Bin快回来吧](https://s.weibo.com/weibo?q=%23Bin%E5%BF%AB%E5%9B%9E%E6%9D%A5%E5%90%A7%23) `204.5K 🔥`
1. [田曦薇新剧照](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%B0%E5%89%A7%E7%85%A7%23) `188.6K 🔥`
1. [TF四代彩排照](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%BD%A9%E6%8E%92%E7%85%A7%23) `162.4K 🔥`
1. [天坛公园保洁用海绵吸水挤到桶里](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E5%85%AC%E5%9B%AD%E4%BF%9D%E6%B4%81%E7%94%A8%E6%B5%B7%E7%BB%B5%E5%90%B8%E6%B0%B4%E6%8C%A4%E5%88%B0%E6%A1%B6%E9%87%8C%23) `161.8K 🔥`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `1.6M 🔥` `-42%`
1. [喜欢穿洞洞鞋的人天塌了 (People who like to wear Crocs are in trouble)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `501.9K 🔥` `-28%`
1. [江泽民同志诞辰100周年](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%23) `341.4K 🔥` `-22%`
1. [李雪健已抗癌26年 (Li Xuejian has been fighting cancer for 26 years)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E6%8A%97%E7%99%8C26%E5%B9%B4%23) `182.7K 🔥` `-21%`
1. [幼童趁母亲熟睡爬到17楼窗外](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E8%B6%81%E6%AF%8D%E4%BA%B2%E7%86%9F%E7%9D%A1%E7%88%AC%E5%88%B017%E6%A5%BC%E7%AA%97%E5%A4%96%23) `180.4K 🔥` `-22%`
1. [两女子帮助黑人至中国幼儿园任教被判刑](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%B8%AE%E5%8A%A9%E9%BB%91%E4%BA%BA%E8%87%B3%E4%B8%AD%E5%9B%BD%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%BB%BB%E6%95%99%E8%A2%AB%E5%88%A4%E5%88%91%23) `177.1K 🔥` `-24%`
1. [张睿李若嘉在一起十年了 (Zhang Rui and Li Ruojia have been together for ten years)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%9D%8E%E8%8B%A5%E5%98%89%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%8D%81%E5%B9%B4%E4%BA%86%23) `174.3K 🔥` `-25%`
1. [柳柳直播 (Liuliu Live)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E7%9B%B4%E6%92%AD%23) `166.7K 🔥` `-28%`
1. [吴京我在龙餐馆很想你 (Wu Jing, I missed you so much at Dragon Restaurant)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E6%88%91%E5%9C%A8%E9%BE%99%E9%A4%90%E9%A6%86%E5%BE%88%E6%83%B3%E4%BD%A0%23) `161.8K 🔥` `-24%`

Updated at 2026-08-12 23:31:44

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
