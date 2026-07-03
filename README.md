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

1. [C罗哭了 (Ronaldo cried)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%93%AD%E4%BA%86%23) `3.0M 🔥` `NEW`
1. [国乒男单美国大满贯全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `3.0M 🔥` `NEW`
1. [中国外贸的爆款密码](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%96%E8%B4%B8%E7%9A%84%E7%88%86%E6%AC%BE%E5%AF%86%E7%A0%81%23) `1.7M 🔥` `NEW`
1. [王楚钦1比3林德](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A61%E6%AF%943%E6%9E%97%E5%BE%B7%23) `1.4M 🔥` `NEW`
1. [男子称妈妈再婚不带娃被打活该](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E5%A6%88%E5%A6%88%E5%86%8D%E5%A9%9A%E4%B8%8D%E5%B8%A6%E5%A8%83%E8%A2%AB%E6%89%93%E6%B4%BB%E8%AF%A5%23) `957.7K 🔥` `NEW`
1. [张云龙孙千官宣新剧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%91%E9%BE%99%E5%AD%99%E5%8D%83%E5%AE%98%E5%AE%A3%E6%96%B0%E5%89%A7%23) `592.6K 🔥` `NEW`
1. [全球AI疯狂重创千元机市场](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83AI%E7%96%AF%E7%8B%82%E9%87%8D%E5%88%9B%E5%8D%83%E5%85%83%E6%9C%BA%E5%B8%82%E5%9C%BA%23) `591.9K 🔥` `NEW`
1. [爱奇艺二季度破亿角色前十](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E4%BA%8C%E5%AD%A3%E5%BA%A6%E7%A0%B4%E4%BA%BF%E8%A7%92%E8%89%B2%E5%89%8D%E5%8D%81%23) `589.0K 🔥` `NEW`
1. [FIFA官方证实克罗地亚绝平球无效](https://s.weibo.com/weibo?q=%23FIFA%E5%AE%98%E6%96%B9%E8%AF%81%E5%AE%9E%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E7%BB%9D%E5%B9%B3%E7%90%83%E6%97%A0%E6%95%88%23) `582.8K 🔥` `NEW`
1. [15万就能买一个人一年的朝九晚五](https://s.weibo.com/weibo?q=%2315%E4%B8%87%E5%B0%B1%E8%83%BD%E4%B9%B0%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%80%E5%B9%B4%E7%9A%84%E6%9C%9D%E4%B9%9D%E6%99%9A%E4%BA%94%23) `581.1K 🔥` `NEW`
1. [茉莉奶白已成功登记四叶星著作权 (Jasmine Milk White has successfully registered the copyright of Four-leaf Star)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%B7%B2%E6%88%90%E5%8A%9F%E7%99%BB%E8%AE%B0%E5%9B%9B%E5%8F%B6%E6%98%9F%E8%91%97%E4%BD%9C%E6%9D%83%23) `576.6K 🔥` `NEW`
1. [杭州震感](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%9C%87%E6%84%9F%23) `573.0K 🔥` `NEW`
1. [霉霉婚礼全员禁手机](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E5%85%A8%E5%91%98%E7%A6%81%E6%89%8B%E6%9C%BA%23) `495.0K 🔥` `NEW`
1. [足球内置芯片救了葡萄牙](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E5%86%85%E7%BD%AE%E8%8A%AF%E7%89%87%E6%95%91%E4%BA%86%E8%91%A1%E8%90%84%E7%89%99%23) `494.0K 🔥` `NEW`
1. [同花顺崩了](https://s.weibo.com/weibo?q=%23%E5%90%8C%E8%8A%B1%E9%A1%BA%E5%B4%A9%E4%BA%86%23) `479.5K 🔥` `NEW`
1. [琼瑶阿姨曾主动邀请杨紫试戏还珠格格](https://s.weibo.com/weibo?q=%23%E7%90%BC%E7%91%B6%E9%98%BF%E5%A7%A8%E6%9B%BE%E4%B8%BB%E5%8A%A8%E9%82%80%E8%AF%B7%E6%9D%A8%E7%B4%AB%E8%AF%95%E6%88%8F%E8%BF%98%E7%8F%A0%E6%A0%BC%E6%A0%BC%23) `447.1K 🔥` `NEW`
1. [C罗回应将在世界杯后退出国家队](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%9B%9E%E5%BA%94%E5%B0%86%E5%9C%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E9%80%80%E5%87%BA%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `444.5K 🔥` `NEW`
1. [霉霉婚礼宾客名单](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E5%AE%BE%E5%AE%A2%E5%90%8D%E5%8D%95%23) `442.5K 🔥` `NEW`
1. [曾志伟招揽TVB离巢演员](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%BF%97%E4%BC%9F%E6%8B%9B%E6%8F%BDTVB%E7%A6%BB%E5%B7%A2%E6%BC%94%E5%91%98%23) `439.3K 🔥` `NEW`
1. [法国晕倒女子超市里死抱空调扇不撒手](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%99%95%E5%80%92%E5%A5%B3%E5%AD%90%E8%B6%85%E5%B8%82%E9%87%8C%E6%AD%BB%E6%8A%B1%E7%A9%BA%E8%B0%83%E6%89%87%E4%B8%8D%E6%92%92%E6%89%8B%23) `438.4K 🔥` `NEW`
1. [内蒙古婚内强奸案被告人取保被拒 (Defendant in Inner Mongolia marital rape case denied bail)](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E8%A2%AB%E5%91%8A%E4%BA%BA%E5%8F%96%E4%BF%9D%E8%A2%AB%E6%8B%92%23) `434.5K 🔥` `NEW`
1. [陈龙儿子拿了19个冠军](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%BE%99%E5%84%BF%E5%AD%90%E6%8B%BF%E4%BA%8619%E4%B8%AA%E5%86%A0%E5%86%9B%23) `433.5K 🔥` `NEW`
1. [狩谎](https://s.weibo.com/weibo?q=%23%E7%8B%A9%E8%B0%8E%23) `431.0K 🔥` `NEW`
1. [MG教科书式回应抄袭](https://s.weibo.com/weibo?q=%23MG%E6%95%99%E7%A7%91%E4%B9%A6%E5%BC%8F%E5%9B%9E%E5%BA%94%E6%8A%84%E8%A2%AD%23) `428.9K 🔥` `NEW`
1. [女子花6万装爬楼机给全楼用遭抵制](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B16%E4%B8%87%E8%A3%85%E7%88%AC%E6%A5%BC%E6%9C%BA%E7%BB%99%E5%85%A8%E6%A5%BC%E7%94%A8%E9%81%AD%E6%8A%B5%E5%88%B6%23) `427.5K 🔥` `NEW`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `424.3K 🔥` `NEW`
1. [C罗siu一半被吹了](https://s.weibo.com/weibo?q=%23C%E7%BD%97siu%E4%B8%80%E5%8D%8A%E8%A2%AB%E5%90%B9%E4%BA%86%23) `423.1K 🔥` `NEW`
1. [央视解说告别莫德里奇这段听哭](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%A7%A3%E8%AF%B4%E5%91%8A%E5%88%AB%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E8%BF%99%E6%AE%B5%E5%90%AC%E5%93%AD%23) `418.5K 🔥` `NEW`
1. [林诗栋0比3A勒布伦](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B0%E6%AF%943A%E5%8B%92%E5%B8%83%E4%BC%A6%23) `417.0K 🔥` `NEW`
1. [C罗被换下不高兴](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%A2%AB%E6%8D%A2%E4%B8%8B%E4%B8%8D%E9%AB%98%E5%85%B4%23) `414.5K 🔥` `NEW`
1. [瑞士2比0阿尔及利亚 (Switzerland 2-0 Algeria)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB2%E6%AF%940%E9%98%BF%E5%B0%94%E5%8F%8A%E5%88%A9%E4%BA%9A%23) `410.8K 🔥` `NEW`
1. [LV花卉图案商标类目含马桶刷](https://s.weibo.com/weibo?q=%23LV%E8%8A%B1%E5%8D%89%E5%9B%BE%E6%A1%88%E5%95%86%E6%A0%87%E7%B1%BB%E7%9B%AE%E5%90%AB%E9%A9%AC%E6%A1%B6%E5%88%B7%23) `405.6K 🔥` `NEW`
1. [林大竣 再也找不到比你善良的小孩了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E7%AB%A3%20%E5%86%8D%E4%B9%9F%E6%89%BE%E4%B8%8D%E5%88%B0%E6%AF%94%E4%BD%A0%E5%96%84%E8%89%AF%E7%9A%84%E5%B0%8F%E5%AD%A9%E4%BA%86%23) `403.4K 🔥` `NEW`
1. [林德回应胜王楚钦](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BE%B7%E5%9B%9E%E5%BA%94%E8%83%9C%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `400.4K 🔥` `NEW`
1. [王皓男单场外缺席](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E7%94%B7%E5%8D%95%E5%9C%BA%E5%A4%96%E7%BC%BA%E5%B8%AD%23) `399.5K 🔥` `NEW`
1. [杨洋公式照 黄金比例脸](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%85%AC%E5%BC%8F%E7%85%A7%20%E9%BB%84%E9%87%91%E6%AF%94%E4%BE%8B%E8%84%B8%23) `396.6K 🔥` `NEW`
1. [wtt](https://s.weibo.com/weibo?q=%23wtt%23) `394.3K 🔥` `NEW`
1. [半导体暴跌信仰崩塌](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9A%B4%E8%B7%8C%E4%BF%A1%E4%BB%B0%E5%B4%A9%E5%A1%8C%23) `393.2K 🔥` `NEW`
1. [恋综何书桓刘亦菲互相挂脸](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%BB%BC%E4%BD%95%E4%B9%A6%E6%A1%93%E5%88%98%E4%BA%A6%E8%8F%B2%E4%BA%92%E7%9B%B8%E6%8C%82%E8%84%B8%23) `390.0K 🔥` `NEW`
1. [好剧本越来越少的原因](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%89%A7%E6%9C%AC%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `388.9K 🔥` `NEW`
1. [C罗魔笛这一幕看哭了 (I cried watching this scene with Ronaldo's Magic Flute)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%AD%94%E7%AC%9B%E8%BF%99%E4%B8%80%E5%B9%95%E7%9C%8B%E5%93%AD%E4%BA%86%23) `386.2K 🔥` `NEW`
1. [雀骨](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%23) `383.7K 🔥` `NEW`
1. [高质量发展中国行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `382.0K 🔥` `NEW`
1. [雀骨OST阵容](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8OST%E9%98%B5%E5%AE%B9%23) `378.7K 🔥` `NEW`
1. [时代少年团为一瓶冰红茶一秒变身](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%BA%E4%B8%80%E7%93%B6%E5%86%B0%E7%BA%A2%E8%8C%B6%E4%B8%80%E7%A7%92%E5%8F%98%E8%BA%AB%23) `1.6M 🔥` `+232%`
1. [经脉受损心气散了](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E8%84%89%E5%8F%97%E6%8D%9F%E5%BF%83%E6%B0%94%E6%95%A3%E4%BA%86%23) `573.3K 🔥`
1. [微博访客记录](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95%23) `447.0K 🔥`
1. [克罗地亚三粒进球被吹越位](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E4%B8%89%E7%B2%92%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%E8%B6%8A%E4%BD%8D%23) `420.3K 🔥`
1. [黄子韬留在海关的颜值回来了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%95%99%E5%9C%A8%E6%B5%B7%E5%85%B3%E7%9A%84%E9%A2%9C%E5%80%BC%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `406.5K 🔥`
1. [网传白鹿出演李清照](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%99%BD%E9%B9%BF%E5%87%BA%E6%BC%94%E6%9D%8E%E6%B8%85%E7%85%A7%23) `627.6K 🔥` `-55%`
1. [华为乾崑智驾ADS5奕境全网实测 (Huawei Qiankun Zhijia ADS5 Yijing full network test)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BEADS5%E5%A5%95%E5%A2%83%E5%85%A8%E7%BD%91%E5%AE%9E%E6%B5%8B%23) `594.0K 🔥` `-51%`
1. [葡萄牙vs克罗地亚 (Portugal vs Croatia)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%23) `408.8K 🔥` `-98%`

Updated at 2026-07-03 13:07:19

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
