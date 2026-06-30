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

1. [荷兰淘汰 (Netherlands eliminated)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E6%B7%98%E6%B1%B0%23) `5.6M 🔥` `NEW`
1. [曝现在就出发新阵容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%E6%96%B0%E9%98%B5%E5%AE%B9%23) `1.4M 🔥` `NEW`
1. [一人一句祝党生日快乐](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E4%B8%80%E5%8F%A5%E7%A5%9D%E5%85%9A%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%23) `1.0M 🔥` `NEW`
1. [原来还有收益更香的余额宝啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%98%E6%9C%89%E6%94%B6%E7%9B%8A%E6%9B%B4%E9%A6%99%E7%9A%84%E4%BD%99%E9%A2%9D%E5%AE%9D%E5%95%8A%23) `1.0M 🔥` `NEW`
1. [陆家嘴独居女生vlog火了](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%AE%B6%E5%98%B4%E7%8B%AC%E5%B1%85%E5%A5%B3%E7%94%9Fvlog%E7%81%AB%E4%BA%86%23) `968.2K 🔥` `NEW`
1. [要有多高认知才能说出这话](https://s.weibo.com/weibo?q=%23%E8%A6%81%E6%9C%89%E5%A4%9A%E9%AB%98%E8%AE%A4%E7%9F%A5%E6%89%8D%E8%83%BD%E8%AF%B4%E5%87%BA%E8%BF%99%E8%AF%9D%23) `968.2K 🔥` `NEW`
1. [金鹰奖投票用了迪丽热巴全名](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8A%95%E7%A5%A8%E7%94%A8%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E5%90%8D%23) `860.4K 🔥` `NEW`
1. [美好家打造指南](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%A5%BD%E5%AE%B6%E6%89%93%E9%80%A0%E6%8C%87%E5%8D%97%23) `744.4K 🔥` `NEW`
1. [死亡之组快死完了](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E4%BA%A1%E4%B9%8B%E7%BB%84%E5%BF%AB%E6%AD%BB%E5%AE%8C%E4%BA%86%23) `663.7K 🔥` `NEW`
1. [金鹰奖最佳男主角候选](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%E5%80%99%E9%80%89%23) `659.0K 🔥` `NEW`
1. [iPhone18ProMax银灰色 (iPhone18ProMax silver gray)](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E9%93%B6%E7%81%B0%E8%89%B2%23) `651.1K 🔥` `NEW`
1. [被拖欠工资之后就这样复仇](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8B%96%E6%AC%A0%E5%B7%A5%E8%B5%84%E4%B9%8B%E5%90%8E%E5%B0%B1%E8%BF%99%E6%A0%B7%E5%A4%8D%E4%BB%87%23) `641.4K 🔥` `NEW`
1. [对张凌赫190身高有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%BC%A0%E5%87%8C%E8%B5%AB190%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `636.2K 🔥` `NEW`
1. [茉莉奶白被称最高位套现](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E8%A2%AB%E7%A7%B0%E6%9C%80%E9%AB%98%E4%BD%8D%E5%A5%97%E7%8E%B0%23) `626.3K 🔥` `NEW`
1. [金鹰奖最佳女主角候选](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E5%80%99%E9%80%89%23) `625.1K 🔥` `NEW`
1. [一栗小莎子最后一次化疗](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E5%8C%96%E7%96%97%23) `547.5K 🔥` `NEW`
1. [女子身高166体重到100斤就焦虑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BA%AB%E9%AB%98166%E4%BD%93%E9%87%8D%E5%88%B0100%E6%96%A4%E5%B0%B1%E7%84%A6%E8%99%91%23) `493.5K 🔥` `NEW`
1. [揭阳未成年残忍虐杀狗妈妈一家](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E9%98%B3%E6%9C%AA%E6%88%90%E5%B9%B4%E6%AE%8B%E5%BF%8D%E8%99%90%E6%9D%80%E7%8B%97%E5%A6%88%E5%A6%88%E4%B8%80%E5%AE%B6%23) `486.3K 🔥` `NEW`
1. [格力朱磊回应空调26度省电](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E5%8A%9B%E6%9C%B1%E7%A3%8A%E5%9B%9E%E5%BA%94%E7%A9%BA%E8%B0%8326%E5%BA%A6%E7%9C%81%E7%94%B5%23) `481.3K 🔥` `NEW`
1. [寒武纪市值突破1万亿](https://s.weibo.com/weibo?q=%23%E5%AF%92%E6%AD%A6%E7%BA%AA%E5%B8%82%E5%80%BC%E7%AA%81%E7%A0%B41%E4%B8%87%E4%BA%BF%23) `472.9K 🔥` `NEW`
1. [FENDI法棍包 (FENDI baguette bag)](https://s.weibo.com/weibo?q=%23FENDI%E6%B3%95%E6%A3%8D%E5%8C%85%23) `465.5K 🔥` `NEW`
1. [鹅定档了一部双女主和一部双男主](https://s.weibo.com/weibo?q=%23%E9%B9%85%E5%AE%9A%E6%A1%A3%E4%BA%86%E4%B8%80%E9%83%A8%E5%8F%8C%E5%A5%B3%E4%B8%BB%E5%92%8C%E4%B8%80%E9%83%A8%E5%8F%8C%E7%94%B7%E4%B8%BB%23) `461.0K 🔥` `NEW`
1. [家暴受害人先是人然后才是其他身份](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9A%B4%E5%8F%97%E5%AE%B3%E4%BA%BA%E5%85%88%E6%98%AF%E4%BA%BA%E7%84%B6%E5%90%8E%E6%89%8D%E6%98%AF%E5%85%B6%E4%BB%96%E8%BA%AB%E4%BB%BD%23) `449.8K 🔥` `NEW`
1. [荷兰点球拉完了](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E7%82%B9%E7%90%83%E6%8B%89%E5%AE%8C%E4%BA%86%23) `443.2K 🔥` `NEW`
1. [虞书欣侯明昊念相思开机路透](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%BC%80%E6%9C%BA%E8%B7%AF%E9%80%8F%23) `441.1K 🔥` `NEW`
1. [曝女明星请家教不给钱](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A5%B3%E6%98%8E%E6%98%9F%E8%AF%B7%E5%AE%B6%E6%95%99%E4%B8%8D%E7%BB%99%E9%92%B1%23) `436.5K 🔥` `NEW`
1. [官方通报未成年人伤害流浪狗](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E4%BC%A4%E5%AE%B3%E6%B5%81%E6%B5%AA%E7%8B%97%23) `432.8K 🔥` `NEW`
1. [Angelababy下沉市场路人缘](https://s.weibo.com/weibo?q=%23Angelababy%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `432.5K 🔥` `NEW`
1. [网传白鹿李昀锐搭开到茶蘼](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%90%AD%E5%BC%80%E5%88%B0%E8%8C%B6%E8%98%BC%23) `431.2K 🔥` `NEW`
1. [巴黎麦当劳50度](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E9%BA%A6%E5%BD%93%E5%8A%B350%E5%BA%A6%23) `430.4K 🔥` `NEW`
1. [CORTIS道歉 (CORTIS apologizes)](https://s.weibo.com/weibo?q=%23CORTIS%E9%81%93%E6%AD%89%23) `425.9K 🔥` `NEW`
1. [中国共产党党员总数为10128.6万名](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E5%85%9A%E5%91%98%E6%80%BB%E6%95%B0%E4%B8%BA10128.6%E4%B8%87%E5%90%8D%23) `424.4K 🔥` `NEW`
1. [何炅打断沈梦辰张凌赫握手](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E6%89%93%E6%96%AD%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8F%A1%E6%89%8B%23) `421.6K 🔥` `NEW`
1. [马宁多次提醒主裁向替补席出牌](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%A4%9A%E6%AC%A1%E6%8F%90%E9%86%92%E4%B8%BB%E8%A3%81%E5%90%91%E6%9B%BF%E8%A1%A5%E5%B8%AD%E5%87%BA%E7%89%8C%23) `420.2K 🔥` `NEW`
1. [抛夫弃子与情夫私奔三年后病危](https://s.weibo.com/weibo?q=%23%E6%8A%9B%E5%A4%AB%E5%BC%83%E5%AD%90%E4%B8%8E%E6%83%85%E5%A4%AB%E7%A7%81%E5%A5%94%E4%B8%89%E5%B9%B4%E5%90%8E%E7%97%85%E5%8D%B1%23) `418.1K 🔥` `NEW`
1. [恋与深空承认犯错就那么难吗](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%89%BF%E8%AE%A4%E7%8A%AF%E9%94%99%E5%B0%B1%E9%82%A3%E4%B9%88%E9%9A%BE%E5%90%97%23) `393.6K 🔥` `NEW`
1. [霍尊 陈露](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%8A%20%E9%99%88%E9%9C%B2%23) `379.1K 🔥` `NEW`
1. [比蒋勤勤的儿子还像陈建斌](https://s.weibo.com/weibo?q=%23%E6%AF%94%E8%92%8B%E5%8B%A4%E5%8B%A4%E7%9A%84%E5%84%BF%E5%AD%90%E8%BF%98%E5%83%8F%E9%99%88%E5%BB%BA%E6%96%8C%23) `374.9K 🔥` `NEW`
1. [巴拉圭赢德国全国放假一天](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E8%B5%A2%E5%BE%B7%E5%9B%BD%E5%85%A8%E5%9B%BD%E6%94%BE%E5%81%87%E4%B8%80%E5%A4%A9%23) `372.1K 🔥` `NEW`
1. [荷兰球员被开瓢血流不止](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E7%90%83%E5%91%98%E8%A2%AB%E5%BC%80%E7%93%A2%E8%A1%80%E6%B5%81%E4%B8%8D%E6%AD%A2%23) `362.8K 🔥` `NEW`
1. [原来生鲜的冰袋还有这个作用 (It turns out that fresh ice packs also have this effect)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%94%9F%E9%B2%9C%E7%9A%84%E5%86%B0%E8%A2%8B%E8%BF%98%E6%9C%89%E8%BF%99%E4%B8%AA%E4%BD%9C%E7%94%A8%23) `330.6K 🔥` `NEW`
1. [林一高个子打伞的坏处来了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E9%AB%98%E4%B8%AA%E5%AD%90%E6%89%93%E4%BC%9E%E7%9A%84%E5%9D%8F%E5%A4%84%E6%9D%A5%E4%BA%86%23) `298.5K 🔥` `NEW`
1. [别让董璇参与世界杯](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E8%91%A3%E7%92%87%E5%8F%82%E4%B8%8E%E4%B8%96%E7%95%8C%E6%9D%AF%23) `291.2K 🔥` `NEW`
1. [巴西绝杀视频被ESPN转发](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%BB%9D%E6%9D%80%E8%A7%86%E9%A2%91%E8%A2%ABESPN%E8%BD%AC%E5%8F%91%23) `288.0K 🔥` `NEW`
1. [papi酱已退出papitube关联公司](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%B7%B2%E9%80%80%E5%87%BApapitube%E5%85%B3%E8%81%94%E5%85%AC%E5%8F%B8%23) `264.2K 🔥` `NEW`
1. [以色列防长称准备好独立打击伊朗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%98%B2%E9%95%BF%E7%A7%B0%E5%87%86%E5%A4%87%E5%A5%BD%E7%8B%AC%E7%AB%8B%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%23) `261.1K 🔥` `NEW`
1. [曝贾扬清已从英伟达离职](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B4%BE%E6%89%AC%E6%B8%85%E5%B7%B2%E4%BB%8E%E8%8B%B1%E4%BC%9F%E8%BE%BE%E7%A6%BB%E8%81%8C%23) `259.7K 🔥` `NEW`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `258.8K 🔥` `NEW`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `247.9K 🔥` `NEW`
1. [iPhone18ProMax跌落测试视频泄露](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E8%B7%8C%E8%90%BD%E6%B5%8B%E8%AF%95%E8%A7%86%E9%A2%91%E6%B3%84%E9%9C%B2%23) `241.1K 🔥` `NEW`
1. [林俊杰回忆13年前被蔡依林牵线田馥甄 (JJ Lin recalls being led by Jolin Tsai Tian Fuzhen 13 years ago)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%9B%9E%E5%BF%8613%E5%B9%B4%E5%89%8D%E8%A2%AB%E8%94%A1%E4%BE%9D%E6%9E%97%E7%89%B5%E7%BA%BF%E7%94%B0%E9%A6%A5%E7%94%84%23) `238.2K 🔥` `NEW`
1. [杨紫学位证上就是杨紫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AD%A6%E4%BD%8D%E8%AF%81%E4%B8%8A%E5%B0%B1%E6%98%AF%E6%9D%A8%E7%B4%AB%23) `238.3K 🔥`

Updated at 2026-06-30 13:51:36

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
