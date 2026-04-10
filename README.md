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

1. [儿子离世被媳孙善意隐瞒老人索赔50万 (The death of his son was concealed by his daughter-in-law and his grandson kindly concealed it. The old man claimed compensation for 500,000 yuan.)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E7%A6%BB%E4%B8%96%E8%A2%AB%E5%AA%B3%E5%AD%99%E5%96%84%E6%84%8F%E9%9A%90%E7%9E%92%E8%80%81%E4%BA%BA%E7%B4%A2%E8%B5%9450%E4%B8%87%23) `405.5K 🔥` `NEW`
1. [浪姐一公直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E7%9B%B4%E6%92%AD%23) `153.9K 🔥` `NEW`
1. [T1樱花季限定萌友](https://s.weibo.com/weibo?q=%23T1%E6%A8%B1%E8%8A%B1%E5%AD%A3%E9%99%90%E5%AE%9A%E8%90%8C%E5%8F%8B%23) `150.2K 🔥` `NEW`
1. [穿普拉达的女王2中国首映礼](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B2%E4%B8%AD%E5%9B%BD%E9%A6%96%E6%98%A0%E7%A4%BC%23) `118.5K 🔥` `NEW`
1. [周也亮相穿普拉达的女王2首映](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E4%BA%AE%E7%9B%B8%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B2%E9%A6%96%E6%98%A0%23) `104.0K 🔥` `NEW`
1. [被柳絮攻击](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9F%B3%E7%B5%AE%E6%94%BB%E5%87%BB%23) `79.4K 🔥` `NEW`
1. [张晋蔡少芬6岁儿子近照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%8B%E8%94%A1%E5%B0%91%E8%8A%AC6%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%23) `79.0K 🔥` `NEW`
1. [每天揉3分钟肝血充足眼睛明亮](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E6%8F%893%E5%88%86%E9%92%9F%E8%82%9D%E8%A1%80%E5%85%85%E8%B6%B3%E7%9C%BC%E7%9D%9B%E6%98%8E%E4%BA%AE%23) `78.2K 🔥` `NEW`
1. [丁程鑫张真源因行程原因未能同游](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%9B%A0%E8%A1%8C%E7%A8%8B%E5%8E%9F%E5%9B%A0%E6%9C%AA%E8%83%BD%E5%90%8C%E6%B8%B8%23) `77.0K 🔥` `NEW`
1. [杨洋为了升金V发博](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B8%BA%E4%BA%86%E5%8D%87%E9%87%91V%E5%8F%91%E5%8D%9A%23) `77.0K 🔥` `NEW`
1. [山西省考成绩 (Shanxi Provincial Examination Results)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%9C%81%E8%80%83%E6%88%90%E7%BB%A9%23) `76.9K 🔥` `NEW`
1. [王安宇 高端的帅哥只需简单的黑T](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E9%AB%98%E7%AB%AF%E7%9A%84%E5%B8%85%E5%93%A5%E5%8F%AA%E9%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E9%BB%91T%23) `76.9K 🔥` `NEW`
1. [复刻莫氏鸡煲](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E5%88%BB%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%23) `75.1K 🔥` `NEW`
1. [53条中日航线3月取消全部航班](https://s.weibo.com/weibo?q=%2353%E6%9D%A1%E4%B8%AD%E6%97%A5%E8%88%AA%E7%BA%BF3%E6%9C%88%E5%8F%96%E6%B6%88%E5%85%A8%E9%83%A8%E8%88%AA%E7%8F%AD%23) `73.4K 🔥` `NEW`
1. [十日终焉海报细节](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%B5%B7%E6%8A%A5%E7%BB%86%E8%8A%82%23) `70.7K 🔥` `NEW`
1. [王橹杰大V领 是好男孩吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%A4%A7V%E9%A2%86%20%E6%98%AF%E5%A5%BD%E7%94%B7%E5%AD%A9%E5%90%97%23) `70.6K 🔥` `NEW`
1. [特斯拉ModelY再登国内销量冠军](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89ModelY%E5%86%8D%E7%99%BB%E5%9B%BD%E5%86%85%E9%94%80%E9%87%8F%E5%86%A0%E5%86%9B%23) `69.1K 🔥` `NEW`
1. [拼豆已进入3D打印时代](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E8%B1%86%E5%B7%B2%E8%BF%9B%E5%85%A53D%E6%89%93%E5%8D%B0%E6%97%B6%E4%BB%A3%23) `60.5K 🔥` `NEW`
1. [女生买衣服一定要学会看细节](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%B9%B0%E8%A1%A3%E6%9C%8D%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AD%A6%E4%BC%9A%E7%9C%8B%E7%BB%86%E8%8A%82%23) `60.5K 🔥` `NEW`
1. [王毅祭扫江东郡志愿军烈士陵园](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E7%A5%AD%E6%89%AB%E6%B1%9F%E4%B8%9C%E9%83%A1%E5%BF%97%E6%84%BF%E5%86%9B%E7%83%88%E5%A3%AB%E9%99%B5%E5%9B%AD%23) `59.3K 🔥` `NEW`
1. [莫氏鸡煲公开秘方 (Mo’s Chicken Pot Secret Recipe Revealed)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%85%AC%E5%BC%80%E7%A7%98%E6%96%B9%23) `1.1M 🔥` `+641%`
1. [打压遏制中国到了疯狂的程度](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8E%8B%E9%81%8F%E5%88%B6%E4%B8%AD%E5%9B%BD%E5%88%B0%E4%BA%86%E7%96%AF%E7%8B%82%E7%9A%84%E7%A8%8B%E5%BA%A6%23) `796.4K 🔥` `+604%`
1. [发现了辛苦了这句话的最佳回复](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E8%BE%9B%E8%8B%A6%E4%BA%86%E8%BF%99%E5%8F%A5%E8%AF%9D%E7%9A%84%E6%9C%80%E4%BD%B3%E5%9B%9E%E5%A4%8D%23) `142.6K 🔥` `+60%`
1. [以色列向美国施压](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%90%91%E7%BE%8E%E5%9B%BD%E6%96%BD%E5%8E%8B%23) `118.5K 🔥` `+34%`
1. [高质量发展中国行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `648.7K 🔥`
1. [十日终焉开机 (Will be launched in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%23) `127.8K 🔥`
1. [小米食堂说冰淇淋机快冒烟了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A3%9F%E5%A0%82%E8%AF%B4%E5%86%B0%E6%B7%87%E6%B7%8B%E6%9C%BA%E5%BF%AB%E5%86%92%E7%83%9F%E4%BA%86%23) `102.1K 🔥`
1. [将主板风险警示股票涨跌幅调整为10%](https://s.weibo.com/weibo?q=%23%E5%B0%86%E4%B8%BB%E6%9D%BF%E9%A3%8E%E9%99%A9%E8%AD%A6%E7%A4%BA%E8%82%A1%E7%A5%A8%E6%B6%A8%E8%B7%8C%E5%B9%85%E8%B0%83%E6%95%B4%E4%B8%BA10%25%23) `68.8K 🔥`
1. [孔雪儿邓凯好六借位吻](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E5%A5%BD%E5%85%AD%E5%80%9F%E4%BD%8D%E5%90%BB%23) `64.3K 🔥`
1. [中产家长开始抛弃国际学校了 (Middle-class parents are starting to abandon international schools)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%A7%E5%AE%B6%E9%95%BF%E5%BC%80%E5%A7%8B%E6%8A%9B%E5%BC%83%E5%9B%BD%E9%99%85%E5%AD%A6%E6%A0%A1%E4%BA%86%23) `64.2K 🔥`
1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `64.1K 🔥`
1. [中方回应日本降级中日关系 (China responds to Japan's downgrade of Sino-Japanese relations)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `155.0K 🔥` `-42%`
1. [赵丽颖工作室发楚乔传采访 (Zhao Liying's studio releases Chu Qiao biography interview)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%A5%9A%E4%B9%94%E4%BC%A0%E9%87%87%E8%AE%BF%23) `147.9K 🔥` `-68%`
1. [女子睡觉被15斤猫咪压致手腕骨折](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9D%A1%E8%A7%89%E8%A2%AB15%E6%96%A4%E7%8C%AB%E5%92%AA%E5%8E%8B%E8%87%B4%E6%89%8B%E8%85%95%E9%AA%A8%E6%8A%98%23) `135.9K 🔥` `-83%`
1. [雷军回应小米冰淇淋 (Lei Jun responds to Xiaomi ice cream)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%B7%87%E6%B7%8B%23) `132.2K 🔥` `-49%`
1. [李晟十日终焉选角好贴脸](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%80%89%E8%A7%92%E5%A5%BD%E8%B4%B4%E8%84%B8%23) `118.5K 🔥` `-38%`
1. [日本外交蓝皮书降级中日关系 (Japan’s diplomatic blue book downgrades Sino-Japanese relations)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%96%E4%BA%A4%E8%93%9D%E7%9A%AE%E4%B9%A6%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `115.1K 🔥` `-26%`
1. [我奶的联系人备注 (My milk’s contact notes)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A5%B6%E7%9A%84%E8%81%94%E7%B3%BB%E4%BA%BA%E5%A4%87%E6%B3%A8%23) `90.9K 🔥` `-48%`
1. [刘诗诗送朴宝剑宝瓶花 (Liu Shishi gave Park Bo Sword and vase of flowers)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E9%80%81%E6%9C%B4%E5%AE%9D%E5%89%91%E5%AE%9D%E7%93%B6%E8%8A%B1%23) `78.7K 🔥` `-34%`
1. [毛晓慧领衔主演十日终焉](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E6%85%A7%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `77.6K 🔥` `-50%`
1. [原来王楚然早期长这样啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%97%A9%E6%9C%9F%E9%95%BF%E8%BF%99%E6%A0%B7%E5%95%8A%23) `77.4K 🔥` `-38%`
1. [伊朗最高领袖发表最新声明](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%8F%91%E8%A1%A8%E6%9C%80%E6%96%B0%E5%A3%B0%E6%98%8E%23) `77.1K 🔥` `-48%`
1. [特朗普对鲤鱼宣战](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AF%B9%E9%B2%A4%E9%B1%BC%E5%AE%A3%E6%88%98%23) `77.1K 🔥` `-45%`
1. [边伯贤离开INB100 (Byun Baekhyun leaves INB100)](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E7%A6%BB%E5%BC%80INB100%23) `76.8K 🔥` `-28%`
1. [冰湖重生癫剧](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%99%AB%E5%89%A7%23) `67.7K 🔥` `-57%`
1. [曝祯娘传改回家业](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A5%AF%E5%A8%98%E4%BC%A0%E6%94%B9%E5%9B%9E%E5%AE%B6%E4%B8%9A%23) `63.4K 🔥` `-56%`
1. [研究发现血型和疾病的发生有相关性](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E5%8F%91%E7%8E%B0%E8%A1%80%E5%9E%8B%E5%92%8C%E7%96%BE%E7%97%85%E7%9A%84%E5%8F%91%E7%94%9F%E6%9C%89%E7%9B%B8%E5%85%B3%E6%80%A7%23) `62.8K 🔥` `-37%`
1. [猪的抑郁症表现行为 (Depression behavior in pigs)](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E7%9A%84%E6%8A%91%E9%83%81%E7%97%87%E8%A1%A8%E7%8E%B0%E8%A1%8C%E4%B8%BA%23) `59.6K 🔥` `-40%`
1. [浪姐 (Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `59.5K 🔥` `-28%`
1. [宋亚轩回中戏](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E4%B8%AD%E6%88%8F%23) `59.2K 🔥` `-34%`

Updated at 2026-04-10 19:29:00

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
