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

1. [魏凤和案李尚福案一审宣判 (The first-instance verdict of Wei Fenghe’s case and Li Shangfu’s case was pronounced)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%87%A4%E5%92%8C%E6%A1%88%E6%9D%8E%E5%B0%9A%E7%A6%8F%E6%A1%88%E4%B8%80%E5%AE%A1%E5%AE%A3%E5%88%A4%23) `1.1M 🔥` `NEW`
1. [当你意识到自己无法升职时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E6%97%A0%E6%B3%95%E5%8D%87%E8%81%8C%E6%97%B6%23) `757.4K 🔥` `NEW`
1. [孙颖莎3比2金娜英](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%942%E9%87%91%E5%A8%9C%E8%8B%B1%23) `605.3K 🔥` `NEW`
1. [吴宜泽夺冠金利来赢麻了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%A4%BA%E5%86%A0%E9%87%91%E5%88%A9%E6%9D%A5%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `470.6K 🔥` `NEW`
1. [李雪琴徐志胜说孟子义现在太红了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%BE%90%E5%BF%97%E8%83%9C%E8%AF%B4%E5%AD%9F%E5%AD%90%E4%B9%89%E7%8E%B0%E5%9C%A8%E5%A4%AA%E7%BA%A2%E4%BA%86%23) `324.7K 🔥` `NEW`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `324.5K 🔥` `NEW`
1. [印尼惊现罕见的彩虹云刷爆全网](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E6%83%8A%E7%8E%B0%E7%BD%95%E8%A7%81%E7%9A%84%E5%BD%A9%E8%99%B9%E4%BA%91%E5%88%B7%E7%88%86%E5%85%A8%E7%BD%91%23) `324.3K 🔥` `NEW`
1. [Jisoo晒blackpink四人合照](https://s.weibo.com/weibo?q=%23Jisoo%E6%99%92blackpink%E5%9B%9B%E4%BA%BA%E5%90%88%E7%85%A7%23) `323.6K 🔥` `NEW`
1. [国乒女团进半决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E8%BF%9B%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `323.3K 🔥` `NEW`
1. [伊朗总统和最高领袖会面](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%92%8C%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E4%BC%9A%E9%9D%A2%23) `323.1K 🔥` `NEW`
1. [伊朗最高领袖定调霍尔木兹 (Iran's Supreme Leader Sets Tone in Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%AE%9A%E8%B0%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `321.8K 🔥` `NEW`
1. [被银行员工转走的1800万已全部返还](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E8%BD%AC%E8%B5%B0%E7%9A%841800%E4%B8%87%E5%B7%B2%E5%85%A8%E9%83%A8%E8%BF%94%E8%BF%98%23) `321.4K 🔥` `NEW`
1. [王嘉尔吃垃圾食品食物中毒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E5%9E%83%E5%9C%BE%E9%A3%9F%E5%93%81%E9%A3%9F%E7%89%A9%E4%B8%AD%E6%AF%92%23) `320.9K 🔥` `NEW`
1. [虞书欣洛杉矶GOLDGALA](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B4%9B%E6%9D%89%E7%9F%B6GOLDGALA%23) `283.2K 🔥` `NEW`
1. [国乒女团3比0韩国女团](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A23%E6%AF%940%E9%9F%A9%E5%9B%BD%E5%A5%B3%E5%9B%A2%23) `276.9K 🔥` `NEW`
1. [韩国教练冲孙颖莎连连点头](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%95%99%E7%BB%83%E5%86%B2%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%9E%E8%BF%9E%E7%82%B9%E5%A4%B4%23) `250.2K 🔥` `NEW`
1. [时代少年团辟谣明年单飞](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%BE%9F%E8%B0%A3%E6%98%8E%E5%B9%B4%E5%8D%95%E9%A3%9E%23) `245.5K 🔥` `NEW`
1. [演唱会卫生间配了卫生巾的明星](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8D%AB%E7%94%9F%E9%97%B4%E9%85%8D%E4%BA%86%E5%8D%AB%E7%94%9F%E5%B7%BE%E7%9A%84%E6%98%8E%E6%98%9F%23) `240.4K 🔥` `NEW`
1. [魏凤和李尚福死缓](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%87%A4%E5%92%8C%E6%9D%8E%E5%B0%9A%E7%A6%8F%E6%AD%BB%E7%BC%93%23) `218.4K 🔥` `NEW`
1. [国乒男团上训备战韩国](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E4%B8%8A%E8%AE%AD%E5%A4%87%E6%88%98%E9%9F%A9%E5%9B%BD%23) `218.3K 🔥` `NEW`
1. [迪丽热巴手臂上还有疫苗印 (Dilraba still has vaccine marks on her arm)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%8B%E8%87%82%E4%B8%8A%E8%BF%98%E6%9C%89%E7%96%AB%E8%8B%97%E5%8D%B0%23) `218.3K 🔥` `NEW`
1. [SEVENTEEN下半年入伍](https://s.weibo.com/weibo?q=%23SEVENTEEN%E4%B8%8B%E5%8D%8A%E5%B9%B4%E5%85%A5%E4%BC%8D%23) `199.8K 🔥` `NEW`
1. [豪华邮轮疫情已致8人感染3人死亡](https://s.weibo.com/weibo?q=%23%E8%B1%AA%E5%8D%8E%E9%82%AE%E8%BD%AE%E7%96%AB%E6%83%85%E5%B7%B2%E8%87%B48%E4%BA%BA%E6%84%9F%E6%9F%933%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `199.4K 🔥` `NEW`
1. [申裕斌光捡球了](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%A3%95%E6%96%8C%E5%85%89%E6%8D%A1%E7%90%83%E4%BA%86%23) `195.5K 🔥` `NEW`
1. [西贝回应十年老店关闭](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E5%9B%9E%E5%BA%94%E5%8D%81%E5%B9%B4%E8%80%81%E5%BA%97%E5%85%B3%E9%97%AD%23) `194.1K 🔥` `NEW`
1. [演员最好的固粉手段](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%9C%80%E5%A5%BD%E7%9A%84%E5%9B%BA%E7%B2%89%E6%89%8B%E6%AE%B5%23) `191.4K 🔥` `NEW`
1. [14岁男孩为父庆生饮酒后翻窗坠亡](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E5%AD%A9%E4%B8%BA%E7%88%B6%E5%BA%86%E7%94%9F%E9%A5%AE%E9%85%92%E5%90%8E%E7%BF%BB%E7%AA%97%E5%9D%A0%E4%BA%A1%23) `184.8K 🔥` `NEW`
1. [贺峻霖的神级ID](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%9A%84%E7%A5%9E%E7%BA%A7ID%23) `160.1K 🔥` `NEW`
1. [日本街头疑现芬太尼丧尸](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A1%97%E5%A4%B4%E7%96%91%E7%8E%B0%E8%8A%AC%E5%A4%AA%E5%B0%BC%E4%B8%A7%E5%B0%B8%23) `822.7K 🔥` `+84%`
1. [1岁半女婴私处发育异常险变男孩](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E5%A5%B3%E5%A9%B4%E7%A7%81%E5%A4%84%E5%8F%91%E8%82%B2%E5%BC%82%E5%B8%B8%E9%99%A9%E5%8F%98%E7%94%B7%E5%AD%A9%23) `240.3K 🔥` `+28%`
1. [大国重器硬核升级 (Hard-core upgrade of powerful weapons)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E7%A1%AC%E6%A0%B8%E5%8D%87%E7%BA%A7%23) `772.0K 🔥`
1. [以为晾衣服偏心是很小众的事 (I thought it was a niche thing to be partial to clothes hanging)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%99%BE%E8%A1%A3%E6%9C%8D%E5%81%8F%E5%BF%83%E6%98%AF%E5%BE%88%E5%B0%8F%E4%BC%97%E7%9A%84%E4%BA%8B%23) `514.6K 🔥`
1. [郑钦文vs布克沙](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%B8%83%E5%85%8B%E6%B2%99%23) `206.1K 🔥`
1. [男子被毒蛇咬后打死蛇就医](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E6%AF%92%E8%9B%87%E5%92%AC%E5%90%8E%E6%89%93%E6%AD%BB%E8%9B%87%E5%B0%B1%E5%8C%BB%23) `183.7K 🔥`
1. [汉坦病毒疫情扩散](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E7%96%AB%E6%83%85%E6%89%A9%E6%95%A3%23) `176.4K 🔥`
1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `401.9K 🔥` `-55%`
1. [五一买24件衣服全退光店主心态崩了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E4%B9%B024%E4%BB%B6%E8%A1%A3%E6%9C%8D%E5%85%A8%E9%80%80%E5%85%89%E5%BA%97%E4%B8%BB%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%23) `378.6K 🔥` `-30%`
1. [傅首尔回应被说瘦了像杨紫](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%AF%B4%E7%98%A6%E4%BA%86%E5%83%8F%E6%9D%A8%E7%B4%AB%23) `324.1K 🔥` `-27%`
1. [白鹿卢昱晓 抖音下沉市场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%A2%E6%98%B1%E6%99%93%20%E6%8A%96%E9%9F%B3%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23) `322.8K 🔥` `-28%`
1. [马頔是我们没有辅佐好 (Ma Di, it’s because we didn’t have any help.)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E6%98%AF%E6%88%91%E4%BB%AC%E6%B2%A1%E6%9C%89%E8%BE%85%E4%BD%90%E5%A5%BD%23) `322.5K 🔥` `-28%`
1. [全李酒店已更名](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%8E%E9%85%92%E5%BA%97%E5%B7%B2%E6%9B%B4%E5%90%8D%23) `322.1K 🔥` `-60%`
1. [银行已支付一储户1000万本金利息](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%B7%B2%E6%94%AF%E4%BB%98%E4%B8%80%E5%82%A8%E6%88%B71000%E4%B8%87%E6%9C%AC%E9%87%91%E5%88%A9%E6%81%AF%23) `321.1K 🔥` `-51%`
1. [王曼昱vs申裕斌 (Wang Manyu vs. Shin Yubin)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E7%94%B3%E8%A3%95%E6%96%8C%23) `320.7K 🔥` `-74%`
1. [孙杨张豆豆给我看力竭了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E7%BB%99%E6%88%91%E7%9C%8B%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `318.3K 🔥` `-29%`
1. [新物种广西两头蛇被发现 (New species Guangxi two-headed snake discovered)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%89%A9%E7%A7%8D%E5%B9%BF%E8%A5%BF%E4%B8%A4%E5%A4%B4%E8%9B%87%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `275.0K 🔥` `-38%`
1. [Faker开自定义给自己庆生](https://s.weibo.com/weibo?q=%23Faker%E5%BC%80%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%99%E8%87%AA%E5%B7%B1%E5%BA%86%E7%94%9F%23) `199.3K 🔥` `-51%`
1. [峨眉山景区通报男子猛推猴子](https://s.weibo.com/weibo?q=%23%E5%B3%A8%E7%9C%89%E5%B1%B1%E6%99%AF%E5%8C%BA%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%8C%9B%E6%8E%A8%E7%8C%B4%E5%AD%90%23) `193.2K 🔥` `-53%`
1. [禁止向动物索要食物](https://s.weibo.com/weibo?q=%23%E7%A6%81%E6%AD%A2%E5%90%91%E5%8A%A8%E7%89%A9%E7%B4%A2%E8%A6%81%E9%A3%9F%E7%89%A9%23) `189.7K 🔥` `-58%`
1. [谢娜演唱会卫生间配了卫生巾](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8D%AB%E7%94%9F%E9%97%B4%E9%85%8D%E4%BA%86%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `183.8K 🔥` `-59%`
1. [质子不争](https://s.weibo.com/weibo?q=%23%E8%B4%A8%E5%AD%90%E4%B8%8D%E4%BA%89%23) `160.0K 🔥` `-44%`
1. [救救孙丞潇](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%95%91%E5%AD%99%E4%B8%9E%E6%BD%87%23) `157.3K 🔥` `-48%`

Updated at 2026-05-07 20:03:23

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
