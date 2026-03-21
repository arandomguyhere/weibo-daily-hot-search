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

1. [今天买清明假期第一天火车票 (Buy train tickets for the first day of Qingming holiday today)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E4%B9%B0%E6%B8%85%E6%98%8E%E5%81%87%E6%9C%9F%E7%AC%AC%E4%B8%80%E5%A4%A9%E7%81%AB%E8%BD%A6%E7%A5%A8%23) `1.0M 🔥` `NEW`
1. [曝梁小龙去世两个月没下葬将停棺10年](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%A2%81%E5%B0%8F%E9%BE%99%E5%8E%BB%E4%B8%96%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B2%A1%E4%B8%8B%E8%91%AC%E5%B0%86%E5%81%9C%E6%A3%BA10%E5%B9%B4%23) `139.9K 🔥` `NEW`
1. [迪丽热巴再被叫胖迪很惊讶](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%86%8D%E8%A2%AB%E5%8F%AB%E8%83%96%E8%BF%AA%E5%BE%88%E6%83%8A%E8%AE%B6%23) `137.7K 🔥` `NEW`
1. [张凌赫田曦薇 所有人都在觊觎我妻子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%89%80%E6%9C%89%E4%BA%BA%E9%83%BD%E5%9C%A8%E8%A7%8A%E8%A7%8E%E6%88%91%E5%A6%BB%E5%AD%90%23) `136.0K 🔥` `NEW`
1. [美军核坟墓辐射量已超切尔诺贝利](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%A0%B8%E5%9D%9F%E5%A2%93%E8%BE%90%E5%B0%84%E9%87%8F%E5%B7%B2%E8%B6%85%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A9%23) `134.3K 🔥` `NEW`
1. [梅姨长相与公布画像相似度不高](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E9%95%BF%E7%9B%B8%E4%B8%8E%E5%85%AC%E5%B8%83%E7%94%BB%E5%83%8F%E7%9B%B8%E4%BC%BC%E5%BA%A6%E4%B8%8D%E9%AB%98%23) `130.0K 🔥` `NEW`
1. [梅姨2张模拟画像均被指不符](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A82%E5%BC%A0%E6%A8%A1%E6%8B%9F%E7%94%BB%E5%83%8F%E5%9D%87%E8%A2%AB%E6%8C%87%E4%B8%8D%E7%AC%A6%23) `128.2K 🔥` `NEW`
1. [男子重病后发现老伴打赏男主播370万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%87%8D%E7%97%85%E5%90%8E%E5%8F%91%E7%8E%B0%E8%80%81%E4%BC%B4%E6%89%93%E8%B5%8F%E7%94%B7%E4%B8%BB%E6%92%AD370%E4%B8%87%23) `125.6K 🔥` `NEW`
1. [倪妮这铁真没白撸](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E8%BF%99%E9%93%81%E7%9C%9F%E6%B2%A1%E7%99%BD%E6%92%B8%23) `123.5K 🔥` `NEW`
1. [女子熬夜3个月突然开始对墙讲课](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%86%AC%E5%A4%9C3%E4%B8%AA%E6%9C%88%E7%AA%81%E7%84%B6%E5%BC%80%E5%A7%8B%E5%AF%B9%E5%A2%99%E8%AE%B2%E8%AF%BE%23) `82.8K 🔥` `NEW`
1. [孩子摸校门口买的小火龙鱼中毒就医 (A child was poisoned after touching a small fire arowana bought at the school gate and sought medical treatment.)](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%91%B8%E6%A0%A1%E9%97%A8%E5%8F%A3%E4%B9%B0%E7%9A%84%E5%B0%8F%E7%81%AB%E9%BE%99%E9%B1%BC%E4%B8%AD%E6%AF%92%E5%B0%B1%E5%8C%BB%23) `69.3K 🔥` `NEW`
1. [片寄凉太幸福肥](https://s.weibo.com/weibo?q=%23%E7%89%87%E5%AF%84%E5%87%89%E5%A4%AA%E5%B9%B8%E7%A6%8F%E8%82%A5%23) `66.1K 🔥` `NEW`
1. [高铁卖卫生巾背后看不见的女性需求](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%8D%96%E5%8D%AB%E7%94%9F%E5%B7%BE%E8%83%8C%E5%90%8E%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E5%A5%B3%E6%80%A7%E9%9C%80%E6%B1%82%23) `64.1K 🔥` `NEW`
1. [薛之谦抢票](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%8A%A2%E7%A5%A8%23) `62.7K 🔥` `NEW`
1. [梅姨2017年浮出水面](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A82017%E5%B9%B4%E6%B5%AE%E5%87%BA%E6%B0%B4%E9%9D%A2%23) `58.7K 🔥` `NEW`
1. [金价一周大跌超11%](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%80%E5%91%A8%E5%A4%A7%E8%B7%8C%E8%B6%8511%25%23) `57.5K 🔥` `NEW`
1. [长期睡不好的危害有多大](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%9D%A1%E4%B8%8D%E5%A5%BD%E7%9A%84%E5%8D%B1%E5%AE%B3%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `56.9K 🔥` `NEW`
1. [梅姨男友称与其同居3年没拍照片](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%94%B7%E5%8F%8B%E7%A7%B0%E4%B8%8E%E5%85%B6%E5%90%8C%E5%B1%853%E5%B9%B4%E6%B2%A1%E6%8B%8D%E7%85%A7%E7%89%87%23) `1.7M 🔥` `+1947%`
1. [风雨廊亭梦已醒 上完厕所丢行李](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E9%9B%A8%E5%BB%8A%E4%BA%AD%E6%A2%A6%E5%B7%B2%E9%86%92%20%E4%B8%8A%E5%AE%8C%E5%8E%95%E6%89%80%E4%B8%A2%E8%A1%8C%E6%9D%8E%23) `161.9K 🔥` `+22%`
1. [还原梅姨画像神笔警探发声](https://s.weibo.com/weibo?q=%23%E8%BF%98%E5%8E%9F%E6%A2%85%E5%A7%A8%E7%94%BB%E5%83%8F%E7%A5%9E%E7%AC%94%E8%AD%A6%E6%8E%A2%E5%8F%91%E5%A3%B0%23) `126.3K 🔥` `+73%`
1. [以色列全国多地遭导弹袭击 (Many places across Israel come under missile attack)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E9%81%AD%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `100.6K 🔥` `+21%`
1. [白象 土豆泥火鸡面 (White Elephant Mashed Potato Turkey Noodles)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%B1%A1%20%E5%9C%9F%E8%B1%86%E6%B3%A5%E7%81%AB%E9%B8%A1%E9%9D%A2%23) `645.6K 🔥`
1. [终于有人吐槽手语舞了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E5%90%90%E6%A7%BD%E6%89%8B%E8%AF%AD%E8%88%9E%E4%BA%86%23) `140.2K 🔥`
1. [15岁女生派出所办公室内遭猥亵](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%A5%B3%E7%94%9F%E6%B4%BE%E5%87%BA%E6%89%80%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%86%85%E9%81%AD%E7%8C%A5%E4%BA%B5%23) `138.3K 🔥`
1. [男明星最权威现场](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%98%8E%E6%98%9F%E6%9C%80%E6%9D%83%E5%A8%81%E7%8E%B0%E5%9C%BA%23) `134.8K 🔥`
1. [网友通过倪妮悄悄话分析出汤唯怀孕了 (Netizens analyzed that Tang Wei was pregnant through Ni Ni’s whispers)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%80%9A%E8%BF%87%E5%80%AA%E5%A6%AE%E6%82%84%E6%82%84%E8%AF%9D%E5%88%86%E6%9E%90%E5%87%BA%E6%B1%A4%E5%94%AF%E6%80%80%E5%AD%95%E4%BA%86%23) `133.9K 🔥`
1. [迪丽热巴工作室审美](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%AE%A1%E7%BE%8E%23) `132.4K 🔥`
1. [伊朗有意日本船只通行霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%89%E6%84%8F%E6%97%A5%E6%9C%AC%E8%88%B9%E5%8F%AA%E9%80%9A%E8%A1%8C%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `130.5K 🔥`
1. [孙海洋说梅姨像鬼一样存在着](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E8%AF%B4%E6%A2%85%E5%A7%A8%E5%83%8F%E9%AC%BC%E4%B8%80%E6%A0%B7%E5%AD%98%E5%9C%A8%E7%9D%80%23) `117.1K 🔥`
1. [我妈把元祖机养到了40岁](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E6%8A%8A%E5%85%83%E7%A5%96%E6%9C%BA%E5%85%BB%E5%88%B0%E4%BA%8640%E5%B2%81%23) `105.2K 🔥`
1. [中国人搞纯爱两个人一起考上清华](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%90%9E%E7%BA%AF%E7%88%B1%E4%B8%A4%E4%B8%AA%E4%BA%BA%E4%B8%80%E8%B5%B7%E8%80%83%E4%B8%8A%E6%B8%85%E5%8D%8E%23) `74.2K 🔥`
1. [虞书欣专辑签售会 (Yu Shuxin’s album signing event)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%93%E8%BE%91%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `69.3K 🔥`
1. [行政果切被老板说不够高档](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E6%94%BF%E6%9E%9C%E5%88%87%E8%A2%AB%E8%80%81%E6%9D%BF%E8%AF%B4%E4%B8%8D%E5%A4%9F%E9%AB%98%E6%A1%A3%23) `69.3K 🔥`
1. [WIEA阵容 (WIEA lineup)](https://s.weibo.com/weibo?q=%23WIEA%E9%98%B5%E5%AE%B9%23) `60.3K 🔥`
1. [黄金失守4500美元](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%B1%E5%AE%884500%E7%BE%8E%E5%85%83%23) `56.1K 🔥`
1. [梅姨被逮捕 (Aunt May was arrested)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%8D%95%23) `4.6M 🔥` `-24%`
1. [谢某某就是梅姨](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%9F%90%E6%9F%90%E5%B0%B1%E6%98%AF%E6%A2%85%E5%A7%A8%23) `560.3K 🔥` `-61%`
1. [董事长病逝未成年女儿继承9亿股票](https://s.weibo.com/weibo?q=%23%E8%91%A3%E4%BA%8B%E9%95%BF%E7%97%85%E9%80%9D%E6%9C%AA%E6%88%90%E5%B9%B4%E5%A5%B3%E5%84%BF%E7%BB%A7%E6%89%BF9%E4%BA%BF%E8%82%A1%E7%A5%A8%23) `239.2K 🔥` `-40%`
1. [南方人把天气预报刷成了连续剧](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%BA%BA%E6%8A%8A%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5%E5%88%B7%E6%88%90%E4%BA%86%E8%BF%9E%E7%BB%AD%E5%89%A7%23) `172.0K 🔥` `-29%`
1. [清明小长假火车购票日历 (Qingming Festival Train Ticketing Calendar)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%B0%8F%E9%95%BF%E5%81%87%E7%81%AB%E8%BD%A6%E8%B4%AD%E7%A5%A8%E6%97%A5%E5%8E%86%23) `150.3K 🔥` `-87%`
1. [徐志胜自曝创业月亏12万](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E8%87%AA%E6%9B%9D%E5%88%9B%E4%B8%9A%E6%9C%88%E4%BA%8F12%E4%B8%87%23) `140.0K 🔥` `-30%`
1. [梅姨落网被拐儿童钟彬激动得吐了 (Aunt Mei was arrested and the kidnapped child Zhong Bin was so excited that she vomited)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%90%BD%E7%BD%91%E8%A2%AB%E6%8B%90%E5%84%BF%E7%AB%A5%E9%92%9F%E5%BD%AC%E6%BF%80%E5%8A%A8%E5%BE%97%E5%90%90%E4%BA%86%23) `123.9K 🔥` `-62%`
1. [余华英](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E8%8B%B1%23) `102.1K 🔥` `-27%`
1. [WB对战KSG](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98KSG%23) `101.2K 🔥` `-26%`
1. [梅姨画像](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%94%BB%E5%83%8F%23) `100.4K 🔥` `-26%`
1. [官方通报月经弄脏卧铺事件详情](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%E8%AF%A6%E6%83%85%23) `88.4K 🔥` `-27%`
1. [梅姨被逮杨妞花发声 (Aunt Mei was arrested and Yang Niuhua spoke out)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%9D%A8%E5%A6%9E%E8%8A%B1%E5%8F%91%E5%A3%B0%23) `79.4K 🔥` `-35%`
1. [3月婴儿独自在家被子盖脸近2分钟 (A 3-month-old baby’s face was covered with quilt for nearly 2 minutes at home alone)](https://s.weibo.com/weibo?q=%233%E6%9C%88%E5%A9%B4%E5%84%BF%E7%8B%AC%E8%87%AA%E5%9C%A8%E5%AE%B6%E8%A2%AB%E5%AD%90%E7%9B%96%E8%84%B8%E8%BF%912%E5%88%86%E9%92%9F%23) `75.9K 🔥` `-24%`
1. [田曦薇说她和长玉相似度80%](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%AF%B4%E5%A5%B9%E5%92%8C%E9%95%BF%E7%8E%89%E7%9B%B8%E4%BC%BC%E5%BA%A680%25%23) `71.0K 🔥` `-23%`
1. [金价大跌情侣火速买五金 (Couple rushes to buy hardware after gold price plummets)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E6%83%85%E4%BE%A3%E7%81%AB%E9%80%9F%E4%B9%B0%E4%BA%94%E9%87%91%23) `69.3K 🔥` `-44%`
1. [郝阿三资源](https://s.weibo.com/weibo?q=%23%E9%83%9D%E9%98%BF%E4%B8%89%E8%B5%84%E6%BA%90%23) `69.3K 🔥` `-28%`

Updated at 2026-03-21 15:35:41

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
