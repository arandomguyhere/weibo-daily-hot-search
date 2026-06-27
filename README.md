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

1. [黎某某网上公然侮辱张桂梅校长被行拘 (Li Moumou was arrested for openly insulting Principal Zhang Guimei online)](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E6%9F%90%E6%9F%90%E7%BD%91%E4%B8%8A%E5%85%AC%E7%84%B6%E4%BE%AE%E8%BE%B1%E5%BC%A0%E6%A1%82%E6%A2%85%E6%A0%A1%E9%95%BF%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `895.3K 🔥` `NEW`
1. [背刺6.78亿用户WPS吃相有点难看](https://s.weibo.com/weibo?q=%23%E8%83%8C%E5%88%BA6.78%E4%BA%BF%E7%94%A8%E6%88%B7WPS%E5%90%83%E7%9B%B8%E6%9C%89%E7%82%B9%E9%9A%BE%E7%9C%8B%23) `808.5K 🔥` `NEW`
1. [高校互推日](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E4%BA%92%E6%8E%A8%E6%97%A5%23) `721.3K 🔥` `NEW`
1. [佛得角vs沙特](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92vs%E6%B2%99%E7%89%B9%23) `644.0K 🔥` `NEW`
1. [大疆已报案](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `516.0K 🔥` `NEW`
1. [张凌赫白玉兰拍了好多合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BD%E7%8E%89%E5%85%B0%E6%8B%8D%E4%BA%86%E5%A5%BD%E5%A4%9A%E5%90%88%E7%85%A7%23) `486.1K 🔥` `NEW`
1. [韩国民众怒火滔天](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B0%91%E4%BC%97%E6%80%92%E7%81%AB%E6%BB%94%E5%A4%A9%23) `483.2K 🔥` `NEW`
1. [白鹿演唱会妆造](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A6%86%E9%80%A0%23) `479.2K 🔥` `NEW`
1. [深圳凭颜值上热搜女生高考出分了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%87%AD%E9%A2%9C%E5%80%BC%E4%B8%8A%E7%83%AD%E6%90%9C%E5%A5%B3%E7%94%9F%E9%AB%98%E8%80%83%E5%87%BA%E5%88%86%E4%BA%86%23) `476.1K 🔥` `NEW`
1. [巨力索具被罚](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%8A%9B%E7%B4%A2%E5%85%B7%E8%A2%AB%E7%BD%9A%23) `467.8K 🔥` `NEW`
1. [登贝莱追平姆巴佩 (Dembele draws with Mbappe)](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E8%BF%BD%E5%B9%B3%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `466.4K 🔥` `NEW`
1. [姆巴佩哈兰德情头有了](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%93%88%E5%85%B0%E5%BE%B7%E6%83%85%E5%A4%B4%E6%9C%89%E4%BA%86%23) `460.3K 🔥` `NEW`
1. [西班牙进球](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%BF%9B%E7%90%83%23) `456.9K 🔥` `NEW`
1. [ally说宋轶是白敬亭女朋友](https://s.weibo.com/weibo?q=%23ally%E8%AF%B4%E5%AE%8B%E8%BD%B6%E6%98%AF%E7%99%BD%E6%95%AC%E4%BA%AD%E5%A5%B3%E6%9C%8B%E5%8F%8B%23) `451.5K 🔥` `NEW`
1. [iPhone18标准版最新爆料](https://s.weibo.com/weibo?q=%23iPhone18%E6%A0%87%E5%87%86%E7%89%88%E6%9C%80%E6%96%B0%E7%88%86%E6%96%99%23) `450.0K 🔥` `NEW`
1. [孙颖莎ins更新](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Eins%E6%9B%B4%E6%96%B0%23) `358.2K 🔥` `NEW`
1. [姆巴佩哈兰德赛后拥抱](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%93%88%E5%85%B0%E5%BE%B7%E8%B5%9B%E5%90%8E%E6%8B%A5%E6%8A%B1%23) `323.5K 🔥` `NEW`
1. [侯明昊哈哈](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%93%88%E5%93%88%23) `259.5K 🔥` `NEW`
1. [乌拉圭vs西班牙](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%8B%89%E5%9C%ADvs%E8%A5%BF%E7%8F%AD%E7%89%99%23) `226.9K 🔥` `NEW`
1. [正午阳光感恩所有](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E6%84%9F%E6%81%A9%E6%89%80%E6%9C%89%23) `220.8K 🔥` `NEW`
1. [姆巴佩16粒世界杯进球追平克洛泽 (Mbappe equals Klose with 16 World Cup goals)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A916%E7%B2%92%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BF%9B%E7%90%83%E8%BF%BD%E5%B9%B3%E5%85%8B%E6%B4%9B%E6%B3%BD%23) `211.3K 🔥` `NEW`
1. [王楚钦孙颖莎混双亮相LA](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%B7%B7%E5%8F%8C%E4%BA%AE%E7%9B%B8LA%23) `208.5K 🔥` `NEW`
1. [向太称向佐和向佑合体很开心](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%A7%B0%E5%90%91%E4%BD%90%E5%92%8C%E5%90%91%E4%BD%91%E5%90%88%E4%BD%93%E5%BE%88%E5%BC%80%E5%BF%83%23) `204.1K 🔥` `NEW`
1. [小泡芙父母决定上诉](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B3%A1%E8%8A%99%E7%88%B6%E6%AF%8D%E5%86%B3%E5%AE%9A%E4%B8%8A%E8%AF%89%23) `198.7K 🔥` `NEW`
1. [上海迪士尼回应酒店戴森吹风机争议](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%9B%9E%E5%BA%94%E9%85%92%E5%BA%97%E6%88%B4%E6%A3%AE%E5%90%B9%E9%A3%8E%E6%9C%BA%E4%BA%89%E8%AE%AE%23) `196.0K 🔥` `NEW`
1. [王楚钦首轮遭遇国乒内战](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%A6%96%E8%BD%AE%E9%81%AD%E9%81%87%E5%9B%BD%E4%B9%92%E5%86%85%E6%88%98%23) `185.9K 🔥` `NEW`
1. [白玉兰我不知道你们咋了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%A0%E4%BB%AC%E5%92%8B%E4%BA%86%23) `2.1M 🔥` `+431%`
1. [杨紫经纪人抱着杨紫哭 (Yang Zi’s manager hugged Yang Zi and cried)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%8A%B1%E7%9D%80%E6%9D%A8%E7%B4%AB%E5%93%AD%23) `867.9K 🔥` `+123%`
1. [韩国队被全世界针对 (The Korean team is targeted around the world)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E8%A2%AB%E5%85%A8%E4%B8%96%E7%95%8C%E9%92%88%E5%AF%B9%23) `490.3K 🔥` `+24%`
1. [两大90花都有主流视后了 (The two major 90-year-old girls are now mainstream viewers.)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%A790%E8%8A%B1%E9%83%BD%E6%9C%89%E4%B8%BB%E6%B5%81%E8%A7%86%E5%90%8E%E4%BA%86%23) `474.9K 🔥` `+27%`
1. [女子溪谷中玩水身体被卡石缝身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%BA%AA%E8%B0%B7%E4%B8%AD%E7%8E%A9%E6%B0%B4%E8%BA%AB%E4%BD%93%E8%A2%AB%E5%8D%A1%E7%9F%B3%E7%BC%9D%E8%BA%AB%E4%BA%A1%23) `472.1K 🔥` `+25%`
1. [智谱股价为何是小米的100倍](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%B0%B1%E8%82%A1%E4%BB%B7%E4%B8%BA%E4%BD%95%E6%98%AF%E5%B0%8F%E7%B1%B3%E7%9A%84100%E5%80%8D%23) `462.4K 🔥` `+46%`
1. [藏海传 挂零](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%20%E6%8C%82%E9%9B%B6%23) `856.8K 🔥`
1. [张凌赫关晓彤身高差 (Height difference between Zhang Linghe and Guan Xiaotong)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%B3%E6%99%93%E5%BD%A4%E8%BA%AB%E9%AB%98%E5%B7%AE%23) `455.1K 🔥`
1. [白玉兰获奖名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `438.3K 🔥`
1. [我打差评不是为了让店员丢工作](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%89%93%E5%B7%AE%E8%AF%84%E4%B8%8D%E6%98%AF%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%BA%97%E5%91%98%E4%B8%A2%E5%B7%A5%E4%BD%9C%23) `422.4K 🔥`
1. [85花白玉兰全部战败](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%E7%99%BD%E7%8E%89%E5%85%B0%E5%85%A8%E9%83%A8%E6%88%98%E8%B4%A5%23) `402.8K 🔥`
1. [5.6亿云养牛骗局实际一头牛都没有](https://s.weibo.com/weibo?q=%235.6%E4%BA%BF%E4%BA%91%E5%85%BB%E7%89%9B%E9%AA%97%E5%B1%80%E5%AE%9E%E9%99%85%E4%B8%80%E5%A4%B4%E7%89%9B%E9%83%BD%E6%B2%A1%E6%9C%89%23) `358.3K 🔥`
1. [杨幂 陪跑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E9%99%AA%E8%B7%91%23) `350.7K 🔥`
1. [侯明昊淘汰 (Hou Minghao eliminated)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%B7%98%E6%B1%B0%23) `343.1K 🔥`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `323.2K 🔥`
1. [挪威1比4法国 (Norway 1 to 4 France)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%811%E6%AF%944%E6%B3%95%E5%9B%BD%23) `1.0M 🔥` `-49%`
1. [还以为五六点醒是身体出问题了](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E4%BA%94%E5%85%AD%E7%82%B9%E9%86%92%E6%98%AF%E8%BA%AB%E4%BD%93%E5%87%BA%E9%97%AE%E9%A2%98%E4%BA%86%23) `556.6K 🔥` `-24%`
1. [哈兰德姆巴佩王不见王](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%8E%8B%E4%B8%8D%E8%A7%81%E7%8E%8B%23) `319.4K 🔥` `-62%`
1. [姆巴佩只关注了樊振东一个真人 (Mbappe only follows Fan Zhendong, a real person)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%AA%E5%85%B3%E6%B3%A8%E4%BA%86%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%80%E4%B8%AA%E7%9C%9F%E4%BA%BA%23) `293.4K 🔥` `-21%`
1. [发现在北京生活特别显年轻 (I find that living in Beijing makes me look particularly young.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%94%9F%E6%B4%BB%E7%89%B9%E5%88%AB%E6%98%BE%E5%B9%B4%E8%BD%BB%23) `252.7K 🔥` `-30%`
1. [85花 白玉兰陪跑](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%20%E7%99%BD%E7%8E%89%E5%85%B0%E9%99%AA%E8%B7%91%23) `234.2K 🔥` `-32%`
1. [高考699分女生说要让父母过好日子 (A girl who scored 699 in the college entrance examination said she wants her parents to live a good life)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83699%E5%88%86%E5%A5%B3%E7%94%9F%E8%AF%B4%E8%A6%81%E8%AE%A9%E7%88%B6%E6%AF%8D%E8%BF%87%E5%A5%BD%E6%97%A5%E5%AD%90%23) `205.6K 🔥` `-36%`
1. [14岁少女谈吸毒后割腕](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%B0%91%E5%A5%B3%E8%B0%88%E5%90%B8%E6%AF%92%E5%90%8E%E5%89%B2%E8%85%95%23) `192.8K 🔥` `-49%`
1. [微信朋友圈互删清空对方全部痕迹 (Delete each other in WeChat Moments and clear all traces of each other)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%88%A0%E6%B8%85%E7%A9%BA%E5%AF%B9%E6%96%B9%E5%85%A8%E9%83%A8%E7%97%95%E8%BF%B9%23) `190.4K 🔥` `-50%`

Updated at 2026-06-27 09:34:18

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
