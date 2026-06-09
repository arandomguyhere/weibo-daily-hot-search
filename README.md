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

1. [莫离热度像跳楼机 (Mo Li is as hot as a jumping machine)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%83%AD%E5%BA%A6%E5%83%8F%E8%B7%B3%E6%A5%BC%E6%9C%BA%23) `1.5M 🔥` `NEW`
1. [国足vs泰国](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3vs%E6%B3%B0%E5%9B%BD%23) `930.9K 🔥` `NEW`
1. [视频感受朝方欢送仪式热烈氛围](https://s.weibo.com/weibo?q=%23%E8%A7%86%E9%A2%91%E6%84%9F%E5%8F%97%E6%9C%9D%E6%96%B9%E6%AC%A2%E9%80%81%E4%BB%AA%E5%BC%8F%E7%83%AD%E7%83%88%E6%B0%9B%E5%9B%B4%23) `798.6K 🔥` `NEW`
1. [papi喊你来京东买超市5折好物](https://s.weibo.com/weibo?q=%23papi%E5%96%8A%E4%BD%A0%E6%9D%A5%E4%BA%AC%E4%B8%9C%E4%B9%B0%E8%B6%85%E5%B8%825%E6%8A%98%E5%A5%BD%E7%89%A9%23) `788.0K 🔥` `NEW`
1. [关晓彤吻戏](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%BB%E6%88%8F%23) `672.3K 🔥` `NEW`
1. [爱玛黑翼全速领航员周冠宇](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%8E%9B%E9%BB%91%E7%BF%BC%E5%85%A8%E9%80%9F%E9%A2%86%E8%88%AA%E5%91%98%E5%91%A8%E5%86%A0%E5%AE%87%23) `657.6K 🔥` `NEW`
1. [新手机回避症](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%89%8B%E6%9C%BA%E5%9B%9E%E9%81%BF%E7%97%87%23) `488.7K 🔥` `NEW`
1. [对上班过劳肥有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%8A%E7%8F%AD%E8%BF%87%E5%8A%B3%E8%82%A5%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `411.9K 🔥` `NEW`
1. [杨幂李沁欧阳娣娣合照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9D%8E%E6%B2%81%E6%AC%A7%E9%98%B3%E5%A8%A3%E5%A8%A3%E5%90%88%E7%85%A7%23) `409.7K 🔥` `NEW`
1. [原来防晒衣真的不能烘干](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%98%B2%E6%99%92%E8%A1%A3%E7%9C%9F%E7%9A%84%E4%B8%8D%E8%83%BD%E7%83%98%E5%B9%B2%23) `409.2K 🔥` `NEW`
1. [张月团曾沛慈团pk心之火 (Zhang Yuetuan Zeng Peici Tuan PK Heart Fire)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2pk%E5%BF%83%E4%B9%8B%E7%81%AB%23) `407.6K 🔥` `NEW`
1. [高市早苗嘀咕烦死了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%98%80%E5%92%95%E7%83%A6%E6%AD%BB%E4%BA%86%23) `406.2K 🔥` `NEW`
1. [北京天气 宜居城市](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94%20%E5%AE%9C%E5%B1%85%E5%9F%8E%E5%B8%82%23) `405.9K 🔥` `NEW`
1. [白鹿直播美颜灯没电了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%E7%BE%8E%E9%A2%9C%E7%81%AF%E6%B2%A1%E7%94%B5%E4%BA%86%23) `404.9K 🔥` `NEW`
1. [河南考生散场喜提新手机](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%80%83%E7%94%9F%E6%95%A3%E5%9C%BA%E5%96%9C%E6%8F%90%E6%96%B0%E6%89%8B%E6%9C%BA%23) `404.1K 🔥` `NEW`
1. [温峥嵘没参加浪姐五公小考](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E6%B2%A1%E5%8F%82%E5%8A%A0%E6%B5%AA%E5%A7%90%E4%BA%94%E5%85%AC%E5%B0%8F%E8%80%83%23) `403.2K 🔥` `NEW`
1. [莫离直播弹幕](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%9B%B4%E6%92%AD%E5%BC%B9%E5%B9%95%23) `402.7K 🔥` `NEW`
1. [金价跌成这样你还敢买吗](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E6%88%90%E8%BF%99%E6%A0%B7%E4%BD%A0%E8%BF%98%E6%95%A2%E4%B9%B0%E5%90%97%23) `387.3K 🔥` `NEW`
1. [车圈AI主持首秀](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%9C%88AI%E4%B8%BB%E6%8C%81%E9%A6%96%E7%A7%80%23) `386.7K 🔥` `NEW`
1. [小伙月薪3000签1850万购房合同](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%9C%88%E8%96%AA3000%E7%AD%BE1850%E4%B8%87%E8%B4%AD%E6%88%BF%E5%90%88%E5%90%8C%23) `386.0K 🔥` `NEW`
1. [韦雪整容把脸整歪了 (Wei Xue had plastic surgery and her face became crooked)](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E6%95%B4%E5%AE%B9%E6%8A%8A%E8%84%B8%E6%95%B4%E6%AD%AA%E4%BA%86%23) `334.7K 🔥` `NEW`
1. [一个模仿印度人制作饮料的视频火了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%A8%A1%E4%BB%BF%E5%8D%B0%E5%BA%A6%E4%BA%BA%E5%88%B6%E4%BD%9C%E9%A5%AE%E6%96%99%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `316.1K 🔥` `NEW`
1. [曝张慧雯要回归电影市场了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E6%85%A7%E9%9B%AF%E8%A6%81%E5%9B%9E%E5%BD%92%E7%94%B5%E5%BD%B1%E5%B8%82%E5%9C%BA%E4%BA%86%23) `312.9K 🔥` `NEW`
1. [南京警察学院等冷门专业盘点](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E8%AD%A6%E5%AF%9F%E5%AD%A6%E9%99%A2%E7%AD%89%E5%86%B7%E9%97%A8%E4%B8%93%E4%B8%9A%E7%9B%98%E7%82%B9%23) `306.0K 🔥` `NEW`
1. [当AI大模型长出四个轮子](https://s.weibo.com/weibo?q=%23%E5%BD%93AI%E5%A4%A7%E6%A8%A1%E5%9E%8B%E9%95%BF%E5%87%BA%E5%9B%9B%E4%B8%AA%E8%BD%AE%E5%AD%90%23) `305.9K 🔥` `NEW`
1. [孟羽童向平安高管求职](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%BD%E7%AB%A5%E5%90%91%E5%B9%B3%E5%AE%89%E9%AB%98%E7%AE%A1%E6%B1%82%E8%81%8C%23) `305.8K 🔥` `NEW`
1. [曝郭晓盈骚扰阿丽米热](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E6%99%93%E7%9B%88%E9%AA%9A%E6%89%B0%E9%98%BF%E4%B8%BD%E7%B1%B3%E7%83%AD%23) `286.0K 🔥` `NEW`
1. [女子称移动159元套餐比不上39元套餐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%A7%BB%E5%8A%A8159%E5%85%83%E5%A5%97%E9%A4%90%E6%AF%94%E4%B8%8D%E4%B8%8A39%E5%85%83%E5%A5%97%E9%A4%90%23) `221.3K 🔥` `NEW`
1. [玉树文旅局长赠羊毛毡给杨紫](https://s.weibo.com/weibo?q=%23%E7%8E%89%E6%A0%91%E6%96%87%E6%97%85%E5%B1%80%E9%95%BF%E8%B5%A0%E7%BE%8A%E6%AF%9B%E6%AF%A1%E7%BB%99%E6%9D%A8%E7%B4%AB%23) `217.3K 🔥` `NEW`
1. [张泉灵说AI能读懂社会情绪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E8%AF%B4AI%E8%83%BD%E8%AF%BB%E6%87%82%E7%A4%BE%E4%BC%9A%E6%83%85%E7%BB%AA%23) `216.1K 🔥` `NEW`
1. [叶一茜谈23岁就结婚的原因 (Ye Yiqian talks about why she got married at the age of 23)](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E8%B0%8823%E5%B2%81%E5%B0%B1%E7%BB%93%E5%A9%9A%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `214.3K 🔥` `NEW`
1. [斗鱼嘉年华](https://s.weibo.com/weibo?q=%23%E6%96%97%E9%B1%BC%E5%98%89%E5%B9%B4%E5%8D%8E%23) `192.8K 🔥` `NEW`
1. [RW C位](https://s.weibo.com/weibo?q=%23RW%20C%E4%BD%8D%23) `173.7K 🔥` `NEW`
1. [王传福回应比亚迪股价被低估](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E7%A6%8F%E5%9B%9E%E5%BA%94%E6%AF%94%E4%BA%9A%E8%BF%AA%E8%82%A1%E4%BB%B7%E8%A2%AB%E4%BD%8E%E4%BC%B0%23) `168.8K 🔥` `NEW`
1. [李沁Prada贵气千金](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81Prada%E8%B4%B5%E6%B0%94%E5%8D%83%E9%87%91%23) `168.3K 🔥` `NEW`
1. [李昀锐单手搂腰边走边吻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%8D%95%E6%89%8B%E6%90%82%E8%85%B0%E8%BE%B9%E8%B5%B0%E8%BE%B9%E5%90%BB%23) `774.0K 🔥` `+123%`
1. [高考完的第一个晚上真的会很幸福](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%AE%8C%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%99%9A%E4%B8%8A%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BE%88%E5%B9%B8%E7%A6%8F%23) `712.8K 🔥` `+100%`
1. [原来泡面已经到这种程度了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B3%A1%E9%9D%A2%E5%B7%B2%E7%BB%8F%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `403.8K 🔥` `+68%`
1. [高考生物 (College entrance examination biology)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%94%9F%E7%89%A9%23) `411.7K 🔥`
1. [阿维塔 赛豆汽车](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%20%E8%B5%9B%E8%B1%86%E6%B1%BD%E8%BD%A6%23) `411.1K 🔥`
1. [白鹿路人缘](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `410.2K 🔥`
1. [高考家长疑因公交鸣笛拦车头 (Parents who took the college entrance examination were suspected of blocking the bus because of its horn)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%AE%B6%E9%95%BF%E7%96%91%E5%9B%A0%E5%85%AC%E4%BA%A4%E9%B8%A3%E7%AC%9B%E6%8B%A6%E8%BD%A6%E5%A4%B4%23) `408.6K 🔥`
1. [瑞幸咖啡.skill](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%92%96%E5%95%A1.skill%23) `407.1K 🔥`
1. [爸妈来之后冰箱都老了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E6%9D%A5%E4%B9%8B%E5%90%8E%E5%86%B0%E7%AE%B1%E9%83%BD%E8%80%81%E4%BA%86%23) `394.9K 🔥`
1. [五哈节目组没收克州文旅钱](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E8%8A%82%E7%9B%AE%E7%BB%84%E6%B2%A1%E6%94%B6%E5%85%8B%E5%B7%9E%E6%96%87%E6%97%85%E9%92%B1%23) `387.4K 🔥`
1. [谢娜下沉市场口碑](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `385.3K 🔥`
1. [高考 (college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%23) `168.5K 🔥`
1. [美国曾关闭GPS让中国船失去方向](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9B%BE%E5%85%B3%E9%97%ADGPS%E8%AE%A9%E4%B8%AD%E5%9B%BD%E8%88%B9%E5%A4%B1%E5%8E%BB%E6%96%B9%E5%90%91%23) `385.7K 🔥` `-54%`
1. [口味代表了你的身体状态](https://s.weibo.com/weibo?q=%23%E5%8F%A3%E5%91%B3%E4%BB%A3%E8%A1%A8%E4%BA%86%E4%BD%A0%E7%9A%84%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%23) `221.4K 🔥` `-37%`
1. [浪姐五公小考排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%94%E5%85%AC%E5%B0%8F%E8%80%83%E6%8E%92%E5%90%8D%23) `218.8K 🔥` `-55%`
1. [向太曝刘亦菲妈妈终身未再嫁](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%9B%9D%E5%88%98%E4%BA%A6%E8%8F%B2%E5%A6%88%E5%A6%88%E7%BB%88%E8%BA%AB%E6%9C%AA%E5%86%8D%E5%AB%81%23) `201.2K 🔥` `-41%`
1. [杨幂李现Prada造型](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9D%8E%E7%8E%B0Prada%E9%80%A0%E5%9E%8B%23) `192.6K 🔥` `-46%`

Updated at 2026-06-09 22:01:34

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
