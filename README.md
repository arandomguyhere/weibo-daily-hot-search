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

1. [新公路之王奥迪E7X预售 (Pre-sale of the new king of the road Audi E7X)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%85%AC%E8%B7%AF%E4%B9%8B%E7%8E%8B%E5%A5%A5%E8%BF%AAE7X%E9%A2%84%E5%94%AE%23) `170.0K 🔥` `NEW`
1. [景区辟谣过山车忙到冒烟起火](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E8%BE%9F%E8%B0%A3%E8%BF%87%E5%B1%B1%E8%BD%A6%E5%BF%99%E5%88%B0%E5%86%92%E7%83%9F%E8%B5%B7%E7%81%AB%23) `56.0K 🔥` `NEW`
1. [乘风节目组启动交通酒店退费补偿](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E8%8A%82%E7%9B%AE%E7%BB%84%E5%90%AF%E5%8A%A8%E4%BA%A4%E9%80%9A%E9%85%92%E5%BA%97%E9%80%80%E8%B4%B9%E8%A1%A5%E5%81%BF%23) `27.1K 🔥` `NEW`
1. [假日经济点燃消费热潮](https://s.weibo.com/weibo?q=%23%E5%81%87%E6%97%A5%E7%BB%8F%E6%B5%8E%E7%82%B9%E7%87%83%E6%B6%88%E8%B4%B9%E7%83%AD%E6%BD%AE%23) `171.0K 🔥` `+38%`
1. [刘维去谢娜演唱会被指忘本](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BB%B4%E5%8E%BB%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E6%8C%87%E5%BF%98%E6%9C%AC%23) `168.8K 🔥` `+45%`
1. [微信未读语音消息变灰](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%AA%E8%AF%BB%E8%AF%AD%E9%9F%B3%E6%B6%88%E6%81%AF%E5%8F%98%E7%81%B0%23) `186.9K 🔥`
1. [八千多的手机拍照也不行啊](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%8D%83%E5%A4%9A%E7%9A%84%E6%89%8B%E6%9C%BA%E6%8B%8D%E7%85%A7%E4%B9%9F%E4%B8%8D%E8%A1%8C%E5%95%8A%23) `177.3K 🔥`
1. [当你意识到自己无法升职时 (When you realize you can't get promoted)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E6%97%A0%E6%B3%95%E5%8D%87%E8%81%8C%E6%97%B6%23) `54.4K 🔥`
1. [演唱会卫生间配了卫生巾的明星 (Celebrities with sanitary napkins in the concert bathroom)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8D%AB%E7%94%9F%E9%97%B4%E9%85%8D%E4%BA%86%E5%8D%AB%E7%94%9F%E5%B7%BE%E7%9A%84%E6%98%8E%E6%98%9F%23) `49.2K 🔥`
1. [安崎晕倒](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E6%99%95%E5%80%92%23) `46.2K 🔥`
1. [华人夫妇在美国豪宅离奇失踪一年](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%A4%AB%E5%A6%87%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%B1%AA%E5%AE%85%E7%A6%BB%E5%A5%87%E5%A4%B1%E8%B8%AA%E4%B8%80%E5%B9%B4%23) `46.0K 🔥`
1. [曝浪姐三公不直播 (It is revealed that Sister Lang and her husband are not live broadcasting)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E4%B8%8D%E7%9B%B4%E6%92%AD%23) `45.9K 🔥`
1. [孙杨坚持要回电车乘车点的原因](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%9D%9A%E6%8C%81%E8%A6%81%E5%9B%9E%E7%94%B5%E8%BD%A6%E4%B9%98%E8%BD%A6%E7%82%B9%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `45.8K 🔥`
1. [印尼惊现罕见的彩虹云刷爆全网 (A rare rainbow cloud appears in Indonesia and breaks the internet)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E6%83%8A%E7%8E%B0%E7%BD%95%E8%A7%81%E7%9A%84%E5%BD%A9%E8%99%B9%E4%BA%91%E5%88%B7%E7%88%86%E5%85%A8%E7%BD%91%23) `45.5K 🔥`
1. [李现张婧仪吻戏](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%90%BB%E6%88%8F%23) `37.2K 🔥`
1. [小区531户仅25户交物业费业主发声](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA531%E6%88%B7%E4%BB%8525%E6%88%B7%E4%BA%A4%E7%89%A9%E4%B8%9A%E8%B4%B9%E4%B8%9A%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `34.3K 🔥`
1. [李雪琴徐志胜说孟子义现在太红了 (Li Xueqin and Xu Zhisheng said that Meng Ziyi is too popular now)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%BE%90%E5%BF%97%E8%83%9C%E8%AF%B4%E5%AD%9F%E5%AD%90%E4%B9%89%E7%8E%B0%E5%9C%A8%E5%A4%AA%E7%BA%A2%E4%BA%86%23) `33.0K 🔥`
1. [皇马内讧 (Real Madrid internal strife)](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%86%85%E8%AE%A7%23) `31.9K 🔥`
1. [14岁男孩为父庆生饮酒后翻窗坠亡](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E5%AD%A9%E4%B8%BA%E7%88%B6%E5%BA%86%E7%94%9F%E9%A5%AE%E9%85%92%E5%90%8E%E7%BF%BB%E7%AA%97%E5%9D%A0%E4%BA%A1%23) `30.4K 🔥`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `30.4K 🔥`
1. [高反被掐人中后打人女子称已报警 (The woman who was a high-profile rebel who was pinched and then beaten said she had called the police)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%8D%E8%A2%AB%E6%8E%90%E4%BA%BA%E4%B8%AD%E5%90%8E%E6%89%93%E4%BA%BA%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `29.9K 🔥`
1. [魏凤和案李尚福案一审宣判](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%87%A4%E5%92%8C%E6%A1%88%E6%9D%8E%E5%B0%9A%E7%A6%8F%E6%A1%88%E4%B8%80%E5%AE%A1%E5%AE%A3%E5%88%A4%23) `28.6K 🔥`
1. [Kid回应合同](https://s.weibo.com/weibo?q=%23Kid%E5%9B%9E%E5%BA%94%E5%90%88%E5%90%8C%23) `28.5K 🔥`
1. [浪姐第三次公演播出调整](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%AC%AC%E4%B8%89%E6%AC%A1%E5%85%AC%E6%BC%94%E6%92%AD%E5%87%BA%E8%B0%83%E6%95%B4%23) `28.4K 🔥`
1. [乘风2026推迟直播录制 (Chengfeng 2026 postpones live broadcast recording)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E6%8E%A8%E8%BF%9F%E7%9B%B4%E6%92%AD%E5%BD%95%E5%88%B6%23) `27.9K 🔥`
1. [真诚是一种筛选手段](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E8%AF%9A%E6%98%AF%E4%B8%80%E7%A7%8D%E7%AD%9B%E9%80%89%E6%89%8B%E6%AE%B5%23) `27.3K 🔥`
1. [男子冒充小姐姐引诱少女发私密照](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%86%92%E5%85%85%E5%B0%8F%E5%A7%90%E5%A7%90%E5%BC%95%E8%AF%B1%E5%B0%91%E5%A5%B3%E5%8F%91%E7%A7%81%E5%AF%86%E7%85%A7%23) `25.5K 🔥`
1. [孙颖莎Bestplayer (Sun Yingsha Bestplayer)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EBestplayer%23) `25.5K 🔥`
1. [雾里青](https://s.weibo.com/weibo?q=%23%E9%9B%BE%E9%87%8C%E9%9D%92%23) `25.5K 🔥`
1. [西卡退休](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%8D%A1%E9%80%80%E4%BC%91%23) `25.5K 🔥`
1. [JieJie 活着 (JieJie is alive)](https://s.weibo.com/weibo?q=%23JieJie%20%E6%B4%BB%E7%9D%80%23) `25.5K 🔥`
1. [张本智和一单两分](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E4%B8%80%E5%8D%95%E4%B8%A4%E5%88%86%23) `25.5K 🔥`
1. [郑钦文晋级罗马赛32强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%99%8B%E7%BA%A7%E7%BD%97%E9%A9%AC%E8%B5%9B32%E5%BC%BA%23) `25.4K 🔥`
1. [桃花坞11个新人6个综艺首秀](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E11%E4%B8%AA%E6%96%B0%E4%BA%BA6%E4%B8%AA%E7%BB%BC%E8%89%BA%E9%A6%96%E7%A7%80%23) `25.4K 🔥`
1. [王菲新歌 听笑了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%96%B0%E6%AD%8C%20%E5%90%AC%E7%AC%91%E4%BA%86%23) `72.9K 🔥` `-29%`
1. [胖东来1公斤黄樱桃416元 (Pangdonglai 1kg yellow cherries 416 yuan)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A51%E5%85%AC%E6%96%A4%E9%BB%84%E6%A8%B1%E6%A1%83416%E5%85%83%23) `59.0K 🔥` `-25%`
1. [贵州蘸水](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E8%98%B8%E6%B0%B4%23) `46.6K 🔥` `-21%`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `46.5K 🔥` `-33%`
1. [榴莲遭仅退款商家驱车1600公里找买家](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E9%A9%B1%E8%BD%A61600%E5%85%AC%E9%87%8C%E6%89%BE%E4%B9%B0%E5%AE%B6%23) `46.5K 🔥` `-27%`
1. [男童凌晨4点抱被子街头哭泣独行 (A boy hugged a quilt and cried alone on the street at 4 a.m.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E5%87%8C%E6%99%A84%E7%82%B9%E6%8A%B1%E8%A2%AB%E5%AD%90%E8%A1%97%E5%A4%B4%E5%93%AD%E6%B3%A3%E7%8B%AC%E8%A1%8C%23) `46.3K 🔥` `-26%`
1. [日本街头疑现芬太尼丧尸 (Fentanyl-laced zombies suspected to be found on Japanese streets)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A1%97%E5%A4%B4%E7%96%91%E7%8E%B0%E8%8A%AC%E5%A4%AA%E5%B0%BC%E4%B8%A7%E5%B0%B8%23) `45.6K 🔥` `-43%`
1. [孙亚龙 dys变天](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%20dys%E5%8F%98%E5%A4%A9%23) `40.4K 🔥` `-30%`
1. [汉坦病毒首发病例感染轨迹曝光 (Infection trajectory of first hantavirus case exposed)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%A6%96%E5%8F%91%E7%97%85%E4%BE%8B%E6%84%9F%E6%9F%93%E8%BD%A8%E8%BF%B9%E6%9B%9D%E5%85%89%23) `31.2K 🔥` `-25%`
1. [喀什恋歌大结局](https://s.weibo.com/weibo?q=%23%E5%96%80%E4%BB%80%E6%81%8B%E6%AD%8C%E5%A4%A7%E7%BB%93%E5%B1%80%23) `30.8K 🔥` `-21%`
1. [运城遇害女教师丈夫22年后被判无期](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%9F%8E%E9%81%87%E5%AE%B3%E5%A5%B3%E6%95%99%E5%B8%88%E4%B8%88%E5%A4%AB22%E5%B9%B4%E5%90%8E%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `28.9K 🔥` `-27%`
1. [尘白禁区](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%23) `28.1K 🔥` `-23%`
1. [如果大米饭只能配一个菜](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E5%A4%A7%E7%B1%B3%E9%A5%AD%E5%8F%AA%E8%83%BD%E9%85%8D%E4%B8%80%E4%B8%AA%E8%8F%9C%23) `25.7K 🔥` `-29%`
1. [庄法受伤](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E5%8F%97%E4%BC%A4%23) `25.5K 🔥` `-33%`
1. [孙颖莎连得10分逆转取胜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%9E%E5%BE%9710%E5%88%86%E9%80%86%E8%BD%AC%E5%8F%96%E8%83%9C%23) `25.5K 🔥` `-29%`
1. [当奶奶吃到了年轻人的零食 (When grandma eats young people’s snacks)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A5%B6%E5%A5%B6%E5%90%83%E5%88%B0%E4%BA%86%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E9%9B%B6%E9%A3%9F%23) `25.5K 🔥` `-22%`
1. [伊朗总统和最高领袖会面 (Iranian President and Supreme Leader Meet)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%92%8C%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E4%BC%9A%E9%9D%A2%23) `25.4K 🔥` `-69%`
1. [男子回应房子没盖完钢筋发芽了 (The man responded that the steel bars sprouted before the house was built.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E6%88%BF%E5%AD%90%E6%B2%A1%E7%9B%96%E5%AE%8C%E9%92%A2%E7%AD%8B%E5%8F%91%E8%8A%BD%E4%BA%86%23) `25.4K 🔥` `-61%`

Updated at 2026-05-08 05:02:55

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
