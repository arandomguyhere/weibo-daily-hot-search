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

1. [百花奖红毯 (Hundred Flowers Awards Red Carpet)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E7%BA%A2%E6%AF%AF%23) `1.1M 🔥` `NEW`
1. [百花奖好多高定](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%A5%BD%E5%A4%9A%E9%AB%98%E5%AE%9A%23) `1.0M 🔥` `NEW`
1. [女孩南太行失联14天后遗体被找到](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%A4%B1%E8%81%9414%E5%A4%A9%E5%90%8E%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `901.9K 🔥` `NEW`
1. [多位大疆员工离职后创业成功](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E5%A4%A7%E7%96%86%E5%91%98%E5%B7%A5%E7%A6%BB%E8%81%8C%E5%90%8E%E5%88%9B%E4%B8%9A%E6%88%90%E5%8A%9F%23) `390.4K 🔥` `NEW`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `387.6K 🔥` `NEW`
1. [泰国被接机女生疑遭带走](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%8E%A5%E6%9C%BA%E5%A5%B3%E7%94%9F%E7%96%91%E9%81%AD%E5%B8%A6%E8%B5%B0%23) `382.7K 🔥` `NEW`
1. [胚胎案妻子最新回应暂不离婚](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%E6%9A%82%E4%B8%8D%E7%A6%BB%E5%A9%9A%23) `350.0K 🔥` `NEW`
1. [百花奖闭幕式节目单](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%97%AD%E5%B9%95%E5%BC%8F%E8%8A%82%E7%9B%AE%E5%8D%95%23) `339.9K 🔥` `NEW`
1. [10年后发现喜被里红鸡蛋2个仍完好](https://s.weibo.com/weibo?q=%2310%E5%B9%B4%E5%90%8E%E5%8F%91%E7%8E%B0%E5%96%9C%E8%A2%AB%E9%87%8C%E7%BA%A2%E9%B8%A1%E8%9B%8B2%E4%B8%AA%E4%BB%8D%E5%AE%8C%E5%A5%BD%23) `338.9K 🔥` `NEW`
1. [易烊千玺宝格丽胸针](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%AE%9D%E6%A0%BC%E4%B8%BD%E8%83%B8%E9%92%88%23) `334.8K 🔥` `NEW`
1. [王曼昱 头号种子出战 (Wang Manyu, the top seed, competes)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%20%E5%A4%B4%E5%8F%B7%E7%A7%8D%E5%AD%90%E5%87%BA%E6%88%98%23) `332.2K 🔥` `NEW`
1. [韩国女性怒斥AA制结婚](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%80%A7%E6%80%92%E6%96%A5AA%E5%88%B6%E7%BB%93%E5%A9%9A%23) `331.2K 🔥` `NEW`
1. [上海台风未发统一停工通知](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%E6%9C%AA%E5%8F%91%E7%BB%9F%E4%B8%80%E5%81%9C%E5%B7%A5%E9%80%9A%E7%9F%A5%23) `327.8K 🔥` `NEW`
1. [压片糖果宣称能对抗焦郁](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E7%89%87%E7%B3%96%E6%9E%9C%E5%AE%A3%E7%A7%B0%E8%83%BD%E5%AF%B9%E6%8A%97%E7%84%A6%E9%83%81%23) `327.5K 🔥` `NEW`
1. [河北故城连夜整改养猪场排污乱象](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E6%95%85%E5%9F%8E%E8%BF%9E%E5%A4%9C%E6%95%B4%E6%94%B9%E5%85%BB%E7%8C%AA%E5%9C%BA%E6%8E%92%E6%B1%A1%E4%B9%B1%E8%B1%A1%23) `327.3K 🔥` `NEW`
1. [我的洞洞鞋不能沾水](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E6%B4%9E%E6%B4%9E%E9%9E%8B%E4%B8%8D%E8%83%BD%E6%B2%BE%E6%B0%B4%23) `327.3K 🔥` `NEW`
1. [短剧女演员百花奖造型](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%A5%B3%E6%BC%94%E5%91%98%E7%99%BE%E8%8A%B1%E5%A5%96%E9%80%A0%E5%9E%8B%23) `313.8K 🔥` `NEW`
1. [龙餐馆引发中东网民讨论](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%BC%95%E5%8F%91%E4%B8%AD%E4%B8%9C%E7%BD%91%E6%B0%91%E8%AE%A8%E8%AE%BA%23) `286.5K 🔥` `NEW`
1. [花开锦绣下沉口碑](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `285.1K 🔥` `NEW`
1. [沐言听到姜潮麦迪娜办婚礼以为离婚了](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E5%90%AC%E5%88%B0%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%8A%9E%E5%A9%9A%E7%A4%BC%E4%BB%A5%E4%B8%BA%E7%A6%BB%E5%A9%9A%E4%BA%86%23) `285.0K 🔥` `NEW`
1. [AI把讨伐型人格演爽了 (AI plays the role of a crusading personality very well)](https://s.weibo.com/weibo?q=%23AI%E6%8A%8A%E8%AE%A8%E4%BC%90%E5%9E%8B%E4%BA%BA%E6%A0%BC%E6%BC%94%E7%88%BD%E4%BA%86%23) `283.5K 🔥` `NEW`
1. [林志玲4岁儿子正脸](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B24%E5%B2%81%E5%84%BF%E5%AD%90%E6%AD%A3%E8%84%B8%23) `282.1K 🔥` `NEW`
1. [百花奖](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `279.1K 🔥` `NEW`
1. [闫安说国乒绝对主力重心在亚运会](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%AE%89%E8%AF%B4%E5%9B%BD%E4%B9%92%E7%BB%9D%E5%AF%B9%E4%B8%BB%E5%8A%9B%E9%87%8D%E5%BF%83%E5%9C%A8%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `253.6K 🔥` `NEW`
1. [白海豚突然大拐弯 (White dolphin suddenly makes a sharp turn)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `3.1M 🔥` `+36%`
1. [深圳APEC峰会倒计时100天](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3APEC%E5%B3%B0%E4%BC%9A%E5%80%92%E8%AE%A1%E6%97%B6100%E5%A4%A9%23) `1.7M 🔥` `+393%`
1. [原来90后这么小众](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A590%E5%90%8E%E8%BF%99%E4%B9%88%E5%B0%8F%E4%BC%97%23) `1.3M 🔥` `+43%`
1. [Ning爆料Bin彻底不打了](https://s.weibo.com/weibo?q=%23Ning%E7%88%86%E6%96%99Bin%E5%BD%BB%E5%BA%95%E4%B8%8D%E6%89%93%E4%BA%86%23) `487.4K 🔥` `+43%`
1. [Shanji谈Flandre加入BLG原因](https://s.weibo.com/weibo?q=%23Shanji%E8%B0%88Flandre%E5%8A%A0%E5%85%A5BLG%E5%8E%9F%E5%9B%A0%23) `256.5K 🔥` `+42%`
1. [张伟丽给K100Pro系列上强度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%9F%E4%B8%BD%E7%BB%99K100Pro%E7%B3%BB%E5%88%97%E4%B8%8A%E5%BC%BA%E5%BA%A6%23) `919.6K 🔥`
1. [寿司郎误将已付款顾客当逃单报警](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E8%AF%AF%E5%B0%86%E5%B7%B2%E4%BB%98%E6%AC%BE%E9%A1%BE%E5%AE%A2%E5%BD%93%E9%80%83%E5%8D%95%E6%8A%A5%E8%AD%A6%23) `377.0K 🔥`
1. [迪丽热巴曾靠玉米茶叶蛋熬过追梦期 (Dilraba once relied on corn, tea and eggs to survive her dream-chasing period)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9B%BE%E9%9D%A0%E7%8E%89%E7%B1%B3%E8%8C%B6%E5%8F%B6%E8%9B%8B%E7%86%AC%E8%BF%87%E8%BF%BD%E6%A2%A6%E6%9C%9F%23) `371.8K 🔥`
1. [费大厨撤下全国小炒肉大王称号](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E6%92%A4%E4%B8%8B%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E7%A7%B0%E5%8F%B7%23) `366.0K 🔥`
1. [台风致上海严重内涝](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E8%87%B4%E4%B8%8A%E6%B5%B7%E4%B8%A5%E9%87%8D%E5%86%85%E6%B6%9D%23) `362.9K 🔥`
1. [立秋后突然就不热了](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%E5%90%8E%E7%AA%81%E7%84%B6%E5%B0%B1%E4%B8%8D%E7%83%AD%E4%BA%86%23) `355.8K 🔥`
1. [第一批用AI租房的受益者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8AI%E7%A7%9F%E6%88%BF%E7%9A%84%E5%8F%97%E7%9B%8A%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `354.4K 🔥`
1. [广岛长崎的昨日未必不会是日本的明天 (Hiroshima and Nagasaki’s yesterday may not be Japan’s tomorrow)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B2%9B%E9%95%BF%E5%B4%8E%E7%9A%84%E6%98%A8%E6%97%A5%E6%9C%AA%E5%BF%85%E4%B8%8D%E4%BC%9A%E6%98%AF%E6%97%A5%E6%9C%AC%E7%9A%84%E6%98%8E%E5%A4%A9%23) `351.9K 🔥`
1. [孔雪儿自曝拒绝浪姐邀请](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%87%AA%E6%9B%9D%E6%8B%92%E7%BB%9D%E6%B5%AA%E5%A7%90%E9%82%80%E8%AF%B7%23) `344.9K 🔥`
1. [无锡 内涝](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%20%E5%86%85%E6%B6%9D%23) `342.3K 🔥`
1. [迪丽热巴拍照被认出仓皇跑到车上](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8B%8D%E7%85%A7%E8%A2%AB%E8%AE%A4%E5%87%BA%E4%BB%93%E7%9A%87%E8%B7%91%E5%88%B0%E8%BD%A6%E4%B8%8A%23) `329.5K 🔥`
1. [刘耀文百花奖双奢造型](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%99%BE%E8%8A%B1%E5%A5%96%E5%8F%8C%E5%A5%A2%E9%80%A0%E5%9E%8B%23) `280.4K 🔥`
1. [无罪释放后负债3000万国赔仅41万](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%BD%AA%E9%87%8A%E6%94%BE%E5%90%8E%E8%B4%9F%E5%80%BA3000%E4%B8%87%E5%9B%BD%E8%B5%94%E4%BB%8541%E4%B8%87%23) `279.1K 🔥`
1. [罗子君凌玲押送陈俊生 (Luo Zijun Lingling escorts Chen Junsheng)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%AD%90%E5%90%9B%E5%87%8C%E7%8E%B2%E6%8A%BC%E9%80%81%E9%99%88%E4%BF%8A%E7%94%9F%23) `259.6K 🔥`
1. [演员秦焰去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%A7%A6%E7%84%B0%E5%8E%BB%E4%B8%96%23) `2.2M 🔥` `-39%`
1. [偶像来了 重启回归 (Idol is here, reboot and return)](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E9%87%8D%E5%90%AF%E5%9B%9E%E5%BD%92%23) `381.6K 🔥` `-70%`
1. [百花奖造型出图](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%80%A0%E5%9E%8B%E5%87%BA%E5%9B%BE%23) `360.1K 🔥` `-54%`
1. [杨幂五穿祖海高定](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E4%BA%94%E7%A9%BF%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%23) `346.8K 🔥` `-69%`
1. [阿维塔不认为和华为合作是必要项](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%E4%B8%8D%E8%AE%A4%E4%B8%BA%E5%92%8C%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%E6%98%AF%E5%BF%85%E8%A6%81%E9%A1%B9%23) `287.4K 🔥` `-38%`
1. [我们都低估了时间的力量](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E9%83%BD%E4%BD%8E%E4%BC%B0%E4%BA%86%E6%97%B6%E9%97%B4%E7%9A%84%E5%8A%9B%E9%87%8F%23) `257.2K 🔥` `-25%`
1. [韩国人吃泡菜量大降](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%90%83%E6%B3%A1%E8%8F%9C%E9%87%8F%E5%A4%A7%E9%99%8D%23) `250.3K 🔥` `-23%`
1. [百花奖闭幕式嘉宾阵容](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%97%AD%E5%B9%95%E5%BC%8F%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `248.9K 🔥` `-27%`

Updated at 2026-08-10 18:03:55

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
