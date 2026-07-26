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

1. [花一万多产检一路绿灯生下来畸形 (After spending more than 10,000 yuan on prenatal check-ups, she was given the green light to be born with deformities.)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%B8%80%E4%B8%87%E5%A4%9A%E4%BA%A7%E6%A3%80%E4%B8%80%E8%B7%AF%E7%BB%BF%E7%81%AF%E7%94%9F%E4%B8%8B%E6%9D%A5%E7%95%B8%E5%BD%A2%23) `1.1M 🔥` `NEW`
1. [台湾 致癌油](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%20%E8%87%B4%E7%99%8C%E6%B2%B9%23) `552.7K 🔥` `NEW`
1. [狡猾的健身猪妖](https://s.weibo.com/weibo?q=%23%E7%8B%A1%E7%8C%BE%E7%9A%84%E5%81%A5%E8%BA%AB%E7%8C%AA%E5%A6%96%23) `464.1K 🔥` `NEW`
1. [终于有人把英语体系给说清楚了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E6%8A%8A%E8%8B%B1%E8%AF%AD%E4%BD%93%E7%B3%BB%E7%BB%99%E8%AF%B4%E6%B8%85%E6%A5%9A%E4%BA%86%23) `389.3K 🔥` `NEW`
1. [爸妈笑了半小时才打完B超](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E7%AC%91%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%89%8D%E6%89%93%E5%AE%8CB%E8%B6%85%23) `339.1K 🔥` `NEW`
1. [詹姆斯团队曾主动联系尼克斯但被拒绝](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%A2%E9%98%9F%E6%9B%BE%E4%B8%BB%E5%8A%A8%E8%81%94%E7%B3%BB%E5%B0%BC%E5%85%8B%E6%96%AF%E4%BD%86%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `327.0K 🔥` `NEW`
1. [杨幂辣妹回归](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%BE%A3%E5%A6%B9%E5%9B%9E%E5%BD%92%23) `326.1K 🔥` `NEW`
1. [王楚钦憋不住根本憋不住](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%86%8B%E4%B8%8D%E4%BD%8F%E6%A0%B9%E6%9C%AC%E6%86%8B%E4%B8%8D%E4%BD%8F%23) `325.7K 🔥` `NEW`
1. [付辛博追颖儿时一点不简单](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A%E8%BF%BD%E9%A2%96%E5%84%BF%E6%97%B6%E4%B8%80%E7%82%B9%E4%B8%8D%E7%AE%80%E5%8D%95%23) `324.4K 🔥` `NEW`
1. [家属回应6岁女童基因编辑试验后死亡](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%9B%9E%E5%BA%946%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%9F%BA%E5%9B%A0%E7%BC%96%E8%BE%91%E8%AF%95%E9%AA%8C%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `322.5K 🔥` `NEW`
1. [上海交通大学医学院成立专项工作组 (Shanghai Jiao Tong University School of Medicine establishes a special working group)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%A4%E9%80%9A%E5%A4%A7%E5%AD%A6%E5%8C%BB%E5%AD%A6%E9%99%A2%E6%88%90%E7%AB%8B%E4%B8%93%E9%A1%B9%E5%B7%A5%E4%BD%9C%E7%BB%84%23) `319.8K 🔥` `NEW`
1. [日方拆解宇树机器人](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E6%8B%86%E8%A7%A3%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `319.5K 🔥` `NEW`
1. [A股重磅新规明起实施](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E7%A3%85%E6%96%B0%E8%A7%84%E6%98%8E%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `319.2K 🔥` `NEW`
1. [谢楠的一夫一妻在马来西亚见面了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E7%9A%84%E4%B8%80%E5%A4%AB%E4%B8%80%E5%A6%BB%E5%9C%A8%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E8%A7%81%E9%9D%A2%E4%BA%86%23) `318.8K 🔥` `NEW`
1. [红霞致广东多处房屋被冲塌](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%E8%87%B4%E5%B9%BF%E4%B8%9C%E5%A4%9A%E5%A4%84%E6%88%BF%E5%B1%8B%E8%A2%AB%E5%86%B2%E5%A1%8C%23) `318.6K 🔥` `NEW`
1. [A股内幕交易新规定来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%86%85%E5%B9%95%E4%BA%A4%E6%98%93%E6%96%B0%E8%A7%84%E5%AE%9A%E6%9D%A5%E4%BA%86%23) `315.2K 🔥` `NEW`
1. [迪丽热巴钰珑下沉口碑](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `314.7K 🔥` `NEW`
1. [张婧仪露腰对镜拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E9%9C%B2%E8%85%B0%E5%AF%B9%E9%95%9C%E6%8B%8D%23) `312.0K 🔥` `NEW`
1. [罗永浩再怒斥骗老人APP](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%86%8D%E6%80%92%E6%96%A5%E9%AA%97%E8%80%81%E4%BA%BAAPP%23) `310.7K 🔥` `NEW`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `307.2K 🔥` `NEW`
1. [功夫女足官方用了迪丽热巴的BGM (Kung Fu Women’s Football Team officially uses Dilireba’s BGM)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%AE%98%E6%96%B9%E7%94%A8%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84BGM%23) `298.6K 🔥` `NEW`
1. [虞书欣名誉维权案胜诉](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%8D%E8%AA%89%E7%BB%B4%E6%9D%83%E6%A1%88%E8%83%9C%E8%AF%89%23) `269.8K 🔥` `NEW`
1. [蒙丹含香是爱情夫妻俩是病情](https://s.weibo.com/weibo?q=%23%E8%92%99%E4%B8%B9%E5%90%AB%E9%A6%99%E6%98%AF%E7%88%B1%E6%83%85%E5%A4%AB%E5%A6%BB%E4%BF%A9%E6%98%AF%E7%97%85%E6%83%85%23) `239.6K 🔥` `NEW`
1. [上海酒吧偶遇小S](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%85%92%E5%90%A7%E5%81%B6%E9%81%87%E5%B0%8FS%23) `238.9K 🔥` `NEW`
1. [雀骨第二季在筹备](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%9C%A8%E7%AD%B9%E5%A4%87%23) `225.6K 🔥` `NEW`
1. [马嘉祺25到26年到底上了什么班](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA25%E5%88%B026%E5%B9%B4%E5%88%B0%E5%BA%95%E4%B8%8A%E4%BA%86%E4%BB%80%E4%B9%88%E7%8F%AD%23) `194.9K 🔥` `NEW`
1. [王一博冒雨走出P房看粉丝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%86%92%E9%9B%A8%E8%B5%B0%E5%87%BAP%E6%88%BF%E7%9C%8B%E7%B2%89%E4%B8%9D%23) `164.0K 🔥` `NEW`
1. [珠海妇幼称产检按国标无需检查四肢](https://s.weibo.com/weibo?q=%23%E7%8F%A0%E6%B5%B7%E5%A6%87%E5%B9%BC%E7%A7%B0%E4%BA%A7%E6%A3%80%E6%8C%89%E5%9B%BD%E6%A0%87%E6%97%A0%E9%9C%80%E6%A3%80%E6%9F%A5%E5%9B%9B%E8%82%A2%23) `152.9K 🔥` `NEW`
1. [做反女孩正颌手术医生已无法预约](https://s.weibo.com/weibo?q=%23%E5%81%9A%E5%8F%8D%E5%A5%B3%E5%AD%A9%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E5%8C%BB%E7%94%9F%E5%B7%B2%E6%97%A0%E6%B3%95%E9%A2%84%E7%BA%A6%23) `147.2K 🔥` `NEW`
1. [张雅琪有调酒技能却极少上手实操](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%9C%89%E8%B0%83%E9%85%92%E6%8A%80%E8%83%BD%E5%8D%B4%E6%9E%81%E5%B0%91%E4%B8%8A%E6%89%8B%E5%AE%9E%E6%93%8D%23) `146.7K 🔥` `NEW`
1. [张柏芝一身黑现身北京机场 (Cecilia Cheung appeared at Beijing Airport dressed in black)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E4%B8%80%E8%BA%AB%E9%BB%91%E7%8E%B0%E8%BA%AB%E5%8C%97%E4%BA%AC%E6%9C%BA%E5%9C%BA%23) `144.6K 🔥` `NEW`
1. [极氪APP上线跨境守护功能](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AAAPP%E4%B8%8A%E7%BA%BF%E8%B7%A8%E5%A2%83%E5%AE%88%E6%8A%A4%E5%8A%9F%E8%83%BD%23) `143.1K 🔥` `NEW`
1. [16岁女生服刑期发现漏罪被判12年](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E7%94%9F%E6%9C%8D%E5%88%91%E6%9C%9F%E5%8F%91%E7%8E%B0%E6%BC%8F%E7%BD%AA%E8%A2%AB%E5%88%A412%E5%B9%B4%23) `1.5M 🔥` `+68%`
1. [鹿晗 与我无关的事情](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E4%B8%8E%E6%88%91%E6%97%A0%E5%85%B3%E7%9A%84%E4%BA%8B%E6%83%85%23) `656.1K 🔥` `+113%`
1. [员工发现顾客腹部异常隆起坚持送医](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%8F%91%E7%8E%B0%E9%A1%BE%E5%AE%A2%E8%85%B9%E9%83%A8%E5%BC%82%E5%B8%B8%E9%9A%86%E8%B5%B7%E5%9D%9A%E6%8C%81%E9%80%81%E5%8C%BB%23) `309.2K 🔥` `+35%`
1. [APEC人工智能未来合作开启新路径](https://s.weibo.com/weibo?q=%23APEC%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E6%9C%AA%E6%9D%A5%E5%90%88%E4%BD%9C%E5%BC%80%E5%90%AF%E6%96%B0%E8%B7%AF%E5%BE%84%23) `731.0K 🔥`
1. [中餐厅张雅琪这个发型](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E5%BC%A0%E9%9B%85%E7%90%AA%E8%BF%99%E4%B8%AA%E5%8F%91%E5%9E%8B%23) `512.2K 🔥`
1. [孟子义常驻好六](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B8%B8%E9%A9%BB%E5%A5%BD%E5%85%AD%23) `320.5K 🔥`
1. [找到王俊凯折个鸡卖不出去的原因了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%98%E4%B8%AA%E9%B8%A1%E5%8D%96%E4%B8%8D%E5%87%BA%E5%8E%BB%E7%9A%84%E5%8E%9F%E5%9B%A0%E4%BA%86%23) `319.8K 🔥`
1. [张柏芝真的把大儿子教得很好](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E7%9C%9F%E7%9A%84%E6%8A%8A%E5%A4%A7%E5%84%BF%E5%AD%90%E6%95%99%E5%BE%97%E5%BE%88%E5%A5%BD%23) `318.0K 🔥`
1. [红霞在广东惠州登陆 (Hongxia lands in Huizhou, Guangdong)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%E5%9C%A8%E5%B9%BF%E4%B8%9C%E6%83%A0%E5%B7%9E%E7%99%BB%E9%99%86%23) `307.7K 🔥`
1. [生理性喜欢是很多孽缘的开始 (Physiological love is the beginning of many bad relationships)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E5%BE%88%E5%A4%9A%E5%AD%BD%E7%BC%98%E7%9A%84%E5%BC%80%E5%A7%8B%23) `275.0K 🔥`
1. [谢霆锋领带上有只白蝴蝶 (There is a white butterfly on Nicholas Tse's tie)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E9%A2%86%E5%B8%A6%E4%B8%8A%E6%9C%89%E5%8F%AA%E7%99%BD%E8%9D%B4%E8%9D%B6%23) `243.0K 🔥`
1. [长得好看的人在人群中就像开了高清 (Good-looking people look like they have high-definition turned on in a crowd)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%97%E5%A5%BD%E7%9C%8B%E7%9A%84%E4%BA%BA%E5%9C%A8%E4%BA%BA%E7%BE%A4%E4%B8%AD%E5%B0%B1%E5%83%8F%E5%BC%80%E4%BA%86%E9%AB%98%E6%B8%85%23) `197.3K 🔥`
1. [卫健委介入24岁女孩正颌手术被做反 (The National Health Commission intervened in a 24-year-old girl's orthognathic surgery that was reversed)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E4%BB%8B%E5%85%A524%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E8%A2%AB%E5%81%9A%E5%8F%8D%23) `318.3K 🔥` `-73%`
1. [感觉好多人没有基本礼貌](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%A5%BD%E5%A4%9A%E4%BA%BA%E6%B2%A1%E6%9C%89%E5%9F%BA%E6%9C%AC%E7%A4%BC%E8%B2%8C%23) `189.7K 🔥` `-28%`
1. [BY2被陌生人按家门密码](https://s.weibo.com/weibo?q=%23BY2%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%8C%89%E5%AE%B6%E9%97%A8%E5%AF%86%E7%A0%81%23) `166.4K 🔥` `-38%`
1. [长鑫科技一签能赚多少](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%80%E7%AD%BE%E8%83%BD%E8%B5%9A%E5%A4%9A%E5%B0%91%23) `143.1K 🔥` `-56%`
1. [深圳台风](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%8F%B0%E9%A3%8E%23) `143.0K 🔥` `-61%`

Updated at 2026-07-26 14:35:11

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
