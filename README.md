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

1. [离职当天遇车祸获赔16万误工费 (A car accident occurred on the day of resignation and she was compensated 160,000 yuan in lost wages.)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E5%BD%93%E5%A4%A9%E9%81%87%E8%BD%A6%E7%A5%B8%E8%8E%B7%E8%B5%9416%E4%B8%87%E8%AF%AF%E5%B7%A5%E8%B4%B9%23) `1.1M 🔥` `NEW`
1. [直播间买10盒蓝莓到手每盒不足5颗](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B9%B010%E7%9B%92%E8%93%9D%E8%8E%93%E5%88%B0%E6%89%8B%E6%AF%8F%E7%9B%92%E4%B8%8D%E8%B6%B35%E9%A2%97%23) `787.9K 🔥` `NEW`
1. [体验经济拓展春日消费新空间](https://s.weibo.com/weibo?q=%23%E4%BD%93%E9%AA%8C%E7%BB%8F%E6%B5%8E%E6%8B%93%E5%B1%95%E6%98%A5%E6%97%A5%E6%B6%88%E8%B4%B9%E6%96%B0%E7%A9%BA%E9%97%B4%23) `639.8K 🔥` `NEW`
1. [马斯克说这就是kimi](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%AF%B4%E8%BF%99%E5%B0%B1%E6%98%AFkimi%23) `164.3K 🔥` `NEW`
1. [中东土豪5分钟打赏团播100万](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%9C%9F%E8%B1%AA5%E5%88%86%E9%92%9F%E6%89%93%E8%B5%8F%E5%9B%A2%E6%92%AD100%E4%B8%87%23) `144.6K 🔥` `NEW`
1. [教培干久了连自己妈妈都找不到](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%9F%B9%E5%B9%B2%E4%B9%85%E4%BA%86%E8%BF%9E%E8%87%AA%E5%B7%B1%E5%A6%88%E5%A6%88%E9%83%BD%E6%89%BE%E4%B8%8D%E5%88%B0%23) `143.5K 🔥` `NEW`
1. [白玉兰 老带新](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%20%E8%80%81%E5%B8%A6%E6%96%B0%23) `136.1K 🔥` `NEW`
1. [张凌赫回应田曦薇在逐玉中的武力值](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E7%94%B0%E6%9B%A6%E8%96%87%E5%9C%A8%E9%80%90%E7%8E%89%E4%B8%AD%E7%9A%84%E6%AD%A6%E5%8A%9B%E5%80%BC%23) `135.6K 🔥` `NEW`
1. [Cursor副总裁向kimi道歉](https://s.weibo.com/weibo?q=%23Cursor%E5%89%AF%E6%80%BB%E8%A3%81%E5%90%91kimi%E9%81%93%E6%AD%89%23) `134.8K 🔥` `NEW`
1. [感觉迪丽热巴工作室换人了](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%8D%A2%E4%BA%BA%E4%BA%86%23) `131.8K 🔥` `NEW`
1. [曝章子怡为新戏增肥20斤 (It is revealed that Zhang Ziyi gained 20 pounds for new drama)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%AB%A0%E5%AD%90%E6%80%A1%E4%B8%BA%E6%96%B0%E6%88%8F%E5%A2%9E%E8%82%A520%E6%96%A4%23) `130.1K 🔥` `NEW`
1. [邓为孔雪儿 百妖谱](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E5%AD%94%E9%9B%AA%E5%84%BF%20%E7%99%BE%E5%A6%96%E8%B0%B1%23) `126.3K 🔥` `NEW`
1. [逐玉 反向入侵短剧](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%8F%8D%E5%90%91%E5%85%A5%E4%BE%B5%E7%9F%AD%E5%89%A7%23) `124.9K 🔥` `NEW`
1. [徐冬冬婚戒丢了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%E5%A9%9A%E6%88%92%E4%B8%A2%E4%BA%86%23) `123.5K 🔥` `NEW`
1. [金饰价一夜暴跌32元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E4%B8%80%E5%A4%9C%E6%9A%B4%E8%B7%8C32%E5%85%83%23) `109.1K 🔥` `NEW`
1. [盖娅传说 冷处理](https://s.weibo.com/weibo?q=%23%E7%9B%96%E5%A8%85%E4%BC%A0%E8%AF%B4%20%E5%86%B7%E5%A4%84%E7%90%86%23) `103.8K 🔥` `NEW`
1. [伊朗回应英方表态](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%9E%E5%BA%94%E8%8B%B1%E6%96%B9%E8%A1%A8%E6%80%81%23) `98.0K 🔥` `NEW`
1. [四川发现储量世界第二大轻稀土矿](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8F%91%E7%8E%B0%E5%82%A8%E9%87%8F%E4%B8%96%E7%95%8C%E7%AC%AC%E4%BA%8C%E5%A4%A7%E8%BD%BB%E7%A8%80%E5%9C%9F%E7%9F%BF%23) `94.9K 🔥` `NEW`
1. [22点和23点睡觉差距到底多大](https://s.weibo.com/weibo?q=%2322%E7%82%B9%E5%92%8C23%E7%82%B9%E7%9D%A1%E8%A7%89%E5%B7%AE%E8%B7%9D%E5%88%B0%E5%BA%95%E5%A4%9A%E5%A4%A7%23) `94.3K 🔥` `NEW`
1. [沦为AI素材杨紫尊严何在](https://s.weibo.com/weibo?q=%23%E6%B2%A6%E4%B8%BAAI%E7%B4%A0%E6%9D%90%E6%9D%A8%E7%B4%AB%E5%B0%8A%E4%B8%A5%E4%BD%95%E5%9C%A8%23) `94.2K 🔥` `NEW`
1. [戴燕妮自曝喜欢刘亦菲 (Dai Yanni revealed that she likes Liu Yifei)](https://s.weibo.com/weibo?q=%23%E6%88%B4%E7%87%95%E5%A6%AE%E8%87%AA%E6%9B%9D%E5%96%9C%E6%AC%A2%E5%88%98%E4%BA%A6%E8%8F%B2%23) `93.2K 🔥` `NEW`
1. [郝阿三想帮忙然后又手足无措](https://s.weibo.com/weibo?q=%23%E9%83%9D%E9%98%BF%E4%B8%89%E6%83%B3%E5%B8%AE%E5%BF%99%E7%84%B6%E5%90%8E%E5%8F%88%E6%89%8B%E8%B6%B3%E6%97%A0%E6%8E%AA%23) `83.6K 🔥` `NEW`
1. [整容后的夏子玉](https://s.weibo.com/weibo?q=%23%E6%95%B4%E5%AE%B9%E5%90%8E%E7%9A%84%E5%A4%8F%E5%AD%90%E7%8E%89%23) `82.9K 🔥` `NEW`
1. [美国男子回应撞脸爱泼斯坦](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E6%92%9E%E8%84%B8%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%23) `79.9K 🔥` `NEW`
1. [女子极端减肥体重不足40千克心脏骤停](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9E%81%E7%AB%AF%E5%87%8F%E8%82%A5%E4%BD%93%E9%87%8D%E4%B8%8D%E8%B6%B340%E5%8D%83%E5%85%8B%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%23) `79.1K 🔥` `NEW`
1. [高叶吐槽刘昊然文案](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E5%90%90%E6%A7%BD%E5%88%98%E6%98%8A%E7%84%B6%E6%96%87%E6%A1%88%23) `78.7K 🔥` `NEW`
1. [登陆少年演唱会官宣澳门](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%E6%BE%B3%E9%97%A8%23) `73.0K 🔥` `NEW`
1. [高市早苗支持者甩锅日本记者](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%94%AF%E6%8C%81%E8%80%85%E7%94%A9%E9%94%85%E6%97%A5%E6%9C%AC%E8%AE%B0%E8%80%85%23) `72.9K 🔥` `NEW`
1. [盒马菠菜spinach](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E8%8F%A0%E8%8F%9Cspinach%23) `72.8K 🔥` `NEW`
1. [现在才懂刘亦菲白秀珠的含金量](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%89%8D%E6%87%82%E5%88%98%E4%BA%A6%E8%8F%B2%E7%99%BD%E7%A7%80%E7%8F%A0%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `67.8K 🔥` `NEW`
1. [孔雪儿怎么媚成这样 (Why is Kong Xueer so charming?)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E6%80%8E%E4%B9%88%E5%AA%9A%E6%88%90%E8%BF%99%E6%A0%B7%23) `61.0K 🔥` `NEW`
1. [女子暴力剔牙十年陷入恶性循环](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%B4%E5%8A%9B%E5%89%94%E7%89%99%E5%8D%81%E5%B9%B4%E9%99%B7%E5%85%A5%E6%81%B6%E6%80%A7%E5%BE%AA%E7%8E%AF%23) `58.5K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `56.2K 🔥` `NEW`
1. [被盗柯基二次逃跑助5同伴回家](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%9B%97%E6%9F%AF%E5%9F%BA%E4%BA%8C%E6%AC%A1%E9%80%83%E8%B7%91%E5%8A%A95%E5%90%8C%E4%BC%B4%E5%9B%9E%E5%AE%B6%23) `54.2K 🔥` `NEW`
1. [东风日产NX8大大大五座SUV预售 (Dongfeng Nissan NX8 five-seater SUV pre-sale)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E6%97%A5%E4%BA%A7NX8%E5%A4%A7%E5%A4%A7%E5%A4%A7%E4%BA%94%E5%BA%A7SUV%E9%A2%84%E5%94%AE%23) `635.0K 🔥` `+1963%`
1. [掌掴幼儿事件孩子妈妈发声](https://s.weibo.com/weibo?q=%23%E6%8E%8C%E6%8E%B4%E5%B9%BC%E5%84%BF%E4%BA%8B%E4%BB%B6%E5%AD%A9%E5%AD%90%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `121.1K 🔥` `+25%`
1. [16岁迟迟不来月经才知是男儿身](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E8%BF%9F%E8%BF%9F%E4%B8%8D%E6%9D%A5%E6%9C%88%E7%BB%8F%E6%89%8D%E7%9F%A5%E6%98%AF%E7%94%B7%E5%84%BF%E8%BA%AB%23) `94.3K 🔥` `+54%`
1. [山姆回应所售鲜猪肉是数月前屠宰 (Sam responded that the fresh pork sold was slaughtered several months ago)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%9B%9E%E5%BA%94%E6%89%80%E5%94%AE%E9%B2%9C%E7%8C%AA%E8%82%89%E6%98%AF%E6%95%B0%E6%9C%88%E5%89%8D%E5%B1%A0%E5%AE%B0%23) `145.1K 🔥`
1. [官方通报月经弄脏卧铺事件详情](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%E8%AF%A6%E6%83%85%23) `133.0K 🔥`
1. [金饰价格再次大幅下跌 (Gold jewelery prices fall sharply again)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%86%8D%E6%AC%A1%E5%A4%A7%E5%B9%85%E4%B8%8B%E8%B7%8C%23) `127.8K 🔥`
1. [女子听信科学坐月子落下月子病](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%AC%E4%BF%A1%E7%A7%91%E5%AD%A6%E5%9D%90%E6%9C%88%E5%AD%90%E8%90%BD%E4%B8%8B%E6%9C%88%E5%AD%90%E7%97%85%23) `124.2K 🔥`
1. [王晶说有人愿花100万请舒淇吃饭](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%B6%E8%AF%B4%E6%9C%89%E4%BA%BA%E6%84%BF%E8%8A%B1100%E4%B8%87%E8%AF%B7%E8%88%92%E6%B7%87%E5%90%83%E9%A5%AD%23) `121.7K 🔥`
1. [迪丽热巴嫡长女待遇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AB%A1%E9%95%BF%E5%A5%B3%E5%BE%85%E9%81%87%23) `106.7K 🔥`
1. [月经弄脏卧铺涉事铁路段上架卫生巾 (Sanitary napkins are on sale on the railway section involved in the sleeper car incident involving menstrual stains)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E6%B6%89%E4%BA%8B%E9%93%81%E8%B7%AF%E6%AE%B5%E4%B8%8A%E6%9E%B6%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `94.0K 🔥`
1. [在泰射击场中弹中国游客女儿发声](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B3%B0%E5%B0%84%E5%87%BB%E5%9C%BA%E4%B8%AD%E5%BC%B9%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%A5%B3%E5%84%BF%E5%8F%91%E5%A3%B0%23) `128.7K 🔥` `-66%`
1. [章子怡脸咋了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E8%84%B8%E5%92%8B%E4%BA%86%23) `119.4K 🔥` `-72%`
1. [papi酱又给内娱指了条明路 (Papi Jiang once again pointed out a clear path for internal entertainment)](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%8F%88%E7%BB%99%E5%86%85%E5%A8%B1%E6%8C%87%E4%BA%86%E6%9D%A1%E6%98%8E%E8%B7%AF%23) `117.4K 🔥` `-21%`
1. [沙某编造传播涉科大讯飞网络谣言被拘 (Sha was arrested for fabricating and spreading online rumors involving iFlytek, the University of Science and Technology of China)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%9F%90%E7%BC%96%E9%80%A0%E4%BC%A0%E6%92%AD%E6%B6%89%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%E8%A2%AB%E6%8B%98%23) `104.1K 🔥` `-83%`
1. [伊朗最高领袖就伊朗新年发表贺词](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%B0%B1%E4%BC%8A%E6%9C%97%E6%96%B0%E5%B9%B4%E5%8F%91%E8%A1%A8%E8%B4%BA%E8%AF%8D%23) `83.6K 🔥` `-76%`
1. [伊朗问美国为何不敢让航母靠近 (Iran asks the U.S. why it doesn’t dare to let the aircraft carrier get closer)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%97%AE%E7%BE%8E%E5%9B%BD%E4%B8%BA%E4%BD%95%E4%B8%8D%E6%95%A2%E8%AE%A9%E8%88%AA%E6%AF%8D%E9%9D%A0%E8%BF%91%23) `61.4K 🔥` `-58%`

Updated at 2026-03-21 10:42:40

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
