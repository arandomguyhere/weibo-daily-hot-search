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

1. [白鲸宝宝吹蜡烛把头吹扁了 (Beluga baby blows out candle and flattens its head)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B2%B8%E5%AE%9D%E5%AE%9D%E5%90%B9%E8%9C%A1%E7%83%9B%E6%8A%8A%E5%A4%B4%E5%90%B9%E6%89%81%E4%BA%86%23) `61.4K 🔥` `NEW`
1. [医生回应女子被狗舔脚确诊三级暴露](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%8B%97%E8%88%94%E8%84%9A%E7%A1%AE%E8%AF%8A%E4%B8%89%E7%BA%A7%E6%9A%B4%E9%9C%B2%23) `60.2K 🔥` `NEW`
1. [4胞胎爸爸哄完孩子睡觉天亮了](https://s.weibo.com/weibo?q=%234%E8%83%9E%E8%83%8E%E7%88%B8%E7%88%B8%E5%93%84%E5%AE%8C%E5%AD%A9%E5%AD%90%E7%9D%A1%E8%A7%89%E5%A4%A9%E4%BA%AE%E4%BA%86%23) `58.0K 🔥` `NEW`
1. [因救人错过面试的小伙被录取](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%95%91%E4%BA%BA%E9%94%99%E8%BF%87%E9%9D%A2%E8%AF%95%E7%9A%84%E5%B0%8F%E4%BC%99%E8%A2%AB%E5%BD%95%E5%8F%96%23) `57.3K 🔥` `NEW`
1. [这是谁做的AI短片](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E8%B0%81%E5%81%9A%E7%9A%84AI%E7%9F%AD%E7%89%87%23) `56.6K 🔥` `NEW`
1. [胡彦斌歌王 (Hu Yanbin King of Songs)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E6%AD%8C%E7%8E%8B%23) `615.3K 🔥` `+130%`
1. [小米高管玩梗被指越界](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E7%8E%A9%E6%A2%97%E8%A2%AB%E6%8C%87%E8%B6%8A%E7%95%8C%23) `451.0K 🔥` `+438%`
1. [6组数据看我国外贸延续良好增长态势 (6 sets of data show that my country’s foreign trade continues to grow well)](https://s.weibo.com/weibo?q=%236%E7%BB%84%E6%95%B0%E6%8D%AE%E7%9C%8B%E6%88%91%E5%9B%BD%E5%A4%96%E8%B4%B8%E5%BB%B6%E7%BB%AD%E8%89%AF%E5%A5%BD%E5%A2%9E%E9%95%BF%E6%80%81%E5%8A%BF%23) `418.6K 🔥` `+67%`
1. [Marshall携二手玫瑰守住现场 (Marshall brought second-hand roses to guard the scene)](https://s.weibo.com/weibo?q=%23Marshall%E6%90%BA%E4%BA%8C%E6%89%8B%E7%8E%AB%E7%91%B0%E5%AE%88%E4%BD%8F%E7%8E%B0%E5%9C%BA%23) `415.7K 🔥` `+320%`
1. [看完鸟类正脸秒懂证件照](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E9%B8%9F%E7%B1%BB%E6%AD%A3%E8%84%B8%E7%A7%92%E6%87%82%E8%AF%81%E4%BB%B6%E7%85%A7%23) `175.7K 🔥` `+52%`
1. [中餐厅 (Chinese restaurant)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%23) `124.0K 🔥` `+66%`
1. [湖人官方宣传被指除名詹眉 (The Lakers' official promotion was accused of removing Zhan Mei)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%AE%98%E6%96%B9%E5%AE%A3%E4%BC%A0%E8%A2%AB%E6%8C%87%E9%99%A4%E5%90%8D%E8%A9%B9%E7%9C%89%23) `120.9K 🔥` `+59%`
1. [台风白海豚已进入24小时警戒线 (Typhoon White Dolphin has entered the 24-hour warning line)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E8%BF%9B%E5%85%A524%E5%B0%8F%E6%97%B6%E8%AD%A6%E6%88%92%E7%BA%BF%23) `92.4K 🔥` `+92%`
1. [理解了孩子平庸就承欢膝下的意义 (Understand the meaning of accepting a mediocre child)](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%A7%A3%E4%BA%86%E5%AD%A9%E5%AD%90%E5%B9%B3%E5%BA%B8%E5%B0%B1%E6%89%BF%E6%AC%A2%E8%86%9D%E4%B8%8B%E7%9A%84%E6%84%8F%E4%B9%89%23) `84.8K 🔥` `+47%`
1. [23岁博士回应确诊胃癌晚期 (23-year-old doctor responds to diagnosis of advanced gastric cancer)](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%8D%9A%E5%A3%AB%E5%9B%9E%E5%BA%94%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23) `82.6K 🔥` `+44%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `78.8K 🔥` `+39%`
1. [国乒男单 梯队建设 (National table tennis men's singles echelon construction)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%20%E6%A2%AF%E9%98%9F%E5%BB%BA%E8%AE%BE%23) `74.8K 🔥` `+37%`
1. [一个没有空调外挂机的城市 (A city without air conditioning units)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%B2%A1%E6%9C%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%8C%82%E6%9C%BA%E7%9A%84%E5%9F%8E%E5%B8%82%23) `71.8K 🔥` `+29%`
1. [湖人 詹姆斯](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%20%E8%A9%B9%E5%A7%86%E6%96%AF%23) `63.6K 🔥` `+31%`
1. [外国网友也认了中式天庭 (Foreign netizens also recognized the Chinese style heaven)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B9%9F%E8%AE%A4%E4%BA%86%E4%B8%AD%E5%BC%8F%E5%A4%A9%E5%BA%AD%23) `63.4K 🔥` `+118%`
1. [张凌赫苍兰诀婚服里面破洞裤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%8B%8D%E5%85%B0%E8%AF%80%E5%A9%9A%E6%9C%8D%E9%87%8C%E9%9D%A2%E7%A0%B4%E6%B4%9E%E8%A3%A4%23) `63.0K 🔥` `+65%`
1. [山水不会再相逢人也不会再见 (Landscapes will never meet again, and people will never meet again.)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E6%B0%B4%E4%B8%8D%E4%BC%9A%E5%86%8D%E7%9B%B8%E9%80%A2%E4%BA%BA%E4%B9%9F%E4%B8%8D%E4%BC%9A%E5%86%8D%E8%A7%81%23) `62.8K 🔥` `+35%`
1. [女子生下4胞胎被全家宠上天称嫁对人了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B4%E8%83%9E%E8%83%8E%E8%A2%AB%E5%85%A8%E5%AE%B6%E5%AE%A0%E4%B8%8A%E5%A4%A9%E7%A7%B0%E5%AB%81%E5%AF%B9%E4%BA%BA%E4%BA%86%23) `62.6K 🔥` `+33%`
1. [胚胎案妻子称如胚胎销毁定要离婚 (In embryo case, wife says she will get divorced if embryos are destroyed)](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E7%A7%B0%E5%A6%82%E8%83%9A%E8%83%8E%E9%94%80%E6%AF%81%E5%AE%9A%E8%A6%81%E7%A6%BB%E5%A9%9A%23) `61.7K 🔥` `+71%`
1. [王安宇晒一念江南片场照 (Wang Anyu shares photos from the set of Yi Nian Jiangnan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%99%92%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E7%89%87%E5%9C%BA%E7%85%A7%23) `61.7K 🔥` `+52%`
1. [歌手总决赛](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%23) `61.2K 🔥` `+55%`
1. [歌手收视率](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%94%B6%E8%A7%86%E7%8E%87%23) `61.0K 🔥` `+84%`
1. [中国要用5万亿织一张网 (China wants to use 5 trillion to weave a web)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%A6%81%E7%94%A85%E4%B8%87%E4%BA%BF%E7%BB%87%E4%B8%80%E5%BC%A0%E7%BD%91%23) `60.6K 🔥` `+67%`
1. [买家秀和卖家秀反着来了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E5%AE%B6%E7%A7%80%E5%92%8C%E5%8D%96%E5%AE%B6%E7%A7%80%E5%8F%8D%E7%9D%80%E6%9D%A5%E4%BA%86%23) `60.3K 🔥` `+69%`
1. [耳帝 (Erdi)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%23) `60.0K 🔥` `+33%`
1. [员工刻意隐瞒自身价值遭索赔200万 (Employee deliberately concealed his own value and was compensated for 2 million yuan)](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%88%BB%E6%84%8F%E9%9A%90%E7%9E%92%E8%87%AA%E8%BA%AB%E4%BB%B7%E5%80%BC%E9%81%AD%E7%B4%A2%E8%B5%94200%E4%B8%87%23) `59.7K 🔥` `+116%`
1. [十个勤天](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%23) `59.4K 🔥` `+43%`
1. [离树不到10秒的活荔枝 (Live lychee less than 10 seconds from the tree)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E6%A0%91%E4%B8%8D%E5%88%B010%E7%A7%92%E7%9A%84%E6%B4%BB%E8%8D%94%E6%9E%9D%23) `59.1K 🔥` `+91%`
1. [Bin哥我们错了](https://s.weibo.com/weibo?q=%23Bin%E5%93%A5%E6%88%91%E4%BB%AC%E9%94%99%E4%BA%86%23) `59.1K 🔥` `+97%`
1. [歌手历届歌王阵容](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%8E%86%E5%B1%8A%E6%AD%8C%E7%8E%8B%E9%98%B5%E5%AE%B9%23) `58.8K 🔥` `+54%`
1. [突然理解了大爷的绝望感 (Suddenly I understood the despair of the uncle)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E5%A4%A7%E7%88%B7%E7%9A%84%E7%BB%9D%E6%9C%9B%E6%84%9F%23) `58.4K 🔥` `+61%`
1. [中山大学23岁直博生确诊胃癌晚期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A623%E5%B2%81%E7%9B%B4%E5%8D%9A%E7%94%9F%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23) `58.3K 🔥` `+111%`
1. [披荆斩棘 (Overcoming obstacles)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `57.7K 🔥` `+103%`
1. [宋亚轩张真源彩排合照 (Rehearsal photo of Song Yaxuan and Zhang Zhenyuan)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%BD%A9%E6%8E%92%E5%90%88%E7%85%A7%23) `57.5K 🔥` `+96%`
1. [天赐给侯明昊肚子打码](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%BB%99%E4%BE%AF%E6%98%8E%E6%98%8A%E8%82%9A%E5%AD%90%E6%89%93%E7%A0%81%23) `57.1K 🔥` `+129%`
1. [要不念相思刺棠互换男女主吧 (Why don't you miss Xiangtang and swap the male and female protagonists?)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%B8%8D%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%88%BA%E6%A3%A0%E4%BA%92%E6%8D%A2%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%90%A7%23) `56.8K 🔥` `+106%`
1. [万妮达第三 (Wan Nida third)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E7%AC%AC%E4%B8%89%23) `56.4K 🔥` `+104%`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `56.0K 🔥` `+120%`
1. [U17国足点球大战淘汰河床晋级决赛 (The U17 national football team defeated River Plate in a penalty shootout to advance to the finals)](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E7%82%B9%E7%90%83%E5%A4%A7%E6%88%98%E6%B7%98%E6%B1%B0%E6%B2%B3%E5%BA%8A%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `55.9K 🔥` `+103%`
1. [原来戴泳帽真的会影响颜值](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%B4%E6%B3%B3%E5%B8%BD%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E9%A2%9C%E5%80%BC%23) `414.0K 🔥`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `67.8K 🔥`
1. [齐豫 躲歌王 (Qi Yu King of Tibetan Songs)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%20%E8%BA%B2%E6%AD%8C%E7%8E%8B%23) `64.5K 🔥`
1. [陈情令外鹅版VS内鹅版](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%83%85%E4%BB%A4%E5%A4%96%E9%B9%85%E7%89%88VS%E5%86%85%E9%B9%85%E7%89%88%23) `63.5K 🔥`
1. [欧阳娜娜超预期 (Ouyang Nana exceeds expectations)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E8%B6%85%E9%A2%84%E6%9C%9F%23) `62.3K 🔥`
1. [困扰一年的低频噪音元凶找到了](https://s.weibo.com/weibo?q=%23%E5%9B%B0%E6%89%B0%E4%B8%80%E5%B9%B4%E7%9A%84%E4%BD%8E%E9%A2%91%E5%99%AA%E9%9F%B3%E5%85%83%E5%87%B6%E6%89%BE%E5%88%B0%E4%BA%86%23) `62.1K 🔥`
1. [歌手总决赛 孙燕姿吴青峰太伟大了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%20%E5%AD%99%E7%87%95%E5%A7%BF%E5%90%B4%E9%9D%92%E5%B3%B0%E5%A4%AA%E4%BC%9F%E5%A4%A7%E4%BA%86%23) `155.7K 🔥` `-34%`

Updated at 2026-08-08 07:00:44

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
