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

1. [台湾艺人疑破坏日本文物被捕](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%89%BA%E4%BA%BA%E7%96%91%E7%A0%B4%E5%9D%8F%E6%97%A5%E6%9C%AC%E6%96%87%E7%89%A9%E8%A2%AB%E6%8D%95%23) `302.2K 🔥` `NEW`
1. [杨幂vlog里有刘耀文](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82vlog%E9%87%8C%E6%9C%89%E5%88%98%E8%80%80%E6%96%87%23) `293.7K 🔥` `NEW`
1. [你以为的低精力和真正的低精力](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E7%9A%84%E4%BD%8E%E7%B2%BE%E5%8A%9B%E5%92%8C%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%BD%8E%E7%B2%BE%E5%8A%9B%23) `217.2K 🔥` `NEW`
1. [李现章若楠也在感叹汪苏泷的体力](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%AB%A0%E8%8B%A5%E6%A5%A0%E4%B9%9F%E5%9C%A8%E6%84%9F%E5%8F%B9%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%9A%84%E4%BD%93%E5%8A%9B%23) `160.2K 🔥` `NEW`
1. [AG对战WB](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98WB%23) `150.1K 🔥` `NEW`
1. [对栀子花的认知还是太少了](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%A0%80%E5%AD%90%E8%8A%B1%E7%9A%84%E8%AE%A4%E7%9F%A5%E8%BF%98%E6%98%AF%E5%A4%AA%E5%B0%91%E4%BA%86%23) `148.0K 🔥` `NEW`
1. [去韩国唯一学会的东西](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%9F%A9%E5%9B%BD%E5%94%AF%E4%B8%80%E5%AD%A6%E4%BC%9A%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `136.2K 🔥` `NEW`
1. [HLE双杀T1](https://s.weibo.com/weibo?q=%23HLE%E5%8F%8C%E6%9D%80T1%23) `133.9K 🔥` `NEW`
1. [美加贸易战打出加拿大民族主体性](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E8%B4%B8%E6%98%93%E6%88%98%E6%89%93%E5%87%BA%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%B0%91%E6%97%8F%E4%B8%BB%E4%BD%93%E6%80%A7%23) `126.4K 🔥` `NEW`
1. [天工机器人400米决赛38秒15夺冠](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%B7%A5%E6%9C%BA%E5%99%A8%E4%BA%BA400%E7%B1%B3%E5%86%B3%E8%B5%9B38%E7%A7%9215%E5%A4%BA%E5%86%A0%23) `126.3K 🔥` `NEW`
1. [村民签字赚两千补贴换来千万巨债](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E7%AD%BE%E5%AD%97%E8%B5%9A%E4%B8%A4%E5%8D%83%E8%A1%A5%E8%B4%B4%E6%8D%A2%E6%9D%A5%E5%8D%83%E4%B8%87%E5%B7%A8%E5%80%BA%23) `126.3K 🔥` `NEW`
1. [新华社战地记者唐师曾因病离世](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E6%88%98%E5%9C%B0%E8%AE%B0%E8%80%85%E5%94%90%E5%B8%88%E6%9B%BE%E5%9B%A0%E7%97%85%E7%A6%BB%E4%B8%96%23) `1.1M 🔥` `+39%`
1. [第二届世界人形机器人运动会](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E5%B1%8A%E4%B8%96%E7%95%8C%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `442.9K 🔥` `+53%`
1. [董宇辉走后东方甄选扭亏为盈赚5.44亿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%B5%B0%E5%90%8E%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%89%AD%E4%BA%8F%E4%B8%BA%E7%9B%88%E8%B5%9A5.44%E4%BA%BF%23) `441.4K 🔥` `+28%`
1. [3姐弟太饿报警求助民警上门做饭](https://s.weibo.com/weibo?q=%233%E5%A7%90%E5%BC%9F%E5%A4%AA%E9%A5%BF%E6%8A%A5%E8%AD%A6%E6%B1%82%E5%8A%A9%E6%B0%91%E8%AD%A6%E4%B8%8A%E9%97%A8%E5%81%9A%E9%A5%AD%23) `339.9K 🔥` `+99%`
1. [街边烤鸭炉被人打开让狗啃](https://s.weibo.com/weibo?q=%23%E8%A1%97%E8%BE%B9%E7%83%A4%E9%B8%AD%E7%82%89%E8%A2%AB%E4%BA%BA%E6%89%93%E5%BC%80%E8%AE%A9%E7%8B%97%E5%95%83%23) `295.8K 🔥` `+73%`
1. [小米官宣新一代玄戒芯片技术发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AE%98%E5%AE%A3%E6%96%B0%E4%B8%80%E4%BB%A3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E6%8A%80%E6%9C%AF%E5%8F%91%E5%B8%83%E4%BC%9A%23) `294.3K 🔥` `+24%`
1. [终于懂为什么大家对容貌有执念了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A7%E5%AE%B6%E5%AF%B9%E5%AE%B9%E8%B2%8C%E6%9C%89%E6%89%A7%E5%BF%B5%E4%BA%86%23) `287.3K 🔥` `+60%`
1. [金价反弹重要原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%8D%E5%BC%B9%E9%87%8D%E8%A6%81%E5%8E%9F%E5%9B%A0%23) `221.0K 🔥` `+29%`
1. [处暑撞上出伏这几件事记得做](https://s.weibo.com/weibo?q=%23%E5%A4%84%E6%9A%91%E6%92%9E%E4%B8%8A%E5%87%BA%E4%BC%8F%E8%BF%99%E5%87%A0%E4%BB%B6%E4%BA%8B%E8%AE%B0%E5%BE%97%E5%81%9A%23) `625.5K 🔥`
1. [芒果新人撞脸王一博 (Mango newcomer Wang Yibo meets Wang Yibo)](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `604.0K 🔥`
1. [最近是全体教师最脆弱的时候](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E6%98%AF%E5%85%A8%E4%BD%93%E6%95%99%E5%B8%88%E6%9C%80%E8%84%86%E5%BC%B1%E7%9A%84%E6%97%B6%E5%80%99%23) `536.9K 🔥`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `463.4K 🔥`
1. [曹骏二公分组](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%23) `313.0K 🔥`
1. [国家卫健委通报7位专家被处理](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8D%AB%E5%81%A5%E5%A7%94%E9%80%9A%E6%8A%A57%E4%BD%8D%E4%B8%93%E5%AE%B6%E8%A2%AB%E5%A4%84%E7%90%86%23) `303.1K 🔥`
1. [王传君 乔任梁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E4%B9%94%E4%BB%BB%E6%A2%81%23) `302.5K 🔥`
1. [一张成人票困住独自乘车的孩子](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BC%A0%E6%88%90%E4%BA%BA%E7%A5%A8%E5%9B%B0%E4%BD%8F%E7%8B%AC%E8%87%AA%E4%B9%98%E8%BD%A6%E7%9A%84%E5%AD%A9%E5%AD%90%23) `301.9K 🔥`
1. [甜馨否认恋爱](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A8%E5%90%A6%E8%AE%A4%E6%81%8B%E7%88%B1%23) `301.4K 🔥`
1. [诬告强奸是否真零成本](https://s.weibo.com/weibo?q=%23%E8%AF%AC%E5%91%8A%E5%BC%BA%E5%A5%B8%E6%98%AF%E5%90%A6%E7%9C%9F%E9%9B%B6%E6%88%90%E6%9C%AC%23) `300.1K 🔥`
1. [黄灿灿让张月买单被经纪人骂](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%AE%A9%E5%BC%A0%E6%9C%88%E4%B9%B0%E5%8D%95%E8%A2%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%AA%82%23) `299.6K 🔥`
1. [张远维权五代彩带](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E7%BB%B4%E6%9D%83%E4%BA%94%E4%BB%A3%E5%BD%A9%E5%B8%A6%23) `299.4K 🔥`
1. [卫生巾居然能卷成这样](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%B1%85%E7%84%B6%E8%83%BD%E5%8D%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `294.3K 🔥`
1. [人类400米纪录保持者祝贺闪电破纪录](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB400%E7%B1%B3%E7%BA%AA%E5%BD%95%E4%BF%9D%E6%8C%81%E8%80%85%E7%A5%9D%E8%B4%BA%E9%97%AA%E7%94%B5%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `284.2K 🔥`
1. [丁禹兮孟子义拍了电梯抱](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8B%8D%E4%BA%86%E7%94%B5%E6%A2%AF%E6%8A%B1%23) `281.5K 🔥`
1. [找到梁博了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E6%A2%81%E5%8D%9A%E4%BA%86%23) `253.0K 🔥`
1. [成毅狩谎片场压腿一字马](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%8B%A9%E8%B0%8E%E7%89%87%E5%9C%BA%E5%8E%8B%E8%85%BF%E4%B8%80%E5%AD%97%E9%A9%AC%23) `229.3K 🔥`
1. [严浩翔张峻豪实力难分高低](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%BC%A0%E5%B3%BB%E8%B1%AA%E5%AE%9E%E5%8A%9B%E9%9A%BE%E5%88%86%E9%AB%98%E4%BD%8E%23) `177.4K 🔥`
1. [张智霖儿子担任演唱会吉他手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E5%84%BF%E5%AD%90%E6%8B%85%E4%BB%BB%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%89%E4%BB%96%E6%89%8B%23) `150.8K 🔥`
1. [ACT对战FPX.ZQ](https://s.weibo.com/weibo?q=%23ACT%E5%AF%B9%E6%88%98FPX.ZQ%23) `149.7K 🔥`
1. [魏笑直播](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%AC%91%E7%9B%B4%E6%92%AD%23) `140.0K 🔥`
1. [张元英庄园公主](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%BA%84%E5%9B%AD%E5%85%AC%E4%B8%BB%23) `134.6K 🔥`
1. [公务员也是养家糊口的职业](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E4%B9%9F%E6%98%AF%E5%85%BB%E5%AE%B6%E7%B3%8A%E5%8F%A3%E7%9A%84%E8%81%8C%E4%B8%9A%23) `134.2K 🔥`
1. [龚俊张晚意马思纯李沁张雅琪自拍](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%BC%A0%E6%99%9A%E6%84%8F%E9%A9%AC%E6%80%9D%E7%BA%AF%E6%9D%8E%E6%B2%81%E5%BC%A0%E9%9B%85%E7%90%AA%E8%87%AA%E6%8B%8D%23) `128.1K 🔥`
1. [女子溺亡十几个摄像头拍不到肇事船](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%BA%BA%E4%BA%A1%E5%8D%81%E5%87%A0%E4%B8%AA%E6%91%84%E5%83%8F%E5%A4%B4%E6%8B%8D%E4%B8%8D%E5%88%B0%E8%82%87%E4%BA%8B%E8%88%B9%23) `792.3K 🔥` `-27%`
1. [温婉为避风头会戴墨镜短暂露脸](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%A9%89%E4%B8%BA%E9%81%BF%E9%A3%8E%E5%A4%B4%E4%BC%9A%E6%88%B4%E5%A2%A8%E9%95%9C%E7%9F%AD%E6%9A%82%E9%9C%B2%E8%84%B8%23) `231.9K 🔥` `-32%`
1. [李宇春携CHOUCHOU亮相成都](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E6%90%BACHOUCHOU%E4%BA%AE%E7%9B%B8%E6%88%90%E9%83%BD%23) `230.0K 🔥` `-33%`
1. [什么时候看到凌玲梗能不笑](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E7%9C%8B%E5%88%B0%E5%87%8C%E7%8E%B2%E6%A2%97%E8%83%BD%E4%B8%8D%E7%AC%91%23) `209.4K 🔥` `-39%`
1. [世界羽毛球锦标赛](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%BE%BD%E6%AF%9B%E7%90%83%E9%94%A6%E6%A0%87%E8%B5%9B%23) `155.0K 🔥` `-57%`
1. [那英女儿小苹果这么大了](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%A5%B3%E5%84%BF%E5%B0%8F%E8%8B%B9%E6%9E%9C%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `145.6K 🔥` `-24%`

Updated at 2026-08-23 18:03:33

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
