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

1. [别让没煮过饭的人买菜 (Don’t let people who have never cooked cook buy groceries.)](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E6%B2%A1%E7%85%AE%E8%BF%87%E9%A5%AD%E7%9A%84%E4%BA%BA%E4%B9%B0%E8%8F%9C%23) `662.6K 🔥` `NEW`
1. [王皓喊梁靖崑梁教授](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E5%96%8A%E6%A2%81%E9%9D%96%E5%B4%91%E6%A2%81%E6%95%99%E6%8E%88%23) `423.1K 🔥` `NEW`
1. [50只羊吃地里毒玉米接连死亡](https://s.weibo.com/weibo?q=%2350%E5%8F%AA%E7%BE%8A%E5%90%83%E5%9C%B0%E9%87%8C%E6%AF%92%E7%8E%89%E7%B1%B3%E6%8E%A5%E8%BF%9E%E6%AD%BB%E4%BA%A1%23) `232.2K 🔥` `NEW`
1. [鹿晗给新婚粉丝送礼盒](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BB%99%E6%96%B0%E5%A9%9A%E7%B2%89%E4%B8%9D%E9%80%81%E7%A4%BC%E7%9B%92%23) `223.7K 🔥` `NEW`
1. [常石磊说没听过李宇春的歌](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E7%9F%B3%E7%A3%8A%E8%AF%B4%E6%B2%A1%E5%90%AC%E8%BF%87%E6%9D%8E%E5%AE%87%E6%98%A5%E7%9A%84%E6%AD%8C%23) `208.3K 🔥` `NEW`
1. [演出完退礼服女孩发声](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E5%A5%B3%E5%AD%A9%E5%8F%91%E5%A3%B0%23) `202.2K 🔥` `NEW`
1. [特朗普金卡翻车](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%87%91%E5%8D%A1%E7%BF%BB%E8%BD%A6%23) `187.6K 🔥` `NEW`
1. [张杰是国乐无双发起者](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%98%AF%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%E5%8F%91%E8%B5%B7%E8%80%85%23) `185.7K 🔥` `NEW`
1. [注销几十万粉账号后考上医生](https://s.weibo.com/weibo?q=%23%E6%B3%A8%E9%94%80%E5%87%A0%E5%8D%81%E4%B8%87%E7%B2%89%E8%B4%A6%E5%8F%B7%E5%90%8E%E8%80%83%E4%B8%8A%E5%8C%BB%E7%94%9F%23) `184.6K 🔥` `NEW`
1. [张凌赫刘宇宁或被邀请赴台交流](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%88%98%E5%AE%87%E5%AE%81%E6%88%96%E8%A2%AB%E9%82%80%E8%AF%B7%E8%B5%B4%E5%8F%B0%E4%BA%A4%E6%B5%81%23) `181.2K 🔥` `NEW`
1. [发现孩子还是很在意妈妈的穿着 (I found that my children still care about what their mothers are wearing.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%AD%A9%E5%AD%90%E8%BF%98%E6%98%AF%E5%BE%88%E5%9C%A8%E6%84%8F%E5%A6%88%E5%A6%88%E7%9A%84%E7%A9%BF%E7%9D%80%23) `181.2K 🔥` `NEW`
1. [湖人vs雷霆](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E9%9B%B7%E9%9C%86%23) `180.1K 🔥` `NEW`
1. [王暖暖声明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E5%A3%B0%E6%98%8E%23) `179.1K 🔥` `NEW`
1. [汶川地震被埋72小时的她如今怎样了](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E5%B7%9D%E5%9C%B0%E9%9C%87%E8%A2%AB%E5%9F%8B72%E5%B0%8F%E6%97%B6%E7%9A%84%E5%A5%B9%E5%A6%82%E4%BB%8A%E6%80%8E%E6%A0%B7%E4%BA%86%23) `176.0K 🔥` `NEW`
1. [刘晓庆感谢卓伟](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E6%84%9F%E8%B0%A2%E5%8D%93%E4%BC%9F%23) `175.6K 🔥` `NEW`
1. [吴京 慕强](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%85%95%E5%BC%BA%23) `173.1K 🔥` `NEW`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `172.8K 🔥` `NEW`
1. [文班亚马不会遭到追加处罚](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E4%B8%8D%E4%BC%9A%E9%81%AD%E5%88%B0%E8%BF%BD%E5%8A%A0%E5%A4%84%E7%BD%9A%23) `170.8K 🔥` `NEW`
1. [马克龙紧急撤回表态改口不派军舰](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%8B%E9%BE%99%E7%B4%A7%E6%80%A5%E6%92%A4%E5%9B%9E%E8%A1%A8%E6%80%81%E6%94%B9%E5%8F%A3%E4%B8%8D%E6%B4%BE%E5%86%9B%E8%88%B0%23) `169.1K 🔥` `NEW`
1. [iOS26.5正式版发布](https://s.weibo.com/weibo?q=%23iOS26.5%E6%AD%A3%E5%BC%8F%E7%89%88%E5%8F%91%E5%B8%83%23) `168.4K 🔥` `NEW`
1. [日本卡乐比部分薯片包装改成黑白 (Japan's Calbee changes some potato chip packaging to black and white)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8D%A1%E4%B9%90%E6%AF%94%E9%83%A8%E5%88%86%E8%96%AF%E7%89%87%E5%8C%85%E8%A3%85%E6%94%B9%E6%88%90%E9%BB%91%E7%99%BD%23) `166.0K 🔥` `NEW`
1. [市监局介入女子用烧烤签喂狗事件](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E5%B1%80%E4%BB%8B%E5%85%A5%E5%A5%B3%E5%AD%90%E7%94%A8%E7%83%A7%E7%83%A4%E7%AD%BE%E5%96%82%E7%8B%97%E4%BA%8B%E4%BB%B6%23) `165.2K 🔥` `NEW`
1. [活塞vs骑士](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%A1%9Evs%E9%AA%91%E5%A3%AB%23) `159.7K 🔥` `NEW`
1. [汶川小英雄林浩也有女儿了 (Lin Hao, the little hero of Wenchuan, also has a daughter)](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E5%B7%9D%E5%B0%8F%E8%8B%B1%E9%9B%84%E6%9E%97%E6%B5%A9%E4%B9%9F%E6%9C%89%E5%A5%B3%E5%84%BF%E4%BA%86%23) `884.4K 🔥` `+99%`
1. [Deepseek分析145斤怎么瘦到100斤](https://s.weibo.com/weibo?q=%23Deepseek%E5%88%86%E6%9E%90145%E6%96%A4%E6%80%8E%E4%B9%88%E7%98%A6%E5%88%B0100%E6%96%A4%23) `680.5K 🔥` `+259%`
1. [被内测微信状态访客记录用户发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%86%85%E6%B5%8B%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95%E7%94%A8%E6%88%B7%E5%8F%91%E5%A3%B0%23) `658.4K 🔥` `+237%`
1. [宁艺卓 别来身材羞辱那一套](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%20%E5%88%AB%E6%9D%A5%E8%BA%AB%E6%9D%90%E7%BE%9E%E8%BE%B1%E9%82%A3%E4%B8%80%E5%A5%97%23) `222.7K 🔥` `+25%`
1. [王俊凯狄仁杰剧照 (Stills of Wang Junkai and Di Renjie)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8B%84%E4%BB%81%E6%9D%B0%E5%89%A7%E7%85%A7%23) `177.0K 🔥` `+318%`
1. [2026互联中国公益行动](https://s.weibo.com/weibo?q=%232026%E4%BA%92%E8%81%94%E4%B8%AD%E5%9B%BD%E5%85%AC%E7%9B%8A%E8%A1%8C%E5%8A%A8%23) `712.5K 🔥`
1. [烫牛奶是善良的食物 (Scalded milk is a kind food)](https://s.weibo.com/weibo?q=%23%E7%83%AB%E7%89%9B%E5%A5%B6%E6%98%AF%E5%96%84%E8%89%AF%E7%9A%84%E9%A3%9F%E7%89%A9%23) `636.1K 🔥`
1. [吴彤直播道歉](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E7%9B%B4%E6%92%AD%E9%81%93%E6%AD%89%23) `234.0K 🔥`
1. [女孩演出完退礼服被商家曝光 (The girl took off her dress after the performance and was exposed by the merchant)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E8%A2%AB%E5%95%86%E5%AE%B6%E6%9B%9D%E5%85%89%23) `216.9K 🔥`
1. [李连杰因患甲亢改变面容 (Jet Li changed his face due to hyperthyroidism)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%E5%9B%A0%E6%82%A3%E7%94%B2%E4%BA%A2%E6%94%B9%E5%8F%98%E9%9D%A2%E5%AE%B9%23) `197.7K 🔥`
1. [沙溢瘦了胡可功不可没](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E7%98%A6%E4%BA%86%E8%83%A1%E5%8F%AF%E5%8A%9F%E4%B8%8D%E5%8F%AF%E6%B2%A1%23) `192.9K 🔥`
1. [金银价格大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E6%B6%A8%23) `185.0K 🔥`
1. [儿子高三脑出血妈妈十几年失去自我 (My son suffered a cerebral hemorrhage in his senior year of high school, and his mother lost herself in more than ten years.)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E9%AB%98%E4%B8%89%E8%84%91%E5%87%BA%E8%A1%80%E5%A6%88%E5%A6%88%E5%8D%81%E5%87%A0%E5%B9%B4%E5%A4%B1%E5%8E%BB%E8%87%AA%E6%88%91%23) `183.6K 🔥`
1. [3种炎症拖久了很危险](https://s.weibo.com/weibo?q=%233%E7%A7%8D%E7%82%8E%E7%97%87%E6%8B%96%E4%B9%85%E4%BA%86%E5%BE%88%E5%8D%B1%E9%99%A9%23) `182.5K 🔥`
1. [张小斐新角色眼里全是野心 (Zhang Xiaofei's new character is full of ambition)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E6%96%B0%E8%A7%92%E8%89%B2%E7%9C%BC%E9%87%8C%E5%85%A8%E6%98%AF%E9%87%8E%E5%BF%83%23) `178.1K 🔥`
1. [医生回应婴儿被喂鹅蛋后进ICU (Doctor responds: Baby was admitted to ICU after being fed goose eggs)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%96%82%E9%B9%85%E8%9B%8B%E5%90%8E%E8%BF%9BICU%23) `171.9K 🔥`
1. [你脸上敷的嘴里吃的或含广东大蟑螂](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%84%B8%E4%B8%8A%E6%95%B7%E7%9A%84%E5%98%B4%E9%87%8C%E5%90%83%E7%9A%84%E6%88%96%E5%90%AB%E5%B9%BF%E4%B8%9C%E5%A4%A7%E8%9F%91%E8%9E%82%23) `169.5K 🔥`
1. [18年前汶川一条没发出的短信](https://s.weibo.com/weibo?q=%2318%E5%B9%B4%E5%89%8D%E6%B1%B6%E5%B7%9D%E4%B8%80%E6%9D%A1%E6%B2%A1%E5%8F%91%E5%87%BA%E7%9A%84%E7%9F%AD%E4%BF%A1%23) `167.1K 🔥`
1. [A股史诗级爆发原因 (Reasons for the epic outbreak of A-shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%B2%E8%AF%97%E7%BA%A7%E7%88%86%E5%8F%91%E5%8E%9F%E5%9B%A0%23) `164.0K 🔥`
1. [106岁老太染手指甲每天喝小酒](https://s.weibo.com/weibo?q=%23106%E5%B2%81%E8%80%81%E5%A4%AA%E6%9F%93%E6%89%8B%E6%8C%87%E7%94%B2%E6%AF%8F%E5%A4%A9%E5%96%9D%E5%B0%8F%E9%85%92%23) `163.0K 🔥`
1. [沙溢瘦得都认不出来了](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E7%98%A6%E5%BE%97%E9%83%BD%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%E4%BA%86%23) `162.6K 🔥`
1. [时代少年团演唱会 青岛 (Times Youth League Concert Qingdao)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%20%E9%9D%92%E5%B2%9B%23) `161.2K 🔥`
1. [蔡依林状态 九点睡觉的魔力 (Jolin Tsai’s status: The magic of sleeping at nine o’clock)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E7%8A%B6%E6%80%81%20%E4%B9%9D%E7%82%B9%E7%9D%A1%E8%A7%89%E7%9A%84%E9%AD%94%E5%8A%9B%23) `160.6K 🔥`
1. [法医刘良因家属送梨被告与人串通 (Forensic doctor Liu Liang was accused of colluding with others because his family gave pears to him)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%88%98%E8%89%AF%E5%9B%A0%E5%AE%B6%E5%B1%9E%E9%80%81%E6%A2%A8%E8%A2%AB%E5%91%8A%E4%B8%8E%E4%BA%BA%E4%B8%B2%E9%80%9A%23) `159.0K 🔥`
1. [微信状态 访客记录 (WeChat status visitor record)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%20%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95%23) `1.2M 🔥` `-52%`
1. [主角收视率走势](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E6%94%B6%E8%A7%86%E7%8E%87%E8%B5%B0%E5%8A%BF%23) `293.6K 🔥` `-31%`
1. [微信公关总监曾回应访客功能 (WeChat Public Relations Director once responded to the guest function)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%E6%9B%BE%E5%9B%9E%E5%BA%94%E8%AE%BF%E5%AE%A2%E5%8A%9F%E8%83%BD%23) `174.2K 🔥` `-81%`

Updated at 2026-05-12 09:24:58

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
