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

1. [西班牙首相就法国队没法国人道歉 (Spanish Prime Minister apologizes for not having French players in France team)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E5%B0%B1%E6%B3%95%E5%9B%BD%E9%98%9F%E6%B2%A1%E6%B3%95%E5%9B%BD%E4%BA%BA%E9%81%93%E6%AD%89%23) `779.6K 🔥` `NEW`
1. [电视卖不动了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `606.7K 🔥` `NEW`
1. [被郑州的空调外机墙震惊到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%83%91%E5%B7%9E%E7%9A%84%E7%A9%BA%E8%B0%83%E5%A4%96%E6%9C%BA%E5%A2%99%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `578.8K 🔥` `NEW`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `547.6K 🔥` `NEW`
1. [TF家族运动会分队官宣](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%88%86%E9%98%9F%E5%AE%98%E5%AE%A3%23) `520.5K 🔥` `NEW`
1. [吴绮莉公开成龙拒认吴卓林原因](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%BB%AE%E8%8E%89%E5%85%AC%E5%BC%80%E6%88%90%E9%BE%99%E6%8B%92%E8%AE%A4%E5%90%B4%E5%8D%93%E6%9E%97%E5%8E%9F%E5%9B%A0%23) `509.3K 🔥` `NEW`
1. [赵丽颖休息的状态](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%BC%91%E6%81%AF%E7%9A%84%E7%8A%B6%E6%80%81%23) `497.7K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `495.1K 🔥` `NEW`
1. [TOP不参加mini旅综录制](https://s.weibo.com/weibo?q=%23TOP%E4%B8%8D%E5%8F%82%E5%8A%A0mini%E6%97%85%E7%BB%BC%E5%BD%95%E5%88%B6%23) `459.4K 🔥` `NEW`
1. [曾沛慈发了18张浪姐合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%8F%91%E4%BA%8618%E5%BC%A0%E6%B5%AA%E5%A7%90%E5%90%88%E7%85%A7%23) `420.6K 🔥` `NEW`
1. [吴世勋首支solo曲是中文 (Wu Sehun’s first solo song is in Chinese)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E9%A6%96%E6%94%AFsolo%E6%9B%B2%E6%98%AF%E4%B8%AD%E6%96%87%23) `370.7K 🔥` `NEW`
1. [绿队队服](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E9%98%9F%E9%98%9F%E6%9C%8D%23) `338.7K 🔥` `NEW`
1. [黑队](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%98%9F%23) `337.0K 🔥` `NEW`
1. [丈夫私生活混乱妻子怒要给孩子改姓](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%81%E7%94%9F%E6%B4%BB%E6%B7%B7%E4%B9%B1%E5%A6%BB%E5%AD%90%E6%80%92%E8%A6%81%E7%BB%99%E5%AD%A9%E5%AD%90%E6%94%B9%E5%A7%93%23) `326.8K 🔥` `NEW`
1. [TF运动会项目](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%E9%A1%B9%E7%9B%AE%23) `325.6K 🔥` `NEW`
1. [我妈成了AI受害者](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E6%88%90%E4%BA%86AI%E5%8F%97%E5%AE%B3%E8%80%85%23) `290.8K 🔥` `NEW`
1. [迪丽热巴钰珑真的帮到人上厕所](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%E7%9C%9F%E7%9A%84%E5%B8%AE%E5%88%B0%E4%BA%BA%E4%B8%8A%E5%8E%95%E6%89%80%23) `277.8K 🔥` `NEW`
1. [台风美莎克](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BE%8E%E8%8E%8E%E5%85%8B%23) `201.6K 🔥` `NEW`
1. [张真源想要体面一点的安利方式](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%83%B3%E8%A6%81%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E5%AE%89%E5%88%A9%E6%96%B9%E5%BC%8F%23) `198.0K 🔥` `NEW`
1. [偶遇姜潮麦迪娜拍婚纱照](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `175.1K 🔥` `NEW`
1. [凯恩叔叔变成什么样子都喜欢 (I like whatever Uncle Kane looks like.)](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E5%8F%94%E5%8F%94%E5%8F%98%E6%88%90%E4%BB%80%E4%B9%88%E6%A0%B7%E5%AD%90%E9%83%BD%E5%96%9C%E6%AC%A2%23) `174.8K 🔥` `NEW`
1. [丁禹兮刷不到的号](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%88%B7%E4%B8%8D%E5%88%B0%E7%9A%84%E5%8F%B7%23) `174.8K 🔥` `NEW`
1. [唐朝诡事录后又见大唐奇案](https://s.weibo.com/weibo?q=%23%E5%94%90%E6%9C%9D%E8%AF%A1%E4%BA%8B%E5%BD%95%E5%90%8E%E5%8F%88%E8%A7%81%E5%A4%A7%E5%94%90%E5%A5%87%E6%A1%88%23) `167.3K 🔥` `NEW`
1. [阿里回应千问将与苹果AI合作](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%9B%9E%E5%BA%94%E5%8D%83%E9%97%AE%E5%B0%86%E4%B8%8E%E8%8B%B9%E6%9E%9CAI%E5%90%88%E4%BD%9C%23) `163.8K 🔥` `NEW`
1. [何瑞贤在野狗骨头是自己化妆](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%91%9E%E8%B4%A4%E5%9C%A8%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%98%AF%E8%87%AA%E5%B7%B1%E5%8C%96%E5%A6%86%23) `158.8K 🔥` `NEW`
1. [国台办回应两岸统一时间](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%B2%B8%E7%BB%9F%E4%B8%80%E6%97%B6%E9%97%B4%23) `1.1M 🔥` `+289%`
1. [最伤孩子大脑的行为是什么 (What is the most damaging behavior to a child’s brain?)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%BC%A4%E5%AD%A9%E5%AD%90%E5%A4%A7%E8%84%91%E7%9A%84%E8%A1%8C%E4%B8%BA%E6%98%AF%E4%BB%80%E4%B9%88%23) `566.8K 🔥` `+80%`
1. [EWC](https://s.weibo.com/weibo?q=%23EWC%23) `555.1K 🔥` `+27%`
1. [医生提醒这4个小时必须睡觉](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E8%BF%994%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%BF%85%E9%A1%BB%E7%9D%A1%E8%A7%89%23) `417.3K 🔥` `+27%`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `538.6K 🔥`
1. [国企投近900万拍综艺收益仅8600元 (A state-owned enterprise invested nearly 9 million yuan in a variety show and the revenue was only 8,600 yuan.)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E6%8A%95%E8%BF%91900%E4%B8%87%E6%8B%8D%E7%BB%BC%E8%89%BA%E6%94%B6%E7%9B%8A%E4%BB%858600%E5%85%83%23) `518.3K 🔥`
1. [张月陈瑶 我家那闺女](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%20%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `487.4K 🔥`
1. [西班牙进球前一分钟的宇宙级传控 (Spain's cosmic passing control one minute before goal)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%BF%9B%E7%90%83%E5%89%8D%E4%B8%80%E5%88%86%E9%92%9F%E7%9A%84%E5%AE%87%E5%AE%99%E7%BA%A7%E4%BC%A0%E6%8E%A7%23) `422.5K 🔥`
1. [女子煲汤邻居误以为尸臭报警 (Neighbors mistakenly called the police after a woman made soup because she thought the body smelled bad.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%85%B2%E6%B1%A4%E9%82%BB%E5%B1%85%E8%AF%AF%E4%BB%A5%E4%B8%BA%E5%B0%B8%E8%87%AD%E6%8A%A5%E8%AD%A6%23) `360.7K 🔥`
1. [TF家族运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `214.0K 🔥`
1. [工作组赴吉林暴雨洪涝灾区](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E7%BB%84%E8%B5%B4%E5%90%89%E6%9E%97%E6%9A%B4%E9%9B%A8%E6%B4%AA%E6%B6%9D%E7%81%BE%E5%8C%BA%23) `634.0K 🔥` `-51%`
1. [功夫女足 换片源](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E6%8D%A2%E7%89%87%E6%BA%90%23) `568.9K 🔥` `-59%`
1. [DeepSeek工资待遇太恐怖了 (DeepSeek’s salary package is terrible)](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `533.2K 🔥` `-90%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `289.3K 🔥` `-35%`
1. [宁艺卓向韩国捐款](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%90%91%E9%9F%A9%E5%9B%BD%E6%8D%90%E6%AC%BE%23) `288.4K 🔥` `-40%`
1. [苹果AI国行版已过审](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%E5%9B%BD%E8%A1%8C%E7%89%88%E5%B7%B2%E8%BF%87%E5%AE%A1%23) `228.4K 🔥` `-47%`
1. [终于相信林一王俊凯是同龄人了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9B%B8%E4%BF%A1%E6%9E%97%E4%B8%80%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%98%AF%E5%90%8C%E9%BE%84%E4%BA%BA%E4%BA%86%23) `221.5K 🔥` `-59%`
1. [TF四代运动会口号应援](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%8F%A3%E5%8F%B7%E5%BA%94%E6%8F%B4%23) `198.3K 🔥` `-57%`
1. [星穹铁道姬子启行](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E5%A7%AC%E5%AD%90%E5%90%AF%E8%A1%8C%23) `187.2K 🔥` `-28%`
1. [张元英抱臂听讲被骂 (Zhang Yuanying folded her arms while listening and was scolded)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%8A%B1%E8%87%82%E5%90%AC%E8%AE%B2%E8%A2%AB%E9%AA%82%23) `181.9K 🔥` `-48%`
1. [87版红楼梦刘姥姥扮演者去世 (The actor who played Grandma Liu in the 87 version of Dream of Red Mansions passed away)](https://s.weibo.com/weibo?q=%2387%E7%89%88%E7%BA%A2%E6%A5%BC%E6%A2%A6%E5%88%98%E5%A7%A5%E5%A7%A5%E6%89%AE%E6%BC%94%E8%80%85%E5%8E%BB%E4%B8%96%23) `163.6K 🔥` `-60%`
1. [沈阳一小区地库塌陷两栋楼业主撤离](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E4%B8%80%E5%B0%8F%E5%8C%BA%E5%9C%B0%E5%BA%93%E5%A1%8C%E9%99%B7%E4%B8%A4%E6%A0%8B%E6%A5%BC%E4%B8%9A%E4%B8%BB%E6%92%A4%E7%A6%BB%23) `161.2K 🔥` `-63%`
1. [法国不敌西班牙后巴黎等地爆发骚乱 (Riots erupt in Paris and other places after France loses to Spain)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B8%8D%E6%95%8C%E8%A5%BF%E7%8F%AD%E7%89%99%E5%90%8E%E5%B7%B4%E9%BB%8E%E7%AD%89%E5%9C%B0%E7%88%86%E5%8F%91%E9%AA%9A%E4%B9%B1%23) `156.9K 🔥` `-26%`
1. [姆巴佩被法国人追着补水](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%A2%AB%E6%B3%95%E5%9B%BD%E4%BA%BA%E8%BF%BD%E7%9D%80%E8%A1%A5%E6%B0%B4%23) `156.3K 🔥` `-35%`
1. [逐玉一念演唱会官宣 (Zhuyu Yi Nian concert official announcement)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%B8%80%E5%BF%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `155.9K 🔥` `-50%`

Updated at 2026-07-15 19:52:25

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
