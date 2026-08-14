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

1. [披荆斩棘送考人官宣 (Overcoming obstacles and sending candidates to the official announcement)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%80%81%E8%80%83%E4%BA%BA%E5%AE%98%E5%AE%A3%23) `1.2M 🔥` `NEW`
1. [周兴哲用华为MatePadPro重编金曲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%85%B4%E5%93%B2%E7%94%A8%E5%8D%8E%E4%B8%BAMatePadPro%E9%87%8D%E7%BC%96%E9%87%91%E6%9B%B2%23) `738.3K 🔥` `NEW`
1. [周星驰经纪人 内涵龙餐馆偷票房](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%20%E5%86%85%E6%B6%B5%E9%BE%99%E9%A4%90%E9%A6%86%E5%81%B7%E7%A5%A8%E6%88%BF%23) `737.7K 🔥` `NEW`
1. [取卵针那么长真的不痛吗](https://s.weibo.com/weibo?q=%23%E5%8F%96%E5%8D%B5%E9%92%88%E9%82%A3%E4%B9%88%E9%95%BF%E7%9C%9F%E7%9A%84%E4%B8%8D%E7%97%9B%E5%90%97%23) `725.4K 🔥` `NEW`
1. [湖南卫视回应张雅琪争议](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E5%9B%9E%E5%BA%94%E5%BC%A0%E9%9B%85%E7%90%AA%E4%BA%89%E8%AE%AE%23) `716.4K 🔥` `NEW`
1. [原来这就是大家命越来越好的原因](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E5%A4%A7%E5%AE%B6%E5%91%BD%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A5%BD%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `702.5K 🔥` `NEW`
1. [首款折叠iPhone](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%AC%BE%E6%8A%98%E5%8F%A0iPhone%23) `693.9K 🔥` `NEW`
1. [敖瑞鹏孙珍妮都是真名](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%AD%99%E7%8F%8D%E5%A6%AE%E9%83%BD%E6%98%AF%E7%9C%9F%E5%90%8D%23) `506.8K 🔥` `NEW`
1. [郭德纲 杨议](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%20%E6%9D%A8%E8%AE%AE%23) `499.8K 🔥` `NEW`
1. [轮到凌玲抓小三了](https://s.weibo.com/weibo?q=%23%E8%BD%AE%E5%88%B0%E5%87%8C%E7%8E%B2%E6%8A%93%E5%B0%8F%E4%B8%89%E4%BA%86%23) `489.1K 🔥` `NEW`
1. [印度男孩没钱治病寄居池塘5年 (Indian boy has no money for medical treatment and lives in a pond for 5 years)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%A9%E6%B2%A1%E9%92%B1%E6%B2%BB%E7%97%85%E5%AF%84%E5%B1%85%E6%B1%A0%E5%A1%985%E5%B9%B4%23) `483.7K 🔥` `NEW`
1. [魏子宸涨粉](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E6%B6%A8%E7%B2%89%23) `480.8K 🔥` `NEW`
1. [女子隆胸1周后查出已怀孕5周](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9A%86%E8%83%B81%E5%91%A8%E5%90%8E%E6%9F%A5%E5%87%BA%E5%B7%B2%E6%80%80%E5%AD%955%E5%91%A8%23) `476.0K 🔥` `NEW`
1. [朱志鑫 易胖体质](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E6%98%93%E8%83%96%E4%BD%93%E8%B4%A8%23) `475.3K 🔥` `NEW`
1. [动力舟桥赴周口灾区](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E5%8A%9B%E8%88%9F%E6%A1%A5%E8%B5%B4%E5%91%A8%E5%8F%A3%E7%81%BE%E5%8C%BA%23) `472.5K 🔥` `NEW`
1. [睡眠要守住4小时修复黄金期](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E7%9C%A0%E8%A6%81%E5%AE%88%E4%BD%8F4%E5%B0%8F%E6%97%B6%E4%BF%AE%E5%A4%8D%E9%BB%84%E9%87%91%E6%9C%9F%23) `468.6K 🔥` `NEW`
1. [鞠婧祎抽抽乐](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%8A%BD%E6%8A%BD%E4%B9%90%23) `464.8K 🔥` `NEW`
1. [国乒 男单16强仅剩2人](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E7%94%B7%E5%8D%9516%E5%BC%BA%E4%BB%85%E5%89%A92%E4%BA%BA%23) `453.9K 🔥` `NEW`
1. [野生狗奶](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%94%9F%E7%8B%97%E5%A5%B6%23) `439.3K 🔥` `NEW`
1. [牛来票房 7352元没有万](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E7%A5%A8%E6%88%BF%207352%E5%85%83%E6%B2%A1%E6%9C%89%E4%B8%87%23) `435.3K 🔥` `NEW`
1. [电影八仙 (Movie Eight Immortals)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `430.2K 🔥` `NEW`
1. [哪些房子正失去变现价值](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%BA%9B%E6%88%BF%E5%AD%90%E6%AD%A3%E5%A4%B1%E5%8E%BB%E5%8F%98%E7%8E%B0%E4%BB%B7%E5%80%BC%23) `419.1K 🔥` `NEW`
1. [中国这张生态成绩单很美丽 (China’s ecological report card is beautiful)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%99%E5%BC%A0%E7%94%9F%E6%80%81%E6%88%90%E7%BB%A9%E5%8D%95%E5%BE%88%E7%BE%8E%E4%B8%BD%23) `742.5K 🔥`
1. [五粮液不得低于800元抛售 (Wuliangye must not be sold below 800 yuan)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E7%B2%AE%E6%B6%B2%E4%B8%8D%E5%BE%97%E4%BD%8E%E4%BA%8E800%E5%85%83%E6%8A%9B%E5%94%AE%23) `516.8K 🔥`
1. [韩国女星被扒曾祖父是韩奸](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%98%9F%E8%A2%AB%E6%89%92%E6%9B%BE%E7%A5%96%E7%88%B6%E6%98%AF%E9%9F%A9%E5%A5%B8%23) `513.3K 🔥`
1. [马伊琍我的前半生获奖后感谢了文章](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%8A%E7%90%8D%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E8%8E%B7%E5%A5%96%E5%90%8E%E6%84%9F%E8%B0%A2%E4%BA%86%E6%96%87%E7%AB%A0%23) `511.0K 🔥`
1. [国乒男女双全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%A5%B3%E5%8F%8C%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `500.3K 🔥`
1. [梁文锋打新宇树科技](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E6%89%93%E6%96%B0%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%23) `496.5K 🔥`
1. [谢霆锋认为糖拌西红柿不能拿来比赛](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E8%AE%A4%E4%B8%BA%E7%B3%96%E6%8B%8C%E8%A5%BF%E7%BA%A2%E6%9F%BF%E4%B8%8D%E8%83%BD%E6%8B%BF%E6%9D%A5%E6%AF%94%E8%B5%9B%23) `493.7K 🔥`
1. [孙彩瑛方否认分手](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BD%A9%E7%91%9B%E6%96%B9%E5%90%A6%E8%AE%A4%E5%88%86%E6%89%8B%23) `479.7K 🔥`
1. [TOP天津](https://s.weibo.com/weibo?q=%23TOP%E5%A4%A9%E6%B4%A5%23) `465.6K 🔥`
1. [魏子宸出圈度](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%87%BA%E5%9C%88%E5%BA%A6%23) `457.4K 🔥`
1. [沈腾回应0影帝 (Shen Teng responded to 0 Best Actor)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%940%E5%BD%B1%E5%B8%9D%23) `450.2K 🔥`
1. [月薪两万吐槽吃不起中式快餐](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E4%B8%A4%E4%B8%87%E5%90%90%E6%A7%BD%E5%90%83%E4%B8%8D%E8%B5%B7%E4%B8%AD%E5%BC%8F%E5%BF%AB%E9%A4%90%23) `446.5K 🔥`
1. [孔雪儿虞书欣我从THE9就跟了你们了](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%91%E4%BB%8ETHE9%E5%B0%B1%E8%B7%9F%E4%BA%86%E4%BD%A0%E4%BB%AC%E4%BA%86%23) `445.5K 🔥`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `442.1K 🔥`
1. [月光变奏曲的二狗去世了 (The second dog of Moonlight Variations passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%89%E5%8F%98%E5%A5%8F%E6%9B%B2%E7%9A%84%E4%BA%8C%E7%8B%97%E5%8E%BB%E4%B8%96%E4%BA%86%23) `437.2K 🔥`
1. [民宿回应顾客实付221元到手40.67元](https://s.weibo.com/weibo?q=%23%E6%B0%91%E5%AE%BF%E5%9B%9E%E5%BA%94%E9%A1%BE%E5%AE%A2%E5%AE%9E%E4%BB%98221%E5%85%83%E5%88%B0%E6%89%8B40.67%E5%85%83%23) `433.2K 🔥`
1. [王俊凯重庆站哭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%87%8D%E5%BA%86%E7%AB%99%E5%93%AD%E4%BA%86%23) `428.0K 🔥`
1. [鸡蛋长出5厘米尾巴](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%9B%8B%E9%95%BF%E5%87%BA5%E5%8E%98%E7%B1%B3%E5%B0%BE%E5%B7%B4%23) `423.9K 🔥`
1. [男子下地库碾到横卧醉汉致其死亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8B%E5%9C%B0%E5%BA%93%E7%A2%BE%E5%88%B0%E6%A8%AA%E5%8D%A7%E9%86%89%E6%B1%89%E8%87%B4%E5%85%B6%E6%AD%BB%E4%BA%A1%23) `423.4K 🔥`
1. [AI用配音演员声线接广告](https://s.weibo.com/weibo?q=%23AI%E7%94%A8%E9%85%8D%E9%9F%B3%E6%BC%94%E5%91%98%E5%A3%B0%E7%BA%BF%E6%8E%A5%E5%B9%BF%E5%91%8A%23) `418.7K 🔥`
1. [胖东来闭店一天整条街都没人出摊 (Fat Donglai closed his shop for one day and no one was out on the street.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%97%AD%E5%BA%97%E4%B8%80%E5%A4%A9%E6%95%B4%E6%9D%A1%E8%A1%97%E9%83%BD%E6%B2%A1%E4%BA%BA%E5%87%BA%E6%91%8A%23) `904.1K 🔥` `-22%`
1. [男主身高164劝退六成读者](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%BB%E8%BA%AB%E9%AB%98164%E5%8A%9D%E9%80%80%E5%85%AD%E6%88%90%E8%AF%BB%E8%80%85%23) `565.7K 🔥` `-36%`
1. [家里发大水了柴犬处理不好 (There is a flood at home and the Shiba Inu cannot handle it properly.)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E5%8F%91%E5%A4%A7%E6%B0%B4%E4%BA%86%E6%9F%B4%E7%8A%AC%E5%A4%84%E7%90%86%E4%B8%8D%E5%A5%BD%23) `507.4K 🔥` `-26%`
1. [汪苏泷伴手礼](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `503.3K 🔥` `-43%`
1. [银行能办结婚证了 (Banks can now issue marriage certificates)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `490.2K 🔥` `-68%`
1. [曝杨幂金鹰奖掉提](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E5%B9%82%E9%87%91%E9%B9%B0%E5%A5%96%E6%8E%89%E6%8F%90%23) `487.2K 🔥` `-41%`
1. [C罗乔治娜财产协议曝光](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E8%B4%A2%E4%BA%A7%E5%8D%8F%E8%AE%AE%E6%9B%9D%E5%85%89%23) `462.8K 🔥` `-47%`
1. [恋与深空日卡3.0](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%97%A5%E5%8D%A13.0%23) `460.2K 🔥` `-27%`

Updated at 2026-08-14 13:57:33

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
