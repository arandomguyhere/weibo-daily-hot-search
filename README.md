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

1. [老坛酸菜 脚踩 (Laotan pickled cabbage)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%9D%9B%E9%85%B8%E8%8F%9C%20%E8%84%9A%E8%B8%A9%23) `1.2M 🔥` `NEW`
1. [白海豚提前登陆](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23) `900.1K 🔥` `NEW`
1. [中国留学生写差评的方式太隐晦了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%86%99%E5%B7%AE%E8%AF%84%E7%9A%84%E6%96%B9%E5%BC%8F%E5%A4%AA%E9%9A%90%E6%99%A6%E4%BA%86%23) `696.5K 🔥` `NEW`
1. [披哥6初舞台歌单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A56%E5%88%9D%E8%88%9E%E5%8F%B0%E6%AD%8C%E5%8D%95%23) `649.7K 🔥` `NEW`
1. [张含韵背了杨博文痛包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%90%AB%E9%9F%B5%E8%83%8C%E4%BA%86%E6%9D%A8%E5%8D%9A%E6%96%87%E7%97%9B%E5%8C%85%23) `455.0K 🔥` `NEW`
1. [易烊千玺百花提名现场](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%99%BE%E8%8A%B1%E6%8F%90%E5%90%8D%E7%8E%B0%E5%9C%BA%23) `352.5K 🔥` `NEW`
1. [买10副太阳镜9副不合格](https://s.weibo.com/weibo?q=%23%E4%B9%B010%E5%89%AF%E5%A4%AA%E9%98%B3%E9%95%9C9%E5%89%AF%E4%B8%8D%E5%90%88%E6%A0%BC%23) `337.0K 🔥` `NEW`
1. [王玉雯林一蛐蛐刘宇宁李乃文](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%9E%97%E4%B8%80%E8%9B%90%E8%9B%90%E5%88%98%E5%AE%87%E5%AE%81%E6%9D%8E%E4%B9%83%E6%96%87%23) `329.8K 🔥` `NEW`
1. [上海中心大厦千吨阻尼器摆动明显](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%AD%E5%BF%83%E5%A4%A7%E5%8E%A6%E5%8D%83%E5%90%A8%E9%98%BB%E5%B0%BC%E5%99%A8%E6%91%86%E5%8A%A8%E6%98%8E%E6%98%BE%23) `327.3K 🔥` `NEW`
1. [钟睒睒认为电商平台本质就是中间商](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%9D%92%E7%9D%92%E8%AE%A4%E4%B8%BA%E7%94%B5%E5%95%86%E5%B9%B3%E5%8F%B0%E6%9C%AC%E8%B4%A8%E5%B0%B1%E6%98%AF%E4%B8%AD%E9%97%B4%E5%95%86%23) `309.8K 🔥` `NEW`
1. [郑州00后冰二代家中负债近2亿元 (The second generation of post-00s generation in Zhengzhou has a debt of nearly 200 million yuan)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E00%E5%90%8E%E5%86%B0%E4%BA%8C%E4%BB%A3%E5%AE%B6%E4%B8%AD%E8%B4%9F%E5%80%BA%E8%BF%912%E4%BA%BF%E5%85%83%23) `302.2K 🔥` `NEW`
1. [折叠屏iPhone配色](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0%E5%B1%8FiPhone%E9%85%8D%E8%89%B2%23) `269.8K 🔥` `NEW`
1. [BLG经理谈Bin和Flandre](https://s.weibo.com/weibo?q=%23BLG%E7%BB%8F%E7%90%86%E8%B0%88Bin%E5%92%8CFlandre%23) `267.2K 🔥` `NEW`
1. [百花奖提名者表彰仪式](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E6%8F%90%E5%90%8D%E8%80%85%E8%A1%A8%E5%BD%B0%E4%BB%AA%E5%BC%8F%23) `263.3K 🔥` `NEW`
1. [梁家辉易烊千玺自拍](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%87%AA%E6%8B%8D%23) `249.7K 🔥` `NEW`
1. [看完麦积山全窟需2000元引争议](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E9%BA%A6%E7%A7%AF%E5%B1%B1%E5%85%A8%E7%AA%9F%E9%9C%802000%E5%85%83%E5%BC%95%E4%BA%89%E8%AE%AE%23) `228.9K 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `221.4K 🔥` `NEW`
1. [男子婚内出轨2人被开除后起诉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A82%E4%BA%BA%E8%A2%AB%E5%BC%80%E9%99%A4%E5%90%8E%E8%B5%B7%E8%AF%89%23) `220.3K 🔥` `NEW`
1. [海力士最贵生意凉了](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%9C%80%E8%B4%B5%E7%94%9F%E6%84%8F%E5%87%89%E4%BA%86%23) `200.8K 🔥` `NEW`
1. [九门吴老狗变干尸 (Jiumen Wu old dog turns into mummy)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%90%B4%E8%80%81%E7%8B%97%E5%8F%98%E5%B9%B2%E5%B0%B8%23) `571.9K 🔥` `+38%`
1. [预制娃](https://s.weibo.com/weibo?q=%23%E9%A2%84%E5%88%B6%E5%A8%83%23) `570.4K 🔥` `+100%`
1. [田曦薇没刘海差点认不出来 (Tian Xiwei is almost unrecognizable without bangs)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E5%88%98%E6%B5%B7%E5%B7%AE%E7%82%B9%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `550.2K 🔥` `+45%`
1. [金智秀直播力挺哥哥](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E7%9B%B4%E6%92%AD%E5%8A%9B%E6%8C%BA%E5%93%A5%E5%93%A5%23) `512.1K 🔥` `+42%`
1. [儿子去世老人要查孙子血缘儿媳拒绝](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E8%A6%81%E6%9F%A5%E5%AD%99%E5%AD%90%E8%A1%80%E7%BC%98%E5%84%BF%E5%AA%B3%E6%8B%92%E7%BB%9D%23) `504.4K 🔥` `+34%`
1. [韩雨彤 鼻子 (Han Yutong nose)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%20%E9%BC%BB%E5%AD%90%23) `471.9K 🔥` `+25%`
1. [这蛋糕也太秃然了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%9B%8B%E7%B3%95%E4%B9%9F%E5%A4%AA%E7%A7%83%E7%84%B6%E4%BA%86%23) `287.7K 🔥` `+27%`
1. [一组数据读懂中国经济底气 (A set of data to understand China’s economic confidence)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E8%AF%BB%E6%87%82%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%BA%95%E6%B0%94%23) `750.9K 🔥`
1. [BLG官宣Flandre加入](https://s.weibo.com/weibo?q=%23BLG%E5%AE%98%E5%AE%A3Flandre%E5%8A%A0%E5%85%A5%23) `729.0K 🔥`
1. [iPhone17下周或涨价](https://s.weibo.com/weibo?q=%23iPhone17%E4%B8%8B%E5%91%A8%E6%88%96%E6%B6%A8%E4%BB%B7%23) `348.3K 🔥`
1. [长崎将把南京大屠杀改为南京事件](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%B4%8E%E5%B0%86%E6%8A%8A%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E6%94%B9%E4%B8%BA%E5%8D%97%E4%BA%AC%E4%BA%8B%E4%BB%B6%23) `347.0K 🔥`
1. [曹骏圈内人缘](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%9C%88%E5%86%85%E4%BA%BA%E7%BC%98%23) `346.4K 🔥`
1. [古二曝繁花剧组有人吸毒](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E4%BA%8C%E6%9B%9D%E7%B9%81%E8%8A%B1%E5%89%A7%E7%BB%84%E6%9C%89%E4%BA%BA%E5%90%B8%E6%AF%92%23) `344.6K 🔥`
1. [全上海都在偶遇赵丽颖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%8A%E6%B5%B7%E9%83%BD%E5%9C%A8%E5%81%B6%E9%81%87%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `229.7K 🔥`
1. [唐九洲看了披哥阵容天塌了 (Tang Jiuzhou saw the lineup of Brother Pi and the sky fell.)](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E7%9C%8B%E4%BA%86%E6%8A%AB%E5%93%A5%E9%98%B5%E5%AE%B9%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `218.9K 🔥`
1. [中国品牌青年榜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `217.7K 🔥`
1. [披荆斩棘阵容官宣 (Official announcement of the lineup to overcome all obstacles)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `705.1K 🔥` `-38%`
1. [白海豚最大可能登陆地点](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%9C%80%E5%A4%A7%E5%8F%AF%E8%83%BD%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%23) `552.1K 🔥` `-31%`
1. [张本智和4比2松岛辉空](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C4%E6%AF%942%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `451.4K 🔥` `-24%`
1. [酥就是油多 脆就是糖多](https://s.weibo.com/weibo?q=%23%E9%85%A5%E5%B0%B1%E6%98%AF%E6%B2%B9%E5%A4%9A%20%E8%84%86%E5%B0%B1%E6%98%AF%E7%B3%96%E5%A4%9A%23) `331.1K 🔥` `-40%`
1. [关晓彤喊话披荆斩棘冲冲冲 (Guan Xiaotong’s slogan is to overcome all obstacles and rush forward)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%8A%E8%AF%9D%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%86%B2%E5%86%B2%E5%86%B2%23) `285.8K 🔥` `-47%`
1. [荷兰弟婚礼 瞒着全世界办了三天](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E5%A9%9A%E7%A4%BC%20%E7%9E%92%E7%9D%80%E5%85%A8%E4%B8%96%E7%95%8C%E5%8A%9E%E4%BA%86%E4%B8%89%E5%A4%A9%23) `262.5K 🔥` `-27%`
1. [樊振东入选中国品牌青年榜](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%85%A5%E9%80%89%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `257.6K 🔥` `-33%`
1. [邵兵上披哥认人发了狠忘了情](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%E4%B8%8A%E6%8A%AB%E5%93%A5%E8%AE%A4%E4%BA%BA%E5%8F%91%E4%BA%86%E7%8B%A0%E5%BF%98%E4%BA%86%E6%83%85%23) `250.9K 🔥` `-28%`
1. [叠纸心意 周边](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%BF%83%E6%84%8F%20%E5%91%A8%E8%BE%B9%23) `233.3K 🔥` `-39%`
1. [王传君 披荆斩棘 (Wang Chuanjun overcoming obstacles)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `228.4K 🔥` `-35%`
1. [无穷小亮 曹操摔碗](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%A9%B7%E5%B0%8F%E4%BA%AE%20%E6%9B%B9%E6%93%8D%E6%91%94%E7%A2%97%23) `221.2K 🔥` `-38%`
1. [iPhone18Pro 涨价 (iPhone18Pro price increase)](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E6%B6%A8%E4%BB%B7%23) `205.1K 🔥` `-39%`
1. [时代少年团第四张专辑](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%AC%AC%E5%9B%9B%E5%BC%A0%E4%B8%93%E8%BE%91%23) `202.9K 🔥` `-36%`
1. [王楚钦入选中国品牌青年榜 (Wang Chuqin was selected into the China Brand Youth List)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%85%A5%E9%80%89%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `200.6K 🔥` `-44%`
1. [左航晒耳洞 (Zuo Hang gets his ears pierced)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%99%92%E8%80%B3%E6%B4%9E%23) `198.7K 🔥` `-44%`

Updated at 2026-08-09 16:02:00

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
