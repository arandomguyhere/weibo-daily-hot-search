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

1. [美国2战机飞行表演时撞毁 (Two U.S. fighter jets crashed during flight show)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD2%E6%88%98%E6%9C%BA%E9%A3%9E%E8%A1%8C%E8%A1%A8%E6%BC%94%E6%97%B6%E6%92%9E%E6%AF%81%23) `963.1K 🔥` `NEW`
1. [网传歌手袭榜改成大魔王了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%AD%8C%E6%89%8B%E8%A2%AD%E6%A6%9C%E6%94%B9%E6%88%90%E5%A4%A7%E9%AD%94%E7%8E%8B%E4%BA%86%23) `888.8K 🔥` `NEW`
1. [吴敬平谈樊振东欧冠失利](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%95%AC%E5%B9%B3%E8%B0%88%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AC%A7%E5%86%A0%E5%A4%B1%E5%88%A9%23) `712.9K 🔥` `NEW`
1. [柳州再次发生3.3级地震](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%86%8D%E6%AC%A1%E5%8F%91%E7%94%9F3.3%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `649.8K 🔥` `NEW`
1. [何超仪公开何超蕸真正死因](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E4%BB%AA%E5%85%AC%E5%BC%80%E4%BD%95%E8%B6%85%E8%95%B8%E7%9C%9F%E6%AD%A3%E6%AD%BB%E5%9B%A0%23) `600.8K 🔥` `NEW`
1. [张雪机车落后雅马哈46分](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%90%BD%E5%90%8E%E9%9B%85%E9%A9%AC%E5%93%8846%E5%88%86%23) `511.0K 🔥` `NEW`
1. [陈泽新综艺导演是五哈导演](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%E6%96%B0%E7%BB%BC%E8%89%BA%E5%AF%BC%E6%BC%94%E6%98%AF%E4%BA%94%E5%93%88%E5%AF%BC%E6%BC%94%23) `322.4K 🔥` `NEW`
1. [黄仁勋打卡炸酱面店员称生意火爆](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%89%93%E5%8D%A1%E7%82%B8%E9%85%B1%E9%9D%A2%E5%BA%97%E5%91%98%E7%A7%B0%E7%94%9F%E6%84%8F%E7%81%AB%E7%88%86%23) `320.4K 🔥` `NEW`
1. [老鼠有人事变动咋不通知一下呢](https://s.weibo.com/weibo?q=%23%E8%80%81%E9%BC%A0%E6%9C%89%E4%BA%BA%E4%BA%8B%E5%8F%98%E5%8A%A8%E5%92%8B%E4%B8%8D%E9%80%9A%E7%9F%A5%E4%B8%80%E4%B8%8B%E5%91%A2%23) `319.0K 🔥` `NEW`
1. [毛巾少爷更新动态与二叔共同出镜](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E6%9B%B4%E6%96%B0%E5%8A%A8%E6%80%81%E4%B8%8E%E4%BA%8C%E5%8F%94%E5%85%B1%E5%90%8C%E5%87%BA%E9%95%9C%23) `311.0K 🔥` `NEW`
1. [杨超越晒豆荚娃娃 (Yang Chaoyue shows off pod dolls)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%99%92%E8%B1%86%E8%8D%9A%E5%A8%83%E5%A8%83%23) `307.6K 🔥` `NEW`
1. [美国一男子扶梯摔倒遭衣服勒喉身亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E7%94%B7%E5%AD%90%E6%89%B6%E6%A2%AF%E6%91%94%E5%80%92%E9%81%AD%E8%A1%A3%E6%9C%8D%E5%8B%92%E5%96%89%E8%BA%AB%E4%BA%A1%23) `306.0K 🔥` `NEW`
1. [窦骁翟子路你们不要再打了](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%AA%81%E7%BF%9F%E5%AD%90%E8%B7%AF%E4%BD%A0%E4%BB%AC%E4%B8%8D%E8%A6%81%E5%86%8D%E6%89%93%E4%BA%86%23) `303.4K 🔥` `NEW`
1. [男子脸红被查酒驾查出血液病](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%84%B8%E7%BA%A2%E8%A2%AB%E6%9F%A5%E9%85%92%E9%A9%BE%E6%9F%A5%E5%87%BA%E8%A1%80%E6%B6%B2%E7%97%85%23) `302.6K 🔥` `NEW`
1. [男方提分手女方拒退18.8万彩礼](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%96%B9%E6%8F%90%E5%88%86%E6%89%8B%E5%A5%B3%E6%96%B9%E6%8B%92%E9%80%8018.8%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `296.8K 🔥` `NEW`
1. [骑士vs活塞](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%ABvs%E6%B4%BB%E5%A1%9E%23) `296.6K 🔥` `NEW`
1. [杨紫家业央8首播收视率](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AE%B6%E4%B8%9A%E5%A4%AE8%E9%A6%96%E6%92%AD%E6%94%B6%E8%A7%86%E7%8E%87%23) `289.7K 🔥` `NEW`
1. [樊振东回应获欧冠冠军](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BA%94%E8%8E%B7%E6%AC%A7%E5%86%A0%E5%86%A0%E5%86%9B%23) `283.6K 🔥` `NEW`
1. [aespa预告照](https://s.weibo.com/weibo?q=%23aespa%E9%A2%84%E5%91%8A%E7%85%A7%23) `277.8K 🔥` `NEW`
1. [长鑫科技IPO受益股](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80IPO%E5%8F%97%E7%9B%8A%E8%82%A1%23) `276.5K 🔥` `NEW`
1. [刘浩存捡蝴蝶太灵动 (Liu Haocun picks up butterflies too smartly)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%8D%A1%E8%9D%B4%E8%9D%B6%E5%A4%AA%E7%81%B5%E5%8A%A8%23) `272.2K 🔥` `NEW`
1. [全新Siri自动删除聊天记录](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0Siri%E8%87%AA%E5%8A%A8%E5%88%A0%E9%99%A4%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `271.7K 🔥` `NEW`
1. [ok了老铁比五哈更搞笑](https://s.weibo.com/weibo?q=%23ok%E4%BA%86%E8%80%81%E9%93%81%E6%AF%94%E4%BA%94%E5%93%88%E6%9B%B4%E6%90%9E%E7%AC%91%23) `1.1M 🔥` `+607%`
1. [京东外卖请客福利发发发 (Jingdong’s takeout treat customers with benefits)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%A4%96%E5%8D%96%E8%AF%B7%E5%AE%A2%E7%A6%8F%E5%88%A9%E5%8F%91%E5%8F%91%E5%8F%91%23) `1.1M 🔥` `+65%`
1. [仇人租到这种房我也释怀了 (I feel relieved that my enemy rented a house like this.)](https://s.weibo.com/weibo?q=%23%E4%BB%87%E4%BA%BA%E7%A7%9F%E5%88%B0%E8%BF%99%E7%A7%8D%E6%88%BF%E6%88%91%E4%B9%9F%E9%87%8A%E6%80%80%E4%BA%86%23) `1.1M 🔥` `+164%`
1. [张艺兴君佩全球首位品牌代言人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E5%90%9B%E4%BD%A9%E5%85%A8%E7%90%83%E9%A6%96%E4%BD%8D%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `778.0K 🔥` `+251%`
1. [谁懂姜乘澜这个丸子头教程](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E5%A7%9C%E4%B9%98%E6%BE%9C%E8%BF%99%E4%B8%AA%E4%B8%B8%E5%AD%90%E5%A4%B4%E6%95%99%E7%A8%8B%23) `765.6K 🔥` `+402%`
1. [柳州地震转移群众7000余人 (Liuzhou earthquake evacuates more than 7,000 people)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E8%BD%AC%E7%A7%BB%E7%BE%A4%E4%BC%977000%E4%BD%99%E4%BA%BA%23) `696.4K 🔥` `+94%`
1. [柳州地震现场情况](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E7%8E%B0%E5%9C%BA%E6%83%85%E5%86%B5%23) `609.0K 🔥` `+348%`
1. [男子拒绝广州调岗山东被炒获赔50万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%92%E7%BB%9D%E5%B9%BF%E5%B7%9E%E8%B0%83%E5%B2%97%E5%B1%B1%E4%B8%9C%E8%A2%AB%E7%82%92%E8%8E%B7%E8%B5%9450%E4%B8%87%23) `469.1K 🔥` `+108%`
1. [马尔代夫发生史上最严重单次潜水事故 (Worst single diving accident in Maldives history)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E5%8F%91%E7%94%9F%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E9%87%8D%E5%8D%95%E6%AC%A1%E6%BD%9C%E6%B0%B4%E4%BA%8B%E6%95%85%23) `456.7K 🔥` `+215%`
1. [柳州地震 (Liuzhou earthquake)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%23) `336.7K 🔥` `+186%`
1. [张凌赫gucci大秀登美趋第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABgucci%E5%A4%A7%E7%A7%80%E7%99%BB%E7%BE%8E%E8%B6%8B%E7%AC%AC%E4%B8%80%23) `323.1K 🔥` `+43%`
1. [店员回应降价iPhone17被疯抢 (The store clerk responded to the price reduction and iPhone 17 was snapped up)](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%91%98%E5%9B%9E%E5%BA%94%E9%99%8D%E4%BB%B7iPhone17%E8%A2%AB%E7%96%AF%E6%8A%A2%23) `316.9K 🔥` `+40%`
1. [谢娜晒和李小冉聊天记录 (Chat records of Xie Na and Li Xiaoran)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E5%92%8C%E6%9D%8E%E5%B0%8F%E5%86%89%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `315.4K 🔥` `+133%`
1. [给阿嬷的情书拍得女主直掉眼泪](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%8B%8D%E5%BE%97%E5%A5%B3%E4%B8%BB%E7%9B%B4%E6%8E%89%E7%9C%BC%E6%B3%AA%23) `313.7K 🔥` `+328%`
1. [任何关系里都要遵守有客之道 (In any relationship, we must abide by the principle of hospitality)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E4%BD%95%E5%85%B3%E7%B3%BB%E9%87%8C%E9%83%BD%E8%A6%81%E9%81%B5%E5%AE%88%E6%9C%89%E5%AE%A2%E4%B9%8B%E9%81%93%23) `313.2K 🔥` `+402%`
1. [AI预测世界杯西班牙夺冠](https://s.weibo.com/weibo?q=%23AI%E9%A2%84%E6%B5%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%23) `301.4K 🔥` `+109%`
1. [2026高考 (2026 College Entrance Examination)](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%23) `298.5K 🔥` `+131%`
1. [莫雷加德安慰樊振东 (Moregaard comforted Fan Zhendong)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E5%AE%89%E6%85%B0%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `294.3K 🔥` `+99%`
1. [对柳州地震启动三级应急服务响应](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E5%90%AF%E5%8A%A8%E4%B8%89%E7%BA%A7%E5%BA%94%E6%80%A5%E6%9C%8D%E5%8A%A1%E5%93%8D%E5%BA%94%23) `292.3K 🔥` `+72%`
1. [亚历山大MVP](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7MVP%23) `287.7K 🔥` `+213%`
1. [八旬老人公交上闭眼休息实则已死亡](https://s.weibo.com/weibo?q=%23%E5%85%AB%E6%97%AC%E8%80%81%E4%BA%BA%E5%85%AC%E4%BA%A4%E4%B8%8A%E9%97%AD%E7%9C%BC%E4%BC%91%E6%81%AF%E5%AE%9E%E5%88%99%E5%B7%B2%E6%AD%BB%E4%BA%A1%23) `285.5K 🔥` `+81%`
1. [男子连买9副耳机全部申请退货](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9E%E4%B9%B09%E5%89%AF%E8%80%B3%E6%9C%BA%E5%85%A8%E9%83%A8%E7%94%B3%E8%AF%B7%E9%80%80%E8%B4%A7%23) `284.7K 🔥` `+200%`
1. [和平统一后台湾可获稳定廉价能源 (After peaceful reunification, Taiwan can obtain stable and cheap energy)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%BB%9F%E4%B8%80%E5%90%8E%E5%8F%B0%E6%B9%BE%E5%8F%AF%E8%8E%B7%E7%A8%B3%E5%AE%9A%E5%BB%89%E4%BB%B7%E8%83%BD%E6%BA%90%23) `281.5K 🔥` `+113%`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `279.4K 🔥` `+94%`
1. [金珉奎 夜店 (Kim Min Kyu nightclub)](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%8F%89%E5%A5%8E%20%E5%A4%9C%E5%BA%97%23) `274.4K 🔥` `+110%`
1. [以德润网 (Yiderun.com)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%BE%B7%E6%B6%A6%E7%BD%91%23) `1.1M 🔥`
1. [曝最终版白玉兰男主提名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%80%E7%BB%88%E7%89%88%E7%99%BD%E7%8E%89%E5%85%B0%E7%94%B7%E4%B8%BB%E6%8F%90%E5%90%8D%23) `308.5K 🔥`
1. [广西柳州5.2级地震](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9F%B3%E5%B7%9E5.2%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `291.5K 🔥`
1. [广西柳州地震已致3人失联](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E5%B7%B2%E8%87%B43%E4%BA%BA%E5%A4%B1%E8%81%94%23) `3.4M 🔥` `-34%`
1. [樊振东欧冠冠军 (Fan Zhendong Champions League Champion)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AC%A7%E5%86%A0%E5%86%A0%E5%86%9B%23) `409.0K 🔥` `-66%`

Updated at 2026-05-18 09:34:30

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
