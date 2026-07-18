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

1. [2026世界市长对话西双版纳 (2026 World Mayors Dialogue Xishuangbanna)](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E5%B8%82%E9%95%BF%E5%AF%B9%E8%AF%9D%E8%A5%BF%E5%8F%8C%E7%89%88%E7%BA%B3%23) `933.1K 🔥` `NEW`
1. [亚马尔决赛前与女友游纽约](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%86%B3%E8%B5%9B%E5%89%8D%E4%B8%8E%E5%A5%B3%E5%8F%8B%E6%B8%B8%E7%BA%BD%E7%BA%A6%23) `494.6K 🔥` `NEW`
1. [4人操纵股票被罚没6.27亿元](https://s.weibo.com/weibo?q=%234%E4%BA%BA%E6%93%8D%E7%BA%B5%E8%82%A1%E7%A5%A8%E8%A2%AB%E7%BD%9A%E6%B2%A16.27%E4%BA%BF%E5%85%83%23) `473.2K 🔥` `NEW`
1. [好多明星给王俊凯送花篮](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%80%81%E8%8A%B1%E7%AF%AE%23) `413.2K 🔥` `NEW`
1. [白鹿简介删掉了欢娱](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AE%80%E4%BB%8B%E5%88%A0%E6%8E%89%E4%BA%86%E6%AC%A2%E5%A8%B1%23) `380.8K 🔥` `NEW`
1. [去农村亲戚家被富裕程度震撼了](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%86%9C%E6%9D%91%E4%BA%B2%E6%88%9A%E5%AE%B6%E8%A2%AB%E5%AF%8C%E8%A3%95%E7%A8%8B%E5%BA%A6%E9%9C%87%E6%92%BC%E4%BA%86%23) `380.8K 🔥` `NEW`
1. [周星驰粉丝追回功夫女足160多万票房](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E7%B2%89%E4%B8%9D%E8%BF%BD%E5%9B%9E%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3160%E5%A4%9A%E4%B8%87%E7%A5%A8%E6%88%BF%23) `361.5K 🔥` `NEW`
1. [BLG队内氛围](https://s.weibo.com/weibo?q=%23BLG%E9%98%9F%E5%86%85%E6%B0%9B%E5%9B%B4%23) `294.1K 🔥` `NEW`
1. [王濛吐槽浪姐住宿条件](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%90%90%E6%A7%BD%E6%B5%AA%E5%A7%90%E4%BD%8F%E5%AE%BF%E6%9D%A1%E4%BB%B6%23) `292.5K 🔥` `NEW`
1. [张凌赫新剧被逼吃生肉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E8%A2%AB%E9%80%BC%E5%90%83%E7%94%9F%E8%82%89%23) `277.4K 🔥` `NEW`
1. [韩国半导体杠杆爆仓 (Korean semiconductor leveraged liquidation)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9D%A0%E6%9D%86%E7%88%86%E4%BB%93%23) `196.8K 🔥` `NEW`
1. [郑钦文 美网资格赛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%20%E7%BE%8E%E7%BD%91%E8%B5%84%E6%A0%BC%E8%B5%9B%23) `188.6K 🔥` `NEW`
1. [现在该买房还是卖房](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%AF%A5%E4%B9%B0%E6%88%BF%E8%BF%98%E6%98%AF%E5%8D%96%E6%88%BF%23) `187.5K 🔥` `NEW`
1. [伊朗革命卫队发布打击美军视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E5%8F%91%E5%B8%83%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E8%A7%86%E9%A2%91%23) `174.1K 🔥` `NEW`
1. [车主把出车祸昏迷孩子丢后车就走了](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E6%8A%8A%E5%87%BA%E8%BD%A6%E7%A5%B8%E6%98%8F%E8%BF%B7%E5%AD%A9%E5%AD%90%E4%B8%A2%E5%90%8E%E8%BD%A6%E5%B0%B1%E8%B5%B0%E4%BA%86%23) `161.7K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `161.3K 🔥` `NEW`
1. [英雄联盟](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%23) `159.3K 🔥` `NEW`
1. [这个鸡蛋不用去赛里木湖了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E9%B8%A1%E8%9B%8B%E4%B8%8D%E7%94%A8%E5%8E%BB%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E4%BA%86%23) `146.8K 🔥` `NEW`
1. [国企已婚男回应致人5年2次流产](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%9B%9E%E5%BA%94%E8%87%B4%E4%BA%BA5%E5%B9%B42%E6%AC%A1%E6%B5%81%E4%BA%A7%23) `146.8K 🔥` `NEW`
1. [KimiK3测评](https://s.weibo.com/weibo?q=%23KimiK3%E6%B5%8B%E8%AF%84%23) `138.7K 🔥` `NEW`
1. [米勒破防 (Miller breaks defense)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8B%92%E7%A0%B4%E9%98%B2%23) `130.5K 🔥` `NEW`
1. [披荆斩棘2026](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%23) `124.9K 🔥` `NEW`
1. [Bin 心态](https://s.weibo.com/weibo?q=%23Bin%20%E5%BF%83%E6%80%81%23) `117.5K 🔥` `NEW`
1. [驾校招生遇冷](https://s.weibo.com/weibo?q=%23%E9%A9%BE%E6%A0%A1%E6%8B%9B%E7%94%9F%E9%81%87%E5%86%B7%23) `116.7K 🔥` `NEW`
1. [小狗误入隧道却为它留了一条道](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%AF%AF%E5%85%A5%E9%9A%A7%E9%81%93%E5%8D%B4%E4%B8%BA%E5%AE%83%E7%95%99%E4%BA%86%E4%B8%80%E6%9D%A1%E9%81%93%23) `114.6K 🔥` `NEW`
1. [伊朗发射巡航导弹打击美军舰艇](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E5%B7%A1%E8%88%AA%E5%AF%BC%E5%BC%B9%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E8%88%B0%E8%89%87%23) `114.2K 🔥` `NEW`
1. [邹市明冉莹颖已还清3家银行欠款](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%86%89%E8%8E%B9%E9%A2%96%E5%B7%B2%E8%BF%98%E6%B8%853%E5%AE%B6%E9%93%B6%E8%A1%8C%E6%AC%A0%E6%AC%BE%23) `1.2M 🔥` `+832%`
1. [王俊凯史上最严演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E6%BC%94%E5%94%B1%E4%BC%9A%23) `929.4K 🔥` `+296%`
1. [家长谈彩礼成了小家启动金 (Parents talk about the betrothal gift becoming the start-up fund for a small family)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E8%B0%88%E5%BD%A9%E7%A4%BC%E6%88%90%E4%BA%86%E5%B0%8F%E5%AE%B6%E5%90%AF%E5%8A%A8%E9%87%91%23) `553.5K 🔥` `+375%`
1. [青岛与世界干杯 (Cheers to Qingdao and the world)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E4%B8%8E%E4%B8%96%E7%95%8C%E5%B9%B2%E6%9D%AF%23) `507.6K 🔥` `+114%`
1. [LPL队伍全部出局 (All LPL teams are eliminated)](https://s.weibo.com/weibo?q=%23LPL%E9%98%9F%E4%BC%8D%E5%85%A8%E9%83%A8%E5%87%BA%E5%B1%80%23) `392.6K 🔥` `+61%`
1. [JYP女团成员Angelababy](https://s.weibo.com/weibo?q=%23JYP%E5%A5%B3%E5%9B%A2%E6%88%90%E5%91%98Angelababy%23) `189.5K 🔥` `+56%`
1. [王楚然张凌赫额头吻 (Wang Churan and Zhang Linghe forehead kiss)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%A2%9D%E5%A4%B4%E5%90%BB%23) `173.5K 🔥` `+102%`
1. [看不见的咖啡因终于可视化了 (Invisible caffeine finally visualized)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E5%92%96%E5%95%A1%E5%9B%A0%E7%BB%88%E4%BA%8E%E5%8F%AF%E8%A7%86%E5%8C%96%E4%BA%86%23) `146.9K 🔥` `+63%`
1. [印度12岁男孩河边遭鳄鱼袭击死亡 (12-year-old boy dies after being attacked by crocodile in river in India)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A612%E5%B2%81%E7%94%B7%E5%AD%A9%E6%B2%B3%E8%BE%B9%E9%81%AD%E9%B3%84%E9%B1%BC%E8%A2%AD%E5%87%BB%E6%AD%BB%E4%BA%A1%23) `146.8K 🔥` `+89%`
1. [陈哲远模仿王楚然提裙子学到精髓了 (Chen Zheyuan imitated Wang Churan's skirt and learned the essence)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%A8%A1%E4%BB%BF%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%8F%90%E8%A3%99%E5%AD%90%E5%AD%A6%E5%88%B0%E7%B2%BE%E9%AB%93%E4%BA%86%23) `137.4K 🔥` `+140%`
1. [帮主人找菌子的狗被封菌犬](https://s.weibo.com/weibo?q=%23%E5%B8%AE%E4%B8%BB%E4%BA%BA%E6%89%BE%E8%8F%8C%E5%AD%90%E7%9A%84%E7%8B%97%E8%A2%AB%E5%B0%81%E8%8F%8C%E7%8A%AC%23) `137.1K 🔥` `+96%`
1. [挪威的垃圾桶也这么抽象 (Norway’s trash cans are so abstract)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E7%9A%84%E5%9E%83%E5%9C%BE%E6%A1%B6%E4%B9%9F%E8%BF%99%E4%B9%88%E6%8A%BD%E8%B1%A1%23) `132.5K 🔥` `+70%`
1. [易烊千玺离骚迎来了真正的宣发期](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%A6%BB%E9%AA%9A%E8%BF%8E%E6%9D%A5%E4%BA%86%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `132.3K 🔥` `+141%`
1. [恐怖游轮一刀未剪](https://s.weibo.com/weibo?q=%23%E6%81%90%E6%80%96%E6%B8%B8%E8%BD%AE%E4%B8%80%E5%88%80%E6%9C%AA%E5%89%AA%23) `116.5K 🔥` `+50%`
1. [猫猫每一个猫窝都照顾到了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%8C%AB%E6%AF%8F%E4%B8%80%E4%B8%AA%E7%8C%AB%E7%AA%9D%E9%83%BD%E7%85%A7%E9%A1%BE%E5%88%B0%E4%BA%86%23) `115.6K 🔥` `+47%`
1. [A股年内最强无差别杀跌 (A-shares saw the strongest indiscriminate decline this year)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B9%B4%E5%86%85%E6%9C%80%E5%BC%BA%E6%97%A0%E5%B7%AE%E5%88%AB%E6%9D%80%E8%B7%8C%23) `114.3K 🔥` `+33%`
1. [功夫女足让韩国人破防了 (The Kung Fu Women’s Football Team allowed the Koreans to break their defense)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%AE%A9%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%A0%B4%E9%98%B2%E4%BA%86%23) `974.6K 🔥`
1. [年轻人一定要对钱有概念](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `713.5K 🔥`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `300.1K 🔥`
1. [重庆彭水山体崩塌还有34人失联 (Pengshui mountain collapse in Chongqing leaves 34 people missing)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E8%BF%98%E6%9C%8934%E4%BA%BA%E5%A4%B1%E8%81%94%23) `132.3K 🔥`
1. [阿根廷决赛遇苦主裁判](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B3%E8%B5%9B%E9%81%87%E8%8B%A6%E4%B8%BB%E8%A3%81%E5%88%A4%23) `129.0K 🔥`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `125.2K 🔥`
1. [管泽元 (Guan Zeyuan)](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%23) `118.5K 🔥`
1. [西班牙晒大力神杯](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%99%92%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `252.9K 🔥` `-60%`
1. [智能体互信互联互操作全球合作倡议](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E4%BD%93%E4%BA%92%E4%BF%A1%E4%BA%92%E8%81%94%E4%BA%92%E6%93%8D%E4%BD%9C%E5%85%A8%E7%90%83%E5%90%88%E4%BD%9C%E5%80%A1%E8%AE%AE%23) `190.3K 🔥` `-69%`

Updated at 2026-07-18 08:59:00

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
