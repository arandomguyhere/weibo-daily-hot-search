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

1. [张杰谢娜这和婚礼现场有啥区别 (What is the difference between Zhang Jie and Xie Na at the wedding scene?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E8%BF%99%E5%92%8C%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E6%9C%89%E5%95%A5%E5%8C%BA%E5%88%AB%23) `589.0K 🔥` `NEW`
1. [国家队领投DeepSeek首轮融资](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%A2%86%E6%8A%95DeepSeek%E9%A6%96%E8%BD%AE%E8%9E%8D%E8%B5%84%23) `552.1K 🔥` `NEW`
1. [虞书欣ins取消何与置顶了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3ins%E5%8F%96%E6%B6%88%E4%BD%95%E4%B8%8E%E7%BD%AE%E9%A1%B6%E4%BA%86%23) `335.7K 🔥` `NEW`
1. [EXO ai篡改记忆](https://s.weibo.com/weibo?q=%23EXO%20ai%E7%AF%A1%E6%94%B9%E8%AE%B0%E5%BF%86%23) `329.7K 🔥` `NEW`
1. [公安局大院内酒店每晚200到300元](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E5%B1%80%E5%A4%A7%E9%99%A2%E5%86%85%E9%85%92%E5%BA%97%E6%AF%8F%E6%99%9A200%E5%88%B0300%E5%85%83%23) `325.3K 🔥` `NEW`
1. [林志玲和老公因语言不通感情升温](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E5%92%8C%E8%80%81%E5%85%AC%E5%9B%A0%E8%AF%AD%E8%A8%80%E4%B8%8D%E9%80%9A%E6%84%9F%E6%83%85%E5%8D%87%E6%B8%A9%23) `315.6K 🔥` `NEW`
1. [谢娜开演唱会上瘾了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E7%98%BE%E4%BA%86%23) `308.2K 🔥` `NEW`
1. [油价暴跌超10%](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%9A%B4%E8%B7%8C%E8%B6%8510%25%23) `301.8K 🔥` `NEW`
1. [妈妈真的把自己养的很好](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9C%9F%E7%9A%84%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%85%BB%E7%9A%84%E5%BE%88%E5%A5%BD%23) `284.1K 🔥` `NEW`
1. [36岁宝妈用筋膜枪按摩突发脑梗](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%AE%9D%E5%A6%88%E7%94%A8%E7%AD%8B%E8%86%9C%E6%9E%AA%E6%8C%89%E6%91%A9%E7%AA%81%E5%8F%91%E8%84%91%E6%A2%97%23) `275.0K 🔥` `NEW`
1. [多国仍未签约世界杯转播权 (Many countries have yet to sign contracts for World Cup broadcast rights)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E4%BB%8D%E6%9C%AA%E7%AD%BE%E7%BA%A6%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `272.2K 🔥` `NEW`
1. [王楚钦被安宰贤吓一跳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%A2%AB%E5%AE%89%E5%AE%B0%E8%B4%A4%E5%90%93%E4%B8%80%E8%B7%B3%23) `258.3K 🔥` `NEW`
1. [林志玲决定和Akira交往的原因](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E5%86%B3%E5%AE%9A%E5%92%8CAkira%E4%BA%A4%E5%BE%80%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `227.2K 🔥` `NEW`
1. [全球股市涨声一片](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E6%B6%A8%E5%A3%B0%E4%B8%80%E7%89%87%23) `222.7K 🔥` `NEW`
1. [乙肝到肝癌只需3步](https://s.weibo.com/weibo?q=%23%E4%B9%99%E8%82%9D%E5%88%B0%E8%82%9D%E7%99%8C%E5%8F%AA%E9%9C%803%E6%AD%A5%23) `212.7K 🔥` `NEW`
1. [恋综史上第一位冰湖重生的男嘉宾](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%BB%BC%E5%8F%B2%E4%B8%8A%E7%AC%AC%E4%B8%80%E4%BD%8D%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%9A%84%E7%94%B7%E5%98%89%E5%AE%BE%23) `211.5K 🔥` `NEW`
1. [FIFA回应中国区天价世界杯版权](https://s.weibo.com/weibo?q=%23FIFA%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E5%8C%BA%E5%A4%A9%E4%BB%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%23) `190.1K 🔥` `NEW`
1. [一个人不是好人的微妙迹象是什么](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8D%E6%98%AF%E5%A5%BD%E4%BA%BA%E7%9A%84%E5%BE%AE%E5%A6%99%E8%BF%B9%E8%B1%A1%E6%98%AF%E4%BB%80%E4%B9%88%23) `188.4K 🔥` `NEW`
1. [拜仁慕尼黑1比1巴黎圣日耳曼](https://s.weibo.com/weibo?q=%23%E6%8B%9C%E4%BB%81%E6%85%95%E5%B0%BC%E9%BB%911%E6%AF%941%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC%23) `177.9K 🔥` `NEW`
1. [宾利车主救场豪车变婚车](https://s.weibo.com/weibo?q=%23%E5%AE%BE%E5%88%A9%E8%BD%A6%E4%B8%BB%E6%95%91%E5%9C%BA%E8%B1%AA%E8%BD%A6%E5%8F%98%E5%A9%9A%E8%BD%A6%23) `167.6K 🔥` `NEW`
1. [刘耀文晒穿戴甲 (Liu Yaowen wears armor)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%99%92%E7%A9%BF%E6%88%B4%E7%94%B2%23) `153.1K 🔥` `NEW`
1. [国际足联严重依赖中国赞助商](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E4%B8%A5%E9%87%8D%E4%BE%9D%E8%B5%96%E4%B8%AD%E5%9B%BD%E8%B5%9E%E5%8A%A9%E5%95%86%23) `151.2K 🔥` `NEW`
1. [只用胶带和胶卷就能手搓相机](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E7%94%A8%E8%83%B6%E5%B8%A6%E5%92%8C%E8%83%B6%E5%8D%B7%E5%B0%B1%E8%83%BD%E6%89%8B%E6%90%93%E7%9B%B8%E6%9C%BA%23) `147.3K 🔥` `NEW`
1. [奥迪E7X直播发钱](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAE7X%E7%9B%B4%E6%92%AD%E5%8F%91%E9%92%B1%23) `147.3K 🔥` `NEW`
1. [国际足联可能已经慌了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%8F%AF%E8%83%BD%E5%B7%B2%E7%BB%8F%E6%85%8C%E4%BA%86%23) `1.9M 🔥` `+1379%`
1. [4只皮皮虾1035元涉事海鲜店回应](https://s.weibo.com/weibo?q=%234%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE1035%E5%85%83%E6%B6%89%E4%BA%8B%E6%B5%B7%E9%B2%9C%E5%BA%97%E5%9B%9E%E5%BA%94%23) `949.0K 🔥` `+631%`
1. [来中国玩的外国人更多了](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%AD%E5%9B%BD%E7%8E%A9%E7%9A%84%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9B%B4%E5%A4%9A%E4%BA%86%23) `758.4K 🔥` `+53%`
1. [白鹿跑男争议 内娱综艺审美巨变](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E4%BA%89%E8%AE%AE%20%E5%86%85%E5%A8%B1%E7%BB%BC%E8%89%BA%E5%AE%A1%E7%BE%8E%E5%B7%A8%E5%8F%98%23) `691.6K 🔥` `+42%`
1. [高市早苗下跪看清日本丑恶嘴脸](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%B8%8B%E8%B7%AA%E7%9C%8B%E6%B8%85%E6%97%A5%E6%9C%AC%E4%B8%91%E6%81%B6%E5%98%B4%E8%84%B8%23) `608.8K 🔥` `+369%`
1. [医生称钙片不用买太贵的](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E9%92%99%E7%89%87%E4%B8%8D%E7%94%A8%E4%B9%B0%E5%A4%AA%E8%B4%B5%E7%9A%84%23) `519.1K 🔥` `+304%`
1. [网友曝三亚4只皮皮虾收费1035元 (Netizens revealed that Sanya charges 1,035 yuan for 4 Pipi shrimps)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E4%B8%89%E4%BA%9A4%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE%E6%94%B6%E8%B4%B91035%E5%85%83%23) `354.5K 🔥` `+24%`
1. [有人给TOP买了五个防毒面具](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E7%BB%99TOP%E4%B9%B0%E4%BA%86%E4%BA%94%E4%B8%AA%E9%98%B2%E6%AF%92%E9%9D%A2%E5%85%B7%23) `293.8K 🔥` `+131%`
1. [新人结婚被丢高速口路过宾利变婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%BA%E7%BB%93%E5%A9%9A%E8%A2%AB%E4%B8%A2%E9%AB%98%E9%80%9F%E5%8F%A3%E8%B7%AF%E8%BF%87%E5%AE%BE%E5%88%A9%E5%8F%98%E5%A9%9A%E8%BD%A6%23) `291.0K 🔥` `+125%`
1. [英伟达宣布与康宁建立长期合作关系](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%AE%A3%E5%B8%83%E4%B8%8E%E5%BA%B7%E5%AE%81%E5%BB%BA%E7%AB%8B%E9%95%BF%E6%9C%9F%E5%90%88%E4%BD%9C%E5%85%B3%E7%B3%BB%23) `290.3K 🔥` `+125%`
1. [三星 (Samsung)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%23) `289.0K 🔥` `+127%`
1. [你以为是常识的冷知识](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%B8%B8%E8%AF%86%E7%9A%84%E5%86%B7%E7%9F%A5%E8%AF%86%23) `285.2K 🔥` `+131%`
1. [世界杯中国赞助商投入超5亿美元](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9B%BD%E8%B5%9E%E5%8A%A9%E5%95%86%E6%8A%95%E5%85%A5%E8%B6%855%E4%BA%BF%E7%BE%8E%E5%85%83%23) `282.7K 🔥` `+117%`
1. [河北两女子长得一模一样孩子认错妈](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%95%BF%E5%BE%97%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%E5%AD%A9%E5%AD%90%E8%AE%A4%E9%94%99%E5%A6%88%23) `240.4K 🔥` `+204%`
1. [EXO King](https://s.weibo.com/weibo?q=%23EXO%20King%23) `232.2K 🔥` `+81%`
1. [卢昱晓把刀拿反了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%8A%8A%E5%88%80%E6%8B%BF%E5%8F%8D%E4%BA%86%23) `222.5K 🔥` `+72%`
1. [何炅躲过了所有路透](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E8%BA%B2%E8%BF%87%E4%BA%86%E6%89%80%E6%9C%89%E8%B7%AF%E9%80%8F%23) `202.5K 🔥` `+74%`
1. [钟薛高破产后508件资产207万起拍 (After Zhong Xuegao went bankrupt, 508 assets were auctioned starting at 2.07 million)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E8%96%9B%E9%AB%98%E7%A0%B4%E4%BA%A7%E5%90%8E508%E4%BB%B6%E8%B5%84%E4%BA%A7207%E4%B8%87%E8%B5%B7%E6%8B%8D%23) `201.2K 🔥` `+172%`
1. [红山动物园我将继续拥护你 (Hongshan Zoo I will continue to support you)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%B1%B1%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%88%91%E5%B0%86%E7%BB%A7%E7%BB%AD%E6%8B%A5%E6%8A%A4%E4%BD%A0%23) `198.6K 🔥` `+54%`
1. [小狗靠捡瓶子攒了10万 (Puppy saved 100,000 by picking up bottles)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E9%9D%A0%E6%8D%A1%E7%93%B6%E5%AD%90%E6%94%92%E4%BA%8610%E4%B8%87%23) `171.6K 🔥` `+80%`
1. [淘宝免单从拼智商到拼审美了 (Taobao's free orders have gone from focusing on IQ to focusing on aesthetics)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%E4%BB%8E%E6%8B%BC%E6%99%BA%E5%95%86%E5%88%B0%E6%8B%BC%E5%AE%A1%E7%BE%8E%E4%BA%86%23) `147.3K 🔥` `+232%`
1. [有AI真好 放以前没十几亿下不来 (It’s great to have AI. Before, it couldn’t be purchased without more than a billion dollars.)](https://s.weibo.com/weibo?q=%23%E6%9C%89AI%E7%9C%9F%E5%A5%BD%20%E6%94%BE%E4%BB%A5%E5%89%8D%E6%B2%A1%E5%8D%81%E5%87%A0%E4%BA%BF%E4%B8%8B%E4%B8%8D%E6%9D%A5%23) `339.6K 🔥`
1. [主角OST请来了王菲 (The protagonist OST invited Faye Wong)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92OST%E8%AF%B7%E6%9D%A5%E4%BA%86%E7%8E%8B%E8%8F%B2%23) `147.9K 🔥`
1. [暴发致命病毒邮轮或出现人传人现象 (Deadly virus outbreak on cruise ship may lead to human-to-human transmission)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E6%88%96%E5%87%BA%E7%8E%B0%E4%BA%BA%E4%BC%A0%E4%BA%BA%E7%8E%B0%E8%B1%A1%23) `287.1K 🔥` `-68%`
1. [解除台独刘世芳亲属全部职务](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E9%99%A4%E5%8F%B0%E7%8B%AC%E5%88%98%E4%B8%96%E8%8A%B3%E4%BA%B2%E5%B1%9E%E5%85%A8%E9%83%A8%E8%81%8C%E5%8A%A1%23) `240.7K 🔥` `-23%`
1. [伦敦世乒赛团体赛 (London World Table Tennis Championships Team Competition)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `210.3K 🔥` `-67%`

Updated at 2026-05-07 09:20:19

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
