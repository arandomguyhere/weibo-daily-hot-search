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

1. [看电影的快乐正全面升级 (The joy of watching movies is being fully upgraded)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%94%B5%E5%BD%B1%E7%9A%84%E5%BF%AB%E4%B9%90%E6%AD%A3%E5%85%A8%E9%9D%A2%E5%8D%87%E7%BA%A7%23) `642.7K 🔥` `NEW`
1. [游客已在胖东来买到搬不动了](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%B7%B2%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B9%B0%E5%88%B0%E6%90%AC%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `390.5K 🔥` `NEW`
1. [张萌说浪姐收手机是因为黄圣依](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%AF%B4%E6%B5%AA%E5%A7%90%E6%94%B6%E6%89%8B%E6%9C%BA%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%BB%84%E5%9C%A3%E4%BE%9D%23) `353.5K 🔥` `NEW`
1. [离婚后45岁的她去冰岛当公务员](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%90%8E45%E5%B2%81%E7%9A%84%E5%A5%B9%E5%8E%BB%E5%86%B0%E5%B2%9B%E5%BD%93%E5%85%AC%E5%8A%A1%E5%91%98%23) `202.0K 🔥` `NEW`
1. [天才女友田曦薇胡一天捏脸贴贴](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E7%94%B0%E6%9B%A6%E8%96%87%E8%83%A1%E4%B8%80%E5%A4%A9%E6%8D%8F%E8%84%B8%E8%B4%B4%E8%B4%B4%23) `177.1K 🔥` `NEW`
1. [中戏 主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%20%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `173.1K 🔥` `NEW`
1. [王鹤棣NBA全明星总得分30分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3NBA%E5%85%A8%E6%98%8E%E6%98%9F%E6%80%BB%E5%BE%97%E5%88%8630%E5%88%86%23) `172.6K 🔥` `NEW`
1. [中国男子巴厘岛溺亡同伴连滚带爬求救](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%B7%B4%E5%8E%98%E5%B2%9B%E6%BA%BA%E4%BA%A1%E5%90%8C%E4%BC%B4%E8%BF%9E%E6%BB%9A%E5%B8%A6%E7%88%AC%E6%B1%82%E6%95%91%23) `162.1K 🔥` `NEW`
1. [千问集卡大军回村了](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E9%9B%86%E5%8D%A1%E5%A4%A7%E5%86%9B%E5%9B%9E%E6%9D%91%E4%BA%86%23) `155.0K 🔥` `NEW`
1. [岳云鹏蔡文静亲密戏](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E8%94%A1%E6%96%87%E9%9D%99%E4%BA%B2%E5%AF%86%E6%88%8F%23) `154.9K 🔥` `NEW`
1. [刘少昂孙龙林孝埈1500米冲金 (Liu Shao'ang, Sun Long and Lin Xiaoquan hit the gold medal at 1,500 meters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E5%AD%99%E9%BE%99%E6%9E%97%E5%AD%9D%E5%9F%881500%E7%B1%B3%E5%86%B2%E9%87%91%23) `154.2K 🔥` `NEW`
1. [产检正常生出畸形儿医院被罚2.5万](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E6%AD%A3%E5%B8%B8%E7%94%9F%E5%87%BA%E7%95%B8%E5%BD%A2%E5%84%BF%E5%8C%BB%E9%99%A2%E8%A2%AB%E7%BD%9A2.5%E4%B8%87%23) `145.1K 🔥` `NEW`
1. [200名车友为爱发车跨城接亲](https://s.weibo.com/weibo?q=%23200%E5%90%8D%E8%BD%A6%E5%8F%8B%E4%B8%BA%E7%88%B1%E5%8F%91%E8%BD%A6%E8%B7%A8%E5%9F%8E%E6%8E%A5%E4%BA%B2%23) `143.7K 🔥` `NEW`
1. [新年和荣耀500一起舞摆一起Live](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E5%92%8C%E8%8D%A3%E8%80%80500%E4%B8%80%E8%B5%B7%E8%88%9E%E6%91%86%E4%B8%80%E8%B5%B7Live%23) `143.0K 🔥` `NEW`
1. [为什么微信红包最多只能200元](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E6%9C%80%E5%A4%9A%E5%8F%AA%E8%83%BD200%E5%85%83%23) `136.3K 🔥` `NEW`
1. [宋轶无名指戴了戒指](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E6%97%A0%E5%90%8D%E6%8C%87%E6%88%B4%E4%BA%86%E6%88%92%E6%8C%87%23) `129.7K 🔥` `NEW`
1. [没有撤回微信红包的需求](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%92%A4%E5%9B%9E%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E7%9A%84%E9%9C%80%E6%B1%82%23) `128.8K 🔥` `NEW`
1. [陈卓璇治好了乐评人爱挑刺的毛病](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%8D%93%E7%92%87%E6%B2%BB%E5%A5%BD%E4%BA%86%E4%B9%90%E8%AF%84%E4%BA%BA%E7%88%B1%E6%8C%91%E5%88%BA%E7%9A%84%E6%AF%9B%E7%97%85%23) `122.4K 🔥` `NEW`
1. [男子打牌被亲戚作弊骗走175万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%93%E7%89%8C%E8%A2%AB%E4%BA%B2%E6%88%9A%E4%BD%9C%E5%BC%8A%E9%AA%97%E8%B5%B0175%E4%B8%87%23) `117.2K 🔥` `NEW`
1. [宋威龙张婧仪揽腰共舞](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%8F%BD%E8%85%B0%E5%85%B1%E8%88%9E%23) `109.7K 🔥` `NEW`
1. [美媒坐实斩杀线 (US media confirms the killing line)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E5%9D%90%E5%AE%9E%E6%96%A9%E6%9D%80%E7%BA%BF%23) `102.3K 🔥` `NEW`
1. [张凌赫王楚然胶片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%83%B6%E7%89%87%23) `88.3K 🔥` `NEW`
1. [马里宁回应自由滑失误](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%87%8C%E5%AE%81%E5%9B%9E%E5%BA%94%E8%87%AA%E7%94%B1%E6%BB%91%E5%A4%B1%E8%AF%AF%23) `87.5K 🔥` `NEW`
1. [今年的班就上到这儿了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%9A%84%E7%8F%AD%E5%B0%B1%E4%B8%8A%E5%88%B0%E8%BF%99%E5%84%BF%E4%BA%86%23) `85.7K 🔥` `NEW`
1. [年夜饭中的C位菜到底该是谁](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%E4%B8%AD%E7%9A%84C%E4%BD%8D%E8%8F%9C%E5%88%B0%E5%BA%95%E8%AF%A5%E6%98%AF%E8%B0%81%23) `85.4K 🔥` `NEW`
1. [日本放人](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%94%BE%E4%BA%BA%23) `84.5K 🔥` `NEW`
1. [高亭宇男子速滑500米冲金](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BA%AD%E5%AE%87%E7%94%B7%E5%AD%90%E9%80%9F%E6%BB%91500%E7%B1%B3%E5%86%B2%E9%87%91%23) `84.1K 🔥` `NEW`
1. [Seedance2.0被评价为全球最强](https://s.weibo.com/weibo?q=%23Seedance2.0%E8%A2%AB%E8%AF%84%E4%BB%B7%E4%B8%BA%E5%85%A8%E7%90%83%E6%9C%80%E5%BC%BA%23) `82.8K 🔥` `NEW`
1. [这就是我赚钱的意义](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E6%88%91%E8%B5%9A%E9%92%B1%E7%9A%84%E6%84%8F%E4%B9%89%23) `80.5K 🔥` `NEW`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `781.9K 🔥` `+177%`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `169.0K 🔥` `+23%`
1. [花滑米兰惨案 (figure skating tragedy in Milan)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%BB%91%E7%B1%B3%E5%85%B0%E6%83%A8%E6%A1%88%23) `1.1M 🔥`
1. [情人节红包 (Valentine's Day Red Envelope)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E7%BA%A2%E5%8C%85%23) `336.2K 🔥`
1. [日本释放被扣押中国渔船船长](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%87%8A%E6%94%BE%E8%A2%AB%E6%89%A3%E6%8A%BC%E4%B8%AD%E5%9B%BD%E6%B8%94%E8%88%B9%E8%88%B9%E9%95%BF%23) `201.8K 🔥`
1. [宋轶好刚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A5%BD%E5%88%9A%23) `139.2K 🔥`
1. [羽生结弦的含金量还在上升](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `227.5K 🔥` `-72%`
1. [蔡文静工伤 (Cai Wenjing's work injury)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%B7%A5%E4%BC%A4%23) `138.7K 🔥` `-77%`
1. [得知22岁儿子巴厘岛溺亡母亲哭晕](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A522%E5%B2%81%E5%84%BF%E5%AD%90%E5%B7%B4%E5%8E%98%E5%B2%9B%E6%BA%BA%E4%BA%A1%E6%AF%8D%E4%BA%B2%E5%93%AD%E6%99%95%23) `133.4K 🔥` `-36%`
1. [亲爱的客栈定档](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%E5%AE%9A%E6%A1%A3%23) `131.8K 🔥` `-48%`
1. [白鹿 剧宣的神](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%89%A7%E5%AE%A3%E7%9A%84%E7%A5%9E%23) `127.1K 🔥` `-56%`
1. [王鹤棣cortis拍了cha](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3cortis%E6%8B%8D%E4%BA%86cha%23) `116.8K 🔥` `-45%`
1. [骄阳似我](https://s.weibo.com/weibo?q=%23%E9%AA%84%E9%98%B3%E4%BC%BC%E6%88%91%23) `99.9K 🔥` `-76%`
1. [孟子义何与吻戏](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BD%95%E4%B8%8E%E5%90%BB%E6%88%8F%23) `95.3K 🔥` `-59%`
1. [给iPhone7配二手苹果表担心来路不正 (Worry about buying a second-hand Apple watch for your iPhone 7?)](https://s.weibo.com/weibo?q=%23%E7%BB%99iPhone7%E9%85%8D%E4%BA%8C%E6%89%8B%E8%8B%B9%E6%9E%9C%E8%A1%A8%E6%8B%85%E5%BF%83%E6%9D%A5%E8%B7%AF%E4%B8%8D%E6%AD%A3%23) `95.1K 🔥` `-63%`
1. [檀健次卢昱晓捧杯海报](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E6%8D%A7%E6%9D%AF%E6%B5%B7%E6%8A%A5%23) `87.8K 🔥` `-63%`
1. [樊振东2比3温瑞博](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E6%B8%A9%E7%91%9E%E5%8D%9A%23) `80.2K 🔥` `-58%`
1. [孟子义李昀锐情人节九宫格](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E6%83%85%E4%BA%BA%E8%8A%82%E4%B9%9D%E5%AE%AB%E6%A0%BC%23) `79.1K 🔥` `-62%`
1. [矿山员工10分钟数9.5万现金手抽筋](https://s.weibo.com/weibo?q=%23%E7%9F%BF%E5%B1%B1%E5%91%98%E5%B7%A510%E5%88%86%E9%92%9F%E6%95%B09.5%E4%B8%87%E7%8E%B0%E9%87%91%E6%89%8B%E6%8A%BD%E7%AD%8B%23) `74.2K 🔥` `-68%`
1. [杨瀚森10分2板 (Yang Hansen 10 points and 2 rebounds)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE10%E5%88%862%E6%9D%BF%23) `72.3K 🔥` `-53%`
1. [月薪6000春节加班4天拿4400元](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA6000%E6%98%A5%E8%8A%82%E5%8A%A0%E7%8F%AD4%E5%A4%A9%E6%8B%BF4400%E5%85%83%23) `71.4K 🔥` `-54%`

Updated at 2026-02-14 12:57:33

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
