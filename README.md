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

1. [G2战胜TES (G2 defeated TES)](https://s.weibo.com/weibo?q=%23G2%E6%88%98%E8%83%9CTES%23) `1.7M 🔥` `NEW`
1. [海军航空兵英雄方明不幸牺牲](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%86%9B%E8%88%AA%E7%A9%BA%E5%85%B5%E8%8B%B1%E9%9B%84%E6%96%B9%E6%98%8E%E4%B8%8D%E5%B9%B8%E7%89%BA%E7%89%B2%23) `1.2M 🔥` `NEW`
1. [秦岚新座驾比亚迪海豹08](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E6%96%B0%E5%BA%A7%E9%A9%BE%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%B5%B7%E8%B1%B908%23) `1.2M 🔥` `NEW`
1. [车船税](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E8%88%B9%E7%A8%8E%23) `1.2M 🔥` `NEW`
1. [G2让二追三](https://s.weibo.com/weibo?q=%23G2%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%23) `937.4K 🔥` `NEW`
1. [网友推荐李清照选角](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8E%A8%E8%8D%90%E6%9D%8E%E6%B8%85%E7%85%A7%E9%80%89%E8%A7%92%23) `912.0K 🔥` `NEW`
1. [特立独行职场心眼子摸底考](https://s.weibo.com/weibo?q=%23%E7%89%B9%E7%AB%8B%E7%8B%AC%E8%A1%8C%E8%81%8C%E5%9C%BA%E5%BF%83%E7%9C%BC%E5%AD%90%E6%91%B8%E5%BA%95%E8%80%83%23) `881.8K 🔥` `NEW`
1. [人或许真的不需要牙杯](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%88%96%E8%AE%B8%E7%9C%9F%E7%9A%84%E4%B8%8D%E9%9C%80%E8%A6%81%E7%89%99%E6%9D%AF%23) `859.0K 🔥` `NEW`
1. [长胖30斤对面部改变有多大](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%83%9630%E6%96%A4%E5%AF%B9%E9%9D%A2%E9%83%A8%E6%94%B9%E5%8F%98%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `782.7K 🔥` `NEW`
1. [昆明11死2伤铁路事故直接原因](https://s.weibo.com/weibo?q=%23%E6%98%86%E6%98%8E11%E6%AD%BB2%E4%BC%A4%E9%93%81%E8%B7%AF%E4%BA%8B%E6%95%85%E7%9B%B4%E6%8E%A5%E5%8E%9F%E5%9B%A0%23) `754.9K 🔥` `NEW`
1. [山新皇贞季宣布离婚 (Shanxin Huang Zhenji announces divorce)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E6%96%B0%E7%9A%87%E8%B4%9E%E5%AD%A3%E5%AE%A3%E5%B8%83%E7%A6%BB%E5%A9%9A%23) `743.9K 🔥` `NEW`
1. [时代少年团 演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `646.3K 🔥` `NEW`
1. [小米高管评老企业不敢承诺十年包修](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E8%AF%84%E8%80%81%E4%BC%81%E4%B8%9A%E4%B8%8D%E6%95%A2%E6%89%BF%E8%AF%BA%E5%8D%81%E5%B9%B4%E5%8C%85%E4%BF%AE%23) `599.2K 🔥` `NEW`
1. [C罗再遇西班牙宿敌对决](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%86%8D%E9%81%87%E8%A5%BF%E7%8F%AD%E7%89%99%E5%AE%BF%E6%95%8C%E5%AF%B9%E5%86%B3%23) `587.8K 🔥` `NEW`
1. [茉莉奶白近四成商标无效](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E8%BF%91%E5%9B%9B%E6%88%90%E5%95%86%E6%A0%87%E6%97%A0%E6%95%88%23) `524.7K 🔥` `NEW`
1. [买超回应没有离婚只有丧偶](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%B6%85%E5%9B%9E%E5%BA%94%E6%B2%A1%E6%9C%89%E7%A6%BB%E5%A9%9A%E5%8F%AA%E6%9C%89%E4%B8%A7%E5%81%B6%23) `475.5K 🔥` `NEW`
1. [TF家族运动会VCR](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9AVCR%23) `448.6K 🔥` `NEW`
1. [台风美莎克](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BE%8E%E8%8E%8E%E5%85%8B%23) `410.7K 🔥` `NEW`
1. [唐艺昕叫本名有种我妈在叫我的感觉](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%8F%AB%E6%9C%AC%E5%90%8D%E6%9C%89%E7%A7%8D%E6%88%91%E5%A6%88%E5%9C%A8%E5%8F%AB%E6%88%91%E7%9A%84%E6%84%9F%E8%A7%89%23) `410.6K 🔥` `NEW`
1. [何炅听到周柯宇比丁程鑫小的反应](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%90%AC%E5%88%B0%E5%91%A8%E6%9F%AF%E5%AE%87%E6%AF%94%E4%B8%81%E7%A8%8B%E9%91%AB%E5%B0%8F%E7%9A%84%E5%8F%8D%E5%BA%94%23) `382.3K 🔥` `NEW`
1. [上海暴雨 (Heavy rain in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `382.1K 🔥` `NEW`
1. [张元英下颌缘淤青](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E4%B8%8B%E9%A2%8C%E7%BC%98%E6%B7%A4%E9%9D%92%23) `351.7K 🔥` `NEW`
1. [G2虐泉TES](https://s.weibo.com/weibo?q=%23G2%E8%99%90%E6%B3%89TES%23) `324.1K 🔥` `NEW`
1. [TF家族运动会彩蛋计划](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%BD%A9%E8%9B%8B%E8%AE%A1%E5%88%92%23) `295.9K 🔥` `NEW`
1. [Caps辛德拉五杀](https://s.weibo.com/weibo?q=%23Caps%E8%BE%9B%E5%BE%B7%E6%8B%89%E4%BA%94%E6%9D%80%23) `282.0K 🔥` `NEW`
1. [女孩摸自行车把手遭掌掴妈妈发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%91%B8%E8%87%AA%E8%A1%8C%E8%BD%A6%E6%8A%8A%E6%89%8B%E9%81%AD%E6%8E%8C%E6%8E%B4%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `227.5K 🔥` `NEW`
1. [听见你说 外战看滔搏](https://s.weibo.com/weibo?q=%23%E5%90%AC%E8%A7%81%E4%BD%A0%E8%AF%B4%20%E5%A4%96%E6%88%98%E7%9C%8B%E6%BB%94%E6%90%8F%23) `210.8K 🔥` `NEW`
1. [成毅开机拍立得](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%BC%80%E6%9C%BA%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `194.2K 🔥` `NEW`
1. [女儿高考收到破烂红包女子当场哽咽](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E9%AB%98%E8%80%83%E6%94%B6%E5%88%B0%E7%A0%B4%E7%83%82%E7%BA%A2%E5%8C%85%E5%A5%B3%E5%AD%90%E5%BD%93%E5%9C%BA%E5%93%BD%E5%92%BD%23) `194.0K 🔥` `NEW`
1. [多品牌回应宠粮检出三聚氰胺](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%93%81%E7%89%8C%E5%9B%9E%E5%BA%94%E5%AE%A0%E7%B2%AE%E6%A3%80%E5%87%BA%E4%B8%89%E8%81%9A%E6%B0%B0%E8%83%BA%23) `189.8K 🔥` `NEW`
1. [关晓彤杀青后第一件事 (The first thing Guan Xiaotong did after finishing filming)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9D%80%E9%9D%92%E5%90%8E%E7%AC%AC%E4%B8%80%E4%BB%B6%E4%BA%8B%23) `186.0K 🔥` `NEW`
1. [韩媒称洪明甫在更衣室训斥孙兴慜](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E7%A7%B0%E6%B4%AA%E6%98%8E%E7%94%AB%E5%9C%A8%E6%9B%B4%E8%A1%A3%E5%AE%A4%E8%AE%AD%E6%96%A5%E5%AD%99%E5%85%B4%E6%85%9C%23) `184.1K 🔥` `NEW`
1. [92号汽油加满一箱油将少花37.5元](https://s.weibo.com/weibo?q=%2392%E5%8F%B7%E6%B1%BD%E6%B2%B9%E5%8A%A0%E6%BB%A1%E4%B8%80%E7%AE%B1%E6%B2%B9%E5%B0%86%E5%B0%91%E8%8A%B137.5%E5%85%83%23) `154.2K 🔥` `NEW`
1. [12个新职业要来了](https://s.weibo.com/weibo?q=%2312%E4%B8%AA%E6%96%B0%E8%81%8C%E4%B8%9A%E8%A6%81%E6%9D%A5%E4%BA%86%23) `147.7K 🔥` `NEW`
1. [小糯米已经和TF五代一样大了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%B7%B2%E7%BB%8F%E5%92%8CTF%E4%BA%94%E4%BB%A3%E4%B8%80%E6%A0%B7%E5%A4%A7%E4%BA%86%23) `769.6K 🔥` `+182%`
1. [茉莉奶白已成功登记四叶星著作权 (Jasmine Milk White has successfully registered the copyright of Four-leaf Star)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%B7%B2%E6%88%90%E5%8A%9F%E7%99%BB%E8%AE%B0%E5%9B%9B%E5%8F%B6%E6%98%9F%E8%91%97%E4%BD%9C%E6%9D%83%23) `748.6K 🔥` `+139%`
1. [哈梅内伊遗体告别仪式举行](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%97%E4%BD%93%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%E4%B8%BE%E8%A1%8C%23) `609.7K 🔥` `+124%`
1. [曝阿里禁用Claude](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%98%BF%E9%87%8C%E7%A6%81%E7%94%A8Claude%23) `602.0K 🔥` `+91%`
1. [金世佳肚子](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%B8%96%E4%BD%B3%E8%82%9A%E5%AD%90%23) `585.4K 🔥` `+97%`
1. [田曦薇 基因彩票](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%9F%BA%E5%9B%A0%E5%BD%A9%E7%A5%A8%23) `409.7K 🔥` `+32%`
1. [油价4日起下调](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B74%E6%97%A5%E8%B5%B7%E4%B8%8B%E8%B0%83%23) `391.2K 🔥` `+29%`
1. [各领域拔节生长尽显发展动能 (Joint growth in various fields shows development momentum)](https://s.weibo.com/weibo?q=%23%E5%90%84%E9%A2%86%E5%9F%9F%E6%8B%94%E8%8A%82%E7%94%9F%E9%95%BF%E5%B0%BD%E6%98%BE%E5%8F%91%E5%B1%95%E5%8A%A8%E8%83%BD%23) `1.2M 🔥`
1. [上门取件焦虑症](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%97%A8%E5%8F%96%E4%BB%B6%E7%84%A6%E8%99%91%E7%97%87%23) `613.3K 🔥`
1. [花少8阵容真的好强大](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E9%98%B5%E5%AE%B9%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%BC%BA%E5%A4%A7%23) `803.2K 🔥` `-47%`
1. [莫德里奇炮轰裁判 (Modric blasts referee)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E7%82%AE%E8%BD%B0%E8%A3%81%E5%88%A4%23) `777.3K 🔥` `-53%`
1. [花少8 王可](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E7%8E%8B%E5%8F%AF%23) `384.9K 🔥` `-46%`
1. [原来这才是男生眼里的漂亮饭 (It turns out that this is what boys see as beautiful rice)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E7%94%B7%E7%94%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E6%BC%82%E4%BA%AE%E9%A5%AD%23) `214.3K 🔥` `-32%`
1. [空调电费](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E7%94%B5%E8%B4%B9%23) `194.2K 🔥` `-80%`
1. [鞠婧祎发量被怀疑戴了假发片](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8F%91%E9%87%8F%E8%A2%AB%E6%80%80%E7%96%91%E6%88%B4%E4%BA%86%E5%81%87%E5%8F%91%E7%89%87%23) `183.3K 🔥` `-37%`
1. [白玉兰最佳编剧被指冒名 (Magnolia's best screenwriter accused of impersonation)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E7%BC%96%E5%89%A7%E8%A2%AB%E6%8C%87%E5%86%92%E5%90%8D%23) `171.9K 🔥` `-42%`
1. [G2对战TES](https://s.weibo.com/weibo?q=%23G2%E5%AF%B9%E6%88%98TES%23) `167.8K 🔥` `-37%`
1. [克罗地亚出局后崩溃](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E5%87%BA%E5%B1%80%E5%90%8E%E5%B4%A9%E6%BA%83%23) `161.8K 🔥` `-45%`

Updated at 2026-07-03 19:10:08

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
