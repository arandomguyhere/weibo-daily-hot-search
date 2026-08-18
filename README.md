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

1. [调查组通报杭州酒局事件 (Investigation team reports incident at Hangzhou Wine Bureau)](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `549.2K 🔥` `NEW`
1. [赵某峰郁某栋被刑拘](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9F%90%E5%B3%B0%E9%83%81%E6%9F%90%E6%A0%8B%E8%A2%AB%E5%88%91%E6%8B%98%23) `523.8K 🔥` `NEW`
1. [心动9是喜剧节目吧](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A89%E6%98%AF%E5%96%9C%E5%89%A7%E8%8A%82%E7%9B%AE%E5%90%A7%23) `364.7K 🔥` `NEW`
1. [刘亦菲黑西装白胸花](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%BB%91%E8%A5%BF%E8%A3%85%E7%99%BD%E8%83%B8%E8%8A%B1%23) `350.2K 🔥` `NEW`
1. [林志颖说小儿子可能当韩国练习生](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4%E5%B0%8F%E5%84%BF%E5%AD%90%E5%8F%AF%E8%83%BD%E5%BD%93%E9%9F%A9%E5%9B%BD%E7%BB%83%E4%B9%A0%E7%94%9F%23) `342.1K 🔥` `NEW`
1. [招商蛇口删除赵海峰文章](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E5%88%A0%E9%99%A4%E8%B5%B5%E6%B5%B7%E5%B3%B0%E6%96%87%E7%AB%A0%23) `334.5K 🔥` `NEW`
1. [欧弟回应移居日本传闻](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%BC%9F%E5%9B%9E%E5%BA%94%E7%A7%BB%E5%B1%85%E6%97%A5%E6%9C%AC%E4%BC%A0%E9%97%BB%23) `162.0K 🔥` `NEW`
1. [DeepSeek的自主性吓到我了](https://s.weibo.com/weibo?q=%23DeepSeek%E7%9A%84%E8%87%AA%E4%B8%BB%E6%80%A7%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `159.9K 🔥` `NEW`
1. [我真的抠抠搜搜花了很多钱](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9C%9F%E7%9A%84%E6%8A%A0%E6%8A%A0%E6%90%9C%E6%90%9C%E8%8A%B1%E4%BA%86%E5%BE%88%E5%A4%9A%E9%92%B1%23) `159.6K 🔥` `NEW`
1. [印度7名贫困矿工挖到17.96克拉钻石](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A67%E5%90%8D%E8%B4%AB%E5%9B%B0%E7%9F%BF%E5%B7%A5%E6%8C%96%E5%88%B017.96%E5%85%8B%E6%8B%89%E9%92%BB%E7%9F%B3%23) `149.8K 🔥` `NEW`
1. [7岁娃亲子房熟睡掉床遭尖角割裂手肘 (7-year-old boy fell asleep in parent-child room and fell off the bed and cut his elbow on a sharp corner)](https://s.weibo.com/weibo?q=%237%E5%B2%81%E5%A8%83%E4%BA%B2%E5%AD%90%E6%88%BF%E7%86%9F%E7%9D%A1%E6%8E%89%E5%BA%8A%E9%81%AD%E5%B0%96%E8%A7%92%E5%89%B2%E8%A3%82%E6%89%8B%E8%82%98%23) `149.7K 🔥` `NEW`
1. [顶替案哥哥申请母亲作证人未获同意](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%94%B3%E8%AF%B7%E6%AF%8D%E4%BA%B2%E4%BD%9C%E8%AF%81%E4%BA%BA%E6%9C%AA%E8%8E%B7%E5%90%8C%E6%84%8F%23) `142.0K 🔥` `NEW`
1. [朱镕基同志生平](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `1.1M 🔥`
1. [朱镕基同志遗体在京火化 (Comrade Zhu Rongji's body was cremated in Beijing)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%E5%9C%A8%E4%BA%AC%E7%81%AB%E5%8C%96%23) `939.9K 🔥`
1. [中国医师节致敬不平凡的你 (Chinese Doctors’ Day pays tribute to you, the extraordinary person)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%BB%E5%B8%88%E8%8A%82%E8%87%B4%E6%95%AC%E4%B8%8D%E5%B9%B3%E5%87%A1%E7%9A%84%E4%BD%A0%23) `616.6K 🔥`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `503.9K 🔥`
1. [特朗普还对人民大会堂念念不忘 (Trump still misses the Great Hall of the People)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%98%E5%AF%B9%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E5%BF%B5%E5%BF%B5%E4%B8%8D%E5%BF%98%23) `388.5K 🔥`
1. [红车误入婚车车队成主角 (The red car mistakenly enters the wedding car convoy and becomes the protagonist)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E8%BD%A6%E8%AF%AF%E5%85%A5%E5%A9%9A%E8%BD%A6%E8%BD%A6%E9%98%9F%E6%88%90%E4%B8%BB%E8%A7%92%23) `367.1K 🔥`
1. [龙餐馆居然有发芽土豆周边](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%B1%85%E7%84%B6%E6%9C%89%E5%8F%91%E8%8A%BD%E5%9C%9F%E8%B1%86%E5%91%A8%E8%BE%B9%23) `366.8K 🔥`
1. [杭州酒局事件](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `362.3K 🔥`
1. [易立竞当面拆穿蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%BD%93%E9%9D%A2%E6%8B%86%E7%A9%BF%E8%93%9D%E7%9B%88%E8%8E%B9%23) `359.6K 🔥`
1. [幸运咖 阴阳瑞幸](https://s.weibo.com/weibo?q=%23%E5%B9%B8%E8%BF%90%E5%92%96%20%E9%98%B4%E9%98%B3%E7%91%9E%E5%B9%B8%23) `358.9K 🔥`
1. [林志颖说林俊杰女友很乖很腼腆 (Lin Zhiying said that JJ Lin’s girlfriend is very well-behaved and shy)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%A5%B3%E5%8F%8B%E5%BE%88%E4%B9%96%E5%BE%88%E8%85%BC%E8%85%86%23) `355.5K 🔥`
1. [张子枫长发以为内娱上新了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E9%95%BF%E5%8F%91%E4%BB%A5%E4%B8%BA%E5%86%85%E5%A8%B1%E4%B8%8A%E6%96%B0%E4%BA%86%23) `354.6K 🔥`
1. [路人制止父亲脚踹女儿被拘超200天](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E5%88%B6%E6%AD%A2%E7%88%B6%E4%BA%B2%E8%84%9A%E8%B8%B9%E5%A5%B3%E5%84%BF%E8%A2%AB%E6%8B%98%E8%B6%85200%E5%A4%A9%23) `351.3K 🔥`
1. [刘亦菲素颜穿79.8元防晒衣](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%B4%A0%E9%A2%9C%E7%A9%BF79.8%E5%85%83%E9%98%B2%E6%99%92%E8%A1%A3%23) `348.4K 🔥`
1. [手机价格涨20%以上 (Mobile phone prices increased by more than 20%)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%E6%B6%A820%25%E4%BB%A5%E4%B8%8A%23) `344.8K 🔥`
1. [何炅提问谁是何炅接班人 (He Jiong asked who is He Jiong’s successor?)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E6%8F%90%E9%97%AE%E8%B0%81%E6%98%AF%E4%BD%95%E7%82%85%E6%8E%A5%E7%8F%AD%E4%BA%BA%23) `343.0K 🔥`
1. [厄尔尼诺事件大概率历史最强](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E4%BA%8B%E4%BB%B6%E5%A4%A7%E6%A6%82%E7%8E%87%E5%8E%86%E5%8F%B2%E6%9C%80%E5%BC%BA%23) `340.5K 🔥`
1. [女患者称被男医生猥亵揉胸双方已报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%82%A3%E8%80%85%E7%A7%B0%E8%A2%AB%E7%94%B7%E5%8C%BB%E7%94%9F%E7%8C%A5%E4%BA%B5%E6%8F%89%E8%83%B8%E5%8F%8C%E6%96%B9%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `339.4K 🔥`
1. [吴建豪回应妻子被曝学历造假](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BB%BA%E8%B1%AA%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E8%A2%AB%E6%9B%9D%E5%AD%A6%E5%8E%86%E9%80%A0%E5%81%87%23) `333.4K 🔥`
1. [贺涵PPT做得太丑了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5PPT%E5%81%9A%E5%BE%97%E5%A4%AA%E4%B8%91%E4%BA%86%23) `314.0K 🔥`
1. [寒武纪员工大红包人均557万](https://s.weibo.com/weibo?q=%23%E5%AF%92%E6%AD%A6%E7%BA%AA%E5%91%98%E5%B7%A5%E5%A4%A7%E7%BA%A2%E5%8C%85%E4%BA%BA%E5%9D%87557%E4%B8%87%23) `308.8K 🔥`
1. [法国婚姻制度致全民搭伙时代来临](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%A9%9A%E5%A7%BB%E5%88%B6%E5%BA%A6%E8%87%B4%E5%85%A8%E6%B0%91%E6%90%AD%E4%BC%99%E6%97%B6%E4%BB%A3%E6%9D%A5%E4%B8%B4%23) `305.2K 🔥`
1. [张若昀白客玩蔡徐坤梗 (Zhang Ruoyun plays with Cai Xukun)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E7%99%BD%E5%AE%A2%E7%8E%A9%E8%94%A1%E5%BE%90%E5%9D%A4%E6%A2%97%23) `286.0K 🔥`
1. [你的身体比你想象中更爱你](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E8%BA%AB%E4%BD%93%E6%AF%94%E4%BD%A0%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%9B%B4%E7%88%B1%E4%BD%A0%23) `269.2K 🔥` `-34%`
1. [涉侵害女性的酒局到底发生了什么 (What happened at the bar where women were assaulted?)](https://s.weibo.com/weibo?q=%23%E6%B6%89%E4%BE%B5%E5%AE%B3%E5%A5%B3%E6%80%A7%E7%9A%84%E9%85%92%E5%B1%80%E5%88%B0%E5%BA%95%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `245.2K 🔥` `-31%`
1. [泡汤偶遇章若楠](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B1%A4%E5%81%B6%E9%81%87%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `238.6K 🔥` `-35%`
1. [豆瓣崩了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E7%93%A3%E5%B4%A9%E4%BA%86%23) `209.5K 🔥` `-44%`
1. [胡先煦这么帅了 (Hu Xianxu is so handsome)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E8%BF%99%E4%B9%88%E5%B8%85%E4%BA%86%23) `196.3K 🔥` `-46%`
1. [杨国福冒用羽生结弦名义摆花篮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9B%BD%E7%A6%8F%E5%86%92%E7%94%A8%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E5%90%8D%E4%B9%89%E6%91%86%E8%8A%B1%E7%AF%AE%23) `178.8K 🔥` `-49%`
1. [BBA集体大降价 (BBA collective big price reduction)](https://s.weibo.com/weibo?q=%23BBA%E9%9B%86%E4%BD%93%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `176.3K 🔥` `-51%`
1. [魏子宸五公涨粉第一](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E4%BA%94%E5%85%AC%E6%B6%A8%E7%B2%89%E7%AC%AC%E4%B8%80%23) `168.6K 🔥` `-49%`
1. [16岁嫁51岁好莱坞男星后称遭虐待](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%AB%8151%E5%B2%81%E5%A5%BD%E8%8E%B1%E5%9D%9E%E7%94%B7%E6%98%9F%E5%90%8E%E7%A7%B0%E9%81%AD%E8%99%90%E5%BE%85%23) `164.4K 🔥` `-54%`
1. [觉得眼睛漂亮就是觉得灵魂漂亮](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E7%9C%BC%E7%9D%9B%E6%BC%82%E4%BA%AE%E5%B0%B1%E6%98%AF%E8%A7%89%E5%BE%97%E7%81%B5%E9%AD%82%E6%BC%82%E4%BA%AE%23) `157.4K 🔥` `-55%`
1. [王橹杰比董洁亲儿子还小一岁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%AF%94%E8%91%A3%E6%B4%81%E4%BA%B2%E5%84%BF%E5%AD%90%E8%BF%98%E5%B0%8F%E4%B8%80%E5%B2%81%23) `153.3K 🔥` `-54%`
1. [唐晶word没激活](https://s.weibo.com/weibo?q=%23%E5%94%90%E6%99%B6word%E6%B2%A1%E6%BF%80%E6%B4%BB%23) `150.7K 🔥` `-55%`
1. [FIFA发布了决赛裁判视角的集锦](https://s.weibo.com/weibo?q=%23FIFA%E5%8F%91%E5%B8%83%E4%BA%86%E5%86%B3%E8%B5%9B%E8%A3%81%E5%88%A4%E8%A7%86%E8%A7%92%E7%9A%84%E9%9B%86%E9%94%A6%23) `144.0K 🔥` `-57%`
1. [南京地铁车厢黄鳝满地爬乘客一起抓](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%9C%B0%E9%93%81%E8%BD%A6%E5%8E%A2%E9%BB%84%E9%B3%9D%E6%BB%A1%E5%9C%B0%E7%88%AC%E4%B9%98%E5%AE%A2%E4%B8%80%E8%B5%B7%E6%8A%93%23) `142.4K 🔥` `-63%`

Updated at 2026-08-18 17:16:58

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
