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

1. [欧冠决赛 (Champions League final)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `1.5M 🔥` `NEW`
1. [张远演唱会只打高端浪漫局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%AA%E6%89%93%E9%AB%98%E7%AB%AF%E6%B5%AA%E6%BC%AB%E5%B1%80%23) `591.4K 🔥` `NEW`
1. [夫妻上班途中突遇2米长眼镜王蛇](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%B8%8A%E7%8F%AD%E9%80%94%E4%B8%AD%E7%AA%81%E9%81%872%E7%B1%B3%E9%95%BF%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87%23) `449.7K 🔥` `NEW`
1. [宋亚轩又输给了李宇春](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8F%88%E8%BE%93%E7%BB%99%E4%BA%86%E6%9D%8E%E5%AE%87%E6%98%A5%23) `355.0K 🔥` `NEW`
1. [巴黎圣日耳曼vs阿森纳](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BCvs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `276.7K 🔥` `NEW`
1. [王安宇见面会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `272.5K 🔥` `NEW`
1. [石蕊 肖旭](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E8%95%8A%20%E8%82%96%E6%97%AD%23) `268.4K 🔥` `NEW`
1. [李昀锐一把就把关晓彤抱起来了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%80%E6%8A%8A%E5%B0%B1%E6%8A%8A%E5%85%B3%E6%99%93%E5%BD%A4%E6%8A%B1%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `262.6K 🔥` `NEW`
1. [10月大婴儿喝稀粥吃肉末3个月瘦3斤](https://s.weibo.com/weibo?q=%2310%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E5%96%9D%E7%A8%80%E7%B2%A5%E5%90%83%E8%82%89%E6%9C%AB3%E4%B8%AA%E6%9C%88%E7%98%A63%E6%96%A4%23) `259.5K 🔥` `NEW`
1. [菲防长绕后厨躲避中方记者](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E9%98%B2%E9%95%BF%E7%BB%95%E5%90%8E%E5%8E%A8%E8%BA%B2%E9%81%BF%E4%B8%AD%E6%96%B9%E8%AE%B0%E8%80%85%23) `255.0K 🔥` `NEW`
1. [陈小春发言宋亚轩又笑晕了 (Jordan Chan spoke and Song Yaxuan fainted with laughter again)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%8F%91%E8%A8%80%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8F%88%E7%AC%91%E6%99%95%E4%BA%86%23) `254.6K 🔥` `NEW`
1. [严浩翔rap](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94rap%23) `242.4K 🔥` `NEW`
1. [刘耀文高会](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E9%AB%98%E4%BC%9A%23) `233.2K 🔥` `NEW`
1. [阿森纳首发](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E9%A6%96%E5%8F%91%23) `176.0K 🔥` `NEW`
1. [shanks评论cube](https://s.weibo.com/weibo?q=%23shanks%E8%AF%84%E8%AE%BAcube%23) `168.1K 🔥` `NEW`
1. [BLG跌入败者组](https://s.weibo.com/weibo?q=%23BLG%E8%B7%8C%E5%85%A5%E8%B4%A5%E8%80%85%E7%BB%84%23) `157.2K 🔥` `NEW`
1. [谢霆锋鸟巢顶级号召力](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E9%B8%9F%E5%B7%A2%E9%A1%B6%E7%BA%A7%E5%8F%B7%E5%8F%AC%E5%8A%9B%23) `139.0K 🔥` `NEW`
1. [用豆包免费学英语的两个方法](https://s.weibo.com/weibo?q=%23%E7%94%A8%E8%B1%86%E5%8C%85%E5%85%8D%E8%B4%B9%E5%AD%A6%E8%8B%B1%E8%AF%AD%E7%9A%84%E4%B8%A4%E4%B8%AA%E6%96%B9%E6%B3%95%23) `130.8K 🔥` `NEW`
1. [程潇沙一汀内娱cp必吃榜上新了](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E6%B2%99%E4%B8%80%E6%B1%80%E5%86%85%E5%A8%B1cp%E5%BF%85%E5%90%83%E6%A6%9C%E4%B8%8A%E6%96%B0%E4%BA%86%23) `128.8K 🔥` `NEW`
1. [光模块一哥中际旭创严正声明](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%A8%A1%E5%9D%97%E4%B8%80%E5%93%A5%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `117.7K 🔥` `NEW`
1. [用AI整理会议记录导致泄密 (Using AI to organize meeting records leads to leaks)](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E6%95%B4%E7%90%86%E4%BC%9A%E8%AE%AE%E8%AE%B0%E5%BD%95%E5%AF%BC%E8%87%B4%E6%B3%84%E5%AF%86%23) `112.6K 🔥` `NEW`
1. [万花世界回应](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%9B%9E%E5%BA%94%23) `874.1K 🔥` `+309%`
1. [潘宥诚主页里都是虞书欣在帮他宣传](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%AE%A5%E8%AF%9A%E4%B8%BB%E9%A1%B5%E9%87%8C%E9%83%BD%E6%98%AF%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9C%A8%E5%B8%AE%E4%BB%96%E5%AE%A3%E4%BC%A0%23) `361.6K 🔥` `+42%`
1. [十二星座6月月运](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A76%E6%9C%88%E6%9C%88%E8%BF%90%23) `340.3K 🔥` `+21%`
1. [中俄等6国投弃权票](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E7%AD%896%E5%9B%BD%E6%8A%95%E5%BC%83%E6%9D%83%E7%A5%A8%23) `268.9K 🔥` `+101%`
1. [这样的衣服才配预售](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E8%A1%A3%E6%9C%8D%E6%89%8D%E9%85%8D%E9%A2%84%E5%94%AE%23) `242.6K 🔥` `+21%`
1. [今晚8点上京东 百亿补贴低至1折](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%99%9A8%E7%82%B9%E4%B8%8A%E4%BA%AC%E4%B8%9C%20%E7%99%BE%E4%BA%BF%E8%A1%A5%E8%B4%B4%E4%BD%8E%E8%87%B31%E6%8A%98%23) `706.8K 🔥`
1. [网友阻止印度游客在水源区洗澡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%98%BB%E6%AD%A2%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B0%B4%E6%BA%90%E5%8C%BA%E6%B4%97%E6%BE%A1%23) `579.9K 🔥`
1. [王嘉尔出发参加何猷君奚梦瑶婚礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%87%BA%E5%8F%91%E5%8F%82%E5%8A%A0%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%23) `268.4K 🔥`
1. [大爷协议娶小24岁女子2年便闹离婚](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%8D%8F%E8%AE%AE%E5%A8%B6%E5%B0%8F24%E5%B2%81%E5%A5%B3%E5%AD%902%E5%B9%B4%E4%BE%BF%E9%97%B9%E7%A6%BB%E5%A9%9A%23) `267.4K 🔥`
1. [花间令2.0 (Huajianling 2.0)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E9%97%B4%E4%BB%A42.0%23) `263.8K 🔥`
1. [念相思开机 (Thinking of lovesickness starts up)](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%BC%80%E6%9C%BA%23) `258.5K 🔥`
1. [在上海找到创作主场 (Find your creative home in Shanghai)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8A%E6%B5%B7%E6%89%BE%E5%88%B0%E5%88%9B%E4%BD%9C%E4%B8%BB%E5%9C%BA%23) `716.8K 🔥` `-34%`
1. [鸟巢偶遇王菲看谢霆锋演唱会](https://s.weibo.com/weibo?q=%23%E9%B8%9F%E5%B7%A2%E5%81%B6%E9%81%87%E7%8E%8B%E8%8F%B2%E7%9C%8B%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `685.5K 🔥` `-33%`
1. [麦当劳汉堡缩小比例](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E6%B1%89%E5%A0%A1%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%23) `608.6K 🔥` `-23%`
1. [徐志胜在桃花坞聊沈月王鹤棣 (Xu Zhisheng chats with Shen Yue and Wang Hedi in Taohuawu)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%9C%A8%E6%A1%83%E8%8A%B1%E5%9D%9E%E8%81%8A%E6%B2%88%E6%9C%88%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `598.1K 🔥` `-38%`
1. [牙齿和情绪的关系](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BD%BF%E5%92%8C%E6%83%85%E7%BB%AA%E7%9A%84%E5%85%B3%E7%B3%BB%23) `589.3K 🔥` `-42%`
1. [对早睡起了敬意 (Respect for going to bed early)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%97%A9%E7%9D%A1%E8%B5%B7%E4%BA%86%E6%95%AC%E6%84%8F%23) `365.5K 🔥` `-37%`
1. [微信几乎把每个人捆绑在线上](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `363.5K 🔥` `-39%`
1. [刘诗诗 从此不敢见观音](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E4%BB%8E%E6%AD%A4%E4%B8%8D%E6%95%A2%E8%A7%81%E8%A7%82%E9%9F%B3%23) `363.4K 🔥` `-40%`
1. [中山大学通报论文学术不端](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E8%AE%BA%E6%96%87%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%23) `356.7K 🔥` `-69%`
1. [WE以下克上BLG](https://s.weibo.com/weibo?q=%23WE%E4%BB%A5%E4%B8%8B%E5%85%8B%E4%B8%8ABLG%23) `307.6K 🔥` `-49%`
1. [她家长真去找你你又不敢见](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E5%AE%B6%E9%95%BF%E7%9C%9F%E5%8E%BB%E6%89%BE%E4%BD%A0%E4%BD%A0%E5%8F%88%E4%B8%8D%E6%95%A2%E8%A7%81%23) `255.4K 🔥` `-58%`
1. [南开大学通报论文数据存疑问题 (Nankai University reports questionable issues with paper data)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E8%AE%BA%E6%96%87%E6%95%B0%E6%8D%AE%E5%AD%98%E7%96%91%E9%97%AE%E9%A2%98%23) `254.6K 🔥` `-78%`
1. [万花世界原主换了一个人演 (The original host of Wanhua World has been replaced by another person)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8E%9F%E4%B8%BB%E6%8D%A2%E4%BA%86%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%BC%94%23) `244.9K 🔥` `-40%`
1. [攻玉](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%23) `176.0K 🔥` `-51%`
1. [台湾网红馆长撞脸三星堆文物 (Taiwan internet celebrity curator confronts Sanxingdui cultural relics)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%BD%91%E7%BA%A2%E9%A6%86%E9%95%BF%E6%92%9E%E8%84%B8%E4%B8%89%E6%98%9F%E5%A0%86%E6%96%87%E7%89%A9%23) `171.9K 🔥` `-42%`
1. [张维威回应隐瞒肖旭恋情 (Zhang Weiwei responded to concealing Xiao Xu’s relationship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E5%A8%81%E5%9B%9E%E5%BA%94%E9%9A%90%E7%9E%92%E8%82%96%E6%97%AD%E6%81%8B%E6%83%85%23) `150.6K 🔥` `-26%`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `128.7K 🔥` `-68%`
1. [BLG对战WE](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98WE%23) `128.3K 🔥` `-80%`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `127.6K 🔥` `-37%`
1. [在京东买新手机省了2000](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%BA%AC%E4%B8%9C%E4%B9%B0%E6%96%B0%E6%89%8B%E6%9C%BA%E7%9C%81%E4%BA%862000%23) `122.8K 🔥` `-38%`

Updated at 2026-05-30 23:45:38

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
