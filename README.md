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

1. [清华妈妈说对孩子只有2个要求 (Tsinghua mother said she only has two requirements for her children)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A6%88%E5%A6%88%E8%AF%B4%E5%AF%B9%E5%AD%A9%E5%AD%90%E5%8F%AA%E6%9C%892%E4%B8%AA%E8%A6%81%E6%B1%82%23) `246.8K 🔥` `NEW`
1. [诞下5胞胎女子说现在没时间买黄金](https://s.weibo.com/weibo?q=%23%E8%AF%9E%E4%B8%8B5%E8%83%9E%E8%83%8E%E5%A5%B3%E5%AD%90%E8%AF%B4%E7%8E%B0%E5%9C%A8%E6%B2%A1%E6%97%B6%E9%97%B4%E4%B9%B0%E9%BB%84%E9%87%91%23) `244.3K 🔥` `NEW`
1. [0.003克黄金手机贴折算克价达万元](https://s.weibo.com/weibo?q=%230.003%E5%85%8B%E9%BB%84%E9%87%91%E6%89%8B%E6%9C%BA%E8%B4%B4%E6%8A%98%E7%AE%97%E5%85%8B%E4%BB%B7%E8%BE%BE%E4%B8%87%E5%85%83%23) `243.1K 🔥` `NEW`
1. [伊朗驻华使馆降半旗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E4%BD%BF%E9%A6%86%E9%99%8D%E5%8D%8A%E6%97%97%23) `242.3K 🔥` `NEW`
1. [三甲医生回应秦岚嗓子哑了三年](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `241.4K 🔥` `NEW`
1. [中国军号发布视频](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E5%8F%B7%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%23) `188.0K 🔥` `NEW`
1. [美以导弹炸到全球人钱包](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E5%AF%BC%E5%BC%B9%E7%82%B8%E5%88%B0%E5%85%A8%E7%90%83%E4%BA%BA%E9%92%B1%E5%8C%85%23) `148.6K 🔥` `NEW`
1. [郭晓婷回复剧粉](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E5%9B%9E%E5%A4%8D%E5%89%A7%E7%B2%89%23) `145.6K 🔥` `NEW`
1. [黄金石油美联储降息大变局](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9F%B3%E6%B2%B9%E7%BE%8E%E8%81%94%E5%82%A8%E9%99%8D%E6%81%AF%E5%A4%A7%E5%8F%98%E5%B1%80%23) `128.2K 🔥` `NEW`
1. [全球大量投资者告别美国](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E5%A4%A7%E9%87%8F%E6%8A%95%E8%B5%84%E8%80%85%E5%91%8A%E5%88%AB%E7%BE%8E%E5%9B%BD%23) `109.7K 🔥` `NEW`
1. [中国男篮100分 (Chinese men's basketball team 100 points)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE100%E5%88%86%23) `94.6K 🔥` `NEW`
1. [北京国安超级杯夺冠](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89%E8%B6%85%E7%BA%A7%E6%9D%AF%E5%A4%BA%E5%86%A0%23) `80.3K 🔥` `NEW`
1. [赵睿状态](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%9D%BF%E7%8A%B6%E6%80%81%23) `75.0K 🔥` `NEW`
1. [中国男篮险胜中国台北男篮 (Chinese men's basketball team narrowly defeated Chinese Taipei men's basketball team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E9%99%A9%E8%83%9C%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E7%94%B7%E7%AF%AE%23) `860.0K 🔥` `+147%`
1. [哈梅内伊遇害 (Khamenei killed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%87%E5%AE%B3%23) `680.4K 🔥` `+26%`
1. [瓦希迪执掌伊朗伊斯兰革命卫队](https://s.weibo.com/weibo?q=%23%E7%93%A6%E5%B8%8C%E8%BF%AA%E6%89%A7%E6%8E%8C%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%96%AF%E5%85%B0%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%23) `189.0K 🔥` `+27%`
1. [李荣浩 高考界最严厉的父亲](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E9%AB%98%E8%80%83%E7%95%8C%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `187.4K 🔥` `+41%`
1. [赵继伟神仙球](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%BB%A7%E4%BC%9F%E7%A5%9E%E4%BB%99%E7%90%83%23) `127.0K 🔥` `+29%`
1. [伊朗袭击27个美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB27%E4%B8%AA%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `1.4M 🔥`
1. [全国政协会议议程来了 (The agenda for the National Committee of the Chinese People's Political Consultative Conference is here)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%94%BF%E5%8D%8F%E4%BC%9A%E8%AE%AE%E8%AE%AE%E7%A8%8B%E6%9D%A5%E4%BA%86%23) `730.3K 🔥`
1. [沈腾马丽 我欲成冰再也无退路](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E9%A9%AC%E4%B8%BD%20%E6%88%91%E6%AC%B2%E6%88%90%E5%86%B0%E5%86%8D%E4%B9%9F%E6%97%A0%E9%80%80%E8%B7%AF%23) `592.7K 🔥`
1. [官方辟谣医生因未完成创收指标待岗 (Officials refute rumors that doctors are on the job because they did not meet their income-generating targets)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%8C%BB%E7%94%9F%E5%9B%A0%E6%9C%AA%E5%AE%8C%E6%88%90%E5%88%9B%E6%94%B6%E6%8C%87%E6%A0%87%E5%BE%85%E5%B2%97%23) `500.1K 🔥`
1. [将门独后王鹤棣路透 (Wang Hedi, the only queen in the general family, Reuters)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%B7%AF%E9%80%8F%23) `318.4K 🔥`
1. [我在挨骂 稍等呀 (I'm being scolded. Wait a minute.)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9C%A8%E6%8C%A8%E9%AA%82%20%E7%A8%8D%E7%AD%89%E5%91%80%23) `246.0K 🔥`
1. [男子酒后和老婆吵架胸口撕裂40厘米](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E5%92%8C%E8%80%81%E5%A9%86%E5%90%B5%E6%9E%B6%E8%83%B8%E5%8F%A3%E6%92%95%E8%A3%8240%E5%8E%98%E7%B1%B3%23) `245.5K 🔥`
1. [张小满严晓丹分手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%BB%A1%E4%B8%A5%E6%99%93%E4%B8%B9%E5%88%86%E6%89%8B%23) `244.7K 🔥`
1. [蓝眼狐是L3吗 (Is the blue-eyed fox L3?)](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9C%BC%E7%8B%90%E6%98%AFL3%E5%90%97%23) `243.6K 🔥`
1. [以军开始打击伊朗首都心脏地带](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%BC%80%E5%A7%8B%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%BF%83%E8%84%8F%E5%9C%B0%E5%B8%A6%23) `242.6K 🔥`
1. [张元英签售态度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%AD%BE%E5%94%AE%E6%80%81%E5%BA%A6%23) `241.8K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `241.2K 🔥`
1. [杨幂 得罪就得罪吧 (Yang Mi, just offend if you offend me)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E5%BE%97%E7%BD%AA%E5%B0%B1%E5%BE%97%E7%BD%AA%E5%90%A7%23) `241.0K 🔥`
1. [孙俪邓超 伟大的暧昧期](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E9%82%93%E8%B6%85%20%E4%BC%9F%E5%A4%A7%E7%9A%84%E6%9A%A7%E6%98%A7%E6%9C%9F%23) `240.9K 🔥`
1. [一家4口爬山祈福妻子坠亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E7%88%AC%E5%B1%B1%E7%A5%88%E7%A6%8F%E5%A6%BB%E5%AD%90%E5%9D%A0%E4%BA%A1%23) `240.5K 🔥`
1. [秦岚嗓子哑了三年 (Qin Lan has been hoarse for three years)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `233.5K 🔥`
1. [杨紫上次恋爱已是七年前 (Yang Zi’s last relationship was seven years ago)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%8A%E6%AC%A1%E6%81%8B%E7%88%B1%E5%B7%B2%E6%98%AF%E4%B8%83%E5%B9%B4%E5%89%8D%23) `227.6K 🔥`
1. [以军称已向伊朗投掷超1200枚导弹](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E7%A7%B0%E5%B7%B2%E5%90%91%E4%BC%8A%E6%9C%97%E6%8A%95%E6%8E%B7%E8%B6%851200%E6%9E%9A%E5%AF%BC%E5%BC%B9%23) `207.0K 🔥`
1. [谢娜 丁程鑫皮痒痒了哇](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9A%AE%E7%97%92%E7%97%92%E4%BA%86%E5%93%87%23) `100.0K 🔥`
1. [王者荣耀 TF四代 (King of Glory TF fourth generation)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%20TF%E5%9B%9B%E4%BB%A3%23) `94.2K 🔥`
1. [伊朗确认继任者后或将扩大反击 (Iran may expand counterattack after confirming successor)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E8%AE%A4%E7%BB%A7%E4%BB%BB%E8%80%85%E5%90%8E%E6%88%96%E5%B0%86%E6%89%A9%E5%A4%A7%E5%8F%8D%E5%87%BB%23) `524.9K 🔥` `-23%`
1. [六点半下班和七点半下班的差别](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%82%B9%E5%8D%8A%E4%B8%8B%E7%8F%AD%E5%92%8C%E4%B8%83%E7%82%B9%E5%8D%8A%E4%B8%8B%E7%8F%AD%E7%9A%84%E5%B7%AE%E5%88%AB%23) `247.6K 🔥` `-22%`
1. [中国男篮vs中国台北男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E7%94%B7%E7%AF%AE%23) `247.5K 🔥` `-74%`
1. [伊朗总统就哈梅内伊身亡发声明 (Iranian President issues statement on Khamenei's death)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%B0%B1%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%BA%AB%E4%BA%A1%E5%8F%91%E5%A3%B0%E6%98%8E%23) `246.4K 🔥` `-21%`
1. [贝因美 大麻二酚](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%9B%A0%E7%BE%8E%20%E5%A4%A7%E9%BA%BB%E4%BA%8C%E9%85%9A%23) `245.3K 🔥` `-21%`
1. [小镇唯一外卖员靠跑单月入过万 (The only delivery boy in town earns over 10,000 yuan a month by running orders)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%95%87%E5%94%AF%E4%B8%80%E5%A4%96%E5%8D%96%E5%91%98%E9%9D%A0%E8%B7%91%E5%8D%95%E6%9C%88%E5%85%A5%E8%BF%87%E4%B8%87%23) `193.5K 🔥` `-34%`
1. [不建议电脑缩放调成500%](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E7%94%B5%E8%84%91%E7%BC%A9%E6%94%BE%E8%B0%83%E6%88%90500%25%23) `184.2K 🔥` `-38%`
1. [携程回应大马士革到上海机票550万 (Ctrip responds to air tickets from Damascus to Shanghai costing 5.5 million)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%9B%9E%E5%BA%94%E5%A4%A7%E9%A9%AC%E5%A3%AB%E9%9D%A9%E5%88%B0%E4%B8%8A%E6%B5%B7%E6%9C%BA%E7%A5%A8550%E4%B8%87%23) `141.9K 🔥` `-36%`
1. [这样退税最划算](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E9%80%80%E7%A8%8E%E6%9C%80%E5%88%92%E7%AE%97%23) `134.4K 🔥` `-37%`
1. [迪拜机场被炸前记者接到中国同胞 (Reporters received news from Chinese compatriots before Dubai Airport was bombed)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%82%B8%E5%89%8D%E8%AE%B0%E8%80%85%E6%8E%A5%E5%88%B0%E4%B8%AD%E5%9B%BD%E5%90%8C%E8%83%9E%23) `133.4K 🔥` `-34%`
1. [2岁小孩高铁车厢唱歌旅客大打出手 (2-year-old boy sings in high-speed rail carriage and gets into fight with passengers)](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B0%8F%E5%AD%A9%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%94%B1%E6%AD%8C%E6%97%85%E5%AE%A2%E5%A4%A7%E6%89%93%E5%87%BA%E6%89%8B%23) `125.3K 🔥` `-42%`
1. [耙耙柑是很善良的水果 (Mandarin orange is a very kind fruit)](https://s.weibo.com/weibo?q=%23%E8%80%99%E8%80%99%E6%9F%91%E6%98%AF%E5%BE%88%E5%96%84%E8%89%AF%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `120.3K 🔥` `-27%`
1. [蔡思贝被TVB官网除名](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%80%9D%E8%B4%9D%E8%A2%ABTVB%E5%AE%98%E7%BD%91%E9%99%A4%E5%90%8D%23) `102.2K 🔥` `-49%`

Updated at 2026-03-01 18:37:30

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
