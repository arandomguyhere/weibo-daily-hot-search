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

1. [七夕 去情人节化 (Chinese Valentine's Day becomes Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%8E%BB%E6%83%85%E4%BA%BA%E8%8A%82%E5%8C%96%23) `568.9K 🔥` `NEW`
1. [山姆苹果干一包就是半个苹果](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E8%8B%B9%E6%9E%9C%E5%B9%B2%E4%B8%80%E5%8C%85%E5%B0%B1%E6%98%AF%E5%8D%8A%E4%B8%AA%E8%8B%B9%E6%9E%9C%23) `568.6K 🔥` `NEW`
1. [王者新英雄王维上线体验服](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%E4%B8%8A%E7%BA%BF%E4%BD%93%E9%AA%8C%E6%9C%8D%23) `567.3K 🔥` `NEW`
1. [宇树科技市值达4449亿元](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%B8%82%E5%80%BC%E8%BE%BE4449%E4%BA%BF%E5%85%83%23) `565.6K 🔥` `NEW`
1. [花开锦绣大婚吻戏](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%A4%A7%E5%A9%9A%E5%90%BB%E6%88%8F%23) `555.8K 🔥` `NEW`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `540.0K 🔥` `NEW`
1. [英国网红在新疆用飞猪帮帮打卡非遗](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E7%BD%91%E7%BA%A2%E5%9C%A8%E6%96%B0%E7%96%86%E7%94%A8%E9%A3%9E%E7%8C%AA%E5%B8%AE%E5%B8%AE%E6%89%93%E5%8D%A1%E9%9D%9E%E9%81%97%23) `528.2K 🔥` `NEW`
1. [近一年多款纸巾化学残留物超标](https://s.weibo.com/weibo?q=%23%E8%BF%91%E4%B8%80%E5%B9%B4%E5%A4%9A%E6%AC%BE%E7%BA%B8%E5%B7%BE%E5%8C%96%E5%AD%A6%E6%AE%8B%E7%95%99%E7%89%A9%E8%B6%85%E6%A0%87%23) `516.7K 🔥` `NEW`
1. [张恒远因黑色素瘤病逝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%81%92%E8%BF%9C%E5%9B%A0%E9%BB%91%E8%89%B2%E7%B4%A0%E7%98%A4%E7%97%85%E9%80%9D%23) `510.8K 🔥` `NEW`
1. [3孩非亲生案男方已送还双胞胎孩子](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E7%94%B7%E6%96%B9%E5%B7%B2%E9%80%81%E8%BF%98%E5%8F%8C%E8%83%9E%E8%83%8E%E5%AD%A9%E5%AD%90%23) `508.2K 🔥` `NEW`
1. [中国女足5比0皇马 (Chinese women's football team 5-0 Real Madrid)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B35%E6%AF%940%E7%9A%87%E9%A9%AC%23) `498.4K 🔥` `NEW`
1. [让豆包生成背元素周期表视频](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%B1%86%E5%8C%85%E7%94%9F%E6%88%90%E8%83%8C%E5%85%83%E7%B4%A0%E5%91%A8%E6%9C%9F%E8%A1%A8%E8%A7%86%E9%A2%91%23) `496.5K 🔥` `NEW`
1. [时代少年团庆七夕](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%BA%86%E4%B8%83%E5%A4%95%23) `489.9K 🔥` `NEW`
1. [朱志鑫完全电竞男主](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%AE%8C%E5%85%A8%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `485.6K 🔥` `NEW`
1. [宋亚轩七夕祝福](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%83%E5%A4%95%E7%A5%9D%E7%A6%8F%23) `477.5K 🔥` `NEW`
1. [买票占座放零食这座位能让吗](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `1.1M 🔥` `+227%`
1. [未来5年全民医保这样干 (This is how universal health insurance will work in the next five years)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E5%85%A8%E6%B0%91%E5%8C%BB%E4%BF%9D%E8%BF%99%E6%A0%B7%E5%B9%B2%23) `855.2K 🔥` `+28%`
1. [王者新英雄王维 (King's New Hero Wang Wei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%23) `855.0K 🔥` `+56%`
1. [官方辟谣浏阳周末焰火秀重启](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E6%B5%8F%E9%98%B3%E5%91%A8%E6%9C%AB%E7%84%B0%E7%81%AB%E7%A7%80%E9%87%8D%E5%90%AF%23) `568.9K 🔥` `+22%`
1. [王星被拐案新进展](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E6%8B%90%E6%A1%88%E6%96%B0%E8%BF%9B%E5%B1%95%23) `568.2K 🔥` `+21%`
1. [人到中年爱好开始逐渐离谱了 (As people reach middle age, their hobbies begin to become increasingly outrageous.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E7%88%B1%E5%A5%BD%E5%BC%80%E5%A7%8B%E9%80%90%E6%B8%90%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `567.4K 🔥` `+62%`
1. [升学宴 赔偿 (Entrance banquet compensation)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%20%E8%B5%94%E5%81%BF%23) `566.7K 🔥` `+64%`
1. [Angelababy拿玫瑰花自拍](https://s.weibo.com/weibo?q=%23Angelababy%E6%8B%BF%E7%8E%AB%E7%91%B0%E8%8A%B1%E8%87%AA%E6%8B%8D%23) `565.1K 🔥` `+65%`
1. [王力宏宇树 (Wang Leehom Yushu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%AE%87%E6%A0%91%23) `564.8K 🔥` `+74%`
1. [七夕 冷清](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%86%B7%E6%B8%85%23) `564.1K 🔥` `+109%`
1. [谢娜杨迪用错杯子去后台吐了 (Xie Na Yang Di used the wrong cup and vomited backstage)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%9D%A8%E8%BF%AA%E7%94%A8%E9%94%99%E6%9D%AF%E5%AD%90%E5%8E%BB%E5%90%8E%E5%8F%B0%E5%90%90%E4%BA%86%23) `558.8K 🔥` `+44%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `552.4K 🔥` `+63%`
1. [七夕 民政局](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E6%B0%91%E6%94%BF%E5%B1%80%23) `550.6K 🔥` `+81%`
1. [王兴兴回应从大疆离职](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E5%9B%9E%E5%BA%94%E4%BB%8E%E5%A4%A7%E7%96%86%E7%A6%BB%E8%81%8C%23) `547.1K 🔥` `+64%`
1. [甲状腺不好常吃两种水果](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E4%B8%8D%E5%A5%BD%E5%B8%B8%E5%90%83%E4%B8%A4%E7%A7%8D%E6%B0%B4%E6%9E%9C%23) `543.1K 🔥` `+69%`
1. [Selina胖了好多 (Selina has gained a lot of weight)](https://s.weibo.com/weibo?q=%23Selina%E8%83%96%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `537.3K 🔥` `+84%`
1. [乞巧节](https://s.weibo.com/weibo?q=%23%E4%B9%9E%E5%B7%A7%E8%8A%82%23) `535.5K 🔥` `+205%`
1. [李昀锐孟子义七夕物料不像演的 (Li Yunrui and Meng Ziyi's Chinese Valentine's Day material doesn't look like the one in the performance)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%83%E5%A4%95%E7%89%A9%E6%96%99%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `532.7K 🔥` `+59%`
1. [商家你要迪丽热巴返图不](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E4%BD%A0%E8%A6%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%94%E5%9B%BE%E4%B8%8D%23) `529.3K 🔥` `+202%`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `524.2K 🔥` `+80%`
1. [为什么冰红茶依旧好卖](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%86%B0%E7%BA%A2%E8%8C%B6%E4%BE%9D%E6%97%A7%E5%A5%BD%E5%8D%96%23) `522.5K 🔥` `+58%`
1. [丁禹兮直播取消](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9B%B4%E6%92%AD%E5%8F%96%E6%B6%88%23) `519.3K 🔥` `+114%`
1. [央视曝光网红悍马糖全球购骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BD%91%E7%BA%A2%E6%82%8D%E9%A9%AC%E7%B3%96%E5%85%A8%E7%90%83%E8%B4%AD%E9%AA%97%E5%B1%80%23) `514.5K 🔥` `+105%`
1. [黄灿灿光脚做面筋 (Huang Cancan makes gluten with bare feet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%85%89%E8%84%9A%E5%81%9A%E9%9D%A2%E7%AD%8B%23) `505.8K 🔥` `+112%`
1. [二搭会让内娱爆炸的男女主 (The male and female protagonist whose second partner will make domestic entertainment explode)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%90%AD%E4%BC%9A%E8%AE%A9%E5%86%85%E5%A8%B1%E7%88%86%E7%82%B8%E7%9A%84%E7%94%B7%E5%A5%B3%E4%B8%BB%23) `501.7K 🔥` `+62%`
1. [冰箱长得大未必装得多](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E9%95%BF%E5%BE%97%E5%A4%A7%E6%9C%AA%E5%BF%85%E8%A3%85%E5%BE%97%E5%A4%9A%23) `493.2K 🔥` `+82%`
1. [白鹿被巨无霸大笔整笑了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%B7%A8%E6%97%A0%E9%9C%B8%E5%A4%A7%E7%AC%94%E6%95%B4%E7%AC%91%E4%BA%86%23) `487.2K 🔥` `+142%`
1. [老人院内晾花生遭小车进院全部碾碎](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%99%A2%E5%86%85%E6%99%BE%E8%8A%B1%E7%94%9F%E9%81%AD%E5%B0%8F%E8%BD%A6%E8%BF%9B%E9%99%A2%E5%85%A8%E9%83%A8%E7%A2%BE%E7%A2%8E%23) `482.1K 🔥` `+99%`
1. [易烊千玺和我的前半生交集上了 (Yi Yang Qianxi and I intersected in the first half of our lives)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%92%8C%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E4%BA%A4%E9%9B%86%E4%B8%8A%E4%BA%86%23) `479.4K 🔥` `+177%`
1. [A股全市场逾百股跌停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E5%B8%82%E5%9C%BA%E9%80%BE%E7%99%BE%E8%82%A1%E8%B7%8C%E5%81%9C%23) `474.3K 🔥` `+176%`
1. [冰箱容积成投诉重灾区](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E5%AE%B9%E7%A7%AF%E6%88%90%E6%8A%95%E8%AF%89%E9%87%8D%E7%81%BE%E5%8C%BA%23) `471.9K 🔥` `+169%`
1. [王俊凯抢票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%A2%E7%A5%A8%23) `469.4K 🔥` `+168%`
1. [七夕送礼上淘宝最快半日达](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%9C%80%E5%BF%AB%E5%8D%8A%E6%97%A5%E8%BE%BE%23) `855.1K 🔥`
1. [男子将遗产全部留给弟弟不给妻儿](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E9%81%97%E4%BA%A7%E5%85%A8%E9%83%A8%E7%95%99%E7%BB%99%E5%BC%9F%E5%BC%9F%E4%B8%8D%E7%BB%99%E5%A6%BB%E5%84%BF%23) `851.3K 🔥`
1. [BIGBANG新歌](https://s.weibo.com/weibo?q=%23BIGBANG%E6%96%B0%E6%AD%8C%23) `560.2K 🔥`
1. [宇树科技上市庆功照流出 (Photos of Yushu Technology’s listing celebration leaked)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%E5%BA%86%E5%8A%9F%E7%85%A7%E6%B5%81%E5%87%BA%23) `859.1K 🔥` `-26%`

Updated at 2026-08-19 19:23:58

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
