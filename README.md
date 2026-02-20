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

1. [广东地震 (Guangdong earthquake)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%9C%B0%E9%9C%87%23) `1.6M 🔥` `NEW`
1. [深圳震感](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%9C%87%E6%84%9F%23) `181.1K 🔥` `NEW`
1. [沃尔沃XC70绝望冰壶挑战](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83XC70%E7%BB%9D%E6%9C%9B%E5%86%B0%E5%A3%B6%E6%8C%91%E6%88%98%23) `177.6K 🔥` `NEW`
1. [女子订洛杉矶民宿入住当天遭取消](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AE%A2%E6%B4%9B%E6%9D%89%E7%9F%B6%E6%B0%91%E5%AE%BF%E5%85%A5%E4%BD%8F%E5%BD%93%E5%A4%A9%E9%81%AD%E5%8F%96%E6%B6%88%23) `176.0K 🔥` `NEW`
1. [儿子寒假睡到中午爸爸不许家人打扰](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%AF%92%E5%81%87%E7%9D%A1%E5%88%B0%E4%B8%AD%E5%8D%88%E7%88%B8%E7%88%B8%E4%B8%8D%E8%AE%B8%E5%AE%B6%E4%BA%BA%E6%89%93%E6%89%B0%23) `174.8K 🔥` `NEW`
1. [陈妍希 勇敢的姐姐先收获李雾](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%20%E5%8B%87%E6%95%A2%E7%9A%84%E5%A7%90%E5%A7%90%E5%85%88%E6%94%B6%E8%8E%B7%E6%9D%8E%E9%9B%BE%23) `160.8K 🔥` `NEW`
1. [命里有财具象化](https://s.weibo.com/weibo?q=%23%E5%91%BD%E9%87%8C%E6%9C%89%E8%B4%A2%E5%85%B7%E8%B1%A1%E5%8C%96%23) `114.5K 🔥` `NEW`
1. [张极悉尼到达](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E6%82%89%E5%B0%BC%E5%88%B0%E8%BE%BE%23) `90.1K 🔥` `NEW`
1. [河北女婿到江西过年全是辣椒难下筷](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E5%A5%B3%E5%A9%BF%E5%88%B0%E6%B1%9F%E8%A5%BF%E8%BF%87%E5%B9%B4%E5%85%A8%E6%98%AF%E8%BE%A3%E6%A4%92%E9%9A%BE%E4%B8%8B%E7%AD%B7%23) `82.4K 🔥` `NEW`
1. [悉尼偶遇张极张峻豪](https://s.weibo.com/weibo?q=%23%E6%82%89%E5%B0%BC%E5%81%B6%E9%81%87%E5%BC%A0%E6%9E%81%E5%BC%A0%E5%B3%BB%E8%B1%AA%23) `81.5K 🔥` `NEW`
1. [一路高速免费到家门口收费了 (Free highway all the way to your doorstep. Charges apply.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%B7%AF%E9%AB%98%E9%80%9F%E5%85%8D%E8%B4%B9%E5%88%B0%E5%AE%B6%E9%97%A8%E5%8F%A3%E6%94%B6%E8%B4%B9%E4%BA%86%23) `75.9K 🔥` `NEW`
1. [短剧霸总都是黄晓明玩剩下的](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E9%9C%B8%E6%80%BB%E9%83%BD%E6%98%AF%E9%BB%84%E6%99%93%E6%98%8E%E7%8E%A9%E5%89%A9%E4%B8%8B%E7%9A%84%23) `74.6K 🔥` `NEW`
1. [低山臭水遇知音](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E5%B1%B1%E8%87%AD%E6%B0%B4%E9%81%87%E7%9F%A5%E9%9F%B3%23) `71.9K 🔥` `NEW`
1. [苏翊鸣连考古都是高清的](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%BF%9E%E8%80%83%E5%8F%A4%E9%83%BD%E6%98%AF%E9%AB%98%E6%B8%85%E7%9A%84%23) `70.3K 🔥` `NEW`
1. [王芮多次手捂胸口](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8A%AE%E5%A4%9A%E6%AC%A1%E6%89%8B%E6%8D%82%E8%83%B8%E5%8F%A3%23) `69.1K 🔥` `NEW`
1. [中国男子新西兰直播遭十余人抢劫](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E6%96%B0%E8%A5%BF%E5%85%B0%E7%9B%B4%E6%92%AD%E9%81%AD%E5%8D%81%E4%BD%99%E4%BA%BA%E6%8A%A2%E5%8A%AB%23) `68.0K 🔥` `NEW`
1. [初中生扶摔倒女子遭索赔22万将开庭](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%89%B6%E6%91%94%E5%80%92%E5%A5%B3%E5%AD%90%E9%81%AD%E7%B4%A2%E8%B5%9422%E4%B8%87%E5%B0%86%E5%BC%80%E5%BA%AD%23) `496.1K 🔥` `+503%`
1. [鸡景房](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E6%99%AF%E6%88%BF%23) `463.4K 🔥` `+237%`
1. [金泰亨说illit像newjeans](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E8%AF%B4illit%E5%83%8Fnewjeans%23) `174.6K 🔥` `+37%`
1. [容止 谢景行 (Rong Zhi Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%AD%A2%20%E8%B0%A2%E6%99%AF%E8%A1%8C%23) `920.4K 🔥`
1. [骑马踏雪巡逻的边防战士 (Border guards patrolling on horseback in the snow)](https://s.weibo.com/weibo?q=%23%E9%AA%91%E9%A9%AC%E8%B8%8F%E9%9B%AA%E5%B7%A1%E9%80%BB%E7%9A%84%E8%BE%B9%E9%98%B2%E6%88%98%E5%A3%AB%23) `743.8K 🔥`
1. [将门独后官宣王鹤棣孟子义 (The only queen in the general family announced Wang Hedi and Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%AE%98%E5%AE%A3%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%23) `464.6K 🔥`
1. [吴京 我的夫人姓谢](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%88%91%E7%9A%84%E5%A4%AB%E4%BA%BA%E5%A7%93%E8%B0%A2%23) `451.8K 🔥`
1. [谷爱凌妈妈眼圈哭红了 (Gu Ailing’s mother’s eyes were red from crying)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A6%88%E5%A6%88%E7%9C%BC%E5%9C%88%E5%93%AD%E7%BA%A2%E4%BA%86%23) `183.2K 🔥`
1. [关晓彤发表情后秒删](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%8F%91%E8%A1%A8%E6%83%85%E5%90%8E%E7%A7%92%E5%88%A0%23) `182.8K 🔥`
1. [吴京跳刀马 扣了16次扳机](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E8%B7%B3%E5%88%80%E9%A9%AC%20%E6%89%A3%E4%BA%8616%E6%AC%A1%E6%89%B3%E6%9C%BA%23) `182.2K 🔥`
1. [镖人改编 删吻戏](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%94%B9%E7%BC%96%20%E5%88%A0%E5%90%BB%E6%88%8F%23) `180.4K 🔥`
1. [将门独后开机 (Turn on the door alone)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%BC%80%E6%9C%BA%23) `179.8K 🔥`
1. [500块压岁钱发出5万的感觉](https://s.weibo.com/weibo?q=%23500%E5%9D%97%E5%8E%8B%E5%B2%81%E9%92%B1%E5%8F%91%E5%87%BA5%E4%B8%87%E7%9A%84%E6%84%9F%E8%A7%89%23) `176.9K 🔥`
1. [贫穷最可怕的是贫穷的思维基因 (The most terrifying thing about poverty is the poor thinking gene)](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E7%A9%B7%E6%9C%80%E5%8F%AF%E6%80%95%E7%9A%84%E6%98%AF%E8%B4%AB%E7%A9%B7%E7%9A%84%E6%80%9D%E7%BB%B4%E5%9F%BA%E5%9B%A0%23) `142.4K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `127.7K 🔥`
1. [于正金粉红包 还没领完 (Yu Zhengjin’s pink envelope has not been collected yet.)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E9%87%91%E7%B2%89%E7%BA%A2%E5%8C%85%20%E8%BF%98%E6%B2%A1%E9%A2%86%E5%AE%8C%23) `115.0K 🔥`
1. [孟子义沈妙的一滴泪](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%88%E5%A6%99%E7%9A%84%E4%B8%80%E6%BB%B4%E6%B3%AA%23) `114.4K 🔥`
1. [黄一鸣回应长得像刘亦菲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E5%9B%9E%E5%BA%94%E9%95%BF%E5%BE%97%E5%83%8F%E5%88%98%E4%BA%A6%E8%8F%B2%23) `110.9K 🔥`
1. [手术室为什么会放花生米 (Why are peanuts placed in the operating room?)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%AF%E5%AE%A4%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%94%BE%E8%8A%B1%E7%94%9F%E7%B1%B3%23) `108.2K 🔥`
1. [将门毒后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `106.0K 🔥`
1. [将门独后原著 大女主](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%8E%9F%E8%91%97%20%E5%A4%A7%E5%A5%B3%E4%B8%BB%23) `105.3K 🔥`
1. [徐志胜回家过年忙成接客松 (Xu Zhisheng went home to celebrate the New Year and was busy picking up guests)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%E5%BF%99%E6%88%90%E6%8E%A5%E5%AE%A2%E6%9D%BE%23) `95.4K 🔥`
1. [夜王](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E7%8E%8B%23) `86.1K 🔥`
1. [前TVB演员赵希洛官宣结婚](https://s.weibo.com/weibo?q=%23%E5%89%8DTVB%E6%BC%94%E5%91%98%E8%B5%B5%E5%B8%8C%E6%B4%9B%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A%23) `78.9K 🔥`
1. [复仇的决心 张小斐](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E4%BB%87%E7%9A%84%E5%86%B3%E5%BF%83%20%E5%BC%A0%E5%B0%8F%E6%96%90%23) `70.6K 🔥`
1. [AI情话新年 (AI Love Words New Year)](https://s.weibo.com/weibo?q=%23AI%E6%83%85%E8%AF%9D%E6%96%B0%E5%B9%B4%23) `513.5K 🔥` `-30%`
1. [内蒙古男子因喂流浪猫被杀害](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E7%94%B7%E5%AD%90%E5%9B%A0%E5%96%82%E6%B5%81%E6%B5%AA%E7%8C%AB%E8%A2%AB%E6%9D%80%E5%AE%B3%23) `370.1K 🔥` `-23%`
1. [短剧上星](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E4%B8%8A%E6%98%9F%23) `242.0K 🔥` `-49%`
1. [80岁老人把金手镯做成5枚金戒指](https://s.weibo.com/weibo?q=%2380%E5%B2%81%E8%80%81%E4%BA%BA%E6%8A%8A%E9%87%91%E6%89%8B%E9%95%AF%E5%81%9A%E6%88%905%E6%9E%9A%E9%87%91%E6%88%92%E6%8C%87%23) `178.8K 🔥` `-78%`
1. [一家三口返乡途中患病儿子突然离世](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E8%BF%94%E4%B9%A1%E9%80%94%E4%B8%AD%E6%82%A3%E7%97%85%E5%84%BF%E5%AD%90%E7%AA%81%E7%84%B6%E7%A6%BB%E4%B8%96%23) `178.3K 🔥` `-63%`
1. [宁夏地震](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%A4%8F%E5%9C%B0%E9%9C%87%23) `99.4K 🔥` `-45%`
1. [女子疑似输液过敏导致不适身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%96%91%E4%BC%BC%E8%BE%93%E6%B6%B2%E8%BF%87%E6%95%8F%E5%AF%BC%E8%87%B4%E4%B8%8D%E9%80%82%E8%BA%AB%E4%BA%A1%23) `91.9K 🔥` `-38%`
1. [男子连番自摸突然栽倒血压200多 (Man touched himself repeatedly and suddenly his blood pressure dropped to over 200)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9E%E7%95%AA%E8%87%AA%E6%91%B8%E7%AA%81%E7%84%B6%E6%A0%BD%E5%80%92%E8%A1%80%E5%8E%8B200%E5%A4%9A%23) `87.5K 🔥` `-42%`
1. [五年了沃尔沃总裁怎么还在玩命 (Why is Volvo’s president still risking his life after five years?)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%B9%B4%E4%BA%86%E6%B2%83%E5%B0%94%E6%B2%83%E6%80%BB%E8%A3%81%E6%80%8E%E4%B9%88%E8%BF%98%E5%9C%A8%E7%8E%A9%E5%91%BD%23) `86.0K 🔥` `-46%`
1. [中国队还有三个夺金点](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E8%BF%98%E6%9C%89%E4%B8%89%E4%B8%AA%E5%A4%BA%E9%87%91%E7%82%B9%23) `67.6K 🔥` `-42%`

Updated at 2026-02-20 15:35:04

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
