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

1. [龙餐馆 现挂 (Dragon Restaurant now available)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E7%8E%B0%E6%8C%82%23) `771.7K 🔥` `NEW`
1. [不要允许人一边使用你一边否定你](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%85%81%E8%AE%B8%E4%BA%BA%E4%B8%80%E8%BE%B9%E4%BD%BF%E7%94%A8%E4%BD%A0%E4%B8%80%E8%BE%B9%E5%90%A6%E5%AE%9A%E4%BD%A0%23) `768.9K 🔥` `NEW`
1. [桃黑黑说真的挺不好意思](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E8%AF%B4%E7%9C%9F%E7%9A%84%E6%8C%BA%E4%B8%8D%E5%A5%BD%E6%84%8F%E6%80%9D%23) `701.4K 🔥` `NEW`
1. [黄圣依离婚后首次带儿子安麟出镜](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%E7%A6%BB%E5%A9%9A%E5%90%8E%E9%A6%96%E6%AC%A1%E5%B8%A6%E5%84%BF%E5%AD%90%E5%AE%89%E9%BA%9F%E5%87%BA%E9%95%9C%23) `632.1K 🔥` `NEW`
1. [幼童网约车内呕吐家长赔付250元](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%86%85%E5%91%95%E5%90%90%E5%AE%B6%E9%95%BF%E8%B5%94%E4%BB%98250%E5%85%83%23) `365.0K 🔥` `NEW`
1. [泡面巨头靠涨价赚翻了](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%E5%B7%A8%E5%A4%B4%E9%9D%A0%E6%B6%A8%E4%BB%B7%E8%B5%9A%E7%BF%BB%E4%BA%86%23) `261.4K 🔥` `NEW`
1. [6岁女儿学跳舞让爸爸减了37斤](https://s.weibo.com/weibo?q=%236%E5%B2%81%E5%A5%B3%E5%84%BF%E5%AD%A6%E8%B7%B3%E8%88%9E%E8%AE%A9%E7%88%B8%E7%88%B8%E5%87%8F%E4%BA%8637%E6%96%A4%23) `261.1K 🔥` `NEW`
1. [小猫一个星期拿下姥姥](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%80%E4%B8%AA%E6%98%9F%E6%9C%9F%E6%8B%BF%E4%B8%8B%E5%A7%A5%E5%A7%A5%23) `260.9K 🔥` `NEW`
1. [五公庆功宴](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `260.8K 🔥` `NEW`
1. [阳光出行涉事司机已被永久下线](https://s.weibo.com/weibo?q=%23%E9%98%B3%E5%85%89%E5%87%BA%E8%A1%8C%E6%B6%89%E4%BA%8B%E5%8F%B8%E6%9C%BA%E5%B7%B2%E8%A2%AB%E6%B0%B8%E4%B9%85%E4%B8%8B%E7%BA%BF%23) `260.7K 🔥` `NEW`
1. [左奇函过度透气 (Zuo Qihan is too breathable)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E8%BF%87%E5%BA%A6%E9%80%8F%E6%B0%94%23) `260.6K 🔥` `NEW`
1. [王一博转圈喷香水](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BD%AC%E5%9C%88%E5%96%B7%E9%A6%99%E6%B0%B4%23) `260.3K 🔥` `NEW`
1. [王奕 丝芭传媒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A5%95%20%E4%B8%9D%E8%8A%AD%E4%BC%A0%E5%AA%92%23) `260.0K 🔥` `NEW`
1. [田柾国看金硕珍笑到要晕倒](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9F%BE%E5%9B%BD%E7%9C%8B%E9%87%91%E7%A1%95%E7%8F%8D%E7%AC%91%E5%88%B0%E8%A6%81%E6%99%95%E5%80%92%23) `259.9K 🔥` `NEW`
1. [印度教授发中国街景称被印媒骗惨了](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%95%99%E6%8E%88%E5%8F%91%E4%B8%AD%E5%9B%BD%E8%A1%97%E6%99%AF%E7%A7%B0%E8%A2%AB%E5%8D%B0%E5%AA%92%E9%AA%97%E6%83%A8%E4%BA%86%23) `782.7K 🔥` `+160%`
1. [榴莲价格彻底崩了 (Durian prices have completely collapsed)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%E5%BD%BB%E5%BA%95%E5%B4%A9%E4%BA%86%23) `776.6K 🔥` `+71%`
1. [大批AI博主停更了 (A large number of AI bloggers stopped updating)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9AI%E5%8D%9A%E4%B8%BB%E5%81%9C%E6%9B%B4%E4%BA%86%23) `766.2K 🔥` `+97%`
1. [长剧试行边改边播机制](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%89%A7%E8%AF%95%E8%A1%8C%E8%BE%B9%E6%94%B9%E8%BE%B9%E6%92%AD%E6%9C%BA%E5%88%B6%23) `760.6K 🔥` `+175%`
1. [弟弟举报哥哥案母亲首度露面](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E4%B8%BE%E6%8A%A5%E5%93%A5%E5%93%A5%E6%A1%88%E6%AF%8D%E4%BA%B2%E9%A6%96%E5%BA%A6%E9%9C%B2%E9%9D%A2%23) `756.2K 🔥` `+587%`
1. [17岁女孩搭车路过邵阳司机下车失联被锁2小时 (A 17-year-old girl was hitchhiking in Shaoyang. The driver got out of the car and lost contact. She was locked for 2 hours.)](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%90%AD%E8%BD%A6%E8%B7%AF%E8%BF%87%E9%82%B5%E9%98%B3%E5%8F%B8%E6%9C%BA%E4%B8%8B%E8%BD%A6%E5%A4%B1%E8%81%94%E8%A2%AB%E9%94%812%E5%B0%8F%E6%97%B6%23) `751.5K 🔥` `+174%`
1. [许家印崩了东北富二代42个亿](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%B4%A9%E4%BA%86%E4%B8%9C%E5%8C%97%E5%AF%8C%E4%BA%8C%E4%BB%A342%E4%B8%AA%E4%BA%BF%23) `739.5K 🔥` `+168%`
1. [李嫣几乎看不见唇腭裂修复痕迹 (Li Yan’s cleft lip and palate repair traces are almost invisible)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%87%A0%E4%B9%8E%E7%9C%8B%E4%B8%8D%E8%A7%81%E5%94%87%E8%85%AD%E8%A3%82%E4%BF%AE%E5%A4%8D%E7%97%95%E8%BF%B9%23) `738.5K 🔥` `+168%`
1. [赵海峰接受调查](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%E6%8E%A5%E5%8F%97%E8%B0%83%E6%9F%A5%23) `694.1K 🔥` `+371%`
1. [童装设计 引人触摸](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E8%A3%85%E8%AE%BE%E8%AE%A1%20%E5%BC%95%E4%BA%BA%E8%A7%A6%E6%91%B8%23) `599.7K 🔥` `+385%`
1. [丁禹兮是在培养死士吗 (Is Ding Yuxi training dead soldiers?)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%98%AF%E5%9C%A8%E5%9F%B9%E5%85%BB%E6%AD%BB%E5%A3%AB%E5%90%97%23) `495.8K 🔥` `+134%`
1. [加强中小学教师医务人员欠薪治理](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E5%BC%BA%E4%B8%AD%E5%B0%8F%E5%AD%A6%E6%95%99%E5%B8%88%E5%8C%BB%E5%8A%A1%E4%BA%BA%E5%91%98%E6%AC%A0%E8%96%AA%E6%B2%BB%E7%90%86%23) `429.4K 🔥` `+106%`
1. [蓝盈莹和男友刚在一起没多久](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%92%8C%E7%94%B7%E5%8F%8B%E5%88%9A%E5%9C%A8%E4%B8%80%E8%B5%B7%E6%B2%A1%E5%A4%9A%E4%B9%85%23) `281.7K 🔥` `+38%`
1. [曹骏初舞台人气票数倒挂 (Cao Junchu’s stage popularity votes are upside down)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%88%9D%E8%88%9E%E5%8F%B0%E4%BA%BA%E6%B0%94%E7%A5%A8%E6%95%B0%E5%80%92%E6%8C%82%23) `261.3K 🔥` `+27%`
1. [醉鹅娘 走私](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%B9%85%E5%A8%98%20%E8%B5%B0%E7%A7%81%23) `261.2K 🔥` `+127%`
1. [学籍顶替案哥哥称不存在冒名顶替](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%A7%B0%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%86%92%E5%90%8D%E9%A1%B6%E6%9B%BF%23) `261.1K 🔥` `+100%`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `261.0K 🔥` `+25%`
1. [多方回应女子杭州酒局遭伤害 (Many parties responded to the woman’s injury in a Hangzhou wine shop)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E9%81%AD%E4%BC%A4%E5%AE%B3%23) `261.0K 🔥` `+26%`
1. [小狗乖乖坐挖掘机电梯出坑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B9%96%E4%B9%96%E5%9D%90%E6%8C%96%E6%8E%98%E6%9C%BA%E7%94%B5%E6%A2%AF%E5%87%BA%E5%9D%91%23) `260.9K 🔥` `+27%`
1. [女子想烫大波浪结果烫成钢丝球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%B3%E7%83%AB%E5%A4%A7%E6%B3%A2%E6%B5%AA%E7%BB%93%E6%9E%9C%E7%83%AB%E6%88%90%E9%92%A2%E4%B8%9D%E7%90%83%23) `260.7K 🔥` `+28%`
1. [100余名中国人在巴基斯坦被拘 (More than 100 Chinese nationals detained in Pakistan)](https://s.weibo.com/weibo?q=%23100%E4%BD%99%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%9C%A8%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%A2%AB%E6%8B%98%23) `260.6K 🔥` `+116%`
1. [曝iPhone18ProMax独占可变光圈 (Exclusive variable aperture for iPhone 18 Pro Max revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18ProMax%E7%8B%AC%E5%8D%A0%E5%8F%AF%E5%8F%98%E5%85%89%E5%9C%88%23) `260.5K 🔥` `+114%`
1. [Jennie不得不用头发遮挡 (Jennie had to cover it up with her hair)](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%94%A8%E5%A4%B4%E5%8F%91%E9%81%AE%E6%8C%A1%23) `260.4K 🔥` `+127%`
1. [美航母多人精神崩溃想跳海 (Several people on a US aircraft carrier suffered a nervous breakdown and wanted to jump into the sea)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%88%AA%E6%AF%8D%E5%A4%9A%E4%BA%BA%E7%B2%BE%E7%A5%9E%E5%B4%A9%E6%BA%83%E6%83%B3%E8%B7%B3%E6%B5%B7%23) `260.4K 🔥` `+64%`
1. [左奇函回应身体状况](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E5%9B%9E%E5%BA%94%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `260.3K 🔥` `+87%`
1. [珍妮巴斯或无法继续担任湖人老板](https://s.weibo.com/weibo?q=%23%E7%8F%8D%E5%A6%AE%E5%B7%B4%E6%96%AF%E6%88%96%E6%97%A0%E6%B3%95%E7%BB%A7%E7%BB%AD%E6%8B%85%E4%BB%BB%E6%B9%96%E4%BA%BA%E8%80%81%E6%9D%BF%23) `260.2K 🔥` `+71%`
1. [郭敬明发百妖谱原始帧 (Guo Jingming released the original frame of the Hundred Demons Spectrum)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E7%99%BE%E5%A6%96%E8%B0%B1%E5%8E%9F%E5%A7%8B%E5%B8%A7%23) `260.1K 🔥` `+139%`
1. [美国巨头买了3200辆中国车 (American giant buys 3,200 Chinese cars)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B7%A8%E5%A4%B4%E4%B9%B0%E4%BA%863200%E8%BE%86%E4%B8%AD%E5%9B%BD%E8%BD%A6%23) `260.0K 🔥` `+145%`
1. [天安门下半旗悼念朱镕基同志 (Flags flown at half-mast in Tiananmen Square to mourn Comrade Zhu Rongji)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E4%B8%8B%E5%8D%8A%E6%97%97%E6%82%BC%E5%BF%B5%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%23) `1.1M 🔥`
1. [前7个月国民经济总体平稳向新向优 (In the first seven months, the national economy has generally been stable and improving.)](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E6%80%BB%E4%BD%93%E5%B9%B3%E7%A8%B3%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `781.0K 🔥`
1. [817稻米狂欢进行时](https://s.weibo.com/weibo?q=%23817%E7%A8%BB%E7%B1%B3%E7%8B%82%E6%AC%A2%E8%BF%9B%E8%A1%8C%E6%97%B6%23) `776.6K 🔥`
1. [BBA大降价 宝马5系跌至28万](https://s.weibo.com/weibo?q=%23BBA%E5%A4%A7%E9%99%8D%E4%BB%B7%20%E5%AE%9D%E9%A9%AC5%E7%B3%BB%E8%B7%8C%E8%87%B328%E4%B8%87%23) `743.9K 🔥`
1. [曝时代少年团工作人员公费旅游 (Times Youth League staff members travel at public expense)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%85%AC%E8%B4%B9%E6%97%85%E6%B8%B8%23) `330.2K 🔥`
1. [杭州涉事高管曾是高考状元清华毕业](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%B6%89%E4%BA%8B%E9%AB%98%E7%AE%A1%E6%9B%BE%E6%98%AF%E9%AB%98%E8%80%83%E7%8A%B6%E5%85%83%E6%B8%85%E5%8D%8E%E6%AF%95%E4%B8%9A%23) `261.3K 🔥`
1. [井迪音乐节 (Jingdi Music Festival)](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%BF%AA%E9%9F%B3%E4%B9%90%E8%8A%82%23) `260.1K 🔥`

Updated at 2026-08-18 10:43:08

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
