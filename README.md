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

1. [法国2比0摩洛哥 (France 2-0 Morocco)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD2%E6%AF%940%E6%91%A9%E6%B4%9B%E5%93%A5%23) `1.9M 🔥` `NEW`
1. [广西加油共渡难关](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8A%A0%E6%B2%B9%E5%85%B1%E6%B8%A1%E9%9A%BE%E5%85%B3%23) `754.2K 🔥` `NEW`
1. [李荣浩演唱会天津站延期](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A9%E6%B4%A5%E7%AB%99%E5%BB%B6%E6%9C%9F%23) `705.4K 🔥` `NEW`
1. [官方辟谣广西老人独坐屋顶等待救援](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%B9%BF%E8%A5%BF%E8%80%81%E4%BA%BA%E7%8B%AC%E5%9D%90%E5%B1%8B%E9%A1%B6%E7%AD%89%E5%BE%85%E6%95%91%E6%8F%B4%23) `452.6K 🔥` `NEW`
1. [陈翔疑因新歌遭差评情绪失控](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%E7%96%91%E5%9B%A0%E6%96%B0%E6%AD%8C%E9%81%AD%E5%B7%AE%E8%AF%84%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `433.5K 🔥` `NEW`
1. [法国 冠军相](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%20%E5%86%A0%E5%86%9B%E7%9B%B8%23) `418.0K 🔥` `NEW`
1. [法国连续三届世界杯晋级4强](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E6%99%8B%E7%BA%A74%E5%BC%BA%23) `415.0K 🔥` `NEW`
1. [霉霉婚礼场外垃圾盲盒含旧排卵试纸](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E5%9C%BA%E5%A4%96%E5%9E%83%E5%9C%BE%E7%9B%B2%E7%9B%92%E5%90%AB%E6%97%A7%E6%8E%92%E5%8D%B5%E8%AF%95%E7%BA%B8%23) `411.3K 🔥` `NEW`
1. [贵港街头解放军军车一眼望不到头](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E6%B8%AF%E8%A1%97%E5%A4%B4%E8%A7%A3%E6%94%BE%E5%86%9B%E5%86%9B%E8%BD%A6%E4%B8%80%E7%9C%BC%E6%9C%9B%E4%B8%8D%E5%88%B0%E5%A4%B4%23) `398.6K 🔥` `NEW`
1. [横州捕蛇者两天抓了两三千条蛇](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%B7%9E%E6%8D%95%E8%9B%87%E8%80%85%E4%B8%A4%E5%A4%A9%E6%8A%93%E4%BA%86%E4%B8%A4%E4%B8%89%E5%8D%83%E6%9D%A1%E8%9B%87%23) `384.8K 🔥` `NEW`
1. [娜扎右眼贴纱布 (Nazha wears gauze on her right eye)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%8F%B3%E7%9C%BC%E8%B4%B4%E7%BA%B1%E5%B8%83%23) `375.5K 🔥` `NEW`
1. [广西成功打通溃堤形成的一处孤岛](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%88%90%E5%8A%9F%E6%89%93%E9%80%9A%E6%BA%83%E5%A0%A4%E5%BD%A2%E6%88%90%E7%9A%84%E4%B8%80%E5%A4%84%E5%AD%A4%E5%B2%9B%23) `372.7K 🔥` `NEW`
1. [Anthropic公关能力](https://s.weibo.com/weibo?q=%23Anthropic%E5%85%AC%E5%85%B3%E8%83%BD%E5%8A%9B%23) `363.9K 🔥` `NEW`
1. [李荣浩](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%23) `363.3K 🔥` `NEW`
1. [台风巴威又改路线了 (Typhoon Bavi changes its route again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E6%94%B9%E8%B7%AF%E7%BA%BF%E4%BA%86%23) `1.2M 🔥` `+238%`
1. [正午阳光 警告函](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%20%E8%AD%A6%E5%91%8A%E5%87%BD%23) `521.1K 🔥` `+151%`
1. [法国摩洛哥 阿根廷裁判](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%91%A9%E6%B4%9B%E5%93%A5%20%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A3%81%E5%88%A4%23) `454.2K 🔥` `+190%`
1. [超强台风巴威登陆区域锁定](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%8C%BA%E5%9F%9F%E9%94%81%E5%AE%9A%23) `448.0K 🔥` `+131%`
1. [摩洛哥门将神了](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5%E9%97%A8%E5%B0%86%E7%A5%9E%E4%BA%86%23) `447.8K 🔥` `+186%`
1. [登贝莱远射破门](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E8%BF%9C%E5%B0%84%E7%A0%B4%E9%97%A8%23) `445.4K 🔥` `+352%`
1. [台风天吃到职场黑利了 (Typhoon weather brings huge benefits in the workplace)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E5%90%83%E5%88%B0%E8%81%8C%E5%9C%BA%E9%BB%91%E5%88%A9%E4%BA%86%23) `441.7K 🔥` `+270%`
1. [减肥减到没食欲了](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E5%87%8F%E5%88%B0%E6%B2%A1%E9%A3%9F%E6%AC%B2%E4%BA%86%23) `441.1K 🔥` `+448%`
1. [姆巴佩点球被扑 (Mbappe's penalty kick saved)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%82%B9%E7%90%83%E8%A2%AB%E6%89%91%23) `437.6K 🔥` `+142%`
1. [长沙德峰小区车位被占事件 (Incident of parking spaces occupied in Changsha Defeng Community)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%BE%B7%E5%B3%B0%E5%B0%8F%E5%8C%BA%E8%BD%A6%E4%BD%8D%E8%A2%AB%E5%8D%A0%E4%BA%8B%E4%BB%B6%23) `436.0K 🔥` `+547%`
1. [百花杀 九重紫](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%20%E4%B9%9D%E9%87%8D%E7%B4%AB%23) `430.5K 🔥` `+1109%`
1. [长鑫科技申购 (Changxin Technology Subscription)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E7%94%B3%E8%B4%AD%23) `428.1K 🔥` `+1343%`
1. [福建火灾发生时鞋厂内共有239人](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E7%81%AB%E7%81%BE%E5%8F%91%E7%94%9F%E6%97%B6%E9%9E%8B%E5%8E%82%E5%86%85%E5%85%B1%E6%9C%89239%E4%BA%BA%23) `423.8K 🔥` `+327%`
1. [日本遗孤吃中国饭长大竟要做鬼](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%81%97%E5%AD%A4%E5%90%83%E4%B8%AD%E5%9B%BD%E9%A5%AD%E9%95%BF%E5%A4%A7%E7%AB%9F%E8%A6%81%E5%81%9A%E9%AC%BC%23) `422.4K 🔥` `+249%`
1. [女子霸占车位8天宁赔500也不愿道歉 (Woman who occupied parking space for 8 days would rather pay 500 than apologize)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9C%B8%E5%8D%A0%E8%BD%A6%E4%BD%8D8%E5%A4%A9%E5%AE%81%E8%B5%94500%E4%B9%9F%E4%B8%8D%E6%84%BF%E9%81%93%E6%AD%89%23) `420.4K 🔥` `+674%`
1. [宋威龙张婧仪晒合照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%99%92%E5%90%88%E7%85%A7%23) `413.2K 🔥` `+1187%`
1. [阿根廷帅气飞行教练突然跳机自杀](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%B8%85%E6%B0%94%E9%A3%9E%E8%A1%8C%E6%95%99%E7%BB%83%E7%AA%81%E7%84%B6%E8%B7%B3%E6%9C%BA%E8%87%AA%E6%9D%80%23) `410.2K 🔥` `+1175%`
1. [情侣接吻摔倒打翻火锅烫伤前排女孩 (Couple fell while kissing, knocked over the hot pot and scalded the girl in the front row)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%8E%A5%E5%90%BB%E6%91%94%E5%80%92%E6%89%93%E7%BF%BB%E7%81%AB%E9%94%85%E7%83%AB%E4%BC%A4%E5%89%8D%E6%8E%92%E5%A5%B3%E5%AD%A9%23) `406.2K 🔥` `+303%`
1. [李斌回应自定义灯光代写热梗 (Li Bin responds to custom lighting ghostwriting hot memes)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E5%9B%9E%E5%BA%94%E8%87%AA%E5%AE%9A%E4%B9%89%E7%81%AF%E5%85%89%E4%BB%A3%E5%86%99%E7%83%AD%E6%A2%97%23) `405.8K 🔥` `+570%`
1. [晋江鞋厂火灾已致28死 (Jinjiang shoe factory fire kills 28)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B428%E6%AD%BB%23) `401.9K 🔥` `+546%`
1. [当救援航母驶入洪水校园](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%95%91%E6%8F%B4%E8%88%AA%E6%AF%8D%E9%A9%B6%E5%85%A5%E6%B4%AA%E6%B0%B4%E6%A0%A1%E5%9B%AD%23) `399.8K 🔥` `+708%`
1. [湖北雷暴龙卷风](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E9%9B%B7%E6%9A%B4%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `395.7K 🔥` `+1234%`
1. [被救援航母转移场面震撼到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%95%91%E6%8F%B4%E8%88%AA%E6%AF%8D%E8%BD%AC%E7%A7%BB%E5%9C%BA%E9%9D%A2%E9%9C%87%E6%92%BC%E5%88%B0%E4%BA%86%23) `393.0K 🔥` `+1224%`
1. [晋江鞋厂负责人已被控制 (The person in charge of Jinjiang Shoe Factory has been controlled)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%B7%B2%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `391.0K 🔥` `+969%`
1. [47岁工人坠亡账户里攒下20多万](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E5%B7%A5%E4%BA%BA%E5%9D%A0%E4%BA%A1%E8%B4%A6%E6%88%B7%E9%87%8C%E6%94%92%E4%B8%8B20%E5%A4%9A%E4%B8%87%23) `389.8K 🔥` `+1214%`
1. [杨幂赢面很大 (Yang Mi has a great chance of winning)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B5%A2%E9%9D%A2%E5%BE%88%E5%A4%A7%23) `387.2K 🔥` `+1205%`
1. [世界杯点球魔咒](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%82%B9%E7%90%83%E9%AD%94%E5%92%92%23) `382.9K 🔥` `+1141%`
1. [温网 (Wimbledon)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%BD%91%23) `379.9K 🔥` `+825%`
1. [姆巴佩破门](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A0%B4%E9%97%A8%23) `379.3K 🔥` `+630%`
1. [湖北要求自查落地窗玻璃幕墙 (Hubei requires self-inspection of floor-to-ceiling glass curtain walls)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E8%A6%81%E6%B1%82%E8%87%AA%E6%9F%A5%E8%90%BD%E5%9C%B0%E7%AA%97%E7%8E%BB%E7%92%83%E5%B9%95%E5%A2%99%23) `372.4K 🔥` `+1155%`
1. [TOP青岛演唱会抢票时间](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A2%E7%A5%A8%E6%97%B6%E9%97%B4%23) `370.2K 🔥` `+1148%`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `366.5K 🔥` `+1135%`
1. [福建晋江一鞋厂发生火灾](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%99%8B%E6%B1%9F%E4%B8%80%E9%9E%8B%E5%8E%82%E5%8F%91%E7%94%9F%E7%81%AB%E7%81%BE%23) `360.4K 🔥` `+1115%`
1. [如何让SUV装载收纳更得体](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E8%AE%A9SUV%E8%A3%85%E8%BD%BD%E6%94%B6%E7%BA%B3%E6%9B%B4%E5%BE%97%E4%BD%93%23) `358.1K 🔥` `+492%`
1. [宁波大学回应研究员被指孕期出轨](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E7%A0%94%E7%A9%B6%E5%91%98%E8%A2%AB%E6%8C%87%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%23) `357.1K 🔥` `+1104%`
1. [姆巴佩进球 (Mbappe scores a goal)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%BF%9B%E7%90%83%23) `450.8K 🔥`
1. [法国vs摩洛哥 (France vs Morocco)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `427.2K 🔥` `-76%`

Updated at 2026-07-10 07:19:23

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
