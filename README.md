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

1. [以色列三面受敌 (Israel is surrounded by enemies on three sides)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%89%E9%9D%A2%E5%8F%97%E6%95%8C%23) `47.6K 🔥` `NEW`
1. [王俊凯是新歌制作人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%98%AF%E6%96%B0%E6%AD%8C%E5%88%B6%E4%BD%9C%E4%BA%BA%23) `19.0K 🔥` `NEW`
1. [消毒 (disinfect)](https://s.weibo.com/weibo?q=%23%E6%B6%88%E6%AF%92%23) `382.5K 🔥`
1. [世上顶好顶好的老太婆走了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B8%8A%E9%A1%B6%E5%A5%BD%E9%A1%B6%E5%A5%BD%E7%9A%84%E8%80%81%E5%A4%AA%E5%A9%86%E8%B5%B0%E4%BA%86%23) `86.1K 🔥`
1. [清朗网络空间汇聚向上向善 (Clear cyberspace gathers upwards and good intentions)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%9C%97%E7%BD%91%E7%BB%9C%E7%A9%BA%E9%97%B4%E6%B1%87%E8%81%9A%E5%90%91%E4%B8%8A%E5%90%91%E5%96%84%23) `68.7K 🔥`
1. [伊朗正式回应美国15点停火协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%BC%8F%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD15%E7%82%B9%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%23) `52.8K 🔥`
1. [伊朗连遭重创绝地反击 (Iran was hit hard and fought back)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%BF%9E%E9%81%AD%E9%87%8D%E5%88%9B%E7%BB%9D%E5%9C%B0%E5%8F%8D%E5%87%BB%23) `42.4K 🔥`
1. [徐良演唱会时薪4000 (Xu Liang’s concert hourly salary is 4,000)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%97%B6%E8%96%AA4000%23) `41.5K 🔥`
1. [站姐愚人节团建预告 (Zhanjie’s April Fool’s Day Team Building Preview)](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%A7%90%E6%84%9A%E4%BA%BA%E8%8A%82%E5%9B%A2%E5%BB%BA%E9%A2%84%E5%91%8A%23) `39.3K 🔥`
1. [R1SE任豪回来了](https://s.weibo.com/weibo?q=%23R1SE%E4%BB%BB%E8%B1%AA%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `38.9K 🔥`
1. [以军参谋长说以军常规部队已崩溃](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%8F%82%E8%B0%8B%E9%95%BF%E8%AF%B4%E4%BB%A5%E5%86%9B%E5%B8%B8%E8%A7%84%E9%83%A8%E9%98%9F%E5%B7%B2%E5%B4%A9%E6%BA%83%23) `33.0K 🔥`
1. [迪丽热巴有高度近视](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9C%89%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%23) `30.1K 🔥`
1. [女子断碳水2月确诊糖尿病前期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `28.7K 🔥`
1. [鞠婧祎你在不在高音 (Ju Jingyi, are you here?)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%BD%A0%E5%9C%A8%E4%B8%8D%E5%9C%A8%E9%AB%98%E9%9F%B3%23) `28.6K 🔥`
1. [你好1983](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%23) `25.5K 🔥`
1. [伊朗称无人机大规模打击以色列目标 (Iran says drones hit Israeli targets on a massive scale)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%89%93%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E7%9B%AE%E6%A0%87%23) `25.0K 🔥`
1. [AG战胜JDG (AG defeated JDG)](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CJDG%23) `23.8K 🔥`
1. [女子在家被流浪狗咬伤3天后狗死了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A2%AB%E6%B5%81%E6%B5%AA%E7%8B%97%E5%92%AC%E4%BC%A43%E5%A4%A9%E5%90%8E%E7%8B%97%E6%AD%BB%E4%BA%86%23) `23.5K 🔥`
1. [女顾客打印后要求归类被拒当场崩溃 (After printing, the female customer asked for classification and was refused. She collapsed on the spot.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E6%89%93%E5%8D%B0%E5%90%8E%E8%A6%81%E6%B1%82%E5%BD%92%E7%B1%BB%E8%A2%AB%E6%8B%92%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `23.0K 🔥`
1. [代旭 男主剧](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%97%AD%20%E7%94%B7%E4%B8%BB%E5%89%A7%23) `22.3K 🔥`
1. [太原一商圈起火现场浓烟滚滚 (Smoke billows from the fire scene in a business district in Taiyuan)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E4%B8%80%E5%95%86%E5%9C%88%E8%B5%B7%E7%81%AB%E7%8E%B0%E5%9C%BA%E6%B5%93%E7%83%9F%E6%BB%9A%E6%BB%9A%23) `21.4K 🔥`
1. [也门胡塞武装发射导弹 (Yemen Houthi armed forces launch missiles)](https://s.weibo.com/weibo?q=%23%E4%B9%9F%E9%97%A8%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%23) `20.7K 🔥`
1. [没有人比R1SE更爱R1SE (No one loves R1SE more than R1SE)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BA%BA%E6%AF%94R1SE%E6%9B%B4%E7%88%B1R1SE%23) `20.1K 🔥`
1. [金价又涨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%88%E6%B6%A8%E4%BA%86%23) `20.0K 🔥`
1. [张凌赫大一曾分享暗恋细节](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E4%B8%80%E6%9B%BE%E5%88%86%E4%BA%AB%E6%9A%97%E6%81%8B%E7%BB%86%E8%8A%82%23) `19.7K 🔥`
1. [杨臣刚自曝因老鼠爱大米收入1.7亿 (Yang Chengang revealed that he earned 170 million because rats love rice.)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%87%A3%E5%88%9A%E8%87%AA%E6%9B%9D%E5%9B%A0%E8%80%81%E9%BC%A0%E7%88%B1%E5%A4%A7%E7%B1%B3%E6%94%B6%E5%85%A51.7%E4%BA%BF%23) `19.2K 🔥`
1. [泰国与伊朗达成协议 (Thailand and Iran reach agreement)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E4%B8%8E%E4%BC%8A%E6%9C%97%E8%BE%BE%E6%88%90%E5%8D%8F%E8%AE%AE%23) `19.1K 🔥`
1. [鞠婧祎获巅峰流行女歌手](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%8E%B7%E5%B7%85%E5%B3%B0%E6%B5%81%E8%A1%8C%E5%A5%B3%E6%AD%8C%E6%89%8B%23) `19.0K 🔥`
1. [俄罗斯4月1日起禁止汽油出口](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF4%E6%9C%881%E6%97%A5%E8%B5%B7%E7%A6%81%E6%AD%A2%E6%B1%BD%E6%B2%B9%E5%87%BA%E5%8F%A3%23) `19.0K 🔥`
1. [伊朗军方称击中美军舰艇](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E6%96%B9%E7%A7%B0%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%86%9B%E8%88%B0%E8%89%87%23) `19.0K 🔥`
1. [中国AI不会因几张邀请函停滞](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E4%B8%8D%E4%BC%9A%E5%9B%A0%E5%87%A0%E5%BC%A0%E9%82%80%E8%AF%B7%E5%87%BD%E5%81%9C%E6%BB%9E%23) `19.0K 🔥`
1. [金价急速飙涨 (Gold prices soar)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E9%80%9F%E9%A3%99%E6%B6%A8%23) `19.0K 🔥`
1. [JDG对战AG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AG%23) `19.0K 🔥`
1. [檀健次谢却山家主气场](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%B0%A2%E5%8D%B4%E5%B1%B1%E5%AE%B6%E4%B8%BB%E6%B0%94%E5%9C%BA%23) `19.0K 🔥`
1. [现货黄金 (spot gold)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `19.0K 🔥`
1. [美国最强导弹击落了美国最强战机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E5%87%BB%E8%90%BD%E4%BA%86%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E6%88%98%E6%9C%BA%23) `19.0K 🔥`
1. [Angelababy梦回贝微微](https://s.weibo.com/weibo?q=%23Angelababy%E6%A2%A6%E5%9B%9E%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `19.0K 🔥`
1. [丁禹兮领奖时宣传白日提灯 (Ding Yuxi promoted the daytime lantern when accepting the award)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E9%A2%86%E5%A5%96%E6%97%B6%E5%AE%A3%E4%BC%A0%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `19.0K 🔥`
1. [幼儿园自理比赛女孩靠佛系速度获胜](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%87%AA%E7%90%86%E6%AF%94%E8%B5%9B%E5%A5%B3%E5%AD%A9%E9%9D%A0%E4%BD%9B%E7%B3%BB%E9%80%9F%E5%BA%A6%E8%8E%B7%E8%83%9C%23) `19.0K 🔥`
1. [穿上春装被误认为是保洁 (Wearing spring clothes was mistaken for cleaning)](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%B8%8A%E6%98%A5%E8%A3%85%E8%A2%AB%E8%AF%AF%E8%AE%A4%E4%B8%BA%E6%98%AF%E4%BF%9D%E6%B4%81%23) `19.0K 🔥`
1. [吴镇宇说郭晓婷脸上有故事了 (Wu Zhenyu said that Guo Xiaoting has a story on her face)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E8%AF%B4%E9%83%AD%E6%99%93%E5%A9%B7%E8%84%B8%E4%B8%8A%E6%9C%89%E6%95%85%E4%BA%8B%E4%BA%86%23) `19.0K 🔥`
1. [范丞丞说时代少年团永远在一起](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AF%B4%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%B0%B8%E8%BF%9C%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `19.0K 🔥`
1. [氦气价格暴涨50% (Helium prices skyrocketed by 50%)](https://s.weibo.com/weibo?q=%23%E6%B0%A6%E6%B0%94%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A850%25%23) `19.0K 🔥`
1. [徐良方致歉声明 (Xu Liangfang’s apology statement)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%96%B9%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `61.5K 🔥` `-22%`
1. [苏打水能代替饮用水是谣言 (It is a rumor that soda water can replace drinking water)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%89%93%E6%B0%B4%E8%83%BD%E4%BB%A3%E6%9B%BF%E9%A5%AE%E7%94%A8%E6%B0%B4%E6%98%AF%E8%B0%A3%E8%A8%80%23) `47.1K 🔥` `-24%`
1. [高三学生请求拆除鸟巢校长写信回应](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E8%AF%B7%E6%B1%82%E6%8B%86%E9%99%A4%E9%B8%9F%E5%B7%A2%E6%A0%A1%E9%95%BF%E5%86%99%E4%BF%A1%E5%9B%9E%E5%BA%94%23) `42.1K 🔥` `-58%`
1. [王俊凯蹦迪版心引力](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B9%A6%E8%BF%AA%E7%89%88%E5%BF%83%E5%BC%95%E5%8A%9B%23) `39.6K 🔥` `-24%`
1. [低精力人群的周末安排belike](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E4%BA%BA%E7%BE%A4%E7%9A%84%E5%91%A8%E6%9C%AB%E5%AE%89%E6%8E%92belike%23) `28.2K 🔥` `-22%`
1. [小狗 是表哥吗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%20%E6%98%AF%E8%A1%A8%E5%93%A5%E5%90%97%23) `19.7K 🔥` `-33%`
1. [陈哲远锁凶正确率百分百 (Chen Zheyuan's lock accuracy is 100%)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E9%94%81%E5%87%B6%E6%AD%A3%E7%A1%AE%E7%8E%87%E7%99%BE%E5%88%86%E7%99%BE%23) `19.0K 🔥` `-31%`
1. [迪丽热巴女鬼一来了 (The female ghost Dilireba is here)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A5%B3%E9%AC%BC%E4%B8%80%E6%9D%A5%E4%BA%86%23) `19.0K 🔥` `-56%`

Updated at 2026-03-29 03:49:21

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
