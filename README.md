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

1. [政府工作报告 (government work report)](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%23) `642.9K 🔥` `NEW`
1. [周刊君带你看两会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%88%8A%E5%90%9B%E5%B8%A6%E4%BD%A0%E7%9C%8B%E4%B8%A4%E4%BC%9A%23) `562.8K 🔥` `NEW`
1. [建议缩短研究生考录时间](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%BC%A9%E7%9F%AD%E7%A0%94%E7%A9%B6%E7%94%9F%E8%80%83%E5%BD%95%E6%97%B6%E9%97%B4%23) `346.9K 🔥` `NEW`
1. [我国经济顶压前行展现强大韧性](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E9%A1%B6%E5%8E%8B%E5%89%8D%E8%A1%8C%E5%B1%95%E7%8E%B0%E5%BC%BA%E5%A4%A7%E9%9F%A7%E6%80%A7%23) `299.0K 🔥` `NEW`
1. [女子半年未回家走廊被邻居装修了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B4%E6%9C%AA%E5%9B%9E%E5%AE%B6%E8%B5%B0%E5%BB%8A%E8%A2%AB%E9%82%BB%E5%B1%85%E8%A3%85%E4%BF%AE%E4%BA%86%23) `296.8K 🔥` `NEW`
1. [neo是定位卖给国外中学生的](https://s.weibo.com/weibo?q=%23neo%E6%98%AF%E5%AE%9A%E4%BD%8D%E5%8D%96%E7%BB%99%E5%9B%BD%E5%A4%96%E4%B8%AD%E5%AD%A6%E7%94%9F%E7%9A%84%23) `169.0K 🔥` `NEW`
1. [人大代表说年轻人11点一定要睡觉](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E8%AF%B4%E5%B9%B4%E8%BD%BB%E4%BA%BA11%E7%82%B9%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9D%A1%E8%A7%89%23) `153.3K 🔥` `NEW`
1. [张杰鸟巢演唱会12万张票秒罄](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A12%E4%B8%87%E5%BC%A0%E7%A5%A8%E7%A7%92%E7%BD%84%23) `152.8K 🔥` `NEW`
1. [郭敬明发了邓为眼部特写](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E4%BA%86%E9%82%93%E4%B8%BA%E7%9C%BC%E9%83%A8%E7%89%B9%E5%86%99%23) `150.9K 🔥` `NEW`
1. [伊朗的反击愈发猛烈](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%8F%8D%E5%87%BB%E6%84%88%E5%8F%91%E7%8C%9B%E7%83%88%23) `138.1K 🔥` `NEW`
1. [跟上白鹿新动态 (Keep up with the latest news from Bailu)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E4%B8%8A%E7%99%BD%E9%B9%BF%E6%96%B0%E5%8A%A8%E6%80%81%23) `127.3K 🔥` `NEW`
1. [中方将派特使访问中东](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E6%B4%BE%E7%89%B9%E4%BD%BF%E8%AE%BF%E9%97%AE%E4%B8%AD%E4%B8%9C%23) `126.8K 🔥` `NEW`
1. [35岁就业歧视应该得到了缓解](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%B0%B1%E4%B8%9A%E6%AD%A7%E8%A7%86%E5%BA%94%E8%AF%A5%E5%BE%97%E5%88%B0%E4%BA%86%E7%BC%93%E8%A7%A3%23) `119.6K 🔥` `NEW`
1. [建议优化大学生婚育教育体系](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BC%98%E5%8C%96%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%A9%9A%E8%82%B2%E6%95%99%E8%82%B2%E4%BD%93%E7%B3%BB%23) `117.1K 🔥` `NEW`
1. [比亚迪闪充](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%97%AA%E5%85%85%23) `116.4K 🔥` `NEW`
1. [第一次见把舞狮耍成赖皮蛇](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E6%8A%8A%E8%88%9E%E7%8B%AE%E8%80%8D%E6%88%90%E8%B5%96%E7%9A%AE%E8%9B%87%23) `116.3K 🔥` `NEW`
1. [虎杖悠仁摘下兜帽好帅](https://s.weibo.com/weibo?q=%23%E8%99%8E%E6%9D%96%E6%82%A0%E4%BB%81%E6%91%98%E4%B8%8B%E5%85%9C%E5%B8%BD%E5%A5%BD%E5%B8%85%23) `116.3K 🔥` `NEW`
1. [谷歌DeepMind负责人喊话千问员工](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8CDeepMind%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%96%8A%E8%AF%9D%E5%8D%83%E9%97%AE%E5%91%98%E5%B7%A5%23) `116.1K 🔥` `NEW`
1. [明日方舟](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `115.9K 🔥` `NEW`
1. [霍启刚希望明年春晚有香港分会场](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E5%B8%8C%E6%9C%9B%E6%98%8E%E5%B9%B4%E6%98%A5%E6%99%9A%E6%9C%89%E9%A6%99%E6%B8%AF%E5%88%86%E4%BC%9A%E5%9C%BA%23) `826.1K 🔥` `+86%`
1. [李娜同款起亚新狮铂拓界焕新上市 (Li Na’s same Kia Lion is now launched)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A8%9C%E5%90%8C%E6%AC%BE%E8%B5%B7%E4%BA%9A%E6%96%B0%E7%8B%AE%E9%93%82%E6%8B%93%E7%95%8C%E7%84%95%E6%96%B0%E4%B8%8A%E5%B8%82%23) `349.4K 🔥` `+70%`
1. [金饰克价涨到1605元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E6%B6%A8%E5%88%B01605%E5%85%83%23) `298.1K 🔥` `+54%`
1. [建议禁止性侵未成年罪犯进入幼儿园 (It is recommended that juvenile sexual offenders be prohibited from entering kindergartens)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%A6%81%E6%AD%A2%E6%80%A7%E4%BE%B5%E6%9C%AA%E6%88%90%E5%B9%B4%E7%BD%AA%E7%8A%AF%E8%BF%9B%E5%85%A5%E5%B9%BC%E5%84%BF%E5%9B%AD%23) `295.5K 🔥` `+24%`
1. [彩礼把社会责任转移成了家庭矛盾](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E7%A4%BC%E6%8A%8A%E7%A4%BE%E4%BC%9A%E8%B4%A3%E4%BB%BB%E8%BD%AC%E7%A7%BB%E6%88%90%E4%BA%86%E5%AE%B6%E5%BA%AD%E7%9F%9B%E7%9B%BE%23) `294.9K 🔥` `+122%`
1. [武林外传20年后最大彩蛋](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%9E%97%E5%A4%96%E4%BC%A020%E5%B9%B4%E5%90%8E%E6%9C%80%E5%A4%A7%E5%BD%A9%E8%9B%8B%23) `293.0K 🔥` `+94%`
1. [代表建议统一全国婚假天数](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E5%BB%BA%E8%AE%AE%E7%BB%9F%E4%B8%80%E5%85%A8%E5%9B%BD%E5%A9%9A%E5%81%87%E5%A4%A9%E6%95%B0%23) `220.6K 🔥` `+55%`
1. [皮肤HPV感染其实很常见 (Skin HPV infection is actually very common)](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%82%A4HPV%E6%84%9F%E6%9F%93%E5%85%B6%E5%AE%9E%E5%BE%88%E5%B8%B8%E8%A7%81%23) `116.5K 🔥` `+65%`
1. [吴京 公了别人嬷了自己 (Wu Jing cheated on others and cheated on him)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E5%85%AC%E4%BA%86%E5%88%AB%E4%BA%BA%E5%AC%B7%E4%BA%86%E8%87%AA%E5%B7%B1%23) `116.4K 🔥` `+24%`
1. [中国芯片攻关取得新突破 (China has made new breakthroughs in chip research)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%8A%AF%E7%89%87%E6%94%BB%E5%85%B3%E5%8F%96%E5%BE%97%E6%96%B0%E7%AA%81%E7%A0%B4%23) `116.2K 🔥` `+42%`
1. [推进祖国统一 (Promote the reunification of the motherland)](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E8%BF%9B%E7%A5%96%E5%9B%BD%E7%BB%9F%E4%B8%80%23) `116.2K 🔥` `+29%`
1. [电影我的妈耶定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%88%91%E7%9A%84%E5%A6%88%E8%80%B6%E5%AE%9A%E6%A1%A3%23) `116.1K 🔥` `+44%`
1. [Xteam对战北京WBG](https://s.weibo.com/weibo?q=%23Xteam%E5%AF%B9%E6%88%98%E5%8C%97%E4%BA%ACWBG%23) `116.1K 🔥` `+27%`
1. [十四届全国人大四次会议开幕会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%BC%80%E5%B9%95%E4%BC%9A%23) `116.1K 🔥` `+67%`
1. [医院回应63岁高龄孕妇产女](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%9463%E5%B2%81%E9%AB%98%E9%BE%84%E5%AD%95%E5%A6%87%E4%BA%A7%E5%A5%B3%23) `116.0K 🔥` `+101%`
1. [建议春节9天假代表收到很多祝贺 (The representatives received many congratulations on the proposed 9-day Spring Festival holiday.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%98%A5%E8%8A%829%E5%A4%A9%E5%81%87%E4%BB%A3%E8%A1%A8%E6%94%B6%E5%88%B0%E5%BE%88%E5%A4%9A%E7%A5%9D%E8%B4%BA%23) `1.1M 🔥`
1. [建议三孩每月补贴5000元至3岁](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%89%E5%AD%A9%E6%AF%8F%E6%9C%88%E8%A1%A5%E8%B4%B45000%E5%85%83%E8%87%B33%E5%B2%81%23) `358.3K 🔥`
1. [伊朗首次使用最快自杀式无人机 (Iran uses fastest suicide drone for first time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8%E6%9C%80%E5%BF%AB%E8%87%AA%E6%9D%80%E5%BC%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `356.0K 🔥`
1. [奶奶你是一块金子放错了地方 (Grandma, you are a piece of gold that has been misplaced.)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E4%BD%A0%E6%98%AF%E4%B8%80%E5%9D%97%E9%87%91%E5%AD%90%E6%94%BE%E9%94%99%E4%BA%86%E5%9C%B0%E6%96%B9%23) `300.1K 🔥`
1. [郭晓婷王天辰结婚共创来了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E7%BB%93%E5%A9%9A%E5%85%B1%E5%88%9B%E6%9D%A5%E4%BA%86%23) `292.8K 🔥`
1. [伊朗袭击以国防部大楼 (Iran attacks Israeli defense building)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E4%BB%A5%E5%9B%BD%E9%98%B2%E9%83%A8%E5%A4%A7%E6%A5%BC%23) `280.2K 🔥`
1. [小偷来了都要先玩俩小时](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%81%B7%E6%9D%A5%E4%BA%86%E9%83%BD%E8%A6%81%E5%85%88%E7%8E%A9%E4%BF%A9%E5%B0%8F%E6%97%B6%23) `152.4K 🔥`
1. [伊朗高官让特朗普想想美以谁优先](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%AB%98%E5%AE%98%E8%AE%A9%E7%89%B9%E6%9C%97%E6%99%AE%E6%83%B3%E6%83%B3%E7%BE%8E%E4%BB%A5%E8%B0%81%E4%BC%98%E5%85%88%23) `149.6K 🔥`
1. [张杰演唱会抢票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A2%E7%A5%A8%23) `138.1K 🔥`
1. [永远不要在谈话中自贬](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E4%B8%8D%E8%A6%81%E5%9C%A8%E8%B0%88%E8%AF%9D%E4%B8%AD%E8%87%AA%E8%B4%AC%23) `135.8K 🔥`
1. [百妖谱](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%A6%96%E8%B0%B1%23) `116.6K 🔥`
1. [2026政府工作报告 (2026 Government Work Report)](https://s.weibo.com/weibo?q=%232026%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%23) `116.6K 🔥`
1. [140斤狗送狗肉馆途中女子600元买下](https://s.weibo.com/weibo?q=%23140%E6%96%A4%E7%8B%97%E9%80%81%E7%8B%97%E8%82%89%E9%A6%86%E9%80%94%E4%B8%AD%E5%A5%B3%E5%AD%90600%E5%85%83%E4%B9%B0%E4%B8%8B%23) `116.6K 🔥`
1. [终于明白项羽为什么不肯过江东 (Finally understood why Xiang Yu refused to cross Jiangdong)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E9%A1%B9%E7%BE%BD%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%82%AF%E8%BF%87%E6%B1%9F%E4%B8%9C%23) `116.4K 🔥`
1. [建议尽量不要调休 (It is recommended not to take any time off as much as possible)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%BD%E9%87%8F%E4%B8%8D%E8%A6%81%E8%B0%83%E4%BC%91%23) `447.6K 🔥` `-46%`
1. [鼓励3岁以下婴幼儿父母弹性工作制](https://s.weibo.com/weibo?q=%23%E9%BC%93%E5%8A%B13%E5%B2%81%E4%BB%A5%E4%B8%8B%E5%A9%B4%E5%B9%BC%E5%84%BF%E7%88%B6%E6%AF%8D%E5%BC%B9%E6%80%A7%E5%B7%A5%E4%BD%9C%E5%88%B6%23) `144.0K 🔥` `-53%`
1. [懂中日韩语的都沉默了](https://s.weibo.com/weibo?q=%23%E6%87%82%E4%B8%AD%E6%97%A5%E9%9F%A9%E8%AF%AD%E7%9A%84%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `127.7K 🔥` `-32%`

Updated at 2026-03-05 15:52:32

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
