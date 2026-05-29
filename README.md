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

1. [日本转移12万居民 (Japan transfers 120,000 residents)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BD%AC%E7%A7%BB12%E4%B8%87%E5%B1%85%E6%B0%91%23) `1.2M 🔥` `NEW`
1. [雷军称被何小鹏李斌骗了](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E8%A2%AB%E4%BD%95%E5%B0%8F%E9%B9%8F%E6%9D%8E%E6%96%8C%E9%AA%97%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [网络举报宣传](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E4%B8%BE%E6%8A%A5%E5%AE%A3%E4%BC%A0%23) `1.2M 🔥` `NEW`
1. [同事每天下班带走公司五斤水](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E6%AF%8F%E5%A4%A9%E4%B8%8B%E7%8F%AD%E5%B8%A6%E8%B5%B0%E5%85%AC%E5%8F%B8%E4%BA%94%E6%96%A4%E6%B0%B4%23) `1.2M 🔥` `NEW`
1. [买mimi发夹送uu](https://s.weibo.com/weibo?q=%23%E4%B9%B0mimi%E5%8F%91%E5%A4%B9%E9%80%81uu%23) `1.1M 🔥` `NEW`
1. [李晨转发宣传白鹿莫离](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E8%BD%AC%E5%8F%91%E5%AE%A3%E4%BC%A0%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%23) `957.1K 🔥` `NEW`
1. [荣耀WIN Turbo京东独家发售](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80WIN%20Turbo%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6%E5%8F%91%E5%94%AE%23) `904.3K 🔥` `NEW`
1. [关晓彤震惊丁程鑫24岁了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E9%9C%87%E6%83%8A%E4%B8%81%E7%A8%8B%E9%91%AB24%E5%B2%81%E4%BA%86%23) `807.3K 🔥` `NEW`
1. [患者曝名医让儿子代诊致其流产](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E6%9B%9D%E5%90%8D%E5%8C%BB%E8%AE%A9%E5%84%BF%E5%AD%90%E4%BB%A3%E8%AF%8A%E8%87%B4%E5%85%B6%E6%B5%81%E4%BA%A7%23) `805.9K 🔥` `NEW`
1. [梅西伤情](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E4%BC%A4%E6%83%85%23) `800.9K 🔥` `NEW`
1. [王鹤棣称没有焦虑但会反思 (Wang Hedi said he has no anxiety but will reflect on it)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%A7%B0%E6%B2%A1%E6%9C%89%E7%84%A6%E8%99%91%E4%BD%86%E4%BC%9A%E5%8F%8D%E6%80%9D%23) `797.5K 🔥` `NEW`
1. [奚梦瑶何猷君婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `792.8K 🔥` `NEW`
1. [两老人街头争吵一人倒地去世](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E8%80%81%E4%BA%BA%E8%A1%97%E5%A4%B4%E4%BA%89%E5%90%B5%E4%B8%80%E4%BA%BA%E5%80%92%E5%9C%B0%E5%8E%BB%E4%B8%96%23) `790.5K 🔥` `NEW`
1. [演员刘红梅去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%88%98%E7%BA%A2%E6%A2%85%E5%8E%BB%E4%B8%96%23) `784.9K 🔥` `NEW`
1. [范玮琪四公没人选哭了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E5%9B%9B%E5%85%AC%E6%B2%A1%E4%BA%BA%E9%80%89%E5%93%AD%E4%BA%86%23) `782.3K 🔥` `NEW`
1. [AI就这么背刺大学生](https://s.weibo.com/weibo?q=%23AI%E5%B0%B1%E8%BF%99%E4%B9%88%E8%83%8C%E5%88%BA%E5%A4%A7%E5%AD%A6%E7%94%9F%23) `778.6K 🔥` `NEW`
1. [虞书欣在一年级被弄到脸](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9C%A8%E4%B8%80%E5%B9%B4%E7%BA%A7%E8%A2%AB%E5%BC%84%E5%88%B0%E8%84%B8%23) `768.5K 🔥` `NEW`
1. [A股5月收官](https://s.weibo.com/weibo?q=%23A%E8%82%A15%E6%9C%88%E6%94%B6%E5%AE%98%23) `765.5K 🔥` `NEW`
1. [折叠屏iPhone外观实锤了](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0%E5%B1%8FiPhone%E5%A4%96%E8%A7%82%E5%AE%9E%E9%94%A4%E4%BA%86%23) `759.2K 🔥` `NEW`
1. [35岁男子台球室掀女生裙摆被拘](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%94%B7%E5%AD%90%E5%8F%B0%E7%90%83%E5%AE%A4%E6%8E%80%E5%A5%B3%E7%94%9F%E8%A3%99%E6%91%86%E8%A2%AB%E6%8B%98%23) `751.5K 🔥` `NEW`
1. [舒淇替女生试了YU7这些细节 (The details of Shu Qi trying out YU7 for girls)](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E6%9B%BF%E5%A5%B3%E7%94%9F%E8%AF%95%E4%BA%86YU7%E8%BF%99%E4%BA%9B%E7%BB%86%E8%8A%82%23) `750.5K 🔥` `NEW`
1. [主播卖MiMi发卡提供uu帮粘服务](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E5%8D%96MiMi%E5%8F%91%E5%8D%A1%E6%8F%90%E4%BE%9Buu%E5%B8%AE%E7%B2%98%E6%9C%8D%E5%8A%A1%23) `745.2K 🔥` `NEW`
1. [李晨涨粉近百万](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%B6%A8%E7%B2%89%E8%BF%91%E7%99%BE%E4%B8%87%23) `742.4K 🔥` `NEW`
1. [亲爱的客栈全员夸王鹤棣](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%E5%85%A8%E5%91%98%E5%A4%B8%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `736.4K 🔥` `NEW`
1. [白鹿到底做错了啥](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%88%B0%E5%BA%95%E5%81%9A%E9%94%99%E4%BA%86%E5%95%A5%23) `734.6K 🔥` `NEW`
1. [新疆地震](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E5%9C%B0%E9%9C%87%23) `731.0K 🔥` `NEW`
1. [奚梦瑶何猷君6月1日举行婚礼](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%BD%95%E7%8C%B7%E5%90%9B6%E6%9C%881%E6%97%A5%E4%B8%BE%E8%A1%8C%E5%A9%9A%E7%A4%BC%23) `727.2K 🔥` `NEW`
1. [中方必将反制欧盟的产能过剩工具](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%BF%85%E5%B0%86%E5%8F%8D%E5%88%B6%E6%AC%A7%E7%9B%9F%E7%9A%84%E4%BA%A7%E8%83%BD%E8%BF%87%E5%89%A9%E5%B7%A5%E5%85%B7%23) `720.8K 🔥` `NEW`
1. [莫氏鸡煲30天线上销售额近1000万](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B230%E5%A4%A9%E7%BA%BF%E4%B8%8A%E9%94%80%E5%94%AE%E9%A2%9D%E8%BF%911000%E4%B8%87%23) `718.9K 🔥` `NEW`
1. [阚清子瘦了十斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%98%A6%E4%BA%86%E5%8D%81%E6%96%A4%23) `714.5K 🔥` `NEW`
1. [JDG对战TT (JDG vs. TT)](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98TT%23) `709.9K 🔥` `NEW`
1. [关晓彤说紧点显得你臀翘](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%AF%B4%E7%B4%A7%E7%82%B9%E6%98%BE%E5%BE%97%E4%BD%A0%E8%87%80%E7%BF%98%23) `707.2K 🔥` `NEW`
1. [VOGUE出发图](https://s.weibo.com/weibo?q=%23VOGUE%E5%87%BA%E5%8F%91%E5%9B%BE%23) `703.5K 🔥` `NEW`
1. [对一个人好感倍增的小细节](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A5%BD%E6%84%9F%E5%80%8D%E5%A2%9E%E7%9A%84%E5%B0%8F%E7%BB%86%E8%8A%82%23) `695.5K 🔥` `NEW`
1. [两广人夏天越吃越瘦的原因](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B9%BF%E4%BA%BA%E5%A4%8F%E5%A4%A9%E8%B6%8A%E5%90%83%E8%B6%8A%E7%98%A6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `687.7K 🔥` `NEW`
1. [杨紫李祯观音造型来了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9D%8E%E7%A5%AF%E8%A7%82%E9%9F%B3%E9%80%A0%E5%9E%8B%E6%9D%A5%E4%BA%86%23) `680.8K 🔥` `NEW`
1. [十日终焉穆祉丞进组](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%9B%E7%BB%84%23) `678.6K 🔥` `NEW`
1. [博主质疑泸沽湖景区在省道设卡收费](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E8%B4%A8%E7%96%91%E6%B3%B8%E6%B2%BD%E6%B9%96%E6%99%AF%E5%8C%BA%E5%9C%A8%E7%9C%81%E9%81%93%E8%AE%BE%E5%8D%A1%E6%94%B6%E8%B4%B9%23) `672.0K 🔥` `NEW`
1. [刘诗诗裸粉长裙](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%A3%B8%E7%B2%89%E9%95%BF%E8%A3%99%23) `668.0K 🔥` `NEW`
1. [莫离对打翘楚](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E5%AF%B9%E6%89%93%E7%BF%98%E6%A5%9A%23) `666.0K 🔥` `NEW`
1. [Claude疑似蒸馏Qwen和DeepSeek (Claude suspected of distilling Qwen and DeepSeek)](https://s.weibo.com/weibo?q=%23Claude%E7%96%91%E4%BC%BC%E8%92%B8%E9%A6%8FQwen%E5%92%8CDeepSeek%23) `661.1K 🔥` `NEW`
1. [小鹏一季度亏损近18亿背后](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%BA%8F%E6%8D%9F%E8%BF%9118%E4%BA%BF%E8%83%8C%E5%90%8E%23) `658.0K 🔥` `NEW`
1. [看京东618夏日歌会最高拿10万元](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BA%AC%E4%B8%9C618%E5%A4%8F%E6%97%A5%E6%AD%8C%E4%BC%9A%E6%9C%80%E9%AB%98%E6%8B%BF10%E4%B8%87%E5%85%83%23) `654.1K 🔥` `NEW`
1. [上班后慢慢开始痛失本名](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E6%85%A2%E6%85%A2%E5%BC%80%E5%A7%8B%E7%97%9B%E5%A4%B1%E6%9C%AC%E5%90%8D%23) `649.3K 🔥` `NEW`
1. [詹黑名嘴转攻文班亚马](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E9%BB%91%E5%90%8D%E5%98%B4%E8%BD%AC%E6%94%BB%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%23) `644.3K 🔥` `NEW`
1. [华为超新星手表X1系列今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%B6%85%E6%96%B0%E6%98%9F%E6%89%8B%E8%A1%A8X1%E7%B3%BB%E5%88%97%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `1.2M 🔥` `+77%`
1. [电车是时候交养路费了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%BD%A6%E6%98%AF%E6%97%B6%E5%80%99%E4%BA%A4%E5%85%BB%E8%B7%AF%E8%B4%B9%E4%BA%86%23) `762.8K 🔥` `+144%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `696.3K 🔥` `+41%`
1. [唐嫣参加女儿幼儿园艺术节](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%8F%82%E5%8A%A0%E5%A5%B3%E5%84%BF%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%89%BA%E6%9C%AF%E8%8A%82%23) `689.5K 🔥` `+44%`
1. [孙怡的裙子不会打结吗](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9A%84%E8%A3%99%E5%AD%90%E4%B8%8D%E4%BC%9A%E6%89%93%E7%BB%93%E5%90%97%23) `643.6K 🔥` `+35%`
1. [创业最快的方式是寄生 (The fastest way to start a business is parasitism)](https://s.weibo.com/weibo?q=%23%E5%88%9B%E4%B8%9A%E6%9C%80%E5%BF%AB%E7%9A%84%E6%96%B9%E5%BC%8F%E6%98%AF%E5%AF%84%E7%94%9F%23) `775.0K 🔥`
1. [日本迎来坏消息 (Bad news for Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BF%8E%E6%9D%A5%E5%9D%8F%E6%B6%88%E6%81%AF%23) `870.5K 🔥` `-51%`

Updated at 2026-05-29 16:23:39

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
