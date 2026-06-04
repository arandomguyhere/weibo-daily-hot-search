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

1. [原价899的耐克降至429消费者仍不买账 (Nike's original price was reduced from 899 to 429, but consumers still didn't buy it.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E4%BB%B7899%E7%9A%84%E8%80%90%E5%85%8B%E9%99%8D%E8%87%B3429%E6%B6%88%E8%B4%B9%E8%80%85%E4%BB%8D%E4%B8%8D%E4%B9%B0%E8%B4%A6%23) `1.1M 🔥` `NEW`
1. [中方回应2名日本人处理日遗化武受伤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%942%E5%90%8D%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%A4%84%E7%90%86%E6%97%A5%E9%81%97%E5%8C%96%E6%AD%A6%E5%8F%97%E4%BC%A4%23) `831.4K 🔥` `NEW`
1. [粤港澳大湾区又一座世界之最](https://s.weibo.com/weibo?q=%23%E7%B2%A4%E6%B8%AF%E6%BE%B3%E5%A4%A7%E6%B9%BE%E5%8C%BA%E5%8F%88%E4%B8%80%E5%BA%A7%E4%B8%96%E7%95%8C%E4%B9%8B%E6%9C%80%23) `763.9K 🔥` `NEW`
1. [原来面条坨了也有邪修](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%9D%A2%E6%9D%A1%E5%9D%A8%E4%BA%86%E4%B9%9F%E6%9C%89%E9%82%AA%E4%BF%AE%23) `731.5K 🔥` `NEW`
1. [黄灿灿唐艺昕 雪人](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%94%90%E8%89%BA%E6%98%95%20%E9%9B%AA%E4%BA%BA%23) `520.9K 🔥` `NEW`
1. [神仙肉 侯明昊](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%20%E4%BE%AF%E6%98%8E%E6%98%8A%23) `396.7K 🔥` `NEW`
1. [宋祖儿路透长得像p了半小时的](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E8%B7%AF%E9%80%8F%E9%95%BF%E5%BE%97%E5%83%8Fp%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E7%9A%84%23) `323.6K 🔥` `NEW`
1. [男子AI写歌月收入十几万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90AI%E5%86%99%E6%AD%8C%E6%9C%88%E6%94%B6%E5%85%A5%E5%8D%81%E5%87%A0%E4%B8%87%23) `323.5K 🔥` `NEW`
1. [奚梦瑶何猷君婚礼上摆蒜苔](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A9%9A%E7%A4%BC%E4%B8%8A%E6%91%86%E8%92%9C%E8%8B%94%23) `323.1K 🔥` `NEW`
1. [主角里到底有几个黑娃](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E9%87%8C%E5%88%B0%E5%BA%95%E6%9C%89%E5%87%A0%E4%B8%AA%E9%BB%91%E5%A8%83%23) `322.9K 🔥` `NEW`
1. [巴萨迎历史上首位中国球员 (Barcelona welcomes first Chinese player in history)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%E8%BF%8E%E5%8E%86%E5%8F%B2%E4%B8%8A%E9%A6%96%E4%BD%8D%E4%B8%AD%E5%9B%BD%E7%90%83%E5%91%98%23) `322.8K 🔥` `NEW`
1. [山西临汾副市长吴勇主动投案](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%B4%E6%B1%BE%E5%89%AF%E5%B8%82%E9%95%BF%E5%90%B4%E5%8B%87%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `322.6K 🔥` `NEW`
1. [泪点低的看不得王传君这幅画](https://s.weibo.com/weibo?q=%23%E6%B3%AA%E7%82%B9%E4%BD%8E%E7%9A%84%E7%9C%8B%E4%B8%8D%E5%BE%97%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%BF%99%E5%B9%85%E7%94%BB%23) `322.4K 🔥` `NEW`
1. [胖东来将安装2000万元室外音响](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%86%E5%AE%89%E8%A3%852000%E4%B8%87%E5%85%83%E5%AE%A4%E5%A4%96%E9%9F%B3%E5%93%8D%23) `322.2K 🔥` `NEW`
1. [张元英对工作人员态度被审判](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%AF%B9%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%80%81%E5%BA%A6%E8%A2%AB%E5%AE%A1%E5%88%A4%23) `322.0K 🔥` `NEW`
1. [肝衰竭姐姐放弃治疗救弟痛哭不想死](https://s.weibo.com/weibo?q=%23%E8%82%9D%E8%A1%B0%E7%AB%AD%E5%A7%90%E5%A7%90%E6%94%BE%E5%BC%83%E6%B2%BB%E7%96%97%E6%95%91%E5%BC%9F%E7%97%9B%E5%93%AD%E4%B8%8D%E6%83%B3%E6%AD%BB%23) `321.9K 🔥` `NEW`
1. [iPhone改日期 空出20G](https://s.weibo.com/weibo?q=%23iPhone%E6%94%B9%E6%97%A5%E6%9C%9F%20%E7%A9%BA%E5%87%BA20G%23) `321.9K 🔥` `NEW`
1. [何猷君伴郎之一是雅诗兰黛继承人](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E4%BC%B4%E9%83%8E%E4%B9%8B%E4%B8%80%E6%98%AF%E9%9B%85%E8%AF%97%E5%85%B0%E9%BB%9B%E7%BB%A7%E6%89%BF%E4%BA%BA%23) `321.9K 🔥` `NEW`
1. [中国夫妻在卡车上包饺子的视频在外网火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%AB%E5%A6%BB%E5%9C%A8%E5%8D%A1%E8%BD%A6%E4%B8%8A%E5%8C%85%E9%A5%BA%E5%AD%90%E7%9A%84%E8%A7%86%E9%A2%91%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `321.9K 🔥` `NEW`
1. [曝TF家族运动会分组名单](https://s.weibo.com/weibo?q=%23%E6%9B%9DTF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%88%86%E7%BB%84%E5%90%8D%E5%8D%95%23) `319.9K 🔥` `NEW`
1. [田曦薇Gucci镜头 (Tian Xiwei Gucci lens)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87Gucci%E9%95%9C%E5%A4%B4%23) `317.1K 🔥` `NEW`
1. [Papi酱带货的宠物友好粘尘器翻车](https://s.weibo.com/weibo?q=%23Papi%E9%85%B1%E5%B8%A6%E8%B4%A7%E7%9A%84%E5%AE%A0%E7%89%A9%E5%8F%8B%E5%A5%BD%E7%B2%98%E5%B0%98%E5%99%A8%E7%BF%BB%E8%BD%A6%23) `314.1K 🔥` `NEW`
1. [谷歌计划投放3200万只蚊子](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E8%AE%A1%E5%88%92%E6%8A%95%E6%94%BE3200%E4%B8%87%E5%8F%AA%E8%9A%8A%E5%AD%90%23) `311.5K 🔥` `NEW`
1. [网传杭州2188元面馆老板回应](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9D%AD%E5%B7%9E2188%E5%85%83%E9%9D%A2%E9%A6%86%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%23) `308.3K 🔥` `NEW`
1. [林允瘦到打不动网球](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E7%98%A6%E5%88%B0%E6%89%93%E4%B8%8D%E5%8A%A8%E7%BD%91%E7%90%83%23) `306.3K 🔥` `NEW`
1. [何超盈坐奚梦瑶家人旁边](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%9B%88%E5%9D%90%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%AE%B6%E4%BA%BA%E6%97%81%E8%BE%B9%23) `304.1K 🔥` `NEW`
1. [我没有刚工作时那么善良了](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%B2%A1%E6%9C%89%E5%88%9A%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%82%A3%E4%B9%88%E5%96%84%E8%89%AF%E4%BA%86%23) `292.6K 🔥` `NEW`
1. [神仙肉男主传一个跑一个](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%E7%94%B7%E4%B8%BB%E4%BC%A0%E4%B8%80%E4%B8%AA%E8%B7%91%E4%B8%80%E4%B8%AA%23) `284.9K 🔥` `NEW`
1. [发明实况拼图的简直是天才](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E5%AE%9E%E5%86%B5%E6%8B%BC%E5%9B%BE%E7%9A%84%E7%AE%80%E7%9B%B4%E6%98%AF%E5%A4%A9%E6%89%8D%23) `236.5K 🔥` `NEW`
1. [鹿晗gapday音乐节](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97gapday%E9%9F%B3%E4%B9%90%E8%8A%82%23) `235.5K 🔥` `NEW`
1. [女子为穿衣好看1个月瘦20斤 (Woman loses 20 pounds in one month to dress better)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BA%E7%A9%BF%E8%A1%A3%E5%A5%BD%E7%9C%8B1%E4%B8%AA%E6%9C%88%E7%98%A620%E6%96%A4%23) `200.4K 🔥` `NEW`
1. [杨紫安徽路透](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AE%89%E5%BE%BD%E8%B7%AF%E9%80%8F%23) `194.7K 🔥` `NEW`
1. [网传雪人曾沛慈换黄灿灿](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%9B%AA%E4%BA%BA%E6%9B%BE%E6%B2%9B%E6%85%88%E6%8D%A2%E9%BB%84%E7%81%BF%E7%81%BF%23) `189.4K 🔥` `NEW`
1. [丞磊沈羽洁 低配版西出玉门](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E6%B2%88%E7%BE%BD%E6%B4%81%20%E4%BD%8E%E9%85%8D%E7%89%88%E8%A5%BF%E5%87%BA%E7%8E%89%E9%97%A8%23) `169.6K 🔥` `NEW`
1. [给阿嬷的情书票房破15亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B415%E4%BA%BF%23) `162.5K 🔥` `NEW`
1. [物理AI](https://s.weibo.com/weibo?q=%23%E7%89%A9%E7%90%86AI%23) `159.3K 🔥` `NEW`
1. [周渝民妻子回应被诈骗741万](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B8%9D%E6%B0%91%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%AF%88%E9%AA%97741%E4%B8%87%23) `156.3K 🔥` `NEW`
1. [papi酱带货粘尘器翻车](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%B8%A6%E8%B4%A7%E7%B2%98%E5%B0%98%E5%99%A8%E7%BF%BB%E8%BD%A6%23) `138.2K 🔥` `NEW`
1. [孙杨张豆豆互翻白眼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E4%BA%92%E7%BF%BB%E7%99%BD%E7%9C%BC%23) `107.7K 🔥` `NEW`
1. [吃外卖4年的最好证明](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%A4%96%E5%8D%964%E5%B9%B4%E7%9A%84%E6%9C%80%E5%A5%BD%E8%AF%81%E6%98%8E%23) `619.4K 🔥`
1. [2030年AI耗水量够13亿人用一年 (In 2030, AI will consume enough water for 1.3 billion people for one year)](https://s.weibo.com/weibo?q=%232030%E5%B9%B4AI%E8%80%97%E6%B0%B4%E9%87%8F%E5%A4%9F13%E4%BA%BF%E4%BA%BA%E7%94%A8%E4%B8%80%E5%B9%B4%23) `323.9K 🔥`
1. [刘亦菲又自己乱剪头发了](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%8F%88%E8%87%AA%E5%B7%B1%E4%B9%B1%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `323.8K 🔥`
1. [杨颖要求黑粉公开赔礼道歉](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E9%A2%96%E8%A6%81%E6%B1%82%E9%BB%91%E7%B2%89%E5%85%AC%E5%BC%80%E8%B5%94%E7%A4%BC%E9%81%93%E6%AD%89%23) `321.9K 🔥`
1. [四太梁安琪一家吃饺子的排场](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%A4%AA%E6%A2%81%E5%AE%89%E7%90%AA%E4%B8%80%E5%AE%B6%E5%90%83%E9%A5%BA%E5%AD%90%E7%9A%84%E6%8E%92%E5%9C%BA%23) `263.5K 🔥`
1. [泡泡玛特告奈雪的茶获赔32万 (Bubble Mart sues Nai Xue’s tea and wins compensation of RMB 320,000)](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%91%8A%E5%A5%88%E9%9B%AA%E7%9A%84%E8%8C%B6%E8%8E%B7%E8%B5%9432%E4%B8%87%23) `335.3K 🔥` `-57%`
1. [时代峰峻 电影咖](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%20%E7%94%B5%E5%BD%B1%E5%92%96%23) `324.0K 🔥` `-31%`
1. [刘亦菲北电同学聚会照](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%8C%97%E7%94%B5%E5%90%8C%E5%AD%A6%E8%81%9A%E4%BC%9A%E7%85%A7%23) `234.4K 🔥` `-28%`
1. [杭州四季青半裸男团表演引争议](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%9B%9B%E5%AD%A3%E9%9D%92%E5%8D%8A%E8%A3%B8%E7%94%B7%E5%9B%A2%E8%A1%A8%E6%BC%94%E5%BC%95%E4%BA%89%E8%AE%AE%23) `177.0K 🔥` `-44%`
1. [做咖啡喝咖啡送咖啡的都辛苦](https://s.weibo.com/weibo?q=%23%E5%81%9A%E5%92%96%E5%95%A1%E5%96%9D%E5%92%96%E5%95%A1%E9%80%81%E5%92%96%E5%95%A1%E7%9A%84%E9%83%BD%E8%BE%9B%E8%8B%A6%23) `108.5K 🔥` `-61%`
1. [17岁女孩搓澡太用力竟致黄体破裂](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%90%93%E6%BE%A1%E5%A4%AA%E7%94%A8%E5%8A%9B%E7%AB%9F%E8%87%B4%E9%BB%84%E4%BD%93%E7%A0%B4%E8%A3%82%23) `106.7K 🔥` `-64%`

Updated at 2026-06-04 20:14:46

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
