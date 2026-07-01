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

1. [姆巴佩世界杯射手榜第二 (Mbappe ranks second among World Cup scorers)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%84%E6%89%8B%E6%A6%9C%E7%AC%AC%E4%BA%8C%23) `992.3K 🔥` `NEW`
1. [陈瑶没发张月](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B2%A1%E5%8F%91%E5%BC%A0%E6%9C%88%23) `884.5K 🔥` `NEW`
1. [杨紫白玉兰庆功宴](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `741.6K 🔥` `NEW`
1. [法国晋级世界杯16强](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E6%9D%AF16%E5%BC%BA%23) `388.7K 🔥` `NEW`
1. [姜珮瑶回应](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E7%8F%AE%E7%91%B6%E5%9B%9E%E5%BA%94%23) `387.8K 🔥` `NEW`
1. [罗晋眼里没光了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%99%8B%E7%9C%BC%E9%87%8C%E6%B2%A1%E5%85%89%E4%BA%86%23) `385.1K 🔥` `NEW`
1. [世界杯死亡之组全部淘汰](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%AD%BB%E4%BA%A1%E4%B9%8B%E7%BB%84%E5%85%A8%E9%83%A8%E6%B7%98%E6%B1%B0%23) `382.7K 🔥` `NEW`
1. [虞书欣坐在蚌壳里拍照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9D%90%E5%9C%A8%E8%9A%8C%E5%A3%B3%E9%87%8C%E6%8B%8D%E7%85%A7%23) `381.6K 🔥` `NEW`
1. [四渡](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%B8%A1%23) `380.3K 🔥` `NEW`
1. [金鹰奖最佳女主第二波入围名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E7%AC%AC%E4%BA%8C%E6%B3%A2%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `377.4K 🔥` `NEW`
1. [伦纳德重返猛龙 (Leonard returns to Raptors)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E7%BA%B3%E5%BE%B7%E9%87%8D%E8%BF%94%E7%8C%9B%E9%BE%99%23) `375.8K 🔥` `NEW`
1. [恋与深空新男主不上线国外反应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0%E7%94%B7%E4%B8%BB%E4%B8%8D%E4%B8%8A%E7%BA%BF%E5%9B%BD%E5%A4%96%E5%8F%8D%E5%BA%94%23) `374.3K 🔥` `NEW`
1. [巴西 挪威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%20%E6%8C%AA%E5%A8%81%23) `372.9K 🔥` `NEW`
1. [大爷长40厘米巨型血栓脱落可致命](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E9%95%BF40%E5%8E%98%E7%B1%B3%E5%B7%A8%E5%9E%8B%E8%A1%80%E6%A0%93%E8%84%B1%E8%90%BD%E5%8F%AF%E8%87%B4%E5%91%BD%23) `371.5K 🔥` `NEW`
1. [28岁羊水栓塞产妇多器官衰竭](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E4%BA%A7%E5%A6%87%E5%A4%9A%E5%99%A8%E5%AE%98%E8%A1%B0%E7%AB%AD%23) `356.8K 🔥` `NEW`
1. [詹姆斯4次换队都在世界杯期间](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF4%E6%AC%A1%E6%8D%A2%E9%98%9F%E9%83%BD%E5%9C%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%9F%E9%97%B4%23) `237.8K 🔥` `NEW`
1. [现在就出发4 金晨](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%20%E9%87%91%E6%99%A8%23) `211.5K 🔥` `NEW`
1. [刘烨回应为何不在互联网耍宝了](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A8%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%9C%A8%E4%BA%92%E8%81%94%E7%BD%91%E8%80%8D%E5%AE%9D%E4%BA%86%23) `206.4K 🔥` `NEW`
1. [挪威晋级世界杯16强](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E6%9D%AF16%E5%BC%BA%23) `178.7K 🔥` `NEW`
1. [七一](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%80%23) `160.7K 🔥` `NEW`
1. [美团发布LongCat2.0 (Meituan releases LongCat 2.0)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%8F%91%E5%B8%83LongCat2.0%23) `159.4K 🔥` `NEW`
1. [网友未备案AI动画被优酷备案后收费](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9C%AA%E5%A4%87%E6%A1%88AI%E5%8A%A8%E7%94%BB%E8%A2%AB%E4%BC%98%E9%85%B7%E5%A4%87%E6%A1%88%E5%90%8E%E6%94%B6%E8%B4%B9%23) `158.6K 🔥` `NEW`
1. [被开除护士遭举报开房聊天记录曝光](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%80%E9%99%A4%E6%8A%A4%E5%A3%AB%E9%81%AD%E4%B8%BE%E6%8A%A5%E5%BC%80%E6%88%BF%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E6%9B%9D%E5%85%89%23) `158.0K 🔥` `NEW`
1. [詹姆斯确定离开湖人 (James confirms leaving Lakers)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%A1%AE%E5%AE%9A%E7%A6%BB%E5%BC%80%E6%B9%96%E4%BA%BA%23) `867.4K 🔥` `+54%`
1. [大爷静脉曲张十几年取出40厘米血栓 (Uncle had varicose veins and removed 40cm of blood clot for more than ten years)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E9%9D%99%E8%84%89%E6%9B%B2%E5%BC%A0%E5%8D%81%E5%87%A0%E5%B9%B4%E5%8F%96%E5%87%BA40%E5%8E%98%E7%B1%B3%E8%A1%80%E6%A0%93%23) `391.2K 🔥` `+85%`
1. [法国超跑 (French supercar)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%B6%85%E8%B7%91%23) `390.5K 🔥` `+154%`
1. [iPhone18Pro遭泄密](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%81%AD%E6%B3%84%E5%AF%86%23) `389.8K 🔥` `+1091%`
1. [医院护工九年劝你别太心疼爹妈](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%8A%A4%E5%B7%A5%E4%B9%9D%E5%B9%B4%E5%8A%9D%E4%BD%A0%E5%88%AB%E5%A4%AA%E5%BF%83%E7%96%BC%E7%88%B9%E5%A6%88%23) `386.9K 🔥` `+23%`
1. [暑假工才是真正的315](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E5%B7%A5%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84315%23) `383.1K 🔥` `+26%`
1. [花33万捐了350套路灯全是假货 (I spent 330,000 to donate 350 sets of street lights, all of which were fake.)](https://s.weibo.com/weibo?q=%23%E8%8A%B133%E4%B8%87%E6%8D%90%E4%BA%86350%E5%A5%97%E8%B7%AF%E7%81%AF%E5%85%A8%E6%98%AF%E5%81%87%E8%B4%A7%23) `379.7K 🔥` `+146%`
1. [SK海力士申请上市](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E7%94%B3%E8%AF%B7%E4%B8%8A%E5%B8%82%23) `378.0K 🔥` `+107%`
1. [姆巴佩世界杯18场18球](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%B8%96%E7%95%8C%E6%9D%AF18%E5%9C%BA18%E7%90%83%23) `375.2K 🔥` `+143%`
1. [海信空调法国暴涨100%](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E4%BF%A1%E7%A9%BA%E8%B0%83%E6%B3%95%E5%9B%BD%E6%9A%B4%E6%B6%A8100%25%23) `348.7K 🔥` `+125%`
1. [金鹰奖最佳男主角参评名单公布](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%E5%8F%82%E8%AF%84%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `347.5K 🔥` `+124%`
1. [张家界玻璃桥印度游客堵塞栈道 (Zhangjiajie Glass Bridge Indian tourists block the plank road)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E7%8E%BB%E7%92%83%E6%A1%A5%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%A0%B5%E5%A1%9E%E6%A0%88%E9%81%93%23) `320.5K 🔥` `+106%`
1. [多囊卵巢综合征正式更名 (Polycystic ovary syndrome officially changes its name)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E6%AD%A3%E5%BC%8F%E6%9B%B4%E5%90%8D%23) `238.3K 🔥` `+52%`
1. [哈兰德绝杀破门 (Haaland scores a stunning goal)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%BB%9D%E6%9D%80%E7%A0%B4%E9%97%A8%23) `2.2M 🔥`
1. [7月起一批重要法律法规将施行 (A number of important laws and regulations will be implemented from July)](https://s.weibo.com/weibo?q=%237%E6%9C%88%E8%B5%B7%E4%B8%80%E6%89%B9%E9%87%8D%E8%A6%81%E6%B3%95%E5%BE%8B%E6%B3%95%E8%A7%84%E5%B0%86%E6%96%BD%E8%A1%8C%23) `888.3K 🔥`
1. [法国3比0瑞典](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD3%E6%AF%940%E7%91%9E%E5%85%B8%23) `384.3K 🔥`
1. [张凌赫我连心疼你都有时差](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%88%91%E8%BF%9E%E5%BF%83%E7%96%BC%E4%BD%A0%E9%83%BD%E6%9C%89%E6%97%B6%E5%B7%AE%23) `346.5K 🔥`
1. [詹姆斯](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%23) `317.2K 🔥`
1. [我有发现95%情侣都长得像](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%9C%89%E5%8F%91%E7%8E%B095%25%E6%83%85%E4%BE%A3%E9%83%BD%E9%95%BF%E5%BE%97%E5%83%8F%23) `182.8K 🔥`
1. [张凌赫遗传了父母最精华的部分](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%97%E4%BC%A0%E4%BA%86%E7%88%B6%E6%AF%8D%E6%9C%80%E7%B2%BE%E5%8D%8E%E7%9A%84%E9%83%A8%E5%88%86%23) `159.8K 🔥`
1. [上半年A股涨幅王](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4A%E8%82%A1%E6%B6%A8%E5%B9%85%E7%8E%8B%23) `158.1K 🔥`
1. [法国vs瑞典太精彩了 (France vs Sweden is so exciting)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E7%91%9E%E5%85%B8%E5%A4%AA%E7%B2%BE%E5%BD%A9%E4%BA%86%23) `372.4K 🔥` `-59%`
1. [法国vs瑞典 (France vs Sweden)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E7%91%9E%E5%85%B8%23) `328.7K 🔥` `-71%`
1. [姆巴佩破门](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A0%B4%E9%97%A8%23) `190.8K 🔥` `-68%`
1. [海来阿木悼念早逝女儿 (Hai Lai Amu mourns the death of his daughter)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8%E6%82%BC%E5%BF%B5%E6%97%A9%E9%80%9D%E5%A5%B3%E5%84%BF%23) `169.9K 🔥` `-59%`
1. [Lisa大秀身材 (Lisa shows off her figure)](https://s.weibo.com/weibo?q=%23Lisa%E5%A4%A7%E7%A7%80%E8%BA%AB%E6%9D%90%23) `163.4K 🔥` `-48%`
1. [姆巴佩梅开二度](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `160.2K 🔥` `-49%`

Updated at 2026-07-01 08:18:14

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
