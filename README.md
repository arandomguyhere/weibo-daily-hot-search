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

1. [正午阳光这是什么意思](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%23) `1.2M 🔥` `NEW`
1. [彩票店主私兑825万奖金全家被起诉](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E7%A5%A8%E5%BA%97%E4%B8%BB%E7%A7%81%E5%85%91825%E4%B8%87%E5%A5%96%E9%87%91%E5%85%A8%E5%AE%B6%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `878.6K 🔥` `NEW`
1. [万千气象看陕西](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E9%99%95%E8%A5%BF%23) `668.5K 🔥` `NEW`
1. [为了演戏雪迎可以放弃什么](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BA%86%E6%BC%94%E6%88%8F%E9%9B%AA%E8%BF%8E%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%BC%83%E4%BB%80%E4%B9%88%23) `502.8K 🔥` `NEW`
1. [山姆399元充绒量300克羽绒服断货](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86399%E5%85%83%E5%85%85%E7%BB%92%E9%87%8F300%E5%85%8B%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%96%AD%E8%B4%A7%23) `260.3K 🔥` `NEW`
1. [厉娜想上浪姐](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%83%B3%E4%B8%8A%E6%B5%AA%E5%A7%90%23) `254.3K 🔥` `NEW`
1. [兰香如故配角拿到男女主资源了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%85%8D%E8%A7%92%E6%8B%BF%E5%88%B0%E7%94%B7%E5%A5%B3%E4%B8%BB%E8%B5%84%E6%BA%90%E4%BA%86%23) `253.0K 🔥` `NEW`
1. [3岁女孩练芭蕾2年蜕变惊人](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%BB%83%E8%8A%AD%E8%95%BE2%E5%B9%B4%E8%9C%95%E5%8F%98%E6%83%8A%E4%BA%BA%23) `252.0K 🔥` `NEW`
1. [凯迪拉克CT5](https://s.weibo.com/weibo?q=%23%E5%87%AF%E8%BF%AA%E6%8B%89%E5%85%8BCT5%23) `251.5K 🔥` `NEW`
1. [王毅鲁比奥通话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E9%B2%81%E6%AF%94%E5%A5%A5%E9%80%9A%E8%AF%9D%23) `249.9K 🔥` `NEW`
1. [赵丽颖起诉红果短剧](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%B5%B7%E8%AF%89%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%23) `248.9K 🔥` `NEW`
1. [霍启山娜然 结婚](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%20%E7%BB%93%E5%A9%9A%23) `247.6K 🔥` `NEW`
1. [警方已介入疯狂小马哥喝酒猝死](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%B7%B2%E4%BB%8B%E5%85%A5%E7%96%AF%E7%8B%82%E5%B0%8F%E9%A9%AC%E5%93%A5%E5%96%9D%E9%85%92%E7%8C%9D%E6%AD%BB%23) `247.0K 🔥` `NEW`
1. [王楚钦打法被研究](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E6%B3%95%E8%A2%AB%E7%A0%94%E7%A9%B6%23) `245.8K 🔥` `NEW`
1. [霍启刚郭晶晶11月11日办的世纪婚礼](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E9%83%AD%E6%99%B6%E6%99%B611%E6%9C%8811%E6%97%A5%E5%8A%9E%E7%9A%84%E4%B8%96%E7%BA%AA%E5%A9%9A%E7%A4%BC%23) `244.4K 🔥` `NEW`
1. [0.01分赢下保研第二天就被室友举报](https://s.weibo.com/weibo?q=%230.01%E5%88%86%E8%B5%A2%E4%B8%8B%E4%BF%9D%E7%A0%94%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%B0%B1%E8%A2%AB%E5%AE%A4%E5%8F%8B%E4%B8%BE%E6%8A%A5%23) `243.7K 🔥` `NEW`
1. [杨幂 神之一蹲](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E7%A5%9E%E4%B9%8B%E4%B8%80%E8%B9%B2%23) `242.3K 🔥` `NEW`
1. [娜然哪怕在何穗旁边也完全不输](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E7%84%B6%E5%93%AA%E6%80%95%E5%9C%A8%E4%BD%95%E7%A9%97%E6%97%81%E8%BE%B9%E4%B9%9F%E5%AE%8C%E5%85%A8%E4%B8%8D%E8%BE%93%23) `240.9K 🔥` `NEW`
1. [金鸡奖两幕对比太扎心](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%E4%B8%A4%E5%B9%95%E5%AF%B9%E6%AF%94%E5%A4%AA%E6%89%8E%E5%BF%83%23) `239.9K 🔥` `NEW`
1. [曝iPhone20Pro全固态按键](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone20Pro%E5%85%A8%E5%9B%BA%E6%80%81%E6%8C%89%E9%94%AE%23) `239.0K 🔥` `NEW`
1. [Cat家里有喜事](https://s.weibo.com/weibo?q=%23Cat%E5%AE%B6%E9%87%8C%E6%9C%89%E5%96%9C%E4%BA%8B%23) `237.3K 🔥` `NEW`
1. [中国留学生在澳遇袭两根手指被砍断](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%9C%A8%E6%BE%B3%E9%81%87%E8%A2%AD%E4%B8%A4%E6%A0%B9%E6%89%8B%E6%8C%87%E8%A2%AB%E7%A0%8D%E6%96%AD%23) `237.1K 🔥` `NEW`
1. [许飞张萌聊天记录](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%BC%A0%E8%90%8C%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `235.3K 🔥` `NEW`
1. [唐嫣刘诗诗同框合照](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%88%98%E8%AF%97%E8%AF%97%E5%90%8C%E6%A1%86%E5%90%88%E7%85%A7%23) `235.0K 🔥` `NEW`
1. [中年人的显老行为太形象了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B9%B4%E4%BA%BA%E7%9A%84%E6%98%BE%E8%80%81%E8%A1%8C%E4%B8%BA%E5%A4%AA%E5%BD%A2%E8%B1%A1%E4%BA%86%23) `230.8K 🔥` `NEW`
1. [W盛典群像合照](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E7%BE%A4%E5%83%8F%E5%90%88%E7%85%A7%23) `206.0K 🔥` `NEW`
1. [iPhone20Pro再曝](https://s.weibo.com/weibo?q=%23iPhone20Pro%E5%86%8D%E6%9B%9D%23) `201.9K 🔥` `NEW`
1. [疑似许飞厉娜告密监控视频泄露](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%E5%91%8A%E5%AF%86%E7%9B%91%E6%8E%A7%E8%A7%86%E9%A2%91%E6%B3%84%E9%9C%B2%23) `187.4K 🔥` `NEW`
1. [尚公主播出这样的成绩真的好可惜](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%92%AD%E5%87%BA%E8%BF%99%E6%A0%B7%E7%9A%84%E6%88%90%E7%BB%A9%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%8F%AF%E6%83%9C%23) `158.1K 🔥` `NEW`
1. [俄美乌三方会谈成果公布](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BE%8E%E4%B9%8C%E4%B8%89%E6%96%B9%E4%BC%9A%E8%B0%88%E6%88%90%E6%9E%9C%E5%85%AC%E5%B8%83%23) `149.5K 🔥` `NEW`
1. [青稚现队友辟谣](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E7%8E%B0%E9%98%9F%E5%8F%8B%E8%BE%9F%E8%B0%A3%23) `148.0K 🔥` `NEW`
1. [尚公主大结局callback九重紫](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%A4%A7%E7%BB%93%E5%B1%80callback%E4%B9%9D%E9%87%8D%E7%B4%AB%23) `146.1K 🔥` `NEW`
1. [大冰对抗紧张的方法太牛了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%AF%B9%E6%8A%97%E7%B4%A7%E5%BC%A0%E7%9A%84%E6%96%B9%E6%B3%95%E5%A4%AA%E7%89%9B%E4%BA%86%23) `134.2K 🔥` `NEW`
1. [白小纯不依赖哥哥算长大吗](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E4%B8%8D%E4%BE%9D%E8%B5%96%E5%93%A5%E5%93%A5%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `129.2K 🔥` `NEW`
1. [白敬亭井柏然宋威龙王嘉尔张凌赫同框](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AE%8B%E5%A8%81%E9%BE%99%E7%8E%8B%E5%98%89%E5%B0%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E6%A1%86%23) `127.4K 🔥` `NEW`
1. [12306回应外籍游客探出高铁车厢吸烟](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%A4%96%E7%B1%8D%E6%B8%B8%E5%AE%A2%E6%8E%A2%E5%87%BA%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%90%B8%E7%83%9F%23) `125.6K 🔥` `NEW`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `125.4K 🔥` `NEW`
1. [今天是太阳雨首播收视第一](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E9%A6%96%E6%92%AD%E6%94%B6%E8%A7%86%E7%AC%AC%E4%B8%80%23) `119.8K 🔥` `NEW`
1. [王栎鑫吴雅婷为11岁女儿庆生](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%90%B4%E9%9B%85%E5%A9%B7%E4%B8%BA11%E5%B2%81%E5%A5%B3%E5%84%BF%E5%BA%86%E7%94%9F%23) `118.3K 🔥` `NEW`
1. [和对象反复分手复合像死循环](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%AF%B9%E8%B1%A1%E5%8F%8D%E5%A4%8D%E5%88%86%E6%89%8B%E5%A4%8D%E5%90%88%E5%83%8F%E6%AD%BB%E5%BE%AA%E7%8E%AF%23) `116.0K 🔥` `NEW`
1. [女子西西弗买200元书坐咖啡区被拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A5%BF%E8%A5%BF%E5%BC%97%E4%B9%B0200%E5%85%83%E4%B9%A6%E5%9D%90%E5%92%96%E5%95%A1%E5%8C%BA%E8%A2%AB%E6%8B%92%23) `115.7K 🔥` `NEW`
1. [郭德纲西河门收徒仪式](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%E8%A5%BF%E6%B2%B3%E9%97%A8%E6%94%B6%E5%BE%92%E4%BB%AA%E5%BC%8F%23) `112.0K 🔥` `NEW`
1. [张雪迎这算工伤吧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%BF%8E%E8%BF%99%E7%AE%97%E5%B7%A5%E4%BC%A4%E5%90%A7%23) `111.5K 🔥` `NEW`
1. [我爸不敢坐我的车写了篇报告](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%88%B8%E4%B8%8D%E6%95%A2%E5%9D%90%E6%88%91%E7%9A%84%E8%BD%A6%E5%86%99%E4%BA%86%E7%AF%87%E6%8A%A5%E5%91%8A%23) `109.8K 🔥` `NEW`
1. [青稚白小纯所属战队已直通决赛](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%89%80%E5%B1%9E%E6%88%98%E9%98%9F%E5%B7%B2%E7%9B%B4%E9%80%9A%E5%86%B3%E8%B5%9B%23) `109.0K 🔥` `NEW`
1. [樊振东在联合国难民署发言](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9C%A8%E8%81%94%E5%90%88%E5%9B%BD%E9%9A%BE%E6%B0%91%E7%BD%B2%E5%8F%91%E8%A8%80%23) `102.3K 🔥` `NEW`
1. [杨超越董思成对着哭](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E5%AF%B9%E7%9D%80%E5%93%AD%23) `95.1K 🔥` `NEW`
1. [i茅台16款酒全天补货](https://s.weibo.com/weibo?q=%23i%E8%8C%85%E5%8F%B016%E6%AC%BE%E9%85%92%E5%85%A8%E5%A4%A9%E8%A1%A5%E8%B4%A7%23) `94.9K 🔥` `NEW`
1. [谷雨张颂文张雪迎床戏](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E9%9B%A8%E5%BC%A0%E9%A2%82%E6%96%87%E5%BC%A0%E9%9B%AA%E8%BF%8E%E5%BA%8A%E6%88%8F%23) `92.9K 🔥` `NEW`
1. [武汉年入百万的补课老师不少](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%E7%9A%84%E8%A1%A5%E8%AF%BE%E8%80%81%E5%B8%88%E4%B8%8D%E5%B0%91%23) `92.5K 🔥` `NEW`

Updated at 2026-11-12 00:02:59

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
