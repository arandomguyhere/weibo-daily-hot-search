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

1. [爱奇艺演员恋综 (iQiyi actor romance variety)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E6%BC%94%E5%91%98%E6%81%8B%E7%BB%BC%23) `1.2M 🔥` `NEW`
1. [第五届全民阅读大会](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E5%B1%8A%E5%85%A8%E6%B0%91%E9%98%85%E8%AF%BB%E5%A4%A7%E4%BC%9A%23) `723.6K 🔥` `NEW`
1. [建议多在公司打听自己的八卦](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%9A%E5%9C%A8%E5%85%AC%E5%8F%B8%E6%89%93%E5%90%AC%E8%87%AA%E5%B7%B1%E7%9A%84%E5%85%AB%E5%8D%A6%23) `640.9K 🔥` `NEW`
1. [范丞丞看孟子义眼神](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9C%8B%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9C%BC%E7%A5%9E%23) `584.6K 🔥` `NEW`
1. [国内油价2026年首次下调](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%B2%B9%E4%BB%B72026%E5%B9%B4%E9%A6%96%E6%AC%A1%E4%B8%8B%E8%B0%83%23) `490.0K 🔥` `NEW`
1. [湖北涉黑头目黄大发被判死刑](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E6%B6%89%E9%BB%91%E5%A4%B4%E7%9B%AE%E9%BB%84%E5%A4%A7%E5%8F%91%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `420.4K 🔥` `NEW`
1. [父母再生7弟20岁小伙直言扛不动](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%86%8D%E7%94%9F7%E5%BC%9F20%E5%B2%81%E5%B0%8F%E4%BC%99%E7%9B%B4%E8%A8%80%E6%89%9B%E4%B8%8D%E5%8A%A8%23) `418.1K 🔥` `NEW`
1. [12306这回动真格了](https://s.weibo.com/weibo?q=%2312306%E8%BF%99%E5%9B%9E%E5%8A%A8%E7%9C%9F%E6%A0%BC%E4%BA%86%23) `414.2K 🔥` `NEW`
1. [这类人才紧缺平均月薪超2万](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%B1%BB%E4%BA%BA%E6%89%8D%E7%B4%A7%E7%BC%BA%E5%B9%B3%E5%9D%87%E6%9C%88%E8%96%AA%E8%B6%852%E4%B8%87%23) `336.9K 🔥` `NEW`
1. [张翰回应去移民局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%B0%E5%9B%9E%E5%BA%94%E5%8E%BB%E7%A7%BB%E6%B0%91%E5%B1%80%23) `325.9K 🔥` `NEW`
1. [唐嫣眼神好疲惫 (Tang Yan’s eyes are so tired)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%9C%BC%E7%A5%9E%E5%A5%BD%E7%96%B2%E6%83%AB%23) `322.4K 🔥` `NEW`
1. [麻将里最拉的牌](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E5%B0%86%E9%87%8C%E6%9C%80%E6%8B%89%E7%9A%84%E7%89%8C%23) `317.4K 🔥` `NEW`
1. [仙逆李慕婉cos](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E6%9D%8E%E6%85%95%E5%A9%89cos%23) `314.2K 🔥` `NEW`
1. [周杰伦温州抢票](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%B8%A9%E5%B7%9E%E6%8A%A2%E7%A5%A8%23) `311.3K 🔥` `NEW`
1. [陈伟霆看到孩子走不动路](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E7%9C%8B%E5%88%B0%E5%AD%A9%E5%AD%90%E8%B5%B0%E4%B8%8D%E5%8A%A8%E8%B7%AF%23) `309.1K 🔥` `NEW`
1. [华为乾崑智驾ADS5将于23日发布](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BEADS5%E5%B0%86%E4%BA%8E23%E6%97%A5%E5%8F%91%E5%B8%83%23) `307.0K 🔥` `NEW`
1. [大牛股一字跌停](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%89%9B%E8%82%A1%E4%B8%80%E5%AD%97%E8%B7%8C%E5%81%9C%23) `306.3K 🔥` `NEW`
1. [杨博文晕船吐了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E6%99%95%E8%88%B9%E5%90%90%E4%BA%86%23) `300.2K 🔥` `NEW`
1. [女子产后回应怀孕容貌巨变](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E5%9B%9E%E5%BA%94%E6%80%80%E5%AD%95%E5%AE%B9%E8%B2%8C%E5%B7%A8%E5%8F%98%23) `287.6K 🔥` `NEW`
1. [今晚见证大众时刻](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%99%9A%E8%A7%81%E8%AF%81%E5%A4%A7%E4%BC%97%E6%97%B6%E5%88%BB%23) `261.0K 🔥` `NEW`
1. [伊朗最高领袖发表最新声明 (Iran’s Supreme Leader Issues Latest Statement)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%8F%91%E8%A1%A8%E6%9C%80%E6%96%B0%E5%A3%B0%E6%98%8E%23) `223.5K 🔥` `NEW`
1. [山姆乌冬面现蛆虫涉事门店赔偿千元](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%B9%8C%E5%86%AC%E9%9D%A2%E7%8E%B0%E8%9B%86%E8%99%AB%E6%B6%89%E4%BA%8B%E9%97%A8%E5%BA%97%E8%B5%94%E5%81%BF%E5%8D%83%E5%85%83%23) `207.4K 🔥` `NEW`
1. [郝蕾曾称AI会替代90%的演员](https://s.weibo.com/weibo?q=%23%E9%83%9D%E8%95%BE%E6%9B%BE%E7%A7%B0AI%E4%BC%9A%E6%9B%BF%E4%BB%A390%25%E7%9A%84%E6%BC%94%E5%91%98%23) `200.4K 🔥` `NEW`
1. [王橹杰湿发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%B9%BF%E5%8F%91%23) `198.0K 🔥` `NEW`
1. [余承东回应华为手机不涨价](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA%E4%B8%8D%E6%B6%A8%E4%BB%B7%23) `196.6K 🔥` `NEW`
1. [母亲灌奶掌掴婴儿已被采取强制措施](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%81%8C%E5%A5%B6%E6%8E%8C%E6%8E%B4%E5%A9%B4%E5%84%BF%E5%B7%B2%E8%A2%AB%E9%87%87%E5%8F%96%E5%BC%BA%E5%88%B6%E6%8E%AA%E6%96%BD%23) `195.5K 🔥` `NEW`
1. [小S说有可能会退居幕后](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E8%AF%B4%E6%9C%89%E5%8F%AF%E8%83%BD%E4%BC%9A%E9%80%80%E5%B1%85%E5%B9%95%E5%90%8E%23) `185.3K 🔥` `NEW`
1. [挪用1700万打赏女孩父亲已基本破产 (The father of a girl who misappropriated 17 million in rewards is basically bankrupt)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E5%AD%A9%E7%88%B6%E4%BA%B2%E5%B7%B2%E5%9F%BA%E6%9C%AC%E7%A0%B4%E4%BA%A7%23) `1.6M 🔥`
1. [森马可真有一套 (Semir really has a way)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E9%A9%AC%E5%8F%AF%E7%9C%9F%E6%9C%89%E4%B8%80%E5%A5%97%23) `587.2K 🔥`
1. [日本女主播遇7.7级地震一秒变脸 (Japanese female anchor's face changed in one second when she was hit by a 7.7-magnitude earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%B8%BB%E6%92%AD%E9%81%877.7%E7%BA%A7%E5%9C%B0%E9%9C%87%E4%B8%80%E7%A7%92%E5%8F%98%E8%84%B8%23) `430.3K 🔥`
1. [孙俪儿子画个妆直接能演甄嬛了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%84%BF%E5%AD%90%E7%94%BB%E4%B8%AA%E5%A6%86%E7%9B%B4%E6%8E%A5%E8%83%BD%E6%BC%94%E7%94%84%E5%AC%9B%E4%BA%86%23) `417.9K 🔥`
1. [路边停车欠费1.3万全额赔偿计息](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%BE%B9%E5%81%9C%E8%BD%A6%E6%AC%A0%E8%B4%B91.3%E4%B8%87%E5%85%A8%E9%A2%9D%E8%B5%94%E5%81%BF%E8%AE%A1%E6%81%AF%23) `415.3K 🔥`
1. [宋承炫宣布当爸](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%89%BF%E7%82%AB%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%23) `398.5K 🔥`
1. [杜若溪产后三个月暴减60斤 (Du Ruoxi lost 60 pounds three months after giving birth)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E8%8B%A5%E6%BA%AA%E4%BA%A7%E5%90%8E%E4%B8%89%E4%B8%AA%E6%9C%88%E6%9A%B4%E5%87%8F60%E6%96%A4%23) `315.5K 🔥`
1. [郑秀文好爱许志安](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E6%96%87%E5%A5%BD%E7%88%B1%E8%AE%B8%E5%BF%97%E5%AE%89%23) `313.1K 🔥`
1. [林高远从乒乓球网球到匹克球](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%AB%98%E8%BF%9C%E4%BB%8E%E4%B9%92%E4%B9%93%E7%90%83%E7%BD%91%E7%90%83%E5%88%B0%E5%8C%B9%E5%85%8B%E7%90%83%23) `261.3K 🔥`
1. [马嘉祺宋亚轩是没抢到最后一排吗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%98%AF%E6%B2%A1%E6%8A%A2%E5%88%B0%E6%9C%80%E5%90%8E%E4%B8%80%E6%8E%92%E5%90%97%23) `218.3K 🔥`
1. [工资高但是很孤独的工作](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E9%AB%98%E4%BD%86%E6%98%AF%E5%BE%88%E5%AD%A4%E7%8B%AC%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `632.4K 🔥` `-28%`
1. [新疆的作息时间太适合年轻人了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E7%9A%84%E4%BD%9C%E6%81%AF%E6%97%B6%E9%97%B4%E5%A4%AA%E9%80%82%E5%90%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BA%86%23) `590.0K 🔥` `-31%`
1. [张翰就医后前往移民局 (Zhang Han went to the Immigration Bureau after seeking medical treatment)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%B0%E5%B0%B1%E5%8C%BB%E5%90%8E%E5%89%8D%E5%BE%80%E7%A7%BB%E6%B0%91%E5%B1%80%23) `389.6K 🔥` `-21%`
1. [超级地震或致日本国家崩塌 (Super earthquake may cause Japan to collapse)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%88%96%E8%87%B4%E6%97%A5%E6%9C%AC%E5%9B%BD%E5%AE%B6%E5%B4%A9%E5%A1%8C%23) `354.3K 🔥` `-62%`
1. [窈窈有期 硬刚爱奇艺](https://s.weibo.com/weibo?q=%23%E7%AA%88%E7%AA%88%E6%9C%89%E6%9C%9F%20%E7%A1%AC%E5%88%9A%E7%88%B1%E5%A5%87%E8%89%BA%23) `349.7K 🔥` `-29%`
1. [余承东回应Pura90橘子海配色](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94Pura90%E6%A9%98%E5%AD%90%E6%B5%B7%E9%85%8D%E8%89%B2%23) `342.5K 🔥` `-31%`
1. [爱奇艺CEO龚宇发声](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BACEO%E9%BE%9A%E5%AE%87%E5%8F%91%E5%A3%B0%23) `316.8K 🔥` `-37%`
1. [森林狼19分逆转掘金](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BC19%E5%88%86%E9%80%86%E8%BD%AC%E6%8E%98%E9%87%91%23) `308.5K 🔥` `-38%`
1. [何润东 直男写文下手没轻没重 (Peter Ho, a straight man, is not careful when writing articles.)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E7%9B%B4%E7%94%B7%E5%86%99%E6%96%87%E4%B8%8B%E6%89%8B%E6%B2%A1%E8%BD%BB%E6%B2%A1%E9%87%8D%23) `287.3K 🔥` `-35%`
1. [邱淑贞母女和工藤静香母女同框](https://s.weibo.com/weibo?q=%23%E9%82%B1%E6%B7%91%E8%B4%9E%E6%AF%8D%E5%A5%B3%E5%92%8C%E5%B7%A5%E8%97%A4%E9%9D%99%E9%A6%99%E6%AF%8D%E5%A5%B3%E5%90%8C%E6%A1%86%23) `263.2K 🔥` `-22%`
1. [张凌赫登上法国第一大报纸](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BB%E4%B8%8A%E6%B3%95%E5%9B%BD%E7%AC%AC%E4%B8%80%E5%A4%A7%E6%8A%A5%E7%BA%B8%23) `260.9K 🔥` `-47%`
1. [鱼第一次享受到了人工服务](https://s.weibo.com/weibo?q=%23%E9%B1%BC%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%BA%AB%E5%8F%97%E5%88%B0%E4%BA%86%E4%BA%BA%E5%B7%A5%E6%9C%8D%E5%8A%A1%23) `174.3K 🔥` `-69%`
1. [李羲承 珀莱雅](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%20%E7%8F%80%E8%8E%B1%E9%9B%85%23) `162.6K 🔥` `-63%`

Updated at 2026-04-21 17:02:06

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
