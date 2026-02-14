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

1. [花滑米兰惨案 (figure skating tragedy in Milan)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%BB%91%E7%B1%B3%E5%85%B0%E6%83%A8%E6%A1%88%23) `1.2M 🔥` `NEW`
1. [日本试探中国底线](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AF%95%E6%8E%A2%E4%B8%AD%E5%9B%BD%E5%BA%95%E7%BA%BF%23) `542.3K 🔥` `NEW`
1. [生命树后期尺度](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%90%8E%E6%9C%9F%E5%B0%BA%E5%BA%A6%23) `243.4K 🔥` `NEW`
1. [情人节都来碰一下](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E9%83%BD%E6%9D%A5%E7%A2%B0%E4%B8%80%E4%B8%8B%23) `185.1K 🔥` `NEW`
1. [白鹿 情人节快乐宝贝们](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%83%85%E4%BA%BA%E8%8A%82%E5%BF%AB%E4%B9%90%E5%AE%9D%E8%B4%9D%E4%BB%AC%23) `181.2K 🔥` `NEW`
1. [陈飞宇什么时候才能原谅现偶](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%89%8D%E8%83%BD%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%23) `169.8K 🔥` `NEW`
1. [情人节红包](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E7%BA%A2%E5%8C%85%23) `137.5K 🔥` `NEW`
1. [宋轶好刚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A5%BD%E5%88%9A%23) `128.9K 🔥` `NEW`
1. [中国国家队致敬金博洋](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E9%98%9F%E8%87%B4%E6%95%AC%E9%87%91%E5%8D%9A%E6%B4%8B%23) `125.9K 🔥` `NEW`
1. [意大利失联中国博士生最新进展](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%8D%9A%E5%A3%AB%E7%94%9F%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `123.1K 🔥` `NEW`
1. [美国日本又焦虑了 (The United States and Japan are anxious again)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%97%A5%E6%9C%AC%E5%8F%88%E7%84%A6%E8%99%91%E4%BA%86%23) `119.5K 🔥` `NEW`
1. [王濛看老朋友领奖的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9C%8B%E8%80%81%E6%9C%8B%E5%8F%8B%E9%A2%86%E5%A5%96%E7%9A%84%E5%8F%8D%E5%BA%94%23) `118.6K 🔥` `NEW`
1. [相声演员卢鑫回应被悬赏](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E5%A3%B0%E6%BC%94%E5%91%98%E5%8D%A2%E9%91%AB%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%82%AC%E8%B5%8F%23) `99.9K 🔥` `NEW`
1. [她示范那下我才知道她能做老师](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E7%A4%BA%E8%8C%83%E9%82%A3%E4%B8%8B%E6%88%91%E6%89%8D%E7%9F%A5%E9%81%93%E5%A5%B9%E8%83%BD%E5%81%9A%E8%80%81%E5%B8%88%23) `94.2K 🔥` `NEW`
1. [雪见用的法器是剧组工作人员的婚戒](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E8%A7%81%E7%94%A8%E7%9A%84%E6%B3%95%E5%99%A8%E6%98%AF%E5%89%A7%E7%BB%84%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%9A%84%E5%A9%9A%E6%88%92%23) `89.8K 🔥` `NEW`
1. [羽生结弦的含金量还在上升](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `86.7K 🔥` `NEW`
1. [8年多过去雄安建设的怎么样了](https://s.weibo.com/weibo?q=%238%E5%B9%B4%E5%A4%9A%E8%BF%87%E5%8E%BB%E9%9B%84%E5%AE%89%E5%BB%BA%E8%AE%BE%E7%9A%84%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `74.9K 🔥` `NEW`
1. [弥补了没见过巨莓观的遗憾](https://s.weibo.com/weibo?q=%23%E5%BC%A5%E8%A1%A5%E4%BA%86%E6%B2%A1%E8%A7%81%E8%BF%87%E5%B7%A8%E8%8E%93%E8%A7%82%E7%9A%84%E9%81%97%E6%86%BE%23) `74.2K 🔥` `NEW`
1. [女子29元韭菜炒蚌肉吃出1颗粉珍珠](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%9029%E5%85%83%E9%9F%AD%E8%8F%9C%E7%82%92%E8%9A%8C%E8%82%89%E5%90%83%E5%87%BA1%E9%A2%97%E7%B2%89%E7%8F%8D%E7%8F%A0%23) `74.0K 🔥` `NEW`
1. [春晚](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%23) `72.0K 🔥` `NEW`
1. [乒乓球欧冠联赛 (Table Tennis Champions League)](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%23) `71.7K 🔥` `NEW`
1. [NBA全明星名人赛](https://s.weibo.com/weibo?q=%23NBA%E5%85%A8%E6%98%8E%E6%98%9F%E5%90%8D%E4%BA%BA%E8%B5%9B%23) `69.1K 🔥` `NEW`
1. [樊振东2比3温瑞博](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E6%B8%A9%E7%91%9E%E5%8D%9A%23) `869.2K 🔥` `+219%`
1. [回家路上随手拍 (Random photo taken on the way home)](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E5%AE%B6%E8%B7%AF%E4%B8%8A%E9%9A%8F%E6%89%8B%E6%8B%8D%23) `681.4K 🔥` `+26%`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `274.8K 🔥` `+27%`
1. [2700克金条388元购入1121元出手](https://s.weibo.com/weibo?q=%232700%E5%85%8B%E9%87%91%E6%9D%A1388%E5%85%83%E8%B4%AD%E5%85%A51121%E5%85%83%E5%87%BA%E6%89%8B%23) `261.4K 🔥` `+274%`
1. [瑶一瑶小肉包近30天掉粉6万](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%85%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%896%E4%B8%87%23) `201.5K 🔥` `+23%`
1. [莫雷加德秀樊振东大头照](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E7%A7%80%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%A4%A7%E5%A4%B4%E7%85%A7%23) `186.9K 🔥` `+69%`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `140.9K 🔥` `+44%`
1. [王栎鑫女儿因被怼脸拍生气 (Wang Yuexin’s daughter was angry because she was slapped in the face)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%A5%B3%E5%84%BF%E5%9B%A0%E8%A2%AB%E6%80%BC%E8%84%B8%E6%8B%8D%E7%94%9F%E6%B0%94%23) `140.0K 🔥` `+43%`
1. [小狗来大姨妈以为得了不治之症](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%9D%A5%E5%A4%A7%E5%A7%A8%E5%A6%88%E4%BB%A5%E4%B8%BA%E5%BE%97%E4%BA%86%E4%B8%8D%E6%B2%BB%E4%B9%8B%E7%97%87%23) `139.8K 🔥` `+138%`
1. [6000万年终奖有人数走9万5](https://s.weibo.com/weibo?q=%236000%E4%B8%87%E5%B9%B4%E7%BB%88%E5%A5%96%E6%9C%89%E4%BA%BA%E6%95%B0%E8%B5%B09%E4%B8%875%23) `131.2K 🔥` `+34%`
1. [22岁中国男子在巴厘岛溺亡](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%9C%A8%E5%B7%B4%E5%8E%98%E5%B2%9B%E6%BA%BA%E4%BA%A1%23) `119.3K 🔥` `+73%`
1. [女子幽门螺杆菌阳性3年后查出胃癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E9%98%B3%E6%80%A73%E5%B9%B4%E5%90%8E%E6%9F%A5%E5%87%BA%E8%83%83%E7%99%8C%23) `246.7K 🔥`
1. [新娘称婚宴4000一桌被亲友说最难吃 (The bride said her wedding banquet cost 4,000 per table and her relatives and friends said it was the worst food.)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%A7%B0%E5%A9%9A%E5%AE%B44000%E4%B8%80%E6%A1%8C%E8%A2%AB%E4%BA%B2%E5%8F%8B%E8%AF%B4%E6%9C%80%E9%9A%BE%E5%90%83%23) `203.2K 🔥`
1. [曝高市早苗手部病情恶化 (It is revealed that Sanae's hand condition worsened)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%89%8B%E9%83%A8%E7%97%85%E6%83%85%E6%81%B6%E5%8C%96%23) `186.8K 🔥`
1. [民警厕所打人受害人被打致小便失禁 (Victim beaten by police in restroom was left incontinent)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E5%8E%95%E6%89%80%E6%89%93%E4%BA%BA%E5%8F%97%E5%AE%B3%E4%BA%BA%E8%A2%AB%E6%89%93%E8%87%B4%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%23) `161.8K 🔥`
1. [5类人需要定期检测幽门螺杆菌](https://s.weibo.com/weibo?q=%235%E7%B1%BB%E4%BA%BA%E9%9C%80%E8%A6%81%E5%AE%9A%E6%9C%9F%E6%A3%80%E6%B5%8B%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%23) `113.8K 🔥`
1. [男子卖前女友送的银镯子竟是银包金 (A man sells a silver bracelet given by his ex-girlfriend but it’s silver-coated with gold)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E5%89%8D%E5%A5%B3%E5%8F%8B%E9%80%81%E7%9A%84%E9%93%B6%E9%95%AF%E5%AD%90%E7%AB%9F%E6%98%AF%E9%93%B6%E5%8C%85%E9%87%91%23) `112.5K 🔥`
1. [张凌赫田曦薇hi6预告](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87hi6%E9%A2%84%E5%91%8A%23) `108.9K 🔥`
1. [豆包红包 (bean bag red envelope)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%BA%A2%E5%8C%85%23) `107.9K 🔥`
1. [保罗正式宣布退役](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E6%AD%A3%E5%BC%8F%E5%AE%A3%E5%B8%83%E9%80%80%E5%BD%B9%23) `82.0K 🔥`
1. [谁给迪丽热巴买的手机壳 (Who bought the mobile phone case for Dilireba?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `79.4K 🔥`
1. [鼻梁两侧长黄色颗粒或是胆固醇升高](https://s.weibo.com/weibo?q=%23%E9%BC%BB%E6%A2%81%E4%B8%A4%E4%BE%A7%E9%95%BF%E9%BB%84%E8%89%B2%E9%A2%97%E7%B2%92%E6%88%96%E6%98%AF%E8%83%86%E5%9B%BA%E9%86%87%E5%8D%87%E9%AB%98%23) `74.2K 🔥`
1. [马里宁自由滑重大失误](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%87%8C%E5%AE%81%E8%87%AA%E7%94%B1%E6%BB%91%E9%87%8D%E5%A4%A7%E5%A4%B1%E8%AF%AF%23) `226.1K 🔥` `-76%`
1. [樊振东2比3高茨 (Fan Zhendong 2 to 3 Gautz)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E9%AB%98%E8%8C%A8%23) `209.4K 🔥` `-70%`
1. [中戏表演系连续三任系主任主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E8%A1%A8%E6%BC%94%E7%B3%BB%E8%BF%9E%E7%BB%AD%E4%B8%89%E4%BB%BB%E7%B3%BB%E4%B8%BB%E4%BB%BB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `184.9K 🔥` `-33%`
1. [萨摩耶得知自己被托孤角落偷落泪 (Samoyed shed tears when he learned that he had been left alone in a corner)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%BE%97%E7%9F%A5%E8%87%AA%E5%B7%B1%E8%A2%AB%E6%89%98%E5%AD%A4%E8%A7%92%E8%90%BD%E5%81%B7%E8%90%BD%E6%B3%AA%23) `143.3K 🔥` `-23%`
1. [黄冈通报产检正常娃出生却先天畸形 (Huanggang reports that baby born with normal prenatal checkup was born with congenital malformation)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%86%88%E9%80%9A%E6%8A%A5%E4%BA%A7%E6%A3%80%E6%AD%A3%E5%B8%B8%E5%A8%83%E5%87%BA%E7%94%9F%E5%8D%B4%E5%85%88%E5%A4%A9%E7%95%B8%E5%BD%A2%23) `119.8K 🔥` `-34%`
1. [瑶一瑶藏剪刀被安检发现](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%97%8F%E5%89%AA%E5%88%80%E8%A2%AB%E5%AE%89%E6%A3%80%E5%8F%91%E7%8E%B0%23) `117.1K 🔥` `-26%`

Updated at 2026-02-14 08:54:47

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
