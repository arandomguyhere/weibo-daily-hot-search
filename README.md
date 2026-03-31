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

1. [未发现鞠婧祎涉税问题 (No tax-related issues with Ju Jingyi were found)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%B6%89%E7%A8%8E%E9%97%AE%E9%A2%98%23) `8.9M 🔥` `NEW`
1. [上海交大引争议宣传片演员发声](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E5%BC%95%E4%BA%89%E8%AE%AE%E5%AE%A3%E4%BC%A0%E7%89%87%E6%BC%94%E5%91%98%E5%8F%91%E5%A3%B0%23) `376.7K 🔥` `NEW`
1. [何凯文英一87分](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%87%AF%E6%96%87%E8%8B%B1%E4%B8%8087%E5%88%86%23) `297.8K 🔥` `NEW`
1. [陈飞宇为了看罗云熙倒着走红毯](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E4%B8%BA%E4%BA%86%E7%9C%8B%E7%BD%97%E4%BA%91%E7%86%99%E5%80%92%E7%9D%80%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `266.8K 🔥` `NEW`
1. [曝雷军押注的中年人泡泡玛特将上市](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9B%B7%E5%86%9B%E6%8A%BC%E6%B3%A8%E7%9A%84%E4%B8%AD%E5%B9%B4%E4%BA%BA%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B0%86%E4%B8%8A%E5%B8%82%23) `266.2K 🔥` `NEW`
1. [向佐终于像个人了](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E7%BB%88%E4%BA%8E%E5%83%8F%E4%B8%AA%E4%BA%BA%E4%BA%86%23) `265.1K 🔥` `NEW`
1. [陈飞宇 陈凯歌基因显化中](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%99%88%E5%87%AF%E6%AD%8C%E5%9F%BA%E5%9B%A0%E6%98%BE%E5%8C%96%E4%B8%AD%23) `263.6K 🔥` `NEW`
1. [时代少年团 录播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%BD%95%E6%92%AD%23) `263.0K 🔥` `NEW`
1. [杨紫也被女装背刺了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B9%9F%E8%A2%AB%E5%A5%B3%E8%A3%85%E8%83%8C%E5%88%BA%E4%BA%86%23) `262.2K 🔥` `NEW`
1. [婚生女按遗嘱继承财产遭私生子起诉](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%94%9F%E5%A5%B3%E6%8C%89%E9%81%97%E5%98%B1%E7%BB%A7%E6%89%BF%E8%B4%A2%E4%BA%A7%E9%81%AD%E7%A7%81%E7%94%9F%E5%AD%90%E8%B5%B7%E8%AF%89%23) `261.3K 🔥` `NEW`
1. [地铁吐血女孩银行账户已解封 (The bank account of the girl who vomited blood on the subway has been unblocked)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E9%93%B6%E8%A1%8C%E8%B4%A6%E6%88%B7%E5%B7%B2%E8%A7%A3%E5%B0%81%23) `260.8K 🔥` `NEW`
1. [俄方拒绝给日本供油](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8B%92%E7%BB%9D%E7%BB%99%E6%97%A5%E6%9C%AC%E4%BE%9B%E6%B2%B9%23) `260.3K 🔥` `NEW`
1. [舒淇合影时突然让C位](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E5%90%88%E5%BD%B1%E6%97%B6%E7%AA%81%E7%84%B6%E8%AE%A9C%E4%BD%8D%23) `257.6K 🔥` `NEW`
1. [唐艺昕人气](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%BA%E6%B0%94%23) `256.1K 🔥` `NEW`
1. [炎症变成癌症要多久](https://s.weibo.com/weibo?q=%23%E7%82%8E%E7%97%87%E5%8F%98%E6%88%90%E7%99%8C%E7%97%87%E8%A6%81%E5%A4%9A%E4%B9%85%23) `243.3K 🔥` `NEW`
1. [网红小徐自曝财产](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%BE%90%E8%87%AA%E6%9B%9D%E8%B4%A2%E4%BA%A7%23) `239.1K 🔥` `NEW`
1. [郑丽文访陆遭台陆委会恫吓](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%AE%BF%E9%99%86%E9%81%AD%E5%8F%B0%E9%99%86%E5%A7%94%E4%BC%9A%E6%81%AB%E5%90%93%23) `195.4K 🔥` `NEW`
1. [收手吧阿瑟](https://s.weibo.com/weibo?q=%23%E6%94%B6%E6%89%8B%E5%90%A7%E9%98%BF%E7%91%9F%23) `180.3K 🔥` `NEW`
1. [王楚钦澳门世界杯状态](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%BE%B3%E9%97%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E7%8A%B6%E6%80%81%23) `172.7K 🔥` `NEW`
1. [53岁女子去世600万遗产无人继承](https://s.weibo.com/weibo?q=%2353%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96600%E4%B8%87%E9%81%97%E4%BA%A7%E6%97%A0%E4%BA%BA%E7%BB%A7%E6%89%BF%23) `162.9K 🔥` `NEW`
1. [独身女子去世留下600万法院宣判 (Single woman dies and leaves 6 million, court announces verdict)](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E8%BA%AB%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B600%E4%B8%87%E6%B3%95%E9%99%A2%E5%AE%A3%E5%88%A4%23) `162.9K 🔥` `NEW`
1. [黄金再大涨原因](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%86%8D%E5%A4%A7%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `95.4K 🔥` `NEW`
1. [单依纯是纯妹妹演唱会总监制](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%98%AF%E7%BA%AF%E5%A6%B9%E5%A6%B9%E6%BC%94%E5%94%B1%E4%BC%9A%E6%80%BB%E7%9B%91%E5%88%B6%23) `95.2K 🔥` `NEW`
1. [日本泰国网友因便利店买泡面吵架](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B3%B0%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%9B%A0%E4%BE%BF%E5%88%A9%E5%BA%97%E4%B9%B0%E6%B3%A1%E9%9D%A2%E5%90%B5%E6%9E%B6%23) `94.9K 🔥` `NEW`
1. [瑞幸 紫椰子 (Luckin Purple Coconut)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E7%B4%AB%E6%A4%B0%E5%AD%90%23) `1.8M 🔥` `+61%`
1. [4月一批新规将施行 (A batch of new regulations will be implemented in April)](https://s.weibo.com/weibo?q=%234%E6%9C%88%E4%B8%80%E6%89%B9%E6%96%B0%E8%A7%84%E5%B0%86%E6%96%BD%E8%A1%8C%23) `1.4M 🔥` `+132%`
1. [ID.ERA 9X 32.98万元起售 (ID.ERA 9X starts at 329,800 yuan)](https://s.weibo.com/weibo?q=%23ID.ERA%209X%2032.98%E4%B8%87%E5%85%83%E8%B5%B7%E5%94%AE%23) `288.2K 🔥` `+37%`
1. [李荣浩 不是嫂子是歌手杨丞琳](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E4%B8%8D%E6%98%AF%E5%AB%82%E5%AD%90%E6%98%AF%E6%AD%8C%E6%89%8B%E6%9D%A8%E4%B8%9E%E7%90%B3%23) `265.6K 🔥` `+59%`
1. [孙颖莎瘦了不止一点点](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%98%A6%E4%BA%86%E4%B8%8D%E6%AD%A2%E4%B8%80%E7%82%B9%E7%82%B9%23) `264.4K 🔥` `+33%`
1. [鞠婧祎工作室声明 (Ju Jingyi Studio Statement)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `259.6K 🔥` `+59%`
1. [市委书记以球员身份参加县超](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E4%BB%A5%E7%90%83%E5%91%98%E8%BA%AB%E4%BB%BD%E5%8F%82%E5%8A%A0%E5%8E%BF%E8%B6%85%23) `259.1K 🔥` `+131%`
1. [丝芭 我司并非举报主体](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%20%E6%88%91%E5%8F%B8%E5%B9%B6%E9%9D%9E%E4%B8%BE%E6%8A%A5%E4%B8%BB%E4%BD%93%23) `201.4K 🔥` `+75%`
1. [黄油年糕被改名为韩国年糕 (Butter rice cake was renamed Korean rice cake)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B2%B9%E5%B9%B4%E7%B3%95%E8%A2%AB%E6%94%B9%E5%90%8D%E4%B8%BA%E9%9F%A9%E5%9B%BD%E5%B9%B4%E7%B3%95%23) `197.8K 🔥` `+23%`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `165.1K 🔥` `+51%`
1. [张一山真的翻拍重案六组](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E7%9C%9F%E7%9A%84%E7%BF%BB%E6%8B%8D%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%23) `160.9K 🔥` `+44%`
1. [宋雨琦 跑男 (Song Yuqi Running Man)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `392.8K 🔥`
1. [张雪 (Zhang Xue)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `268.6K 🔥`
1. [原来香蕉有辐射 (It turns out that bananas contain radiation)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A6%99%E8%95%89%E6%9C%89%E8%BE%90%E5%B0%84%23) `266.3K 🔥`
1. [跳楼机数月吸金4000万原唱收入为0](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%A5%BC%E6%9C%BA%E6%95%B0%E6%9C%88%E5%90%B8%E9%87%914000%E4%B8%87%E5%8E%9F%E5%94%B1%E6%94%B6%E5%85%A5%E4%B8%BA0%23) `258.3K 🔥`
1. [妻子5次试管成功同年丈夫与情人生子](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%905%E6%AC%A1%E8%AF%95%E7%AE%A1%E6%88%90%E5%8A%9F%E5%90%8C%E5%B9%B4%E4%B8%88%E5%A4%AB%E4%B8%8E%E6%83%85%E4%BA%BA%E7%94%9F%E5%AD%90%23) `258.0K 🔥`
1. [怪不得公司一边招人一边裁员](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%85%AC%E5%8F%B8%E4%B8%80%E8%BE%B9%E6%8B%9B%E4%BA%BA%E4%B8%80%E8%BE%B9%E8%A3%81%E5%91%98%23) `240.6K 🔥`
1. [严浩翔考核试卷](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%80%83%E6%A0%B8%E8%AF%95%E5%8D%B7%23) `163.0K 🔥`
1. [4月锦鲤附体的星座](https://s.weibo.com/weibo?q=%234%E6%9C%88%E9%94%A6%E9%B2%A4%E9%99%84%E4%BD%93%E7%9A%84%E6%98%9F%E5%BA%A7%23) `98.8K 🔥`
1. [王者荣耀返场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%BF%94%E5%9C%BA%23) `262.4K 🔥` `-49%`
1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `195.3K 🔥` `-43%`
1. [徐梦洁人气](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E4%BA%BA%E6%B0%94%23) `162.8K 🔥` `-35%`
1. [乘风2026排名](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E6%8E%92%E5%90%8D%23) `97.2K 🔥` `-64%`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `97.0K 🔥` `-40%`
1. [曾沛慈人气第一 (Zeng Peici is the most popular)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%BA%BA%E6%B0%94%E7%AC%AC%E4%B8%80%23) `95.1K 🔥` `-44%`
1. [陈妍希跟腱断裂 (Michelle Chen's Achilles tendon rupture)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%B7%9F%E8%85%B1%E6%96%AD%E8%A3%82%23) `93.7K 🔥` `-37%`
1. [国足负于10人喀麦隆](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%B4%9F%E4%BA%8E10%E4%BA%BA%E5%96%80%E9%BA%A6%E9%9A%86%23) `89.5K 🔥` `-88%`

Updated at 2026-03-31 20:36:58

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
