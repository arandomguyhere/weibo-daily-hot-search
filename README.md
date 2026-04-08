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

1. [樊振东放弃伦敦世乒赛资格 (Fan Zhendong gives up qualification for World Table Tennis Championships in London)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%94%BE%E5%BC%83%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E8%B5%84%E6%A0%BC%23) `1.5M 🔥` `NEW`
1. [春日经济新图景](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E7%BB%8F%E6%B5%8E%E6%96%B0%E5%9B%BE%E6%99%AF%23) `740.9K 🔥` `NEW`
1. [日本73岁老人来中国求职](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC73%E5%B2%81%E8%80%81%E4%BA%BA%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%B1%82%E8%81%8C%23) `299.8K 🔥` `NEW`
1. [浪姐白买版权](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%99%BD%E4%B9%B0%E7%89%88%E6%9D%83%23) `240.7K 🔥` `NEW`
1. [秦志戬回应伦敦世乒赛名单](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BF%97%E6%88%AC%E5%9B%9E%E5%BA%94%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%90%8D%E5%8D%95%23) `218.3K 🔥` `NEW`
1. [江语晨 抚养权官司](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E6%8A%9A%E5%85%BB%E6%9D%83%E5%AE%98%E5%8F%B8%23) `216.2K 🔥` `NEW`
1. [大大大五座NX8售14.99万起](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A4%A7%E5%A4%A7%E4%BA%94%E5%BA%A7NX8%E5%94%AE14.99%E4%B8%87%E8%B5%B7%23) `205.7K 🔥` `NEW`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `204.5K 🔥` `NEW`
1. [国乒伦敦世乒赛名单](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%90%8D%E5%8D%95%23) `184.5K 🔥` `NEW`
1. [婆媳长期一起生活接连患乳腺癌](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%AA%B3%E9%95%BF%E6%9C%9F%E4%B8%80%E8%B5%B7%E7%94%9F%E6%B4%BB%E6%8E%A5%E8%BF%9E%E6%82%A3%E4%B9%B3%E8%85%BA%E7%99%8C%23) `183.7K 🔥` `NEW`
1. [TF四代 进入R1SE的6个2大时代 (The fourth generation of TF enters the 6 2 major eras of R1SE)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E8%BF%9B%E5%85%A5R1SE%E7%9A%846%E4%B8%AA2%E5%A4%A7%E6%97%B6%E4%BB%A3%23) `148.4K 🔥` `NEW`
1. [男子为杀发小蹲守两月多次模拟](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BA%E6%9D%80%E5%8F%91%E5%B0%8F%E8%B9%B2%E5%AE%88%E4%B8%A4%E6%9C%88%E5%A4%9A%E6%AC%A1%E6%A8%A1%E6%8B%9F%23) `143.4K 🔥` `NEW`
1. [桃花坞](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%23) `143.4K 🔥` `NEW`
1. [阿里全员信](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%85%A8%E5%91%98%E4%BF%A1%23) `133.0K 🔥` `NEW`
1. [电动自行车品牌集体涨价](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%A8%E8%87%AA%E8%A1%8C%E8%BD%A6%E5%93%81%E7%89%8C%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%23) `127.9K 🔥` `NEW`
1. [车银优已补缴税款](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E9%93%B6%E4%BC%98%E5%B7%B2%E8%A1%A5%E7%BC%B4%E7%A8%8E%E6%AC%BE%23) `125.7K 🔥` `NEW`
1. [时代峰峻声明](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A3%B0%E6%98%8E%23) `115.7K 🔥` `NEW`
1. [首批医保便捷支付地区名单发布](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%89%B9%E5%8C%BB%E4%BF%9D%E4%BE%BF%E6%8D%B7%E6%94%AF%E4%BB%98%E5%9C%B0%E5%8C%BA%E5%90%8D%E5%8D%95%E5%8F%91%E5%B8%83%23) `113.8K 🔥` `NEW`
1. [停火生效后伊朗两处岛屿发生数次爆炸](https://s.weibo.com/weibo?q=%23%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%E5%90%8E%E4%BC%8A%E6%9C%97%E4%B8%A4%E5%A4%84%E5%B2%9B%E5%B1%BF%E5%8F%91%E7%94%9F%E6%95%B0%E6%AC%A1%E7%88%86%E7%82%B8%23) `112.9K 🔥` `NEW`
1. [王楚钦林诗栋领衔国乒男团](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E9%A2%86%E8%A1%94%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%23) `110.8K 🔥` `NEW`
1. [宋雨琦 好久不见很爱你们 (Song Yuqi, long time no see. I love you very much.)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E5%A5%BD%E4%B9%85%E4%B8%8D%E8%A7%81%E5%BE%88%E7%88%B1%E4%BD%A0%E4%BB%AC%23) `102.6K 🔥` `NEW`
1. [钢铁森林 不删戏份不魔改小说](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%20%E4%B8%8D%E5%88%A0%E6%88%8F%E4%BB%BD%E4%B8%8D%E9%AD%94%E6%94%B9%E5%B0%8F%E8%AF%B4%23) `101.0K 🔥` `NEW`
1. [晒娃被网友催赶紧去医院宝妈发声](https://s.weibo.com/weibo?q=%23%E6%99%92%E5%A8%83%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%82%AC%E8%B5%B6%E7%B4%A7%E5%8E%BB%E5%8C%BB%E9%99%A2%E5%AE%9D%E5%A6%88%E5%8F%91%E5%A3%B0%23) `92.9K 🔥` `NEW`
1. [王皓说王楚钦状态精神情绪都很好](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%8A%B6%E6%80%81%E7%B2%BE%E7%A5%9E%E6%83%85%E7%BB%AA%E9%83%BD%E5%BE%88%E5%A5%BD%23) `88.7K 🔥` `NEW`
1. [原来猫咪也有平头](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%8C%AB%E5%92%AA%E4%B9%9F%E6%9C%89%E5%B9%B3%E5%A4%B4%23) `88.1K 🔥` `NEW`
1. [唐艺昕李小冉练歌快疯了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%9D%8E%E5%B0%8F%E5%86%89%E7%BB%83%E6%AD%8C%E5%BF%AB%E7%96%AF%E4%BA%86%23) `87.2K 🔥` `NEW`
1. [iG战胜NIP](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CNIP%23) `87.2K 🔥` `NEW`
1. [马琳回应伦敦世乒赛名单](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E5%9B%9E%E5%BA%94%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%90%8D%E5%8D%95%23) `85.8K 🔥` `NEW`
1. [GEN战胜T1](https://s.weibo.com/weibo?q=%23GEN%E6%88%98%E8%83%9CT1%23) `85.5K 🔥` `NEW`
1. [哪吒2票房升至全球第4 (Ne Zha 2 box office rises to 4th in the world)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%922%E7%A5%A8%E6%88%BF%E5%8D%87%E8%87%B3%E5%85%A8%E7%90%83%E7%AC%AC4%23) `880.3K 🔥` `+205%`
1. [伊朗称已发动100波打击行动](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B7%B2%E5%8F%91%E5%8A%A8100%E6%B3%A2%E6%89%93%E5%87%BB%E8%A1%8C%E5%8A%A8%23) `315.4K 🔥` `+34%`
1. [失业的人可以从大冰这个角度找到机会 (Unemployed people can find opportunities from the perspective of Dabing)](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E7%9A%84%E4%BA%BA%E5%8F%AF%E4%BB%A5%E4%BB%8E%E5%A4%A7%E5%86%B0%E8%BF%99%E4%B8%AA%E8%A7%92%E5%BA%A6%E6%89%BE%E5%88%B0%E6%9C%BA%E4%BC%9A%23) `217.9K 🔥` `+114%`
1. [刘思维当爸爸了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `205.1K 🔥` `+23%`
1. [人民币上有个哭出来的笑脸](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E4%B8%8A%E6%9C%89%E4%B8%AA%E5%93%AD%E5%87%BA%E6%9D%A5%E7%9A%84%E7%AC%91%E8%84%B8%23) `91.5K 🔥` `+28%`
1. [住酒店不带毛巾的人天塌了 (If you stay in a hotel without a towel, the sky is falling.)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E4%B8%8D%E5%B8%A6%E6%AF%9B%E5%B7%BE%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `275.2K 🔥`
1. [迪丽热巴花魁造型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8A%B1%E9%AD%81%E9%80%A0%E5%9E%8B%23) `214.2K 🔥`
1. [特朗普称能轻易恢复对伊朗动武](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%83%BD%E8%BD%BB%E6%98%93%E6%81%A2%E5%A4%8D%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8A%A8%E6%AD%A6%23) `214.1K 🔥`
1. [金子涵说的是谁](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%23) `183.8K 🔥`
1. [悉尼偶遇侯佩岑一家四口](https://s.weibo.com/weibo?q=%23%E6%82%89%E5%B0%BC%E5%81%B6%E9%81%87%E4%BE%AF%E4%BD%A9%E5%B2%91%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%23) `137.5K 🔥`
1. [王濛 组内唯一大vocal (Wang Meng is the only big vocalist in the group)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E7%BB%84%E5%86%85%E5%94%AF%E4%B8%80%E5%A4%A7vocal%23) `129.6K 🔥`
1. [任敏拍过鹿晗勋章MV](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E6%8B%8D%E8%BF%87%E9%B9%BF%E6%99%97%E5%8B%8B%E7%AB%A0MV%23) `92.9K 🔥`
1. [阚清子团未脱稿被赵兆狠批 (Kan Qingzi Tuan was severely criticized by Zhao Zhao for not completing the manuscript)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E6%9C%AA%E8%84%B1%E7%A8%BF%E8%A2%AB%E8%B5%B5%E5%85%86%E7%8B%A0%E6%89%B9%23) `289.1K 🔥` `-31%`
1. [跟着白鹿住必住](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E7%99%BD%E9%B9%BF%E4%BD%8F%E5%BF%85%E4%BD%8F%23) `278.4K 🔥` `-48%`
1. [伊朗拉万炼油厂发生爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%89%E4%B8%87%E7%82%BC%E6%B2%B9%E5%8E%82%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `252.1K 🔥` `-44%`
1. [物业大撤退 (Real estate retreat)](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E5%A4%A7%E6%92%A4%E9%80%80%23) `216.8K 🔥` `-61%`
1. [十日终焉官微 用户1231 (Ten Days End Yan Official WeChat User 1231)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AE%98%E5%BE%AE%20%E7%94%A8%E6%88%B71231%23) `215.1K 🔥` `-30%`
1. [电费刺客找到了 (The electricity bill assassin was found)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%B4%B9%E5%88%BA%E5%AE%A2%E6%89%BE%E5%88%B0%E4%BA%86%23) `182.9K 🔥` `-42%`
1. [中方回应促使伊朗同意停火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BF%83%E4%BD%BF%E4%BC%8A%E6%9C%97%E5%90%8C%E6%84%8F%E5%81%9C%E7%81%AB%23) `112.9K 🔥` `-67%`
1. [B站将上线播放页暂停广告 (Bilibili will launch an online play page to pause advertisements)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%B0%86%E4%B8%8A%E7%BA%BF%E6%92%AD%E6%94%BE%E9%A1%B5%E6%9A%82%E5%81%9C%E5%B9%BF%E5%91%8A%23) `86.7K 🔥` `-92%`
1. [大熊猫家美大崽去世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%AE%B6%E7%BE%8E%E5%A4%A7%E5%B4%BD%E5%8E%BB%E4%B8%96%23) `86.6K 🔥` `-88%`

Updated at 2026-04-08 20:44:46

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
