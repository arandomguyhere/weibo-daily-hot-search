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

1. [曝浪姐三公不直播 (It is revealed that Sister Lang and her husband are not live broadcasting)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E4%B8%8D%E7%9B%B4%E6%92%AD%23) `936.0K 🔥` `NEW`
1. [八千多的手机拍照也不行啊](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%8D%83%E5%A4%9A%E7%9A%84%E6%89%8B%E6%9C%BA%E6%8B%8D%E7%85%A7%E4%B9%9F%E4%B8%8D%E8%A1%8C%E5%95%8A%23) `821.3K 🔥` `NEW`
1. [假日经济点燃消费热潮](https://s.weibo.com/weibo?q=%23%E5%81%87%E6%97%A5%E7%BB%8F%E6%B5%8E%E7%82%B9%E7%87%83%E6%B6%88%E8%B4%B9%E7%83%AD%E6%BD%AE%23) `516.3K 🔥` `NEW`
1. [王心凌 甜上甜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E5%87%8C%20%E7%94%9C%E4%B8%8A%E7%94%9C%23) `516.0K 🔥` `NEW`
1. [刘维去谢娜演唱会被指忘本](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BB%B4%E5%8E%BB%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E6%8C%87%E5%BF%98%E6%9C%AC%23) `515.4K 🔥` `NEW`
1. [浪姐第三次公演播出调整](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%AC%AC%E4%B8%89%E6%AC%A1%E5%85%AC%E6%BC%94%E6%92%AD%E5%87%BA%E8%B0%83%E6%95%B4%23) `513.7K 🔥` `NEW`
1. [微信未读语音消息变灰](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%AA%E8%AF%BB%E8%AF%AD%E9%9F%B3%E6%B6%88%E6%81%AF%E5%8F%98%E7%81%B0%23) `511.0K 🔥` `NEW`
1. [贵州蘸水](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E8%98%B8%E6%B0%B4%23) `432.4K 🔥` `NEW`
1. [榴莲遭仅退款商家驱车1600公里找买家](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E9%A9%B1%E8%BD%A61600%E5%85%AC%E9%87%8C%E6%89%BE%E4%B9%B0%E5%AE%B6%23) `403.3K 🔥` `NEW`
1. [胖东来1公斤黄樱桃416元](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A51%E5%85%AC%E6%96%A4%E9%BB%84%E6%A8%B1%E6%A1%83416%E5%85%83%23) `399.2K 🔥` `NEW`
1. [当你意识到自己无法升职时 (When you realize you can't get promoted)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E6%97%A0%E6%B3%95%E5%8D%87%E8%81%8C%E6%97%B6%23) `331.7K 🔥` `NEW`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `329.9K 🔥` `NEW`
1. [安崎晕倒](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E6%99%95%E5%80%92%23) `328.8K 🔥` `NEW`
1. [男童凌晨4点抱被子街头哭泣独行](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E5%87%8C%E6%99%A84%E7%82%B9%E6%8A%B1%E8%A2%AB%E5%AD%90%E8%A1%97%E5%A4%B4%E5%93%AD%E6%B3%A3%E7%8B%AC%E8%A1%8C%23) `325.6K 🔥` `NEW`
1. [薛之谦点赞了和刘维的合照](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E7%82%B9%E8%B5%9E%E4%BA%86%E5%92%8C%E5%88%98%E7%BB%B4%E7%9A%84%E5%90%88%E7%85%A7%23) `322.8K 🔥` `NEW`
1. [王菲新歌 听笑了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%96%B0%E6%AD%8C%20%E5%90%AC%E7%AC%91%E4%BA%86%23) `319.0K 🔥` `NEW`
1. [皇马内讧](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%86%85%E8%AE%A7%23) `317.3K 🔥` `NEW`
1. [李现张婧仪吻戏](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%90%BB%E6%88%8F%23) `311.1K 🔥` `NEW`
1. [迪丽热巴手臂上还有疫苗印](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%8B%E8%87%82%E4%B8%8A%E8%BF%98%E6%9C%89%E7%96%AB%E8%8B%97%E5%8D%B0%23) `308.2K 🔥` `NEW`
1. [日本街头疑现芬太尼丧尸](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A1%97%E5%A4%B4%E7%96%91%E7%8E%B0%E8%8A%AC%E5%A4%AA%E5%B0%BC%E4%B8%A7%E5%B0%B8%23) `304.1K 🔥` `NEW`
1. [除了全李还有又庭希堓喆翡桠朵酒店 (In addition to Quanli, there is also Youting Xizhe Feijiaduo Hotel)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E4%BA%86%E5%85%A8%E6%9D%8E%E8%BF%98%E6%9C%89%E5%8F%88%E5%BA%AD%E5%B8%8C%E5%A0%93%E5%96%86%E7%BF%A1%E6%A1%A0%E6%9C%B5%E9%85%92%E5%BA%97%23) `289.3K 🔥` `NEW`
1. [孙亚龙 dys变天](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%20dys%E5%8F%98%E5%A4%A9%23) `287.4K 🔥` `NEW`
1. [小区531户仅25户交物业费业主发声](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA531%E6%88%B7%E4%BB%8525%E6%88%B7%E4%BA%A4%E7%89%A9%E4%B8%9A%E8%B4%B9%E4%B8%9A%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `284.4K 🔥` `NEW`
1. [庄法受伤](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E5%8F%97%E4%BC%A4%23) `263.1K 🔥` `NEW`
1. [演员最好的固粉手段](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%9C%80%E5%A5%BD%E7%9A%84%E5%9B%BA%E7%B2%89%E6%89%8B%E6%AE%B5%23) `256.6K 🔥` `NEW`
1. [印尼惊现罕见的彩虹云刷爆全网](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E6%83%8A%E7%8E%B0%E7%BD%95%E8%A7%81%E7%9A%84%E5%BD%A9%E8%99%B9%E4%BA%91%E5%88%B7%E7%88%86%E5%85%A8%E7%BD%91%23) `239.2K 🔥` `NEW`
1. [宁艺卓到韩国第二天就和SM签约](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%88%B0%E9%9F%A9%E5%9B%BD%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%B0%B1%E5%92%8CSM%E7%AD%BE%E7%BA%A6%23) `236.6K 🔥` `NEW`
1. [喀什恋歌大结局](https://s.weibo.com/weibo?q=%23%E5%96%80%E4%BB%80%E6%81%8B%E6%AD%8C%E5%A4%A7%E7%BB%93%E5%B1%80%23) `234.7K 🔥` `NEW`
1. [孙颖莎连得10分逆转取胜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%9E%E5%BE%9710%E5%88%86%E9%80%86%E8%BD%AC%E5%8F%96%E8%83%9C%23) `171.8K 🔥` `NEW`
1. [朴秀荣Crush晒照秀恩爱](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E7%A7%80%E8%8D%A3Crush%E6%99%92%E7%85%A7%E7%A7%80%E6%81%A9%E7%88%B1%23) `167.5K 🔥` `NEW`
1. [演唱会卫生间配了卫生巾的明星 (Celebrities with sanitary napkins in the concert bathroom)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8D%AB%E7%94%9F%E9%97%B4%E9%85%8D%E4%BA%86%E5%8D%AB%E7%94%9F%E5%B7%BE%E7%9A%84%E6%98%8E%E6%98%9F%23) `158.7K 🔥` `NEW`
1. [Kid回应合同](https://s.weibo.com/weibo?q=%23Kid%E5%9B%9E%E5%BA%94%E5%90%88%E5%90%8C%23) `157.0K 🔥` `NEW`
1. [白鹿卢昱晓 抖音下沉市场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%A2%E6%98%B1%E6%99%93%20%E6%8A%96%E9%9F%B3%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23) `154.4K 🔥` `NEW`
1. [男子回应房子没盖完钢筋发芽了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E6%88%BF%E5%AD%90%E6%B2%A1%E7%9B%96%E5%AE%8C%E9%92%A2%E7%AD%8B%E5%8F%91%E8%8A%BD%E4%BA%86%23) `137.3K 🔥` `NEW`
1. [14岁男孩为父庆生饮酒后翻窗坠亡](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E5%AD%A9%E4%B8%BA%E7%88%B6%E5%BA%86%E7%94%9F%E9%A5%AE%E9%85%92%E5%90%8E%E7%BF%BB%E7%AA%97%E5%9D%A0%E4%BA%A1%23) `134.4K 🔥` `NEW`
1. [Jisoo晒blackpink四人合照](https://s.weibo.com/weibo?q=%23Jisoo%E6%99%92blackpink%E5%9B%9B%E4%BA%BA%E5%90%88%E7%85%A7%23) `133.6K 🔥` `NEW`
1. [南部档案定档时间](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E5%AE%9A%E6%A1%A3%E6%97%B6%E9%97%B4%23) `130.0K 🔥` `NEW`
1. [JieJie 活着](https://s.weibo.com/weibo?q=%23JieJie%20%E6%B4%BB%E7%9D%80%23) `127.5K 🔥` `NEW`
1. [无锡街采采访到张凌赫表弟](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E8%A1%97%E9%87%87%E9%87%87%E8%AE%BF%E5%88%B0%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A1%A8%E5%BC%9F%23) `127.4K 🔥` `NEW`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `123.1K 🔥` `NEW`
1. [日本男团3比1德国男团 (Japanese men's team 3 to 1 German men's team)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E5%9B%A23%E6%AF%941%E5%BE%B7%E5%9B%BD%E7%94%B7%E5%9B%A2%23) `116.7K 🔥` `NEW`
1. [桃花坞11个新人6个综艺首秀](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E11%E4%B8%AA%E6%96%B0%E4%BA%BA6%E4%B8%AA%E7%BB%BC%E8%89%BA%E9%A6%96%E7%A7%80%23) `116.2K 🔥` `NEW`
1. [张凌赫凭一己之力带火横店烤肉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%AD%E4%B8%80%E5%B7%B1%E4%B9%8B%E5%8A%9B%E5%B8%A6%E7%81%AB%E6%A8%AA%E5%BA%97%E7%83%A4%E8%82%89%23) `115.6K 🔥` `NEW`
1. [县纪委回应镇干部受同事邀钓鱼溺亡](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E7%BA%AA%E5%A7%94%E5%9B%9E%E5%BA%94%E9%95%87%E5%B9%B2%E9%83%A8%E5%8F%97%E5%90%8C%E4%BA%8B%E9%82%80%E9%92%93%E9%B1%BC%E6%BA%BA%E4%BA%A1%23) `114.9K 🔥` `NEW`
1. [虞书欣洛杉矶GOLDGALA](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B4%9B%E6%9D%89%E7%9F%B6GOLDGALA%23) `114.2K 🔥` `NEW`
1. [西卡退休](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%8D%A1%E9%80%80%E4%BC%91%23) `109.0K 🔥` `NEW`
1. [王嘉尔吃垃圾食品食物中毒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E5%9E%83%E5%9C%BE%E9%A3%9F%E5%93%81%E9%A3%9F%E7%89%A9%E4%B8%AD%E6%AF%92%23) `107.3K 🔥` `NEW`
1. [尘白禁区](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%23) `105.2K 🔥` `NEW`
1. [魏凤和案李尚福案一审宣判](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%87%A4%E5%92%8C%E6%A1%88%E6%9D%8E%E5%B0%9A%E7%A6%8F%E6%A1%88%E4%B8%80%E5%AE%A1%E5%AE%A3%E5%88%A4%23) `104.9K 🔥` `NEW`
1. [张本智和一单两分](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E4%B8%80%E5%8D%95%E4%B8%A4%E5%88%86%23) `104.9K 🔥` `NEW`
1. [汉坦病毒首发病例感染轨迹曝光 (Infection trajectory of first hantavirus case exposed)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%A6%96%E5%8F%91%E7%97%85%E4%BE%8B%E6%84%9F%E6%9F%93%E8%BD%A8%E8%BF%B9%E6%9B%9D%E5%85%89%23) `101.2K 🔥` `NEW`

Updated at 2026-05-08 00:28:42

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
