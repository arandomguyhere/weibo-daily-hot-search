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

1. [葡萄牙2比1尼日利亚 (Portugal 2-1 Nigeria)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%992%E6%AF%941%E5%B0%BC%E6%97%A5%E5%88%A9%E4%BA%9A%23) `904.9K 🔥` `NEW`
1. [公安部网安局公布6类高发涉考网络风险](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%83%A8%E7%BD%91%E5%AE%89%E5%B1%80%E5%85%AC%E5%B8%836%E7%B1%BB%E9%AB%98%E5%8F%91%E6%B6%89%E8%80%83%E7%BD%91%E7%BB%9C%E9%A3%8E%E9%99%A9%23) `727.2K 🔥` `NEW`
1. [旅游热度很低却很夯的城市](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E7%83%AD%E5%BA%A6%E5%BE%88%E4%BD%8E%E5%8D%B4%E5%BE%88%E5%A4%AF%E7%9A%84%E5%9F%8E%E5%B8%82%23) `726.0K 🔥` `NEW`
1. [伊朗宣布对所有船只关闭霍尔木兹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%A3%E5%B8%83%E5%AF%B9%E6%89%80%E6%9C%89%E8%88%B9%E5%8F%AA%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `721.1K 🔥` `NEW`
1. [女子举报丈夫与高校处长婚外情](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BE%E6%8A%A5%E4%B8%88%E5%A4%AB%E4%B8%8E%E9%AB%98%E6%A0%A1%E5%A4%84%E9%95%BF%E5%A9%9A%E5%A4%96%E6%83%85%23) `719.1K 🔥` `NEW`
1. [跟着千问高考志愿Agent选志愿](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%8D%83%E9%97%AE%E9%AB%98%E8%80%83%E5%BF%97%E6%84%BFAgent%E9%80%89%E5%BF%97%E6%84%BF%23) `718.2K 🔥` `NEW`
1. [美国通知日本](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%80%9A%E7%9F%A5%E6%97%A5%E6%9C%AC%23) `715.1K 🔥` `NEW`
1. [董宇辉称爆火的4年像活了40年](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E7%A7%B0%E7%88%86%E7%81%AB%E7%9A%844%E5%B9%B4%E5%83%8F%E6%B4%BB%E4%BA%8640%E5%B9%B4%23) `712.8K 🔥` `NEW`
1. [赛力斯和豆包合作造车](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%92%8C%E8%B1%86%E5%8C%85%E5%90%88%E4%BD%9C%E9%80%A0%E8%BD%A6%23) `705.4K 🔥` `NEW`
1. [疑似陈红在线了](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%99%88%E7%BA%A2%E5%9C%A8%E7%BA%BF%E4%BA%86%23) `701.9K 🔥` `NEW`
1. [白鹿 蒙淇淇 (Bailu Meng Qiqi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E8%92%99%E6%B7%87%E6%B7%87%23) `698.5K 🔥` `NEW`
1. [高越说王一博到天了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B6%8A%E8%AF%B4%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%88%B0%E5%A4%A9%E4%BA%86%23) `577.1K 🔥` `NEW`
1. [迪丽热巴第一个合拍是跟陈飞宇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%90%88%E6%8B%8D%E6%98%AF%E8%B7%9F%E9%99%88%E9%A3%9E%E5%AE%87%23) `485.8K 🔥` `NEW`
1. [于正心疼白鹿](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%BF%83%E7%96%BC%E7%99%BD%E9%B9%BF%23) `395.5K 🔥` `NEW`
1. [一起来看流星雨公开选角](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%B5%B7%E6%9D%A5%E7%9C%8B%E6%B5%81%E6%98%9F%E9%9B%A8%E5%85%AC%E5%BC%80%E9%80%89%E8%A7%92%23) `381.2K 🔥` `NEW`
1. [迪丽热巴陈飞宇 情侣手链](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%20%E6%83%85%E4%BE%A3%E6%89%8B%E9%93%BE%23) `366.1K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `358.4K 🔥` `NEW`
1. [鹿晗汪聪合照](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%B1%AA%E8%81%AA%E5%90%88%E7%85%A7%23) `354.8K 🔥` `NEW`
1. [曝百妖谱女主黄多多](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BE%E5%A6%96%E8%B0%B1%E5%A5%B3%E4%B8%BB%E9%BB%84%E5%A4%9A%E5%A4%9A%23) `344.9K 🔥` `NEW`
1. [黄金还有上涨动力吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%98%E6%9C%89%E4%B8%8A%E6%B6%A8%E5%8A%A8%E5%8A%9B%E5%90%97%23) `343.5K 🔥` `NEW`
1. [C罗两次错失单刀 (Cristiano Ronaldo missed two single shots)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B8%A4%E6%AC%A1%E9%94%99%E5%A4%B1%E5%8D%95%E5%88%80%23) `270.4K 🔥` `NEW`
1. [伊朗253艘船沉没54名海员遇难](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97253%E8%89%98%E8%88%B9%E6%B2%89%E6%B2%A154%E5%90%8D%E6%B5%B7%E5%91%98%E9%81%87%E9%9A%BE%23) `230.6K 🔥` `NEW`
1. [马刺vs尼克斯](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E5%B0%BC%E5%85%8B%E6%96%AF%23) `220.1K 🔥` `NEW`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `209.0K 🔥` `NEW`
1. [方博止步资格赛](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E6%AD%A2%E6%AD%A5%E8%B5%84%E6%A0%BC%E8%B5%9B%23) `208.7K 🔥` `NEW`
1. [美半导体板块爆发](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9D%97%E7%88%86%E5%8F%91%23) `189.7K 🔥` `NEW`
1. [冷战7年妻子外出跳交谊舞丈夫破防](https://s.weibo.com/weibo?q=%23%E5%86%B7%E6%88%987%E5%B9%B4%E5%A6%BB%E5%AD%90%E5%A4%96%E5%87%BA%E8%B7%B3%E4%BA%A4%E8%B0%8A%E8%88%9E%E4%B8%88%E5%A4%AB%E7%A0%B4%E9%98%B2%23) `175.1K 🔥` `NEW`
1. [谢娜跳BLACKPINK什么水平](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E8%B7%B3BLACKPINK%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `166.5K 🔥` `NEW`
1. [热带鱼](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B8%A6%E9%B1%BC%23) `162.6K 🔥` `NEW`
1. [周生生老庙金价大跌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%94%9F%E7%94%9F%E8%80%81%E5%BA%99%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%23) `154.6K 🔥` `NEW`
1. [第一个把闪粉粘上照片的人真天才 (The first person to put glitter on a photo was a genius)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8A%8A%E9%97%AA%E7%B2%89%E7%B2%98%E4%B8%8A%E7%85%A7%E7%89%87%E7%9A%84%E4%BA%BA%E7%9C%9F%E5%A4%A9%E6%89%8D%23) `129.8K 🔥` `NEW`
1. [小米澎湃OS4曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%E6%9B%9D%E5%85%89%23) `99.2K 🔥` `NEW`
1. [好多不是歌手的明星也开演唱会 (Many celebrities who are not singers also hold concerts)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E4%B8%8D%E6%98%AF%E6%AD%8C%E6%89%8B%E7%9A%84%E6%98%8E%E6%98%9F%E4%B9%9F%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `1.6M 🔥` `+87%`
1. [于适鸿星尔克足球少年 (Yu Shihongxingerke football boy)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E8%B6%B3%E7%90%83%E5%B0%91%E5%B9%B4%23) `726.4K 🔥` `+171%`
1. [李昀锐邢武趁机索吻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E9%82%A2%E6%AD%A6%E8%B6%81%E6%9C%BA%E7%B4%A2%E5%90%BB%23) `710.7K 🔥` `+496%`
1. [央视曝光色情漫画陷阱](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E8%89%B2%E6%83%85%E6%BC%AB%E7%94%BB%E9%99%B7%E9%98%B1%23) `699.9K 🔥` `+603%`
1. [上班是一场巨大的慢性肥胖](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%98%AF%E4%B8%80%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E6%85%A2%E6%80%A7%E8%82%A5%E8%83%96%23) `518.8K 🔥` `+422%`
1. [肥胖标准的重要更新 (Important update to obesity standards)](https://s.weibo.com/weibo?q=%23%E8%82%A5%E8%83%96%E6%A0%87%E5%87%86%E7%9A%84%E9%87%8D%E8%A6%81%E6%9B%B4%E6%96%B0%23) `398.0K 🔥` `+90%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `371.0K 🔥` `+274%`
1. [山姆打包哥已被行拘](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E6%89%93%E5%8C%85%E5%93%A5%E5%B7%B2%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `250.2K 🔥` `+93%`
1. [挂鹅肉卖鸭肉卖出29万获刑](https://s.weibo.com/weibo?q=%23%E6%8C%82%E9%B9%85%E8%82%89%E5%8D%96%E9%B8%AD%E8%82%89%E5%8D%96%E5%87%BA29%E4%B8%87%E8%8E%B7%E5%88%91%23) `184.5K 🔥` `+86%`
1. [刘宇宁也开始找龚俊了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B9%9F%E5%BC%80%E5%A7%8B%E6%89%BE%E9%BE%9A%E4%BF%8A%E4%BA%86%23) `173.6K 🔥` `+74%`
1. [央视曝光街边免费领东西骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E8%A1%97%E8%BE%B9%E5%85%8D%E8%B4%B9%E9%A2%86%E4%B8%9C%E8%A5%BF%E9%AA%97%E5%B1%80%23) `172.3K 🔥` `+57%`
1. [养了一只配得感很低的小猫 (I got a kitten with a low sense of deservingness.)](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%86%E4%B8%80%E5%8F%AA%E9%85%8D%E5%BE%97%E6%84%9F%E5%BE%88%E4%BD%8E%E7%9A%84%E5%B0%8F%E7%8C%AB%23) `170.7K 🔥` `+31%`
1. [小猫集体哈气猫妈妈以为自己被凶](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E9%9B%86%E4%BD%93%E5%93%88%E6%B0%94%E7%8C%AB%E5%A6%88%E5%A6%88%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%A2%AB%E5%87%B6%23) `131.6K 🔥` `+32%`
1. [谢娜演唱会被抵制的原因](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E6%8A%B5%E5%88%B6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `129.5K 🔥` `+30%`
1. [孩子玩耍弄脏顾客衣服家长买单道歉](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E7%8E%A9%E8%80%8D%E5%BC%84%E8%84%8F%E9%A1%BE%E5%AE%A2%E8%A1%A3%E6%9C%8D%E5%AE%B6%E9%95%BF%E4%B9%B0%E5%8D%95%E9%81%93%E6%AD%89%23) `129.2K 🔥` `+30%`
1. [墨西哥记者称日本队有位强奸犯](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E8%AE%B0%E8%80%85%E7%A7%B0%E6%97%A5%E6%9C%AC%E9%98%9F%E6%9C%89%E4%BD%8D%E5%BC%BA%E5%A5%B8%E7%8A%AF%23) `129.2K 🔥` `+30%`
1. [最节俭的人投胎到我家了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%8A%82%E4%BF%AD%E7%9A%84%E4%BA%BA%E6%8A%95%E8%83%8E%E5%88%B0%E6%88%91%E5%AE%B6%E4%BA%86%23) `127.5K 🔥` `+28%`
1. [张凌赫到底吃了多少短剧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%88%B0%E5%BA%95%E5%90%83%E4%BA%86%E5%A4%9A%E5%B0%91%E7%9F%AD%E5%89%A7%23) `119.3K 🔥`
1. [原来大家都有通勤搭子](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%9C%89%E9%80%9A%E5%8B%A4%E6%90%AD%E5%AD%90%23) `112.4K 🔥`
1. [换iPhone的理由够了吗](https://s.weibo.com/weibo?q=%23%E6%8D%A2iPhone%E7%9A%84%E7%90%86%E7%94%B1%E5%A4%9F%E4%BA%86%E5%90%97%23) `97.8K 🔥`

Updated at 2026-06-11 08:19:27

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
