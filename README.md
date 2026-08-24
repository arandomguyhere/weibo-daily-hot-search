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

1. [中国连续17年保持全球第二大进口市场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%9E%E7%BB%AD17%E5%B9%B4%E4%BF%9D%E6%8C%81%E5%85%A8%E7%90%83%E7%AC%AC%E4%BA%8C%E5%A4%A7%E8%BF%9B%E5%8F%A3%E5%B8%82%E5%9C%BA%23) `1.4M 🔥` `NEW`
1. [罗永浩求扶老人被索赔店主联系方式](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%B1%82%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%23) `942.4K 🔥` `NEW`
1. [宋威龙秘密世界品牌代言人](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%A7%98%E5%AF%86%E4%B8%96%E7%95%8C%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `478.3K 🔥` `NEW`
1. [舞蹈新风暴舞者官宣](https://s.weibo.com/weibo?q=%23%E8%88%9E%E8%B9%88%E6%96%B0%E9%A3%8E%E6%9A%B4%E8%88%9E%E8%80%85%E5%AE%98%E5%AE%A3%23) `393.9K 🔥` `NEW`
1. [扶老人 赔1.9万](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%20%E8%B5%941.9%E4%B8%87%23) `393.8K 🔥` `NEW`
1. [四川省地震局通报](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E7%9C%81%E5%9C%B0%E9%9C%87%E5%B1%80%E9%80%9A%E6%8A%A5%23) `393.4K 🔥` `NEW`
1. [宇树大跌近7%](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%A4%A7%E8%B7%8C%E8%BF%917%25%23) `363.1K 🔥` `NEW`
1. [四川地震局已终止预警第三方授权](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%E5%B1%80%E5%B7%B2%E7%BB%88%E6%AD%A2%E9%A2%84%E8%AD%A6%E7%AC%AC%E4%B8%89%E6%96%B9%E6%8E%88%E6%9D%83%23) `357.8K 🔥` `NEW`
1. [农村离婚女性陷入户口悬空困境](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E7%A6%BB%E5%A9%9A%E5%A5%B3%E6%80%A7%E9%99%B7%E5%85%A5%E6%88%B7%E5%8F%A3%E6%82%AC%E7%A9%BA%E5%9B%B0%E5%A2%83%23) `279.7K 🔥` `NEW`
1. [霉霉的婚礼视频终于放出来了吗](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E7%9A%84%E5%A9%9A%E7%A4%BC%E8%A7%86%E9%A2%91%E7%BB%88%E4%BA%8E%E6%94%BE%E5%87%BA%E6%9D%A5%E4%BA%86%E5%90%97%23) `279.1K 🔥` `NEW`
1. [律师称扶老人协商赔钱是和稀泥](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0%E6%89%B6%E8%80%81%E4%BA%BA%E5%8D%8F%E5%95%86%E8%B5%94%E9%92%B1%E6%98%AF%E5%92%8C%E7%A8%80%E6%B3%A5%23) `275.8K 🔥` `NEW`
1. [广西宁明已紧急转移群众超1.6万人](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%AE%81%E6%98%8E%E5%B7%B2%E7%B4%A7%E6%80%A5%E8%BD%AC%E7%A7%BB%E7%BE%A4%E4%BC%97%E8%B6%851.6%E4%B8%87%E4%BA%BA%23) `222.1K 🔥` `NEW`
1. [让ChatGPT学狗叫帮我吓退坏人](https://s.weibo.com/weibo?q=%23%E8%AE%A9ChatGPT%E5%AD%A6%E7%8B%97%E5%8F%AB%E5%B8%AE%E6%88%91%E5%90%93%E9%80%80%E5%9D%8F%E4%BA%BA%23) `196.8K 🔥` `NEW`
1. [两个新疆人都以为对方是外国人](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%96%B0%E7%96%86%E4%BA%BA%E9%83%BD%E4%BB%A5%E4%B8%BA%E5%AF%B9%E6%96%B9%E6%98%AF%E5%A4%96%E5%9B%BD%E4%BA%BA%23) `196.3K 🔥` `NEW`
1. [2026上海世赛](https://s.weibo.com/weibo?q=%232026%E4%B8%8A%E6%B5%B7%E4%B8%96%E8%B5%9B%23) `193.0K 🔥` `NEW`
1. [严浩翔疑似要出实体专辑了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%96%91%E4%BC%BC%E8%A6%81%E5%87%BA%E5%AE%9E%E4%BD%93%E4%B8%93%E8%BE%91%E4%BA%86%23) `169.5K 🔥` `NEW`
1. [CORTIS Ball发行](https://s.weibo.com/weibo?q=%23CORTIS%20Ball%E5%8F%91%E8%A1%8C%23) `165.7K 🔥` `NEW`
1. [成都七中今年高考成绩](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%83%E4%B8%AD%E4%BB%8A%E5%B9%B4%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `164.9K 🔥` `NEW`
1. [美国27岁选美冠军被剥夺冠军头衔](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD27%E5%B2%81%E9%80%89%E7%BE%8E%E5%86%A0%E5%86%9B%E8%A2%AB%E5%89%A5%E5%A4%BA%E5%86%A0%E5%86%9B%E5%A4%B4%E8%A1%94%23) `164.1K 🔥` `NEW`
1. [韩沛颖向刘浩存道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E5%90%91%E5%88%98%E6%B5%A9%E5%AD%98%E9%81%93%E6%AD%89%23) `8.6M 🔥` `+1932%`
1. [敌敌畏消杀涉绿茶餐厅](https://s.weibo.com/weibo?q=%23%E6%95%8C%E6%95%8C%E7%95%8F%E6%B6%88%E6%9D%80%E6%B6%89%E7%BB%BF%E8%8C%B6%E9%A4%90%E5%8E%85%23) `1.9M 🔥` `+86%`
1. [实习生把拒绝AI贴到公司电梯](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E7%94%9F%E6%8A%8A%E6%8B%92%E7%BB%9DAI%E8%B4%B4%E5%88%B0%E5%85%AC%E5%8F%B8%E7%94%B5%E6%A2%AF%23) `360.3K 🔥` `+120%`
1. [王俊凯致我们闪光的小热爱](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%87%B4%E6%88%91%E4%BB%AC%E9%97%AA%E5%85%89%E7%9A%84%E5%B0%8F%E7%83%AD%E7%88%B1%23) `349.6K 🔥` `+114%`
1. [26岁销售员验DNA成了比利时王子](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E9%94%80%E5%94%AE%E5%91%98%E9%AA%8CDNA%E6%88%90%E4%BA%86%E6%AF%94%E5%88%A9%E6%97%B6%E7%8E%8B%E5%AD%90%23) `279.3K 🔥` `+70%`
1. [甲醛白菜严重透支公众信任](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E4%B8%A5%E9%87%8D%E9%80%8F%E6%94%AF%E5%85%AC%E4%BC%97%E4%BF%A1%E4%BB%BB%23) `279.1K 🔥` `+86%`
1. [爸爸拉一车西瓜带女儿进藏自驾游](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E6%8B%89%E4%B8%80%E8%BD%A6%E8%A5%BF%E7%93%9C%E5%B8%A6%E5%A5%B3%E5%84%BF%E8%BF%9B%E8%97%8F%E8%87%AA%E9%A9%BE%E6%B8%B8%23) `241.9K 🔥` `+22%`
1. [2名环卫工在海滩挖坑掩埋垃圾](https://s.weibo.com/weibo?q=%232%E5%90%8D%E7%8E%AF%E5%8D%AB%E5%B7%A5%E5%9C%A8%E6%B5%B7%E6%BB%A9%E6%8C%96%E5%9D%91%E6%8E%A9%E5%9F%8B%E5%9E%83%E5%9C%BE%23) `213.0K 🔥` `+37%`
1. [12306回应无座票二等座同价](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23) `2.1M 🔥`
1. [璀璨之上 迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%92%80%E7%92%A8%E4%B9%8B%E4%B8%8A%20%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `490.1K 🔥`
1. [多家餐厅残留液体敌敌畏检测阳性](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%A4%90%E5%8E%85%E6%AE%8B%E7%95%99%E6%B6%B2%E4%BD%93%E6%95%8C%E6%95%8C%E7%95%8F%E6%A3%80%E6%B5%8B%E9%98%B3%E6%80%A7%23) `476.9K 🔥`
1. [这些叫不出来的东西真有名字](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%8F%AB%E4%B8%8D%E5%87%BA%E6%9D%A5%E7%9A%84%E4%B8%9C%E8%A5%BF%E7%9C%9F%E6%9C%89%E5%90%8D%E5%AD%97%23) `394.3K 🔥`
1. [刘浩存有段地府戏也被删了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%9C%89%E6%AE%B5%E5%9C%B0%E5%BA%9C%E6%88%8F%E4%B9%9F%E8%A2%AB%E5%88%A0%E4%BA%86%23) `393.0K 🔥`
1. [韩沛颖让王晓晨道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E8%AE%A9%E7%8E%8B%E6%99%93%E6%99%A8%E9%81%93%E6%AD%89%23) `392.7K 🔥`
1. [官方提出补贴帮扶老人遭索赔店家](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E6%8F%90%E5%87%BA%E8%A1%A5%E8%B4%B4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E5%AE%B6%23) `392.5K 🔥`
1. [法老 退圈](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%81%20%E9%80%80%E5%9C%88%23) `379.4K 🔥`
1. [张韶涵因心脏病找母亲要医疗费未果](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E5%9B%A0%E5%BF%83%E8%84%8F%E7%97%85%E6%89%BE%E6%AF%8D%E4%BA%B2%E8%A6%81%E5%8C%BB%E7%96%97%E8%B4%B9%E6%9C%AA%E6%9E%9C%23) `364.1K 🔥`
1. [王晓晨谈泼菜戏份引发演员争议](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%E8%B0%88%E6%B3%BC%E8%8F%9C%E6%88%8F%E4%BB%BD%E5%BC%95%E5%8F%91%E6%BC%94%E5%91%98%E4%BA%89%E8%AE%AE%23) `355.6K 🔥`
1. [丁程鑫机场被点名](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%82%B9%E5%90%8D%23) `347.3K 🔥`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `298.7K 🔥`
1. [社区回应老人店内离世被索赔10万](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E5%8C%BA%E5%9B%9E%E5%BA%94%E8%80%81%E4%BA%BA%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E8%A2%AB%E7%B4%A2%E8%B5%9410%E4%B8%87%23) `204.0K 🔥`
1. [影院被樊振东售票速度惊到](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E8%A2%AB%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%94%AE%E7%A5%A8%E9%80%9F%E5%BA%A6%E6%83%8A%E5%88%B0%23) `182.5K 🔥`
1. [沪上阿姨小程序崩了](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B4%A9%E4%BA%86%23) `179.9K 🔥`
1. [105岁老妈说85岁儿子这辈子完了](https://s.weibo.com/weibo?q=%23105%E5%B2%81%E8%80%81%E5%A6%88%E8%AF%B485%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%99%E8%BE%88%E5%AD%90%E5%AE%8C%E4%BA%86%23) `470.8K 🔥` `-36%`
1. [张子枫好薄的一片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E5%A5%BD%E8%96%84%E7%9A%84%E4%B8%80%E7%89%87%23) `294.5K 🔥` `-33%`
1. [楚嘉禾 加戏](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E5%98%89%E7%A6%BE%20%E5%8A%A0%E6%88%8F%23) `235.9K 🔥` `-23%`
1. [千万不要冲动买养老房](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%86%B2%E5%8A%A8%E4%B9%B0%E5%85%BB%E8%80%81%E6%88%BF%23) `221.1K 🔥` `-44%`
1. [刺棠](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%A3%A0%23) `197.4K 🔥` `-26%`
1. [超强台风沙德尔](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%23) `189.5K 🔥` `-49%`
1. [四六级成绩](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%88%90%E7%BB%A9%23) `164.5K 🔥` `-47%`

Updated at 2026-08-24 13:00:36

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
