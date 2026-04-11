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

1. [王濛 搞体育的最见不得这种 (Wang Meng, this is the worst thing you can see in sports.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%90%9E%E4%BD%93%E8%82%B2%E7%9A%84%E6%9C%80%E8%A7%81%E4%B8%8D%E5%BE%97%E8%BF%99%E7%A7%8D%23) `1.5M 🔥` `NEW`
1. [嫦娥七号计划下半年发射](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E8%AE%A1%E5%88%92%E4%B8%8B%E5%8D%8A%E5%B9%B4%E5%8F%91%E5%B0%84%23) `720.2K 🔥` `NEW`
1. [赵子琪不会再来浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%9D%A5%E6%B5%AA%E5%A7%90%23) `591.0K 🔥` `NEW`
1. [小猫被亲一口感觉世界都亮了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%A2%AB%E4%BA%B2%E4%B8%80%E5%8F%A3%E6%84%9F%E8%A7%89%E4%B8%96%E7%95%8C%E9%83%BD%E4%BA%AE%E4%BA%86%23) `303.2K 🔥` `NEW`
1. [唐艺昕趴在李小冉腿上](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E8%B6%B4%E5%9C%A8%E6%9D%8E%E5%B0%8F%E5%86%89%E8%85%BF%E4%B8%8A%23) `281.3K 🔥` `NEW`
1. [医药出海产业沙龙成功举办](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E8%8D%AF%E5%87%BA%E6%B5%B7%E4%BA%A7%E4%B8%9A%E6%B2%99%E9%BE%99%E6%88%90%E5%8A%9F%E4%B8%BE%E5%8A%9E%23) `278.3K 🔥` `NEW`
1. [湖南一路段插满白事灯笼](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%80%E8%B7%AF%E6%AE%B5%E6%8F%92%E6%BB%A1%E7%99%BD%E4%BA%8B%E7%81%AF%E7%AC%BC%23) `238.8K 🔥` `NEW`
1. [毛血旺里的毛到底是啥](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E8%A1%80%E6%97%BA%E9%87%8C%E7%9A%84%E6%AF%9B%E5%88%B0%E5%BA%95%E6%98%AF%E5%95%A5%23) `238.5K 🔥` `NEW`
1. [太阳vs湖人](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E9%98%B3vs%E6%B9%96%E4%BA%BA%23) `238.1K 🔥` `NEW`
1. [美国进口保健品海外地址是共享办公室](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%BF%9B%E5%8F%A3%E4%BF%9D%E5%81%A5%E5%93%81%E6%B5%B7%E5%A4%96%E5%9C%B0%E5%9D%80%E6%98%AF%E5%85%B1%E4%BA%AB%E5%8A%9E%E5%85%AC%E5%AE%A4%23) `237.9K 🔥` `NEW`
1. [白鹿晚餐吃水煮菜 (White Deer eats boiled vegetables for dinner)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%9A%E9%A4%90%E5%90%83%E6%B0%B4%E7%85%AE%E8%8F%9C%23) `237.5K 🔥` `NEW`
1. [温峥嵘下班也一直在哭着饭撒](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E4%B8%8B%E7%8F%AD%E4%B9%9F%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%93%AD%E7%9D%80%E9%A5%AD%E6%92%92%23) `237.4K 🔥` `NEW`
1. [阿尔忒弥斯2号](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%BF%92%E5%BC%A5%E6%96%AF2%E5%8F%B7%23) `236.9K 🔥` `NEW`
1. [赵子琪推掉剧组来乘风](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%8E%A8%E6%8E%89%E5%89%A7%E7%BB%84%E6%9D%A5%E4%B9%98%E9%A3%8E%23) `236.7K 🔥` `NEW`
1. [被盗声太乙真人配音演员合作被取消](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%9B%97%E5%A3%B0%E5%A4%AA%E4%B9%99%E7%9C%9F%E4%BA%BA%E9%85%8D%E9%9F%B3%E6%BC%94%E5%91%98%E5%90%88%E4%BD%9C%E8%A2%AB%E5%8F%96%E6%B6%88%23) `191.2K 🔥` `NEW`
1. [道士给弟子教针灸收到10万罚单](https://s.weibo.com/weibo?q=%23%E9%81%93%E5%A3%AB%E7%BB%99%E5%BC%9F%E5%AD%90%E6%95%99%E9%92%88%E7%81%B8%E6%94%B6%E5%88%B010%E4%B8%87%E7%BD%9A%E5%8D%95%23) `143.8K 🔥` `NEW`
1. [巴拿马向中国放完狠话又求饶](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%BF%E9%A9%AC%E5%90%91%E4%B8%AD%E5%9B%BD%E6%94%BE%E5%AE%8C%E7%8B%A0%E8%AF%9D%E5%8F%88%E6%B1%82%E9%A5%B6%23) `122.6K 🔥` `NEW`
1. [医生回应9斤婴儿出生1月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%949%E6%96%A4%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F1%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `121.1K 🔥` `NEW`
1. [内存条价格过山车](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%BB%B7%E6%A0%BC%E8%BF%87%E5%B1%B1%E8%BD%A6%23) `120.7K 🔥` `NEW`
1. [陈昊宇点赞训粉博文](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%E7%82%B9%E8%B5%9E%E8%AE%AD%E7%B2%89%E5%8D%9A%E6%96%87%23) `120.7K 🔥` `NEW`
1. [小学生给老师起外号被扇四耳光 (Primary school student gave teacher a nickname and was slapped four times)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E7%BB%99%E8%80%81%E5%B8%88%E8%B5%B7%E5%A4%96%E5%8F%B7%E8%A2%AB%E6%89%87%E5%9B%9B%E8%80%B3%E5%85%89%23) `120.6K 🔥` `NEW`
1. [每天做三顿饭肺癌风险高2.1倍](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%81%9A%E4%B8%89%E9%A1%BF%E9%A5%AD%E8%82%BA%E7%99%8C%E9%A3%8E%E9%99%A9%E9%AB%982.1%E5%80%8D%23) `118.8K 🔥` `NEW`
1. [刘雨鑫又带火了南沙10元自助粥锅店](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E9%91%AB%E5%8F%88%E5%B8%A6%E7%81%AB%E4%BA%86%E5%8D%97%E6%B2%9910%E5%85%83%E8%87%AA%E5%8A%A9%E7%B2%A5%E9%94%85%E5%BA%97%23) `110.3K 🔥` `NEW`
1. [孙怡自责爆哭谢娜不停安慰](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%87%AA%E8%B4%A3%E7%88%86%E5%93%AD%E8%B0%A2%E5%A8%9C%E4%B8%8D%E5%81%9C%E5%AE%89%E6%85%B0%23) `108.9K 🔥` `NEW`
1. [李楷灿疑似恋爱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A5%B7%E7%81%BF%E7%96%91%E4%BC%BC%E6%81%8B%E7%88%B1%23) `98.6K 🔥` `NEW`
1. [汉堡馒头减肥法火了](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A0%A1%E9%A6%92%E5%A4%B4%E5%87%8F%E8%82%A5%E6%B3%95%E7%81%AB%E4%BA%86%23) `96.6K 🔥` `NEW`
1. [老板带280名员工抢下张雪夺冠复刻车](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%B8%A6280%E5%90%8D%E5%91%98%E5%B7%A5%E6%8A%A2%E4%B8%8B%E5%BC%A0%E9%9B%AA%E5%A4%BA%E5%86%A0%E5%A4%8D%E5%88%BB%E8%BD%A6%23) `94.6K 🔥` `NEW`
1. [何老师请大家继续永远支持张杰](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E8%AF%B7%E5%A4%A7%E5%AE%B6%E7%BB%A7%E7%BB%AD%E6%B0%B8%E8%BF%9C%E6%94%AF%E6%8C%81%E5%BC%A0%E6%9D%B0%23) `89.8K 🔥` `NEW`
1. [2026KPL春决首发名单](https://s.weibo.com/weibo?q=%232026KPL%E6%98%A5%E5%86%B3%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `74.8K 🔥` `NEW`
1. [中岛裕翔新木优子结婚](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B2%9B%E8%A3%95%E7%BF%94%E6%96%B0%E6%9C%A8%E4%BC%98%E5%AD%90%E7%BB%93%E5%A9%9A%23) `74.8K 🔥` `NEW`
1. [文班亚马3分钟11分 (Bunyama 3 minutes and 11 minutes)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC3%E5%88%86%E9%92%9F11%E5%88%86%23) `74.1K 🔥` `NEW`
1. [湖南一山发现400多株冥界之花水晶兰](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%80%E5%B1%B1%E5%8F%91%E7%8E%B0400%E5%A4%9A%E6%A0%AA%E5%86%A5%E7%95%8C%E4%B9%8B%E8%8A%B1%E6%B0%B4%E6%99%B6%E5%85%B0%23) `69.2K 🔥` `NEW`
1. [伦敦世乒赛团体赛](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `66.3K 🔥` `NEW`
1. [苏超还没开始常州先把梗瞄住了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E8%BF%98%E6%B2%A1%E5%BC%80%E5%A7%8B%E5%B8%B8%E5%B7%9E%E5%85%88%E6%8A%8A%E6%A2%97%E7%9E%84%E4%BD%8F%E4%BA%86%23) `66.0K 🔥` `NEW`
1. [不内耗的人脑子里是怎么想的](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%86%85%E8%80%97%E7%9A%84%E4%BA%BA%E8%84%91%E5%AD%90%E9%87%8C%E6%98%AF%E6%80%8E%E4%B9%88%E6%83%B3%E7%9A%84%23) `64.0K 🔥` `NEW`
1. [很多人的代谢不知不觉被拖垮了](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E7%9A%84%E4%BB%A3%E8%B0%A2%E4%B8%8D%E7%9F%A5%E4%B8%8D%E8%A7%89%E8%A2%AB%E6%8B%96%E5%9E%AE%E4%BA%86%23) `63.8K 🔥` `NEW`
1. [5岁女童餐厅坠亡母亲担责3成](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%A5%B3%E7%AB%A5%E9%A4%90%E5%8E%85%E5%9D%A0%E4%BA%A1%E6%AF%8D%E4%BA%B2%E6%8B%85%E8%B4%A33%E6%88%90%23) `61.7K 🔥` `NEW`
1. [当你觉得很馋又不知道馋什么](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E8%A7%89%E5%BE%97%E5%BE%88%E9%A6%8B%E5%8F%88%E4%B8%8D%E7%9F%A5%E9%81%93%E9%A6%8B%E4%BB%80%E4%B9%88%23) `61.5K 🔥` `NEW`
1. [华为大阔折设计图曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%A4%A7%E9%98%94%E6%8A%98%E8%AE%BE%E8%AE%A1%E5%9B%BE%E6%9B%9D%E5%85%89%23) `61.5K 🔥` `NEW`
1. [张雪机车和买家共同捐赠拍卖款](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%92%8C%E4%B9%B0%E5%AE%B6%E5%85%B1%E5%90%8C%E6%8D%90%E8%B5%A0%E6%8B%8D%E5%8D%96%E6%AC%BE%23) `60.6K 🔥` `NEW`
1. [深圳人近期不要吃这些贝类 (People in Shenzhen should not eat these shellfish in the near future)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E8%BF%91%E6%9C%9F%E4%B8%8D%E8%A6%81%E5%90%83%E8%BF%99%E4%BA%9B%E8%B4%9D%E7%B1%BB%23) `60.6K 🔥` `NEW`
1. [伊朗谈判代表团命名米纳卜168](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%91%BD%E5%90%8D%E7%B1%B3%E7%BA%B3%E5%8D%9C168%23) `60.4K 🔥` `NEW`
1. [网友提醒刘芸注意儿子内八问题](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8F%90%E9%86%92%E5%88%98%E8%8A%B8%E6%B3%A8%E6%84%8F%E5%84%BF%E5%AD%90%E5%86%85%E5%85%AB%E9%97%AE%E9%A2%98%23) `118.7K 🔥` `+26%`
1. [男子微信群多次侮辱全红婵被拘 (Man was arrested for repeatedly insulting Quan Hongchan in WeChat group)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%A4%9A%E6%AC%A1%E4%BE%AE%E8%BE%B1%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A2%AB%E6%8B%98%23) `931.7K 🔥`
1. [张慧雯情商](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E6%83%85%E5%95%86%23) `93.7K 🔥`
1. [网红一栗小莎子因癌症剃光头 (Internet celebrity Yili Xiaoshazi shaves her head due to cancer)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%9B%A0%E7%99%8C%E7%97%87%E5%89%83%E5%85%89%E5%A4%B4%23) `72.7K 🔥`
1. [这些品牌竟然都是假洋牌 (These brands are all fake foreign brands)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%93%81%E7%89%8C%E7%AB%9F%E7%84%B6%E9%83%BD%E6%98%AF%E5%81%87%E6%B4%8B%E7%89%8C%23) `126.4K 🔥` `-83%`
1. [婴儿出生9斤一个月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F9%E6%96%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `73.7K 🔥` `-57%`
1. [秦昊和伊能静首次见面时非单身 (Qin Hao and Yi Nengjing were not single when they first met)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E5%92%8C%E4%BC%8A%E8%83%BD%E9%9D%99%E9%A6%96%E6%AC%A1%E8%A7%81%E9%9D%A2%E6%97%B6%E9%9D%9E%E5%8D%95%E8%BA%AB%23) `63.2K 🔥` `-29%`

Updated at 2026-04-11 11:14:14

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
