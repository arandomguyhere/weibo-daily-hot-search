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

1. [公积金此次变化意味着什么 (What does this change to the provident fund mean?)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%AD%A4%E6%AC%A1%E5%8F%98%E5%8C%96%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `647.3K 🔥` `NEW`
1. [吉祥空姐的发型](https://s.weibo.com/weibo?q=%23%E5%90%89%E7%A5%A5%E7%A9%BA%E5%A7%90%E7%9A%84%E5%8F%91%E5%9E%8B%23) `631.7K 🔥` `NEW`
1. [Jennie发长文](https://s.weibo.com/weibo?q=%23Jennie%E5%8F%91%E9%95%BF%E6%96%87%23) `626.0K 🔥` `NEW`
1. [爱康AI生命展还能这样玩](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%BA%B7AI%E7%94%9F%E5%91%BD%E5%B1%95%E8%BF%98%E8%83%BD%E8%BF%99%E6%A0%B7%E7%8E%A9%23) `573.5K 🔥` `NEW`
1. [仅退款的风吹到了医疗界](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E7%9A%84%E9%A3%8E%E5%90%B9%E5%88%B0%E4%BA%86%E5%8C%BB%E7%96%97%E7%95%8C%23) `507.2K 🔥` `NEW`
1. [孙红雷空降刘宇宁直播间](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E7%A9%BA%E9%99%8D%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%E9%97%B4%23) `493.1K 🔥` `NEW`
1. [日本人烈日下大排长龙买中国相机](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%83%88%E6%97%A5%E4%B8%8B%E5%A4%A7%E6%8E%92%E9%95%BF%E9%BE%99%E4%B9%B0%E4%B8%AD%E5%9B%BD%E7%9B%B8%E6%9C%BA%23) `305.0K 🔥` `NEW`
1. [外媒热议我国首次实现火箭陆地回收](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%AA%92%E7%83%AD%E8%AE%AE%E6%88%91%E5%9B%BD%E9%A6%96%E6%AC%A1%E5%AE%9E%E7%8E%B0%E7%81%AB%E7%AE%AD%E9%99%86%E5%9C%B0%E5%9B%9E%E6%94%B6%23) `288.9K 🔥` `NEW`
1. [年轻人必备的家务忠仆](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BF%85%E5%A4%87%E7%9A%84%E5%AE%B6%E5%8A%A1%E5%BF%A0%E4%BB%86%23) `245.9K 🔥` `NEW`
1. [英国网红在新疆用飞猪帮帮打卡非遗](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E7%BD%91%E7%BA%A2%E5%9C%A8%E6%96%B0%E7%96%86%E7%94%A8%E9%A3%9E%E7%8C%AA%E5%B8%AE%E5%B8%AE%E6%89%93%E5%8D%A1%E9%9D%9E%E9%81%97%23) `220.8K 🔥` `NEW`
1. [成毅逆应援 (Cheng Yi Ni supports)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%80%86%E5%BA%94%E6%8F%B4%23) `213.9K 🔥` `NEW`
1. [难怪瘦的时候容易觉得疼](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%98%A6%E7%9A%84%E6%97%B6%E5%80%99%E5%AE%B9%E6%98%93%E8%A7%89%E5%BE%97%E7%96%BC%23) `200.0K 🔥` `NEW`
1. [拒绝搭讪被恐吓](https://s.weibo.com/weibo?q=%23%E6%8B%92%E7%BB%9D%E6%90%AD%E8%AE%AA%E8%A2%AB%E6%81%90%E5%90%93%23) `185.4K 🔥` `NEW`
1. [12306回应买票占座放零食这座位能让吗](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `185.0K 🔥` `NEW`
1. [奕境X9预售12小时订单突破16000台](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83X9%E9%A2%84%E5%94%AE12%E5%B0%8F%E6%97%B6%E8%AE%A2%E5%8D%95%E7%AA%81%E7%A0%B416000%E5%8F%B0%23) `162.4K 🔥` `NEW`
1. [升学宴亲历者称事发后大家立即自救](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E4%BA%B2%E5%8E%86%E8%80%85%E7%A7%B0%E4%BA%8B%E5%8F%91%E5%90%8E%E5%A4%A7%E5%AE%B6%E7%AB%8B%E5%8D%B3%E8%87%AA%E6%95%91%23) `134.8K 🔥` `NEW`
1. [博主称大广赛一拟获奖作品疑抄袭](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%A7%B0%E5%A4%A7%E5%B9%BF%E8%B5%9B%E4%B8%80%E6%8B%9F%E8%8E%B7%E5%A5%96%E4%BD%9C%E5%93%81%E7%96%91%E6%8A%84%E8%A2%AD%23) `131.7K 🔥` `NEW`
1. [王兴兴 表情管理](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%20%E8%A1%A8%E6%83%85%E7%AE%A1%E7%90%86%23) `128.9K 🔥` `NEW`
1. [SK海力士拟回购286亿美元股份](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%8B%9F%E5%9B%9E%E8%B4%AD286%E4%BA%BF%E7%BE%8E%E5%85%83%E8%82%A1%E4%BB%BD%23) `122.4K 🔥` `NEW`
1. [女孩买空座放零食大姐求坐被拒绝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%B0%E7%A9%BA%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E5%A4%A7%E5%A7%90%E6%B1%82%E5%9D%90%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `816.6K 🔥` `+156%`
1. [丁禹兮工作室道歉 (Ding Yuxi Studio apologizes)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `603.2K 🔥` `+25%`
1. [A股全市场逾百股跌停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E5%B8%82%E5%9C%BA%E9%80%BE%E7%99%BE%E8%82%A1%E8%B7%8C%E5%81%9C%23) `230.8K 🔥` `+85%`
1. [七夕 去情人节化 (Chinese Valentine's Day becomes Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%8E%BB%E6%83%85%E4%BA%BA%E8%8A%82%E5%8C%96%23) `1.2M 🔥`
1. [亚运礼服同源九牧王星耀系列 (Asian Games dress originates from Jiu Mu Wang Xingyao series)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E7%A4%BC%E6%9C%8D%E5%90%8C%E6%BA%90%E4%B9%9D%E7%89%A7%E7%8E%8B%E6%98%9F%E8%80%80%E7%B3%BB%E5%88%97%23) `639.8K 🔥`
1. [男子将遗产全部留给弟弟不给妻儿 (A man leaves all his inheritance to his younger brother but not to his wife and children)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E9%81%97%E4%BA%A7%E5%85%A8%E9%83%A8%E7%95%99%E7%BB%99%E5%BC%9F%E5%BC%9F%E4%B8%8D%E7%BB%99%E5%A6%BB%E5%84%BF%23) `537.2K 🔥`
1. [为什么七夕朋友圈秀恩爱的变少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%83%E5%A4%95%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%A7%80%E6%81%A9%E7%88%B1%E7%9A%84%E5%8F%98%E5%B0%91%E4%BA%86%23) `522.0K 🔥`
1. [王者新英雄王维 (King's New Hero Wang Wei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%23) `503.1K 🔥`
1. [山姆苹果干一包就是半个苹果](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E8%8B%B9%E6%9E%9C%E5%B9%B2%E4%B8%80%E5%8C%85%E5%B0%B1%E6%98%AF%E5%8D%8A%E4%B8%AA%E8%8B%B9%E6%9E%9C%23) `464.7K 🔥`
1. [买票占座放零食这座位能让吗](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `457.5K 🔥`
1. [马嘉祺直播](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%9B%B4%E6%92%AD%23) `316.3K 🔥`
1. [Angelababy拿玫瑰花自拍](https://s.weibo.com/weibo?q=%23Angelababy%E6%8B%BF%E7%8E%AB%E7%91%B0%E8%8A%B1%E8%87%AA%E6%8B%8D%23) `285.0K 🔥`
1. [甲状腺不好常吃两种水果](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E4%B8%8D%E5%A5%BD%E5%B8%B8%E5%90%83%E4%B8%A4%E7%A7%8D%E6%B0%B4%E6%9E%9C%23) `282.6K 🔥`
1. [迪丽热巴陈飞宇恋情传闻时间线](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%E6%97%B6%E9%97%B4%E7%BA%BF%23) `282.0K 🔥`
1. [BIGBANG新歌 (BIGBANG new song)](https://s.weibo.com/weibo?q=%23BIGBANG%E6%96%B0%E6%AD%8C%23) `235.1K 🔥`
1. [桃黑黑宣布暂时休息](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%AE%A3%E5%B8%83%E6%9A%82%E6%97%B6%E4%BC%91%E6%81%AF%23) `206.4K 🔥`
1. [李昀锐孟子义七夕物料不像演的 (Li Yunrui and Meng Ziyi's Chinese Valentine's Day material doesn't look like the one in the performance)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%83%E5%A4%95%E7%89%A9%E6%96%99%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `167.6K 🔥`
1. [空枪 (empty gun)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `150.2K 🔥`
1. [易烊千玺和我的前半生交集上了 (Yi Yang Qianxi and I intersected in the first half of our lives)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%92%8C%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E4%BA%A4%E9%9B%86%E4%B8%8A%E4%BA%86%23) `125.9K 🔥`
1. [央视七夕晚会 (CCTV Chinese Valentine's Day Party)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%83%E5%A4%95%E6%99%9A%E4%BC%9A%23) `531.6K 🔥` `-37%`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `301.6K 🔥` `-29%`
1. [张恒远因黑色素瘤病逝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%81%92%E8%BF%9C%E5%9B%A0%E9%BB%91%E8%89%B2%E7%B4%A0%E7%98%A4%E7%97%85%E9%80%9D%23) `278.8K 🔥` `-32%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `256.5K 🔥` `-43%`
1. [丁禹兮直播取消](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9B%B4%E6%92%AD%E5%8F%96%E6%B6%88%23) `255.0K 🔥` `-44%`
1. [七夕 民政局](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E6%B0%91%E6%94%BF%E5%B1%80%23) `190.9K 🔥` `-23%`
1. [王力宏宇树 (Wang Leehom Yushu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%AE%87%E6%A0%91%23) `168.2K 🔥` `-38%`
1. [Selina胖了好多 (Selina has gained a lot of weight)](https://s.weibo.com/weibo?q=%23Selina%E8%83%96%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `145.4K 🔥` `-30%`
1. [黄灿灿光脚做面筋 (Huang Cancan makes gluten with bare feet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%85%89%E8%84%9A%E5%81%9A%E9%9D%A2%E7%AD%8B%23) `131.7K 🔥` `-32%`
1. [朱一龙演技](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E6%BC%94%E6%8A%80%23) `130.1K 🔥` `-26%`
1. [商家你要迪丽热巴返图不](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E4%BD%A0%E8%A6%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%94%E5%9B%BE%E4%B8%8D%23) `124.9K 🔥` `-70%`
1. [ai漫剧行业6个月可更1000集](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E8%A1%8C%E4%B8%9A6%E4%B8%AA%E6%9C%88%E5%8F%AF%E6%9B%B41000%E9%9B%86%23) `121.1K 🔥` `-64%`
1. [人到中年爱好开始逐渐离谱了 (As people reach middle age, their hobbies begin to become increasingly outrageous.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E7%88%B1%E5%A5%BD%E5%BC%80%E5%A7%8B%E9%80%90%E6%B8%90%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `120.5K 🔥` `-39%`

Updated at 2026-08-19 21:13:49

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
