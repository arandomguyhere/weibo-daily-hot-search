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

1. [王者荣耀农家乐村晚 (King of Glory Farmhouse Village Night)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%86%9C%E5%AE%B6%E4%B9%90%E6%9D%91%E6%99%9A%23) `434.8K 🔥` `NEW`
1. [中国男壶加时局惜败](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%A3%B6%E5%8A%A0%E6%97%B6%E5%B1%80%E6%83%9C%E8%B4%A5%23) `158.0K 🔥` `NEW`
1. [吉林卫视春晚](https://s.weibo.com/weibo?q=%23%E5%90%89%E6%9E%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `153.3K 🔥` `NEW`
1. [中国冰壶男队vs挪威](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E7%94%B7%E9%98%9Fvs%E6%8C%AA%E5%A8%81%23) `125.5K 🔥` `NEW`
1. [商场吸烟室紧邻母婴室引质疑后续](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%9C%BA%E5%90%B8%E7%83%9F%E5%AE%A4%E7%B4%A7%E9%82%BB%E6%AF%8D%E5%A9%B4%E5%AE%A4%E5%BC%95%E8%B4%A8%E7%96%91%E5%90%8E%E7%BB%AD%23) `122.6K 🔥` `NEW`
1. [谁给迪丽热巴买的手机壳](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `122.1K 🔥` `NEW`
1. [原著粉最满意的阵容出现了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E8%91%97%E7%B2%89%E6%9C%80%E6%BB%A1%E6%84%8F%E7%9A%84%E9%98%B5%E5%AE%B9%E5%87%BA%E7%8E%B0%E4%BA%86%23) `120.3K 🔥` `NEW`
1. [蜜雪冰城墨西哥首店开业价格曝光](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E5%A2%A8%E8%A5%BF%E5%93%A5%E9%A6%96%E5%BA%97%E5%BC%80%E4%B8%9A%E4%BB%B7%E6%A0%BC%E6%9B%9D%E5%85%89%23) `116.0K 🔥` `NEW`
1. [Xiaohu谈LPL选手处罚](https://s.weibo.com/weibo?q=%23Xiaohu%E8%B0%88LPL%E9%80%89%E6%89%8B%E5%A4%84%E7%BD%9A%23) `112.0K 🔥` `NEW`
1. [宠物年夜饭现鲍鱼海参等昂贵食材](https://s.weibo.com/weibo?q=%23%E5%AE%A0%E7%89%A9%E5%B9%B4%E5%A4%9C%E9%A5%AD%E7%8E%B0%E9%B2%8D%E9%B1%BC%E6%B5%B7%E5%8F%82%E7%AD%89%E6%98%82%E8%B4%B5%E9%A3%9F%E6%9D%90%23) `111.9K 🔥` `NEW`
1. [中国冰壶男队6比8挪威 (Chinese men's curling team 6-8 Norway)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E7%94%B7%E9%98%9F6%E6%AF%948%E6%8C%AA%E5%A8%81%23) `111.9K 🔥` `NEW`
1. [陶喆在线道歉](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E5%9C%A8%E7%BA%BF%E9%81%93%E6%AD%89%23) `111.8K 🔥` `NEW`
1. [王者荣耀情人节](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%83%85%E4%BA%BA%E8%8A%82%23) `111.2K 🔥` `NEW`
1. [中国队何时能摘首金 (When will the Chinese team win its first gold medal?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%BD%95%E6%97%B6%E8%83%BD%E6%91%98%E9%A6%96%E9%87%91%23) `1.1M 🔥` `+403%`
1. [官方回应湛江发现儒艮尸体](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B9%9B%E6%B1%9F%E5%8F%91%E7%8E%B0%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `230.2K 🔥` `+100%`
1. [WB对战狼队](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `160.9K 🔥` `+79%`
1. [李家诚告周秀娜诽谤及骚扰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%B6%E8%AF%9A%E5%91%8A%E5%91%A8%E7%A7%80%E5%A8%9C%E8%AF%BD%E8%B0%A4%E5%8F%8A%E9%AA%9A%E6%89%B0%23) `123.3K 🔥` `+31%`
1. [海关查获老鼠肉干和酱汤泡蚂蚁卵](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%85%B3%E6%9F%A5%E8%8E%B7%E8%80%81%E9%BC%A0%E8%82%89%E5%B9%B2%E5%92%8C%E9%85%B1%E6%B1%A4%E6%B3%A1%E8%9A%82%E8%9A%81%E5%8D%B5%23) `121.2K 🔥` `+21%`
1. [车厘子或痛失年货水果C位](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E6%88%96%E7%97%9B%E5%A4%B1%E5%B9%B4%E8%B4%A7%E6%B0%B4%E6%9E%9CC%E4%BD%8D%23) `120.9K 🔥` `+53%`
1. [给员工发1.8亿年终奖的老板招人了](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%91%98%E5%B7%A5%E5%8F%911.8%E4%BA%BF%E5%B9%B4%E7%BB%88%E5%A5%96%E7%9A%84%E8%80%81%E6%9D%BF%E6%8B%9B%E4%BA%BA%E4%BA%86%23) `111.8K 🔥` `+23%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `110.8K 🔥` `+22%`
1. [时代少年团庆祝出道2222天 (Times Youth League celebrates 2,222 days since debut)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%BA%86%E7%A5%9D%E5%87%BA%E9%81%932222%E5%A4%A9%23) `110.8K 🔥` `+21%`
1. [任子威首个且唯一1000米奥运冠军](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E9%A6%96%E4%B8%AA%E4%B8%94%E5%94%AF%E4%B8%801000%E7%B1%B3%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%23) `776.0K 🔥`
1. [战马贺春热血沸腾 (The war horse He Chun's blood is boiling)](https://s.weibo.com/weibo?q=%23%E6%88%98%E9%A9%AC%E8%B4%BA%E6%98%A5%E7%83%AD%E8%A1%80%E6%B2%B8%E8%85%BE%23) `617.6K 🔥`
1. [春晚倒计时 (Countdown to Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%80%92%E8%AE%A1%E6%97%B6%23) `486.0K 🔥`
1. [我家那小子首发阵容官宣](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `225.1K 🔥`
1. [TF家族新年音乐会纪录片 (TF Family New Year Concert Documentary)](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E6%96%B0%E5%B9%B4%E9%9F%B3%E4%B9%90%E4%BC%9A%E7%BA%AA%E5%BD%95%E7%89%87%23) `185.1K 🔥`
1. [我家那小子定档大年初六](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E5%AE%9A%E6%A1%A3%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%85%AD%23) `160.9K 🔥`
1. [返乡大哥打工30多年攒近300万](https://s.weibo.com/weibo?q=%23%E8%BF%94%E4%B9%A1%E5%A4%A7%E5%93%A5%E6%89%93%E5%B7%A530%E5%A4%9A%E5%B9%B4%E6%94%92%E8%BF%91300%E4%B8%87%23) `160.4K 🔥`
1. [突然明白了葬礼的意义](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E8%91%AC%E7%A4%BC%E7%9A%84%E6%84%8F%E4%B9%89%23) `159.4K 🔥`
1. [苍蝇搓手为什么会意外截头](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E8%9D%87%E6%90%93%E6%89%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%84%8F%E5%A4%96%E6%88%AA%E5%A4%B4%23) `159.1K 🔥`
1. [中戏发生了什么 (What happened in the drama)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `158.8K 🔥`
1. [微博之夜星光齐聚](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E6%98%9F%E5%85%89%E9%BD%90%E8%81%9A%23) `158.0K 🔥`
1. [爱泼斯坦假尸体事件披露 (Epstein’s fake body revealed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%81%87%E5%B0%B8%E4%BD%93%E4%BA%8B%E4%BB%B6%E6%8A%AB%E9%9C%B2%23) `156.0K 🔥`
1. [拼多多食品安全保障持续加码](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E9%A3%9F%E5%93%81%E5%AE%89%E5%85%A8%E4%BF%9D%E9%9A%9C%E6%8C%81%E7%BB%AD%E5%8A%A0%E7%A0%81%23) `125.5K 🔥`
1. [瑶一瑶藏剪刀被安检发现 (Yao Yiyao’s hidden scissors were discovered by security)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%97%8F%E5%89%AA%E5%88%80%E8%A2%AB%E5%AE%89%E6%A3%80%E5%8F%91%E7%8E%B0%23) `124.9K 🔥`
1. [主动投案的王鑫是易烊千玺等人老师](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%E7%9A%84%E7%8E%8B%E9%91%AB%E6%98%AF%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%AD%89%E4%BA%BA%E8%80%81%E5%B8%88%23) `124.5K 🔥`
1. [衡水中学变了 (Hengshui Middle School has changed)](https://s.weibo.com/weibo?q=%23%E8%A1%A1%E6%B0%B4%E4%B8%AD%E5%AD%A6%E5%8F%98%E4%BA%86%23) `124.0K 🔥`
1. [Angelababy兔耳朵撕拉片](https://s.weibo.com/weibo?q=%23Angelababy%E5%85%94%E8%80%B3%E6%9C%B5%E6%92%95%E6%8B%89%E7%89%87%23) `123.6K 🔥`
1. [王艺瑾你对你的脸做了什么 (Wang Yijin, what did you do to your face?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E7%91%BE%E4%BD%A0%E5%AF%B9%E4%BD%A0%E7%9A%84%E8%84%B8%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%23) `121.9K 🔥`
1. [偶遇向佐郭碧婷带女儿买衣服](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%90%91%E4%BD%90%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%B8%A6%E5%A5%B3%E5%84%BF%E4%B9%B0%E8%A1%A3%E6%9C%8D%23) `119.9K 🔥`
1. [惠英红的眉眼 棠夫人的灵魂 (Hui Yinghong’s eyebrows and Mrs. Tang’s soul)](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E7%9A%84%E7%9C%89%E7%9C%BC%20%E6%A3%A0%E5%A4%AB%E4%BA%BA%E7%9A%84%E7%81%B5%E9%AD%82%23) `118.2K 🔥`
1. [虞书欣每天一杯奶茶 (Yu Shuxin drinks a cup of milk tea every day)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%AF%8F%E5%A4%A9%E4%B8%80%E6%9D%AF%E5%A5%B6%E8%8C%B6%23) `114.9K 🔥`
1. [TFING直播 (TFING live broadcast)](https://s.weibo.com/weibo?q=%23TFING%E7%9B%B4%E6%92%AD%23) `111.8K 🔥`
1. [章若楠王安宇新剧开机](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%8E%8B%E5%AE%89%E5%AE%87%E6%96%B0%E5%89%A7%E5%BC%80%E6%9C%BA%23) `111.8K 🔥`
1. [加拿大小偷已经放飞自我了](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%B0%8F%E5%81%B7%E5%B7%B2%E7%BB%8F%E6%94%BE%E9%A3%9E%E8%87%AA%E6%88%91%E4%BA%86%23) `111.8K 🔥`
1. [白鹿李昀锐春晚造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%98%A5%E6%99%9A%E9%80%A0%E5%9E%8B%23) `111.7K 🔥`
1. [杭州大哥开1人公司靠AI月入200万 (Hangzhou eldest brother opens a one-person company and earns 2 million a month through AI)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E5%93%A5%E5%BC%801%E4%BA%BA%E5%85%AC%E5%8F%B8%E9%9D%A0AI%E6%9C%88%E5%85%A5200%E4%B8%87%23) `159.8K 🔥` `-85%`
1. [公司利润2.7亿拿1.8亿发年终奖 (The company made a profit of 270 million and received a year-end bonus of 180 million)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%A9%E6%B6%A62.7%E4%BA%BF%E6%8B%BF1.8%E4%BA%BF%E5%8F%91%E5%B9%B4%E7%BB%88%E5%A5%96%23) `119.8K 🔥` `-43%`
1. [13年后天娱又签了选秀冠军 (Houtian Entertainment signed another draft winner in 2013)](https://s.weibo.com/weibo?q=%2313%E5%B9%B4%E5%90%8E%E5%A4%A9%E5%A8%B1%E5%8F%88%E7%AD%BE%E4%BA%86%E9%80%89%E7%A7%80%E5%86%A0%E5%86%9B%23) `112.9K 🔥` `-44%`
1. [父母花了几十万装修的房子 (My parents spent hundreds of thousands renovating the house)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E8%8A%B1%E4%BA%86%E5%87%A0%E5%8D%81%E4%B8%87%E8%A3%85%E4%BF%AE%E7%9A%84%E6%88%BF%E5%AD%90%23) `111.9K 🔥` `-45%`

Updated at 2026-02-13 19:50:33

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
