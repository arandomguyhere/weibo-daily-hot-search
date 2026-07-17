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

1. [ofo小黄车账号停更5年突然发文 (Ofo Xiaohuangche account has been suspended for 5 years and suddenly posted a message)](https://s.weibo.com/weibo?q=%23ofo%E5%B0%8F%E9%BB%84%E8%BD%A6%E8%B4%A6%E5%8F%B7%E5%81%9C%E6%9B%B45%E5%B9%B4%E7%AA%81%E7%84%B6%E5%8F%91%E6%96%87%23) `1.1M 🔥` `NEW`
1. [范丞丞椒巴客品牌全球代言人](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%A4%92%E5%B7%B4%E5%AE%A2%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `846.9K 🔥` `NEW`
1. [以后大家拼的就是身体了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%A4%A7%E5%AE%B6%E6%8B%BC%E7%9A%84%E5%B0%B1%E6%98%AF%E8%BA%AB%E4%BD%93%E4%BA%86%23) `837.6K 🔥` `NEW`
1. [官方回应气象台不敢报40度](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B0%94%E8%B1%A1%E5%8F%B0%E4%B8%8D%E6%95%A2%E6%8A%A540%E5%BA%A6%23) `651.8K 🔥` `NEW`
1. [A股半日放量1219亿调整](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E6%97%A5%E6%94%BE%E9%87%8F1219%E4%BA%BF%E8%B0%83%E6%95%B4%23) `644.8K 🔥` `NEW`
1. [BLG申请世一上商标](https://s.weibo.com/weibo?q=%23BLG%E7%94%B3%E8%AF%B7%E4%B8%96%E4%B8%80%E4%B8%8A%E5%95%86%E6%A0%87%23) `622.1K 🔥` `NEW`
1. [小黄豆抢蔡徐坤的票卡住了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E6%8A%A2%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9A%84%E7%A5%A8%E5%8D%A1%E4%BD%8F%E4%BA%86%23) `589.8K 🔥` `NEW`
1. [应急管理部部长率工作组赶赴重庆](https://s.weibo.com/weibo?q=%23%E5%BA%94%E6%80%A5%E7%AE%A1%E7%90%86%E9%83%A8%E9%83%A8%E9%95%BF%E7%8E%87%E5%B7%A5%E4%BD%9C%E7%BB%84%E8%B5%B6%E8%B5%B4%E9%87%8D%E5%BA%86%23) `584.5K 🔥` `NEW`
1. [阿根廷队已到决赛城市](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%B7%B2%E5%88%B0%E5%86%B3%E8%B5%9B%E5%9F%8E%E5%B8%82%23) `563.7K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `539.5K 🔥` `NEW`
1. [王橹杰石头剪刀布饭撒 (Wang Lujie rock paper scissors rice scattering)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%9F%B3%E5%A4%B4%E5%89%AA%E5%88%80%E5%B8%83%E9%A5%AD%E6%92%92%23) `530.4K 🔥` `NEW`
1. [孙燕姿 曲婉婷](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%20%E6%9B%B2%E5%A9%89%E5%A9%B7%23) `519.6K 🔥` `NEW`
1. [星光L让大六座迈入10万时代](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%85%89L%E8%AE%A9%E5%A4%A7%E5%85%AD%E5%BA%A7%E8%BF%88%E5%85%A510%E4%B8%87%E6%97%B6%E4%BB%A3%23) `500.0K 🔥` `NEW`
1. [白鹿官方工作室发文](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AE%98%E6%96%B9%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%96%87%23) `496.8K 🔥` `NEW`
1. [突然意识到所有AI都是未成年](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%89%80%E6%9C%89AI%E9%83%BD%E6%98%AF%E6%9C%AA%E6%88%90%E5%B9%B4%23) `487.1K 🔥` `NEW`
1. [男子帮台湾游客拍照竟是失联的大伯](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%AE%E5%8F%B0%E6%B9%BE%E6%B8%B8%E5%AE%A2%E6%8B%8D%E7%85%A7%E7%AB%9F%E6%98%AF%E5%A4%B1%E8%81%94%E7%9A%84%E5%A4%A7%E4%BC%AF%23) `480.3K 🔥` `NEW`
1. [王橹杰心率挑战疑似关录像](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BF%83%E7%8E%87%E6%8C%91%E6%88%98%E7%96%91%E4%BC%BC%E5%85%B3%E5%BD%95%E5%83%8F%23) `474.6K 🔥` `NEW`
1. [运动会随舞](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E4%BC%9A%E9%9A%8F%E8%88%9E%23) `464.3K 🔥` `NEW`
1. [托运3只猫全死亡尸体被扔垃圾堆](https://s.weibo.com/weibo?q=%23%E6%89%98%E8%BF%903%E5%8F%AA%E7%8C%AB%E5%85%A8%E6%AD%BB%E4%BA%A1%E5%B0%B8%E4%BD%93%E8%A2%AB%E6%89%94%E5%9E%83%E5%9C%BE%E5%A0%86%23) `453.1K 🔥` `NEW`
1. [上证指数](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%AF%81%E6%8C%87%E6%95%B0%23) `451.5K 🔥` `NEW`
1. [穆祉丞打到自己灯牌的反应 (Mu Zhicheng's reaction when his own light card was hit)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%89%93%E5%88%B0%E8%87%AA%E5%B7%B1%E7%81%AF%E7%89%8C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `432.4K 🔥` `NEW`
1. [王楚钦孙颖莎3比0林高远刘炜珊](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%940%E6%9E%97%E9%AB%98%E8%BF%9C%E5%88%98%E7%82%9C%E7%8F%8A%23) `427.1K 🔥` `NEW`
1. [时代少年团上海站抢票时间](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%8A%E6%B5%B7%E7%AB%99%E6%8A%A2%E7%A5%A8%E6%97%B6%E9%97%B4%23) `357.6K 🔥` `NEW`
1. [张凌赫 见面会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `261.4K 🔥` `NEW`
1. [苏新皓随舞](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E9%9A%8F%E8%88%9E%23) `260.5K 🔥` `NEW`
1. [A股跌至3790点](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%B7%8C%E8%87%B33790%E7%82%B9%23) `259.1K 🔥` `NEW`
1. [杨超越给王俊凯演唱会送花篮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%81%E8%8A%B1%E7%AF%AE%23) `258.5K 🔥` `NEW`
1. [迪丽热巴黑皮体育生具象化](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%BB%91%E7%9A%AE%E4%BD%93%E8%82%B2%E7%94%9F%E5%85%B7%E8%B1%A1%E5%8C%96%23) `251.4K 🔥` `NEW`
1. [我上班的一天](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8A%E7%8F%AD%E7%9A%84%E4%B8%80%E5%A4%A9%23) `251.2K 🔥` `NEW`
1. [在大城市上班能激起人的打扮欲](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%A7%E5%9F%8E%E5%B8%82%E4%B8%8A%E7%8F%AD%E8%83%BD%E6%BF%80%E8%B5%B7%E4%BA%BA%E7%9A%84%E6%89%93%E6%89%AE%E6%AC%B2%23) `251.2K 🔥` `NEW`
1. [美甲的天敌竟然是小龙虾 (The natural enemy of manicure is crayfish)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%94%B2%E7%9A%84%E5%A4%A9%E6%95%8C%E7%AB%9F%E7%84%B6%E6%98%AF%E5%B0%8F%E9%BE%99%E8%99%BE%23) `246.6K 🔥` `NEW`
1. [乐事邀吃出蓝色薯片消费者参观工厂](https://s.weibo.com/weibo?q=%23%E4%B9%90%E4%BA%8B%E9%82%80%E5%90%83%E5%87%BA%E8%93%9D%E8%89%B2%E8%96%AF%E7%89%87%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%82%E8%A7%82%E5%B7%A5%E5%8E%82%23) `238.7K 🔥` `NEW`
1. [辽源市委书记沈德生病逝](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E6%BA%90%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%B2%88%E5%BE%B7%E7%94%9F%E7%97%85%E9%80%9D%23) `238.1K 🔥` `NEW`
1. [虞书欣后陡门plog](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%8E%E9%99%A1%E9%97%A8plog%23) `224.8K 🔥` `NEW`
1. [王俊凯被烫成啥了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A2%AB%E7%83%AB%E6%88%90%E5%95%A5%E4%BA%86%23) `212.6K 🔥` `NEW`
1. [朱志鑫背头黑框眼镜](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E8%83%8C%E5%A4%B4%E9%BB%91%E6%A1%86%E7%9C%BC%E9%95%9C%23) `182.2K 🔥` `NEW`
1. [野狗骨头改编 删掉男主情史](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%94%B9%E7%BC%96%20%E5%88%A0%E6%8E%89%E7%94%B7%E4%B8%BB%E6%83%85%E5%8F%B2%23) `179.7K 🔥` `NEW`
1. [两只老虎的歌词终于解密了](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8F%AA%E8%80%81%E8%99%8E%E7%9A%84%E6%AD%8C%E8%AF%8D%E7%BB%88%E4%BA%8E%E8%A7%A3%E5%AF%86%E4%BA%86%23) `3.1M 🔥` `+328%`
1. [世界人工智能大会今天开幕](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E4%BC%9A%E4%BB%8A%E5%A4%A9%E5%BC%80%E5%B9%95%23) `853.7K 🔥`
1. [怀孕女子疑因嫉妒捂死男友3岁女儿](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%AD%95%E5%A5%B3%E5%AD%90%E7%96%91%E5%9B%A0%E5%AB%89%E5%A6%92%E6%8D%82%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%A5%B3%E5%84%BF%23) `552.0K 🔥`
1. [建议大家少喝肉汤 (It is recommended that you drink less broth)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%91%E5%96%9D%E8%82%89%E6%B1%A4%23) `512.9K 🔥`
1. [重庆彭水山体垮塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%23) `685.9K 🔥` `-56%`
1. [曲婉婷患癌 (Qu Wanting suffers from cancer)](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E5%A9%89%E5%A9%B7%E6%82%A3%E7%99%8C%23) `576.5K 🔥` `-92%`
1. [林更新变特别出演](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%9B%B4%E6%96%B0%E5%8F%98%E7%89%B9%E5%88%AB%E5%87%BA%E6%BC%94%23) `492.2K 🔥` `-30%`
1. [爱奇艺717官宣阵容](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA717%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `262.9K 🔥` `-60%`
1. [孕妇捂死3岁女童最高或仅判无期](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E6%8D%82%E6%AD%BB3%E5%B2%81%E5%A5%B3%E7%AB%A5%E6%9C%80%E9%AB%98%E6%88%96%E4%BB%85%E5%88%A4%E6%97%A0%E6%9C%9F%23) `261.8K 🔥` `-57%`
1. [佛得角门将回应加盟迈阿密国际](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%9B%9E%E5%BA%94%E5%8A%A0%E7%9B%9F%E8%BF%88%E9%98%BF%E5%AF%86%E5%9B%BD%E9%99%85%23) `257.4K 🔥` `-71%`
1. [阿根廷队未能按计划前往决赛城市](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E6%9C%AA%E8%83%BD%E6%8C%89%E8%AE%A1%E5%88%92%E5%89%8D%E5%BE%80%E5%86%B3%E8%B5%9B%E5%9F%8E%E5%B8%82%23) `254.1K 🔥` `-59%`
1. [长大后突然变成了父母的人脉](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E7%AA%81%E7%84%B6%E5%8F%98%E6%88%90%E4%BA%86%E7%88%B6%E6%AF%8D%E7%9A%84%E4%BA%BA%E8%84%89%23) `237.8K 🔥` `-58%`
1. [ofo停更5年突然发文皮肤病援助](https://s.weibo.com/weibo?q=%23ofo%E5%81%9C%E6%9B%B45%E5%B9%B4%E7%AA%81%E7%84%B6%E5%8F%91%E6%96%87%E7%9A%AE%E8%82%A4%E7%97%85%E6%8F%B4%E5%8A%A9%23) `185.3K 🔥` `-68%`
1. [如何判断自己该离职了](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E8%87%AA%E5%B7%B1%E8%AF%A5%E7%A6%BB%E8%81%8C%E4%BA%86%23) `176.9K 🔥` `-68%`

Updated at 2026-07-17 14:39:22

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
