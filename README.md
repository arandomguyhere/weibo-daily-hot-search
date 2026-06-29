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

1. [美的空调 卡bug (Midea air conditioner stuck bug)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%9A%84%E7%A9%BA%E8%B0%83%20%E5%8D%A1bug%23) `1.1M 🔥` `NEW`
1. [韩媒称韩国队遭中国网民嘲讽](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E7%A7%B0%E9%9F%A9%E5%9B%BD%E9%98%9F%E9%81%AD%E4%B8%AD%E5%9B%BD%E7%BD%91%E6%B0%91%E5%98%B2%E8%AE%BD%23) `1.1M 🔥` `NEW`
1. [女子拍邻居家中裸照发业主群](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%8D%E9%82%BB%E5%B1%85%E5%AE%B6%E4%B8%AD%E8%A3%B8%E7%85%A7%E5%8F%91%E4%B8%9A%E4%B8%BB%E7%BE%A4%23) `984.6K 🔥` `NEW`
1. [张杰下沉市场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23) `847.2K 🔥` `NEW`
1. [三只羊大杨哥不直播改卖课](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E7%BE%8A%E5%A4%A7%E6%9D%A8%E5%93%A5%E4%B8%8D%E7%9B%B4%E6%92%AD%E6%94%B9%E5%8D%96%E8%AF%BE%23) `695.1K 🔥` `NEW`
1. [曾沛慈夺冠后人气](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%A4%BA%E5%86%A0%E5%90%8E%E4%BA%BA%E6%B0%94%23) `440.0K 🔥` `NEW`
1. [赵今麦娇兰全球总裁LV太子妃合照](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A8%87%E5%85%B0%E5%85%A8%E7%90%83%E6%80%BB%E8%A3%81LV%E5%A4%AA%E5%AD%90%E5%A6%83%E5%90%88%E7%85%A7%23) `432.9K 🔥` `NEW`
1. [委内瑞拉地震已致1450死3150伤](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E5%9C%B0%E9%9C%87%E5%B7%B2%E8%87%B41450%E6%AD%BB3150%E4%BC%A4%23) `418.0K 🔥` `NEW`
1. [吴昕要助理买的药6年前已停产](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E8%A6%81%E5%8A%A9%E7%90%86%E4%B9%B0%E7%9A%84%E8%8D%AF6%E5%B9%B4%E5%89%8D%E5%B7%B2%E5%81%9C%E4%BA%A7%23) `414.8K 🔥` `NEW`
1. [AG 钟意](https://s.weibo.com/weibo?q=%23AG%20%E9%92%9F%E6%84%8F%23) `401.6K 🔥` `NEW`
1. [张一山说杨紫早该拿奖了 (Zhang Yishan said that Yang Zi should have won the award long ago)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E8%AF%B4%E6%9D%A8%E7%B4%AB%E6%97%A9%E8%AF%A5%E6%8B%BF%E5%A5%96%E4%BA%86%23) `399.2K 🔥` `NEW`
1. [毕业寄几百斤快递回家女生发声](https://s.weibo.com/weibo?q=%23%E6%AF%95%E4%B8%9A%E5%AF%84%E5%87%A0%E7%99%BE%E6%96%A4%E5%BF%AB%E9%80%92%E5%9B%9E%E5%AE%B6%E5%A5%B3%E7%94%9F%E5%8F%91%E5%A3%B0%23) `383.7K 🔥` `NEW`
1. [巴西国脚说不出日本球员全场哄笑](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%9B%BD%E8%84%9A%E8%AF%B4%E4%B8%8D%E5%87%BA%E6%97%A5%E6%9C%AC%E7%90%83%E5%91%98%E5%85%A8%E5%9C%BA%E5%93%84%E7%AC%91%23) `358.4K 🔥` `NEW`
1. [薛之谦演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `357.3K 🔥` `NEW`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `356.6K 🔥` `NEW`
1. [天津打雷](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E6%89%93%E9%9B%B7%23) `354.2K 🔥` `NEW`
1. [男子偶遇婴儿被锁车内大哭挣扎](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%B6%E9%81%87%E5%A9%B4%E5%84%BF%E8%A2%AB%E9%94%81%E8%BD%A6%E5%86%85%E5%A4%A7%E5%93%AD%E6%8C%A3%E6%89%8E%23) `352.5K 🔥` `NEW`
1. [陈露发声引舆论反转](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9C%B2%E5%8F%91%E5%A3%B0%E5%BC%95%E8%88%86%E8%AE%BA%E5%8F%8D%E8%BD%AC%23) `351.0K 🔥` `NEW`
1. [以前不让妆女二可以艳压女主](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E4%B8%8D%E8%AE%A9%E5%A6%86%E5%A5%B3%E4%BA%8C%E5%8F%AF%E4%BB%A5%E8%89%B3%E5%8E%8B%E5%A5%B3%E4%B8%BB%23) `348.9K 🔥` `NEW`
1. [宜宾地震致13人受轻微伤](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%E8%87%B413%E4%BA%BA%E5%8F%97%E8%BD%BB%E5%BE%AE%E4%BC%A4%23) `347.5K 🔥` `NEW`
1. [高超感谢女友王佳欣 (Gao Chao thanks his girlfriend Wang Jiaxin)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B6%85%E6%84%9F%E8%B0%A2%E5%A5%B3%E5%8F%8B%E7%8E%8B%E4%BD%B3%E6%AC%A3%23) `345.2K 🔥` `NEW`
1. [恋与深空女玩家不该被冒犯](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%A5%B3%E7%8E%A9%E5%AE%B6%E4%B8%8D%E8%AF%A5%E8%A2%AB%E5%86%92%E7%8A%AF%23) `343.1K 🔥` `NEW`
1. [白玉兰最佳女主角提名片段](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%E6%8F%90%E5%90%8D%E7%89%87%E6%AE%B5%23) `341.6K 🔥` `NEW`
1. [三只羊线下课已下架](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E7%BE%8A%E7%BA%BF%E4%B8%8B%E8%AF%BE%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `340.5K 🔥` `NEW`
1. [汪东城回应45岁婚约](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E4%B8%9C%E5%9F%8E%E5%9B%9E%E5%BA%9445%E5%B2%81%E5%A9%9A%E7%BA%A6%23) `337.9K 🔥` `NEW`
1. [美加墨世界杯首支16强诞生](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E6%94%AF16%E5%BC%BA%E8%AF%9E%E7%94%9F%23) `335.3K 🔥` `NEW`
1. [FIFA回应佛得角队长被指控强奸](https://s.weibo.com/weibo?q=%23FIFA%E5%9B%9E%E5%BA%94%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E9%95%BF%E8%A2%AB%E6%8C%87%E6%8E%A7%E5%BC%BA%E5%A5%B8%23) `334.7K 🔥` `NEW`
1. [刘宇宁现偶我就不要了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%8E%B0%E5%81%B6%E6%88%91%E5%B0%B1%E4%B8%8D%E8%A6%81%E4%BA%86%23) `331.8K 🔥` `NEW`
1. [韩红携4000万物资抵呼和浩特](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E6%90%BA4000%E4%B8%87%E7%89%A9%E8%B5%84%E6%8A%B5%E5%91%BC%E5%92%8C%E6%B5%A9%E7%89%B9%23) `330.0K 🔥` `NEW`
1. [白鹿呵呵挽手比心](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%91%B5%E5%91%B5%E6%8C%BD%E6%89%8B%E6%AF%94%E5%BF%83%23) `326.8K 🔥` `NEW`
1. [世界杯打成了欧洲杯和美洲杯 (The World Cup is divided into the European Cup and the America's Cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%89%93%E6%88%90%E4%BA%86%E6%AC%A7%E6%B4%B2%E6%9D%AF%E5%92%8C%E7%BE%8E%E6%B4%B2%E6%9D%AF%23) `324.9K 🔥` `NEW`
1. [派出所集体KTV招陪侍事发2年未通报](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%87%BA%E6%89%80%E9%9B%86%E4%BD%93KTV%E6%8B%9B%E9%99%AA%E4%BE%8D%E4%BA%8B%E5%8F%912%E5%B9%B4%E6%9C%AA%E9%80%9A%E6%8A%A5%23) `321.4K 🔥` `NEW`
1. [杨紫李现16年情谊藏于行动](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9D%8E%E7%8E%B016%E5%B9%B4%E6%83%85%E8%B0%8A%E8%97%8F%E4%BA%8E%E8%A1%8C%E5%8A%A8%23) `319.3K 🔥` `NEW`
1. [虞书欣灿如繁星明天定档](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E6%98%8E%E5%A4%A9%E5%AE%9A%E6%A1%A3%23) `315.5K 🔥` `NEW`
1. [向佑说向佐是一生依靠](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E8%AF%B4%E5%90%91%E4%BD%90%E6%98%AF%E4%B8%80%E7%94%9F%E4%BE%9D%E9%9D%A0%23) `313.0K 🔥` `NEW`
1. [普京称俄处于命运攸关之际](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E4%BF%84%E5%A4%84%E4%BA%8E%E5%91%BD%E8%BF%90%E6%94%B8%E5%85%B3%E4%B9%8B%E9%99%85%23) `311.2K 🔥` `NEW`
1. [iPhone18系列预计将大幅涨价](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%E9%A2%84%E8%AE%A1%E5%B0%86%E5%A4%A7%E5%B9%85%E6%B6%A8%E4%BB%B7%23) `308.7K 🔥` `NEW`
1. [丞磊莫离最后5集加起来集均3分钟戏份](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E8%8E%AB%E7%A6%BB%E6%9C%80%E5%90%8E5%E9%9B%86%E5%8A%A0%E8%B5%B7%E6%9D%A5%E9%9B%86%E5%9D%873%E5%88%86%E9%92%9F%E6%88%8F%E4%BB%BD%23) `307.5K 🔥` `NEW`
1. [DeepSeek联合北京大学发布论文](https://s.weibo.com/weibo?q=%23DeepSeek%E8%81%94%E5%90%88%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E5%8F%91%E5%B8%83%E8%AE%BA%E6%96%87%23) `304.5K 🔥` `NEW`
1. [神23乘组太空出差满月](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%B9%98%E7%BB%84%E5%A4%AA%E7%A9%BA%E5%87%BA%E5%B7%AE%E6%BB%A1%E6%9C%88%23) `1.1M 🔥` `+60%`
1. [实习期把公司领导开除了 (The company leader was fired during the internship period)](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E6%9C%9F%E6%8A%8A%E5%85%AC%E5%8F%B8%E9%A2%86%E5%AF%BC%E5%BC%80%E9%99%A4%E4%BA%86%23) `437.8K 🔥` `+88%`
1. [双高胎](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E9%AB%98%E8%83%8E%23) `429.9K 🔥` `+82%`
1. [唐艺昕女儿接唐艺昕回家](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%A5%B3%E5%84%BF%E6%8E%A5%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%AE%B6%23) `408.7K 🔥` `+74%`
1. [美国230斤男孩在家中去世父母被捕 (230-pound boy dies at home in US, parents arrested)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD230%E6%96%A4%E7%94%B7%E5%AD%A9%E5%9C%A8%E5%AE%B6%E4%B8%AD%E5%8E%BB%E4%B8%96%E7%88%B6%E6%AF%8D%E8%A2%AB%E6%8D%95%23) `328.5K 🔥` `+91%`
1. [宜宾地震监控画面](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%E7%9B%91%E6%8E%A7%E7%94%BB%E9%9D%A2%23) `323.7K 🔥` `+100%`
1. [白玉兰下沉市场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23) `317.7K 🔥` `+29%`
1. [李在明要调查韩国队出局原因](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E8%A6%81%E8%B0%83%E6%9F%A5%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%87%BA%E5%B1%80%E5%8E%9F%E5%9B%A0%23) `315.6K 🔥` `+107%`
1. [广州某高校辟谣禁止小米汽车入校](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%9F%90%E9%AB%98%E6%A0%A1%E8%BE%9F%E8%B0%A3%E7%A6%81%E6%AD%A2%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%85%A5%E6%A0%A1%23) `306.2K 🔥` `+284%`
1. [四川宜宾地震 (Yibin earthquake in Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `1.3M 🔥` `-44%`
1. [加拿大92分钟绝杀 (Canada's 92nd minute winner)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A792%E5%88%86%E9%92%9F%E7%BB%9D%E6%9D%80%23) `441.7K 🔥` `-48%`

Updated at 2026-06-29 09:52:19

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
