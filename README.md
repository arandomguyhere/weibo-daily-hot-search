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

1. [春晚倒计时 (Countdown to Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%80%92%E8%AE%A1%E6%97%B6%23) `322.3K 🔥` `NEW`
1. [太平年结局每个人都不得善终](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E7%BB%93%E5%B1%80%E6%AF%8F%E4%B8%AA%E4%BA%BA%E9%83%BD%E4%B8%8D%E5%BE%97%E5%96%84%E7%BB%88%23) `109.7K 🔥` `NEW`
1. [周深收到金条的反应](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%94%B6%E5%88%B0%E9%87%91%E6%9D%A1%E7%9A%84%E5%8F%8D%E5%BA%94%23) `108.6K 🔥` `NEW`
1. [金价银价深夜跳水](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E6%B7%B1%E5%A4%9C%E8%B7%B3%E6%B0%B4%23) `105.0K 🔥` `NEW`
1. [中国AI一年两炸](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E4%B8%80%E5%B9%B4%E4%B8%A4%E7%82%B8%23) `105.0K 🔥` `NEW`
1. [草莓真的是最脏的水果吗](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E7%9C%9F%E7%9A%84%E6%98%AF%E6%9C%80%E8%84%8F%E7%9A%84%E6%B0%B4%E6%9E%9C%E5%90%97%23) `98.2K 🔥` `NEW`
1. [菲一博主吃剧毒魔鬼蟹后不治身亡](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E4%B8%80%E5%8D%9A%E4%B8%BB%E5%90%83%E5%89%A7%E6%AF%92%E9%AD%94%E9%AC%BC%E8%9F%B9%E5%90%8E%E4%B8%8D%E6%B2%BB%E8%BA%AB%E4%BA%A1%23) `97.6K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `97.1K 🔥` `NEW`
1. [影石公司年会一员工获保时捷](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3%E5%85%AC%E5%8F%B8%E5%B9%B4%E4%BC%9A%E4%B8%80%E5%91%98%E5%B7%A5%E8%8E%B7%E4%BF%9D%E6%97%B6%E6%8D%B7%23) `91.2K 🔥` `NEW`
1. [成何体统这段失败的吻戏](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E8%BF%99%E6%AE%B5%E5%A4%B1%E8%B4%A5%E7%9A%84%E5%90%BB%E6%88%8F%23) `79.8K 🔥` `NEW`
1. [摄影师曝檀健次拍摄几乎一条过 (The photographer revealed that Tan Jianci’s shooting almost took place in one pass)](https://s.weibo.com/weibo?q=%23%E6%91%84%E5%BD%B1%E5%B8%88%E6%9B%9D%E6%AA%80%E5%81%A5%E6%AC%A1%E6%8B%8D%E6%91%84%E5%87%A0%E4%B9%8E%E4%B8%80%E6%9D%A1%E8%BF%87%23) `53.8K 🔥` `NEW`
1. [气血不足的人一定要早睡早起](https://s.weibo.com/weibo?q=%23%E6%B0%94%E8%A1%80%E4%B8%8D%E8%B6%B3%E7%9A%84%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E6%97%A9%E7%9D%A1%E6%97%A9%E8%B5%B7%23) `51.9K 🔥` `NEW`
1. [林孝埈状态](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E7%8A%B6%E6%80%81%23) `48.4K 🔥` `NEW`
1. [官方回应高速路边发现一只小狮子](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E9%80%9F%E8%B7%AF%E8%BE%B9%E5%8F%91%E7%8E%B0%E4%B8%80%E5%8F%AA%E5%B0%8F%E7%8B%AE%E5%AD%90%23) `45.6K 🔥` `NEW`
1. [叫爷爷没反应孙子下意识反应太可爱](https://s.weibo.com/weibo?q=%23%E5%8F%AB%E7%88%B7%E7%88%B7%E6%B2%A1%E5%8F%8D%E5%BA%94%E5%AD%99%E5%AD%90%E4%B8%8B%E6%84%8F%E8%AF%86%E5%8F%8D%E5%BA%94%E5%A4%AA%E5%8F%AF%E7%88%B1%23) `44.5K 🔥` `NEW`
1. [曝惊蛰无声发行方强制影院排片](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E5%8F%91%E8%A1%8C%E6%96%B9%E5%BC%BA%E5%88%B6%E5%BD%B1%E9%99%A2%E6%8E%92%E7%89%87%23) `44.5K 🔥` `NEW`
1. [孙龙摘银后哭了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E6%91%98%E9%93%B6%E5%90%8E%E5%93%AD%E4%BA%86%23) `41.5K 🔥` `NEW`
1. [孙龙银牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E9%93%B6%E7%89%8C%23) `915.1K 🔥` `+50%`
1. [林孝埈无缘男子1000米半决赛 (Lin Xiaojuan missed the men's 1000m semifinals)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%97%A0%E7%BC%98%E7%94%B7%E5%AD%901000%E7%B1%B3%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `644.1K 🔥` `+42%`
1. [我家的C位年货 (My family’s C-position New Year’s goods)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E7%9A%84C%E4%BD%8D%E5%B9%B4%E8%B4%A7%23) `507.8K 🔥` `+43%`
1. [22岁主播每天焊妆两次确诊肺炎 (The 22-year-old anchor was diagnosed with pneumonia after welding makeup twice a day)](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E4%B8%BB%E6%92%AD%E6%AF%8F%E5%A4%A9%E7%84%8A%E5%A6%86%E4%B8%A4%E6%AC%A1%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%82%8E%23) `250.1K 🔥` `+54%`
1. [Deepseek被指变冷淡了 (Deepseek is accused of becoming cold)](https://s.weibo.com/weibo?q=%23Deepseek%E8%A2%AB%E6%8C%87%E5%8F%98%E5%86%B7%E6%B7%A1%E4%BA%86%23) `207.7K 🔥` `+22%`
1. [六国联名反对欧盟加大对华限制 (Six countries jointly oppose the EU's increased restrictions on China)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%9B%BD%E8%81%94%E5%90%8D%E5%8F%8D%E5%AF%B9%E6%AC%A7%E7%9B%9F%E5%8A%A0%E5%A4%A7%E5%AF%B9%E5%8D%8E%E9%99%90%E5%88%B6%23) `164.9K 🔥` `+83%`
1. [丞磊在飞机上帮王楚然剔牙](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E5%B8%AE%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%94%E7%89%99%23) `150.7K 🔥` `+86%`
1. [坏果太多胖东来下架全部智利车厘子](https://s.weibo.com/weibo?q=%23%E5%9D%8F%E6%9E%9C%E5%A4%AA%E5%A4%9A%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%8B%E6%9E%B6%E5%85%A8%E9%83%A8%E6%99%BA%E5%88%A9%E8%BD%A6%E5%8E%98%E5%AD%90%23) `123.4K 🔥` `+61%`
1. [冬奥短道速滑男子1000米 (Winter Olympics short track speed skating men's 1000 meters)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E7%94%B7%E5%AD%901000%E7%B1%B3%23) `110.1K 🔥` `+46%`
1. [虞书欣衣帽间 (Yu Shuxin's Cloakroom)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A1%A3%E5%B8%BD%E9%97%B4%23) `110.0K 🔥` `+26%`
1. [10岁女生校内晕倒称遭多名男生殴打 (A 10-year-old girl fainted at school and said she was beaten by multiple boys)](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E5%A5%B3%E7%94%9F%E6%A0%A1%E5%86%85%E6%99%95%E5%80%92%E7%A7%B0%E9%81%AD%E5%A4%9A%E5%90%8D%E7%94%B7%E7%94%9F%E6%AE%B4%E6%89%93%23) `109.9K 🔥` `+28%`
1. [肥猫郑则仕减重70斤感谢周润发](https://s.weibo.com/weibo?q=%23%E8%82%A5%E7%8C%AB%E9%83%91%E5%88%99%E4%BB%95%E5%87%8F%E9%87%8D70%E6%96%A4%E6%84%9F%E8%B0%A2%E5%91%A8%E6%B6%A6%E5%8F%91%23) `109.5K 🔥` `+71%`
1. [母亲花6万为智力残障儿子娶外籍妻子](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%B16%E4%B8%87%E4%B8%BA%E6%99%BA%E5%8A%9B%E6%AE%8B%E9%9A%9C%E5%84%BF%E5%AD%90%E5%A8%B6%E5%A4%96%E7%B1%8D%E5%A6%BB%E5%AD%90%23) `109.3K 🔥` `+29%`
1. [孙龙回应1000米摘银](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%9B%9E%E5%BA%941000%E7%B1%B3%E6%91%98%E9%93%B6%23) `109.3K 🔥` `+35%`
1. [微博之夜 台上顶流台下好友](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E5%8F%B0%E4%B8%8A%E9%A1%B6%E6%B5%81%E5%8F%B0%E4%B8%8B%E5%A5%BD%E5%8F%8B%23) `109.0K 🔥` `+41%`
1. [男子就医喊饿竟是全身血液已近流干 (A man went to the doctor and complained that he was hungry, but it turned out that the blood in his body was almost dry)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%96%8A%E9%A5%BF%E7%AB%9F%E6%98%AF%E5%85%A8%E8%BA%AB%E8%A1%80%E6%B6%B2%E5%B7%B2%E8%BF%91%E6%B5%81%E5%B9%B2%23) `104.7K 🔥` `+47%`
1. [吃烤全羊发现大量粪便店家赔偿1500 (After eating a roasted whole lamb and finding a lot of feces, the store compensated me 1,500)](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%83%A4%E5%85%A8%E7%BE%8A%E5%8F%91%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%B2%AA%E4%BE%BF%E5%BA%97%E5%AE%B6%E8%B5%94%E5%81%BF1500%23) `104.5K 🔥` `+49%`
1. [远洋船员持菜刀砍杀船长后分尸抛海 (Ocean-going sailor hacked to death captain with kitchen knife, then quartered his body and threw it overboard)](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E6%B4%8B%E8%88%B9%E5%91%98%E6%8C%81%E8%8F%9C%E5%88%80%E7%A0%8D%E6%9D%80%E8%88%B9%E9%95%BF%E5%90%8E%E5%88%86%E5%B0%B8%E6%8A%9B%E6%B5%B7%23) `104.2K 🔥` `+49%`
1. [宋亚轩遇到了最懂他的刘耀文 (Song Yaxuan met Liu Yaowen who understood him best)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%80%E6%87%82%E4%BB%96%E7%9A%84%E5%88%98%E8%80%80%E6%96%87%23) `79.2K 🔥` `+61%`
1. [连续五年都没有年三十 (No New Year's Eve for five consecutive years)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%BA%94%E5%B9%B4%E9%83%BD%E6%B2%A1%E6%9C%89%E5%B9%B4%E4%B8%89%E5%8D%81%23) `73.6K 🔥` `+46%`
1. [刘少昂1000米无缘决赛 (Liu Shaoang missed the 1000m final)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%821000%E7%B1%B3%E6%97%A0%E7%BC%98%E5%86%B3%E8%B5%9B%23) `72.4K 🔥` `+29%`
1. [女子火车上熟睡8000元手机被偷 (Woman’s 8,000 yuan mobile phone stolen while sleeping on train)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%81%AB%E8%BD%A6%E4%B8%8A%E7%86%9F%E7%9D%A18000%E5%85%83%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%81%B7%23) `56.1K 🔥` `+33%`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `47.6K 🔥` `+22%`
1. [任子威 黄大宪成功淘汰](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%20%E9%BB%84%E5%A4%A7%E5%AE%AA%E6%88%90%E5%8A%9F%E6%B7%98%E6%B1%B0%23) `149.0K 🔥`
1. [8岁小孩姐徒步117公里回老家](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%B0%8F%E5%AD%A9%E5%A7%90%E5%BE%92%E6%AD%A5117%E5%85%AC%E9%87%8C%E5%9B%9E%E8%80%81%E5%AE%B6%23) `104.2K 🔥`
1. [孙龙 (Sun Long)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%23) `83.8K 🔥`
1. [律师解读杨幂新增60件告黑案 (Lawyers interpret Yang Mi’s 60 new accusation cases)](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E6%9D%A8%E5%B9%82%E6%96%B0%E5%A2%9E60%E4%BB%B6%E5%91%8A%E9%BB%91%E6%A1%88%23) `73.3K 🔥`
1. [短道速滑 (short track speed skating)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `70.7K 🔥`
1. [蒋欣 当年真的错怪你了 (Jiang Xin, I really blamed you wrongly back then)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `57.5K 🔥`
1. [冬奥短道速滑女子500米](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E5%A5%B3%E5%AD%90500%E7%B1%B3%23) `57.0K 🔥`
1. [33岁男子开特斯拉跑货拉拉 (33-year-old man drives Tesla to Lala Lalam)](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E7%94%B7%E5%AD%90%E5%BC%80%E7%89%B9%E6%96%AF%E6%8B%89%E8%B7%91%E8%B4%A7%E6%8B%89%E6%8B%89%23) `45.0K 🔥`
1. [女子单板U池决赛 (Women's Snowboard U Pool Finals)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%95%E6%9D%BFU%E6%B1%A0%E5%86%B3%E8%B5%9B%23) `44.9K 🔥`
1. [孙龙激动落泪 (Sun Long was moved to tears)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E6%BF%80%E5%8A%A8%E8%90%BD%E6%B3%AA%23) `41.5K 🔥`
1. [任子威说女子500米成绩夸张](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%AF%B4%E5%A5%B3%E5%AD%90500%E7%B1%B3%E6%88%90%E7%BB%A9%E5%A4%B8%E5%BC%A0%23) `57.0K 🔥` `-39%`

Updated at 2026-02-13 07:40:05

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
