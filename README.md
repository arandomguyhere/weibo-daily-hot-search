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

1. [峰哥卸载同花顺了 (Brother Feng uninstalled Flush)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E5%8D%B8%E8%BD%BD%E5%90%8C%E8%8A%B1%E9%A1%BA%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [微博公益课堂](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E5%85%AC%E7%9B%8A%E8%AF%BE%E5%A0%82%23) `1.1M 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `1.0M 🔥` `NEW`
1. [王玉雯在白鹿面前很少化妆](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%9C%A8%E7%99%BD%E9%B9%BF%E9%9D%A2%E5%89%8D%E5%BE%88%E5%B0%91%E5%8C%96%E5%A6%86%23) `918.7K 🔥` `NEW`
1. [怡颗莓声明](https://s.weibo.com/weibo?q=%23%E6%80%A1%E9%A2%97%E8%8E%93%E5%A3%B0%E6%98%8E%23) `692.7K 🔥` `NEW`
1. [百万网红犬锄头被盗宰杀案按物品估价](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E7%8A%AC%E9%94%84%E5%A4%B4%E8%A2%AB%E7%9B%97%E5%AE%B0%E6%9D%80%E6%A1%88%E6%8C%89%E7%89%A9%E5%93%81%E4%BC%B0%E4%BB%B7%23) `559.2K 🔥` `NEW`
1. [坚持不结婚的人最适合结婚](https://s.weibo.com/weibo?q=%23%E5%9D%9A%E6%8C%81%E4%B8%8D%E7%BB%93%E5%A9%9A%E7%9A%84%E4%BA%BA%E6%9C%80%E9%80%82%E5%90%88%E7%BB%93%E5%A9%9A%23) `364.0K 🔥` `NEW`
1. [锋芝 原配真夫妻的含金量](https://s.weibo.com/weibo?q=%23%E9%94%8B%E8%8A%9D%20%E5%8E%9F%E9%85%8D%E7%9C%9F%E5%A4%AB%E5%A6%BB%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `356.4K 🔥` `NEW`
1. [张柏芝月中火速安排大儿子回香港](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%9C%88%E4%B8%AD%E7%81%AB%E9%80%9F%E5%AE%89%E6%8E%92%E5%A4%A7%E5%84%BF%E5%AD%90%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `353.1K 🔥` `NEW`
1. [26岁女子恋爱后体检发现自己是男性](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%AD%90%E6%81%8B%E7%88%B1%E5%90%8E%E4%BD%93%E6%A3%80%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E6%98%AF%E7%94%B7%E6%80%A7%23) `344.6K 🔥` `NEW`
1. [奥利塞 当爹 (Orise becomes a father)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%20%E5%BD%93%E7%88%B9%23) `323.3K 🔥` `NEW`
1. [赵今麦终于原谅古装了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E5%8F%A4%E8%A3%85%E4%BA%86%23) `306.7K 🔥` `NEW`
1. [11岁男孩被泳池排水口吸住溺亡](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E6%B3%B3%E6%B1%A0%E6%8E%92%E6%B0%B4%E5%8F%A3%E5%90%B8%E4%BD%8F%E6%BA%BA%E4%BA%A1%23) `300.5K 🔥` `NEW`
1. [深圳地铁堵麻了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%9C%B0%E9%93%81%E5%A0%B5%E9%BA%BB%E4%BA%86%23) `298.4K 🔥` `NEW`
1. [野狗骨头床戏 震撼美味](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%BA%8A%E6%88%8F%20%E9%9C%87%E6%92%BC%E7%BE%8E%E5%91%B3%23) `294.0K 🔥` `NEW`
1. [记者卧底卖酒公司被迫崩老头](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E5%8D%A7%E5%BA%95%E5%8D%96%E9%85%92%E5%85%AC%E5%8F%B8%E8%A2%AB%E8%BF%AB%E5%B4%A9%E8%80%81%E5%A4%B4%23) `290.7K 🔥` `NEW`
1. [印度首都爆发大规模抗议](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%A6%96%E9%83%BD%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8A%97%E8%AE%AE%23) `288.1K 🔥` `NEW`
1. [21岁和26岁差距真的很大](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%92%8C26%E5%B2%81%E5%B7%AE%E8%B7%9D%E7%9C%9F%E7%9A%84%E5%BE%88%E5%A4%A7%23) `285.9K 🔥` `NEW`
1. [谢贤一生最痛心谢霆锋离婚](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E4%B8%80%E7%94%9F%E6%9C%80%E7%97%9B%E5%BF%83%E8%B0%A2%E9%9C%86%E9%94%8B%E7%A6%BB%E5%A9%9A%23) `283.3K 🔥` `NEW`
1. [单休最快回血的办法找到了](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BC%91%E6%9C%80%E5%BF%AB%E5%9B%9E%E8%A1%80%E7%9A%84%E5%8A%9E%E6%B3%95%E6%89%BE%E5%88%B0%E4%BA%86%23) `275.1K 🔥` `NEW`
1. [韩国网友希望黄子韬重回EXO (Korean netizens hope Huang Zitao returns to EXO)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%B8%8C%E6%9C%9B%E9%BB%84%E5%AD%90%E9%9F%AC%E9%87%8D%E5%9B%9EEXO%23) `270.4K 🔥` `NEW`
1. [大家现在对20多元有什么概念](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E7%8E%B0%E5%9C%A8%E5%AF%B920%E5%A4%9A%E5%85%83%E6%9C%89%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `269.1K 🔥` `NEW`
1. [方圆鼻子是缩鼻翼留下的疤痕增生](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E9%BC%BB%E5%AD%90%E6%98%AF%E7%BC%A9%E9%BC%BB%E7%BF%BC%E7%95%99%E4%B8%8B%E7%9A%84%E7%96%A4%E7%97%95%E5%A2%9E%E7%94%9F%23) `229.8K 🔥` `NEW`
1. [阿根廷总统发声](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%80%BB%E7%BB%9F%E5%8F%91%E5%A3%B0%23) `228.0K 🔥` `NEW`
1. [最希望收到马宁黄牌的一次](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B8%8C%E6%9C%9B%E6%94%B6%E5%88%B0%E9%A9%AC%E5%AE%81%E9%BB%84%E7%89%8C%E7%9A%84%E4%B8%80%E6%AC%A1%23) `215.5K 🔥` `NEW`
1. [纽约偶遇霍启山娜然](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%81%B6%E9%81%87%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%23) `212.2K 🔥` `NEW`
1. [迪丽热巴吃烤串](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%83%E7%83%A4%E4%B8%B2%23) `211.2K 🔥` `NEW`
1. [突然发现了薯片的神仙吃法](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%86%E8%96%AF%E7%89%87%E7%9A%84%E7%A5%9E%E4%BB%99%E5%90%83%E6%B3%95%23) `207.7K 🔥` `NEW`
1. [易峥结婚](https://s.weibo.com/weibo?q=%23%E6%98%93%E5%B3%A5%E7%BB%93%E5%A9%9A%23) `198.5K 🔥` `NEW`
1. [帕雷德斯决赛后首次发声](https://s.weibo.com/weibo?q=%23%E5%B8%95%E9%9B%B7%E5%BE%B7%E6%96%AF%E5%86%B3%E8%B5%9B%E5%90%8E%E9%A6%96%E6%AC%A1%E5%8F%91%E5%A3%B0%23) `195.4K 🔥` `NEW`
1. [虞书欣 高妹 (Yu Shuxin Gao Mei)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E9%AB%98%E5%A6%B9%23) `189.7K 🔥` `NEW`
1. [章若楠生理性演技](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%94%9F%E7%90%86%E6%80%A7%E6%BC%94%E6%8A%80%23) `182.5K 🔥` `NEW`
1. [突然意识到AI的真正用法](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0AI%E7%9A%84%E7%9C%9F%E6%AD%A3%E7%94%A8%E6%B3%95%23) `180.7K 🔥` `NEW`
1. [一个严重降低好感的小细节](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%B8%A5%E9%87%8D%E9%99%8D%E4%BD%8E%E5%A5%BD%E6%84%9F%E7%9A%84%E5%B0%8F%E7%BB%86%E8%8A%82%23) `179.6K 🔥` `NEW`
1. [13岁女孩为乙游狂刷3万元](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%BA%E4%B9%99%E6%B8%B8%E7%8B%82%E5%88%B73%E4%B8%87%E5%85%83%23) `179.6K 🔥` `NEW`
1. [半导体尾盘急拉翻红](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%B0%BE%E7%9B%98%E6%80%A5%E6%8B%89%E7%BF%BB%E7%BA%A2%23) `173.0K 🔥` `NEW`
1. [八仙 原著蹭原著](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E5%8E%9F%E8%91%97%E8%B9%AD%E5%8E%9F%E8%91%97%23) `171.0K 🔥` `NEW`
1. [阿根廷队不庆祝](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E4%B8%8D%E5%BA%86%E7%A5%9D%23) `171.0K 🔥` `NEW`
1. [影视飓风实习生日薪300元](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%AE%9E%E4%B9%A0%E7%94%9F%E6%97%A5%E8%96%AA300%E5%85%83%23) `149.6K 🔥` `NEW`
1. [赵今麦郭俊辰三搭了 (Zhao Jinmai and Guo Junchen had a threesome)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%83%AD%E4%BF%8A%E8%BE%B0%E4%B8%89%E6%90%AD%E4%BA%86%23) `554.3K 🔥` `+64%`
1. [手把手教你关掉藏在手机里的耳朵](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%85%B3%E6%8E%89%E8%97%8F%E5%9C%A8%E6%89%8B%E6%9C%BA%E9%87%8C%E7%9A%84%E8%80%B3%E6%9C%B5%23) `362.2K 🔥` `+155%`
1. [中国科技这3组数字真提气 (These three sets of numbers about China’s science and technology are really inspiring)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E6%8A%80%E8%BF%993%E7%BB%84%E6%95%B0%E5%AD%97%E7%9C%9F%E6%8F%90%E6%B0%94%23) `1.1M 🔥`
1. [房东觉得房子卖亏了报复买家](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E8%A7%89%E5%BE%97%E6%88%BF%E5%AD%90%E5%8D%96%E4%BA%8F%E4%BA%86%E6%8A%A5%E5%A4%8D%E4%B9%B0%E5%AE%B6%23) `342.7K 🔥`
1. [谢贤进ICU后一心要等谢霆锋回香港 (After being admitted to the ICU, Nicholas Tse was determined to wait for Nicholas Tse to return to Hong Kong.)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E8%BF%9BICU%E5%90%8E%E4%B8%80%E5%BF%83%E8%A6%81%E7%AD%89%E8%B0%A2%E9%9C%86%E9%94%8B%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `334.1K 🔥`
1. [影视飓风去年参保人数为122人](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%8E%BB%E5%B9%B4%E5%8F%82%E4%BF%9D%E4%BA%BA%E6%95%B0%E4%B8%BA122%E4%BA%BA%23) `303.9K 🔥`
1. [赵丽颖27岁演的16岁花千骨](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9627%E5%B2%81%E6%BC%94%E7%9A%8416%E5%B2%81%E8%8A%B1%E5%8D%83%E9%AA%A8%23) `253.0K 🔥`
1. [怡颗莓 致癌物 (Yikeberry carcinogen)](https://s.weibo.com/weibo?q=%23%E6%80%A1%E9%A2%97%E8%8E%93%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `2.5M 🔥` `-38%`
1. [Jennie新歌MV男主](https://s.weibo.com/weibo?q=%23Jennie%E6%96%B0%E6%AD%8CMV%E7%94%B7%E4%B8%BB%23) `230.1K 🔥` `-21%`
1. [买了一套七个阳台的奇葩房子](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%BA%86%E4%B8%80%E5%A5%97%E4%B8%83%E4%B8%AA%E9%98%B3%E5%8F%B0%E7%9A%84%E5%A5%87%E8%91%A9%E6%88%BF%E5%AD%90%23) `190.2K 🔥` `-82%`
1. [李宇春辛芷蕾高叶倪妮合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E8%BE%9B%E8%8A%B7%E8%95%BE%E9%AB%98%E5%8F%B6%E5%80%AA%E5%A6%AE%E5%90%88%E7%85%A7%23) `171.2K 🔥` `-47%`
1. [美国拟限制中国开源AI模型](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8B%9F%E9%99%90%E5%88%B6%E4%B8%AD%E5%9B%BD%E5%BC%80%E6%BA%90AI%E6%A8%A1%E5%9E%8B%23) `149.4K 🔥` `-27%`

Updated at 2026-07-21 15:11:37

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
