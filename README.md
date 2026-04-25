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

1. [看完孙杨直接内伤失眠了 (After watching Sun Yang, I suffered internal injuries and suffered from insomnia.)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E5%AD%99%E6%9D%A8%E7%9B%B4%E6%8E%A5%E5%86%85%E4%BC%A4%E5%A4%B1%E7%9C%A0%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [东方甄选 明明天权离职](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%20%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E7%A6%BB%E8%81%8C%23) `375.0K 🔥` `NEW`
1. [全球智能安全汽车引领者](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%99%BA%E8%83%BD%E5%AE%89%E5%85%A8%E6%B1%BD%E8%BD%A6%E5%BC%95%E9%A2%86%E8%80%85%23) `350.0K 🔥` `NEW`
1. [深圳 吸烟](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%20%E5%90%B8%E7%83%9F%23) `193.4K 🔥` `NEW`
1. [医生将2粒药打成21粒患者索赔10万](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%B0%862%E7%B2%92%E8%8D%AF%E6%89%93%E6%88%9021%E7%B2%92%E6%82%A3%E8%80%85%E7%B4%A2%E8%B5%9410%E4%B8%87%23) `191.1K 🔥` `NEW`
1. [傅首尔曾8个月减重26斤](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E6%9B%BE8%E4%B8%AA%E6%9C%88%E5%87%8F%E9%87%8D26%E6%96%A4%23) `184.9K 🔥` `NEW`
1. [孙杨的情商](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E7%9A%84%E6%83%85%E5%95%86%23) `177.9K 🔥` `NEW`
1. [来杯姬尾酒](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E6%9D%AF%E5%A7%AC%E5%B0%BE%E9%85%92%23) `177.0K 🔥` `NEW`
1. [丁俊晖4比4赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%964%E6%AF%944%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `129.6K 🔥` `NEW`
1. [全国首个伴侣动物立法草案被删除](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%B8%AA%E4%BC%B4%E4%BE%A3%E5%8A%A8%E7%89%A9%E7%AB%8B%E6%B3%95%E8%8D%89%E6%A1%88%E8%A2%AB%E5%88%A0%E9%99%A4%23) `878.9K 🔥` `+30%`
1. [开局之年我国经济运行起步有力 (my country’s economy got off to a strong start in the first year)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E8%BF%90%E8%A1%8C%E8%B5%B7%E6%AD%A5%E6%9C%89%E5%8A%9B%23) `682.3K 🔥` `+35%`
1. [年少的心动真的过期不候 (The heartbeat of youth really expires)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E7%9A%84%E5%BF%83%E5%8A%A8%E7%9C%9F%E7%9A%84%E8%BF%87%E6%9C%9F%E4%B8%8D%E5%80%99%23) `249.2K 🔥` `+36%`
1. [丁俊晖vs赵心童 (Ding Junhui vs Zhao Xintong)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96vs%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `208.6K 🔥` `+57%`
1. [曝毛晓彤凌晨从医美诊所离开](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AF%9B%E6%99%93%E5%BD%A4%E5%87%8C%E6%99%A8%E4%BB%8E%E5%8C%BB%E7%BE%8E%E8%AF%8A%E6%89%80%E7%A6%BB%E5%BC%80%23) `169.1K 🔥` `+33%`
1. [孙杨 张豆豆](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E5%BC%A0%E8%B1%86%E8%B1%86%23) `168.5K 🔥` `+40%`
1. [印度男子酒后杀妻竟提头颅穿行村庄 (An Indian man killed his wife after drinking and carried her head through the village)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E6%9D%80%E5%A6%BB%E7%AB%9F%E6%8F%90%E5%A4%B4%E9%A2%85%E7%A9%BF%E8%A1%8C%E6%9D%91%E5%BA%84%23) `159.2K 🔥` `+60%`
1. [高校一男生戴假发进女生宿舍偷拍](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E4%B8%80%E7%94%B7%E7%94%9F%E6%88%B4%E5%81%87%E5%8F%91%E8%BF%9B%E5%A5%B3%E7%94%9F%E5%AE%BF%E8%88%8D%E5%81%B7%E6%8B%8D%23) `142.5K 🔥` `+41%`
1. [金价跌破新低 (Gold prices hit new lows)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E7%A0%B4%E6%96%B0%E4%BD%8E%23) `113.0K 🔥` `+31%`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `106.2K 🔥` `+52%`
1. [黄金跌透了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E9%80%8F%E4%BA%86%E5%90%97%23) `102.4K 🔥` `+21%`
1. [刘宇宁惦记投喂任贤齐](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%83%A6%E8%AE%B0%E6%8A%95%E5%96%82%E4%BB%BB%E8%B4%A4%E9%BD%90%23) `99.7K 🔥` `+42%`
1. [12306回应家长和孩子相隔14个车厢 (12306 responded that parents and children are separated by 14 carriages)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%AE%B6%E9%95%BF%E5%92%8C%E5%AD%A9%E5%AD%90%E7%9B%B8%E9%9A%9414%E4%B8%AA%E8%BD%A6%E5%8E%A2%23) `93.8K 🔥` `+34%`
1. [AI在保护AI](https://s.weibo.com/weibo?q=%23AI%E5%9C%A8%E4%BF%9D%E6%8A%A4AI%23) `93.4K 🔥` `+34%`
1. [地平线国产智驾芯片第一 (Horizon ranks first in domestic smart driving chips)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E5%B9%B3%E7%BA%BF%E5%9B%BD%E4%BA%A7%E6%99%BA%E9%A9%BE%E8%8A%AF%E7%89%87%E7%AC%AC%E4%B8%80%23) `433.2K 🔥`
1. [陶昕然淘汰](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E6%B7%98%E6%B1%B0%23) `433.2K 🔥`
1. [以色列防长威胁将伊朗打回石器时期](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%98%B2%E9%95%BF%E5%A8%81%E8%83%81%E5%B0%86%E4%BC%8A%E6%9C%97%E6%89%93%E5%9B%9E%E7%9F%B3%E5%99%A8%E6%97%B6%E6%9C%9F%23) `321.8K 🔥`
1. [不对任何cp付出真情实感算长大吗 (Is it considered a grown-up not to show true feelings to any CP?)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%AF%B9%E4%BB%BB%E4%BD%95cp%E4%BB%98%E5%87%BA%E7%9C%9F%E6%83%85%E5%AE%9E%E6%84%9F%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `199.4K 🔥`
1. [鹿晗 (Luhan)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%23) `196.9K 🔥`
1. [羽协主席张军失联 (Badminton Association Chairman Zhang Jun is missing)](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E5%8D%8F%E4%B8%BB%E5%B8%AD%E5%BC%A0%E5%86%9B%E5%A4%B1%E8%81%94%23) `194.3K 🔥`
1. [妈妈生了9个孩子又有了30个孙辈](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%94%9F%E4%BA%869%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%8F%88%E6%9C%89%E4%BA%8630%E4%B8%AA%E5%AD%99%E8%BE%88%23) `185.8K 🔥`
1. [官方回应华晨宇演唱会选址质疑 (Official response to Hua Chenyu’s concert location query)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%89%E5%9D%80%E8%B4%A8%E7%96%91%23) `180.7K 🔥`
1. [黄仁勋预言的灾难仅9天就成真 (The disaster predicted by Jen-Hsun Huang came true in just 9 days)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E9%A2%84%E8%A8%80%E7%9A%84%E7%81%BE%E9%9A%BE%E4%BB%859%E5%A4%A9%E5%B0%B1%E6%88%90%E7%9C%9F%23) `177.5K 🔥`
1. [北京车展有哪些值得期待新车](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%E6%9C%89%E5%93%AA%E4%BA%9B%E5%80%BC%E5%BE%97%E6%9C%9F%E5%BE%85%E6%96%B0%E8%BD%A6%23) `177.5K 🔥`
1. [这才是普通家庭养孩子的最优解](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E5%85%BB%E5%AD%A9%E5%AD%90%E7%9A%84%E6%9C%80%E4%BC%98%E8%A7%A3%23) `177.4K 🔥`
1. [华晨宇演唱会当地民众发声 (Local people speak out at Hua Chenyu’s concert)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BD%93%E5%9C%B0%E6%B0%91%E4%BC%97%E5%8F%91%E5%A3%B0%23) `177.3K 🔥`
1. [男子30年前被扣押2859克黄金未返还 (Man’s 2,859 grams of gold seized 30 years ago has not been returned)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9030%E5%B9%B4%E5%89%8D%E8%A2%AB%E6%89%A3%E6%8A%BC2859%E5%85%8B%E9%BB%84%E9%87%91%E6%9C%AA%E8%BF%94%E8%BF%98%23) `177.2K 🔥`
1. [电诈园老板嚣张妄言警方拿他没办法 (The owner of the electronic fraud park arrogantly claimed that the police could do nothing against him)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%9B%AD%E8%80%81%E6%9D%BF%E5%9A%A3%E5%BC%A0%E5%A6%84%E8%A8%80%E8%AD%A6%E6%96%B9%E6%8B%BF%E4%BB%96%E6%B2%A1%E5%8A%9E%E6%B3%95%23) `177.2K 🔥`
1. [网友开始嗑李昀锐和白鹿 (Netizens started to smoke Li Yunrui and Bailu)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%BC%80%E5%A7%8B%E5%97%91%E6%9D%8E%E6%98%80%E9%94%90%E5%92%8C%E7%99%BD%E9%B9%BF%23) `177.1K 🔥`
1. [张军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%86%9B%23) `177.0K 🔥`
1. [孙杨 爷们要脸 (Sun Yang, you want face)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E7%88%B7%E4%BB%AC%E8%A6%81%E8%84%B8%23) `176.8K 🔥`
1. [美国女子在印度遭民宿员工下药强奸](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%8D%B0%E5%BA%A6%E9%81%AD%E6%B0%91%E5%AE%BF%E5%91%98%E5%B7%A5%E4%B8%8B%E8%8D%AF%E5%BC%BA%E5%A5%B8%23) `176.7K 🔥`
1. [李小冉钟汉良16年前的剧翻红](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E9%92%9F%E6%B1%89%E8%89%AF16%E5%B9%B4%E5%89%8D%E7%9A%84%E5%89%A7%E7%BF%BB%E7%BA%A2%23) `176.6K 🔥`
1. [男子投诉救护车迟到致幼子身亡 (Man complains that ambulance was late, causing death of young son)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%95%E8%AF%89%E6%95%91%E6%8A%A4%E8%BD%A6%E8%BF%9F%E5%88%B0%E8%87%B4%E5%B9%BC%E5%AD%90%E8%BA%AB%E4%BA%A1%23) `170.0K 🔥`
1. [原来内耗的人需要的是这样的安慰](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E8%80%97%E7%9A%84%E4%BA%BA%E9%9C%80%E8%A6%81%E7%9A%84%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%E5%AE%89%E6%85%B0%23) `121.5K 🔥`
1. [养育孩子的三个目标](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%82%B2%E5%AD%A9%E5%AD%90%E7%9A%84%E4%B8%89%E4%B8%AA%E7%9B%AE%E6%A0%87%23) `106.1K 🔥`
1. [鹿晗 红包](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%BA%A2%E5%8C%85%23) `93.6K 🔥`
1. [何宣林 分词 (He Xuanlin participle)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E5%88%86%E8%AF%8D%23) `93.5K 🔥`
1. [浪姐 赢了被淘汰 (Sister Lang won and was eliminated)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%B5%A2%E4%BA%86%E8%A2%AB%E6%B7%98%E6%B1%B0%23) `399.1K 🔥` `-60%`
1. [唐艺昕 大大方方 (Tang Yixin is generous and generous)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `176.8K 🔥` `-31%`
1. [黄宗泽 牙龈萎缩 (Bosco Bosco Gum recession)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD%20%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%23) `146.8K 🔥` `-50%`
1. [毛晓彤回应去医美诊所 (Mao Xiaotong responded to going to a medical beauty clinic)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%9B%9E%E5%BA%94%E5%8E%BB%E5%8C%BB%E7%BE%8E%E8%AF%8A%E6%89%80%23) `138.5K 🔥` `-53%`
1. [时代峰峻把微店告了 (Times Fengjun sued Weidian)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8A%8A%E5%BE%AE%E5%BA%97%E5%91%8A%E4%BA%86%23) `93.9K 🔥` `-68%`

Updated at 2026-04-25 08:07:52

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
