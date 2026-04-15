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

1. [美国将退还超1万亿元关税 (The United States will refund more than 1 trillion yuan in tariffs)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%86%E9%80%80%E8%BF%98%E8%B6%851%E4%B8%87%E4%BA%BF%E5%85%83%E5%85%B3%E7%A8%8E%23) `1.1M 🔥` `NEW`
1. [广交会增设智能穿戴等9大专区](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E5%A2%9E%E8%AE%BE%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4%E7%AD%899%E5%A4%A7%E4%B8%93%E5%8C%BA%23) `617.6K 🔥` `NEW`
1. [何润东说翻红后接到很多工作邀约](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%AF%B4%E7%BF%BB%E7%BA%A2%E5%90%8E%E6%8E%A5%E5%88%B0%E5%BE%88%E5%A4%9A%E5%B7%A5%E4%BD%9C%E9%82%80%E7%BA%A6%23) `199.1K 🔥` `NEW`
1. [5人虚构继母虐待女孩关狗笼被抓](https://s.weibo.com/weibo?q=%235%E4%BA%BA%E8%99%9A%E6%9E%84%E7%BB%A7%E6%AF%8D%E8%99%90%E5%BE%85%E5%A5%B3%E5%AD%A9%E5%85%B3%E7%8B%97%E7%AC%BC%E8%A2%AB%E6%8A%93%23) `186.5K 🔥` `NEW`
1. [沈腾你干脆躺马丽怀里得了呗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E4%BD%A0%E5%B9%B2%E8%84%86%E8%BA%BA%E9%A9%AC%E4%B8%BD%E6%80%80%E9%87%8C%E5%BE%97%E4%BA%86%E5%91%97%23) `123.4K 🔥` `NEW`
1. [曝张豆豆两年前有的宝宝](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E8%B1%86%E8%B1%86%E4%B8%A4%E5%B9%B4%E5%89%8D%E6%9C%89%E7%9A%84%E5%AE%9D%E5%AE%9D%23) `114.2K 🔥` `NEW`
1. [沃尔沃发布会](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83%E5%8F%91%E5%B8%83%E4%BC%9A%23) `108.3K 🔥` `NEW`
1. [郑丽文感谢大陆](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E6%84%9F%E8%B0%A2%E5%A4%A7%E9%99%86%23) `107.9K 🔥` `NEW`
1. [15岁白血病女孩冷冻卵巢保留生育](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%99%BD%E8%A1%80%E7%97%85%E5%A5%B3%E5%AD%A9%E5%86%B7%E5%86%BB%E5%8D%B5%E5%B7%A2%E4%BF%9D%E7%95%99%E7%94%9F%E8%82%B2%23) `107.5K 🔥` `NEW`
1. [女霸总余额880万谈恋爱总要钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%9C%B8%E6%80%BB%E4%BD%99%E9%A2%9D880%E4%B8%87%E8%B0%88%E6%81%8B%E7%88%B1%E6%80%BB%E8%A6%81%E9%92%B1%23) `107.1K 🔥` `NEW`
1. [曝宋宁峰近况 (Revealing Song Ningfeng’s recent situation)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AE%8B%E5%AE%81%E5%B3%B0%E8%BF%91%E5%86%B5%23) `106.2K 🔥` `NEW`
1. [AXIZ对战Xteam](https://s.weibo.com/weibo?q=%23AXIZ%E5%AF%B9%E6%88%98Xteam%23) `104.1K 🔥` `NEW`
1. [连婚纱都遮不住她的律动](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E5%A9%9A%E7%BA%B1%E9%83%BD%E9%81%AE%E4%B8%8D%E4%BD%8F%E5%A5%B9%E7%9A%84%E5%BE%8B%E5%8A%A8%23) `101.5K 🔥` `NEW`
1. [时代少年团 MV](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20MV%23) `101.2K 🔥` `NEW`
1. [X电竞](https://s.weibo.com/weibo?q=%23X%E7%94%B5%E7%AB%9E%23) `100.1K 🔥` `NEW`
1. [朱一龙啥叫镜像](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%95%A5%E5%8F%AB%E9%95%9C%E5%83%8F%23) `100.0K 🔥` `NEW`
1. [央视称小鹏GX为科技大成之作](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%A7%B0%E5%B0%8F%E9%B9%8FGX%E4%B8%BA%E7%A7%91%E6%8A%80%E5%A4%A7%E6%88%90%E4%B9%8B%E4%BD%9C%23) `98.5K 🔥` `NEW`
1. [猥亵学生的教师转后勤是谁在纵容](https://s.weibo.com/weibo?q=%23%E7%8C%A5%E4%BA%B5%E5%AD%A6%E7%94%9F%E7%9A%84%E6%95%99%E5%B8%88%E8%BD%AC%E5%90%8E%E5%8B%A4%E6%98%AF%E8%B0%81%E5%9C%A8%E7%BA%B5%E5%AE%B9%23) `98.1K 🔥` `NEW`
1. [曝80%明星翻红后会耍大牌](https://s.weibo.com/weibo?q=%23%E6%9B%9D80%25%E6%98%8E%E6%98%9F%E7%BF%BB%E7%BA%A2%E5%90%8E%E4%BC%9A%E8%80%8D%E5%A4%A7%E7%89%8C%23) `97.0K 🔥` `NEW`
1. [白日提灯 尊重观众](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%20%E5%B0%8A%E9%87%8D%E8%A7%82%E4%BC%97%23) `96.1K 🔥` `NEW`
1. [万能抑制食欲法 (Universal Appetite Suppressant)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%83%BD%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%E6%B3%95%23) `95.4K 🔥` `NEW`
1. [美军承认价值16亿无人机坠毁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%89%BF%E8%AE%A4%E4%BB%B7%E5%80%BC16%E4%BA%BF%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%9D%A0%E6%AF%81%23) `93.7K 🔥` `NEW`
1. [中国三胞胎的视频在推特上火了 (Video of Chinese triplets goes viral on Twitter)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%89%E8%83%9E%E8%83%8E%E7%9A%84%E8%A7%86%E9%A2%91%E5%9C%A8%E6%8E%A8%E7%89%B9%E4%B8%8A%E7%81%AB%E4%BA%86%23) `819.3K 🔥` `+740%`
1. [孟子义李昀锐 等风热吻你](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `460.7K 🔥` `+200%`
1. [灵隐寺严正声明 (Lingyin Temple solemn statement)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%9A%90%E5%AF%BA%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `186.5K 🔥` `+44%`
1. [俄方提出帮助中国弥补能源短缺](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8F%90%E5%87%BA%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%9B%BD%E5%BC%A5%E8%A1%A5%E8%83%BD%E6%BA%90%E7%9F%AD%E7%BC%BA%23) `165.9K 🔥`
1. [姚安娜代言华为](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E4%BB%A3%E8%A8%80%E5%8D%8E%E4%B8%BA%23) `126.2K 🔥`
1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `108.7K 🔥`
1. [小米上线电池升级服务](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%8A%E7%BA%BF%E7%94%B5%E6%B1%A0%E5%8D%87%E7%BA%A7%E6%9C%8D%E5%8A%A1%23) `106.7K 🔥`
1. [在德读硕中国小伙多次下药迷奸女友 (A Chinese guy studying for a master's degree in Germany drugged and raped his girlfriend multiple times)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%BE%B7%E8%AF%BB%E7%A1%95%E4%B8%AD%E5%9B%BD%E5%B0%8F%E4%BC%99%E5%A4%9A%E6%AC%A1%E4%B8%8B%E8%8D%AF%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B%23) `105.5K 🔥`
1. [王星越开保时捷上班](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E5%BC%80%E4%BF%9D%E6%97%B6%E6%8D%B7%E4%B8%8A%E7%8F%AD%23) `104.8K 🔥`
1. [谢娜演唱会门票秒罄](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E9%97%A8%E7%A5%A8%E7%A7%92%E7%BD%84%23) `104.3K 🔥`
1. [朱一龙直播](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E7%9B%B4%E6%92%AD%23) `103.6K 🔥`
1. [出生4天被秤砣砸中女婴3次尿血](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F4%E5%A4%A9%E8%A2%AB%E7%A7%A4%E7%A0%A3%E7%A0%B8%E4%B8%AD%E5%A5%B3%E5%A9%B43%E6%AC%A1%E5%B0%BF%E8%A1%80%23) `102.3K 🔥`
1. [小鹏GX把四大安全测试场搬到发布会 (Xpeng GX moved four major safety test sites to the press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FGX%E6%8A%8A%E5%9B%9B%E5%A4%A7%E5%AE%89%E5%85%A8%E6%B5%8B%E8%AF%95%E5%9C%BA%E6%90%AC%E5%88%B0%E5%8F%91%E5%B8%83%E4%BC%9A%23) `102.2K 🔥`
1. [何润东 资源从天而降](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E8%B5%84%E6%BA%90%E4%BB%8E%E5%A4%A9%E8%80%8C%E9%99%8D%23) `100.5K 🔥`
1. [张凌赫还当过爱格的模特](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%98%E5%BD%93%E8%BF%87%E7%88%B1%E6%A0%BC%E7%9A%84%E6%A8%A1%E7%89%B9%23) `99.2K 🔥`
1. [北京文旅一觉醒来天塌了](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%96%87%E6%97%85%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `98.9K 🔥`
1. [痞幼胖了17斤](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%83%96%E4%BA%8617%E6%96%A4%23) `97.8K 🔥`
1. [莫氏鸡煲少当家成中年富二代](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%B0%91%E5%BD%93%E5%AE%B6%E6%88%90%E4%B8%AD%E5%B9%B4%E5%AF%8C%E4%BA%8C%E4%BB%A3%23) `96.8K 🔥`
1. [王一博素颜拍GQ](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%B4%A0%E9%A2%9C%E6%8B%8DGQ%23) `95.5K 🔥`
1. [叶舒华ins评论区](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8Eins%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `94.7K 🔥`
1. [李小冉肉眼可见的越来越累](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%82%89%E7%9C%BC%E5%8F%AF%E8%A7%81%E7%9A%84%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%B4%AF%23) `94.2K 🔥`
1. [张真源暂时缺席录制跑男](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%9A%82%E6%97%B6%E7%BC%BA%E5%B8%AD%E5%BD%95%E5%88%B6%E8%B7%91%E7%94%B7%23) `93.3K 🔥`
1. [法国罕见全票通过文物归还法案 (France passes a rare unanimous vote to repatriate cultural relics)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%BD%95%E8%A7%81%E5%85%A8%E7%A5%A8%E9%80%9A%E8%BF%87%E6%96%87%E7%89%A9%E5%BD%92%E8%BF%98%E6%B3%95%E6%A1%88%23) `294.4K 🔥` `-73%`
1. [皮蛋黄瓜汤 (Preserved egg and cucumber soup)](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%9B%8B%E9%BB%84%E7%93%9C%E6%B1%A4%23) `152.6K 🔥` `-22%`
1. [2026中国大学排名](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E6%8E%92%E5%90%8D%23) `127.8K 🔥` `-22%`
1. [香港14岁男学生成黑社会骨干](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF14%E5%B2%81%E7%94%B7%E5%AD%A6%E7%94%9F%E6%88%90%E9%BB%91%E7%A4%BE%E4%BC%9A%E9%AA%A8%E5%B9%B2%23) `117.9K 🔥` `-49%`
1. [白日提灯 双结局 (Lantern by Day Double Ending)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%20%E5%8F%8C%E7%BB%93%E5%B1%80%23) `108.8K 🔥` `-44%`
1. [网红炫迈妹子被猫误伤毁容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%82%AB%E8%BF%88%E5%A6%B9%E5%AD%90%E8%A2%AB%E7%8C%AB%E8%AF%AF%E4%BC%A4%E6%AF%81%E5%AE%B9%23) `105.9K 🔥` `-26%`
1. [唐禹哲承认逃兵役](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E6%89%BF%E8%AE%A4%E9%80%83%E5%85%B5%E5%BD%B9%23) `102.9K 🔥` `-37%`

Updated at 2026-04-15 20:41:24

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
