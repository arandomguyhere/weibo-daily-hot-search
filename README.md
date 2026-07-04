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

1. [韩国网友拿佛得角嘲讽国足 (Korean netizens use Cape Verde to mock the national football team)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%8B%BF%E4%BD%9B%E5%BE%97%E8%A7%92%E5%98%B2%E8%AE%BD%E5%9B%BD%E8%B6%B3%23) `1.3M 🔥` `NEW`
1. [BLG战胜T1](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CT1%23) `887.6K 🔥` `NEW`
1. [澳门又有好戏上演](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E5%8F%88%E6%9C%89%E5%A5%BD%E6%88%8F%E4%B8%8A%E6%BC%94%23) `720.1K 🔥` `NEW`
1. [男子赌球输几百万被妹妹送医院治疗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B5%8C%E7%90%83%E8%BE%93%E5%87%A0%E7%99%BE%E4%B8%87%E8%A2%AB%E5%A6%B9%E5%A6%B9%E9%80%81%E5%8C%BB%E9%99%A2%E6%B2%BB%E7%96%97%23) `344.9K 🔥` `NEW`
1. [杨紫都瘦成啥样了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%83%BD%E7%98%A6%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `344.8K 🔥` `NEW`
1. [张晚意花少给邓为送行](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E8%8A%B1%E5%B0%91%E7%BB%99%E9%82%93%E4%B8%BA%E9%80%81%E8%A1%8C%23) `344.7K 🔥` `NEW`
1. [周也圈内口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%9C%88%E5%86%85%E5%8F%A3%E7%A2%91%23) `344.6K 🔥` `NEW`
1. [曝摄像头AirPodsPro项目暂停](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%91%84%E5%83%8F%E5%A4%B4AirPodsPro%E9%A1%B9%E7%9B%AE%E6%9A%82%E5%81%9C%23) `344.5K 🔥` `NEW`
1. [佛得角门将粉丝数破2000万](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E7%B2%89%E4%B8%9D%E6%95%B0%E7%A0%B42000%E4%B8%87%23) `344.5K 🔥` `NEW`
1. [男生需要打HPV疫苗吗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E9%9C%80%E8%A6%81%E6%89%93HPV%E7%96%AB%E8%8B%97%E5%90%97%23) `344.5K 🔥` `NEW`
1. [MSI](https://s.weibo.com/weibo?q=%23MSI%23) `344.4K 🔥` `NEW`
1. [秦牛正威承认整容了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `344.3K 🔥` `NEW`
1. [王俊凯重庆站两场同时开启预售](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%87%8D%E5%BA%86%E7%AB%99%E4%B8%A4%E5%9C%BA%E5%90%8C%E6%97%B6%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `344.1K 🔥` `NEW`
1. [娜扎录制花少路透](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%BD%95%E5%88%B6%E8%8A%B1%E5%B0%91%E8%B7%AF%E9%80%8F%23) `344.1K 🔥` `NEW`
1. [白鹿做的咸蛋黄虾滑饺子](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%81%9A%E7%9A%84%E5%92%B8%E8%9B%8B%E9%BB%84%E8%99%BE%E6%BB%91%E9%A5%BA%E5%AD%90%23) `344.0K 🔥` `NEW`
1. [迪丽热巴柿子红短T](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9F%BF%E5%AD%90%E7%BA%A2%E7%9F%ADT%23) `307.5K 🔥` `NEW`
1. [等Bin发微博](https://s.weibo.com/weibo?q=%23%E7%AD%89Bin%E5%8F%91%E5%BE%AE%E5%8D%9A%23) `287.0K 🔥` `NEW`
1. [钎城说要去完成人生主线任务](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%E8%AF%B4%E8%A6%81%E5%8E%BB%E5%AE%8C%E6%88%90%E4%BA%BA%E7%94%9F%E4%B8%BB%E7%BA%BF%E4%BB%BB%E5%8A%A1%23) `281.2K 🔥` `NEW`
1. [王俊凯原来真的有这层含义](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E8%BF%99%E5%B1%82%E5%90%AB%E4%B9%89%23) `254.9K 🔥` `NEW`
1. [佛得角旅游搜索量暴涨](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%97%85%E6%B8%B8%E6%90%9C%E7%B4%A2%E9%87%8F%E6%9A%B4%E6%B6%A8%23) `252.2K 🔥` `NEW`
1. [花少8送考人 (Spend less than 8 to send exam candidates)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E9%80%81%E8%80%83%E4%BA%BA%23) `247.5K 🔥` `NEW`
1. [美军臆测10月解放军收复台湾](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%87%86%E6%B5%8B10%E6%9C%88%E8%A7%A3%E6%94%BE%E5%86%9B%E6%94%B6%E5%A4%8D%E5%8F%B0%E6%B9%BE%23) `245.3K 🔥` `NEW`
1. [迪丽热巴白色眼线](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%99%BD%E8%89%B2%E7%9C%BC%E7%BA%BF%23) `233.1K 🔥` `NEW`
1. [阿根廷队致敬佛得角](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E8%87%B4%E6%95%AC%E4%BD%9B%E5%BE%97%E8%A7%92%23) `212.1K 🔥` `NEW`
1. [虞书欣粉丝云包场灿如繁星](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `211.1K 🔥` `NEW`
1. [日本严令访印人员饮用当地自来水](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%A5%E4%BB%A4%E8%AE%BF%E5%8D%B0%E4%BA%BA%E5%91%98%E9%A5%AE%E7%94%A8%E5%BD%93%E5%9C%B0%E8%87%AA%E6%9D%A5%E6%B0%B4%23) `210.7K 🔥` `NEW`
1. [豆包千问建议提前备份重要内容](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8D%83%E9%97%AE%E5%BB%BA%E8%AE%AE%E6%8F%90%E5%89%8D%E5%A4%87%E4%BB%BD%E9%87%8D%E8%A6%81%E5%86%85%E5%AE%B9%23) `210.5K 🔥` `NEW`
1. [BLG对战T1](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98T1%23) `829.4K 🔥` `+198%`
1. [佛得角再次感谢中国](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%86%8D%E6%AC%A1%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `344.6K 🔥` `+26%`
1. [711起诉耐克抄袭](https://s.weibo.com/weibo?q=%23711%E8%B5%B7%E8%AF%89%E8%80%90%E5%85%8B%E6%8A%84%E8%A2%AD%23) `344.0K 🔥` `+26%`
1. [刘国正妻子说孙颖莎打得肯定没毛病 (Liu Guozheng’s wife said that there must be nothing wrong with Sun Yingsha’s beating)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%AD%A3%E5%A6%BB%E5%AD%90%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E5%BE%97%E8%82%AF%E5%AE%9A%E6%B2%A1%E6%AF%9B%E7%97%85%23) `343.9K 🔥` `+51%`
1. [到底是谁取消有线耳机的](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E5%8F%96%E6%B6%88%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%9A%84%23) `1.3M 🔥`
1. [本周这些数据最值得关注](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E6%9C%80%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `921.0K 🔥`
1. [路虎卫士都市营地 (Land Rover Defender Urban Camp)](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8E%E5%8D%AB%E5%A3%AB%E9%83%BD%E5%B8%82%E8%90%A5%E5%9C%B0%23) `890.0K 🔥`
1. [佛得角门将 俱乐部不要他了 (Cape Verdean goalkeeper is no longer wanted by the club)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%20%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%8D%E8%A6%81%E4%BB%96%E4%BA%86%23) `678.1K 🔥`
1. [张雪还清近亿债务](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%BF%98%E6%B8%85%E8%BF%91%E4%BA%BF%E5%80%BA%E5%8A%A1%23) `431.2K 🔥`
1. [郭宇欣 我和周也还不一定谁蹭谁呢](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%20%E6%88%91%E5%92%8C%E5%91%A8%E4%B9%9F%E8%BF%98%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%B0%81%E8%B9%AD%E8%B0%81%E5%91%A2%23) `344.8K 🔥`
1. [霉霉官宣完婚](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%AE%98%E5%AE%A3%E5%AE%8C%E5%A9%9A%23) `344.4K 🔥`
1. [秦岚嗓子恢复了 (Qin Lan's voice has recovered)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E6%81%A2%E5%A4%8D%E4%BA%86%23) `344.3K 🔥`
1. [小猫发现是国宴后迅速大吃一口](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%8F%91%E7%8E%B0%E6%98%AF%E5%9B%BD%E5%AE%B4%E5%90%8E%E8%BF%85%E9%80%9F%E5%A4%A7%E5%90%83%E4%B8%80%E5%8F%A3%23) `344.2K 🔥`
1. [曝霉霉婚礼上唯一允许带手机的人 (The only person allowed to bring a mobile phone to Swift's wedding)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%94%AF%E4%B8%80%E5%85%81%E8%AE%B8%E5%B8%A6%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%23) `344.2K 🔥`
1. [高市早苗访问印度拒喝印度水](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%AE%BF%E9%97%AE%E5%8D%B0%E5%BA%A6%E6%8B%92%E5%96%9D%E5%8D%B0%E5%BA%A6%E6%B0%B4%23) `344.1K 🔥`
1. [我并不知道郭宇欣这是怎么了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B9%B6%E4%B8%8D%E7%9F%A5%E9%81%93%E9%83%AD%E5%AE%87%E6%AC%A3%E8%BF%99%E6%98%AF%E6%80%8E%E4%B9%88%E4%BA%86%23) `343.9K 🔥`
1. [陈靖可横店送虞书欣上班](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E6%A8%AA%E5%BA%97%E9%80%81%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8A%E7%8F%AD%23) `257.8K 🔥`
1. [阿根廷门将回应淘汰佛得角 (Argentina goalkeeper responds to elimination of Cape Verde)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%97%A8%E5%B0%86%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%E4%BD%9B%E5%BE%97%E8%A7%92%23) `253.1K 🔥`
1. [陈妍希儿子星星颜值](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%84%BF%E5%AD%90%E6%98%9F%E6%98%9F%E9%A2%9C%E5%80%BC%23) `219.4K 🔥`
1. [佛得角队收获1100万美元奖金](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E6%94%B6%E8%8E%B71100%E4%B8%87%E7%BE%8E%E5%85%83%E5%A5%96%E9%87%91%23) `737.2K 🔥` `-51%`
1. [一直不理解鸡架这种食物](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%B8%8D%E7%90%86%E8%A7%A3%E9%B8%A1%E6%9E%B6%E8%BF%99%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `609.2K 🔥` `-29%`
1. [王楚钦孙颖莎获混双亚军 (Wang Chuqin and Sun Yingsha won the mixed doubles runner-up)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E8%8E%B7%E6%B7%B7%E5%8F%8C%E4%BA%9A%E5%86%9B%23) `344.8K 🔥` `-37%`
1. [只有看喜人和脱口秀的人才懂笑点](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E7%9C%8B%E5%96%9C%E4%BA%BA%E5%92%8C%E8%84%B1%E5%8F%A3%E7%A7%80%E7%9A%84%E4%BA%BA%E6%89%8D%E6%87%82%E7%AC%91%E7%82%B9%23) `344.6K 🔥` `-36%`
1. [佛得角更衣室哭了 (Cape Verde locker room cried)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%9B%B4%E8%A1%A3%E5%AE%A4%E5%93%AD%E4%BA%86%23) `252.0K 🔥` `-54%`
1. [王楚钦孙颖莎vs林仲勋申裕斌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C%23) `214.3K 🔥` `-23%`

Updated at 2026-07-04 19:13:09

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
