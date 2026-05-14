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

1. [中美领导人致辞 (Speeches from Chinese and American leaders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E8%87%B4%E8%BE%9E%23) `1.6M 🔥` `NEW`
1. [特朗普访华欢迎宴会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `1.6M 🔥` `NEW`
1. [关闭支付宝支付功能后被扣捐赠184万](https://s.weibo.com/weibo?q=%23%E5%85%B3%E9%97%AD%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%AF%E4%BB%98%E5%8A%9F%E8%83%BD%E5%90%8E%E8%A2%AB%E6%89%A3%E6%8D%90%E8%B5%A0184%E4%B8%87%23) `1.3M 🔥` `NEW`
1. [给阿嬷的情书女主官宣入行](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%A5%B3%E4%B8%BB%E5%AE%98%E5%AE%A3%E5%85%A5%E8%A1%8C%23) `948.0K 🔥` `NEW`
1. [韩国股市暴涨超200%散户癫狂](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E6%9A%B4%E6%B6%A8%E8%B6%85200%25%E6%95%A3%E6%88%B7%E7%99%AB%E7%8B%82%23) `555.2K 🔥` `NEW`
1. [歌手2026定档官宣](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E5%AE%9A%E6%A1%A3%E5%AE%98%E5%AE%A3%23) `554.3K 🔥` `NEW`
1. [黄景瑜微博改名](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `543.4K 🔥` `NEW`
1. [特朗普抵达欢迎宴会现场](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%E7%8E%B0%E5%9C%BA%23) `537.2K 🔥` `NEW`
1. [宋亚轩和张杰女儿撞小名](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%92%8C%E5%BC%A0%E6%9D%B0%E5%A5%B3%E5%84%BF%E6%92%9E%E5%B0%8F%E5%90%8D%23) `534.6K 🔥` `NEW`
1. [男子1万买榴莲付11万几个月才发现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%901%E4%B8%87%E4%B9%B0%E6%A6%B4%E8%8E%B2%E4%BB%9811%E4%B8%87%E5%87%A0%E4%B8%AA%E6%9C%88%E6%89%8D%E5%8F%91%E7%8E%B0%23) `532.2K 🔥` `NEW`
1. [白玉兰奖动了 (The Magnolia Award is moving)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%E5%8A%A8%E4%BA%86%23) `527.1K 🔥` `NEW`
1. [所有不尊重你的人赌的都是你没有前途](https://s.weibo.com/weibo?q=%23%E6%89%80%E6%9C%89%E4%B8%8D%E5%B0%8A%E9%87%8D%E4%BD%A0%E7%9A%84%E4%BA%BA%E8%B5%8C%E7%9A%84%E9%83%BD%E6%98%AF%E4%BD%A0%E6%B2%A1%E6%9C%89%E5%89%8D%E9%80%94%23) `525.2K 🔥` `NEW`
1. [杨洋来河南也得抱捆蒜苔回去](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%9D%A5%E6%B2%B3%E5%8D%97%E4%B9%9F%E5%BE%97%E6%8A%B1%E6%8D%86%E8%92%9C%E8%8B%94%E5%9B%9E%E5%8E%BB%23) `512.9K 🔥` `NEW`
1. [鲁比奥称中美关系非常有建设性](https://s.weibo.com/weibo?q=%23%E9%B2%81%E6%AF%94%E5%A5%A5%E7%A7%B0%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E9%9D%9E%E5%B8%B8%E6%9C%89%E5%BB%BA%E8%AE%BE%E6%80%A7%23) `512.3K 🔥` `NEW`
1. [易烊千玺 惊悚片](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E6%83%8A%E6%82%9A%E7%89%87%23) `511.6K 🔥` `NEW`
1. [为什么大多数人都喜欢约晚饭](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A7%E5%A4%9A%E6%95%B0%E4%BA%BA%E9%83%BD%E5%96%9C%E6%AC%A2%E7%BA%A6%E6%99%9A%E9%A5%AD%23) `497.7K 🔥` `NEW`
1. [苹果2028款iPhone曝光](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C2028%E6%AC%BEiPhone%E6%9B%9D%E5%85%89%23) `318.2K 🔥` `NEW`
1. [香港80后地产女王烧炭身亡](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF80%E5%90%8E%E5%9C%B0%E4%BA%A7%E5%A5%B3%E7%8E%8B%E7%83%A7%E7%82%AD%E8%BA%AB%E4%BA%A1%23) `317.1K 🔥` `NEW`
1. [果然岁月从不败美人](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E5%B2%81%E6%9C%88%E4%BB%8E%E4%B8%8D%E8%B4%A5%E7%BE%8E%E4%BA%BA%23) `193.3K 🔥` `NEW`
1. [美方企业家离场时纷纷点赞](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E4%BC%81%E4%B8%9A%E5%AE%B6%E7%A6%BB%E5%9C%BA%E6%97%B6%E7%BA%B7%E7%BA%B7%E7%82%B9%E8%B5%9E%23) `188.3K 🔥` `NEW`
1. [韩国股市收盘前厕所挤爆了 (Toilets were overcrowded before the Korean stock market closed)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E6%94%B6%E7%9B%98%E5%89%8D%E5%8E%95%E6%89%80%E6%8C%A4%E7%88%86%E4%BA%86%23) `182.7K 🔥` `NEW`
1. [31岁女子从60斤增到90斤像变个人](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BB%8E60%E6%96%A4%E5%A2%9E%E5%88%B090%E6%96%A4%E5%83%8F%E5%8F%98%E4%B8%AA%E4%BA%BA%23) `177.7K 🔥` `NEW`
1. [脑子变迟钝了怎么补救](https://s.weibo.com/weibo?q=%23%E8%84%91%E5%AD%90%E5%8F%98%E8%BF%9F%E9%92%9D%E4%BA%86%E6%80%8E%E4%B9%88%E8%A1%A5%E6%95%91%23) `172.4K 🔥` `NEW`
1. [袁姗姗戛纳黑天鹅](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%A7%97%E5%A7%97%E6%88%9B%E7%BA%B3%E9%BB%91%E5%A4%A9%E9%B9%85%23) `157.1K 🔥` `NEW`
1. [王格格听到TOP捂脸害羞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%BC%E6%A0%BC%E5%90%AC%E5%88%B0TOP%E6%8D%82%E8%84%B8%E5%AE%B3%E7%BE%9E%23) `156.7K 🔥` `NEW`
1. [多名小学生忘带书本被老师扇到耳出血](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%BF%98%E5%B8%A6%E4%B9%A6%E6%9C%AC%E8%A2%AB%E8%80%81%E5%B8%88%E6%89%87%E5%88%B0%E8%80%B3%E5%87%BA%E8%A1%80%23) `155.5K 🔥` `NEW`
1. [腾讯推出svip云包场](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%8E%A8%E5%87%BAsvip%E4%BA%91%E5%8C%85%E5%9C%BA%23) `147.8K 🔥` `NEW`
1. [员工上班借给公司128万](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E4%B8%8A%E7%8F%AD%E5%80%9F%E7%BB%99%E5%85%AC%E5%8F%B8128%E4%B8%87%23) `143.5K 🔥` `NEW`
1. [早田希娜说孙颖莎王曼昱是最强双核](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%98%AF%E6%9C%80%E5%BC%BA%E5%8F%8C%E6%A0%B8%23) `143.5K 🔥` `NEW`
1. [Kanavi说自己喜欢LPL](https://s.weibo.com/weibo?q=%23Kanavi%E8%AF%B4%E8%87%AA%E5%B7%B1%E5%96%9C%E6%AC%A2LPL%23) `142.1K 🔥` `NEW`
1. [恋与深空新衣服 (Love and Deep Space New Clothes)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0%E8%A1%A3%E6%9C%8D%23) `140.7K 🔥` `NEW`
1. [腾讯成立800人团队适配鸿蒙 (Tencent sets up a team of 800 people to adapt to Hongmeng)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%88%90%E7%AB%8B800%E4%BA%BA%E5%9B%A2%E9%98%9F%E9%80%82%E9%85%8D%E9%B8%BF%E8%92%99%23) `552.5K 🔥` `+227%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `549.6K 🔥` `+250%`
1. [这些美方代表在中美元首会谈会场](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E7%BE%8E%E6%96%B9%E4%BB%A3%E8%A1%A8%E5%9C%A8%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E8%B0%88%E4%BC%9A%E5%9C%BA%23) `1.4M 🔥`
1. [特朗普说二三把手我都不让他们来](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BA%8C%E4%B8%89%E6%8A%8A%E6%89%8B%E6%88%91%E9%83%BD%E4%B8%8D%E8%AE%A9%E4%BB%96%E4%BB%AC%E6%9D%A5%23) `546.5K 🔥`
1. [特朗普感叹大美中国](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%84%9F%E5%8F%B9%E5%A4%A7%E7%BE%8E%E4%B8%AD%E5%9B%BD%23) `540.5K 🔥`
1. [鹿晗寸头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%AF%B8%E5%A4%B4%23) `537.8K 🔥`
1. [爱喝粥和爱喝咖啡的人都沉默了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E7%B2%A5%E5%92%8C%E7%88%B1%E5%96%9D%E5%92%96%E5%95%A1%E7%9A%84%E4%BA%BA%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `529.4K 🔥`
1. [薯片透明包装](https://s.weibo.com/weibo?q=%23%E8%96%AF%E7%89%87%E9%80%8F%E6%98%8E%E5%8C%85%E8%A3%85%23) `416.9K 🔥`
1. [日系车三巨头卖不动了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%B3%BB%E8%BD%A6%E4%B8%89%E5%B7%A8%E5%A4%B4%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `145.1K 🔥`
1. [白鹿演唱会票价加起来是十年 (The total ticket price for the White Deer concert is ten years)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E5%8A%A0%E8%B5%B7%E6%9D%A5%E6%98%AF%E5%8D%81%E5%B9%B4%23) `980.6K 🔥` `-34%`
1. [特朗普参观天坛](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%82%E8%A7%82%E5%A4%A9%E5%9D%9B%23) `509.4K 🔥` `-94%`
1. [中美元首在祈年殿广场合影 (The heads of state of China and the United States took a group photo at the Square of the Hall of Prayer for Good Harvests)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%9C%A8%E7%A5%88%E5%B9%B4%E6%AE%BF%E5%B9%BF%E5%9C%BA%E5%90%88%E5%BD%B1%23) `506.5K 🔥` `-78%`
1. [爸爸当家 (Dad is in charge)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B6%23) `346.7K 🔥` `-44%`
1. [台湾问题处理好了中美关系就能稳定](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%E5%A4%84%E7%90%86%E5%A5%BD%E4%BA%86%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%83%BD%E7%A8%B3%E5%AE%9A%23) `335.6K 🔥` `-28%`
1. [吴宣仪成立个人工作室](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%88%90%E7%AB%8B%E4%B8%AA%E4%BA%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `256.7K 🔥` `-44%`
1. [阿嬷爆了之后 业内连夜学习潮汕文化](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%AC%B7%E7%88%86%E4%BA%86%E4%B9%8B%E5%90%8E%20%E4%B8%9A%E5%86%85%E8%BF%9E%E5%A4%9C%E5%AD%A6%E4%B9%A0%E6%BD%AE%E6%B1%95%E6%96%87%E5%8C%96%23) `248.5K 🔥` `-49%`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `191.8K 🔥` `-55%`
1. [刘海为什么不能叫张海](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%B7%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E5%8F%AB%E5%BC%A0%E6%B5%B7%23) `167.2K 🔥` `-70%`
1. [特朗普参观天坛感叹惊艳](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%82%E8%A7%82%E5%A4%A9%E5%9D%9B%E6%84%9F%E5%8F%B9%E6%83%8A%E8%89%B3%23) `156.4K 🔥` `-66%`

Updated at 2026-05-14 18:35:34

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
