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

1. [下周你好星期六快本味 (Hello next week, Saturday Kuaibenwei)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%91%A8%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E5%BF%AB%E6%9C%AC%E5%91%B3%23) `853.8K 🔥` `NEW`
1. [谁是白月光一眼就看出来了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%98%AF%E7%99%BD%E6%9C%88%E5%85%89%E4%B8%80%E7%9C%BC%E5%B0%B1%E7%9C%8B%E5%87%BA%E6%9D%A5%E4%BA%86%23) `689.8K 🔥` `NEW`
1. [成龙求张杰以后别唱他的歌](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E6%B1%82%E5%BC%A0%E6%9D%B0%E4%BB%A5%E5%90%8E%E5%88%AB%E5%94%B1%E4%BB%96%E7%9A%84%E6%AD%8C%23) `679.2K 🔥` `NEW`
1. [未竟之约](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E7%AB%9F%E4%B9%8B%E7%BA%A6%23) `565.1K 🔥` `NEW`
1. [神仙肉男主人设](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%E7%94%B7%E4%B8%BB%E4%BA%BA%E8%AE%BE%23) `533.1K 🔥` `NEW`
1. [14岁以下小朋友喜提3天小长假](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E4%BB%A5%E4%B8%8B%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%96%9C%E6%8F%903%E5%A4%A9%E5%B0%8F%E9%95%BF%E5%81%87%23) `499.8K 🔥` `NEW`
1. [马刺vs雷霆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E9%9B%B7%E9%9C%86%23) `464.5K 🔥` `NEW`
1. [姆巴佩欧冠金靴](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%AC%A7%E5%86%A0%E9%87%91%E9%9D%B4%23) `457.3K 🔥` `NEW`
1. [陈丽君被打码品牌道歉为何难平众怒](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E8%A2%AB%E6%89%93%E7%A0%81%E5%93%81%E7%89%8C%E9%81%93%E6%AD%89%E4%B8%BA%E4%BD%95%E9%9A%BE%E5%B9%B3%E4%BC%97%E6%80%92%23) `454.9K 🔥` `NEW`
1. [王菲无名指疑似戴了钻戒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%97%A0%E5%90%8D%E6%8C%87%E7%96%91%E4%BC%BC%E6%88%B4%E4%BA%86%E9%92%BB%E6%88%92%23) `433.8K 🔥` `NEW`
1. [老人买基金亏70多万银行承担70% (An elderly person loses more than 700,000 yuan when buying a fund, and the bank bears 70% of it)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B9%B0%E5%9F%BA%E9%87%91%E4%BA%8F70%E5%A4%9A%E4%B8%87%E9%93%B6%E8%A1%8C%E6%89%BF%E6%8B%8570%25%23) `426.8K 🔥` `NEW`
1. [陈星旭王玉雯一起去看欧冠了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%80%E8%B5%B7%E5%8E%BB%E7%9C%8B%E6%AC%A7%E5%86%A0%E4%BA%86%23) `402.0K 🔥` `NEW`
1. [王安宇见面会哭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%93%AD%E4%BA%86%23) `262.5K 🔥` `NEW`
1. [樊振东vs格拉斯门科](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E6%A0%BC%E6%8B%89%E6%96%AF%E9%97%A8%E7%A7%91%23) `236.4K 🔥` `NEW`
1. [伊朗称全面管理霍尔木兹海峡航运](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%85%A8%E9%9D%A2%E7%AE%A1%E7%90%86%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%88%AA%E8%BF%90%23) `235.9K 🔥` `NEW`
1. [薛小婉任权复合了](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%B0%8F%E5%A9%89%E4%BB%BB%E6%9D%83%E5%A4%8D%E5%90%88%E4%BA%86%23) `235.1K 🔥` `NEW`
1. [结婚22年两儿非亲生当事人再发声](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A22%E5%B9%B4%E4%B8%A4%E5%84%BF%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%86%8D%E5%8F%91%E5%A3%B0%23) `229.4K 🔥` `NEW`
1. [特别适合喝咖啡的4类人](https://s.weibo.com/weibo?q=%23%E7%89%B9%E5%88%AB%E9%80%82%E5%90%88%E5%96%9D%E5%92%96%E5%95%A1%E7%9A%844%E7%B1%BB%E4%BA%BA%23) `228.9K 🔥` `NEW`
1. [蔡徐坤脸颊比心](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E8%84%B8%E9%A2%8A%E6%AF%94%E5%BF%83%23) `227.8K 🔥` `NEW`
1. [玲花演唱会吃完虫子吃柳絮](https://s.weibo.com/weibo?q=%23%E7%8E%B2%E8%8A%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%83%E5%AE%8C%E8%99%AB%E5%AD%90%E5%90%83%E6%9F%B3%E7%B5%AE%23) `225.9K 🔥` `NEW`
1. [时代峰峻公关文案 (Times Fengjun Public Relations Copywriting)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%85%AC%E5%85%B3%E6%96%87%E6%A1%88%23) `225.6K 🔥` `NEW`
1. [普京称已将残骸交给美国鉴定](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E5%B7%B2%E5%B0%86%E6%AE%8B%E9%AA%B8%E4%BA%A4%E7%BB%99%E7%BE%8E%E5%9B%BD%E9%89%B4%E5%AE%9A%23) `224.3K 🔥` `NEW`
1. [窦靖童和李宇春撞歌](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%92%8C%E6%9D%8E%E5%AE%87%E6%98%A5%E6%92%9E%E6%AD%8C%23) `222.9K 🔥` `NEW`
1. [长期不吃晚饭会变成什么样](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%90%83%E6%99%9A%E9%A5%AD%E4%BC%9A%E5%8F%98%E6%88%90%E4%BB%80%E4%B9%88%E6%A0%B7%23) `216.1K 🔥` `NEW`
1. [樊振东戴发带训练](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%88%B4%E5%8F%91%E5%B8%A6%E8%AE%AD%E7%BB%83%23) `214.9K 🔥` `NEW`
1. [和猫住还是和狐狸住我还是分得清的](https://s.weibo.com/weibo?q=%23%E5%92%8C%E7%8C%AB%E4%BD%8F%E8%BF%98%E6%98%AF%E5%92%8C%E7%8B%90%E7%8B%B8%E4%BD%8F%E6%88%91%E8%BF%98%E6%98%AF%E5%88%86%E5%BE%97%E6%B8%85%E7%9A%84%23) `210.7K 🔥` `NEW`
1. [某国潜艇兵跑步戴智能手表引发泄密](https://s.weibo.com/weibo?q=%23%E6%9F%90%E5%9B%BD%E6%BD%9C%E8%89%87%E5%85%B5%E8%B7%91%E6%AD%A5%E6%88%B4%E6%99%BA%E8%83%BD%E6%89%8B%E8%A1%A8%E5%BC%95%E5%8F%91%E6%B3%84%E5%AF%86%23) `209.8K 🔥` `NEW`
1. [关晓彤震惊李昀锐骗此沙](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E9%9C%87%E6%83%8A%E6%9D%8E%E6%98%80%E9%94%90%E9%AA%97%E6%AD%A4%E6%B2%99%23) `207.8K 🔥` `NEW`
1. [生命树不该被谣言掩盖实力光芒](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E4%B8%8D%E8%AF%A5%E8%A2%AB%E8%B0%A3%E8%A8%80%E6%8E%A9%E7%9B%96%E5%AE%9E%E5%8A%9B%E5%85%89%E8%8A%92%23) `206.7K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `205.4K 🔥` `NEW`
1. [大爷回应娶小24岁女子2年便闹离婚 (The uncle responded that he got divorced after marrying a woman 24 years younger than him after 2 years)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%9B%9E%E5%BA%94%E5%A8%B6%E5%B0%8F24%E5%B2%81%E5%A5%B3%E5%AD%902%E5%B9%B4%E4%BE%BF%E9%97%B9%E7%A6%BB%E5%A9%9A%23) `203.4K 🔥` `NEW`
1. [登贝莱受伤](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E5%8F%97%E4%BC%A4%23) `201.1K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `1.2M 🔥` `+888%`
1. [在上海找到创作主场](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8A%E6%B5%B7%E6%89%BE%E5%88%B0%E5%88%9B%E4%BD%9C%E4%B8%BB%E5%9C%BA%23) `698.8K 🔥` `+63%`
1. [微信几乎把每个人捆绑在线上 (WeChat ties almost everyone online)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `399.2K 🔥` `+225%`
1. [刘诗诗 从此不敢见观音 (Liu Shishi never dared to see Guanyin again)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E4%BB%8E%E6%AD%A4%E4%B8%8D%E6%95%A2%E8%A7%81%E8%A7%82%E9%9F%B3%23) `239.6K 🔥` `+96%`
1. [石蕊 肖旭 (Litmus Xiao Xu)](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E8%95%8A%20%E8%82%96%E6%97%AD%23) `233.0K 🔥` `+98%`
1. [姆巴佩](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `232.3K 🔥` `+89%`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `220.8K 🔥` `+90%`
1. [李昀锐一把就把关晓彤抱起来了 (Li Yunrui picked up Guan Xiaotong in one fell swoop)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%80%E6%8A%8A%E5%B0%B1%E6%8A%8A%E5%85%B3%E6%99%93%E5%BD%A4%E6%8A%B1%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `219.5K 🔥` `+93%`
1. [欧冠决赛 (Champions League final)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `217.6K 🔥` `+79%`
1. [这个时间点入睡才是真早睡 (Falling asleep at this time is really early.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%97%B6%E9%97%B4%E7%82%B9%E5%85%A5%E7%9D%A1%E6%89%8D%E6%98%AF%E7%9C%9F%E6%97%A9%E7%9D%A1%23) `214.1K 🔥` `+83%`
1. [用AI整理会议记录导致泄密](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E6%95%B4%E7%90%86%E4%BC%9A%E8%AE%AE%E8%AE%B0%E5%BD%95%E5%AF%BC%E8%87%B4%E6%B3%84%E5%AF%86%23) `212.4K 🔥` `+88%`
1. [10月大婴儿喝稀粥吃肉末3个月瘦3斤](https://s.weibo.com/weibo?q=%2310%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E5%96%9D%E7%A8%80%E7%B2%A5%E5%90%83%E8%82%89%E6%9C%AB3%E4%B8%AA%E6%9C%88%E7%98%A63%E6%96%A4%23) `208.9K 🔥` `+83%`
1. [网友阻止印度游客在水源区洗澡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%98%BB%E6%AD%A2%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B0%B4%E6%BA%90%E5%8C%BA%E6%B4%97%E6%BE%A1%23) `203.9K 🔥` `+69%`
1. [巴黎圣日耳曼5比4阿森纳](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC5%E6%AF%944%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `578.2K 🔥`
1. [欧冠决赛 难看 (Champions League final ugly)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%20%E9%9A%BE%E7%9C%8B%23) `302.7K 🔥`
1. [王嘉尔出发参加何猷君奚梦瑶婚礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%87%BA%E5%8F%91%E5%8F%82%E5%8A%A0%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%23) `230.9K 🔥`
1. [鸟巢偶遇王菲看谢霆锋演唱会 (Encountering Faye Wong at the Bird's Nest watching Nicholas Tse's concert)](https://s.weibo.com/weibo?q=%23%E9%B8%9F%E5%B7%A2%E5%81%B6%E9%81%87%E7%8E%8B%E8%8F%B2%E7%9C%8B%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `221.8K 🔥`
1. [巴黎卫冕欧冠冠军 (Paris retains Champions League title)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%8D%AB%E5%86%95%E6%AC%A7%E5%86%A0%E5%86%A0%E5%86%9B%23) `217.8K 🔥` `-71%`
1. [潘宥诚主页里都是虞书欣在帮他宣传](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%AE%A5%E8%AF%9A%E4%B8%BB%E9%A1%B5%E9%87%8C%E9%83%BD%E6%98%AF%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9C%A8%E5%B8%AE%E4%BB%96%E5%AE%A3%E4%BC%A0%23) `201.8K 🔥` `-21%`

Updated at 2026-05-31 09:32:33

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
