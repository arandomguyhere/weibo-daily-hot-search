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

1. [主角的本质 (The nature of the protagonist)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E7%9A%84%E6%9C%AC%E8%B4%A8%23) `22.3K 🔥` `NEW`
1. [今天才知道潮汕不是一座城市 (Only today did I know that Chaoshan is not a city)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%89%8D%E7%9F%A5%E9%81%93%E6%BD%AE%E6%B1%95%E4%B8%8D%E6%98%AF%E4%B8%80%E5%BA%A7%E5%9F%8E%E5%B8%82%23) `249.9K 🔥` `+349%`
1. [原价899的耐克降至429消费者仍不买账](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E4%BB%B7899%E7%9A%84%E8%80%90%E5%85%8B%E9%99%8D%E8%87%B3429%E6%B6%88%E8%B4%B9%E8%80%85%E4%BB%8D%E4%B8%8D%E4%B9%B0%E8%B4%A6%23) `180.4K 🔥` `+190%`
1. [高考前这些事要再捋一遍 (I need to go through these things again before the college entrance examination.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%89%8D%E8%BF%99%E4%BA%9B%E4%BA%8B%E8%A6%81%E5%86%8D%E6%8D%8B%E4%B8%80%E9%81%8D%23) `145.7K 🔥` `+240%`
1. [全新奔驰纯电GLC](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%A5%94%E9%A9%B0%E7%BA%AF%E7%94%B5GLC%23) `141.6K 🔥` `+230%`
1. [开到荼靡 彭冠英](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E9%9D%A1%20%E5%BD%AD%E5%86%A0%E8%8B%B1%23) `76.7K 🔥` `+264%`
1. [当我用拼豆拼了一整套麻将 (When I used spelling beans to play a whole set of mahjong)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E7%94%A8%E6%8B%BC%E8%B1%86%E6%8B%BC%E4%BA%86%E4%B8%80%E6%95%B4%E5%A5%97%E9%BA%BB%E5%B0%86%23) `67.4K 🔥` `+57%`
1. [连扫把都受不了广东的天气了](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E6%89%AB%E6%8A%8A%E9%83%BD%E5%8F%97%E4%B8%8D%E4%BA%86%E5%B9%BF%E4%B8%9C%E7%9A%84%E5%A4%A9%E6%B0%94%E4%BA%86%23) `66.6K 🔥` `+110%`
1. [江语晨来浪姐胖了12斤](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E6%9D%A5%E6%B5%AA%E5%A7%90%E8%83%96%E4%BA%8612%E6%96%A4%23) `50.2K 🔥` `+62%`
1. [好怕现实中也有人长AI这样](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%80%95%E7%8E%B0%E5%AE%9E%E4%B8%AD%E4%B9%9F%E6%9C%89%E4%BA%BA%E9%95%BFAI%E8%BF%99%E6%A0%B7%23) `39.3K 🔥` `+27%`
1. [耐克正在被消费者抛弃](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E6%AD%A3%E5%9C%A8%E8%A2%AB%E6%B6%88%E8%B4%B9%E8%80%85%E6%8A%9B%E5%BC%83%23) `39.0K 🔥` `+26%`
1. [男子AI写歌月收入十几万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90AI%E5%86%99%E6%AD%8C%E6%9C%88%E6%94%B6%E5%85%A5%E5%8D%81%E5%87%A0%E4%B8%87%23) `38.9K 🔥` `+26%`
1. [小孩姐用碘伏吹风机演示指纹可视化](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%A7%90%E7%94%A8%E7%A2%98%E4%BC%8F%E5%90%B9%E9%A3%8E%E6%9C%BA%E6%BC%94%E7%A4%BA%E6%8C%87%E7%BA%B9%E5%8F%AF%E8%A7%86%E5%8C%96%23) `38.5K 🔥` `+77%`
1. [宋祖儿路透长得像p了半小时的 (Song Zuer Reuters looks like the person who p-ed for half an hour)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E8%B7%AF%E9%80%8F%E9%95%BF%E5%BE%97%E5%83%8Fp%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E7%9A%84%23) `37.8K 🔥` `+67%`
1. [北京体育大学 恭迎龙王回归](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%BD%93%E8%82%B2%E5%A4%A7%E5%AD%A6%20%E6%81%AD%E8%BF%8E%E9%BE%99%E7%8E%8B%E5%9B%9E%E5%BD%92%23) `37.4K 🔥` `+86%`
1. [中方回应2名日本人处理日遗化武受伤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%942%E5%90%8D%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%A4%84%E7%90%86%E6%97%A5%E9%81%97%E5%8C%96%E6%AD%A6%E5%8F%97%E4%BC%A4%23) `37.3K 🔥` `+78%`
1. [金饰价格每克降约两成](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E6%AF%8F%E5%85%8B%E9%99%8D%E7%BA%A6%E4%B8%A4%E6%88%90%23) `37.1K 🔥` `+96%`
1. [原来燃气灶一直用错了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%87%83%E6%B0%94%E7%81%B6%E4%B8%80%E7%9B%B4%E7%94%A8%E9%94%99%E4%BA%86%23) `36.1K 🔥` `+58%`
1. [iPhone改日期 空出20G](https://s.weibo.com/weibo?q=%23iPhone%E6%94%B9%E6%97%A5%E6%9C%9F%20%E7%A9%BA%E5%87%BA20G%23) `36.1K 🔥` `+62%`
1. [第7号台风要来了](https://s.weibo.com/weibo?q=%23%E7%AC%AC7%E5%8F%B7%E5%8F%B0%E9%A3%8E%E8%A6%81%E6%9D%A5%E4%BA%86%23) `35.6K 🔥` `+24%`
1. [男子被姐夫训斥起杀心儿子夺刀制止](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%A7%90%E5%A4%AB%E8%AE%AD%E6%96%A5%E8%B5%B7%E6%9D%80%E5%BF%83%E5%84%BF%E5%AD%90%E5%A4%BA%E5%88%80%E5%88%B6%E6%AD%A2%23) `30.7K 🔥` `+34%`
1. [日本扬言以综合国力应对中国军力](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%89%AC%E8%A8%80%E4%BB%A5%E7%BB%BC%E5%90%88%E5%9B%BD%E5%8A%9B%E5%BA%94%E5%AF%B9%E4%B8%AD%E5%9B%BD%E5%86%9B%E5%8A%9B%23) `29.4K 🔥` `+24%`
1. [小米寻天汽车最新谍照曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AF%BB%E5%A4%A9%E6%B1%BD%E8%BD%A6%E6%9C%80%E6%96%B0%E8%B0%8D%E7%85%A7%E6%9B%9D%E5%85%89%23) `26.4K 🔥` `+29%`
1. [每夜憋醒三四次男子不敢睡觉怕猝死 (A man who wakes up three or four times a night is afraid to sleep for fear of sudden death)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%9C%E6%86%8B%E9%86%92%E4%B8%89%E5%9B%9B%E6%AC%A1%E7%94%B7%E5%AD%90%E4%B8%8D%E6%95%A2%E7%9D%A1%E8%A7%89%E6%80%95%E7%8C%9D%E6%AD%BB%23) `26.1K 🔥` `+38%`
1. [胖东来将安装2000万元室外音响](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%86%E5%AE%89%E8%A3%852000%E4%B8%87%E5%85%83%E5%AE%A4%E5%A4%96%E9%9F%B3%E5%93%8D%23) `23.9K 🔥` `+26%`
1. [用热成像偷拍小猫上厕所](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%83%AD%E6%88%90%E5%83%8F%E5%81%B7%E6%8B%8D%E5%B0%8F%E7%8C%AB%E4%B8%8A%E5%8E%95%E6%89%80%23) `44.7K 🔥`
1. [Bin被罚15万 (Bin was fined 150,000)](https://s.weibo.com/weibo?q=%23Bin%E8%A2%AB%E7%BD%9A15%E4%B8%87%23) `40.7K 🔥`
1. [原来面条坨了也有邪修](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%9D%A2%E6%9D%A1%E5%9D%A8%E4%BA%86%E4%B9%9F%E6%9C%89%E9%82%AA%E4%BF%AE%23) `39.5K 🔥`
1. [窦靖童妹妹头](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%A6%B9%E5%A6%B9%E5%A4%B4%23) `38.1K 🔥`
1. [触发了高考祝福的底层代码](https://s.weibo.com/weibo?q=%23%E8%A7%A6%E5%8F%91%E4%BA%86%E9%AB%98%E8%80%83%E7%A5%9D%E7%A6%8F%E7%9A%84%E5%BA%95%E5%B1%82%E4%BB%A3%E7%A0%81%23) `25.0K 🔥`
1. [LPL发布BLG和Bin的处罚公告 (LPL issues penalty announcement for BLG and Bin)](https://s.weibo.com/weibo?q=%23LPL%E5%8F%91%E5%B8%83BLG%E5%92%8CBin%E7%9A%84%E5%A4%84%E7%BD%9A%E5%85%AC%E5%91%8A%23) `22.4K 🔥`
1. [最爱的漫画家住我楼上](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%88%B1%E7%9A%84%E6%BC%AB%E7%94%BB%E5%AE%B6%E4%BD%8F%E6%88%91%E6%A5%BC%E4%B8%8A%23) `22.2K 🔥`
1. [交警回应摩托车狂飙与高铁并驾齐驱 (Traffic police respond to motorcycles racing alongside high-speed trains)](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E6%91%A9%E6%89%98%E8%BD%A6%E7%8B%82%E9%A3%99%E4%B8%8E%E9%AB%98%E9%93%81%E5%B9%B6%E9%A9%BE%E9%BD%90%E9%A9%B1%23) `22.2K 🔥`
1. [上海泳渡赛隐私照遭泄露警方已立案](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%B3%B3%E6%B8%A1%E8%B5%9B%E9%9A%90%E7%A7%81%E7%85%A7%E9%81%AD%E6%B3%84%E9%9C%B2%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%AB%8B%E6%A1%88%23) `22.0K 🔥`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `21.5K 🔥`
1. [豉汁蒸肉片](https://s.weibo.com/weibo?q=%23%E8%B1%89%E6%B1%81%E8%92%B8%E8%82%89%E7%89%87%23) `20.8K 🔥`
1. [曝Bin对自己行为非常后悔 (It was revealed that Bin regretted his actions very much)](https://s.weibo.com/weibo?q=%23%E6%9B%9DBin%E5%AF%B9%E8%87%AA%E5%B7%B1%E8%A1%8C%E4%B8%BA%E9%9D%9E%E5%B8%B8%E5%90%8E%E6%82%94%23) `20.7K 🔥`
1. [塞尔维亚FMP绝杀中国男篮](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%B0%94%E7%BB%B4%E4%BA%9AFMP%E7%BB%9D%E6%9D%80%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%23) `19.9K 🔥`
1. [太阳爆发一次强烈耀斑](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E9%98%B3%E7%88%86%E5%8F%91%E4%B8%80%E6%AC%A1%E5%BC%BA%E7%83%88%E8%80%80%E6%96%91%23) `19.7K 🔥`
1. [刘萧旭郭宇欣逛超市路透 (Liu Xiaoxu and Guo Yuxin visit the supermarket Reuters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%90%A7%E6%97%AD%E9%83%AD%E5%AE%87%E6%AC%A3%E9%80%9B%E8%B6%85%E5%B8%82%E8%B7%AF%E9%80%8F%23) `19.4K 🔥`
1. [灵魂摆渡 (soul ferry)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%23) `18.8K 🔥`
1. [我没有刚工作时那么善良了](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%B2%A1%E6%9C%89%E5%88%9A%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%82%A3%E4%B9%88%E5%96%84%E8%89%AF%E4%BA%86%23) `17.6K 🔥`
1. [白鹿何与或演开到荼靡](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BD%95%E4%B8%8E%E6%88%96%E6%BC%94%E5%BC%80%E5%88%B0%E8%8D%BC%E9%9D%A1%23) `17.3K 🔥`
1. [叶一茜听海把森碟唱哭了](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E5%90%AC%E6%B5%B7%E6%8A%8A%E6%A3%AE%E7%A2%9F%E5%94%B1%E5%93%AD%E4%BA%86%23) `17.3K 🔥`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `17.3K 🔥`
1. [黄灿灿直播说她四公只有团秀一个舞台](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%9B%B4%E6%92%AD%E8%AF%B4%E5%A5%B9%E5%9B%9B%E5%85%AC%E5%8F%AA%E6%9C%89%E5%9B%A2%E7%A7%80%E4%B8%80%E4%B8%AA%E8%88%9E%E5%8F%B0%23) `17.3K 🔥`
1. [大妈被柿子砸中额头伤口3年没愈合 (The aunt was hit on the forehead by a persimmon and the wound did not heal for 3 years.)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E8%A2%AB%E6%9F%BF%E5%AD%90%E7%A0%B8%E4%B8%AD%E9%A2%9D%E5%A4%B4%E4%BC%A4%E5%8F%A33%E5%B9%B4%E6%B2%A1%E6%84%88%E5%90%88%23) `36.6K 🔥` `-63%`
1. [黄灿灿唐艺昕 雪人 (Huang Cancan Tang Yixin Snowman)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%94%90%E8%89%BA%E6%98%95%20%E9%9B%AA%E4%BA%BA%23) `18.4K 🔥` `-35%`
1. [神仙肉 侯明昊](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%20%E4%BE%AF%E6%98%8E%E6%98%8A%23) `17.5K 🔥` `-25%`
1. [科威特国际机场遭袭瞬间曝光 (The attack on Kuwait International Airport was instantly exposed)](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%A8%81%E7%89%B9%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA%E9%81%AD%E8%A2%AD%E7%9E%AC%E9%97%B4%E6%9B%9D%E5%85%89%23) `17.3K 🔥` `-83%`
1. [中国女排3比2泰国女排 (Chinese women's volleyball team 3 to 2 Thai women's volleyball team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%942%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `17.3K 🔥` `-83%`

Updated at 2026-06-05 05:57:16

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
