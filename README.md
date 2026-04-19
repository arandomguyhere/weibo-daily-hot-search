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

1. [第44届金像奖获奖名单 (List of winners of the 44th Academy Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC44%E5%B1%8A%E9%87%91%E5%83%8F%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `2.2M 🔥` `NEW`
1. [年度影响力作家](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%BA%A6%E5%BD%B1%E5%93%8D%E5%8A%9B%E4%BD%9C%E5%AE%B6%23) `638.2K 🔥` `NEW`
1. [李小冉唱了一下午](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%B1%E4%BA%86%E4%B8%80%E4%B8%8B%E5%8D%88%23) `519.0K 🔥` `NEW`
1. [24岁女研究生赢发呆比赛冠军](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `478.3K 🔥` `NEW`
1. [河南三地巨额数据造假25人被问责](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E5%9C%B0%E5%B7%A8%E9%A2%9D%E6%95%B0%E6%8D%AE%E9%80%A0%E5%81%8725%E4%BA%BA%E8%A2%AB%E9%97%AE%E8%B4%A3%23) `460.4K 🔥` `NEW`
1. [脱口秀演员被高压水枪滋隐私部位](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%91%98%E8%A2%AB%E9%AB%98%E5%8E%8B%E6%B0%B4%E6%9E%AA%E6%BB%8B%E9%9A%90%E7%A7%81%E9%83%A8%E4%BD%8D%23) `435.4K 🔥` `NEW`
1. [东部战区舰艇编队过航横当水道](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E8%88%B0%E8%89%87%E7%BC%96%E9%98%9F%E8%BF%87%E8%88%AA%E6%A8%AA%E5%BD%93%E6%B0%B4%E9%81%93%23) `288.4K 🔥` `NEW`
1. [高中生因操行分不合格等被劝退](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E5%9B%A0%E6%93%8D%E8%A1%8C%E5%88%86%E4%B8%8D%E5%90%88%E6%A0%BC%E7%AD%89%E8%A2%AB%E5%8A%9D%E9%80%80%23) `281.6K 🔥` `NEW`
1. [杜华被雷军问还有哪些艺人的反应](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E8%A2%AB%E9%9B%B7%E5%86%9B%E9%97%AE%E8%BF%98%E6%9C%89%E5%93%AA%E4%BA%9B%E8%89%BA%E4%BA%BA%E7%9A%84%E5%8F%8D%E5%BA%94%23) `280.5K 🔥` `NEW`
1. [金莎晒婚服](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E5%A9%9A%E6%9C%8D%23) `216.7K 🔥` `NEW`
1. [美国代表20日抵达伊斯兰堡参加谈判 (U.S. representatives arrived in Islamabad on the 20th to participate in negotiations)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BB%A3%E8%A1%A820%E6%97%A5%E6%8A%B5%E8%BE%BE%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%E5%8F%82%E5%8A%A0%E8%B0%88%E5%88%A4%23) `176.7K 🔥` `NEW`
1. [刘宇宁南京演唱会](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%8D%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%23) `152.7K 🔥` `NEW`
1. [铁路12306已拒绝出票105.6万张](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8105.6%E4%B8%87%E5%BC%A0%23) `1.0M 🔥` `+25%`
1. [全球规模最大零食店将暂停销售3天](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%A7%84%E6%A8%A1%E6%9C%80%E5%A4%A7%E9%9B%B6%E9%A3%9F%E5%BA%97%E5%B0%86%E6%9A%82%E5%81%9C%E9%94%80%E5%94%AE3%E5%A4%A9%23) `704.8K 🔥` `+81%`
1. [金莎晒结婚五金](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E7%BB%93%E5%A9%9A%E4%BA%94%E9%87%91%23) `486.2K 🔥` `+27%`
1. [虞书欣父亲索赔17w败诉 (Yu Shuxin’s father lost the lawsuit claiming 17w)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E7%B4%A2%E8%B5%9417w%E8%B4%A5%E8%AF%89%23) `482.1K 🔥` `+33%`
1. [梁晶晶称流产5次失去7个孩子](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%99%B6%E6%99%B6%E7%A7%B0%E6%B5%81%E4%BA%A75%E6%AC%A1%E5%A4%B1%E5%8E%BB7%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `466.3K 🔥` `+44%`
1. [曝李小冉退出浪姐](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `454.1K 🔥` `+36%`
1. [彩礼10万被起诉后退一半及月嫂费](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E7%A4%BC10%E4%B8%87%E8%A2%AB%E8%B5%B7%E8%AF%89%E5%90%8E%E9%80%80%E4%B8%80%E5%8D%8A%E5%8F%8A%E6%9C%88%E5%AB%82%E8%B4%B9%23) `448.2K 🔥` `+119%`
1. [薛之谦方回应李雨桐被行拘](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `444.8K 🔥` `+36%`
1. [男子美国摆摊进货1元卖5美元](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BE%8E%E5%9B%BD%E6%91%86%E6%91%8A%E8%BF%9B%E8%B4%A71%E5%85%83%E5%8D%965%E7%BE%8E%E5%85%83%23) `437.4K 🔥` `+113%`
1. [张雪机车第7 (Zhang Xue motorcycle No. 7)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AC%AC7%23) `431.2K 🔥` `+36%`
1. [Jennie八年来都长一个样](https://s.weibo.com/weibo?q=%23Jennie%E5%85%AB%E5%B9%B4%E6%9D%A5%E9%83%BD%E9%95%BF%E4%B8%80%E4%B8%AA%E6%A0%B7%23) `409.1K 🔥` `+32%`
1. [14天骨盆回正](https://s.weibo.com/weibo?q=%2314%E5%A4%A9%E9%AA%A8%E7%9B%86%E5%9B%9E%E6%AD%A3%23) `370.5K 🔥` `+21%`
1. [古天乐宣萱 一如既往的般配](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%AE%A3%E8%90%B1%20%E4%B8%80%E5%A6%82%E6%97%A2%E5%BE%80%E7%9A%84%E8%88%AC%E9%85%8D%23) `368.8K 🔥` `+22%`
1. [沈梦辰连续4年做热玛吉脸越打越薄 (Shen Mengchen’s face became thinner and thinner after having Thermage for 4 consecutive years)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%81%9A%E7%83%AD%E7%8E%9B%E5%90%89%E8%84%B8%E8%B6%8A%E6%89%93%E8%B6%8A%E8%96%84%23) `258.7K 🔥` `+48%`
1. [时代少年团接驳车](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%8E%A5%E9%A9%B3%E8%BD%A6%23) `238.0K 🔥` `+52%`
1. [新农人玩转种菜黑科技](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%9C%E4%BA%BA%E7%8E%A9%E8%BD%AC%E7%A7%8D%E8%8F%9C%E9%BB%91%E7%A7%91%E6%8A%80%23) `783.6K 🔥`
1. [出门和不出门过的是两种人生 (Going out and not going out are two different lives.)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%97%A8%E5%92%8C%E4%B8%8D%E5%87%BA%E9%97%A8%E8%BF%87%E7%9A%84%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `646.2K 🔥`
1. [2米蟒蛇吞下1只鸡后被卡鸡笼](https://s.weibo.com/weibo?q=%232%E7%B1%B3%E8%9F%92%E8%9B%87%E5%90%9E%E4%B8%8B1%E5%8F%AA%E9%B8%A1%E5%90%8E%E8%A2%AB%E5%8D%A1%E9%B8%A1%E7%AC%BC%23) `591.2K 🔥`
1. [薛之谦方公开李雨桐行政处罚决定书 (Joker Xue releases administrative penalty decision on Li Yutong)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%96%B9%E5%85%AC%E5%BC%80%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%A1%8C%E6%94%BF%E5%A4%84%E7%BD%9A%E5%86%B3%E5%AE%9A%E4%B9%A6%23) `301.9K 🔥`
1. [专家称黄金完成了阶段性的历史使命](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E9%BB%84%E9%87%91%E5%AE%8C%E6%88%90%E4%BA%86%E9%98%B6%E6%AE%B5%E6%80%A7%E7%9A%84%E5%8E%86%E5%8F%B2%E4%BD%BF%E5%91%BD%23) `285.4K 🔥`
1. [侯明昊曾舜晞是一个组合出道的](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%9B%BE%E8%88%9C%E6%99%9E%E6%98%AF%E4%B8%80%E4%B8%AA%E7%BB%84%E5%90%88%E5%87%BA%E9%81%93%E7%9A%84%23) `283.5K 🔥`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `281.3K 🔥`
1. [仙逆 (Immortal Ni)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `238.2K 🔥`
1. [贺娇龙接班人曝光](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E6%8E%A5%E7%8F%AD%E4%BA%BA%E6%9B%9D%E5%85%89%23) `183.4K 🔥`
1. [突然明白了什么叫课题分离 (Suddenly I understood what separation of subjects means)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E4%BB%80%E4%B9%88%E5%8F%AB%E8%AF%BE%E9%A2%98%E5%88%86%E7%A6%BB%23) `175.3K 🔥`
1. [豆包变豆脚了 (The bean bag turned into bean feet)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8F%98%E8%B1%86%E8%84%9A%E4%BA%86%23) `660.4K 🔥` `-21%`
1. [金像奖 (Academy Awards)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `601.7K 🔥` `-47%`
1. [宗师 露脸 (Grandmaster shows his face)](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%20%E9%9C%B2%E8%84%B8%23) `491.6K 🔥` `-25%`
1. [张雪机车 (Zhang Xue motorcycle)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `414.4K 🔥` `-40%`
1. [东部战区舰艇编队赴西太平洋演训 (Eastern theater warship formation goes to Western Pacific for training)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E8%88%B0%E8%89%87%E7%BC%96%E9%98%9F%E8%B5%B4%E8%A5%BF%E5%A4%AA%E5%B9%B3%E6%B4%8B%E6%BC%94%E8%AE%AD%23) `259.6K 🔥` `-22%`
1. [惠英红金像奖定制红裙](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E9%87%91%E5%83%8F%E5%A5%96%E5%AE%9A%E5%88%B6%E7%BA%A2%E8%A3%99%23) `222.5K 🔥` `-26%`
1. [张雪机车荷兰站第二回合第7](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%8D%B7%E5%85%B0%E7%AB%99%E7%AC%AC%E4%BA%8C%E5%9B%9E%E5%90%88%E7%AC%AC7%23) `217.2K 🔥` `-35%`
1. [鹿晗黑色果然显瘦](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E9%BB%91%E8%89%B2%E6%9E%9C%E7%84%B6%E6%98%BE%E7%98%A6%23) `189.9K 🔥` `-28%`
1. [王一博车轮 85105 (Wang Yibo wheels 85105)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BD%A6%E8%BD%AE%2085105%23) `176.5K 🔥` `-27%`
1. [舒淇金像奖新晋导演](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E9%87%91%E5%83%8F%E5%A5%96%E6%96%B0%E6%99%8B%E5%AF%BC%E6%BC%94%23) `154.2K 🔥` `-27%`
1. [夫妻骑车为躲狗摔倒致妻死亡 (Couple fell down while trying to hide from dog while riding bicycle, killing wife)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%AA%91%E8%BD%A6%E4%B8%BA%E8%BA%B2%E7%8B%97%E6%91%94%E5%80%92%E8%87%B4%E5%A6%BB%E6%AD%BB%E4%BA%A1%23) `152.7K 🔥` `-36%`
1. [杜华王一博赛后合照](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%9B%E5%90%8E%E5%90%88%E7%85%A7%23) `152.7K 🔥` `-25%`

Updated at 2026-04-19 22:27:12

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
