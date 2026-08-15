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

1. [特朗普称将宣布霍尔木兹海峡为美领土 (Trump says he will declare Strait of Hormuz as US territory)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B0%86%E5%AE%A3%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E4%B8%BA%E7%BE%8E%E9%A2%86%E5%9C%9F%23) `1.4M 🔥` `NEW`
1. [旺旺最大的对手竟是糖](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E5%AF%B9%E6%89%8B%E7%AB%9F%E6%98%AF%E7%B3%96%23) `1.0M 🔥` `NEW`
1. [印尼7.7级地震](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `790.4K 🔥` `NEW`
1. [喻言 体面](https://s.weibo.com/weibo?q=%23%E5%96%BB%E8%A8%80%20%E4%BD%93%E9%9D%A2%23) `268.9K 🔥` `NEW`
1. [母亲出轨女儿带父亲找到第三者](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%87%BA%E8%BD%A8%E5%A5%B3%E5%84%BF%E5%B8%A6%E7%88%B6%E4%BA%B2%E6%89%BE%E5%88%B0%E7%AC%AC%E4%B8%89%E8%80%85%23) `267.8K 🔥` `NEW`
1. [谢霆锋二儿子近照曝光](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E4%BA%8C%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%E6%9B%9D%E5%85%89%23) `262.9K 🔥` `NEW`
1. [日本防相小泉进次郎参拜靖国神社](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%B2%E7%9B%B8%E5%B0%8F%E6%B3%89%E8%BF%9B%E6%AC%A1%E9%83%8E%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `243.3K 🔥` `NEW`
1. [路虎BBA保时捷价格大跳水](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8EBBA%E4%BF%9D%E6%97%B6%E6%8D%B7%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `242.0K 🔥` `NEW`
1. [沈梦辰回应披哥最累的是沈梦辰](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%9B%9E%E5%BA%94%E6%8A%AB%E5%93%A5%E6%9C%80%E7%B4%AF%E7%9A%84%E6%98%AF%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `238.5K 🔥` `NEW`
1. [要被关晓彤这双腿给晃晕了](https://s.weibo.com/weibo?q=%23%E8%A6%81%E8%A2%AB%E5%85%B3%E6%99%93%E5%BD%A4%E8%BF%99%E5%8F%8C%E8%85%BF%E7%BB%99%E6%99%83%E6%99%95%E4%BA%86%23) `234.5K 🔥` `NEW`
1. [失去AI恋人多位用户投诉平台 (Many users who lost their AI lovers complained to the platform)](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E5%8E%BBAI%E6%81%8B%E4%BA%BA%E5%A4%9A%E4%BD%8D%E7%94%A8%E6%88%B7%E6%8A%95%E8%AF%89%E5%B9%B3%E5%8F%B0%23) `230.5K 🔥` `NEW`
1. [神行者8预售33.99万起](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%858%E9%A2%84%E5%94%AE33.99%E4%B8%87%E8%B5%B7%23) `222.9K 🔥` `NEW`
1. [邓紫棋发型十五分钟就淋直了](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%8F%91%E5%9E%8B%E5%8D%81%E4%BA%94%E5%88%86%E9%92%9F%E5%B0%B1%E6%B7%8B%E7%9B%B4%E4%BA%86%23) `221.5K 🔥` `NEW`
1. [网友集体呼吁旺旺减糖](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%9B%86%E4%BD%93%E5%91%BC%E5%90%81%E6%97%BA%E6%97%BA%E5%87%8F%E7%B3%96%23) `218.9K 🔥` `NEW`
1. [欢迎来龙餐馆](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%23) `217.3K 🔥` `NEW`
1. [82岁老人高速被撞身亡家属索赔13万](https://s.weibo.com/weibo?q=%2382%E5%B2%81%E8%80%81%E4%BA%BA%E9%AB%98%E9%80%9F%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9413%E4%B8%87%23) `214.9K 🔥` `NEW`
1. [陈思罕都痛得快要蜷缩了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E9%83%BD%E7%97%9B%E5%BE%97%E5%BF%AB%E8%A6%81%E8%9C%B7%E7%BC%A9%E4%BA%86%23) `213.9K 🔥` `NEW`
1. [摊贩希望胖东来再跟房东切磋切磋](https://s.weibo.com/weibo?q=%23%E6%91%8A%E8%B4%A9%E5%B8%8C%E6%9C%9B%E8%83%96%E4%B8%9C%E6%9D%A5%E5%86%8D%E8%B7%9F%E6%88%BF%E4%B8%9C%E5%88%87%E7%A3%8B%E5%88%87%E7%A3%8B%23) `211.2K 🔥` `NEW`
1. [施罗德被交易至黄蜂](https://s.weibo.com/weibo?q=%23%E6%96%BD%E7%BD%97%E5%BE%B7%E8%A2%AB%E4%BA%A4%E6%98%93%E8%87%B3%E9%BB%84%E8%9C%82%23) `209.1K 🔥` `NEW`
1. [致敬生态保护者 (Tribute to ecological protectors)](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E7%94%9F%E6%80%81%E4%BF%9D%E6%8A%A4%E8%80%85%23) `1.0M 🔥` `+47%`
1. [王传君体脂率25.5%](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E4%BD%93%E8%84%82%E7%8E%8725.5%25%23) `709.8K 🔥` `+166%`
1. [慢性压力导致幻想沉溺 (Chronic stress leads to fantasy addiction)](https://s.weibo.com/weibo?q=%23%E6%85%A2%E6%80%A7%E5%8E%8B%E5%8A%9B%E5%AF%BC%E8%87%B4%E5%B9%BB%E6%83%B3%E6%B2%89%E6%BA%BA%23) `596.7K 🔥` `+39%`
1. [牛来 (Niu Lai)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%23) `272.6K 🔥` `+51%`
1. [王楚然一看手机天又塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%80%E7%9C%8B%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%8F%88%E5%A1%8C%E4%BA%86%23) `255.5K 🔥` `+50%`
1. [北京暴雨 (Heavy rain in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `250.5K 🔥` `+56%`
1. [旺旺都不好卖了](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%83%BD%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `248.1K 🔥` `+47%`
1. [沈腾的沈精兵来支持龙餐馆了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E7%9A%84%E6%B2%88%E7%B2%BE%E5%85%B5%E6%9D%A5%E6%94%AF%E6%8C%81%E9%BE%99%E9%A4%90%E9%A6%86%E4%BA%86%23) `243.1K 🔥` `+105%`
1. [曝王嘉尔纹身是宋雨琦粉丝名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E7%BA%B9%E8%BA%AB%E6%98%AF%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%B2%89%E4%B8%9D%E5%90%8D%23) `241.7K 🔥` `+84%`
1. [猝死前24小时身体发出的提醒](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%89%8D24%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BD%93%E5%8F%91%E5%87%BA%E7%9A%84%E6%8F%90%E9%86%92%23) `240.0K 🔥` `+160%`
1. [张雅琪 湖南卫视下场 (Zhang Yaqi’s end at Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `238.0K 🔥` `+80%`
1. [日本投降81周年](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D81%E5%91%A8%E5%B9%B4%23) `236.2K 🔥` `+128%`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `235.4K 🔥` `+74%`
1. [王赫野情商](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%B5%AB%E9%87%8E%E6%83%85%E5%95%86%23) `232.3K 🔥` `+195%`
1. [谁给小沈阳化的妆](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E5%B0%8F%E6%B2%88%E9%98%B3%E5%8C%96%E7%9A%84%E5%A6%86%23) `230.2K 🔥` `+100%`
1. [章若楠王鹤棣杨洋三张建模脸 (Three modeling faces of Zhang Ruonan, Wang Hedi and Yang Yang)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%9D%A8%E6%B4%8B%E4%B8%89%E5%BC%A0%E5%BB%BA%E6%A8%A1%E8%84%B8%23) `227.1K 🔥` `+69%`
1. [张凌赫工作室公开逐玉战报](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%85%AC%E5%BC%80%E9%80%90%E7%8E%89%E6%88%98%E6%8A%A5%23) `226.2K 🔥` `+46%`
1. [44岁男子脑梗无法进食被一根冰棍救了 (A 44-year-old man had a cerebral infarction and was unable to eat, but was saved by a popsicle)](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E7%94%B7%E5%AD%90%E8%84%91%E6%A2%97%E6%97%A0%E6%B3%95%E8%BF%9B%E9%A3%9F%E8%A2%AB%E4%B8%80%E6%A0%B9%E5%86%B0%E6%A3%8D%E6%95%91%E4%BA%86%23) `224.9K 🔥` `+114%`
1. [披哥最累的是沈梦辰 (Brother Pi is most tired of Shen Mengchen)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E6%9C%80%E7%B4%AF%E7%9A%84%E6%98%AF%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `223.8K 🔥` `+122%`
1. [曾辉帮韩雨彤整理衣服 (Zeng Hui helps Han Yutong organize her clothes)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%B8%AE%E9%9F%A9%E9%9B%A8%E5%BD%A4%E6%95%B4%E7%90%86%E8%A1%A3%E6%9C%8D%23) `220.0K 🔥` `+60%`
1. [Wenbo受伤](https://s.weibo.com/weibo?q=%23Wenbo%E5%8F%97%E4%BC%A4%23) `215.9K 🔥` `+63%`
1. [女子称自己月经持续来了8年 (Woman says she has been menstruating for 8 years)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%87%AA%E5%B7%B1%E6%9C%88%E7%BB%8F%E6%8C%81%E7%BB%AD%E6%9D%A5%E4%BA%868%E5%B9%B4%23) `211.9K 🔥` `+74%`
1. [命好的人本质是主体性强 (People with good fortune are essentially strong in subjectivity)](https://s.weibo.com/weibo?q=%23%E5%91%BD%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%AC%E8%B4%A8%E6%98%AF%E4%B8%BB%E4%BD%93%E6%80%A7%E5%BC%BA%23) `209.9K 🔥` `+38%`
1. [被曹骏出场气场拿捏住 (Captured by Cao Jun's aura when he appeared)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9B%B9%E9%AA%8F%E5%87%BA%E5%9C%BA%E6%B0%94%E5%9C%BA%E6%8B%BF%E6%8D%8F%E4%BD%8F%23) `207.7K 🔥` `+84%`
1. [旺旺集团面临重大经营危机](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%9B%86%E5%9B%A2%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E7%BB%8F%E8%90%A5%E5%8D%B1%E6%9C%BA%23) `1.9M 🔥`
1. [国乒男单无缘八强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%97%A0%E7%BC%98%E5%85%AB%E5%BC%BA%23) `633.6K 🔥`
1. [母女被拐卖父亲被骗无偿工作11年 (Mother and daughter were trafficked and father was deceived into working for free for 11 years)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E8%A2%AB%E6%8B%90%E5%8D%96%E7%88%B6%E4%BA%B2%E8%A2%AB%E9%AA%97%E6%97%A0%E5%81%BF%E5%B7%A5%E4%BD%9C11%E5%B9%B4%23) `839.1K 🔥` `-30%`
1. [河南暴雨 (Heavy rain in Henan)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%9A%B4%E9%9B%A8%23) `259.4K 🔥` `-45%`
1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `232.8K 🔥` `-57%`
1. [中央汇金证金公司集体清仓贵州茅台 (Central Huijin Securities Co., Ltd. collectively liquidates Kweichow Moutai)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E6%B1%87%E9%87%91%E8%AF%81%E9%87%91%E5%85%AC%E5%8F%B8%E9%9B%86%E4%BD%93%E6%B8%85%E4%BB%93%E8%B4%B5%E5%B7%9E%E8%8C%85%E5%8F%B0%23) `228.3K 🔥` `-40%`

Updated at 2026-08-15 09:43:51

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
