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

1. [你会选择用AI复活逝去的亲人吗 (Would you choose to use AI to resurrect your deceased relatives?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BC%9A%E9%80%89%E6%8B%A9%E7%94%A8AI%E5%A4%8D%E6%B4%BB%E9%80%9D%E5%8E%BB%E7%9A%84%E4%BA%B2%E4%BA%BA%E5%90%97%23) `18.1K 🔥` `NEW`
1. [郭艾伦被诈骗近千万](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E8%AF%88%E9%AA%97%E8%BF%91%E5%8D%83%E4%B8%87%23) `84.6K 🔥`
1. [王楚钦夺冠 (Wang Chuqin won the championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E5%86%A0%23) `63.6K 🔥`
1. [他们是中国人共同追的星 (They are the stars that Chinese people chase after)](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%AC%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%85%B1%E5%90%8C%E8%BF%BD%E7%9A%84%E6%98%9F%23) `51.0K 🔥`
1. [周杰伦3小时演唱会实唱不足90分钟](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A63%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%9E%E5%94%B1%E4%B8%8D%E8%B6%B390%E5%88%86%E9%92%9F%23) `48.5K 🔥`
1. [妈妈不知儿子去世跟AI儿子聊了1年](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8D%E7%9F%A5%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%B7%9FAI%E5%84%BF%E5%AD%90%E8%81%8A%E4%BA%861%E5%B9%B4%23) `36.0K 🔥`
1. [女子回应被抢后开车撞劫匪致1死2伤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8A%A2%E5%90%8E%E5%BC%80%E8%BD%A6%E6%92%9E%E5%8A%AB%E5%8C%AA%E8%87%B41%E6%AD%BB2%E4%BC%A4%23) `33.6K 🔥`
1. [TES举报宁王 (TES reports King Ning)](https://s.weibo.com/weibo?q=%23TES%E4%B8%BE%E6%8A%A5%E5%AE%81%E7%8E%8B%23) `31.6K 🔥`
1. [快递食品被血污染换箱在掩盖什么](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E9%A3%9F%E5%93%81%E8%A2%AB%E8%A1%80%E6%B1%A1%E6%9F%93%E6%8D%A2%E7%AE%B1%E5%9C%A8%E6%8E%A9%E7%9B%96%E4%BB%80%E4%B9%88%23) `30.8K 🔥`
1. [食客拆台莫氏鸡煲鸡带毛冷冻 (Diners take issue with Moh's Chicken Claypot Chicken Frozen with Feathers)](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E5%AE%A2%E6%8B%86%E5%8F%B0%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E9%B8%A1%E5%B8%A6%E6%AF%9B%E5%86%B7%E5%86%BB%23) `28.4K 🔥`
1. [黄晓明已去交警部门接受处罚 (Huang Xiaoming has gone to the traffic police department to accept punishment)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B7%B2%E5%8E%BB%E4%BA%A4%E8%AD%A6%E9%83%A8%E9%97%A8%E6%8E%A5%E5%8F%97%E5%A4%84%E7%BD%9A%23) `28.3K 🔥`
1. [特朗普透露美军营救飞行员细节 (Trump reveals details of US military rescue of pilot)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%80%8F%E9%9C%B2%E7%BE%8E%E5%86%9B%E8%90%A5%E6%95%91%E9%A3%9E%E8%A1%8C%E5%91%98%E7%BB%86%E8%8A%82%23) `28.3K 🔥`
1. [200万火锅店营业额990](https://s.weibo.com/weibo?q=%23200%E4%B8%87%E7%81%AB%E9%94%85%E5%BA%97%E8%90%A5%E4%B8%9A%E9%A2%9D990%23) `28.2K 🔥`
1. [新加坡偶遇唐嫣罗晋一家三口 (Encounter with Tang Yan and Luo Jin’s family of three in Singapore)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%81%B6%E9%81%87%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%23) `26.4K 🔥`
1. [缓解内耗的解药](https://s.weibo.com/weibo?q=%23%E7%BC%93%E8%A7%A3%E5%86%85%E8%80%97%E7%9A%84%E8%A7%A3%E8%8D%AF%23) `26.4K 🔥`
1. [谢娜抚养权判给谁了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `24.8K 🔥`
1. [博物馆回应曹操墓前摆满布洛芬 (Museum responds to Cao Cao’s tomb being filled with ibuprofen)](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E7%89%A9%E9%A6%86%E5%9B%9E%E5%BA%94%E6%9B%B9%E6%93%8D%E5%A2%93%E5%89%8D%E6%91%86%E6%BB%A1%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `24.0K 🔥`
1. [王楚钦距大满贯只差奥运冠军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B7%9D%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%8F%AA%E5%B7%AE%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%23) `22.6K 🔥`
1. [伊朗称美军营救飞行员任务失败 (Iran says US military mission to rescue pilot failed)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%86%9B%E8%90%A5%E6%95%91%E9%A3%9E%E8%A1%8C%E5%91%98%E4%BB%BB%E5%8A%A1%E5%A4%B1%E8%B4%A5%23) `20.6K 🔥`
1. [王楚钦vs松岛辉空 (Wang Chuqin vs. Matsushima Terukong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `19.6K 🔥`
1. [女生托闺蜜照顾5只猫不料全被饿死](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%89%98%E9%97%BA%E8%9C%9C%E7%85%A7%E9%A1%BE5%E5%8F%AA%E7%8C%AB%E4%B8%8D%E6%96%99%E5%85%A8%E8%A2%AB%E9%A5%BF%E6%AD%BB%23) `19.4K 🔥`
1. [撒贝宁 章子怡 (Sa Beining Zhang Ziyi)](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%20%E7%AB%A0%E5%AD%90%E6%80%A1%23) `19.4K 🔥`
1. [女子晒婆婆升级当奶奶后三天变化](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%99%92%E5%A9%86%E5%A9%86%E5%8D%87%E7%BA%A7%E5%BD%93%E5%A5%B6%E5%A5%B6%E5%90%8E%E4%B8%89%E5%A4%A9%E5%8F%98%E5%8C%96%23) `19.4K 🔥`
1. [女子长期虐待2岁儿子还拍视频 (Woman abuses her 2-year-old son for a long time and makes video)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%95%BF%E6%9C%9F%E8%99%90%E5%BE%852%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%98%E6%8B%8D%E8%A7%86%E9%A2%91%23) `19.1K 🔥`
1. [孙颖莎王楚钦顶峰相见 (Sun Yingsha and Wang Chuqin meet at the top)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%A1%B6%E5%B3%B0%E7%9B%B8%E8%A7%81%23) `19.0K 🔥`
1. [考古曾沛慈 (Archeology Zeng Peici)](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%8F%A4%E6%9B%BE%E6%B2%9B%E6%85%88%23) `18.7K 🔥`
1. [王楚钦孙颖莎世界杯冠军合影 (Group photo of Wang Chuqin and Sun Yingsha World Cup champions)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E5%90%88%E5%BD%B1%23) `18.7K 🔥`
1. [SEVENTEEN全员续约 (All SEVENTEEN members renew their contracts)](https://s.weibo.com/weibo?q=%23SEVENTEEN%E5%85%A8%E5%91%98%E7%BB%AD%E7%BA%A6%23) `18.7K 🔥`
1. [被伊朗击落美军机现场画面](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%BC%8A%E6%9C%97%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9B%E6%9C%BA%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `18.3K 🔥`
1. [孙俪吴慷仁演技 高手过招](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%90%B4%E6%85%B7%E4%BB%81%E6%BC%94%E6%8A%80%20%E9%AB%98%E6%89%8B%E8%BF%87%E6%8B%9B%23) `18.2K 🔥`
1. [美国和伊朗继续搜寻美军飞行员](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%92%8C%E4%BC%8A%E6%9C%97%E7%BB%A7%E7%BB%AD%E6%90%9C%E5%AF%BB%E7%BE%8E%E5%86%9B%E9%A3%9E%E8%A1%8C%E5%91%98%23) `18.2K 🔥`
1. [网传浪姐7一公选曲歌单 (Rumor has it that Sister Lang’s 7-1 song list has been released online)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E4%B8%80%E5%85%AC%E9%80%89%E6%9B%B2%E6%AD%8C%E5%8D%95%23) `18.2K 🔥`
1. [张凌赫工作室郑重声明 (Zhang Linghe Studio solemnly declares)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%83%91%E9%87%8D%E5%A3%B0%E6%98%8E%23) `18.2K 🔥`
1. [伊朗发动对美以第96波打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E5%AF%B9%E7%BE%8E%E4%BB%A5%E7%AC%AC96%E6%B3%A2%E6%89%93%E5%87%BB%23) `18.1K 🔥`
1. [孙俪回应梅婷发文](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E6%A2%85%E5%A9%B7%E5%8F%91%E6%96%87%23) `18.1K 🔥`
1. [黄晓明就带娃骑行道歉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B0%B1%E5%B8%A6%E5%A8%83%E9%AA%91%E8%A1%8C%E9%81%93%E6%AD%89%23) `18.1K 🔥`
1. [孙权张辽千年宿敌祭品中实现和解](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%83%E5%BC%A0%E8%BE%BD%E5%8D%83%E5%B9%B4%E5%AE%BF%E6%95%8C%E7%A5%AD%E5%93%81%E4%B8%AD%E5%AE%9E%E7%8E%B0%E5%92%8C%E8%A7%A3%23) `18.1K 🔥`
1. [穆祉丞太湖湾音乐节演出 (Mu Zhicheng performs at Taihu Bay Music Festival)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%A4%AA%E6%B9%96%E6%B9%BE%E9%9F%B3%E4%B9%90%E8%8A%82%E6%BC%94%E5%87%BA%23) `18.1K 🔥`
1. [鞠婧祎露芜衣狐系图鉴 (Ju Jingyilu Wuyi fox illustrated book)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%9C%B2%E8%8A%9C%E8%A1%A3%E7%8B%90%E7%B3%BB%E5%9B%BE%E9%89%B4%23) `18.1K 🔥`
1. [孙颖莎填补长达53年空白 (Sun Yingsha fills the gap of 53 years)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A1%AB%E8%A1%A5%E9%95%BF%E8%BE%BE53%E5%B9%B4%E7%A9%BA%E7%99%BD%23) `18.1K 🔥`
1. [大四学生一天上了20多座坟 (Senior students visited more than 20 graves in one day)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9B%9B%E5%AD%A6%E7%94%9F%E4%B8%80%E5%A4%A9%E4%B8%8A%E4%BA%8620%E5%A4%9A%E5%BA%A7%E5%9D%9F%23) `18.1K 🔥`
1. [kspo栏杆](https://s.weibo.com/weibo?q=%23kspo%E6%A0%8F%E6%9D%86%23) `18.1K 🔥`
1. [很难不被鞠婧祎萌到 (It’s hard not to be attracted by Ju Jingyi)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E9%9A%BE%E4%B8%8D%E8%A2%AB%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%90%8C%E5%88%B0%23) `18.1K 🔥`
1. [挽救计划](https://s.weibo.com/weibo?q=%23%E6%8C%BD%E6%95%91%E8%AE%A1%E5%88%92%23) `18.1K 🔥`
1. [Tian哭了](https://s.weibo.com/weibo?q=%23Tian%E5%93%AD%E4%BA%86%23) `18.1K 🔥`
1. [孙怡浪姐把脚踩在椅子上 (Sister Sun Yilang stepped on the chair)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%B5%AA%E5%A7%90%E6%8A%8A%E8%84%9A%E8%B8%A9%E5%9C%A8%E6%A4%85%E5%AD%90%E4%B8%8A%23) `40.3K 🔥` `-23%`
1. [孙颖莎冠军 (Sun Yingsha champion)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%A0%E5%86%9B%23) `18.3K 🔥` `-26%`
1. [陈赫女儿是鹿晗干女儿](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%A5%B3%E5%84%BF%E6%98%AF%E9%B9%BF%E6%99%97%E5%B9%B2%E5%A5%B3%E5%84%BF%23) `18.3K 🔥` `-24%`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `18.1K 🔥` `-36%`
1. [邱天自曝进组十日终焉 (Qiu Tian revealed that he had only been in the group for ten days)](https://s.weibo.com/weibo?q=%23%E9%82%B1%E5%A4%A9%E8%87%AA%E6%9B%9D%E8%BF%9B%E7%BB%84%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `18.1K 🔥` `-36%`

Updated at 2026-04-06 04:17:06

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
