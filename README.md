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

1. [王楚钦2比4松岛辉空 (Wang Chuqin 2 to 4 Matsushima Terukong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A62%E6%AF%944%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `1.8M 🔥` `NEW`
1. [王楚钦vs松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `925.8K 🔥` `NEW`
1. [十五五民生红包](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%B0%91%E7%94%9F%E7%BA%A2%E5%8C%85%23) `767.9K 🔥` `NEW`
1. [CMG中国电影盛典入围名单](https://s.weibo.com/weibo?q=%23CMG%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E7%9B%9B%E5%85%B8%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `221.1K 🔥` `NEW`
1. [逐玉预告](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%A2%84%E5%91%8A%23) `215.9K 🔥` `NEW`
1. [刘文祥麻辣烫回应鸭肉当猪肉牛肉卖](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%E5%9B%9E%E5%BA%94%E9%B8%AD%E8%82%89%E5%BD%93%E7%8C%AA%E8%82%89%E7%89%9B%E8%82%89%E5%8D%96%23) `198.8K 🔥` `NEW`
1. [人民大会堂的同款老式热水瓶已停产](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E7%9A%84%E5%90%8C%E6%AC%BE%E8%80%81%E5%BC%8F%E7%83%AD%E6%B0%B4%E7%93%B6%E5%B7%B2%E5%81%9C%E4%BA%A7%23) `197.4K 🔥` `NEW`
1. [一栗小莎子近况](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E8%BF%91%E5%86%B5%23) `195.9K 🔥` `NEW`
1. [黄子弘凡鸟巢上座率](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E9%B8%9F%E5%B7%A2%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `195.1K 🔥` `NEW`
1. [谢征替樊长玉受罚](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%9B%BF%E6%A8%8A%E9%95%BF%E7%8E%89%E5%8F%97%E7%BD%9A%23) `194.4K 🔥` `NEW`
1. [女子称顺产分娩时直肠被切漏 (Woman says her rectum was cut and leaked during vaginal delivery)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%A1%BA%E4%BA%A7%E5%88%86%E5%A8%A9%E6%97%B6%E7%9B%B4%E8%82%A0%E8%A2%AB%E5%88%87%E6%BC%8F%23) `193.3K 🔥` `NEW`
1. [刘宇宁演唱会](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%BC%94%E5%94%B1%E4%BC%9A%23) `107.6K 🔥` `NEW`
1. [第一次被一个柜子惊艳到](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E4%B8%80%E4%B8%AA%E6%9F%9C%E5%AD%90%E6%83%8A%E8%89%B3%E5%88%B0%23) `102.1K 🔥` `NEW`
1. [DYG选马可](https://s.weibo.com/weibo?q=%23DYG%E9%80%89%E9%A9%AC%E5%8F%AF%23) `86.3K 🔥` `NEW`
1. [陈熠3比4大藤沙月](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A03%E6%AF%944%E5%A4%A7%E8%97%A4%E6%B2%99%E6%9C%88%23) `86.1K 🔥` `NEW`
1. [薛凯琪 我活着也不要做活死人](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%87%AF%E7%90%AA%20%E6%88%91%E6%B4%BB%E7%9D%80%E4%B9%9F%E4%B8%8D%E8%A6%81%E5%81%9A%E6%B4%BB%E6%AD%BB%E4%BA%BA%23) `83.7K 🔥` `NEW`
1. [田曦薇20秒无台词情绪戏](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%8720%E7%A7%92%E6%97%A0%E5%8F%B0%E8%AF%8D%E6%83%85%E7%BB%AA%E6%88%8F%23) `83.6K 🔥` `NEW`
1. [周深翻唱TaylorSwift的CruelSummer](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%BF%BB%E5%94%B1TaylorSwift%E7%9A%84CruelSummer%23) `81.0K 🔥` `NEW`
1. [从此不敢直视白色缅因猫](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%AD%A4%E4%B8%8D%E6%95%A2%E7%9B%B4%E8%A7%86%E7%99%BD%E8%89%B2%E7%BC%85%E5%9B%A0%E7%8C%AB%23) `74.9K 🔥` `NEW`
1. [黄子弘凡坐飞机绕场鸟巢](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%9D%90%E9%A3%9E%E6%9C%BA%E7%BB%95%E5%9C%BA%E9%B8%9F%E5%B7%A2%23) `72.3K 🔥` `NEW`
1. [你好星期六 (hello saturday)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `72.2K 🔥` `NEW`
1. [中国女篮vs南苏丹女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E5%8D%97%E8%8B%8F%E4%B8%B9%E5%A5%B3%E7%AF%AE%23) `71.6K 🔥` `NEW`
1. [李宇春上海演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E4%B8%8A%E6%B5%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `71.5K 🔥` `NEW`
1. [央视曝光纯骗版医美](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BA%AF%E9%AA%97%E7%89%88%E5%8C%BB%E7%BE%8E%23) `70.6K 🔥` `NEW`
1. [伊朗发起第49波打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC49%E6%B3%A2%E6%89%93%E5%87%BB%23) `69.0K 🔥` `NEW`
1. [孙颖莎挠痒痒没挠到](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8C%A0%E7%97%92%E7%97%92%E6%B2%A1%E6%8C%A0%E5%88%B0%23) `67.2K 🔥` `NEW`
1. [美团外卖周末半价吃大餐 (Meituan Takeaway offers half-price meals on weekends)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `696.9K 🔥` `+22%`
1. [林依晨称因熬夜和压力患脑部囊肿](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E7%A7%B0%E5%9B%A0%E7%86%AC%E5%A4%9C%E5%92%8C%E5%8E%8B%E5%8A%9B%E6%82%A3%E8%84%91%E9%83%A8%E5%9B%8A%E8%82%BF%23) `194.3K 🔥` `+54%`
1. [生菜是最伟大的蔬菜](https://s.weibo.com/weibo?q=%23%E7%94%9F%E8%8F%9C%E6%98%AF%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E8%94%AC%E8%8F%9C%23) `244.8K 🔥`
1. [伊朗称袭击美军中东三大军事基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%86%9B%E4%B8%AD%E4%B8%9C%E4%B8%89%E5%A4%A7%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `222.3K 🔥`
1. [女孩长期便血以为是痔疮结果是癌症](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%95%BF%E6%9C%9F%E4%BE%BF%E8%A1%80%E4%BB%A5%E4%B8%BA%E6%98%AF%E7%97%94%E7%96%AE%E7%BB%93%E6%9E%9C%E6%98%AF%E7%99%8C%E7%97%87%23) `194.4K 🔥`
1. [美国急于退场以色列还想硬刚 (The United States is eager to withdraw, but Israel wants to be tough)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%80%A5%E4%BA%8E%E9%80%80%E5%9C%BA%E4%BB%A5%E8%89%B2%E5%88%97%E8%BF%98%E6%83%B3%E7%A1%AC%E5%88%9A%23) `126.8K 🔥`
1. [王冕官宣生子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%86%95%E5%AE%98%E5%AE%A3%E7%94%9F%E5%AD%90%23) `107.0K 🔥`
1. [央视315晚会点了4个领域 (CCTV 315 Party highlighted 4 areas)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86315%E6%99%9A%E4%BC%9A%E7%82%B9%E4%BA%864%E4%B8%AA%E9%A2%86%E5%9F%9F%23) `324.2K 🔥` `-70%`
1. [315调查眼镜到底有多暴利 (315 investigates how profitable glasses are)](https://s.weibo.com/weibo?q=%23315%E8%B0%83%E6%9F%A5%E7%9C%BC%E9%95%9C%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E6%9A%B4%E5%88%A9%23) `198.9K 🔥` `-74%`
1. [这洗脚水是非喝不可吗 (Do you have to drink this foot-washing water?)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%B4%97%E8%84%9A%E6%B0%B4%E6%98%AF%E9%9D%9E%E5%96%9D%E4%B8%8D%E5%8F%AF%E5%90%97%23) `190.3K 🔥` `-40%`
1. [孔雪儿邓凯浴池戏 (Kong Xueer and Deng Kai bath scene)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E6%B5%B4%E6%B1%A0%E6%88%8F%23) `101.2K 🔥` `-68%`
1. [TOP直播 (TOP live broadcast)](https://s.weibo.com/weibo?q=%23TOP%E7%9B%B4%E6%92%AD%23) `99.6K 🔥` `-21%`
1. [冰箱贴一直不挪会伤害冰箱](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E8%B4%B4%E4%B8%80%E7%9B%B4%E4%B8%8D%E6%8C%AA%E4%BC%9A%E4%BC%A4%E5%AE%B3%E5%86%B0%E7%AE%B1%23) `97.6K 🔥` `-72%`
1. [逐玉 肛泰别闹了 (Zhuyu, Antai, stop making trouble)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%82%9B%E6%B3%B0%E5%88%AB%E9%97%B9%E4%BA%86%23) `97.0K 🔥` `-53%`
1. [金道勋ana互动](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%81%93%E5%8B%8Bana%E4%BA%92%E5%8A%A8%23) `96.8K 🔥` `-23%`
1. [男子投诉10分钟后隐私被扒得底朝天](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%95%E8%AF%8910%E5%88%86%E9%92%9F%E5%90%8E%E9%9A%90%E7%A7%81%E8%A2%AB%E6%89%92%E5%BE%97%E5%BA%95%E6%9C%9D%E5%A4%A9%23) `90.1K 🔥` `-28%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `90.0K 🔥` `-29%`
1. [陆仙人回应整容](https://s.weibo.com/weibo?q=%23%E9%99%86%E4%BB%99%E4%BA%BA%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%23) `90.0K 🔥` `-29%`
1. [豹豹原来是汗脚](https://s.weibo.com/weibo?q=%23%E8%B1%B9%E8%B1%B9%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%B1%97%E8%84%9A%23) `89.7K 🔥` `-57%`
1. [伊方称结束战争有两个条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%B9%E7%A7%B0%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%E6%9C%89%E4%B8%A4%E4%B8%AA%E6%9D%A1%E4%BB%B6%23) `85.9K 🔥` `-32%`
1. [申论大作文 (Essay on essay)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AE%BA%E5%A4%A7%E4%BD%9C%E6%96%87%23) `83.2K 🔥` `-36%`
1. [被丢弃厕所女婴含泪抱住妈妈](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%E5%A5%B3%E5%A9%B4%E5%90%AB%E6%B3%AA%E6%8A%B1%E4%BD%8F%E5%A6%88%E5%A6%88%23) `78.1K 🔥` `-38%`
1. [省考申论 (Provincial Examination Application Essay)](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E7%94%B3%E8%AE%BA%23) `76.2K 🔥` `-39%`
1. [云南花香蓝莓 (Yunnan floral blueberry)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E8%8A%B1%E9%A6%99%E8%93%9D%E8%8E%93%23) `73.1K 🔥` `-44%`
1. [谢征没有言正帅 谁上班谁知道 (Xie Zheng didn’t say he was handsome. Who knows who is working?)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%B2%A1%E6%9C%89%E8%A8%80%E6%AD%A3%E5%B8%85%20%E8%B0%81%E4%B8%8A%E7%8F%AD%E8%B0%81%E7%9F%A5%E9%81%93%23) `70.3K 🔥` `-44%`

Updated at 2026-03-14 21:11:04

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
