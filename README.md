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

1. [52岁医生胃癌确诊到离世仅2个月 (The 52-year-old doctor was diagnosed with gastric cancer and died only 2 months ago)](https://s.weibo.com/weibo?q=%2352%E5%B2%81%E5%8C%BB%E7%94%9F%E8%83%83%E7%99%8C%E7%A1%AE%E8%AF%8A%E5%88%B0%E7%A6%BB%E4%B8%96%E4%BB%852%E4%B8%AA%E6%9C%88%23) `740.6K 🔥` `NEW`
1. [赵心童恭喜吴宜泽](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E6%81%AD%E5%96%9C%E5%90%B4%E5%AE%9C%E6%B3%BD%23) `650.7K 🔥` `NEW`
1. [斯诺克世锦赛首个00后冠军](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%E4%B8%96%E9%94%A6%E8%B5%9B%E9%A6%96%E4%B8%AA00%E5%90%8E%E5%86%A0%E5%86%9B%23) `244.3K 🔥` `NEW`
1. [90后前运动员从不吸烟双肺长满囊泡](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%89%8D%E8%BF%90%E5%8A%A8%E5%91%98%E4%BB%8E%E4%B8%8D%E5%90%B8%E7%83%9F%E5%8F%8C%E8%82%BA%E9%95%BF%E6%BB%A1%E5%9B%8A%E6%B3%A1%23) `242.1K 🔥` `NEW`
1. [丁俊晖祝贺吴宜泽](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E7%A5%9D%E8%B4%BA%E5%90%B4%E5%AE%9C%E6%B3%BD%23) `235.0K 🔥` `NEW`
1. [吴宜泽回应世锦赛夺冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%9B%9E%E5%BA%94%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `227.8K 🔥` `NEW`
1. [吴宜泽](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%23) `224.8K 🔥` `NEW`
1. [浮生](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%23) `221.7K 🔥` `NEW`
1. [埃弗顿3比3曼城](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%BC%97%E9%A1%BF3%E6%AF%943%E6%9B%BC%E5%9F%8E%23) `216.4K 🔥` `NEW`
1. [第五人格宁芙奖](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E5%AE%81%E8%8A%99%E5%A5%96%23) `213.3K 🔥` `NEW`
1. [伊朗发布向美军舰警告射击视频 (Iran releases video warning of firing at US warships)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E5%90%91%E7%BE%8E%E5%86%9B%E8%88%B0%E8%AD%A6%E5%91%8A%E5%B0%84%E5%87%BB%E8%A7%86%E9%A2%91%23) `212.2K 🔥` `NEW`
1. [中国台球协会祝贺吴宜泽](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%B0%E7%90%83%E5%8D%8F%E4%BC%9A%E7%A5%9D%E8%B4%BA%E5%90%B4%E5%AE%9C%E6%B3%BD%23) `205.7K 🔥` `NEW`
1. [良陈美锦](https://s.weibo.com/weibo?q=%23%E8%89%AF%E9%99%88%E7%BE%8E%E9%94%A6%23) `204.7K 🔥` `NEW`
1. [钟丽缇希望女儿结婚后再有亲密关系](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%B8%8C%E6%9C%9B%E5%A5%B3%E5%84%BF%E7%BB%93%E5%A9%9A%E5%90%8E%E5%86%8D%E6%9C%89%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%23) `203.5K 🔥` `NEW`
1. [吴宜泽夺世锦赛冠军 (Wu Yize wins world championship)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%A4%BA%E4%B8%96%E9%94%A6%E8%B5%9B%E5%86%A0%E5%86%9B%23) `2.6M 🔥` `+1982%`
1. [国乒急需下一个樊振东王楚钦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E6%80%A5%E9%9C%80%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `1.1M 🔥` `+42%`
1. [五一特色专列串起万里山河](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E7%89%B9%E8%89%B2%E4%B8%93%E5%88%97%E4%B8%B2%E8%B5%B7%E4%B8%87%E9%87%8C%E5%B1%B1%E6%B2%B3%23) `779.9K 🔥` `+95%`
1. [小时候感觉用杯子喝牛奶的都是主角](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E6%84%9F%E8%A7%89%E7%94%A8%E6%9D%AF%E5%AD%90%E5%96%9D%E7%89%9B%E5%A5%B6%E7%9A%84%E9%83%BD%E6%98%AF%E4%B8%BB%E8%A7%92%23) `474.1K 🔥` `+118%`
1. [宋亚轩回应你永远并非一个长灯牌 (Song Yaxuan responded that you will never be a long-standing brand)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E5%BA%94%E4%BD%A0%E6%B0%B8%E8%BF%9C%E5%B9%B6%E9%9D%9E%E4%B8%80%E4%B8%AA%E9%95%BF%E7%81%AF%E7%89%8C%23) `385.6K 🔥` `+36%`
1. [女子怀孕3个月确诊肺癌终止妊娠 (Woman diagnosed with lung cancer 3 months pregnant terminates pregnancy)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%953%E4%B8%AA%E6%9C%88%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E7%BB%88%E6%AD%A2%E5%A6%8A%E5%A8%A0%23) `328.3K 🔥` `+58%`
1. [杨紫送谢娜演唱会花篮 (Yang Zi gave Xie Na a concert flower basket)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%80%81%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E7%AF%AE%23) `250.1K 🔥` `+102%`
1. [支付宝把便利店搞成球迷流水席 (Alipay turns convenience stores into fans’ seats)](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8A%8A%E4%BE%BF%E5%88%A9%E5%BA%97%E6%90%9E%E6%88%90%E7%90%83%E8%BF%B7%E6%B5%81%E6%B0%B4%E5%B8%AD%23) `249.9K 🔥` `+99%`
1. [留德男子多次迷奸女友并记录传播](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%BE%B7%E7%94%B7%E5%AD%90%E5%A4%9A%E6%AC%A1%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B%E5%B9%B6%E8%AE%B0%E5%BD%95%E4%BC%A0%E6%92%AD%23) `248.8K 🔥` `+99%`
1. [男主播嘲讽女子40码鞋被永久除名](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%BB%E6%92%AD%E5%98%B2%E8%AE%BD%E5%A5%B3%E5%AD%9040%E7%A0%81%E9%9E%8B%E8%A2%AB%E6%B0%B8%E4%B9%85%E9%99%A4%E5%90%8D%23) `247.4K 🔥` `+99%`
1. [豆包 付费](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E4%BB%98%E8%B4%B9%23) `246.5K 🔥` `+98%`
1. [红果VIP 付费 (Hongguo VIP paid)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9CVIP%20%E4%BB%98%E8%B4%B9%23) `245.3K 🔥` `+98%`
1. [终于懂了朝花夕拾的力量](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E4%BA%86%E6%9C%9D%E8%8A%B1%E5%A4%95%E6%8B%BE%E7%9A%84%E5%8A%9B%E9%87%8F%23) `241.6K 🔥` `+22%`
1. [中国向联合国发出警告 (China issues warning to United Nations)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%91%E8%81%94%E5%90%88%E5%9B%BD%E5%8F%91%E5%87%BA%E8%AD%A6%E5%91%8A%23) `237.9K 🔥` `+94%`
1. [金价银价又大跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E5%8F%88%E5%A4%A7%E8%B7%8C%E4%BA%86%23) `236.8K 🔥` `+127%`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `235.4K 🔥` `+92%`
1. [美舰在霍尔木兹海峡附近遭伊导弹攻击](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%88%B0%E5%9C%A8%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%99%84%E8%BF%91%E9%81%AD%E4%BC%8A%E5%AF%BC%E5%BC%B9%E6%94%BB%E5%87%BB%23) `233.1K 🔥` `+89%`
1. [东风日产NX8丹麦见证国羽巅峰 (Dongfeng Nissan NX8 Denmark witnesses the peak of national featherweight)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E6%97%A5%E4%BA%A7NX8%E4%B8%B9%E9%BA%A6%E8%A7%81%E8%AF%81%E5%9B%BD%E7%BE%BD%E5%B7%85%E5%B3%B0%23) `232.4K 🔥` `+242%`
1. [平台已对抢方向盘女子账号实施管控](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E5%B7%B2%E5%AF%B9%E6%8A%A2%E6%96%B9%E5%90%91%E7%9B%98%E5%A5%B3%E5%AD%90%E8%B4%A6%E5%8F%B7%E5%AE%9E%E6%96%BD%E7%AE%A1%E6%8E%A7%23) `231.3K 🔥` `+121%`
1. [曾沛慈范玮琪合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%8C%83%E7%8E%AE%E7%90%AA%E5%90%88%E7%85%A7%23) `229.8K 🔥` `+120%`
1. [于正看短剧Enemy看哭了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E7%9C%8B%E7%9F%AD%E5%89%A7Enemy%E7%9C%8B%E5%93%AD%E4%BA%86%23) `229.0K 🔥` `+412%`
1. [尹净汉更新](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E5%87%80%E6%B1%89%E6%9B%B4%E6%96%B0%23) `225.8K 🔥` `+117%`
1. [国内油价将迎调整 (Domestic oil prices will adjust)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%B2%B9%E4%BB%B7%E5%B0%86%E8%BF%8E%E8%B0%83%E6%95%B4%23) `224.2K 🔥` `+115%`
1. [父亲长期室内吸烟16岁女儿肺癌 (Father's long-term indoor smoking causes lung cancer in 16-year-old daughter)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%95%BF%E6%9C%9F%E5%AE%A4%E5%86%85%E5%90%B8%E7%83%9F16%E5%B2%81%E5%A5%B3%E5%84%BF%E8%82%BA%E7%99%8C%23) `222.4K 🔥` `+113%`
1. [他就摸了一下魔方就复原了](https://s.weibo.com/weibo?q=%23%E4%BB%96%E5%B0%B1%E6%91%B8%E4%BA%86%E4%B8%80%E4%B8%8B%E9%AD%94%E6%96%B9%E5%B0%B1%E5%A4%8D%E5%8E%9F%E4%BA%86%23) `220.1K 🔥` `+111%`
1. [香港酒店女子坠亡砸中女路人 (Woman falls to death in Hong Kong hotel and hits female passerby)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%85%92%E5%BA%97%E5%A5%B3%E5%AD%90%E5%9D%A0%E4%BA%A1%E7%A0%B8%E4%B8%AD%E5%A5%B3%E8%B7%AF%E4%BA%BA%23) `218.8K 🔥` `+110%`
1. [浏阳烟花厂爆炸救援仍在进行 (Rescue from explosion at Liuyang Fireworks Factory is still in progress)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E6%95%91%E6%8F%B4%E4%BB%8D%E5%9C%A8%E8%BF%9B%E8%A1%8C%23) `217.9K 🔥` `+109%`
1. [飞机上的饮用水产地是路边](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E4%B8%8A%E7%9A%84%E9%A5%AE%E7%94%A8%E6%B0%B4%E4%BA%A7%E5%9C%B0%E6%98%AF%E8%B7%AF%E8%BE%B9%23) `216.8K 🔥` `+108%`
1. [唐嫣演技 (Tang Yan acting skills)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%BC%94%E6%8A%80%23) `214.8K 🔥` `+106%`
1. [红日 (red sun)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%97%A5%23) `211.4K 🔥` `+103%`
1. [世乒赛](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%23) `210.2K 🔥` `+97%`
1. [低智商犯罪热度](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E7%83%AD%E5%BA%A6%23) `208.7K 🔥` `+101%`
1. [伊朗公布霍尔木兹海峡管控新范围](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%AE%A1%E6%8E%A7%E6%96%B0%E8%8C%83%E5%9B%B4%23) `208.0K 🔥` `+100%`
1. [a2婴儿奶粉检出呕吐毒素在美召回 (A2 infant milk powder recalled in the U.S. due to detection of DON)](https://s.weibo.com/weibo?q=%23a2%E5%A9%B4%E5%84%BF%E5%A5%B6%E7%B2%89%E6%A3%80%E5%87%BA%E5%91%95%E5%90%90%E6%AF%92%E7%B4%A0%E5%9C%A8%E7%BE%8E%E5%8F%AC%E5%9B%9E%23) `207.0K 🔥` `+99%`
1. [严浩翔哭了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%93%AD%E4%BA%86%23) `239.1K 🔥`
1. [吴宜泽vs墨菲 (Wu Yize vs Murphy)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BDvs%E5%A2%A8%E8%8F%B2%23) `240.3K 🔥` `-78%`

Updated at 2026-05-05 07:59:49

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
