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

1. [B太可撤销对大山女孩的18万捐赠 (B Tai can revoke his 180,000 donation to Dashan Girl)](https://s.weibo.com/weibo?q=%23B%E5%A4%AA%E5%8F%AF%E6%92%A4%E9%94%80%E5%AF%B9%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E7%9A%8418%E4%B8%87%E6%8D%90%E8%B5%A0%23) `1.1M 🔥` `NEW`
1. [一季度进出口创新高](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E8%BF%9B%E5%87%BA%E5%8F%A3%E5%88%9B%E6%96%B0%E9%AB%98%23) `651.0K 🔥` `NEW`
1. [杨幂 越素越美](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%B6%8A%E7%B4%A0%E8%B6%8A%E7%BE%8E%23) `265.0K 🔥` `NEW`
1. [医生辟谣久坐抖腿能防血栓](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%BE%9F%E8%B0%A3%E4%B9%85%E5%9D%90%E6%8A%96%E8%85%BF%E8%83%BD%E9%98%B2%E8%A1%80%E6%A0%93%23) `220.6K 🔥` `NEW`
1. [白日提灯 be味](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%20be%E5%91%B3%23) `161.0K 🔥` `NEW`
1. [文章面馆 周一不见](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E9%9D%A2%E9%A6%86%20%E5%91%A8%E4%B8%80%E4%B8%8D%E8%A7%81%23) `160.4K 🔥` `NEW`
1. [孟子义颜选缤果Pro有多懂女生](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E9%A2%9C%E9%80%89%E7%BC%A4%E6%9E%9CPro%E6%9C%89%E5%A4%9A%E6%87%82%E5%A5%B3%E7%94%9F%23) `157.4K 🔥` `NEW`
1. [遭割喉男孩仍有一段气管未找到](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%89%B2%E5%96%89%E7%94%B7%E5%AD%A9%E4%BB%8D%E6%9C%89%E4%B8%80%E6%AE%B5%E6%B0%94%E7%AE%A1%E6%9C%AA%E6%89%BE%E5%88%B0%23) `153.9K 🔥` `NEW`
1. [朱珠把女儿当女士来养](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E6%8A%8A%E5%A5%B3%E5%84%BF%E5%BD%93%E5%A5%B3%E5%A3%AB%E6%9D%A5%E5%85%BB%23) `150.5K 🔥` `NEW`
1. [遭秤砣砸中女婴已完成超声检查](https://s.weibo.com/weibo?q=%23%E9%81%AD%E7%A7%A4%E7%A0%A3%E7%A0%B8%E4%B8%AD%E5%A5%B3%E5%A9%B4%E5%B7%B2%E5%AE%8C%E6%88%90%E8%B6%85%E5%A3%B0%E6%A3%80%E6%9F%A5%23) `147.6K 🔥` `NEW`
1. [桃黑黑 胖蛋军团让三追四 (Tao Hei Hei Fat Egg Army let three chase four)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%20%E8%83%96%E8%9B%8B%E5%86%9B%E5%9B%A2%E8%AE%A9%E4%B8%89%E8%BF%BD%E5%9B%9B%23) `117.5K 🔥` `NEW`
1. [阿Sa被名医诊断出轻微中风](https://s.weibo.com/weibo?q=%23%E9%98%BFSa%E8%A2%AB%E5%90%8D%E5%8C%BB%E8%AF%8A%E6%96%AD%E5%87%BA%E8%BD%BB%E5%BE%AE%E4%B8%AD%E9%A3%8E%23) `112.8K 🔥` `NEW`
1. [张晚意个体户只能亲自辟谣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E4%B8%AA%E4%BD%93%E6%88%B7%E5%8F%AA%E8%83%BD%E4%BA%B2%E8%87%AA%E8%BE%9F%E8%B0%A3%23) `104.4K 🔥` `NEW`
1. [伊朗正考虑暂停霍尔木兹海峡航运](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E8%80%83%E8%99%91%E6%9A%82%E5%81%9C%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%88%AA%E8%BF%90%23) `102.3K 🔥` `NEW`
1. [等张泽禹张极换头像](https://s.weibo.com/weibo?q=%23%E7%AD%89%E5%BC%A0%E6%B3%BD%E7%A6%B9%E5%BC%A0%E6%9E%81%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `101.1K 🔥` `NEW`
1. [罗志祥 谁在蛐蛐我](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%20%E8%B0%81%E5%9C%A8%E8%9B%90%E8%9B%90%E6%88%91%23) `97.1K 🔥` `NEW`
1. [牛排店被查唯一干净的竟是喂狗碗](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%8E%92%E5%BA%97%E8%A2%AB%E6%9F%A5%E5%94%AF%E4%B8%80%E5%B9%B2%E5%87%80%E7%9A%84%E7%AB%9F%E6%98%AF%E5%96%82%E7%8B%97%E7%A2%97%23) `96.5K 🔥` `NEW`
1. [鞠婧祎演技](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%BC%94%E6%8A%80%23) `96.4K 🔥` `NEW`
1. [娜扎说我人就漂亮](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E8%AF%B4%E6%88%91%E4%BA%BA%E5%B0%B1%E6%BC%82%E4%BA%AE%23) `95.9K 🔥` `NEW`
1. [网友给拼豆店提建议被老板一一反驳](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%99%E6%8B%BC%E8%B1%86%E5%BA%97%E6%8F%90%E5%BB%BA%E8%AE%AE%E8%A2%AB%E8%80%81%E6%9D%BF%E4%B8%80%E4%B8%80%E5%8F%8D%E9%A9%B3%23) `95.2K 🔥` `NEW`
1. [宋亚轩再多上几节课都大小脸了 (Song Yaxuan will be embarrassed if she takes a few more classes)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%86%8D%E5%A4%9A%E4%B8%8A%E5%87%A0%E8%8A%82%E8%AF%BE%E9%83%BD%E5%A4%A7%E5%B0%8F%E8%84%B8%E4%BA%86%23) `94.8K 🔥` `NEW`
1. [杨清柠新恋情](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B8%85%E6%9F%A0%E6%96%B0%E6%81%8B%E6%83%85%23) `94.7K 🔥` `NEW`
1. [IG战胜TES](https://s.weibo.com/weibo?q=%23IG%E6%88%98%E8%83%9CTES%23) `93.6K 🔥` `NEW`
1. [花海Cat亚运会教练](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7Cat%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%95%99%E7%BB%83%23) `92.6K 🔥` `NEW`
1. [人社局回应查看微信余额才能进面试](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%A4%BE%E5%B1%80%E5%9B%9E%E5%BA%94%E6%9F%A5%E7%9C%8B%E5%BE%AE%E4%BF%A1%E4%BD%99%E9%A2%9D%E6%89%8D%E8%83%BD%E8%BF%9B%E9%9D%A2%E8%AF%95%23) `91.7K 🔥` `NEW`
1. [特别小众的易怒点](https://s.weibo.com/weibo?q=%23%E7%89%B9%E5%88%AB%E5%B0%8F%E4%BC%97%E7%9A%84%E6%98%93%E6%80%92%E7%82%B9%23) `91.0K 🔥` `NEW`
1. [以防你不知道手机发展得有多快](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E6%89%8B%E6%9C%BA%E5%8F%91%E5%B1%95%E5%BE%97%E6%9C%89%E5%A4%9A%E5%BF%AB%23) `90.2K 🔥` `NEW`
1. [五一飞往东南亚航班大规模取消 (Massive cancellations of flights to Southeast Asia on May Day)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E9%A3%9E%E5%BE%80%E4%B8%9C%E5%8D%97%E4%BA%9A%E8%88%AA%E7%8F%AD%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%96%E6%B6%88%23) `256.4K 🔥` `+236%`
1. [怦然心动20岁 (Heart-thumping 20 years old)](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `90.2K 🔥` `+31%`
1. [胖东来多宝鱼被指吃出溯源标签 (Fat Donglai Turbot was accused of eating traceability labels)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%A4%9A%E5%AE%9D%E9%B1%BC%E8%A2%AB%E6%8C%87%E5%90%83%E5%87%BA%E6%BA%AF%E6%BA%90%E6%A0%87%E7%AD%BE%23) `825.1K 🔥`
1. [卖不完的果切都去哪了](https://s.weibo.com/weibo?q=%23%E5%8D%96%E4%B8%8D%E5%AE%8C%E7%9A%84%E6%9E%9C%E5%88%87%E9%83%BD%E5%8E%BB%E5%93%AA%E4%BA%86%23) `233.2K 🔥`
1. [郭敬明的剧连演员本人都看不懂](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E7%9A%84%E5%89%A7%E8%BF%9E%E6%BC%94%E5%91%98%E6%9C%AC%E4%BA%BA%E9%83%BD%E7%9C%8B%E4%B8%8D%E6%87%82%23) `143.9K 🔥`
1. [lululemon中国市场成救命稻草](https://s.weibo.com/weibo?q=%23lululemon%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E6%88%90%E6%95%91%E5%91%BD%E7%A8%BB%E8%8D%89%23) `115.0K 🔥`
1. [体检肝功能都正常怎么就肝癌了 (Liver function tests are normal, so why does he have liver cancer?)](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%A3%80%E8%82%9D%E5%8A%9F%E8%83%BD%E9%83%BD%E6%AD%A3%E5%B8%B8%E6%80%8E%E4%B9%88%E5%B0%B1%E8%82%9D%E7%99%8C%E4%BA%86%23) `107.5K 🔥`
1. [TOP换头像 (TOP change avatar)](https://s.weibo.com/weibo?q=%23TOP%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `107.0K 🔥`
1. [养了7年的猎犬咬死19岁女主人](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%867%E5%B9%B4%E7%9A%84%E7%8C%8E%E7%8A%AC%E5%92%AC%E6%AD%BB19%E5%B2%81%E5%A5%B3%E4%B8%BB%E4%BA%BA%23) `92.7K 🔥`
1. [AG一诺回归](https://s.weibo.com/weibo?q=%23AG%E4%B8%80%E8%AF%BA%E5%9B%9E%E5%BD%92%23) `91.3K 🔥`
1. [沃尔沃汽车99周年 (Volvo Cars 99th Anniversary)](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83%E6%B1%BD%E8%BD%A699%E5%91%A8%E5%B9%B4%23) `326.7K 🔥` `-47%`
1. [Lululemon被调查 (Lululemon under investigation)](https://s.weibo.com/weibo?q=%23Lululemon%E8%A2%AB%E8%B0%83%E6%9F%A5%23) `218.3K 🔥` `-35%`
1. [33岁抗癌博主去世](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%8E%BB%E4%B8%96%23) `199.5K 🔥` `-82%`
1. [谁懂这次换手机的意义](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E8%BF%99%E6%AC%A1%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E6%84%8F%E4%B9%89%23) `162.0K 🔥` `-62%`
1. [TOP更新站位](https://s.weibo.com/weibo?q=%23TOP%E6%9B%B4%E6%96%B0%E7%AB%99%E4%BD%8D%23) `153.0K 🔥` `-29%`
1. [沈清曝王阳杀青宴被指着鼻子骂](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%B8%85%E6%9B%9D%E7%8E%8B%E9%98%B3%E6%9D%80%E9%9D%92%E5%AE%B4%E8%A2%AB%E6%8C%87%E7%9D%80%E9%BC%BB%E5%AD%90%E9%AA%82%23) `144.2K 🔥` `-37%`
1. [朴宝剑 费大厨](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%20%E8%B4%B9%E5%A4%A7%E5%8E%A8%23) `111.6K 🔥` `-51%`
1. [曝等风热吻你两组主演](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E4%B8%A4%E7%BB%84%E4%B8%BB%E6%BC%94%23) `98.0K 🔥` `-62%`
1. [中方从不承认所谓阿鲁纳恰尔邦 (China has never recognized the so-called Arunachal Pradesh)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%BB%8E%E4%B8%8D%E6%89%BF%E8%AE%A4%E6%89%80%E8%B0%93%E9%98%BF%E9%B2%81%E7%BA%B3%E6%81%B0%E5%B0%94%E9%82%A6%23) `97.8K 🔥` `-57%`
1. [外交部回应韩国标注中国台湾](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E9%9F%A9%E5%9B%BD%E6%A0%87%E6%B3%A8%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%23) `97.6K 🔥` `-55%`
1. [马頔为了装修李乃文为了什么 (What did Ma Di do to decorate Li Naiwen?)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%BA%E4%BA%86%E8%A3%85%E4%BF%AE%E6%9D%8E%E4%B9%83%E6%96%87%E4%B8%BA%E4%BA%86%E4%BB%80%E4%B9%88%23) `94.1K 🔥` `-21%`
1. [印度女生拒嫁艾滋男被注射毒血报复](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E7%94%9F%E6%8B%92%E5%AB%81%E8%89%BE%E6%BB%8B%E7%94%B7%E8%A2%AB%E6%B3%A8%E5%B0%84%E6%AF%92%E8%A1%80%E6%8A%A5%E5%A4%8D%23) `93.2K 🔥` `-22%`
1. [朱志鑫 黑猫天使](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E9%BB%91%E7%8C%AB%E5%A4%A9%E4%BD%BF%23) `91.9K 🔥` `-34%`
1. [男女点同一份外卖分量却差一半](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A5%B3%E7%82%B9%E5%90%8C%E4%B8%80%E4%BB%BD%E5%A4%96%E5%8D%96%E5%88%86%E9%87%8F%E5%8D%B4%E5%B7%AE%E4%B8%80%E5%8D%8A%23) `89.4K 🔥` `-37%`
1. [孙怡 者来姨 (Sun Yi Aunt Zhe Lai)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E8%80%85%E6%9D%A5%E5%A7%A8%23) `89.0K 🔥` `-65%`

Updated at 2026-04-14 22:24:42

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
