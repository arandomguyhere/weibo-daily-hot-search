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

1. [李昌钰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%23) `1.4M 🔥` `NEW`
1. [李昌钰骨灰一半葬扬州一半留美国](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E9%AA%A8%E7%81%B0%E4%B8%80%E5%8D%8A%E8%91%AC%E6%89%AC%E5%B7%9E%E4%B8%80%E5%8D%8A%E7%95%99%E7%BE%8E%E5%9B%BD%23) `1.0M 🔥` `NEW`
1. [从长征数字里感悟信仰力量](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E9%95%BF%E5%BE%81%E6%95%B0%E5%AD%97%E9%87%8C%E6%84%9F%E6%82%9F%E4%BF%A1%E4%BB%B0%E5%8A%9B%E9%87%8F%23) `1.0M 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `1.0M 🔥` `NEW`
1. [美国姑娘来中国考英语倒数第一](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A7%91%E5%A8%98%E6%9D%A5%E4%B8%AD%E5%9B%BD%E8%80%83%E8%8B%B1%E8%AF%AD%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `1.0M 🔥` `NEW`
1. [松岛辉空男单退赛](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E7%94%B7%E5%8D%95%E9%80%80%E8%B5%9B%23) `1.0M 🔥` `NEW`
1. [孙怡说李小冉想找头婚的不容易](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%AF%B4%E6%9D%8E%E5%B0%8F%E5%86%89%E6%83%B3%E6%89%BE%E5%A4%B4%E5%A9%9A%E7%9A%84%E4%B8%8D%E5%AE%B9%E6%98%93%23) `1.0M 🔥` `NEW`
1. [李昌钰安葬妻子痛哭称等我18年](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%AE%89%E8%91%AC%E5%A6%BB%E5%AD%90%E7%97%9B%E5%93%AD%E7%A7%B0%E7%AD%89%E6%88%9118%E5%B9%B4%23) `1.0M 🔥` `NEW`
1. [泰国旅游部长回应中国游客安全](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%97%85%E6%B8%B8%E9%83%A8%E9%95%BF%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%AE%89%E5%85%A8%23) `999.7K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `989.0K 🔥` `NEW`
1. [贾乃亮1天卖5.7亿](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE1%E5%A4%A9%E5%8D%965.7%E4%BA%BF%23) `985.2K 🔥` `NEW`
1. [小城良方 剧情硬伤](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%20%E5%89%A7%E6%83%85%E7%A1%AC%E4%BC%A4%23) `981.2K 🔥` `NEW`
1. [VOGUE阵容官宣](https://s.weibo.com/weibo?q=%23VOGUE%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `969.4K 🔥` `NEW`
1. [问界M9事故三连环站不住脚](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E4%BA%8B%E6%95%85%E4%B8%89%E8%BF%9E%E7%8E%AF%E7%AB%99%E4%B8%8D%E4%BD%8F%E8%84%9A%23) `966.3K 🔥` `NEW`
1. [廖景芳被判死刑当庭吓软](https://s.weibo.com/weibo?q=%23%E5%BB%96%E6%99%AF%E8%8A%B3%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%E5%BD%93%E5%BA%AD%E5%90%93%E8%BD%AF%23) `962.9K 🔥` `NEW`
1. [赵丽颖直播](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9B%B4%E6%92%AD%23) `827.7K 🔥` `NEW`
1. [刘冲请到刘亦菲了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E8%AF%B7%E5%88%B0%E5%88%98%E4%BA%A6%E8%8F%B2%E4%BA%86%23) `778.7K 🔥` `NEW`
1. [时尚博主说迪丽热巴高定是品牌借的](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B0%9A%E5%8D%9A%E4%B8%BB%E8%AF%B4%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%AB%98%E5%AE%9A%E6%98%AF%E5%93%81%E7%89%8C%E5%80%9F%E7%9A%84%23) `758.8K 🔥` `NEW`
1. [iPhoneDuo当主力机考验自适应能力](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%BD%93%E4%B8%BB%E5%8A%9B%E6%9C%BA%E8%80%83%E9%AA%8C%E8%87%AA%E9%80%82%E5%BA%94%E8%83%BD%E5%8A%9B%23) `565.3K 🔥` `NEW`
1. [周也VOGUE造型不打安全牌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9FVOGUE%E9%80%A0%E5%9E%8B%E4%B8%8D%E6%89%93%E5%AE%89%E5%85%A8%E7%89%8C%23) `545.7K 🔥` `NEW`
1. [微信适配iPhoneDuo版本](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E9%80%82%E9%85%8DiPhoneDuo%E7%89%88%E6%9C%AC%23) `530.0K 🔥` `NEW`
1. [黄多多 买股](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%20%E4%B9%B0%E8%82%A1%23) `529.9K 🔥` `NEW`
1. [许飞业内口碑](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E4%B8%9A%E5%86%85%E5%8F%A3%E7%A2%91%23) `489.2K 🔥` `NEW`
1. [北方人吃饺子分量大的原因找到了](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%E4%BA%BA%E5%90%83%E9%A5%BA%E5%AD%90%E5%88%86%E9%87%8F%E5%A4%A7%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `439.3K 🔥` `NEW`
1. [白鹿荷叶领西装高定](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8D%B7%E5%8F%B6%E9%A2%86%E8%A5%BF%E8%A3%85%E9%AB%98%E5%AE%9A%23) `434.7K 🔥` `NEW`
1. [AI让学历不值钱](https://s.weibo.com/weibo?q=%23AI%E8%AE%A9%E5%AD%A6%E5%8E%86%E4%B8%8D%E5%80%BC%E9%92%B1%23) `428.7K 🔥` `NEW`
1. [西藏巴青地震16死76伤](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%B7%B4%E9%9D%92%E5%9C%B0%E9%9C%8716%E6%AD%BB76%E4%BC%A4%23) `423.5K 🔥` `NEW`
1. [胡彦斌手工耿锐评AI](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E6%89%8B%E5%B7%A5%E8%80%BF%E9%94%90%E8%AF%84AI%23) `345.0K 🔥` `NEW`
1. [林舒晴再次道歉](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%88%92%E6%99%B4%E5%86%8D%E6%AC%A1%E9%81%93%E6%AD%89%23) `339.5K 🔥` `NEW`
1. [别在背后蛐蛐任何人](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E8%83%8C%E5%90%8E%E8%9B%90%E8%9B%90%E4%BB%BB%E4%BD%95%E4%BA%BA%23) `244.8K 🔥` `NEW`
1. [D社KPOP展公开无PS合照](https://s.weibo.com/weibo?q=%23D%E7%A4%BEKPOP%E5%B1%95%E5%85%AC%E5%BC%80%E6%97%A0PS%E5%90%88%E7%85%A7%23) `244.4K 🔥` `NEW`
1. [影视飓风Tim首条X视频爆了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E9%A6%96%E6%9D%A1X%E8%A7%86%E9%A2%91%E7%88%86%E4%BA%86%23) `241.2K 🔥` `NEW`
1. [黄多多卷发红裙](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E5%8D%B7%E5%8F%91%E7%BA%A2%E8%A3%99%23) `232.7K 🔥` `NEW`
1. [为何现在女生脱单这么难](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E7%8E%B0%E5%9C%A8%E5%A5%B3%E7%94%9F%E8%84%B1%E5%8D%95%E8%BF%99%E4%B9%88%E9%9A%BE%23) `210.2K 🔥` `NEW`
1. [田曦薇看嫁金钗痛哭](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9C%8B%E5%AB%81%E9%87%91%E9%92%97%E7%97%9B%E5%93%AD%23) `186.0K 🔥` `NEW`
1. [驴友稻城亚丁高反缺氧失控](https://s.weibo.com/weibo?q=%23%E9%A9%B4%E5%8F%8B%E7%A8%BB%E5%9F%8E%E4%BA%9A%E4%B8%81%E9%AB%98%E5%8F%8D%E7%BC%BA%E6%B0%A7%E5%A4%B1%E6%8E%A7%23) `185.1K 🔥` `NEW`
1. [尚公主直播](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E7%9B%B4%E6%92%AD%23) `177.8K 🔥` `NEW`
1. [科技新一说iPhoneDuo太难用了](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%AF%B4iPhoneDuo%E5%A4%AA%E9%9A%BE%E7%94%A8%E4%BA%86%23) `177.0K 🔥` `NEW`
1. [iPhoneDuo到手发现华为更香了](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%88%B0%E6%89%8B%E5%8F%91%E7%8E%B0%E5%8D%8E%E4%B8%BA%E6%9B%B4%E9%A6%99%E4%BA%86%23) `159.4K 🔥` `NEW`
1. [何刚升任华为董事](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%88%9A%E5%8D%87%E4%BB%BB%E5%8D%8E%E4%B8%BA%E8%91%A3%E4%BA%8B%23) `156.1K 🔥` `NEW`
1. [美国再爆UFO事件](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%86%8D%E7%88%86UFO%E4%BA%8B%E4%BB%B6%23) `151.8K 🔥` `NEW`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `144.7K 🔥` `NEW`
1. [科技新一的iPhoneDuo出bug了](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E7%9A%84iPhoneDuo%E5%87%BAbug%E4%BA%86%23) `140.5K 🔥` `NEW`
1. [买酸奶送的小鸡养了4年变25斤](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E9%85%B8%E5%A5%B6%E9%80%81%E7%9A%84%E5%B0%8F%E9%B8%A1%E5%85%BB%E4%BA%864%E5%B9%B4%E5%8F%9825%E6%96%A4%23) `132.8K 🔥` `NEW`
1. [很多女性不知道自己患有多囊](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E5%A5%B3%E6%80%A7%E4%B8%8D%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%82%A3%E6%9C%89%E5%A4%9A%E5%9B%8A%23) `129.8K 🔥` `NEW`
1. [金价跌破870元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E7%A0%B4870%E5%85%83%23) `129.7K 🔥` `NEW`
1. [黄子韬公司被强制执行2040万](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%85%AC%E5%8F%B8%E8%A2%AB%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C2040%E4%B8%87%23) `428.1K 🔥`
1. [VOGUE明星出图](https://s.weibo.com/weibo?q=%23VOGUE%E6%98%8E%E6%98%9F%E5%87%BA%E5%9B%BE%23) `419.4K 🔥` `-47%`

Updated at 2026-10-23 17:59:49

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
