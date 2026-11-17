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

1. [深圳APEC主持人阵容拉满](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3APEC%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%98%B5%E5%AE%B9%E6%8B%89%E6%BB%A1%23) `1.0M 🔥` `NEW`
1. [马斯克确认即将前往中国](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A1%AE%E8%AE%A4%E5%8D%B3%E5%B0%86%E5%89%8D%E5%BE%80%E4%B8%AD%E5%9B%BD%23) `761.0K 🔥` `NEW`
1. [2026APEC这些看点值得期待](https://s.weibo.com/weibo?q=%232026APEC%E8%BF%99%E4%BA%9B%E7%9C%8B%E7%82%B9%E5%80%BC%E5%BE%97%E6%9C%9F%E5%BE%85%23) `618.2K 🔥` `NEW`
1. [雷军APEC发言](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9BAPEC%E5%8F%91%E8%A8%80%23) `444.3K 🔥` `NEW`
1. [金价或跌到7字头](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%88%96%E8%B7%8C%E5%88%B07%E5%AD%97%E5%A4%B4%23) `398.0K 🔥` `NEW`
1. [以为孙千拉腿了直到别人站过来](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E5%AD%99%E5%8D%83%E6%8B%89%E8%85%BF%E4%BA%86%E7%9B%B4%E5%88%B0%E5%88%AB%E4%BA%BA%E7%AB%99%E8%BF%87%E6%9D%A5%23) `397.8K 🔥` `NEW`
1. [清明上河园这波宠客很菊气](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E4%B8%8A%E6%B2%B3%E5%9B%AD%E8%BF%99%E6%B3%A2%E5%AE%A0%E5%AE%A2%E5%BE%88%E8%8F%8A%E6%B0%94%23) `393.6K 🔥` `NEW`
1. [王楚钦12号种子出战香港总决赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A612%E5%8F%B7%E7%A7%8D%E5%AD%90%E5%87%BA%E6%88%98%E9%A6%99%E6%B8%AF%E6%80%BB%E5%86%B3%E8%B5%9B%23) `393.2K 🔥` `NEW`
1. [俄罗斯记者惊呼在深圳谁还用现金啊](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%AE%B0%E8%80%85%E6%83%8A%E5%91%BC%E5%9C%A8%E6%B7%B1%E5%9C%B3%E8%B0%81%E8%BF%98%E7%94%A8%E7%8E%B0%E9%87%91%E5%95%8A%23) `388.9K 🔥` `NEW`
1. [亚太合作如何改变日常生活](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%A4%AA%E5%90%88%E4%BD%9C%E5%A6%82%E4%BD%95%E6%94%B9%E5%8F%98%E6%97%A5%E5%B8%B8%E7%94%9F%E6%B4%BB%23) `386.0K 🔥` `NEW`
1. [虞书欣演唱会](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `383.8K 🔥` `NEW`
1. [杜海涛英语直播 全障碍交流](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B5%B7%E6%B6%9B%E8%8B%B1%E8%AF%AD%E7%9B%B4%E6%92%AD%20%E5%85%A8%E9%9A%9C%E7%A2%8D%E4%BA%A4%E6%B5%81%23) `380.6K 🔥` `NEW`
1. [女子盒马仅退款400次零食堆成山](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9B%92%E9%A9%AC%E4%BB%85%E9%80%80%E6%AC%BE400%E6%AC%A1%E9%9B%B6%E9%A3%9F%E5%A0%86%E6%88%90%E5%B1%B1%23) `375.6K 🔥` `NEW`
1. [腾讯 字节](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%20%E5%AD%97%E8%8A%82%23) `372.1K 🔥` `NEW`
1. [女子KTV遭陌生男搂抱骚扰监控曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90KTV%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E6%90%82%E6%8A%B1%E9%AA%9A%E6%89%B0%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `368.9K 🔥` `NEW`
1. [原来王子璇也高反了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%8E%8B%E5%AD%90%E7%92%87%E4%B9%9F%E9%AB%98%E5%8F%8D%E4%BA%86%23) `366.7K 🔥` `NEW`
1. [曝Gala小明或加入WBG](https://s.weibo.com/weibo?q=%23%E6%9B%9DGala%E5%B0%8F%E6%98%8E%E6%88%96%E5%8A%A0%E5%85%A5WBG%23) `356.7K 🔥` `NEW`
1. [虞书欣2天2起争议是巧合吗](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A32%E5%A4%A92%E8%B5%B7%E4%BA%89%E8%AE%AE%E6%98%AF%E5%B7%A7%E5%90%88%E5%90%97%23) `334.9K 🔥` `NEW`
1. [马斯克真身来中国数字分身赴纽约](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%9C%9F%E8%BA%AB%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%95%B0%E5%AD%97%E5%88%86%E8%BA%AB%E8%B5%B4%E7%BA%BD%E7%BA%A6%23) `326.5K 🔥` `NEW`
1. [Viper无缘S16一阵](https://s.weibo.com/weibo?q=%23Viper%E6%97%A0%E7%BC%98S16%E4%B8%80%E9%98%B5%23) `298.3K 🔥` `NEW`
1. [字节只差一个聊天软件了](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E5%8F%AA%E5%B7%AE%E4%B8%80%E4%B8%AA%E8%81%8A%E5%A4%A9%E8%BD%AF%E4%BB%B6%E4%BA%86%23) `270.1K 🔥` `NEW`
1. [字节 微信](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%20%E5%BE%AE%E4%BF%A1%23) `268.7K 🔥` `NEW`
1. [范丞丞还是老老实实演富二代吧](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%BF%98%E6%98%AF%E8%80%81%E8%80%81%E5%AE%9E%E5%AE%9E%E6%BC%94%E5%AF%8C%E4%BA%8C%E4%BB%A3%E5%90%A7%23) `264.4K 🔥` `NEW`
1. [男性确认被爱的方式和你想的不一样](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%80%A7%E7%A1%AE%E8%AE%A4%E8%A2%AB%E7%88%B1%E7%9A%84%E6%96%B9%E5%BC%8F%E5%92%8C%E4%BD%A0%E6%83%B3%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `257.2K 🔥` `NEW`
1. [深圳人竟给APEC晚宴疯狂安利猪脚饭](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E7%AB%9F%E7%BB%99APEC%E6%99%9A%E5%AE%B4%E7%96%AF%E7%8B%82%E5%AE%89%E5%88%A9%E7%8C%AA%E8%84%9A%E9%A5%AD%23) `256.1K 🔥` `NEW`
1. [秋假](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E5%81%87%23) `249.4K 🔥` `NEW`
1. [字节 无班味聊天软件](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%20%E6%97%A0%E7%8F%AD%E5%91%B3%E8%81%8A%E5%A4%A9%E8%BD%AF%E4%BB%B6%23) `244.3K 🔥` `NEW`
1. [太阳雨德国篇 剧情人设OOC](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E9%98%B3%E9%9B%A8%E5%BE%B7%E5%9B%BD%E7%AF%87%20%E5%89%A7%E6%83%85%E4%BA%BA%E8%AE%BEOOC%23) `242.3K 🔥` `NEW`
1. [满足两个条件暧昧一定会发生](https://s.weibo.com/weibo?q=%23%E6%BB%A1%E8%B6%B3%E4%B8%A4%E4%B8%AA%E6%9D%A1%E4%BB%B6%E6%9A%A7%E6%98%A7%E4%B8%80%E5%AE%9A%E4%BC%9A%E5%8F%91%E7%94%9F%23) `240.1K 🔥` `NEW`
1. [2岁孩子生命最后11天依然努力吃饭](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%AD%A9%E5%AD%90%E7%94%9F%E5%91%BD%E6%9C%80%E5%90%8E11%E5%A4%A9%E4%BE%9D%E7%84%B6%E5%8A%AA%E5%8A%9B%E5%90%83%E9%A5%AD%23) `216.5K 🔥` `NEW`
1. [金价2年后才能重回高位](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B72%E5%B9%B4%E5%90%8E%E6%89%8D%E8%83%BD%E9%87%8D%E5%9B%9E%E9%AB%98%E4%BD%8D%23) `205.0K 🔥` `NEW`
1. [华人双胞胎被不同家庭收养](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%8F%8C%E8%83%9E%E8%83%8E%E8%A2%AB%E4%B8%8D%E5%90%8C%E5%AE%B6%E5%BA%AD%E6%94%B6%E5%85%BB%23) `201.9K 🔥` `NEW`
1. [11岁舞蹈女孩午餐精确到100克](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E8%88%9E%E8%B9%88%E5%A5%B3%E5%AD%A9%E5%8D%88%E9%A4%90%E7%B2%BE%E7%A1%AE%E5%88%B0100%E5%85%8B%23) `196.6K 🔥` `NEW`
1. [2岁孩子告别现场25岁妈妈失声痛哭](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%AD%A9%E5%AD%90%E5%91%8A%E5%88%AB%E7%8E%B0%E5%9C%BA25%E5%B2%81%E5%A6%88%E5%A6%88%E5%A4%B1%E5%A3%B0%E7%97%9B%E5%93%AD%23) `195.3K 🔥` `NEW`
1. [老公熬夜打游戏老婆求助网友截杀其ID](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E7%86%AC%E5%A4%9C%E6%89%93%E6%B8%B8%E6%88%8F%E8%80%81%E5%A9%86%E6%B1%82%E5%8A%A9%E7%BD%91%E5%8F%8B%E6%88%AA%E6%9D%80%E5%85%B6ID%23) `194.5K 🔥` `NEW`
1. [吴磊李昀锐你俩还敢看这一段吗](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E6%9D%8E%E6%98%80%E9%94%90%E4%BD%A0%E4%BF%A9%E8%BF%98%E6%95%A2%E7%9C%8B%E8%BF%99%E4%B8%80%E6%AE%B5%E5%90%97%23) `188.0K 🔥` `NEW`
1. [许飞回应参加声生不息](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%9B%9E%E5%BA%94%E5%8F%82%E5%8A%A0%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%23) `186.7K 🔥` `NEW`
1. [厉娜再晚20分钟银行都下班了](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%86%8D%E6%99%9A20%E5%88%86%E9%92%9F%E9%93%B6%E8%A1%8C%E9%83%BD%E4%B8%8B%E7%8F%AD%E4%BA%86%23) `186.4K 🔥` `NEW`
1. [陈意礼do下巴](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%84%8F%E7%A4%BCdo%E4%B8%8B%E5%B7%B4%23) `180.2K 🔥` `NEW`
1. [雷军晒APEC合照](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%92APEC%E5%90%88%E7%85%A7%23) `165.4K 🔥` `NEW`
1. [孙俪个人美妆品牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E4%B8%AA%E4%BA%BA%E7%BE%8E%E5%A6%86%E5%93%81%E7%89%8C%23) `163.8K 🔥` `NEW`
1. [那年夏天版权和许飞无关](https://s.weibo.com/weibo?q=%23%E9%82%A3%E5%B9%B4%E5%A4%8F%E5%A4%A9%E7%89%88%E6%9D%83%E5%92%8C%E8%AE%B8%E9%A3%9E%E6%97%A0%E5%85%B3%23) `163.7K 🔥` `NEW`
1. [井柏然说谁还没过孩子](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E8%AF%B4%E8%B0%81%E8%BF%98%E6%B2%A1%E8%BF%87%E5%AD%A9%E5%AD%90%23) `163.5K 🔥` `NEW`
1. [漫长的余生女主](https://s.weibo.com/weibo?q=%23%E6%BC%AB%E9%95%BF%E7%9A%84%E4%BD%99%E7%94%9F%E5%A5%B3%E4%B8%BB%23) `162.3K 🔥` `NEW`
1. [Ruler入选S16最佳阵容](https://s.weibo.com/weibo?q=%23Ruler%E5%85%A5%E9%80%89S16%E6%9C%80%E4%BD%B3%E9%98%B5%E5%AE%B9%23) `161.4K 🔥` `NEW`
1. [张一山 一飞机全是明星](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%20%E4%B8%80%E9%A3%9E%E6%9C%BA%E5%85%A8%E6%98%AF%E6%98%8E%E6%98%9F%23) `160.4K 🔥` `NEW`
1. [从100斤瘦到80斤堪比整容](https://s.weibo.com/weibo?q=%23%E4%BB%8E100%E6%96%A4%E7%98%A6%E5%88%B080%E6%96%A4%E5%A0%AA%E6%AF%94%E6%95%B4%E5%AE%B9%23) `159.4K 🔥` `NEW`
1. [腾讯 马化腾](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%20%E9%A9%AC%E5%8C%96%E8%85%BE%23) `155.2K 🔥` `NEW`
1. [信小呆当旅游博主零食测评均失败](https://s.weibo.com/weibo?q=%23%E4%BF%A1%E5%B0%8F%E5%91%86%E5%BD%93%E6%97%85%E6%B8%B8%E5%8D%9A%E4%B8%BB%E9%9B%B6%E9%A3%9F%E6%B5%8B%E8%AF%84%E5%9D%87%E5%A4%B1%E8%B4%A5%23) `154.0K 🔥` `NEW`
1. [8小时600块钱一般人这钱都不敢赚](https://s.weibo.com/weibo?q=%238%E5%B0%8F%E6%97%B6600%E5%9D%97%E9%92%B1%E4%B8%80%E8%88%AC%E4%BA%BA%E8%BF%99%E9%92%B1%E9%83%BD%E4%B8%8D%E6%95%A2%E8%B5%9A%23) `154.0K 🔥` `NEW`
1. [电视如何能挽回年轻人的心](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%A6%82%E4%BD%95%E8%83%BD%E6%8C%BD%E5%9B%9E%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E5%BF%83%23) `154.0K 🔥` `NEW`

Updated at 2026-11-17 18:54:07

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
