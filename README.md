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

1. [中美领导人小范围会晤 (Small-scale meeting between Chinese and American leaders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B0%8F%E8%8C%83%E5%9B%B4%E4%BC%9A%E6%99%A4%23) `1.2M 🔥` `NEW`
1. [iPhone18](https://s.weibo.com/weibo?q=%23iPhone18%23) `1.2M 🔥` `NEW`
1. [天坛里的对称之美](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E9%87%8C%E7%9A%84%E5%AF%B9%E7%A7%B0%E4%B9%8B%E7%BE%8E%23) `1.2M 🔥` `NEW`
1. [特朗普抵达中南海](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E4%B8%AD%E5%8D%97%E6%B5%B7%23) `1.2M 🔥` `NEW`
1. [支付宝正寻求警方帮助](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E6%AD%A3%E5%AF%BB%E6%B1%82%E8%AD%A6%E6%96%B9%E5%B8%AE%E5%8A%A9%23) `1.2M 🔥` `NEW`
1. [头一次见老胞胎](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E4%B8%80%E6%AC%A1%E8%A7%81%E8%80%81%E8%83%9E%E8%83%8E%23) `1.2M 🔥` `NEW`
1. [新来的同事脑子就是好使](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%9D%A5%E7%9A%84%E5%90%8C%E4%BA%8B%E8%84%91%E5%AD%90%E5%B0%B1%E6%98%AF%E5%A5%BD%E4%BD%BF%23) `1.0M 🔥` `NEW`
1. [方媛说我不喜欢坐旁边](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E8%AF%B4%E6%88%91%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%9D%90%E6%97%81%E8%BE%B9%23) `1.0M 🔥` `NEW`
1. [原来这么多人拒绝过浪姐](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BA%BA%E6%8B%92%E7%BB%9D%E8%BF%87%E6%B5%AA%E5%A7%90%23) `678.3K 🔥` `NEW`
1. [国际足联报价腰斩](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%8A%A5%E4%BB%B7%E8%85%B0%E6%96%A9%23) `391.1K 🔥` `NEW`
1. [毛利兰声优去世 (Mao Lilan voice actor passed away)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%88%A9%E5%85%B0%E5%A3%B0%E4%BC%98%E5%8E%BB%E4%B8%96%23) `390.0K 🔥` `NEW`
1. [何猷君奚梦瑶和保镖同桌吃饭](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%92%8C%E4%BF%9D%E9%95%96%E5%90%8C%E6%A1%8C%E5%90%83%E9%A5%AD%23) `389.0K 🔥` `NEW`
1. [老人捡破烂攒6万买床垫与儿子反目](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8D%A1%E7%A0%B4%E7%83%82%E6%94%926%E4%B8%87%E4%B9%B0%E5%BA%8A%E5%9E%AB%E4%B8%8E%E5%84%BF%E5%AD%90%E5%8F%8D%E7%9B%AE%23) `386.5K 🔥` `NEW`
1. [沈腾喊你记得加个蛋](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%96%8A%E4%BD%A0%E8%AE%B0%E5%BE%97%E5%8A%A0%E4%B8%AA%E8%9B%8B%23) `385.2K 🔥` `NEW`
1. [iPhone17官宣降价](https://s.weibo.com/weibo?q=%23iPhone17%E5%AE%98%E5%AE%A3%E9%99%8D%E4%BB%B7%23) `381.8K 🔥` `NEW`
1. [李纯哄马頔看呆张豆豆](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E5%93%84%E9%A9%AC%E9%A0%94%E7%9C%8B%E5%91%86%E5%BC%A0%E8%B1%86%E8%B1%86%23) `379.9K 🔥` `NEW`
1. [徐志胜 情商](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%20%E6%83%85%E5%95%86%23) `379.7K 🔥` `NEW`
1. [中美元首达成一系列新共识](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E8%BE%BE%E6%88%90%E4%B8%80%E7%B3%BB%E5%88%97%E6%96%B0%E5%85%B1%E8%AF%86%23) `376.8K 🔥` `NEW`
1. [日文网帖竟炫耀在印尼嫖宿幼女](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%87%E7%BD%91%E5%B8%96%E7%AB%9F%E7%82%AB%E8%80%80%E5%9C%A8%E5%8D%B0%E5%B0%BC%E5%AB%96%E5%AE%BF%E5%B9%BC%E5%A5%B3%23) `375.1K 🔥` `NEW`
1. [乘风师姐帮唱小考](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%B8%88%E5%A7%90%E5%B8%AE%E5%94%B1%E5%B0%8F%E8%80%83%23) `373.7K 🔥` `NEW`
1. [库克你的iPhone在北京烫吗 (Cook, is your iPhone hot in Beijing?)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E4%BD%A0%E7%9A%84iPhone%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%83%AB%E5%90%97%23) `371.8K 🔥` `NEW`
1. [浪姐 遛观众](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E9%81%9B%E8%A7%82%E4%BC%97%23) `368.7K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `366.9K 🔥` `NEW`
1. [李乃文杨幂梅婷等19人任副会长](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E6%9D%A8%E5%B9%82%E6%A2%85%E5%A9%B7%E7%AD%8919%E4%BA%BA%E4%BB%BB%E5%89%AF%E4%BC%9A%E9%95%BF%23) `365.0K 🔥` `NEW`
1. [穆祉丞 舒客](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E8%88%92%E5%AE%A2%23) `364.6K 🔥` `NEW`
1. [方媛女孩子的配得感](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%A5%B3%E5%AD%A9%E5%AD%90%E7%9A%84%E9%85%8D%E5%BE%97%E6%84%9F%23) `362.8K 🔥` `NEW`
1. [迪丽热巴的水果剧还是太超前了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E6%B0%B4%E6%9E%9C%E5%89%A7%E8%BF%98%E6%98%AF%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `359.7K 🔥` `NEW`
1. [外交部就特朗普访华答问](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%B0%B1%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E7%AD%94%E9%97%AE%23) `358.2K 🔥` `NEW`
1. [易烊千玺与理想L9Livis一起出发](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B8%8E%E7%90%86%E6%83%B3L9Livis%E4%B8%80%E8%B5%B7%E5%87%BA%E5%8F%91%23) `356.1K 🔥` `NEW`
1. [买iPhone17还是等iPhone18](https://s.weibo.com/weibo?q=%23%E4%B9%B0iPhone17%E8%BF%98%E6%98%AF%E7%AD%89iPhone18%23) `354.1K 🔥` `NEW`
1. [歌手回访十季十人 (The singer pays a return visit to Ten Seasons and Ten People)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%9B%9E%E8%AE%BF%E5%8D%81%E5%AD%A3%E5%8D%81%E4%BA%BA%23) `353.0K 🔥` `NEW`
1. [第一批iPhone17降价受害者发声](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9iPhone17%E9%99%8D%E4%BB%B7%E5%8F%97%E5%AE%B3%E8%80%85%E5%8F%91%E5%A3%B0%23) `350.7K 🔥` `NEW`
1. [白鹿李昀锐搭档](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%90%AD%E6%A1%A3%23) `348.7K 🔥` `NEW`
1. [孙颖莎Tatler亚洲十大体育明星](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8ETatler%E4%BA%9A%E6%B4%B2%E5%8D%81%E5%A4%A7%E4%BD%93%E8%82%B2%E6%98%8E%E6%98%9F%23) `347.6K 🔥` `NEW`
1. [华为Mate X7直降1000元](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate%20X7%E7%9B%B4%E9%99%8D1000%E5%85%83%23) `344.3K 🔥` `NEW`
1. [2工人高空作业1人被推下钢架](https://s.weibo.com/weibo?q=%232%E5%B7%A5%E4%BA%BA%E9%AB%98%E7%A9%BA%E4%BD%9C%E4%B8%9A1%E4%BA%BA%E8%A2%AB%E6%8E%A8%E4%B8%8B%E9%92%A2%E6%9E%B6%23) `341.4K 🔥` `NEW`
1. [男子骗养20多只狗供烈犬撕咬被刑拘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AA%97%E5%85%BB20%E5%A4%9A%E5%8F%AA%E7%8B%97%E4%BE%9B%E7%83%88%E7%8A%AC%E6%92%95%E5%92%AC%E8%A2%AB%E5%88%91%E6%8B%98%23) `339.1K 🔥` `NEW`
1. [金莎自曝长针眼了](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E8%87%AA%E6%9B%9D%E9%95%BF%E9%92%88%E7%9C%BC%E4%BA%86%23) `337.5K 🔥` `NEW`
1. [女子拼死留住的巴掌双胞胎1岁半了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%BC%E6%AD%BB%E7%95%99%E4%BD%8F%E7%9A%84%E5%B7%B4%E6%8E%8C%E5%8F%8C%E8%83%9E%E8%83%8E1%E5%B2%81%E5%8D%8A%E4%BA%86%23) `335.7K 🔥` `NEW`
1. [韩东君拍的杨紫](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B8%9C%E5%90%9B%E6%8B%8D%E7%9A%84%E6%9D%A8%E7%B4%AB%23) `332.4K 🔥` `NEW`
1. [阿嬷李思潼票房 (Grandma Li Sitong box office)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%AC%B7%E6%9D%8E%E6%80%9D%E6%BD%BC%E7%A5%A8%E6%88%BF%23) `330.4K 🔥` `NEW`
1. [张本美和直言孙颖莎是怪物级选手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E7%9B%B4%E8%A8%80%E5%AD%99%E9%A2%96%E8%8E%8E%E6%98%AF%E6%80%AA%E7%89%A9%E7%BA%A7%E9%80%89%E6%89%8B%23) `327.5K 🔥` `NEW`
1. [鹿晗希林娜依高山歌对唱](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E5%B1%B1%E6%AD%8C%E5%AF%B9%E5%94%B1%23) `325.5K 🔥` `NEW`
1. [周也戛纳红毯体态](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%88%9B%E7%BA%B3%E7%BA%A2%E6%AF%AF%E4%BD%93%E6%80%81%23) `324.7K 🔥` `NEW`
1. [名侦探柯南](https://s.weibo.com/weibo?q=%23%E5%90%8D%E4%BE%A6%E6%8E%A2%E6%9F%AF%E5%8D%97%23) `322.3K 🔥` `NEW`
1. [阚清子自荐上歌手](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%87%AA%E8%8D%90%E4%B8%8A%E6%AD%8C%E6%89%8B%23) `318.3K 🔥` `NEW`
1. [发虐猫影像学生自称已开始虐猫6年](https://s.weibo.com/weibo?q=%23%E5%8F%91%E8%99%90%E7%8C%AB%E5%BD%B1%E5%83%8F%E5%AD%A6%E7%94%9F%E8%87%AA%E7%A7%B0%E5%B7%B2%E5%BC%80%E5%A7%8B%E8%99%90%E7%8C%AB6%E5%B9%B4%23) `317.2K 🔥` `NEW`
1. [可复美全球品牌大使魏大勋](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E5%A4%8D%E7%BE%8E%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E9%AD%8F%E5%A4%A7%E5%8B%8B%23) `1.1M 🔥` `+1556%`
1. [机票燃油附加费明天起上调](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E7%87%83%E6%B2%B9%E9%99%84%E5%8A%A0%E8%B4%B9%E6%98%8E%E5%A4%A9%E8%B5%B7%E4%B8%8A%E8%B0%83%23) `321.4K 🔥`
1. [特朗普访华欢迎宴会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `342.6K 🔥` `-44%`
1. [甲状腺结节该吃碘盐还是无碘盐 (Should you eat iodized salt or non-iodized salt for thyroid nodules?)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E7%BB%93%E8%8A%82%E8%AF%A5%E5%90%83%E7%A2%98%E7%9B%90%E8%BF%98%E6%98%AF%E6%97%A0%E7%A2%98%E7%9B%90%23) `333.4K 🔥` `-51%`

Updated at 2026-05-15 13:35:52

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
