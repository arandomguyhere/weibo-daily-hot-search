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

1. [茅台发布重大事项公告 (Moutai releases announcement on major events)](https://s.weibo.com/weibo?q=%23%E8%8C%85%E5%8F%B0%E5%8F%91%E5%B8%83%E9%87%8D%E5%A4%A7%E4%BA%8B%E9%A1%B9%E5%85%AC%E5%91%8A%23) `375.8K 🔥` `NEW`
1. [身份证有效期和年龄有关](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%9C%89%E6%95%88%E6%9C%9F%E5%92%8C%E5%B9%B4%E9%BE%84%E6%9C%89%E5%85%B3%23) `173.4K 🔥` `NEW`
1. [田曦薇晒与张凌赫头纱合照](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%99%92%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%B4%E7%BA%B1%E5%90%88%E7%85%A7%23) `171.3K 🔥` `NEW`
1. [汪峰 旭日阳刚](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%20%E6%97%AD%E6%97%A5%E9%98%B3%E5%88%9A%23) `127.3K 🔥` `NEW`
1. [严浩翔高会更新](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E9%AB%98%E4%BC%9A%E6%9B%B4%E6%96%B0%23) `122.6K 🔥` `NEW`
1. [李荣浩杨丞琳相爱11年结婚6年](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%9D%A8%E4%B8%9E%E7%90%B3%E7%9B%B8%E7%88%B111%E5%B9%B4%E7%BB%93%E5%A9%9A6%E5%B9%B4%23) `106.9K 🔥` `NEW`
1. [现货黄金再失守4440](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E5%86%8D%E5%A4%B1%E5%AE%884440%23) `100.7K 🔥` `NEW`
1. [粉丝称黄霄雲侵权华晨宇](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E7%A7%B0%E9%BB%84%E9%9C%84%E9%9B%B2%E4%BE%B5%E6%9D%83%E5%8D%8E%E6%99%A8%E5%AE%87%23) `95.4K 🔥` `NEW`
1. [多所高校调整师范专业招生规模](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E8%B0%83%E6%95%B4%E5%B8%88%E8%8C%83%E4%B8%93%E4%B8%9A%E6%8B%9B%E7%94%9F%E8%A7%84%E6%A8%A1%23) `69.6K 🔥` `NEW`
1. [南太行失联男子遗体被找到](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `67.6K 🔥` `NEW`
1. [黄金升破4580美元 (Gold rises above $4,580)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%8D%87%E7%A0%B44580%E7%BE%8E%E5%85%83%23) `61.6K 🔥` `NEW`
1. [陈飞宇 篮球和迪丽热巴](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E7%AF%AE%E7%90%83%E5%92%8C%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `61.1K 🔥` `NEW`
1. [内存条一天一个价商家直呼亏麻了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%B8%80%E5%A4%A9%E4%B8%80%E4%B8%AA%E4%BB%B7%E5%95%86%E5%AE%B6%E7%9B%B4%E5%91%BC%E4%BA%8F%E9%BA%BB%E4%BA%86%23) `60.7K 🔥` `NEW`
1. [国行版苹果AI](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%8C%E7%89%88%E8%8B%B9%E6%9E%9CAI%23) `54.8K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `54.6K 🔥` `NEW`
1. [版权元年](https://s.weibo.com/weibo?q=%23%E7%89%88%E6%9D%83%E5%85%83%E5%B9%B4%23) `51.8K 🔥` `NEW`
1. [跳楼机原唱实在是忍不下去了 (The original singer of "Jumping Machine" is really unbearable.)](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%A5%BC%E6%9C%BA%E5%8E%9F%E5%94%B1%E5%AE%9E%E5%9C%A8%E6%98%AF%E5%BF%8D%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%23) `1.1M 🔥` `+55%`
1. [网友买安眠药后收到注销驾驶证短信 (Netizen receives driver’s license cancellation text message after buying sleeping pills)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B9%B0%E5%AE%89%E7%9C%A0%E8%8D%AF%E5%90%8E%E6%94%B6%E5%88%B0%E6%B3%A8%E9%94%80%E9%A9%BE%E9%A9%B6%E8%AF%81%E7%9F%AD%E4%BF%A1%23) `805.3K 🔥` `+55%`
1. [战友背起邱少云遗骨想带他回家 (Comrades carried Qiu Shaoyun's remains and wanted to take him home)](https://s.weibo.com/weibo?q=%23%E6%88%98%E5%8F%8B%E8%83%8C%E8%B5%B7%E9%82%B1%E5%B0%91%E4%BA%91%E9%81%97%E9%AA%A8%E6%83%B3%E5%B8%A6%E4%BB%96%E5%9B%9E%E5%AE%B6%23) `626.3K 🔥` `+56%`
1. [午睡是一场真正的豪赌 (Napping is a real gamble)](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%98%AF%E4%B8%80%E5%9C%BA%E7%9C%9F%E6%AD%A3%E7%9A%84%E8%B1%AA%E8%B5%8C%23) `287.4K 🔥` `+47%`
1. [央视调查烧秸秆屡禁不止 (CCTV investigates repeated bans on straw burning)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E7%83%A7%E7%A7%B8%E7%A7%86%E5%B1%A1%E7%A6%81%E4%B8%8D%E6%AD%A2%23) `287.1K 🔥` `+34%`
1. [西班牙对袭击伊朗军机关闭领空 (Spain closes airspace over attack on Iranian military aircraft)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%AF%B9%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%86%9B%E6%9C%BA%E5%85%B3%E9%97%AD%E9%A2%86%E7%A9%BA%23) `284.2K 🔥` `+36%`
1. [美以伊地面战一触即发](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E4%BC%8A%E5%9C%B0%E9%9D%A2%E6%88%98%E4%B8%80%E8%A7%A6%E5%8D%B3%E5%8F%91%23) `265.4K 🔥` `+51%`
1. [单依纯演唱会退票 (Shan Yichun concert refund)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%80%E7%A5%A8%23) `173.2K 🔥` `+86%`
1. [女子在泳池被猥亵求助安全员未果 (Woman was molested at swimming pool but failed to seek help from safety guard)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B3%B3%E6%B1%A0%E8%A2%AB%E7%8C%A5%E4%BA%B5%E6%B1%82%E5%8A%A9%E5%AE%89%E5%85%A8%E5%91%98%E6%9C%AA%E6%9E%9C%23) `171.0K 🔥` `+92%`
1. [刘宇宁版权意识Max (Liu Yuning’s Copyright Awareness Max)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%89%88%E6%9D%83%E6%84%8F%E8%AF%86Max%23) `169.6K 🔥` `+97%`
1. [澳大利亚惊现末日红](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E6%83%8A%E7%8E%B0%E6%9C%AB%E6%97%A5%E7%BA%A2%23) `169.1K 🔥` `+59%`
1. [孟子义 从全世界的战斗中路过](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%20%E4%BB%8E%E5%85%A8%E4%B8%96%E7%95%8C%E7%9A%84%E6%88%98%E6%96%97%E4%B8%AD%E8%B7%AF%E8%BF%87%23) `167.3K 🔥` `+98%`
1. [利比控诉环球音乐侵权](https://s.weibo.com/weibo?q=%23%E5%88%A9%E6%AF%94%E6%8E%A7%E8%AF%89%E7%8E%AF%E7%90%83%E9%9F%B3%E4%B9%90%E4%BE%B5%E6%9D%83%23) `164.9K 🔥` `+485%`
1. [太原暴走团凌晨四点播放音乐扰民 (Taiyuan riot group played music at 4 a.m. to disturb the residents)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E6%9A%B4%E8%B5%B0%E5%9B%A2%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E6%92%AD%E6%94%BE%E9%9F%B3%E4%B9%90%E6%89%B0%E6%B0%91%23) `127.8K 🔥` `+55%`
1. [张雪称将吃掉国际大牌超50%份额 (Zhang Xue said that he will take over 50% of the share of international big brands)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%A7%B0%E5%B0%86%E5%90%83%E6%8E%89%E5%9B%BD%E9%99%85%E5%A4%A7%E7%89%8C%E8%B6%8550%25%E4%BB%BD%E9%A2%9D%23) `124.7K 🔥` `+58%`
1. [东鹏特饮押宝张雪机车赢麻了 (Dongpeng Special Drink bets on Zhang Xue’s motorcycle and wins)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%B9%8F%E7%89%B9%E9%A5%AE%E6%8A%BC%E5%AE%9D%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `108.5K 🔥` `+35%`
1. [女子花上万办卡被按摩到癌细胞扩散 (Woman spent tens of thousands to get massage card until cancer cells spread)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B1%E4%B8%8A%E4%B8%87%E5%8A%9E%E5%8D%A1%E8%A2%AB%E6%8C%89%E6%91%A9%E5%88%B0%E7%99%8C%E7%BB%86%E8%83%9E%E6%89%A9%E6%95%A3%23) `98.0K 🔥` `+49%`
1. [迪丽热巴也闯进好凉赛道了 (Di Lieba also broke into the cool track)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B9%9F%E9%97%AF%E8%BF%9B%E5%A5%BD%E5%87%89%E8%B5%9B%E9%81%93%E4%BA%86%23) `96.0K 🔥` `+67%`
1. [在广州暴雨里撑伞人被吹跑了 (The man holding an umbrella was blown away during the heavy rain in Guangzhou)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%B9%BF%E5%B7%9E%E6%9A%B4%E9%9B%A8%E9%87%8C%E6%92%91%E4%BC%9E%E4%BA%BA%E8%A2%AB%E5%90%B9%E8%B7%91%E4%BA%86%23) `69.3K 🔥` `+21%`
1. [一汽大众35周年重磅上新 (FAW-Volkswagen launches new products for 35th anniversary)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%9735%E5%91%A8%E5%B9%B4%E9%87%8D%E7%A3%85%E4%B8%8A%E6%96%B0%23) `473.5K 🔥`
1. [周深没搞定版权清唱一句戛然而止 (Zhou Shen failed to get the copyright and the a cappella song stopped abruptly)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%B2%A1%E6%90%9E%E5%AE%9A%E7%89%88%E6%9D%83%E6%B8%85%E5%94%B1%E4%B8%80%E5%8F%A5%E6%88%9B%E7%84%B6%E8%80%8C%E6%AD%A2%23) `273.3K 🔥`
1. [美客机与直升机相撞致67死画面曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%A2%E6%9C%BA%E4%B8%8E%E7%9B%B4%E5%8D%87%E6%9C%BA%E7%9B%B8%E6%92%9E%E8%87%B467%E6%AD%BB%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `80.8K 🔥`
1. [檀健次说只能唱一句再唱就要版权 (Tan Jianci said that if he can only sing one line and then sings again, he will need copyright.)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%AF%B4%E5%8F%AA%E8%83%BD%E5%94%B1%E4%B8%80%E5%8F%A5%E5%86%8D%E5%94%B1%E5%B0%B1%E8%A6%81%E7%89%88%E6%9D%83%23) `78.6K 🔥`
1. [商场播放恭喜发财需付费 (There is a fee to play Gong Xi Fa Cai in shopping malls)](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%9C%BA%E6%92%AD%E6%94%BE%E6%81%AD%E5%96%9C%E5%8F%91%E8%B4%A2%E9%9C%80%E4%BB%98%E8%B4%B9%23) `68.6K 🔥`
1. [网传张凌赫赵今麦一念江南 (It is reported on the Internet that Zhang Linghe and Zhao Jinmai miss Jiangnan)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B5%B5%E4%BB%8A%E9%BA%A6%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `68.3K 🔥`
1. [王俊凯怎么哪里都有你](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%80%8E%E4%B9%88%E5%93%AA%E9%87%8C%E9%83%BD%E6%9C%89%E4%BD%A0%23) `63.0K 🔥`
1. [月鳞绮纪 空降](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%20%E7%A9%BA%E9%99%8D%23) `59.6K 🔥`
1. [32.98万元起闭眼入大众9X](https://s.weibo.com/weibo?q=%2332.98%E4%B8%87%E5%85%83%E8%B5%B7%E9%97%AD%E7%9C%BC%E5%85%A5%E5%A4%A7%E4%BC%979X%23) `59.1K 🔥`
1. [美军兵分三路集结中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%85%B5%E5%88%86%E4%B8%89%E8%B7%AF%E9%9B%86%E7%BB%93%E4%B8%AD%E4%B8%9C%23) `53.6K 🔥`
1. [邱少云牺牲前把鞋后面全蹬烂了 (Before Qiu Shaoyun died, he kicked the back of his shoes to pieces.)](https://s.weibo.com/weibo?q=%23%E9%82%B1%E5%B0%91%E4%BA%91%E7%89%BA%E7%89%B2%E5%89%8D%E6%8A%8A%E9%9E%8B%E5%90%8E%E9%9D%A2%E5%85%A8%E8%B9%AC%E7%83%82%E4%BA%86%23) `53.4K 🔥`
1. [油价突然飙升](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E7%AA%81%E7%84%B6%E9%A3%99%E5%8D%87%23) `52.5K 🔥`
1. [养了两年才发现是假黑猫](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%86%E4%B8%A4%E5%B9%B4%E6%89%8D%E5%8F%91%E7%8E%B0%E6%98%AF%E5%81%87%E9%BB%91%E7%8C%AB%23) `50.2K 🔥`
1. [伊朗指责以色列打击科威特海水淡化设施](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8C%87%E8%B4%A3%E4%BB%A5%E8%89%B2%E5%88%97%E6%89%93%E5%87%BB%E7%A7%91%E5%A8%81%E7%89%B9%E6%B5%B7%E6%B0%B4%E6%B7%A1%E5%8C%96%E8%AE%BE%E6%96%BD%23) `48.3K 🔥`
1. [朱媛媛去世近一年辛柏青露面](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AA%9B%E5%AA%9B%E5%8E%BB%E4%B8%96%E8%BF%91%E4%B8%80%E5%B9%B4%E8%BE%9B%E6%9F%8F%E9%9D%92%E9%9C%B2%E9%9D%A2%23) `71.1K 🔥` `-70%`

Updated at 2026-03-31 07:50:44

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
