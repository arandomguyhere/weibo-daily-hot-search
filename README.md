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

1. [梅姨真实姓名首曝光 (Aunt Mei’s real first name revealed)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E9%A6%96%E6%9B%9D%E5%85%89%23) `2.9M 🔥` `NEW`
1. [可杰 top](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E6%9D%B0%20top%23) `947.1K 🔥` `NEW`
1. [戴手链美甲给宝宝打针护士已停职](https://s.weibo.com/weibo?q=%23%E6%88%B4%E6%89%8B%E9%93%BE%E7%BE%8E%E7%94%B2%E7%BB%99%E5%AE%9D%E5%AE%9D%E6%89%93%E9%92%88%E6%8A%A4%E5%A3%AB%E5%B7%B2%E5%81%9C%E8%81%8C%23) `726.9K 🔥` `NEW`
1. [茉莉奶白被茉莉和奶白背刺了](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E8%A2%AB%E8%8C%89%E8%8E%89%E5%92%8C%E5%A5%B6%E7%99%BD%E8%83%8C%E5%88%BA%E4%BA%86%23) `470.4K 🔥` `NEW`
1. [黄杨钿甜新剧低调开播热度暴跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E6%96%B0%E5%89%A7%E4%BD%8E%E8%B0%83%E5%BC%80%E6%92%AD%E7%83%AD%E5%BA%A6%E6%9A%B4%E8%B7%8C%23) `366.7K 🔥` `NEW`
1. [乌鸦一次带走四块饼干智商绝了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E9%B8%A6%E4%B8%80%E6%AC%A1%E5%B8%A6%E8%B5%B0%E5%9B%9B%E5%9D%97%E9%A5%BC%E5%B9%B2%E6%99%BA%E5%95%86%E7%BB%9D%E4%BA%86%23) `297.9K 🔥` `NEW`
1. [登陆少年 徐州](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%20%E5%BE%90%E5%B7%9E%23) `268.8K 🔥` `NEW`
1. [曝三星SK海力士测试中国芯片设备](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%89%E6%98%9FSK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%B5%8B%E8%AF%95%E4%B8%AD%E5%9B%BD%E8%8A%AF%E7%89%87%E8%AE%BE%E5%A4%87%23) `266.7K 🔥` `NEW`
1. [女孩从18楼跳下男友反复修改赔偿金](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%BB%8E18%E6%A5%BC%E8%B7%B3%E4%B8%8B%E7%94%B7%E5%8F%8B%E5%8F%8D%E5%A4%8D%E4%BF%AE%E6%94%B9%E8%B5%94%E5%81%BF%E9%87%91%23) `266.4K 🔥` `NEW`
1. [黄多多头型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E5%A4%B4%E5%9E%8B%23) `265.9K 🔥` `NEW`
1. [时代少年团特别的人 (Special People of Times Youth League)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%89%B9%E5%88%AB%E7%9A%84%E4%BA%BA%23) `263.3K 🔥` `NEW`
1. [海口港瞒报危险品](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%E6%B8%AF%E7%9E%92%E6%8A%A5%E5%8D%B1%E9%99%A9%E5%93%81%23) `262.7K 🔥` `NEW`
1. [王楚然还有三部待播作品](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BF%98%E6%9C%89%E4%B8%89%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%23) `238.5K 🔥` `NEW`
1. [梅姨真实长相或将公布](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%9C%9F%E5%AE%9E%E9%95%BF%E7%9B%B8%E6%88%96%E5%B0%86%E5%85%AC%E5%B8%83%23) `212.2K 🔥` `NEW`
1. [iG全员力挺Meiko](https://s.weibo.com/weibo?q=%23iG%E5%85%A8%E5%91%98%E5%8A%9B%E6%8C%BAMeiko%23) `211.6K 🔥` `NEW`
1. [张凌赫回应这一秒过火大结局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%A4%A7%E7%BB%93%E5%B1%80%23) `211.5K 🔥` `NEW`
1. [严浩翔看到丁程鑫把风车甩飞的反应](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E5%88%B0%E4%B8%81%E7%A8%8B%E9%91%AB%E6%8A%8A%E9%A3%8E%E8%BD%A6%E7%94%A9%E9%A3%9E%E7%9A%84%E5%8F%8D%E5%BA%94%23) `190.4K 🔥` `NEW`
1. [台风暴雨等4预警齐发](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%9A%B4%E9%9B%A8%E7%AD%894%E9%A2%84%E8%AD%A6%E9%BD%90%E5%8F%91%23) `150.5K 🔥` `NEW`
1. [贺峻霖water](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96water%23) `149.7K 🔥` `NEW`
1. [任素素结局](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E7%B4%A0%E7%B4%A0%E7%BB%93%E5%B1%80%23) `145.4K 🔥` `NEW`
1. [周佑凌晒和柳柳无法分开的一天 (A day when Zhou Youlingshai and Liu Liu could not be separated)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E6%99%92%E5%92%8C%E6%9F%B3%E6%9F%B3%E6%97%A0%E6%B3%95%E5%88%86%E5%BC%80%E7%9A%84%E4%B8%80%E5%A4%A9%23) `143.4K 🔥` `NEW`
1. [沈阳数万只蟾蜍宝宝过马路](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%95%B0%E4%B8%87%E5%8F%AA%E8%9F%BE%E8%9C%8D%E5%AE%9D%E5%AE%9D%E8%BF%87%E9%A9%AC%E8%B7%AF%23) `143.3K 🔥` `NEW`
1. [丁程鑫今天淋的花瓣是金色雨](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BB%8A%E5%A4%A9%E6%B7%8B%E7%9A%84%E8%8A%B1%E7%93%A3%E6%98%AF%E9%87%91%E8%89%B2%E9%9B%A8%23) `140.7K 🔥` `NEW`
1. [丈夫称胚胎已销毁女方最新回应](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%B0%E8%83%9A%E8%83%8E%E5%B7%B2%E9%94%80%E6%AF%81%E5%A5%B3%E6%96%B9%E6%9C%80%E6%96%B0%E5%9B%9E%E5%BA%94%23) `138.8K 🔥` `NEW`
1. [HLE对战GEN](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98GEN%23) `135.3K 🔥` `NEW`
1. [婚外胚胎案原配首次与第三者当面对质](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E9%A6%96%E6%AC%A1%E4%B8%8E%E7%AC%AC%E4%B8%89%E8%80%85%E5%BD%93%E9%9D%A2%E5%AF%B9%E8%B4%A8%23) `1.1M 🔥` `+364%`
1. [女儿考上一本出轨父亲拒付学费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E4%B8%80%E6%9C%AC%E5%87%BA%E8%BD%A8%E7%88%B6%E4%BA%B2%E6%8B%92%E4%BB%98%E5%AD%A6%E8%B4%B9%23) `340.7K 🔥` `+29%`
1. [老祖宗怎么可以聪明成这样](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%81%AA%E6%98%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `253.6K 🔥` `+87%`
1. [宋慧乔少女身材](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E5%B0%91%E5%A5%B3%E8%BA%AB%E6%9D%90%23) `242.7K 🔥` `+30%`
1. [跟着大国交通看山河中国 (Follow the traffic of great powers to see the mountains and rivers of China)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%A4%A7%E5%9B%BD%E4%BA%A4%E9%80%9A%E7%9C%8B%E5%B1%B1%E6%B2%B3%E4%B8%AD%E5%9B%BD%23) `991.4K 🔥`
1. [尊界时代旗舰MPV正式发布 (Zunjie Era’s flagship MPV officially released)](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%E6%97%B6%E4%BB%A3%E6%97%97%E8%88%B0MPV%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `959.5K 🔥`
1. [严浩翔 破音](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E7%A0%B4%E9%9F%B3%23) `473.3K 🔥`
1. [苹果要求长鑫降价反遭涨价 (Apple asked Changxin to cut prices but got a price increase)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A6%81%E6%B1%82%E9%95%BF%E9%91%AB%E9%99%8D%E4%BB%B7%E5%8F%8D%E9%81%AD%E6%B6%A8%E4%BB%B7%23) `470.5K 🔥`
1. [高会 TFBOYS联名鞋 (Gaohui TFBOYS co-branded shoes)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%20TFBOYS%E8%81%94%E5%90%8D%E9%9E%8B%23) `469.0K 🔥`
1. [玩具公司签67亿元算力大单](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%85%B7%E5%85%AC%E5%8F%B8%E7%AD%BE67%E4%BA%BF%E5%85%83%E7%AE%97%E5%8A%9B%E5%A4%A7%E5%8D%95%23) `266.4K 🔥`
1. [很多人其实不适合运动](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%85%B6%E5%AE%9E%E4%B8%8D%E9%80%82%E5%90%88%E8%BF%90%E5%8A%A8%23) `211.3K 🔥`
1. [卜冠今吓到我了](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%86%A0%E4%BB%8A%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `601.7K 🔥` `-33%`
1. [成年人的体面是把请客说得很自然 (The decency of adults is to treat guests as a matter of course)](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%BD%93%E9%9D%A2%E6%98%AF%E6%8A%8A%E8%AF%B7%E5%AE%A2%E8%AF%B4%E5%BE%97%E5%BE%88%E8%87%AA%E7%84%B6%23) `577.1K 🔥` `-27%`
1. [这一秒过火全员be](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%85%A8%E5%91%98be%23) `528.2K 🔥` `-69%`
1. [Jennie自曝曾因身材自卑](https://s.weibo.com/weibo?q=%23Jennie%E8%87%AA%E6%9B%9D%E6%9B%BE%E5%9B%A0%E8%BA%AB%E6%9D%90%E8%87%AA%E5%8D%91%23) `395.9K 🔥` `-21%`
1. [费大厨全国小炒肉大王仅凭视频评出](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E4%BB%85%E5%87%AD%E8%A7%86%E9%A2%91%E8%AF%84%E5%87%BA%23) `382.5K 🔥` `-24%`
1. [你常吃的兰州拉面要改名了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%B8%B8%E5%90%83%E7%9A%84%E5%85%B0%E5%B7%9E%E6%8B%89%E9%9D%A2%E8%A6%81%E6%94%B9%E5%90%8D%E4%BA%86%23) `261.4K 🔥` `-27%`
1. [刘耀文拍了正太扭腰](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%8B%8D%E4%BA%86%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%23) `203.6K 🔥` `-36%`
1. [一姐姐在肯德基干了30年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A7%90%E5%A7%90%E5%9C%A8%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%B9%B2%E4%BA%8630%E5%B9%B4%23) `171.3K 🔥` `-81%`
1. [余承东回应口误 (Yu Chengdong responded to a slip of the tongue)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E5%8F%A3%E8%AF%AF%23) `156.3K 🔥` `-74%`
1. [卫生院回应针头完全扎进宝宝胳膊](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E9%99%A2%E5%9B%9E%E5%BA%94%E9%92%88%E5%A4%B4%E5%AE%8C%E5%85%A8%E6%89%8E%E8%BF%9B%E5%AE%9D%E5%AE%9D%E8%83%B3%E8%86%8A%23) `150.3K 🔥` `-38%`
1. [王俊凯 南京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E5%8D%97%E4%BA%AC%23) `147.7K 🔥` `-57%`
1. [金价重回900元大关 (Gold price returns to 900 yuan mark)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%87%8D%E5%9B%9E900%E5%85%83%E5%A4%A7%E5%85%B3%23) `145.6K 🔥` `-53%`
1. [Meiko力竭了](https://s.weibo.com/weibo?q=%23Meiko%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `138.3K 🔥` `-73%`
1. [AI做的动物尺度太大了](https://s.weibo.com/weibo?q=%23AI%E5%81%9A%E7%9A%84%E5%8A%A8%E7%89%A9%E5%B0%BA%E5%BA%A6%E5%A4%AA%E5%A4%A7%E4%BA%86%23) `135.3K 🔥` `-68%`
1. [余承东称手机将大规模涨价](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E6%89%8B%E6%9C%BA%E5%B0%86%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%B6%A8%E4%BB%B7%23) `134.9K 🔥` `-63%`

Updated at 2026-08-05 23:39:16

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
