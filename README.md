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

1. [阿根廷球员偷看英格兰战术小抄 (Argentina players peek at England tactics cheat sheet)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E5%91%98%E5%81%B7%E7%9C%8B%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%88%98%E6%9C%AF%E5%B0%8F%E6%8A%84%23) `2.1M 🔥` `NEW`
1. [徐刘蔚被查](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%88%98%E8%94%9A%E8%A2%AB%E6%9F%A5%23) `980.5K 🔥` `NEW`
1. [上半年经济高质量发展向新向优](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E7%BB%8F%E6%B5%8E%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `778.5K 🔥` `NEW`
1. [2026全球资本峰会](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E7%90%83%E8%B5%84%E6%9C%AC%E5%B3%B0%E4%BC%9A%23) `774.8K 🔥` `NEW`
1. [父母离婚孩子想跟爸爸被法院驳回](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E5%AD%A9%E5%AD%90%E6%83%B3%E8%B7%9F%E7%88%B8%E7%88%B8%E8%A2%AB%E6%B3%95%E9%99%A2%E9%A9%B3%E5%9B%9E%23) `700.5K 🔥` `NEW`
1. [校园V计划](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E5%9B%ADV%E8%AE%A1%E5%88%92%23) `619.4K 🔥` `NEW`
1. [曾硬刚王健林的80后干部被查](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%A1%AC%E5%88%9A%E7%8E%8B%E5%81%A5%E6%9E%97%E7%9A%8480%E5%90%8E%E5%B9%B2%E9%83%A8%E8%A2%AB%E6%9F%A5%23) `612.2K 🔥` `NEW`
1. [突然觉得有车真的很方便](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E6%9C%89%E8%BD%A6%E7%9C%9F%E7%9A%84%E5%BE%88%E6%96%B9%E4%BE%BF%23) `606.6K 🔥` `NEW`
1. [王楚钦孙颖莎晋级全锦赛16强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%99%8B%E7%BA%A7%E5%85%A8%E9%94%A6%E8%B5%9B16%E5%BC%BA%23) `567.4K 🔥` `NEW`
1. [迪丽热巴电影红利](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%B5%E5%BD%B1%E7%BA%A2%E5%88%A9%23) `566.4K 🔥` `NEW`
1. [A股 (A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `561.3K 🔥` `NEW`
1. [TF家族运动会直播](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%9B%B4%E6%92%AD%23) `560.4K 🔥` `NEW`
1. [长鑫科技中签](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%23) `555.3K 🔥` `NEW`
1. [曝白鹿新宣传是迪丽热巴宣传](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E6%96%B0%E5%AE%A3%E4%BC%A0%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AE%A3%E4%BC%A0%23) `553.8K 🔥` `NEW`
1. [穆祉丞进场镜头切王橹杰](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%9B%E5%9C%BA%E9%95%9C%E5%A4%B4%E5%88%87%E7%8E%8B%E6%A9%B9%E6%9D%B0%23) `551.7K 🔥` `NEW`
1. [没有人哭是为了解决问题](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BA%BA%E5%93%AD%E6%98%AF%E4%B8%BA%E4%BA%86%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98%23) `549.7K 🔥` `NEW`
1. [贺峻霖靠张真源赚孟子义八十](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E9%9D%A0%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%B5%9A%E5%AD%9F%E5%AD%90%E4%B9%89%E5%85%AB%E5%8D%81%23) `547.0K 🔥` `NEW`
1. [AI手机概念爆发](https://s.weibo.com/weibo?q=%23AI%E6%89%8B%E6%9C%BA%E6%A6%82%E5%BF%B5%E7%88%86%E5%8F%91%23) `546.3K 🔥` `NEW`
1. [博士沦为高学历流民](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E5%A3%AB%E6%B2%A6%E4%B8%BA%E9%AB%98%E5%AD%A6%E5%8E%86%E6%B5%81%E6%B0%91%23) `542.3K 🔥` `NEW`
1. [TF家族运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `542.2K 🔥` `NEW`
1. [46岁教师脱产读博6年毕业前去世 (The 46-year-old teacher died before graduating after 6 years of full-time study for a Ph.D.)](https://s.weibo.com/weibo?q=%2346%E5%B2%81%E6%95%99%E5%B8%88%E8%84%B1%E4%BA%A7%E8%AF%BB%E5%8D%9A6%E5%B9%B4%E6%AF%95%E4%B8%9A%E5%89%8D%E5%8E%BB%E4%B8%96%23) `508.5K 🔥` `NEW`
1. [朱志鑫 青苹果](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E9%9D%92%E8%8B%B9%E6%9E%9C%23) `505.5K 🔥` `NEW`
1. [TF运动会灯牌](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%81%AF%E7%89%8C%23) `453.9K 🔥` `NEW`
1. [王玉雯官方身高172](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%AE%98%E6%96%B9%E8%BA%AB%E9%AB%98172%23) `378.8K 🔥` `NEW`
1. [残血版iPhone](https://s.weibo.com/weibo?q=%23%E6%AE%8B%E8%A1%80%E7%89%88iPhone%23) `377.4K 🔥` `NEW`
1. [终末地最管饱的一集](https://s.weibo.com/weibo?q=%23%E7%BB%88%E6%9C%AB%E5%9C%B0%E6%9C%80%E7%AE%A1%E9%A5%B1%E7%9A%84%E4%B8%80%E9%9B%86%23) `376.2K 🔥` `NEW`
1. [极氪9X五座版28日直接开启大定](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA9X%E4%BA%94%E5%BA%A7%E7%89%8828%E6%97%A5%E7%9B%B4%E6%8E%A5%E5%BC%80%E5%90%AF%E5%A4%A7%E5%AE%9A%23) `375.1K 🔥` `NEW`
1. [女子收男友自愿转账118万分手被判还](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%94%B6%E7%94%B7%E5%8F%8B%E8%87%AA%E6%84%BF%E8%BD%AC%E8%B4%A6118%E4%B8%87%E5%88%86%E6%89%8B%E8%A2%AB%E5%88%A4%E8%BF%98%23) `373.8K 🔥` `NEW`
1. [周杰伦王俊凯演唱会想看榜前二](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%83%B3%E7%9C%8B%E6%A6%9C%E5%89%8D%E4%BA%8C%23) `371.6K 🔥` `NEW`
1. [张桂源举牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E4%B8%BE%E7%89%8C%23) `371.2K 🔥` `NEW`
1. [离婚十大原因婚外情居首 (Top ten reasons for divorce, extramarital affairs top the list)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%8D%81%E5%A4%A7%E5%8E%9F%E5%9B%A0%E5%A9%9A%E5%A4%96%E6%83%85%E5%B1%85%E9%A6%96%23) `370.3K 🔥` `NEW`
1. [侯明昊艾米雀骨吻戏代餐](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%89%BE%E7%B1%B3%E9%9B%80%E9%AA%A8%E5%90%BB%E6%88%8F%E4%BB%A3%E9%A4%90%23) `357.0K 🔥` `NEW`
1. [俄核电站总工程师遇袭身亡](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%A0%B8%E7%94%B5%E7%AB%99%E6%80%BB%E5%B7%A5%E7%A8%8B%E5%B8%88%E9%81%87%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `353.3K 🔥` `NEW`
1. [豆包就是这样糊弄人的](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B0%B1%E6%98%AF%E8%BF%99%E6%A0%B7%E7%B3%8A%E5%BC%84%E4%BA%BA%E7%9A%84%23) `343.7K 🔥` `NEW`
1. [女子银行卡莫名转进千万又分批转出](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%93%B6%E8%A1%8C%E5%8D%A1%E8%8E%AB%E5%90%8D%E8%BD%AC%E8%BF%9B%E5%8D%83%E4%B8%87%E5%8F%88%E5%88%86%E6%89%B9%E8%BD%AC%E5%87%BA%23) `337.1K 🔥` `NEW`
1. [维多利亚安慰贝克汉姆](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A4%9A%E5%88%A9%E4%BA%9A%E5%AE%89%E6%85%B0%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%23) `334.4K 🔥` `NEW`
1. [TF运动会出图](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%87%BA%E5%9B%BE%23) `327.3K 🔥` `NEW`
1. [贝林厄姆赛后道歉](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E8%B5%9B%E5%90%8E%E9%81%93%E6%AD%89%23) `326.6K 🔥` `NEW`
1. [陈浚铭卷毛小狗](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E5%8D%B7%E6%AF%9B%E5%B0%8F%E7%8B%97%23) `323.8K 🔥` `NEW`
1. [月薪6万 001号老君山云海观察员定了](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA6%E4%B8%87%20001%E5%8F%B7%E8%80%81%E5%90%9B%E5%B1%B1%E4%BA%91%E6%B5%B7%E8%A7%82%E5%AF%9F%E5%91%98%E5%AE%9A%E4%BA%86%23) `300.4K 🔥` `NEW`
1. [左奇函运动会初恋皮 (Zuo Qihan's first love leather at sports meeting)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%88%9D%E6%81%8B%E7%9A%AE%23) `289.4K 🔥` `NEW`
1. [偷票房 (Steal the box office)](https://s.weibo.com/weibo?q=%23%E5%81%B7%E7%A5%A8%E6%88%BF%23) `760.1K 🔥` `+90%`
1. [于正回应白鹿到期不续](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E5%88%B0%E6%9C%9F%E4%B8%8D%E7%BB%AD%23) `564.6K 🔥` `+43%`
1. [张天陈奕辰分手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E9%99%88%E5%A5%95%E8%BE%B0%E5%88%86%E6%89%8B%23) `558.2K 🔥` `+38%`
1. [于正回应哭晕在厕所](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E5%93%AD%E6%99%95%E5%9C%A8%E5%8E%95%E6%89%80%23) `524.2K 🔥` `+39%`
1. [陈伟霆MV女主是章若楠](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86MV%E5%A5%B3%E4%B8%BB%E6%98%AF%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `378.4K 🔥`
1. [男子酒后刺死妻子儿子出具谅解书](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E5%88%BA%E6%AD%BB%E5%A6%BB%E5%AD%90%E5%84%BF%E5%AD%90%E5%87%BA%E5%85%B7%E8%B0%85%E8%A7%A3%E4%B9%A6%23) `364.3K 🔥`
1. [阿根廷或遭罚 (Argentina may be punished)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%88%96%E9%81%AD%E7%BD%9A%23) `638.2K 🔥` `-77%`
1. [贝林厄姆打人疑似被西语脏话激怒](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E6%89%93%E4%BA%BA%E7%96%91%E4%BC%BC%E8%A2%AB%E8%A5%BF%E8%AF%AD%E8%84%8F%E8%AF%9D%E6%BF%80%E6%80%92%23) `384.0K 🔥` `-59%`
1. [开到荼蘼](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%23) `298.8K 🔥` `-27%`
1. [贝林厄姆 赛后打人](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E8%B5%9B%E5%90%8E%E6%89%93%E4%BA%BA%23) `297.7K 🔥` `-67%`
1. [冉莹颖人设](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%BA%BA%E8%AE%BE%23) `280.8K 🔥` `-27%`

Updated at 2026-07-16 14:39:55

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
