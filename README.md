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

1. [中国冰雪四年跃迁 (China’s ice and snow transition in four years)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E9%9B%AA%E5%9B%9B%E5%B9%B4%E8%B7%83%E8%BF%81%23) `708.3K 🔥` `NEW`
1. [蔡徐坤直播](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9B%B4%E6%92%AD%23) `657.8K 🔥` `NEW`
1. [唐宫奇案破万](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E7%A0%B4%E4%B8%87%23) `595.4K 🔥` `NEW`
1. [父亲去世试管婴儿获工亡抚恤金](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%8E%BB%E4%B8%96%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%E8%8E%B7%E5%B7%A5%E4%BA%A1%E6%8A%9A%E6%81%A4%E9%87%91%23) `327.0K 🔥` `NEW`
1. [杨紫张哲华吻戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%BC%A0%E5%93%B2%E5%8D%8E%E5%90%BB%E6%88%8F%23) `258.2K 🔥` `NEW`
1. [男嬛传](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AC%9B%E4%BC%A0%23) `253.0K 🔥` `NEW`
1. [樊振东冬奥开幕式plog](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%86%AC%E5%A5%A5%E5%BC%80%E5%B9%95%E5%BC%8Fplog%23) `247.1K 🔥` `NEW`
1. [无畏契约真人版女团闪现广州](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E7%9C%9F%E4%BA%BA%E7%89%88%E5%A5%B3%E5%9B%A2%E9%97%AA%E7%8E%B0%E5%B9%BF%E5%B7%9E%23) `203.4K 🔥` `NEW`
1. [办婚礼没领证女子在爱人祭日被赶婚房](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%B2%A1%E9%A2%86%E8%AF%81%E5%A5%B3%E5%AD%90%E5%9C%A8%E7%88%B1%E4%BA%BA%E7%A5%AD%E6%97%A5%E8%A2%AB%E8%B5%B6%E5%A9%9A%E6%88%BF%23) `158.2K 🔥` `NEW`
1. [人至少要有3个兴趣爱好](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%87%B3%E5%B0%91%E8%A6%81%E6%9C%893%E4%B8%AA%E5%85%B4%E8%B6%A3%E7%88%B1%E5%A5%BD%23) `152.8K 🔥` `NEW`
1. [谁给了窗口人员收1614万的勇气 (Who gave the window staff the courage to collect 16.14 million?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E4%BA%86%E7%AA%97%E5%8F%A3%E4%BA%BA%E5%91%98%E6%94%B61614%E4%B8%87%E7%9A%84%E5%8B%87%E6%B0%94%23) `151.2K 🔥` `NEW`
1. [王楚钦13次胜张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A613%E6%AC%A1%E8%83%9C%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `150.6K 🔥` `NEW`
1. [一句快递停运网友连下20单](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E5%BF%AB%E9%80%92%E5%81%9C%E8%BF%90%E7%BD%91%E5%8F%8B%E8%BF%9E%E4%B8%8B20%E5%8D%95%23) `144.7K 🔥` `NEW`
1. [鞠婧祎指尖蝴蝶](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%8C%87%E5%B0%96%E8%9D%B4%E8%9D%B6%23) `136.5K 🔥` `NEW`
1. [甘肃浆水面](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E6%B5%86%E6%B0%B4%E9%9D%A2%23) `113.9K 🔥` `NEW`
1. [王一博只留最得体的姿态](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8F%AA%E7%95%99%E6%9C%80%E5%BE%97%E4%BD%93%E7%9A%84%E5%A7%BF%E6%80%81%23) `110.4K 🔥` `NEW`
1. [BLG](https://s.weibo.com/weibo?q=%23BLG%23) `109.3K 🔥` `NEW`
1. [森林北回应上过非诚勿扰](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E5%9B%9E%E5%BA%94%E4%B8%8A%E8%BF%87%E9%9D%9E%E8%AF%9A%E5%8B%BF%E6%89%B0%23) `106.4K 🔥` `NEW`
1. [小马糕成了硬通货](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%E6%88%90%E4%BA%86%E7%A1%AC%E9%80%9A%E8%B4%A7%23) `99.7K 🔥` `NEW`
1. [闪耀暖暖新年阁](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%80%80%E6%9A%96%E6%9A%96%E6%96%B0%E5%B9%B4%E9%98%81%23) `99.5K 🔥` `NEW`
1. [ALin哭了 (ALin cried)](https://s.weibo.com/weibo?q=%23ALin%E5%93%AD%E4%BA%86%23) `99.5K 🔥` `NEW`
1. [突然意识到自己上了年纪的瞬间](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E4%B8%8A%E4%BA%86%E5%B9%B4%E7%BA%AA%E7%9A%84%E7%9E%AC%E9%97%B4%23) `98.1K 🔥` `NEW`
1. [王曼昱11比6孙颖莎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B111%E6%AF%946%E5%AD%99%E9%A2%96%E8%8E%8E%23) `92.0K 🔥` `NEW`
1. [孟子义你搞笑](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BD%A0%E6%90%9E%E7%AC%91%23) `90.5K 🔥` `NEW`
1. [男子被问还没有女朋友残忍杀2人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E9%97%AE%E8%BF%98%E6%B2%A1%E6%9C%89%E5%A5%B3%E6%9C%8B%E5%8F%8B%E6%AE%8B%E5%BF%8D%E6%9D%802%E4%BA%BA%23) `89.8K 🔥` `NEW`
1. [孙颖莎vs王曼昱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `1.7M 🔥` `+1171%`
1. [唐宫奇案](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `322.1K 🔥` `+299%`
1. [男生寒假打工烤糊200多个鸡翅](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%AF%92%E5%81%87%E6%89%93%E5%B7%A5%E7%83%A4%E7%B3%8A200%E5%A4%9A%E4%B8%AA%E9%B8%A1%E7%BF%85%23) `292.3K 🔥` `+205%`
1. [柯南宝可梦 漫展禁止 (Pokémon Conan Banned at Comic-Con)](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E5%8D%97%E5%AE%9D%E5%8F%AF%E6%A2%A6%20%E6%BC%AB%E5%B1%95%E7%A6%81%E6%AD%A2%23) `256.4K 🔥` `+121%`
1. [闪购新春礼盒用美团 (Flash sale New Year gift box with Meituan)](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%B4%AD%E6%96%B0%E6%98%A5%E7%A4%BC%E7%9B%92%E7%94%A8%E7%BE%8E%E5%9B%A2%23) `701.2K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `205.1K 🔥`
1. [35岁国企女掌门受贿4900万 (35-year-old female head of state-owned enterprise took 49 million yuan in bribes)](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%9B%BD%E4%BC%81%E5%A5%B3%E6%8E%8C%E9%97%A8%E5%8F%97%E8%B4%BF4900%E4%B8%87%23) `201.9K 🔥`
1. [初中生杀害同学埋尸案细节披露](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%9D%80%E5%AE%B3%E5%90%8C%E5%AD%A6%E5%9F%8B%E5%B0%B8%E6%A1%88%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `167.3K 🔥`
1. [黄多多斜肩黑裙 (Huang Duoduo sloping shoulder black dress)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%96%9C%E8%82%A9%E9%BB%91%E8%A3%99%23) `166.9K 🔥`
1. [小英想把送养出去6年的女儿接回家](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E6%83%B3%E6%8A%8A%E9%80%81%E5%85%BB%E5%87%BA%E5%8E%BB6%E5%B9%B4%E7%9A%84%E5%A5%B3%E5%84%BF%E6%8E%A5%E5%9B%9E%E5%AE%B6%23) `164.4K 🔥`
1. [甲状腺结节的忌口食物 (Food taboos for thyroid nodules)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E7%BB%93%E8%8A%82%E7%9A%84%E5%BF%8C%E5%8F%A3%E9%A3%9F%E7%89%A9%23) `162.9K 🔥`
1. [张凌赫 电竞男主 (Zhang Linghe E-sports male protagonist)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `161.3K 🔥`
1. [外卖小哥打翻32杯奶茶原地发愣](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%89%93%E7%BF%BB32%E6%9D%AF%E5%A5%B6%E8%8C%B6%E5%8E%9F%E5%9C%B0%E5%8F%91%E6%84%A3%23) `153.0K 🔥`
1. [闪耀暖暖大猛料](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%80%80%E6%9A%96%E6%9A%96%E5%A4%A7%E7%8C%9B%E6%96%99%23) `99.8K 🔥`
1. [中国军网点名张本智和 (China military network named Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E7%BD%91%E7%82%B9%E5%90%8D%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `920.5K 🔥` `-22%`
1. [张本美和采访哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E9%87%87%E8%AE%BF%E5%93%AD%E4%BA%86%23) `269.5K 🔥` `-44%`
1. [日本执政联盟将获众议院过半议席](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%89%A7%E6%94%BF%E8%81%94%E7%9B%9F%E5%B0%86%E8%8E%B7%E4%BC%97%E8%AE%AE%E9%99%A2%E8%BF%87%E5%8D%8A%E8%AE%AE%E5%B8%AD%23) `263.9K 🔥` `-69%`
1. [成何体统 改词](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E6%94%B9%E8%AF%8D%23) `250.2K 🔥` `-43%`
1. [缅北明家明珍珍被判死刑时的忏悔 (Ming Zhenzhen’s confession when she was sentenced to death in northern Myanmar)](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E6%98%8E%E5%AE%B6%E6%98%8E%E7%8F%8D%E7%8F%8D%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%E6%97%B6%E7%9A%84%E5%BF%8F%E6%82%94%23) `168.9K 🔥` `-62%`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `136.0K 🔥` `-25%`
1. [日本军国主义渗透文体领域 (Japanese militarism penetrates the cultural and sports fields)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%86%9B%E5%9B%BD%E4%B8%BB%E4%B9%89%E6%B8%97%E9%80%8F%E6%96%87%E4%BD%93%E9%A2%86%E5%9F%9F%23) `133.6K 🔥` `-21%`
1. [成何体统 好看 (How decent is it? Good-looking)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E5%A5%BD%E7%9C%8B%23) `123.3K 🔥` `-25%`
1. [古茗回应外卖小哥打翻32杯奶茶](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E5%9B%9E%E5%BA%94%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%89%93%E7%BF%BB32%E6%9D%AF%E5%A5%B6%E8%8C%B6%23) `108.2K 🔥` `-40%`
1. [爸爸弯了一辈子的腰终于断了 (Dad’s waist, which he had been bending for a lifetime, finally broke)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BC%AF%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E8%85%B0%E7%BB%88%E4%BA%8E%E6%96%AD%E4%BA%86%23) `94.3K 🔥` `-42%`
1. [男生感染HPV后果很严重](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%84%9F%E6%9F%93HPV%E5%90%8E%E6%9E%9C%E5%BE%88%E4%B8%A5%E9%87%8D%23) `89.3K 🔥` `-26%`

Updated at 2026-02-08 21:10:58

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
