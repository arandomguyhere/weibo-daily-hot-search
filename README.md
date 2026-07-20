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

1. [西班牙领奖时阿根廷全队背过身 (Argentina's entire team turned their backs when Spain accepted the award)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A2%86%E5%A5%96%E6%97%B6%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%85%A8%E9%98%9F%E8%83%8C%E8%BF%87%E8%BA%AB%23) `5.6M 🔥` `NEW`
1. [中国开辟AI发展新路径](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%80%E8%BE%9FAI%E5%8F%91%E5%B1%95%E6%96%B0%E8%B7%AF%E5%BE%84%23) `1.7M 🔥` `NEW`
1. [大麦 抢不了票](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%20%E6%8A%A2%E4%B8%8D%E4%BA%86%E7%A5%A8%23) `1.5M 🔥` `NEW`
1. [西班牙球员回应阿根廷全队背身](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%90%83%E5%91%98%E5%9B%9E%E5%BA%94%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%85%A8%E9%98%9F%E8%83%8C%E8%BA%AB%23) `1.5M 🔥` `NEW`
1. [阿根廷决赛被指死守拖点球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B3%E8%B5%9B%E8%A2%AB%E6%8C%87%E6%AD%BB%E5%AE%88%E6%8B%96%E7%82%B9%E7%90%83%23) `1.5M 🔥` `NEW`
1. [认知水平高的人都有一个共性](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E7%9F%A5%E6%B0%B4%E5%B9%B3%E9%AB%98%E7%9A%84%E4%BA%BA%E9%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%85%B1%E6%80%A7%23) `1.3M 🔥` `NEW`
1. [千万不要在网上买低价饮料](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E4%B9%B0%E4%BD%8E%E4%BB%B7%E9%A5%AE%E6%96%99%23) `1.2M 🔥` `NEW`
1. [八仙 口碑爆了](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E5%8F%A3%E7%A2%91%E7%88%86%E4%BA%86%23) `923.1K 🔥` `NEW`
1. [开始依赖上AI了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E4%BE%9D%E8%B5%96%E4%B8%8AAI%E4%BA%86%23) `923.0K 🔥` `NEW`
1. [极端节食备考致少女闭经](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%AB%AF%E8%8A%82%E9%A3%9F%E5%A4%87%E8%80%83%E8%87%B4%E5%B0%91%E5%A5%B3%E9%97%AD%E7%BB%8F%23) `880.0K 🔥` `NEW`
1. [遗传眼病孩子问为什么要生我 (The child with genetic eye disease asked why he had to give birth to me)](https://s.weibo.com/weibo?q=%23%E9%81%97%E4%BC%A0%E7%9C%BC%E7%97%85%E5%AD%A9%E5%AD%90%E9%97%AE%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%9F%E6%88%91%23) `836.0K 🔥` `NEW`
1. [林俊杰七七挽手看世界杯决赛](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%83%E4%B8%83%E6%8C%BD%E6%89%8B%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `777.9K 🔥` `NEW`
1. [张凌赫 旺老艺人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E6%97%BA%E8%80%81%E8%89%BA%E4%BA%BA%23) `773.8K 🔥` `NEW`
1. [A股今天迎来大涨](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BB%8A%E5%A4%A9%E8%BF%8E%E6%9D%A5%E5%A4%A7%E6%B6%A8%23) `772.6K 🔥` `NEW`
1. [陈都灵蒋欣新剧演母女](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E8%92%8B%E6%AC%A3%E6%96%B0%E5%89%A7%E6%BC%94%E6%AF%8D%E5%A5%B3%23) `770.0K 🔥` `NEW`
1. [八仙 人设完全颠覆](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E4%BA%BA%E8%AE%BE%E5%AE%8C%E5%85%A8%E9%A2%A0%E8%A6%86%23) `764.9K 🔥` `NEW`
1. [22岁太渺小了](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%A4%AA%E6%B8%BA%E5%B0%8F%E4%BA%86%23) `761.5K 🔥` `NEW`
1. [暴雨过后上海市民划皮划艇上路](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E8%BF%87%E5%90%8E%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%B0%91%E5%88%92%E7%9A%AE%E5%88%92%E8%89%87%E4%B8%8A%E8%B7%AF%23) `757.2K 🔥` `NEW`
1. [半熟恋人5](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA5%23) `752.0K 🔥` `NEW`
1. [AI成了我的属性面板](https://s.weibo.com/weibo?q=%23AI%E6%88%90%E4%BA%86%E6%88%91%E7%9A%84%E5%B1%9E%E6%80%A7%E9%9D%A2%E6%9D%BF%23) `748.3K 🔥` `NEW`
1. [洞门也被樊振东控场了 (The cave door was also controlled by Fan Zhendong)](https://s.weibo.com/weibo?q=%23%E6%B4%9E%E9%97%A8%E4%B9%9F%E8%A2%AB%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%8E%A7%E5%9C%BA%E4%BA%86%23) `746.1K 🔥` `NEW`
1. [陈楚生冠军玄学](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E5%86%A0%E5%86%9B%E7%8E%84%E5%AD%A6%23) `742.4K 🔥` `NEW`
1. [A股今天稳了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BB%8A%E5%A4%A9%E7%A8%B3%E4%BA%86%23) `737.5K 🔥` `NEW`
1. [伦敦的雨未必有赵丽颖忧郁](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E7%9A%84%E9%9B%A8%E6%9C%AA%E5%BF%85%E6%9C%89%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%BF%A7%E9%83%81%23) `735.4K 🔥` `NEW`
1. [苏醒给薛之谦带ID没有](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E7%BB%99%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B8%A6ID%E6%B2%A1%E6%9C%89%23) `731.3K 🔥` `NEW`
1. [张凌赫手里的剧本打了马赛克](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%89%8B%E9%87%8C%E7%9A%84%E5%89%A7%E6%9C%AC%E6%89%93%E4%BA%86%E9%A9%AC%E8%B5%9B%E5%85%8B%23) `727.3K 🔥` `NEW`
1. [阿根廷队无法接受输掉决赛的事实](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E6%97%A0%E6%B3%95%E6%8E%A5%E5%8F%97%E8%BE%93%E6%8E%89%E5%86%B3%E8%B5%9B%E7%9A%84%E4%BA%8B%E5%AE%9E%23) `722.1K 🔥` `NEW`
1. [何猷君奚梦瑶观看世界杯决赛](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E8%A7%82%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `718.3K 🔥` `NEW`
1. [牙齿正畸的最佳时间](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BD%BF%E6%AD%A3%E7%95%B8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E9%97%B4%23) `715.0K 🔥` `NEW`
1. [詹姆斯 热火](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%20%E7%83%AD%E7%81%AB%23) `712.3K 🔥` `NEW`
1. [低精力人就这样每天歹毒的上班 (People with low energy go to work viciously every day like this)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E4%BA%BA%E5%B0%B1%E8%BF%99%E6%A0%B7%E6%AF%8F%E5%A4%A9%E6%AD%B9%E6%AF%92%E7%9A%84%E4%B8%8A%E7%8F%AD%23) `706.1K 🔥` `NEW`
1. [世界杯决赛现场的明星](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E7%8E%B0%E5%9C%BA%E7%9A%84%E6%98%8E%E6%98%9F%23) `691.0K 🔥` `NEW`
1. [广东17岁少年漂流上岸后溺亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C17%E5%B2%81%E5%B0%91%E5%B9%B4%E6%BC%82%E6%B5%81%E4%B8%8A%E5%B2%B8%E5%90%8E%E6%BA%BA%E4%BA%A1%23) `687.8K 🔥` `NEW`
1. [阿根廷主帅道歉](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E9%81%93%E6%AD%89%23) `685.2K 🔥` `NEW`
1. [恐怖游轮女主身材](https://s.weibo.com/weibo?q=%23%E6%81%90%E6%80%96%E6%B8%B8%E8%BD%AE%E5%A5%B3%E4%B8%BB%E8%BA%AB%E6%9D%90%23) `671.5K 🔥` `NEW`
1. [明川有知夏官宣杀青](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%B7%9D%E6%9C%89%E7%9F%A5%E5%A4%8F%E5%AE%98%E5%AE%A3%E6%9D%80%E9%9D%92%23) `663.4K 🔥` `NEW`
1. [王俊凯突击检查小情侣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%AA%81%E5%87%BB%E6%A3%80%E6%9F%A5%E5%B0%8F%E6%83%85%E4%BE%A3%23) `661.5K 🔥` `NEW`
1. [特朗普称美国必须再举办世界杯](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%9B%BD%E5%BF%85%E9%A1%BB%E5%86%8D%E4%B8%BE%E5%8A%9E%E4%B8%96%E7%95%8C%E6%9D%AF%23) `656.0K 🔥` `NEW`
1. [女明星的簪花造型](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9F%E7%9A%84%E7%B0%AA%E8%8A%B1%E9%80%A0%E5%9E%8B%23) `652.7K 🔥` `NEW`
1. [八仙 反转](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E5%8F%8D%E8%BD%AC%23) `645.7K 🔥` `NEW`
1. [工作后不能和父母住太久 (You can’t live with your parents for too long after working)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E4%B8%8D%E8%83%BD%E5%92%8C%E7%88%B6%E6%AF%8D%E4%BD%8F%E5%A4%AA%E4%B9%85%23) `640.7K 🔥` `NEW`
1. [OpenAI称Kimi开源是减速主义](https://s.weibo.com/weibo?q=%23OpenAI%E7%A7%B0Kimi%E5%BC%80%E6%BA%90%E6%98%AF%E5%87%8F%E9%80%9F%E4%B8%BB%E4%B9%89%23) `636.8K 🔥` `NEW`
1. [千金谢尔巴科娃订婚](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%87%91%E8%B0%A2%E5%B0%94%E5%B7%B4%E7%A7%91%E5%A8%83%E8%AE%A2%E5%A9%9A%23) `699.9K 🔥`
1. [西班牙vs阿根廷 (Spain vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `678.3K 🔥`
1. [现在的女装有种大家都不用上班的感觉](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%A5%B3%E8%A3%85%E6%9C%89%E7%A7%8D%E5%A4%A7%E5%AE%B6%E9%83%BD%E4%B8%8D%E7%94%A8%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%84%9F%E8%A7%89%23) `674.5K 🔥`
1. [西班牙夺冠含金量太高了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E5%90%AB%E9%87%91%E9%87%8F%E5%A4%AA%E9%AB%98%E4%BA%86%23) `666.5K 🔥`
1. [阿根廷 脏](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `2.2M 🔥` `-47%`
1. [姆巴佩金靴 (Mbappe golden boots)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%87%91%E9%9D%B4%23) `703.0K 🔥` `-92%`
1. [西班牙冠军 (spanish champion)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%A0%E5%86%9B%23) `695.9K 🔥` `-87%`
1. [西班牙阿根廷赛后打起来了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B5%9B%E5%90%8E%E6%89%93%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `649.3K 🔥` `-78%`

Updated at 2026-07-20 12:50:35

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
