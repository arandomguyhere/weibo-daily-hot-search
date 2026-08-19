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

1. [王者新英雄王维 (King's New Hero Wang Wei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%23) `549.2K 🔥` `NEW`
1. [官方辟谣浏阳周末焰火秀重启](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E6%B5%8F%E9%98%B3%E5%91%A8%E6%9C%AB%E7%84%B0%E7%81%AB%E7%A7%80%E9%87%8D%E5%90%AF%23) `467.4K 🔥` `NEW`
1. [王者S45新赛季直播爆料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85S45%E6%96%B0%E8%B5%9B%E5%AD%A3%E7%9B%B4%E6%92%AD%E7%88%86%E6%96%99%23) `350.6K 🔥` `NEW`
1. [买票占座放零食这座位能让吗](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `348.0K 🔥` `NEW`
1. [应聘太二酸菜鱼服务员因卡颜被拒](https://s.weibo.com/weibo?q=%23%E5%BA%94%E8%81%98%E5%A4%AA%E4%BA%8C%E9%85%B8%E8%8F%9C%E9%B1%BC%E6%9C%8D%E5%8A%A1%E5%91%98%E5%9B%A0%E5%8D%A1%E9%A2%9C%E8%A2%AB%E6%8B%92%23) `327.6K 🔥` `NEW`
1. [顶替案弟弟否认举报时行贿](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%BC%9F%E5%BC%9F%E5%90%A6%E8%AE%A4%E4%B8%BE%E6%8A%A5%E6%97%B6%E8%A1%8C%E8%B4%BF%23) `327.2K 🔥` `NEW`
1. [丁禹兮直播取消](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9B%B4%E6%92%AD%E5%8F%96%E6%B6%88%23) `243.0K 🔥` `NEW`
1. [白鹿被巨无霸大笔整笑了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%B7%A8%E6%97%A0%E9%9C%B8%E5%A4%A7%E7%AC%94%E6%95%B4%E7%AC%91%E4%BA%86%23) `201.1K 🔥` `NEW`
1. [乞巧节](https://s.weibo.com/weibo?q=%23%E4%B9%9E%E5%B7%A7%E8%8A%82%23) `175.4K 🔥` `NEW`
1. [宋祖儿回天津了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E5%9B%9E%E5%A4%A9%E6%B4%A5%E4%BA%86%23) `175.4K 🔥` `NEW`
1. [ai漫剧行业6个月可更1000集 (The AI ​​comic drama industry can update 1,000 episodes in 6 months)](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E8%A1%8C%E4%B8%9A6%E4%B8%AA%E6%9C%88%E5%8F%AF%E6%9B%B41000%E9%9B%86%23) `175.4K 🔥` `NEW`
1. [商家你要迪丽热巴返图不](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E4%BD%A0%E8%A6%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%94%E5%9B%BE%E4%B8%8D%23) `175.3K 🔥` `NEW`
1. [三伏天快过了怎么还这么热](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E5%BF%AB%E8%BF%87%E4%BA%86%E6%80%8E%E4%B9%88%E8%BF%98%E8%BF%99%E4%B9%88%E7%83%AD%23) `175.3K 🔥` `NEW`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `338.2K 🔥` `+45%`
1. [王兴兴回应从大疆离职](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E5%9B%9E%E5%BA%94%E4%BB%8E%E5%A4%A7%E7%96%86%E7%A6%BB%E8%81%8C%23) `333.3K 🔥` `+39%`
1. [为什么冰红茶依旧好卖](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%86%B0%E7%BA%A2%E8%8C%B6%E4%BE%9D%E6%97%A7%E5%A5%BD%E5%8D%96%23) `330.5K 🔥` `+109%`
1. [甲状腺不好常吃两种水果](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E4%B8%8D%E5%A5%BD%E5%B8%B8%E5%90%83%E4%B8%A4%E7%A7%8D%E6%B0%B4%E6%9E%9C%23) `321.7K 🔥` `+37%`
1. [七夕 民政局](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E6%B0%91%E6%94%BF%E5%B1%80%23) `304.1K 🔥` `+30%`
1. [Selina胖了好多 (Selina has gained a lot of weight)](https://s.weibo.com/weibo?q=%23Selina%E8%83%96%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `292.7K 🔥` `+25%`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `291.4K 🔥` `+40%`
1. [冰箱长得大未必装得多](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E9%95%BF%E5%BE%97%E5%A4%A7%E6%9C%AA%E5%BF%85%E8%A3%85%E5%BE%97%E5%A4%9A%23) `270.9K 🔥` `+95%`
1. [央视曝光网红悍马糖全球购骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BD%91%E7%BA%A2%E6%82%8D%E9%A9%AC%E7%B3%96%E5%85%A8%E7%90%83%E8%B4%AD%E9%AA%97%E5%B1%80%23) `251.2K 🔥` `+51%`
1. [尚公主剧宣尺度 (Princess Shang drama promotion scale)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%89%A7%E5%AE%A3%E5%B0%BA%E5%BA%A6%23) `243.1K 🔥` `+46%`
1. [朱雀三号成功回收画面](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%80%E4%B8%89%E5%8F%B7%E6%88%90%E5%8A%9F%E5%9B%9E%E6%94%B6%E7%94%BB%E9%9D%A2%23) `196.5K 🔥` `+31%`
1. [冰箱容积成投诉重灾区](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E5%AE%B9%E7%A7%AF%E6%88%90%E6%8A%95%E8%AF%89%E9%87%8D%E7%81%BE%E5%8C%BA%23) `175.4K 🔥` `+26%`
1. [宇树科技上市庆功照流出 (Photos of Yushu Technology’s listing celebration leaked)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%E5%BA%86%E5%8A%9F%E7%85%A7%E6%B5%81%E5%87%BA%23) `1.2M 🔥`
1. [男子将遗产全部留给弟弟不给妻儿](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E9%81%97%E4%BA%A7%E5%85%A8%E9%83%A8%E7%95%99%E7%BB%99%E5%BC%9F%E5%BC%9F%E4%B8%8D%E7%BB%99%E5%A6%BB%E5%84%BF%23) `898.8K 🔥`
1. [未来5年全民医保这样干 (This is how universal health insurance will work in the next five years)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E5%85%A8%E6%B0%91%E5%8C%BB%E4%BF%9D%E8%BF%99%E6%A0%B7%E5%B9%B2%23) `670.6K 🔥`
1. [王星被拐案新进展](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E6%8B%90%E6%A1%88%E6%96%B0%E8%BF%9B%E5%B1%95%23) `469.0K 🔥`
1. [二搭会让内娱爆炸的男女主 (The male and female protagonist whose second partner will make domestic entertainment explode)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%90%AD%E4%BC%9A%E8%AE%A9%E5%86%85%E5%A8%B1%E7%88%86%E7%82%B8%E7%9A%84%E7%94%B7%E5%A5%B3%E4%B8%BB%23) `309.8K 🔥`
1. [AI演员都有线下路透了](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E9%83%BD%E6%9C%89%E7%BA%BF%E4%B8%8B%E8%B7%AF%E9%80%8F%E4%BA%86%23) `279.1K 🔥`
1. [七夕 冷清](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%86%B7%E6%B8%85%23) `269.7K 🔥`
1. [老人院内晾花生遭小车进院全部碾碎](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%99%A2%E5%86%85%E6%99%BE%E8%8A%B1%E7%94%9F%E9%81%AD%E5%B0%8F%E8%BD%A6%E8%BF%9B%E9%99%A2%E5%85%A8%E9%83%A8%E7%A2%BE%E7%A2%8E%23) `242.2K 🔥`
1. [黄灿灿光脚做面筋](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%85%89%E8%84%9A%E5%81%9A%E9%9D%A2%E7%AD%8B%23) `238.2K 🔥`
1. [王鹤棣吴泽林事件时间线 (Wang Hedi and Wu Zelin incident timeline)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%90%B4%E6%B3%BD%E6%9E%97%E4%BA%8B%E4%BB%B6%E6%97%B6%E9%97%B4%E7%BA%BF%23) `196.3K 🔥`
1. [毕夏在丈夫去世1年后因车祸开颅](https://s.weibo.com/weibo?q=%23%E6%AF%95%E5%A4%8F%E5%9C%A8%E4%B8%88%E5%A4%AB%E5%8E%BB%E4%B8%961%E5%B9%B4%E5%90%8E%E5%9B%A0%E8%BD%A6%E7%A5%B8%E5%BC%80%E9%A2%85%23) `193.5K 🔥`
1. [易烊千玺和我的前半生交集上了 (Yi Yang Qianxi and I intersected in the first half of our lives)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%92%8C%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E4%BA%A4%E9%9B%86%E4%B8%8A%E4%BA%86%23) `172.9K 🔥`
1. [A股全市场逾百股跌停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E5%B8%82%E5%9C%BA%E9%80%BE%E7%99%BE%E8%82%A1%E8%B7%8C%E5%81%9C%23) `171.8K 🔥`
1. [不知道送异性什么礼物的我就这样 (I don’t know what gifts to give to the opposite sex, so that’s me)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%9F%A5%E9%81%93%E9%80%81%E5%BC%82%E6%80%A7%E4%BB%80%E4%B9%88%E7%A4%BC%E7%89%A9%E7%9A%84%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `169.6K 🔥`
1. [瑞幸为什么不联名余则成和翠萍](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%81%94%E5%90%8D%E4%BD%99%E5%88%99%E6%88%90%E5%92%8C%E7%BF%A0%E8%90%8D%23) `168.0K 🔥`
1. [七夕买花与张凌赫相约淘宝闪购](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E4%B9%B0%E8%8A%B1%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9B%B8%E7%BA%A6%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%23) `597.8K 🔥` `-26%`
1. [BIGBANG新歌](https://s.weibo.com/weibo?q=%23BIGBANG%E6%96%B0%E6%AD%8C%23) `486.0K 🔥` `-24%`
1. [谢娜杨迪用错杯子去后台吐了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%9D%A8%E8%BF%AA%E7%94%A8%E9%94%99%E6%9D%AF%E5%AD%90%E5%8E%BB%E5%90%8E%E5%8F%B0%E5%90%90%E4%BA%86%23) `389.2K 🔥` `-28%`
1. [人到中年爱好开始逐渐离谱了 (As people reach middle age, their hobbies begin to become increasingly outrageous.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E7%88%B1%E5%A5%BD%E5%BC%80%E5%A7%8B%E9%80%90%E6%B8%90%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `351.3K 🔥` `-42%`
1. [升学宴 赔偿 (Entrance banquet compensation)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%20%E8%B5%94%E5%81%BF%23) `345.5K 🔥` `-26%`
1. [Angelababy拿玫瑰花自拍](https://s.weibo.com/weibo?q=%23Angelababy%E6%8B%BF%E7%8E%AB%E7%91%B0%E8%8A%B1%E8%87%AA%E6%8B%8D%23) `342.3K 🔥` `-30%`
1. [宇树中签者赚38万退出炒股群 (Yushu lottery winner earned 380,000 and quit the stock trading group)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%B8%AD%E7%AD%BE%E8%80%85%E8%B5%9A38%E4%B8%87%E9%80%80%E5%87%BA%E7%82%92%E8%82%A1%E7%BE%A4%23) `339.4K 🔥` `-47%`
1. [李昀锐孟子义七夕物料不像演的 (Li Yunrui and Meng Ziyi's Chinese Valentine's Day material doesn't look like the one in the performance)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%83%E5%A4%95%E7%89%A9%E6%96%99%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `334.6K 🔥` `-27%`
1. [王力宏宇树 (Wang Leehom Yushu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%AE%87%E6%A0%91%23) `324.9K 🔥` `-29%`
1. [宇树上市杭州批量诞生亿万富翁](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%B8%8A%E5%B8%82%E6%9D%AD%E5%B7%9E%E6%89%B9%E9%87%8F%E8%AF%9E%E7%94%9F%E4%BA%BF%E4%B8%87%E5%AF%8C%E7%BF%81%23) `322.6K 🔥` `-38%`
1. [王俊凯抢票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%A2%E7%A5%A8%23) `175.3K 🔥` `-34%`
1. [四六级查分时间](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%E6%97%B6%E9%97%B4%23) `175.3K 🔥` `-66%`

Updated at 2026-08-19 18:54:37

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
