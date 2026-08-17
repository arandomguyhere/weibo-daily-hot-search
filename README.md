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

1. [陈都灵吃到关晓彤的瓜会去求证 (Chen Duling will seek confirmation after eating Guan Xiaotong's melon)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%90%83%E5%88%B0%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E7%93%9C%E4%BC%9A%E5%8E%BB%E6%B1%82%E8%AF%81%23) `707.7K 🔥` `NEW`
1. [GQ 国乒](https://s.weibo.com/weibo?q=%23GQ%20%E5%9B%BD%E4%B9%92%23) `667.8K 🔥` `NEW`
1. [孙颖莎王楚钦GQ封面](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6GQ%E5%B0%81%E9%9D%A2%23) `464.4K 🔥` `NEW`
1. [3孩非亲生案](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%23) `412.8K 🔥` `NEW`
1. [爸爸酒后熟睡翻身压住婴儿脑袋](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E9%85%92%E5%90%8E%E7%86%9F%E7%9D%A1%E7%BF%BB%E8%BA%AB%E5%8E%8B%E4%BD%8F%E5%A9%B4%E5%84%BF%E8%84%91%E8%A2%8B%23) `318.1K 🔥` `NEW`
1. [宇树发布超人机器人](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%8F%91%E5%B8%83%E8%B6%85%E4%BA%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `290.6K 🔥` `NEW`
1. [美国航母帝国遭遇三重危机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%88%AA%E6%AF%8D%E5%B8%9D%E5%9B%BD%E9%81%AD%E9%81%87%E4%B8%89%E9%87%8D%E5%8D%B1%E6%9C%BA%23) `286.3K 🔥` `NEW`
1. [劣质手机壳或降低男性生育能力](https://s.weibo.com/weibo?q=%23%E5%8A%A3%E8%B4%A8%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%88%96%E9%99%8D%E4%BD%8E%E7%94%B7%E6%80%A7%E7%94%9F%E8%82%B2%E8%83%BD%E5%8A%9B%23) `282.5K 🔥` `NEW`
1. [瑞幸七夕作品博主近30日掉粉5万](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E4%B8%83%E5%A4%95%E4%BD%9C%E5%93%81%E5%8D%9A%E4%B8%BB%E8%BF%9130%E6%97%A5%E6%8E%89%E7%B2%895%E4%B8%87%23) `280.6K 🔥` `NEW`
1. [三亚一沙滩上发现大量图钉](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E4%B8%80%E6%B2%99%E6%BB%A9%E4%B8%8A%E5%8F%91%E7%8E%B0%E5%A4%A7%E9%87%8F%E5%9B%BE%E9%92%89%23) `276.3K 🔥` `NEW`
1. [妻子聊天记录被发现报警称被侵犯隐私 (Wife's chat records were discovered and she called the police to report that her privacy had been violated)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E8%A2%AB%E5%8F%91%E7%8E%B0%E6%8A%A5%E8%AD%A6%E7%A7%B0%E8%A2%AB%E4%BE%B5%E7%8A%AF%E9%9A%90%E7%A7%81%23) `268.3K 🔥` `NEW`
1. [霉霉短发现身婚礼](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E7%9F%AD%E5%8F%91%E7%8E%B0%E8%BA%AB%E5%A9%9A%E7%A4%BC%23) `265.5K 🔥` `NEW`
1. [终于懂意大利人看菠萝披萨了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E6%84%8F%E5%A4%A7%E5%88%A9%E4%BA%BA%E7%9C%8B%E8%8F%A0%E8%90%9D%E6%8A%AB%E8%90%A8%E4%BA%86%23) `229.0K 🔥` `NEW`
1. [双高胎为了看自担演唱会才肯打扮](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E9%AB%98%E8%83%8E%E4%B8%BA%E4%BA%86%E7%9C%8B%E8%87%AA%E6%8B%85%E6%BC%94%E5%94%B1%E4%BC%9A%E6%89%8D%E8%82%AF%E6%89%93%E6%89%AE%23) `225.9K 🔥` `NEW`
1. [李乃文胡军给陈哲远当经纪人](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E8%83%A1%E5%86%9B%E7%BB%99%E9%99%88%E5%93%B2%E8%BF%9C%E5%BD%93%E7%BB%8F%E7%BA%AA%E4%BA%BA%23) `225.1K 🔥` `NEW`
1. [桃黑黑被指搭腔未劝阻](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E8%A2%AB%E6%8C%87%E6%90%AD%E8%85%94%E6%9C%AA%E5%8A%9D%E9%98%BB%23) `224.0K 🔥` `NEW`
1. [刘冲手机里的王一博](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E6%89%8B%E6%9C%BA%E9%87%8C%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `222.8K 🔥` `NEW`
1. [韩军向越界朝鲜军人鸣枪警告](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%86%9B%E5%90%91%E8%B6%8A%E7%95%8C%E6%9C%9D%E9%B2%9C%E5%86%9B%E4%BA%BA%E9%B8%A3%E6%9E%AA%E8%AD%A6%E5%91%8A%23) `220.9K 🔥` `NEW`
1. [爱尔兰医生猥亵车祸女伤员被判刑](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%B0%94%E5%85%B0%E5%8C%BB%E7%94%9F%E7%8C%A5%E4%BA%B5%E8%BD%A6%E7%A5%B8%E5%A5%B3%E4%BC%A4%E5%91%98%E8%A2%AB%E5%88%A4%E5%88%91%23) `219.8K 🔥` `NEW`
1. [头部短剧演员喊话支付宝拍剧](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E9%83%A8%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E5%96%8A%E8%AF%9D%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8B%8D%E5%89%A7%23) `218.6K 🔥` `NEW`
1. [内娱导演 是时候有危机意识了 (Domestic entertainment director, it’s time to be aware of the crisis)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%AF%BC%E6%BC%94%20%E6%98%AF%E6%97%B6%E5%80%99%E6%9C%89%E5%8D%B1%E6%9C%BA%E6%84%8F%E8%AF%86%E4%BA%86%23) `217.2K 🔥` `NEW`
1. [张凌赫人气](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BA%BA%E6%B0%94%23) `214.0K 🔥` `NEW`
1. [马嘉祺公司回应冒名下架视频](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%85%AC%E5%8F%B8%E5%9B%9E%E5%BA%94%E5%86%92%E5%90%8D%E4%B8%8B%E6%9E%B6%E8%A7%86%E9%A2%91%23) `211.7K 🔥` `NEW`
1. [杨幂ELLE金九封面](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82ELLE%E9%87%91%E4%B9%9D%E5%B0%81%E9%9D%A2%23) `211.0K 🔥` `NEW`
1. [丁禹兮扛剧能力](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%89%9B%E5%89%A7%E8%83%BD%E5%8A%9B%23) `208.9K 🔥` `NEW`
1. [3孩非亲生奶奶恳求留下1个孩子遭拒](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B6%E5%A5%B6%E6%81%B3%E6%B1%82%E7%95%99%E4%B8%8B1%E4%B8%AA%E5%AD%A9%E5%AD%90%E9%81%AD%E6%8B%92%23) `609.3K 🔥` `+62%`
1. [9块9的手机壳还敢买吗](https://s.weibo.com/weibo?q=%239%E5%9D%979%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%B3%E8%BF%98%E6%95%A2%E4%B9%B0%E5%90%97%23) `1.6M 🔥`
1. [好想把披哥淘汰了复活浪姐](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E6%8A%8A%E6%8A%AB%E5%93%A5%E6%B7%98%E6%B1%B0%E4%BA%86%E5%A4%8D%E6%B4%BB%E6%B5%AA%E5%A7%90%23) `914.3K 🔥`
1. [暑期服务消费潜能加速释放 (Accelerating the release of summer service consumption potential)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E6%BD%9C%E8%83%BD%E5%8A%A0%E9%80%9F%E9%87%8A%E6%94%BE%23) `718.6K 🔥`
1. [送礼上淘宝 (Give gifts on Taobao)](https://s.weibo.com/weibo?q=%23%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `583.2K 🔥`
1. [演员海顿潘妮蒂尔去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%B5%B7%E9%A1%BF%E6%BD%98%E5%A6%AE%E8%92%82%E5%B0%94%E5%8E%BB%E4%B8%96%23) `320.4K 🔥`
1. [Jennie手抖 (Jennie's hands are shaking)](https://s.weibo.com/weibo?q=%23Jennie%E6%89%8B%E6%8A%96%23) `320.0K 🔥`
1. [女方回应结婚8年3孩非亲生](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BB%93%E5%A9%9A8%E5%B9%B43%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `316.1K 🔥`
1. [鹿晗去看极光了 (Luhan went to see the Aurora)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8E%BB%E7%9C%8B%E6%9E%81%E5%85%89%E4%BA%86%23) `315.2K 🔥`
1. [日网友感慨王楚钦每次都进决赛不易](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%BD%91%E5%8F%8B%E6%84%9F%E6%85%A8%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%AF%8F%E6%AC%A1%E9%83%BD%E8%BF%9B%E5%86%B3%E8%B5%9B%E4%B8%8D%E6%98%93%23) `286.8K 🔥`
1. [曝虞书欣补偿一念江南换角亏损](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A1%A5%E5%81%BF%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E6%8D%A2%E8%A7%92%E4%BA%8F%E6%8D%9F%23) `273.9K 🔥`
1. [长鑫科技总市值逼近4万亿](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E6%80%BB%E5%B8%82%E5%80%BC%E9%80%BC%E8%BF%914%E4%B8%87%E4%BA%BF%23) `269.5K 🔥`
1. [问界儿童车即将上市 (Wenjie children's car is about to be launched)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E5%84%BF%E7%AB%A5%E8%BD%A6%E5%8D%B3%E5%B0%86%E4%B8%8A%E5%B8%82%23) `368.1K 🔥` `-50%`
1. [王俊凯妈妈好年轻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A6%88%E5%A6%88%E5%A5%BD%E5%B9%B4%E8%BD%BB%23) `317.0K 🔥` `-45%`
1. [建议这类手机壳赶紧扔掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%BF%99%E7%B1%BB%E6%89%8B%E6%9C%BA%E5%A3%B3%E8%B5%B6%E7%B4%A7%E6%89%94%E6%8E%89%23) `314.0K 🔥` `-41%`
1. [迪丽热巴在大学是辩论赛主席 (Dilraba is the chairperson of the debate competition at the university)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%A8%E5%A4%A7%E5%AD%A6%E6%98%AF%E8%BE%A9%E8%AE%BA%E8%B5%9B%E4%B8%BB%E5%B8%AD%23) `232.3K 🔥` `-40%`
1. [欢天喜地七仙女凡间造型](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E5%87%A1%E9%97%B4%E9%80%A0%E5%9E%8B%23) `231.9K 🔥` `-30%`
1. [披哥一公8位队长 (Pi Ge Yigong 8 captains)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E4%B8%80%E5%85%AC8%E4%BD%8D%E9%98%9F%E9%95%BF%23) `230.4K 🔥` `-56%`
1. [胖东来](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%23) `229.5K 🔥` `-41%`
1. [瑞幸联名漫画 抄袭 (Luckin co-branded comics plagiarism)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%E6%BC%AB%E7%94%BB%20%E6%8A%84%E8%A2%AD%23) `227.1K 🔥` `-32%`
1. [王曼昱世排积分破万创新高 (Wang Manyu’s world ranking points reached a new high)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%B8%96%E6%8E%92%E7%A7%AF%E5%88%86%E7%A0%B4%E4%B8%87%E5%88%9B%E6%96%B0%E9%AB%98%23) `222.3K 🔥` `-36%`
1. [人生不只有考公考研两条路 (There are not only two paths in life: public examination and postgraduate examination.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E4%B8%8D%E5%8F%AA%E6%9C%89%E8%80%83%E5%85%AC%E8%80%83%E7%A0%94%E4%B8%A4%E6%9D%A1%E8%B7%AF%23) `216.8K 🔥` `-49%`
1. [王橹杰期待跟穆祉丞的双人舞台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%9C%9F%E5%BE%85%E8%B7%9F%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9A%84%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%23) `214.9K 🔥` `-38%`
1. [纪念江泽民同志诞辰100周年大会 (Conference to commemorate the 100th anniversary of the birth of Comrade Jiang Zemin)](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%BF%B5%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%23) `213.3K 🔥` `-34%`
1. [AI预测未来增加1.7亿新岗位 (AI predicts 170 million new jobs will be created in the future)](https://s.weibo.com/weibo?q=%23AI%E9%A2%84%E6%B5%8B%E6%9C%AA%E6%9D%A5%E5%A2%9E%E5%8A%A01.7%E4%BA%BF%E6%96%B0%E5%B2%97%E4%BD%8D%23) `209.6K 🔥` `-39%`
1. [辟谣恋情都按谷爱凌这个标准来 (To refute rumors about love affairs, follow Gu Ailing’s standards)](https://s.weibo.com/weibo?q=%23%E8%BE%9F%E8%B0%A3%E6%81%8B%E6%83%85%E9%83%BD%E6%8C%89%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E4%B8%AA%E6%A0%87%E5%87%86%E6%9D%A5%23) `207.8K 🔥` `-36%`

Updated at 2026-08-17 15:11:59

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
