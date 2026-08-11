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

1. [建议女生不要在网上过度分享 (It is recommended that girls not over-share online)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E8%BF%87%E5%BA%A6%E5%88%86%E4%BA%AB%23) `810.2K 🔥` `NEW`
1. [ZmjjKK状态](https://s.weibo.com/weibo?q=%23ZmjjKK%E7%8A%B6%E6%80%81%23) `553.7K 🔥` `NEW`
1. [陈思诚连夜从泰国回来](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E8%BF%9E%E5%A4%9C%E4%BB%8E%E6%B3%B0%E5%9B%BD%E5%9B%9E%E6%9D%A5%23) `548.8K 🔥` `NEW`
1. [哈啰顺风车疑男司机用女性头像接单](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%95%B0%E9%A1%BA%E9%A3%8E%E8%BD%A6%E7%96%91%E7%94%B7%E5%8F%B8%E6%9C%BA%E7%94%A8%E5%A5%B3%E6%80%A7%E5%A4%B4%E5%83%8F%E6%8E%A5%E5%8D%95%23) `409.5K 🔥` `NEW`
1. [张婉婷疑似怀三胎了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E7%96%91%E4%BC%BC%E6%80%80%E4%B8%89%E8%83%8E%E4%BA%86%23) `409.4K 🔥` `NEW`
1. [姐弟打架奶奶拉偏架妈妈心疼痛哭](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%BC%9F%E6%89%93%E6%9E%B6%E5%A5%B6%E5%A5%B6%E6%8B%89%E5%81%8F%E6%9E%B6%E5%A6%88%E5%A6%88%E5%BF%83%E7%96%BC%E7%97%9B%E5%93%AD%23) `348.9K 🔥` `NEW`
1. [银行午休1.5小时为何争议这么大](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%911.5%E5%B0%8F%E6%97%B6%E4%B8%BA%E4%BD%95%E4%BA%89%E8%AE%AE%E8%BF%99%E4%B9%88%E5%A4%A7%23) `279.4K 🔥` `NEW`
1. [龙翔被判死缓](https://s.weibo.com/weibo?q=%23%E9%BE%99%E7%BF%94%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93%23) `279.3K 🔥` `NEW`
1. [Codex忙了15分钟选择直接抄作业](https://s.weibo.com/weibo?q=%23Codex%E5%BF%99%E4%BA%8615%E5%88%86%E9%92%9F%E9%80%89%E6%8B%A9%E7%9B%B4%E6%8E%A5%E6%8A%84%E4%BD%9C%E4%B8%9A%23) `208.1K 🔥` `NEW`
1. [中国老板卖鸡汤馄饨视频](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%80%81%E6%9D%BF%E5%8D%96%E9%B8%A1%E6%B1%A4%E9%A6%84%E9%A5%A8%E8%A7%86%E9%A2%91%23) `151.8K 🔥` `NEW`
1. [花开锦绣 (Flowers bloom beautifully)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `151.1K 🔥` `NEW`
1. [JDG生死战对阵EDG](https://s.weibo.com/weibo?q=%23JDG%E7%94%9F%E6%AD%BB%E6%88%98%E5%AF%B9%E9%98%B5EDG%23) `146.2K 🔥` `NEW`
1. [EDG无缘第二赛段季后赛](https://s.weibo.com/weibo?q=%23EDG%E6%97%A0%E7%BC%98%E7%AC%AC%E4%BA%8C%E8%B5%9B%E6%AE%B5%E5%AD%A3%E5%90%8E%E8%B5%9B%23) `145.2K 🔥` `NEW`
1. [东北龙餐馆 上海奥德赛](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E9%BE%99%E9%A4%90%E9%A6%86%20%E4%B8%8A%E6%B5%B7%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `626.0K 🔥` `+97%`
1. [马斯克母子强推中国游 (Musk, mother and son strongly recommend travel to China)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%AF%8D%E5%AD%90%E5%BC%BA%E6%8E%A8%E4%B8%AD%E5%9B%BD%E6%B8%B8%23) `570.4K 🔥` `+75%`
1. [台风白海豚停止编号](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%81%9C%E6%AD%A2%E7%BC%96%E5%8F%B7%23) `561.3K 🔥` `+171%`
1. [巴旦木公主晒结婚证](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81%23) `540.0K 🔥` `+68%`
1. [建议大家装修不要太大众](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A3%85%E4%BF%AE%E4%B8%8D%E8%A6%81%E5%A4%AA%E5%A4%A7%E4%BC%97%23) `533.5K 🔥` `+67%`
1. [方文山发文回应出轨](https://s.weibo.com/weibo?q=%23%E6%96%B9%E6%96%87%E5%B1%B1%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E5%87%BA%E8%BD%A8%23) `522.1K 🔥` `+62%`
1. [PDD祝福巴旦木公主](https://s.weibo.com/weibo?q=%23PDD%E7%A5%9D%E7%A6%8F%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%23) `519.2K 🔥` `+68%`
1. [俄少女逃出电诈园仍处严重应激状态](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%B0%91%E5%A5%B3%E9%80%83%E5%87%BA%E7%94%B5%E8%AF%88%E5%9B%AD%E4%BB%8D%E5%A4%84%E4%B8%A5%E9%87%8D%E5%BA%94%E6%BF%80%E7%8A%B6%E6%80%81%23) `506.2K 🔥` `+205%`
1. [陈俊生150万年薪让罗子君买8万的鞋 (Chen Junsheng's annual salary of 1.5 million asked Luo Zijun to buy 80,000 shoes)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F150%E4%B8%87%E5%B9%B4%E8%96%AA%E8%AE%A9%E7%BD%97%E5%AD%90%E5%90%9B%E4%B9%B08%E4%B8%87%E7%9A%84%E9%9E%8B%23) `506.1K 🔥` `+58%`
1. [于东来自掏65亿建商场当包租公](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E8%87%AA%E6%8E%8F65%E4%BA%BF%E5%BB%BA%E5%95%86%E5%9C%BA%E5%BD%93%E5%8C%85%E7%A7%9F%E5%85%AC%23) `430.3K 🔥` `+32%`
1. [雅典娜遇害名单截图出自反诈片 (The screenshot of Athena’s murder list is from an anti-fraud film)](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%E9%81%87%E5%AE%B3%E5%90%8D%E5%8D%95%E6%88%AA%E5%9B%BE%E5%87%BA%E8%87%AA%E5%8F%8D%E8%AF%88%E7%89%87%23) `417.3K 🔥` `+31%`
1. [学习老辈子断亲态度](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E4%B9%A0%E8%80%81%E8%BE%88%E5%AD%90%E6%96%AD%E4%BA%B2%E6%80%81%E5%BA%A6%23) `302.8K 🔥` `+59%`
1. [如果我是王宝强谁是我的陈思诚](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E6%88%91%E6%98%AF%E7%8E%8B%E5%AE%9D%E5%BC%BA%E8%B0%81%E6%98%AF%E6%88%91%E7%9A%84%E9%99%88%E6%80%9D%E8%AF%9A%23) `279.5K 🔥` `+49%`
1. [帕拉梅拉价格跌破百万](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%8B%89%E6%A2%85%E6%8B%89%E4%BB%B7%E6%A0%BC%E8%B7%8C%E7%A0%B4%E7%99%BE%E4%B8%87%23) `279.4K 🔥` `+55%`
1. [北京暴雨 (Heavy rain in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `1.1M 🔥`
1. [遇城市内涝这些事千万不能做](https://s.weibo.com/weibo?q=%23%E9%81%87%E5%9F%8E%E5%B8%82%E5%86%85%E6%B6%9D%E8%BF%99%E4%BA%9B%E4%BA%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%83%BD%E5%81%9A%23) `910.6K 🔥`
1. [科目二挂了教练换的头像](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%9B%AE%E4%BA%8C%E6%8C%82%E4%BA%86%E6%95%99%E7%BB%83%E6%8D%A2%E7%9A%84%E5%A4%B4%E5%83%8F%23) `879.4K 🔥`
1. [猫耳声刻2026阵容](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E8%80%B3%E5%A3%B0%E5%88%BB2026%E9%98%B5%E5%AE%B9%23) `279.5K 🔥`
1. [马斯克平均每天赚59亿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%B9%B3%E5%9D%87%E6%AF%8F%E5%A4%A9%E8%B5%9A59%E4%BA%BF%23) `279.4K 🔥`
1. [你永远猜不到小孩把东西藏哪](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%B0%B8%E8%BF%9C%E7%8C%9C%E4%B8%8D%E5%88%B0%E5%B0%8F%E5%AD%A9%E6%8A%8A%E4%B8%9C%E8%A5%BF%E8%97%8F%E5%93%AA%23) `279.3K 🔥`
1. [女子买西瓜切出膜状异物 (Woman buys watermelon and cuts out membrane-like foreign body)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E8%A5%BF%E7%93%9C%E5%88%87%E5%87%BA%E8%86%9C%E7%8A%B6%E5%BC%82%E7%89%A9%23) `279.3K 🔥`
1. [雅典娜](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%23) `273.8K 🔥`
1. [7旬老人被女主播崩了3年](https://s.weibo.com/weibo?q=%237%E6%97%AC%E8%80%81%E4%BA%BA%E8%A2%AB%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B4%A9%E4%BA%863%E5%B9%B4%23) `265.7K 🔥`
1. [易烊千玺赞助商logo全抹 (Yi Yang Qianxi’s sponsor logo is completely wiped out)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%B5%9E%E5%8A%A9%E5%95%86logo%E5%85%A8%E6%8A%B9%23) `214.5K 🔥`
1. [17年寻女终确认女儿2008年已溺亡](https://s.weibo.com/weibo?q=%2317%E5%B9%B4%E5%AF%BB%E5%A5%B3%E7%BB%88%E7%A1%AE%E8%AE%A4%E5%A5%B3%E5%84%BF2008%E5%B9%B4%E5%B7%B2%E6%BA%BA%E4%BA%A1%23) `209.5K 🔥`
1. [曝TF四代五公后宣布开启出道计划](https://s.weibo.com/weibo?q=%23%E6%9B%9DTF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E5%90%8E%E5%AE%A3%E5%B8%83%E5%BC%80%E5%90%AF%E5%87%BA%E9%81%93%E8%AE%A1%E5%88%92%23) `162.3K 🔥`
1. [卢伟冰称小米国内首家自研发光材料](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E4%BC%9F%E5%86%B0%E7%A7%B0%E5%B0%8F%E7%B1%B3%E5%9B%BD%E5%86%85%E9%A6%96%E5%AE%B6%E8%87%AA%E7%A0%94%E5%8F%91%E5%85%89%E6%9D%90%E6%96%99%23) `142.7K 🔥`
1. [哪吒159亿票房为何换不来全体起立 (Why can’t everyone stand up in exchange for Nezha’s 15.9 billion box office?)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92159%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%BA%E4%BD%95%E6%8D%A2%E4%B8%8D%E6%9D%A5%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `2.2M 🔥` `-21%`
1. [买车的欲望已经到了极致](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E7%9A%84%E6%AC%B2%E6%9C%9B%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E6%9E%81%E8%87%B4%23) `571.3K 🔥` `-27%`
1. [杨幂妈幂 (Yang Mi's mother)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%A6%88%E5%B9%82%23) `406.1K 🔥` `-48%`
1. [偷偷藏不住疑似撤档 (Unable to hide secretly, suspected withdrawal)](https://s.weibo.com/weibo?q=%23%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%E7%96%91%E4%BC%BC%E6%92%A4%E6%A1%A3%23) `244.6K 🔥` `-21%`
1. [转账备注不求结婚分手索赔11万](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E8%B4%A6%E5%A4%87%E6%B3%A8%E4%B8%8D%E6%B1%82%E7%BB%93%E5%A9%9A%E5%88%86%E6%89%8B%E7%B4%A2%E8%B5%9411%E4%B8%87%23) `228.4K 🔥` `-23%`
1. [孙千体脂率](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E4%BD%93%E8%84%82%E7%8E%87%23) `207.8K 🔥` `-33%`
1. [姜小柔](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%B0%8F%E6%9F%94%23) `197.3K 🔥` `-32%`
1. [白海豚来了个回马枪再度冲击江浙沪 (The white dolphin has made a comeback and once again attacks Jiangsu, Zhejiang and Shanghai)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%9D%A5%E4%BA%86%E4%B8%AA%E5%9B%9E%E9%A9%AC%E6%9E%AA%E5%86%8D%E5%BA%A6%E5%86%B2%E5%87%BB%E6%B1%9F%E6%B5%99%E6%B2%AA%23) `190.7K 🔥` `-21%`
1. [狗头萝莉检测传染病四项 (Dog-headed lolita detects four infectious diseases)](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%A4%B4%E8%90%9D%E8%8E%89%E6%A3%80%E6%B5%8B%E4%BC%A0%E6%9F%93%E7%97%85%E5%9B%9B%E9%A1%B9%23) `183.9K 🔥` `-38%`
1. [俄女子称逃离缅甸电诈园游河到泰国 (Russian woman says she escaped from Myanmar and traveled to Thailand via e-mail scam)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%80%83%E7%A6%BB%E7%BC%85%E7%94%B8%E7%94%B5%E8%AF%88%E5%9B%AD%E6%B8%B8%E6%B2%B3%E5%88%B0%E6%B3%B0%E5%9B%BD%23) `142.0K 🔥` `-55%`

Updated at 2026-08-11 18:42:58

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
