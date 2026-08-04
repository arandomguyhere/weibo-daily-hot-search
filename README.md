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

1. [维也纳国际酒店客房遍布吸饱血的床虱 (Vienna International Hotel rooms infested with blood-sucking bed bugs)](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E4%B9%9F%E7%BA%B3%E5%9B%BD%E9%99%85%E9%85%92%E5%BA%97%E5%AE%A2%E6%88%BF%E9%81%8D%E5%B8%83%E5%90%B8%E9%A5%B1%E8%A1%80%E7%9A%84%E5%BA%8A%E8%99%B1%23) `776.5K 🔥` `NEW`
1. [金鹰奖信誉](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E4%BF%A1%E8%AA%89%23) `315.9K 🔥` `NEW`
1. [杀个西瓜吃欧洲西瓜太硬了](https://s.weibo.com/weibo?q=%23%E6%9D%80%E4%B8%AA%E8%A5%BF%E7%93%9C%E5%90%83%E6%AC%A7%E6%B4%B2%E8%A5%BF%E7%93%9C%E5%A4%AA%E7%A1%AC%E4%BA%86%23) `307.0K 🔥` `NEW`
1. [香港传奇影星葛兰去世](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%BC%A0%E5%A5%87%E5%BD%B1%E6%98%9F%E8%91%9B%E5%85%B0%E5%8E%BB%E4%B8%96%23) `304.4K 🔥` `NEW`
1. [瑙鲁正式更改国名](https://s.weibo.com/weibo?q=%23%E7%91%99%E9%B2%81%E6%AD%A3%E5%BC%8F%E6%9B%B4%E6%94%B9%E5%9B%BD%E5%90%8D%23) `303.5K 🔥` `NEW`
1. [闵塔鲨删博了](https://s.weibo.com/weibo?q=%23%E9%97%B5%E5%A1%94%E9%B2%A8%E5%88%A0%E5%8D%9A%E4%BA%86%23) `300.1K 🔥` `NEW`
1. [中国广电低价大流量卡热销](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B9%BF%E7%94%B5%E4%BD%8E%E4%BB%B7%E5%A4%A7%E6%B5%81%E9%87%8F%E5%8D%A1%E7%83%AD%E9%94%80%23) `296.2K 🔥` `NEW`
1. [空调不制冷还有异味师傅撕下层棉被](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E4%B8%8D%E5%88%B6%E5%86%B7%E8%BF%98%E6%9C%89%E5%BC%82%E5%91%B3%E5%B8%88%E5%82%85%E6%92%95%E4%B8%8B%E5%B1%82%E6%A3%89%E8%A2%AB%23) `248.8K 🔥` `NEW`
1. [捅死男友女子母亲称女儿一直乖巧懂事](https://s.weibo.com/weibo?q=%23%E6%8D%85%E6%AD%BB%E7%94%B7%E5%8F%8B%E5%A5%B3%E5%AD%90%E6%AF%8D%E4%BA%B2%E7%A7%B0%E5%A5%B3%E5%84%BF%E4%B8%80%E7%9B%B4%E4%B9%96%E5%B7%A7%E6%87%82%E4%BA%8B%23) `220.9K 🔥` `NEW`
1. [高市早苗对灾民说您还活着太好了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%AF%B9%E7%81%BE%E6%B0%91%E8%AF%B4%E6%82%A8%E8%BF%98%E6%B4%BB%E7%9D%80%E5%A4%AA%E5%A5%BD%E4%BA%86%23) `173.1K 🔥` `NEW`
1. [天才女友编剧下沉口碑 (The screenwriter of Genius Girlfriend has a sinking reputation)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E7%BC%96%E5%89%A7%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `170.0K 🔥` `NEW`
1. [无人机袭击俄罗斯一海滩6人死亡](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%A2%AD%E5%87%BB%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%80%E6%B5%B7%E6%BB%A96%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `160.2K 🔥` `NEW`
1. [迪丽热巴推特万赞的造型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8E%A8%E7%89%B9%E4%B8%87%E8%B5%9E%E7%9A%84%E9%80%A0%E5%9E%8B%23) `128.6K 🔥` `NEW`
1. [严浩翔倒地这一下好Q弹](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%80%92%E5%9C%B0%E8%BF%99%E4%B8%80%E4%B8%8B%E5%A5%BDQ%E5%BC%B9%23) `128.5K 🔥` `NEW`
1. [国庆假期上3休7上3](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E4%B8%8A3%E4%BC%917%E4%B8%8A3%23) `1.9M 🔥` `+1704%`
1. [怪不得长沙人晚上不睡觉](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%95%BF%E6%B2%99%E4%BA%BA%E6%99%9A%E4%B8%8A%E4%B8%8D%E7%9D%A1%E8%A7%89%23) `959.6K 🔥` `+158%`
1. [新型电力系统建设十五五规划发布 (The 15th Five-Year Plan for the Construction of New Power Systems Released)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%9E%8B%E7%94%B5%E5%8A%9B%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E5%8F%91%E5%B8%83%23) `907.3K 🔥` `+61%`
1. [幼儿园里来了个大学生](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E9%87%8C%E6%9D%A5%E4%BA%86%E4%B8%AA%E5%A4%A7%E5%AD%A6%E7%94%9F%23) `871.2K 🔥` `+593%`
1. [人类真的太小看自己的惰性和薄情了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%B0%8F%E7%9C%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E6%83%B0%E6%80%A7%E5%92%8C%E8%96%84%E6%83%85%E4%BA%86%23) `572.4K 🔥` `+209%`
1. [阿根廷国脚联赛爆射闷人](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%BD%E8%84%9A%E8%81%94%E8%B5%9B%E7%88%86%E5%B0%84%E9%97%B7%E4%BA%BA%23) `531.3K 🔥` `+238%`
1. [刘耀文身上没有展示位了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%BA%AB%E4%B8%8A%E6%B2%A1%E6%9C%89%E5%B1%95%E7%A4%BA%E4%BD%8D%E4%BA%86%23) `315.6K 🔥` `+141%`
1. [罗正一年花170元146给了苹果 (Luo Zheng spent 170 yuan 146 a year on Apple)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E4%B8%80%E5%B9%B4%E8%8A%B1170%E5%85%83146%E7%BB%99%E4%BA%86%E8%8B%B9%E6%9E%9C%23) `313.1K 🔥` `+69%`
1. [马嘉祺丁程鑫严浩翔身体现状](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%BA%AB%E4%BD%93%E7%8E%B0%E7%8A%B6%23) `312.4K 🔥` `+69%`
1. [2026国庆放假通知](https://s.weibo.com/weibo?q=%232026%E5%9B%BD%E5%BA%86%E6%94%BE%E5%81%87%E9%80%9A%E7%9F%A5%23) `310.5K 🔥` `+68%`
1. [邹市明已连续数月零收入 (Zou Shiming has had zero income for several months)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%B7%B2%E8%BF%9E%E7%BB%AD%E6%95%B0%E6%9C%88%E9%9B%B6%E6%94%B6%E5%85%A5%23) `309.4K 🔥` `+47%`
1. [钟美美自曝38岁母亲求职一年未果](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E8%87%AA%E6%9B%9D38%E5%B2%81%E6%AF%8D%E4%BA%B2%E6%B1%82%E8%81%8C%E4%B8%80%E5%B9%B4%E6%9C%AA%E6%9E%9C%23) `308.1K 🔥` `+66%`
1. [迪丽热巴 闵塔鲨 (Dilraba Minta Shark)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%97%B5%E5%A1%94%E9%B2%A8%23) `306.4K 🔥` `+65%`
1. [建议不要和已产生隔阂的人示好](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E5%92%8C%E5%B7%B2%E4%BA%A7%E7%94%9F%E9%9A%94%E9%98%82%E7%9A%84%E4%BA%BA%E7%A4%BA%E5%A5%BD%23) `302.6K 🔥` `+64%`
1. [俞敏洪送出的对手名单再添一员](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E9%80%81%E5%87%BA%E7%9A%84%E5%AF%B9%E6%89%8B%E5%90%8D%E5%8D%95%E5%86%8D%E6%B7%BB%E4%B8%80%E5%91%98%23) `301.7K 🔥` `+63%`
1. [9岁女孩长期吃蛋糕熬夜确诊性早熟](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%95%BF%E6%9C%9F%E5%90%83%E8%9B%8B%E7%B3%95%E7%86%AC%E5%A4%9C%E7%A1%AE%E8%AF%8A%E6%80%A7%E6%97%A9%E7%86%9F%23) `297.9K 🔥` `+61%`
1. [因吸烟冲突捅死男友女子有29处伤](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E5%90%B8%E7%83%9F%E5%86%B2%E7%AA%81%E6%8D%85%E6%AD%BB%E7%94%B7%E5%8F%8B%E5%A5%B3%E5%AD%90%E6%9C%8929%E5%A4%84%E4%BC%A4%23) `297.4K 🔥` `+224%`
1. [赛力斯7月新能源车产销量同比下滑](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF7%E6%9C%88%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E4%BA%A7%E9%94%80%E9%87%8F%E5%90%8C%E6%AF%94%E4%B8%8B%E6%BB%91%23) `279.3K 🔥` `+155%`
1. [19岁钟美美给母亲买奔驰](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E9%92%9F%E7%BE%8E%E7%BE%8E%E7%BB%99%E6%AF%8D%E4%BA%B2%E4%B9%B0%E5%A5%94%E9%A9%B0%23) `266.8K 🔥` `+44%`
1. [高市早苗装不下去了 (Takaichi Sanae can’t pretend anymore)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%A3%85%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%23) `253.3K 🔥` `+91%`
1. [罗正经纪人说这几天睁眼感觉天塌了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%E8%AF%B4%E8%BF%99%E5%87%A0%E5%A4%A9%E7%9D%81%E7%9C%BC%E6%84%9F%E8%A7%89%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `230.8K 🔥` `+25%`
1. [人无法接住自己没有的东西](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%97%A0%E6%B3%95%E6%8E%A5%E4%BD%8F%E8%87%AA%E5%B7%B1%E6%B2%A1%E6%9C%89%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `222.4K 🔥` `+35%`
1. [虞书欣开球](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%80%E7%90%83%23) `164.4K 🔥` `+39%`
1. [日本7人地震逃生后回商场被炸死](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7%E4%BA%BA%E5%9C%B0%E9%9C%87%E9%80%83%E7%94%9F%E5%90%8E%E5%9B%9E%E5%95%86%E5%9C%BA%E8%A2%AB%E7%82%B8%E6%AD%BB%23) `156.7K 🔥` `+55%`
1. [白鹿回复孙珍妮 (Bailu replies to Jenny Sun)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E5%AD%99%E7%8F%8D%E5%A6%AE%23) `146.3K 🔥` `+42%`
1. [DeepSeek登顶全球第一 (DeepSeek ranks first in the world)](https://s.weibo.com/weibo?q=%23DeepSeek%E7%99%BB%E9%A1%B6%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%80%23) `132.9K 🔥` `+21%`
1. [柳智敏致歉称吃太多](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E8%87%B4%E6%AD%89%E7%A7%B0%E5%90%83%E5%A4%AA%E5%A4%9A%23) `131.9K 🔥` `+41%`
1. [小时候讽刺的现在全理解了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E8%AE%BD%E5%88%BA%E7%9A%84%E7%8E%B0%E5%9C%A8%E5%85%A8%E7%90%86%E8%A7%A3%E4%BA%86%23) `221.9K 🔥`
1. [贺峻霖大疆里的绿海 (He Junlin’s Green Sea in DJI)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%A4%A7%E7%96%86%E9%87%8C%E7%9A%84%E7%BB%BF%E6%B5%B7%23) `197.2K 🔥`
1. [美股科技巨头迎来强劲买盘 (U.S. tech giants see strong buying)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E5%B7%A8%E5%A4%B4%E8%BF%8E%E6%9D%A5%E5%BC%BA%E5%8A%B2%E4%B9%B0%E7%9B%98%23) `173.5K 🔥`
1. [新网球王子完结](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%BD%91%E7%90%83%E7%8E%8B%E5%AD%90%E5%AE%8C%E7%BB%93%23) `165.7K 🔥`
1. [DeepSeek一天消耗了8万亿 (DeepSeek consumes 8 trillion a day)](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%80%E5%A4%A9%E6%B6%88%E8%80%97%E4%BA%868%E4%B8%87%E4%BA%BF%23) `591.9K 🔥` `-40%`
1. [东莞9岁女孩确诊性早熟 (9-year-old girl in Dongguan diagnosed with precocious puberty)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E9%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%A1%AE%E8%AF%8A%E6%80%A7%E6%97%A9%E7%86%9F%23) `314.6K 🔥` `-56%`
1. [地表最强男人因雪崩遇难 (The strongest man on earth died in an avalanche)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E8%A1%A8%E6%9C%80%E5%BC%BA%E7%94%B7%E4%BA%BA%E5%9B%A0%E9%9B%AA%E5%B4%A9%E9%81%87%E9%9A%BE%23) `298.9K 🔥` `-30%`
1. [陈伟霆九门直播哭了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B9%9D%E9%97%A8%E7%9B%B4%E6%92%AD%E5%93%AD%E4%BA%86%23) `141.4K 🔥` `-24%`
1. [孙颖莎很遗憾我不能来到现场](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BE%88%E9%81%97%E6%86%BE%E6%88%91%E4%B8%8D%E8%83%BD%E6%9D%A5%E5%88%B0%E7%8E%B0%E5%9C%BA%23) `129.1K 🔥` `-31%`

Updated at 2026-08-04 09:09:56

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
