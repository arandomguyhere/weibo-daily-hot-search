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

1. [原来出餐快也不一定就是预制菜](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%87%BA%E9%A4%90%E5%BF%AB%E4%B9%9F%E4%B8%8D%E4%B8%80%E5%AE%9A%E5%B0%B1%E6%98%AF%E9%A2%84%E5%88%B6%E8%8F%9C%23) `1.2M 🔥` `NEW`
1. [国足连自我尊重都不愿意很可怕](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%BF%9E%E8%87%AA%E6%88%91%E5%B0%8A%E9%87%8D%E9%83%BD%E4%B8%8D%E6%84%BF%E6%84%8F%E5%BE%88%E5%8F%AF%E6%80%95%23) `926.6K 🔥` `NEW`
1. [晚辈合力托举老人看升国旗](https://s.weibo.com/weibo?q=%23%E6%99%9A%E8%BE%88%E5%90%88%E5%8A%9B%E6%89%98%E4%B8%BE%E8%80%81%E4%BA%BA%E7%9C%8B%E5%8D%87%E5%9B%BD%E6%97%97%23) `825.9K 🔥` `NEW`
1. [小沈阳夫妇逆袭成国庆档票房黑马](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%A4%AB%E5%A6%87%E9%80%86%E8%A2%AD%E6%88%90%E5%9B%BD%E5%BA%86%E6%A1%A3%E7%A5%A8%E6%88%BF%E9%BB%91%E9%A9%AC%23) `778.5K 🔥` `NEW`
1. [中国夫妇刚拿澳洲绿卡车祸身亡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%AB%E5%A6%87%E5%88%9A%E6%8B%BF%E6%BE%B3%E6%B4%B2%E7%BB%BF%E5%8D%A1%E8%BD%A6%E7%A5%B8%E8%BA%AB%E4%BA%A1%23) `609.4K 🔥` `NEW`
1. [充电站排队烧油赶路混电车主发声](https://s.weibo.com/weibo?q=%23%E5%85%85%E7%94%B5%E7%AB%99%E6%8E%92%E9%98%9F%E7%83%A7%E6%B2%B9%E8%B5%B6%E8%B7%AF%E6%B7%B7%E7%94%B5%E8%BD%A6%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `461.4K 🔥` `NEW`
1. [新华社评国足0比5输巴勒斯坦](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%AF%84%E5%9B%BD%E8%B6%B30%E6%AF%945%E8%BE%93%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%23) `378.8K 🔥` `NEW`
1. [高速充电80%强制离场引争议](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%85%85%E7%94%B580%25%E5%BC%BA%E5%88%B6%E7%A6%BB%E5%9C%BA%E5%BC%95%E4%BA%89%E8%AE%AE%23) `376.0K 🔥` `NEW`
1. [EDG zmjjkk](https://s.weibo.com/weibo?q=%23EDG%20zmjjkk%23) `363.4K 🔥` `NEW`
1. [范丞丞新歌制作公司发声](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B0%E6%AD%8C%E5%88%B6%E4%BD%9C%E5%85%AC%E5%8F%B8%E5%8F%91%E5%A3%B0%23) `356.3K 🔥` `NEW`
1. [田馥甄曾因立场争议作品下架](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E6%9B%BE%E5%9B%A0%E7%AB%8B%E5%9C%BA%E4%BA%89%E8%AE%AE%E4%BD%9C%E5%93%81%E4%B8%8B%E6%9E%B6%23) `351.9K 🔥` `NEW`
1. [张继科杯球迷大骂发球遮挡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E6%9D%AF%E7%90%83%E8%BF%B7%E5%A4%A7%E9%AA%82%E5%8F%91%E7%90%83%E9%81%AE%E6%8C%A1%23) `350.1K 🔥` `NEW`
1. [汶颂获亚运MVP](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E9%A2%82%E8%8E%B7%E4%BA%9A%E8%BF%90MVP%23) `327.0K 🔥` `NEW`
1. [包贝尔 冷处理](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%20%E5%86%B7%E5%A4%84%E7%90%86%23) `289.0K 🔥` `NEW`
1. [深圳走应急车道被罚三千](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E8%B5%B0%E5%BA%94%E6%80%A5%E8%BD%A6%E9%81%93%E8%A2%AB%E7%BD%9A%E4%B8%89%E5%8D%83%23) `278.9K 🔥` `NEW`
1. [林心如晒和舒淇合照](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%83%E5%A6%82%E6%99%92%E5%92%8C%E8%88%92%E6%B7%87%E5%90%88%E7%85%A7%23) `245.0K 🔥` `NEW`
1. [苹果回应iPhone18ProMax故障](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94iPhone18ProMax%E6%95%85%E9%9A%9C%23) `237.4K 🔥` `NEW`
1. [小沈阳肿成蜜蜂小狗了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E8%82%BF%E6%88%90%E8%9C%9C%E8%9C%82%E5%B0%8F%E7%8B%97%E4%BA%86%23) `223.5K 🔥` `NEW`
1. [香港名媛碎尸案蔡天凤手机仍未找到](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E7%A2%8E%E5%B0%B8%E6%A1%88%E8%94%A1%E5%A4%A9%E5%87%A4%E6%89%8B%E6%9C%BA%E4%BB%8D%E6%9C%AA%E6%89%BE%E5%88%B0%23) `212.2K 🔥` `NEW`
1. [国庆游客的打卡灵感已经藏不住了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E6%B8%B8%E5%AE%A2%E7%9A%84%E6%89%93%E5%8D%A1%E7%81%B5%E6%84%9F%E5%B7%B2%E7%BB%8F%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `211.9K 🔥` `NEW`
1. [纪梵希看秀待遇](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E6%A2%B5%E5%B8%8C%E7%9C%8B%E7%A7%80%E5%BE%85%E9%81%87%23) `210.2K 🔥` `NEW`
1. [AI面试 恐怖谷](https://s.weibo.com/weibo?q=%23AI%E9%9D%A2%E8%AF%95%20%E6%81%90%E6%80%96%E8%B0%B7%23) `209.8K 🔥` `NEW`
1. [眼镜戴了和没戴是两回事](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E9%95%9C%E6%88%B4%E4%BA%86%E5%92%8C%E6%B2%A1%E6%88%B4%E6%98%AF%E4%B8%A4%E5%9B%9E%E4%BA%8B%23) `209.0K 🔥` `NEW`
1. [孙千衬衫开口Luke2.0](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%A1%AC%E8%A1%AB%E5%BC%80%E5%8F%A3Luke2.0%23) `207.9K 🔥` `NEW`
1. [何猷君力挺C罗](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%8A%9B%E6%8C%BAC%E7%BD%97%23) `206.9K 🔥` `NEW`
1. [女子怀孕29周产下1公斤极早产儿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%9529%E5%91%A8%E4%BA%A7%E4%B8%8B1%E5%85%AC%E6%96%A4%E6%9E%81%E6%97%A9%E4%BA%A7%E5%84%BF%23) `206.1K 🔥` `NEW`
1. [中国U23国足vs乌兹别克斯坦U23](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU23%E5%9B%BD%E8%B6%B3vs%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6U23%23) `201.7K 🔥` `NEW`
1. [惠英红 妈你是不是在巴黎买了地](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E5%A6%88%E4%BD%A0%E6%98%AF%E4%B8%8D%E6%98%AF%E5%9C%A8%E5%B7%B4%E9%BB%8E%E4%B9%B0%E4%BA%86%E5%9C%B0%23) `178.8K 🔥` `NEW`
1. [以色列飞迪拜航班全部取消](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%A3%9E%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%8F%AD%E5%85%A8%E9%83%A8%E5%8F%96%E6%B6%88%23) `175.3K 🔥` `NEW`
1. [火灵儿被指抄袭暖暖](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%81%B5%E5%84%BF%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%E6%9A%96%E6%9A%96%23) `174.4K 🔥` `NEW`
1. [韩国警告乌克兰](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%AD%A6%E5%91%8A%E4%B9%8C%E5%85%8B%E5%85%B0%23) `173.1K 🔥` `NEW`
1. [谁撑起了国庆3.5亿票房](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%92%91%E8%B5%B7%E4%BA%86%E5%9B%BD%E5%BA%863.5%E4%BA%BF%E7%A5%A8%E6%88%BF%23) `168.1K 🔥` `NEW`
1. [金价银价油价巨震](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E6%B2%B9%E4%BB%B7%E5%B7%A8%E9%9C%87%23) `160.6K 🔥` `NEW`
1. [好想像王一博一样不和任何人装熟](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E5%83%8F%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%80%E6%A0%B7%E4%B8%8D%E5%92%8C%E4%BB%BB%E4%BD%95%E4%BA%BA%E8%A3%85%E7%86%9F%23) `156.7K 🔥` `NEW`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `150.6K 🔥` `NEW`
1. [老人给猫举高高后各断一肢](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%BB%99%E7%8C%AB%E4%B8%BE%E9%AB%98%E9%AB%98%E5%90%8E%E5%90%84%E6%96%AD%E4%B8%80%E8%82%A2%23) `146.1K 🔥` `NEW`
1. [德国女孩被中国作业整到活人微死](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E5%A5%B3%E5%AD%A9%E8%A2%AB%E4%B8%AD%E5%9B%BD%E4%BD%9C%E4%B8%9A%E6%95%B4%E5%88%B0%E6%B4%BB%E4%BA%BA%E5%BE%AE%E6%AD%BB%23) `136.8K 🔥` `NEW`
1. [小伙毕业刚入职就弄丢10台苹果手机](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%AF%95%E4%B8%9A%E5%88%9A%E5%85%A5%E8%81%8C%E5%B0%B1%E5%BC%84%E4%B8%A210%E5%8F%B0%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `135.5K 🔥` `NEW`
1. [国庆很难找到中国人没去过的国家](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%BE%88%E9%9A%BE%E6%89%BE%E5%88%B0%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B2%A1%E5%8E%BB%E8%BF%87%E7%9A%84%E5%9B%BD%E5%AE%B6%23) `134.4K 🔥` `NEW`
1. [人人人人人青岛小麦岛人人人人人](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%BA%BA%E4%BA%BA%E4%BA%BA%E4%BA%BA%E9%9D%92%E5%B2%9B%E5%B0%8F%E9%BA%A6%E5%B2%9B%E4%BA%BA%E4%BA%BA%E4%BA%BA%E4%BA%BA%E4%BA%BA%23) `127.5K 🔥` `NEW`
1. [心理学家称张家齐妈妈活在幻想中](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E5%AD%A6%E5%AE%B6%E7%A7%B0%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%B4%BB%E5%9C%A8%E5%B9%BB%E6%83%B3%E4%B8%AD%23) `126.3K 🔥` `NEW`
1. [张丹峰的六个菜够我吃一周了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%B9%E5%B3%B0%E7%9A%84%E5%85%AD%E4%B8%AA%E8%8F%9C%E5%A4%9F%E6%88%91%E5%90%83%E4%B8%80%E5%91%A8%E4%BA%86%23) `124.7K 🔥` `NEW`
1. [老演员把一家子隐私出卖完了](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%BC%94%E5%91%98%E6%8A%8A%E4%B8%80%E5%AE%B6%E5%AD%90%E9%9A%90%E7%A7%81%E5%87%BA%E5%8D%96%E5%AE%8C%E4%BA%86%23) `124.3K 🔥` `NEW`
1. [我把兰香如故羽仙记拍出来了](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%8A%8A%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%BE%BD%E4%BB%99%E8%AE%B0%E6%8B%8D%E5%87%BA%E6%9D%A5%E4%BA%86%23) `124.2K 🔥` `NEW`
1. [极客湾揭秘麒麟9050Pro](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%AE%A2%E6%B9%BE%E6%8F%AD%E7%A7%98%E9%BA%92%E9%BA%9F9050Pro%23) `120.3K 🔥` `NEW`
1. [三妹妹被二姐姐血脉压制](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A6%B9%E5%A6%B9%E8%A2%AB%E4%BA%8C%E5%A7%90%E5%A7%90%E8%A1%80%E8%84%89%E5%8E%8B%E5%88%B6%23) `119.1K 🔥` `NEW`
1. [曝LPL过签现状](https://s.weibo.com/weibo?q=%23%E6%9B%9DLPL%E8%BF%87%E7%AD%BE%E7%8E%B0%E7%8A%B6%23) `117.7K 🔥` `NEW`
1. [陈思诚回应陈飞宇台词出圈](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E5%9B%9E%E5%BA%94%E9%99%88%E9%A3%9E%E5%AE%87%E5%8F%B0%E8%AF%8D%E5%87%BA%E5%9C%88%23) `117.1K 🔥` `NEW`
1. [中国夫妇车祸前8天刚过结婚纪念日](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%AB%E5%A6%87%E8%BD%A6%E7%A5%B8%E5%89%8D8%E5%A4%A9%E5%88%9A%E8%BF%87%E7%BB%93%E5%A9%9A%E7%BA%AA%E5%BF%B5%E6%97%A5%23) `114.9K 🔥` `NEW`
1. [徐明浩 范丞丞](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%98%8E%E6%B5%A9%20%E8%8C%83%E4%B8%9E%E4%B8%9E%23) `287.5K 🔥` `+104%`

Updated at 2026-10-03 14:44:48

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
