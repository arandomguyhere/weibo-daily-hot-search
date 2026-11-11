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

1. [林生斌时隔5年更新社交平台](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%94%9F%E6%96%8C%E6%97%B6%E9%9A%945%E5%B9%B4%E6%9B%B4%E6%96%B0%E7%A4%BE%E4%BA%A4%E5%B9%B3%E5%8F%B0%23) `1.5M 🔥` `NEW`
1. [司美格鲁肽副作用](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%89%AF%E4%BD%9C%E7%94%A8%23) `916.9K 🔥` `NEW`
1. [一人一句致敬人民空军](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E4%B8%80%E5%8F%A5%E8%87%B4%E6%95%AC%E4%BA%BA%E6%B0%91%E7%A9%BA%E5%86%9B%23) `709.0K 🔥` `NEW`
1. [京东11.11最后1天巅峰直降5折起](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C11.11%E6%9C%80%E5%90%8E1%E5%A4%A9%E5%B7%85%E5%B3%B0%E7%9B%B4%E9%99%8D5%E6%8A%98%E8%B5%B7%23) `636.9K 🔥` `NEW`
1. [AJ预测S16决赛GEN夺冠](https://s.weibo.com/weibo?q=%23AJ%E9%A2%84%E6%B5%8BS16%E5%86%B3%E8%B5%9BGEN%E5%A4%BA%E5%86%A0%23) `381.3K 🔥` `NEW`
1. [S16冠军](https://s.weibo.com/weibo?q=%23S16%E5%86%A0%E5%86%9B%23) `371.7K 🔥` `NEW`
1. [詹姆斯化解布朗无视塔图姆打招呼](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8C%96%E8%A7%A3%E5%B8%83%E6%9C%97%E6%97%A0%E8%A7%86%E5%A1%94%E5%9B%BE%E5%A7%86%E6%89%93%E6%8B%9B%E5%91%BC%23) `364.1K 🔥` `NEW`
1. [心动礼遇季](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%A4%BC%E9%81%87%E5%AD%A3%23) `363.3K 🔥` `NEW`
1. [女孩在拼豆店干坐离开前留纸条道歉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9C%A8%E6%8B%BC%E8%B1%86%E5%BA%97%E5%B9%B2%E5%9D%90%E7%A6%BB%E5%BC%80%E5%89%8D%E7%95%99%E7%BA%B8%E6%9D%A1%E9%81%93%E6%AD%89%23) `361.0K 🔥` `NEW`
1. [林生斌名下关联13家公司](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%94%9F%E6%96%8C%E5%90%8D%E4%B8%8B%E5%85%B3%E8%81%9413%E5%AE%B6%E5%85%AC%E5%8F%B8%23) `360.5K 🔥` `NEW`
1. [音乐缘计划3选歌名单](https://s.weibo.com/weibo?q=%23%E9%9F%B3%E4%B9%90%E7%BC%98%E8%AE%A1%E5%88%923%E9%80%89%E6%AD%8C%E5%90%8D%E5%8D%95%23) `356.5K 🔥` `NEW`
1. [泰版步步惊心拆了八对cp](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E7%89%88%E6%AD%A5%E6%AD%A5%E6%83%8A%E5%BF%83%E6%8B%86%E4%BA%86%E5%85%AB%E5%AF%B9cp%23) `352.4K 🔥` `NEW`
1. [张萌要给许飞送手机](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%A6%81%E7%BB%99%E8%AE%B8%E9%A3%9E%E9%80%81%E6%89%8B%E6%9C%BA%23) `349.4K 🔥` `NEW`
1. [林生斌再婚](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%94%9F%E6%96%8C%E5%86%8D%E5%A9%9A%23) `347.8K 🔥` `NEW`
1. [杨超越居然这么适合大光明](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E9%80%82%E5%90%88%E5%A4%A7%E5%85%89%E6%98%8E%23) `344.1K 🔥` `NEW`
1. [毛林林没整容的原因](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%9E%97%E6%9E%97%E6%B2%A1%E6%95%B4%E5%AE%B9%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `339.9K 🔥` `NEW`
1. [别人都是紧身裤就厉娜是阔腿裤](https://s.weibo.com/weibo?q=%23%E5%88%AB%E4%BA%BA%E9%83%BD%E6%98%AF%E7%B4%A7%E8%BA%AB%E8%A3%A4%E5%B0%B1%E5%8E%89%E5%A8%9C%E6%98%AF%E9%98%94%E8%85%BF%E8%A3%A4%23) `338.2K 🔥` `NEW`
1. [张颂文张雪迎 父女感](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E5%BC%A0%E9%9B%AA%E8%BF%8E%20%E7%88%B6%E5%A5%B3%E6%84%9F%23) `332.6K 🔥` `NEW`
1. [比亚迪汽车发布声明](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%B1%BD%E8%BD%A6%E5%8F%91%E5%B8%83%E5%A3%B0%E6%98%8E%23) `332.3K 🔥` `NEW`
1. [科切拉阵容](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%88%87%E6%8B%89%E9%98%B5%E5%AE%B9%23) `332.1K 🔥` `NEW`
1. [黄景瑜只有和王雨馨那段婚姻](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%8F%AA%E6%9C%89%E5%92%8C%E7%8E%8B%E9%9B%A8%E9%A6%A8%E9%82%A3%E6%AE%B5%E5%A9%9A%E5%A7%BB%23) `331.5K 🔥` `NEW`
1. [地震瞬间3只小猫惊成6个灯泡](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%9C%87%E7%9E%AC%E9%97%B43%E5%8F%AA%E5%B0%8F%E7%8C%AB%E6%83%8A%E6%88%906%E4%B8%AA%E7%81%AF%E6%B3%A1%23) `331.2K 🔥` `NEW`
1. [杨超越董思成五连吻路透](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E4%BA%94%E8%BF%9E%E5%90%BB%E8%B7%AF%E9%80%8F%23) `330.8K 🔥` `NEW`
1. [九尾花海口令红包](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E8%8A%B1%E6%B5%B7%E5%8F%A3%E4%BB%A4%E7%BA%A2%E5%8C%85%23) `330.3K 🔥` `NEW`
1. [贫穷花掉了我好多钱](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E7%A9%B7%E8%8A%B1%E6%8E%89%E4%BA%86%E6%88%91%E5%A5%BD%E5%A4%9A%E9%92%B1%23) `330.1K 🔥` `NEW`
1. [谷雨张颂文张雪迎床戏](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E9%9B%A8%E5%BC%A0%E9%A2%82%E6%96%87%E5%BC%A0%E9%9B%AA%E8%BF%8E%E5%BA%8A%E6%88%8F%23) `318.5K 🔥` `NEW`
1. [井迪穿那么少都没井胧看起来擦边](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%BF%AA%E7%A9%BF%E9%82%A3%E4%B9%88%E5%B0%91%E9%83%BD%E6%B2%A1%E4%BA%95%E8%83%A7%E7%9C%8B%E8%B5%B7%E6%9D%A5%E6%93%A6%E8%BE%B9%23) `249.0K 🔥` `NEW`
1. [有人婚外情用影视剧弹幕聊天](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E5%A9%9A%E5%A4%96%E6%83%85%E7%94%A8%E5%BD%B1%E8%A7%86%E5%89%A7%E5%BC%B9%E5%B9%95%E8%81%8A%E5%A4%A9%23) `231.7K 🔥` `NEW`
1. [榜一大哥吃泡面也要做大哥](https://s.weibo.com/weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E5%90%83%E6%B3%A1%E9%9D%A2%E4%B9%9F%E8%A6%81%E5%81%9A%E5%A4%A7%E5%93%A5%23) `177.3K 🔥` `NEW`
1. [网传林生斌儿女入读悉尼私校](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9E%97%E7%94%9F%E6%96%8C%E5%84%BF%E5%A5%B3%E5%85%A5%E8%AF%BB%E6%82%89%E5%B0%BC%E7%A7%81%E6%A0%A1%23) `166.7K 🔥` `NEW`
1. [张雪冠军车拍卖款不再捐给韩红基金会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%86%A0%E5%86%9B%E8%BD%A6%E6%8B%8D%E5%8D%96%E6%AC%BE%E4%B8%8D%E5%86%8D%E6%8D%90%E7%BB%99%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%23) `157.4K 🔥` `NEW`
1. [男孩因名叫嘉豪被取笑想改名](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%9B%A0%E5%90%8D%E5%8F%AB%E5%98%89%E8%B1%AA%E8%A2%AB%E5%8F%96%E7%AC%91%E6%83%B3%E6%94%B9%E5%90%8D%23) `157.3K 🔥` `NEW`
1. [许飞全场借不到一根充电线](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%85%A8%E5%9C%BA%E5%80%9F%E4%B8%8D%E5%88%B0%E4%B8%80%E6%A0%B9%E5%85%85%E7%94%B5%E7%BA%BF%23) `154.1K 🔥` `NEW`
1. [孙千后背镂空黑玫瑰旗袍](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%90%8E%E8%83%8C%E9%95%82%E7%A9%BA%E9%BB%91%E7%8E%AB%E7%91%B0%E6%97%97%E8%A2%8D%23) `151.4K 🔥` `NEW`
1. [李昀锐删了骂孟子义的留言](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%88%A0%E4%BA%86%E9%AA%82%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9A%84%E7%95%99%E8%A8%80%23) `147.8K 🔥` `NEW`
1. [告别信](https://s.weibo.com/weibo?q=%23%E5%91%8A%E5%88%AB%E4%BF%A1%23) `144.9K 🔥` `NEW`
1. [BLG进决赛引来半个娱乐圈](https://s.weibo.com/weibo?q=%23BLG%E8%BF%9B%E5%86%B3%E8%B5%9B%E5%BC%95%E6%9D%A5%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%23) `143.3K 🔥` `NEW`
1. [分手后朋友全判给胡杏儿了](https://s.weibo.com/weibo?q=%23%E5%88%86%E6%89%8B%E5%90%8E%E6%9C%8B%E5%8F%8B%E5%85%A8%E5%88%A4%E7%BB%99%E8%83%A1%E6%9D%8F%E5%84%BF%E4%BA%86%23) `143.2K 🔥` `NEW`
1. [出轨猝死 法律不替道德买单](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E7%8C%9D%E6%AD%BB%20%E6%B3%95%E5%BE%8B%E4%B8%8D%E6%9B%BF%E9%81%93%E5%BE%B7%E4%B9%B0%E5%8D%95%23) `142.7K 🔥` `NEW`
1. [告别信开机仪式](https://s.weibo.com/weibo?q=%23%E5%91%8A%E5%88%AB%E4%BF%A1%E5%BC%80%E6%9C%BA%E4%BB%AA%E5%BC%8F%23) `142.2K 🔥` `NEW`
1. [马天宇给外甥女取了张萌的英文名](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%BB%99%E5%A4%96%E7%94%A5%E5%A5%B3%E5%8F%96%E4%BA%86%E5%BC%A0%E8%90%8C%E7%9A%84%E8%8B%B1%E6%96%87%E5%90%8D%23) `137.8K 🔥` `NEW`
1. [梁家辉上半年拿金像的时候哭惨了](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E4%B8%8A%E5%8D%8A%E5%B9%B4%E6%8B%BF%E9%87%91%E5%83%8F%E7%9A%84%E6%97%B6%E5%80%99%E5%93%AD%E6%83%A8%E4%BA%86%23) `135.4K 🔥` `NEW`
1. [王皓恭喜高叶获金鸡影后](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E6%81%AD%E5%96%9C%E9%AB%98%E5%8F%B6%E8%8E%B7%E9%87%91%E9%B8%A1%E5%BD%B1%E5%90%8E%23) `135.3K 🔥` `NEW`
1. [Smoggy微博ID与认证改为BLG选手](https://s.weibo.com/weibo?q=%23Smoggy%E5%BE%AE%E5%8D%9AID%E4%B8%8E%E8%AE%A4%E8%AF%81%E6%94%B9%E4%B8%BABLG%E9%80%89%E6%89%8B%23) `131.1K 🔥` `NEW`
1. [开车真不是一件轻松的事情](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E7%9C%9F%E4%B8%8D%E6%98%AF%E4%B8%80%E4%BB%B6%E8%BD%BB%E6%9D%BE%E7%9A%84%E4%BA%8B%E6%83%85%23) `129.6K 🔥` `NEW`
1. [A股站在新的光里](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AB%99%E5%9C%A8%E6%96%B0%E7%9A%84%E5%85%89%E9%87%8C%23) `126.3K 🔥` `NEW`
1. [文吉儿的资源](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%9A%84%E8%B5%84%E6%BA%90%23) `120.8K 🔥` `NEW`
1. [林生斌亡妻共同创办公司仍在其名下](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%94%9F%E6%96%8C%E4%BA%A1%E5%A6%BB%E5%85%B1%E5%90%8C%E5%88%9B%E5%8A%9E%E5%85%AC%E5%8F%B8%E4%BB%8D%E5%9C%A8%E5%85%B6%E5%90%8D%E4%B8%8B%23) `117.6K 🔥` `NEW`
1. [Z字头列车不念直考虑过百姓感受吗](https://s.weibo.com/weibo?q=%23Z%E5%AD%97%E5%A4%B4%E5%88%97%E8%BD%A6%E4%B8%8D%E5%BF%B5%E7%9B%B4%E8%80%83%E8%99%91%E8%BF%87%E7%99%BE%E5%A7%93%E6%84%9F%E5%8F%97%E5%90%97%23) `112.9K 🔥` `NEW`
1. [hoya关注T1和Faker](https://s.weibo.com/weibo?q=%23hoya%E5%85%B3%E6%B3%A8T1%E5%92%8CFaker%23) `108.3K 🔥` `NEW`
1. [收好这份寄递安全清单](https://s.weibo.com/weibo?q=%23%E6%94%B6%E5%A5%BD%E8%BF%99%E4%BB%BD%E5%AF%84%E9%80%92%E5%AE%89%E5%85%A8%E6%B8%85%E5%8D%95%23) `108.1K 🔥` `NEW`
1. [Ming 青稚](https://s.weibo.com/weibo?q=%23Ming%20%E9%9D%92%E7%A8%9A%23) `123.0K 🔥` `-64%`

Updated at 2026-11-11 15:59:08

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
