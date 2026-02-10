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

1. [汕头亚朵酒店春节一晚4200 (Shantou Atour Hotel Spring Festival one night 4200)](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E4%BA%9A%E6%9C%B5%E9%85%92%E5%BA%97%E6%98%A5%E8%8A%82%E4%B8%80%E6%99%9A4200%23) `289.5K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `170.9K 🔥` `NEW`
1. [弯刀裤](https://s.weibo.com/weibo?q=%23%E5%BC%AF%E5%88%80%E8%A3%A4%23) `168.9K 🔥` `NEW`
1. [杨紫新剧1集头发全白了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A71%E9%9B%86%E5%A4%B4%E5%8F%91%E5%85%A8%E7%99%BD%E4%BA%86%23) `168.8K 🔥` `NEW`
1. [AI短剧](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%23) `166.5K 🔥` `NEW`
1. [谷爱凌回应特朗普大骂冬奥运动员](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%A7%E9%AA%82%E5%86%AC%E5%A5%A5%E8%BF%90%E5%8A%A8%E5%91%98%23) `166.1K 🔥` `NEW`
1. [宋威龙赵今麦代言娇兰](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E4%BB%A3%E8%A8%80%E5%A8%87%E5%85%B0%23) `164.6K 🔥` `NEW`
1. [蔡徐坤扫楼](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%89%AB%E6%A5%BC%23) `164.0K 🔥` `NEW`
1. [外卖员跑腿买药被判贩卖毒品罪](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E8%B7%91%E8%85%BF%E4%B9%B0%E8%8D%AF%E8%A2%AB%E5%88%A4%E8%B4%A9%E5%8D%96%E6%AF%92%E5%93%81%E7%BD%AA%23) `161.3K 🔥` `NEW`
1. [董璇张维伊陪小酒窝上课](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E9%99%AA%E5%B0%8F%E9%85%92%E7%AA%9D%E4%B8%8A%E8%AF%BE%23) `160.5K 🔥` `NEW`
1. [车祸后妹妹以为冷却液是血嚎啕大哭 (After the car accident, my sister cried because she thought the coolant was blood.)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E7%A5%B8%E5%90%8E%E5%A6%B9%E5%A6%B9%E4%BB%A5%E4%B8%BA%E5%86%B7%E5%8D%B4%E6%B6%B2%E6%98%AF%E8%A1%80%E5%9A%8E%E5%95%95%E5%A4%A7%E5%93%AD%23) `159.8K 🔥` `NEW`
1. [向太自曝因脑下垂体瘤一直发胖](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%87%AA%E6%9B%9D%E5%9B%A0%E8%84%91%E4%B8%8B%E5%9E%82%E4%BD%93%E7%98%A4%E4%B8%80%E7%9B%B4%E5%8F%91%E8%83%96%23) `159.2K 🔥` `NEW`
1. [海军官兵回应下饺子式造舰](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%86%9B%E5%AE%98%E5%85%B5%E5%9B%9E%E5%BA%94%E4%B8%8B%E9%A5%BA%E5%AD%90%E5%BC%8F%E9%80%A0%E8%88%B0%23) `140.1K 🔥` `NEW`
1. [订婚强奸案女方身上淤青清清楚楚](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E5%A9%9A%E5%BC%BA%E5%A5%B8%E6%A1%88%E5%A5%B3%E6%96%B9%E8%BA%AB%E4%B8%8A%E6%B7%A4%E9%9D%92%E6%B8%85%E6%B8%85%E6%A5%9A%E6%A5%9A%23) `138.7K 🔥` `NEW`
1. [白客说马年要放自己一马](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%A2%E8%AF%B4%E9%A9%AC%E5%B9%B4%E8%A6%81%E6%94%BE%E8%87%AA%E5%B7%B1%E4%B8%80%E9%A9%AC%23) `138.1K 🔥` `NEW`
1. [哈登关键绝平三分](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E5%85%B3%E9%94%AE%E7%BB%9D%E5%B9%B3%E4%B8%89%E5%88%86%23) `137.9K 🔥` `NEW`
1. [女硕士当礼品规划师月入20万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%A1%95%E5%A3%AB%E5%BD%93%E7%A4%BC%E5%93%81%E8%A7%84%E5%88%92%E5%B8%88%E6%9C%88%E5%85%A520%E4%B8%87%23) `137.7K 🔥` `NEW`
1. [羊了个羊](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E4%BA%86%E4%B8%AA%E7%BE%8A%23) `135.4K 🔥` `NEW`
1. [当我冷脸和EXO合照](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%86%B7%E8%84%B8%E5%92%8CEXO%E5%90%88%E7%85%A7%23) `133.8K 🔥` `NEW`
1. [骑士战胜掘金](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%AB%E6%88%98%E8%83%9C%E6%8E%98%E9%87%91%23) `130.7K 🔥` `NEW`
1. [刘少昂林孝埈孙龙米兰冬奥首秀 (Liu Shaoang, Lin Xiaoqi, Sun Long and Milan Winter Olympics debut)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E6%9E%97%E5%AD%9D%E5%9F%88%E5%AD%99%E9%BE%99%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E7%A7%80%23) `126.5K 🔥` `NEW`
1. [元宝微信发红包](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%BE%AE%E4%BF%A1%E5%8F%91%E7%BA%A2%E5%8C%85%23) `113.5K 🔥` `NEW`
1. [91岁爷爷百米跑出18秒61](https://s.weibo.com/weibo?q=%2391%E5%B2%81%E7%88%B7%E7%88%B7%E7%99%BE%E7%B1%B3%E8%B7%91%E5%87%BA18%E7%A7%9261%23) `111.6K 🔥` `NEW`
1. [李信伽罗明世隐水墨皮肤](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BF%A1%E4%BC%BD%E7%BD%97%E6%98%8E%E4%B8%96%E9%9A%90%E6%B0%B4%E5%A2%A8%E7%9A%AE%E8%82%A4%23) `111.5K 🔥` `NEW`
1. [人只是一块生肉](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%8F%AA%E6%98%AF%E4%B8%80%E5%9D%97%E7%94%9F%E8%82%89%23) `103.1K 🔥` `NEW`
1. [杨幂朱一龙相识20年首合作](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9C%B1%E4%B8%80%E9%BE%99%E7%9B%B8%E8%AF%8620%E5%B9%B4%E9%A6%96%E5%90%88%E4%BD%9C%23) `101.9K 🔥` `NEW`
1. [仙逆打戏](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E6%89%93%E6%88%8F%23) `101.8K 🔥` `NEW`
1. [成龙问乔杉为什么不屑谢霆锋](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E9%97%AE%E4%B9%94%E6%9D%89%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%B1%91%E8%B0%A2%E9%9C%86%E9%94%8B%23) `97.0K 🔥` `NEW`
1. [内耗的人一定要去一次鄂尔多斯](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%80%97%E7%9A%84%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8E%BB%E4%B8%80%E6%AC%A1%E9%84%82%E5%B0%94%E5%A4%9A%E6%96%AF%23) `91.4K 🔥` `NEW`
1. [2026央视网络春晚节目单来了 (2026 CCTV Online Spring Festival Gala program list is here)](https://s.weibo.com/weibo?q=%232026%E5%A4%AE%E8%A7%86%E7%BD%91%E7%BB%9C%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9D%A5%E4%BA%86%23) `828.4K 🔥` `+653%`
1. [黄桃罐头能不能治流感](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%A1%83%E7%BD%90%E5%A4%B4%E8%83%BD%E4%B8%8D%E8%83%BD%E6%B2%BB%E6%B5%81%E6%84%9F%23) `177.2K 🔥` `+266%`
1. [易炼红被查 (Yi Lianhong was investigated)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%82%BC%E7%BA%A2%E8%A2%AB%E6%9F%A5%23) `1.1M 🔥`
1. [女子孕期被疑出轨公公转650万安抚 (Woman suspected of cheating on her father-in-law during pregnancy sends 6.5 million yuan to comfort her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E8%A2%AB%E7%96%91%E5%87%BA%E8%BD%A8%E5%85%AC%E5%85%AC%E8%BD%AC650%E4%B8%87%E5%AE%89%E6%8A%9A%23) `165.5K 🔥`
1. [孙颖莎ELLE开季封面预告 (Sun Yingsha ELLE season opening cover preview)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%E5%BC%80%E5%AD%A3%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `163.5K 🔥`
1. [家长把4岁和8岁孩子塞进后备箱返乡 (Parents put 4-year-old and 8-year-old children in the trunk and return home)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%8A%8A4%E5%B2%81%E5%92%8C8%E5%B2%81%E5%AD%A9%E5%AD%90%E5%A1%9E%E8%BF%9B%E5%90%8E%E5%A4%87%E7%AE%B1%E8%BF%94%E4%B9%A1%23) `162.2K 🔥`
1. [宋威龙赵今麦贴脸比心](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B4%B4%E8%84%B8%E6%AF%94%E5%BF%83%23) `161.5K 🔥`
1. [李一桐陈星旭领衔主演金枝 (Li Yitong and Chen Xingxu star in Jin Zhi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%99%88%E6%98%9F%E6%97%AD%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E9%87%91%E6%9E%9D%23) `159.0K 🔥`
1. [金枝](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%23) `158.6K 🔥`
1. [虞书欣诉黑粉名誉侵权](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%AF%89%E9%BB%91%E7%B2%89%E5%90%8D%E8%AA%89%E4%BE%B5%E6%9D%83%23) `139.2K 🔥`
1. [来北京过年吧](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E5%8C%97%E4%BA%AC%E8%BF%87%E5%B9%B4%E5%90%A7%23) `661.9K 🔥` `-22%`
1. [问界M9星光之夜阵容夯爆了 (Wenjie M9 Starlight Night lineup is in full swing)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E6%98%9F%E5%85%89%E4%B9%8B%E5%A4%9C%E9%98%B5%E5%AE%B9%E5%A4%AF%E7%88%86%E4%BA%86%23) `304.4K 🔥` `-58%`
1. [黑神话钟馗](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%23) `284.4K 🔥` `-60%`
1. [22岁当村支书28岁晒成绩火了](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%BD%93%E6%9D%91%E6%94%AF%E4%B9%A628%E5%B2%81%E6%99%92%E6%88%90%E7%BB%A9%E7%81%AB%E4%BA%86%23) `187.4K 🔥` `-60%`
1. [不要对AI说谢谢](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%AF%B9AI%E8%AF%B4%E8%B0%A2%E8%B0%A2%23) `165.4K 🔥` `-55%`
1. [谷爱凌错失金牌根本原因](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%94%99%E5%A4%B1%E9%87%91%E7%89%8C%E6%A0%B9%E6%9C%AC%E5%8E%9F%E5%9B%A0%23) `162.8K 🔥` `-84%`
1. [外国游客被长白山百万皇冠整破防了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%A2%AB%E9%95%BF%E7%99%BD%E5%B1%B1%E7%99%BE%E4%B8%87%E7%9A%87%E5%86%A0%E6%95%B4%E7%A0%B4%E9%98%B2%E4%BA%86%23) `149.5K 🔥` `-58%`
1. [小年 (Xiaonian)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `125.6K 🔥` `-30%`
1. [胡意旋工伤2.0](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%84%8F%E6%97%8B%E5%B7%A5%E4%BC%A42.0%23) `111.7K 🔥` `-38%`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `110.9K 🔥` `-38%`
1. [谢永儿官配](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%B0%B8%E5%84%BF%E5%AE%98%E9%85%8D%23) `110.1K 🔥` `-38%`
1. [辛芷蕾威尼斯之后的变化](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%A8%81%E5%B0%BC%E6%96%AF%E4%B9%8B%E5%90%8E%E7%9A%84%E5%8F%98%E5%8C%96%23) `103.6K 🔥` `-42%`
1. [金枝开机](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%E5%BC%80%E6%9C%BA%23) `91.8K 🔥` `-49%`

Updated at 2026-02-10 13:16:22

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
