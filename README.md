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

1. [武大靖聊张家齐直播带货 (Wu Dajing talks about Zhang Jiaqi’s live broadcast of goods delivery)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%E8%81%8A%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7%23) `726.7K 🔥` `NEW`
1. [4岁女童就诊177次患者是母亲](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%B1%E8%AF%8A177%E6%AC%A1%E6%82%A3%E8%80%85%E6%98%AF%E6%AF%8D%E4%BA%B2%23) `561.5K 🔥` `NEW`
1. [田曦薇簪花将军转场](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%B0%AA%E8%8A%B1%E5%B0%86%E5%86%9B%E8%BD%AC%E5%9C%BA%23) `258.5K 🔥` `NEW`
1. [少年因恐吓致失禁离世时仍穿尿不湿](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E5%9B%A0%E6%81%90%E5%90%93%E8%87%B4%E5%A4%B1%E7%A6%81%E7%A6%BB%E4%B8%96%E6%97%B6%E4%BB%8D%E7%A9%BF%E5%B0%BF%E4%B8%8D%E6%B9%BF%23) `177.1K 🔥` `NEW`
1. [面筋哥女儿自曝遭继父持续4年性骚扰](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E7%AD%8B%E5%93%A5%E5%A5%B3%E5%84%BF%E8%87%AA%E6%9B%9D%E9%81%AD%E7%BB%A7%E7%88%B6%E6%8C%81%E7%BB%AD4%E5%B9%B4%E6%80%A7%E9%AA%9A%E6%89%B0%23) `175.5K 🔥` `NEW`
1. [美国5名顶尖科学家接连失踪死亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD5%E5%90%8D%E9%A1%B6%E5%B0%96%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%8E%A5%E8%BF%9E%E5%A4%B1%E8%B8%AA%E6%AD%BB%E4%BA%A1%23) `171.5K 🔥` `NEW`
1. [迪士尼去年卖88元的馒头还有馅](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%8E%BB%E5%B9%B4%E5%8D%9688%E5%85%83%E7%9A%84%E9%A6%92%E5%A4%B4%E8%BF%98%E6%9C%89%E9%A6%85%23) `168.7K 🔥` `NEW`
1. [女大学生住院检查报告竟是伪造](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%BD%8F%E9%99%A2%E6%A3%80%E6%9F%A5%E6%8A%A5%E5%91%8A%E7%AB%9F%E6%98%AF%E4%BC%AA%E9%80%A0%23) `166.2K 🔥` `NEW`
1. [邓凯 鲁迅美院](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%20%E9%B2%81%E8%BF%85%E7%BE%8E%E9%99%A2%23) `160.1K 🔥` `NEW`
1. [各地文旅给千问上了波强度](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9C%B0%E6%96%87%E6%97%85%E7%BB%99%E5%8D%83%E9%97%AE%E4%B8%8A%E4%BA%86%E6%B3%A2%E5%BC%BA%E5%BA%A6%23) `150.5K 🔥` `NEW`
1. [周杰伦斥资一亿手搓vsAI续作 (Jay Chou spends 100 million on hand rubbing vs. AI sequel)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%A5%E8%B5%84%E4%B8%80%E4%BA%BF%E6%89%8B%E6%90%93vsAI%E7%BB%AD%E4%BD%9C%23) `148.4K 🔥` `NEW`
1. [亚朵回应楼层中文标识看不懂](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E5%9B%9E%E5%BA%94%E6%A5%BC%E5%B1%82%E4%B8%AD%E6%96%87%E6%A0%87%E8%AF%86%E7%9C%8B%E4%B8%8D%E6%87%82%23) `137.8K 🔥` `NEW`
1. [旧手机回收一天一个价](https://s.weibo.com/weibo?q=%23%E6%97%A7%E6%89%8B%E6%9C%BA%E5%9B%9E%E6%94%B6%E4%B8%80%E5%A4%A9%E4%B8%80%E4%B8%AA%E4%BB%B7%23) `121.0K 🔥` `NEW`
1. [张凌赫陈哲远将军造型对比](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%99%88%E5%93%B2%E8%BF%9C%E5%B0%86%E5%86%9B%E9%80%A0%E5%9E%8B%E5%AF%B9%E6%AF%94%23) `114.5K 🔥` `NEW`
1. [王一博抛媚眼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8A%9B%E5%AA%9A%E7%9C%BC%23) `104.0K 🔥` `NEW`
1. [A股反弹明天能继续吗](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%8D%E5%BC%B9%E6%98%8E%E5%A4%A9%E8%83%BD%E7%BB%A7%E7%BB%AD%E5%90%97%23) `100.3K 🔥` `NEW`
1. [深圳一草地惊现超两米大蟒蛇](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E8%8D%89%E5%9C%B0%E6%83%8A%E7%8E%B0%E8%B6%85%E4%B8%A4%E7%B1%B3%E5%A4%A7%E8%9F%92%E8%9B%87%23) `97.4K 🔥` `NEW`
1. [四个人买了四种盗版教材](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%B8%AA%E4%BA%BA%E4%B9%B0%E4%BA%86%E5%9B%9B%E7%A7%8D%E7%9B%97%E7%89%88%E6%95%99%E6%9D%90%23) `84.6K 🔥` `NEW`
1. [曝华为PuraX阔折叠手机将上新](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BAPuraX%E9%98%94%E6%8A%98%E5%8F%A0%E6%89%8B%E6%9C%BA%E5%B0%86%E4%B8%8A%E6%96%B0%23) `81.8K 🔥` `NEW`
1. [53岁独身女子去世留下600万遗产](https://s.weibo.com/weibo?q=%2353%E5%B2%81%E7%8B%AC%E8%BA%AB%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B600%E4%B8%87%E9%81%97%E4%BA%A7%23) `81.5K 🔥` `NEW`
1. [蜜雪集团去年赚了58.8亿 (Mixue Group earned 5.88 billion last year)](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E9%9B%86%E5%9B%A2%E5%8E%BB%E5%B9%B4%E8%B5%9A%E4%BA%8658.8%E4%BA%BF%23) `78.0K 🔥` `NEW`
1. [工作后你悟出过什么道理](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E4%BD%A0%E6%82%9F%E5%87%BA%E8%BF%87%E4%BB%80%E4%B9%88%E9%81%93%E7%90%86%23) `75.6K 🔥` `NEW`
1. [Bin进行曲有了](https://s.weibo.com/weibo?q=%23Bin%E8%BF%9B%E8%A1%8C%E6%9B%B2%E6%9C%89%E4%BA%86%23) `75.4K 🔥` `NEW`
1. [一日本人威胁要杀中国外交人员](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%A8%81%E8%83%81%E8%A6%81%E6%9D%80%E4%B8%AD%E5%9B%BD%E5%A4%96%E4%BA%A4%E4%BA%BA%E5%91%98%23) `525.6K 🔥` `+43%`
1. [以色列被打穿了 (Israel is penetrated)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%89%93%E7%A9%BF%E4%BA%86%23) `463.2K 🔥` `+32%`
1. [汽车之家](https://s.weibo.com/weibo?q=%23%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6%23) `181.0K 🔥` `+105%`
1. [日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `180.2K 🔥` `+83%`
1. [婚礼迎来了最严厉的新娘](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E6%96%B0%E5%A8%98%23) `177.6K 🔥` `+54%`
1. [王俊凯 有人在吗WJK在](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%97WJK%E5%9C%A8%23) `173.4K 🔥` `+51%`
1. [恭喜你发明了劳务派遣](https://s.weibo.com/weibo?q=%23%E6%81%AD%E5%96%9C%E4%BD%A0%E5%8F%91%E6%98%8E%E4%BA%86%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%23) `165.2K 🔥` `+32%`
1. [张凌赫知道热巴白宇退出开推的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9F%A5%E9%81%93%E7%83%AD%E5%B7%B4%E7%99%BD%E5%AE%87%E9%80%80%E5%87%BA%E5%BC%80%E6%8E%A8%E7%9A%84%E5%8F%8D%E5%BA%94%23) `164.6K 🔥` `+35%`
1. [伊朗最高领袖顾问重申结束战争条件 (Adviser to Iran's supreme leader reiterates conditions for ending war)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E9%A1%BE%E9%97%AE%E9%87%8D%E7%94%B3%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%E6%9D%A1%E4%BB%B6%23) `161.7K 🔥` `+78%`
1. [刘亦菲安妮海瑟薇世纪神图](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%AE%89%E5%A6%AE%E6%B5%B7%E7%91%9F%E8%96%87%E4%B8%96%E7%BA%AA%E7%A5%9E%E5%9B%BE%23) `159.0K 🔥` `+37%`
1. [第一批丁克家庭现状曝光 (Current status of the first batch of DINK families exposed)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E4%B8%81%E5%85%8B%E5%AE%B6%E5%BA%AD%E7%8E%B0%E7%8A%B6%E6%9B%9D%E5%85%89%23) `144.3K 🔥` `+21%`
1. [邓凯hi6上班路透](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AFhi6%E4%B8%8A%E7%8F%AD%E8%B7%AF%E9%80%8F%23) `96.0K 🔥` `+26%`
1. [迪士尼 物价](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%20%E7%89%A9%E4%BB%B7%23) `1.0M 🔥`
1. [打卡春天里的大美中国](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E6%98%A5%E5%A4%A9%E9%87%8C%E7%9A%84%E5%A4%A7%E7%BE%8E%E4%B8%AD%E5%9B%BD%23) `614.1K 🔥`
1. [上京东买王濛的大魔王一加15T](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E4%B9%B0%E7%8E%8B%E6%BF%9B%E7%9A%84%E5%A4%A7%E9%AD%94%E7%8E%8B%E4%B8%80%E5%8A%A015T%23) `324.4K 🔥`
1. [专家建议26岁高卿尘立遗嘱](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE26%E5%B2%81%E9%AB%98%E5%8D%BF%E5%B0%98%E7%AB%8B%E9%81%97%E5%98%B1%23) `273.1K 🔥`
1. [第一次看懂中文是因为看懂了英文](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E6%87%82%E4%B8%AD%E6%96%87%E6%98%AF%E5%9B%A0%E4%B8%BA%E7%9C%8B%E6%87%82%E4%BA%86%E8%8B%B1%E6%96%87%23) `181.7K 🔥`
1. [郭敬明改笔名](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%94%B9%E7%AC%94%E5%90%8D%23) `172.6K 🔥`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `169.1K 🔥`
1. [周杰伦新歌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%23) `163.2K 🔥`
1. [男友离世前转地铁吐血女孩5万治病 (A girl who vomited blood and took the subway to get medical treatment cost RMB 50,000 before her boyfriend died.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E7%A6%BB%E4%B8%96%E5%89%8D%E8%BD%AC%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A95%E4%B8%87%E6%B2%BB%E7%97%85%23) `133.6K 🔥`
1. [以色列再遭打击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%86%8D%E9%81%AD%E6%89%93%E5%87%BB%23) `99.0K 🔥`
1. [美军第82空降师可18小时内部署中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%AC%AC82%E7%A9%BA%E9%99%8D%E5%B8%88%E5%8F%AF18%E5%B0%8F%E6%97%B6%E5%86%85%E9%83%A8%E7%BD%B2%E4%B8%AD%E4%B8%9C%23) `95.3K 🔥`
1. [王鹤棣将门独后骑马路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%AA%91%E9%A9%AC%E8%B7%AF%E9%80%8F%23) `137.7K 🔥` `-66%`
1. [美国被曝正向多国索要保护费](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A2%AB%E6%9B%9D%E6%AD%A3%E5%90%91%E5%A4%9A%E5%9B%BD%E7%B4%A2%E8%A6%81%E4%BF%9D%E6%8A%A4%E8%B4%B9%23) `112.1K 🔥` `-21%`
1. [女子乘高铁投诉男子吸烟却被发口罩](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%98%E9%AB%98%E9%93%81%E6%8A%95%E8%AF%89%E7%94%B7%E5%AD%90%E5%90%B8%E7%83%9F%E5%8D%B4%E8%A2%AB%E5%8F%91%E5%8F%A3%E7%BD%A9%23) `99.2K 🔥` `-26%`
1. [金融监管总局副局长周亮被查 (Zhou Liang, deputy director of the State Administration of Financial Supervision, was investigated)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%9E%8D%E7%9B%91%E7%AE%A1%E6%80%BB%E5%B1%80%E5%89%AF%E5%B1%80%E9%95%BF%E5%91%A8%E4%BA%AE%E8%A2%AB%E6%9F%A5%23) `97.4K 🔥` `-87%`
1. [贵州溶洞发现地下反向森林](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E6%BA%B6%E6%B4%9E%E5%8F%91%E7%8E%B0%E5%9C%B0%E4%B8%8B%E5%8F%8D%E5%90%91%E6%A3%AE%E6%9E%97%23) `80.4K 🔥` `-45%`

Updated at 2026-03-24 17:30:33

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
