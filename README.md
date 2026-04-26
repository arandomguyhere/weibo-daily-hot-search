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

1. [这就是北京车展 (This is the Beijing Auto Show)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%23) `684.0K 🔥` `NEW`
1. [老祖宗不愿带回来的食物一定难吃](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E4%B8%8D%E6%84%BF%E5%B8%A6%E5%9B%9E%E6%9D%A5%E7%9A%84%E9%A3%9F%E7%89%A9%E4%B8%80%E5%AE%9A%E9%9A%BE%E5%90%83%23) `683.9K 🔥` `NEW`
1. [日美英联手针对中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%BE%8E%E8%8B%B1%E8%81%94%E6%89%8B%E9%92%88%E5%AF%B9%E4%B8%AD%E5%9B%BD%23) `683.8K 🔥` `NEW`
1. [提质焕新 红旗为用户造好车](https://s.weibo.com/weibo?q=%23%E6%8F%90%E8%B4%A8%E7%84%95%E6%96%B0%20%E7%BA%A2%E6%97%97%E4%B8%BA%E7%94%A8%E6%88%B7%E9%80%A0%E5%A5%BD%E8%BD%A6%23) `614.9K 🔥` `NEW`
1. [特朗普说他妻子躲得更快](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BB%96%E5%A6%BB%E5%AD%90%E8%BA%B2%E5%BE%97%E6%9B%B4%E5%BF%AB%23) `350.5K 🔥` `NEW`
1. [浪姐三公 李唐王朝](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%20%E6%9D%8E%E5%94%90%E7%8E%8B%E6%9C%9D%23) `348.2K 🔥` `NEW`
1. [孙怡 爱与不爱很明显](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E7%88%B1%E4%B8%8E%E4%B8%8D%E7%88%B1%E5%BE%88%E6%98%8E%E6%98%BE%23) `335.5K 🔥` `NEW`
1. [桃黑黑直播美颜掉了](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%E7%BE%8E%E9%A2%9C%E6%8E%89%E4%BA%86%23) `335.2K 🔥` `NEW`
1. [井柏然 老人味太重](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E8%80%81%E4%BA%BA%E5%91%B3%E5%A4%AA%E9%87%8D%23) `333.6K 🔥` `NEW`
1. [阚清子老公行事体面](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E8%A1%8C%E4%BA%8B%E4%BD%93%E9%9D%A2%23) `328.3K 🔥` `NEW`
1. [年轻人都在蹲的快乐接驳车 (Young people are squatting on the happy shuttle bus)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%83%BD%E5%9C%A8%E8%B9%B2%E7%9A%84%E5%BF%AB%E4%B9%90%E6%8E%A5%E9%A9%B3%E8%BD%A6%23) `325.6K 🔥` `NEW`
1. [张凌赫腿受伤了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%85%BF%E5%8F%97%E4%BC%A4%E4%BA%86%23) `321.9K 🔥` `NEW`
1. [魏笑结婚](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%AC%91%E7%BB%93%E5%A9%9A%23) `317.1K 🔥` `NEW`
1. [原来这是肺不好的表现](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%98%AF%E8%82%BA%E4%B8%8D%E5%A5%BD%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `312.8K 🔥` `NEW`
1. [尾号9999999手机号以26万再次拍卖](https://s.weibo.com/weibo?q=%23%E5%B0%BE%E5%8F%B79999999%E6%89%8B%E6%9C%BA%E5%8F%B7%E4%BB%A526%E4%B8%87%E5%86%8D%E6%AC%A1%E6%8B%8D%E5%8D%96%23) `312.2K 🔥` `NEW`
1. [万斯蹲在椅后被拽走画面](https://s.weibo.com/weibo?q=%23%E4%B8%87%E6%96%AF%E8%B9%B2%E5%9C%A8%E6%A4%85%E5%90%8E%E8%A2%AB%E6%8B%BD%E8%B5%B0%E7%94%BB%E9%9D%A2%23) `222.5K 🔥` `NEW`
1. [吴彦姝87岁穿高跟鞋不驼背](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A6%E5%A7%9D87%E5%B2%81%E7%A9%BF%E9%AB%98%E8%B7%9F%E9%9E%8B%E4%B8%8D%E9%A9%BC%E8%83%8C%23) `222.1K 🔥` `NEW`
1. [本周狗屎运最旺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E7%8B%97%E5%B1%8E%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `221.9K 🔥` `NEW`
1. [易梦玲刷脸刷不出](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E5%88%B7%E8%84%B8%E5%88%B7%E4%B8%8D%E5%87%BA%23) `221.8K 🔥` `NEW`
1. [央视揭秘精灵耳整形乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%8F%AD%E7%A7%98%E7%B2%BE%E7%81%B5%E8%80%B3%E6%95%B4%E5%BD%A2%E4%B9%B1%E8%B1%A1%23) `221.6K 🔥` `NEW`
1. [牢A谈白宫晚宴枪击事件 (Prison A talks about the White House dinner shooting)](https://s.weibo.com/weibo?q=%23%E7%89%A2A%E8%B0%88%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%23) `221.4K 🔥` `NEW`
1. [余承东称智能车进入体系决胜周期](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E6%99%BA%E8%83%BD%E8%BD%A6%E8%BF%9B%E5%85%A5%E4%BD%93%E7%B3%BB%E5%86%B3%E8%83%9C%E5%91%A8%E6%9C%9F%23) `215.9K 🔥` `NEW`
1. [颜宁称两篇CNS论文被审稿人抢发](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%AE%81%E7%A7%B0%E4%B8%A4%E7%AF%87CNS%E8%AE%BA%E6%96%87%E8%A2%AB%E5%AE%A1%E7%A8%BF%E4%BA%BA%E6%8A%A2%E5%8F%91%23) `214.5K 🔥` `NEW`
1. [周杰伦点赞JH的解析视频](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%82%B9%E8%B5%9EJH%E7%9A%84%E8%A7%A3%E6%9E%90%E8%A7%86%E9%A2%91%23) `214.2K 🔥` `NEW`
1. [邓超感谢孙俪](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E6%84%9F%E8%B0%A2%E5%AD%99%E4%BF%AA%23) `211.5K 🔥` `NEW`
1. [中国2004年开始建立战略石油储备](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD2004%E5%B9%B4%E5%BC%80%E5%A7%8B%E5%BB%BA%E7%AB%8B%E6%88%98%E7%95%A5%E7%9F%B3%E6%B2%B9%E5%82%A8%E5%A4%87%23) `202.4K 🔥` `NEW`
1. [陈瑶下班戴者来女送的镯子](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E4%B8%8B%E7%8F%AD%E6%88%B4%E8%80%85%E6%9D%A5%E5%A5%B3%E9%80%81%E7%9A%84%E9%95%AF%E5%AD%90%23) `201.1K 🔥` `NEW`
1. [煎饼摊位被挡获全网撑腰](https://s.weibo.com/weibo?q=%23%E7%85%8E%E9%A5%BC%E6%91%8A%E4%BD%8D%E8%A2%AB%E6%8C%A1%E8%8E%B7%E5%85%A8%E7%BD%91%E6%92%91%E8%85%B0%23) `196.3K 🔥` `NEW`
1. [东方甄选前员工发声](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%89%8D%E5%91%98%E5%B7%A5%E5%8F%91%E5%A3%B0%23) `193.3K 🔥` `NEW`
1. [1名医生1分钟给3人看病26次](https://s.weibo.com/weibo?q=%231%E5%90%8D%E5%8C%BB%E7%94%9F1%E5%88%86%E9%92%9F%E7%BB%993%E4%BA%BA%E7%9C%8B%E7%97%8526%E6%AC%A1%23) `182.3K 🔥` `NEW`
1. [范丞丞看时团 鹿晗看NINEPERCENT (Fan Chengcheng watches Time Group and Lu Han watches NINEPERCENT)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9C%8B%E6%97%B6%E5%9B%A2%20%E9%B9%BF%E6%99%97%E7%9C%8BNINEPERCENT%23) `333.4K 🔥` `+40%`
1. [近20万坐月子婴儿床出现多只书虱](https://s.weibo.com/weibo?q=%23%E8%BF%9120%E4%B8%87%E5%9D%90%E6%9C%88%E5%AD%90%E5%A9%B4%E5%84%BF%E5%BA%8A%E5%87%BA%E7%8E%B0%E5%A4%9A%E5%8F%AA%E4%B9%A6%E8%99%B1%23) `331.9K 🔥` `+28%`
1. [约基奇打架](https://s.weibo.com/weibo?q=%23%E7%BA%A6%E5%9F%BA%E5%A5%87%E6%89%93%E6%9E%B6%23) `859.7K 🔥`
1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `337.4K 🔥`
1. [林子烨练成微笑唇了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E7%BB%83%E6%88%90%E5%BE%AE%E7%AC%91%E5%94%87%E4%BA%86%23) `306.6K 🔥`
1. [王菲在北京的一天是怎么度过的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%9A%84%E4%B8%80%E5%A4%A9%E6%98%AF%E6%80%8E%E4%B9%88%E5%BA%A6%E8%BF%87%E7%9A%84%23) `222.3K 🔥`
1. [白宫晚宴枪击事件枪手身亡 (Gunman dies in White House dinner shooting)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%E6%9E%AA%E6%89%8B%E8%BA%AB%E4%BA%A1%23) `1.2M 🔥` `-38%`
1. [南方又一轮降雨降温](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%8F%88%E4%B8%80%E8%BD%AE%E9%99%8D%E9%9B%A8%E9%99%8D%E6%B8%A9%23) `684.0K 🔥` `-25%`
1. [一袋糯米 全部暴露](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A2%8B%E7%B3%AF%E7%B1%B3%20%E5%85%A8%E9%83%A8%E6%9A%B4%E9%9C%B2%23) `684.0K 🔥` `-25%`
1. [羽毛球取消21分制](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E6%AF%9B%E7%90%83%E5%8F%96%E6%B6%8821%E5%88%86%E5%88%B6%23) `371.0K 🔥` `-50%`
1. [宁艺卓回怼粉丝](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%9B%9E%E6%80%BC%E7%B2%89%E4%B8%9D%23) `337.3K 🔥` `-35%`
1. [汕头金山中学放学场面](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E9%87%91%E5%B1%B1%E4%B8%AD%E5%AD%A6%E6%94%BE%E5%AD%A6%E5%9C%BA%E9%9D%A2%23) `321.1K 🔥` `-28%`
1. [李昀锐 孟子义 (Li Yunrui Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%20%E5%AD%9F%E5%AD%90%E4%B9%89%23) `308.3K 🔥` `-40%`
1. [特朗普公布枪手强闯安检录像 (Trump releases video of gunman breaking into security checkpoint)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%85%AC%E5%B8%83%E6%9E%AA%E6%89%8B%E5%BC%BA%E9%97%AF%E5%AE%89%E6%A3%80%E5%BD%95%E5%83%8F%23) `303.9K 🔥` `-48%`
1. [阚清子瘦好多](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%98%A6%E5%A5%BD%E5%A4%9A%23) `287.1K 🔥` `-36%`
1. [东方甄选4名主播同日宣布离职](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%894%E5%90%8D%E4%B8%BB%E6%92%AD%E5%90%8C%E6%97%A5%E5%AE%A3%E5%B8%83%E7%A6%BB%E8%81%8C%23) `249.4K 🔥` `-56%`
1. [王者荣耀农家乐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%86%9C%E5%AE%B6%E4%B9%90%23) `222.6K 🔥` `-43%`
1. [宁艺卓真正回应粉丝的语气](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%9C%9F%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%B2%89%E4%B8%9D%E7%9A%84%E8%AF%AD%E6%B0%94%23) `221.4K 🔥` `-50%`
1. [看上去很贵实际便宜又好玩的城市](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%B8%8A%E5%8E%BB%E5%BE%88%E8%B4%B5%E5%AE%9E%E9%99%85%E4%BE%BF%E5%AE%9C%E5%8F%88%E5%A5%BD%E7%8E%A9%E7%9A%84%E5%9F%8E%E5%B8%82%23) `220.3K 🔥` `-51%`
1. [粉色榴莲](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E6%A6%B4%E8%8E%B2%23) `208.9K 🔥` `-46%`
1. [俞敏洪回应多位主播离职](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9B%9E%E5%BA%94%E5%A4%9A%E4%BD%8D%E4%B8%BB%E6%92%AD%E7%A6%BB%E8%81%8C%23) `189.0K 🔥` `-58%`
1. [欧莱雅 穆祉丞](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%8E%B1%E9%9B%85%20%E7%A9%86%E7%A5%89%E4%B8%9E%23) `188.0K 🔥` `-58%`

Updated at 2026-04-26 14:26:45

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
