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

1. [问界M9星光之夜阵容夯爆了 (Wenjie M9 Starlight Night lineup is in full swing)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E6%98%9F%E5%85%89%E4%B9%8B%E5%A4%9C%E9%98%B5%E5%AE%B9%E5%A4%AF%E7%88%86%E4%BA%86%23) `42.4K 🔥` `NEW`
1. [惊蛰无声直播](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E7%9B%B4%E6%92%AD%23) `15.9K 🔥` `NEW`
1. [南博文物事件24人被处理](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8D%9A%E6%96%87%E7%89%A9%E4%BA%8B%E4%BB%B624%E4%BA%BA%E8%A2%AB%E5%A4%84%E7%90%86%23) `92.4K 🔥` `+72%`
1. [车厘子价格崩了口感也崩了 (The price of cherries has plummeted, and so has their taste.)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E4%BB%B7%E6%A0%BC%E5%B4%A9%E4%BA%86%E5%8F%A3%E6%84%9F%E4%B9%9F%E5%B4%A9%E4%BA%86%23) `67.3K 🔥`
1. [冰上版速度与激情观看指南](https://s.weibo.com/weibo?q=%23%E5%86%B0%E4%B8%8A%E7%89%88%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E8%A7%82%E7%9C%8B%E6%8C%87%E5%8D%97%23) `52.6K 🔥`
1. [开始推理吧4 (Let’s start reasoning 4)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A74%23) `42.0K 🔥`
1. [南京博物院事件最新通报](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%8D%9A%E7%89%A9%E9%99%A2%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E9%80%9A%E6%8A%A5%23) `33.7K 🔥`
1. [小马糕 (pony cake)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `33.3K 🔥`
1. [谷爱凌冬奥银牌 (Gu Ailing Winter Olympics Silver Medal)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%AC%E5%A5%A5%E9%93%B6%E7%89%8C%23) `25.4K 🔥`
1. [瓦窑沟墓地M1墓主或为商代鬼方之王](https://s.weibo.com/weibo?q=%23%E7%93%A6%E7%AA%91%E6%B2%9F%E5%A2%93%E5%9C%B0M1%E5%A2%93%E4%B8%BB%E6%88%96%E4%B8%BA%E5%95%86%E4%BB%A3%E9%AC%BC%E6%96%B9%E4%B9%8B%E7%8E%8B%23) `24.3K 🔥`
1. [谷爱凌回应米兰冬奥银牌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%93%B6%E7%89%8C%23) `23.7K 🔥`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `22.9K 🔥`
1. [女子孕期被疑出轨公公转650万安抚 (Woman suspected of cheating on her father-in-law during pregnancy sends 6.5 million yuan to comfort her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E8%A2%AB%E7%96%91%E5%87%BA%E8%BD%A8%E5%85%AC%E5%85%AC%E8%BD%AC650%E4%B8%87%E5%AE%89%E6%8A%9A%23) `22.8K 🔥`
1. [爱泼斯坦被爆可能没死](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E8%A2%AB%E7%88%86%E5%8F%AF%E8%83%BD%E6%B2%A1%E6%AD%BB%23) `22.7K 🔥`
1. [保姆按要求分房睡老人离世成被告](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E6%8C%89%E8%A6%81%E6%B1%82%E5%88%86%E6%88%BF%E7%9D%A1%E8%80%81%E4%BA%BA%E7%A6%BB%E4%B8%96%E6%88%90%E8%A2%AB%E5%91%8A%23) `22.5K 🔥`
1. [金晨风波后现身澳门 (Jin Chen appeared in Macau after the incident)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E9%A3%8E%E6%B3%A2%E5%90%8E%E7%8E%B0%E8%BA%AB%E6%BE%B3%E9%97%A8%23) `22.4K 🔥`
1. [受害者第1次见爱泼斯坦被带进红房间](https://s.weibo.com/weibo?q=%23%E5%8F%97%E5%AE%B3%E8%80%85%E7%AC%AC1%E6%AC%A1%E8%A7%81%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E8%A2%AB%E5%B8%A6%E8%BF%9B%E7%BA%A2%E6%88%BF%E9%97%B4%23) `22.2K 🔥`
1. [男子让6个月孩子看电视女友劝阻后被打](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AE%A96%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%9C%8B%E7%94%B5%E8%A7%86%E5%A5%B3%E5%8F%8B%E5%8A%9D%E9%98%BB%E5%90%8E%E8%A2%AB%E6%89%93%23) `22.1K 🔥`
1. [男子在女厕所偷拍摔倒被当场抓获 (Man secretly filmed falling down in women's restroom and caught red-handed)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%A5%B3%E5%8E%95%E6%89%80%E5%81%B7%E6%8B%8D%E6%91%94%E5%80%92%E8%A2%AB%E5%BD%93%E5%9C%BA%E6%8A%93%E8%8E%B7%23) `21.9K 🔥`
1. [冬奥会 (winter olympics)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `21.8K 🔥`
1. [谷爱凌决赛](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%23) `21.7K 🔥`
1. [山东招远一金矿发生坠罐事故致7死 (Seven people died in a tank falling accident at a gold mine in Zhaoyuan, Shandong)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E6%8B%9B%E8%BF%9C%E4%B8%80%E9%87%91%E7%9F%BF%E5%8F%91%E7%94%9F%E5%9D%A0%E7%BD%90%E4%BA%8B%E6%95%85%E8%87%B47%E6%AD%BB%23) `20.0K 🔥`
1. [易烊千玺打耳洞了 (Yi Yang Qianxi had her ears pierced)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%89%93%E8%80%B3%E6%B4%9E%E4%BA%86%23) `20.0K 🔥`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `20.0K 🔥`
1. [王鹤棣就这样水灵灵的入梦了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B0%B1%E8%BF%99%E6%A0%B7%E6%B0%B4%E7%81%B5%E7%81%B5%E7%9A%84%E5%85%A5%E6%A2%A6%E4%BA%86%23) `18.7K 🔥`
1. [陈飞宇 阿瑟帅回宫了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%98%BF%E7%91%9F%E5%B8%85%E5%9B%9E%E5%AE%AB%E4%BA%86%23) `18.5K 🔥`
1. [只要华为不跪产品就不贵](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E8%A6%81%E5%8D%8E%E4%B8%BA%E4%B8%8D%E8%B7%AA%E4%BA%A7%E5%93%81%E5%B0%B1%E4%B8%8D%E8%B4%B5%23) `18.1K 🔥`
1. [从未上过班却有6份社保记录](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%9C%AA%E4%B8%8A%E8%BF%87%E7%8F%AD%E5%8D%B4%E6%9C%896%E4%BB%BD%E7%A4%BE%E4%BF%9D%E8%AE%B0%E5%BD%95%23) `18.1K 🔥`
1. [时代少年团 外务](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%A4%96%E5%8A%A1%23) `18.0K 🔥`
1. [郑钦文逆转前澳网冠军 (Zheng Qinwen reverses the former Australian Open champion)](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E5%89%8D%E6%BE%B3%E7%BD%91%E5%86%A0%E5%86%9B%23) `17.2K 🔥`
1. [这家人的住商好高 (This family's residential property is so high)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%AE%B6%E4%BA%BA%E7%9A%84%E4%BD%8F%E5%95%86%E5%A5%BD%E9%AB%98%23) `16.7K 🔥`
1. [谷爱凌第二滑23.00分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E6%BB%9123.00%E5%88%86%23) `16.1K 🔥`
1. [谍报上不封顶](https://s.weibo.com/weibo?q=%23%E8%B0%8D%E6%8A%A5%E4%B8%8A%E4%B8%8D%E5%B0%81%E9%A1%B6%23) `15.9K 🔥`
1. [网传开推4没有迪丽热巴 (Rumor has it that there is no Dilireba in 4)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%80%E6%8E%A84%E6%B2%A1%E6%9C%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `15.6K 🔥`
1. [多只小鸟撞西安万象城玻璃墙死亡 (Several birds died after hitting the glass wall of Xi'an Vientiane City)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%8F%AA%E5%B0%8F%E9%B8%9F%E6%92%9E%E8%A5%BF%E5%AE%89%E4%B8%87%E8%B1%A1%E5%9F%8E%E7%8E%BB%E7%92%83%E5%A2%99%E6%AD%BB%E4%BA%A1%23) `15.5K 🔥`
1. [谷爱凌青花瓷龙战袍绝美](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%9D%92%E8%8A%B1%E7%93%B7%E9%BE%99%E6%88%98%E8%A2%8D%E7%BB%9D%E7%BE%8E%23) `15.1K 🔥`
1. [唐宫奇案](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `14.9K 🔥`
1. [终于知道为啥有人能集齐21张了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E5%95%A5%E6%9C%89%E4%BA%BA%E8%83%BD%E9%9B%86%E9%BD%9021%E5%BC%A0%E4%BA%86%23) `14.9K 🔥`
1. [白鹿新剧放过了自己没放过别人](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E6%94%BE%E8%BF%87%E4%BA%86%E8%87%AA%E5%B7%B1%E6%B2%A1%E6%94%BE%E8%BF%87%E5%88%AB%E4%BA%BA%23) `14.9K 🔥`
1. [郑钦文vs肯宁 (Zheng Qinwen vs Kenning)](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%82%AF%E5%AE%81%23) `14.9K 🔥`
1. [奚梦瑶三步变超模脸](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%B8%89%E6%AD%A5%E5%8F%98%E8%B6%85%E6%A8%A1%E8%84%B8%23) `14.9K 🔥`
1. [网剧炽热吸引崔雨鑫方瑾](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%89%A7%E7%82%BD%E7%83%AD%E5%90%B8%E5%BC%95%E5%B4%94%E9%9B%A8%E9%91%AB%E6%96%B9%E7%91%BE%23) `14.9K 🔥`
1. [江南春图卷已存入南博书画专库](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%8D%97%E6%98%A5%E5%9B%BE%E5%8D%B7%E5%B7%B2%E5%AD%98%E5%85%A5%E5%8D%97%E5%8D%9A%E4%B9%A6%E7%94%BB%E4%B8%93%E5%BA%93%23) `14.9K 🔥`
1. [电影熊猫计划之部落奇遇记 (Movie Panda Project: Tribal Adventures)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E7%86%8A%E7%8C%AB%E8%AE%A1%E5%88%92%E4%B9%8B%E9%83%A8%E8%90%BD%E5%A5%87%E9%81%87%E8%AE%B0%23) `14.9K 🔥`
1. [女子自由式滑雪坡面障碍技巧决赛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%87%AA%E7%94%B1%E5%BC%8F%E6%BB%91%E9%9B%AA%E5%9D%A1%E9%9D%A2%E9%9A%9C%E7%A2%8D%E6%8A%80%E5%B7%A7%E5%86%B3%E8%B5%9B%23) `14.9K 🔥`
1. [生命树白菊爆头](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E7%99%BD%E8%8F%8A%E7%88%86%E5%A4%B4%23) `14.9K 🔥`
1. [卢昱晓清冷风写真](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%B8%85%E5%86%B7%E9%A3%8E%E5%86%99%E7%9C%9F%23) `14.9K 🔥`
1. [宁艺卓到底丑在哪了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%88%B0%E5%BA%95%E4%B8%91%E5%9C%A8%E5%93%AA%E4%BA%86%23) `14.9K 🔥`
1. [网民编造工地挖出银元被行拘 (Netizen was arrested after fabricating the story of digging up silver coins at a construction site)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E7%BC%96%E9%80%A0%E5%B7%A5%E5%9C%B0%E6%8C%96%E5%87%BA%E9%93%B6%E5%85%83%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `31.4K 🔥` `-44%`
1. [桃黑黑直播 (Taoheihei live broadcast)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%23) `14.9K 🔥` `-27%`
1. [杨洋吸血鬼伯爵 (Count Yang Yang vampire)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%90%B8%E8%A1%80%E9%AC%BC%E4%BC%AF%E7%88%B5%23) `14.9K 🔥` `-25%`
1. [谷爱凌跟妈妈边抱边哭40秒 (Gu Ailing hugged her mother and cried for 40 seconds)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%B7%9F%E5%A6%88%E5%A6%88%E8%BE%B9%E6%8A%B1%E8%BE%B9%E5%93%AD40%E7%A7%92%23) `14.9K 🔥` `-25%`

Updated at 2026-02-10 05:09:56

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
