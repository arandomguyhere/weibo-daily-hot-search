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

1. [爱情公寓官方换头像](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%AE%98%E6%96%B9%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `975.8K 🔥` `NEW`
1. [花开锦绣大结局](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%A4%A7%E7%BB%93%E5%B1%80%23) `393.7K 🔥` `NEW`
1. [包贝尔婚礼就在闹伴娘](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%A9%9A%E7%A4%BC%E5%B0%B1%E5%9C%A8%E9%97%B9%E4%BC%B4%E5%A8%98%23) `371.9K 🔥` `NEW`
1. [尼泊尔山洪冲毁村庄](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%86%B2%E6%AF%81%E6%9D%91%E5%BA%84%23) `369.8K 🔥` `NEW`
1. [西藏吉隆村民说对面山头都滑下来了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%9D%91%E6%B0%91%E8%AF%B4%E5%AF%B9%E9%9D%A2%E5%B1%B1%E5%A4%B4%E9%83%BD%E6%BB%91%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `363.8K 🔥` `NEW`
1. [在韩遇害女生男友已赴韩善后](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E7%94%B7%E5%8F%8B%E5%B7%B2%E8%B5%B4%E9%9F%A9%E5%96%84%E5%90%8E%23) `337.7K 🔥` `NEW`
1. [刘翔晒2004年雅典奥运会号码布](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E6%99%922004%E5%B9%B4%E9%9B%85%E5%85%B8%E5%A5%A5%E8%BF%90%E4%BC%9A%E5%8F%B7%E7%A0%81%E5%B8%83%23) `331.8K 🔥` `NEW`
1. [包贝尔内娱第一位许愿柳使用者](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%86%85%E5%A8%B1%E7%AC%AC%E4%B8%80%E4%BD%8D%E8%AE%B8%E6%84%BF%E6%9F%B3%E4%BD%BF%E7%94%A8%E8%80%85%23) `317.7K 🔥` `NEW`
1. [刷鞋是年轻人家务界的顶级噩梦](https://s.weibo.com/weibo?q=%23%E5%88%B7%E9%9E%8B%E6%98%AF%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%AE%B6%E5%8A%A1%E7%95%8C%E7%9A%84%E9%A1%B6%E7%BA%A7%E5%99%A9%E6%A2%A6%23) `289.7K 🔥` `NEW`
1. [夏天才更应该开空气净化器](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E6%89%8D%E6%9B%B4%E5%BA%94%E8%AF%A5%E5%BC%80%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8%23) `285.1K 🔥` `NEW`
1. [俄罗斯火灾致中国公民6死9失联](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%81%AB%E7%81%BE%E8%87%B4%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%916%E6%AD%BB9%E5%A4%B1%E8%81%94%23) `269.1K 🔥` `NEW`
1. [沈佳润被爸爸小沈阳惊成双眼皮](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%A2%AB%E7%88%B8%E7%88%B8%E5%B0%8F%E6%B2%88%E9%98%B3%E6%83%8A%E6%88%90%E5%8F%8C%E7%9C%BC%E7%9A%AE%23) `226.7K 🔥` `NEW`
1. [早春晴朗 选角](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E9%80%89%E8%A7%92%23) `218.6K 🔥` `NEW`
1. [尼泊尔泥石流](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `215.6K 🔥` `NEW`
1. [车企高管称现在不买L3就像当年不买5G手机](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%81%E9%AB%98%E7%AE%A1%E7%A7%B0%E7%8E%B0%E5%9C%A8%E4%B8%8D%E4%B9%B0L3%E5%B0%B1%E5%83%8F%E5%BD%93%E5%B9%B4%E4%B8%8D%E4%B9%B05G%E6%89%8B%E6%9C%BA%23) `213.6K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `212.2K 🔥` `NEW`
1. [西藏泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `13.2M 🔥` `+73%`
1. [万千气象瞰宁夏](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9E%B0%E5%AE%81%E5%A4%8F%23) `1.8M 🔥` `+38%`
1. [刘翔求助](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E6%B1%82%E5%8A%A9%23) `2.9M 🔥`
1. [欢子称为披哥损失百万](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E7%A7%B0%E4%B8%BA%E6%8A%AB%E5%93%A5%E6%8D%9F%E5%A4%B1%E7%99%BE%E4%B8%87%23) `782.7K 🔥`
1. [泥石流致西藏吉隆重大人员伤亡失联](https://s.weibo.com/weibo?q=%23%E6%B3%A5%E7%9F%B3%E6%B5%81%E8%87%B4%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%E5%A4%B1%E8%81%94%23) `648.7K 🔥`
1. [GANT全球品牌代言人宋威龙](https://s.weibo.com/weibo?q=%23GANT%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%AE%8B%E5%A8%81%E9%BE%99%23) `589.6K 🔥`
1. [范丞丞晒了现发团合照](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%99%92%E4%BA%86%E7%8E%B0%E5%8F%91%E5%9B%A2%E5%90%88%E7%85%A7%23) `463.9K 🔥`
1. [年轻人真的把多运动听进去了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E6%8A%8A%E5%A4%9A%E8%BF%90%E5%8A%A8%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `423.0K 🔥`
1. [宋雨琦肿成蜜蜂小狗](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%82%BF%E6%88%90%E8%9C%9C%E8%9C%82%E5%B0%8F%E7%8B%97%23) `371.0K 🔥`
1. [社保有多厉害可能超乎你的想象](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%E5%8F%AF%E8%83%BD%E8%B6%85%E4%B9%8E%E4%BD%A0%E7%9A%84%E6%83%B3%E8%B1%A1%23) `370.3K 🔥`
1. [史上最快离职之人](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%BF%AB%E7%A6%BB%E8%81%8C%E4%B9%8B%E4%BA%BA%23) `348.9K 🔥`
1. [郭晓东 张杰站哥随时待命](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%20%E5%BC%A0%E6%9D%B0%E7%AB%99%E5%93%A5%E9%9A%8F%E6%97%B6%E5%BE%85%E5%91%BD%23) `292.9K 🔥`
1. [在韩遇害女生本可邮寄毕业证回国](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E6%9C%AC%E5%8F%AF%E9%82%AE%E5%AF%84%E6%AF%95%E4%B8%9A%E8%AF%81%E5%9B%9E%E5%9B%BD%23) `372.2K 🔥` `-29%`
1. [郑昌圣 分尸](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%98%8C%E5%9C%A3%20%E5%88%86%E5%B0%B8%23) `371.3K 🔥` `-28%`
1. [吉隆口岸](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%23) `370.9K 🔥` `-29%`
1. [香港为何能吃到放心蔬菜](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%B8%BA%E4%BD%95%E8%83%BD%E5%90%83%E5%88%B0%E6%94%BE%E5%BF%83%E8%94%AC%E8%8F%9C%23) `369.4K 🔥` `-28%`
1. [网友小梅道歉信](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%B0%8F%E6%A2%85%E9%81%93%E6%AD%89%E4%BF%A1%23) `368.9K 🔥` `-26%`
1. [孙千第一集穿的假名牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%AC%AC%E4%B8%80%E9%9B%86%E7%A9%BF%E7%9A%84%E5%81%87%E5%90%8D%E7%89%8C%23) `368.7K 🔥` `-28%`
1. [鸿蒙成世界第三大手机操作系统](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%88%90%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%89%E5%A4%A7%E6%89%8B%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%23) `365.5K 🔥` `-25%`
1. [欢子起诉湖南卫视](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E8%B5%B7%E8%AF%89%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `357.9K 🔥` `-25%`
1. [虞书欣 丝巾当抹胸穿](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E6%8A%B9%E8%83%B8%E7%A9%BF%23) `352.0K 🔥` `-24%`
1. [包文婧生二胎产后抑郁](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E7%94%9F%E4%BA%8C%E8%83%8E%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%23) `348.5K 🔥` `-26%`
1. [张延张锦程离婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BB%B6%E5%BC%A0%E9%94%A6%E7%A8%8B%E7%A6%BB%E5%A9%9A%23) `348.1K 🔥` `-29%`
1. [央视曝光擦边手办乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%93%A6%E8%BE%B9%E6%89%8B%E5%8A%9E%E4%B9%B1%E8%B1%A1%23) `347.0K 🔥` `-34%`
1. [Gucci秋冬大片](https://s.weibo.com/weibo?q=%23Gucci%E7%A7%8B%E5%86%AC%E5%A4%A7%E7%89%87%23) `344.7K 🔥` `-29%`
1. [韩警方搜寻焚烧厂找遇害女生遗体](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E6%90%9C%E5%AF%BB%E7%84%9A%E7%83%A7%E5%8E%82%E6%89%BE%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%23) `338.5K 🔥` `-23%`
1. [黄景瑜被九寨沟净化了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E8%A2%AB%E4%B9%9D%E5%AF%A8%E6%B2%9F%E5%87%80%E5%8C%96%E4%BA%86%23) `331.5K 🔥` `-25%`
1. [小米澎程自在的空间](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E8%87%AA%E5%9C%A8%E7%9A%84%E7%A9%BA%E9%97%B4%23) `302.1K 🔥` `-32%`
1. [郑昌圣 人体解剖学讲师](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%98%8C%E5%9C%A3%20%E4%BA%BA%E4%BD%93%E8%A7%A3%E5%89%96%E5%AD%A6%E8%AE%B2%E5%B8%88%23) `293.9K 🔥` `-40%`
1. [国家反诈中心测出德芙声明是AI](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%8D%E8%AF%88%E4%B8%AD%E5%BF%83%E6%B5%8B%E5%87%BA%E5%BE%B7%E8%8A%99%E5%A3%B0%E6%98%8E%E6%98%AFAI%23) `293.0K 🔥` `-33%`
1. [网友劝包文婧离婚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8A%9D%E5%8C%85%E6%96%87%E5%A9%A7%E7%A6%BB%E5%A9%9A%23) `275.4K 🔥` `-37%`
1. [王橹杰蓝莓拟人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%93%9D%E8%8E%93%E6%8B%9F%E4%BA%BA%23) `262.8K 🔥` `-22%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `240.8K 🔥` `-45%`
1. [未定事件簿德芙合作取消](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%AE%9A%E4%BA%8B%E4%BB%B6%E7%B0%BF%E5%BE%B7%E8%8A%99%E5%90%88%E4%BD%9C%E5%8F%96%E6%B6%88%23) `238.4K 🔥` `-36%`
1. [欢乐颂3可以开拍了](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E4%B9%90%E9%A2%823%E5%8F%AF%E4%BB%A5%E5%BC%80%E6%8B%8D%E4%BA%86%23) `209.4K 🔥` `-60%`

Updated at 2026-08-26 19:00:16

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
