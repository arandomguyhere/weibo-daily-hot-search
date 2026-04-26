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

1. [守护创新的力量 (Protect the power of innovation)](https://s.weibo.com/weibo?q=%23%E5%AE%88%E6%8A%A4%E5%88%9B%E6%96%B0%E7%9A%84%E5%8A%9B%E9%87%8F%23) `679.1K 🔥` `NEW`
1. [张月听到者来女淘汰的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%90%AC%E5%88%B0%E8%80%85%E6%9D%A5%E5%A5%B3%E6%B7%98%E6%B1%B0%E7%9A%84%E5%8F%8D%E5%BA%94%23) `654.3K 🔥` `NEW`
1. [特朗普紧急撤离时摔倒](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%B4%A7%E6%80%A5%E6%92%A4%E7%A6%BB%E6%97%B6%E6%91%94%E5%80%92%23) `607.0K 🔥` `NEW`
1. [性价比卷王MG4更卷了6.58万起](https://s.weibo.com/weibo?q=%23%E6%80%A7%E4%BB%B7%E6%AF%94%E5%8D%B7%E7%8E%8BMG4%E6%9B%B4%E5%8D%B7%E4%BA%866.58%E4%B8%87%E8%B5%B7%23) `595.6K 🔥` `NEW`
1. [王者敖隐新皮肤技能特效](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%95%96%E9%9A%90%E6%96%B0%E7%9A%AE%E8%82%A4%E6%8A%80%E8%83%BD%E7%89%B9%E6%95%88%23) `443.1K 🔥` `NEW`
1. [余承东检讨称以前做车不重视外观](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E6%A3%80%E8%AE%A8%E7%A7%B0%E4%BB%A5%E5%89%8D%E5%81%9A%E8%BD%A6%E4%B8%8D%E9%87%8D%E8%A7%86%E5%A4%96%E8%A7%82%23) `382.9K 🔥` `NEW`
1. [小米公司报警](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%85%AC%E5%8F%B8%E6%8A%A5%E8%AD%A6%23) `323.5K 🔥` `NEW`
1. [千里江山图](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%87%8C%E6%B1%9F%E5%B1%B1%E5%9B%BE%23) `305.2K 🔥` `NEW`
1. [游客买6000港元虫草磨粉后要价71000](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E4%B9%B06000%E6%B8%AF%E5%85%83%E8%99%AB%E8%8D%89%E7%A3%A8%E7%B2%89%E5%90%8E%E8%A6%81%E4%BB%B771000%23) `282.7K 🔥` `NEW`
1. [曝顶流女明星帮富婆闺蜜找男网红](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%A1%B6%E6%B5%81%E5%A5%B3%E6%98%8E%E6%98%9F%E5%B8%AE%E5%AF%8C%E5%A9%86%E9%97%BA%E8%9C%9C%E6%89%BE%E7%94%B7%E7%BD%91%E7%BA%A2%23) `268.9K 🔥` `NEW`
1. [WB对战TCG (WB vs. TCG)](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98TCG%23) `246.3K 🔥` `NEW`
1. [女子不知怀孕医院上厕所时生二胎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E7%9F%A5%E6%80%80%E5%AD%95%E5%8C%BB%E9%99%A2%E4%B8%8A%E5%8E%95%E6%89%80%E6%97%B6%E7%94%9F%E4%BA%8C%E8%83%8E%23) `242.2K 🔥` `NEW`
1. [谢娜回复者来女](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%A4%8D%E8%80%85%E6%9D%A5%E5%A5%B3%23) `240.3K 🔥` `NEW`
1. [精灵耳医美女子说生不如死](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%81%B5%E8%80%B3%E5%8C%BB%E7%BE%8E%E5%A5%B3%E5%AD%90%E8%AF%B4%E7%94%9F%E4%B8%8D%E5%A6%82%E6%AD%BB%23) `227.9K 🔥` `NEW`
1. [李宗伟说15分制让自己有复出可能](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%97%E4%BC%9F%E8%AF%B415%E5%88%86%E5%88%B6%E8%AE%A9%E8%87%AA%E5%B7%B1%E6%9C%89%E5%A4%8D%E5%87%BA%E5%8F%AF%E8%83%BD%23) `180.3K 🔥` `NEW`
1. [张雪声援余承东](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%A3%B0%E6%8F%B4%E4%BD%99%E6%89%BF%E4%B8%9C%23) `172.6K 🔥` `NEW`
1. [陈赫你们一会不要笑啊](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E4%BD%A0%E4%BB%AC%E4%B8%80%E4%BC%9A%E4%B8%8D%E8%A6%81%E7%AC%91%E5%95%8A%23) `170.2K 🔥` `NEW`
1. [高市早苗就白宫晚宴枪击事件表态](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%B0%B1%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%E8%A1%A8%E6%80%81%23) `169.5K 🔥` `NEW`
1. [白鹿 厨师领巾](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%8E%A8%E5%B8%88%E9%A2%86%E5%B7%BE%23) `169.4K 🔥` `NEW`
1. [乌兰图雅鼻子上粉底都哭没了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E9%BC%BB%E5%AD%90%E4%B8%8A%E7%B2%89%E5%BA%95%E9%83%BD%E5%93%AD%E6%B2%A1%E4%BA%86%23) `162.2K 🔥` `NEW`
1. [卢昱晓袖口有虫爬出来 (There is an insect crawling out of Lu Yuxiao’s sleeves)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%A2%96%E5%8F%A3%E6%9C%89%E8%99%AB%E7%88%AC%E5%87%BA%E6%9D%A5%23) `159.7K 🔥` `NEW`
1. [老人楼道养鸡在ICU住了40天](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%A5%BC%E9%81%93%E5%85%BB%E9%B8%A1%E5%9C%A8ICU%E4%BD%8F%E4%BA%8640%E5%A4%A9%23) `157.3K 🔥` `NEW`
1. [东方甄选新总裁是谁](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%96%B0%E6%80%BB%E8%A3%81%E6%98%AF%E8%B0%81%23) `151.4K 🔥` `NEW`
1. [直观感受到赵丽颖的脸有多小](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9A%84%E8%84%B8%E6%9C%89%E5%A4%9A%E5%B0%8F%23) `151.4K 🔥` `NEW`
1. [东方小国礼 新国雅行政新典范 (Oriental Small Country Etiquette, New Country Elegance New Model of Administration)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E5%B0%8F%E5%9B%BD%E7%A4%BC%20%E6%96%B0%E5%9B%BD%E9%9B%85%E8%A1%8C%E6%94%BF%E6%96%B0%E5%85%B8%E8%8C%83%23) `674.2K 🔥` `+121%`
1. [浪姐三公 李唐王朝](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%20%E6%9D%8E%E5%94%90%E7%8E%8B%E6%9C%9D%23) `574.4K 🔥` `+65%`
1. [吴彦姝87岁穿高跟鞋不驼背](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A6%E5%A7%9D87%E5%B2%81%E7%A9%BF%E9%AB%98%E8%B7%9F%E9%9E%8B%E4%B8%8D%E9%A9%BC%E8%83%8C%23) `301.1K 🔥` `+36%`
1. [易梦玲刷脸刷不出](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E5%88%B7%E8%84%B8%E5%88%B7%E4%B8%8D%E5%87%BA%23) `278.0K 🔥` `+25%`
1. [白宫晚宴枪击事件枪手身亡 (Gunman dies in White House dinner shooting)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%E6%9E%AA%E6%89%8B%E8%BA%AB%E4%BA%A1%23) `1.1M 🔥`
1. [日美英联手针对中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%BE%8E%E8%8B%B1%E8%81%94%E6%89%8B%E9%92%88%E5%AF%B9%E4%B8%AD%E5%9B%BD%23) `809.8K 🔥`
1. [老祖宗不愿带回来的食物一定难吃](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E4%B8%8D%E6%84%BF%E5%B8%A6%E5%9B%9E%E6%9D%A5%E7%9A%84%E9%A3%9F%E7%89%A9%E4%B8%80%E5%AE%9A%E9%9A%BE%E5%90%83%23) `645.2K 🔥`
1. [井柏然 老人味太重](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E8%80%81%E4%BA%BA%E5%91%B3%E5%A4%AA%E9%87%8D%23) `332.5K 🔥`
1. [孙怡 爱与不爱很明显 (Sun Yi It’s obvious whether you love or not love)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E7%88%B1%E4%B8%8E%E4%B8%8D%E7%88%B1%E5%BE%88%E6%98%8E%E6%98%BE%23) `325.9K 🔥`
1. [桃黑黑直播美颜掉了](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%E7%BE%8E%E9%A2%9C%E6%8E%89%E4%BA%86%23) `318.2K 🔥`
1. [宁艺卓回怼粉丝](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%9B%9E%E6%80%BC%E7%B2%89%E4%B8%9D%23) `313.3K 🔥`
1. [李昀锐 孟子义 (Li Yunrui Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%20%E5%AD%9F%E5%AD%90%E4%B9%89%23) `313.0K 🔥`
1. [张凌赫腿受伤了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%85%BF%E5%8F%97%E4%BC%A4%E4%BA%86%23) `302.3K 🔥`
1. [近20万坐月子婴儿床出现多只书虱](https://s.weibo.com/weibo?q=%23%E8%BF%9120%E4%B8%87%E5%9D%90%E6%9C%88%E5%AD%90%E5%A9%B4%E5%84%BF%E5%BA%8A%E5%87%BA%E7%8E%B0%E5%A4%9A%E5%8F%AA%E4%B9%A6%E8%99%B1%23) `286.2K 🔥`
1. [魏笑结婚](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%AC%91%E7%BB%93%E5%A9%9A%23) `284.5K 🔥`
1. [阚清子老公行事体面](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E8%A1%8C%E4%BA%8B%E4%BD%93%E9%9D%A2%23) `275.5K 🔥`
1. [原来这是肺不好的表现](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%98%AF%E8%82%BA%E4%B8%8D%E5%A5%BD%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `264.5K 🔥`
1. [王菲在北京的一天是怎么度过的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%9A%84%E4%B8%80%E5%A4%A9%E6%98%AF%E6%80%8E%E4%B9%88%E5%BA%A6%E8%BF%87%E7%9A%84%23) `262.3K 🔥`
1. [本周狗屎运最旺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E7%8B%97%E5%B1%8E%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `193.5K 🔥`
1. [约基奇打架 (Jokic fight)](https://s.weibo.com/weibo?q=%23%E7%BA%A6%E5%9F%BA%E5%A5%87%E6%89%93%E6%9E%B6%23) `332.9K 🔥` `-61%`
1. [特朗普说他妻子躲得更快](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BB%96%E5%A6%BB%E5%AD%90%E8%BA%B2%E5%BE%97%E6%9B%B4%E5%BF%AB%23) `272.1K 🔥` `-22%`
1. [林子烨练成微笑唇了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E7%BB%83%E6%88%90%E5%BE%AE%E7%AC%91%E5%94%87%E4%BA%86%23) `236.3K 🔥` `-23%`
1. [阚清子瘦好多](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%98%A6%E5%A5%BD%E5%A4%9A%23) `196.1K 🔥` `-32%`
1. [汕头金山中学放学场面](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E9%87%91%E5%B1%B1%E4%B8%AD%E5%AD%A6%E6%94%BE%E5%AD%A6%E5%9C%BA%E9%9D%A2%23) `171.7K 🔥` `-47%`
1. [范丞丞看时团 鹿晗看NINEPERCENT (Fan Chengcheng watches Time Group and Lu Han watches NINEPERCENT)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9C%8B%E6%97%B6%E5%9B%A2%20%E9%B9%BF%E6%99%97%E7%9C%8BNINEPERCENT%23) `167.2K 🔥` `-50%`
1. [牢A谈白宫晚宴枪击事件 (Prison A talks about the White House dinner shooting)](https://s.weibo.com/weibo?q=%23%E7%89%A2A%E8%B0%88%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%23) `162.7K 🔥` `-27%`
1. [尾号9999999手机号以26万再次拍卖](https://s.weibo.com/weibo?q=%23%E5%B0%BE%E5%8F%B79999999%E6%89%8B%E6%9C%BA%E5%8F%B7%E4%BB%A526%E4%B8%87%E5%86%8D%E6%AC%A1%E6%8B%8D%E5%8D%96%23) `160.8K 🔥` `-49%`
1. [东方甄选前员工发声](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%89%8D%E5%91%98%E5%B7%A5%E5%8F%91%E5%A3%B0%23) `151.8K 🔥` `-21%`

Updated at 2026-04-26 16:03:37

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
