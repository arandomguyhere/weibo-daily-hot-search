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

1. [女子回应买200元水果被指责后引产 (Woman responded to being accused of inducing labor after buying 200 yuan of fruit)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B9%B0200%E5%85%83%E6%B0%B4%E6%9E%9C%E8%A2%AB%E6%8C%87%E8%B4%A3%E5%90%8E%E5%BC%95%E4%BA%A7%23) `1.6M 🔥` `NEW`
1. [歌手 AI海报](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20AI%E6%B5%B7%E6%8A%A5%23) `1.2M 🔥` `NEW`
1. [广交会点燃入境消费新热潮](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E7%82%B9%E7%87%83%E5%85%A5%E5%A2%83%E6%B6%88%E8%B4%B9%E6%96%B0%E7%83%AD%E6%BD%AE%23) `926.7K 🔥` `NEW`
1. [单依纯郑州上座率](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E9%83%91%E5%B7%9E%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `778.1K 🔥` `NEW`
1. [大眼仔北京车展玩嗨了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%9C%BC%E4%BB%94%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%E7%8E%A9%E5%97%A8%E4%BA%86%23) `378.1K 🔥` `NEW`
1. [禁止外资收购Manus项目](https://s.weibo.com/weibo?q=%23%E7%A6%81%E6%AD%A2%E5%A4%96%E8%B5%84%E6%94%B6%E8%B4%ADManus%E9%A1%B9%E7%9B%AE%23) `270.1K 🔥` `NEW`
1. [王者铠联动新皮肤敖光](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E9%93%A0%E8%81%94%E5%8A%A8%E6%96%B0%E7%9A%AE%E8%82%A4%E6%95%96%E5%85%89%23) `268.7K 🔥` `NEW`
1. [丁禹兮回应今年没那么火了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%9B%9E%E5%BA%94%E4%BB%8A%E5%B9%B4%E6%B2%A1%E9%82%A3%E4%B9%88%E7%81%AB%E4%BA%86%23) `268.3K 🔥` `NEW`
1. [胖东来遭哄抢矿泉水为纯物理过滤](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%81%AD%E5%93%84%E6%8A%A2%E7%9F%BF%E6%B3%89%E6%B0%B4%E4%B8%BA%E7%BA%AF%E7%89%A9%E7%90%86%E8%BF%87%E6%BB%A4%23) `268.0K 🔥` `NEW`
1. [氧化菊把杨颖穿过的礼服碎钻弄丢一颗](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%E6%8A%8A%E6%9D%A8%E9%A2%96%E7%A9%BF%E8%BF%87%E7%9A%84%E7%A4%BC%E6%9C%8D%E7%A2%8E%E9%92%BB%E5%BC%84%E4%B8%A2%E4%B8%80%E9%A2%97%23) `267.0K 🔥` `NEW`
1. [孙颖莎穿fighting出征 (Sun Yingsha wears fighting to go to war)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%A9%BFfighting%E5%87%BA%E5%BE%81%23) `266.7K 🔥` `NEW`
1. [Meta Manus](https://s.weibo.com/weibo?q=%23Meta%20Manus%23) `259.5K 🔥` `NEW`
1. [疑似汤唯怀二胎](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%B1%A4%E5%94%AF%E6%80%80%E4%BA%8C%E8%83%8E%23) `257.5K 🔥` `NEW`
1. [田曦薇 飞升](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E9%A3%9E%E5%8D%87%23) `256.2K 🔥` `NEW`
1. [朱珠的嘴都要憋不住了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E7%9A%84%E5%98%B4%E9%83%BD%E8%A6%81%E6%86%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `254.1K 🔥` `NEW`
1. [叶璇与继母遭亡父保姆起诉](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%92%87%E4%B8%8E%E7%BB%A7%E6%AF%8D%E9%81%AD%E4%BA%A1%E7%88%B6%E4%BF%9D%E5%A7%86%E8%B5%B7%E8%AF%89%23) `248.2K 🔥` `NEW`
1. [董卿周涛 蕾丝边西装](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8D%BF%E5%91%A8%E6%B6%9B%20%E8%95%BE%E4%B8%9D%E8%BE%B9%E8%A5%BF%E8%A3%85%23) `245.8K 🔥` `NEW`
1. [云南楚雄一教师在校内教学楼坠楼](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E6%A5%9A%E9%9B%84%E4%B8%80%E6%95%99%E5%B8%88%E5%9C%A8%E6%A0%A1%E5%86%85%E6%95%99%E5%AD%A6%E6%A5%BC%E5%9D%A0%E6%A5%BC%23) `243.2K 🔥` `NEW`
1. [美国已收到伊朗谈判新方案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B7%B2%E6%94%B6%E5%88%B0%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E6%96%B0%E6%96%B9%E6%A1%88%23) `238.9K 🔥` `NEW`
1. [时代峰峻全世界最小方的公司](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%B0%8F%E6%96%B9%E7%9A%84%E5%85%AC%E5%8F%B8%23) `238.9K 🔥` `NEW`
1. [丁禹兮今年没那么火爆了 (Ding Yuxi is not so popular this year)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E4%BB%8A%E5%B9%B4%E6%B2%A1%E9%82%A3%E4%B9%88%E7%81%AB%E7%88%86%E4%BA%86%23) `238.9K 🔥` `NEW`
1. [詹姆斯回应火箭湖人赛后一片混乱](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E7%81%AB%E7%AE%AD%E6%B9%96%E4%BA%BA%E8%B5%9B%E5%90%8E%E4%B8%80%E7%89%87%E6%B7%B7%E4%B9%B1%23) `238.9K 🔥` `NEW`
1. [戚薇3岁儿子近照](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%873%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%23) `229.6K 🔥` `NEW`
1. [石宇奇退赛](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%87%E5%A5%87%E9%80%80%E8%B5%9B%23) `208.3K 🔥` `NEW`
1. [五一彻底治好了我的自驾梦](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%BD%BB%E5%BA%95%E6%B2%BB%E5%A5%BD%E4%BA%86%E6%88%91%E7%9A%84%E8%87%AA%E9%A9%BE%E6%A2%A6%23) `198.5K 🔥` `NEW`
1. [东方甄选回应大量用户申请退会员](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%9B%9E%E5%BA%94%E5%A4%A7%E9%87%8F%E7%94%A8%E6%88%B7%E7%94%B3%E8%AF%B7%E9%80%80%E4%BC%9A%E5%91%98%23) `198.4K 🔥` `NEW`
1. [东方甄选年初曾计划扩招主播至60人](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%B9%B4%E5%88%9D%E6%9B%BE%E8%AE%A1%E5%88%92%E6%89%A9%E6%8B%9B%E4%B8%BB%E6%92%AD%E8%87%B360%E4%BA%BA%23) `197.3K 🔥` `NEW`
1. [国乒出征合影陈熠发型意外抢镜](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%87%BA%E5%BE%81%E5%90%88%E5%BD%B1%E9%99%88%E7%86%A0%E5%8F%91%E5%9E%8B%E6%84%8F%E5%A4%96%E6%8A%A2%E9%95%9C%23) `196.2K 🔥` `NEW`
1. [教体局回应一教师留遗书校内坠楼](https://s.weibo.com/weibo?q=%23%E6%95%99%E4%BD%93%E5%B1%80%E5%9B%9E%E5%BA%94%E4%B8%80%E6%95%99%E5%B8%88%E7%95%99%E9%81%97%E4%B9%A6%E6%A0%A1%E5%86%85%E5%9D%A0%E6%A5%BC%23) `186.8K 🔥` `NEW`
1. [妻子怀疑丈夫出轨对方回应是教手艺](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E6%80%80%E7%96%91%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E5%AF%B9%E6%96%B9%E5%9B%9E%E5%BA%94%E6%98%AF%E6%95%99%E6%89%8B%E8%89%BA%23) `184.8K 🔥` `NEW`
1. [真心建议不要冤枉护肤 (I sincerely recommend not to treat skin care unfairly)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%BF%83%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E5%86%A4%E6%9E%89%E6%8A%A4%E8%82%A4%23) `180.9K 🔥` `NEW`
1. [AI 香港身份证](https://s.weibo.com/weibo?q=%23AI%20%E9%A6%99%E6%B8%AF%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `177.1K 🔥` `NEW`
1. [iPhoneFold疯狂秀刀法](https://s.weibo.com/weibo?q=%23iPhoneFold%E7%96%AF%E7%8B%82%E7%A7%80%E5%88%80%E6%B3%95%23) `175.2K 🔥` `NEW`
1. [买纸巾得多个心眼](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%BA%B8%E5%B7%BE%E5%BE%97%E5%A4%9A%E4%B8%AA%E5%BF%83%E7%9C%BC%23) `544.2K 🔥` `+74%`
1. [小米玄戒O1芯片已出货超100万颗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92O1%E8%8A%AF%E7%89%87%E5%B7%B2%E5%87%BA%E8%B4%A7%E8%B6%85100%E4%B8%87%E9%A2%97%23) `249.6K 🔥` `+25%`
1. [曝演员片酬已经跌到低点](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%BC%94%E5%91%98%E7%89%87%E9%85%AC%E5%B7%B2%E7%BB%8F%E8%B7%8C%E5%88%B0%E4%BD%8E%E7%82%B9%23) `267.8K 🔥`
1. [曝易梦玲整容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%93%E6%A2%A6%E7%8E%B2%E6%95%B4%E5%AE%B9%23) `267.7K 🔥`
1. [轰炸中伊朗国宝来到中国](https://s.weibo.com/weibo?q=%23%E8%BD%B0%E7%82%B8%E4%B8%AD%E4%BC%8A%E6%9C%97%E5%9B%BD%E5%AE%9D%E6%9D%A5%E5%88%B0%E4%B8%AD%E5%9B%BD%23) `267.4K 🔥`
1. [被我爸的道歉方式震惊了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%88%91%E7%88%B8%E7%9A%84%E9%81%93%E6%AD%89%E6%96%B9%E5%BC%8F%E9%9C%87%E6%83%8A%E4%BA%86%23) `267.1K 🔥`
1. [主播离职3天前俞敏洪说他们在休假](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E7%A6%BB%E8%81%8C3%E5%A4%A9%E5%89%8D%E4%BF%9E%E6%95%8F%E6%B4%AA%E8%AF%B4%E4%BB%96%E4%BB%AC%E5%9C%A8%E4%BC%91%E5%81%87%23) `266.6K 🔥`
1. [林志玲抱4岁儿子吃早餐 (Lin Chiling holds her 4-year-old son for breakfast)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E6%8A%B14%E5%B2%81%E5%84%BF%E5%AD%90%E5%90%83%E6%97%A9%E9%A4%90%23) `219.7K 🔥`
1. [包贝尔女儿六年过去还喜欢李现](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%A5%B3%E5%84%BF%E5%85%AD%E5%B9%B4%E8%BF%87%E5%8E%BB%E8%BF%98%E5%96%9C%E6%AC%A2%E6%9D%8E%E7%8E%B0%23) `197.8K 🔥`
1. [5200亿CPO概念龙头触及涨停](https://s.weibo.com/weibo?q=%235200%E4%BA%BFCPO%E6%A6%82%E5%BF%B5%E9%BE%99%E5%A4%B4%E8%A7%A6%E5%8F%8A%E6%B6%A8%E5%81%9C%23) `169.2K 🔥`
1. [醋酸美甲](https://s.weibo.com/weibo?q=%23%E9%86%8B%E9%85%B8%E7%BE%8E%E7%94%B2%23) `384.5K 🔥` `-52%`
1. [卢昱晓方确认演恰逢雨连天](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%96%B9%E7%A1%AE%E8%AE%A4%E6%BC%94%E6%81%B0%E9%80%A2%E9%9B%A8%E8%BF%9E%E5%A4%A9%23) `335.5K 🔥` `-54%`
1. [火箭湖人赛后一片混乱](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%AD%E6%B9%96%E4%BA%BA%E8%B5%9B%E5%90%8E%E4%B8%80%E7%89%87%E6%B7%B7%E4%B9%B1%23) `327.5K 🔥` `-37%`
1. [平台明确不要的艺人](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E6%98%8E%E7%A1%AE%E4%B8%8D%E8%A6%81%E7%9A%84%E8%89%BA%E4%BA%BA%23) `268.6K 🔥` `-22%`
1. [马龙送国乒出征](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E9%80%81%E5%9B%BD%E4%B9%92%E5%87%BA%E5%BE%81%23) `254.4K 🔥` `-73%`
1. [曝90生不止四部剧没过会](https://s.weibo.com/weibo?q=%23%E6%9B%9D90%E7%94%9F%E4%B8%8D%E6%AD%A2%E5%9B%9B%E9%83%A8%E5%89%A7%E6%B2%A1%E8%BF%87%E4%BC%9A%23) `196.3K 🔥` `-29%`
1. [东方甄选拒绝第二个董宇辉 (Oriental Selection rejects second Dong Yuhui)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%8B%92%E7%BB%9D%E7%AC%AC%E4%BA%8C%E4%B8%AA%E8%91%A3%E5%AE%87%E8%BE%89%23) `174.7K 🔥` `-58%`
1. [南方人为什么执着于通风](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E6%89%A7%E7%9D%80%E4%BA%8E%E9%80%9A%E9%A3%8E%23) `174.3K 🔥` `-50%`

Updated at 2026-04-27 16:42:38

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
