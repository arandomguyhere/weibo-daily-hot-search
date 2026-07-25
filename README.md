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
- **Installable app (PWA)**: Add to your phone's home screen for a standalone app with offline support

## Install on Your Phone

The site is a Progressive Web App. On iPhone: open the [live demo](https://arandomguyhere.github.io/weibo-daily-hot-search) in Safari, tap **Share → Add to Home Screen**. It launches full-screen like a native app, and recently viewed days keep working offline (the last ~45 days of viewed data are cached on-device). On Android, Chrome offers an "Install app" prompt.

## Today's Hot Searches

<!-- BEGIN -->

1. [c83 难听 (c83 ugly)](https://s.weibo.com/weibo?q=%23c83%20%E9%9A%BE%E5%90%AC%23) `1.7M 🔥` `NEW`
1. [数读我国农业农村经济稳中向好](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E6%88%91%E5%9B%BD%E5%86%9C%E4%B8%9A%E5%86%9C%E6%9D%91%E7%BB%8F%E6%B5%8E%E7%A8%B3%E4%B8%AD%E5%90%91%E5%A5%BD%23) `1.4M 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `980.7K 🔥` `NEW`
1. [中国女排0比3土耳其女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%920%E6%AF%943%E5%9C%9F%E8%80%B3%E5%85%B6%E5%A5%B3%E6%8E%92%23) `812.6K 🔥` `NEW`
1. [闫闯回应退赛](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E5%9B%9E%E5%BA%94%E9%80%80%E8%B5%9B%23) `613.0K 🔥` `NEW`
1. [王楚钦梁靖崑双打1比2](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%A2%81%E9%9D%96%E5%B4%91%E5%8F%8C%E6%89%931%E6%AF%942%23) `568.4K 🔥` `NEW`
1. [6分06秒结束比赛](https://s.weibo.com/weibo?q=%236%E5%88%8606%E7%A7%92%E7%BB%93%E6%9D%9F%E6%AF%94%E8%B5%9B%23) `489.3K 🔥` `NEW`
1. [三国第一部争洛阳撤档](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%9B%BD%E7%AC%AC%E4%B8%80%E9%83%A8%E4%BA%89%E6%B4%9B%E9%98%B3%E6%92%A4%E6%A1%A3%23) `486.9K 🔥` `NEW`
1. [AG对战LGDNBW](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98LGDNBW%23) `449.0K 🔥` `NEW`
1. [杨幂就剩两部待播剧了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B0%B1%E5%89%A9%E4%B8%A4%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `438.1K 🔥` `NEW`
1. [一诺守约 (Keep a promise)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%AE%88%E7%BA%A6%23) `377.4K 🔥` `NEW`
1. [AG 醒醒](https://s.weibo.com/weibo?q=%23AG%20%E9%86%92%E9%86%92%23) `365.7K 🔥` `NEW`
1. [罗云熙程潇对我眼睛很好](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E7%A8%8B%E6%BD%87%E5%AF%B9%E6%88%91%E7%9C%BC%E7%9D%9B%E5%BE%88%E5%A5%BD%23) `359.7K 🔥` `NEW`
1. [中方反制14家欧洲企业后欧盟还嘴硬](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%8F%8D%E5%88%B614%E5%AE%B6%E6%AC%A7%E6%B4%B2%E4%BC%81%E4%B8%9A%E5%90%8E%E6%AC%A7%E7%9B%9F%E8%BF%98%E5%98%B4%E7%A1%AC%23) `317.4K 🔥` `NEW`
1. [原来不是生病了而是年纪到了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E7%94%9F%E7%97%85%E4%BA%86%E8%80%8C%E6%98%AF%E5%B9%B4%E7%BA%AA%E5%88%B0%E4%BA%86%23) `317.1K 🔥` `NEW`
1. [闪婚1天就离婚女方返还16万彩礼](https://s.weibo.com/weibo?q=%23%E9%97%AA%E5%A9%9A1%E5%A4%A9%E5%B0%B1%E7%A6%BB%E5%A9%9A%E5%A5%B3%E6%96%B9%E8%BF%94%E8%BF%9816%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `293.0K 🔥` `NEW`
1. [TOP唱了梦](https://s.weibo.com/weibo?q=%23TOP%E5%94%B1%E4%BA%86%E6%A2%A6%23) `248.2K 🔥` `NEW`
1. [雀骨剧组在侯明昊演唱会团建](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E5%89%A7%E7%BB%84%E5%9C%A8%E4%BE%AF%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `237.0K 🔥` `NEW`
1. [百花杀老婆怀孕丈夫准备身后事](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E8%80%81%E5%A9%86%E6%80%80%E5%AD%95%E4%B8%88%E5%A4%AB%E5%87%86%E5%A4%87%E8%BA%AB%E5%90%8E%E4%BA%8B%23) `236.9K 🔥` `NEW`
1. [侯明昊裤子破了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%A3%A4%E5%AD%90%E7%A0%B4%E4%BA%86%23) `236.9K 🔥` `NEW`
1. [产检绿灯新生儿双脚却严重畸形 (Newborn baby gets green light for prenatal check-up but has severely deformed feet)](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E7%BB%BF%E7%81%AF%E6%96%B0%E7%94%9F%E5%84%BF%E5%8F%8C%E8%84%9A%E5%8D%B4%E4%B8%A5%E9%87%8D%E7%95%B8%E5%BD%A2%23) `236.5K 🔥` `NEW`
1. [付辛博39岁状态冻龄](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A39%E5%B2%81%E7%8A%B6%E6%80%81%E5%86%BB%E9%BE%84%23) `218.5K 🔥` `NEW`
1. [正颌手术做反了女孩说迎接她的是毁灭](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E5%81%9A%E5%8F%8D%E4%BA%86%E5%A5%B3%E5%AD%A9%E8%AF%B4%E8%BF%8E%E6%8E%A5%E5%A5%B9%E7%9A%84%E6%98%AF%E6%AF%81%E7%81%AD%23) `1.7M 🔥` `+364%`
1. [谢霆锋演唱会状态](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `1.2M 🔥` `+328%`
1. [黄灿灿370元做的丑美甲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF370%E5%85%83%E5%81%9A%E7%9A%84%E4%B8%91%E7%BE%8E%E7%94%B2%23) `490.5K 🔥` `+33%`
1. [李权哲高铁占座](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%E9%AB%98%E9%93%81%E5%8D%A0%E5%BA%A7%23) `488.1K 🔥` `+32%`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `274.0K 🔥` `+31%`
1. [小S带妈妈来上海散心](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%B8%A6%E5%A6%88%E5%A6%88%E6%9D%A5%E4%B8%8A%E6%B5%B7%E6%95%A3%E5%BF%83%23) `250.2K 🔥` `+35%`
1. [第二代身份证内部根本没有磁条](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%86%85%E9%83%A8%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E7%A3%81%E6%9D%A1%23) `379.6K 🔥`
1. [日本确认南鸟岛海泥含中重稀土](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%A1%AE%E8%AE%A4%E5%8D%97%E9%B8%9F%E5%B2%9B%E6%B5%B7%E6%B3%A5%E5%90%AB%E4%B8%AD%E9%87%8D%E7%A8%80%E5%9C%9F%23) `379.4K 🔥`
1. [为什么携程被罚最重 (Why Ctrip was fined the most)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A%E6%9C%80%E9%87%8D%23) `378.0K 🔥`
1. [台风红霞 (Typhoon Hongxia)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `375.8K 🔥`
1. [虞书欣沈月做的菜单 (Menu made by Yu Shuxin and Shen Yue)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B2%88%E6%9C%88%E5%81%9A%E7%9A%84%E8%8F%9C%E5%8D%95%23) `369.0K 🔥`
1. [李权哲方回应高铁占座](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E9%93%81%E5%8D%A0%E5%BA%A7%23) `322.5K 🔥`
1. [携程](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%23) `318.5K 🔥`
1. [携程被罚51.79亿 (Ctrip was fined 5.179 billion)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `306.4K 🔥`
1. [鹿晗gapday音乐节](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97gapday%E9%9F%B3%E4%B9%90%E8%8A%82%23) `305.1K 🔥`
1. [王一博试车直播中给摩托姐姐镜头](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%AF%95%E8%BD%A6%E7%9B%B4%E6%92%AD%E4%B8%AD%E7%BB%99%E6%91%A9%E6%89%98%E5%A7%90%E5%A7%90%E9%95%9C%E5%A4%B4%23) `236.9K 🔥`
1. [ChatGPT崩了](https://s.weibo.com/weibo?q=%23ChatGPT%E5%B4%A9%E4%BA%86%23) `226.9K 🔥`
1. [韩国存储双雄9500亿美元大单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AD%98%E5%82%A8%E5%8F%8C%E9%9B%849500%E4%BA%BF%E7%BE%8E%E5%85%83%E5%A4%A7%E5%8D%95%23) `208.9K 🔥`
1. [心有凌犀选铂智7 (If you have a strong heart, choose Platinum Wisdom 7)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%9C%89%E5%87%8C%E7%8A%80%E9%80%89%E9%93%82%E6%99%BA7%23) `1.3M 🔥` `-35%`
1. [孙女的微信状态只有爷爷当真了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%A5%B3%E7%9A%84%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%E5%8F%AA%E6%9C%89%E7%88%B7%E7%88%B7%E5%BD%93%E7%9C%9F%E4%BA%86%23) `539.7K 🔥` `-31%`
1. [苏新皓囍神级solo (Su Xinhao's god-level solo)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%9B%8D%E7%A5%9E%E7%BA%A7solo%23) `493.0K 🔥` `-25%`
1. [西班牙21次犯规零牌](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9921%E6%AC%A1%E7%8A%AF%E8%A7%84%E9%9B%B6%E7%89%8C%23) `444.8K 🔥` `-49%`
1. [闫闯退赛 (Yan Chuang withdrew from the competition)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E9%80%80%E8%B5%9B%23) `376.5K 🔥` `-68%`
1. [严浩翔看到王一珩淘汰的表情](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E5%88%B0%E7%8E%8B%E4%B8%80%E7%8F%A9%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `371.1K 🔥` `-51%`
1. [王楚钦vs向鹏 (Wang Chuqin vs Xiang Peng)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%90%91%E9%B9%8F%23) `237.2K 🔥` `-62%`
1. [台风红霞即将登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%8D%B3%E5%B0%86%E7%99%BB%E9%99%86%23) `236.9K 🔥` `-29%`
1. [张泽禹唢呐一响头皮发麻 (Zhang Zeyu's scalp went numb when the suona sounded.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E5%94%A2%E5%91%90%E4%B8%80%E5%93%8D%E5%A4%B4%E7%9A%AE%E5%8F%91%E9%BA%BB%23) `236.4K 🔥` `-34%`
1. [孔雪儿一个人努力好心酸](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8A%AA%E5%8A%9B%E5%A5%BD%E5%BF%83%E9%85%B8%23) `209.9K 🔥` `-40%`
1. [退钱哥在美国40几天瘦脱相](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E5%9C%A8%E7%BE%8E%E5%9B%BD40%E5%87%A0%E5%A4%A9%E7%98%A6%E8%84%B1%E7%9B%B8%23) `209.1K 🔥` `-40%`

Updated at 2026-07-25 22:26:05

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
