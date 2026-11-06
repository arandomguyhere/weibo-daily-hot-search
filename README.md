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

1. [DK输BLG后台镜头曝光](https://s.weibo.com/weibo?q=%23DK%E8%BE%93BLG%E5%90%8E%E5%8F%B0%E9%95%9C%E5%A4%B4%E6%9B%9D%E5%85%89%23) `1.2M 🔥` `NEW`
1. [2027放假 上二休一上二休二](https://s.weibo.com/weibo?q=%232027%E6%94%BE%E5%81%87%20%E4%B8%8A%E4%BA%8C%E4%BC%91%E4%B8%80%E4%B8%8A%E4%BA%8C%E4%BC%91%E4%BA%8C%23) `1.2M 🔥` `NEW`
1. [中国是超级卖家也是超级买家](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%98%AF%E8%B6%85%E7%BA%A7%E5%8D%96%E5%AE%B6%E4%B9%9F%E6%98%AF%E8%B6%85%E7%BA%A7%E4%B9%B0%E5%AE%B6%23) `684.8K 🔥` `NEW`
1. [54岁大哥靠AI短剧还清负债](https://s.weibo.com/weibo?q=%2354%E5%B2%81%E5%A4%A7%E5%93%A5%E9%9D%A0AI%E7%9F%AD%E5%89%A7%E8%BF%98%E6%B8%85%E8%B4%9F%E5%80%BA%23) `518.8K 🔥` `NEW`
1. [蔡天凤遭碎尸案死因查明](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E9%81%AD%E7%A2%8E%E5%B0%B8%E6%A1%88%E6%AD%BB%E5%9B%A0%E6%9F%A5%E6%98%8E%23) `473.3K 🔥` `NEW`
1. [马天宇连何老师都回避那张萌算很特殊](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%BF%9E%E4%BD%95%E8%80%81%E5%B8%88%E9%83%BD%E5%9B%9E%E9%81%BF%E9%82%A3%E5%BC%A0%E8%90%8C%E7%AE%97%E5%BE%88%E7%89%B9%E6%AE%8A%23) `468.2K 🔥` `NEW`
1. [BLG或与T1争决赛门票](https://s.weibo.com/weibo?q=%23BLG%E6%88%96%E4%B8%8ET1%E4%BA%89%E5%86%B3%E8%B5%9B%E9%97%A8%E7%A5%A8%23) `461.0K 🔥` `NEW`
1. [4岁女童患罕见病皮肤一碰就破](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E6%82%A3%E7%BD%95%E8%A7%81%E7%97%85%E7%9A%AE%E8%82%A4%E4%B8%80%E7%A2%B0%E5%B0%B1%E7%A0%B4%23) `388.3K 🔥` `NEW`
1. [哈工大研究生回长沙卖气球](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B7%A5%E5%A4%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E5%9B%9E%E9%95%BF%E6%B2%99%E5%8D%96%E6%B0%94%E7%90%83%23) `340.3K 🔥` `NEW`
1. [天娱被指让许飞赔三百万](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A8%B1%E8%A2%AB%E6%8C%87%E8%AE%A9%E8%AE%B8%E9%A3%9E%E8%B5%94%E4%B8%89%E7%99%BE%E4%B8%87%23) `330.6K 🔥` `NEW`
1. [袁成杰说会努力还债](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%88%90%E6%9D%B0%E8%AF%B4%E4%BC%9A%E5%8A%AA%E5%8A%9B%E8%BF%98%E5%80%BA%23) `322.8K 🔥` `NEW`
1. [陆翊前两年还和文吉儿有联系](https://s.weibo.com/weibo?q=%23%E9%99%86%E7%BF%8A%E5%89%8D%E4%B8%A4%E5%B9%B4%E8%BF%98%E5%92%8C%E6%96%87%E5%90%89%E5%84%BF%E6%9C%89%E8%81%94%E7%B3%BB%23) `310.5K 🔥` `NEW`
1. [张凌赫从查无此人到顶流只用了半年](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BB%8E%E6%9F%A5%E6%97%A0%E6%AD%A4%E4%BA%BA%E5%88%B0%E9%A1%B6%E6%B5%81%E5%8F%AA%E7%94%A8%E4%BA%86%E5%8D%8A%E5%B9%B4%23) `307.1K 🔥` `NEW`
1. [教师招聘考试一视同仁](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E6%8B%9B%E8%81%98%E8%80%83%E8%AF%95%E4%B8%80%E8%A7%86%E5%90%8C%E4%BB%81%23) `300.6K 🔥` `NEW`
1. [所有人都认为张萌老公才是公司老板](https://s.weibo.com/weibo?q=%23%E6%89%80%E6%9C%89%E4%BA%BA%E9%83%BD%E8%AE%A4%E4%B8%BA%E5%BC%A0%E8%90%8C%E8%80%81%E5%85%AC%E6%89%8D%E6%98%AF%E5%85%AC%E5%8F%B8%E8%80%81%E6%9D%BF%23) `293.9K 🔥` `NEW`
1. [管泽元发文5比0LCK有感觉吗](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E5%8F%91%E6%96%875%E6%AF%940LCK%E6%9C%89%E6%84%9F%E8%A7%89%E5%90%97%23) `290.2K 🔥` `NEW`
1. [桑德斯呼吁暂停AI数据中心](https://s.weibo.com/weibo?q=%23%E6%A1%91%E5%BE%B7%E6%96%AF%E5%91%BC%E5%90%81%E6%9A%82%E5%81%9CAI%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%23) `285.4K 🔥` `NEW`
1. [盾构机不该成为中印心结](https://s.weibo.com/weibo?q=%23%E7%9B%BE%E6%9E%84%E6%9C%BA%E4%B8%8D%E8%AF%A5%E6%88%90%E4%B8%BA%E4%B8%AD%E5%8D%B0%E5%BF%83%E7%BB%93%23) `283.7K 🔥` `NEW`
1. [网友称爷爷在康熙年间当官](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E7%88%B7%E7%88%B7%E5%9C%A8%E5%BA%B7%E7%86%99%E5%B9%B4%E9%97%B4%E5%BD%93%E5%AE%98%23) `276.1K 🔥` `NEW`
1. [九寨沟冲突事件谁在煽动代际对立](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E5%86%B2%E7%AA%81%E4%BA%8B%E4%BB%B6%E8%B0%81%E5%9C%A8%E7%85%BD%E5%8A%A8%E4%BB%A3%E9%99%85%E5%AF%B9%E7%AB%8B%23) `271.6K 🔥` `NEW`
1. [韩国解说看BLG三比零DK快哭了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%A7%A3%E8%AF%B4%E7%9C%8BBLG%E4%B8%89%E6%AF%94%E9%9B%B6DK%E5%BF%AB%E5%93%AD%E4%BA%86%23) `269.5K 🔥` `NEW`
1. [荣耀700](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80700%23) `268.1K 🔥` `NEW`
1. [王源跨年场官宣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%B7%A8%E5%B9%B4%E5%9C%BA%E5%AE%98%E5%AE%A3%23) `267.6K 🔥` `NEW`
1. [BLG战胜DK](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CDK%23) `255.8K 🔥` `NEW`
1. [尚公主居然拍了156天](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%B1%85%E7%84%B6%E6%8B%8D%E4%BA%86156%E5%A4%A9%23) `243.3K 🔥` `NEW`
1. [癌症晚期男子在医院门口昏倒后离世](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%E7%94%B7%E5%AD%90%E5%9C%A8%E5%8C%BB%E9%99%A2%E9%97%A8%E5%8F%A3%E6%98%8F%E5%80%92%E5%90%8E%E7%A6%BB%E4%B8%96%23) `238.4K 🔥` `NEW`
1. [Zeus留言Bin用皮肤](https://s.weibo.com/weibo?q=%23Zeus%E7%95%99%E8%A8%80Bin%E7%94%A8%E7%9A%AE%E8%82%A4%23) `236.0K 🔥` `NEW`
1. [无薪招跟岗教师小学转正后工资1900](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%96%AA%E6%8B%9B%E8%B7%9F%E5%B2%97%E6%95%99%E5%B8%88%E5%B0%8F%E5%AD%A6%E8%BD%AC%E6%AD%A3%E5%90%8E%E5%B7%A5%E8%B5%841900%23) `214.3K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `206.2K 🔥` `NEW`
1. [孙俪晒邓超五哈嘉年华后状态](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%99%92%E9%82%93%E8%B6%85%E4%BA%94%E5%93%88%E5%98%89%E5%B9%B4%E5%8D%8E%E5%90%8E%E7%8A%B6%E6%80%81%23) `203.7K 🔥` `NEW`
1. [袁成杰对赌败诉担1210万元债务](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%88%90%E6%9D%B0%E5%AF%B9%E8%B5%8C%E8%B4%A5%E8%AF%89%E6%8B%851210%E4%B8%87%E5%85%83%E5%80%BA%E5%8A%A1%23) `202.2K 🔥` `NEW`
1. [姜妍居然可以做无油版烧排骨](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%B1%85%E7%84%B6%E5%8F%AF%E4%BB%A5%E5%81%9A%E6%97%A0%E6%B2%B9%E7%89%88%E7%83%A7%E6%8E%92%E9%AA%A8%23) `190.6K 🔥` `NEW`
1. [结婚两周年精心打扮却淋雨](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E4%B8%A4%E5%91%A8%E5%B9%B4%E7%B2%BE%E5%BF%83%E6%89%93%E6%89%AE%E5%8D%B4%E6%B7%8B%E9%9B%A8%23) `183.8K 🔥` `NEW`
1. [赵丽颖金鸡公式照](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%87%91%E9%B8%A1%E5%85%AC%E5%BC%8F%E7%85%A7%23) `180.3K 🔥` `NEW`
1. [谢帝新歌cue严浩翔](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%B8%9D%E6%96%B0%E6%AD%8Ccue%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `174.2K 🔥` `NEW`
1. [王子璇问余承恩想过生孩子吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E9%97%AE%E4%BD%99%E6%89%BF%E6%81%A9%E6%83%B3%E8%BF%87%E7%94%9F%E5%AD%A9%E5%AD%90%E5%90%97%23) `173.6K 🔥` `NEW`
1. [王楚钦因伤休战36天](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%A0%E4%BC%A4%E4%BC%91%E6%88%9836%E5%A4%A9%23) `172.5K 🔥` `NEW`
1. [北京中小学将全部取消外送餐](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%B8%AD%E5%B0%8F%E5%AD%A6%E5%B0%86%E5%85%A8%E9%83%A8%E5%8F%96%E6%B6%88%E5%A4%96%E9%80%81%E9%A4%90%23) `169.5K 🔥` `NEW`
1. [许飞的人生](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%9A%84%E4%BA%BA%E7%94%9F%23) `169.1K 🔥` `NEW`
1. [特朗普将椭圆办公室列为国家纪念物](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E6%A4%AD%E5%9C%86%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%88%97%E4%B8%BA%E5%9B%BD%E5%AE%B6%E7%BA%AA%E5%BF%B5%E7%89%A9%23) `163.1K 🔥` `NEW`
1. [悲伤逆流成河主演问候八年后还好吗](https://s.weibo.com/weibo?q=%23%E6%82%B2%E4%BC%A4%E9%80%86%E6%B5%81%E6%88%90%E6%B2%B3%E4%B8%BB%E6%BC%94%E9%97%AE%E5%80%99%E5%85%AB%E5%B9%B4%E5%90%8E%E8%BF%98%E5%A5%BD%E5%90%97%23) `159.6K 🔥` `NEW`
1. [美国AI禁令 科技股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDAI%E7%A6%81%E4%BB%A4%20%E7%A7%91%E6%8A%80%E8%82%A1%23) `149.5K 🔥` `NEW`
1. [国家中医药管理局原局长余艳红被查](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E4%B8%AD%E5%8C%BB%E8%8D%AF%E7%AE%A1%E7%90%86%E5%B1%80%E5%8E%9F%E5%B1%80%E9%95%BF%E4%BD%99%E8%89%B3%E7%BA%A2%E8%A2%AB%E6%9F%A5%23) `148.9K 🔥` `NEW`
1. [Knight想赢T1](https://s.weibo.com/weibo?q=%23Knight%E6%83%B3%E8%B5%A2T1%23) `138.4K 🔥` `NEW`
1. [吴磊被请喝茅台手摇成拨浪鼓](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E8%A2%AB%E8%AF%B7%E5%96%9D%E8%8C%85%E5%8F%B0%E6%89%8B%E6%91%87%E6%88%90%E6%8B%A8%E6%B5%AA%E9%BC%93%23) `137.6K 🔥` `NEW`
1. [聋哑人被众筹平台扣费5年](https://s.weibo.com/weibo?q=%23%E8%81%8B%E5%93%91%E4%BA%BA%E8%A2%AB%E4%BC%97%E7%AD%B9%E5%B9%B3%E5%8F%B0%E6%89%A3%E8%B4%B95%E5%B9%B4%23) `128.6K 🔥` `NEW`
1. [王子璇走心发言疑似预制](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E8%B5%B0%E5%BF%83%E5%8F%91%E8%A8%80%E7%96%91%E4%BC%BC%E9%A2%84%E5%88%B6%23) `315.9K 🔥` `+79%`
1. [文吉儿 陆翊](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E9%99%86%E7%BF%8A%23) `269.8K 🔥` `+62%`
1. [温瑞博3比0王楚钦](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A3%E6%AF%940%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `341.4K 🔥` `-84%`
1. [司马缸砸光的珍贵监控视频](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E9%A9%AC%E7%BC%B8%E7%A0%B8%E5%85%89%E7%9A%84%E7%8F%8D%E8%B4%B5%E7%9B%91%E6%8E%A7%E8%A7%86%E9%A2%91%23) `268.9K 🔥` `-58%`

Updated at 2026-11-06 11:38:41

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
