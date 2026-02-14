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

1. [成都天府大道事故酒驾司机全责 (The drunk driver is fully responsible for the accident on Tianfu Avenue in Chengdu)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%A4%A9%E5%BA%9C%E5%A4%A7%E9%81%93%E4%BA%8B%E6%95%85%E9%85%92%E9%A9%BE%E5%8F%B8%E6%9C%BA%E5%85%A8%E8%B4%A3%23) `391.0K 🔥` `NEW`
1. [2026NBA全明星](https://s.weibo.com/weibo?q=%232026NBA%E5%85%A8%E6%98%8E%E6%98%9F%23) `289.5K 🔥` `NEW`
1. [黄大宪一直盯着看林孝埈](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%A7%E5%AE%AA%E4%B8%80%E7%9B%B4%E7%9B%AF%E7%9D%80%E7%9C%8B%E6%9E%97%E5%AD%9D%E5%9F%88%23) `208.5K 🔥` `NEW`
1. [成何体统圆房镜头要钓我几天](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E5%9C%86%E6%88%BF%E9%95%9C%E5%A4%B4%E8%A6%81%E9%92%93%E6%88%91%E5%87%A0%E5%A4%A9%23) `149.6K 🔥` `NEW`
1. [春节吃喝指南](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%90%83%E5%96%9D%E6%8C%87%E5%8D%97%23) `148.2K 🔥` `NEW`
1. [中戏 招生](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%20%E6%8B%9B%E7%94%9F%23) `145.9K 🔥` `NEW`
1. [百果园回应一根甘蔗卖87元](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%9E%9C%E5%9B%AD%E5%9B%9E%E5%BA%94%E4%B8%80%E6%A0%B9%E7%94%98%E8%94%97%E5%8D%9687%E5%85%83%23) `142.1K 🔥` `NEW`
1. [情人节金莎想要金莎得到](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E9%87%91%E8%8E%8E%E6%83%B3%E8%A6%81%E9%87%91%E8%8E%8E%E5%BE%97%E5%88%B0%23) `141.2K 🔥` `NEW`
1. [王艺瑾回应整容争议](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E7%91%BE%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%E4%BA%89%E8%AE%AE%23) `134.0K 🔥` `NEW`
1. [易烊千玺宋佳张译这段破防率100%](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%AE%8B%E4%BD%B3%E5%BC%A0%E8%AF%91%E8%BF%99%E6%AE%B5%E7%A0%B4%E9%98%B2%E7%8E%87100%25%23) `131.3K 🔥` `NEW`
1. [情人节没对象我就这样 (I'm like this if I don't have a partner on Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E6%B2%A1%E5%AF%B9%E8%B1%A1%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `129.3K 🔥` `NEW`
1. [谷爱凌美猴王回花果山](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%BE%8E%E7%8C%B4%E7%8E%8B%E5%9B%9E%E8%8A%B1%E6%9E%9C%E5%B1%B1%23) `119.6K 🔥` `NEW`
1. [张凯丽回应录花少被骂](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%E5%9B%9E%E5%BA%94%E5%BD%95%E8%8A%B1%E5%B0%91%E8%A2%AB%E9%AA%82%23) `116.5K 🔥` `NEW`
1. [容祖儿上春晚没唱粤语歌被骂](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E7%A5%96%E5%84%BF%E4%B8%8A%E6%98%A5%E6%99%9A%E6%B2%A1%E5%94%B1%E7%B2%A4%E8%AF%AD%E6%AD%8C%E8%A2%AB%E9%AA%82%23) `103.2K 🔥` `NEW`
1. [偶遇宋祖儿潜水](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%AE%8B%E7%A5%96%E5%84%BF%E6%BD%9C%E6%B0%B4%23) `101.3K 🔥` `NEW`
1. [金虔佑 霸凌工作人员](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%99%94%E4%BD%91%20%E9%9C%B8%E5%87%8C%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%23) `93.1K 🔥` `NEW`
1. [鞠婧祎张云龙烟花点燃大橘大利](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BC%A0%E4%BA%91%E9%BE%99%E7%83%9F%E8%8A%B1%E7%82%B9%E7%87%83%E5%A4%A7%E6%A9%98%E5%A4%A7%E5%88%A9%23) `86.4K 🔥` `NEW`
1. [KPL年夜饭正式上线](https://s.weibo.com/weibo?q=%23KPL%E5%B9%B4%E5%A4%9C%E9%A5%AD%E6%AD%A3%E5%BC%8F%E4%B8%8A%E7%BA%BF%23) `81.7K 🔥` `NEW`
1. [这届女中医还是太强了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%A5%B3%E4%B8%AD%E5%8C%BB%E8%BF%98%E6%98%AF%E5%A4%AA%E5%BC%BA%E4%BA%86%23) `73.2K 🔥` `NEW`
1. [产检正常生出畸形儿医院被罚2.5万](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E6%AD%A3%E5%B8%B8%E7%94%9F%E5%87%BA%E7%95%B8%E5%BD%A2%E5%84%BF%E5%8C%BB%E9%99%A2%E8%A2%AB%E7%BD%9A2.5%E4%B8%87%23) `1.1M 🔥` `+640%`
1. [张萌说浪姐收手机是因为黄圣依 (Zhang Meng said that Sister Lang collected the mobile phone because of Huang Shengyi)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%AF%B4%E6%B5%AA%E5%A7%90%E6%94%B6%E6%89%8B%E6%9C%BA%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%BB%84%E5%9C%A3%E4%BE%9D%23) `516.1K 🔥` `+46%`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `761.4K 🔥`
1. [看电影的快乐正全面升级 (The joy of watching movies is being fully upgraded)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%94%B5%E5%BD%B1%E7%9A%84%E5%BF%AB%E4%B9%90%E6%AD%A3%E5%85%A8%E9%9D%A2%E5%8D%87%E7%BA%A7%23) `633.3K 🔥`
1. [情人节红包 (Valentine's Day Red Envelope)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E7%BA%A2%E5%8C%85%23) `345.8K 🔥`
1. [羽生结弦的含金量还在上升](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `202.5K 🔥`
1. [刘少昂孙龙林孝埈1500米冲金 (Liu Shao'ang, Sun Long and Lin Xiaoquan hit the gold medal at 1,500 meters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E5%AD%99%E9%BE%99%E6%9E%97%E5%AD%9D%E5%9F%881500%E7%B1%B3%E5%86%B2%E9%87%91%23) `155.5K 🔥`
1. [中戏 主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%20%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `154.2K 🔥`
1. [中国男子巴厘岛溺亡同伴连滚带爬求救](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%B7%B4%E5%8E%98%E5%B2%9B%E6%BA%BA%E4%BA%A1%E5%90%8C%E4%BC%B4%E8%BF%9E%E6%BB%9A%E5%B8%A6%E7%88%AC%E6%B1%82%E6%95%91%23) `153.5K 🔥`
1. [岳云鹏蔡文静亲密戏](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E8%94%A1%E6%96%87%E9%9D%99%E4%BA%B2%E5%AF%86%E6%88%8F%23) `152.1K 🔥`
1. [王鹤棣NBA全明星总得分30分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3NBA%E5%85%A8%E6%98%8E%E6%98%9F%E6%80%BB%E5%BE%97%E5%88%8630%E5%88%86%23) `144.9K 🔥`
1. [200名车友为爱发车跨城接亲](https://s.weibo.com/weibo?q=%23200%E5%90%8D%E8%BD%A6%E5%8F%8B%E4%B8%BA%E7%88%B1%E5%8F%91%E8%BD%A6%E8%B7%A8%E5%9F%8E%E6%8E%A5%E4%BA%B2%23) `142.3K 🔥`
1. [宋轶好刚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A5%BD%E5%88%9A%23) `139.1K 🔥`
1. [为什么微信红包最多只能200元](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E6%9C%80%E5%A4%9A%E5%8F%AA%E8%83%BD200%E5%85%83%23) `136.3K 🔥`
1. [蔡文静工伤 (Cai Wenjing's work injury)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%B7%A5%E4%BC%A4%23) `134.6K 🔥`
1. [得知22岁儿子巴厘岛溺亡母亲哭晕](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A522%E5%B2%81%E5%84%BF%E5%AD%90%E5%B7%B4%E5%8E%98%E5%B2%9B%E6%BA%BA%E4%BA%A1%E6%AF%8D%E4%BA%B2%E5%93%AD%E6%99%95%23) `132.2K 🔥`
1. [宋轶无名指戴了戒指 (Song Yi wears a ring on her ring finger)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E6%97%A0%E5%90%8D%E6%8C%87%E6%88%B4%E4%BA%86%E6%88%92%E6%8C%87%23) `131.4K 🔥`
1. [白鹿 剧宣的神](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%89%A7%E5%AE%A3%E7%9A%84%E7%A5%9E%23) `129.3K 🔥`
1. [没有撤回微信红包的需求](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%92%A4%E5%9B%9E%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E7%9A%84%E9%9C%80%E6%B1%82%23) `112.4K 🔥`
1. [男子打牌被亲戚作弊骗走175万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%93%E7%89%8C%E8%A2%AB%E4%BA%B2%E6%88%9A%E4%BD%9C%E5%BC%8A%E9%AA%97%E8%B5%B0175%E4%B8%87%23) `95.2K 🔥`
1. [宋威龙张婧仪揽腰共舞](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%8F%BD%E8%85%B0%E5%85%B1%E8%88%9E%23) `90.6K 🔥`
1. [日本放人](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%94%BE%E4%BA%BA%23) `86.8K 🔥`
1. [孟子义何与吻戏](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BD%95%E4%B8%8E%E5%90%BB%E6%88%8F%23) `80.7K 🔥`
1. [檀健次卢昱晓捧杯海报](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E6%8D%A7%E6%9D%AF%E6%B5%B7%E6%8A%A5%23) `79.8K 🔥`
1. [游客已在胖东来买到搬不动了](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%B7%B2%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B9%B0%E5%88%B0%E6%90%AC%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `169.0K 🔥` `-57%`
1. [离婚后45岁的她去冰岛当公务员](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%90%8E45%E5%B2%81%E7%9A%84%E5%A5%B9%E5%8E%BB%E5%86%B0%E5%B2%9B%E5%BD%93%E5%85%AC%E5%8A%A1%E5%91%98%23) `115.1K 🔥` `-43%`
1. [日本释放被扣押中国渔船船长 (Japan releases detained Chinese fishing boat captain)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%87%8A%E6%94%BE%E8%A2%AB%E6%89%A3%E6%8A%BC%E4%B8%AD%E5%9B%BD%E6%B8%94%E8%88%B9%E8%88%B9%E9%95%BF%23) `85.5K 🔥` `-58%`
1. [陈卓璇治好了乐评人爱挑刺的毛病](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%8D%93%E7%92%87%E6%B2%BB%E5%A5%BD%E4%BA%86%E4%B9%90%E8%AF%84%E4%BA%BA%E7%88%B1%E6%8C%91%E5%88%BA%E7%9A%84%E6%AF%9B%E7%97%85%23) `83.4K 🔥` `-32%`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `82.7K 🔥` `-51%`
1. [花滑米兰惨案 (figure skating tragedy in Milan)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%BB%91%E7%B1%B3%E5%85%B0%E6%83%A8%E6%A1%88%23) `79.6K 🔥` `-93%`
1. [骄阳似我](https://s.weibo.com/weibo?q=%23%E9%AA%84%E9%98%B3%E4%BC%BC%E6%88%91%23) `79.2K 🔥` `-21%`
1. [王鹤棣cortis拍了cha](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3cortis%E6%8B%8D%E4%BA%86cha%23) `78.5K 🔥` `-33%`

Updated at 2026-02-14 13:52:37

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
