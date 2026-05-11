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

1. [汶川地震一个班幸存的11人不敢相聚 (The 11 people who survived the Wenchuan earthquake did not dare to get together)](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E5%B7%9D%E5%9C%B0%E9%9C%87%E4%B8%80%E4%B8%AA%E7%8F%AD%E5%B9%B8%E5%AD%98%E7%9A%8411%E4%BA%BA%E4%B8%8D%E6%95%A2%E7%9B%B8%E8%81%9A%23) `1.1M 🔥` `NEW`
1. [孙颖莎11350分女单世一](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E11350%E5%88%86%E5%A5%B3%E5%8D%95%E4%B8%96%E4%B8%80%23) `521.4K 🔥` `NEW`
1. [开榴莲开出三房榴莲糖](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%A6%B4%E8%8E%B2%E5%BC%80%E5%87%BA%E4%B8%89%E6%88%BF%E6%A6%B4%E8%8E%B2%E7%B3%96%23) `435.9K 🔥` `NEW`
1. [健康轻盈 由我盈领](https://s.weibo.com/weibo?q=%23%E5%81%A5%E5%BA%B7%E8%BD%BB%E7%9B%88%20%E7%94%B1%E6%88%91%E7%9B%88%E9%A2%86%23) `425.3K 🔥` `NEW`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `419.9K 🔥` `NEW`
1. [中国将发射20万颗卫星](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%86%E5%8F%91%E5%B0%8420%E4%B8%87%E9%A2%97%E5%8D%AB%E6%98%9F%23) `362.8K 🔥` `NEW`
1. [谭德塞警告美国](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E5%BE%B7%E5%A1%9E%E8%AD%A6%E5%91%8A%E7%BE%8E%E5%9B%BD%23) `357.8K 🔥` `NEW`
1. [吴京发文庆祝与谢楠结婚十四周年](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%8F%91%E6%96%87%E5%BA%86%E7%A5%9D%E4%B8%8E%E8%B0%A2%E6%A5%A0%E7%BB%93%E5%A9%9A%E5%8D%81%E5%9B%9B%E5%91%A8%E5%B9%B4%23) `349.4K 🔥` `NEW`
1. [沙溢瘦得都认不出来了](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E7%98%A6%E5%BE%97%E9%83%BD%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%E4%BA%86%23) `340.9K 🔥` `NEW`
1. [韩国涨怕了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B6%A8%E6%80%95%E4%BA%86%23) `339.6K 🔥` `NEW`
1. [五哈导演是原跑男导演 (Director Wuha is the original director of Running Man)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E5%AF%BC%E6%BC%94%E6%98%AF%E5%8E%9F%E8%B7%91%E7%94%B7%E5%AF%BC%E6%BC%94%23) `339.5K 🔥` `NEW`
1. [等风热吻你 宋祖儿宋威龙](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%20%E5%AE%8B%E7%A5%96%E5%84%BF%E5%AE%8B%E5%A8%81%E9%BE%99%23) `339.4K 🔥` `NEW`
1. [马龙夏露晒伦敦同款情侣照](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%A4%8F%E9%9C%B2%E6%99%92%E4%BC%A6%E6%95%A6%E5%90%8C%E6%AC%BE%E6%83%85%E4%BE%A3%E7%85%A7%23) `339.4K 🔥` `NEW`
1. [中餐厅10](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%8510%23) `339.2K 🔥` `NEW`
1. [无忧传媒晒与王暖暖成绩单](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BF%A7%E4%BC%A0%E5%AA%92%E6%99%92%E4%B8%8E%E7%8E%8B%E6%9A%96%E6%9A%96%E6%88%90%E7%BB%A9%E5%8D%95%23) `339.1K 🔥` `NEW`
1. [榴莲仅退款商家获平台退款](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E8%8E%B7%E5%B9%B3%E5%8F%B0%E9%80%80%E6%AC%BE%23) `339.0K 🔥` `NEW`
1. [章若楠走路姿势](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `339.0K 🔥` `NEW`
1. [齐豫 歌手2026](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%20%E6%AD%8C%E6%89%8B2026%23) `338.7K 🔥` `NEW`
1. [国乐无双直播](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%E7%9B%B4%E6%92%AD%23) `299.9K 🔥` `NEW`
1. [17岁失联女生家属回应已找到遗体](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%AE%B6%E5%B1%9E%E5%9B%9E%E5%BA%94%E5%B7%B2%E6%89%BE%E5%88%B0%E9%81%97%E4%BD%93%23) `275.4K 🔥` `NEW`
1. [藏海传 (Legend of Tibetan Sea)](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%23) `254.0K 🔥` `NEW`
1. [玉泽演尼坤已婚和未婚的区别](https://s.weibo.com/weibo?q=%23%E7%8E%89%E6%B3%BD%E6%BC%94%E5%B0%BC%E5%9D%A4%E5%B7%B2%E5%A9%9A%E5%92%8C%E6%9C%AA%E5%A9%9A%E7%9A%84%E5%8C%BA%E5%88%AB%23) `249.5K 🔥` `NEW`
1. [成年人的崩溃从父母生病开始](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E5%B4%A9%E6%BA%83%E4%BB%8E%E7%88%B6%E6%AF%8D%E7%94%9F%E7%97%85%E5%BC%80%E5%A7%8B%23) `235.2K 🔥` `NEW`
1. [aespa权志龙先行曲MV](https://s.weibo.com/weibo?q=%23aespa%E6%9D%83%E5%BF%97%E9%BE%99%E5%85%88%E8%A1%8C%E6%9B%B2MV%23) `232.3K 🔥` `NEW`
1. [张慧雯因肠胃炎去急诊](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%9B%A0%E8%82%A0%E8%83%83%E7%82%8E%E5%8E%BB%E6%80%A5%E8%AF%8A%23) `215.3K 🔥` `NEW`
1. [佳偶天成大结局](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%A4%A7%E7%BB%93%E5%B1%80%23) `174.6K 🔥` `NEW`
1. [aespa空降成绩](https://s.weibo.com/weibo?q=%23aespa%E7%A9%BA%E9%99%8D%E6%88%90%E7%BB%A9%23) `171.4K 🔥` `NEW`
1. [吴世勋我的中文不用翻译](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E6%88%91%E7%9A%84%E4%B8%AD%E6%96%87%E4%B8%8D%E7%94%A8%E7%BF%BB%E8%AF%91%23) `171.3K 🔥` `NEW`
1. [张凌赫爸妈给他送饭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%88%B8%E5%A6%88%E7%BB%99%E4%BB%96%E9%80%81%E9%A5%AD%23) `169.0K 🔥` `NEW`
1. [涉恶企业家700万兰博基尼119万开拍](https://s.weibo.com/weibo?q=%23%E6%B6%89%E6%81%B6%E4%BC%81%E4%B8%9A%E5%AE%B6700%E4%B8%87%E5%85%B0%E5%8D%9A%E5%9F%BA%E5%B0%BC119%E4%B8%87%E5%BC%80%E6%8B%8D%23) `166.4K 🔥` `NEW`
1. [最新研究显示工作时长影响肥胖率 (New study shows working hours affect obesity rates)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E7%A0%94%E7%A9%B6%E6%98%BE%E7%A4%BA%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%95%BF%E5%BD%B1%E5%93%8D%E8%82%A5%E8%83%96%E7%8E%87%23) `166.2K 🔥` `NEW`
1. [业主私挖地下室造出三室一厅](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E4%B8%BB%E7%A7%81%E6%8C%96%E5%9C%B0%E4%B8%8B%E5%AE%A4%E9%80%A0%E5%87%BA%E4%B8%89%E5%AE%A4%E4%B8%80%E5%8E%85%23) `156.1K 🔥` `NEW`
1. [瑜伽馆回应女子天天上课被踢出群](https://s.weibo.com/weibo?q=%23%E7%91%9C%E4%BC%BD%E9%A6%86%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%A4%A9%E5%A4%A9%E4%B8%8A%E8%AF%BE%E8%A2%AB%E8%B8%A2%E5%87%BA%E7%BE%A4%23) `154.8K 🔥` `NEW`
1. [杨博文给张桂源的祝福](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E7%BB%99%E5%BC%A0%E6%A1%82%E6%BA%90%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `152.4K 🔥` `NEW`
1. [小米汽车销量跻身国产前五](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E9%94%80%E9%87%8F%E8%B7%BB%E8%BA%AB%E5%9B%BD%E4%BA%A7%E5%89%8D%E4%BA%94%23) `146.9K 🔥` `NEW`
1. [陈奕恒 啥玩意这是](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%20%E5%95%A5%E7%8E%A9%E6%84%8F%E8%BF%99%E6%98%AF%23) `132.8K 🔥` `NEW`
1. [中方决定不同意台湾地区参加世卫大会](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%86%B3%E5%AE%9A%E4%B8%8D%E5%90%8C%E6%84%8F%E5%8F%B0%E6%B9%BE%E5%9C%B0%E5%8C%BA%E5%8F%82%E5%8A%A0%E4%B8%96%E5%8D%AB%E5%A4%A7%E4%BC%9A%23) `809.1K 🔥` `+136%`
1. [女子离婚多年被判共还前夫百万欠债](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%E5%A4%9A%E5%B9%B4%E8%A2%AB%E5%88%A4%E5%85%B1%E8%BF%98%E5%89%8D%E5%A4%AB%E7%99%BE%E4%B8%87%E6%AC%A0%E5%80%BA%23) `448.0K 🔥` `+89%`
1. [唐艺昕的妆像当年郑恺化的 (Tang Yixin’s makeup resembles that of Zheng Kai)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E7%9A%84%E5%A6%86%E5%83%8F%E5%BD%93%E5%B9%B4%E9%83%91%E6%81%BA%E5%8C%96%E7%9A%84%23) `338.9K 🔥` `+43%`
1. [梁靖崑夺冠后回复妻子打错字](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E5%A4%BA%E5%86%A0%E5%90%8E%E5%9B%9E%E5%A4%8D%E5%A6%BB%E5%AD%90%E6%89%93%E9%94%99%E5%AD%97%23) `338.8K 🔥` `+44%`
1. [一图读懂家庭应急物资该备什么](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E8%AF%BB%E6%87%82%E5%AE%B6%E5%BA%AD%E5%BA%94%E6%80%A5%E7%89%A9%E8%B5%84%E8%AF%A5%E5%A4%87%E4%BB%80%E4%B9%88%23) `651.8K 🔥`
1. [公司欠债倒闭五只猫咪员工被法拍 (Company went bankrupt due to debt, and five cat employees were foreclosed on)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E6%AC%A0%E5%80%BA%E5%80%92%E9%97%AD%E4%BA%94%E5%8F%AA%E7%8C%AB%E5%92%AA%E5%91%98%E5%B7%A5%E8%A2%AB%E6%B3%95%E6%8B%8D%23) `339.6K 🔥`
1. [马龙总结伦敦世乒赛](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E6%80%BB%E7%BB%93%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%23) `171.5K 🔥`
1. [突然意识到会做饭的人有多厉害](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E4%BC%9A%E5%81%9A%E9%A5%AD%E7%9A%84%E4%BA%BA%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%23) `164.5K 🔥`
1. [雪糕是糖油混合物具象化了](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E7%B3%95%E6%98%AF%E7%B3%96%E6%B2%B9%E6%B7%B7%E5%90%88%E7%89%A9%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `369.5K 🔥` `-41%`
1. [李晨 五哈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%20%E4%BA%94%E5%93%88%23) `339.3K 🔥` `-49%`
1. [前台笑了半小时才说出wifi密码](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%8F%B0%E7%AC%91%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%89%8D%E8%AF%B4%E5%87%BAwifi%E5%AF%86%E7%A0%81%23) `175.1K 🔥` `-71%`
1. [A股进入牛市下半场](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%BF%9B%E5%85%A5%E7%89%9B%E5%B8%82%E4%B8%8B%E5%8D%8A%E5%9C%BA%23) `171.3K 🔥` `-50%`
1. [三亚游泳耳朵里爬出了螃蟹](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E6%B8%B8%E6%B3%B3%E8%80%B3%E6%9C%B5%E9%87%8C%E7%88%AC%E5%87%BA%E4%BA%86%E8%9E%83%E8%9F%B9%23) `166.1K 🔥` `-64%`
1. [女孩误拧油门150斤卤菜全毁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%AF%AF%E6%8B%A7%E6%B2%B9%E9%97%A8150%E6%96%A4%E5%8D%A4%E8%8F%9C%E5%85%A8%E6%AF%81%23) `154.4K 🔥` `-34%`
1. [王俊凯出发录中餐厅路透 (Wang Junkai sets out to record Chinese restaurant Reuters)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%87%BA%E5%8F%91%E5%BD%95%E4%B8%AD%E9%A4%90%E5%8E%85%E8%B7%AF%E9%80%8F%23) `152.8K 🔥` `-55%`

Updated at 2026-05-11 19:46:10

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
