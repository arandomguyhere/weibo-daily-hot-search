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

1. [马宁主哨世界杯 (Ma Ning calls the World Cup)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E4%B8%BB%E5%93%A8%E4%B8%96%E7%95%8C%E6%9D%AF%23) `1.7M 🔥` `NEW`
1. [开局之年看中国奋进陕西谱新篇](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%E5%A5%8B%E8%BF%9B%E9%99%95%E8%A5%BF%E8%B0%B1%E6%96%B0%E7%AF%87%23) `932.6K 🔥` `NEW`
1. [张若昀代言比亚迪大唐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E4%BB%A3%E8%A8%80%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E5%94%90%23) `932.6K 🔥` `NEW`
1. [豆包每天收入不足百万](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%AF%8F%E5%A4%A9%E6%94%B6%E5%85%A5%E4%B8%8D%E8%B6%B3%E7%99%BE%E4%B8%87%23) `932.6K 🔥` `NEW`
1. [徐嘉余打破尘封17年的纪录](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%98%89%E4%BD%99%E6%89%93%E7%A0%B4%E5%B0%98%E5%B0%8117%E5%B9%B4%E7%9A%84%E7%BA%AA%E5%BD%95%23) `362.5K 🔥` `NEW`
1. [MaxMara2027早春上海大秀](https://s.weibo.com/weibo?q=%23MaxMara2027%E6%97%A9%E6%98%A5%E4%B8%8A%E6%B5%B7%E5%A4%A7%E7%A7%80%23) `340.4K 🔥` `NEW`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `322.2K 🔥` `NEW`
1. [马宁主裁厄瓜多尔对库拉索](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E4%B8%BB%E8%A3%81%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94%E5%AF%B9%E5%BA%93%E6%8B%89%E7%B4%A2%23) `314.7K 🔥` `NEW`
1. [41岁C罗可能不会首发](https://s.weibo.com/weibo?q=%2341%E5%B2%81C%E7%BD%97%E5%8F%AF%E8%83%BD%E4%B8%8D%E4%BC%9A%E9%A6%96%E5%8F%91%23) `313.1K 🔥` `NEW`
1. [林允痛失艺名](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E7%97%9B%E5%A4%B1%E8%89%BA%E5%90%8D%23) `312.2K 🔥` `NEW`
1. [方圆撞脸angelababy (Fangyuan hits face with angelababy)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E6%92%9E%E8%84%B8angelababy%23) `311.9K 🔥` `NEW`
1. [记者潜入崩老头教学群](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E6%BD%9C%E5%85%A5%E5%B4%A9%E8%80%81%E5%A4%B4%E6%95%99%E5%AD%A6%E7%BE%A4%23) `311.7K 🔥` `NEW`
1. [狼队对战KSG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `311.4K 🔥` `NEW`
1. [李一桐被SM星探两次挑中颜值](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E8%A2%ABSM%E6%98%9F%E6%8E%A2%E4%B8%A4%E6%AC%A1%E6%8C%91%E4%B8%AD%E9%A2%9C%E5%80%BC%23) `310.9K 🔥` `NEW`
1. [去大医院看病总有种无力感](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%A4%A7%E5%8C%BB%E9%99%A2%E7%9C%8B%E7%97%85%E6%80%BB%E6%9C%89%E7%A7%8D%E6%97%A0%E5%8A%9B%E6%84%9F%23) `310.1K 🔥` `NEW`
1. [疑似易梦玲脸上做了线雕](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%98%93%E6%A2%A6%E7%8E%B2%E8%84%B8%E4%B8%8A%E5%81%9A%E4%BA%86%E7%BA%BF%E9%9B%95%23) `309.8K 🔥` `NEW`
1. [特朗普说有钱都不用大声说话](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E6%9C%89%E9%92%B1%E9%83%BD%E4%B8%8D%E7%94%A8%E5%A4%A7%E5%A3%B0%E8%AF%B4%E8%AF%9D%23) `309.7K 🔥` `NEW`
1. [杀妻抛尸潜逃17年被捕](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%A6%BB%E6%8A%9B%E5%B0%B8%E6%BD%9C%E9%80%8317%E5%B9%B4%E8%A2%AB%E6%8D%95%23) `309.0K 🔥` `NEW`
1. [玄彬拍的孙艺珍母子](https://s.weibo.com/weibo?q=%23%E7%8E%84%E5%BD%AC%E6%8B%8D%E7%9A%84%E5%AD%99%E8%89%BA%E7%8F%8D%E6%AF%8D%E5%AD%90%23) `308.8K 🔥` `NEW`
1. [补水蓄力梅西上演帽子戏法](https://s.weibo.com/weibo?q=%23%E8%A1%A5%E6%B0%B4%E8%93%84%E5%8A%9B%E6%A2%85%E8%A5%BF%E4%B8%8A%E6%BC%94%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `308.6K 🔥` `NEW`
1. [台媒喊话希望迪丽热巴去台湾 (Taiwanese media hopes Dilireba will go to Taiwan)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AA%92%E5%96%8A%E8%AF%9D%E5%B8%8C%E6%9C%9B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8E%BB%E5%8F%B0%E6%B9%BE%23) `307.9K 🔥` `NEW`
1. [一瞬间想通不再焦虑](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9E%AC%E9%97%B4%E6%83%B3%E9%80%9A%E4%B8%8D%E5%86%8D%E7%84%A6%E8%99%91%23) `307.3K 🔥` `NEW`
1. [刘亦菲冰晶玫瑰](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%86%B0%E6%99%B6%E7%8E%AB%E7%91%B0%23) `307.3K 🔥` `NEW`
1. [王安宇cue沈腾名台词](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87cue%E6%B2%88%E8%85%BE%E5%90%8D%E5%8F%B0%E8%AF%8D%23) `305.6K 🔥` `NEW`
1. [现在买车增程还是纯电](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E4%B9%B0%E8%BD%A6%E5%A2%9E%E7%A8%8B%E8%BF%98%E6%98%AF%E7%BA%AF%E7%94%B5%23) `305.4K 🔥` `NEW`
1. [贝克汉姆长子疑接广告内涵全家](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E9%95%BF%E5%AD%90%E7%96%91%E6%8E%A5%E5%B9%BF%E5%91%8A%E5%86%85%E6%B6%B5%E5%85%A8%E5%AE%B6%23) `304.9K 🔥` `NEW`
1. [TF运动会](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `304.2K 🔥` `NEW`
1. [妻子回应强留脑死亡丈夫被质疑](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E5%BC%BA%E7%95%99%E8%84%91%E6%AD%BB%E4%BA%A1%E4%B8%88%E5%A4%AB%E8%A2%AB%E8%B4%A8%E7%96%91%23) `304.1K 🔥` `NEW`
1. [刘亦菲W封面](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2W%E5%B0%81%E9%9D%A2%23) `303.8K 🔥` `NEW`
1. [霍启山娜然感情时间线](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%E6%84%9F%E6%83%85%E6%97%B6%E9%97%B4%E7%BA%BF%23) `258.4K 🔥` `NEW`
1. [中国女排3比2德国女排 (Chinese Women's Volleyball Team 3-2 German Women's Volleyball Team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%942%E5%BE%B7%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `256.8K 🔥` `NEW`
1. [姜乘澜接手遭强执千万公司](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E6%8E%A5%E6%89%8B%E9%81%AD%E5%BC%BA%E6%89%A7%E5%8D%83%E4%B8%87%E5%85%AC%E5%8F%B8%23) `256.0K 🔥` `NEW`
1. [吴倩回应花期过了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E5%9B%9E%E5%BA%94%E8%8A%B1%E6%9C%9F%E8%BF%87%E4%BA%86%23) `249.6K 🔥` `NEW`
1. [张亮女儿11岁身高](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%AE%E5%A5%B3%E5%84%BF11%E5%B2%81%E8%BA%AB%E9%AB%98%23) `245.4K 🔥` `NEW`
1. [男子售卖淫秽手办非法获利被判刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%94%AE%E5%8D%96%E6%B7%AB%E7%A7%BD%E6%89%8B%E5%8A%9E%E9%9D%9E%E6%B3%95%E8%8E%B7%E5%88%A9%E8%A2%AB%E5%88%A4%E5%88%91%23) `244.7K 🔥` `NEW`
1. [远程开关机对空调有多重要](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%85%B3%E6%9C%BA%E5%AF%B9%E7%A9%BA%E8%B0%83%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81%23) `240.6K 🔥` `NEW`
1. [窦靖童vs杨坤侯明昊](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5vs%E6%9D%A8%E5%9D%A4%E4%BE%AF%E6%98%8E%E6%98%8A%23) `238.3K 🔥` `NEW`
1. [微信支付宝打响AI支付战](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98%E5%AE%9D%E6%89%93%E5%93%8DAI%E6%94%AF%E4%BB%98%E6%88%98%23) `235.3K 🔥` `NEW`
1. [空调行业还会有革命性产品吗](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E8%A1%8C%E4%B8%9A%E8%BF%98%E4%BC%9A%E6%9C%89%E9%9D%A9%E5%91%BD%E6%80%A7%E4%BA%A7%E5%93%81%E5%90%97%23) `231.6K 🔥` `NEW`
1. [刘惜君PK胡彦斌](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%83%9C%E5%90%9BPK%E8%83%A1%E5%BD%A6%E6%96%8C%23) `230.2K 🔥` `NEW`
1. [王星越 洛阳老君山一直在勾引我 (Wang Xingyue, Luoyang Laojunshan has been seducing me.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%20%E6%B4%9B%E9%98%B3%E8%80%81%E5%90%9B%E5%B1%B1%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%8B%BE%E5%BC%95%E6%88%91%23) `228.1K 🔥` `NEW`
1. [C罗的身材绝对不是P的](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%9A%84%E8%BA%AB%E6%9D%90%E7%BB%9D%E5%AF%B9%E4%B8%8D%E6%98%AFP%E7%9A%84%23) `186.5K 🔥` `NEW`
1. [阿根廷球迷今天全体计划有变](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E4%BB%8A%E5%A4%A9%E5%85%A8%E4%BD%93%E8%AE%A1%E5%88%92%E6%9C%89%E5%8F%98%23) `933.2K 🔥` `+441%`
1. [中方决定向伊朗等国提供援助](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%86%B3%E5%AE%9A%E5%90%91%E4%BC%8A%E6%9C%97%E7%AD%89%E5%9B%BD%E6%8F%90%E4%BE%9B%E6%8F%B4%E5%8A%A9%23) `236.5K 🔥` `+36%`
1. [外卖餐食中有血迹顾客紧急服阻断药](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E9%A4%90%E9%A3%9F%E4%B8%AD%E6%9C%89%E8%A1%80%E8%BF%B9%E9%A1%BE%E5%AE%A2%E7%B4%A7%E6%80%A5%E6%9C%8D%E9%98%BB%E6%96%AD%E8%8D%AF%23) `310.6K 🔥`
1. [曝霍启山和娜然要结婚了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%92%8C%E5%A8%9C%E7%84%B6%E8%A6%81%E7%BB%93%E5%A9%9A%E4%BA%86%23) `308.3K 🔥`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `306.4K 🔥`
1. [仙逆从成毅张凌赫传到龚俊了](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E4%BB%8E%E6%88%90%E6%AF%85%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BC%A0%E5%88%B0%E9%BE%9A%E4%BF%8A%E4%BA%86%23) `306.1K 🔥`
1. [归鸾领衔主演张家玮费霞](https://s.weibo.com/weibo?q=%23%E5%BD%92%E9%B8%BE%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%BC%A0%E5%AE%B6%E7%8E%AE%E8%B4%B9%E9%9C%9E%23) `509.9K 🔥` `-23%`
1. [白鹿跑男上班](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E4%B8%8A%E7%8F%AD%23) `306.7K 🔥` `-34%`
1. [当专家说只睡四个小时没影响 (When experts say only four hours of sleep will make no difference)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%B8%93%E5%AE%B6%E8%AF%B4%E5%8F%AA%E7%9D%A1%E5%9B%9B%E4%B8%AA%E5%B0%8F%E6%97%B6%E6%B2%A1%E5%BD%B1%E5%93%8D%23) `186.7K 🔥` `-53%`

Updated at 2026-06-17 21:51:48

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
