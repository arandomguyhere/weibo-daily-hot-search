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

1. [尼克斯绝杀马刺 (Knicks beat Spurs)](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AF%E7%BB%9D%E6%9D%80%E9%A9%AC%E5%88%BA%23) `2.2M 🔥` `NEW`
1. [榴莲仅退款买家父亲向商家道歉](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E7%88%B6%E4%BA%B2%E5%90%91%E5%95%86%E5%AE%B6%E9%81%93%E6%AD%89%23) `1.2M 🔥` `NEW`
1. [万千气象看河南](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E6%B2%B3%E5%8D%97%23) `917.9K 🔥` `NEW`
1. [揭开湘西之谜](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E5%BC%80%E6%B9%98%E8%A5%BF%E4%B9%8B%E8%B0%9C%23) `861.9K 🔥` `NEW`
1. [爱吃生菜的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E7%94%9F%E8%8F%9C%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `853.5K 🔥` `NEW`
1. [色情漫画网站浏览量超1亿次](https://s.weibo.com/weibo?q=%23%E8%89%B2%E6%83%85%E6%BC%AB%E7%94%BB%E7%BD%91%E7%AB%99%E6%B5%8F%E8%A7%88%E9%87%8F%E8%B6%851%E4%BA%BF%E6%AC%A1%23) `775.3K 🔥` `NEW`
1. [为什么朋友圈没有活人感了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E6%9C%89%E6%B4%BB%E4%BA%BA%E6%84%9F%E4%BA%86%23) `699.5K 🔥` `NEW`
1. [闪充一下满电上场](https://s.weibo.com/weibo?q=%23%E9%97%AA%E5%85%85%E4%B8%80%E4%B8%8B%E6%BB%A1%E7%94%B5%E4%B8%8A%E5%9C%BA%23) `689.0K 🔥` `NEW`
1. [莫离直播](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%9B%B4%E6%92%AD%23) `670.4K 🔥` `NEW`
1. [南部档案今日开播](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E4%BB%8A%E6%97%A5%E5%BC%80%E6%92%AD%23) `523.4K 🔥` `NEW`
1. [墨镜不要再随便戴了 (Stop wearing sunglasses casually)](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E9%95%9C%E4%B8%8D%E8%A6%81%E5%86%8D%E9%9A%8F%E4%BE%BF%E6%88%B4%E4%BA%86%23) `446.9K 🔥` `NEW`
1. [陈宇森接任钉钉CEO](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AE%87%E6%A3%AE%E6%8E%A5%E4%BB%BB%E9%92%89%E9%92%89CEO%23) `445.5K 🔥` `NEW`
1. [张杰谢娜持续掉粉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `444.9K 🔥` `NEW`
1. [第一次见女明星化妆比美妆博主还专业](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A5%B3%E6%98%8E%E6%98%9F%E5%8C%96%E5%A6%86%E6%AF%94%E7%BE%8E%E5%A6%86%E5%8D%9A%E4%B8%BB%E8%BF%98%E4%B8%93%E4%B8%9A%23) `444.0K 🔥` `NEW`
1. [广西兴安爆炸致7死17伤](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%85%B4%E5%AE%89%E7%88%86%E7%82%B8%E8%87%B47%E6%AD%BB17%E4%BC%A4%23) `441.7K 🔥` `NEW`
1. [陈都灵演技vs白鹿演技](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%BC%94%E6%8A%80vs%E7%99%BD%E9%B9%BF%E6%BC%94%E6%8A%80%23) `441.0K 🔥` `NEW`
1. [陈飞宇在看迪丽热巴还是罗云熙](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%9C%A8%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%98%E6%98%AF%E7%BD%97%E4%BA%91%E7%86%99%23) `439.9K 🔥` `NEW`
1. [黄金别跌了 再跌我该掉段了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%88%AB%E8%B7%8C%E4%BA%86%20%E5%86%8D%E8%B7%8C%E6%88%91%E8%AF%A5%E6%8E%89%E6%AE%B5%E4%BA%86%23) `438.4K 🔥` `NEW`
1. [丁太升回应谢娜演唱会争议](https://s.weibo.com/weibo?q=%23%E4%B8%81%E5%A4%AA%E5%8D%87%E5%9B%9E%E5%BA%94%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%89%E8%AE%AE%23) `436.5K 🔥` `NEW`
1. [甄嬛传一根簪子居然三个人用过](https://s.weibo.com/weibo?q=%23%E7%94%84%E5%AC%9B%E4%BC%A0%E4%B8%80%E6%A0%B9%E7%B0%AA%E5%AD%90%E5%B1%85%E7%84%B6%E4%B8%89%E4%B8%AA%E4%BA%BA%E7%94%A8%E8%BF%87%23) `436.0K 🔥` `NEW`
1. [黄金一直跌 (Gold keeps falling)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%80%E7%9B%B4%E8%B7%8C%23) `432.2K 🔥` `NEW`
1. [曝iPhone18内存屏幕二选一](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18%E5%86%85%E5%AD%98%E5%B1%8F%E5%B9%95%E4%BA%8C%E9%80%89%E4%B8%80%23) `413.7K 🔥` `NEW`
1. [文班打破詹姆斯一项纪录](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E6%89%93%E7%A0%B4%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%80%E9%A1%B9%E7%BA%AA%E5%BD%95%23) `405.3K 🔥` `NEW`
1. [帮弟带娃致侄儿被拐39年后找回](https://s.weibo.com/weibo?q=%23%E5%B8%AE%E5%BC%9F%E5%B8%A6%E5%A8%83%E8%87%B4%E4%BE%84%E5%84%BF%E8%A2%AB%E6%8B%9039%E5%B9%B4%E5%90%8E%E6%89%BE%E5%9B%9E%23) `385.3K 🔥` `NEW`
1. [宇树科技合作英伟达引争议](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%90%88%E4%BD%9C%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%BC%95%E4%BA%89%E8%AE%AE%23) `375.3K 🔥` `NEW`
1. [王鹤棣的清爽新身份](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%9A%84%E6%B8%85%E7%88%BD%E6%96%B0%E8%BA%AB%E4%BB%BD%23) `369.6K 🔥` `NEW`
1. [电影八仙定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%E5%AE%9A%E6%A1%A3%23) `369.2K 🔥` `NEW`
1. [高校通报原处长被举报与已婚男有染](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E9%80%9A%E6%8A%A5%E5%8E%9F%E5%A4%84%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%B8%8E%E5%B7%B2%E5%A9%9A%E7%94%B7%E6%9C%89%E6%9F%93%23) `368.5K 🔥` `NEW`
1. [福克斯关键失误](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%85%8B%E6%96%AF%E5%85%B3%E9%94%AE%E5%A4%B1%E8%AF%AF%23) `367.8K 🔥` `NEW`
1. [OG神之一手补篮绝杀](https://s.weibo.com/weibo?q=%23OG%E7%A5%9E%E4%B9%8B%E4%B8%80%E6%89%8B%E8%A1%A5%E7%AF%AE%E7%BB%9D%E6%9D%80%23) `367.2K 🔥` `NEW`
1. [网友给张杰发的私信 (A private message sent by a netizen to Zhang Jie)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%99%E5%BC%A0%E6%9D%B0%E5%8F%91%E7%9A%84%E7%A7%81%E4%BF%A1%23) `366.7K 🔥` `NEW`
1. [邓为黄多多相差十一岁](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%9B%B8%E5%B7%AE%E5%8D%81%E4%B8%80%E5%B2%81%23) `365.4K 🔥` `NEW`
1. [舒舒服服爽一辈子有啥错](https://s.weibo.com/weibo?q=%23%E8%88%92%E8%88%92%E6%9C%8D%E6%9C%8D%E7%88%BD%E4%B8%80%E8%BE%88%E5%AD%90%E6%9C%89%E5%95%A5%E9%94%99%23) `365.0K 🔥` `NEW`
1. [世界杯官方主题曲发布](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%AE%98%E6%96%B9%E4%B8%BB%E9%A2%98%E6%9B%B2%E5%8F%91%E5%B8%83%23) `364.3K 🔥` `NEW`
1. [穷鬼年轻人被免费试吃坑麻了](https://s.weibo.com/weibo?q=%23%E7%A9%B7%E9%AC%BC%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%A2%AB%E5%85%8D%E8%B4%B9%E8%AF%95%E5%90%83%E5%9D%91%E9%BA%BB%E4%BA%86%23) `363.9K 🔥` `NEW`
1. [姜涩琪表妹去世](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%B6%A9%E7%90%AA%E8%A1%A8%E5%A6%B9%E5%8E%BB%E4%B8%96%23) `362.8K 🔥` `NEW`
1. [小米新SU7真材实料不怕拆](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%E7%9C%9F%E6%9D%90%E5%AE%9E%E6%96%99%E4%B8%8D%E6%80%95%E6%8B%86%23) `362.4K 🔥` `NEW`
1. [黄金进入4年以来首个熊市](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%9B%E5%85%A54%E5%B9%B4%E4%BB%A5%E6%9D%A5%E9%A6%96%E4%B8%AA%E7%86%8A%E5%B8%82%23) `362.0K 🔥` `NEW`
1. [易烊千玺年度瞩目影人TOP5](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B9%B4%E5%BA%A6%E7%9E%A9%E7%9B%AE%E5%BD%B1%E4%BA%BATOP5%23) `361.2K 🔥` `NEW`
1. [檀健次新剧分手给前女友留退路](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E6%96%B0%E5%89%A7%E5%88%86%E6%89%8B%E7%BB%99%E5%89%8D%E5%A5%B3%E5%8F%8B%E7%95%99%E9%80%80%E8%B7%AF%23) `360.7K 🔥` `NEW`
1. [王濛四公圆梦新歌统治广场舞 (Wang Meng's Sigong realizes his dream and rules the square dance with his new song)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%9B%E5%85%AC%E5%9C%86%E6%A2%A6%E6%96%B0%E6%AD%8C%E7%BB%9F%E6%B2%BB%E5%B9%BF%E5%9C%BA%E8%88%9E%23) `359.8K 🔥` `NEW`
1. [文班亚马一级恶意犯规](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E4%B8%80%E7%BA%A7%E6%81%B6%E6%84%8F%E7%8A%AF%E8%A7%84%23) `359.4K 🔥` `NEW`
1. [迪丽热巴手链24年就带了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%8B%E9%93%BE24%E5%B9%B4%E5%B0%B1%E5%B8%A6%E4%BA%86%23) `347.2K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `338.9K 🔥` `NEW`
1. [宋亚轩楼娱闯入内娱了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%A5%BC%E5%A8%B1%E9%97%AF%E5%85%A5%E5%86%85%E5%A8%B1%E4%BA%86%23) `321.9K 🔥` `NEW`
1. [杨幂问马龙十八岁不考驾照吗](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E9%97%AE%E9%A9%AC%E9%BE%99%E5%8D%81%E5%85%AB%E5%B2%81%E4%B8%8D%E8%80%83%E9%A9%BE%E7%85%A7%E5%90%97%23) `280.6K 🔥` `NEW`
1. [BIGBANG巡演预告](https://s.weibo.com/weibo?q=%23BIGBANG%E5%B7%A1%E6%BC%94%E9%A2%84%E5%91%8A%23) `270.3K 🔥` `NEW`
1. [马刺vs尼克斯](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E5%B0%BC%E5%85%8B%E6%96%AF%23) `288.5K 🔥` `+31%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `370.1K 🔥`
1. [曝百妖谱女主黄多多](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BE%E5%A6%96%E8%B0%B1%E5%A5%B3%E4%B8%BB%E9%BB%84%E5%A4%9A%E5%A4%9A%23) `292.0K 🔥`
1. [旅游热度很低却很夯的城市 (A city with low tourist popularity but great potential)](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E7%83%AD%E5%BA%A6%E5%BE%88%E4%BD%8E%E5%8D%B4%E5%BE%88%E5%A4%AF%E7%9A%84%E5%9F%8E%E5%B8%82%23) `327.9K 🔥` `-55%`
1. [伊朗宣布对所有船只关闭霍尔木兹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%A3%E5%B8%83%E5%AF%B9%E6%89%80%E6%9C%89%E8%88%B9%E5%8F%AA%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `283.0K 🔥` `-61%`

Updated at 2026-06-11 13:02:59

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
