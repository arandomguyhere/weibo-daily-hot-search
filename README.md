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

1. [张本智和 零封不算意外 (Zhang Benzhihe’s zero seal is not a surprise)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%20%E9%9B%B6%E5%B0%81%E4%B8%8D%E7%AE%97%E6%84%8F%E5%A4%96%23) `1.1M 🔥` `NEW`
1. [白海豚已闭眼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E9%97%AD%E7%9C%BC%23) `763.3K 🔥` `NEW`
1. [向陕西增加调拨3.2万件救灾物资](https://s.weibo.com/weibo?q=%23%E5%90%91%E9%99%95%E8%A5%BF%E5%A2%9E%E5%8A%A0%E8%B0%83%E6%8B%A83.2%E4%B8%87%E4%BB%B6%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%23) `754.6K 🔥` `NEW`
1. [原来这是追到正缘了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%98%AF%E8%BF%BD%E5%88%B0%E6%AD%A3%E7%BC%98%E4%BA%86%23) `749.5K 🔥` `NEW`
1. [昆凌中餐厅手绘菜单](https://s.weibo.com/weibo?q=%23%E6%98%86%E5%87%8C%E4%B8%AD%E9%A4%90%E5%8E%85%E6%89%8B%E7%BB%98%E8%8F%9C%E5%8D%95%23) `419.3K 🔥` `NEW`
1. [九尾抽送巴黎伴手礼](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E6%8A%BD%E9%80%81%E5%B7%B4%E9%BB%8E%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `278.0K 🔥` `NEW`
1. [陈楚生歌王含金量](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E6%AD%8C%E7%8E%8B%E5%90%AB%E9%87%91%E9%87%8F%23) `274.8K 🔥` `NEW`
1. [无畏回国还想着送粉丝伴手礼](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%9B%9E%E5%9B%BD%E8%BF%98%E6%83%B3%E7%9D%80%E9%80%81%E7%B2%89%E4%B8%9D%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `256.6K 🔥` `NEW`
1. [iPhone18系列发布节奏](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%E5%8F%91%E5%B8%83%E8%8A%82%E5%A5%8F%23) `168.2K 🔥` `NEW`
1. [华为阔直板新机曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%E6%96%B0%E6%9C%BA%E6%9B%9D%E5%85%89%23) `168.1K 🔥` `NEW`
1. [婚前身体检查很重要 (Premarital physical examination is very important)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E8%BA%AB%E4%BD%93%E6%A3%80%E6%9F%A5%E5%BE%88%E9%87%8D%E8%A6%81%23) `167.5K 🔥` `NEW`
1. [36岁男演员没戏拍转行景区NPC](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E7%94%B7%E6%BC%94%E5%91%98%E6%B2%A1%E6%88%8F%E6%8B%8D%E8%BD%AC%E8%A1%8C%E6%99%AF%E5%8C%BANPC%23) `167.4K 🔥` `NEW`
1. [王俊凯忘不了中餐厅3的那个梨](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BF%98%E4%B8%8D%E4%BA%86%E4%B8%AD%E9%A4%90%E5%8E%853%E7%9A%84%E9%82%A3%E4%B8%AA%E6%A2%A8%23) `166.0K 🔥` `NEW`
1. [灰熊球员克拉克死因曝光](https://s.weibo.com/weibo?q=%23%E7%81%B0%E7%86%8A%E7%90%83%E5%91%98%E5%85%8B%E6%8B%89%E5%85%8B%E6%AD%BB%E5%9B%A0%E6%9B%9D%E5%85%89%23) `165.8K 🔥` `NEW`
1. [乌克兰女子死抱男友阻拦征兵办](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E5%A5%B3%E5%AD%90%E6%AD%BB%E6%8A%B1%E7%94%B7%E5%8F%8B%E9%98%BB%E6%8B%A6%E5%BE%81%E5%85%B5%E5%8A%9E%23) `165.2K 🔥` `NEW`
1. [香港宏福苑火灾或由烟头引起](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%AE%8F%E7%A6%8F%E8%8B%91%E7%81%AB%E7%81%BE%E6%88%96%E7%94%B1%E7%83%9F%E5%A4%B4%E5%BC%95%E8%B5%B7%23) `164.2K 🔥` `NEW`
1. [印度水井出现怪异现象数百人围观](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%B0%B4%E4%BA%95%E5%87%BA%E7%8E%B0%E6%80%AA%E5%BC%82%E7%8E%B0%E8%B1%A1%E6%95%B0%E7%99%BE%E4%BA%BA%E5%9B%B4%E8%A7%82%23) `163.3K 🔥` `NEW`
1. [田曦薇演技](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%BC%94%E6%8A%80%23) `162.6K 🔥` `NEW`
1. [美国非农爆冷金价飙升](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%9D%9E%E5%86%9C%E7%88%86%E5%86%B7%E9%87%91%E4%BB%B7%E9%A3%99%E5%8D%87%23) `161.4K 🔥` `NEW`
1. [穆祉丞说小话结果没关麦](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%AF%B4%E5%B0%8F%E8%AF%9D%E7%BB%93%E6%9E%9C%E6%B2%A1%E5%85%B3%E9%BA%A6%23) `159.5K 🔥` `NEW`
1. [万妮达不回头地走下去 (Wan Nida goes on without looking back)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E4%B8%8D%E5%9B%9E%E5%A4%B4%E5%9C%B0%E8%B5%B0%E4%B8%8B%E5%8E%BB%23) `135.1K 🔥` `NEW`
1. [A股一周牛股出炉 最牛股近乎翻倍](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%80%E5%91%A8%E7%89%9B%E8%82%A1%E5%87%BA%E7%82%89%20%E6%9C%80%E7%89%9B%E8%82%A1%E8%BF%91%E4%B9%8E%E7%BF%BB%E5%80%8D%23) `128.6K 🔥` `NEW`
1. [女明星在用的蚕丝卫生巾 (Silk sanitary napkins used by female celebrities)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9F%E5%9C%A8%E7%94%A8%E7%9A%84%E8%9A%95%E4%B8%9D%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `751.2K 🔥` `+720%`
1. [泰国初中生饮弹自尽前开了26枪 (Thai junior high school student shot 26 times before committing suicide)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%88%9D%E4%B8%AD%E7%94%9F%E9%A5%AE%E5%BC%B9%E8%87%AA%E5%B0%BD%E5%89%8D%E5%BC%80%E4%BA%8626%E6%9E%AA%23) `739.3K 🔥` `+21%`
1. [姚安娜也迎来了属于她的宣发期](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E4%B9%9F%E8%BF%8E%E6%9D%A5%E4%BA%86%E5%B1%9E%E4%BA%8E%E5%A5%B9%E7%9A%84%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `724.2K 🔥` `+337%`
1. [王楚然大一形体课越扒越有 (Wang Churan's freshman bodybuilding class got more and more interesting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E4%B8%80%E5%BD%A2%E4%BD%93%E8%AF%BE%E8%B6%8A%E6%89%92%E8%B6%8A%E6%9C%89%23) `277.2K 🔥` `+60%`
1. [原来戴泳帽真的会影响颜值](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%B4%E6%B3%B3%E5%B8%BD%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E9%A2%9C%E5%80%BC%23) `264.3K 🔥` `+54%`
1. [金智秀发文道歉](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `259.9K 🔥` `+50%`
1. [拉宏桑已经走到广东惠州](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%AE%8F%E6%A1%91%E5%B7%B2%E7%BB%8F%E8%B5%B0%E5%88%B0%E5%B9%BF%E4%B8%9C%E6%83%A0%E5%B7%9E%23) `166.7K 🔥` `+64%`
1. [胚胎案原配称以后可以去开网约车](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%A7%B0%E4%BB%A5%E5%90%8E%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%BC%80%E7%BD%91%E7%BA%A6%E8%BD%A6%23) `163.1K 🔥` `+54%`
1. [通用汽车回应雪佛兰或退出中国市场 (General Motors responds to Chevrolet may withdraw from the Chinese market)](https://s.weibo.com/weibo?q=%23%E9%80%9A%E7%94%A8%E6%B1%BD%E8%BD%A6%E5%9B%9E%E5%BA%94%E9%9B%AA%E4%BD%9B%E5%85%B0%E6%88%96%E9%80%80%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `121.6K 🔥` `+40%`
1. [浙江最强风雨时段已锁定 (The strongest storm period in Zhejiang has been locked)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E6%9C%80%E5%BC%BA%E9%A3%8E%E9%9B%A8%E6%97%B6%E6%AE%B5%E5%B7%B2%E9%94%81%E5%AE%9A%23) `727.8K 🔥`
1. [23岁博士回应确诊胃癌晚期 (23-year-old doctor responds to diagnosis of advanced gastric cancer)](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%8D%9A%E5%A3%AB%E5%9B%9E%E5%BA%94%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23) `510.9K 🔥`
1. [医生回应女子被狗舔脚确诊三级暴露](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%8B%97%E8%88%94%E8%84%9A%E7%A1%AE%E8%AF%8A%E4%B8%89%E7%BA%A7%E6%9A%B4%E9%9C%B2%23) `166.3K 🔥`
1. [女子生下4胞胎被全家宠上天称嫁对人了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B4%E8%83%9E%E8%83%8E%E8%A2%AB%E5%85%A8%E5%AE%B6%E5%AE%A0%E4%B8%8A%E5%A4%A9%E7%A7%B0%E5%AB%81%E5%AF%B9%E4%BA%BA%E4%BA%86%23) `165.0K 🔥`
1. [投资或达8000亿元的芯片工厂来了](https://s.weibo.com/weibo?q=%23%E6%8A%95%E8%B5%84%E6%88%96%E8%BE%BE8000%E4%BA%BF%E5%85%83%E7%9A%84%E8%8A%AF%E7%89%87%E5%B7%A5%E5%8E%82%E6%9D%A5%E4%BA%86%23) `164.4K 🔥`
1. [杨幂晒贵阳旅行照 (Yang Mi shares travel photos in Guiyang)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%99%92%E8%B4%B5%E9%98%B3%E6%97%85%E8%A1%8C%E7%85%A7%23) `162.8K 🔥`
1. [蜘蛛侠4登顶2026全球票房年冠 (Spider-Man 4 tops global box office in 2026)](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A04%E7%99%BB%E9%A1%B62026%E5%85%A8%E7%90%83%E7%A5%A8%E6%88%BF%E5%B9%B4%E5%86%A0%23) `160.8K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `160.6K 🔥`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `159.4K 🔥`
1. [一个没有空调外挂机的城市 (A city without air conditioning units)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%B2%A1%E6%9C%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%8C%82%E6%9C%BA%E7%9A%84%E5%9F%8E%E5%B8%82%23) `158.1K 🔥`
1. [为啥山西不用装空调外挂机](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E5%B1%B1%E8%A5%BF%E4%B8%8D%E7%94%A8%E8%A3%85%E7%A9%BA%E8%B0%83%E5%A4%96%E6%8C%82%E6%9C%BA%23) `152.0K 🔥`
1. [湖人 詹姆斯](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%20%E8%A9%B9%E5%A7%86%E6%96%AF%23) `144.5K 🔥`
1. [以前的台词也太敢说了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E7%9A%84%E5%8F%B0%E8%AF%8D%E4%B9%9F%E5%A4%AA%E6%95%A2%E8%AF%B4%E4%BA%86%23) `129.6K 🔥`
1. [齐豫 躲歌王 (Qi Yu King of Tibetan Songs)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%20%E8%BA%B2%E6%AD%8C%E7%8E%8B%23) `124.8K 🔥`
1. [宋亚轩拍了刘耀文的美甲 (Song Yaxuan took photos of Liu Yaowen's manicure)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%8B%8D%E4%BA%86%E5%88%98%E8%80%80%E6%96%87%E7%9A%84%E7%BE%8E%E7%94%B2%23) `121.3K 🔥`
1. [看完鸟类正脸秒懂证件照](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E9%B8%9F%E7%B1%BB%E6%AD%A3%E8%84%B8%E7%A7%92%E6%87%82%E8%AF%81%E4%BB%B6%E7%85%A7%23) `270.4K 🔥` `-48%`
1. [胡彦斌歌王 (Hu Yanbin King of Songs)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E6%AD%8C%E7%8E%8B%23) `268.8K 🔥` `-48%`
1. [歌手总决赛 孙燕姿吴青峰太伟大了 (Singer Finals Stefanie Sun and Wu Qingfeng are so great)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%20%E5%AD%99%E7%87%95%E5%A7%BF%E5%90%B4%E9%9D%92%E5%B3%B0%E5%A4%AA%E4%BC%9F%E5%A4%A7%E4%BA%86%23) `258.0K 🔥` `-56%`
1. [丈夫坠亡后百万赔偿款妻女仅得3万](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%9D%A0%E4%BA%A1%E5%90%8E%E7%99%BE%E4%B8%87%E8%B5%94%E5%81%BF%E6%AC%BE%E5%A6%BB%E5%A5%B3%E4%BB%85%E5%BE%973%E4%B8%87%23) `163.6K 🔥` `-86%`
1. [国乒男单 梯队建设 (National table tennis men's singles echelon construction)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%20%E6%A2%AF%E9%98%9F%E5%BB%BA%E8%AE%BE%23) `132.6K 🔥` `-21%`

Updated at 2026-08-08 10:30:47

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
