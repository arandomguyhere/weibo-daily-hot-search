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

1. [越稳越敢跑 (The more stable you are, the more you dare to run.)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E7%A8%B3%E8%B6%8A%E6%95%A2%E8%B7%91%23) `69.5K 🔥` `NEW`
1. [你好1983](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%23) `26.6K 🔥` `NEW`
1. [家事法庭](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%BA%8B%E6%B3%95%E5%BA%AD%23) `26.6K 🔥` `NEW`
1. [明日方舟音律联觉](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E9%9F%B3%E5%BE%8B%E8%81%94%E8%A7%89%23) `26.6K 🔥` `NEW`
1. [怡宝不好卖了](https://s.weibo.com/weibo?q=%23%E6%80%A1%E5%AE%9D%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `109.1K 🔥`
1. [特朗普揭晓所谓伊朗大礼](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8F%AD%E6%99%93%E6%89%80%E8%B0%93%E4%BC%8A%E6%9C%97%E5%A4%A7%E7%A4%BC%23) `57.5K 🔥`
1. [孩子生病后买彩票中500万妈妈发声](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E7%94%9F%E7%97%85%E5%90%8E%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD500%E4%B8%87%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `154.1K 🔥` `-64%`
1. [为奋进中国打call](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%A5%8B%E8%BF%9B%E4%B8%AD%E5%9B%BD%E6%89%93call%23) `84.9K 🔥` `-66%`
1. [徐良演唱会上纪念本兮](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E7%BA%AA%E5%BF%B5%E6%9C%AC%E5%85%AE%23) `54.7K 🔥` `-38%`
1. [央视网评罗技侮辱性广告](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E8%AF%84%E7%BD%97%E6%8A%80%E4%BE%AE%E8%BE%B1%E6%80%A7%E5%B9%BF%E5%91%8A%23) `48.0K 🔥` `-50%`
1. [大部分人觉得旅游累的原因 (The reason why most people feel tired from traveling)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%83%A8%E5%88%86%E4%BA%BA%E8%A7%89%E5%BE%97%E6%97%85%E6%B8%B8%E7%B4%AF%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `45.8K 🔥` `-54%`
1. [伊朗无人机群袭以色列最大运输中心](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%BE%A4%E8%A2%AD%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%80%E5%A4%A7%E8%BF%90%E8%BE%93%E4%B8%AD%E5%BF%83%23) `43.9K 🔥` `-52%`
1. [伊朗禁往返敌方盟友港船只通过海峡 (Iran bans ships traveling to and from enemy and ally ports through the strait)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A6%81%E5%BE%80%E8%BF%94%E6%95%8C%E6%96%B9%E7%9B%9F%E5%8F%8B%E6%B8%AF%E8%88%B9%E5%8F%AA%E9%80%9A%E8%BF%87%E6%B5%B7%E5%B3%A1%23) `43.8K 🔥` `-38%`
1. [雷军壁纸 逆天改命 (Lei Jun wallpaper changes fate against fate)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%A3%81%E7%BA%B8%20%E9%80%86%E5%A4%A9%E6%94%B9%E5%91%BD%23) `43.7K 🔥` `-86%`
1. [竹林四侠彻底be了 (The Four Heroes of the Bamboo Forest are completely bereft)](https://s.weibo.com/weibo?q=%23%E7%AB%B9%E6%9E%97%E5%9B%9B%E4%BE%A0%E5%BD%BB%E5%BA%95be%E4%BA%86%23) `43.7K 🔥` `-49%`
1. [霍尔木兹决战摊牌了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%86%B3%E6%88%98%E6%91%8A%E7%89%8C%E4%BA%86%23) `43.5K 🔥` `-47%`
1. [王一博微博改名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `43.2K 🔥` `-49%`
1. [钧正平评粉底液将军](https://s.weibo.com/weibo?q=%23%E9%92%A7%E6%AD%A3%E5%B9%B3%E8%AF%84%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%23) `43.0K 🔥` `-45%`
1. [锤娜丽莎瘦30斤公开减肥原因](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E7%98%A630%E6%96%A4%E5%85%AC%E5%BC%80%E5%87%8F%E8%82%A5%E5%8E%9F%E5%9B%A0%23) `42.7K 🔥` `-46%`
1. [曝关晓彤喜提新车 (It is revealed that Guan Xiaotong likes to bring a new car)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%9C%E6%8F%90%E6%96%B0%E8%BD%A6%23) `42.7K 🔥` `-47%`
1. [严浩翔方回应KTV传闻](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B9%E5%9B%9E%E5%BA%94KTV%E4%BC%A0%E9%97%BB%23) `42.4K 🔥` `-40%`
1. [阚清子问我这么胖吗](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E9%97%AE%E6%88%91%E8%BF%99%E4%B9%88%E8%83%96%E5%90%97%23) `42.2K 🔥` `-44%`
1. [今年蚊子可能迎来史诗级加强](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E8%9A%8A%E5%AD%90%E5%8F%AF%E8%83%BD%E8%BF%8E%E6%9D%A5%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%8A%A0%E5%BC%BA%23) `42.1K 🔥` `-44%`
1. [3D还原女子因停车纠纷摔倒身亡](https://s.weibo.com/weibo?q=%233D%E8%BF%98%E5%8E%9F%E5%A5%B3%E5%AD%90%E5%9B%A0%E5%81%9C%E8%BD%A6%E7%BA%A0%E7%BA%B7%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%23) `41.9K 🔥` `-23%`
1. [西班牙25岁女孩被性侵多次后申请安乐死 (Spanish girl, 25, applies for euthanasia after being sexually assaulted multiple times)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9925%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB%E6%80%A7%E4%BE%B5%E5%A4%9A%E6%AC%A1%E5%90%8E%E7%94%B3%E8%AF%B7%E5%AE%89%E4%B9%90%E6%AD%BB%23) `41.6K 🔥` `-41%`
1. [男子借钱凑彩礼结婚后1个月被家暴 (Man borrowed money to collect dowry and was domestically assaulted 1 month after getting married)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%80%9F%E9%92%B1%E5%87%91%E5%BD%A9%E7%A4%BC%E7%BB%93%E5%A9%9A%E5%90%8E1%E4%B8%AA%E6%9C%88%E8%A2%AB%E5%AE%B6%E6%9A%B4%23) `41.5K 🔥` `-41%`
1. [逐玉 庆功宴](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `41.3K 🔥` `-30%`
1. [白日提灯云包场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E4%BA%91%E5%8C%85%E5%9C%BA%23) `39.3K 🔥` `-44%`
1. [危险关系 吴慷仁 (Dangerous Liaisons Wu Kangren)](https://s.weibo.com/weibo?q=%23%E5%8D%B1%E9%99%A9%E5%85%B3%E7%B3%BB%20%E5%90%B4%E6%85%B7%E4%BB%81%23) `38.3K 🔥` `-70%`
1. [美以空袭伊朗钢铁厂及配套发电厂](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E7%A9%BA%E8%A2%AD%E4%BC%8A%E6%9C%97%E9%92%A2%E9%93%81%E5%8E%82%E5%8F%8A%E9%85%8D%E5%A5%97%E5%8F%91%E7%94%B5%E5%8E%82%23) `36.0K 🔥` `-49%`
1. [张凌赫回复严屹宽 (Zhang Linghe replied to Yan Yikuan)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E4%B8%A5%E5%B1%B9%E5%AE%BD%23) `34.3K 🔥` `-37%`
1. [王橹杰换头像 (Wang Lujie changes avatar)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `34.2K 🔥` `-31%`
1. [世界第一高楼被闪电击中](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%E9%AB%98%E6%A5%BC%E8%A2%AB%E9%97%AA%E7%94%B5%E5%87%BB%E4%B8%AD%23) `33.1K 🔥` `-63%`
1. [警方过筛23.7斤血沙破25年前命案](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%BF%87%E7%AD%9B23.7%E6%96%A4%E8%A1%80%E6%B2%99%E7%A0%B425%E5%B9%B4%E5%89%8D%E5%91%BD%E6%A1%88%23) `33.1K 🔥` `-32%`
1. [黄子韬因为减肥后脑勺秃了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%A0%E4%B8%BA%E5%87%8F%E8%82%A5%E5%90%8E%E8%84%91%E5%8B%BA%E7%A7%83%E4%BA%86%23) `33.1K 🔥` `-32%`
1. [黄金持续快速拉升](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%8C%81%E7%BB%AD%E5%BF%AB%E9%80%9F%E6%8B%89%E5%8D%87%23) `32.3K 🔥` `-34%`
1. [李卿空降](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%E7%A9%BA%E9%99%8D%23) `28.6K 🔥` `-42%`
1. [迪丽热巴白日提灯包场6666份](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%8C%85%E5%9C%BA6666%E4%BB%BD%23) `26.6K 🔥` `-45%`
1. [王一博乐华续约 (Wang Yibo Lehua renews contract)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B9%90%E5%8D%8E%E7%BB%AD%E7%BA%A6%23) `26.6K 🔥` `-45%`
1. [岳云鹏室内抽烟](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E5%AE%A4%E5%86%85%E6%8A%BD%E7%83%9F%23) `26.6K 🔥` `-45%`
1. [UNIQ组合已解散](https://s.weibo.com/weibo?q=%23UNIQ%E7%BB%84%E5%90%88%E5%B7%B2%E8%A7%A3%E6%95%A3%23) `26.6K 🔥` `-45%`
1. [伊朗外长在联合国称将自卫到底](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E5%9C%A8%E8%81%94%E5%90%88%E5%9B%BD%E7%A7%B0%E5%B0%86%E8%87%AA%E5%8D%AB%E5%88%B0%E5%BA%95%23) `26.6K 🔥` `-45%`
1. [保留奔跑吧艺人剩菜店家道歉](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%95%99%E5%A5%94%E8%B7%91%E5%90%A7%E8%89%BA%E4%BA%BA%E5%89%A9%E8%8F%9C%E5%BA%97%E5%AE%B6%E9%81%93%E6%AD%89%23) `26.6K 🔥` `-45%`
1. [老头乐向小米汽车致歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%B4%E4%B9%90%E5%90%91%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E8%87%B4%E6%AD%89%23) `26.6K 🔥` `-45%`
1. [丁程鑫张真源合照 (Group photo of Ding Chengxin and Zhang Zhenyuan)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%90%88%E7%85%A7%23) `26.6K 🔥` `-45%`
1. [乘风2026一下来了33位姐姐](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%80%E4%B8%8B%E6%9D%A5%E4%BA%8633%E4%BD%8D%E5%A7%90%E5%A7%90%23) `26.6K 🔥` `-45%`
1. [奉劝大家还是尽量多存钱](https://s.weibo.com/weibo?q=%23%E5%A5%89%E5%8A%9D%E5%A4%A7%E5%AE%B6%E8%BF%98%E6%98%AF%E5%B0%BD%E9%87%8F%E5%A4%9A%E5%AD%98%E9%92%B1%23) `26.6K 🔥` `-45%`
1. [杨幂直播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%9B%B4%E6%92%AD%23) `26.6K 🔥` `-45%`
1. [左奇函 脸色 (Zuo Qihan's face)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%20%E8%84%B8%E8%89%B2%23) `26.6K 🔥` `-45%`
1. [教育部明确严禁布置重复性惩罚性作业](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E6%98%8E%E7%A1%AE%E4%B8%A5%E7%A6%81%E5%B8%83%E7%BD%AE%E9%87%8D%E5%A4%8D%E6%80%A7%E6%83%A9%E7%BD%9A%E6%80%A7%E4%BD%9C%E4%B8%9A%23) `26.6K 🔥` `-45%`
1. [花花搂着和叶睡觉能治愈全世界 (Sleeping with Huahua and Ye in his arms can heal the whole world)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E8%8A%B1%E6%90%82%E7%9D%80%E5%92%8C%E5%8F%B6%E7%9D%A1%E8%A7%89%E8%83%BD%E6%B2%BB%E6%84%88%E5%85%A8%E4%B8%96%E7%95%8C%23) `26.6K 🔥` `-68%`

Updated at 2026-03-28 02:30:53

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
