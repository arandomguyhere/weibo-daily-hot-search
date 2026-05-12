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

1. [南京审计大学通报男生偷拍 (Nanjing Audit University reports boys secretly photographed)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%AE%A1%E8%AE%A1%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E7%94%B7%E7%94%9F%E5%81%B7%E6%8B%8D%23) `1.2M 🔥` `NEW`
1. [中方强烈谴责巴方有关行径](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%BC%BA%E7%83%88%E8%B0%B4%E8%B4%A3%E5%B7%B4%E6%96%B9%E6%9C%89%E5%85%B3%E8%A1%8C%E5%BE%84%23) `840.6K 🔥` `NEW`
1. [黄晓明 丫头别拿错行李箱](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%20%E4%B8%AB%E5%A4%B4%E5%88%AB%E6%8B%BF%E9%94%99%E8%A1%8C%E6%9D%8E%E7%AE%B1%23) `833.7K 🔥` `NEW`
1. [建议不要在小环境中待太久](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%B0%8F%E7%8E%AF%E5%A2%83%E4%B8%AD%E5%BE%85%E5%A4%AA%E4%B9%85%23) `823.7K 🔥` `NEW`
1. [巴掌榴莲](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8E%8C%E6%A6%B4%E8%8E%B2%23) `815.2K 🔥` `NEW`
1. [网传歌手2026首发人数](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%AD%8C%E6%89%8B2026%E9%A6%96%E5%8F%91%E4%BA%BA%E6%95%B0%23) `316.9K 🔥` `NEW`
1. [抖音评论区 陈赫眼中含泪](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E8%AF%84%E8%AE%BA%E5%8C%BA%20%E9%99%88%E8%B5%AB%E7%9C%BC%E4%B8%AD%E5%90%AB%E6%B3%AA%23) `315.8K 🔥` `NEW`
1. [女孩退礼服事件合唱团称受牵连](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%80%80%E7%A4%BC%E6%9C%8D%E4%BA%8B%E4%BB%B6%E5%90%88%E5%94%B1%E5%9B%A2%E7%A7%B0%E5%8F%97%E7%89%B5%E8%BF%9E%23) `315.0K 🔥` `NEW`
1. [严浩翔回北电考试了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%9B%9E%E5%8C%97%E7%94%B5%E8%80%83%E8%AF%95%E4%BA%86%23) `309.4K 🔥` `NEW`
1. [消杀公司愿为误开房门赔30倍房费](https://s.weibo.com/weibo?q=%23%E6%B6%88%E6%9D%80%E5%85%AC%E5%8F%B8%E6%84%BF%E4%B8%BA%E8%AF%AF%E5%BC%80%E6%88%BF%E9%97%A8%E8%B5%9430%E5%80%8D%E6%88%BF%E8%B4%B9%23) `306.5K 🔥` `NEW`
1. [张元英黑色抹胸丝绒裙 (Zhang Yuanying black strapless velvet skirt)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E9%BB%91%E8%89%B2%E6%8A%B9%E8%83%B8%E4%B8%9D%E7%BB%92%E8%A3%99%23) `305.0K 🔥` `NEW`
1. [密集母职十年后东亚妈妈集体疲惫了](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%9B%86%E6%AF%8D%E8%81%8C%E5%8D%81%E5%B9%B4%E5%90%8E%E4%B8%9C%E4%BA%9A%E5%A6%88%E5%A6%88%E9%9B%86%E4%BD%93%E7%96%B2%E6%83%AB%E4%BA%86%23) `302.2K 🔥` `NEW`
1. [德国跨国迷奸案](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%23) `300.6K 🔥` `NEW`
1. [宇树机甲 民用交通工具](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E7%94%B2%20%E6%B0%91%E7%94%A8%E4%BA%A4%E9%80%9A%E5%B7%A5%E5%85%B7%23) `300.0K 🔥` `NEW`
1. [宋慧乔在朋友婚礼上致辞](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%A9%9A%E7%A4%BC%E4%B8%8A%E8%87%B4%E8%BE%9E%23) `272.9K 🔥` `NEW`
1. [王曼昱给孙颖莎看手机](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%BB%99%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9C%8B%E6%89%8B%E6%9C%BA%23) `237.1K 🔥` `NEW`
1. [双胞胎1死1伤案发前双方仍在调解](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E1%E6%AD%BB1%E4%BC%A4%E6%A1%88%E5%8F%91%E5%89%8D%E5%8F%8C%E6%96%B9%E4%BB%8D%E5%9C%A8%E8%B0%83%E8%A7%A3%23) `235.3K 🔥` `NEW`
1. [低智商犯罪 五花八门的傻子](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%20%E4%BA%94%E8%8A%B1%E5%85%AB%E9%97%A8%E7%9A%84%E5%82%BB%E5%AD%90%23) `234.9K 🔥` `NEW`
1. [中美首次联合发布禁毒声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A6%96%E6%AC%A1%E8%81%94%E5%90%88%E5%8F%91%E5%B8%83%E7%A6%81%E6%AF%92%E5%A3%B0%E6%98%8E%23) `229.6K 🔥` `NEW`
1. [上海大学通报一院长数据存疑](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E4%B8%80%E9%99%A2%E9%95%BF%E6%95%B0%E6%8D%AE%E5%AD%98%E7%96%91%23) `228.8K 🔥` `NEW`
1. [王俊凯和他的粉色行李箱 (Wang Junkai and his pink suitcase)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%92%8C%E4%BB%96%E7%9A%84%E7%B2%89%E8%89%B2%E8%A1%8C%E6%9D%8E%E7%AE%B1%23) `224.3K 🔥` `NEW`
1. [沪上阿姨回应骚扰顾客5000陪一晚](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E5%9B%9E%E5%BA%94%E9%AA%9A%E6%89%B0%E9%A1%BE%E5%AE%A25000%E9%99%AA%E4%B8%80%E6%99%9A%23) `221.0K 🔥` `NEW`
1. [东契奇回应雷霆横扫湖人](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E5%9B%9E%E5%BA%94%E9%9B%B7%E9%9C%86%E6%A8%AA%E6%89%AB%E6%B9%96%E4%BA%BA%23) `185.2K 🔥` `NEW`
1. [海底捞保洁藏顾客手机警方不予立案](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E4%BF%9D%E6%B4%81%E8%97%8F%E9%A1%BE%E5%AE%A2%E6%89%8B%E6%9C%BA%E8%AD%A6%E6%96%B9%E4%B8%8D%E4%BA%88%E7%AB%8B%E6%A1%88%23) `174.5K 🔥` `NEW`
1. [梁朝伟捡鸡蛋张曼玉挖芋头](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E6%8D%A1%E9%B8%A1%E8%9B%8B%E5%BC%A0%E6%9B%BC%E7%8E%89%E6%8C%96%E8%8A%8B%E5%A4%B4%23) `166.6K 🔥` `NEW`
1. [A股重回4200点 国家队买了谁](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E5%9B%9E4200%E7%82%B9%20%E5%9B%BD%E5%AE%B6%E9%98%9F%E4%B9%B0%E4%BA%86%E8%B0%81%23) `142.5K 🔥` `NEW`
1. [影石Luna被吐槽太贵](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3Luna%E8%A2%AB%E5%90%90%E6%A7%BD%E5%A4%AA%E8%B4%B5%23) `141.8K 🔥` `NEW`
1. [国乒男团女团抵京](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%A5%B3%E5%9B%A2%E6%8A%B5%E4%BA%AC%23) `140.7K 🔥` `NEW`
1. [李天泽近况](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A4%A9%E6%B3%BD%E8%BF%91%E5%86%B5%23) `134.6K 🔥` `NEW`
1. [陈妍希坐轮椅现身机场](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%9D%90%E8%BD%AE%E6%A4%85%E7%8E%B0%E8%BA%AB%E6%9C%BA%E5%9C%BA%23) `130.1K 🔥` `NEW`
1. [印度游客在莫斯科喷泉水池洗衣服 (Indian tourists wash clothes in Moscow fountain pool)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E8%8E%AB%E6%96%AF%E7%A7%91%E5%96%B7%E6%B3%89%E6%B0%B4%E6%B1%A0%E6%B4%97%E8%A1%A3%E6%9C%8D%23) `128.9K 🔥` `NEW`
1. [生命树入围亚洲内容大赏最佳作品](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%85%A5%E5%9B%B4%E4%BA%9A%E6%B4%B2%E5%86%85%E5%AE%B9%E5%A4%A7%E8%B5%8F%E6%9C%80%E4%BD%B3%E4%BD%9C%E5%93%81%23) `125.0K 🔥` `NEW`
1. [詹姆斯回应是否退役](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E9%80%80%E5%BD%B9%23) `303.9K 🔥` `+66%`
1. [科学避险自救指南](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E9%81%BF%E9%99%A9%E8%87%AA%E6%95%91%E6%8C%87%E5%8D%97%23) `837.0K 🔥`
1. [深圳夫妻囤存储芯片5个月狂涨320亿](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A4%AB%E5%A6%BB%E5%9B%A4%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%875%E4%B8%AA%E6%9C%88%E7%8B%82%E6%B6%A8320%E4%BA%BF%23) `816.0K 🔥`
1. [原来健康的人身体是静音的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%81%A5%E5%BA%B7%E7%9A%84%E4%BA%BA%E8%BA%AB%E4%BD%93%E6%98%AF%E9%9D%99%E9%9F%B3%E7%9A%84%23) `695.2K 🔥` `-28%`
1. [RNG复活了](https://s.weibo.com/weibo?q=%23RNG%E5%A4%8D%E6%B4%BB%E4%BA%86%23) `333.6K 🔥` `-22%`
1. [白鹿综艺互动为何会被逐帧审判](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%BC%E8%89%BA%E4%BA%92%E5%8A%A8%E4%B8%BA%E4%BD%95%E4%BC%9A%E8%A2%AB%E9%80%90%E5%B8%A7%E5%AE%A1%E5%88%A4%23) `312.7K 🔥` `-27%`
1. [宇树机甲390万起 (Yushu Mecha starts from 3.9 million)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E7%94%B2390%E4%B8%87%E8%B5%B7%23) `311.8K 🔥` `-85%`
1. [放羊的星星演员李威被判刑](https://s.weibo.com/weibo?q=%23%E6%94%BE%E7%BE%8A%E7%9A%84%E6%98%9F%E6%98%9F%E6%BC%94%E5%91%98%E6%9D%8E%E5%A8%81%E8%A2%AB%E5%88%A4%E5%88%91%23) `311.2K 🔥` `-28%`
1. [演出完退礼服女孩演出已暂停](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E5%A5%B3%E5%AD%A9%E6%BC%94%E5%87%BA%E5%B7%B2%E6%9A%82%E5%81%9C%23) `307.5K 🔥` `-68%`
1. [空调 霉菌 (Air conditioning mold)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%20%E9%9C%89%E8%8F%8C%23) `285.7K 🔥` `-34%`
1. [中餐厅10录制 (Chinese restaurant 10 recording)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%8510%E5%BD%95%E5%88%B6%23) `281.0K 🔥` `-68%`
1. [打司美格鲁肽减重的人怎么样了](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%87%8F%E9%87%8D%E7%9A%84%E4%BA%BA%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `220.0K 🔥` `-45%`
1. [降噪耳机受害者出现 (Noise-canceling headphone victims emerge)](https://s.weibo.com/weibo?q=%23%E9%99%8D%E5%99%AA%E8%80%B3%E6%9C%BA%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%23) `198.9K 🔥` `-80%`
1. [腾讯 已读访客功能不会开发](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%20%E5%B7%B2%E8%AF%BB%E8%AE%BF%E5%AE%A2%E5%8A%9F%E8%83%BD%E4%B8%8D%E4%BC%9A%E5%BC%80%E5%8F%91%23) `171.3K 🔥` `-60%`
1. [月嫂上户2天夜里粗暴摇晃婴儿](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%AB%82%E4%B8%8A%E6%88%B72%E5%A4%A9%E5%A4%9C%E9%87%8C%E7%B2%97%E6%9A%B4%E6%91%87%E6%99%83%E5%A9%B4%E5%84%BF%23) `135.0K 🔥` `-26%`
1. [给阿嬷的情书 观众的报复性投票](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E8%A7%82%E4%BC%97%E7%9A%84%E6%8A%A5%E5%A4%8D%E6%80%A7%E6%8A%95%E7%A5%A8%23) `124.4K 🔥` `-71%`
1. [退货女孩演出当天曾说礼服有问题](https://s.weibo.com/weibo?q=%23%E9%80%80%E8%B4%A7%E5%A5%B3%E5%AD%A9%E6%BC%94%E5%87%BA%E5%BD%93%E5%A4%A9%E6%9B%BE%E8%AF%B4%E7%A4%BC%E6%9C%8D%E6%9C%89%E9%97%AE%E9%A2%98%23) `124.1K 🔥` `-31%`
1. [杨幂烫伤在逐渐痊愈了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%83%AB%E4%BC%A4%E5%9C%A8%E9%80%90%E6%B8%90%E7%97%8A%E6%84%88%E4%BA%86%23) `123.1K 🔥` `-31%`

Updated at 2026-05-12 18:25:24

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
