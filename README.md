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

1. [C罗点球破门 (Cristiano Ronaldo scores a penalty kick)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%82%B9%E7%90%83%E7%A0%B4%E9%97%A8%23) `2.9M 🔥` `NEW`
1. [克罗地亚绝平球被吹](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E7%BB%9D%E5%B9%B3%E7%90%83%E8%A2%AB%E5%90%B9%23) `1.6M 🔥` `NEW`
1. [金价暴力拉涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E5%8A%9B%E6%8B%89%E6%B6%A8%23) `1.5M 🔥` `NEW`
1. [网传白鹿出演李清照](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%99%BD%E9%B9%BF%E5%87%BA%E6%BC%94%E6%9D%8E%E6%B8%85%E7%85%A7%23) `1.4M 🔥` `NEW`
1. [C罗魔笛紧紧相拥](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%AD%94%E7%AC%9B%E7%B4%A7%E7%B4%A7%E7%9B%B8%E6%8B%A5%23) `1.2M 🔥` `NEW`
1. [莫德里奇的传球绝了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E7%9A%84%E4%BC%A0%E7%90%83%E7%BB%9D%E4%BA%86%23) `519.6K 🔥` `NEW`
1. [葡萄牙绝杀克罗地亚](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E7%BB%9D%E6%9D%80%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%23) `515.2K 🔥` `NEW`
1. [C罗进球越位被吹](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9B%E7%90%83%E8%B6%8A%E4%BD%8D%E8%A2%AB%E5%90%B9%23) `511.1K 🔥` `NEW`
1. [C罗正中要害](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%AD%A3%E4%B8%AD%E8%A6%81%E5%AE%B3%23) `502.7K 🔥` `NEW`
1. [蔡文静回应赵一博](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%9B%9E%E5%BA%94%E8%B5%B5%E4%B8%80%E5%8D%9A%23) `499.6K 🔥` `NEW`
1. [C罗进球就越位一点点 (Ronaldo's goal was a little bit offside)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9B%E7%90%83%E5%B0%B1%E8%B6%8A%E4%BD%8D%E4%B8%80%E7%82%B9%E7%82%B9%23) `495.9K 🔥` `NEW`
1. [黄子韬留在海关的颜值回来了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%95%99%E5%9C%A8%E6%B5%B7%E5%85%B3%E7%9A%84%E9%A2%9C%E5%80%BC%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `492.7K 🔥` `NEW`
1. [西安商场坠楼男子好友发声](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E5%95%86%E5%9C%BA%E5%9D%A0%E6%A5%BC%E7%94%B7%E5%AD%90%E5%A5%BD%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `490.3K 🔥` `NEW`
1. [经脉受损心气散了](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E8%84%89%E5%8F%97%E6%8D%9F%E5%BF%83%E6%B0%94%E6%95%A3%E4%BA%86%23) `483.3K 🔥` `NEW`
1. [大热W姓男星屈指可数](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%83%ADW%E5%A7%93%E7%94%B7%E6%98%9F%E5%B1%88%E6%8C%87%E5%8F%AF%E6%95%B0%23) `479.6K 🔥` `NEW`
1. [女子走路玩手机掉进大锅全身湿透](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B5%B0%E8%B7%AF%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%8E%89%E8%BF%9B%E5%A4%A7%E9%94%85%E5%85%A8%E8%BA%AB%E6%B9%BF%E9%80%8F%23) `458.8K 🔥` `NEW`
1. [王皓逗笑孙颖莎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E9%80%97%E7%AC%91%E5%AD%99%E9%A2%96%E8%8E%8E%23) `452.2K 🔥` `NEW`
1. [吴世勋分享未公开写真花絮](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E5%88%86%E4%BA%AB%E6%9C%AA%E5%85%AC%E5%BC%80%E5%86%99%E7%9C%9F%E8%8A%B1%E7%B5%AE%23) `450.2K 🔥` `NEW`
1. [克罗地亚三粒进球被吹越位](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E4%B8%89%E7%B2%92%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%E8%B6%8A%E4%BD%8D%23) `441.7K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `439.4K 🔥` `NEW`
1. [苹果机密外泄冲击印度制造战略 (Apple secrets leaked affects India's manufacturing strategy)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%9C%BA%E5%AF%86%E5%A4%96%E6%B3%84%E5%86%B2%E5%87%BB%E5%8D%B0%E5%BA%A6%E5%88%B6%E9%80%A0%E6%88%98%E7%95%A5%23) `433.4K 🔥` `NEW`
1. [王俊凯新专质量获赞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E4%B8%93%E8%B4%A8%E9%87%8F%E8%8E%B7%E8%B5%9E%23) `430.7K 🔥` `NEW`
1. [葡萄牙2比1克罗地亚](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%992%E6%AF%941%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%23) `420.3K 🔥` `NEW`
1. [葡萄牙vs克罗地亚 (Portugal vs Croatia)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%23) `18.2M 🔥` `+359%`
1. [我国发展动能持续迸发 (my country's development momentum continues to burst out)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8F%91%E5%B1%95%E5%8A%A8%E8%83%BD%E6%8C%81%E7%BB%AD%E8%BF%B8%E5%8F%91%23) `1.8M 🔥` `+107%`
1. [奕境华为乾崑创天穹智盾安全架构 (Yijing Huawei Qiankunchuang Tianqiong Intelligent Shield Security Architecture)](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%88%9B%E5%A4%A9%E7%A9%B9%E6%99%BA%E7%9B%BE%E5%AE%89%E5%85%A8%E6%9E%B6%E6%9E%84%23) `1.7M 🔥` `+1365%`
1. [华为乾崑智驾ADS5奕境全网实测](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BEADS5%E5%A5%95%E5%A2%83%E5%85%A8%E7%BD%91%E5%AE%9E%E6%B5%8B%23) `1.2M 🔥` `+650%`
1. [鸿蒙因不兼容多CPU架构落选](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E5%9B%A0%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%A4%9ACPU%E6%9E%B6%E6%9E%84%E8%90%BD%E9%80%89%23) `523.7K 🔥` `+45%`
1. [我讨好领导就白敬亭这样](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%AE%A8%E5%A5%BD%E9%A2%86%E5%AF%BC%E5%B0%B1%E7%99%BD%E6%95%AC%E4%BA%AD%E8%BF%99%E6%A0%B7%23) `522.5K 🔥` `+110%`
1. [茉莉奶白换彩色头像](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%8D%A2%E5%BD%A9%E8%89%B2%E5%A4%B4%E5%83%8F%23) `516.6K 🔥` `+111%`
1. [突然发现普通家庭没教社会化](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E6%B2%A1%E6%95%99%E7%A4%BE%E4%BC%9A%E5%8C%96%23) `511.0K 🔥` `+107%`
1. [虞书欣连体衣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%9E%E4%BD%93%E8%A1%A3%23) `505.7K 🔥` `+107%`
1. [九寨沟一男子被挤下步道落入钙化池](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E4%B8%80%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8C%A4%E4%B8%8B%E6%AD%A5%E9%81%93%E8%90%BD%E5%85%A5%E9%92%99%E5%8C%96%E6%B1%A0%23) `494.0K 🔥` `+123%`
1. [韩国博主在日本整治撞人族 (Korean Blogger Censors Collision with Humans in Japan)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%9C%A8%E6%97%A5%E6%9C%AC%E6%95%B4%E6%B2%BB%E6%92%9E%E4%BA%BA%E6%97%8F%23) `485.9K 🔥` `+133%`
1. [微博访客记录](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95%23) `477.0K 🔥` `+432%`
1. [杨紫全方位爆发](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%85%A8%E6%96%B9%E4%BD%8D%E7%88%86%E5%8F%91%23) `474.7K 🔥` `+97%`
1. [毛不易 音乐节 (Mao Buyi Music Festival)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%20%E9%9F%B3%E4%B9%90%E8%8A%82%23) `471.3K 🔥` `+100%`
1. [白鹿30天掉粉117万](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF30%E5%A4%A9%E6%8E%89%E7%B2%89117%E4%B8%87%23) `465.7K 🔥` `+108%`
1. [德国牧羊犬因不放毛绒大象未过考核](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%89%A7%E7%BE%8A%E7%8A%AC%E5%9B%A0%E4%B8%8D%E6%94%BE%E6%AF%9B%E7%BB%92%E5%A4%A7%E8%B1%A1%E6%9C%AA%E8%BF%87%E8%80%83%E6%A0%B8%23) `462.3K 🔥` `+97%`
1. [姐姐说C罗世界杯后退出国家队 (My sister said Ronaldo quit the national team after the World Cup)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%AF%B4C%E7%BD%97%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E9%80%80%E5%87%BA%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `453.9K 🔥` `+119%`
1. [LV起诉茉莉奶白判赔1030万 (LV sues Jasmine Milk and awards 10.3 million yuan in damages)](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%88%A4%E8%B5%941030%E4%B8%87%23) `447.2K 🔥` `+94%`
1. [虞书欣侯明昊念相思同框](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%90%8C%E6%A1%86%23) `444.0K 🔥` `+87%`
1. [美股存储概念股还在跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%AD%98%E5%82%A8%E6%A6%82%E5%BF%B5%E8%82%A1%E8%BF%98%E5%9C%A8%E8%B7%8C%23) `435.9K 🔥` `+83%`
1. [教师职称待遇培养未来5年有变化 (There will be changes in teacher professional title, salary and training in the next five years)](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%81%8C%E7%A7%B0%E5%BE%85%E9%81%87%E5%9F%B9%E5%85%BB%E6%9C%AA%E6%9D%A55%E5%B9%B4%E6%9C%89%E5%8F%98%E5%8C%96%23) `428.1K 🔥` `+77%`
1. [王一博人鱼超7万人想看](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%BA%E9%B1%BC%E8%B6%857%E4%B8%87%E4%BA%BA%E6%83%B3%E7%9C%8B%23) `427.0K 🔥` `+104%`
1. [野狗骨头拍出了宋威龙的死角 (Wild Dog Bones captured Song Weilong’s blind spot)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8B%8D%E5%87%BA%E4%BA%86%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9A%84%E6%AD%BB%E8%A7%92%23) `423.1K 🔥` `+88%`
1. [罗永浩称没必要对电影人阴阳怪气](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E7%A7%B0%E6%B2%A1%E5%BF%85%E8%A6%81%E5%AF%B9%E7%94%B5%E5%BD%B1%E4%BA%BA%E9%98%B4%E9%98%B3%E6%80%AA%E6%B0%94%23) `418.4K 🔥` `+69%`
1. [西班牙3比0奥地利 (Spain 3-0 Austria)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%993%E6%AF%940%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `468.9K 🔥`
1. [王楚钦孙颖莎vs雨果高桥布鲁娜 (Wang Chuqin, Sun Yingsha vs. Hugo Takahashi Bruna)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8Evs%E9%9B%A8%E6%9E%9C%E9%AB%98%E6%A1%A5%E5%B8%83%E9%B2%81%E5%A8%9C%23) `506.7K 🔥` `-57%`
1. [亚马尔全场最佳](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%85%A8%E5%9C%BA%E6%9C%80%E4%BD%B3%23) `465.3K 🔥` `-25%`

Updated at 2026-07-03 09:21:19

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
