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

1. [网传山东一石海藏有金矿信息不实 (It is rumored on the Internet that there is a gold mine hidden in Yishihai, Shandong Province.)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%B1%B1%E4%B8%9C%E4%B8%80%E7%9F%B3%E6%B5%B7%E8%97%8F%E6%9C%89%E9%87%91%E7%9F%BF%E4%BF%A1%E6%81%AF%E4%B8%8D%E5%AE%9E%23) `792.7K 🔥` `NEW`
1. [普京提建议后特朗普称很快停火](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8F%90%E5%BB%BA%E8%AE%AE%E5%90%8E%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%BE%88%E5%BF%AB%E5%81%9C%E7%81%AB%23) `790.2K 🔥` `NEW`
1. [申裕斌3比1桥本帆乃香](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%A3%95%E6%96%8C3%E6%AF%941%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `786.0K 🔥` `NEW`
1. [张凌赫回应天涯四美已合作两美](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E5%A4%A9%E6%B6%AF%E5%9B%9B%E7%BE%8E%E5%B7%B2%E5%90%88%E4%BD%9C%E4%B8%A4%E7%BE%8E%23) `785.2K 🔥` `NEW`
1. [李诞称有人用AI龙虾约女主播饭](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%AF%9E%E7%A7%B0%E6%9C%89%E4%BA%BA%E7%94%A8AI%E9%BE%99%E8%99%BE%E7%BA%A6%E5%A5%B3%E4%B8%BB%E6%92%AD%E9%A5%AD%23) `784.1K 🔥` `NEW`
1. [数字生命](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%97%E7%94%9F%E5%91%BD%23) `781.8K 🔥` `NEW`
1. [甜茶去拉兰州拉面毫无违和](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E5%8E%BB%E6%8B%89%E5%85%B0%E5%B7%9E%E6%8B%89%E9%9D%A2%E6%AF%AB%E6%97%A0%E8%BF%9D%E5%92%8C%23) `781.3K 🔥` `NEW`
1. [年轻人的三座大山房价职场婚恋](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E4%B8%89%E5%BA%A7%E5%A4%A7%E5%B1%B1%E6%88%BF%E4%BB%B7%E8%81%8C%E5%9C%BA%E5%A9%9A%E6%81%8B%23) `780.6K 🔥` `NEW`
1. [男女主爱惨了观众嗑疯了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%88%B1%E6%83%A8%E4%BA%86%E8%A7%82%E4%BC%97%E5%97%91%E7%96%AF%E4%BA%86%23) `780.3K 🔥` `NEW`
1. [李诞谈养龙虾感受](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%AF%9E%E8%B0%88%E5%85%BB%E9%BE%99%E8%99%BE%E6%84%9F%E5%8F%97%23) `780.2K 🔥` `NEW`
1. [OpenClaw 用户隐私 (OpenClaw User Privacy)](https://s.weibo.com/weibo?q=%23OpenClaw%20%E7%94%A8%E6%88%B7%E9%9A%90%E7%A7%81%23) `779.1K 🔥` `NEW`
1. [NBA常规赛](https://s.weibo.com/weibo?q=%23NBA%E5%B8%B8%E8%A7%84%E8%B5%9B%23) `777.6K 🔥` `NEW`
1. [建议小学三年级前课间半小时 (It is recommended that half an hour be allowed in the recess before the third grade of primary school)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%8F%E5%AD%A6%E4%B8%89%E5%B9%B4%E7%BA%A7%E5%89%8D%E8%AF%BE%E9%97%B4%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `1.0M 🔥` `+33%`
1. [两会声音传递法治力度民生温度 (The voices of the two sessions convey the strength of the rule of law and the warmth of people’s livelihood)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%E5%A3%B0%E9%9F%B3%E4%BC%A0%E9%80%92%E6%B3%95%E6%B2%BB%E5%8A%9B%E5%BA%A6%E6%B0%91%E7%94%9F%E6%B8%A9%E5%BA%A6%23) `978.4K 🔥` `+63%`
1. [正在解决地外星球长期生存问题](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%9C%A8%E8%A7%A3%E5%86%B3%E5%9C%B0%E5%A4%96%E6%98%9F%E7%90%83%E9%95%BF%E6%9C%9F%E7%94%9F%E5%AD%98%E9%97%AE%E9%A2%98%23) `913.9K 🔥` `+53%`
1. [2026白玉兰预测 (2026 Magnolia Forecast)](https://s.weibo.com/weibo?q=%232026%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `798.5K 🔥` `+34%`
1. [美国开始甩锅了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%BC%80%E5%A7%8B%E7%94%A9%E9%94%85%E4%BA%86%23) `792.8K 🔥` `+33%`
1. [代表说儿子告诉他千万不要爹味太浓](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E8%AF%B4%E5%84%BF%E5%AD%90%E5%91%8A%E8%AF%89%E4%BB%96%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%88%B9%E5%91%B3%E5%A4%AA%E6%B5%93%23) `792.7K 🔥` `+33%`
1. [委员劝大家把事情看淡](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%8A%9D%E5%A4%A7%E5%AE%B6%E6%8A%8A%E4%BA%8B%E6%83%85%E7%9C%8B%E6%B7%A1%23) `792.2K 🔥` `+34%`
1. [制造业升级的超级红包来了](https://s.weibo.com/weibo?q=%23%E5%88%B6%E9%80%A0%E4%B8%9A%E5%8D%87%E7%BA%A7%E7%9A%84%E8%B6%85%E7%BA%A7%E7%BA%A2%E5%8C%85%E6%9D%A5%E4%BA%86%23) `791.9K 🔥` `+33%`
1. [五月天演唱会取消24号场次](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%8824%E5%8F%B7%E5%9C%BA%E6%AC%A1%23) `791.7K 🔥` `+36%`
1. [香蕉有可能会灭绝](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E6%9C%89%E5%8F%AF%E8%83%BD%E4%BC%9A%E7%81%AD%E7%BB%9D%23) `791.3K 🔥` `+33%`
1. [第一次见反向装修的](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%8F%8D%E5%90%91%E8%A3%85%E4%BF%AE%E7%9A%84%23) `790.8K 🔥` `+33%`
1. [手机市场将迎来全面涨价 (The mobile phone market will usher in comprehensive price increases)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%B8%82%E5%9C%BA%E5%B0%86%E8%BF%8E%E6%9D%A5%E5%85%A8%E9%9D%A2%E6%B6%A8%E4%BB%B7%23) `790.5K 🔥` `+33%`
1. [美媒称这场战争打不起了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E8%BF%99%E5%9C%BA%E6%88%98%E4%BA%89%E6%89%93%E4%B8%8D%E8%B5%B7%E4%BA%86%23) `789.7K 🔥` `+33%`
1. [OPPO涨价](https://s.weibo.com/weibo?q=%23OPPO%E6%B6%A8%E4%BB%B7%23) `789.6K 🔥` `+32%`
1. [青3创4门面同框今夕是何年](https://s.weibo.com/weibo?q=%23%E9%9D%923%E5%88%9B4%E9%97%A8%E9%9D%A2%E5%90%8C%E6%A1%86%E4%BB%8A%E5%A4%95%E6%98%AF%E4%BD%95%E5%B9%B4%23) `789.0K 🔥` `+35%`
1. [火鸡面冰淇淋 (turkey noodle ice cream)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%B8%A1%E9%9D%A2%E5%86%B0%E6%B7%87%E6%B7%8B%23) `788.9K 🔥` `+33%`
1. [樊长玉得知谢征是武安侯](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E5%BE%97%E7%9F%A5%E8%B0%A2%E5%BE%81%E6%98%AF%E6%AD%A6%E5%AE%89%E4%BE%AF%23) `788.3K 🔥` `+33%`
1. [美方称不会让印度胜过美国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E7%A7%B0%E4%B8%8D%E4%BC%9A%E8%AE%A9%E5%8D%B0%E5%BA%A6%E8%83%9C%E8%BF%87%E7%BE%8E%E5%9B%BD%23) `788.1K 🔥` `+35%`
1. [Ella送别袁惟仁哭到抽搐](https://s.weibo.com/weibo?q=%23Ella%E9%80%81%E5%88%AB%E8%A2%81%E6%83%9F%E4%BB%81%E5%93%AD%E5%88%B0%E6%8A%BD%E6%90%90%23) `787.7K 🔥` `+33%`
1. [张凌赫像是在横店待疯了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%83%8F%E6%98%AF%E5%9C%A8%E6%A8%AA%E5%BA%97%E5%BE%85%E7%96%AF%E4%BA%86%23) `787.3K 🔥` `+34%`
1. [一个小朋友学过台阶的视频火了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%AD%A6%E8%BF%87%E5%8F%B0%E9%98%B6%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `787.1K 🔥` `+35%`
1. [别再吃高油高盐的食物了](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%86%8D%E5%90%83%E9%AB%98%E6%B2%B9%E9%AB%98%E7%9B%90%E7%9A%84%E9%A3%9F%E7%89%A9%E4%BA%86%23) `786.6K 🔥` `+33%`
1. [原来这么多年错怪凤梨了 (It turns out that I have wrongly blamed pineapples for so many years.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E9%94%99%E6%80%AA%E5%87%A4%E6%A2%A8%E4%BA%86%23) `786.4K 🔥` `+34%`
1. [医生提醒不要模仿Ella真空腹 (Doctor reminds not to imitate Ella’s vacuum abdomen)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E4%B8%8D%E8%A6%81%E6%A8%A1%E4%BB%BFElla%E7%9C%9F%E7%A9%BA%E8%85%B9%23) `785.7K 🔥` `+34%`
1. [伊朗称驱逐美以大使可过霍尔木兹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E9%A9%B1%E9%80%90%E7%BE%8E%E4%BB%A5%E5%A4%A7%E4%BD%BF%E5%8F%AF%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `784.9K 🔥` `+33%`
1. [经纪公司否认张娜拉去世](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E7%BA%AA%E5%85%AC%E5%8F%B8%E5%90%A6%E8%AE%A4%E5%BC%A0%E5%A8%9C%E6%8B%89%E5%8E%BB%E4%B8%96%23) `784.7K 🔥` `+33%`
1. [男子养双头龟喂食时2个头还争食](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%85%BB%E5%8F%8C%E5%A4%B4%E9%BE%9F%E5%96%82%E9%A3%9F%E6%97%B62%E4%B8%AA%E5%A4%B4%E8%BF%98%E4%BA%89%E9%A3%9F%23) `784.0K 🔥` `+34%`
1. [袁惟仁告别式 (Yuan Weiren's farewell ceremony)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%83%9F%E4%BB%81%E5%91%8A%E5%88%AB%E5%BC%8F%23) `783.7K 🔥` `+34%`
1. [腾讯版小龙虾致歉信](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E7%89%88%E5%B0%8F%E9%BE%99%E8%99%BE%E8%87%B4%E6%AD%89%E4%BF%A1%23) `783.3K 🔥` `+34%`
1. [性格有5个特点的人更容易长寿](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E6%9C%895%E4%B8%AA%E7%89%B9%E7%82%B9%E7%9A%84%E4%BA%BA%E6%9B%B4%E5%AE%B9%E6%98%93%E9%95%BF%E5%AF%BF%23) `782.9K 🔥` `+34%`
1. [逐玉原来谢征亲回去了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8E%9F%E6%9D%A5%E8%B0%A2%E5%BE%81%E4%BA%B2%E5%9B%9E%E5%8E%BB%E4%BA%86%23) `782.5K 🔥` `+32%`
1. [20头整容骆驼参加选美被抓包](https://s.weibo.com/weibo?q=%2320%E5%A4%B4%E6%95%B4%E5%AE%B9%E9%AA%86%E9%A9%BC%E5%8F%82%E5%8A%A0%E9%80%89%E7%BE%8E%E8%A2%AB%E6%8A%93%E5%8C%85%23) `782.0K 🔥` `+34%`
1. [未来5年中国要建设的重大工程](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E4%B8%AD%E5%9B%BD%E8%A6%81%E5%BB%BA%E8%AE%BE%E7%9A%84%E9%87%8D%E5%A4%A7%E5%B7%A5%E7%A8%8B%23) `781.4K 🔥` `+32%`
1. [刘亦菲LV大秀造型图](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2LV%E5%A4%A7%E7%A7%80%E9%80%A0%E5%9E%8B%E5%9B%BE%23) `779.8K 🔥` `+34%`
1. [伊朗放弃猛打猛冲 (Iran gives up aggressive offensive)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BE%E5%BC%83%E7%8C%9B%E6%89%93%E7%8C%9B%E5%86%B2%23) `779.5K 🔥` `+33%`
1. [爱奇艺逐玉标题00后写的吧 (The title of iQiyi Zhuyu was written by a generation born in 2000.)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E9%80%90%E7%8E%89%E6%A0%87%E9%A2%9800%E5%90%8E%E5%86%99%E7%9A%84%E5%90%A7%23) `778.6K 🔥` `+32%`
1. [周深 合同签了吗 (Zhou Shen, has the contract been signed?)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%20%E5%90%88%E5%90%8C%E7%AD%BE%E4%BA%86%E5%90%97%23) `778.3K 🔥` `+32%`
1. [腾讯大涨超6%](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%A4%A7%E6%B6%A8%E8%B6%856%25%23) `777.8K 🔥` `+34%`
1. [6G网要来了 (6G network is coming)](https://s.weibo.com/weibo?q=%236G%E7%BD%91%E8%A6%81%E6%9D%A5%E4%BA%86%23) `1.0M 🔥`

Updated at 2026-03-10 14:07:30

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
