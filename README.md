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

1. [官方通报西安赛格商场一男子坠楼 (Official reports that a man fell from the building in Xi'an SEG Mall)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E4%B8%80%E7%94%B7%E5%AD%90%E5%9D%A0%E6%A5%BC%23) `12.3M 🔥` `NEW`
1. [西安赛格商场正常营业](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E6%AD%A3%E5%B8%B8%E8%90%A5%E4%B8%9A%23) `2.1M 🔥` `NEW`
1. [用水墨动画致敬七一勋章获得者](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%B0%B4%E5%A2%A8%E5%8A%A8%E7%94%BB%E8%87%B4%E6%95%AC%E4%B8%83%E4%B8%80%E5%8B%8B%E7%AB%A0%E8%8E%B7%E5%BE%97%E8%80%85%23) `1.7M 🔥` `NEW`
1. [脱下长衫才发现打工有多爽](https://s.weibo.com/weibo?q=%23%E8%84%B1%E4%B8%8B%E9%95%BF%E8%A1%AB%E6%89%8D%E5%8F%91%E7%8E%B0%E6%89%93%E5%B7%A5%E6%9C%89%E5%A4%9A%E7%88%BD%23) `1.7M 🔥` `NEW`
1. [蒙脱石散止泻的原理 勾芡](https://s.weibo.com/weibo?q=%23%E8%92%99%E8%84%B1%E7%9F%B3%E6%95%A3%E6%AD%A2%E6%B3%BB%E7%9A%84%E5%8E%9F%E7%90%86%20%E5%8B%BE%E8%8A%A1%23) `826.2K 🔥` `NEW`
1. [男子飞踹妻子舞伴后发现对方是女子](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%A3%9E%E8%B8%B9%E5%A6%BB%E5%AD%90%E8%88%9E%E4%BC%B4%E5%90%8E%E5%8F%91%E7%8E%B0%E5%AF%B9%E6%96%B9%E6%98%AF%E5%A5%B3%E5%AD%90%23) `484.6K 🔥` `NEW`
1. [菲拉格慕全球品牌代言人张钧甯](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%8B%89%E6%A0%BC%E6%85%95%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%BC%A0%E9%92%A7%E7%94%AF%23) `467.5K 🔥` `NEW`
1. [西安坠楼商场25年营收破125亿](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E5%9D%A0%E6%A5%BC%E5%95%86%E5%9C%BA25%E5%B9%B4%E8%90%A5%E6%94%B6%E7%A0%B4125%E4%BA%BF%23) `456.1K 🔥` `NEW`
1. [杨洋最想买断版权的视频](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%9C%80%E6%83%B3%E4%B9%B0%E6%96%AD%E7%89%88%E6%9D%83%E7%9A%84%E8%A7%86%E9%A2%91%23) `424.4K 🔥` `NEW`
1. [安兔兔拒绝收录某设备跑分](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%85%94%E5%85%94%E6%8B%92%E7%BB%9D%E6%94%B6%E5%BD%95%E6%9F%90%E8%AE%BE%E5%A4%87%E8%B7%91%E5%88%86%23) `422.3K 🔥` `NEW`
1. [王玉雯取消赛格行程 (Wang Yuwen cancels SEG schedule)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%8F%96%E6%B6%88%E8%B5%9B%E6%A0%BC%E8%A1%8C%E7%A8%8B%23) `421.6K 🔥` `NEW`
1. [于正已经报警](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%B7%B2%E7%BB%8F%E6%8A%A5%E8%AD%A6%23) `417.7K 🔥` `NEW`
1. [世界杯16强已确定10席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF16%E5%BC%BA%E5%B7%B2%E7%A1%AE%E5%AE%9A10%E5%B8%AD%23) `414.3K 🔥` `NEW`
1. [一代人有一代人的僵尸肉](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E5%83%B5%E5%B0%B8%E8%82%89%23) `413.1K 🔥` `NEW`
1. [王俊凯露腰了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%9C%B2%E8%85%B0%E4%BA%86%23) `412.0K 🔥` `NEW`
1. [泰山景区道歉](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%E6%99%AF%E5%8C%BA%E9%81%93%E6%AD%89%23) `408.8K 🔥` `NEW`
1. [存储一哥暴跌](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E4%B8%80%E5%93%A5%E6%9A%B4%E8%B7%8C%23) `408.1K 🔥` `NEW`
1. [核载7人救护车硬塞13人被抓](https://s.weibo.com/weibo?q=%23%E6%A0%B8%E8%BD%BD7%E4%BA%BA%E6%95%91%E6%8A%A4%E8%BD%A6%E7%A1%AC%E5%A1%9E13%E4%BA%BA%E8%A2%AB%E6%8A%93%23) `405.3K 🔥` `NEW`
1. [光棍弟弟和丧偶哥哥因一套房要分家](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%A3%8D%E5%BC%9F%E5%BC%9F%E5%92%8C%E4%B8%A7%E5%81%B6%E5%93%A5%E5%93%A5%E5%9B%A0%E4%B8%80%E5%A5%97%E6%88%BF%E8%A6%81%E5%88%86%E5%AE%B6%23) `403.5K 🔥` `NEW`
1. [不要喝小孩喝过的水](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%96%9D%E5%B0%8F%E5%AD%A9%E5%96%9D%E8%BF%87%E7%9A%84%E6%B0%B4%23) `400.8K 🔥` `NEW`
1. [清华院系两届毕业照首排现同一孩童 (The same child appears in the front row of Tsinghua’s two graduation photos)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E9%99%A2%E7%B3%BB%E4%B8%A4%E5%B1%8A%E6%AF%95%E4%B8%9A%E7%85%A7%E9%A6%96%E6%8E%92%E7%8E%B0%E5%90%8C%E4%B8%80%E5%AD%A9%E7%AB%A5%23) `399.8K 🔥` `NEW`
1. [于正回应温水朱青蛙聊天记录](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E6%B8%A9%E6%B0%B4%E6%9C%B1%E9%9D%92%E8%9B%99%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `396.7K 🔥` `NEW`
1. [布瑞吉回应和解](https://s.weibo.com/weibo?q=%23%E5%B8%83%E7%91%9E%E5%90%89%E5%9B%9E%E5%BA%94%E5%92%8C%E8%A7%A3%23) `395.0K 🔥` `NEW`
1. [乌克兰 爆炸](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%20%E7%88%86%E7%82%B8%23) `394.5K 🔥` `NEW`
1. [陈小春Jasper共用一张脸](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5Jasper%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `392.1K 🔥` `NEW`
1. [华语乐坛歌手演唱会总场次排行](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%AF%AD%E4%B9%90%E5%9D%9B%E6%AD%8C%E6%89%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%80%BB%E5%9C%BA%E6%AC%A1%E6%8E%92%E8%A1%8C%23) `388.9K 🔥` `NEW`
1. [猫眼美甲已经到这种程度了吗](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9C%BC%E7%BE%8E%E7%94%B2%E5%B7%B2%E7%BB%8F%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%E5%90%97%23) `388.2K 🔥` `NEW`
1. [日本市民大排长龙买中国相机](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B8%82%E6%B0%91%E5%A4%A7%E6%8E%92%E9%95%BF%E9%BE%99%E4%B9%B0%E4%B8%AD%E5%9B%BD%E7%9B%B8%E6%9C%BA%23) `385.5K 🔥` `NEW`
1. [喜单3官宣爆演员两副面孔](https://s.weibo.com/weibo?q=%23%E5%96%9C%E5%8D%953%E5%AE%98%E5%AE%A3%E7%88%86%E6%BC%94%E5%91%98%E4%B8%A4%E5%89%AF%E9%9D%A2%E5%AD%94%23) `384.2K 🔥` `NEW`
1. [恋爱找男朋友真的要找个大方的](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1%E6%89%BE%E7%94%B7%E6%9C%8B%E5%8F%8B%E7%9C%9F%E7%9A%84%E8%A6%81%E6%89%BE%E4%B8%AA%E5%A4%A7%E6%96%B9%E7%9A%84%23) `382.9K 🔥` `NEW`
1. [存储芯片涨价 (Memory chip prices rise)](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E6%B6%A8%E4%BB%B7%23) `380.5K 🔥` `NEW`
1. [人怎么能说出这么通透的话](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E8%AF%B4%E5%87%BA%E8%BF%99%E4%B9%88%E9%80%9A%E9%80%8F%E7%9A%84%E8%AF%9D%23) `377.3K 🔥` `NEW`
1. [上海八旬老人去世遗产全给外甥女](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%85%AB%E6%97%AC%E8%80%81%E4%BA%BA%E5%8E%BB%E4%B8%96%E9%81%97%E4%BA%A7%E5%85%A8%E7%BB%99%E5%A4%96%E7%94%A5%E5%A5%B3%23) `375.7K 🔥` `NEW`
1. [一天攒一块到退休](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A9%E6%94%92%E4%B8%80%E5%9D%97%E5%88%B0%E9%80%80%E4%BC%91%23) `374.6K 🔥` `NEW`
1. [雁塔区通报赛格坠楼事件调查处置情况](https://s.weibo.com/weibo?q=%23%E9%9B%81%E5%A1%94%E5%8C%BA%E9%80%9A%E6%8A%A5%E8%B5%9B%E6%A0%BC%E5%9D%A0%E6%A5%BC%E4%BA%8B%E4%BB%B6%E8%B0%83%E6%9F%A5%E5%A4%84%E7%BD%AE%E6%83%85%E5%86%B5%23) `372.8K 🔥` `NEW`
1. [身份证里有八根半永久头发](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E9%87%8C%E6%9C%89%E5%85%AB%E6%A0%B9%E5%8D%8A%E6%B0%B8%E4%B9%85%E5%A4%B4%E5%8F%91%23) `370.6K 🔥` `NEW`
1. [原来是小石潭记真的是写实派](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%AF%E5%B0%8F%E7%9F%B3%E6%BD%AD%E8%AE%B0%E7%9C%9F%E7%9A%84%E6%98%AF%E5%86%99%E5%AE%9E%E6%B4%BE%23) `367.4K 🔥` `NEW`
1. [邹明轩瘦成V字脸](https://s.weibo.com/weibo?q=%23%E9%82%B9%E6%98%8E%E8%BD%A9%E7%98%A6%E6%88%90V%E5%AD%97%E8%84%B8%23) `364.9K 🔥` `NEW`
1. [机票燃油费下调](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E7%87%83%E6%B2%B9%E8%B4%B9%E4%B8%8B%E8%B0%83%23) `361.9K 🔥` `NEW`
1. [郭富城方媛俩女儿身高](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E6%96%B9%E5%AA%9B%E4%BF%A9%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98%23) `360.4K 🔥` `NEW`
1. [佛得角总统称能1比0淘汰阿根廷队 (President of Cape Verde says he can defeat Argentina 1-0)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%80%BB%E7%BB%9F%E7%A7%B0%E8%83%BD1%E6%AF%940%E6%B7%98%E6%B1%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%23) `359.5K 🔥` `NEW`
1. [24岁本科生抱儿子参加毕业礼](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E6%9C%AC%E7%A7%91%E7%94%9F%E6%8A%B1%E5%84%BF%E5%AD%90%E5%8F%82%E5%8A%A0%E6%AF%95%E4%B8%9A%E7%A4%BC%23) `356.7K 🔥` `NEW`
1. [丁程鑫和粉丝报备康复进度](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%92%8C%E7%B2%89%E4%B8%9D%E6%8A%A5%E5%A4%87%E5%BA%B7%E5%A4%8D%E8%BF%9B%E5%BA%A6%23) `355.4K 🔥` `NEW`
1. [因杨紫白玉兰女主去看生命树](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%B3%E4%B8%BB%E5%8E%BB%E7%9C%8B%E7%94%9F%E5%91%BD%E6%A0%91%23) `352.7K 🔥` `NEW`
1. [塞内加尔也内讧了](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%E4%B9%9F%E5%86%85%E8%AE%A7%E4%BA%86%23) `350.8K 🔥` `NEW`
1. [徐志胜劝贺峻霖不要挑战孟子义](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%8A%9D%E8%B4%BA%E5%B3%BB%E9%9C%96%E4%B8%8D%E8%A6%81%E6%8C%91%E6%88%98%E5%AD%9F%E5%AD%90%E4%B9%89%23) `349.6K 🔥` `NEW`
1. [白鹿杨紫丁禹兮影响力前三](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%A8%E7%B4%AB%E4%B8%81%E7%A6%B9%E5%85%AE%E5%BD%B1%E5%93%8D%E5%8A%9B%E5%89%8D%E4%B8%89%23) `346.4K 🔥` `NEW`
1. [建议酒店24小时退房制全国推广](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%85%92%E5%BA%9724%E5%B0%8F%E6%97%B6%E9%80%80%E6%88%BF%E5%88%B6%E5%85%A8%E5%9B%BD%E6%8E%A8%E5%B9%BF%23) `344.5K 🔥` `NEW`
1. [网友称白鹿打戏疑为替身](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E7%99%BD%E9%B9%BF%E6%89%93%E6%88%8F%E7%96%91%E4%B8%BA%E6%9B%BF%E8%BA%AB%23) `425.7K 🔥`
1. [姑姑亲了一口宝宝差点都会说话了](https://s.weibo.com/weibo?q=%23%E5%A7%91%E5%A7%91%E4%BA%B2%E4%BA%86%E4%B8%80%E5%8F%A3%E5%AE%9D%E5%AE%9D%E5%B7%AE%E7%82%B9%E9%83%BD%E4%BC%9A%E8%AF%B4%E8%AF%9D%E4%BA%86%23) `419.5K 🔥`
1. [黄多多腕线过裆 (Huang Duoduo's wrist line passes through the crotch)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E8%85%95%E7%BA%BF%E8%BF%87%E8%A3%86%23) `368.3K 🔥`

Updated at 2026-07-02 13:50:42

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
