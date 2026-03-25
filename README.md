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

1. [七彩云南万千气象 (Colorful weather in Yunnan)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%BD%A9%E4%BA%91%E5%8D%97%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%23) `609.8K 🔥` `NEW`
1. [周杰伦新专辑最平淡的歌曲是太阳之子](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%E6%9C%80%E5%B9%B3%E6%B7%A1%E7%9A%84%E6%AD%8C%E6%9B%B2%E6%98%AF%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90%23) `406.4K 🔥` `NEW`
1. [张雪峰最后一次直播画面](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E7%9B%B4%E6%92%AD%E7%94%BB%E9%9D%A2%23) `308.4K 🔥` `NEW`
1. [网络辟谣标签](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `302.2K 🔥` `NEW`
1. [美国与伊朗和谈方案曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%8E%E4%BC%8A%E6%9C%97%E5%92%8C%E8%B0%88%E6%96%B9%E6%A1%88%E6%9B%9D%E5%85%89%23) `298.3K 🔥` `NEW`
1. [嘴唇发紫 心脏不好](https://s.weibo.com/weibo?q=%23%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%20%E5%BF%83%E8%84%8F%E4%B8%8D%E5%A5%BD%23) `286.4K 🔥` `NEW`
1. [陈哲远一笑随歌飙升榜第二](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E4%B8%80%E7%AC%91%E9%9A%8F%E6%AD%8C%E9%A3%99%E5%8D%87%E6%A6%9C%E7%AC%AC%E4%BA%8C%23) `252.8K 🔥` `NEW`
1. [1秒钟下载1.4万部4K电影](https://s.weibo.com/weibo?q=%231%E7%A7%92%E9%92%9F%E4%B8%8B%E8%BD%BD1.4%E4%B8%87%E9%83%A84K%E7%94%B5%E5%BD%B1%23) `252.7K 🔥` `NEW`
1. [AC米兰悼念张雪峰](https://s.weibo.com/weibo?q=%23AC%E7%B1%B3%E5%85%B0%E6%82%BC%E5%BF%B5%E5%BC%A0%E9%9B%AA%E5%B3%B0%23) `245.0K 🔥` `NEW`
1. [张雪峰给不了自己女儿建议了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%BB%99%E4%B8%8D%E4%BA%86%E8%87%AA%E5%B7%B1%E5%A5%B3%E5%84%BF%E5%BB%BA%E8%AE%AE%E4%BA%86%23) `238.5K 🔥` `NEW`
1. [iPhone大量新功能上线 (Lots of new iPhone features coming online)](https://s.weibo.com/weibo?q=%23iPhone%E5%A4%A7%E9%87%8F%E6%96%B0%E5%8A%9F%E8%83%BD%E4%B8%8A%E7%BA%BF%23) `234.3K 🔥` `NEW`
1. [李卿早期垃圾小食品从夯到拉排序](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%E6%97%A9%E6%9C%9F%E5%9E%83%E5%9C%BE%E5%B0%8F%E9%A3%9F%E5%93%81%E4%BB%8E%E5%A4%AF%E5%88%B0%E6%8B%89%E6%8E%92%E5%BA%8F%23) `223.1K 🔥` `NEW`
1. [俞浅浅再也不可能真正自由了](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%B5%85%E6%B5%85%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%8F%AF%E8%83%BD%E7%9C%9F%E6%AD%A3%E8%87%AA%E7%94%B1%E4%BA%86%23) `204.2K 🔥` `NEW`
1. [熬夜 剧烈运动](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%20%E5%89%A7%E7%83%88%E8%BF%90%E5%8A%A8%23) `191.6K 🔥` `NEW`
1. [旧手机回收价暴涨五六倍](https://s.weibo.com/weibo?q=%23%E6%97%A7%E6%89%8B%E6%9C%BA%E5%9B%9E%E6%94%B6%E4%BB%B7%E6%9A%B4%E6%B6%A8%E4%BA%94%E5%85%AD%E5%80%8D%23) `163.4K 🔥` `NEW`
1. [周杰伦那天下雨了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E9%82%A3%E5%A4%A9%E4%B8%8B%E9%9B%A8%E4%BA%86%23) `162.8K 🔥` `NEW`
1. [李圣经北京](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A3%E7%BB%8F%E5%8C%97%E4%BA%AC%23) `160.1K 🔥` `NEW`
1. [大理通报女生被殴打事件](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%90%86%E9%80%9A%E6%8A%A5%E5%A5%B3%E7%94%9F%E8%A2%AB%E6%AE%B4%E6%89%93%E4%BA%8B%E4%BB%B6%23) `156.4K 🔥` `NEW`
1. [刘亦菲 宝格丽女王](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E5%AE%9D%E6%A0%BC%E4%B8%BD%E5%A5%B3%E7%8E%8B%23) `149.1K 🔥` `NEW`
1. [Sora将停运](https://s.weibo.com/weibo?q=%23Sora%E5%B0%86%E5%81%9C%E8%BF%90%23) `144.0K 🔥` `NEW`
1. [拿错狗的饭盒去上班 (Taking the wrong dog’s lunchbox to work)](https://s.weibo.com/weibo?q=%23%E6%8B%BF%E9%94%99%E7%8B%97%E7%9A%84%E9%A5%AD%E7%9B%92%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `143.6K 🔥` `NEW`
1. [张凌赫录制开推就一个要求](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BD%95%E5%88%B6%E5%BC%80%E6%8E%A8%E5%B0%B1%E4%B8%80%E4%B8%AA%E8%A6%81%E6%B1%82%23) `141.8K 🔥` `NEW`
1. [张雪峰曾谈努力的意义](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%9B%BE%E8%B0%88%E5%8A%AA%E5%8A%9B%E7%9A%84%E6%84%8F%E4%B9%89%23) `140.3K 🔥` `NEW`
1. [特朗普支持率降至重返白宫以来最低](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%AF%E6%8C%81%E7%8E%87%E9%99%8D%E8%87%B3%E9%87%8D%E8%BF%94%E7%99%BD%E5%AE%AB%E4%BB%A5%E6%9D%A5%E6%9C%80%E4%BD%8E%23) `124.7K 🔥` `NEW`
1. [黄仁勋希望在工作中突然死去](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%B8%8C%E6%9C%9B%E5%9C%A8%E5%B7%A5%E4%BD%9C%E4%B8%AD%E7%AA%81%E7%84%B6%E6%AD%BB%E5%8E%BB%23) `123.9K 🔥` `NEW`
1. [刘亦菲复古宫廷高定](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%A4%8D%E5%8F%A4%E5%AE%AB%E5%BB%B7%E9%AB%98%E5%AE%9A%23) `121.2K 🔥` `NEW`
1. [98年的长寿小猫](https://s.weibo.com/weibo?q=%2398%E5%B9%B4%E7%9A%84%E9%95%BF%E5%AF%BF%E5%B0%8F%E7%8C%AB%23) `116.4K 🔥` `NEW`
1. [27的宋威龙](https://s.weibo.com/weibo?q=%2327%E7%9A%84%E5%AE%8B%E5%A8%81%E9%BE%99%23) `104.8K 🔥` `NEW`
1. [Sora发文告别](https://s.weibo.com/weibo?q=%23Sora%E5%8F%91%E6%96%87%E5%91%8A%E5%88%AB%23) `96.0K 🔥` `NEW`
1. [猫咪试图用舌头攻击蝴蝶](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E8%AF%95%E5%9B%BE%E7%94%A8%E8%88%8C%E5%A4%B4%E6%94%BB%E5%87%BB%E8%9D%B4%E8%9D%B6%23) `73.4K 🔥` `NEW`
1. [孔雪儿人气 (Kong Xueer popularity)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%BA%BA%E6%B0%94%23) `73.0K 🔥` `NEW`
1. [日本被曝多年搞反华教育](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A2%AB%E6%9B%9D%E5%A4%9A%E5%B9%B4%E6%90%9E%E5%8F%8D%E5%8D%8E%E6%95%99%E8%82%B2%23) `1.1M 🔥` `+143%`
1. [女子称专柜买4个LV包鉴定为假货 (Woman says 4 LV bags she bought at a counter were identified as fakes)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%B8%93%E6%9F%9C%E4%B9%B04%E4%B8%AALV%E5%8C%85%E9%89%B4%E5%AE%9A%E4%B8%BA%E5%81%87%E8%B4%A7%23) `779.8K 🔥` `+62%`
1. [家里吃灰的旧手机突然成了香饽饽](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E5%90%83%E7%81%B0%E7%9A%84%E6%97%A7%E6%89%8B%E6%9C%BA%E7%AA%81%E7%84%B6%E6%88%90%E4%BA%86%E9%A6%99%E9%A5%BD%E9%A5%BD%23) `321.8K 🔥` `+122%`
1. [避谶](https://s.weibo.com/weibo?q=%23%E9%81%BF%E8%B0%B6%23) `249.5K 🔥` `+25%`
1. [张雪峰曾说给女儿赚够了一生的钱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%9B%BE%E8%AF%B4%E7%BB%99%E5%A5%B3%E5%84%BF%E8%B5%9A%E5%A4%9F%E4%BA%86%E4%B8%80%E7%94%9F%E7%9A%84%E9%92%B1%23) `246.8K 🔥` `+244%`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `240.4K 🔥` `+32%`
1. [Uzi怒喷Mark](https://s.weibo.com/weibo?q=%23Uzi%E6%80%92%E5%96%B7Mark%23) `141.9K 🔥` `+21%`
1. [强闯中国驻日使馆男子被捕](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E9%97%AF%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%97%A5%E4%BD%BF%E9%A6%86%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8D%95%23) `120.0K 🔥` `+66%`
1. [迪丽热巴眼技 (Dilireba eye skills)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%BC%E6%8A%80%23) `82.2K 🔥` `+23%`
1. [短剧撞脸迪丽热巴别甩锅AI](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E6%92%9E%E8%84%B8%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%88%AB%E7%94%A9%E9%94%85AI%23) `242.6K 🔥`
1. [宁艺卓ins点赞刘美贤](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93ins%E7%82%B9%E8%B5%9E%E5%88%98%E7%BE%8E%E8%B4%A4%23) `111.0K 🔥`
1. [38岁男子打10分钟羽毛球后心梗 (38-year-old man suffers heart attack after playing badminton for 10 minutes)](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E7%94%B7%E5%AD%90%E6%89%9310%E5%88%86%E9%92%9F%E7%BE%BD%E6%AF%9B%E7%90%83%E5%90%8E%E5%BF%83%E6%A2%97%23) `77.5K 🔥`
1. [火了还没适应的明星最好玩了 (Celebrities who haven’t adapted to being popular are the most interesting)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E4%BA%86%E8%BF%98%E6%B2%A1%E9%80%82%E5%BA%94%E7%9A%84%E6%98%8E%E6%98%9F%E6%9C%80%E5%A5%BD%E7%8E%A9%E4%BA%86%23) `235.5K 🔥` `-31%`
1. [吴德馨院士逝世](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BE%B7%E9%A6%A8%E9%99%A2%E5%A3%AB%E9%80%9D%E4%B8%96%23) `160.0K 🔥` `-60%`
1. [张雪峰员工 上四休三](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%91%98%E5%B7%A5%20%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `142.1K 🔥` `-31%`
1. [曾经只值10元的二手机现在回收价500](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F%E5%8F%AA%E5%80%BC10%E5%85%83%E7%9A%84%E4%BA%8C%E6%89%8B%E6%9C%BA%E7%8E%B0%E5%9C%A8%E5%9B%9E%E6%94%B6%E4%BB%B7500%23) `111.5K 🔥` `-88%`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `107.6K 🔥` `-49%`
1. [伊朗喊美国做个了断 (Iran calls on the United States to put an end to it)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%96%8A%E7%BE%8E%E5%9B%BD%E5%81%9A%E4%B8%AA%E4%BA%86%E6%96%AD%23) `83.2K 🔥` `-80%`
1. [金饰克价回落了 (Prices of gold jewelry fell back)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%9B%9E%E8%90%BD%E4%BA%86%23) `76.2K 🔥` `-42%`
1. [刘宇宁秒接张凌赫梗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%A7%92%E6%8E%A5%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%A2%97%23) `72.8K 🔥` `-42%`

Updated at 2026-03-25 08:58:43

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
