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

1. [全网最会卖鞋的人出现了 (The best shoe seller on the Internet has appeared)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E4%BC%9A%E5%8D%96%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `65.5K 🔥` `NEW`
1. [新郎投壶未中箭矢回弹指向新娘](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E6%8A%95%E5%A3%B6%E6%9C%AA%E4%B8%AD%E7%AE%AD%E7%9F%A2%E5%9B%9E%E5%BC%B9%E6%8C%87%E5%90%91%E6%96%B0%E5%A8%98%23) `61.3K 🔥` `NEW`
1. [切除子宫的她们](https://s.weibo.com/weibo?q=%23%E5%88%87%E9%99%A4%E5%AD%90%E5%AE%AB%E7%9A%84%E5%A5%B9%E4%BB%AC%23) `58.2K 🔥` `NEW`
1. [爱泼斯坦案6名大人物被公开](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%886%E5%90%8D%E5%A4%A7%E4%BA%BA%E7%89%A9%E8%A2%AB%E5%85%AC%E5%BC%80%23) `56.9K 🔥` `NEW`
1. [27岁裸辞大厂下井当矿工](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E8%A3%B8%E8%BE%9E%E5%A4%A7%E5%8E%82%E4%B8%8B%E4%BA%95%E5%BD%93%E7%9F%BF%E5%B7%A5%23) `52.7K 🔥` `NEW`
1. [一大批年轻人开始反向过年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A7%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8F%8D%E5%90%91%E8%BF%87%E5%B9%B4%23) `49.3K 🔥` `NEW`
1. [廉子文赛后发文回应](https://s.weibo.com/weibo?q=%23%E5%BB%89%E5%AD%90%E6%96%87%E8%B5%9B%E5%90%8E%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%23) `48.7K 🔥` `NEW`
1. [虞书欣新歌](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%96%B0%E6%AD%8C%23) `47.2K 🔥` `NEW`
1. [冰壶](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%A3%B6%23) `43.8K 🔥` `NEW`
1. [廉子文被取消成绩](https://s.weibo.com/weibo?q=%23%E5%BB%89%E5%AD%90%E6%96%87%E8%A2%AB%E5%8F%96%E6%B6%88%E6%88%90%E7%BB%A9%23) `1.0M 🔥` `+27%`
1. [KK园区2.0内部照首曝光 (First internal photos of KK Park 2.0 exposed)](https://s.weibo.com/weibo?q=%23KK%E5%9B%AD%E5%8C%BA2.0%E5%86%85%E9%83%A8%E7%85%A7%E9%A6%96%E6%9B%9D%E5%85%89%23) `749.7K 🔥` `+31%`
1. [春运路上藏着这些马年彩蛋 (These Year of the Horse Easter Eggs are Hidden on the Spring Festival Transport Road)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%BF%90%E8%B7%AF%E4%B8%8A%E8%97%8F%E7%9D%80%E8%BF%99%E4%BA%9B%E9%A9%AC%E5%B9%B4%E5%BD%A9%E8%9B%8B%23) `605.5K 🔥` `+27%`
1. [上淘宝春节不打烊年货小时达 (Go to Taobao and don’t close during the Spring Festival. New Year’s goods are available within hours.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%98%A5%E8%8A%82%E4%B8%8D%E6%89%93%E7%83%8A%E5%B9%B4%E8%B4%A7%E5%B0%8F%E6%97%B6%E8%BE%BE%23) `525.6K 🔥` `+415%`
1. [谭松韵上春晚没和家人说 (Tan Songyun went to the Spring Festival Gala without telling her family)](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%B8%8A%E6%98%A5%E6%99%9A%E6%B2%A1%E5%92%8C%E5%AE%B6%E4%BA%BA%E8%AF%B4%23) `224.9K 🔥` `+92%`
1. [中国队又添一枚奖牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%8F%88%E6%B7%BB%E4%B8%80%E6%9E%9A%E5%A5%96%E7%89%8C%23) `205.1K 🔥` `+33%`
1. [生小孩需要一个发达的前额叶 (Having a baby requires a developed prefrontal lobe)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%B0%8F%E5%AD%A9%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E5%8F%91%E8%BE%BE%E7%9A%84%E5%89%8D%E9%A2%9D%E5%8F%B6%23) `204.8K 🔥` `+39%`
1. [250桌婚宴52万嫌贵拒付款进展](https://s.weibo.com/weibo?q=%23250%E6%A1%8C%E5%A9%9A%E5%AE%B452%E4%B8%87%E5%AB%8C%E8%B4%B5%E6%8B%92%E4%BB%98%E6%AC%BE%E8%BF%9B%E5%B1%95%23) `204.0K 🔥` `+38%`
1. [阚清子长文告别乔海伦](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E4%B9%94%E6%B5%B7%E4%BC%A6%23) `199.1K 🔥` `+123%`
1. [伊朗总统道歉](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E9%81%93%E6%AD%89%23) `178.4K 🔥` `+23%`
1. [何以琛今年50多岁了 (He Yichen is over 50 years old this year)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E7%90%9B%E4%BB%8A%E5%B9%B450%E5%A4%9A%E5%B2%81%E4%BA%86%23) `99.4K 🔥` `+47%`
1. [郑钦文无缘多哈站八强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%97%A0%E7%BC%98%E5%A4%9A%E5%93%88%E7%AB%99%E5%85%AB%E5%BC%BA%23) `86.3K 🔥` `+87%`
1. [彭小苒拍照忘把夹子取下来了](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E6%8B%8D%E7%85%A7%E5%BF%98%E6%8A%8A%E5%A4%B9%E5%AD%90%E5%8F%96%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `78.2K 🔥` `+48%`
1. [这种看似舒服的睡姿最伤脊椎](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E7%9C%8B%E4%BC%BC%E8%88%92%E6%9C%8D%E7%9A%84%E7%9D%A1%E5%A7%BF%E6%9C%80%E4%BC%A4%E8%84%8A%E6%A4%8E%23) `73.8K 🔥` `+41%`
1. [郑钦文1比2莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%871%E6%AF%942%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `73.7K 🔥` `+27%`
1. [美国一男子开枪杀死女儿 (American man shot and killed his daughter)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E7%94%B7%E5%AD%90%E5%BC%80%E6%9E%AA%E6%9D%80%E6%AD%BB%E5%A5%B3%E5%84%BF%23) `61.3K 🔥` `+31%`
1. [比尔盖茨最新回应爱泼斯坦案](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%23) `59.5K 🔥` `+55%`
1. [全国房价止跌信号出现 (Signal for national house prices to stop falling appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%AD%A2%E8%B7%8C%E4%BF%A1%E5%8F%B7%E5%87%BA%E7%8E%B0%23) `55.1K 🔥` `+31%`
1. [薛之谦歌曲被抄袭部分歌词被照搬 (Xue Zhiqian's song was plagiarized and some of the lyrics were copied)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%AD%8C%E6%9B%B2%E8%A2%AB%E6%8A%84%E8%A2%AD%E9%83%A8%E5%88%86%E6%AD%8C%E8%AF%8D%E8%A2%AB%E7%85%A7%E6%90%AC%23) `48.7K 🔥` `+33%`
1. [郑钦文vs莱巴金娜 (Zheng Qinwen vs Leba Jinna)](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `108.4K 🔥`
1. [女演员投资失败搬进出租屋 (Actress’ investment failed and she moved into a rental house)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%8A%95%E8%B5%84%E5%A4%B1%E8%B4%A5%E6%90%AC%E8%BF%9B%E5%87%BA%E7%A7%9F%E5%B1%8B%23) `107.8K 🔥`
1. [李一桐 假唱 (Li Yitong lip-synching)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%81%87%E5%94%B1%23) `106.7K 🔥`
1. [保姆遇到有钱雇主吓得下户](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E9%81%87%E5%88%B0%E6%9C%89%E9%92%B1%E9%9B%87%E4%B8%BB%E5%90%93%E5%BE%97%E4%B8%8B%E6%88%B7%23) `105.9K 🔥`
1. [沈梦辰换了10套少数民族服装](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%8D%A2%E4%BA%8610%E5%A5%97%E5%B0%91%E6%95%B0%E6%B0%91%E6%97%8F%E6%9C%8D%E8%A3%85%23) `103.9K 🔥`
1. [宋亚轩怎么那么高 (Why is Song Yaxuan so tall?)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%80%8E%E4%B9%88%E9%82%A3%E4%B9%88%E9%AB%98%23) `103.0K 🔥`
1. [月薪2000的环卫工困在电子镣铐 (Sanitation worker with a monthly salary of 2,000 is trapped in electronic shackles)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA2000%E7%9A%84%E7%8E%AF%E5%8D%AB%E5%B7%A5%E5%9B%B0%E5%9C%A8%E7%94%B5%E5%AD%90%E9%95%A3%E9%93%90%23) `102.3K 🔥`
1. [英王室地产发现疑似涉爱泼斯坦案尸体](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%8E%8B%E5%AE%A4%E5%9C%B0%E4%BA%A7%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E6%B6%89%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%B0%B8%E4%BD%93%23) `101.4K 🔥`
1. [宋威龙抽到马上有对象的反应 (Song Weilong immediately responded to the target when he drew it)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%8A%BD%E5%88%B0%E9%A9%AC%E4%B8%8A%E6%9C%89%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%8D%E5%BA%94%23) `99.9K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `85.7K 🔥`
1. [郭麒麟 爸爸还是您不争气啊 (Guo Qilin, Dad, you still don’t live up to expectations.)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%20%E7%88%B8%E7%88%B8%E8%BF%98%E6%98%AF%E6%82%A8%E4%B8%8D%E4%BA%89%E6%B0%94%E5%95%8A%23) `83.7K 🔥`
1. [男子出轨公婆照料婚外幼童刺痛女子](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E5%85%AC%E5%A9%86%E7%85%A7%E6%96%99%E5%A9%9A%E5%A4%96%E5%B9%BC%E7%AB%A5%E5%88%BA%E7%97%9B%E5%A5%B3%E5%AD%90%23) `82.2K 🔥`
1. [长期积怨妻子疑用锅袭击丈夫致死 (Wife with long-standing grudge allegedly attacks husband to death with cooking pot)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%A7%AF%E6%80%A8%E5%A6%BB%E5%AD%90%E7%96%91%E7%94%A8%E9%94%85%E8%A2%AD%E5%87%BB%E4%B8%88%E5%A4%AB%E8%87%B4%E6%AD%BB%23) `80.5K 🔥`
1. [周深忘词 (Zhou Shenwang's Ci)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%BF%98%E8%AF%8D%23) `76.4K 🔥`
1. [小狗看到主人穿得毛茸茸的反应](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E7%9C%8B%E5%88%B0%E4%B8%BB%E4%BA%BA%E7%A9%BF%E5%BE%97%E6%AF%9B%E8%8C%B8%E8%8C%B8%E7%9A%84%E5%8F%8D%E5%BA%94%23) `61.2K 🔥`
1. [王艳儿子球球回应是否进演艺圈](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%B3%E5%84%BF%E5%AD%90%E7%90%83%E7%90%83%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E8%BF%9B%E6%BC%94%E8%89%BA%E5%9C%88%23) `60.1K 🔥`
1. [警方回应2岁男童在家失踪超140天 (Police respond to 2-year-old boy missing at home for more than 140 days)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%942%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9C%A8%E5%AE%B6%E5%A4%B1%E8%B8%AA%E8%B6%85140%E5%A4%A9%23) `57.5K 🔥`
1. [米兰冬奥首位三金王诞生 (Milan Winter Olympics’ first triple gold medal winner is born)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E4%BD%8D%E4%B8%89%E9%87%91%E7%8E%8B%E8%AF%9E%E7%94%9F%23) `51.3K 🔥`
1. [唐宫奇案之青雾风鸣 (Strange Cases in the Tang Palace: Qingwu Fengming)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E4%B9%8B%E9%9D%92%E9%9B%BE%E9%A3%8E%E9%B8%A3%23) `43.6K 🔥`
1. [湖南卫视春晚收视率](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `43.5K 🔥`
1. [宁忠岩成绩在北奥能拿金牌](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E6%88%90%E7%BB%A9%E5%9C%A8%E5%8C%97%E5%A5%A5%E8%83%BD%E6%8B%BF%E9%87%91%E7%89%8C%23) `43.3K 🔥`
1. [生命树 (tree of life)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `52.8K 🔥` `-33%`

Updated at 2026-02-12 07:55:49

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
