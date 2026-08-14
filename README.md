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

1. [中国这张生态成绩单很美丽 (China’s ecological report card is beautiful)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%99%E5%BC%A0%E7%94%9F%E6%80%81%E6%88%90%E7%BB%A9%E5%8D%95%E5%BE%88%E7%BE%8E%E4%B8%BD%23) `894.8K 🔥` `NEW`
1. [华为WATCH GT 7今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAWATCH%20GT%207%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `892.6K 🔥` `NEW`
1. [汪苏泷伴手礼](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `890.5K 🔥` `NEW`
1. [15万级大五座SUV家越07全球首秀](https://s.weibo.com/weibo?q=%2315%E4%B8%87%E7%BA%A7%E5%A4%A7%E4%BA%94%E5%BA%A7SUV%E5%AE%B6%E8%B6%8A07%E5%85%A8%E7%90%83%E9%A6%96%E7%A7%80%23) `848.7K 🔥` `NEW`
1. [家里发大水了柴犬处理不好](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E5%8F%91%E5%A4%A7%E6%B0%B4%E4%BA%86%E6%9F%B4%E7%8A%AC%E5%A4%84%E7%90%86%E4%B8%8D%E5%A5%BD%23) `690.1K 🔥` `NEW`
1. [恋与深空日卡3.0](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%97%A5%E5%8D%A13.0%23) `626.4K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `537.0K 🔥` `NEW`
1. [韩国女星被扒曾祖父是韩奸](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%98%9F%E8%A2%AB%E6%89%92%E6%9B%BE%E7%A5%96%E7%88%B6%E6%98%AF%E9%9F%A9%E5%A5%B8%23) `535.0K 🔥` `NEW`
1. [孙彩瑛方否认分手](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BD%A9%E7%91%9B%E6%96%B9%E5%90%A6%E8%AE%A4%E5%88%86%E6%89%8B%23) `530.9K 🔥` `NEW`
1. [TOP天津](https://s.weibo.com/weibo?q=%23TOP%E5%A4%A9%E6%B4%A5%23) `526.2K 🔥` `NEW`
1. [五粮液不得低于800元抛售 (Wuliangye must not be sold below 800 yuan)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E7%B2%AE%E6%B6%B2%E4%B8%8D%E5%BE%97%E4%BD%8E%E4%BA%8E800%E5%85%83%E6%8A%9B%E5%94%AE%23) `519.7K 🔥` `NEW`
1. [马伊琍我的前半生获奖后感谢了文章](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%8A%E7%90%8D%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E8%8E%B7%E5%A5%96%E5%90%8E%E6%84%9F%E8%B0%A2%E4%BA%86%E6%96%87%E7%AB%A0%23) `517.3K 🔥` `NEW`
1. [梁文锋打新宇树科技](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E6%89%93%E6%96%B0%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%23) `514.6K 🔥` `NEW`
1. [魏子宸出圈度](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%87%BA%E5%9C%88%E5%BA%A6%23) `512.6K 🔥` `NEW`
1. [顾客订酒店付221元商家到手仅40元](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E8%AE%A2%E9%85%92%E5%BA%97%E4%BB%98221%E5%85%83%E5%95%86%E5%AE%B6%E5%88%B0%E6%89%8B%E4%BB%8540%E5%85%83%23) `508.8K 🔥` `NEW`
1. [特朗普允许美海军海外建造舰船](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%85%81%E8%AE%B8%E7%BE%8E%E6%B5%B7%E5%86%9B%E6%B5%B7%E5%A4%96%E5%BB%BA%E9%80%A0%E8%88%B0%E8%88%B9%23) `502.7K 🔥` `NEW`
1. [孔雪儿虞书欣我从THE9就跟了你们了](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%91%E4%BB%8ETHE9%E5%B0%B1%E8%B7%9F%E4%BA%86%E4%BD%A0%E4%BB%AC%E4%BA%86%23) `498.8K 🔥` `NEW`
1. [魏子宸行骑士礼](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E8%A1%8C%E9%AA%91%E5%A3%AB%E7%A4%BC%23) `497.1K 🔥` `NEW`
1. [月薪两万吐槽吃不起中式快餐](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E4%B8%A4%E4%B8%87%E5%90%90%E6%A7%BD%E5%90%83%E4%B8%8D%E8%B5%B7%E4%B8%AD%E5%BC%8F%E5%BF%AB%E9%A4%90%23) `495.9K 🔥` `NEW`
1. [偶遇李小冉孙怡牵手逛夜市](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E6%9D%8E%E5%B0%8F%E5%86%89%E5%AD%99%E6%80%A1%E7%89%B5%E6%89%8B%E9%80%9B%E5%A4%9C%E5%B8%82%23) `488.7K 🔥` `NEW`
1. [3句口诀专攻乳腺结节 (3 mantras to treat breast nodules)](https://s.weibo.com/weibo?q=%233%E5%8F%A5%E5%8F%A3%E8%AF%80%E4%B8%93%E6%94%BB%E4%B9%B3%E8%85%BA%E7%BB%93%E8%8A%82%23) `485.9K 🔥` `NEW`
1. [谢霆锋认为糖拌西红柿不能拿来比赛](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E8%AE%A4%E4%B8%BA%E7%B3%96%E6%8B%8C%E8%A5%BF%E7%BA%A2%E6%9F%BF%E4%B8%8D%E8%83%BD%E6%8B%BF%E6%9D%A5%E6%AF%94%E8%B5%9B%23) `483.1K 🔥` `NEW`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `480.4K 🔥` `NEW`
1. [祁煜赤霄武神](https://s.weibo.com/weibo?q=%23%E7%A5%81%E7%85%9C%E8%B5%A4%E9%9C%84%E6%AD%A6%E7%A5%9E%23) `475.6K 🔥` `NEW`
1. [民宿回应顾客实付221元到手40.67元](https://s.weibo.com/weibo?q=%23%E6%B0%91%E5%AE%BF%E5%9B%9E%E5%BA%94%E9%A1%BE%E5%AE%A2%E5%AE%9E%E4%BB%98221%E5%85%83%E5%88%B0%E6%89%8B40.67%E5%85%83%23) `472.9K 🔥` `NEW`
1. [电影奥德赛](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `472.5K 🔥` `NEW`
1. [哈兰德头像被印在毒品包装上](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%B4%E5%83%8F%E8%A2%AB%E5%8D%B0%E5%9C%A8%E6%AF%92%E5%93%81%E5%8C%85%E8%A3%85%E4%B8%8A%23) `469.8K 🔥` `NEW`
1. [孙珍妮艾米敖子逸变特别出演](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%8F%8D%E5%A6%AE%E8%89%BE%E7%B1%B3%E6%95%96%E5%AD%90%E9%80%B8%E5%8F%98%E7%89%B9%E5%88%AB%E5%87%BA%E6%BC%94%23) `466.0K 🔥` `NEW`
1. [被骚扰中国女游客称会继续寻求申诉](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%AA%9A%E6%89%B0%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%B8%B8%E5%AE%A2%E7%A7%B0%E4%BC%9A%E7%BB%A7%E7%BB%AD%E5%AF%BB%E6%B1%82%E7%94%B3%E8%AF%89%23) `463.0K 🔥` `NEW`
1. [四六级查分时间](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%E6%97%B6%E9%97%B4%23) `459.4K 🔥` `NEW`
1. [月光变奏曲的二狗去世了 (The second dog of Moonlight Variations passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%89%E5%8F%98%E5%A5%8F%E6%9B%B2%E7%9A%84%E4%BA%8C%E7%8B%97%E5%8E%BB%E4%B8%96%E4%BA%86%23) `455.0K 🔥` `NEW`
1. [王俊凯重庆站哭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%87%8D%E5%BA%86%E7%AB%99%E5%93%AD%E4%BA%86%23) `447.4K 🔥` `NEW`
1. [鸡蛋长出5厘米尾巴](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%9B%8B%E9%95%BF%E5%87%BA5%E5%8E%98%E7%B1%B3%E5%B0%BE%E5%B7%B4%23) `446.4K 🔥` `NEW`
1. [AI用配音演员声线接广告](https://s.weibo.com/weibo?q=%23AI%E7%94%A8%E9%85%8D%E9%9F%B3%E6%BC%94%E5%91%98%E5%A3%B0%E7%BA%BF%E6%8E%A5%E5%B9%BF%E5%91%8A%23) `437.3K 🔥` `NEW`
1. [男主身高164劝退六成读者](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%BB%E8%BA%AB%E9%AB%98164%E5%8A%9D%E9%80%80%E5%85%AD%E6%88%90%E8%AF%BB%E8%80%85%23) `886.7K 🔥` `+189%`
1. [曝杨幂金鹰奖掉提](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E5%B9%82%E9%87%91%E9%B9%B0%E5%A5%96%E6%8E%89%E6%8F%90%23) `830.0K 🔥` `+148%`
1. [国乒男女双全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%A5%B3%E5%8F%8C%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `532.9K 🔥` `+60%`
1. [师兄太稳健](https://s.weibo.com/weibo?q=%23%E5%B8%88%E5%85%84%E5%A4%AA%E7%A8%B3%E5%81%A5%23) `506.4K 🔥` `+77%`
1. [孙彩瑛分手](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BD%A9%E7%91%9B%E5%88%86%E6%89%8B%23) `492.8K 🔥` `+53%`
1. [男子下地库碾到横卧醉汉致其死亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8B%E5%9C%B0%E5%BA%93%E7%A2%BE%E5%88%B0%E6%A8%AA%E5%8D%A7%E9%86%89%E6%B1%89%E8%87%B4%E5%85%B6%E6%AD%BB%E4%BA%A1%23) `480.9K 🔥` `+58%`
1. [郭麒麟瘦到认不出 (Guo Qilin is so thin that he is unrecognizable)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `460.0K 🔥` `+38%`
1. [杨博文救场 (Yang Bowen comes to the rescue)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E6%95%91%E5%9C%BA%23) `453.0K 🔥` `+37%`
1. [胖东来郑州店招聘公告](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%83%91%E5%B7%9E%E5%BA%97%E6%8B%9B%E8%81%98%E5%85%AC%E5%91%8A%23) `451.8K 🔥` `+44%`
1. [国乒一天输6场外战 (National table tennis lost 6 foreign games in one day)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%B8%80%E5%A4%A9%E8%BE%936%E5%9C%BA%E5%A4%96%E6%88%98%23) `444.3K 🔥` `+32%`
1. [姜潮 我也是第一次结婚](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%20%E6%88%91%E4%B9%9F%E6%98%AF%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%BB%93%E5%A9%9A%23) `441.7K 🔥` `+41%`
1. [银行能办结婚证了 (Banks can now issue marriage certificates)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `1.5M 🔥`
1. [C罗乔治娜财产协议曝光](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E8%B4%A2%E4%BA%A7%E5%8D%8F%E8%AE%AE%E6%9B%9D%E5%85%89%23) `872.4K 🔥`
1. [胖东来闭店一天整条街都没人出摊 (Fat Donglai closed his shop for one day and no one was out on the street.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%97%AD%E5%BA%97%E4%B8%80%E5%A4%A9%E6%95%B4%E6%9D%A1%E8%A1%97%E9%83%BD%E6%B2%A1%E4%BA%BA%E5%87%BA%E6%91%8A%23) `1.2M 🔥` `-27%`
1. [工业旅游市场有望突破3000亿元 (The industrial tourism market is expected to exceed 300 billion yuan)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%B8%9A%E6%97%85%E6%B8%B8%E5%B8%82%E5%9C%BA%E6%9C%89%E6%9C%9B%E7%AA%81%E7%A0%B43000%E4%BA%BF%E5%85%83%23) `528.5K 🔥` `-57%`
1. [沈腾回应0影帝](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%940%E5%BD%B1%E5%B8%9D%23) `523.6K 🔥` `-45%`
1. [吴越 你确定这话是吴越说的](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%20%E4%BD%A0%E7%A1%AE%E5%AE%9A%E8%BF%99%E8%AF%9D%E6%98%AF%E5%90%B4%E8%B6%8A%E8%AF%B4%E7%9A%84%23) `505.9K 🔥` `-58%`
1. [她的文学功底恐怕在我之上](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E7%9A%84%E6%96%87%E5%AD%A6%E5%8A%9F%E5%BA%95%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A%23) `435.1K 🔥` `-24%`

Updated at 2026-08-14 12:26:44

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
