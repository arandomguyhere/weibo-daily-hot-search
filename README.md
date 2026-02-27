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

1. [数读春节消费市场年味十足 (Digital reading of the Spring Festival consumer market is full of new year flavor)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E5%B9%B4%E5%91%B3%E5%8D%81%E8%B6%B3%23) `614.1K 🔥` `NEW`
1. [MBTI人格更新啦](https://s.weibo.com/weibo?q=%23MBTI%E4%BA%BA%E6%A0%BC%E6%9B%B4%E6%96%B0%E5%95%A6%23) `431.8K 🔥` `NEW`
1. [TODS大秀](https://s.weibo.com/weibo?q=%23TODS%E5%A4%A7%E7%A7%80%23) `423.0K 🔥` `NEW`
1. [36岁程序员被曝复工当晚猝死](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E8%A2%AB%E6%9B%9D%E5%A4%8D%E5%B7%A5%E5%BD%93%E6%99%9A%E7%8C%9D%E6%AD%BB%23) `230.5K 🔥` `NEW`
1. [医院贴条提醒禁用死亡人员证件挂号](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E8%B4%B4%E6%9D%A1%E6%8F%90%E9%86%92%E7%A6%81%E7%94%A8%E6%AD%BB%E4%BA%A1%E4%BA%BA%E5%91%98%E8%AF%81%E4%BB%B6%E6%8C%82%E5%8F%B7%23) `230.0K 🔥` `NEW`
1. [捡手机藏4个月失主WiFi定位追到](https://s.weibo.com/weibo?q=%23%E6%8D%A1%E6%89%8B%E6%9C%BA%E8%97%8F4%E4%B8%AA%E6%9C%88%E5%A4%B1%E4%B8%BBWiFi%E5%AE%9A%E4%BD%8D%E8%BF%BD%E5%88%B0%23) `185.2K 🔥` `NEW`
1. [向华强 向佐不能搞老三老四](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%8D%8E%E5%BC%BA%20%E5%90%91%E4%BD%90%E4%B8%8D%E8%83%BD%E6%90%9E%E8%80%81%E4%B8%89%E8%80%81%E5%9B%9B%23) `166.5K 🔥` `NEW`
1. [白宇前女友说终于有了很骄傲的感觉](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%AF%B4%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%86%E5%BE%88%E9%AA%84%E5%82%B2%E7%9A%84%E6%84%9F%E8%A7%89%23) `143.8K 🔥` `NEW`
1. [镖人破十亿刀马谛听番外](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A0%B4%E5%8D%81%E4%BA%BF%E5%88%80%E9%A9%AC%E8%B0%9B%E5%90%AC%E7%95%AA%E5%A4%96%23) `127.6K 🔥` `NEW`
1. [李胜利的狱友repo](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%83%9C%E5%88%A9%E7%9A%84%E7%8B%B1%E5%8F%8Brepo%23) `125.8K 🔥` `NEW`
1. [人社局回应女子为父请假致其被辞退 (The Human Resources and Social Security Bureau responded to a woman’s request for leave for her father, which led to her dismissal)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%A4%BE%E5%B1%80%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E4%B8%BA%E7%88%B6%E8%AF%B7%E5%81%87%E8%87%B4%E5%85%B6%E8%A2%AB%E8%BE%9E%E9%80%80%23) `123.8K 🔥` `NEW`
1. [妈妈在女儿婚礼上美出圈](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9C%A8%E5%A5%B3%E5%84%BF%E5%A9%9A%E7%A4%BC%E4%B8%8A%E7%BE%8E%E5%87%BA%E5%9C%88%23) `118.3K 🔥` `NEW`
1. [王天辰 孩子太多了养不起](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E5%AD%A9%E5%AD%90%E5%A4%AA%E5%A4%9A%E4%BA%86%E5%85%BB%E4%B8%8D%E8%B5%B7%23) `116.9K 🔥` `NEW`
1. [新春走基层看见生态牧歌](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%E7%9C%8B%E8%A7%81%E7%94%9F%E6%80%81%E7%89%A7%E6%AD%8C%23) `114.6K 🔥` `NEW`
1. [王鹤棣说沈月的字好好看](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AF%B4%E6%B2%88%E6%9C%88%E7%9A%84%E5%AD%97%E5%A5%BD%E5%A5%BD%E7%9C%8B%23) `109.6K 🔥` `NEW`
1. [黄晓明说范丞丞黄子韬给青岛人丢人](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E8%AF%B4%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%BB%84%E5%AD%90%E9%9F%AC%E7%BB%99%E9%9D%92%E5%B2%9B%E4%BA%BA%E4%B8%A2%E4%BA%BA%23) `109.5K 🔥` `NEW`
1. [瑞幸咖啡去年总净收入超492亿](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%92%96%E5%95%A1%E5%8E%BB%E5%B9%B4%E6%80%BB%E5%87%80%E6%94%B6%E5%85%A5%E8%B6%85492%E4%BA%BF%23) `102.7K 🔥` `NEW`
1. [超短学期](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%9F%AD%E5%AD%A6%E6%9C%9F%23) `98.3K 🔥` `NEW`
1. [打卡地球最像月球的地方](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E5%9C%B0%E7%90%83%E6%9C%80%E5%83%8F%E6%9C%88%E7%90%83%E7%9A%84%E5%9C%B0%E6%96%B9%23) `97.1K 🔥` `NEW`
1. [腾讯感谢爱奇艺宣传逐玉](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%84%9F%E8%B0%A2%E7%88%B1%E5%A5%87%E8%89%BA%E5%AE%A3%E4%BC%A0%E9%80%90%E7%8E%89%23) `1.1M 🔥` `+294%`
1. [白敬亭章若楠 二搭 (Bai Jingting, Zhang Ruonan, Er Da)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E7%AB%A0%E8%8B%A5%E6%A5%A0%20%E4%BA%8C%E6%90%AD%23) `556.3K 🔥` `+191%`
1. [米哈游内部发文回应员工意外离世](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%93%88%E6%B8%B8%E5%86%85%E9%83%A8%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E5%91%98%E5%B7%A5%E6%84%8F%E5%A4%96%E7%A6%BB%E4%B8%96%23) `327.0K 🔥` `+71%`
1. [赵晴好灵](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%99%B4%E5%A5%BD%E7%81%B5%23) `233.2K 🔥` `+65%`
1. [未开封杨枝甘露8天后爆炸 (Unopened poplar nectar exploded after 8 days)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%BC%80%E5%B0%81%E6%9D%A8%E6%9E%9D%E7%94%98%E9%9C%B28%E5%A4%A9%E5%90%8E%E7%88%86%E7%82%B8%23) `788.2K 🔥`
1. [新娘出嫁徒手拔光碎发](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%87%BA%E5%AB%81%E5%BE%92%E6%89%8B%E6%8B%94%E5%85%89%E7%A2%8E%E5%8F%91%23) `497.2K 🔥`
1. [女子婚内出轨同居犯重婚罪获刑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8%E5%90%8C%E5%B1%85%E7%8A%AF%E9%87%8D%E5%A9%9A%E7%BD%AA%E8%8E%B7%E5%88%91%23) `283.5K 🔥`
1. [P图的时候忘记P的是实况](https://s.weibo.com/weibo?q=%23P%E5%9B%BE%E7%9A%84%E6%97%B6%E5%80%99%E5%BF%98%E8%AE%B0P%E7%9A%84%E6%98%AF%E5%AE%9E%E5%86%B5%23) `283.2K 🔥`
1. [李亚鹏官宣与哥哥和解](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%AE%98%E5%AE%A3%E4%B8%8E%E5%93%A5%E5%93%A5%E5%92%8C%E8%A7%A3%23) `263.1K 🔥`
1. [小徐六级277分](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BE%90%E5%85%AD%E7%BA%A7277%E5%88%86%23) `250.4K 🔥`
1. [不建议在朋友圈展示技能](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%B1%95%E7%A4%BA%E6%8A%80%E8%83%BD%23) `236.4K 🔥`
1. [Tiffany卞耀汉结婚](https://s.weibo.com/weibo?q=%23Tiffany%E5%8D%9E%E8%80%80%E6%B1%89%E7%BB%93%E5%A9%9A%23) `229.9K 🔥`
1. [见春天 陈飞宇王影璐 (See Spring Chen Feiyu Wang Yinglu)](https://s.weibo.com/weibo?q=%23%E8%A7%81%E6%98%A5%E5%A4%A9%20%E9%99%88%E9%A3%9E%E5%AE%87%E7%8E%8B%E5%BD%B1%E7%92%90%23) `229.8K 🔥`
1. [AI短剧已经丝滑到这种程度了](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E5%B7%B2%E7%BB%8F%E4%B8%9D%E6%BB%91%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `172.4K 🔥`
1. [杨幂唐嫣看秀生图 (Yang Mi and Tang Yan look at Xiu Sheng pictures)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%94%90%E5%AB%A3%E7%9C%8B%E7%A7%80%E7%94%9F%E5%9B%BE%23) `157.3K 🔥`
1. [姐姐姐夫](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E5%A7%90%E5%A4%AB%23) `117.3K 🔥`
1. [豆包严正声明](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `109.5K 🔥`
1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `469.5K 🔥` `-58%`
1. [43岁也能考编了 (I can take the exam at 43 years old)](https://s.weibo.com/weibo?q=%2343%E5%B2%81%E4%B9%9F%E8%83%BD%E8%80%83%E7%BC%96%E4%BA%86%23) `394.2K 🔥` `-32%`
1. [头像洁癖](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E5%83%8F%E6%B4%81%E7%99%96%23) `283.8K 🔥` `-46%`
1. [虞书欣父亲借贷案三大焦点 (Three major focuses of Yu Shuxin’s father’s loan case)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E5%80%9F%E8%B4%B7%E6%A1%88%E4%B8%89%E5%A4%A7%E7%84%A6%E7%82%B9%23) `182.6K 🔥` `-24%`
1. [姜妍常驻现在就出发](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%B8%B8%E9%A9%BB%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `180.4K 🔥` `-46%`
1. [意大利小偷把肾结石误认黄金偷走 (Italian thief mistook kidney stone for gold and stole it)](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E5%B0%8F%E5%81%B7%E6%8A%8A%E8%82%BE%E7%BB%93%E7%9F%B3%E8%AF%AF%E8%AE%A4%E9%BB%84%E9%87%91%E5%81%B7%E8%B5%B0%23) `176.8K 🔥` `-58%`
1. [魅族](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%23) `159.0K 🔥` `-34%`
1. [美国发动网攻侵占全球虚拟资产](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E5%8A%A8%E7%BD%91%E6%94%BB%E4%BE%B5%E5%8D%A0%E5%85%A8%E7%90%83%E8%99%9A%E6%8B%9F%E8%B5%84%E4%BA%A7%23) `158.0K 🔥` `-75%`
1. [尘白禁区联动取消 (Linkage cancellation of Chenbai restricted area)](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E8%81%94%E5%8A%A8%E5%8F%96%E6%B6%88%23) `127.9K 🔥` `-33%`
1. [替父请假2小时致其被开除女子发声](https://s.weibo.com/weibo?q=%23%E6%9B%BF%E7%88%B6%E8%AF%B7%E5%81%872%E5%B0%8F%E6%97%B6%E8%87%B4%E5%85%B6%E8%A2%AB%E5%BC%80%E9%99%A4%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `127.0K 🔥` `-47%`
1. [内娱男艺人要下海开酒吧了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%94%B7%E8%89%BA%E4%BA%BA%E8%A6%81%E4%B8%8B%E6%B5%B7%E5%BC%80%E9%85%92%E5%90%A7%E4%BA%86%23) `116.6K 🔥` `-21%`
1. [伊能静 真的别再雌竞了 (Yi Nengjing, really stop competing with females.)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%20%E7%9C%9F%E7%9A%84%E5%88%AB%E5%86%8D%E9%9B%8C%E7%AB%9E%E4%BA%86%23) `113.3K 🔥` `-52%`
1. [今天的饺子是王一博擀的皮 (Today’s dumplings are made by Wang Yibo)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E7%9A%84%E9%A5%BA%E5%AD%90%E6%98%AF%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%93%80%E7%9A%84%E7%9A%AE%23) `107.3K 🔥` `-53%`

Updated at 2026-02-27 17:27:37

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
