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

1. [德国绝杀进球 (Germany's winning goal)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%BB%9D%E6%9D%80%E8%BF%9B%E7%90%83%23) `1.4M 🔥` `NEW`
1. [德国2比1科特迪瓦](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD2%E6%AF%941%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A6%23) `112.6K 🔥` `NEW`
1. [累的时候根本没精力去维持关系](https://s.weibo.com/weibo?q=%23%E7%B4%AF%E7%9A%84%E6%97%B6%E5%80%99%E6%A0%B9%E6%9C%AC%E6%B2%A1%E7%B2%BE%E5%8A%9B%E5%8E%BB%E7%BB%B4%E6%8C%81%E5%85%B3%E7%B3%BB%23) `77.4K 🔥` `NEW`
1. [翁达夫梅开二度](https://s.weibo.com/weibo?q=%23%E7%BF%81%E8%BE%BE%E5%A4%AB%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `62.6K 🔥` `NEW`
1. [德国半场连吹两球](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E5%8D%8A%E5%9C%BA%E8%BF%9E%E5%90%B9%E4%B8%A4%E7%90%83%23) `58.4K 🔥` `NEW`
1. [瑞典净胜球清零](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%85%B8%E5%87%80%E8%83%9C%E7%90%83%E6%B8%85%E9%9B%B6%23) `46.9K 🔥` `NEW`
1. [小狗生动演绎好了好了这下坏了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E7%94%9F%E5%8A%A8%E6%BC%94%E7%BB%8E%E5%A5%BD%E4%BA%86%E5%A5%BD%E4%BA%86%E8%BF%99%E4%B8%8B%E5%9D%8F%E4%BA%86%23) `46.5K 🔥` `NEW`
1. [宋亚轩把我唱哭了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%8A%8A%E6%88%91%E5%94%B1%E5%93%AD%E4%BA%86%23) `46.5K 🔥` `NEW`
1. [施洛特贝克受伤](https://s.weibo.com/weibo?q=%23%E6%96%BD%E6%B4%9B%E7%89%B9%E8%B4%9D%E5%85%8B%E5%8F%97%E4%BC%A4%23) `46.5K 🔥` `NEW`
1. [荷兰杀疯了 (The Netherlands is going crazy)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E6%9D%80%E7%96%AF%E4%BA%86%23) `771.7K 🔥` `+26%`
1. [端午文旅消费升温 (Cultural tourism consumption heats up during Dragon Boat Festival)](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E5%8D%87%E6%B8%A9%23) `424.0K 🔥` `+106%`
1. [曾沛慈看到何宣林淘汰的表情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9C%8B%E5%88%B0%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `293.9K 🔥` `+86%`
1. [伊军方宣布关闭霍尔木兹 (Iraqi military announces closure of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%86%9B%E6%96%B9%E5%AE%A3%E5%B8%83%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `223.4K 🔥` `+157%`
1. [田曦薇获奖感言用了3种语言 (Tian Xiwei’s acceptance speech was in 3 languages)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%E7%94%A8%E4%BA%863%E7%A7%8D%E8%AF%AD%E8%A8%80%23) `121.9K 🔥` `+73%`
1. [环境真的能迅速同化一个人 (The environment can really assimilate a person quickly)](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E5%A2%83%E7%9C%9F%E7%9A%84%E8%83%BD%E8%BF%85%E9%80%9F%E5%90%8C%E5%8C%96%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `111.5K 🔥` `+86%`
1. [万千惠淘汰](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E6%B7%98%E6%B1%B0%23) `97.4K 🔥` `+158%`
1. [荷兰5比1瑞典](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B05%E6%AF%941%E7%91%9E%E5%85%B8%23) `94.3K 🔥` `+40%`
1. [浪姐总决赛 (Sister Lang Finals)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `92.4K 🔥` `+35%`
1. [确诊了味精症候群](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E8%AF%8A%E4%BA%86%E5%91%B3%E7%B2%BE%E7%97%87%E5%80%99%E7%BE%A4%23) `85.2K 🔥` `+117%`
1. [为啥瘦下来的人会变得高冷](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E7%98%A6%E4%B8%8B%E6%9D%A5%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%8F%98%E5%BE%97%E9%AB%98%E5%86%B7%23) `82.3K 🔥` `+101%`
1. [王濛和万千惠说对不起](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%92%8C%E4%B8%87%E5%8D%83%E6%83%A0%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `77.6K 🔥` `+23%`
1. [白鹿丞磊合唱遇到太甜了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E5%90%88%E5%94%B1%E9%81%87%E5%88%B0%E5%A4%AA%E7%94%9C%E4%BA%86%23) `46.9K 🔥` `+54%`
1. [广西巴马 特大暴雨](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%B7%B4%E9%A9%AC%20%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `46.9K 🔥` `+54%`
1. [浪姐淘汰了两个ACE (Sister Lang eliminated two ACEs)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%E4%BA%86%E4%B8%A4%E4%B8%AAACE%23) `46.8K 🔥` `+56%`
1. [网友求助糯米洒身刺痛](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%B1%82%E5%8A%A9%E7%B3%AF%E7%B1%B3%E6%B4%92%E8%BA%AB%E5%88%BA%E7%97%9B%23) `46.8K 🔥` `+35%`
1. [王源唱粉丝写给他的歌 (Wang Yuan sings songs written by fans)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%94%B1%E7%B2%89%E4%B8%9D%E5%86%99%E7%BB%99%E4%BB%96%E7%9A%84%E6%AD%8C%23) `46.7K 🔥` `+54%`
1. [曾沛慈庄法 神级舞台 (Zeng Pei Cizhuang Dharma Divine Stage)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BA%84%E6%B3%95%20%E7%A5%9E%E7%BA%A7%E8%88%9E%E5%8F%B0%23) `46.7K 🔥` `+24%`
1. [C罗大儿子快两米高了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A4%A7%E5%84%BF%E5%AD%90%E5%BF%AB%E4%B8%A4%E7%B1%B3%E9%AB%98%E4%BA%86%23) `46.7K 🔥` `+39%`
1. [给阿嬷的情书海外爆火 (Love letter to grandma goes viral overseas)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%B5%B7%E5%A4%96%E7%88%86%E7%81%AB%23) `46.6K 🔥` `+56%`
1. [安崎个喜11 (An Qi's happy 11)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E4%B8%AA%E5%96%9C11%23) `46.6K 🔥` `+38%`
1. [荷兰开场5分钟进球](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%80%E5%9C%BA5%E5%88%86%E9%92%9F%E8%BF%9B%E7%90%83%23) `46.4K 🔥` `+54%`
1. [原来这么多年牛肉都切错了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E7%89%9B%E8%82%89%E9%83%BD%E5%88%87%E9%94%99%E4%BA%86%23) `246.9K 🔥`
1. [德国vs科特迪瓦](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BDvs%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A6%23) `145.9K 🔥`
1. [浪姐总决赛晋级名单](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%E6%99%8B%E7%BA%A7%E5%90%8D%E5%8D%95%23) `123.4K 🔥`
1. [申惠善视后](https://s.weibo.com/weibo?q=%23%E7%94%B3%E6%83%A0%E5%96%84%E8%A7%86%E5%90%8E%23) `85.1K 🔥`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `81.2K 🔥`
1. [徐梦洁个喜17](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E4%B8%AA%E5%96%9C17%23) `60.5K 🔥`
1. [唐艺昕五公长文](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%94%E5%85%AC%E9%95%BF%E6%96%87%23) `47.9K 🔥`
1. [李小冉婚纱 美得好夸张](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%A9%9A%E7%BA%B1%20%E7%BE%8E%E5%BE%97%E5%A5%BD%E5%A4%B8%E5%BC%A0%23) `47.0K 🔥`
1. [马宁哽咽说只要中国足球需要就全力以赴 (Ma Ning choked up and said he would go all out as long as Chinese football needs it)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%93%BD%E5%92%BD%E8%AF%B4%E5%8F%AA%E8%A6%81%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E9%9C%80%E8%A6%81%E5%B0%B1%E5%85%A8%E5%8A%9B%E4%BB%A5%E8%B5%B4%23) `46.8K 🔥`
1. [马斯克暴赚7800亿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%9A%B4%E8%B5%9A7800%E4%BA%BF%23) `46.8K 🔥`
1. [何宣林淘汰 (He Xuanlin was eliminated)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B7%98%E6%B1%B0%23) `46.7K 🔥`
1. [布罗比梅开二度 (Brobbie scored twice)](https://s.weibo.com/weibo?q=%23%E5%B8%83%E7%BD%97%E6%AF%94%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `46.6K 🔥`
1. [马宁担任英格兰vs加纳四官 (Maning serves as England vs Ghana fourth official)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%8B%85%E4%BB%BB%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E5%8A%A0%E7%BA%B3%E5%9B%9B%E5%AE%98%23) `46.4K 🔥`
1. [EDG告别伦敦大师赛](https://s.weibo.com/weibo?q=%23EDG%E5%91%8A%E5%88%AB%E4%BC%A6%E6%95%A6%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `46.4K 🔥`
1. [特朗普高市早苗当众吵起来了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%BD%93%E4%BC%97%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `112.1K 🔥` `-41%`
1. [陈凯琳发文说没有遗憾了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%87%AF%E7%90%B3%E5%8F%91%E6%96%87%E8%AF%B4%E6%B2%A1%E6%9C%89%E9%81%97%E6%86%BE%E4%BA%86%23) `61.3K 🔥` `-24%`
1. [曾敬骅视帝](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%95%AC%E9%AA%85%E8%A7%86%E5%B8%9D%23) `50.1K 🔥` `-26%`
1. [荷兰连进4球](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E8%BF%9E%E8%BF%9B4%E7%90%83%23) `46.9K 🔥` `-59%`
1. [荷兰vs瑞典](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0vs%E7%91%9E%E5%85%B8%23) `46.5K 🔥` `-29%`

Updated at 2026-06-21 06:52:43

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
