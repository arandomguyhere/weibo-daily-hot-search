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

1. [欢天喜地七仙女选角让人笑哭 (The casting of Seven Fairies in Joy makes people laugh and cry)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E9%80%89%E8%A7%92%E8%AE%A9%E4%BA%BA%E7%AC%91%E5%93%AD%23) `1.0M 🔥` `NEW`
1. [以数智物流赋能特色产业发展](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%95%B0%E6%99%BA%E7%89%A9%E6%B5%81%E8%B5%8B%E8%83%BD%E7%89%B9%E8%89%B2%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%23) `758.9K 🔥` `NEW`
1. [外卖员将散落面条重新装盒视频系AI生成](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E5%B0%86%E6%95%A3%E8%90%BD%E9%9D%A2%E6%9D%A1%E9%87%8D%E6%96%B0%E8%A3%85%E7%9B%92%E8%A7%86%E9%A2%91%E7%B3%BBAI%E7%94%9F%E6%88%90%23) `689.2K 🔥` `NEW`
1. [曹骏披哥席位第一](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%8A%AB%E5%93%A5%E5%B8%AD%E4%BD%8D%E7%AC%AC%E4%B8%80%23) `459.0K 🔥` `NEW`
1. [无畏带队四连胜](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%B8%A6%E9%98%9F%E5%9B%9B%E8%BF%9E%E8%83%9C%23) `438.2K 🔥` `NEW`
1. [鞠婧祎原谅现偶了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%E4%BA%86%23) `384.5K 🔥` `NEW`
1. [左奇函给杨博文的信](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E7%BB%99%E6%9D%A8%E5%8D%9A%E6%96%87%E7%9A%84%E4%BF%A1%23) `320.3K 🔥` `NEW`
1. [王传君披哥VCR爱情公寓片段](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%8A%AB%E5%93%A5VCR%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%89%87%E6%AE%B5%23) `311.9K 🔥` `NEW`
1. [美国大模型帮日本对AI进行投毒](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B8%AE%E6%97%A5%E6%9C%AC%E5%AF%B9AI%E8%BF%9B%E8%A1%8C%E6%8A%95%E6%AF%92%23) `171.6K 🔥` `NEW`
1. [央视曝光网红面霜违规添加激素](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BD%91%E7%BA%A2%E9%9D%A2%E9%9C%9C%E8%BF%9D%E8%A7%84%E6%B7%BB%E5%8A%A0%E6%BF%80%E7%B4%A0%23) `169.6K 🔥` `NEW`
1. [披荆斩棘初舞台排名 (Overcome all obstacles and initial stage rankings)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%88%9D%E8%88%9E%E5%8F%B0%E6%8E%92%E5%90%8D%23) `1.6M 🔥` `+28%`
1. [汉奸石平参拜靖国神社 (Traitor Shi Ping visits Yasukuni Shrine)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `730.6K 🔥` `+23%`
1. [小沈阳秒了 (Little Shenyang is seconds away)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86%23) `720.4K 🔥` `+22%`
1. [看似吃个大鸡排其实就吃了个鸡蛋](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BC%BC%E5%90%83%E4%B8%AA%E5%A4%A7%E9%B8%A1%E6%8E%92%E5%85%B6%E5%AE%9E%E5%B0%B1%E5%90%83%E4%BA%86%E4%B8%AA%E9%B8%A1%E8%9B%8B%23) `457.4K 🔥` `+41%`
1. [被诉诈骗女主播家属质疑立案合法性](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%AF%89%E8%AF%88%E9%AA%97%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%AE%B6%E5%B1%9E%E8%B4%A8%E7%96%91%E7%AB%8B%E6%A1%88%E5%90%88%E6%B3%95%E6%80%A7%23) `322.2K 🔥` `+132%`
1. [电影院直播樊振东比赛黄金位已售罄 (The prime seats for the live broadcast of Fan Zhendong’s match in cinemas have been sold out)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E9%99%A2%E7%9B%B4%E6%92%AD%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AF%94%E8%B5%9B%E9%BB%84%E9%87%91%E4%BD%8D%E5%B7%B2%E5%94%AE%E7%BD%84%23) `177.8K 🔥` `+28%`
1. [中国男篮vs乌拉圭男篮 (Chinese Men's Basketball Team vs Uruguay Men's Basketball Team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E4%B9%8C%E6%8B%89%E5%9C%AD%E7%94%B7%E7%AF%AE%23) `175.3K 🔥` `+25%`
1. [豪华旗舰神行者8震撼33.99万元起 (The luxury flagship Freelander 8 is shocking, starting from 339,900 yuan)](https://s.weibo.com/weibo?q=%23%E8%B1%AA%E5%8D%8E%E6%97%97%E8%88%B0%E7%A5%9E%E8%A1%8C%E8%80%858%E9%9C%87%E6%92%BC33.99%E4%B8%87%E5%85%83%E8%B5%B7%23) `751.0K 🔥`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `749.9K 🔥`
1. [Bin 回归 (Bin returns)](https://s.weibo.com/weibo?q=%23Bin%20%E5%9B%9E%E5%BD%92%23) `485.0K 🔥`
1. [主播母亲回应榜一大哥打赏千万要陪睡 (The mother of the anchor responded to the reward given by the top brother, so she must sleep with her)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%94%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E6%89%93%E8%B5%8F%E5%8D%83%E4%B8%87%E8%A6%81%E9%99%AA%E7%9D%A1%23) `484.3K 🔥`
1. [旺旺二公子回应配料表建议 (Wangwang Er Gongzi responded to the ingredient list suggestion)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E4%BA%8C%E5%85%AC%E5%AD%90%E5%9B%9E%E5%BA%94%E9%85%8D%E6%96%99%E8%A1%A8%E5%BB%BA%E8%AE%AE%23) `479.9K 🔥`
1. [曾辉 唱出了飞轮海的感觉](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%20%E5%94%B1%E5%87%BA%E4%BA%86%E9%A3%9E%E8%BD%AE%E6%B5%B7%E7%9A%84%E6%84%9F%E8%A7%89%23) `477.1K 🔥`
1. [时代少年团 古茗](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%8F%A4%E8%8C%97%23) `473.3K 🔥`
1. [张本美和早田希娜瑞典大满贯夺冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%A4%BA%E5%86%A0%23) `466.7K 🔥`
1. [好多明星暴瘦 (Many celebrities have lost weight)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E6%9A%B4%E7%98%A6%23) `463.7K 🔥`
1. [日本人街头质疑南京大屠杀](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%A1%97%E5%A4%B4%E8%B4%A8%E7%96%91%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23) `453.6K 🔥`
1. [手机涨价别着急换新](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E5%88%AB%E7%9D%80%E6%80%A5%E6%8D%A2%E6%96%B0%23) `449.7K 🔥`
1. [赵丽颖13个月没进组了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9613%E4%B8%AA%E6%9C%88%E6%B2%A1%E8%BF%9B%E7%BB%84%E4%BA%86%23) `445.0K 🔥`
1. [曾辉陈若轩 卧龙凤雏 (Zeng Hui Chen Ruoxuan Wolong Fengchu)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E9%99%88%E8%8B%A5%E8%BD%A9%20%E5%8D%A7%E9%BE%99%E5%87%A4%E9%9B%8F%23) `438.9K 🔥`
1. [张睿 中国内地郭富城 (Zhang Rui, Mainland China, Aaron Kwok)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `430.8K 🔥`
1. [虞书欣下腰](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8B%E8%85%B0%23) `430.7K 🔥`
1. [胖东来 刑释人员 (Fat Donglai, ex-convict)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98%23) `405.5K 🔥`
1. [李彩领李彩演妈妈患癌 (Li Cai Ling and Li Cai Yeon’s mother suffers from cancer)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BD%A9%E9%A2%86%E6%9D%8E%E5%BD%A9%E6%BC%94%E5%A6%88%E5%A6%88%E6%82%A3%E7%99%8C%23) `402.3K 🔥`
1. [这和亲生的有什么区别](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%92%8C%E4%BA%B2%E7%94%9F%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `363.6K 🔥`
1. [韩方强烈敦促日本领导人正视历史](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%96%B9%E5%BC%BA%E7%83%88%E6%95%A6%E4%BF%83%E6%97%A5%E6%9C%AC%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%AD%A3%E8%A7%86%E5%8E%86%E5%8F%B2%23) `357.6K 🔥`
1. [曝与张凌赫合照价格](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E4%BB%B7%E6%A0%BC%23) `357.1K 🔥`
1. [谁杀死了驾校 (Who killed the driving school?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%80%E6%AD%BB%E4%BA%86%E9%A9%BE%E6%A0%A1%23) `335.8K 🔥`
1. [余文乐赢了曹骏 (Shawn Yue defeated Cao Jun)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%B5%A2%E4%BA%86%E6%9B%B9%E9%AA%8F%23) `331.7K 🔥`
1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `326.3K 🔥`
1. [王俊凯徐洁儿友谊](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%8B%E8%B0%8A%23) `308.3K 🔥`
1. [张睿 梦回新还珠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E6%A2%A6%E5%9B%9E%E6%96%B0%E8%BF%98%E7%8F%A0%23) `306.6K 🔥`
1. [C罗若离婚乔治娜每月将获10万欧元](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%AF%8F%E6%9C%88%E5%B0%86%E8%8E%B710%E4%B8%87%E6%AC%A7%E5%85%83%23) `286.0K 🔥`
1. [张本智和4比0大勒布伦 (Zhang Benzhi and 4-0 LeBron)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C4%E6%AF%940%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `274.9K 🔥`
1. [金敏喜二封洛迦诺影后](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%95%8F%E5%96%9C%E4%BA%8C%E5%B0%81%E6%B4%9B%E8%BF%A6%E8%AF%BA%E5%BD%B1%E5%90%8E%23) `271.8K 🔥`
1. [金鹰奖 赛制改革](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E8%B5%9B%E5%88%B6%E6%94%B9%E9%9D%A9%23) `213.0K 🔥`
1. [山西挖眼案男孩高考721分选了中医学 (Shanxi eye-gouging case boy scored 721 in the college entrance examination and chose traditional Chinese medicine)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23) `647.8K 🔥` `-27%`
1. [网传追觅大家电解散](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%BF%BD%E8%A7%85%E5%A4%A7%E5%AE%B6%E7%94%B5%E8%A7%A3%E6%95%A3%23) `308.5K 🔥` `-23%`
1. [官方通报智残人员被拉去做眼部手术 (Official reports that mentally disabled person was pulled for eye surgery)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%99%BA%E6%AE%8B%E4%BA%BA%E5%91%98%E8%A2%AB%E6%8B%89%E5%8E%BB%E5%81%9A%E7%9C%BC%E9%83%A8%E6%89%8B%E6%9C%AF%23) `221.5K 🔥` `-44%`
1. [王俊凯听到粉丝表白的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%A1%A8%E7%99%BD%E7%9A%84%E5%8F%8D%E5%BA%94%23) `220.0K 🔥` `-30%`
1. [余文乐 港星的含金量还在上升 (Shawn Yue, the gold content of Hong Kong stars is still rising)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%20%E6%B8%AF%E6%98%9F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `177.2K 🔥` `-24%`
1. [阿云嘎 夯](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BA%91%E5%98%8E%20%E5%A4%AF%23) `166.2K 🔥` `-48%`

Updated at 2026-08-15 23:56:49

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
