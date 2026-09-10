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

1. [青岛货轮火灾25人遇难](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE25%E4%BA%BA%E9%81%87%E9%9A%BE%23) `1.2M 🔥` `NEW`
1. [日本梅毒暴发与三个一有关](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%A2%85%E6%AF%92%E6%9A%B4%E5%8F%91%E4%B8%8E%E4%B8%89%E4%B8%AA%E4%B8%80%E6%9C%89%E5%85%B3%23) `844.6K 🔥` `NEW`
1. [我国成功发射一箭六星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E4%B8%80%E7%AE%AD%E5%85%AD%E6%98%9F%23) `653.2K 🔥` `NEW`
1. [赵昭仪录节目突发哮喘](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E5%BD%95%E8%8A%82%E7%9B%AE%E7%AA%81%E5%8F%91%E5%93%AE%E5%96%98%23) `534.0K 🔥` `NEW`
1. [教育界迎来了最严厉的父母](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E7%95%8C%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E6%AF%8D%23) `511.7K 🔥` `NEW`
1. [cbe金秋美妆](https://s.weibo.com/weibo?q=%23cbe%E9%87%91%E7%A7%8B%E7%BE%8E%E5%A6%86%23) `450.3K 🔥` `NEW`
1. [孙怡被说妆前一个人妆后一个人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%A2%AB%E8%AF%B4%E5%A6%86%E5%89%8D%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A6%86%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `444.9K 🔥` `NEW`
1. [iPhone17Pro线下降价](https://s.weibo.com/weibo?q=%23iPhone17Pro%E7%BA%BF%E4%B8%8B%E9%99%8D%E4%BB%B7%23) `368.5K 🔥` `NEW`
1. [花少8全员有嘴](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%85%A8%E5%91%98%E6%9C%89%E5%98%B4%23) `366.3K 🔥` `NEW`
1. [马来亚大学回应称将会采取必要措施](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E4%BA%9A%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%B0%E5%B0%86%E4%BC%9A%E9%87%87%E5%8F%96%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD%23) `362.3K 🔥` `NEW`
1. [不买不招35岁员工的公司产品](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B9%B0%E4%B8%8D%E6%8B%9B35%E5%B2%81%E5%91%98%E5%B7%A5%E7%9A%84%E5%85%AC%E5%8F%B8%E4%BA%A7%E5%93%81%23) `361.4K 🔥` `NEW`
1. [黄晓明 我帮了太多白眼狼](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%20%E6%88%91%E5%B8%AE%E4%BA%86%E5%A4%AA%E5%A4%9A%E7%99%BD%E7%9C%BC%E7%8B%BC%23) `361.2K 🔥` `NEW`
1. [武汉一小学学生不订奶就后排罚站](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E4%B8%80%E5%B0%8F%E5%AD%A6%E5%AD%A6%E7%94%9F%E4%B8%8D%E8%AE%A2%E5%A5%B6%E5%B0%B1%E5%90%8E%E6%8E%92%E7%BD%9A%E7%AB%99%23) `358.8K 🔥` `NEW`
1. [中国女篮VS法国女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEVS%E6%B3%95%E5%9B%BD%E5%A5%B3%E7%AF%AE%23) `355.4K 🔥` `NEW`
1. [在南京偶遇李沁](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8D%97%E4%BA%AC%E5%81%B6%E9%81%87%E6%9D%8E%E6%B2%81%23) `329.9K 🔥` `NEW`
1. [IU新歌献给刘仁娜](https://s.weibo.com/weibo?q=%23IU%E6%96%B0%E6%AD%8C%E7%8C%AE%E7%BB%99%E5%88%98%E4%BB%81%E5%A8%9C%23) `325.7K 🔥` `NEW`
1. [罗永浩说库克终于退了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E5%BA%93%E5%85%8B%E7%BB%88%E4%BA%8E%E9%80%80%E4%BA%86%23) `325.2K 🔥` `NEW`
1. [福建一汽贸店在门前杀黑狗祭车](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E4%B8%80%E6%B1%BD%E8%B4%B8%E5%BA%97%E5%9C%A8%E9%97%A8%E5%89%8D%E6%9D%80%E9%BB%91%E7%8B%97%E7%A5%AD%E8%BD%A6%23) `322.7K 🔥` `NEW`
1. [姥姥姥爷其实还活着](https://s.weibo.com/weibo?q=%23%E5%A7%A5%E5%A7%A5%E5%A7%A5%E7%88%B7%E5%85%B6%E5%AE%9E%E8%BF%98%E6%B4%BB%E7%9D%80%23) `321.3K 🔥` `NEW`
1. [幼儿高烧昏厥父亲踹坏电梯被困](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E9%AB%98%E7%83%A7%E6%98%8F%E5%8E%A5%E7%88%B6%E4%BA%B2%E8%B8%B9%E5%9D%8F%E7%94%B5%E6%A2%AF%E8%A2%AB%E5%9B%B0%23) `319.5K 🔥` `NEW`
1. [PPI](https://s.weibo.com/weibo?q=%23PPI%23) `317.3K 🔥` `NEW`
1. [青岛货轮火灾现场图](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE%E7%8E%B0%E5%9C%BA%E5%9B%BE%23) `316.4K 🔥` `NEW`
1. [三星回应多邻国开撕iPhoneDuo](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%9B%9E%E5%BA%94%E5%A4%9A%E9%82%BB%E5%9B%BD%E5%BC%80%E6%92%95iPhoneDuo%23) `313.9K 🔥` `NEW`
1. [苹果 安卓](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%20%E5%AE%89%E5%8D%93%23) `313.2K 🔥` `NEW`
1. [8部云合破40%的剧](https://s.weibo.com/weibo?q=%238%E9%83%A8%E4%BA%91%E5%90%88%E7%A0%B440%25%E7%9A%84%E5%89%A7%23) `309.9K 🔥` `NEW`
1. [早春晴朗现偶云合第二](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%8E%B0%E5%81%B6%E4%BA%91%E5%90%88%E7%AC%AC%E4%BA%8C%23) `308.2K 🔥` `NEW`
1. [白鹿直播间被挤爆了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%E9%97%B4%E8%A2%AB%E6%8C%A4%E7%88%86%E4%BA%86%23) `304.5K 🔥` `NEW`
1. [王俊凯直播](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9B%B4%E6%92%AD%23) `303.7K 🔥` `NEW`
1. [史上最贵iPhone手机壳](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5iPhone%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `302.7K 🔥` `NEW`
1. [糖摄入过多身体的11个表现](https://s.weibo.com/weibo?q=%23%E7%B3%96%E6%91%84%E5%85%A5%E8%BF%87%E5%A4%9A%E8%BA%AB%E4%BD%93%E7%9A%8411%E4%B8%AA%E8%A1%A8%E7%8E%B0%23) `299.8K 🔥` `NEW`
1. [减肥后精子浓度数量都增加了](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E5%90%8E%E7%B2%BE%E5%AD%90%E6%B5%93%E5%BA%A6%E6%95%B0%E9%87%8F%E9%83%BD%E5%A2%9E%E5%8A%A0%E4%BA%86%23) `296.7K 🔥` `NEW`
1. [霍去病其实被历史低估了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%8E%BB%E7%97%85%E5%85%B6%E5%AE%9E%E8%A2%AB%E5%8E%86%E5%8F%B2%E4%BD%8E%E4%BC%B0%E4%BA%86%23) `295.8K 🔥` `NEW`
1. [钟丽缇和女儿做助眠直播](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%92%8C%E5%A5%B3%E5%84%BF%E5%81%9A%E5%8A%A9%E7%9C%A0%E7%9B%B4%E6%92%AD%23) `294.8K 🔥` `NEW`
1. [曝男篮在日本住集装箱三人一间](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%94%B7%E7%AF%AE%E5%9C%A8%E6%97%A5%E6%9C%AC%E4%BD%8F%E9%9B%86%E8%A3%85%E7%AE%B1%E4%B8%89%E4%BA%BA%E4%B8%80%E9%97%B4%23) `292.9K 🔥` `NEW`
1. [韩国史上最贵离婚诞生](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5%E7%A6%BB%E5%A9%9A%E8%AF%9E%E7%94%9F%23) `291.8K 🔥` `NEW`
1. [3岁男童遭4小孩围殴多次调解未果](https://s.weibo.com/weibo?q=%233%E5%B2%81%E7%94%B7%E7%AB%A5%E9%81%AD4%E5%B0%8F%E5%AD%A9%E5%9B%B4%E6%AE%B4%E5%A4%9A%E6%AC%A1%E8%B0%83%E8%A7%A3%E6%9C%AA%E6%9E%9C%23) `289.2K 🔥` `NEW`
1. [林依晨叫邓为起床](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E5%8F%AB%E9%82%93%E4%B8%BA%E8%B5%B7%E5%BA%8A%23) `288.1K 🔥` `NEW`
1. [早春晴朗0流量主演0粉丝云包场0挂播](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%970%E6%B5%81%E9%87%8F%E4%B8%BB%E6%BC%940%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA0%E6%8C%82%E6%92%AD%23) `286.1K 🔥` `NEW`
1. [花少8两小时播放量破1.27亿](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E4%B8%A4%E5%B0%8F%E6%97%B6%E6%92%AD%E6%94%BE%E9%87%8F%E7%A0%B41.27%E4%BA%BF%23) `283.1K 🔥` `NEW`
1. [苏醒 再就业男团演唱会](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%20%E5%86%8D%E5%B0%B1%E4%B8%9A%E7%94%B7%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `282.2K 🔥` `NEW`
1. [给爸妈买东西需要先斩后奏](https://s.weibo.com/weibo?q=%23%E7%BB%99%E7%88%B8%E5%A6%88%E4%B9%B0%E4%B8%9C%E8%A5%BF%E9%9C%80%E8%A6%81%E5%85%88%E6%96%A9%E5%90%8E%E5%A5%8F%23) `280.1K 🔥` `NEW`
1. [老公显形记](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E6%98%BE%E5%BD%A2%E8%AE%B0%23) `276.8K 🔥` `NEW`
1. [哪位嫂子会用上iPhone的新功能](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%BD%8D%E5%AB%82%E5%AD%90%E4%BC%9A%E7%94%A8%E4%B8%8AiPhone%E7%9A%84%E6%96%B0%E5%8A%9F%E8%83%BD%23) `320.3K 🔥` `+49%`
1. [iPhone18Pro价格](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BB%B7%E6%A0%BC%23) `310.6K 🔥` `+57%`
1. [多邻国开撕iPhone Duo](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%82%BB%E5%9B%BD%E5%BC%80%E6%92%95iPhone%20Duo%23) `298.5K 🔥` `+43%`
1. [罗永浩吐槽iPhoneDuo多处抄袭](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%90%90%E6%A7%BDiPhoneDuo%E5%A4%9A%E5%A4%84%E6%8A%84%E8%A2%AD%23) `279.4K 🔥` `+38%`
1. [建议大家把内裤袜子丢洗衣机洗](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E5%86%85%E8%A3%A4%E8%A2%9C%E5%AD%90%E4%B8%A2%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B4%97%23) `608.2K 🔥` `-40%`
1. [青岛货轮火灾造成重大人员伤亡](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE%E9%80%A0%E6%88%90%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23) `363.1K 🔥` `-90%`
1. [女生自曝没考到年级前6被资助人拉黑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%87%AA%E6%9B%9D%E6%B2%A1%E8%80%83%E5%88%B0%E5%B9%B4%E7%BA%A7%E5%89%8D6%E8%A2%AB%E8%B5%84%E5%8A%A9%E4%BA%BA%E6%8B%89%E9%BB%91%23) `346.7K 🔥` `-75%`
1. [苹果CEO 张铁牛](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CCEO%20%E5%BC%A0%E9%93%81%E7%89%9B%23) `306.3K 🔥` `-69%`
1. [教师节](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%8A%82%23) `284.7K 🔥` `-46%`

Updated at 2026-09-10 21:52:54

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
