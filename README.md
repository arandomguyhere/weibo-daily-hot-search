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

1. [乘风2026一下来了33位姐姐 (33 sisters came to Chengfeng 2026)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%80%E4%B8%8B%E6%9D%A5%E4%BA%8633%E4%BD%8D%E5%A7%90%E5%A7%90%23) `1.0M 🔥` `NEW`
1. [老头乐向小米汽车致歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%B4%E4%B9%90%E5%90%91%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E8%87%B4%E6%AD%89%23) `763.7K 🔥` `NEW`
1. [罗技中国授权运营方分公司均已注销](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E4%B8%AD%E5%9B%BD%E6%8E%88%E6%9D%83%E8%BF%90%E8%90%A5%E6%96%B9%E5%88%86%E5%85%AC%E5%8F%B8%E5%9D%87%E5%B7%B2%E6%B3%A8%E9%94%80%23) `285.4K 🔥` `NEW`
1. [女子不听提醒试戴玉镯摔出裂纹](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E5%90%AC%E6%8F%90%E9%86%92%E8%AF%95%E6%88%B4%E7%8E%89%E9%95%AF%E6%91%94%E5%87%BA%E8%A3%82%E7%BA%B9%23) `227.8K 🔥` `NEW`
1. [巴曙松涉嫌经济类犯罪金额巨大](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%9B%99%E6%9D%BE%E6%B6%89%E5%AB%8C%E7%BB%8F%E6%B5%8E%E7%B1%BB%E7%8A%AF%E7%BD%AA%E9%87%91%E9%A2%9D%E5%B7%A8%E5%A4%A7%23) `213.6K 🔥` `NEW`
1. [国内金价跌下990元](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E4%BB%B7%E8%B7%8C%E4%B8%8B990%E5%85%83%23) `213.4K 🔥` `NEW`
1. [钧正平评粉底液将军](https://s.weibo.com/weibo?q=%23%E9%92%A7%E6%AD%A3%E5%B9%B3%E8%AF%84%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%23) `196.4K 🔥` `NEW`
1. [张凌赫回复严屹宽](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E4%B8%A5%E5%B1%B9%E5%AE%BD%23) `191.7K 🔥` `NEW`
1. [医院回应产检遇男医生可换女医生](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E4%BA%A7%E6%A3%80%E9%81%87%E7%94%B7%E5%8C%BB%E7%94%9F%E5%8F%AF%E6%8D%A2%E5%A5%B3%E5%8C%BB%E7%94%9F%23) `181.0K 🔥` `NEW`
1. [徐良演唱会上纪念本兮](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E7%BA%AA%E5%BF%B5%E6%9C%AC%E5%85%AE%23) `148.3K 🔥` `NEW`
1. [警方过筛23.7斤血沙破25年前命案 (Police sift through 23.7 kilograms of blood and sand to solve a murder case 25 years ago)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%BF%87%E7%AD%9B23.7%E6%96%A4%E8%A1%80%E6%B2%99%E7%A0%B425%E5%B9%B4%E5%89%8D%E5%91%BD%E6%A1%88%23) `148.2K 🔥` `NEW`
1. [黄晓明现场宣传白日提灯](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E7%8E%B0%E5%9C%BA%E5%AE%A3%E4%BC%A0%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `123.6K 🔥` `NEW`
1. [Apple50周年](https://s.weibo.com/weibo?q=%23Apple50%E5%91%A8%E5%B9%B4%23) `120.5K 🔥` `NEW`
1. [高校回应校内库迪咖啡店被砸](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E5%9B%9E%E5%BA%94%E6%A0%A1%E5%86%85%E5%BA%93%E8%BF%AA%E5%92%96%E5%95%A1%E5%BA%97%E8%A2%AB%E7%A0%B8%23) `120.4K 🔥` `NEW`
1. [伊朗已制定霍尔木兹海峡安全航线](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E5%88%B6%E5%AE%9A%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%AE%89%E5%85%A8%E8%88%AA%E7%BA%BF%23) `109.6K 🔥` `NEW`
1. [王源新纹身](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%96%B0%E7%BA%B9%E8%BA%AB%23) `88.5K 🔥` `NEW`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `88.4K 🔥` `NEW`
1. [成龙刘诗诗合体](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E5%88%98%E8%AF%97%E8%AF%97%E5%90%88%E4%BD%93%23) `88.4K 🔥` `NEW`
1. [杰曼绝杀广东男篮](https://s.weibo.com/weibo?q=%23%E6%9D%B0%E6%9B%BC%E7%BB%9D%E6%9D%80%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AE%23) `88.2K 🔥` `NEW`
1. [阚清子问我这么胖吗](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E9%97%AE%E6%88%91%E8%BF%99%E4%B9%88%E8%83%96%E5%90%97%23) `524.7K 🔥` `+238%`
1. [孙俪新剧 (Sun Li's new drama)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%96%B0%E5%89%A7%23) `375.0K 🔥` `+143%`
1. [伊朗一天向以色列发射10轮导弹 (Iran launches 10 rounds of missiles at Israel in one day)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%A4%A9%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E5%8F%91%E5%B0%8410%E8%BD%AE%E5%AF%BC%E5%BC%B9%23) `288.0K 🔥` `+39%`
1. [左奇函 脸色](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%20%E8%84%B8%E8%89%B2%23) `247.1K 🔥` `+46%`
1. [丁程鑫张真源合照](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%90%88%E7%85%A7%23) `120.2K 🔥` `+21%`
1. [2026中国网络媒体论坛 (2026 China Online Media Forum)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `616.1K 🔥`
1. [伊朗革命卫队称霍尔木兹海峡关闭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E7%A7%B0%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%85%B3%E9%97%AD%23) `426.3K 🔥`
1. [大部分人觉得旅游累的原因](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%83%A8%E5%88%86%E4%BA%BA%E8%A7%89%E5%BE%97%E6%97%85%E6%B8%B8%E7%B4%AF%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `288.5K 🔥`
1. [职称评审将迎重大调整](https://s.weibo.com/weibo?q=%23%E8%81%8C%E7%A7%B0%E8%AF%84%E5%AE%A1%E5%B0%86%E8%BF%8E%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `285.7K 🔥`
1. [曝关晓彤喜提新车](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%9C%E6%8F%90%E6%96%B0%E8%BD%A6%23) `282.5K 🔥`
1. [王一博微博改名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `279.8K 🔥`
1. [锤娜丽莎瘦30斤公开减肥原因](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E7%98%A630%E6%96%A4%E5%85%AC%E5%BC%80%E5%87%8F%E8%82%A5%E5%8E%9F%E5%9B%A0%23) `278.0K 🔥`
1. [黄子韬因为减肥后脑勺秃了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%A0%E4%B8%BA%E5%87%8F%E8%82%A5%E5%90%8E%E8%84%91%E5%8B%BA%E7%A7%83%E4%BA%86%23) `276.2K 🔥`
1. [西班牙25岁女孩被性侵多次后申请安乐死 (Spanish girl, 25, applies for euthanasia after being sexually assaulted multiple times)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9925%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB%E6%80%A7%E4%BE%B5%E5%A4%9A%E6%AC%A1%E5%90%8E%E7%94%B3%E8%AF%B7%E5%AE%89%E4%B9%90%E6%AD%BB%23) `213.6K 🔥`
1. [严浩翔方回应KTV传闻 (Yan Haoxiang responded to KTV rumors)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B9%E5%9B%9E%E5%BA%94KTV%E4%BC%A0%E9%97%BB%23) `213.5K 🔥`
1. [奉劝大家还是尽量多存钱](https://s.weibo.com/weibo?q=%23%E5%A5%89%E5%8A%9D%E5%A4%A7%E5%AE%B6%E8%BF%98%E6%98%AF%E5%B0%BD%E9%87%8F%E5%A4%9A%E5%AD%98%E9%92%B1%23) `191.8K 🔥`
1. [王橹杰换头像](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `180.6K 🔥`
1. [UNIQ组合已解散 (UNIQ group has been disbanded)](https://s.weibo.com/weibo?q=%23UNIQ%E7%BB%84%E5%90%88%E5%B7%B2%E8%A7%A3%E6%95%A3%23) `117.4K 🔥`
1. [填补了国内厨师未能发表sci的空白](https://s.weibo.com/weibo?q=%23%E5%A1%AB%E8%A1%A5%E4%BA%86%E5%9B%BD%E5%86%85%E5%8E%A8%E5%B8%88%E6%9C%AA%E8%83%BD%E5%8F%91%E8%A1%A8sci%E7%9A%84%E7%A9%BA%E7%99%BD%23) `88.3K 🔥`
1. [男子因孕妻产检遇男医生崩溃撞墙](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E5%AD%95%E5%A6%BB%E4%BA%A7%E6%A3%80%E9%81%87%E7%94%B7%E5%8C%BB%E7%94%9F%E5%B4%A9%E6%BA%83%E6%92%9E%E5%A2%99%23) `282.1K 🔥` `-26%`
1. [新生儿和产妇先后离世家属发声](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%94%9F%E5%84%BF%E5%92%8C%E4%BA%A7%E5%A6%87%E5%85%88%E5%90%8E%E7%A6%BB%E4%B8%96%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `276.4K 🔥` `-63%`
1. [今年蚊子可能迎来史诗级加强](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E8%9A%8A%E5%AD%90%E5%8F%AF%E8%83%BD%E8%BF%8E%E6%9D%A5%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%8A%A0%E5%BC%BA%23) `222.9K 🔥` `-40%`
1. [逐玉 庆功宴](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `193.1K 🔥` `-24%`
1. [白日提灯云包场 (Lantern rental during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E4%BA%91%E5%8C%85%E5%9C%BA%23) `184.8K 🔥` `-82%`
1. [保留奔跑吧艺人剩菜店家道歉 (Store owner apologizes for retaining Running Bar artist's leftovers)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%95%99%E5%A5%94%E8%B7%91%E5%90%A7%E8%89%BA%E4%BA%BA%E5%89%A9%E8%8F%9C%E5%BA%97%E5%AE%B6%E9%81%93%E6%AD%89%23) `182.0K 🔥` `-28%`
1. [王一博乐华续约](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B9%90%E5%8D%8E%E7%BB%AD%E7%BA%A6%23) `174.1K 🔥` `-31%`
1. [广东男篮vs北京男篮](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AEvs%E5%8C%97%E4%BA%AC%E7%94%B7%E7%AF%AE%23) `158.3K 🔥` `-37%`
1. [岳云鹏室内抽烟 (Yue Yunpeng smokes indoors)](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E5%AE%A4%E5%86%85%E6%8A%BD%E7%83%9F%23) `148.2K 🔥` `-26%`
1. [黄灿灿浪姐连麦杨紫 (Huang Cancanlang's sister Lianmai Yangzi)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%B5%AA%E5%A7%90%E8%BF%9E%E9%BA%A6%E6%9D%A8%E7%B4%AB%23) `103.4K 🔥` `-23%`
1. [娇儿恶卧踏里裂](https://s.weibo.com/weibo?q=%23%E5%A8%87%E5%84%BF%E6%81%B6%E5%8D%A7%E8%B8%8F%E9%87%8C%E8%A3%82%23) `88.5K 🔥` `-57%`
1. [丁程鑫蛙泳](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%9B%99%E6%B3%B3%23) `88.2K 🔥` `-44%`

Updated at 2026-03-27 22:37:22

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
