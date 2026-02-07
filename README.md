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

1. [中国元素绽放米兰冬奥舞台 (Chinese elements bloom on the Milan Winter Olympics stage)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%83%E7%B4%A0%E7%BB%BD%E6%94%BE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%88%9E%E5%8F%B0%23) `654.1K 🔥` `NEW`
1. [碧血蝉主角团剧宣直播](https://s.weibo.com/weibo?q=%23%E7%A2%A7%E8%A1%80%E8%9D%89%E4%B8%BB%E8%A7%92%E5%9B%A2%E5%89%A7%E5%AE%A3%E7%9B%B4%E6%92%AD%23) `354.1K 🔥` `NEW`
1. [11年了大姐还在骂明台](https://s.weibo.com/weibo?q=%2311%E5%B9%B4%E4%BA%86%E5%A4%A7%E5%A7%90%E8%BF%98%E5%9C%A8%E9%AA%82%E6%98%8E%E5%8F%B0%23) `232.0K 🔥` `NEW`
1. [王嘉尔刘雨昕MMAM舞台国际水准](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%88%98%E9%9B%A8%E6%98%95MMAM%E8%88%9E%E5%8F%B0%E5%9B%BD%E9%99%85%E6%B0%B4%E5%87%86%23) `221.5K 🔥` `NEW`
1. [芒果女主持上新了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%B8%8A%E6%96%B0%E4%BA%86%23) `159.5K 🔥` `NEW`
1. [苏翊鸣决赛](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%86%B3%E8%B5%9B%23) `110.7K 🔥` `NEW`
1. [白鹿 我选蒋奇明](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%88%91%E9%80%89%E8%92%8B%E5%A5%87%E6%98%8E%23) `102.0K 🔥` `NEW`
1. [谷爱凌身边的东北甜妹是谁](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BA%AB%E8%BE%B9%E7%9A%84%E4%B8%9C%E5%8C%97%E7%94%9C%E5%A6%B9%E6%98%AF%E8%B0%81%23) `98.4K 🔥` `NEW`
1. [中国男团晋级亚团赛决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2%E6%99%8B%E7%BA%A7%E4%BA%9A%E5%9B%A2%E8%B5%9B%E5%86%B3%E8%B5%9B%23) `87.6K 🔥` `NEW`
1. [孙颖莎6比11陈熠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E6%E6%AF%9411%E9%99%88%E7%86%A0%23) `87.3K 🔥` `NEW`
1. [成何体统 癫剧 (What kind of body is epileptic drama)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E7%99%AB%E5%89%A7%23) `1.1M 🔥` `+110%`
1. [教育局回应成绩单用星星显示 (The Education Bureau’s response report card is displayed with stars)](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E6%88%90%E7%BB%A9%E5%8D%95%E7%94%A8%E6%98%9F%E6%98%9F%E6%98%BE%E7%A4%BA%23) `879.3K 🔥` `+48%`
1. [林诗栋惨遭逆转无缘4强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%83%A8%E9%81%AD%E9%80%86%E8%BD%AC%E6%97%A0%E7%BC%984%E5%BC%BA%23) `355.6K 🔥` `+95%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `305.4K 🔥` `+69%`
1. [王楚钦7比11周启豪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A67%E6%AF%9411%E5%91%A8%E5%90%AF%E8%B1%AA%23) `267.1K 🔥` `+91%`
1. [男子因1条评论杀害2人 (Man kills 2 people over 1 comment)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A01%E6%9D%A1%E8%AF%84%E8%AE%BA%E6%9D%80%E5%AE%B32%E4%BA%BA%23) `237.5K 🔥` `+30%`
1. [脚臭的人洗脚时建议加点盐](https://s.weibo.com/weibo?q=%23%E8%84%9A%E8%87%AD%E7%9A%84%E4%BA%BA%E6%B4%97%E8%84%9A%E6%97%B6%E5%BB%BA%E8%AE%AE%E5%8A%A0%E7%82%B9%E7%9B%90%23) `233.0K 🔥` `+63%`
1. [谷爱凌第一滑摔倒 (Gu Ailing fell down in her first slip)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `222.8K 🔥` `+24%`
1. [因上菜慢辱骂服务员老太太拒道歉](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%8A%E8%8F%9C%E6%85%A2%E8%BE%B1%E9%AA%82%E6%9C%8D%E5%8A%A1%E5%91%98%E8%80%81%E5%A4%AA%E5%A4%AA%E6%8B%92%E9%81%93%E6%AD%89%23) `221.2K 🔥` `+22%`
1. [92岁老人集装箱离世留下19万存款](https://s.weibo.com/weibo?q=%2392%E5%B2%81%E8%80%81%E4%BA%BA%E9%9B%86%E8%A3%85%E7%AE%B1%E7%A6%BB%E4%B8%96%E7%95%99%E4%B8%8B19%E4%B8%87%E5%AD%98%E6%AC%BE%23) `193.0K 🔥` `+67%`
1. [新年有乐事就选拼多多 (Choose Pinduoduo for New Year fun)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E6%9C%89%E4%B9%90%E4%BA%8B%E5%B0%B1%E9%80%89%E6%8B%BC%E5%A4%9A%E5%A4%9A%23) `625.4K 🔥`
1. [六个合法查询网站帮你看清一个人 (Six legal search websites to help you identify a person clearly)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%AA%E5%90%88%E6%B3%95%E6%9F%A5%E8%AF%A2%E7%BD%91%E7%AB%99%E5%B8%AE%E4%BD%A0%E7%9C%8B%E6%B8%85%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `299.9K 🔥`
1. [山姆你还续卡吗 (Are you still renewing your Sam's Club membership?)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BD%A0%E8%BF%98%E7%BB%AD%E5%8D%A1%E5%90%97%23) `238.6K 🔥`
1. [立威廉得知恶耗时才49岁](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%E5%BE%97%E7%9F%A5%E6%81%B6%E8%80%97%E6%97%B6%E6%89%8D49%E5%B2%81%23) `188.1K 🔥`
1. [王楚然演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BC%94%E6%8A%80%23) `162.2K 🔥`
1. [马伯骞回关虞书欣](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%9B%9E%E5%85%B3%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `159.8K 🔥`
1. [演员立威廉已重新安排遗嘱 (Actor William Li has rearranged his will)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%AB%8B%E5%A8%81%E5%BB%89%E5%B7%B2%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E9%81%97%E5%98%B1%23) `140.9K 🔥`
1. [王濛冠军的含金量还在上升 (The gold content of Wang Meng’s championship is still rising)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%86%A0%E5%86%9B%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `129.2K 🔥`
1. [苏翊鸣巅峰对决](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B3%23) `121.5K 🔥`
1. [为什么很多餐馆都在提供免费柠檬水](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E9%A4%90%E9%A6%86%E9%83%BD%E5%9C%A8%E6%8F%90%E4%BE%9B%E5%85%8D%E8%B4%B9%E6%9F%A0%E6%AA%AC%E6%B0%B4%23) `118.6K 🔥`
1. [这是爱豆那谁是吴磊](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%88%B1%E8%B1%86%E9%82%A3%E8%B0%81%E6%98%AF%E5%90%B4%E7%A3%8A%23) `113.3K 🔥`
1. [黄明昊演唱会嘉宾马思纯](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E9%A9%AC%E6%80%9D%E7%BA%AF%23) `106.2K 🔥`
1. [华晨宇 本命年和本命人一起过 (Hua Chenyu spends his natal year with his natal person)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%20%E6%9C%AC%E5%91%BD%E5%B9%B4%E5%92%8C%E6%9C%AC%E5%91%BD%E4%BA%BA%E4%B8%80%E8%B5%B7%E8%BF%87%23) `96.7K 🔥`
1. [aespa香港演唱会](https://s.weibo.com/weibo?q=%23aespa%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `91.7K 🔥`
1. [周翊然奢牌升title](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E5%A5%A2%E7%89%8C%E5%8D%87title%23) `88.6K 🔥`
1. [男子网购椅子竟多出15公斤银板 (Man buys chairs online but ends up with 15 kilograms more silver plate)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%AD%E6%A4%85%E5%AD%90%E7%AB%9F%E5%A4%9A%E5%87%BA15%E5%85%AC%E6%96%A4%E9%93%B6%E6%9D%BF%23) `475.1K 🔥` `-57%`
1. [生命树张扬去世 (The tree of life Zhang Yang passed away)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%BC%A0%E6%89%AC%E5%8E%BB%E4%B8%96%23) `374.2K 🔥` `-33%`
1. [林诗栋vs户上隼辅](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8Bvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `218.0K 🔥` `-73%`
1. [米兰冬奥首金诞生](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%E8%AF%9E%E7%94%9F%23) `159.9K 🔥` `-33%`
1. [日本在菲律宾培植代理人挑衅中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%9F%B9%E6%A4%8D%E4%BB%A3%E7%90%86%E4%BA%BA%E6%8C%91%E8%A1%85%E4%B8%AD%E5%9B%BD%23) `142.0K 🔥` `-21%`
1. [男子快递收到30斤银砖果断报警 (A man decisively called the police after receiving 30 kilograms of silver bricks in express delivery)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%AB%E9%80%92%E6%94%B6%E5%88%B030%E6%96%A4%E9%93%B6%E7%A0%96%E6%9E%9C%E6%96%AD%E6%8A%A5%E8%AD%A6%23) `133.0K 🔥` `-26%`
1. [50天赚10万买奔驰黑茶骗局被曝光](https://s.weibo.com/weibo?q=%2350%E5%A4%A9%E8%B5%9A10%E4%B8%87%E4%B9%B0%E5%A5%94%E9%A9%B0%E9%BB%91%E8%8C%B6%E9%AA%97%E5%B1%80%E8%A2%AB%E6%9B%9D%E5%85%89%23) `116.2K 🔥` `-35%`
1. [谷爱凌第二轮75.30分 (Gu Ailing scored 75.30 points in the second round)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E8%BD%AE75.30%E5%88%86%23) `111.3K 🔥` `-22%`
1. [程潇真的拥有芭比的容貌和人生](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E7%9C%9F%E7%9A%84%E6%8B%A5%E6%9C%89%E8%8A%AD%E6%AF%94%E7%9A%84%E5%AE%B9%E8%B2%8C%E5%92%8C%E4%BA%BA%E7%94%9F%23) `95.2K 🔥` `-21%`
1. [Tian和王濛比速滑](https://s.weibo.com/weibo?q=%23Tian%E5%92%8C%E7%8E%8B%E6%BF%9B%E6%AF%94%E9%80%9F%E6%BB%91%23) `94.4K 🔥` `-33%`
1. [白鹿王星越连续4年拍同样的照片](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%8E%8B%E6%98%9F%E8%B6%8A%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E6%8B%8D%E5%90%8C%E6%A0%B7%E7%9A%84%E7%85%A7%E7%89%87%23) `92.4K 🔥` `-24%`
1. [山姆品控危机引发退卡风波 (Sam's Club quality control crisis sparks membership cancellation wave)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%93%81%E6%8E%A7%E5%8D%B1%E6%9C%BA%E5%BC%95%E5%8F%91%E9%80%80%E5%8D%A1%E9%A3%8E%E6%B3%A2%23) `89.1K 🔥` `-23%`
1. [谷爱凌摔倒场边观众吓坏了 (Gu Ailing fell and the audience on the sidelines were frightened)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%91%94%E5%80%92%E5%9C%BA%E8%BE%B9%E8%A7%82%E4%BC%97%E5%90%93%E5%9D%8F%E4%BA%86%23) `87.7K 🔥` `-27%`
1. [女子托运宠物猫至哈尔滨却送到新疆 (Woman consigned pet cat to Harbin but sent to Xinjiang)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%98%E8%BF%90%E5%AE%A0%E7%89%A9%E7%8C%AB%E8%87%B3%E5%93%88%E5%B0%94%E6%BB%A8%E5%8D%B4%E9%80%81%E5%88%B0%E6%96%B0%E7%96%86%23) `87.3K 🔥` `-45%`
1. [林诗栋3比4户上隼辅](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B3%E6%AF%944%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `75.3K 🔥` `-46%`

Updated at 2026-02-07 23:21:11

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
