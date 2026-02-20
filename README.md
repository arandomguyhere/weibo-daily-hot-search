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

1. [周口扶沟辟谣中学女生遭欺凌晕倒 (Zhoukou Fugou refutes rumors that a middle school girl was bullied and fainted)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%8F%A3%E6%89%B6%E6%B2%9F%E8%BE%9F%E8%B0%A3%E4%B8%AD%E5%AD%A6%E5%A5%B3%E7%94%9F%E9%81%AD%E6%AC%BA%E5%87%8C%E6%99%95%E5%80%92%23) `371.9K 🔥` `NEW`
1. [王乐乐官宣恋情](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B9%90%E4%B9%90%E5%AE%98%E5%AE%A3%E6%81%8B%E6%83%85%23) `329.5K 🔥` `NEW`
1. [露上牙说话和露下牙说话的区别](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E4%B8%8A%E7%89%99%E8%AF%B4%E8%AF%9D%E5%92%8C%E9%9C%B2%E4%B8%8B%E7%89%99%E8%AF%B4%E8%AF%9D%E7%9A%84%E5%8C%BA%E5%88%AB%23) `305.0K 🔥` `NEW`
1. [杨清柠祝福王乐乐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B8%85%E6%9F%A0%E7%A5%9D%E7%A6%8F%E7%8E%8B%E4%B9%90%E4%B9%90%23) `300.3K 🔥` `NEW`
1. [金泰亨指责闵熙珍泄露聊天记录](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E6%8C%87%E8%B4%A3%E9%97%B5%E7%86%99%E7%8F%8D%E6%B3%84%E9%9C%B2%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `167.1K 🔥` `NEW`
1. [丫丫马口夺食](https://s.weibo.com/weibo?q=%23%E4%B8%AB%E4%B8%AB%E9%A9%AC%E5%8F%A3%E5%A4%BA%E9%A3%9F%23) `139.1K 🔥` `NEW`
1. [陈平自曝和韦雪前男友做朋友的原因](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B9%B3%E8%87%AA%E6%9B%9D%E5%92%8C%E9%9F%A6%E9%9B%AA%E5%89%8D%E7%94%B7%E5%8F%8B%E5%81%9A%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `131.3K 🔥` `NEW`
1. [撒贝宁主持一半找不到龙洋了](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E4%B8%BB%E6%8C%81%E4%B8%80%E5%8D%8A%E6%89%BE%E4%B8%8D%E5%88%B0%E9%BE%99%E6%B4%8B%E4%BA%86%23) `120.1K 🔥` `NEW`
1. [宁忠岩金牌含金量恐怖如斯](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E9%87%91%E7%89%8C%E5%90%AB%E9%87%91%E9%87%8F%E6%81%90%E6%80%96%E5%A6%82%E6%96%AF%23) `118.4K 🔥` `NEW`
1. [美国拦截多架俄罗斯军机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8B%A6%E6%88%AA%E5%A4%9A%E6%9E%B6%E4%BF%84%E7%BD%97%E6%96%AF%E5%86%9B%E6%9C%BA%23) `117.5K 🔥` `NEW`
1. [i人过年有的是力气和手段 (i people have the strength and means to celebrate the new year)](https://s.weibo.com/weibo?q=%23i%E4%BA%BA%E8%BF%87%E5%B9%B4%E6%9C%89%E7%9A%84%E6%98%AF%E5%8A%9B%E6%B0%94%E5%92%8C%E6%89%8B%E6%AE%B5%23) `116.4K 🔥` `NEW`
1. [尹锡悦亲手打造的法律成回旋镖](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E4%BA%B2%E6%89%8B%E6%89%93%E9%80%A0%E7%9A%84%E6%B3%95%E5%BE%8B%E6%88%90%E5%9B%9E%E6%97%8B%E9%95%96%23) `105.3K 🔥` `NEW`
1. [新年第一会是AI癫疯大会](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E7%AC%AC%E4%B8%80%E4%BC%9A%E6%98%AFAI%E7%99%AB%E7%96%AF%E5%A4%A7%E4%BC%9A%23) `104.9K 🔥` `NEW`
1. [春晚舞台比你想象中要小](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E8%88%9E%E5%8F%B0%E6%AF%94%E4%BD%A0%E6%83%B3%E8%B1%A1%E4%B8%AD%E8%A6%81%E5%B0%8F%23) `86.2K 🔥` `NEW`
1. [你家是开银行的啊](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%AE%B6%E6%98%AF%E5%BC%80%E9%93%B6%E8%A1%8C%E7%9A%84%E5%95%8A%23) `81.9K 🔥` `NEW`
1. [命里有财具象化](https://s.weibo.com/weibo?q=%23%E5%91%BD%E9%87%8C%E6%9C%89%E8%B4%A2%E5%85%B7%E8%B1%A1%E5%8C%96%23) `369.4K 🔥` `+223%`
1. [谷爱凌妈妈眼圈哭红了 (Gu Ailing’s mother’s eyes were red from crying)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A6%88%E5%A6%88%E7%9C%BC%E5%9C%88%E5%93%AD%E7%BA%A2%E4%BA%86%23) `345.1K 🔥` `+88%`
1. [关晓彤发表情后秒删](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%8F%91%E8%A1%A8%E6%83%85%E5%90%8E%E7%A7%92%E5%88%A0%23) `322.6K 🔥` `+76%`
1. [镖人改编 删吻戏](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%94%B9%E7%BC%96%20%E5%88%A0%E5%90%BB%E6%88%8F%23) `230.4K 🔥` `+28%`
1. [沃尔沃XC70绝望冰壶挑战](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83XC70%E7%BB%9D%E6%9C%9B%E5%86%B0%E5%A3%B6%E6%8C%91%E6%88%98%23) `225.8K 🔥` `+27%`
1. [陈妍希 勇敢的姐姐先收获李雾](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%20%E5%8B%87%E6%95%A2%E7%9A%84%E5%A7%90%E5%A7%90%E5%85%88%E6%94%B6%E8%8E%B7%E6%9D%8E%E9%9B%BE%23) `224.9K 🔥` `+40%`
1. [悉尼偶遇张极张峻豪 (Encountering Zhang Ji and Zhang Junhao in Sydney)](https://s.weibo.com/weibo?q=%23%E6%82%89%E5%B0%BC%E5%81%B6%E9%81%87%E5%BC%A0%E6%9E%81%E5%BC%A0%E5%B3%BB%E8%B1%AA%23) `169.7K 🔥` `+108%`
1. [苏翊鸣连考古都是高清的](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%BF%9E%E8%80%83%E5%8F%A4%E9%83%BD%E6%98%AF%E9%AB%98%E6%B8%85%E7%9A%84%23) `168.1K 🔥` `+139%`
1. [一路高速免费到家门口收费了 (Free highway all the way to your doorstep. Charges apply.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%B7%AF%E9%AB%98%E9%80%9F%E5%85%8D%E8%B4%B9%E5%88%B0%E5%AE%B6%E9%97%A8%E5%8F%A3%E6%94%B6%E8%B4%B9%E4%BA%86%23) `99.4K 🔥` `+31%`
1. [低山臭水遇知音](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E5%B1%B1%E8%87%AD%E6%B0%B4%E9%81%87%E7%9F%A5%E9%9F%B3%23) `87.0K 🔥` `+21%`
1. [容止 谢景行 (Rong Zhi Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%AD%A2%20%E8%B0%A2%E6%99%AF%E8%A1%8C%23) `841.7K 🔥`
1. [骑马踏雪巡逻的边防战士 (Border guards patrolling on horseback in the snow)](https://s.weibo.com/weibo?q=%23%E9%AA%91%E9%A9%AC%E8%B8%8F%E9%9B%AA%E5%B7%A1%E9%80%BB%E7%9A%84%E8%BE%B9%E9%98%B2%E6%88%98%E5%A3%AB%23) `634.8K 🔥`
1. [将门独后官宣王鹤棣孟子义 (The only queen in the general family announced Wang Hedi and Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%AE%98%E5%AE%A3%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%23) `441.4K 🔥`
1. [初中生扶摔倒女子遭索赔22万将开庭](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%89%B6%E6%91%94%E5%80%92%E5%A5%B3%E5%AD%90%E9%81%AD%E7%B4%A2%E8%B5%9422%E4%B8%87%E5%B0%86%E5%BC%80%E5%BA%AD%23) `412.6K 🔥`
1. [吴京 我的夫人姓谢](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%88%91%E7%9A%84%E5%A4%AB%E4%BA%BA%E5%A7%93%E8%B0%A2%23) `380.2K 🔥`
1. [内蒙古男子因喂流浪猫被杀害](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E7%94%B7%E5%AD%90%E5%9B%A0%E5%96%82%E6%B5%81%E6%B5%AA%E7%8C%AB%E8%A2%AB%E6%9D%80%E5%AE%B3%23) `368.7K 🔥`
1. [80岁老人把金手镯做成5枚金戒指](https://s.weibo.com/weibo?q=%2380%E5%B2%81%E8%80%81%E4%BA%BA%E6%8A%8A%E9%87%91%E6%89%8B%E9%95%AF%E5%81%9A%E6%88%905%E6%9E%9A%E9%87%91%E6%88%92%E6%8C%87%23) `176.5K 🔥`
1. [一家三口返乡途中患病儿子突然离世](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E8%BF%94%E4%B9%A1%E9%80%94%E4%B8%AD%E6%82%A3%E7%97%85%E5%84%BF%E5%AD%90%E7%AA%81%E7%84%B6%E7%A6%BB%E4%B8%96%23) `171.7K 🔥`
1. [深圳震感](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%9C%87%E6%84%9F%23) `169.8K 🔥`
1. [儿子寒假睡到中午爸爸不许家人打扰](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%AF%92%E5%81%87%E7%9D%A1%E5%88%B0%E4%B8%AD%E5%8D%88%E7%88%B8%E7%88%B8%E4%B8%8D%E8%AE%B8%E5%AE%B6%E4%BA%BA%E6%89%93%E6%89%B0%23) `169.3K 🔥`
1. [吴京跳刀马 扣了16次扳机 (Wu Jing jumped on the knife horse and pulled the trigger 16 times)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E8%B7%B3%E5%88%80%E9%A9%AC%20%E6%89%A3%E4%BA%8616%E6%AC%A1%E6%89%B3%E6%9C%BA%23) `169.0K 🔥`
1. [将门独后开机 (Turn on the door alone)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%BC%80%E6%9C%BA%23) `168.7K 🔥`
1. [贫穷最可怕的是贫穷的思维基因 (The most terrifying thing about poverty is the poor thinking gene)](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E7%A9%B7%E6%9C%80%E5%8F%AF%E6%80%95%E7%9A%84%E6%98%AF%E8%B4%AB%E7%A9%B7%E7%9A%84%E6%80%9D%E7%BB%B4%E5%9F%BA%E5%9B%A0%23) `146.8K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `142.3K 🔥`
1. [于正金粉红包 还没领完 (Yu Zhengjin’s pink envelope has not been collected yet.)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E9%87%91%E7%B2%89%E7%BA%A2%E5%8C%85%20%E8%BF%98%E6%B2%A1%E9%A2%86%E5%AE%8C%23) `137.8K 🔥`
1. [将门毒后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `104.8K 🔥`
1. [将门独后原著 大女主](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%8E%9F%E8%91%97%20%E5%A4%A7%E5%A5%B3%E4%B8%BB%23) `98.8K 🔥`
1. [女子疑似输液过敏导致不适身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%96%91%E4%BC%BC%E8%BE%93%E6%B6%B2%E8%BF%87%E6%95%8F%E5%AF%BC%E8%87%B4%E4%B8%8D%E9%80%82%E8%BA%AB%E4%BA%A1%23) `77.4K 🔥`
1. [广东地震 (Guangdong earthquake)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%9C%B0%E9%9C%87%23) `1.1M 🔥` `-27%`
1. [鸡景房](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E6%99%AF%E6%88%BF%23) `350.3K 🔥` `-24%`
1. [短剧上星](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E4%B8%8A%E6%98%9F%23) `168.0K 🔥` `-31%`
1. [金泰亨说illit像newjeans](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E8%AF%B4illit%E5%83%8Fnewjeans%23) `137.5K 🔥` `-21%`
1. [500块压岁钱发出5万的感觉](https://s.weibo.com/weibo?q=%23500%E5%9D%97%E5%8E%8B%E5%B2%81%E9%92%B1%E5%8F%91%E5%87%BA5%E4%B8%87%E7%9A%84%E6%84%9F%E8%A7%89%23) `131.5K 🔥` `-26%`
1. [女子订洛杉矶民宿入住当天遭取消](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AE%A2%E6%B4%9B%E6%9D%89%E7%9F%B6%E6%B0%91%E5%AE%BF%E5%85%A5%E4%BD%8F%E5%BD%93%E5%A4%A9%E9%81%AD%E5%8F%96%E6%B6%88%23) `97.6K 🔥` `-45%`
1. [黄一鸣回应长得像刘亦菲 (Huang Yiming responded that he looks like Liu Yifei)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E5%9B%9E%E5%BA%94%E9%95%BF%E5%BE%97%E5%83%8F%E5%88%98%E4%BA%A6%E8%8F%B2%23) `87.0K 🔥` `-22%`
1. [孟子义沈妙的一滴泪](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%88%E5%A6%99%E7%9A%84%E4%B8%80%E6%BB%B4%E6%B3%AA%23) `78.0K 🔥` `-32%`

Updated at 2026-02-20 16:06:46

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
