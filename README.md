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

1. [Gucci不能再把中国市场当垃圾桶 (Gucci can no longer treat the Chinese market as a trash can)](https://s.weibo.com/weibo?q=%23Gucci%E4%B8%8D%E8%83%BD%E5%86%8D%E6%8A%8A%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E5%BD%93%E5%9E%83%E5%9C%BE%E6%A1%B6%23) `880.5K 🔥` `NEW`
1. [28岁孕妇突发胸闷气促查出肺癌](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%AD%95%E5%A6%87%E7%AA%81%E5%8F%91%E8%83%B8%E9%97%B7%E6%B0%94%E4%BF%83%E6%9F%A5%E5%87%BA%E8%82%BA%E7%99%8C%23) `326.5K 🔥` `NEW`
1. [市监局调查药店发错药致少年肝损伤](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E5%B1%80%E8%B0%83%E6%9F%A5%E8%8D%AF%E5%BA%97%E5%8F%91%E9%94%99%E8%8D%AF%E8%87%B4%E5%B0%91%E5%B9%B4%E8%82%9D%E6%8D%9F%E4%BC%A4%23) `313.7K 🔥` `NEW`
1. [杭州通报诊所一个针头给多人采血](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%80%9A%E6%8A%A5%E8%AF%8A%E6%89%80%E4%B8%80%E4%B8%AA%E9%92%88%E5%A4%B4%E7%BB%99%E5%A4%9A%E4%BA%BA%E9%87%87%E8%A1%80%23) `286.2K 🔥` `NEW`
1. [鹿晗小七预售](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B0%8F%E4%B8%83%E9%A2%84%E5%94%AE%23) `273.1K 🔥` `NEW`
1. [孙怡直播](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9B%B4%E6%92%AD%23) `249.3K 🔥` `NEW`
1. [井川里予回应穿山寨礼服](https://s.weibo.com/weibo?q=%23%E4%BA%95%E5%B7%9D%E9%87%8C%E4%BA%88%E5%9B%9E%E5%BA%94%E7%A9%BF%E5%B1%B1%E5%AF%A8%E7%A4%BC%E6%9C%8D%23) `218.8K 🔥` `NEW`
1. [王一博聊天状态](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%81%8A%E5%A4%A9%E7%8A%B6%E6%80%81%23) `183.0K 🔥` `NEW`
1. [露芜衣寄灵圆房](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E8%8A%9C%E8%A1%A3%E5%AF%84%E7%81%B5%E5%9C%86%E6%88%BF%23) `179.4K 🔥` `NEW`
1. [男子偷7000元电脑当废品卖40元](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%B77000%E5%85%83%E7%94%B5%E8%84%91%E5%BD%93%E5%BA%9F%E5%93%81%E5%8D%9640%E5%85%83%23) `164.9K 🔥` `NEW`
1. [胡峥楠出任小米集团副总裁 (Hu Zhengnan appointed as vice president of Xiaomi Group)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%B3%A5%E6%A5%A0%E5%87%BA%E4%BB%BB%E5%B0%8F%E7%B1%B3%E9%9B%86%E5%9B%A2%E5%89%AF%E6%80%BB%E8%A3%81%23) `154.3K 🔥` `NEW`
1. [幽灵外卖是啥](https://s.weibo.com/weibo?q=%23%E5%B9%BD%E7%81%B5%E5%A4%96%E5%8D%96%E6%98%AF%E5%95%A5%23) `147.0K 🔥` `NEW`
1. [因反对装电梯住户养200只猫报复邻居](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E5%8F%8D%E5%AF%B9%E8%A3%85%E7%94%B5%E6%A2%AF%E4%BD%8F%E6%88%B7%E5%85%BB200%E5%8F%AA%E7%8C%AB%E6%8A%A5%E5%A4%8D%E9%82%BB%E5%B1%85%23) `139.7K 🔥` `NEW`
1. [大码女装店为什么要用S码模特](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%A0%81%E5%A5%B3%E8%A3%85%E5%BA%97%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%A8S%E7%A0%81%E6%A8%A1%E7%89%B9%23) `135.7K 🔥` `NEW`
1. [Gr对战AXIZ](https://s.weibo.com/weibo?q=%23Gr%E5%AF%B9%E6%88%98AXIZ%23) `128.8K 🔥` `NEW`
1. [氧化菊 泼水节](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%20%E6%B3%BC%E6%B0%B4%E8%8A%82%23) `1.8M 🔥` `+560%`
1. [优质网络主播中国行山西行](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%B4%A8%E7%BD%91%E7%BB%9C%E4%B8%BB%E6%92%AD%E4%B8%AD%E5%9B%BD%E8%A1%8C%E5%B1%B1%E8%A5%BF%E8%A1%8C%23) `978.9K 🔥` `+35%`
1. [工作为什么默认能用我的手机 (Why can I use my mobile phone by default at work?)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%B8%BA%E4%BB%80%E4%B9%88%E9%BB%98%E8%AE%A4%E8%83%BD%E7%94%A8%E6%88%91%E7%9A%84%E6%89%8B%E6%9C%BA%23) `521.7K 🔥` `+29%`
1. [刘浩存 没有给代拍好脸色的义务](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E6%B2%A1%E6%9C%89%E7%BB%99%E4%BB%A3%E6%8B%8D%E5%A5%BD%E8%84%B8%E8%89%B2%E7%9A%84%E4%B9%89%E5%8A%A1%23) `363.8K 🔥` `+59%`
1. [月鳞绮纪四位主演出镜时长 (The screen time of the four main actors of Moon Scale Qiji)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%9B%9B%E4%BD%8D%E4%B8%BB%E6%BC%94%E5%87%BA%E9%95%9C%E6%97%B6%E9%95%BF%23) `333.7K 🔥` `+55%`
1. [都美竹被强执](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%BE%8E%E7%AB%B9%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `331.0K 🔥` `+60%`
1. [将军请喝茶](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%86%9B%E8%AF%B7%E5%96%9D%E8%8C%B6%23) `326.4K 🔥` `+21%`
1. [钟丽缇女儿Jaden回应不是混血 (Christy Chung’s daughter Jaden responded that she is not mixed race)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%A5%B3%E5%84%BFJaden%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%98%AF%E6%B7%B7%E8%A1%80%23) `288.4K 🔥` `+25%`
1. [阚清子发浪姐大合照](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%8F%91%E6%B5%AA%E5%A7%90%E5%A4%A7%E5%90%88%E7%85%A7%23) `253.9K 🔥` `+39%`
1. [拼多多美团京东淘天抖音被罚35亿 (Pinduoduo, Meituan, JD.com, Taotian and Douyin were fined 3.5 billion)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%BE%8E%E5%9B%A2%E4%BA%AC%E4%B8%9C%E6%B7%98%E5%A4%A9%E6%8A%96%E9%9F%B3%E8%A2%AB%E7%BD%9A35%E4%BA%BF%23) `1.2M 🔥`
1. [雷军问直播放歌有没有版权问题](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E9%97%AE%E7%9B%B4%E6%92%AD%E6%94%BE%E6%AD%8C%E6%9C%89%E6%B2%A1%E6%9C%89%E7%89%88%E6%9D%83%E9%97%AE%E9%A2%98%23) `334.0K 🔥`
1. [朱迅已抗癌20年](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%BF%85%E5%B7%B2%E6%8A%97%E7%99%8C20%E5%B9%B4%23) `332.4K 🔥`
1. [林肯号航母提供的餐食情况](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E6%8F%90%E4%BE%9B%E7%9A%84%E9%A4%90%E9%A3%9F%E6%83%85%E5%86%B5%23) `331.2K 🔥`
1. [虞书欣丸子头](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%B8%E5%AD%90%E5%A4%B4%23) `329.4K 🔥`
1. [摊主因借给学生手机被家长逼到下跪](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%B8%BB%E5%9B%A0%E5%80%9F%E7%BB%99%E5%AD%A6%E7%94%9F%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%AE%B6%E9%95%BF%E9%80%BC%E5%88%B0%E4%B8%8B%E8%B7%AA%23) `328.4K 🔥`
1. [穆祉丞二维码](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E4%BA%8C%E7%BB%B4%E7%A0%81%23) `327.6K 🔥`
1. [李小冉一公第一名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E7%AC%AC%E4%B8%80%E5%90%8D%23) `326.7K 🔥`
1. [陈奕恒回应私联争议](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%9B%9E%E5%BA%94%E7%A7%81%E8%81%94%E4%BA%89%E8%AE%AE%23) `306.8K 🔥`
1. [温峥嵘二公选人被拒绝五次 (Wen Zhengrong was rejected five times as candidate for the second election)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E4%BA%8C%E5%85%AC%E9%80%89%E4%BA%BA%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%BA%94%E6%AC%A1%23) `301.6K 🔥`
1. [张雪机车夺冠后首秀 (Zhang Xue’s motorcycle debut after winning the championship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E5%90%8E%E9%A6%96%E7%A7%80%23) `289.7K 🔥`
1. [多平台公然传播被禁多年的暗黑动漫 (Dark anime that has been banned for many years is openly disseminated on multiple platforms)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%85%AC%E7%84%B6%E4%BC%A0%E6%92%AD%E8%A2%AB%E7%A6%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E6%9A%97%E9%BB%91%E5%8A%A8%E6%BC%AB%23) `284.6K 🔥`
1. [20岁孙女偷偷结婚7旬爷爷落泪](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%AD%99%E5%A5%B3%E5%81%B7%E5%81%B7%E7%BB%93%E5%A9%9A7%E6%97%AC%E7%88%B7%E7%88%B7%E8%90%BD%E6%B3%AA%23) `267.8K 🔥`
1. [妈妈确诊癌症晚期一年后女儿被杀 (Daughter killed one year after mother diagnosed with terminal cancer)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%E4%B8%80%E5%B9%B4%E5%90%8E%E5%A5%B3%E5%84%BF%E8%A2%AB%E6%9D%80%23) `252.5K 🔥`
1. [章泽天外媒生图](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%B3%BD%E5%A4%A9%E5%A4%96%E5%AA%92%E7%94%9F%E5%9B%BE%23) `252.1K 🔥`
1. [老人做饭关气不关灶引发爆燃](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%81%9A%E9%A5%AD%E5%85%B3%E6%B0%94%E4%B8%8D%E5%85%B3%E7%81%B6%E5%BC%95%E5%8F%91%E7%88%86%E7%87%83%23) `221.3K 🔥`
1. [章若楠方补充说明 (Zhang Ruonanfang’s additional explanation)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E6%96%B9%E8%A1%A5%E5%85%85%E8%AF%B4%E6%98%8E%23) `204.5K 🔥`
1. [男子杀人后和妻儿与尸体生活多年](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E4%BA%BA%E5%90%8E%E5%92%8C%E5%A6%BB%E5%84%BF%E4%B8%8E%E5%B0%B8%E4%BD%93%E7%94%9F%E6%B4%BB%E5%A4%9A%E5%B9%B4%23) `184.1K 🔥`
1. [白发或是身体的抗癌警报](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E6%88%96%E6%98%AF%E8%BA%AB%E4%BD%93%E7%9A%84%E6%8A%97%E7%99%8C%E8%AD%A6%E6%8A%A5%23) `162.8K 🔥`
1. [江语晨带孩子们看浪姐](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B8%A6%E5%AD%A9%E5%AD%90%E4%BB%AC%E7%9C%8B%E6%B5%AA%E5%A7%90%23) `148.5K 🔥`
1. [对余某罚没10亿余元](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%BD%99%E6%9F%90%E7%BD%9A%E6%B2%A110%E4%BA%BF%E4%BD%99%E5%85%83%23) `422.1K 🔥` `-53%`
1. [侯明昊天美意品牌代言人 (Hou Minghao Tianmeiyi brand spokesperson)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%A4%A9%E7%BE%8E%E6%84%8F%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `392.4K 🔥` `-39%`
1. [一日本自卫队舰艇进入台湾海峡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F%E8%88%B0%E8%89%87%E8%BF%9B%E5%85%A5%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `371.7K 🔥` `-25%`
1. [责令7平台暂停新增蛋糕店铺](https://s.weibo.com/weibo?q=%23%E8%B4%A3%E4%BB%A47%E5%B9%B3%E5%8F%B0%E6%9A%82%E5%81%9C%E6%96%B0%E5%A2%9E%E8%9B%8B%E7%B3%95%E5%BA%97%E9%93%BA%23) `298.5K 🔥` `-26%`
1. [孙怡动用人脉当上了最不想当的队长 (Sun Yi used her connections to become the captain she least wanted to be.)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%8A%A8%E7%94%A8%E4%BA%BA%E8%84%89%E5%BD%93%E4%B8%8A%E4%BA%86%E6%9C%80%E4%B8%8D%E6%83%B3%E5%BD%93%E7%9A%84%E9%98%9F%E9%95%BF%23) `162.5K 🔥` `-29%`
1. [A股新股王诞生了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%96%B0%E8%82%A1%E7%8E%8B%E8%AF%9E%E7%94%9F%E4%BA%86%23) `158.2K 🔥` `-29%`
1. [男子4.5万月薪工作被前公司搅黄 (A man’s job with a monthly salary of RMB 45,000 was ruined by his former company)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%904.5%E4%B8%87%E6%9C%88%E8%96%AA%E5%B7%A5%E4%BD%9C%E8%A2%AB%E5%89%8D%E5%85%AC%E5%8F%B8%E6%90%85%E9%BB%84%23) `137.2K 🔥` `-36%`

Updated at 2026-04-17 20:43:15

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
