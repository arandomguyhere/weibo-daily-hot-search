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

1. [海西地震已致1死4伤 (Haixi earthquake kills 1 and injures 4)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E8%A5%BF%E5%9C%B0%E9%9C%87%E5%B7%B2%E8%87%B41%E6%AD%BB4%E4%BC%A4%23) `1.1M 🔥` `NEW`
1. [伊朗队被勒令离开美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%98%9F%E8%A2%AB%E5%8B%92%E4%BB%A4%E7%A6%BB%E5%BC%80%E7%BE%8E%E5%9B%BD%23) `796.6K 🔥` `NEW`
1. [成功发射实践三十一号卫星](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E5%AE%9E%E8%B7%B5%E4%B8%89%E5%8D%81%E4%B8%80%E5%8F%B7%E5%8D%AB%E6%98%9F%23) `636.4K 🔥` `NEW`
1. [厉害了超话主持人](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%AE%B3%E4%BA%86%E8%B6%85%E8%AF%9D%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `614.3K 🔥` `NEW`
1. [lululemon 日本太鼓](https://s.weibo.com/weibo?q=%23lululemon%20%E6%97%A5%E6%9C%AC%E5%A4%AA%E9%BC%93%23) `569.4K 🔥` `NEW`
1. [蒙淇淇 只剩我一个人了](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%20%E5%8F%AA%E5%89%A9%E6%88%91%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%BA%86%23) `524.7K 🔥` `NEW`
1. [现在知道短剧滤镜有多吓人了吧](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9F%A5%E9%81%93%E7%9F%AD%E5%89%A7%E6%BB%A4%E9%95%9C%E6%9C%89%E5%A4%9A%E5%90%93%E4%BA%BA%E4%BA%86%E5%90%A7%23) `473.1K 🔥` `NEW`
1. [官方辟谣四川多地烈士陵园办公室招聘](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%9B%9B%E5%B7%9D%E5%A4%9A%E5%9C%B0%E7%83%88%E5%A3%AB%E9%99%B5%E5%9B%AD%E5%8A%9E%E5%85%AC%E5%AE%A4%E6%8B%9B%E8%81%98%23) `441.8K 🔥` `NEW`
1. [lululemon](https://s.weibo.com/weibo?q=%23lululemon%23) `403.6K 🔥` `NEW`
1. [工作量大的部门一般氛围很好](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E9%87%8F%E5%A4%A7%E7%9A%84%E9%83%A8%E9%97%A8%E4%B8%80%E8%88%AC%E6%B0%9B%E5%9B%B4%E5%BE%88%E5%A5%BD%23) `347.5K 🔥` `NEW`
1. [一个人在家洗澡千万不要锁门 (Never lock the door when taking a shower alone at home)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%9C%A8%E5%AE%B6%E6%B4%97%E6%BE%A1%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E9%94%81%E9%97%A8%23) `331.9K 🔥` `NEW`
1. [lululemon股价累计大跌超76%](https://s.weibo.com/weibo?q=%23lululemon%E8%82%A1%E4%BB%B7%E7%B4%AF%E8%AE%A1%E5%A4%A7%E8%B7%8C%E8%B6%8576%25%23) `246.0K 🔥` `NEW`
1. [戒网机构 暴力捆绑](https://s.weibo.com/weibo?q=%23%E6%88%92%E7%BD%91%E6%9C%BA%E6%9E%84%20%E6%9A%B4%E5%8A%9B%E6%8D%86%E7%BB%91%23) `245.2K 🔥` `NEW`
1. [郭晓婷 王天辰](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%20%E7%8E%8B%E5%A4%A9%E8%BE%B0%23) `244.7K 🔥` `NEW`
1. [莫离编剧风染白道歉](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%BC%96%E5%89%A7%E9%A3%8E%E6%9F%93%E7%99%BD%E9%81%93%E6%AD%89%23) `244.1K 🔥` `NEW`
1. [饭店的预制菜忘记拆包装](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%BA%97%E7%9A%84%E9%A2%84%E5%88%B6%E8%8F%9C%E5%BF%98%E8%AE%B0%E6%8B%86%E5%8C%85%E8%A3%85%23) `243.2K 🔥` `NEW`
1. [都美竹被法院公开判决](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%BE%8E%E7%AB%B9%E8%A2%AB%E6%B3%95%E9%99%A2%E5%85%AC%E5%BC%80%E5%88%A4%E5%86%B3%23) `242.4K 🔥` `NEW`
1. [曝时代峰峻要签约高迪儿子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A6%81%E7%AD%BE%E7%BA%A6%E9%AB%98%E8%BF%AA%E5%84%BF%E5%AD%90%23) `241.4K 🔥` `NEW`
1. [山姆中国变更董事长](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%B8%AD%E5%9B%BD%E5%8F%98%E6%9B%B4%E8%91%A3%E4%BA%8B%E9%95%BF%23) `240.3K 🔥` `NEW`
1. [lululemon 周处除三害](https://s.weibo.com/weibo?q=%23lululemon%20%E5%91%A8%E5%A4%84%E9%99%A4%E4%B8%89%E5%AE%B3%23) `239.5K 🔥` `NEW`
1. [伊朗用AI让球员牵遇难儿童入场 (Iran uses AI to let players lead victims into stadiums)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8AI%E8%AE%A9%E7%90%83%E5%91%98%E7%89%B5%E9%81%87%E9%9A%BE%E5%84%BF%E7%AB%A5%E5%85%A5%E5%9C%BA%23) `238.5K 🔥` `NEW`
1. [李光洙老了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%89%E6%B4%99%E8%80%81%E4%BA%86%23) `237.6K 🔥` `NEW`
1. [张雨剑甚至不肯给吴倩名分](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E5%89%91%E7%94%9A%E8%87%B3%E4%B8%8D%E8%82%AF%E7%BB%99%E5%90%B4%E5%80%A9%E5%90%8D%E5%88%86%23) `237.1K 🔥` `NEW`
1. [女子被困电梯救援时坠落身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%9B%B0%E7%94%B5%E6%A2%AF%E6%95%91%E6%8F%B4%E6%97%B6%E5%9D%A0%E8%90%BD%E8%BA%AB%E4%BA%A1%23) `235.9K 🔥` `NEW`
1. [TF四代突围的宿舍环境](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B4%E7%9A%84%E5%AE%BF%E8%88%8D%E7%8E%AF%E5%A2%83%23) `235.3K 🔥` `NEW`
1. [韩国机场因张元英更改出境规定](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%9C%BA%E5%9C%BA%E5%9B%A0%E5%BC%A0%E5%85%83%E8%8B%B1%E6%9B%B4%E6%94%B9%E5%87%BA%E5%A2%83%E8%A7%84%E5%AE%9A%23) `234.7K 🔥` `NEW`
1. [中国大鼓和日本太鼓的区别](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%BC%93%E5%92%8C%E6%97%A5%E6%9C%AC%E5%A4%AA%E9%BC%93%E7%9A%84%E5%8C%BA%E5%88%AB%23) `234.0K 🔥` `NEW`
1. [李一桐主动调整署名顺序](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E4%B8%BB%E5%8A%A8%E8%B0%83%E6%95%B4%E7%BD%B2%E5%90%8D%E9%A1%BA%E5%BA%8F%23) `229.8K 🔥` `NEW`
1. [郭晓婷回复cp粉](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E5%9B%9E%E5%A4%8Dcp%E7%B2%89%23) `227.7K 🔥` `NEW`
1. [有人赌西班牙不会获胜赢470万美元](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E8%B5%8C%E8%A5%BF%E7%8F%AD%E7%89%99%E4%B8%8D%E4%BC%9A%E8%8E%B7%E8%83%9C%E8%B5%A2470%E4%B8%87%E7%BE%8E%E5%85%83%23) `222.7K 🔥` `NEW`
1. [内娱女演员什么时候高跟鞋自由 (When will domestic entertainment actresses be free to wear high heels?)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%A5%B3%E6%BC%94%E5%91%98%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%AB%98%E8%B7%9F%E9%9E%8B%E8%87%AA%E7%94%B1%23) `221.2K 🔥` `NEW`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `220.3K 🔥` `NEW`
1. [莫离圆房戏](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E5%9C%86%E6%88%BF%E6%88%8F%23) `217.5K 🔥` `NEW`
1. [AI投硬币概率是多少](https://s.weibo.com/weibo?q=%23AI%E6%8A%95%E7%A1%AC%E5%B8%81%E6%A6%82%E7%8E%87%E6%98%AF%E5%A4%9A%E5%B0%91%23) `216.4K 🔥` `NEW`
1. [张柏芝 Lucas都长大了衣服还能穿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%20Lucas%E9%83%BD%E9%95%BF%E5%A4%A7%E4%BA%86%E8%A1%A3%E6%9C%8D%E8%BF%98%E8%83%BD%E7%A9%BF%23) `215.3K 🔥` `NEW`
1. [梅西发微博](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%8F%91%E5%BE%AE%E5%8D%9A%23) `213.9K 🔥` `NEW`
1. [剧集十日终焉](https://s.weibo.com/weibo?q=%23%E5%89%A7%E9%9B%86%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `209.5K 🔥` `NEW`
1. [海西地震](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E8%A5%BF%E5%9C%B0%E9%9C%87%23) `204.2K 🔥` `NEW`
1. [曝Erha拒绝离队](https://s.weibo.com/weibo?q=%23%E6%9B%9DErha%E6%8B%92%E7%BB%9D%E7%A6%BB%E9%98%9F%23) `196.2K 🔥` `NEW`
1. [蒙淇淇向白鹿道歉](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E5%90%91%E7%99%BD%E9%B9%BF%E9%81%93%E6%AD%89%23) `195.5K 🔥` `NEW`
1. [特朗普长时间握住马克龙夫人手 (Trump held Mrs. Macron’s hand for a long time)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%95%BF%E6%97%B6%E9%97%B4%E6%8F%A1%E4%BD%8F%E9%A9%AC%E5%85%8B%E9%BE%99%E5%A4%AB%E4%BA%BA%E6%89%8B%23) `194.9K 🔥` `NEW`
1. [C罗也有佛得角血统](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%9F%E6%9C%89%E4%BD%9B%E5%BE%97%E8%A7%92%E8%A1%80%E7%BB%9F%23) `194.6K 🔥` `NEW`
1. [九头身裁判把雷军进行曲具象化了](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%A4%B4%E8%BA%AB%E8%A3%81%E5%88%A4%E6%8A%8A%E9%9B%B7%E5%86%9B%E8%BF%9B%E8%A1%8C%E6%9B%B2%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `190.6K 🔥` `NEW`
1. [又一次被欧阳娜娜审美折服](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E6%AC%A1%E8%A2%AB%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%AE%A1%E7%BE%8E%E6%8A%98%E6%9C%8D%23) `189.5K 🔥` `NEW`
1. [看炽夏我觉得我真的老了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%82%BD%E5%A4%8F%E6%88%91%E8%A7%89%E5%BE%97%E6%88%91%E7%9C%9F%E7%9A%84%E8%80%81%E4%BA%86%23) `189.5K 🔥` `NEW`
1. [接连施暴发小男生母亲为跨区民警](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E8%BF%9E%E6%96%BD%E6%9A%B4%E5%8F%91%E5%B0%8F%E7%94%B7%E7%94%9F%E6%AF%8D%E4%BA%B2%E4%B8%BA%E8%B7%A8%E5%8C%BA%E6%B0%91%E8%AD%A6%23) `150.8K 🔥` `NEW`
1. [李思潼 无过度妆感](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%20%E6%97%A0%E8%BF%87%E5%BA%A6%E5%A6%86%E6%84%9F%23) `150.5K 🔥` `NEW`
1. [南派三叔说不要一时难过就去堵他](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E8%AF%B4%E4%B8%8D%E8%A6%81%E4%B8%80%E6%97%B6%E9%9A%BE%E8%BF%87%E5%B0%B1%E5%8E%BB%E5%A0%B5%E4%BB%96%23) `150.3K 🔥` `NEW`
1. [在青岛快乐得冒泡泡](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9D%92%E5%B2%9B%E5%BF%AB%E4%B9%90%E5%BE%97%E5%86%92%E6%B3%A1%E6%B3%A1%23) `150.2K 🔥` `NEW`
1. [切完菠萝蜜的刀终于有救了](https://s.weibo.com/weibo?q=%23%E5%88%87%E5%AE%8C%E8%8F%A0%E8%90%9D%E8%9C%9C%E7%9A%84%E5%88%80%E7%BB%88%E4%BA%8E%E6%9C%89%E6%95%91%E4%BA%86%23) `150.2K 🔥` `NEW`
1. [南派三叔 我是不吃压力不是不吃爆头 (Third Uncle from the Southern School, I don’t eat stress, not headshots.)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%20%E6%88%91%E6%98%AF%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E4%B8%8D%E6%98%AF%E4%B8%8D%E5%90%83%E7%88%86%E5%A4%B4%23) `148.2K 🔥` `NEW`
1. [蹲范丞丞直播](https://s.weibo.com/weibo?q=%23%E8%B9%B2%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9B%B4%E6%92%AD%23) `147.5K 🔥` `NEW`

Updated at 2026-06-16 20:22:09

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
