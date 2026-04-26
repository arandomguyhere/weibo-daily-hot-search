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

1. [白宫晚宴枪击事件枪手身亡 (Gunman dies in White House dinner shooting)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%E6%9E%AA%E6%89%8B%E8%BA%AB%E4%BA%A1%23) `1.9M 🔥` `NEW`
1. [浪姐现场观众对账](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%8E%B0%E5%9C%BA%E8%A7%82%E4%BC%97%E5%AF%B9%E8%B4%A6%23) `940.6K 🔥` `NEW`
1. [南方又一轮降雨降温](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8F%88%E4%B8%80%E8%BD%AE%E9%99%8D%E9%9B%A8%E9%99%8D%E6%B8%A9%23) `916.7K 🔥` `NEW`
1. [一袋糯米 全部暴露](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A2%8B%E7%B3%AF%E7%B1%B3%20%E5%85%A8%E9%83%A8%E6%9A%B4%E9%9C%B2%23) `910.8K 🔥` `NEW`
1. [张若昀评论区](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `904.4K 🔥` `NEW`
1. [约基奇打架](https://s.weibo.com/weibo?q=%23%E7%BA%A6%E5%9F%BA%E5%A5%87%E6%89%93%E6%9E%B6%23) `897.0K 🔥` `NEW`
1. [超话巡展计划](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%AF%9D%E5%B7%A1%E5%B1%95%E8%AE%A1%E5%88%92%23) `860.7K 🔥` `NEW`
1. [阚清子老公不抢曾沛慈的第一solo](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E4%B8%8D%E6%8A%A2%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9A%84%E7%AC%AC%E4%B8%80solo%23) `825.9K 🔥` `NEW`
1. [羽毛球取消21分制](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E6%AF%9B%E7%90%83%E5%8F%96%E6%B6%8821%E5%88%86%E5%88%B6%23) `736.6K 🔥` `NEW`
1. [特朗普公布枪手强闯安检录像](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%85%AC%E5%B8%83%E6%9E%AA%E6%89%8B%E5%BC%BA%E9%97%AF%E5%AE%89%E6%A3%80%E5%BD%95%E5%83%8F%23) `586.7K 🔥` `NEW`
1. [李昀锐 孟子义 (Li Yunrui Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%20%E5%AD%9F%E5%AD%90%E4%B9%89%23) `512.6K 🔥` `NEW`
1. [看上去很贵实际便宜又好玩的城市](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%B8%8A%E5%8E%BB%E5%BE%88%E8%B4%B5%E5%AE%9E%E9%99%85%E4%BE%BF%E5%AE%9C%E5%8F%88%E5%A5%BD%E7%8E%A9%E7%9A%84%E5%9F%8E%E5%B8%82%23) `449.9K 🔥` `NEW`
1. [阚清子瘦好多](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%98%A6%E5%A5%BD%E5%A4%9A%23) `449.4K 🔥` `NEW`
1. [欧莱雅 穆祉丞](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%8E%B1%E9%9B%85%20%E7%A9%86%E7%A5%89%E4%B8%9E%23) `448.9K 🔥` `NEW`
1. [宁艺卓真正回应粉丝的语气](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%9C%9F%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%B2%89%E4%B8%9D%E7%9A%84%E8%AF%AD%E6%B0%94%23) `446.5K 🔥` `NEW`
1. [汕头金山中学放学场面](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E9%87%91%E5%B1%B1%E4%B8%AD%E5%AD%A6%E6%94%BE%E5%AD%A6%E5%9C%BA%E9%9D%A2%23) `444.6K 🔥` `NEW`
1. [王者荣耀农家乐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%86%9C%E5%AE%B6%E4%B9%90%23) `393.9K 🔥` `NEW`
1. [粉色榴莲](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E6%A6%B4%E8%8E%B2%23) `383.4K 🔥` `NEW`
1. [林子烨练成微笑唇了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E7%BB%83%E6%88%90%E5%BE%AE%E7%AC%91%E5%94%87%E4%BA%86%23) `382.5K 🔥` `NEW`
1. [华晨宇演唱会被叫停不只是娱乐事件](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E5%8F%AB%E5%81%9C%E4%B8%8D%E5%8F%AA%E6%98%AF%E5%A8%B1%E4%B9%90%E4%BA%8B%E4%BB%B6%23) `379.1K 🔥` `NEW`
1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `309.1K 🔥` `NEW`
1. [银行回应亲属用轮椅推病人取钱被拒](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E4%BA%B2%E5%B1%9E%E7%94%A8%E8%BD%AE%E6%A4%85%E6%8E%A8%E7%97%85%E4%BA%BA%E5%8F%96%E9%92%B1%E8%A2%AB%E6%8B%92%23) `293.2K 🔥` `NEW`
1. [周杰伦方回应新豪宅在昆凌父亲名下](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%96%B0%E8%B1%AA%E5%AE%85%E5%9C%A8%E6%98%86%E5%87%8C%E7%88%B6%E4%BA%B2%E5%90%8D%E4%B8%8B%23) `292.9K 🔥` `NEW`
1. [火湖G3漏吹詹姆斯踩线](https://s.weibo.com/weibo?q=%23%E7%81%AB%E6%B9%96G3%E6%BC%8F%E5%90%B9%E8%A9%B9%E5%A7%86%E6%96%AF%E8%B8%A9%E7%BA%BF%23) `267.1K 🔥` `NEW`
1. [近20万坐月子婴儿床出现多只书虱](https://s.weibo.com/weibo?q=%23%E8%BF%9120%E4%B8%87%E5%9D%90%E6%9C%88%E5%AD%90%E5%A9%B4%E5%84%BF%E5%BA%8A%E5%87%BA%E7%8E%B0%E5%A4%9A%E5%8F%AA%E4%B9%A6%E8%99%B1%23) `259.9K 🔥` `NEW`
1. [特朗普撤离白宫记者晚宴时疑摔倒](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%92%A4%E7%A6%BB%E7%99%BD%E5%AE%AB%E8%AE%B0%E8%80%85%E6%99%9A%E5%AE%B4%E6%97%B6%E7%96%91%E6%91%94%E5%80%92%23) `259.8K 🔥` `NEW`
1. [王菲在北京的一天是怎么度过的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%9A%84%E4%B8%80%E5%A4%A9%E6%98%AF%E6%80%8E%E4%B9%88%E5%BA%A6%E8%BF%87%E7%9A%84%23) `242.6K 🔥` `NEW`
1. [DeepSeek致谢近300研发者10人已离职](https://s.weibo.com/weibo?q=%23DeepSeek%E8%87%B4%E8%B0%A2%E8%BF%91300%E7%A0%94%E5%8F%91%E8%80%8510%E4%BA%BA%E5%B7%B2%E7%A6%BB%E8%81%8C%23) `241.4K 🔥` `NEW`
1. [森林狼3比1掘金](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BC3%E6%AF%941%E6%8E%98%E9%87%91%23) `238.2K 🔥` `NEW`
1. [范丞丞看时团 鹿晗看NINEPERCENT](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9C%8B%E6%97%B6%E5%9B%A2%20%E9%B9%BF%E6%99%97%E7%9C%8BNINEPERCENT%23) `238.0K 🔥` `NEW`
1. [张檬小五儿子一岁了 (Zhang Meng’s fifth son is one year old)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%AA%AC%E5%B0%8F%E4%BA%94%E5%84%BF%E5%AD%90%E4%B8%80%E5%B2%81%E4%BA%86%23) `234.2K 🔥` `NEW`
1. [特朗普因安全原因离开白宫晚宴](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%A0%E5%AE%89%E5%85%A8%E5%8E%9F%E5%9B%A0%E7%A6%BB%E5%BC%80%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%23) `217.6K 🔥` `NEW`
1. [花少导演回复袁一琦粉丝](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%A4%8D%E8%A2%81%E4%B8%80%E7%90%A6%E7%B2%89%E4%B8%9D%23) `215.8K 🔥` `NEW`
1. [22岁女孩运动减肥把肌肉练爆了](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%BF%90%E5%8A%A8%E5%87%8F%E8%82%A5%E6%8A%8A%E8%82%8C%E8%82%89%E7%BB%83%E7%88%86%E4%BA%86%23) `203.6K 🔥` `NEW`
1. [前东方甄选主播曾公开表达对公司不满](https://s.weibo.com/weibo?q=%23%E5%89%8D%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%BB%E6%92%AD%E6%9B%BE%E5%85%AC%E5%BC%80%E8%A1%A8%E8%BE%BE%E5%AF%B9%E5%85%AC%E5%8F%B8%E4%B8%8D%E6%BB%A1%23) `194.5K 🔥` `NEW`
1. [英国56岁失独母亲飞往瑞士接受安乐死](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD56%E5%B2%81%E5%A4%B1%E7%8B%AC%E6%AF%8D%E4%BA%B2%E9%A3%9E%E5%BE%80%E7%91%9E%E5%A3%AB%E6%8E%A5%E5%8F%97%E5%AE%89%E4%B9%90%E6%AD%BB%23) `192.0K 🔥` `NEW`
1. [孙俪镜头下的邓超变男大了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E9%95%9C%E5%A4%B4%E4%B8%8B%E7%9A%84%E9%82%93%E8%B6%85%E5%8F%98%E7%94%B7%E5%A4%A7%E4%BA%86%23) `186.8K 🔥` `NEW`
1. [记者亲述白宫晚宴枪击事件](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E4%BA%B2%E8%BF%B0%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%23) `178.0K 🔥` `NEW`
1. [张真源端水跑男团和时代少年团](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E7%AB%AF%E6%B0%B4%E8%B7%91%E7%94%B7%E5%9B%A2%E5%92%8C%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `173.7K 🔥` `NEW`
1. [广东电价突然飙升](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B5%E4%BB%B7%E7%AA%81%E7%84%B6%E9%A3%99%E5%8D%87%23) `171.9K 🔥` `NEW`
1. [网民造谣雷军被行政拘留10天 (Netizens spread rumors and Lei Jun was detained for 10 days)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A3%E9%9B%B7%E5%86%9B%E8%A2%AB%E8%A1%8C%E6%94%BF%E6%8B%98%E7%95%9910%E5%A4%A9%23) `163.2K 🔥` `NEW`
1. [黑夜告白开播](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A4%9C%E5%91%8A%E7%99%BD%E5%BC%80%E6%92%AD%23) `150.5K 🔥` `NEW`
1. [森林狼vs掘金](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BCvs%E6%8E%98%E9%87%91%23) `145.4K 🔥` `NEW`
1. [东方甄选4名主播同日宣布离职](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%894%E5%90%8D%E4%B8%BB%E6%92%AD%E5%90%8C%E6%97%A5%E5%AE%A3%E5%B8%83%E7%A6%BB%E8%81%8C%23) `565.4K 🔥` `+29%`
1. [宁艺卓回怼粉丝](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%9B%9E%E6%80%BC%E7%B2%89%E4%B8%9D%23) `515.0K 🔥` `+107%`
1. [俞敏洪回应多位主播离职](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9B%9E%E5%BA%94%E5%A4%9A%E4%BD%8D%E4%B8%BB%E6%92%AD%E7%A6%BB%E8%81%8C%23) `446.6K 🔥` `+141%`
1. [齐思钧表情](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E8%A1%A8%E6%83%85%23) `306.7K 🔥` `+35%`
1. [得知胎儿色盲孕晚期女子称害了孩子](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A5%E8%83%8E%E5%84%BF%E8%89%B2%E7%9B%B2%E5%AD%95%E6%99%9A%E6%9C%9F%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%AE%B3%E4%BA%86%E5%AD%A9%E5%AD%90%23) `293.5K 🔥` `+39%`
1. [建议大家衣服不要攒一起洗](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A1%A3%E6%9C%8D%E4%B8%8D%E8%A6%81%E6%94%92%E4%B8%80%E8%B5%B7%E6%B4%97%23) `256.6K 🔥` `+43%`
1. [网传浪姐二公个喜排名](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E4%B8%AA%E5%96%9C%E6%8E%92%E5%90%8D%23) `199.9K 🔥`
1. [榴莲已经20多元一斤了 (Durian already costs more than 20 yuan per pound)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E5%B7%B2%E7%BB%8F20%E5%A4%9A%E5%85%83%E4%B8%80%E6%96%A4%E4%BA%86%23) `255.0K 🔥` `-51%`

Updated at 2026-04-26 12:32:32

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
