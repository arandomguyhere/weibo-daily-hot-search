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

1. [又是赏花好时节 (It’s a good time to enjoy flowers again)](https://s.weibo.com/weibo?q=%23%E5%8F%88%E6%98%AF%E8%B5%8F%E8%8A%B1%E5%A5%BD%E6%97%B6%E8%8A%82%23) `638.8K 🔥` `NEW`
1. [泰国女星遭救援人员性侵拍裸照](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%98%9F%E9%81%AD%E6%95%91%E6%8F%B4%E4%BA%BA%E5%91%98%E6%80%A7%E4%BE%B5%E6%8B%8D%E8%A3%B8%E7%85%A7%23) `615.9K 🔥` `NEW`
1. [张杰回应张凌赫送花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%81%E8%8A%B1%E7%AF%AE%23) `402.0K 🔥` `NEW`
1. [许昕说国家队大门永远给所有人打开](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%AF%B4%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%A4%A7%E9%97%A8%E6%B0%B8%E8%BF%9C%E7%BB%99%E6%89%80%E6%9C%89%E4%BA%BA%E6%89%93%E5%BC%80%23) `340.8K 🔥` `NEW`
1. [张雪师父牙哥发声](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B8%88%E7%88%B6%E7%89%99%E5%93%A5%E5%8F%91%E5%A3%B0%23) `298.8K 🔥` `NEW`
1. [美国不管霍尔木兹海峡了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%8D%E7%AE%A1%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E4%BA%86%23) `211.4K 🔥` `NEW`
1. [导师和导员都沉默了](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E5%B8%88%E5%92%8C%E5%AF%BC%E5%91%98%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `195.3K 🔥` `NEW`
1. [这个代言是时团自己谈下来的吧](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E4%BB%A3%E8%A8%80%E6%98%AF%E6%97%B6%E5%9B%A2%E8%87%AA%E5%B7%B1%E8%B0%88%E4%B8%8B%E6%9D%A5%E7%9A%84%E5%90%A7%23) `184.7K 🔥` `NEW`
1. [30元买正版迪士尼玩偶原是偷来的](https://s.weibo.com/weibo?q=%2330%E5%85%83%E4%B9%B0%E6%AD%A3%E7%89%88%E8%BF%AA%E5%A3%AB%E5%B0%BC%E7%8E%A9%E5%81%B6%E5%8E%9F%E6%98%AF%E5%81%B7%E6%9D%A5%E7%9A%84%23) `175.6K 🔥` `NEW`
1. [伊朗拒绝谈判的真实底牌](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%92%E7%BB%9D%E8%B0%88%E5%88%A4%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%BA%95%E7%89%8C%23) `175.5K 🔥` `NEW`
1. [以色列遭三周来最大规模导弹袭击 (Israel suffers largest missile attack in three weeks)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%81%AD%E4%B8%89%E5%91%A8%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `168.8K 🔥` `NEW`
1. [官方通报天湖医院解聘全体职工](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A4%A9%E6%B9%96%E5%8C%BB%E9%99%A2%E8%A7%A3%E8%81%98%E5%85%A8%E4%BD%93%E8%81%8C%E5%B7%A5%23) `127.9K 🔥` `NEW`
1. [张凌赫科普自闭症不是心理疾病](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%A7%91%E6%99%AE%E8%87%AA%E9%97%AD%E7%97%87%E4%B8%8D%E6%98%AF%E5%BF%83%E7%90%86%E7%96%BE%E7%97%85%23) `115.9K 🔥` `NEW`
1. [清明拼假4天休9天](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E6%8B%BC%E5%81%874%E5%A4%A9%E4%BC%919%E5%A4%A9%23) `112.7K 🔥` `NEW`
1. [日本股市暴跌1200点](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%82%A1%E5%B8%82%E6%9A%B4%E8%B7%8C1200%E7%82%B9%23) `109.7K 🔥` `NEW`
1. [敦煌一半沙漠一半花海太绝了](https://s.weibo.com/weibo?q=%23%E6%95%A6%E7%85%8C%E4%B8%80%E5%8D%8A%E6%B2%99%E6%BC%A0%E4%B8%80%E5%8D%8A%E8%8A%B1%E6%B5%B7%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `101.0K 🔥` `NEW`
1. [伊能静方致歉](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E6%96%B9%E8%87%B4%E6%AD%89%23) `100.5K 🔥` `NEW`
1. [多位明星曾直播卖优思益](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E6%98%8E%E6%98%9F%E6%9B%BE%E7%9B%B4%E6%92%AD%E5%8D%96%E4%BC%98%E6%80%9D%E7%9B%8A%23) `94.1K 🔥` `NEW`
1. [比papi更像苏菲玛索的人找到了](https://s.weibo.com/weibo?q=%23%E6%AF%94papi%E6%9B%B4%E5%83%8F%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2%E7%9A%84%E4%BA%BA%E6%89%BE%E5%88%B0%E4%BA%86%23) `92.4K 🔥` `NEW`
1. [迪丽热巴分享公主抱陈飞宇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%88%86%E4%BA%AB%E5%85%AC%E4%B8%BB%E6%8A%B1%E9%99%88%E9%A3%9E%E5%AE%87%23) `88.5K 🔥` `NEW`
1. [撸了一只认错人的猫 (Petted a cat that recognized the wrong person)](https://s.weibo.com/weibo?q=%23%E6%92%B8%E4%BA%86%E4%B8%80%E5%8F%AA%E8%AE%A4%E9%94%99%E4%BA%BA%E7%9A%84%E7%8C%AB%23) `87.5K 🔥` `NEW`
1. [口蹄疫](https://s.weibo.com/weibo?q=%23%E5%8F%A3%E8%B9%84%E7%96%AB%23) `87.5K 🔥` `NEW`
1. [周杰伦白西装昆凌黑羽绒服](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%99%BD%E8%A5%BF%E8%A3%85%E6%98%86%E5%87%8C%E9%BB%91%E7%BE%BD%E7%BB%92%E6%9C%8D%23) `86.7K 🔥` `NEW`
1. [法国车手34岁夺冠感谢张雪机车圆梦](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%BD%A6%E6%89%8B34%E5%B2%81%E5%A4%BA%E5%86%A0%E6%84%9F%E8%B0%A2%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9C%86%E6%A2%A6%23) `71.5K 🔥` `NEW`
1. [徐志胜回应录综艺不做脱口秀](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%9B%9E%E5%BA%94%E5%BD%95%E7%BB%BC%E8%89%BA%E4%B8%8D%E5%81%9A%E8%84%B1%E5%8F%A3%E7%A7%80%23) `68.0K 🔥` `NEW`
1. [学完蒙语就可以凭肉眼配钥匙了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%AE%8C%E8%92%99%E8%AF%AD%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%87%AD%E8%82%89%E7%9C%BC%E9%85%8D%E9%92%A5%E5%8C%99%E4%BA%86%23) `67.5K 🔥` `NEW`
1. [黄杨钿甜新剧被鞭刑梦回小楚乔](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E6%96%B0%E5%89%A7%E8%A2%AB%E9%9E%AD%E5%88%91%E6%A2%A6%E5%9B%9E%E5%B0%8F%E6%A5%9A%E4%B9%94%23) `66.6K 🔥` `NEW`
1. [狗 热量炸弹也算炸弹](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E7%83%AD%E9%87%8F%E7%82%B8%E5%BC%B9%E4%B9%9F%E7%AE%97%E7%82%B8%E5%BC%B9%23) `65.4K 🔥` `NEW`
1. [美国一婴儿光天化日在街头被枪杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%A9%B4%E5%84%BF%E5%85%89%E5%A4%A9%E5%8C%96%E6%97%A5%E5%9C%A8%E8%A1%97%E5%A4%B4%E8%A2%AB%E6%9E%AA%E6%9D%80%23) `831.1K 🔥` `+826%`
1. [优思益营销策划公司被立案调查 (Yousiyi Marketing Planning Company was placed under investigation)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E8%90%A5%E9%94%80%E7%AD%96%E5%88%92%E5%85%AC%E5%8F%B8%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `290.9K 🔥` `+42%`
1. [阿花花酱 优思益 (Ahuahuajiang Yousiyi)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%8A%B1%E8%8A%B1%E9%85%B1%20%E4%BC%98%E6%80%9D%E7%9B%8A%23) `212.7K 🔥` `+85%`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `207.5K 🔥` `+100%`
1. [刘亦菲老钱风大片 (Liu Yifei old money style blockbusters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%80%81%E9%92%B1%E9%A3%8E%E5%A4%A7%E7%89%87%23) `122.0K 🔥` `+29%`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `1.1M 🔥`
1. [2026款小鹏MONA今日上市 (2026 Xpeng MONA launched today)](https://s.weibo.com/weibo?q=%232026%E6%AC%BE%E5%B0%8F%E9%B9%8FMONA%E4%BB%8A%E6%97%A5%E4%B8%8A%E5%B8%82%23) `629.6K 🔥`
1. [银行回应老人存10万变7万](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E8%80%81%E4%BA%BA%E5%AD%9810%E4%B8%87%E5%8F%987%E4%B8%87%23) `212.8K 🔥`
1. [胡彦斌连夜关闭了人脸支付](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E8%BF%9E%E5%A4%9C%E5%85%B3%E9%97%AD%E4%BA%86%E4%BA%BA%E8%84%B8%E6%94%AF%E4%BB%98%23) `212.7K 🔥`
1. [李若彤发布致歉声明 (Li Ruotong issued an apology statement)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E5%8F%91%E5%B8%83%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `207.4K 🔥`
1. [董宇辉曾说产品上播10天前有人试吃](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E6%9B%BE%E8%AF%B4%E4%BA%A7%E5%93%81%E4%B8%8A%E6%92%AD10%E5%A4%A9%E5%89%8D%E6%9C%89%E4%BA%BA%E8%AF%95%E5%90%83%23) `175.4K 🔥`
1. [男孩捡50g金条咬了一口竟是真的](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%8D%A150g%E9%87%91%E6%9D%A1%E5%92%AC%E4%BA%86%E4%B8%80%E5%8F%A3%E7%AB%9F%E6%98%AF%E7%9C%9F%E7%9A%84%23) `148.4K 🔥`
1. [主播陆续回应优思益售后](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E9%99%86%E7%BB%AD%E5%9B%9E%E5%BA%94%E4%BC%98%E6%80%9D%E7%9B%8A%E5%94%AE%E5%90%8E%23) `134.4K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `89.5K 🔥`
1. [刘晓艳网课现场没有学生一个人聊嗨了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E7%BD%91%E8%AF%BE%E7%8E%B0%E5%9C%BA%E6%B2%A1%E6%9C%89%E5%AD%A6%E7%94%9F%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%81%8A%E5%97%A8%E4%BA%86%23) `293.6K 🔥` `-53%`
1. [乘风一口气官宣34位送考人](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%98%E5%AE%A334%E4%BD%8D%E9%80%81%E8%80%83%E4%BA%BA%23) `174.2K 🔥` `-42%`
1. [特朗普话音刚落伊朗导弹袭向以色列](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%9D%E9%9F%B3%E5%88%9A%E8%90%BD%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `151.3K 🔥` `-38%`
1. [张雪说被资本搞懵了 (Zhang Xue said she was confused by capital.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B4%E8%A2%AB%E8%B5%84%E6%9C%AC%E6%90%9E%E6%87%B5%E4%BA%86%23) `119.4K 🔥` `-69%`
1. [张雪 (Zhang Xue)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `99.2K 🔥` `-87%`
1. [Wayward曝369休息原因](https://s.weibo.com/weibo?q=%23Wayward%E6%9B%9D369%E4%BC%91%E6%81%AF%E5%8E%9F%E5%9B%A0%23) `90.4K 🔥` `-56%`
1. [今麦郎手打擦边20年不能停产就完了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E9%BA%A6%E9%83%8E%E6%89%8B%E6%89%93%E6%93%A6%E8%BE%B920%E5%B9%B4%E4%B8%8D%E8%83%BD%E5%81%9C%E4%BA%A7%E5%B0%B1%E5%AE%8C%E4%BA%86%23) `65.3K 🔥` `-67%`

Updated at 2026-04-02 15:44:07

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
