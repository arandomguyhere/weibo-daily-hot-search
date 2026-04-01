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

1. [孙俪回应蒋欣 (Sun Li responded to Jiang Xin)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E8%92%8B%E6%AC%A3%23) `624.1K 🔥` `NEW`
1. [迪丽热巴问白日提灯固屏去哪了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%97%AE%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%9B%BA%E5%B1%8F%E5%8E%BB%E5%93%AA%E4%BA%86%23) `213.4K 🔥` `NEW`
1. [一汽大众全新揽巡上市](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%97%E5%85%A8%E6%96%B0%E6%8F%BD%E5%B7%A1%E4%B8%8A%E5%B8%82%23) `205.0K 🔥` `NEW`
1. [付费的没学会免费的学会了](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E7%9A%84%E6%B2%A1%E5%AD%A6%E4%BC%9A%E5%85%8D%E8%B4%B9%E7%9A%84%E5%AD%A6%E4%BC%9A%E4%BA%86%23) `199.7K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `133.7K 🔥` `NEW`
1. [优思益单平台月销售额近2500万](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8D%95%E5%B9%B3%E5%8F%B0%E6%9C%88%E9%94%80%E5%94%AE%E9%A2%9D%E8%BF%912500%E4%B8%87%23) `133.3K 🔥` `NEW`
1. [江宏杰祝福福原爱再婚怀孕](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%AE%8F%E6%9D%B0%E7%A5%9D%E7%A6%8F%E7%A6%8F%E5%8E%9F%E7%88%B1%E5%86%8D%E5%A9%9A%E6%80%80%E5%AD%95%23) `129.1K 🔥` `NEW`
1. [日本动向十分危险](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8A%A8%E5%90%91%E5%8D%81%E5%88%86%E5%8D%B1%E9%99%A9%23) `123.8K 🔥` `NEW`
1. [醉驾拖行女教师多人下车查看后驶离](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%A9%BE%E6%8B%96%E8%A1%8C%E5%A5%B3%E6%95%99%E5%B8%88%E5%A4%9A%E4%BA%BA%E4%B8%8B%E8%BD%A6%E6%9F%A5%E7%9C%8B%E5%90%8E%E9%A9%B6%E7%A6%BB%23) `123.3K 🔥` `NEW`
1. [一中国人涉及超7亿房产在英被冻结](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B6%89%E5%8F%8A%E8%B6%857%E4%BA%BF%E6%88%BF%E4%BA%A7%E5%9C%A8%E8%8B%B1%E8%A2%AB%E5%86%BB%E7%BB%93%23) `119.2K 🔥` `NEW`
1. [张雪机车爆单了 (Zhang Xue’s motorcycle sales are booming)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%88%86%E5%8D%95%E4%BA%86%23) `117.4K 🔥` `NEW`
1. [1岁男童输液后抽搐去世](https://s.weibo.com/weibo?q=%231%E5%B2%81%E7%94%B7%E7%AB%A5%E8%BE%93%E6%B6%B2%E5%90%8E%E6%8A%BD%E6%90%90%E5%8E%BB%E4%B8%96%23) `113.8K 🔥` `NEW`
1. [世界杯决赛时间公布](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E6%97%B6%E9%97%B4%E5%85%AC%E5%B8%83%23) `100.8K 🔥` `NEW`
1. [下次租房我就这样问](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E6%AC%A1%E7%A7%9F%E6%88%BF%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%E9%97%AE%23) `99.0K 🔥` `NEW`
1. [AG愚人节老实银](https://s.weibo.com/weibo?q=%23AG%E6%84%9A%E4%BA%BA%E8%8A%82%E8%80%81%E5%AE%9E%E9%93%B6%23) `95.7K 🔥` `NEW`
1. [婚前立遗嘱小伙称房子掏空父母积蓄](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E7%AB%8B%E9%81%97%E5%98%B1%E5%B0%8F%E4%BC%99%E7%A7%B0%E6%88%BF%E5%AD%90%E6%8E%8F%E7%A9%BA%E7%88%B6%E6%AF%8D%E7%A7%AF%E8%93%84%23) `95.6K 🔥` `NEW`
1. [法国豪门弃子34岁终夺冠致谢张雪](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%B1%AA%E9%97%A8%E5%BC%83%E5%AD%9034%E5%B2%81%E7%BB%88%E5%A4%BA%E5%86%A0%E8%87%B4%E8%B0%A2%E5%BC%A0%E9%9B%AA%23) `95.4K 🔥` `NEW`
1. [成都一凶宅第三次拍卖起拍价16.6万](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%87%B6%E5%AE%85%E7%AC%AC%E4%B8%89%E6%AC%A1%E6%8B%8D%E5%8D%96%E8%B5%B7%E6%8B%8D%E4%BB%B716.6%E4%B8%87%23) `95.0K 🔥` `NEW`
1. [辛芷蕾胡先煦给秦海璐包场](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%83%A1%E5%85%88%E7%85%A6%E7%BB%99%E7%A7%A6%E6%B5%B7%E7%92%90%E5%8C%85%E5%9C%BA%23) `94.4K 🔥` `NEW`
1. [上海地铁回应刷瑞幸取餐码出了站](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%9B%9E%E5%BA%94%E5%88%B7%E7%91%9E%E5%B9%B8%E5%8F%96%E9%A4%90%E7%A0%81%E5%87%BA%E4%BA%86%E7%AB%99%23) `94.3K 🔥` `NEW`
1. [村民发现清代祖坟疑遭盗墓 (Villagers discover ancestral tomb from Qing Dynasty suspected to have been robbed)](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E5%8F%91%E7%8E%B0%E6%B8%85%E4%BB%A3%E7%A5%96%E5%9D%9F%E7%96%91%E9%81%AD%E7%9B%97%E5%A2%93%23) `93.1K 🔥` `NEW`
1. [榜一大姐给男主播转160万后被分手](https://s.weibo.com/weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%A7%90%E7%BB%99%E7%94%B7%E4%B8%BB%E6%92%AD%E8%BD%AC160%E4%B8%87%E5%90%8E%E8%A2%AB%E5%88%86%E6%89%8B%23) `92.8K 🔥` `NEW`
1. [李荣浩汪苏泷可以畅聊一晚上](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%8F%AF%E4%BB%A5%E7%95%85%E8%81%8A%E4%B8%80%E6%99%9A%E4%B8%8A%23) `90.5K 🔥` `NEW`
1. [原特斯拉中国区高管入职小米](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%AD%E5%9B%BD%E5%8C%BA%E9%AB%98%E7%AE%A1%E5%85%A5%E8%81%8C%E5%B0%8F%E7%B1%B3%23) `89.8K 🔥` `NEW`
1. [成都一凶宅96.6万成交后买家悔拍](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%87%B6%E5%AE%8596.6%E4%B8%87%E6%88%90%E4%BA%A4%E5%90%8E%E4%B9%B0%E5%AE%B6%E6%82%94%E6%8B%8D%23) `84.1K 🔥` `NEW`
1. [左奇函摔倒](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E6%91%94%E5%80%92%23) `83.6K 🔥` `NEW`
1. [上交大融媒体中心致歉](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%A4%E5%A4%A7%E8%9E%8D%E5%AA%92%E4%BD%93%E4%B8%AD%E5%BF%83%E8%87%B4%E6%AD%89%23) `78.2K 🔥` `NEW`
1. [曾沛慈 够爱](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%A4%9F%E7%88%B1%23) `125.4K 🔥` `+41%`
1. [你的公积金悄悄变多了 (Your provident fund has quietly increased)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%AC%E7%A7%AF%E9%87%91%E6%82%84%E6%82%84%E5%8F%98%E5%A4%9A%E4%BA%86%23) `1.1M 🔥`
1. [日本彻底撕下伪装](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E6%92%95%E4%B8%8B%E4%BC%AA%E8%A3%85%23) `810.7K 🔥`
1. [雄安大脑赋能智慧城市](https://s.weibo.com/weibo?q=%23%E9%9B%84%E5%AE%89%E5%A4%A7%E8%84%91%E8%B5%8B%E8%83%BD%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%23) `635.5K 🔥`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `218.0K 🔥`
1. [日本男教师因接受性服务时偷拍被解雇](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E6%95%99%E5%B8%88%E5%9B%A0%E6%8E%A5%E5%8F%97%E6%80%A7%E6%9C%8D%E5%8A%A1%E6%97%B6%E5%81%B7%E6%8B%8D%E8%A2%AB%E8%A7%A3%E9%9B%87%23) `104.0K 🔥`
1. [三部门对优思益展开调查](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%83%A8%E9%97%A8%E5%AF%B9%E4%BC%98%E6%80%9D%E7%9B%8A%E5%B1%95%E5%BC%80%E8%B0%83%E6%9F%A5%23) `100.7K 🔥`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `95.0K 🔥`
1. [爸爸举高高孩子180度翻转吓到发烧](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%BE%E9%AB%98%E9%AB%98%E5%AD%A9%E5%AD%90180%E5%BA%A6%E7%BF%BB%E8%BD%AC%E5%90%93%E5%88%B0%E5%8F%91%E7%83%A7%23) `83.4K 🔥`
1. [29岁小伙赶在结婚前立遗嘱](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E5%B0%8F%E4%BC%99%E8%B5%B6%E5%9C%A8%E7%BB%93%E5%A9%9A%E5%89%8D%E7%AB%8B%E9%81%97%E5%98%B1%23) `181.7K 🔥` `-28%`
1. [央视曝光优思益多平台下架](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%BC%98%E6%80%9D%E7%9B%8A%E5%A4%9A%E5%B9%B3%E5%8F%B0%E4%B8%8B%E6%9E%B6%23) `135.5K 🔥` `-26%`
1. [芭乐 早知道烂地里了](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%20%E6%97%A9%E7%9F%A5%E9%81%93%E7%83%82%E5%9C%B0%E9%87%8C%E4%BA%86%23) `131.8K 🔥` `-49%`
1. [李荣浩否认抄袭 (Li Ronghao denies plagiarism)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E5%90%A6%E8%AE%A4%E6%8A%84%E8%A2%AD%23) `130.2K 🔥` `-43%`
1. [张雪身价上亿还在用两千多块钱坏手机](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%BA%AB%E4%BB%B7%E4%B8%8A%E4%BA%BF%E8%BF%98%E5%9C%A8%E7%94%A8%E4%B8%A4%E5%8D%83%E5%A4%9A%E5%9D%97%E9%92%B1%E5%9D%8F%E6%89%8B%E6%9C%BA%23) `128.2K 🔥` `-38%`
1. [鞠婧祎月鳞绮纪演技](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E6%BC%94%E6%8A%80%23) `126.4K 🔥` `-52%`
1. [警方已约谈太原暴走团负责人 (The police have interviewed the person in charge of the Taiyuan Outlaw Group)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%BA%A6%E8%B0%88%E5%A4%AA%E5%8E%9F%E6%9A%B4%E8%B5%B0%E5%9B%A2%E8%B4%9F%E8%B4%A3%E4%BA%BA%23) `125.1K 🔥` `-30%`
1. [李维嘉不知道遗产传给谁 (Li Weijia doesn’t know who the inheritance will be passed on to)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E4%B8%8D%E7%9F%A5%E9%81%93%E9%81%97%E4%BA%A7%E4%BC%A0%E7%BB%99%E8%B0%81%23) `125.0K 🔥` `-49%`
1. [迪丽热巴这真是妈咪级别的](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E7%9C%9F%E6%98%AF%E5%A6%88%E5%92%AA%E7%BA%A7%E5%88%AB%E7%9A%84%23) `124.2K 🔥` `-30%`
1. [以后再也不埋怨清明节下雨了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%9F%8B%E6%80%A8%E6%B8%85%E6%98%8E%E8%8A%82%E4%B8%8B%E9%9B%A8%E4%BA%86%23) `123.6K 🔥` `-30%`
1. [伊朗不同意停火强调要彻底结束战争 (Iran does not agree to ceasefire and emphasizes that it wants to completely end the war)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8D%E5%90%8C%E6%84%8F%E5%81%9C%E7%81%AB%E5%BC%BA%E8%B0%83%E8%A6%81%E5%BD%BB%E5%BA%95%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%23) `111.9K 🔥` `-36%`
1. [请假在家躺了两天小狗以为我失业了 (I took leave and stayed at home for two days. My puppy thought I was unemployed.)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E5%81%87%E5%9C%A8%E5%AE%B6%E8%BA%BA%E4%BA%86%E4%B8%A4%E5%A4%A9%E5%B0%8F%E7%8B%97%E4%BB%A5%E4%B8%BA%E6%88%91%E5%A4%B1%E4%B8%9A%E4%BA%86%23) `96.1K 🔥` `-47%`
1. [张雪建议年轻人条件有限就先搞钱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%BB%BA%E8%AE%AE%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%9D%A1%E4%BB%B6%E6%9C%89%E9%99%90%E5%B0%B1%E5%85%88%E6%90%9E%E9%92%B1%23) `92.2K 🔥` `-55%`
1. [从指甲看主角是真穷](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%8C%87%E7%94%B2%E7%9C%8B%E4%B8%BB%E8%A7%92%E6%98%AF%E7%9C%9F%E7%A9%B7%23) `89.9K 🔥` `-28%`
1. [Angelababy海边拍摄MV](https://s.weibo.com/weibo?q=%23Angelababy%E6%B5%B7%E8%BE%B9%E6%8B%8D%E6%91%84MV%23) `78.3K 🔥` `-42%`

Updated at 2026-04-01 17:02:26

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
