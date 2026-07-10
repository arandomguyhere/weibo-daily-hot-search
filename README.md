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

1. [带着微博逛漫展 (Visiting Comic Exhibitions with Weibo)](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E7%9D%80%E5%BE%AE%E5%8D%9A%E9%80%9B%E6%BC%AB%E5%B1%95%23) `673.7K 🔥` `NEW`
1. [巴威减弱至台风级](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%87%8F%E5%BC%B1%E8%87%B3%E5%8F%B0%E9%A3%8E%E7%BA%A7%23) `614.3K 🔥` `NEW`
1. [亚马尔必须进决赛的理由出现了](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%BF%85%E9%A1%BB%E8%BF%9B%E5%86%B3%E8%B5%9B%E7%9A%84%E7%90%86%E7%94%B1%E5%87%BA%E7%8E%B0%E4%BA%86%23) `577.4K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `555.4K 🔥` `NEW`
1. [LYON战胜G2](https://s.weibo.com/weibo?q=%23LYON%E6%88%98%E8%83%9CG2%23) `551.8K 🔥` `NEW`
1. [TF家族运动会先导片](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%85%88%E5%AF%BC%E7%89%87%23) `347.4K 🔥` `NEW`
1. [演员署名正式告别艺名](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%BD%B2%E5%90%8D%E6%AD%A3%E5%BC%8F%E5%91%8A%E5%88%AB%E8%89%BA%E5%90%8D%23) `336.3K 🔥` `NEW`
1. [宋承炫宣布得子](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%89%BF%E7%82%AB%E5%AE%A3%E5%B8%83%E5%BE%97%E5%AD%90%23) `333.2K 🔥` `NEW`
1. [王楚钦孙颖莎全锦赛混双报名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%A8%E9%94%A6%E8%B5%9B%E6%B7%B7%E5%8F%8C%E6%8A%A5%E5%90%8D%23) `332.1K 🔥` `NEW`
1. [迪丽热巴大腿肌踢成巨肌了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%A7%E8%85%BF%E8%82%8C%E8%B8%A2%E6%88%90%E5%B7%A8%E8%82%8C%E4%BA%86%23) `329.4K 🔥` `NEW`
1. [迪丽热巴用上了周星驰的公鸡碗 (Dilireba used Stephen Chow's cock bowl)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%A8%E4%B8%8A%E4%BA%86%E5%91%A8%E6%98%9F%E9%A9%B0%E7%9A%84%E5%85%AC%E9%B8%A1%E7%A2%97%23) `323.8K 🔥` `NEW`
1. [开NX8五年能省6部新手机](https://s.weibo.com/weibo?q=%23%E5%BC%80NX8%E4%BA%94%E5%B9%B4%E8%83%BD%E7%9C%816%E9%83%A8%E6%96%B0%E6%89%8B%E6%9C%BA%23) `311.9K 🔥` `NEW`
1. [刘亦菲自拍发现被拍的反应](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%87%AA%E6%8B%8D%E5%8F%91%E7%8E%B0%E8%A2%AB%E6%8B%8D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `301.1K 🔥` `NEW`
1. [九尾钎城支持钟意](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E9%92%8E%E5%9F%8E%E6%94%AF%E6%8C%81%E9%92%9F%E6%84%8F%23) `289.5K 🔥` `NEW`
1. [丁程鑫见到王俊凯一秒坐直](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%A7%81%E5%88%B0%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%80%E7%A7%92%E5%9D%90%E7%9B%B4%23) `289.0K 🔥` `NEW`
1. [G2](https://s.weibo.com/weibo?q=%23G2%23) `288.0K 🔥` `NEW`
1. [敖瑞鹏 别提炒股](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%20%E5%88%AB%E6%8F%90%E7%82%92%E8%82%A1%23) `284.0K 🔥` `NEW`
1. [刘子晗 吃吃](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%90%E6%99%97%20%E5%90%83%E5%90%83%23) `282.4K 🔥` `NEW`
1. [A股回落原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%9B%9E%E8%90%BD%E5%8E%9F%E5%9B%A0%23) `278.3K 🔥` `NEW`
1. [小鹿 备孕不是为了生人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%20%E5%A4%87%E5%AD%95%E4%B8%8D%E6%98%AF%E4%B8%BA%E4%BA%86%E7%94%9F%E4%BA%BA%23) `275.2K 🔥` `NEW`
1. [邓紫棋直播 (Deng Ziqi live broadcast)](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E7%9B%B4%E6%92%AD%23) `275.1K 🔥` `NEW`
1. [发现很多人对工资没有概念](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%AF%B9%E5%B7%A5%E8%B5%84%E6%B2%A1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `260.0K 🔥` `NEW`
1. [马龙许昕全锦赛出战男双](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%85%A8%E9%94%A6%E8%B5%9B%E5%87%BA%E6%88%98%E7%94%B7%E5%8F%8C%23) `241.8K 🔥` `NEW`
1. [功夫女足一直不发真人预告的原因](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%80%E7%9B%B4%E4%B8%8D%E5%8F%91%E7%9C%9F%E4%BA%BA%E9%A2%84%E5%91%8A%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `233.1K 🔥` `NEW`
1. [哈兰德已经把球场当食堂了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%B7%B2%E7%BB%8F%E6%8A%8A%E7%90%83%E5%9C%BA%E5%BD%93%E9%A3%9F%E5%A0%82%E4%BA%86%23) `225.4K 🔥` `NEW`
1. [怪不得老板都喜欢招应届生](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%80%81%E6%9D%BF%E9%83%BD%E5%96%9C%E6%AC%A2%E6%8B%9B%E5%BA%94%E5%B1%8A%E7%94%9F%23) `222.3K 🔥` `NEW`
1. [九尾回复钟意友谊长存](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%9B%9E%E5%A4%8D%E9%92%9F%E6%84%8F%E5%8F%8B%E8%B0%8A%E9%95%BF%E5%AD%98%23) `217.7K 🔥` `NEW`
1. [LYON对战G2](https://s.weibo.com/weibo?q=%23LYON%E5%AF%B9%E6%88%98G2%23) `215.5K 🔥` `NEW`
1. [TYLOO被罚款](https://s.weibo.com/weibo?q=%23TYLOO%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `211.2K 🔥` `NEW`
1. [广西洪水小男孩被救全过程](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%E5%B0%8F%E7%94%B7%E5%AD%A9%E8%A2%AB%E6%95%91%E5%85%A8%E8%BF%87%E7%A8%8B%23) `208.5K 🔥` `NEW`
1. [MRC对战FPX.ZQ (MRC vs. FPX.ZQ)](https://s.weibo.com/weibo?q=%23MRC%E5%AF%B9%E6%88%98FPX.ZQ%23) `203.8K 🔥` `NEW`
1. [鞠婧祎穿千香戏服跳恋爱告急](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%A9%BF%E5%8D%83%E9%A6%99%E6%88%8F%E6%9C%8D%E8%B7%B3%E6%81%8B%E7%88%B1%E5%91%8A%E6%80%A5%23) `171.2K 🔥` `NEW`
1. [今年的三伏天是顶配版](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%9A%84%E4%B8%89%E4%BC%8F%E5%A4%A9%E6%98%AF%E9%A1%B6%E9%85%8D%E7%89%88%23) `169.1K 🔥` `NEW`
1. [北京协和医院声明](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8D%8F%E5%92%8C%E5%8C%BB%E9%99%A2%E5%A3%B0%E6%98%8E%23) `168.7K 🔥` `NEW`
1. [邓紫棋回应出道18年](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%9B%9E%E5%BA%94%E5%87%BA%E9%81%9318%E5%B9%B4%23) `168.2K 🔥` `NEW`
1. [虞书欣包场雀骨](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8C%85%E5%9C%BA%E9%9B%80%E9%AA%A8%23) `163.4K 🔥` `NEW`
1. [洪水退了小猫的主人回来了](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B0%B4%E9%80%80%E4%BA%86%E5%B0%8F%E7%8C%AB%E7%9A%84%E4%B8%BB%E4%BA%BA%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `159.1K 🔥` `NEW`
1. [微信红包转账有新变化](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E8%BD%AC%E8%B4%A6%E6%9C%89%E6%96%B0%E5%8F%98%E5%8C%96%23) `1.7M 🔥` `+540%`
1. [长征十号乙火箭回收成功](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E5%8F%B7%E4%B9%99%E7%81%AB%E7%AE%AD%E5%9B%9E%E6%94%B6%E6%88%90%E5%8A%9F%23) `854.1K 🔥` `+38%`
1. [台风巴威位置 (Typhoon Bavi location)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BD%8D%E7%BD%AE%23) `3.0M 🔥`
1. [税务部门回应发票中奖者全部姓蒲](https://s.weibo.com/weibo?q=%23%E7%A8%8E%E5%8A%A1%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E5%8F%91%E7%A5%A8%E4%B8%AD%E5%A5%96%E8%80%85%E5%85%A8%E9%83%A8%E5%A7%93%E8%92%B2%23) `651.4K 🔥`
1. [为什么一眼看出你很老实 (Why can I tell at first glance that you are honest?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E4%BD%A0%E5%BE%88%E8%80%81%E5%AE%9E%23) `525.5K 🔥`
1. [26版西游记确实比86版带劲](https://s.weibo.com/weibo?q=%2326%E7%89%88%E8%A5%BF%E6%B8%B8%E8%AE%B0%E7%A1%AE%E5%AE%9E%E6%AF%9486%E7%89%88%E5%B8%A6%E5%8A%B2%23) `522.3K 🔥` `-41%`
1. [李钟硕多次向IU求婚 (Lee Jong Suk proposed to IU many times)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95%E5%A4%9A%E6%AC%A1%E5%90%91IU%E6%B1%82%E5%A9%9A%23) `345.1K 🔥` `-44%`
1. [当我意识到西瓜也是瓜](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E6%84%8F%E8%AF%86%E5%88%B0%E8%A5%BF%E7%93%9C%E4%B9%9F%E6%98%AF%E7%93%9C%23) `342.2K 🔥` `-63%`
1. [台风巴威进入24小时警戒线](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E8%BF%9B%E5%85%A524%E5%B0%8F%E6%97%B6%E8%AD%A6%E6%88%92%E7%BA%BF%23) `315.9K 🔥` `-23%`
1. [峰哥 反指](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%20%E5%8F%8D%E6%8C%87%23) `307.2K 🔥` `-48%`
1. [桃米洗菜](https://s.weibo.com/weibo?q=%23%E6%A1%83%E7%B1%B3%E6%B4%97%E8%8F%9C%23) `304.5K 🔥` `-47%`
1. [李钟硕IU宣布分手 (Lee Jong Suk, IU announce breakup)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95IU%E5%AE%A3%E5%B8%83%E5%88%86%E6%89%8B%23) `294.7K 🔥` `-51%`
1. [霸占业主8万车位女子当面道歉](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E5%8D%A0%E4%B8%9A%E4%B8%BB8%E4%B8%87%E8%BD%A6%E4%BD%8D%E5%A5%B3%E5%AD%90%E5%BD%93%E9%9D%A2%E9%81%93%E6%AD%89%23) `217.9K 🔥` `-64%`
1. [黄子弘凡回应只提父亲不提母亲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%9B%9E%E5%BA%94%E5%8F%AA%E6%8F%90%E7%88%B6%E4%BA%B2%E4%B8%8D%E6%8F%90%E6%AF%8D%E4%BA%B2%23) `174.3K 🔥` `-70%`
1. [妈妈教儿子暗码标批发价全网都会了](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%95%99%E5%84%BF%E5%AD%90%E6%9A%97%E7%A0%81%E6%A0%87%E6%89%B9%E5%8F%91%E4%BB%B7%E5%85%A8%E7%BD%91%E9%83%BD%E4%BC%9A%E4%BA%86%23) `173.1K 🔥` `-34%`

Updated at 2026-07-10 19:30:29

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
