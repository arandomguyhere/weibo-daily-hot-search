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

1. [突围2双人舞台选曲顺序 (Breakout 2 duo stage song selection order)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E5%9B%B42%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%E9%80%89%E6%9B%B2%E9%A1%BA%E5%BA%8F%23) `1.1M 🔥` `NEW`
1. [这就是中式红色浪漫](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%B8%AD%E5%BC%8F%E7%BA%A2%E8%89%B2%E6%B5%AA%E6%BC%AB%23) `789.3K 🔥` `NEW`
1. [低智商犯罪 哥嫂](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%20%E5%93%A5%E5%AB%82%23) `789.3K 🔥` `NEW`
1. [什么是文科能力](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E6%96%87%E7%A7%91%E8%83%BD%E5%8A%9B%23) `789.3K 🔥` `NEW`
1. [6组数据看我国引资韧性持续显现](https://s.weibo.com/weibo?q=%236%E7%BB%84%E6%95%B0%E6%8D%AE%E7%9C%8B%E6%88%91%E5%9B%BD%E5%BC%95%E8%B5%84%E9%9F%A7%E6%80%A7%E6%8C%81%E7%BB%AD%E6%98%BE%E7%8E%B0%23) `789.3K 🔥` `NEW`
1. [人形机器人](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `789.3K 🔥` `NEW`
1. [法国队疑似出现内讧](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E7%96%91%E4%BC%BC%E5%87%BA%E7%8E%B0%E5%86%85%E8%AE%A7%23) `789.3K 🔥` `NEW`
1. [真实的乡镇公务员是这样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%AE%9E%E7%9A%84%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `757.8K 🔥` `NEW`
1. [小公司硕士不招](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%85%AC%E5%8F%B8%E7%A1%95%E5%A3%AB%E4%B8%8D%E6%8B%9B%23) `632.2K 🔥` `NEW`
1. [李金铭现身](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E7%8E%B0%E8%BA%AB%23) `529.2K 🔥` `NEW`
1. [AI漫剧 好看 (AI comic drama is good to watch)](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%20%E5%A5%BD%E7%9C%8B%23) `485.1K 🔥` `NEW`
1. [虞书欣给剧本包书皮](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%BB%99%E5%89%A7%E6%9C%AC%E5%8C%85%E4%B9%A6%E7%9A%AE%23) `467.2K 🔥` `NEW`
1. [哈兰德每天摄入6000卡热量](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%AF%8F%E5%A4%A9%E6%91%84%E5%85%A56000%E5%8D%A1%E7%83%AD%E9%87%8F%23) `461.2K 🔥` `NEW`
1. [日本修法断了女天皇的路](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BF%AE%E6%B3%95%E6%96%AD%E4%BA%86%E5%A5%B3%E5%A4%A9%E7%9A%87%E7%9A%84%E8%B7%AF%23) `459.6K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `459.5K 🔥` `NEW`
1. [丁程鑫手怎么了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%89%8B%E6%80%8E%E4%B9%88%E4%BA%86%23) `457.5K 🔥` `NEW`
1. [迪丽热巴VOGUE拍好了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4VOGUE%E6%8B%8D%E5%A5%BD%E4%BA%86%23) `405.1K 🔥` `NEW`
1. [吴柳芳还清40万外债后首开带货直播](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%9F%B3%E8%8A%B3%E8%BF%98%E6%B8%8540%E4%B8%87%E5%A4%96%E5%80%BA%E5%90%8E%E9%A6%96%E5%BC%80%E5%B8%A6%E8%B4%A7%E7%9B%B4%E6%92%AD%23) `310.9K 🔥` `NEW`
1. [王俊凯发了31个问号](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%91%E4%BA%8631%E4%B8%AA%E9%97%AE%E5%8F%B7%23) `294.5K 🔥` `NEW`
1. [今年我国首个台风来了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%88%91%E5%9B%BD%E9%A6%96%E4%B8%AA%E5%8F%B0%E9%A3%8E%E6%9D%A5%E4%BA%86%23) `287.3K 🔥` `NEW`
1. [恋与深空问题从来不在敖尹角色本身 (The problem of love and deep space has never been about Ao Yin’s character itself)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%97%AE%E9%A2%98%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%9C%A8%E6%95%96%E5%B0%B9%E8%A7%92%E8%89%B2%E6%9C%AC%E8%BA%AB%23) `277.0K 🔥` `NEW`
1. [德国队在瓢泼大雨中回到慕尼黑](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%98%9F%E5%9C%A8%E7%93%A2%E6%B3%BC%E5%A4%A7%E9%9B%A8%E4%B8%AD%E5%9B%9E%E5%88%B0%E6%85%95%E5%B0%BC%E9%BB%91%23) `271.9K 🔥` `NEW`
1. [人工智能冲击婚纱影楼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%86%B2%E5%87%BB%E5%A9%9A%E7%BA%B1%E5%BD%B1%E6%A5%BC%23) `264.4K 🔥` `NEW`
1. [零度玫瑰 恋与深空](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E5%BA%A6%E7%8E%AB%E7%91%B0%20%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `261.3K 🔥` `NEW`
1. [任权薛小婉要结婚了](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%9D%83%E8%96%9B%E5%B0%8F%E5%A9%89%E8%A6%81%E7%BB%93%E5%A9%9A%E4%BA%86%23) `260.8K 🔥` `NEW`
1. [儿子嫌饭难吃扬言杀全家被父砍伤](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%AB%8C%E9%A5%AD%E9%9A%BE%E5%90%83%E6%89%AC%E8%A8%80%E6%9D%80%E5%85%A8%E5%AE%B6%E8%A2%AB%E7%88%B6%E7%A0%8D%E4%BC%A4%23) `259.9K 🔥` `NEW`
1. [张函瑞缅因猫塑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E7%BC%85%E5%9B%A0%E7%8C%AB%E5%A1%91%23) `224.1K 🔥` `NEW`
1. [孔雪儿刘雨昕自拍](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%88%98%E9%9B%A8%E6%98%95%E8%87%AA%E6%8B%8D%23) `221.0K 🔥` `NEW`
1. [刘宇宁6月行程也太满了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%816%E6%9C%88%E8%A1%8C%E7%A8%8B%E4%B9%9F%E5%A4%AA%E6%BB%A1%E4%BA%86%23) `219.0K 🔥` `NEW`
1. [叠纸游戏陷入信任危机](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E6%B8%B8%E6%88%8F%E9%99%B7%E5%85%A5%E4%BF%A1%E4%BB%BB%E5%8D%B1%E6%9C%BA%23) `203.5K 🔥` `NEW`
1. [曝小米18将先发Pro后发标准版 (It is revealed that Xiaomi Mi 18 will release the Pro version first and then the standard version)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E7%B1%B318%E5%B0%86%E5%85%88%E5%8F%91Pro%E5%90%8E%E5%8F%91%E6%A0%87%E5%87%86%E7%89%88%23) `166.3K 🔥` `NEW`
1. [檀健次年上演出了年下的感觉](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%B9%B4%E4%B8%8A%E6%BC%94%E5%87%BA%E4%BA%86%E5%B9%B4%E4%B8%8B%E7%9A%84%E6%84%9F%E8%A7%89%23) `163.8K 🔥` `NEW`
1. [女子高铁站内抢砸工作人员对讲机](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E7%AB%99%E5%86%85%E6%8A%A2%E7%A0%B8%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%AF%B9%E8%AE%B2%E6%9C%BA%23) `159.5K 🔥` `NEW`
1. [绿源电动车 擦边](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E6%BA%90%E7%94%B5%E5%8A%A8%E8%BD%A6%20%E6%93%A6%E8%BE%B9%23) `789.4K 🔥` `+144%`
1. [小猫居然分得清睡衣和出门衣服](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%B1%85%E7%84%B6%E5%88%86%E5%BE%97%E6%B8%85%E7%9D%A1%E8%A1%A3%E5%92%8C%E5%87%BA%E9%97%A8%E8%A1%A3%E6%9C%8D%23) `789.3K 🔥` `+223%`
1. [A股交易新规7月6日起施行](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%A4%E6%98%93%E6%96%B0%E8%A7%847%E6%9C%886%E6%97%A5%E8%B5%B7%E6%96%BD%E8%A1%8C%23) `789.3K 🔥` `+129%`
1. [田曦薇低智商犯罪庆功宴合照](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%90%88%E7%85%A7%23) `789.3K 🔥` `+201%`
1. [小米高层重大调整](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E5%B1%82%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `789.3K 🔥` `+150%`
1. [丁禹兮 姜珮瑶](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E5%A7%9C%E7%8F%AE%E7%91%B6%23) `748.2K 🔥` `+118%`
1. [卢昱晓 上镜淡颜线下浓颜](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%20%E4%B8%8A%E9%95%9C%E6%B7%A1%E9%A2%9C%E7%BA%BF%E4%B8%8B%E6%B5%93%E9%A2%9C%23) `465.1K 🔥` `+42%`
1. [哈兰德绝杀惊动挪威测震仪 (Haaland's killer strike shocked Norway's seismometer)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%BB%9D%E6%9D%80%E6%83%8A%E5%8A%A8%E6%8C%AA%E5%A8%81%E6%B5%8B%E9%9C%87%E4%BB%AA%23) `458.7K 🔥` `+123%`
1. [韩雨彤否认与曾辉领证](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%E5%90%A6%E8%AE%A4%E4%B8%8E%E6%9B%BE%E8%BE%89%E9%A2%86%E8%AF%81%23) `303.6K 🔥`
1. [大姐吃14天控糖餐腰围瘦13厘米](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A7%90%E5%90%8314%E5%A4%A9%E6%8E%A7%E7%B3%96%E9%A4%90%E8%85%B0%E5%9B%B4%E7%98%A613%E5%8E%98%E7%B1%B3%23) `262.5K 🔥`
1. [福建天雷劈庙](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E5%A4%A9%E9%9B%B7%E5%8A%88%E5%BA%99%23) `219.5K 🔥`
1. [iPhone18Pro还有银灰浅蓝配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%BF%98%E6%9C%89%E9%93%B6%E7%81%B0%E6%B5%85%E8%93%9D%E9%85%8D%E8%89%B2%23) `161.8K 🔥`
1. [公积金 结息](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%20%E7%BB%93%E6%81%AF%23) `289.0K 🔥` `-27%`
1. [虞书欣都瘦出脚脖子了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%83%BD%E7%98%A6%E5%87%BA%E8%84%9A%E8%84%96%E5%AD%90%E4%BA%86%23) `256.5K 🔥` `-24%`
1. [跟没上过班的人沟通真的好累](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E6%B2%A1%E4%B8%8A%E8%BF%87%E7%8F%AD%E7%9A%84%E4%BA%BA%E6%B2%9F%E9%80%9A%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%B4%AF%23) `228.3K 🔥` `-33%`
1. [AI漫剧 降维打击](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%20%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB%23) `191.4K 🔥` `-51%`
1. [内娱年度最差编剧](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%B9%B4%E5%BA%A6%E6%9C%80%E5%B7%AE%E7%BC%96%E5%89%A7%23) `169.0K 🔥` `-49%`

Updated at 2026-07-01 22:31:59

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
