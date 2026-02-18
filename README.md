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

1. [2026春节消费迎来开门红 (2026 Spring Festival consumption gets off to a good start)](https://s.weibo.com/weibo?q=%232026%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E8%BF%8E%E6%9D%A5%E5%BC%80%E9%97%A8%E7%BA%A2%23) `625.0K 🔥` `NEW`
1. [看了春晚想赴皖](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BA%86%E6%98%A5%E6%99%9A%E6%83%B3%E8%B5%B4%E7%9A%96%23) `617.0K 🔥` `NEW`
1. [沈腾看似鼓掌实则扔橘子皮](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E7%9C%8B%E4%BC%BC%E9%BC%93%E6%8E%8C%E5%AE%9E%E5%88%99%E6%89%94%E6%A9%98%E5%AD%90%E7%9A%AE%23) `586.8K 🔥` `NEW`
1. [闲置1年的6米农村大炕过年睡满了](https://s.weibo.com/weibo?q=%23%E9%97%B2%E7%BD%AE1%E5%B9%B4%E7%9A%846%E7%B1%B3%E5%86%9C%E6%9D%91%E5%A4%A7%E7%82%95%E8%BF%87%E5%B9%B4%E7%9D%A1%E6%BB%A1%E4%BA%86%23) `214.0K 🔥` `NEW`
1. [刘浩存 你就是有天赋](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E4%BD%A0%E5%B0%B1%E6%98%AF%E6%9C%89%E5%A4%A9%E8%B5%8B%23) `207.5K 🔥` `NEW`
1. [网民造谣非洲猪瘟在本地传播被罚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A3%E9%9D%9E%E6%B4%B2%E7%8C%AA%E7%98%9F%E5%9C%A8%E6%9C%AC%E5%9C%B0%E4%BC%A0%E6%92%AD%E8%A2%AB%E7%BD%9A%23) `207.3K 🔥` `NEW`
1. [成何体统大结局](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E5%A4%A7%E7%BB%93%E5%B1%80%23) `205.3K 🔥` `NEW`
1. [i人的过年现状](https://s.weibo.com/weibo?q=%23i%E4%BA%BA%E7%9A%84%E8%BF%87%E5%B9%B4%E7%8E%B0%E7%8A%B6%23) `189.6K 🔥` `NEW`
1. [女子回应回娘家只需1秒钟](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E5%9B%9E%E5%A8%98%E5%AE%B6%E5%8F%AA%E9%9C%801%E7%A7%92%E9%92%9F%23) `120.2K 🔥` `NEW`
1. [飞驰人生3 爽片](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%20%E7%88%BD%E7%89%87%23) `117.6K 🔥` `NEW`
1. [体育AI过大年 (Sports AI celebrates Chinese New Year)](https://s.weibo.com/weibo?q=%23%E4%BD%93%E8%82%B2AI%E8%BF%87%E5%A4%A7%E5%B9%B4%23) `95.6K 🔥` `NEW`
1. [娜然与霍家父子同游意大利](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E7%84%B6%E4%B8%8E%E9%9C%8D%E5%AE%B6%E7%88%B6%E5%AD%90%E5%90%8C%E6%B8%B8%E6%84%8F%E5%A4%A7%E5%88%A9%23) `94.5K 🔥` `NEW`
1. [飞驰人生3票房或超50亿](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E7%A5%A8%E6%88%BF%E6%88%96%E8%B6%8550%E4%BA%BF%23) `94.4K 🔥` `NEW`
1. [朱一龙梦男](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E6%A2%A6%E7%94%B7%23) `89.4K 🔥` `NEW`
1. [大侦探11开播](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A211%E5%BC%80%E6%92%AD%23) `88.0K 🔥` `NEW`
1. [女生半年卖出800多只点翠大蟑螂](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8D%8A%E5%B9%B4%E5%8D%96%E5%87%BA800%E5%A4%9A%E5%8F%AA%E7%82%B9%E7%BF%A0%E5%A4%A7%E8%9F%91%E8%9E%82%23) `80.5K 🔥` `NEW`
1. [一部短剧凑齐七个男妲己](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%83%A8%E7%9F%AD%E5%89%A7%E5%87%91%E9%BD%90%E4%B8%83%E4%B8%AA%E7%94%B7%E5%A6%B2%E5%B7%B1%23) `76.4K 🔥` `NEW`
1. [南方过年vs北方过年](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E8%BF%87%E5%B9%B4vs%E5%8C%97%E6%96%B9%E8%BF%87%E5%B9%B4%23) `69.2K 🔥` `NEW`
1. [王一博易烊千玺春晚穿搭上榜最佳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%98%A5%E6%99%9A%E7%A9%BF%E6%90%AD%E4%B8%8A%E6%A6%9C%E6%9C%80%E4%BD%B3%23) `69.2K 🔥` `NEW`
1. [猫 你没有自己的家吗](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E4%BD%A0%E6%B2%A1%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E5%AE%B6%E5%90%97%23) `69.0K 🔥` `NEW`
1. [薛凯琪过年45了 (Fiona Sit turns 45 during the Chinese New Year)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%87%AF%E7%90%AA%E8%BF%87%E5%B9%B445%E4%BA%86%23) `69.0K 🔥` `NEW`
1. [电影惊蛰无声](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `68.9K 🔥` `NEW`
1. [李兰迪 没有顺拐](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%20%E6%B2%A1%E6%9C%89%E9%A1%BA%E6%8B%90%23) `68.7K 🔥` `NEW`
1. [给馒头抽真空](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%A6%92%E5%A4%B4%E6%8A%BD%E7%9C%9F%E7%A9%BA%23) `68.7K 🔥` `NEW`
1. [沈腾选王安宇演自己是搓子里拔大个](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E9%80%89%E7%8E%8B%E5%AE%89%E5%AE%87%E6%BC%94%E8%87%AA%E5%B7%B1%E6%98%AF%E6%90%93%E5%AD%90%E9%87%8C%E6%8B%94%E5%A4%A7%E4%B8%AA%23) `68.6K 🔥` `NEW`
1. [猫咪竟然会拉被子](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E7%AB%9F%E7%84%B6%E4%BC%9A%E6%8B%89%E8%A2%AB%E5%AD%90%23) `68.5K 🔥` `NEW`
1. [谷爱凌的黄金起跳角拿下近乎完美高分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%9A%84%E9%BB%84%E9%87%91%E8%B5%B7%E8%B7%B3%E8%A7%92%E6%8B%BF%E4%B8%8B%E8%BF%91%E4%B9%8E%E5%AE%8C%E7%BE%8E%E9%AB%98%E5%88%86%23) `67.8K 🔥` `NEW`
1. [余宇涵带粉丝上山了](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%AE%87%E6%B6%B5%E5%B8%A6%E7%B2%89%E4%B8%9D%E4%B8%8A%E5%B1%B1%E4%BA%86%23) `66.6K 🔥` `NEW`
1. [又长一岁也要元气满满](https://s.weibo.com/weibo?q=%23%E5%8F%88%E9%95%BF%E4%B8%80%E5%B2%81%E4%B9%9F%E8%A6%81%E5%85%83%E6%B0%94%E6%BB%A1%E6%BB%A1%23) `65.5K 🔥` `NEW`
1. [选择困难症最该有的饭搭子](https://s.weibo.com/weibo?q=%23%E9%80%89%E6%8B%A9%E5%9B%B0%E9%9A%BE%E7%97%87%E6%9C%80%E8%AF%A5%E6%9C%89%E7%9A%84%E9%A5%AD%E6%90%AD%E5%AD%90%23) `65.1K 🔥` `NEW`
1. [一大批年轻人独自出国旅行过年 (A large number of young people travel abroad alone to celebrate the New Year)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A7%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%8B%AC%E8%87%AA%E5%87%BA%E5%9B%BD%E6%97%85%E8%A1%8C%E8%BF%87%E5%B9%B4%23) `63.5K 🔥` `NEW`
1. [菲律宾海警在南海投放不明物体](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%B5%B7%E8%AD%A6%E5%9C%A8%E5%8D%97%E6%B5%B7%E6%8A%95%E6%94%BE%E4%B8%8D%E6%98%8E%E7%89%A9%E4%BD%93%23) `62.5K 🔥` `NEW`
1. [怀疑老家的床有魔](https://s.weibo.com/weibo?q=%23%E6%80%80%E7%96%91%E8%80%81%E5%AE%B6%E7%9A%84%E5%BA%8A%E6%9C%89%E9%AD%94%23) `61.9K 🔥` `NEW`
1. [镖人口碑](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E5%8F%A3%E7%A2%91%23) `1.1M 🔥` `+334%`
1. [大年初二不午睡](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%8C%E4%B8%8D%E5%8D%88%E7%9D%A1%23) `770.1K 🔥` `+378%`
1. [过年期间的胃](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E6%9C%9F%E9%97%B4%E7%9A%84%E8%83%83%23) `194.4K 🔥` `+154%`
1. [小主人给狗狗拜年曾落水被狗救上岸](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%B8%BB%E4%BA%BA%E7%BB%99%E7%8B%97%E7%8B%97%E6%8B%9C%E5%B9%B4%E6%9B%BE%E8%90%BD%E6%B0%B4%E8%A2%AB%E7%8B%97%E6%95%91%E4%B8%8A%E5%B2%B8%23) `69.2K 🔥`
1. [谷爱凌 顶级alpha](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%20%E9%A1%B6%E7%BA%A7alpha%23) `182.1K 🔥` `-27%`
1. [高市早苗内阁集体辞职 (Takaichi Sanae cabinet resigns en masse)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%86%85%E9%98%81%E9%9B%86%E4%BD%93%E8%BE%9E%E8%81%8C%23) `181.8K 🔥` `-25%`
1. [拉宏桑春晚后台探班 没有一秒不好笑](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%AE%8F%E6%A1%91%E6%98%A5%E6%99%9A%E5%90%8E%E5%8F%B0%E6%8E%A2%E7%8F%AD%20%E6%B2%A1%E6%9C%89%E4%B8%80%E7%A7%92%E4%B8%8D%E5%A5%BD%E7%AC%91%23) `178.6K 🔥` `-27%`
1. [大年初二不能做哪些事](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%8C%E4%B8%8D%E8%83%BD%E5%81%9A%E5%93%AA%E4%BA%9B%E4%BA%8B%23) `177.9K 🔥` `-28%`
1. [丞磊真的读了与妻书 (Cheng Lei really read the book with his wife)](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%9C%9F%E7%9A%84%E8%AF%BB%E4%BA%86%E4%B8%8E%E5%A6%BB%E4%B9%A6%23) `172.5K 🔥` `-69%`
1. [王楚然出圈镜头](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%87%BA%E5%9C%88%E9%95%9C%E5%A4%B4%23) `167.4K 🔥` `-24%`
1. [刘少昂林孝埈携手出战 (Liu Shaoang and Lin Xiaoqi join hands to fight)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E6%9E%97%E5%AD%9D%E5%9F%88%E6%90%BA%E6%89%8B%E5%87%BA%E6%88%98%23) `102.5K 🔥` `-57%`
1. [回老家后根本没有穿衣焦虑](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E8%80%81%E5%AE%B6%E5%90%8E%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E7%A9%BF%E8%A1%A3%E7%84%A6%E8%99%91%23) `98.4K 🔥` `-60%`
1. [女子楼道晾晒16斤咸肉撒手没](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%A5%BC%E9%81%93%E6%99%BE%E6%99%9216%E6%96%A4%E5%92%B8%E8%82%89%E6%92%92%E6%89%8B%E6%B2%A1%23) `93.4K 🔥` `-37%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `73.0K 🔥` `-35%`
1. [谷爱凌才是货真价实的夯爆了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%89%8D%E6%98%AF%E8%B4%A7%E7%9C%9F%E4%BB%B7%E5%AE%9E%E7%9A%84%E5%A4%AF%E7%88%86%E4%BA%86%23) `68.8K 🔥` `-92%`
1. [中国速滑男团0.09秒绝杀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%9F%E6%BB%91%E7%94%B7%E5%9B%A20.09%E7%A7%92%E7%BB%9D%E6%9D%80%23) `68.6K 🔥` `-57%`
1. [B站春晚 夯 (Station B Spring Festival Gala)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%A5%E6%99%9A%20%E5%A4%AF%23) `67.2K 🔥` `-69%`
1. [蓝溪镇完结](https://s.weibo.com/weibo?q=%23%E8%93%9D%E6%BA%AA%E9%95%87%E5%AE%8C%E7%BB%93%23) `60.7K 🔥` `-35%`

Updated at 2026-02-18 13:14:39

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
