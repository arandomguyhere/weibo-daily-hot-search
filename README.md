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

1. [早春晴朗开场就是床戏](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%BC%80%E5%9C%BA%E5%B0%B1%E6%98%AF%E5%BA%8A%E6%88%8F%23) `537.2K 🔥` `NEW`
1. [GANT全球品牌代言人宋威龙](https://s.weibo.com/weibo?q=%23GANT%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%AE%8B%E5%A8%81%E9%BE%99%23) `534.0K 🔥` `NEW`
1. [刘亦菲梦回19岁时的金鹰女神](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%A2%A6%E5%9B%9E19%E5%B2%81%E6%97%B6%E7%9A%84%E9%87%91%E9%B9%B0%E5%A5%B3%E7%A5%9E%23) `284.8K 🔥` `NEW`
1. [在韩失联女生遇害](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E9%81%87%E5%AE%B3%23) `273.9K 🔥` `NEW`
1. [8点半上班9点办事窗口还没人](https://s.weibo.com/weibo?q=%238%E7%82%B9%E5%8D%8A%E4%B8%8A%E7%8F%AD9%E7%82%B9%E5%8A%9E%E4%BA%8B%E7%AA%97%E5%8F%A3%E8%BF%98%E6%B2%A1%E4%BA%BA%23) `240.9K 🔥` `NEW`
1. [杀害中国女生嫌犯懂神经解剖](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E6%87%82%E7%A5%9E%E7%BB%8F%E8%A7%A3%E5%89%96%23) `226.9K 🔥` `NEW`
1. [蔡徐坤的审美有多绝](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9A%84%E5%AE%A1%E7%BE%8E%E6%9C%89%E5%A4%9A%E7%BB%9D%23) `219.6K 🔥` `NEW`
1. [汪峰女儿小苹果20岁近照](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E5%A5%B3%E5%84%BF%E5%B0%8F%E8%8B%B9%E6%9E%9C20%E5%B2%81%E8%BF%91%E7%85%A7%23) `210.0K 🔥` `NEW`
1. [贵州2岁幼童走失已20小时](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E2%E5%B2%81%E5%B9%BC%E7%AB%A5%E8%B5%B0%E5%A4%B1%E5%B7%B220%E5%B0%8F%E6%97%B6%23) `207.4K 🔥` `NEW`
1. [孙千新剧租房真去了天通苑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E6%96%B0%E5%89%A7%E7%A7%9F%E6%88%BF%E7%9C%9F%E5%8E%BB%E4%BA%86%E5%A4%A9%E9%80%9A%E8%8B%91%23) `175.6K 🔥` `NEW`
1. [杭州电梯事件不是谁先发声谁有理](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%E4%B8%8D%E6%98%AF%E8%B0%81%E5%85%88%E5%8F%91%E5%A3%B0%E8%B0%81%E6%9C%89%E7%90%86%23) `530.4K 🔥` `+134%`
1. [国家反诈中心测出德芙声明是AI](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%8D%E8%AF%88%E4%B8%AD%E5%BF%83%E6%B5%8B%E5%87%BA%E5%BE%B7%E8%8A%99%E5%A3%B0%E6%98%8E%E6%98%AFAI%23) `499.9K 🔥` `+26%`
1. [嫌疑人和在韩遇害女生系师生关系](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E7%96%91%E4%BA%BA%E5%92%8C%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E7%B3%BB%E5%B8%88%E7%94%9F%E5%85%B3%E7%B3%BB%23) `1.7M 🔥`
1. [洪崖洞附近母女疑触电女儿尚未脱险](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E9%99%84%E8%BF%91%E6%AF%8D%E5%A5%B3%E7%96%91%E8%A7%A6%E7%94%B5%E5%A5%B3%E5%84%BF%E5%B0%9A%E6%9C%AA%E8%84%B1%E9%99%A9%23) `908.6K 🔥`
1. [防台风安全防护攻略请收好](https://s.weibo.com/weibo?q=%23%E9%98%B2%E5%8F%B0%E9%A3%8E%E5%AE%89%E5%85%A8%E9%98%B2%E6%8A%A4%E6%94%BB%E7%95%A5%E8%AF%B7%E6%94%B6%E5%A5%BD%23) `742.8K 🔥`
1. [在韩遇害女生生前最后监控曝光](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E7%94%9F%E5%89%8D%E6%9C%80%E5%90%8E%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `734.3K 🔥`
1. [报案人就是凶手](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E6%A1%88%E4%BA%BA%E5%B0%B1%E6%98%AF%E5%87%B6%E6%89%8B%23) `535.7K 🔥`
1. [过得好的人最明显的标志 (The most obvious sign of a person who is doing well)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97%23) `482.4K 🔥`
1. [早春晴朗 (Sunny early spring)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `474.0K 🔥`
1. [金鹰奖 刘亦菲国籍](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%BD%E7%B1%8D%23) `472.4K 🔥`
1. [蛋烘糕奶奶](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%23) `470.7K 🔥`
1. [小酒窝给杜华女儿让C位](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E7%BB%99%E6%9D%9C%E5%8D%8E%E5%A5%B3%E5%84%BF%E8%AE%A9C%E4%BD%8D%23) `466.0K 🔥`
1. [童星片场被强奸指控迪士尼不作为](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E6%98%9F%E7%89%87%E5%9C%BA%E8%A2%AB%E5%BC%BA%E5%A5%B8%E6%8C%87%E6%8E%A7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E4%B8%8D%E4%BD%9C%E4%B8%BA%23) `464.5K 🔥`
1. [小猫把自己睡成小手套了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%8A%8A%E8%87%AA%E5%B7%B1%E7%9D%A1%E6%88%90%E5%B0%8F%E6%89%8B%E5%A5%97%E4%BA%86%23) `462.9K 🔥`
1. [女子不吃早晚饭减肥1个月胖100斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E5%90%83%E6%97%A9%E6%99%9A%E9%A5%AD%E5%87%8F%E8%82%A51%E4%B8%AA%E6%9C%88%E8%83%96100%E6%96%A4%23) `237.0K 🔥`
1. [重庆警方通报2行人疑触电](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A52%E8%A1%8C%E4%BA%BA%E7%96%91%E8%A7%A6%E7%94%B5%23) `227.2K 🔥`
1. [井柏然孙千你们在脸红什么](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E4%BD%A0%E4%BB%AC%E5%9C%A8%E8%84%B8%E7%BA%A2%E4%BB%80%E4%B9%88%23) `226.8K 🔥`
1. [嫌疑人作案后关闭在韩遇害女生手机](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BD%9C%E6%A1%88%E5%90%8E%E5%85%B3%E9%97%AD%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E6%89%8B%E6%9C%BA%23) `226.3K 🔥`
1. [患胃癌晚期博士生已经历25次化疗](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E5%8D%9A%E5%A3%AB%E7%94%9F%E5%B7%B2%E7%BB%8F%E5%8E%8625%E6%AC%A1%E5%8C%96%E7%96%97%23) `208.7K 🔥`
1. [金鹰奖只提名了3个90后演员](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%8F%AA%E6%8F%90%E5%90%8D%E4%BA%863%E4%B8%AA90%E5%90%8E%E6%BC%94%E5%91%98%23) `206.3K 🔥`
1. [曹骏眼睛快忙不过来了](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E7%9C%BC%E7%9D%9B%E5%BF%AB%E5%BF%99%E4%B8%8D%E8%BF%87%E6%9D%A5%E4%BA%86%23) `196.3K 🔥`
1. [德芙道歉声明 AI味](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E9%81%93%E6%AD%89%E5%A3%B0%E6%98%8E%20AI%E5%91%B3%23) `185.6K 🔥`
1. [关晓彤有人天生吃饭就香](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9C%89%E4%BA%BA%E5%A4%A9%E7%94%9F%E5%90%83%E9%A5%AD%E5%B0%B1%E9%A6%99%23) `179.9K 🔥`
1. [杭州电梯事件 监控未被覆盖](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%20%E7%9B%91%E6%8E%A7%E6%9C%AA%E8%A2%AB%E8%A6%86%E7%9B%96%23) `269.2K 🔥` `-34%`
1. [陈赫被问爱情公寓回归季](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E8%A2%AB%E9%97%AE%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%23) `253.4K 🔥` `-50%`
1. [杀害中国女生嫌犯男扮女装混淆警方](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E7%94%B7%E6%89%AE%E5%A5%B3%E8%A3%85%E6%B7%B7%E6%B7%86%E8%AD%A6%E6%96%B9%23) `242.3K 🔥` `-41%`
1. [包贝尔包文婧去年才生二胎](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%8C%85%E6%96%87%E5%A9%A7%E5%8E%BB%E5%B9%B4%E6%89%8D%E7%94%9F%E4%BA%8C%E8%83%8E%23) `240.9K 🔥` `-39%`
1. [张杰首次担任巡演总导演](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%A6%96%E6%AC%A1%E6%8B%85%E4%BB%BB%E5%B7%A1%E6%BC%94%E6%80%BB%E5%AF%BC%E6%BC%94%23) `238.2K 🔥` `-53%`
1. [男子去世妻子反常公婆带孙做DNA](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E5%A6%BB%E5%AD%90%E5%8F%8D%E5%B8%B8%E5%85%AC%E5%A9%86%E5%B8%A6%E5%AD%99%E5%81%9ADNA%23) `235.1K 🔥` `-35%`
1. [Gucci顶配广告阵容](https://s.weibo.com/weibo?q=%23Gucci%E9%A1%B6%E9%85%8D%E5%B9%BF%E5%91%8A%E9%98%B5%E5%AE%B9%23) `233.8K 🔥` `-54%`
1. [包文婧拿烟头烫自己求爱](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E6%8B%BF%E7%83%9F%E5%A4%B4%E7%83%AB%E8%87%AA%E5%B7%B1%E6%B1%82%E7%88%B1%23) `232.3K 🔥` `-33%`
1. [原来真的有人可以审美这么好](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E5%8F%AF%E4%BB%A5%E5%AE%A1%E7%BE%8E%E8%BF%99%E4%B9%88%E5%A5%BD%23) `231.9K 🔥` `-39%`
1. [张真源凌晨开车去接马嘉祺](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%87%8C%E6%99%A8%E5%BC%80%E8%BD%A6%E5%8E%BB%E6%8E%A5%E9%A9%AC%E5%98%89%E7%A5%BA%23) `230.6K 🔥` `-40%`
1. [电视变彩色后真实世界反了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%8F%98%E5%BD%A9%E8%89%B2%E5%90%8E%E7%9C%9F%E5%AE%9E%E4%B8%96%E7%95%8C%E5%8F%8D%E4%BA%86%23) `213.9K 🔥` `-33%`
1. [张杰官宣杭州演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%AE%98%E5%AE%A3%E6%9D%AD%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `184.5K 🔥` `-31%`
1. [复仇者联盟5](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E4%BB%87%E8%80%85%E8%81%94%E7%9B%9F5%23) `181.7K 🔥` `-24%`
1. [洪崖洞目击者称担心触电不敢救 (Witnesses in Hongyadong said they were afraid of being electrocuted and did not dare to save people.)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0%E6%8B%85%E5%BF%83%E8%A7%A6%E7%94%B5%E4%B8%8D%E6%95%A2%E6%95%91%23) `180.7K 🔥` `-26%`
1. [理想MEGA发布会定档9月2日](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3MEGA%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9A%E6%A1%A39%E6%9C%882%E6%97%A5%23) `170.4K 🔥` `-58%`
1. [WTT中国大满贯票价](https://s.weibo.com/weibo?q=%23WTT%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E7%A5%A8%E4%BB%B7%23) `141.2K 🔥` `-23%`
1. [谢娜宣传娜就聊姐姐](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%AE%A3%E4%BC%A0%E5%A8%9C%E5%B0%B1%E8%81%8A%E5%A7%90%E5%A7%90%23) `139.3K 🔥` `-22%`
1. [关晓彤彩椒碗研究生](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%BD%A9%E6%A4%92%E7%A2%97%E7%A0%94%E7%A9%B6%E7%94%9F%23) `139.2K 🔥` `-36%`

Updated at 2026-08-26 14:20:52

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
