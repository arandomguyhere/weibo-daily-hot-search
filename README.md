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

1. [火灾坠楼女童母亲39岁才将其生下 (The mother of a girl who fell from a building in a fire gave birth to her at the age of 39)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%81%BE%E5%9D%A0%E6%A5%BC%E5%A5%B3%E7%AB%A5%E6%AF%8D%E4%BA%B239%E5%B2%81%E6%89%8D%E5%B0%86%E5%85%B6%E7%94%9F%E4%B8%8B%23) `2.2M 🔥` `NEW`
1. [中国北斗导航升级了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%97%E6%96%97%E5%AF%BC%E8%88%AA%E5%8D%87%E7%BA%A7%E4%BA%86%23) `802.6K 🔥` `NEW`
1. [客服 坏了他真会啊](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%9C%8D%20%E5%9D%8F%E4%BA%86%E4%BB%96%E7%9C%9F%E4%BC%9A%E5%95%8A%23) `792.0K 🔥` `NEW`
1. [杨勇](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8B%87%23) `751.2K 🔥` `NEW`
1. [三大运营商发布公告](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%8F%91%E5%B8%83%E5%85%AC%E5%91%8A%23) `533.9K 🔥` `NEW`
1. [845续航MG07预售15.59万](https://s.weibo.com/weibo?q=%23845%E7%BB%AD%E8%88%AAMG07%E9%A2%84%E5%94%AE15.59%E4%B8%87%23) `494.4K 🔥` `NEW`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `451.5K 🔥` `NEW`
1. [窦靖童 王菲的声音窦唯的造型](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%20%E7%8E%8B%E8%8F%B2%E7%9A%84%E5%A3%B0%E9%9F%B3%E7%AA%A6%E5%94%AF%E7%9A%84%E9%80%A0%E5%9E%8B%23) `417.2K 🔥` `NEW`
1. [外籍主播古爱华放弃入职敦煌融媒体](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E4%B8%BB%E6%92%AD%E5%8F%A4%E7%88%B1%E5%8D%8E%E6%94%BE%E5%BC%83%E5%85%A5%E8%81%8C%E6%95%A6%E7%85%8C%E8%9E%8D%E5%AA%92%E4%BD%93%23) `407.2K 🔥` `NEW`
1. [姐姐否认C罗将结婚](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E5%90%A6%E8%AE%A4C%E7%BD%97%E5%B0%86%E7%BB%93%E5%A9%9A%23) `403.3K 🔥` `NEW`
1. [邓紫棋偷看歌手又被发现了 (Deng Ziqi was caught peeking at the singer again)](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%81%B7%E7%9C%8B%E6%AD%8C%E6%89%8B%E5%8F%88%E8%A2%AB%E5%8F%91%E7%8E%B0%E4%BA%86%23) `393.3K 🔥` `NEW`
1. [婚外试管小三正面拍照挑衅患癌原配](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%AF%95%E7%AE%A1%E5%B0%8F%E4%B8%89%E6%AD%A3%E9%9D%A2%E6%8B%8D%E7%85%A7%E6%8C%91%E8%A1%85%E6%82%A3%E7%99%8C%E5%8E%9F%E9%85%8D%23) `390.5K 🔥` `NEW`
1. [业内人士谈连云港母女坠楼消防救援](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E4%BA%BA%E5%A3%AB%E8%B0%88%E8%BF%9E%E4%BA%91%E6%B8%AF%E6%AF%8D%E5%A5%B3%E5%9D%A0%E6%A5%BC%E6%B6%88%E9%98%B2%E6%95%91%E6%8F%B4%23) `374.2K 🔥` `NEW`
1. [房主任被停演3个月](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E8%A2%AB%E5%81%9C%E6%BC%943%E4%B8%AA%E6%9C%88%23) `368.3K 🔥` `NEW`
1. [菲律宾严重侵犯中国领土主权](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E4%B8%A5%E9%87%8D%E4%BE%B5%E7%8A%AF%E4%B8%AD%E5%9B%BD%E9%A2%86%E5%9C%9F%E4%B8%BB%E6%9D%83%23) `355.0K 🔥` `NEW`
1. [周也小酒窝自拍](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%B0%8F%E9%85%92%E7%AA%9D%E8%87%AA%E6%8B%8D%23) `349.2K 🔥` `NEW`
1. [王传君低智商犯罪售后](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E5%94%AE%E5%90%8E%23) `282.7K 🔥` `NEW`
1. [好多明星用了迪丽热巴音频](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E7%94%A8%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%9F%B3%E9%A2%91%23) `247.3K 🔥` `NEW`
1. [白鹿开到荼蘼被房东赶出来](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E8%A2%AB%E6%88%BF%E4%B8%9C%E8%B5%B6%E5%87%BA%E6%9D%A5%23) `246.9K 🔥` `NEW`
1. [惠英红 陈伟霆曾舜晞你俩还脱不脱](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E9%99%88%E4%BC%9F%E9%9C%86%E6%9B%BE%E8%88%9C%E6%99%9E%E4%BD%A0%E4%BF%A9%E8%BF%98%E8%84%B1%E4%B8%8D%E8%84%B1%23) `246.9K 🔥` `NEW`
1. [移民涌入西班牙像僵尸入侵 (Immigrants pouring into Spain like a zombie invasion)](https://s.weibo.com/weibo?q=%23%E7%A7%BB%E6%B0%91%E6%B6%8C%E5%85%A5%E8%A5%BF%E7%8F%AD%E7%89%99%E5%83%8F%E5%83%B5%E5%B0%B8%E5%85%A5%E4%BE%B5%23) `246.8K 🔥` `NEW`
1. [王楚钦vs徐瑛彬](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%BE%90%E7%91%9B%E5%BD%AC%23) `246.8K 🔥` `NEW`
1. [公公强奸儿媳案丈夫认定妻子是自愿](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%85%AC%E5%BC%BA%E5%A5%B8%E5%84%BF%E5%AA%B3%E6%A1%88%E4%B8%88%E5%A4%AB%E8%AE%A4%E5%AE%9A%E5%A6%BB%E5%AD%90%E6%98%AF%E8%87%AA%E6%84%BF%23) `244.4K 🔥` `NEW`
1. [瞿颖疑似吐槽张雅琪](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E7%96%91%E4%BC%BC%E5%90%90%E6%A7%BD%E5%BC%A0%E9%9B%85%E7%90%AA%23) `238.0K 🔥` `NEW`
1. [连云港火灾母亲不知女儿已不在](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%81%AB%E7%81%BE%E6%AF%8D%E4%BA%B2%E4%B8%8D%E7%9F%A5%E5%A5%B3%E5%84%BF%E5%B7%B2%E4%B8%8D%E5%9C%A8%23) `221.4K 🔥` `NEW`
1. [魏如萱丑八怪从被骂到封神](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E4%B8%91%E5%85%AB%E6%80%AA%E4%BB%8E%E8%A2%AB%E9%AA%82%E5%88%B0%E5%B0%81%E7%A5%9E%23) `216.5K 🔥` `NEW`
1. [被安排冥婚女星26岁时自杀身亡](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%89%E6%8E%92%E5%86%A5%E5%A9%9A%E5%A5%B3%E6%98%9F26%E5%B2%81%E6%97%B6%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23) `188.5K 🔥` `NEW`
1. [周星驰质疑董宇辉看大话西游500遍](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E8%B4%A8%E7%96%91%E8%91%A3%E5%AE%87%E8%BE%89%E7%9C%8B%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8500%E9%81%8D%23) `185.0K 🔥` `NEW`
1. [22岁女孩独游南太行失联超4天](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%8B%AC%E6%B8%B8%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%A4%B1%E8%81%94%E8%B6%854%E5%A4%A9%23) `180.3K 🔥` `NEW`
1. [Bin处境尴尬](https://s.weibo.com/weibo?q=%23Bin%E5%A4%84%E5%A2%83%E5%B0%B4%E5%B0%AC%23) `177.5K 🔥` `NEW`
1. [歌手顺序 (Singer order)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E9%A1%BA%E5%BA%8F%23) `173.5K 🔥` `NEW`
1. [荷兰弟已计划交接蜘蛛侠](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E5%B7%B2%E8%AE%A1%E5%88%92%E4%BA%A4%E6%8E%A5%E8%9C%98%E8%9B%9B%E4%BE%A0%23) `164.5K 🔥` `NEW`
1. [俄罗斯专家称中国综合国力太强大](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%93%E5%AE%B6%E7%A7%B0%E4%B8%AD%E5%9B%BD%E7%BB%BC%E5%90%88%E5%9B%BD%E5%8A%9B%E5%A4%AA%E5%BC%BA%E5%A4%A7%23) `160.4K 🔥` `NEW`
1. [宇树科技估值](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%BC%B0%E5%80%BC%23) `160.1K 🔥` `NEW`
1. [Adobe称法国AI排名全球第三](https://s.weibo.com/weibo?q=%23Adobe%E7%A7%B0%E6%B3%95%E5%9B%BDAI%E6%8E%92%E5%90%8D%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%89%23) `160.1K 🔥` `NEW`
1. [黄岩岛是中国固有领土](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%B2%A9%E5%B2%9B%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%9B%BA%E6%9C%89%E9%A2%86%E5%9C%9F%23) `160.1K 🔥` `NEW`
1. [保时捷女销冠已向法院立案](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%86%A0%E5%B7%B2%E5%90%91%E6%B3%95%E9%99%A2%E7%AB%8B%E6%A1%88%23) `1.0M 🔥` `+543%`
1. [骁龙京东超品日手机低至5折 (Up to 50% off on Snapdragon JD super-brand Japanese mobile phones)](https://s.weibo.com/weibo?q=%23%E9%AA%81%E9%BE%99%E4%BA%AC%E4%B8%9C%E8%B6%85%E5%93%81%E6%97%A5%E6%89%8B%E6%9C%BA%E4%BD%8E%E8%87%B35%E6%8A%98%23) `797.4K 🔥` `+217%`
1. [孙珍妮胳膊瘦到只剩骨头了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%8F%8D%E5%A6%AE%E8%83%B3%E8%86%8A%E7%98%A6%E5%88%B0%E5%8F%AA%E5%89%A9%E9%AA%A8%E5%A4%B4%E4%BA%86%23) `397.6K 🔥`
1. [鬼鬼谈女儿哽咽落泪](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E9%AC%BC%E8%B0%88%E5%A5%B3%E5%84%BF%E5%93%BD%E5%92%BD%E8%90%BD%E6%B3%AA%23) `285.5K 🔥`
1. [王楚然耳夹掉了耳朵都红了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%80%B3%E5%A4%B9%E6%8E%89%E4%BA%86%E8%80%B3%E6%9C%B5%E9%83%BD%E7%BA%A2%E4%BA%86%23) `192.1K 🔥`
1. [读懂好感度攀升背后的中国魅力 (Understand the charm of China behind the rise in favorability)](https://s.weibo.com/weibo?q=%23%E8%AF%BB%E6%87%82%E5%A5%BD%E6%84%9F%E5%BA%A6%E6%94%80%E5%8D%87%E8%83%8C%E5%90%8E%E7%9A%84%E4%B8%AD%E5%9B%BD%E9%AD%85%E5%8A%9B%23) `415.7K 🔥` `-53%`
1. [唐艺昕没有妊娠纹](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%B2%A1%E6%9C%89%E5%A6%8A%E5%A8%A0%E7%BA%B9%23) `382.3K 🔥` `-32%`
1. [白鹿广东凉鞋](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B9%BF%E4%B8%9C%E5%87%89%E9%9E%8B%23) `376.0K 🔥` `-28%`
1. [千万不要把自己的身体当做耗材](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E8%87%AA%E5%B7%B1%E7%9A%84%E8%BA%AB%E4%BD%93%E5%BD%93%E5%81%9A%E8%80%97%E6%9D%90%23) `364.6K 🔥` `-38%`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `356.7K 🔥` `-36%`
1. [健身房偷拍事件女子道歉后仍咬定偷拍](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E5%81%B7%E6%8B%8D%E4%BA%8B%E4%BB%B6%E5%A5%B3%E5%AD%90%E9%81%93%E6%AD%89%E5%90%8E%E4%BB%8D%E5%92%AC%E5%AE%9A%E5%81%B7%E6%8B%8D%23) `316.8K 🔥` `-28%`
1. [DeepSeekV4能力在GLM5.2和KimiK3之间](https://s.weibo.com/weibo?q=%23DeepSeekV4%E8%83%BD%E5%8A%9B%E5%9C%A8GLM5.2%E5%92%8CKimiK3%E4%B9%8B%E9%97%B4%23) `251.3K 🔥` `-32%`
1. [闵塔鲨回应迪丽热巴裙子](https://s.weibo.com/weibo?q=%23%E9%97%B5%E5%A1%94%E9%B2%A8%E5%9B%9E%E5%BA%94%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A3%99%E5%AD%90%23) `183.9K 🔥` `-42%`
1. [虞书欣大腿淤青](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A4%A7%E8%85%BF%E6%B7%A4%E9%9D%92%23) `177.5K 🔥` `-68%`
1. [国务院关于出境入境管理的规定](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%A1%E9%99%A2%E5%85%B3%E4%BA%8E%E5%87%BA%E5%A2%83%E5%85%A5%E5%A2%83%E7%AE%A1%E7%90%86%E7%9A%84%E8%A7%84%E5%AE%9A%23) `173.2K 🔥` `-47%`
1. [时代峰峻星探 小学扫楼 (Times Fengjun Star Scout sweeps the building in primary school)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%98%9F%E6%8E%A2%20%E5%B0%8F%E5%AD%A6%E6%89%AB%E6%A5%BC%23) `168.0K 🔥` `-58%`

Updated at 2026-07-31 21:05:08

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
