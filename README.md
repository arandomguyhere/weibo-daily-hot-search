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

1. [姆巴佩受伤 (Mbappe injured)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%97%E4%BC%A4%23) `2.3M 🔥` `NEW`
1. [骄阳似我播的时候宋威龙张婧仪唱情歌](https://s.weibo.com/weibo?q=%23%E9%AA%84%E9%98%B3%E4%BC%BC%E6%88%91%E6%92%AD%E7%9A%84%E6%97%B6%E5%80%99%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%94%B1%E6%83%85%E6%AD%8C%23) `938.5K 🔥` `NEW`
1. [巴威减弱为强台风级](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%87%8F%E5%BC%B1%E4%B8%BA%E5%BC%BA%E5%8F%B0%E9%A3%8E%E7%BA%A7%23) `922.7K 🔥` `NEW`
1. [华为联合伙伴发起OPEN NPO项目](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%81%94%E5%90%88%E4%BC%99%E4%BC%B4%E5%8F%91%E8%B5%B7OPEN%20NPO%E9%A1%B9%E7%9B%AE%23) `685.2K 🔥` `NEW`
1. [易易紫自曝与虞书欣发生过恶心事](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%98%93%E7%B4%AB%E8%87%AA%E6%9B%9D%E4%B8%8E%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8F%91%E7%94%9F%E8%BF%87%E6%81%B6%E5%BF%83%E4%BA%8B%23) `623.1K 🔥` `NEW`
1. [巴威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `600.7K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `549.0K 🔥` `NEW`
1. [贵州省汤火了](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E7%9C%81%E6%B1%A4%E7%81%AB%E4%BA%86%23) `534.8K 🔥` `NEW`
1. [哈兰德吐槽姆巴佩点球被叫停](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%90%90%E6%A7%BD%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%82%B9%E7%90%83%E8%A2%AB%E5%8F%AB%E5%81%9C%23) `530.7K 🔥` `NEW`
1. [曝羊羊羊找艺人粉丝借钱](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BE%8A%E7%BE%8A%E7%BE%8A%E6%89%BE%E8%89%BA%E4%BA%BA%E7%B2%89%E4%B8%9D%E5%80%9F%E9%92%B1%23) `523.0K 🔥` `NEW`
1. [姆巴佩世界杯个人第20球 (Mbappe's 20th World Cup goal)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AA%E4%BA%BA%E7%AC%AC20%E7%90%83%23) `518.0K 🔥` `NEW`
1. [美主持人称日本被核爆两次却最爱美国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%A7%B0%E6%97%A5%E6%9C%AC%E8%A2%AB%E6%A0%B8%E7%88%86%E4%B8%A4%E6%AC%A1%E5%8D%B4%E6%9C%80%E7%88%B1%E7%BE%8E%E5%9B%BD%23) `515.7K 🔥` `NEW`
1. [薛之谦北京演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%23) `511.9K 🔥` `NEW`
1. [巴洛贡缓刑宽萨立即执行](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%B4%9B%E8%B4%A1%E7%BC%93%E5%88%91%E5%AE%BD%E8%90%A8%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%23) `505.1K 🔥` `NEW`
1. [台风巴威强度有变化了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%BC%BA%E5%BA%A6%E6%9C%89%E5%8F%98%E5%8C%96%E4%BA%86%23) `499.9K 🔥` `NEW`
1. [法国淘汰摩洛哥](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B7%98%E6%B1%B0%E6%91%A9%E6%B4%9B%E5%93%A5%23) `497.0K 🔥` `NEW`
1. [法国6分钟2球](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD6%E5%88%86%E9%92%9F2%E7%90%83%23) `493.8K 🔥` `NEW`
1. [宋威龙赵今麦聚餐完全是挨着坐的](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%81%9A%E9%A4%90%E5%AE%8C%E5%85%A8%E6%98%AF%E6%8C%A8%E7%9D%80%E5%9D%90%E7%9A%84%23) `486.5K 🔥` `NEW`
1. [北京暴雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `483.7K 🔥` `NEW`
1. [航司回应一家4口乘机腹泻污染坐垫](https://s.weibo.com/weibo?q=%23%E8%88%AA%E5%8F%B8%E5%9B%9E%E5%BA%94%E4%B8%80%E5%AE%B64%E5%8F%A3%E4%B9%98%E6%9C%BA%E8%85%B9%E6%B3%BB%E6%B1%A1%E6%9F%93%E5%9D%90%E5%9E%AB%23) `481.9K 🔥` `NEW`
1. [广西救援物资投放多亏无人机 (Guangxi relief supplies are delivered thanks to drones)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%95%91%E6%8F%B4%E7%89%A9%E8%B5%84%E6%8A%95%E6%94%BE%E5%A4%9A%E4%BA%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `467.1K 🔥` `NEW`
1. [伊朗公布打击美军基地设施细节](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E8%AE%BE%E6%96%BD%E7%BB%86%E8%8A%82%23) `463.1K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `450.2K 🔥` `NEW`
1. [台风巴威又改路线了 (Typhoon Bavi changes its route again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E6%94%B9%E8%B7%AF%E7%BA%BF%E4%BA%86%23) `2.4M 🔥` `+98%`
1. [广西加油共渡难关](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8A%A0%E6%B2%B9%E5%85%B1%E6%B8%A1%E9%9A%BE%E5%85%B3%23) `1.3M 🔥` `+76%`
1. [雅迪绝区零联动](https://s.weibo.com/weibo?q=%23%E9%9B%85%E8%BF%AA%E7%BB%9D%E5%8C%BA%E9%9B%B6%E8%81%94%E5%8A%A8%23) `1.1M 🔥` `+207%`
1. [超强台风巴威登陆区域锁定](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%8C%BA%E5%9F%9F%E9%94%81%E5%AE%9A%23) `1.1M 🔥` `+139%`
1. [台风天吃到职场黑利了 (Typhoon weather brings huge benefits in the workplace)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E5%90%83%E5%88%B0%E8%81%8C%E5%9C%BA%E9%BB%91%E5%88%A9%E4%BA%86%23) `978.9K 🔥` `+122%`
1. [正午阳光 警告函](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%20%E8%AD%A6%E5%91%8A%E5%87%BD%23) `763.6K 🔥` `+47%`
1. [减肥减到没食欲了](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E5%87%8F%E5%88%B0%E6%B2%A1%E9%A3%9F%E6%AC%B2%E4%BA%86%23) `634.9K 🔥` `+44%`
1. [日本遗孤吃中国饭长大竟要做鬼](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%81%97%E5%AD%A4%E5%90%83%E4%B8%AD%E5%9B%BD%E9%A5%AD%E9%95%BF%E5%A4%A7%E7%AB%9F%E8%A6%81%E5%81%9A%E9%AC%BC%23) `551.4K 🔥` `+31%`
1. [杨紫发型后面是蝴蝶结 (Yang Zi's hairstyle is with a bow behind it)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%8F%91%E5%9E%8B%E5%90%8E%E9%9D%A2%E6%98%AF%E8%9D%B4%E8%9D%B6%E7%BB%93%23) `543.7K 🔥` `+36%`
1. [法国连续三届世界杯晋级4强](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E6%99%8B%E7%BA%A74%E5%BC%BA%23) `543.5K 🔥` `+31%`
1. [长鑫科技申购 (Changxin Technology Subscription)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E7%94%B3%E8%B4%AD%23) `537.5K 🔥` `+26%`
1. [福建火灾发生时鞋厂内共有239人 (There were 239 people in the shoe factory when the Fujian fire broke out)](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E7%81%AB%E7%81%BE%E5%8F%91%E7%94%9F%E6%97%B6%E9%9E%8B%E5%8E%82%E5%86%85%E5%85%B1%E6%9C%89239%E4%BA%BA%23) `528.3K 🔥` `+25%`
1. [白鹿这真的是我的猫吗](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%BF%99%E7%9C%9F%E7%9A%84%E6%98%AF%E6%88%91%E7%9A%84%E7%8C%AB%E5%90%97%23) `520.2K 🔥` `+32%`
1. [杨幂赢面很大 (Yang Mi has a great chance of winning)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B5%A2%E9%9D%A2%E5%BE%88%E5%A4%A7%23) `508.1K 🔥` `+31%`
1. [李斌回应自定义灯光代写热梗 (Li Bin responds to custom lighting ghostwriting hot memes)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E5%9B%9E%E5%BA%94%E8%87%AA%E5%AE%9A%E4%B9%89%E7%81%AF%E5%85%89%E4%BB%A3%E5%86%99%E7%83%AD%E6%A2%97%23) `507.6K 🔥` `+25%`
1. [情侣接吻摔倒打翻火锅烫伤前排女孩 (Couple fell while kissing, knocked over the hot pot and scalded the girl in the front row)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%8E%A5%E5%90%BB%E6%91%94%E5%80%92%E6%89%93%E7%BF%BB%E7%81%AB%E9%94%85%E7%83%AB%E4%BC%A4%E5%89%8D%E6%8E%92%E5%A5%B3%E5%AD%A9%23) `497.6K 🔥` `+23%`
1. [TOP青岛演唱会抢票时间](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A2%E7%A5%A8%E6%97%B6%E9%97%B4%23) `457.0K 🔥` `+23%`
1. [百花杀热度](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%83%AD%E5%BA%A6%23) `453.7K 🔥` `+1246%`
1. [法国摩洛哥 阿根廷裁判](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%91%A9%E6%B4%9B%E5%93%A5%20%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A3%81%E5%88%A4%23) `490.3K 🔥`
1. [摩洛哥门将神了](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5%E9%97%A8%E5%B0%86%E7%A5%9E%E4%BA%86%23) `477.9K 🔥`
1. [登贝莱远射破门](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E8%BF%9C%E5%B0%84%E7%A0%B4%E9%97%A8%23) `476.8K 🔥`
1. [女子霸占车位8天宁赔500也不愿道歉 (Woman who occupied parking space for 8 days would rather pay 500 than apologize)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9C%B8%E5%8D%A0%E8%BD%A6%E4%BD%8D8%E5%A4%A9%E5%AE%81%E8%B5%94500%E4%B9%9F%E4%B8%8D%E6%84%BF%E9%81%93%E6%AD%89%23) `474.6K 🔥`
1. [晋江鞋厂火灾已致28死 (Jinjiang shoe factory fire kills 28)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B428%E6%AD%BB%23) `471.6K 🔥`
1. [百花杀 九重紫](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%20%E4%B9%9D%E9%87%8D%E7%B4%AB%23) `466.0K 🔥`
1. [长沙德峰小区车位被占事件 (Incident of parking spaces occupied in Changsha Defeng Community)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%BE%B7%E5%B3%B0%E5%B0%8F%E5%8C%BA%E8%BD%A6%E4%BD%8D%E8%A2%AB%E5%8D%A0%E4%BA%8B%E4%BB%B6%23) `460.7K 🔥`
1. [法国vs摩洛哥 (France vs Morocco)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `450.4K 🔥`
1. [李荣浩演唱会天津站延期](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A9%E6%B4%A5%E7%AB%99%E5%BB%B6%E6%9C%9F%23) `539.4K 🔥` `-24%`
1. [法国2比0摩洛哥 (France 2-0 Morocco)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD2%E6%AF%940%E6%91%A9%E6%B4%9B%E5%93%A5%23) `525.3K 🔥` `-72%`

Updated at 2026-07-10 09:04:03

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
