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

1. [中方对以方说法感到震惊 (China is shocked by Israel’s statement)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AF%B9%E4%BB%A5%E6%96%B9%E8%AF%B4%E6%B3%95%E6%84%9F%E5%88%B0%E9%9C%87%E6%83%8A%23) `1.1M 🔥` `NEW`
1. [我的美食日记](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E7%BE%8E%E9%A3%9F%E6%97%A5%E8%AE%B0%23) `340.0K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `234.1K 🔥` `NEW`
1. [路虎别停奔驰致追尾涉刑事案件](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8E%E5%88%AB%E5%81%9C%E5%A5%94%E9%A9%B0%E8%87%B4%E8%BF%BD%E5%B0%BE%E6%B6%89%E5%88%91%E4%BA%8B%E6%A1%88%E4%BB%B6%23) `190.8K 🔥` `NEW`
1. [AI盛行 周杰伦坚持手搓](https://s.weibo.com/weibo?q=%23AI%E7%9B%9B%E8%A1%8C%20%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%9D%9A%E6%8C%81%E6%89%8B%E6%90%93%23) `145.8K 🔥` `NEW`
1. [哄自己去面试的理由又多了](https://s.weibo.com/weibo?q=%23%E5%93%84%E8%87%AA%E5%B7%B1%E5%8E%BB%E9%9D%A2%E8%AF%95%E7%9A%84%E7%90%86%E7%94%B1%E5%8F%88%E5%A4%9A%E4%BA%86%23) `143.6K 🔥` `NEW`
1. [年薪60万男子找下级借200万被辞](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%96%AA60%E4%B8%87%E7%94%B7%E5%AD%90%E6%89%BE%E4%B8%8B%E7%BA%A7%E5%80%9F200%E4%B8%87%E8%A2%AB%E8%BE%9E%23) `143.4K 🔥` `NEW`
1. [老板称5元水饺店每天能赚1千元](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E7%A7%B05%E5%85%83%E6%B0%B4%E9%A5%BA%E5%BA%97%E6%AF%8F%E5%A4%A9%E8%83%BD%E8%B5%9A1%E5%8D%83%E5%85%83%23) `141.6K 🔥` `NEW`
1. [胡先煦秒删博](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%A7%92%E5%88%A0%E5%8D%9A%23) `140.7K 🔥` `NEW`
1. [腾讯市值暴跌至4.7万亿港元](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%B8%82%E5%80%BC%E6%9A%B4%E8%B7%8C%E8%87%B34.7%E4%B8%87%E4%BA%BF%E6%B8%AF%E5%85%83%23) `84.6K 🔥` `NEW`
1. [医院回应女子体检三份报告不同 (The hospital responded to three different reports of the woman’s physical examination)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E4%BD%93%E6%A3%80%E4%B8%89%E4%BB%BD%E6%8A%A5%E5%91%8A%E4%B8%8D%E5%90%8C%23) `84.3K 🔥` `NEW`
1. [消防员火场救出男子被困妻儿后倒地](https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%98%B2%E5%91%98%E7%81%AB%E5%9C%BA%E6%95%91%E5%87%BA%E7%94%B7%E5%AD%90%E8%A2%AB%E5%9B%B0%E5%A6%BB%E5%84%BF%E5%90%8E%E5%80%92%E5%9C%B0%23) `73.3K 🔥` `NEW`
1. [菲律宾女子赴广州结婚登机前被拦](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%A5%B3%E5%AD%90%E8%B5%B4%E5%B9%BF%E5%B7%9E%E7%BB%93%E5%A9%9A%E7%99%BB%E6%9C%BA%E5%89%8D%E8%A2%AB%E6%8B%A6%23) `72.9K 🔥` `NEW`
1. [7只狗狗被偷后逃亡17公里找回家](https://s.weibo.com/weibo?q=%237%E5%8F%AA%E7%8B%97%E7%8B%97%E8%A2%AB%E5%81%B7%E5%90%8E%E9%80%83%E4%BA%A117%E5%85%AC%E9%87%8C%E6%89%BE%E5%9B%9E%E5%AE%B6%23) `72.6K 🔥` `NEW`
1. [丁禹兮 沪上潮男](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E6%B2%AA%E4%B8%8A%E6%BD%AE%E7%94%B7%23) `72.4K 🔥` `NEW`
1. [1岁半宝宝移植术后O型血变为A型](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E5%AE%9D%E5%AE%9D%E7%A7%BB%E6%A4%8D%E6%9C%AF%E5%90%8EO%E5%9E%8B%E8%A1%80%E5%8F%98%E4%B8%BAA%E5%9E%8B%23) `57.9K 🔥` `NEW`
1. [乒乓球要有双打世界杯了](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E8%A6%81%E6%9C%89%E5%8F%8C%E6%89%93%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%86%23) `56.4K 🔥` `NEW`
1. [奔跑吧14常驻嘉宾阵容](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%E5%B8%B8%E9%A9%BB%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `814.6K 🔥` `+392%`
1. [女子控诉90万全款买房隔夜飙涨10万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8E%A7%E8%AF%8990%E4%B8%87%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E9%9A%94%E5%A4%9C%E9%A3%99%E6%B6%A810%E4%B8%87%23) `219.8K 🔥` `+87%`
1. [女子将20万黄金藏豆瓣酱里寄骗子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%8620%E4%B8%87%E9%BB%84%E9%87%91%E8%97%8F%E8%B1%86%E7%93%A3%E9%85%B1%E9%87%8C%E5%AF%84%E9%AA%97%E5%AD%90%23) `218.9K 🔥` `+70%`
1. [何与薯香鸡排夯爆了 (Ho Yu's potato-flavored chicken steak is so delicious)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E8%96%AF%E9%A6%99%E9%B8%A1%E6%8E%92%E5%A4%AF%E7%88%86%E4%BA%86%23) `196.5K 🔥` `+31%`
1. [宝妈每天用84消毒患上罕见病](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%AF%8F%E5%A4%A9%E7%94%A884%E6%B6%88%E6%AF%92%E6%82%A3%E4%B8%8A%E7%BD%95%E8%A7%81%E7%97%85%23) `192.7K 🔥` `+106%`
1. [黄金跌个没完](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E4%B8%AA%E6%B2%A1%E5%AE%8C%23) `188.1K 🔥` `+48%`
1. [中方回应美报告所谓2027攻台计划](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BE%8E%E6%8A%A5%E5%91%8A%E6%89%80%E8%B0%932027%E6%94%BB%E5%8F%B0%E8%AE%A1%E5%88%92%23) `187.3K 🔥` `+39%`
1. [伊朗发动第63波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E7%AC%AC63%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `146.1K 🔥` `+55%`
1. [闲鱼有点东西](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E6%9C%89%E7%82%B9%E4%B8%9C%E8%A5%BF%23) `145.4K 🔥` `+49%`
1. [疑似胡歌初恋女友发文 (Suspected to be Hu Ge’s first love girlfriend’s post)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E8%83%A1%E6%AD%8C%E5%88%9D%E6%81%8B%E5%A5%B3%E5%8F%8B%E5%8F%91%E6%96%87%23) `138.2K 🔥` `+48%`
1. [睡觉前才刷牙是错误的](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E5%89%8D%E6%89%8D%E5%88%B7%E7%89%99%E6%98%AF%E9%94%99%E8%AF%AF%E7%9A%84%23) `136.1K 🔥` `+55%`
1. [吃甜品的漂亮姐姐迪丽热巴](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%94%9C%E5%93%81%E7%9A%84%E6%BC%82%E4%BA%AE%E5%A7%90%E5%A7%90%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `135.7K 🔥` `+45%`
1. [乐华娱乐报警了](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%E5%A8%B1%E4%B9%90%E6%8A%A5%E8%AD%A6%E4%BA%86%23) `122.6K 🔥` `+33%`
1. [数读2025海洋经济公报 (Digital reading of the 2025 Marine Economic Bulletin)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB2025%E6%B5%B7%E6%B4%8B%E7%BB%8F%E6%B5%8E%E5%85%AC%E6%8A%A5%23) `658.0K 🔥`
1. [北大毕业男子仅送外卖一天](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%AF%95%E4%B8%9A%E7%94%B7%E5%AD%90%E4%BB%85%E9%80%81%E5%A4%96%E5%8D%96%E4%B8%80%E5%A4%A9%23) `188.9K 🔥`
1. [油价 (oil price)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `139.9K 🔥`
1. [外交部回应伊朗拉里贾尼遇害 (Ministry of Foreign Affairs responds to the murder of Larijani in Iran)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E4%BC%8A%E6%9C%97%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E9%81%87%E5%AE%B3%23) `137.1K 🔥`
1. [AI观众 AI粉丝 AI打分](https://s.weibo.com/weibo?q=%23AI%E8%A7%82%E4%BC%97%20AI%E7%B2%89%E4%B8%9D%20AI%E6%89%93%E5%88%86%23) `109.4K 🔥`
1. [蔡康永陪小S复工](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E9%99%AA%E5%B0%8FS%E5%A4%8D%E5%B7%A5%23) `97.1K 🔥`
1. [日本夫妻遗忘30多年的股票翻85倍](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%AB%E5%A6%BB%E9%81%97%E5%BF%9830%E5%A4%9A%E5%B9%B4%E7%9A%84%E8%82%A1%E7%A5%A8%E7%BF%BB85%E5%80%8D%23) `84.2K 🔥`
1. [女生跳舞时被男生撞后下一秒转场](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%B7%B3%E8%88%9E%E6%97%B6%E8%A2%AB%E7%94%B7%E7%94%9F%E6%92%9E%E5%90%8E%E4%B8%8B%E4%B8%80%E7%A7%92%E8%BD%AC%E5%9C%BA%23) `83.8K 🔥`
1. [张凌赫杂志 (Zhang Linghe Magazine)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9D%82%E5%BF%97%23) `82.1K 🔥`
1. [岳雨婷直播美颜掉了](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E7%9B%B4%E6%92%AD%E7%BE%8E%E9%A2%9C%E6%8E%89%E4%BA%86%23) `75.5K 🔥`
1. [以后穿勃肯鞋去猫咖](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E7%A9%BF%E5%8B%83%E8%82%AF%E9%9E%8B%E5%8E%BB%E7%8C%AB%E5%92%96%23) `68.2K 🔥`
1. [金泰妍全家福共用一张脸](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E5%A6%8D%E5%85%A8%E5%AE%B6%E7%A6%8F%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `64.5K 🔥`
1. [家长什么时候才能接受孩子平庸](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%89%8D%E8%83%BD%E6%8E%A5%E5%8F%97%E5%AD%A9%E5%AD%90%E5%B9%B3%E5%BA%B8%23) `56.1K 🔥`
1. [涉密人员婚假擅自出境被通报批评 (Secret personnel were notified and criticized for leaving the country without permission during marriage leave)](https://s.weibo.com/weibo?q=%23%E6%B6%89%E5%AF%86%E4%BA%BA%E5%91%98%E5%A9%9A%E5%81%87%E6%93%85%E8%87%AA%E5%87%BA%E5%A2%83%E8%A2%AB%E9%80%9A%E6%8A%A5%E6%89%B9%E8%AF%84%23) `194.1K 🔥` `-82%`
1. [央行坚定维护股票等市场平稳运行](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E5%9D%9A%E5%AE%9A%E7%BB%B4%E6%8A%A4%E8%82%A1%E7%A5%A8%E7%AD%89%E5%B8%82%E5%9C%BA%E5%B9%B3%E7%A8%B3%E8%BF%90%E8%A1%8C%23) `192.3K 🔥` `-75%`
1. [沈月拍出了徐志胜人生照片 (Shen Yue took photos of Xu Zhisheng’s life)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%8B%8D%E5%87%BA%E4%BA%86%E5%BE%90%E5%BF%97%E8%83%9C%E4%BA%BA%E7%94%9F%E7%85%A7%E7%89%87%23) `189.7K 🔥` `-65%`
1. [男子从年轻买到退休终于中1046万 (Man bought his retirement at a young age and finally won 10.46 million)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%8E%E5%B9%B4%E8%BD%BB%E4%B9%B0%E5%88%B0%E9%80%80%E4%BC%91%E7%BB%88%E4%BA%8E%E4%B8%AD1046%E4%B8%87%23) `111.4K 🔥` `-34%`
1. [蓝莓价格大跳水了 (Blueberry prices plummet)](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%B3%E6%B0%B4%E4%BA%86%23) `82.7K 🔥` `-25%`
1. [王楚钦孙颖莎双打世界杯海报](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%8F%8C%E6%89%93%E4%B8%96%E7%95%8C%E6%9D%AF%E6%B5%B7%E6%8A%A5%23) `81.2K 🔥` `-32%`
1. [在公司点奶茶差点被劝退了 (I almost got asked to leave when I ordered milk tea at the company.)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%85%AC%E5%8F%B8%E7%82%B9%E5%A5%B6%E8%8C%B6%E5%B7%AE%E7%82%B9%E8%A2%AB%E5%8A%9D%E9%80%80%E4%BA%86%23) `72.3K 🔥` `-42%`
1. [郭宇欣杀青哭了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E6%9D%80%E9%9D%92%E5%93%AD%E4%BA%86%23) `60.3K 🔥` `-31%`
1. [日本将向美国赠送250棵樱花树](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B0%86%E5%90%91%E7%BE%8E%E5%9B%BD%E8%B5%A0%E9%80%81250%E6%A3%B5%E6%A8%B1%E8%8A%B1%E6%A0%91%23) `58.7K 🔥` `-39%`

Updated at 2026-03-19 18:25:35

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
