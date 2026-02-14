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

1. [团圆是最好的新年礼物 (Reunion is the best New Year gift)](https://s.weibo.com/weibo?q=%23%E5%9B%A2%E5%9C%86%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B0%E5%B9%B4%E7%A4%BC%E7%89%A9%23) `636.5K 🔥` `NEW`
1. [吃席偶遇丁程鑫](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%B8%AD%E5%81%B6%E9%81%87%E4%B8%81%E7%A8%8B%E9%91%AB%23) `110.6K 🔥` `NEW`
1. [12万买矮马租给游乐场40天回本](https://s.weibo.com/weibo?q=%2312%E4%B8%87%E4%B9%B0%E7%9F%AE%E9%A9%AC%E7%A7%9F%E7%BB%99%E6%B8%B8%E4%B9%90%E5%9C%BA40%E5%A4%A9%E5%9B%9E%E6%9C%AC%23) `95.5K 🔥` `NEW`
1. [羽生结弦索契冬奥会夺金12周年](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E7%B4%A2%E5%A5%91%E5%86%AC%E5%A5%A5%E4%BC%9A%E5%A4%BA%E9%87%9112%E5%91%A8%E5%B9%B4%23) `94.3K 🔥` `NEW`
1. [金靖 你为什么要来衡量我](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%20%E4%BD%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%9D%A5%E8%A1%A1%E9%87%8F%E6%88%91%23) `89.5K 🔥` `NEW`
1. [小酒窝做了长美甲](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%81%9A%E4%BA%86%E9%95%BF%E7%BE%8E%E7%94%B2%23) `69.6K 🔥` `NEW`
1. [刘耀文张真源马场邻居](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%BC%A0%E7%9C%9F%E6%BA%90%E9%A9%AC%E5%9C%BA%E9%82%BB%E5%B1%85%23) `68.1K 🔥` `NEW`
1. [一诺评论暖阳这我是真支持](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%AF%84%E8%AE%BA%E6%9A%96%E9%98%B3%E8%BF%99%E6%88%91%E6%98%AF%E7%9C%9F%E6%94%AF%E6%8C%81%23) `67.1K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `65.7K 🔥` `NEW`
1. [王鹤棣NBA全明星总得分30分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3NBA%E5%85%A8%E6%98%8E%E6%98%9F%E6%80%BB%E5%BE%97%E5%88%8630%E5%88%86%23) `64.3K 🔥` `NEW`
1. [檀健次卢昱晓剧宣 (Tan Jianci and Lu Yuxiao drama announcement)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E5%89%A7%E5%AE%A3%23) `217.0K 🔥` `+174%`
1. [熊大熊二回应资源分配不均](https://s.weibo.com/weibo?q=%23%E7%86%8A%E5%A4%A7%E7%86%8A%E4%BA%8C%E5%9B%9E%E5%BA%94%E8%B5%84%E6%BA%90%E5%88%86%E9%85%8D%E4%B8%8D%E5%9D%87%23) `83.5K 🔥` `+29%`
1. [红包](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `1.1M 🔥`
1. [微信回应红包手气最佳攻略](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%BA%94%E7%BA%A2%E5%8C%85%E6%89%8B%E6%B0%94%E6%9C%80%E4%BD%B3%E6%94%BB%E7%95%A5%23) `807.3K 🔥`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `220.6K 🔥`
1. [突然发现朋友圈没人晒花了 (Suddenly I found that no one in the circle of friends was showing off their flowers.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E6%99%92%E8%8A%B1%E4%BA%86%23) `185.8K 🔥`
1. [75岁老人祭祖烧纸引发大火获刑](https://s.weibo.com/weibo?q=%2375%E5%B2%81%E8%80%81%E4%BA%BA%E7%A5%AD%E7%A5%96%E7%83%A7%E7%BA%B8%E5%BC%95%E5%8F%91%E5%A4%A7%E7%81%AB%E8%8E%B7%E5%88%91%23) `144.4K 🔥`
1. [保姆辞职前偷卖雇主24万黄金](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E8%BE%9E%E8%81%8C%E5%89%8D%E5%81%B7%E5%8D%96%E9%9B%87%E4%B8%BB24%E4%B8%87%E9%BB%84%E9%87%91%23) `138.7K 🔥`
1. [人民大会堂偶遇易烊千玺](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E5%81%B6%E9%81%87%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `121.9K 🔥`
1. [暖阳发文](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%E5%8F%91%E6%96%87%23) `117.1K 🔥`
1. [宋轶无名指戴了戒指 (Song Yi wears a ring on her ring finger)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E6%97%A0%E5%90%8D%E6%8C%87%E6%88%B4%E4%BA%86%E6%88%92%E6%8C%87%23) `86.9K 🔥`
1. [福建一彩民15元中奖6022万](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E4%B8%80%E5%BD%A9%E6%B0%9115%E5%85%83%E4%B8%AD%E5%A5%966022%E4%B8%87%23) `86.3K 🔥`
1. [王艺瑾回应整容争议 (Wang Yijin responds to plastic surgery controversy)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E7%91%BE%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%E4%BA%89%E8%AE%AE%23) `84.6K 🔥`
1. [求婚是件很私密的事](https://s.weibo.com/weibo?q=%23%E6%B1%82%E5%A9%9A%E6%98%AF%E4%BB%B6%E5%BE%88%E7%A7%81%E5%AF%86%E7%9A%84%E4%BA%8B%23) `84.5K 🔥`
1. [马龙滑雪乌龟都摔懵了 (Ma Long skied and the turtle was stunned)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E6%BB%91%E9%9B%AA%E4%B9%8C%E9%BE%9F%E9%83%BD%E6%91%94%E6%87%B5%E4%BA%86%23) `82.3K 🔥`
1. [Jennie高智感妈咪](https://s.weibo.com/weibo?q=%23Jennie%E9%AB%98%E6%99%BA%E6%84%9F%E5%A6%88%E5%92%AA%23) `67.7K 🔥`
1. [丞磊 谁是我的情人](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%20%E8%B0%81%E6%98%AF%E6%88%91%E7%9A%84%E6%83%85%E4%BA%BA%23) `64.7K 🔥`
1. [春晚义乌分会场倒计时 (Countdown to the Spring Festival Gala Yiwu Branch Venue)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E4%B9%89%E4%B9%8C%E5%88%86%E4%BC%9A%E5%9C%BA%E5%80%92%E8%AE%A1%E6%97%B6%23) `183.3K 🔥` `-49%`
1. [看电影的快乐正全面升级 (The joy of watching movies is being fully upgraded)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%94%B5%E5%BD%B1%E7%9A%84%E5%BF%AB%E4%B9%90%E6%AD%A3%E5%85%A8%E9%9D%A2%E5%8D%87%E7%BA%A7%23) `131.6K 🔥` `-80%`
1. [生命树豆瓣开分8.1 (The Tree of Life Douban score is 8.1)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%868.1%23) `125.1K 🔥` `-22%`
1. [陈天润姚昱辰合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A4%A9%E6%B6%A6%E5%A7%9A%E6%98%B1%E8%BE%B0%E5%90%88%E7%85%A7%23) `102.5K 🔥` `-23%`
1. [百果园回应一根甘蔗卖87元](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%9E%9C%E5%9B%AD%E5%9B%9E%E5%BA%94%E4%B8%80%E6%A0%B9%E7%94%98%E8%94%97%E5%8D%9687%E5%85%83%23) `100.2K 🔥` `-26%`
1. [奶奶笑了半天才开始充电](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E5%BC%80%E5%A7%8B%E5%85%85%E7%94%B5%23) `96.6K 🔥` `-35%`
1. [网友偶遇了易烊千玺](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E4%BA%86%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `95.8K 🔥` `-31%`
1. [刘亦菲LVMonogram大片](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2LVMonogram%E5%A4%A7%E7%89%87%23) `93.4K 🔥` `-26%`
1. [宋轶好刚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A5%BD%E5%88%9A%23) `92.9K 🔥` `-24%`
1. [泰国女校长当人质换学生不幸身亡](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%A0%A1%E9%95%BF%E5%BD%93%E4%BA%BA%E8%B4%A8%E6%8D%A2%E5%AD%A6%E7%94%9F%E4%B8%8D%E5%B9%B8%E8%BA%AB%E4%BA%A1%23) `91.9K 🔥` `-30%`
1. [黄子韬借综艺扇了徐艺洋 (Huang Zitao used a variety show to slap Xu Yiyang)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%80%9F%E7%BB%BC%E8%89%BA%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `91.3K 🔥` `-37%`
1. [中戏 主动投案 (Chinese drama voluntarily surrenders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%20%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `90.5K 🔥` `-30%`
1. [陈妍希和儿子分开过年 (Chen Yanxi and her son celebrate the New Year separately)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%92%8C%E5%84%BF%E5%AD%90%E5%88%86%E5%BC%80%E8%BF%87%E5%B9%B4%23) `88.8K 🔥` `-26%`
1. [56岁阿姨离婚后10年游43国 (56-year-old aunt traveled to 43 countries in 10 years after divorce)](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%98%BF%E5%A7%A8%E7%A6%BB%E5%A9%9A%E5%90%8E10%E5%B9%B4%E6%B8%B843%E5%9B%BD%23) `87.3K 🔥` `-26%`
1. [刘少昂孙龙林孝埈1500米冲金 (Liu Shao'ang, Sun Long and Lin Xiaoquan hit the gold medal at 1,500 meters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E5%AD%99%E9%BE%99%E6%9E%97%E5%AD%9D%E5%9F%881500%E7%B1%B3%E5%86%B2%E9%87%91%23) `84.6K 🔥` `-56%`
1. [邵子恒邵子娇 内娱颜霸双胞胎兄妹](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%AD%90%E6%81%92%E9%82%B5%E5%AD%90%E5%A8%87%20%E5%86%85%E5%A8%B1%E9%A2%9C%E9%9C%B8%E5%8F%8C%E8%83%9E%E8%83%8E%E5%85%84%E5%A6%B9%23) `84.5K 🔥` `-27%`
1. [男子12万买矮马日租金3000](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9012%E4%B8%87%E4%B9%B0%E7%9F%AE%E9%A9%AC%E6%97%A5%E7%A7%9F%E9%87%913000%23) `82.6K 🔥` `-33%`
1. [金虔佑 霸凌工作人员](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%99%94%E4%BD%91%20%E9%9C%B8%E5%87%8C%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%23) `82.0K 🔥` `-21%`
1. [侯明昊艾米搂腰共舞 (Hou Minghao and Amy dance together)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%89%BE%E7%B1%B3%E6%90%82%E8%85%B0%E5%85%B1%E8%88%9E%23) `73.6K 🔥` `-51%`
1. [一阳 (Yiyang)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%98%B3%23) `68.0K 🔥` `-36%`
1. [岳云鹏蔡文静亲密戏](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E8%94%A1%E6%96%87%E9%9D%99%E4%BA%B2%E5%AF%86%E6%88%8F%23) `68.0K 🔥` `-41%`
1. [杨幂挑了个最老实的马嘉祺](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8C%91%E4%BA%86%E4%B8%AA%E6%9C%80%E8%80%81%E5%AE%9E%E7%9A%84%E9%A9%AC%E5%98%89%E7%A5%BA%23) `64.8K 🔥` `-22%`
1. [产检正常生出畸形儿医院被罚2.5万](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E6%AD%A3%E5%B8%B8%E7%94%9F%E5%87%BA%E7%95%B8%E5%BD%A2%E5%84%BF%E5%8C%BB%E9%99%A2%E8%A2%AB%E7%BD%9A2.5%E4%B8%87%23) `64.7K 🔥` `-33%`
1. [大雨暴雪即将来袭](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%9B%A8%E6%9A%B4%E9%9B%AA%E5%8D%B3%E5%B0%86%E6%9D%A5%E8%A2%AD%23) `64.1K 🔥` `-39%`

Updated at 2026-02-14 16:58:13

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
