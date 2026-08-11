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

1. [北京暴雨 (Heavy rain in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `1.3M 🔥` `NEW`
1. [前男友杀害女医学生二审维持死刑](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%8C%BB%E5%AD%A6%E7%94%9F%E4%BA%8C%E5%AE%A1%E7%BB%B4%E6%8C%81%E6%AD%BB%E5%88%91%23) `324.6K 🔥` `NEW`
1. [东北龙餐馆 上海奥德赛](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E9%BE%99%E9%A4%90%E9%A6%86%20%E4%B8%8A%E6%B5%B7%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `317.4K 🔥` `NEW`
1. [谁能看出这是张凌赫](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%83%BD%E7%9C%8B%E5%87%BA%E8%BF%99%E6%98%AF%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `314.5K 🔥` `NEW`
1. [台风白海豚泼了多少雨](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%B3%BC%E4%BA%86%E5%A4%9A%E5%B0%91%E9%9B%A8%23) `311.6K 🔥` `NEW`
1. [孙千体脂率](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E4%BD%93%E8%84%82%E7%8E%87%23) `309.0K 🔥` `NEW`
1. [婴儿胎死宫内后医院40余次篡改病历](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%83%8E%E6%AD%BB%E5%AE%AB%E5%86%85%E5%90%8E%E5%8C%BB%E9%99%A240%E4%BD%99%E6%AC%A1%E7%AF%A1%E6%94%B9%E7%97%85%E5%8E%86%23) `308.5K 🔥` `NEW`
1. [PDD祝福巴旦木公主](https://s.weibo.com/weibo?q=%23PDD%E7%A5%9D%E7%A6%8F%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%23) `308.2K 🔥` `NEW`
1. [马斯克平均每天赚59亿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%B9%B3%E5%9D%87%E6%AF%8F%E5%A4%A9%E8%B5%9A59%E4%BA%BF%23) `303.1K 🔥` `NEW`
1. [白海豚撞上冷空气](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%92%9E%E4%B8%8A%E5%86%B7%E7%A9%BA%E6%B0%94%23) `299.6K 🔥` `NEW`
1. [狗头萝莉检测传染病四项 (Dog-headed lolita detects four infectious diseases)](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%A4%B4%E8%90%9D%E8%8E%89%E6%A3%80%E6%B5%8B%E4%BC%A0%E6%9F%93%E7%97%85%E5%9B%9B%E9%A1%B9%23) `297.9K 🔥` `NEW`
1. [台风白海豚停止编号](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%81%9C%E6%AD%A2%E7%BC%96%E5%8F%B7%23) `207.0K 🔥` `NEW`
1. [学习老辈子断亲态度](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E4%B9%A0%E8%80%81%E8%BE%88%E5%AD%90%E6%96%AD%E4%BA%B2%E6%80%81%E5%BA%A6%23) `190.3K 🔥` `NEW`
1. [AI给到夯的穿搭太抽象了](https://s.weibo.com/weibo?q=%23AI%E7%BB%99%E5%88%B0%E5%A4%AF%E7%9A%84%E7%A9%BF%E6%90%AD%E5%A4%AA%E6%8A%BD%E8%B1%A1%E4%BA%86%23) `187.3K 🔥` `NEW`
1. [如果我是王宝强谁是我的陈思诚](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E6%88%91%E6%98%AF%E7%8E%8B%E5%AE%9D%E5%BC%BA%E8%B0%81%E6%98%AF%E6%88%91%E7%9A%84%E9%99%88%E6%80%9D%E8%AF%9A%23) `187.2K 🔥` `NEW`
1. [宋亚轩的小拇指已经练成了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%9A%84%E5%B0%8F%E6%8B%87%E6%8C%87%E5%B7%B2%E7%BB%8F%E7%BB%83%E6%88%90%E4%BA%86%23) `173.7K 🔥` `NEW`
1. [TES全员入选周最佳](https://s.weibo.com/weibo?q=%23TES%E5%85%A8%E5%91%98%E5%85%A5%E9%80%89%E5%91%A8%E6%9C%80%E4%BD%B3%23) `165.9K 🔥` `NEW`
1. [俄少女逃出电诈园仍处严重应激状态](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%B0%91%E5%A5%B3%E9%80%83%E5%87%BA%E7%94%B5%E8%AF%88%E5%9B%AD%E4%BB%8D%E5%A4%84%E4%B8%A5%E9%87%8D%E5%BA%94%E6%BF%80%E7%8A%B6%E6%80%81%23) `165.7K 🔥` `NEW`
1. [哪吒159亿票房为何换不来全体起立 (Why can’t everyone stand up in exchange for Nezha’s 15.9 billion box office?)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92159%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%BA%E4%BD%95%E6%8D%A2%E4%B8%8D%E6%9D%A5%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `2.8M 🔥` `+89%`
1. [遇城市内涝这些事千万不能做](https://s.weibo.com/weibo?q=%23%E9%81%87%E5%9F%8E%E5%B8%82%E5%86%85%E6%B6%9D%E8%BF%99%E4%BA%9B%E4%BA%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%83%BD%E5%81%9A%23) `1.1M 🔥` `+22%`
1. [智界RX闪蝶蓝首曝 (Zhijie RX Morpho Blue first revealed)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CRX%E9%97%AA%E8%9D%B6%E8%93%9D%E9%A6%96%E6%9B%9D%23) `1.1M 🔥` `+29%`
1. [科目二挂了教练换的头像](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%9B%AE%E4%BA%8C%E6%8C%82%E4%BA%86%E6%95%99%E7%BB%83%E6%8D%A2%E7%9A%84%E5%A4%B4%E5%83%8F%23) `952.8K 🔥` `+310%`
1. [杨幂妈幂 (Yang Mi's mother)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%A6%88%E5%B9%82%23) `782.6K 🔥` `+290%`
1. [转账备注不求结婚分手索赔11万](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E8%B4%A6%E5%A4%87%E6%B3%A8%E4%B8%8D%E6%B1%82%E7%BB%93%E5%A9%9A%E5%88%86%E6%89%8B%E7%B4%A2%E8%B5%9411%E4%B8%87%23) `295.8K 🔥` `+49%`
1. [买车的欲望已经到了极致](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E7%9A%84%E6%AC%B2%E6%9C%9B%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E6%9E%81%E8%87%B4%23) `777.8K 🔥`
1. [俄女子称逃离缅甸电诈园游河到泰国 (Russian woman says she escaped from Myanmar and traveled to Thailand via e-mail scam)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%80%83%E7%A6%BB%E7%BC%85%E7%94%B8%E7%94%B5%E8%AF%88%E5%9B%AD%E6%B8%B8%E6%B2%B3%E5%88%B0%E6%B3%B0%E5%9B%BD%23) `315.8K 🔥`
1. [当老板意识到AI比人工贵](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%80%81%E6%9D%BF%E6%84%8F%E8%AF%86%E5%88%B0AI%E6%AF%94%E4%BA%BA%E5%B7%A5%E8%B4%B5%23) `313.3K 🔥`
1. [女子买西瓜切出膜状异物](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E8%A5%BF%E7%93%9C%E5%88%87%E5%87%BA%E8%86%9C%E7%8A%B6%E5%BC%82%E7%89%A9%23) `310.6K 🔥`
1. [猫耳声刻2026阵容](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E8%80%B3%E5%A3%B0%E5%88%BB2026%E9%98%B5%E5%AE%B9%23) `304.6K 🔥`
1. [7旬老人被女主播崩了3年](https://s.weibo.com/weibo?q=%237%E6%97%AC%E8%80%81%E4%BA%BA%E8%A2%AB%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B4%A9%E4%BA%863%E5%B9%B4%23) `284.6K 🔥`
1. [17年寻女终确认女儿2008年已溺亡](https://s.weibo.com/weibo?q=%2317%E5%B9%B4%E5%AF%BB%E5%A5%B3%E7%BB%88%E7%A1%AE%E8%AE%A4%E5%A5%B3%E5%84%BF2008%E5%B9%B4%E5%B7%B2%E6%BA%BA%E4%BA%A1%23) `252.2K 🔥`
1. [帕拉梅拉价格跌破百万](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%8B%89%E6%A2%85%E6%8B%89%E4%BB%B7%E6%A0%BC%E8%B7%8C%E7%A0%B4%E7%99%BE%E4%B8%87%23) `180.5K 🔥`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `166.0K 🔥`
1. [马斯克母子强推中国游 (Musk, mother and son strongly recommend travel to China)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%AF%8D%E5%AD%90%E5%BC%BA%E6%8E%A8%E4%B8%AD%E5%9B%BD%E6%B8%B8%23) `325.7K 🔥` `-64%`
1. [于东来自掏65亿建商场当包租公](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E8%87%AA%E6%8E%8F65%E4%BA%BF%E5%BB%BA%E5%95%86%E5%9C%BA%E5%BD%93%E5%8C%85%E7%A7%9F%E5%85%AC%23) `324.9K 🔥` `-41%`
1. [JDG官宣xiaofang加入](https://s.weibo.com/weibo?q=%23JDG%E5%AE%98%E5%AE%A3xiaofang%E5%8A%A0%E5%85%A5%23) `323.2K 🔥` `-40%`
1. [方文山发文回应出轨](https://s.weibo.com/weibo?q=%23%E6%96%B9%E6%96%87%E5%B1%B1%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E5%87%BA%E8%BD%A8%23) `322.2K 🔥` `-34%`
1. [巴旦木公主晒结婚证](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81%23) `321.7K 🔥` `-39%`
1. [建议大家装修不要太大众](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A3%85%E4%BF%AE%E4%B8%8D%E8%A6%81%E5%A4%AA%E5%A4%A7%E4%BC%97%23) `320.2K 🔥` `-63%`
1. [陈俊生150万年薪让罗子君买8万的鞋](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F150%E4%B8%87%E5%B9%B4%E8%96%AA%E8%AE%A9%E7%BD%97%E5%AD%90%E5%90%9B%E4%B9%B08%E4%B8%87%E7%9A%84%E9%9E%8B%23) `319.8K 🔥` `-39%`
1. [雅典娜遇害名单截图出自反诈片 (The screenshot of Athena’s murder list is from an anti-fraud film)](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%E9%81%87%E5%AE%B3%E5%90%8D%E5%8D%95%E6%88%AA%E5%9B%BE%E5%87%BA%E8%87%AA%E5%8F%8D%E8%AF%88%E7%89%87%23) `318.9K 🔥` `-63%`
1. [你永远猜不到小孩把东西藏哪](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%B0%B8%E8%BF%9C%E7%8C%9C%E4%B8%8D%E5%88%B0%E5%B0%8F%E5%AD%A9%E6%8A%8A%E4%B8%9C%E8%A5%BF%E8%97%8F%E5%93%AA%23) `316.6K 🔥` `-61%`
1. [雅典娜](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%23) `312.9K 🔥` `-39%`
1. [偷偷藏不住疑似撤档 (Unable to hide secretly, suspected withdrawal)](https://s.weibo.com/weibo?q=%23%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%E7%96%91%E4%BC%BC%E6%92%A4%E6%A1%A3%23) `309.9K 🔥` `-43%`
1. [姜小柔](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%B0%8F%E6%9F%94%23) `291.4K 🔥` `-26%`
1. [白海豚来了个回马枪再度冲击江浙沪 (The white dolphin has made a comeback and once again attacks Jiangsu, Zhejiang and Shanghai)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%9D%A5%E4%BA%86%E4%B8%AA%E5%9B%9E%E9%A9%AC%E6%9E%AA%E5%86%8D%E5%BA%A6%E5%86%B2%E5%87%BB%E6%B1%9F%E6%B5%99%E6%B2%AA%23) `240.1K 🔥` `-31%`
1. [曝TF四代五公后宣布开启出道计划](https://s.weibo.com/weibo?q=%23%E6%9B%9DTF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E5%90%8E%E5%AE%A3%E5%B8%83%E5%BC%80%E5%90%AF%E5%87%BA%E9%81%93%E8%AE%A1%E5%88%92%23) `199.7K 🔥` `-25%`
1. [易烊千玺赞助商logo全抹 (Yi Yang Qianxi’s sponsor logo is completely wiped out)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%B5%9E%E5%8A%A9%E5%95%86logo%E5%85%A8%E6%8A%B9%23) `187.0K 🔥` `-39%`
1. [睡车里被酒店收150元住宿费事件反转](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%BD%A6%E9%87%8C%E8%A2%AB%E9%85%92%E5%BA%97%E6%94%B6150%E5%85%83%E4%BD%8F%E5%AE%BF%E8%B4%B9%E4%BA%8B%E4%BB%B6%E5%8F%8D%E8%BD%AC%23) `178.0K 🔥` `-45%`
1. [卢伟冰称小米国内首家自研发光材料](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E4%BC%9F%E5%86%B0%E7%A7%B0%E5%B0%8F%E7%B1%B3%E5%9B%BD%E5%86%85%E9%A6%96%E5%AE%B6%E8%87%AA%E7%A0%94%E5%8F%91%E5%85%89%E6%9D%90%E6%96%99%23) `167.9K 🔥` `-66%`
1. [谢娜偶像来了名场面翻红](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%E5%90%8D%E5%9C%BA%E9%9D%A2%E7%BF%BB%E7%BA%A2%23) `166.0K 🔥` `-38%`

Updated at 2026-08-11 17:52:08

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
