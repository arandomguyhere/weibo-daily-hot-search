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

1. [法国连续三年被西班牙淘汰 (France was eliminated by Spain for the third consecutive year)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%B9%B4%E8%A2%AB%E8%A5%BF%E7%8F%AD%E7%89%99%E6%B7%98%E6%B1%B0%23) `1.6M 🔥` `NEW`
1. [亚马尔九擒姆巴佩](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B9%9D%E6%93%92%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `1.1M 🔥` `NEW`
1. [刘旭东](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%97%AD%E4%B8%9C%23) `241.2K 🔥` `NEW`
1. [赵本山已彻底退出演艺工作](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%B7%B2%E5%BD%BB%E5%BA%95%E9%80%80%E5%87%BA%E6%BC%94%E8%89%BA%E5%B7%A5%E4%BD%9C%23) `239.3K 🔥` `NEW`
1. [入伏](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BC%8F%23) `228.6K 🔥` `NEW`
1. [张小斐中国首位票房破百亿85花](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%BD%8D%E7%A5%A8%E6%88%BF%E7%A0%B4%E7%99%BE%E4%BA%BF85%E8%8A%B1%23) `228.5K 🔥` `NEW`
1. [邹市明说花了很多不该花的钱](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E8%AF%B4%E8%8A%B1%E4%BA%86%E5%BE%88%E5%A4%9A%E4%B8%8D%E8%AF%A5%E8%8A%B1%E7%9A%84%E9%92%B1%23) `227.3K 🔥` `NEW`
1. [别把洪水娱乐化](https://s.weibo.com/weibo?q=%23%E5%88%AB%E6%8A%8A%E6%B4%AA%E6%B0%B4%E5%A8%B1%E4%B9%90%E5%8C%96%23) `225.2K 🔥` `NEW`
1. [法西大战 裁判争议](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%A5%BF%E5%A4%A7%E6%88%98%20%E8%A3%81%E5%88%A4%E4%BA%89%E8%AE%AE%23) `222.9K 🔥` `NEW`
1. [易烊千玺逃过一劫](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%80%83%E8%BF%87%E4%B8%80%E5%8A%AB%23) `220.2K 🔥` `NEW`
1. [王橹杰穆祉丞运动会一组 (Wang Lujie and Mu Zhicheng Sports Meet Group)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%90%E5%8A%A8%E4%BC%9A%E4%B8%80%E7%BB%84%23) `217.4K 🔥` `NEW`
1. [严格落实职工带薪休假制度](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%A0%BC%E8%90%BD%E5%AE%9E%E8%81%8C%E5%B7%A5%E5%B8%A6%E8%96%AA%E4%BC%91%E5%81%87%E5%88%B6%E5%BA%A6%23) `215.6K 🔥` `NEW`
1. [周星驰看迪丽热巴的眼神](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `213.2K 🔥` `NEW`
1. [沈阳积水未退又下暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E7%A7%AF%E6%B0%B4%E6%9C%AA%E9%80%80%E5%8F%88%E4%B8%8B%E6%9A%B4%E9%9B%A8%23) `211.6K 🔥` `NEW`
1. [西班牙时隔16年再进世界杯决赛](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%97%B6%E9%9A%9416%E5%B9%B4%E5%86%8D%E8%BF%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `139.1K 🔥` `NEW`
1. [变形机器人是人是狗AI吵翻了](https://s.weibo.com/weibo?q=%23%E5%8F%98%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%98%AF%E4%BA%BA%E6%98%AF%E7%8B%97AI%E5%90%B5%E7%BF%BB%E4%BA%86%23) `129.8K 🔥` `NEW`
1. [周星驰功夫女足票房一路飙升](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E4%B8%80%E8%B7%AF%E9%A3%99%E5%8D%87%23) `129.2K 🔥` `NEW`
1. [邹市明踩中明星创业的每一个雷区](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E8%B8%A9%E4%B8%AD%E6%98%8E%E6%98%9F%E5%88%9B%E4%B8%9A%E7%9A%84%E6%AF%8F%E4%B8%80%E4%B8%AA%E9%9B%B7%E5%8C%BA%23) `129.1K 🔥` `NEW`
1. [姆巴佩心态崩了](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%23) `11.3M 🔥` `+227%`
1. [佛得角的含金量还在上升 (Cape Verde’s gold content is still rising)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `2.1M 🔥` `+63%`
1. [上淘宝闪购和张凌赫悦享一夏 (Enjoy a summer of fun with Taobao flash sales with Zhang Linghe)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%92%8C%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%82%A6%E4%BA%AB%E4%B8%80%E5%A4%8F%23) `1.8M 🔥` `+77%`
1. [暑期档长剧 裸播](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%E9%95%BF%E5%89%A7%20%E8%A3%B8%E6%92%AD%23) `533.6K 🔥` `+37%`
1. [长鑫科技公告 (Changxin Technology Announcement)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%85%AC%E5%91%8A%23) `226.4K 🔥` `+29%`
1. [江浙沪孩子最苦的可能就是退休后 (The most difficult thing for children in Jiangsu, Zhejiang and Shanghai may be after retirement)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%AD%A9%E5%AD%90%E6%9C%80%E8%8B%A6%E7%9A%84%E5%8F%AF%E8%83%BD%E5%B0%B1%E6%98%AF%E9%80%80%E4%BC%91%E5%90%8E%23) `223.5K 🔥` `+27%`
1. [入伏后做好6件事攒气血 (Do 6 things to save energy and blood after entering the ambush)](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BC%8F%E5%90%8E%E5%81%9A%E5%A5%BD6%E4%BB%B6%E4%BA%8B%E6%94%92%E6%B0%94%E8%A1%80%23) `221.4K 🔥` `+27%`
1. [伊朗称美进入正式战争状态 (Iran says US has entered formal state of war)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E8%BF%9B%E5%85%A5%E6%AD%A3%E5%BC%8F%E6%88%98%E4%BA%89%E7%8A%B6%E6%80%81%23) `218.5K 🔥` `+27%`
1. [惠民生促消费双向发力](https://s.weibo.com/weibo?q=%23%E6%83%A0%E6%B0%91%E7%94%9F%E4%BF%83%E6%B6%88%E8%B4%B9%E5%8F%8C%E5%90%91%E5%8F%91%E5%8A%9B%23) `1.8M 🔥`
1. [老人买肉买走了最难卖的一块 (When the old man bought meat, he bought the most difficult piece to sell.)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B9%B0%E8%82%89%E4%B9%B0%E8%B5%B0%E4%BA%86%E6%9C%80%E9%9A%BE%E5%8D%96%E7%9A%84%E4%B8%80%E5%9D%97%23) `224.8K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `191.3K 🔥`
1. [姆巴佩最忌惮的男人 (The man Mbappe fears most)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%9C%80%E5%BF%8C%E6%83%AE%E7%9A%84%E7%94%B7%E4%BA%BA%23) `177.6K 🔥`
1. [为什么早年创伤多的人显年轻](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%97%A9%E5%B9%B4%E5%88%9B%E4%BC%A4%E5%A4%9A%E7%9A%84%E4%BA%BA%E6%98%BE%E5%B9%B4%E8%BD%BB%23) `151.8K 🔥`
1. [多地开始抢老人 (Many places have begun to rob the elderly)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%BC%80%E5%A7%8B%E6%8A%A2%E8%80%81%E4%BA%BA%23) `141.0K 🔥`
1. [养老金向低收入群体倾斜](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%80%81%E9%87%91%E5%90%91%E4%BD%8E%E6%94%B6%E5%85%A5%E7%BE%A4%E4%BD%93%E5%80%BE%E6%96%9C%23) `139.4K 🔥`
1. [法国0比2西班牙 (France 0-2 Spain)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD0%E6%AF%942%E8%A5%BF%E7%8F%AD%E7%89%99%23) `1.2M 🔥` `-45%`
1. [法国 大热必死 (France will die from the heat)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%20%E5%A4%A7%E7%83%AD%E5%BF%85%E6%AD%BB%23) `633.2K 🔥` `-21%`
1. [迪丽热巴听到周星驰女儿的表情 (Di Lieba heard Stephen Chow's daughter's expression)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%AC%E5%88%B0%E5%91%A8%E6%98%9F%E9%A9%B0%E5%A5%B3%E5%84%BF%E7%9A%84%E8%A1%A8%E6%83%85%23) `243.7K 🔥` `-35%`
1. [法国回应淘汰 (France responds to elimination)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%23) `238.6K 🔥` `-51%`
1. [亚马尔数据](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E6%95%B0%E6%8D%AE%23) `234.1K 🔥` `-26%`
1. [法国vs西班牙 (France vs Spain)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E8%A5%BF%E7%8F%AD%E7%89%99%23) `231.5K 🔥` `-32%`
1. [遭婚闹九级伤残伴娘被从柜子中拖出](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%A9%9A%E9%97%B9%E4%B9%9D%E7%BA%A7%E4%BC%A4%E6%AE%8B%E4%BC%B4%E5%A8%98%E8%A2%AB%E4%BB%8E%E6%9F%9C%E5%AD%90%E4%B8%AD%E6%8B%96%E5%87%BA%23) `230.4K 🔥` `-38%`
1. [西班牙 极致传控](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%20%E6%9E%81%E8%87%B4%E4%BC%A0%E6%8E%A7%23) `221.0K 🔥` `-55%`
1. [于正编辑掉和陈都灵合照 (Yu Zheng edited out the photo with Chen Duling)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E7%BC%96%E8%BE%91%E6%8E%89%E5%92%8C%E9%99%88%E9%83%BD%E7%81%B5%E5%90%88%E7%85%A7%23) `219.1K 🔥` `-24%`
1. [给亚马尔装到了](https://s.weibo.com/weibo?q=%23%E7%BB%99%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%A3%85%E5%88%B0%E4%BA%86%23) `216.5K 🔥` `-37%`
1. [亚马尔铲翻姆巴佩](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E9%93%B2%E7%BF%BB%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `215.0K 🔥` `-42%`
1. [极品贵公子井川里予 备注脑婆 (The Most Excellent Prince, Riyu Igawa, Note: Nao Po)](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%93%81%E8%B4%B5%E5%85%AC%E5%AD%90%E4%BA%95%E5%B7%9D%E9%87%8C%E4%BA%88%20%E5%A4%87%E6%B3%A8%E8%84%91%E5%A9%86%23) `162.5K 🔥` `-41%`
1. [法国淘汰](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B7%98%E6%B1%B0%23) `158.9K 🔥` `-68%`
1. [法国 梦游](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%20%E6%A2%A6%E6%B8%B8%23) `138.8K 🔥` `-21%`
1. [伊朗前总统内贾德被软禁 (Former Iranian President Mahmoud Ahmadinejad placed under house arrest)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E8%A2%AB%E8%BD%AF%E7%A6%81%23) `129.0K 🔥` `-26%`
1. [施南生是蒋南孙原型](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E6%98%AF%E8%92%8B%E5%8D%97%E5%AD%99%E5%8E%9F%E5%9E%8B%23) `128.9K 🔥` `-26%`
1. [内娱请把古偶还给少男少女 (Domestic entertainment, please return the ancient dolls to boys and girls)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E6%8A%8A%E5%8F%A4%E5%81%B6%E8%BF%98%E7%BB%99%E5%B0%91%E7%94%B7%E5%B0%91%E5%A5%B3%23) `128.8K 🔥` `-26%`
1. [人机恋就这么水灵灵的诞生了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%9C%BA%E6%81%8B%E5%B0%B1%E8%BF%99%E4%B9%88%E6%B0%B4%E7%81%B5%E7%81%B5%E7%9A%84%E8%AF%9E%E7%94%9F%E4%BA%86%23) `128.7K 🔥` `-25%`

Updated at 2026-07-15 08:06:19

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
