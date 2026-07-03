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

1. [莫德里奇炮轰裁判 (Modric blasts referee)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E7%82%AE%E8%BD%B0%E8%A3%81%E5%88%A4%23) `1.7M 🔥` `NEW`
1. [花少8阵容真的好强大](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E9%98%B5%E5%AE%B9%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%BC%BA%E5%A4%A7%23) `1.5M 🔥` `NEW`
1. [各领域拔节生长尽显发展动能](https://s.weibo.com/weibo?q=%23%E5%90%84%E9%A2%86%E5%9F%9F%E6%8B%94%E8%8A%82%E7%94%9F%E9%95%BF%E5%B0%BD%E6%98%BE%E5%8F%91%E5%B1%95%E5%8A%A8%E8%83%BD%23) `1.2M 🔥` `NEW`
1. [花少8北京开录](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%8C%97%E4%BA%AC%E5%BC%80%E5%BD%95%23) `1.0M 🔥` `NEW`
1. [空调电费](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E7%94%B5%E8%B4%B9%23) `985.7K 🔥` `NEW`
1. [上门取件焦虑症](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%97%A8%E5%8F%96%E4%BB%B6%E7%84%A6%E8%99%91%E7%97%87%23) `749.0K 🔥` `NEW`
1. [海岛出了个状元郎](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B2%9B%E5%87%BA%E4%BA%86%E4%B8%AA%E7%8A%B6%E5%85%83%E9%83%8E%23) `732.3K 🔥` `NEW`
1. [花少8 王可](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E7%8E%8B%E5%8F%AF%23) `714.3K 🔥` `NEW`
1. [现实中月入一万是什么水平](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%AE%9E%E4%B8%AD%E6%9C%88%E5%85%A5%E4%B8%80%E4%B8%87%E6%98%AF%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `665.3K 🔥` `NEW`
1. [曝阿里禁用Claude](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%98%BF%E9%87%8C%E7%A6%81%E7%94%A8Claude%23) `314.9K 🔥` `NEW`
1. [原来这才是男生眼里的漂亮饭 (It turns out that this is what boys see as beautiful rice)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E7%94%B7%E7%94%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E6%BC%82%E4%BA%AE%E9%A5%AD%23) `314.8K 🔥` `NEW`
1. [田曦薇 基因彩票](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%9F%BA%E5%9B%A0%E5%BD%A9%E7%A5%A8%23) `311.5K 🔥` `NEW`
1. [上海震感](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%9C%87%E6%84%9F%23) `310.2K 🔥` `NEW`
1. [C罗酒店楼下一片siu声](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%85%92%E5%BA%97%E6%A5%BC%E4%B8%8B%E4%B8%80%E7%89%87siu%E5%A3%B0%23) `306.9K 🔥` `NEW`
1. [茉莉奶白 LV](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%20LV%23) `304.5K 🔥` `NEW`
1. [油价4日起下调](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B74%E6%97%A5%E8%B5%B7%E4%B8%8B%E8%B0%83%23) `302.9K 🔥` `NEW`
1. [西安赛格商户坠亡事件三重拷问](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%95%86%E6%88%B7%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%E4%B8%89%E9%87%8D%E6%8B%B7%E9%97%AE%23) `301.9K 🔥` `NEW`
1. [Meta卖算力内情曝光](https://s.weibo.com/weibo?q=%23Meta%E5%8D%96%E7%AE%97%E5%8A%9B%E5%86%85%E6%83%85%E6%9B%9D%E5%85%89%23) `299.6K 🔥` `NEW`
1. [茉莉奶白 爆单](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%20%E7%88%86%E5%8D%95%23) `298.4K 🔥` `NEW`
1. [金世佳肚子](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%B8%96%E4%BD%B3%E8%82%9A%E5%AD%90%23) `297.3K 🔥` `NEW`
1. [白玉兰最佳编剧被指冒名 (Magnolia's best screenwriter accused of impersonation)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E7%BC%96%E5%89%A7%E8%A2%AB%E6%8C%87%E5%86%92%E5%90%8D%23) `296.4K 🔥` `NEW`
1. [克罗地亚出局后崩溃](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E5%87%BA%E5%B1%80%E5%90%8E%E5%B4%A9%E6%BA%83%23) `293.9K 🔥` `NEW`
1. [虞书欣指保镖](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%8C%87%E4%BF%9D%E9%95%96%23) `292.9K 🔥` `NEW`
1. [鞠婧祎发量被怀疑戴了假发片](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8F%91%E9%87%8F%E8%A2%AB%E6%80%80%E7%96%91%E6%88%B4%E4%BA%86%E5%81%87%E5%8F%91%E7%89%87%23) `291.5K 🔥` `NEW`
1. [房东才是找工作最好的人脉](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E6%89%8D%E6%98%AF%E6%89%BE%E5%B7%A5%E4%BD%9C%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BA%BA%E8%84%89%23) `289.9K 🔥` `NEW`
1. [霉霉婚礼伴娘](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%BC%B4%E5%A8%98%23) `288.3K 🔥` `NEW`
1. [时代少年团沈阳音乐节](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%B2%88%E9%98%B3%E9%9F%B3%E4%B9%90%E8%8A%82%23) `287.0K 🔥` `NEW`
1. [夏天打鸡蛋一定要用两个碗](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E6%89%93%E9%B8%A1%E8%9B%8B%E4%B8%80%E5%AE%9A%E8%A6%81%E7%94%A8%E4%B8%A4%E4%B8%AA%E7%A2%97%23) `286.4K 🔥` `NEW`
1. [邓为录制花少8路透](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E5%BD%95%E5%88%B6%E8%8A%B1%E5%B0%918%E8%B7%AF%E9%80%8F%23) `284.3K 🔥` `NEW`
1. [2026MSI](https://s.weibo.com/weibo?q=%232026MSI%23) `282.6K 🔥` `NEW`
1. [克罗地亚足球队发文 (Croatia football team issued a message)](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E8%B6%B3%E7%90%83%E9%98%9F%E5%8F%91%E6%96%87%23) `281.1K 🔥` `NEW`
1. [专家称LV的logo原型是中国传统纹样](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0LV%E7%9A%84logo%E5%8E%9F%E5%9E%8B%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BC%A0%E7%BB%9F%E7%BA%B9%E6%A0%B7%23) `278.6K 🔥` `NEW`
1. [黄牛倒卖60000多张演唱会票](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%89%9B%E5%80%92%E5%8D%9660000%E5%A4%9A%E5%BC%A0%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%23) `277.0K 🔥` `NEW`
1. [茉莉奶白从百万撤离到千万赔偿](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E4%BB%8E%E7%99%BE%E4%B8%87%E6%92%A4%E7%A6%BB%E5%88%B0%E5%8D%83%E4%B8%87%E8%B5%94%E5%81%BF%23) `274.2K 🔥` `NEW`
1. [小糯米已经和TF五代一样大了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%B7%B2%E7%BB%8F%E5%92%8CTF%E4%BA%94%E4%BB%A3%E4%B8%80%E6%A0%B7%E5%A4%A7%E4%BA%86%23) `272.9K 🔥` `NEW`
1. [哈梅内伊遗体告别仪式举行](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%97%E4%BD%93%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%E4%B8%BE%E8%A1%8C%23) `272.3K 🔥` `NEW`
1. [班主任当久了找不到自己妈妈了](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%BD%93%E4%B9%85%E4%BA%86%E6%89%BE%E4%B8%8D%E5%88%B0%E8%87%AA%E5%B7%B1%E5%A6%88%E5%A6%88%E4%BA%86%23) `270.0K 🔥` `NEW`
1. [霉霉夫妇捐赠2600万美元](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A4%AB%E5%A6%87%E6%8D%90%E8%B5%A02600%E4%B8%87%E7%BE%8E%E5%85%83%23) `269.6K 🔥` `NEW`
1. [周深不相信自己破音了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%B8%8D%E7%9B%B8%E4%BF%A1%E8%87%AA%E5%B7%B1%E7%A0%B4%E9%9F%B3%E4%BA%86%23) `267.4K 🔥` `NEW`
1. [G2对战TES](https://s.weibo.com/weibo?q=%23G2%E5%AF%B9%E6%88%98TES%23) `265.4K 🔥` `NEW`
1. [章龄之每月给陈龙1万多生活费 (Zhang Lingzhi gives Chen Long more than 10,000 yuan in living expenses every month)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E9%BE%84%E4%B9%8B%E6%AF%8F%E6%9C%88%E7%BB%99%E9%99%88%E9%BE%991%E4%B8%87%E5%A4%9A%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `264.4K 🔥` `NEW`
1. [刘耀文问黄子弘凡零几年的](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E9%97%AE%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E9%9B%B6%E5%87%A0%E5%B9%B4%E7%9A%84%23) `262.6K 🔥` `NEW`
1. [时代少年团hi6走位](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2hi6%E8%B5%B0%E4%BD%8D%23) `261.0K 🔥` `NEW`
1. [瑶一瑶因放学最后被接大哭](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%9B%A0%E6%94%BE%E5%AD%A6%E6%9C%80%E5%90%8E%E8%A2%AB%E6%8E%A5%E5%A4%A7%E5%93%AD%23) `258.0K 🔥` `NEW`
1. [茉莉奶白已成功登记四叶星著作权 (Jasmine Milk White has successfully registered the copyright of Four-leaf Star)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%B7%B2%E6%88%90%E5%8A%9F%E7%99%BB%E8%AE%B0%E5%9B%9B%E5%8F%B6%E6%98%9F%E8%91%97%E4%BD%9C%E6%9D%83%23) `312.9K 🔥` `-46%`
1. [15万就能买一个人一年的朝九晚五](https://s.weibo.com/weibo?q=%2315%E4%B8%87%E5%B0%B1%E8%83%BD%E4%B9%B0%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%80%E5%B9%B4%E7%9A%84%E6%9C%9D%E4%B9%9D%E6%99%9A%E4%BA%94%23) `308.5K 🔥` `-47%`
1. [FIFA官方证实克罗地亚绝平球无效](https://s.weibo.com/weibo?q=%23FIFA%E5%AE%98%E6%96%B9%E8%AF%81%E5%AE%9E%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E7%BB%9D%E5%B9%B3%E7%90%83%E6%97%A0%E6%95%88%23) `305.6K 🔥` `-48%`
1. [杭州震感](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%9C%87%E6%84%9F%23) `279.6K 🔥` `-51%`
1. [C罗哭了 (Ronaldo cried)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%93%AD%E4%BA%86%23) `276.0K 🔥` `-91%`
1. [法国晕倒女子超市里死抱空调扇不撒手](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%99%95%E5%80%92%E5%A5%B3%E5%AD%90%E8%B6%85%E5%B8%82%E9%87%8C%E6%AD%BB%E6%8A%B1%E7%A9%BA%E8%B0%83%E6%89%87%E4%B8%8D%E6%92%92%E6%89%8B%23) `261.8K 🔥` `-40%`
1. [足球内置芯片救了葡萄牙](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E5%86%85%E7%BD%AE%E8%8A%AF%E7%89%87%E6%95%91%E4%BA%86%E8%91%A1%E8%90%84%E7%89%99%23) `259.5K 🔥` `-47%`

Updated at 2026-07-03 16:26:06

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
