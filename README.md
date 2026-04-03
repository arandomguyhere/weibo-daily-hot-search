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

1. [同事被炼化了 (Colleagues were refined)](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E8%A2%AB%E7%82%BC%E5%8C%96%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [贵州一县委书记闭幕致辞火了](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E4%B8%80%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E9%97%AD%E5%B9%95%E8%87%B4%E8%BE%9E%E7%81%AB%E4%BA%86%23) `809.8K 🔥` `NEW`
1. [韩国40岁导演遭围殴致死引众怒](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD40%E5%B2%81%E5%AF%BC%E6%BC%94%E9%81%AD%E5%9B%B4%E6%AE%B4%E8%87%B4%E6%AD%BB%E5%BC%95%E4%BC%97%E6%80%92%23) `452.3K 🔥` `NEW`
1. [伊朗袭击美甲骨文和亚马逊数据中心](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E7%BE%8E%E7%94%B2%E9%AA%A8%E6%96%87%E5%92%8C%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%23) `372.2K 🔥` `NEW`
1. [女子流清水鼻涕20天竟是脑脊液](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B5%81%E6%B8%85%E6%B0%B4%E9%BC%BB%E6%B6%9520%E5%A4%A9%E7%AB%9F%E6%98%AF%E8%84%91%E8%84%8A%E6%B6%B2%23) `320.5K 🔥` `NEW`
1. [25岁海警被走私艇冲撞牺牲画面](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E6%B5%B7%E8%AD%A6%E8%A2%AB%E8%B5%B0%E7%A7%81%E8%89%87%E5%86%B2%E6%92%9E%E7%89%BA%E7%89%B2%E7%94%BB%E9%9D%A2%23) `302.7K 🔥` `NEW`
1. [职工拒接离职同事工作被解雇](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%B7%A5%E6%8B%92%E6%8E%A5%E7%A6%BB%E8%81%8C%E5%90%8C%E4%BA%8B%E5%B7%A5%E4%BD%9C%E8%A2%AB%E8%A7%A3%E9%9B%87%23) `227.3K 🔥` `NEW`
1. [陈畅说李小冉靠一张脸在北舞躺平七年](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%95%85%E8%AF%B4%E6%9D%8E%E5%B0%8F%E5%86%89%E9%9D%A0%E4%B8%80%E5%BC%A0%E8%84%B8%E5%9C%A8%E5%8C%97%E8%88%9E%E8%BA%BA%E5%B9%B3%E4%B8%83%E5%B9%B4%23) `224.6K 🔥` `NEW`
1. [jennie比基尼大片](https://s.weibo.com/weibo?q=%23jennie%E6%AF%94%E5%9F%BA%E5%B0%BC%E5%A4%A7%E7%89%87%23) `223.5K 🔥` `NEW`
1. [现在才读懂孔雀东南飞](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%89%8D%E8%AF%BB%E6%87%82%E5%AD%94%E9%9B%80%E4%B8%9C%E5%8D%97%E9%A3%9E%23) `207.2K 🔥` `NEW`
1. [张雪妻子晒账本 (Zhang Xue’s wife shares her account book)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%A6%BB%E5%AD%90%E6%99%92%E8%B4%A6%E6%9C%AC%23) `197.1K 🔥` `NEW`
1. [住户将炉灶放窗外炒菜](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E6%88%B7%E5%B0%86%E7%82%89%E7%81%B6%E6%94%BE%E7%AA%97%E5%A4%96%E7%82%92%E8%8F%9C%23) `193.2K 🔥` `NEW`
1. [孙怡镜头](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%95%9C%E5%A4%B4%23) `186.5K 🔥` `NEW`
1. [温峥嵘回应海清献血请她吃烤鸭](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E5%9B%9E%E5%BA%94%E6%B5%B7%E6%B8%85%E7%8C%AE%E8%A1%80%E8%AF%B7%E5%A5%B9%E5%90%83%E7%83%A4%E9%B8%AD%23) `186.0K 🔥` `NEW`
1. [小警犬刚到警局就被全体同事的围观了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AD%A6%E7%8A%AC%E5%88%9A%E5%88%B0%E8%AD%A6%E5%B1%80%E5%B0%B1%E8%A2%AB%E5%85%A8%E4%BD%93%E5%90%8C%E4%BA%8B%E7%9A%84%E5%9B%B4%E8%A7%82%E4%BA%86%23) `132.8K 🔥` `NEW`
1. [王楚然突发身体不适](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `129.3K 🔥` `NEW`
1. [苹果第8号员工](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%AC%AC8%E5%8F%B7%E5%91%98%E5%B7%A5%23) `124.0K 🔥` `NEW`
1. [小孩哥春游发现罂粟秒报警](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E6%98%A5%E6%B8%B8%E5%8F%91%E7%8E%B0%E7%BD%82%E7%B2%9F%E7%A7%92%E6%8A%A5%E8%AD%A6%23) `121.9K 🔥` `NEW`
1. [陈飞宇是迪丽热巴第一位共创的男主](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AC%AC%E4%B8%80%E4%BD%8D%E5%85%B1%E5%88%9B%E7%9A%84%E7%94%B7%E4%B8%BB%23) `121.2K 🔥` `NEW`
1. [40岁抗癌博主雨鑫妈妈离世](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E9%9B%A8%E9%91%AB%E5%A6%88%E5%A6%88%E7%A6%BB%E4%B8%96%23) `116.9K 🔥` `NEW`
1. [美防长要求陆军参谋长辞职并立即退休 (US Defense Secretary asks Army Chief of Staff to resign and retire immediately)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%98%B2%E9%95%BF%E8%A6%81%E6%B1%82%E9%99%86%E5%86%9B%E5%8F%82%E8%B0%8B%E9%95%BF%E8%BE%9E%E8%81%8C%E5%B9%B6%E7%AB%8B%E5%8D%B3%E9%80%80%E4%BC%91%23) `115.4K 🔥` `NEW`
1. [狗子误咬女主人被一顿胖揍](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%AD%90%E8%AF%AF%E5%92%AC%E5%A5%B3%E4%B8%BB%E4%BA%BA%E8%A2%AB%E4%B8%80%E9%A1%BF%E8%83%96%E6%8F%8D%23) `109.4K 🔥` `NEW`
1. [张国荣祖居被发现](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%9B%BD%E8%8D%A3%E7%A5%96%E5%B1%85%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `93.7K 🔥` `NEW`
1. [特斯拉再度产销失衡](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%86%8D%E5%BA%A6%E4%BA%A7%E9%94%80%E5%A4%B1%E8%A1%A1%23) `90.6K 🔥` `NEW`
1. [马克龙批评特朗普](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%8B%E9%BE%99%E6%89%B9%E8%AF%84%E7%89%B9%E6%9C%97%E6%99%AE%23) `82.9K 🔥` `NEW`
1. [腰不好就练这四个动作](https://s.weibo.com/weibo?q=%23%E8%85%B0%E4%B8%8D%E5%A5%BD%E5%B0%B1%E7%BB%83%E8%BF%99%E5%9B%9B%E4%B8%AA%E5%8A%A8%E4%BD%9C%23) `82.4K 🔥` `NEW`
1. [会计的噩梦](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%AE%A1%E7%9A%84%E5%99%A9%E6%A2%A6%23) `80.8K 🔥` `NEW`
1. [有报道称伊朗向中方寻求安全保障](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%8A%A5%E9%81%93%E7%A7%B0%E4%BC%8A%E6%9C%97%E5%90%91%E4%B8%AD%E6%96%B9%E5%AF%BB%E6%B1%82%E5%AE%89%E5%85%A8%E4%BF%9D%E9%9A%9C%23) `79.5K 🔥` `NEW`
1. [女子回应家中跌倒丈夫冷眼旁观](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E5%AE%B6%E4%B8%AD%E8%B7%8C%E5%80%92%E4%B8%88%E5%A4%AB%E5%86%B7%E7%9C%BC%E6%97%81%E8%A7%82%23) `78.9K 🔥` `NEW`
1. [王鹤棣谢景行红衣少年郎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%B0%A2%E6%99%AF%E8%A1%8C%E7%BA%A2%E8%A1%A3%E5%B0%91%E5%B9%B4%E9%83%8E%23) `77.3K 🔥` `NEW`
1. [一个修图软件为什么想借钱给我 (Why does a photo editing software want to lend me money?)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BF%AE%E5%9B%BE%E8%BD%AF%E4%BB%B6%E4%B8%BA%E4%BB%80%E4%B9%88%E6%83%B3%E5%80%9F%E9%92%B1%E7%BB%99%E6%88%91%23) `76.7K 🔥` `NEW`
1. [张雪车队2026剩余赛程](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%BD%A6%E9%98%9F2026%E5%89%A9%E4%BD%99%E8%B5%9B%E7%A8%8B%23) `74.3K 🔥` `NEW`
1. [伊朗称霍尔木兹不会回到战前状态](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E4%B8%8D%E4%BC%9A%E5%9B%9E%E5%88%B0%E6%88%98%E5%89%8D%E7%8A%B6%E6%80%81%23) `72.8K 🔥` `NEW`
1. [MAMAMOO官宣世巡](https://s.weibo.com/weibo?q=%23MAMAMOO%E5%AE%98%E5%AE%A3%E4%B8%96%E5%B7%A1%23) `71.6K 🔥` `NEW`
1. [养车成本上涨](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%BD%A6%E6%88%90%E6%9C%AC%E4%B8%8A%E6%B6%A8%23) `69.5K 🔥` `NEW`
1. [张天爱发文回应变样](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E5%8F%98%E6%A0%B7%23) `390.3K 🔥` `+167%`
1. [唐艺昕陶昕然 宝娟我的嗓子 (Tang Yixin Tao Xinran Baojuan My Throat)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E9%99%B6%E6%98%95%E7%84%B6%20%E5%AE%9D%E5%A8%9F%E6%88%91%E7%9A%84%E5%97%93%E5%AD%90%23) `236.7K 🔥` `+66%`
1. [张天爱变样了 (Zhang Tianai has changed)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%8F%98%E6%A0%B7%E4%BA%86%23) `225.9K 🔥` `+40%`
1. [王濛 安崎没满30不能淘汰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E5%AE%89%E5%B4%8E%E6%B2%A1%E6%BB%A130%E4%B8%8D%E8%83%BD%E6%B7%98%E6%B1%B0%23) `207.1K 🔥` `+33%`
1. [人鱼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E9%B1%BC%23) `206.1K 🔥` `+242%`
1. [伊朗真正意义上的核武器](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9C%9F%E6%AD%A3%E6%84%8F%E4%B9%89%E4%B8%8A%E7%9A%84%E6%A0%B8%E6%AD%A6%E5%99%A8%23) `205.1K 🔥` `+44%`
1. [男子出轨染病给女友同意赔50万又后悔](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E6%9F%93%E7%97%85%E7%BB%99%E5%A5%B3%E5%8F%8B%E5%90%8C%E6%84%8F%E8%B5%9450%E4%B8%87%E5%8F%88%E5%90%8E%E6%82%94%23) `170.1K 🔥` `+189%`
1. [多城实施住房公积金新政 (Many cities implement new housing provident fund policies)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9F%8E%E5%AE%9E%E6%96%BD%E4%BD%8F%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E6%94%BF%23) `663.1K 🔥`
1. [优思益代言人 (Yousiyi spokesperson)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `161.7K 🔥`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `89.1K 🔥`
1. [嘴唇发紫博主称一直以为身体正常 (Blogger with purple lips says he always thought his body was normal)](https://s.weibo.com/weibo?q=%23%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%E5%8D%9A%E4%B8%BB%E7%A7%B0%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E8%BA%AB%E4%BD%93%E6%AD%A3%E5%B8%B8%23) `225.3K 🔥` `-70%`
1. [孙怡说我看那玩意儿干啥啊 (Sun Yi said, what am I doing looking at that thing?)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%AF%B4%E6%88%91%E7%9C%8B%E9%82%A3%E7%8E%A9%E6%84%8F%E5%84%BF%E5%B9%B2%E5%95%A5%E5%95%8A%23) `111.1K 🔥` `-33%`
1. [这种天然青霉素就在你家餐桌上 (This natural penicillin is on your table)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E5%A4%A9%E7%84%B6%E9%9D%92%E9%9C%89%E7%B4%A0%E5%B0%B1%E5%9C%A8%E4%BD%A0%E5%AE%B6%E9%A4%90%E6%A1%8C%E4%B8%8A%23) `104.1K 🔥` `-27%`
1. [伊朗标志性大桥遭袭 (Iran's iconic bridge attacked)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%A0%87%E5%BF%97%E6%80%A7%E5%A4%A7%E6%A1%A5%E9%81%AD%E8%A2%AD%23) `96.3K 🔥` `-64%`

Updated at 2026-04-03 10:01:28

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
