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

1. [文化中国行美好如夏至 (Cultural trip to China is as beautiful as the summer solstice)](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E4%B8%AD%E5%9B%BD%E8%A1%8C%E7%BE%8E%E5%A5%BD%E5%A6%82%E5%A4%8F%E8%87%B3%23) `1.1M 🔥` `NEW`
1. [女孩点燃野草父亲扑火不幸身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%82%B9%E7%87%83%E9%87%8E%E8%8D%89%E7%88%B6%E4%BA%B2%E6%89%91%E7%81%AB%E4%B8%8D%E5%B9%B8%E8%BA%AB%E4%BA%A1%23) `1.1M 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `1.1M 🔥` `NEW`
1. [高考志愿指南](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%BF%97%E6%84%BF%E6%8C%87%E5%8D%97%23) `981.2K 🔥` `NEW`
1. [三大85花白玉兰场刊介绍](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A785%E8%8A%B1%E7%99%BD%E7%8E%89%E5%85%B0%E5%9C%BA%E5%88%8A%E4%BB%8B%E7%BB%8D%23) `455.4K 🔥` `NEW`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `452.8K 🔥` `NEW`
1. [中国男篮vs澳大利亚男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%94%B7%E7%AF%AE%23) `449.4K 🔥` `NEW`
1. [建议父亲节放在母亲节的第二天](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%88%B6%E4%BA%B2%E8%8A%82%E6%94%BE%E5%9C%A8%E6%AF%8D%E4%BA%B2%E8%8A%82%E7%9A%84%E7%AC%AC%E4%BA%8C%E5%A4%A9%23) `446.5K 🔥` `NEW`
1. [雷军回应被小学生吐槽](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%90%90%E6%A7%BD%23) `442.6K 🔥` `NEW`
1. [单依纯舞台疑似抄袭安室奈美惠](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%88%9E%E5%8F%B0%E7%96%91%E4%BC%BC%E6%8A%84%E8%A2%AD%E5%AE%89%E5%AE%A4%E5%A5%88%E7%BE%8E%E6%83%A0%23) `439.1K 🔥` `NEW`
1. [余华说朱一龙退出文城很及时 (Yu Hua said that Zhu Yilong's withdrawal from Wencheng was timely)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E8%AF%B4%E6%9C%B1%E4%B8%80%E9%BE%99%E9%80%80%E5%87%BA%E6%96%87%E5%9F%8E%E5%BE%88%E5%8F%8A%E6%97%B6%23) `436.5K 🔥` `NEW`
1. [天赐爸爸称怀孕时没有告诉子女](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%88%B8%E7%88%B8%E7%A7%B0%E6%80%80%E5%AD%95%E6%97%B6%E6%B2%A1%E6%9C%89%E5%91%8A%E8%AF%89%E5%AD%90%E5%A5%B3%23) `434.0K 🔥` `NEW`
1. [白鹿早期竟然这么清纯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%97%A9%E6%9C%9F%E7%AB%9F%E7%84%B6%E8%BF%99%E4%B9%88%E6%B8%85%E7%BA%AF%23) `425.6K 🔥` `NEW`
1. [金价大跌消费者涌入柜台](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E6%B6%88%E8%B4%B9%E8%80%85%E6%B6%8C%E5%85%A5%E6%9F%9C%E5%8F%B0%23) `423.5K 🔥` `NEW`
1. [周洁琼来看IOI演唱会了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B4%81%E7%90%BC%E6%9D%A5%E7%9C%8BIOI%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `418.9K 🔥` `NEW`
1. [官方通报山东万福河遭污染](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%B1%B1%E4%B8%9C%E4%B8%87%E7%A6%8F%E6%B2%B3%E9%81%AD%E6%B1%A1%E6%9F%93%23) `417.1K 🔥` `NEW`
1. [海棠春官宣](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%A3%A0%E6%98%A5%E5%AE%98%E5%AE%A3%23) `414.0K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `361.4K 🔥` `NEW`
1. [侯明昊歌手见活动见开机见](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%AD%8C%E6%89%8B%E8%A7%81%E6%B4%BB%E5%8A%A8%E8%A7%81%E5%BC%80%E6%9C%BA%E8%A7%81%23) `302.7K 🔥` `NEW`
1. [黄灿灿小手一挥就把王濛抓住了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B0%8F%E6%89%8B%E4%B8%80%E6%8C%A5%E5%B0%B1%E6%8A%8A%E7%8E%8B%E6%BF%9B%E6%8A%93%E4%BD%8F%E4%BA%86%23) `291.7K 🔥` `NEW`
1. [十日终焉亮相华语新剧海推馆 (The new Chinese drama will finally appear in the Haitong Hall on the 10th)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E4%BA%AE%E7%9B%B8%E5%8D%8E%E8%AF%AD%E6%96%B0%E5%89%A7%E6%B5%B7%E6%8E%A8%E9%A6%86%23) `278.6K 🔥` `NEW`
1. [王俊凯注册新商标carrymood](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%B3%A8%E5%86%8C%E6%96%B0%E5%95%86%E6%A0%87carrymood%23) `278.4K 🔥` `NEW`
1. [爸爸熟睡压住宝宝挣扎许久未果](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%86%9F%E7%9D%A1%E5%8E%8B%E4%BD%8F%E5%AE%9D%E5%AE%9D%E6%8C%A3%E6%89%8E%E8%AE%B8%E4%B9%85%E6%9C%AA%E6%9E%9C%23) `277.2K 🔥` `NEW`
1. [联合国会议爆发激烈争吵](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD%E4%BC%9A%E8%AE%AE%E7%88%86%E5%8F%91%E6%BF%80%E7%83%88%E4%BA%89%E5%90%B5%23) `276.8K 🔥` `NEW`
1. [邓超说孙俪和他领完证哭了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E8%AF%B4%E5%AD%99%E4%BF%AA%E5%92%8C%E4%BB%96%E9%A2%86%E5%AE%8C%E8%AF%81%E5%93%AD%E4%BA%86%23) `276.5K 🔥` `NEW`
1. [白鹿去看艺术体操比赛了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8E%BB%E7%9C%8B%E8%89%BA%E6%9C%AF%E4%BD%93%E6%93%8D%E6%AF%94%E8%B5%9B%E4%BA%86%23) `262.3K 🔥` `NEW`
1. [杨紫白玉兰场刊介绍](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E5%9C%BA%E5%88%8A%E4%BB%8B%E7%BB%8D%23) `245.4K 🔥` `NEW`
1. [西班牙若再被爆冷将失去晋级主动权](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%8B%A5%E5%86%8D%E8%A2%AB%E7%88%86%E5%86%B7%E5%B0%86%E5%A4%B1%E5%8E%BB%E6%99%8B%E7%BA%A7%E4%B8%BB%E5%8A%A8%E6%9D%83%23) `195.9K 🔥` `NEW`
1. [李小冉告别五公发文](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%91%8A%E5%88%AB%E4%BA%94%E5%85%AC%E5%8F%91%E6%96%87%23) `190.0K 🔥` `NEW`
1. [日本FIFA排名升至世界第16](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%ACFIFA%E6%8E%92%E5%90%8D%E5%8D%87%E8%87%B3%E4%B8%96%E7%95%8C%E7%AC%AC16%23) `179.6K 🔥` `NEW`
1. [安静公主李昀锐合照 (A group photo of Princess Anjing and Li Yunrui)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E6%9D%8E%E6%98%80%E9%94%90%E5%90%88%E7%85%A7%23) `172.6K 🔥` `NEW`
1. [日本2050世界杯宣言](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC2050%E4%B8%96%E7%95%8C%E6%9D%AF%E5%AE%A3%E8%A8%80%23) `162.0K 🔥` `NEW`
1. [医生说孩子剩18个月外公续命9年](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%AD%A9%E5%AD%90%E5%89%A918%E4%B8%AA%E6%9C%88%E5%A4%96%E5%85%AC%E7%BB%AD%E5%91%BD9%E5%B9%B4%23) `153.9K 🔥` `NEW`
1. [邻居家挂的艾叶总感觉怪怪的](https://s.weibo.com/weibo?q=%23%E9%82%BB%E5%B1%85%E5%AE%B6%E6%8C%82%E7%9A%84%E8%89%BE%E5%8F%B6%E6%80%BB%E6%84%9F%E8%A7%89%E6%80%AA%E6%80%AA%E7%9A%84%23) `151.3K 🔥` `NEW`
1. [小英给牛化妆](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E7%BB%99%E7%89%9B%E5%8C%96%E5%A6%86%23) `149.3K 🔥` `NEW`
1. [离职收到的恭喜比结婚时都多](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E6%94%B6%E5%88%B0%E7%9A%84%E6%81%AD%E5%96%9C%E6%AF%94%E7%BB%93%E5%A9%9A%E6%97%B6%E9%83%BD%E5%A4%9A%23) `148.0K 🔥` `NEW`
1. [小米汽车内购优惠](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%86%85%E8%B4%AD%E4%BC%98%E6%83%A0%23) `137.9K 🔥` `NEW`
1. [数学博士生2年研究被AI抢发](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E5%8D%9A%E5%A3%AB%E7%94%9F2%E5%B9%B4%E7%A0%94%E7%A9%B6%E8%A2%ABAI%E6%8A%A2%E5%8F%91%23) `1.2M 🔥` `+417%`
1. [Prada米兰男装秀 (Prada Milan menswear show)](https://s.weibo.com/weibo?q=%23Prada%E7%B1%B3%E5%85%B0%E7%94%B7%E8%A3%85%E7%A7%80%23) `1.1M 🔥` `+239%`
1. [爸爸不收红包是全国统一的吗 (Is it a nationwide rule that dads don’t accept red envelopes?)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%8D%E6%94%B6%E7%BA%A2%E5%8C%85%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%E5%90%97%23) `1.1M 🔥` `+257%`
1. [杨天真复胖](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E5%A4%8D%E8%83%96%23) `429.4K 🔥` `+28%`
1. [夫妻肺部感染撬开家中地板长满霉菌](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E8%82%BA%E9%83%A8%E6%84%9F%E6%9F%93%E6%92%AC%E5%BC%80%E5%AE%B6%E4%B8%AD%E5%9C%B0%E6%9D%BF%E9%95%BF%E6%BB%A1%E9%9C%89%E8%8F%8C%23) `281.5K 🔥`
1. [披荆斩棘2026拟邀阵容 (Overcoming obstacles 2026 proposed lineup)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%E6%8B%9F%E9%82%80%E9%98%B5%E5%AE%B9%23) `206.2K 🔥`
1. [蔡磊说将亲眼见证渐冻症被终结 (Cai Lei said he would witness the end of ALS with his own eyes)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E8%AF%B4%E5%B0%86%E4%BA%B2%E7%9C%BC%E8%A7%81%E8%AF%81%E6%B8%90%E5%86%BB%E7%97%87%E8%A2%AB%E7%BB%88%E7%BB%93%23) `1.2M 🔥` `-27%`
1. [我不知道螺蛳粉你这是怎么了](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E8%9E%BA%E8%9B%B3%E7%B2%89%E4%BD%A0%E8%BF%99%E6%98%AF%E6%80%8E%E4%B9%88%E4%BA%86%23) `496.2K 🔥` `-31%`
1. [蔡磊发布倒计时演讲](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%8F%91%E5%B8%83%E5%80%92%E8%AE%A1%E6%97%B6%E6%BC%94%E8%AE%B2%23) `276.6K 🔥` `-58%`
1. [国内金饰价格迎来大幅下调](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E8%BF%8E%E6%9D%A5%E5%A4%A7%E5%B9%85%E4%B8%8B%E8%B0%83%23) `253.8K 🔥` `-27%`
1. [虞书欣长生骨眼妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%95%BF%E7%94%9F%E9%AA%A8%E7%9C%BC%E5%A6%86%23) `184.2K 🔥` `-40%`
1. [曝徐艺洋在美国生的孩子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `179.0K 🔥` `-32%`
1. [人民日报批烂梗泛滥](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%89%B9%E7%83%82%E6%A2%97%E6%B3%9B%E6%BB%A5%23) `157.0K 🔥` `-83%`
1. [看完洞洞鞋生产过程感觉买贵了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%94%9F%E4%BA%A7%E8%BF%87%E7%A8%8B%E6%84%9F%E8%A7%89%E4%B9%B0%E8%B4%B5%E4%BA%86%23) `149.7K 🔥` `-41%`
1. [父亲节 (Father's Day)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%8A%82%23) `138.3K 🔥` `-48%`

Updated at 2026-06-21 19:50:56

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
