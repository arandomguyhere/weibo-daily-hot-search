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

1. [金高银好可惜 (What a pity Kim Go Eun)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%E5%A5%BD%E5%8F%AF%E6%83%9C%23) `229.1K 🔥` `NEW`
1. [李现给张婧仪拍照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%BB%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%8B%8D%E7%85%A7%23) `99.5K 🔥` `NEW`
1. [刘三姐女演员早期采访](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%89%E5%A7%90%E5%A5%B3%E6%BC%94%E5%91%98%E6%97%A9%E6%9C%9F%E9%87%87%E8%AE%BF%23) `93.9K 🔥` `NEW`
1. [王楚钦7比11吴晙诚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A67%E6%AF%9411%E5%90%B4%E6%99%99%E8%AF%9A%23) `93.7K 🔥` `NEW`
1. [习惯高中穿搭的我突然上了大学](https://s.weibo.com/weibo?q=%23%E4%B9%A0%E6%83%AF%E9%AB%98%E4%B8%AD%E7%A9%BF%E6%90%AD%E7%9A%84%E6%88%91%E7%AA%81%E7%84%B6%E4%B8%8A%E4%BA%86%E5%A4%A7%E5%AD%A6%23) `93.5K 🔥` `NEW`
1. [女子天生神经串联进食秒变大小眼](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%A9%E7%94%9F%E7%A5%9E%E7%BB%8F%E4%B8%B2%E8%81%94%E8%BF%9B%E9%A3%9F%E7%A7%92%E5%8F%98%E5%A4%A7%E5%B0%8F%E7%9C%BC%23) `93.4K 🔥` `NEW`
1. [白鹿跑男开场来了段啦啦操](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E5%BC%80%E5%9C%BA%E6%9D%A5%E4%BA%86%E6%AE%B5%E5%95%A6%E5%95%A6%E6%93%8D%23) `93.2K 🔥` `NEW`
1. [新娘的陪嫁是一对龙凤胎](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%9A%84%E9%99%AA%E5%AB%81%E6%98%AF%E4%B8%80%E5%AF%B9%E9%BE%99%E5%87%A4%E8%83%8E%23) `93.0K 🔥` `NEW`
1. [榴莲仅退款商家申诉被平台驳回](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E7%94%B3%E8%AF%89%E8%A2%AB%E5%B9%B3%E5%8F%B0%E9%A9%B3%E5%9B%9E%23) `93.0K 🔥` `NEW`
1. [BLG战胜JDG](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CJDG%23) `92.9K 🔥` `NEW`
1. [男生感染HPV身体会怎样 (What will happen if a boy is infected with HPV?)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%84%9F%E6%9F%93HPV%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `92.8K 🔥` `NEW`
1. [低智商犯罪 哈尔滨](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%20%E5%93%88%E5%B0%94%E6%BB%A8%23) `92.8K 🔥` `NEW`
1. [同价买奥迪还是买小米](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BB%B7%E4%B9%B0%E5%A5%A5%E8%BF%AA%E8%BF%98%E6%98%AF%E4%B9%B0%E5%B0%8F%E7%B1%B3%23) `221.9K 🔥` `+162%`
1. [再有消息就是要结婚了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E6%9C%89%E6%B6%88%E6%81%AF%E5%B0%B1%E6%98%AF%E8%A6%81%E7%BB%93%E5%A9%9A%E4%BA%86%23) `646.9K 🔥`
1. [浪姐辟谣三公录播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%BE%9F%E8%B0%A3%E4%B8%89%E5%85%AC%E5%BD%95%E6%92%AD%23) `283.3K 🔥`
1. [范丞丞被徐艺洋气到给黄子韬打电话](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%A2%AB%E5%BE%90%E8%89%BA%E6%B4%8B%E6%B0%94%E5%88%B0%E7%BB%99%E9%BB%84%E5%AD%90%E9%9F%AC%E6%89%93%E7%94%B5%E8%AF%9D%23) `229.0K 🔥`
1. [榴莲事件说明很多事不能算了](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BA%8B%E4%BB%B6%E8%AF%B4%E6%98%8E%E5%BE%88%E5%A4%9A%E4%BA%8B%E4%B8%8D%E8%83%BD%E7%AE%97%E4%BA%86%23) `93.4K 🔥`
1. [王楚钦胜利全场观众激动沸腾](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%83%9C%E5%88%A9%E5%85%A8%E5%9C%BA%E8%A7%82%E4%BC%97%E6%BF%80%E5%8A%A8%E6%B2%B8%E8%85%BE%23) `93.1K 🔥`
1. [世乒赛](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%23) `93.0K 🔥`
1. [五一消费潜力充分释放](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%B6%88%E8%B4%B9%E6%BD%9C%E5%8A%9B%E5%85%85%E5%88%86%E9%87%8A%E6%94%BE%23) `229.9K 🔥` `-66%`
1. [千问眼镜主动智能全球首发 (Qianwen Glasses’ Active Smart World Premiere)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%9C%BC%E9%95%9C%E4%B8%BB%E5%8A%A8%E6%99%BA%E8%83%BD%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%23) `215.0K 🔥` `-53%`
1. [精神病院炒股炒成公司前十大股东](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%A5%9E%E7%97%85%E9%99%A2%E7%82%92%E8%82%A1%E7%82%92%E6%88%90%E5%85%AC%E5%8F%B8%E5%89%8D%E5%8D%81%E5%A4%A7%E8%82%A1%E4%B8%9C%23) `190.6K 🔥` `-27%`
1. [70%卵巢癌患者确诊时已是晚期](https://s.weibo.com/weibo?q=%2370%25%E5%8D%B5%E5%B7%A2%E7%99%8C%E6%82%A3%E8%80%85%E7%A1%AE%E8%AF%8A%E6%97%B6%E5%B7%B2%E6%98%AF%E6%99%9A%E6%9C%9F%23) `150.7K 🔥` `-57%`
1. [广东的湿度在此刻具象化 (The humidity in Guangdong materializes at this moment)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%9A%84%E6%B9%BF%E5%BA%A6%E5%9C%A8%E6%AD%A4%E5%88%BB%E5%85%B7%E8%B1%A1%E5%8C%96%23) `143.4K 🔥` `-56%`
1. [国乒男团进四强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BF%9B%E5%9B%9B%E5%BC%BA%23) `143.3K 🔥` `-79%`
1. [浏阳爆炸烟花厂内部画面 (Internal footage of Liuyang explosive fireworks factory)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%88%86%E7%82%B8%E7%83%9F%E8%8A%B1%E5%8E%82%E5%86%85%E9%83%A8%E7%94%BB%E9%9D%A2%23) `142.5K 🔥` `-85%`
1. [朴宝英百想视后](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E8%8B%B1%E7%99%BE%E6%83%B3%E8%A7%86%E5%90%8E%23) `142.1K 🔥` `-79%`
1. [文佳煐百想影后](https://s.weibo.com/weibo?q=%23%E6%96%87%E4%BD%B3%E7%85%90%E7%99%BE%E6%83%B3%E5%BD%B1%E5%90%8E%23) `141.4K 🔥` `-46%`
1. [白鹿自己摔了还不忘扶周洁琼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%87%AA%E5%B7%B1%E6%91%94%E4%BA%86%E8%BF%98%E4%B8%8D%E5%BF%98%E6%89%B6%E5%91%A8%E6%B4%81%E7%90%BC%23) `141.2K 🔥` `-44%`
1. [裴秀智林允儿红毯撞衫](https://s.weibo.com/weibo?q=%23%E8%A3%B4%E7%A7%80%E6%99%BA%E6%9E%97%E5%85%81%E5%84%BF%E7%BA%A2%E6%AF%AF%E6%92%9E%E8%A1%AB%23) `140.6K 🔥` `-71%`
1. [印度学霸改成绩单被父亲电锯割喉](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AD%A6%E9%9C%B8%E6%94%B9%E6%88%90%E7%BB%A9%E5%8D%95%E8%A2%AB%E7%88%B6%E4%BA%B2%E7%94%B5%E9%94%AF%E5%89%B2%E5%96%89%23) `140.1K 🔥` `-55%`
1. [皮皮虾事件当事人否认想吃白食](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E7%9A%AE%E8%99%BE%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%90%A6%E8%AE%A4%E6%83%B3%E5%90%83%E7%99%BD%E9%A3%9F%23) `139.6K 🔥` `-64%`
1. [玄彬感谢孙艺珍和儿子 (Hyun Bin thanks Son Ye Jin and his son)](https://s.weibo.com/weibo?q=%23%E7%8E%84%E5%BD%AC%E6%84%9F%E8%B0%A2%E5%AD%99%E8%89%BA%E7%8F%8D%E5%92%8C%E5%84%BF%E5%AD%90%23) `137.3K 🔥` `-47%`
1. [偏偏宠爱 宋威龙](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%20%E5%AE%8B%E5%A8%81%E9%BE%99%23) `125.7K 🔥` `-52%`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `116.7K 🔥` `-63%`
1. [汉坦病毒](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%23) `116.4K 🔥` `-55%`
1. [王俊凯去看了五月天](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8E%BB%E7%9C%8B%E4%BA%86%E4%BA%94%E6%9C%88%E5%A4%A9%23) `115.9K 🔥` `-55%`
1. [榴莲仅退款买家被行拘](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `112.3K 🔥` `-57%`
1. [法国男团vs巴西男团](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E5%B7%B4%E8%A5%BF%E7%94%B7%E5%9B%A2%23) `100.0K 🔥` `-61%`
1. [刚出锅的洞洞鞋](https://s.weibo.com/weibo?q=%23%E5%88%9A%E5%87%BA%E9%94%85%E7%9A%84%E6%B4%9E%E6%B4%9E%E9%9E%8B%23) `99.1K 🔥` `-53%`
1. [增距镜成为韩国人必买中国特产 (Teleconverter becomes a must-buy Chinese specialty for Koreans)](https://s.weibo.com/weibo?q=%23%E5%A2%9E%E8%B7%9D%E9%95%9C%E6%88%90%E4%B8%BA%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%BF%85%E4%B9%B0%E4%B8%AD%E5%9B%BD%E7%89%B9%E4%BA%A7%23) `94.6K 🔥` `-64%`
1. [外网对中国下一代人的身高表示震惊](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E5%AF%B9%E4%B8%AD%E5%9B%BD%E4%B8%8B%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E8%BA%AB%E9%AB%98%E8%A1%A8%E7%A4%BA%E9%9C%87%E6%83%8A%23) `94.0K 🔥` `-62%`
1. [鞠婧祎张云龙晒合照](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BC%A0%E4%BA%91%E9%BE%99%E6%99%92%E5%90%88%E7%85%A7%23) `93.9K 🔥` `-56%`
1. [赢家 田曦薇 (Winner Tian Xiwei)](https://s.weibo.com/weibo?q=%23%E8%B5%A2%E5%AE%B6%20%E7%94%B0%E6%9B%A6%E8%96%87%23) `93.8K 🔥` `-45%`
1. [宋亚轩身上有只虫在爬 (There is an insect crawling on Song Yaxuan’s body)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%BA%AB%E4%B8%8A%E6%9C%89%E5%8F%AA%E8%99%AB%E5%9C%A8%E7%88%AC%23) `93.8K 🔥` `-45%`
1. [网传浪姐四公分组](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E5%88%86%E7%BB%84%23) `93.6K 🔥` `-56%`
1. [外网把中国视频偷给日本成常态](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E6%8A%8A%E4%B8%AD%E5%9B%BD%E8%A7%86%E9%A2%91%E5%81%B7%E7%BB%99%E6%97%A5%E6%9C%AC%E6%88%90%E5%B8%B8%E6%80%81%23) `93.6K 🔥` `-45%`
1. [换乘恋爱4 抓马](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E4%B9%98%E6%81%8B%E7%88%B14%20%E6%8A%93%E9%A9%AC%23) `93.5K 🔥` `-21%`
1. [女孩徒步猝死案细节曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%BE%92%E6%AD%A5%E7%8C%9D%E6%AD%BB%E6%A1%88%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `93.3K 🔥` `-23%`
1. [中国男团vs韩国 (Chinese men's team vs. South Korea)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD%23) `93.3K 🔥` `-57%`

Updated at 2026-05-09 01:51:42

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
