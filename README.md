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

1. [年轻时做什么对后半生有巨大好处](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E6%97%B6%E5%81%9A%E4%BB%80%E4%B9%88%E5%AF%B9%E5%90%8E%E5%8D%8A%E7%94%9F%E6%9C%89%E5%B7%A8%E5%A4%A7%E5%A5%BD%E5%A4%84%23) `543.7K 🔥` `NEW`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `540.0K 🔥` `NEW`
1. [刘耀文蹲下来和杨幂聊天](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%B9%B2%E4%B8%8B%E6%9D%A5%E5%92%8C%E6%9D%A8%E5%B9%82%E8%81%8A%E5%A4%A9%23) `387.5K 🔥` `NEW`
1. [刘宇宁林一已发现长得高的坏处](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9E%97%E4%B8%80%E5%B7%B2%E5%8F%91%E7%8E%B0%E9%95%BF%E5%BE%97%E9%AB%98%E7%9A%84%E5%9D%8F%E5%A4%84%23) `185.2K 🔥` `NEW`
1. [爷爷中风2岁宝宝哭着挨个去邻居家求救](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%AD%E9%A3%8E2%E5%B2%81%E5%AE%9D%E5%AE%9D%E5%93%AD%E7%9D%80%E6%8C%A8%E4%B8%AA%E5%8E%BB%E9%82%BB%E5%B1%85%E5%AE%B6%E6%B1%82%E6%95%91%23) `163.1K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `140.5K 🔥` `NEW`
1. [李羲承用中文写到此一游](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E7%94%A8%E4%B8%AD%E6%96%87%E5%86%99%E5%88%B0%E6%AD%A4%E4%B8%80%E6%B8%B8%23) `127.5K 🔥` `NEW`
1. [苏州遛狗不拴绳咬伤两名幼童](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E9%81%9B%E7%8B%97%E4%B8%8D%E6%8B%B4%E7%BB%B3%E5%92%AC%E4%BC%A4%E4%B8%A4%E5%90%8D%E5%B9%BC%E7%AB%A5%23) `124.4K 🔥` `NEW`
1. [ACT对战FPX.ZQ](https://s.weibo.com/weibo?q=%23ACT%E5%AF%B9%E6%88%98FPX.ZQ%23) `544.5K 🔥` `+44%`
1. [MG07发布10.59万起](https://s.weibo.com/weibo?q=%23MG07%E5%8F%91%E5%B8%8310.59%E4%B8%87%E8%B5%B7%23) `542.9K 🔥` `+39%`
1. [金价反弹重要原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%8D%E5%BC%B9%E9%87%8D%E8%A6%81%E5%8E%9F%E5%9B%A0%23) `529.6K 🔥` `+83%`
1. [时代少年团七周年演唱会选址排除法](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%83%E5%91%A8%E5%B9%B4%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%89%E5%9D%80%E6%8E%92%E9%99%A4%E6%B3%95%23) `529.2K 🔥` `+70%`
1. [万茜腰臀比](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8C%9C%E8%85%B0%E8%87%80%E6%AF%94%23) `455.7K 🔥` `+59%`
1. [难怪进郭敬明剧组瘦一圈](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E8%BF%9B%E9%83%AD%E6%95%AC%E6%98%8E%E5%89%A7%E7%BB%84%E7%98%A6%E4%B8%80%E5%9C%88%23) `317.6K 🔥` `+33%`
1. [胡锡进称正规媒体应惭愧](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E7%A7%B0%E6%AD%A3%E8%A7%84%E5%AA%92%E4%BD%93%E5%BA%94%E6%83%AD%E6%84%A7%23) `317.2K 🔥` `+31%`
1. [商场一奔驰展车撞碎护栏险坠楼](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%9C%BA%E4%B8%80%E5%A5%94%E9%A9%B0%E5%B1%95%E8%BD%A6%E6%92%9E%E7%A2%8E%E6%8A%A4%E6%A0%8F%E9%99%A9%E5%9D%A0%E6%A5%BC%23) `252.7K 🔥` `+83%`
1. [3姐弟太饿报警求助民警上门做饭](https://s.weibo.com/weibo?q=%233%E5%A7%90%E5%BC%9F%E5%A4%AA%E9%A5%BF%E6%8A%A5%E8%AD%A6%E6%B1%82%E5%8A%A9%E6%B0%91%E8%AD%A6%E4%B8%8A%E9%97%A8%E5%81%9A%E9%A5%AD%23) `1.1M 🔥`
1. [台湾艺人疑破坏日本文物被捕](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%89%BA%E4%BA%BA%E7%96%91%E7%A0%B4%E5%9D%8F%E6%97%A5%E6%9C%AC%E6%96%87%E7%89%A9%E8%A2%AB%E6%8D%95%23) `533.3K 🔥`
1. [最近是全体教师最脆弱的时候](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E6%98%AF%E5%85%A8%E4%BD%93%E6%95%99%E5%B8%88%E6%9C%80%E8%84%86%E5%BC%B1%E7%9A%84%E6%97%B6%E5%80%99%23) `531.5K 🔥`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `531.0K 🔥`
1. [王传君 乔任梁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E4%B9%94%E4%BB%BB%E6%A2%81%23) `496.5K 🔥`
1. [终于懂为什么大家对容貌有执念了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A7%E5%AE%B6%E5%AF%B9%E5%AE%B9%E8%B2%8C%E6%9C%89%E6%89%A7%E5%BF%B5%E4%BA%86%23) `317.8K 🔥`
1. [TF四代听到退票的反应](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%90%AC%E5%88%B0%E9%80%80%E7%A5%A8%E7%9A%84%E5%8F%8D%E5%BA%94%23) `295.3K 🔥`
1. [卫生巾居然能卷成这样](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%B1%85%E7%84%B6%E8%83%BD%E5%8D%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `256.5K 🔥`
1. [张元英TIMA主持](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1TIMA%E4%B8%BB%E6%8C%81%23) `250.1K 🔥`
1. [诬告强奸是否真零成本](https://s.weibo.com/weibo?q=%23%E8%AF%AC%E5%91%8A%E5%BC%BA%E5%A5%B8%E6%98%AF%E5%90%A6%E7%9C%9F%E9%9B%B6%E6%88%90%E6%9C%AC%23) `180.9K 🔥`
1. [丁禹兮孟子义拍了电梯抱](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8B%8D%E4%BA%86%E7%94%B5%E6%A2%AF%E6%8A%B1%23) `178.3K 🔥`
1. [张远维权五代彩带](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E7%BB%B4%E6%9D%83%E4%BA%94%E4%BB%A3%E5%BD%A9%E5%B8%A6%23) `174.3K 🔥`
1. [原来我小时候就吃的这么好](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E5%B0%B1%E5%90%83%E7%9A%84%E8%BF%99%E4%B9%88%E5%A5%BD%23) `144.6K 🔥`
1. [曹骏二公分组](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%23) `127.3K 🔥`
1. [对栀子花的认知还是太少了](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%A0%80%E5%AD%90%E8%8A%B1%E7%9A%84%E8%AE%A4%E7%9F%A5%E8%BF%98%E6%98%AF%E5%A4%AA%E5%B0%91%E4%BA%86%23) `124.5K 🔥`
1. [长江存储月赚100多亿](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%AD%98%E5%82%A8%E6%9C%88%E8%B5%9A100%E5%A4%9A%E4%BA%BF%23) `124.5K 🔥`
1. [小米官宣新一代玄戒芯片技术发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AE%98%E5%AE%A3%E6%96%B0%E4%B8%80%E4%BB%A3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E6%8A%80%E6%9C%AF%E5%8F%91%E5%B8%83%E4%BC%9A%23) `124.5K 🔥`
1. [唐师曾去世前一天仍与网友互动](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B8%88%E6%9B%BE%E5%8E%BB%E4%B8%96%E5%89%8D%E4%B8%80%E5%A4%A9%E4%BB%8D%E4%B8%8E%E7%BD%91%E5%8F%8B%E4%BA%92%E5%8A%A8%23) `124.4K 🔥`
1. [新华社战地记者唐师曾因病离世](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E6%88%98%E5%9C%B0%E8%AE%B0%E8%80%85%E5%94%90%E5%B8%88%E6%9B%BE%E5%9B%A0%E7%97%85%E7%A6%BB%E4%B8%96%23) `817.0K 🔥` `-29%`
1. [见证中国具身智能产业的冰丝带时刻](https://s.weibo.com/weibo?q=%23%E8%A7%81%E8%AF%81%E4%B8%AD%E5%9B%BD%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E4%BA%A7%E4%B8%9A%E7%9A%84%E5%86%B0%E4%B8%9D%E5%B8%A6%E6%97%B6%E5%88%BB%23) `632.0K 🔥` `-44%`
1. [唐师曾去世前白血球几乎为零](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B8%88%E6%9B%BE%E5%8E%BB%E4%B8%96%E5%89%8D%E7%99%BD%E8%A1%80%E7%90%83%E5%87%A0%E4%B9%8E%E4%B8%BA%E9%9B%B6%23) `599.6K 🔥` `-46%`
1. [重器大结局](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%E5%A4%A7%E7%BB%93%E5%B1%80%23) `542.5K 🔥` `-31%`
1. [世界羽毛球锦标赛](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%BE%BD%E6%AF%9B%E7%90%83%E9%94%A6%E6%A0%87%E8%B5%9B%23) `541.7K 🔥` `-50%`
1. [国家卫健委通报7位专家被处理](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8D%AB%E5%81%A5%E5%A7%94%E9%80%9A%E6%8A%A57%E4%BD%8D%E4%B8%93%E5%AE%B6%E8%A2%AB%E5%A4%84%E7%90%86%23) `539.7K 🔥` `-31%`
1. [芒果新人撞脸王一博 (Mango newcomer Wang Yibo meets Wang Yibo)](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `537.4K 🔥` `-31%`
1. [哈兰德剪头发了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `537.3K 🔥` `-30%`
1. [HR笑了半天才给她办入职](https://s.weibo.com/weibo?q=%23HR%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E7%BB%99%E5%A5%B9%E5%8A%9E%E5%85%A5%E8%81%8C%23) `535.8K 🔥` `-50%`
1. [杨幂平地摔](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B9%B3%E5%9C%B0%E6%91%94%23) `534.0K 🔥` `-31%`
1. [董宇辉走后东方甄选扭亏为盈赚5.44亿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%B5%B0%E5%90%8E%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%89%AD%E4%BA%8F%E4%B8%BA%E7%9B%88%E8%B5%9A5.44%E4%BA%BF%23) `456.8K 🔥` `-42%`
1. [你好星期六这回真放母带了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E8%BF%99%E5%9B%9E%E7%9C%9F%E6%94%BE%E6%AF%8D%E5%B8%A6%E4%BA%86%23) `270.5K 🔥` `-22%`
1. [女子溺亡十几个摄像头拍不到肇事船](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%BA%BA%E4%BA%A1%E5%8D%81%E5%87%A0%E4%B8%AA%E6%91%84%E5%83%8F%E5%A4%B4%E6%8B%8D%E4%B8%8D%E5%88%B0%E8%82%87%E4%BA%8B%E8%88%B9%23) `250.4K 🔥` `-68%`
1. [你以为的低精力和真正的低精力](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E7%9A%84%E4%BD%8E%E7%B2%BE%E5%8A%9B%E5%92%8C%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%BD%8E%E7%B2%BE%E5%8A%9B%23) `249.7K 🔥` `-23%`
1. [甜馨否认恋爱](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A8%E5%90%A6%E8%AE%A4%E6%81%8B%E7%88%B1%23) `227.1K 🔥` `-26%`
1. [AG对战WB](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98WB%23) `129.1K 🔥` `-29%`
1. [赛考斯与殷玉珍深情拥抱](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E8%80%83%E6%96%AF%E4%B8%8E%E6%AE%B7%E7%8E%89%E7%8F%8D%E6%B7%B1%E6%83%85%E6%8B%A5%E6%8A%B1%23) `127.4K 🔥` `-56%`

Updated at 2026-08-23 19:45:58

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
