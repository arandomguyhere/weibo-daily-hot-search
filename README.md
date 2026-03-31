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

1. [宋雨琦 跑男 (Song Yuqi Running Man)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `426.3K 🔥` `NEW`
1. [科学减重让脂肪肝可逆转](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E5%87%8F%E9%87%8D%E8%AE%A9%E8%84%82%E8%82%AA%E8%82%9D%E5%8F%AF%E9%80%86%E8%BD%AC%23) `403.0K 🔥` `NEW`
1. [妻子5次试管成功同年丈夫与情人生子](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%905%E6%AC%A1%E8%AF%95%E7%AE%A1%E6%88%90%E5%8A%9F%E5%90%8C%E5%B9%B4%E4%B8%88%E5%A4%AB%E4%B8%8E%E6%83%85%E4%BA%BA%E7%94%9F%E5%AD%90%23) `259.8K 🔥` `NEW`
1. [孙颖莎瘦了不止一点点](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%98%A6%E4%BA%86%E4%B8%8D%E6%AD%A2%E4%B8%80%E7%82%B9%E7%82%B9%23) `199.0K 🔥` `NEW`
1. [春天的第一箱油是一汽大众给的](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%A4%A9%E7%9A%84%E7%AC%AC%E4%B8%80%E7%AE%B1%E6%B2%B9%E6%98%AF%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%97%E7%BB%99%E7%9A%84%23) `169.8K 🔥` `NEW`
1. [男子潜伏小区专盯门口藏钥匙](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%BD%9C%E4%BC%8F%E5%B0%8F%E5%8C%BA%E4%B8%93%E7%9B%AF%E9%97%A8%E5%8F%A3%E8%97%8F%E9%92%A5%E5%8C%99%23) `167.8K 🔥` `NEW`
1. [美国一颗星链卫星失联](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E9%A2%97%E6%98%9F%E9%93%BE%E5%8D%AB%E6%98%9F%E5%A4%B1%E8%81%94%23) `165.3K 🔥` `NEW`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `161.7K 🔥` `NEW`
1. [丝芭 我司并非举报主体](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%20%E6%88%91%E5%8F%B8%E5%B9%B6%E9%9D%9E%E4%B8%BE%E6%8A%A5%E4%B8%BB%E4%BD%93%23) `114.8K 🔥` `NEW`
1. [伊朗发动第88波打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E7%AC%AC88%E6%B3%A2%E6%89%93%E5%87%BB%23) `113.0K 🔥` `NEW`
1. [愚人节改名 (April Fool's Day name change)](https://s.weibo.com/weibo?q=%23%E6%84%9A%E4%BA%BA%E8%8A%82%E6%94%B9%E5%90%8D%23) `112.8K 🔥` `NEW`
1. [市委书记以球员身份参加县超](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E4%BB%A5%E7%90%83%E5%91%98%E8%BA%AB%E4%BB%BD%E5%8F%82%E5%8A%A0%E5%8E%BF%E8%B6%85%23) `112.3K 🔥` `NEW`
1. [张一山真的翻拍重案六组](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E7%9C%9F%E7%9A%84%E7%BF%BB%E6%8B%8D%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%23) `111.6K 🔥` `NEW`
1. [4月锦鲤附体的星座](https://s.weibo.com/weibo?q=%234%E6%9C%88%E9%94%A6%E9%B2%A4%E9%99%84%E4%BD%93%E7%9A%84%E6%98%9F%E5%BA%A7%23) `110.9K 🔥` `NEW`
1. [东鹏饮料赞助张雪机车费用涉商业机密](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%B9%8F%E9%A5%AE%E6%96%99%E8%B5%9E%E5%8A%A9%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%B4%B9%E7%94%A8%E6%B6%89%E5%95%86%E4%B8%9A%E6%9C%BA%E5%AF%86%23) `108.7K 🔥` `NEW`
1. [打开微博被谢霆锋行程吓晕](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%BC%80%E5%BE%AE%E5%8D%9A%E8%A2%AB%E8%B0%A2%E9%9C%86%E9%94%8B%E8%A1%8C%E7%A8%8B%E5%90%93%E6%99%95%23) `107.3K 🔥` `NEW`
1. [00后女孩英国留学回来当职业扫墓人](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%A5%B3%E5%AD%A9%E8%8B%B1%E5%9B%BD%E7%95%99%E5%AD%A6%E5%9B%9E%E6%9D%A5%E5%BD%93%E8%81%8C%E4%B8%9A%E6%89%AB%E5%A2%93%E4%BA%BA%23) `106.4K 🔥` `NEW`
1. [邓凯Prada活动](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AFPrada%E6%B4%BB%E5%8A%A8%23) `101.5K 🔥` `NEW`
1. [父亲称救在柬被困女儿已付两次赎金](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%A7%B0%E6%95%91%E5%9C%A8%E6%9F%AC%E8%A2%AB%E5%9B%B0%E5%A5%B3%E5%84%BF%E5%B7%B2%E4%BB%98%E4%B8%A4%E6%AC%A1%E8%B5%8E%E9%87%91%23) `100.4K 🔥` `NEW`
1. [146斤男子2年暴增至523斤](https://s.weibo.com/weibo?q=%23146%E6%96%A4%E7%94%B7%E5%AD%902%E5%B9%B4%E6%9A%B4%E5%A2%9E%E8%87%B3523%E6%96%A4%23) `100.4K 🔥` `NEW`
1. [物理学无法解释的一个现象 (A phenomenon that physics cannot explain)](https://s.weibo.com/weibo?q=%23%E7%89%A9%E7%90%86%E5%AD%A6%E6%97%A0%E6%B3%95%E8%A7%A3%E9%87%8A%E7%9A%84%E4%B8%80%E4%B8%AA%E7%8E%B0%E8%B1%A1%23) `99.6K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `95.5K 🔥` `NEW`
1. [国足负于10人喀麦隆](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%B4%9F%E4%BA%8E10%E4%BA%BA%E5%96%80%E9%BA%A6%E9%9A%86%23) `770.3K 🔥` `+216%`
1. [王者荣耀返场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%BF%94%E5%9C%BA%23) `511.0K 🔥` `+142%`
1. [文旅局回应宠物友好酒店推荐吃狗肉](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%94%E5%AE%A0%E7%89%A9%E5%8F%8B%E5%A5%BD%E9%85%92%E5%BA%97%E6%8E%A8%E8%8D%90%E5%90%83%E7%8B%97%E8%82%89%23) `463.1K 🔥` `+280%`
1. [原来香蕉有辐射](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A6%99%E8%95%89%E6%9C%89%E8%BE%90%E5%B0%84%23) `262.5K 🔥` `+28%`
1. [跳楼机数月吸金4000万原唱收入为0](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%A5%BC%E6%9C%BA%E6%95%B0%E6%9C%88%E5%90%B8%E9%87%914000%E4%B8%87%E5%8E%9F%E5%94%B1%E6%94%B6%E5%85%A5%E4%B8%BA0%23) `256.0K 🔥` `+130%`
1. [徐梦洁人气](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E4%BA%BA%E6%B0%94%23) `251.5K 🔥` `+47%`
1. [李荣浩 不是嫂子是歌手杨丞琳](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E4%B8%8D%E6%98%AF%E5%AB%82%E5%AD%90%E6%98%AF%E6%AD%8C%E6%89%8B%E6%9D%A8%E4%B8%9E%E7%90%B3%23) `167.0K 🔥` `+38%`
1. [鞠婧祎工作室声明 (Ju Jingyi Studio Statement)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `163.1K 🔥` `+37%`
1. [黄油年糕被改名为韩国年糕 (Butter rice cake was renamed Korean rice cake)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B2%B9%E5%B9%B4%E7%B3%95%E8%A2%AB%E6%94%B9%E5%90%8D%E4%B8%BA%E9%9F%A9%E5%9B%BD%E5%B9%B4%E7%B3%95%23) `161.4K 🔥` `+36%`
1. [鞠婧祎工作室改名字了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%94%B9%E5%90%8D%E5%AD%97%E4%BA%86%23) `156.7K 🔥` `+35%`
1. [陈妍希跟腱断裂 (Michelle Chen's Achilles tendon rupture)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%B7%9F%E8%85%B1%E6%96%AD%E8%A3%82%23) `148.6K 🔥` `+27%`
1. [瑞幸 紫椰子 (Luckin Purple Coconut)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E7%B4%AB%E6%A4%B0%E5%AD%90%23) `1.1M 🔥`
1. [4月一批新规将施行 (A batch of new regulations will be implemented in April)](https://s.weibo.com/weibo?q=%234%E6%9C%88%E4%B8%80%E6%89%B9%E6%96%B0%E8%A7%84%E5%B0%86%E6%96%BD%E8%A1%8C%23) `623.2K 🔥`
1. [张雪 (Zhang Xue)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `268.1K 🔥`
1. [怪不得公司一边招人一边裁员](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%85%AC%E5%8F%B8%E4%B8%80%E8%BE%B9%E6%8B%9B%E4%BA%BA%E4%B8%80%E8%BE%B9%E8%A3%81%E5%91%98%23) `205.0K 🔥`
1. [严浩翔考核试卷](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%80%83%E6%A0%B8%E8%AF%95%E5%8D%B7%23) `204.8K 🔥`
1. [曾沛慈人气第一](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%BA%BA%E6%B0%94%E7%AC%AC%E4%B8%80%23) `170.7K 🔥`
1. [鞠婧祎说好看吗](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%AF%B4%E5%A5%BD%E7%9C%8B%E5%90%97%23) `109.9K 🔥`
1. [逐玉造型指导回应张凌赫造型争议](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%80%A0%E5%9E%8B%E6%8C%87%E5%AF%BC%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%A0%E5%9E%8B%E4%BA%89%E8%AE%AE%23) `108.1K 🔥`
1. [朱莉眼睛怎么了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%8E%89%E7%9C%BC%E7%9D%9B%E6%80%8E%E4%B9%88%E4%BA%86%23) `105.6K 🔥`
1. [男子逛妈祖庙偷走妈祖9190元金耳环 (Man visits Mazu temple and steals Mazu gold earrings worth NT$9,190)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%80%9B%E5%A6%88%E7%A5%96%E5%BA%99%E5%81%B7%E8%B5%B0%E5%A6%88%E7%A5%969190%E5%85%83%E9%87%91%E8%80%B3%E7%8E%AF%23) `104.9K 🔥`
1. [乘风2026助力团王俊凯](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%8A%A9%E5%8A%9B%E5%9B%A2%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `99.9K 🔥`
1. [金价还会涨多高](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%98%E4%BC%9A%E6%B6%A8%E5%A4%9A%E9%AB%98%23) `93.1K 🔥`
1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `340.1K 🔥` `-32%`
1. [乘风2026排名](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E6%8E%92%E5%90%8D%23) `267.7K 🔥` `-66%`
1. [麻辣烫里最夯的是啥菜 (What is the most popular dish in Malatang?)](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%87%8C%E6%9C%80%E5%A4%AF%E7%9A%84%E6%98%AF%E5%95%A5%E8%8F%9C%23) `171.9K 🔥` `-27%`
1. [米饭拌白糖](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E9%A5%AD%E6%8B%8C%E7%99%BD%E7%B3%96%23) `115.6K 🔥` `-29%`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `109.4K 🔥` `-41%`
1. [李健硬要给许飞版权费 (Li Jian insists on paying royalties to Xu Fei)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E7%A1%AC%E8%A6%81%E7%BB%99%E8%AE%B8%E9%A3%9E%E7%89%88%E6%9D%83%E8%B4%B9%23) `105.8K 🔥` `-54%`

Updated at 2026-03-31 19:33:12

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
