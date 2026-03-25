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

1. [9年时间雄安新区长成了啥模样 (What has Xiongan New Area looked like in 9 years?)](https://s.weibo.com/weibo?q=%239%E5%B9%B4%E6%97%B6%E9%97%B4%E9%9B%84%E5%AE%89%E6%96%B0%E5%8C%BA%E9%95%BF%E6%88%90%E4%BA%86%E5%95%A5%E6%A8%A1%E6%A0%B7%23) `609.6K 🔥` `NEW`
1. [徐涛课程取消](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B6%9B%E8%AF%BE%E7%A8%8B%E5%8F%96%E6%B6%88%23) `572.2K 🔥` `NEW`
1. [大冰曾劝张雪峰做了好事要往外说](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%9B%BE%E5%8A%9D%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%81%9A%E4%BA%86%E5%A5%BD%E4%BA%8B%E8%A6%81%E5%BE%80%E5%A4%96%E8%AF%B4%23) `366.0K 🔥` `NEW`
1. [胜境好春光](https://s.weibo.com/weibo?q=%23%E8%83%9C%E5%A2%83%E5%A5%BD%E6%98%A5%E5%85%89%23) `322.5K 🔥` `NEW`
1. [华晨宇火星乐园2.0真的来了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%81%AB%E6%98%9F%E4%B9%90%E5%9B%AD2.0%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `283.0K 🔥` `NEW`
1. [心源性猝死急救最忌打车去医院](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E6%80%A5%E6%95%91%E6%9C%80%E5%BF%8C%E6%89%93%E8%BD%A6%E5%8E%BB%E5%8C%BB%E9%99%A2%23) `274.0K 🔥` `NEW`
1. [偶遇孔刘与男子搭肩散步](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%AD%94%E5%88%98%E4%B8%8E%E7%94%B7%E5%AD%90%E6%90%AD%E8%82%A9%E6%95%A3%E6%AD%A5%23) `271.9K 🔥` `NEW`
1. [朋友圈跑步打卡](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%B7%91%E6%AD%A5%E6%89%93%E5%8D%A1%23) `269.2K 🔥` `NEW`
1. [2025年度中国科学十大进展](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%BA%A6%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%8D%81%E5%A4%A7%E8%BF%9B%E5%B1%95%23) `201.7K 🔥` `NEW`
1. [线下追星 拼床](https://s.weibo.com/weibo?q=%23%E7%BA%BF%E4%B8%8B%E8%BF%BD%E6%98%9F%20%E6%8B%BC%E5%BA%8A%23) `199.7K 🔥` `NEW`
1. [越来越多日本女性为供养牛郎跨境卖淫 (More and more Japanese women are engaging in cross-border prostitution to support cowherds)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%80%A7%E4%B8%BA%E4%BE%9B%E5%85%BB%E7%89%9B%E9%83%8E%E8%B7%A8%E5%A2%83%E5%8D%96%E6%B7%AB%23) `194.0K 🔥` `NEW`
1. [迪丽热巴陈飞宇一个爆炸头一个牛舔头](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E4%B8%80%E4%B8%AA%E7%88%86%E7%82%B8%E5%A4%B4%E4%B8%80%E4%B8%AA%E7%89%9B%E8%88%94%E5%A4%B4%23) `192.5K 🔥` `NEW`
1. [金智媛宝格丽合照C位](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B%E5%AE%9D%E6%A0%BC%E4%B8%BD%E5%90%88%E7%85%A7C%E4%BD%8D%23) `166.2K 🔥` `NEW`
1. [杨笠说我撑过来了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%AC%A0%E8%AF%B4%E6%88%91%E6%92%91%E8%BF%87%E6%9D%A5%E4%BA%86%23) `137.6K 🔥` `NEW`
1. [A股大反弹能持续多久](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%A4%A7%E5%8F%8D%E5%BC%B9%E8%83%BD%E6%8C%81%E7%BB%AD%E5%A4%9A%E4%B9%85%23) `134.8K 🔥` `NEW`
1. [程潇 布偶猫](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%20%E5%B8%83%E5%81%B6%E7%8C%AB%23) `134.2K 🔥` `NEW`
1. [张雪峰离世留下的生意与争议](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%A6%BB%E4%B8%96%E7%95%99%E4%B8%8B%E7%9A%84%E7%94%9F%E6%84%8F%E4%B8%8E%E4%BA%89%E8%AE%AE%23) `128.5K 🔥` `NEW`
1. [都来向刘晓庆学习就不死](https://s.weibo.com/weibo?q=%23%E9%83%BD%E6%9D%A5%E5%90%91%E5%88%98%E6%99%93%E5%BA%86%E5%AD%A6%E4%B9%A0%E5%B0%B1%E4%B8%8D%E6%AD%BB%23) `120.7K 🔥` `NEW`
1. [中企8元买下1800万德国企业](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BC%818%E5%85%83%E4%B9%B0%E4%B8%8B1800%E4%B8%87%E5%BE%B7%E5%9B%BD%E4%BC%81%E4%B8%9A%23) `117.9K 🔥` `NEW`
1. [张雪峰送给正在迷茫年轻人的一句话](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E9%80%81%E7%BB%99%E6%AD%A3%E5%9C%A8%E8%BF%B7%E8%8C%AB%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E4%B8%80%E5%8F%A5%E8%AF%9D%23) `113.1K 🔥` `NEW`
1. [张雪峰生前开导抑郁女孩 (Zhang Xuefeng enlightened depressed girls during his lifetime)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%94%9F%E5%89%8D%E5%BC%80%E5%AF%BC%E6%8A%91%E9%83%81%E5%A5%B3%E5%AD%A9%23) `113.1K 🔥` `NEW`
1. [如果刘星长大后上恋综](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E5%88%98%E6%98%9F%E9%95%BF%E5%A4%A7%E5%90%8E%E4%B8%8A%E6%81%8B%E7%BB%BC%23) `112.4K 🔥` `NEW`
1. [巴西8人殴打卡皮巴拉被捕](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF8%E4%BA%BA%E6%AE%B4%E6%89%93%E5%8D%A1%E7%9A%AE%E5%B7%B4%E6%8B%89%E8%A2%AB%E6%8D%95%23) `111.1K 🔥` `NEW`
1. [老人抱小孩在马路中间参与护学岗](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8A%B1%E5%B0%8F%E5%AD%A9%E5%9C%A8%E9%A9%AC%E8%B7%AF%E4%B8%AD%E9%97%B4%E5%8F%82%E4%B8%8E%E6%8A%A4%E5%AD%A6%E5%B2%97%23) `110.5K 🔥` `NEW`
1. [张雪峰说从来不给员工定KPI](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E8%AF%B4%E4%BB%8E%E6%9D%A5%E4%B8%8D%E7%BB%99%E5%91%98%E5%B7%A5%E5%AE%9AKPI%23) `110.4K 🔥` `NEW`
1. [擅闯中使馆男子宣称见不到大使就自尽](https://s.weibo.com/weibo?q=%23%E6%93%85%E9%97%AF%E4%B8%AD%E4%BD%BF%E9%A6%86%E7%94%B7%E5%AD%90%E5%AE%A3%E7%A7%B0%E8%A7%81%E4%B8%8D%E5%88%B0%E5%A4%A7%E4%BD%BF%E5%B0%B1%E8%87%AA%E5%B0%BD%23) `107.2K 🔥` `NEW`
1. [孔雪儿 女主剧本](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%20%E5%A5%B3%E4%B8%BB%E5%89%A7%E6%9C%AC%23) `106.0K 🔥` `NEW`
1. [我妈说在菜板上给我留了小样](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E8%AF%B4%E5%9C%A8%E8%8F%9C%E6%9D%BF%E4%B8%8A%E7%BB%99%E6%88%91%E7%95%99%E4%BA%86%E5%B0%8F%E6%A0%B7%23) `103.4K 🔥` `NEW`
1. [定期体检](https://s.weibo.com/weibo?q=%23%E5%AE%9A%E6%9C%9F%E4%BD%93%E6%A3%80%23) `102.8K 🔥` `NEW`
1. [Breathe乌兹杯最后一舞](https://s.weibo.com/weibo?q=%23Breathe%E4%B9%8C%E5%85%B9%E6%9D%AF%E6%9C%80%E5%90%8E%E4%B8%80%E8%88%9E%23) `100.9K 🔥` `NEW`
1. [和平统一后大陆可帮台湾建环岛高铁 (After peaceful reunification, the mainland can help Taiwan build a high-speed rail around the island)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%BB%9F%E4%B8%80%E5%90%8E%E5%A4%A7%E9%99%86%E5%8F%AF%E5%B8%AE%E5%8F%B0%E6%B9%BE%E5%BB%BA%E7%8E%AF%E5%B2%9B%E9%AB%98%E9%93%81%23) `1.1M 🔥` `+38%`
1. [过度自律 (excessive self-discipline)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E8%87%AA%E5%BE%8B%23) `780.2K 🔥` `+126%`
1. [花27万买摊位老板开业5天快回本一半](https://s.weibo.com/weibo?q=%23%E8%8A%B127%E4%B8%87%E4%B9%B0%E6%91%8A%E4%BD%8D%E8%80%81%E6%9D%BF%E5%BC%80%E4%B8%9A5%E5%A4%A9%E5%BF%AB%E5%9B%9E%E6%9C%AC%E4%B8%80%E5%8D%8A%23) `374.3K 🔥` `+160%`
1. [嘴唇发紫 心脏不好 (Purple lips, bad heart)](https://s.weibo.com/weibo?q=%23%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%20%E5%BF%83%E8%84%8F%E4%B8%8D%E5%A5%BD%23) `284.0K 🔥` `+56%`
1. [何润东 翻红](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E7%BF%BB%E7%BA%A2%23) `277.8K 🔥` `+123%`
1. [李艺彤哭着和粉丝道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%E5%93%AD%E7%9D%80%E5%92%8C%E7%B2%89%E4%B8%9D%E9%81%93%E6%AD%89%23) `273.8K 🔥` `+139%`
1. [遭虐待男童反复说妈妈你能带我走吗](https://s.weibo.com/weibo?q=%23%E9%81%AD%E8%99%90%E5%BE%85%E7%94%B7%E7%AB%A5%E5%8F%8D%E5%A4%8D%E8%AF%B4%E5%A6%88%E5%A6%88%E4%BD%A0%E8%83%BD%E5%B8%A6%E6%88%91%E8%B5%B0%E5%90%97%23) `215.8K 🔥` `+94%`
1. [去动物园一定不要穿水果鞋](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%8A%A8%E7%89%A9%E5%9B%AD%E4%B8%80%E5%AE%9A%E4%B8%8D%E8%A6%81%E7%A9%BF%E6%B0%B4%E6%9E%9C%E9%9E%8B%23) `292.2K 🔥`
1. [央视新闻发了逐玉](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%96%B0%E9%97%BB%E5%8F%91%E4%BA%86%E9%80%90%E7%8E%89%23) `290.7K 🔥`
1. [浪姐7阵容 (Lang Jie 7 lineup)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E9%98%B5%E5%AE%B9%23) `269.1K 🔥`
1. [颜如晶一年减重2.9斤](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%A6%82%E6%99%B6%E4%B8%80%E5%B9%B4%E5%87%8F%E9%87%8D2.9%E6%96%A4%23) `209.4K 🔥`
1. [大冰感谢张雪峰对小朋友的帮助](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%84%9F%E8%B0%A2%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%AF%B9%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%B8%AE%E5%8A%A9%23) `208.6K 🔥`
1. [美国男子养老院强奸61岁老人被拍下](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E5%85%BB%E8%80%81%E9%99%A2%E5%BC%BA%E5%A5%B861%E5%B2%81%E8%80%81%E4%BA%BA%E8%A2%AB%E6%8B%8D%E4%B8%8B%23) `149.1K 🔥`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `227.8K 🔥` `-79%`
1. [周杰伦新歌从夯到拉排名 (Jay Chou's new songs ranked from popular to popular)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E4%BB%8E%E5%A4%AF%E5%88%B0%E6%8B%89%E6%8E%92%E5%90%8D%23) `146.1K 🔥` `-39%`
1. [博鳌亚洲论坛2026年年会看点](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E9%B3%8C%E4%BA%9A%E6%B4%B2%E8%AE%BA%E5%9D%9B2026%E5%B9%B4%E5%B9%B4%E4%BC%9A%E7%9C%8B%E7%82%B9%23) `116.4K 🔥` `-82%`
1. [向太说人一定要学会避谶](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AD%A6%E4%BC%9A%E9%81%BF%E8%B0%B6%23) `102.4K 🔥` `-45%`
1. [安睡裤什么时候变成这样了 (When did Anpai pants become like this?)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E7%9D%A1%E8%A3%A4%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8F%98%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `97.8K 🔥` `-37%`
1. [女儿殿下 夯 (Her Royal Highness Daughter)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%AE%BF%E4%B8%8B%20%E5%A4%AF%23) `97.0K 🔥` `-60%`
1. [心源性猝死与跑步有什么关系](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E4%B8%8E%E8%B7%91%E6%AD%A5%E6%9C%89%E4%BB%80%E4%B9%88%E5%85%B3%E7%B3%BB%23) `95.1K 🔥` `-36%`

Updated at 2026-03-25 15:31:47

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
