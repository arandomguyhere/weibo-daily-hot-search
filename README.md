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

1. [十五五规划背后的90后力量 (The post-90s generation behind the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E8%83%8C%E5%90%8E%E7%9A%8490%E5%90%8E%E5%8A%9B%E9%87%8F%23) `872.6K 🔥` `NEW`
1. [TES 369](https://s.weibo.com/weibo?q=%23TES%20369%23) `350.1K 🔥` `NEW`
1. [一条plog告别三月](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%A1plog%E5%91%8A%E5%88%AB%E4%B8%89%E6%9C%88%23) `322.1K 🔥` `NEW`
1. [DYG战胜TTG](https://s.weibo.com/weibo?q=%23DYG%E6%88%98%E8%83%9CTTG%23) `260.8K 🔥` `NEW`
1. [香港开往上海高铁车厢出现大量蚊虫](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%BC%80%E5%BE%80%E4%B8%8A%E6%B5%B7%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%87%BA%E7%8E%B0%E5%A4%A7%E9%87%8F%E8%9A%8A%E8%99%AB%23) `235.4K 🔥` `NEW`
1. [中巴提出五点倡议](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B7%B4%E6%8F%90%E5%87%BA%E4%BA%94%E7%82%B9%E5%80%A1%E8%AE%AE%23) `226.7K 🔥` `NEW`
1. [鞠婧祎 此身分明了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E6%AD%A4%E8%BA%AB%E5%88%86%E6%98%8E%E4%BA%86%23) `223.8K 🔥` `NEW`
1. [这车是真虎](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%BD%A6%E6%98%AF%E7%9C%9F%E8%99%8E%23) `218.2K 🔥` `NEW`
1. [孙艺珍庆祝与玄彬结婚四周年](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E7%8F%8D%E5%BA%86%E7%A5%9D%E4%B8%8E%E7%8E%84%E5%BD%AC%E7%BB%93%E5%A9%9A%E5%9B%9B%E5%91%A8%E5%B9%B4%23) `215.3K 🔥` `NEW`
1. [孟晚舟华为年报致辞谈战略聚焦](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E6%99%9A%E8%88%9F%E5%8D%8E%E4%B8%BA%E5%B9%B4%E6%8A%A5%E8%87%B4%E8%BE%9E%E8%B0%88%E6%88%98%E7%95%A5%E8%81%9A%E7%84%A6%23) `213.9K 🔥` `NEW`
1. [TTG对战DYG (TTG vs. DYG)](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98DYG%23) `207.6K 🔥` `NEW`
1. [女子回应获3亿遗产引丈夫子女不满](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%8E%B73%E4%BA%BF%E9%81%97%E4%BA%A7%E5%BC%95%E4%B8%88%E5%A4%AB%E5%AD%90%E5%A5%B3%E4%B8%8D%E6%BB%A1%23) `167.7K 🔥` `NEW`
1. [等电梯时这个习惯可能会要命](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%94%B5%E6%A2%AF%E6%97%B6%E8%BF%99%E4%B8%AA%E4%B9%A0%E6%83%AF%E5%8F%AF%E8%83%BD%E4%BC%9A%E8%A6%81%E5%91%BD%23) `155.6K 🔥` `NEW`
1. [运动员退役后从146斤暴涨至523斤](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%91%98%E9%80%80%E5%BD%B9%E5%90%8E%E4%BB%8E146%E6%96%A4%E6%9A%B4%E6%B6%A8%E8%87%B3523%E6%96%A4%23) `137.4K 🔥` `NEW`
1. [金钟仁程潇坐一起](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E4%BB%81%E7%A8%8B%E6%BD%87%E5%9D%90%E4%B8%80%E8%B5%B7%23) `136.0K 🔥` `NEW`
1. [乘风2026初舞台TOP1](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%88%9D%E8%88%9E%E5%8F%B0TOP1%23) `130.9K 🔥` `NEW`
1. [初中毕业的张雪凭什么造出顶级发动机](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E6%AF%95%E4%B8%9A%E7%9A%84%E5%BC%A0%E9%9B%AA%E5%87%AD%E4%BB%80%E4%B9%88%E9%80%A0%E5%87%BA%E9%A1%B6%E7%BA%A7%E5%8F%91%E5%8A%A8%E6%9C%BA%23) `122.1K 🔥` `NEW`
1. [孙俪拍戏前找了心理医生](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%8B%8D%E6%88%8F%E5%89%8D%E6%89%BE%E4%BA%86%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%23) `121.5K 🔥` `NEW`
1. [月鳞绮纪预约量破300万](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E9%A2%84%E7%BA%A6%E9%87%8F%E7%A0%B4300%E4%B8%87%23) `120.5K 🔥` `NEW`
1. [上海交大校庆宣传片引争议](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E6%A0%A1%E5%BA%86%E5%AE%A3%E4%BC%A0%E7%89%87%E5%BC%95%E4%BA%89%E8%AE%AE%23) `119.7K 🔥` `NEW`
1. [投资人眼里的张雪 (Zhang Xue in the eyes of investors)](https://s.weibo.com/weibo?q=%23%E6%8A%95%E8%B5%84%E4%BA%BA%E7%9C%BC%E9%87%8C%E7%9A%84%E5%BC%A0%E9%9B%AA%23) `111.2K 🔥` `NEW`
1. [伊武装部队总参谋长顾问遇害](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%AD%A6%E8%A3%85%E9%83%A8%E9%98%9F%E6%80%BB%E5%8F%82%E8%B0%8B%E9%95%BF%E9%A1%BE%E9%97%AE%E9%81%87%E5%AE%B3%23) `107.0K 🔥` `NEW`
1. [曝雷军押注的中年人泡泡玛特将上市](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9B%B7%E5%86%9B%E6%8A%BC%E6%B3%A8%E7%9A%84%E4%B8%AD%E5%B9%B4%E4%BA%BA%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B0%86%E4%B8%8A%E5%B8%82%23) `1.1M 🔥` `+305%`
1. [唐艺昕人气](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%BA%E6%B0%94%23) `486.9K 🔥` `+90%`
1. [俄方拒绝给日本供油](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8B%92%E7%BB%9D%E7%BB%99%E6%97%A5%E6%9C%AC%E4%BE%9B%E6%B2%B9%23) `330.0K 🔥` `+27%`
1. [53岁女子去世600万遗产无人继承](https://s.weibo.com/weibo?q=%2353%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96600%E4%B8%87%E9%81%97%E4%BA%A7%E6%97%A0%E4%BA%BA%E7%BB%A7%E6%89%BF%23) `220.9K 🔥` `+36%`
1. [日本泰国网友因便利店买泡面吵架](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B3%B0%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%9B%A0%E4%BE%BF%E5%88%A9%E5%BA%97%E4%B9%B0%E6%B3%A1%E9%9D%A2%E5%90%B5%E6%9E%B6%23) `122.3K 🔥` `+29%`
1. [大通全新星际L上市](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%80%9A%E5%85%A8%E6%96%B0%E6%98%9F%E9%99%85L%E4%B8%8A%E5%B8%82%23) `699.1K 🔥`
1. [网红小徐自曝财产](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%BE%90%E8%87%AA%E6%9B%9D%E8%B4%A2%E4%BA%A7%23) `222.9K 🔥`
1. [陈飞宇 陈凯歌基因显化中](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%99%88%E5%87%AF%E6%AD%8C%E5%9F%BA%E5%9B%A0%E6%98%BE%E5%8C%96%E4%B8%AD%23) `219.8K 🔥`
1. [杨紫也被女装背刺了 (Yang Zi was also stabbed in the back while dressed as a woman)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B9%9F%E8%A2%AB%E5%A5%B3%E8%A3%85%E8%83%8C%E5%88%BA%E4%BA%86%23) `217.3K 🔥`
1. [时代少年团 录播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%BD%95%E6%92%AD%23) `211.5K 🔥`
1. [妻子5次试管成功同年丈夫与情人生子](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%905%E6%AC%A1%E8%AF%95%E7%AE%A1%E6%88%90%E5%8A%9F%E5%90%8C%E5%B9%B4%E4%B8%88%E5%A4%AB%E4%B8%8E%E6%83%85%E4%BA%BA%E7%94%9F%E5%AD%90%23) `209.0K 🔥`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `153.5K 🔥`
1. [乘风2026排名](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E6%8E%92%E5%90%8D%23) `116.5K 🔥`
1. [未发现鞠婧祎涉税问题 (No tax-related issues with Ju Jingyi were found)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%B6%89%E7%A8%8E%E9%97%AE%E9%A2%98%23) `3.0M 🔥` `-66%`
1. [瑞幸 紫椰子 (Luckin Purple Coconut)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E7%B4%AB%E6%A4%B0%E5%AD%90%23) `280.3K 🔥` `-84%`
1. [何凯文英一87分](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%87%AF%E6%96%87%E8%8B%B1%E4%B8%8087%E5%88%86%23) `210.4K 🔥` `-29%`
1. [李荣浩 不是嫂子是歌手杨丞琳](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E4%B8%8D%E6%98%AF%E5%AB%82%E5%AD%90%E6%98%AF%E6%AD%8C%E6%89%8B%E6%9D%A8%E4%B8%9E%E7%90%B3%23) `206.7K 🔥` `-22%`
1. [舒淇合影时突然让C位](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E5%90%88%E5%BD%B1%E6%97%B6%E7%AA%81%E7%84%B6%E8%AE%A9C%E4%BD%8D%23) `198.0K 🔥` `-23%`
1. [张雪 (Zhang Xue)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `185.2K 🔥` `-31%`
1. [炎症变成癌症要多久](https://s.weibo.com/weibo?q=%23%E7%82%8E%E7%97%87%E5%8F%98%E6%88%90%E7%99%8C%E7%97%87%E8%A6%81%E5%A4%9A%E4%B9%85%23) `176.5K 🔥` `-27%`
1. [宋雨琦 跑男 (Song Yuqi Running Man)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `168.9K 🔥` `-57%`
1. [丝芭 我司并非举报主体](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%20%E6%88%91%E5%8F%B8%E5%B9%B6%E9%9D%9E%E4%B8%BE%E6%8A%A5%E4%B8%BB%E4%BD%93%23) `158.6K 🔥` `-21%`
1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `139.6K 🔥` `-29%`
1. [王者荣耀返场 (King of Glory returns)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%BF%94%E5%9C%BA%23) `133.3K 🔥` `-49%`
1. [向佐终于像个人了](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E7%BB%88%E4%BA%8E%E5%83%8F%E4%B8%AA%E4%BA%BA%E4%BA%86%23) `133.3K 🔥` `-50%`
1. [上海交大引争议宣传片演员发声](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E5%BC%95%E4%BA%89%E8%AE%AE%E5%AE%A3%E4%BC%A0%E7%89%87%E6%BC%94%E5%91%98%E5%8F%91%E5%A3%B0%23) `121.0K 🔥` `-68%`
1. [收手吧阿瑟](https://s.weibo.com/weibo?q=%23%E6%94%B6%E6%89%8B%E5%90%A7%E9%98%BF%E7%91%9F%23) `120.3K 🔥` `-33%`
1. [陈飞宇为了看罗云熙倒着走红毯](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E4%B8%BA%E4%BA%86%E7%9C%8B%E7%BD%97%E4%BA%91%E7%86%99%E5%80%92%E7%9D%80%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `108.7K 🔥` `-59%`
1. [严浩翔考核试卷](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%80%83%E6%A0%B8%E8%AF%95%E5%8D%B7%23) `108.4K 🔥` `-33%`
1. [婚生女按遗嘱继承财产遭私生子起诉](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%94%9F%E5%A5%B3%E6%8C%89%E9%81%97%E5%98%B1%E7%BB%A7%E6%89%BF%E8%B4%A2%E4%BA%A7%E9%81%AD%E7%A7%81%E7%94%9F%E5%AD%90%E8%B5%B7%E8%AF%89%23) `106.4K 🔥` `-59%`

Updated at 2026-03-31 22:13:00

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
