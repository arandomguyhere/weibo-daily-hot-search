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

1. [孙颖莎vs早田希娜 (Sun Yingsha vs Hina Hayata)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `2.0M 🔥` `NEW`
1. [23岁小伙开挖机滚落山崖遇难](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%B0%8F%E4%BC%99%E5%BC%80%E6%8C%96%E6%9C%BA%E6%BB%9A%E8%90%BD%E5%B1%B1%E5%B4%96%E9%81%87%E9%9A%BE%23) `759.4K 🔥` `NEW`
1. [汉坦病毒邮轮零号病人身份曝光](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E9%9B%B6%E5%8F%B7%E7%97%85%E4%BA%BA%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `519.5K 🔥` `NEW`
1. [蒯曼vs桥本帆乃香](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BCvs%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `492.8K 🔥` `NEW`
1. [14岁男生杀女同学案无期判决已生效](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E7%94%9F%E6%9D%80%E5%A5%B3%E5%90%8C%E5%AD%A6%E6%A1%88%E6%97%A0%E6%9C%9F%E5%88%A4%E5%86%B3%E5%B7%B2%E7%94%9F%E6%95%88%23) `320.6K 🔥` `NEW`
1. [孙颖莎3比0早田希娜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%940%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `318.8K 🔥` `NEW`
1. [谈莉娜给孩子做母乳手镯](https://s.weibo.com/weibo?q=%23%E8%B0%88%E8%8E%89%E5%A8%9C%E7%BB%99%E5%AD%A9%E5%AD%90%E5%81%9A%E6%AF%8D%E4%B9%B3%E6%89%8B%E9%95%AF%23) `297.0K 🔥` `NEW`
1. [浙江宣传谈OPPO争议文案](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E8%B0%88OPPO%E4%BA%89%E8%AE%AE%E6%96%87%E6%A1%88%23) `281.1K 🔥` `NEW`
1. [刘浩存陈都灵什么时候认识](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E9%99%88%E9%83%BD%E7%81%B5%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E8%AE%A4%E8%AF%86%23) `275.3K 🔥` `NEW`
1. [中国女团vs日本](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `2.7M 🔥` `+35%`
1. [王曼昱2比3张本美和 (Wang Manyu 2 to 3 Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B12%E6%AF%943%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `2.2M 🔥` `+1407%`
1. [王曼昱状态](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%8A%B6%E6%80%81%23) `1.1M 🔥` `+130%`
1. [小英道歉了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E9%81%93%E6%AD%89%E4%BA%86%23) `759.4K 🔥` `+62%`
1. [王俊凯说北京在我心里是首都](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%AF%B4%E5%8C%97%E4%BA%AC%E5%9C%A8%E6%88%91%E5%BF%83%E9%87%8C%E6%98%AF%E9%A6%96%E9%83%BD%23) `749.2K 🔥` `+66%`
1. [影院卫生间用手握香蕉西柚代指男女](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%AB%E7%94%9F%E9%97%B4%E7%94%A8%E6%89%8B%E6%8F%A1%E9%A6%99%E8%95%89%E8%A5%BF%E6%9F%9A%E4%BB%A3%E6%8C%87%E7%94%B7%E5%A5%B3%23) `569.2K 🔥` `+169%`
1. [邓超说孙俪带三个辛苦了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E8%AF%B4%E5%AD%99%E4%BF%AA%E5%B8%A6%E4%B8%89%E4%B8%AA%E8%BE%9B%E8%8B%A6%E4%BA%86%23) `466.1K 🔥` `+90%`
1. [给阿嬷的情书9.1分是什么概念](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A69.1%E5%88%86%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `322.6K 🔥` `+21%`
1. [宋亚轩国乐无双八首歌串烧](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%E5%85%AB%E9%A6%96%E6%AD%8C%E4%B8%B2%E7%83%A7%23) `306.0K 🔥` `+36%`
1. [何穗晒与儿子合影 (He Suishai takes a photo with his son)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E6%99%92%E4%B8%8E%E5%84%BF%E5%AD%90%E5%90%88%E5%BD%B1%23) `300.4K 🔥` `+33%`
1. [牛妈妈产下畸形双头小牛](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A6%88%E5%A6%88%E4%BA%A7%E4%B8%8B%E7%95%B8%E5%BD%A2%E5%8F%8C%E5%A4%B4%E5%B0%8F%E7%89%9B%23) `294.6K 🔥` `+26%`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `292.7K 🔥` `+41%`
1. [aespa出席婚礼现场表演 (aespa attended the wedding live performance)](https://s.weibo.com/weibo?q=%23aespa%E5%87%BA%E5%B8%AD%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E8%A1%A8%E6%BC%94%23) `289.2K 🔥` `+48%`
1. [妈妈摆了一地牛奶迎接我回家](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%91%86%E4%BA%86%E4%B8%80%E5%9C%B0%E7%89%9B%E5%A5%B6%E8%BF%8E%E6%8E%A5%E6%88%91%E5%9B%9E%E5%AE%B6%23) `287.7K 🔥` `+61%`
1. [虞书欣G社生图 (Yu Shuxin G social life picture)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `285.0K 🔥` `+55%`
1. [5克金饰成母亲节热销爆款 (5 grams of gold jewelry becomes a hot-selling item for Mother’s Day)](https://s.weibo.com/weibo?q=%235%E5%85%8B%E9%87%91%E9%A5%B0%E6%88%90%E6%AF%8D%E4%BA%B2%E8%8A%82%E7%83%AD%E9%94%80%E7%88%86%E6%AC%BE%23) `280.0K 🔥` `+45%`
1. [沈梦辰理想型张凌赫嫁给杜海涛](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E7%90%86%E6%83%B3%E5%9E%8B%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AB%81%E7%BB%99%E6%9D%9C%E6%B5%B7%E6%B6%9B%23) `277.3K 🔥` `+68%`
1. [DeepSeek被曝融资500亿 (DeepSeek was revealed to have raised 50 billion)](https://s.weibo.com/weibo?q=%23DeepSeek%E8%A2%AB%E6%9B%9D%E8%9E%8D%E8%B5%84500%E4%BA%BF%23) `272.9K 🔥` `+115%`
1. [刘宇宁进组 (Liu Yuning joins the group)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%9B%E7%BB%84%23) `271.6K 🔥` `+109%`
1. [中国潜水器发现深海生命绿洲](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E6%B0%B4%E5%99%A8%E5%8F%91%E7%8E%B0%E6%B7%B1%E6%B5%B7%E7%94%9F%E5%91%BD%E7%BB%BF%E6%B4%B2%23) `2.7M 🔥`
1. [一句句妈妈听哭了 (My mother cried after hearing each sentence)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E5%8F%A5%E5%A6%88%E5%A6%88%E5%90%AC%E5%93%AD%E4%BA%86%23) `2.3M 🔥`
1. [要对存钱有概念 (Have a concept of saving money)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AF%B9%E5%AD%98%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `1.8M 🔥`
1. [妈妈的平衡由自己定义](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9A%84%E5%B9%B3%E8%A1%A1%E7%94%B1%E8%87%AA%E5%B7%B1%E5%AE%9A%E4%B9%89%23) `1.8M 🔥`
1. [全公司最不会离职的人终于出现了 (The person who is least likely to leave the company finally appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%85%AC%E5%8F%B8%E6%9C%80%E4%B8%8D%E4%BC%9A%E7%A6%BB%E8%81%8C%E7%9A%84%E4%BA%BA%E7%BB%88%E4%BA%8E%E5%87%BA%E7%8E%B0%E4%BA%86%23) `1.4M 🔥`
1. [网传一念江南黄了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E9%BB%84%E4%BA%86%23) `540.2K 🔥`
1. [蔡文静闪现到妈妈身边了](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E9%97%AA%E7%8E%B0%E5%88%B0%E5%A6%88%E5%A6%88%E8%BA%AB%E8%BE%B9%E4%BA%86%23) `317.3K 🔥`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `312.2K 🔥`
1. [越南男子不慎卷入粉碎机身亡](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E7%94%B7%E5%AD%90%E4%B8%8D%E6%85%8E%E5%8D%B7%E5%85%A5%E7%B2%89%E7%A2%8E%E6%9C%BA%E8%BA%AB%E4%BA%A1%23) `306.7K 🔥`
1. [三星堆首次发现陨铁器 (Iron meteorite discovered in Sanxingdui for the first time)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%A0%86%E9%A6%96%E6%AC%A1%E5%8F%91%E7%8E%B0%E9%99%A8%E9%93%81%E5%99%A8%23) `304.5K 🔥`
1. [王俊凯戴耳机这一下](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%88%B4%E8%80%B3%E6%9C%BA%E8%BF%99%E4%B8%80%E4%B8%8B%23) `295.8K 🔥`
1. [陈赫回应邀请李晨上五哈 (Chen He responded by inviting Li Chen to Wuha)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%82%80%E8%AF%B7%E6%9D%8E%E6%99%A8%E4%B8%8A%E4%BA%94%E5%93%88%23) `291.4K 🔥`
1. [这下是真不认识张钧甯了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E6%98%AF%E7%9C%9F%E4%B8%8D%E8%AE%A4%E8%AF%86%E5%BC%A0%E9%92%A7%E7%94%AF%E4%BA%86%23) `285.9K 🔥`
1. [中国女团vs日本对阵名单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E6%97%A5%E6%9C%AC%E5%AF%B9%E9%98%B5%E5%90%8D%E5%8D%95%23) `283.3K 🔥`
1. [金银价格大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E6%B6%A8%23) `277.7K 🔥`
1. [王曼昱vs张本美和 (Wang Manyu vs Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `1.2M 🔥` `-60%`
1. [虞书欣谷爱凌同框](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%8C%E6%A1%86%23) `321.2K 🔥` `-29%`
1. [曝小英带货佣金](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E8%8B%B1%E5%B8%A6%E8%B4%A7%E4%BD%A3%E9%87%91%23) `315.7K 🔥` `-31%`
1. [45岁独身男子离世15万存款被转走](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%8B%AC%E8%BA%AB%E7%94%B7%E5%AD%90%E7%A6%BB%E4%B8%9615%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E8%BD%AC%E8%B5%B0%23) `313.5K 🔥` `-39%`
1. [世乒赛 (World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%23) `309.7K 🔥` `-83%`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `308.1K 🔥` `-35%`
1. [公厕文学](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8E%95%E6%96%87%E5%AD%A6%23) `301.7K 🔥` `-33%`
1. [蒜苔拼豆](https://s.weibo.com/weibo?q=%23%E8%92%9C%E8%8B%94%E6%8B%BC%E8%B1%86%23) `299.6K 🔥` `-34%`

Updated at 2026-05-10 20:00:34

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
