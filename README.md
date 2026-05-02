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

1. [跑男什么时候变成这样了 (When did Running Man become like this?)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8F%98%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [赵又廷回复林更新想你了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%8F%88%E5%BB%B7%E5%9B%9E%E5%A4%8D%E6%9E%97%E6%9B%B4%E6%96%B0%E6%83%B3%E4%BD%A0%E4%BA%86%23) `422.6K 🔥` `NEW`
1. [普通家庭对孩子最好的托举就这11点](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E5%AF%B9%E5%AD%A9%E5%AD%90%E6%9C%80%E5%A5%BD%E7%9A%84%E6%89%98%E4%B8%BE%E5%B0%B1%E8%BF%9911%E7%82%B9%23) `368.2K 🔥` `NEW`
1. [湖人vs火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E7%81%AB%E7%AE%AD%23) `261.9K 🔥` `NEW`
1. [霸王茶姬 男友投毒](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%20%E7%94%B7%E5%8F%8B%E6%8A%95%E6%AF%92%23) `179.0K 🔥` `NEW`
1. [中国光伏的堡垒被印度从内部攻破](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%89%E4%BC%8F%E7%9A%84%E5%A0%A1%E5%9E%92%E8%A2%AB%E5%8D%B0%E5%BA%A6%E4%BB%8E%E5%86%85%E9%83%A8%E6%94%BB%E7%A0%B4%23) `176.1K 🔥` `NEW`
1. [金靖为减肥九点半就睡觉](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E4%B8%BA%E5%87%8F%E8%82%A5%E4%B9%9D%E7%82%B9%E5%8D%8A%E5%B0%B1%E7%9D%A1%E8%A7%89%23) `169.6K 🔥` `NEW`
1. [工程师1个月偷剪公司320克金线](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E7%A8%8B%E5%B8%881%E4%B8%AA%E6%9C%88%E5%81%B7%E5%89%AA%E5%85%AC%E5%8F%B8320%E5%85%8B%E9%87%91%E7%BA%BF%23) `167.5K 🔥` `NEW`
1. [万千惠问三宝自己的下属漂不漂亮](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E9%97%AE%E4%B8%89%E5%AE%9D%E8%87%AA%E5%B7%B1%E7%9A%84%E4%B8%8B%E5%B1%9E%E6%BC%82%E4%B8%8D%E6%BC%82%E4%BA%AE%23) `160.1K 🔥` `NEW`
1. [萧蔷给人调成啥了](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E7%BB%99%E4%BA%BA%E8%B0%83%E6%88%90%E5%95%A5%E4%BA%86%23) `159.8K 🔥` `NEW`
1. [鹤吻痕 (Crane hickey)](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E5%90%BB%E7%97%95%23) `159.2K 🔥` `NEW`
1. [黑猩猩24岁仍单身愁坏饲养员](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%8C%A9%E7%8C%A924%E5%B2%81%E4%BB%8D%E5%8D%95%E8%BA%AB%E6%84%81%E5%9D%8F%E9%A5%B2%E5%85%BB%E5%91%98%23) `159.1K 🔥` `NEW`
1. [妻子十一郎首度公开张宇罕见病内情](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8D%81%E4%B8%80%E9%83%8E%E9%A6%96%E5%BA%A6%E5%85%AC%E5%BC%80%E5%BC%A0%E5%AE%87%E7%BD%95%E8%A7%81%E7%97%85%E5%86%85%E6%83%85%23) `158.4K 🔥` `NEW`
1. [李飞怎么变这么薄一片了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E6%80%8E%E4%B9%88%E5%8F%98%E8%BF%99%E4%B9%88%E8%96%84%E4%B8%80%E7%89%87%E4%BA%86%23) `158.0K 🔥` `NEW`
1. [美媒曝美军对伊朗最新打击计划](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E6%9B%9D%E7%BE%8E%E5%86%9B%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%9C%80%E6%96%B0%E6%89%93%E5%87%BB%E8%AE%A1%E5%88%92%23) `153.9K 🔥` `NEW`
1. [女童或因接触小区大蜗牛感染脑膜炎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E6%88%96%E5%9B%A0%E6%8E%A5%E8%A7%A6%E5%B0%8F%E5%8C%BA%E5%A4%A7%E8%9C%97%E7%89%9B%E6%84%9F%E6%9F%93%E8%84%91%E8%86%9C%E7%82%8E%23) `142.8K 🔥` `NEW`
1. [女孩称当服务员看到同龄人很自卑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%A7%B0%E5%BD%93%E6%9C%8D%E5%8A%A1%E5%91%98%E7%9C%8B%E5%88%B0%E5%90%8C%E9%BE%84%E4%BA%BA%E5%BE%88%E8%87%AA%E5%8D%91%23) `141.1K 🔥` `NEW`
1. [浮生](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%23) `138.4K 🔥` `NEW`
1. [爷爷过世请假奔丧被开除](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E8%BF%87%E4%B8%96%E8%AF%B7%E5%81%87%E5%A5%94%E4%B8%A7%E8%A2%AB%E5%BC%80%E9%99%A4%23) `130.4K 🔥` `NEW`
1. [浪姐争议嘉宾称也只签了一期合同](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%89%E8%AE%AE%E5%98%89%E5%AE%BE%E7%A7%B0%E4%B9%9F%E5%8F%AA%E7%AD%BE%E4%BA%86%E4%B8%80%E6%9C%9F%E5%90%88%E5%90%8C%23) `129.2K 🔥` `NEW`
1. [5月锦鲤附体的星座 (The zodiac signs possessed by koi fish in May)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E9%94%A6%E9%B2%A4%E9%99%84%E4%BD%93%E7%9A%84%E6%98%9F%E5%BA%A7%23) `127.9K 🔥` `NEW`
1. [曝冰湖重生有庆功宴](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E6%9C%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `127.7K 🔥` `NEW`
1. [王濛缺席帮唱选曲就没人弄清规则了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%BC%BA%E5%B8%AD%E5%B8%AE%E5%94%B1%E9%80%89%E6%9B%B2%E5%B0%B1%E6%B2%A1%E4%BA%BA%E5%BC%84%E6%B8%85%E8%A7%84%E5%88%99%E4%BA%86%23) `126.2K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `119.6K 🔥` `NEW`
1. [吴宜泽7比7艾伦](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD7%E6%AF%947%E8%89%BE%E4%BC%A6%23) `115.0K 🔥` `NEW`
1. [1岁半宝宝给老姥姥投喂西瓜](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E5%AE%9D%E5%AE%9D%E7%BB%99%E8%80%81%E5%A7%A5%E5%A7%A5%E6%8A%95%E5%96%82%E8%A5%BF%E7%93%9C%23) `105.3K 🔥` `NEW`
1. [五一遇上广州早茶新规定](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E9%81%87%E4%B8%8A%E5%B9%BF%E5%B7%9E%E6%97%A9%E8%8C%B6%E6%96%B0%E8%A7%84%E5%AE%9A%23) `97.2K 🔥` `NEW`
1. [女子4小时吃4粒晕车药后反应迟钝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%904%E5%B0%8F%E6%97%B6%E5%90%834%E7%B2%92%E6%99%95%E8%BD%A6%E8%8D%AF%E5%90%8E%E5%8F%8D%E5%BA%94%E8%BF%9F%E9%92%9D%23) `95.3K 🔥` `NEW`
1. [Fly挑杯赛后回应](https://s.weibo.com/weibo?q=%23Fly%E6%8C%91%E6%9D%AF%E8%B5%9B%E5%90%8E%E5%9B%9E%E5%BA%94%23) `91.3K 🔥` `NEW`
1. [数读我国创新全方位加速突破](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E6%88%91%E5%9B%BD%E5%88%9B%E6%96%B0%E5%85%A8%E6%96%B9%E4%BD%8D%E5%8A%A0%E9%80%9F%E7%AA%81%E7%A0%B4%23) `617.9K 🔥` `+36%`
1. [人到了一定年纪就会解锁的动作 (Actions that people will unlock when they reach a certain age)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%BA%86%E4%B8%80%E5%AE%9A%E5%B9%B4%E7%BA%AA%E5%B0%B1%E4%BC%9A%E8%A7%A3%E9%94%81%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `358.7K 🔥` `+63%`
1. [女子照顾瘫痪丈夫19年想有个孩子 (Woman takes care of her paralyzed husband for 19 years and wants to have a child)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%85%A7%E9%A1%BE%E7%98%AB%E7%97%AA%E4%B8%88%E5%A4%AB19%E5%B9%B4%E6%83%B3%E6%9C%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `179.7K 🔥` `+47%`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `164.2K 🔥` `+37%`
1. [主人经期贫血晕厥2只狗子立大功 (The owner suffered from menstrual anemia and fainted, and the two dogs made great achievements)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E7%BB%8F%E6%9C%9F%E8%B4%AB%E8%A1%80%E6%99%95%E5%8E%A52%E5%8F%AA%E7%8B%97%E5%AD%90%E7%AB%8B%E5%A4%A7%E5%8A%9F%23) `157.9K 🔥` `+39%`
1. [迪丽热巴在还63张自拍的债了 (Di Lieba is paying off the debt of 63 selfies)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%A8%E8%BF%9863%E5%BC%A0%E8%87%AA%E6%8B%8D%E7%9A%84%E5%80%BA%E4%BA%86%23) `133.6K 🔥` `+21%`
1. [深圳地铁平均每天亏超1个亿 (Shenzhen Metro loses more than 100 million a day on average)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%9C%B0%E9%93%81%E5%B9%B3%E5%9D%87%E6%AF%8F%E5%A4%A9%E4%BA%8F%E8%B6%851%E4%B8%AA%E4%BA%BF%23) `107.5K 🔥` `+25%`
1. [榴莲大降价有果商1天卖了9千斤](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E5%A4%A7%E9%99%8D%E4%BB%B7%E6%9C%89%E6%9E%9C%E5%95%861%E5%A4%A9%E5%8D%96%E4%BA%869%E5%8D%83%E6%96%A4%23) `97.6K 🔥` `+66%`
1. [司机到河南送货被塞30斤蒜薹 (A driver was stuffed with 30 kilograms of garlic sprouts while delivering goods in Henan)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%88%B0%E6%B2%B3%E5%8D%97%E9%80%81%E8%B4%A7%E8%A2%AB%E5%A1%9E30%E6%96%A4%E8%92%9C%E8%96%B9%23) `91.9K 🔥` `+54%`
1. [女子被AI误导闯入毒蛇窝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%ABAI%E8%AF%AF%E5%AF%BC%E9%97%AF%E5%85%A5%E6%AF%92%E8%9B%87%E7%AA%9D%23) `88.6K 🔥` `+34%`
1. [极氪月交付量创历史新高](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `88.6K 🔥` `+51%`
1. [火车票开售即售罄的原因找到了](https://s.weibo.com/weibo?q=%23%E7%81%AB%E8%BD%A6%E7%A5%A8%E5%BC%80%E5%94%AE%E5%8D%B3%E5%94%AE%E7%BD%84%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `772.5K 🔥`
1. [陈思诚说1200万票房不够电影院房租](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E8%AF%B41200%E4%B8%87%E7%A5%A8%E6%88%BF%E4%B8%8D%E5%A4%9F%E7%94%B5%E5%BD%B1%E9%99%A2%E6%88%BF%E7%A7%9F%23) `349.2K 🔥`
1. [李若彤被路人认成40岁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E8%A2%AB%E8%B7%AF%E4%BA%BA%E8%AE%A4%E6%88%9040%E5%B2%81%23) `108.3K 🔥`
1. [白鹿摘了姚译添眼镜给自己戴 (Bailu took off Yao Yitian's glasses and put them on himself)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%91%98%E4%BA%86%E5%A7%9A%E8%AF%91%E6%B7%BB%E7%9C%BC%E9%95%9C%E7%BB%99%E8%87%AA%E5%B7%B1%E6%88%B4%23) `97.4K 🔥`
1. [真的有人能成功请到这三天假吗](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E8%83%BD%E6%88%90%E5%8A%9F%E8%AF%B7%E5%88%B0%E8%BF%99%E4%B8%89%E5%A4%A9%E5%81%87%E5%90%97%23) `179.9K 🔥` `-45%`
1. [王菲 你管她干啥 (Faye Wong, what do you care about her?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E4%BD%A0%E7%AE%A1%E5%A5%B9%E5%B9%B2%E5%95%A5%23) `171.4K 🔥` `-43%`
1. [这不叫堵车 这叫铺红地毯](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8D%E5%8F%AB%E5%A0%B5%E8%BD%A6%20%E8%BF%99%E5%8F%AB%E9%93%BA%E7%BA%A2%E5%9C%B0%E6%AF%AF%23) `159.9K 🔥` `-38%`
1. [21世纪大君夫人 (The 21st Century Maharaja’s Wife)](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `94.3K 🔥` `-26%`
1. [李梦额头 鹤吻痕 (Li Meng forehead crane hickey)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A2%A6%E9%A2%9D%E5%A4%B4%20%E9%B9%A4%E5%90%BB%E7%97%95%23) `89.3K 🔥` `-67%`
1. [美军福特号航母离开中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A6%8F%E7%89%B9%E5%8F%B7%E8%88%AA%E6%AF%8D%E7%A6%BB%E5%BC%80%E4%B8%AD%E4%B8%9C%23) `88.8K 🔥` `-51%`

Updated at 2026-05-02 09:13:37

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
