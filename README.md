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

1. [李卿给齐姝的手写信 (Li Qing’s handwritten letter to Qi Shu)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%E7%BB%99%E9%BD%90%E5%A7%9D%E7%9A%84%E6%89%8B%E5%86%99%E4%BF%A1%23) `771.4K 🔥` `NEW`
1. [南方暴雨冰雹齐上阵](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E6%9A%B4%E9%9B%A8%E5%86%B0%E9%9B%B9%E9%BD%90%E4%B8%8A%E9%98%B5%23) `476.7K 🔥` `NEW`
1. [美客机与直升机相撞致67死画面曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%A2%E6%9C%BA%E4%B8%8E%E7%9B%B4%E5%8D%87%E6%9C%BA%E7%9B%B8%E6%92%9E%E8%87%B467%E6%AD%BB%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `297.4K 🔥` `NEW`
1. [蚂蚁保无限超越班开学啦](https://s.weibo.com/weibo?q=%23%E8%9A%82%E8%9A%81%E4%BF%9D%E6%97%A0%E9%99%90%E8%B6%85%E8%B6%8A%E7%8F%AD%E5%BC%80%E5%AD%A6%E5%95%A6%23) `280.2K 🔥` `NEW`
1. [官方通报亡母被伪造身份结婚](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BA%A1%E6%AF%8D%E8%A2%AB%E4%BC%AA%E9%80%A0%E8%BA%AB%E4%BB%BD%E7%BB%93%E5%A9%9A%23) `276.4K 🔥` `NEW`
1. [TES对战AL](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98AL%23) `194.6K 🔥` `NEW`
1. [周深唱月鳞绮纪主题曲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%94%B1%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E4%B8%BB%E9%A2%98%E6%9B%B2%23) `193.2K 🔥` `NEW`
1. [孔雪儿 俞浅浅你终于自由了](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%20%E4%BF%9E%E6%B5%85%E6%B5%85%E4%BD%A0%E7%BB%88%E4%BA%8E%E8%87%AA%E7%94%B1%E4%BA%86%23) `193.1K 🔥` `NEW`
1. [张凌赫直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9B%B4%E6%92%AD%23) `193.1K 🔥` `NEW`
1. [大众9X是增程车的终极答案吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%979X%E6%98%AF%E5%A2%9E%E7%A8%8B%E8%BD%A6%E7%9A%84%E7%BB%88%E6%9E%81%E7%AD%94%E6%A1%88%E5%90%97%23) `170.7K 🔥` `NEW`
1. [和蒋奇明一起出发去创作 (Set off to create with Jiang Qiming)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E8%92%8B%E5%A5%87%E6%98%8E%E4%B8%80%E8%B5%B7%E5%87%BA%E5%8F%91%E5%8E%BB%E5%88%9B%E4%BD%9C%23) `167.6K 🔥` `NEW`
1. [伊朗最高领袖哀悼革命卫队海军司令](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%93%80%E6%82%BC%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%B5%B7%E5%86%9B%E5%8F%B8%E4%BB%A4%23) `163.2K 🔥` `NEW`
1. [假装上班公司有人靠AI年入四五十万](https://s.weibo.com/weibo?q=%23%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E5%85%AC%E5%8F%B8%E6%9C%89%E4%BA%BA%E9%9D%A0AI%E5%B9%B4%E5%85%A5%E5%9B%9B%E4%BA%94%E5%8D%81%E4%B8%87%23) `161.5K 🔥` `NEW`
1. [vivo发布会](https://s.weibo.com/weibo?q=%23vivo%E5%8F%91%E5%B8%83%E4%BC%9A%23) `136.6K 🔥` `NEW`
1. [最爱齐旻的是邓凯](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%88%B1%E9%BD%90%E6%97%BB%E7%9A%84%E6%98%AF%E9%82%93%E5%87%AF%23) `123.6K 🔥` `NEW`
1. [这下真分不清工装和春装了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E7%9C%9F%E5%88%86%E4%B8%8D%E6%B8%85%E5%B7%A5%E8%A3%85%E5%92%8C%E6%98%A5%E8%A3%85%E4%BA%86%23) `104.5K 🔥` `NEW`
1. [迪丽热巴的胆子也太大了吧](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E8%83%86%E5%AD%90%E4%B9%9F%E5%A4%AA%E5%A4%A7%E4%BA%86%E5%90%A7%23) `103.8K 🔥` `NEW`
1. [魏晨说自己也想演现偶](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E8%AF%B4%E8%87%AA%E5%B7%B1%E4%B9%9F%E6%83%B3%E6%BC%94%E7%8E%B0%E5%81%B6%23) `101.0K 🔥` `NEW`
1. [富婆被男友PUA到几度想自杀](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A9%86%E8%A2%AB%E7%94%B7%E5%8F%8BPUA%E5%88%B0%E5%87%A0%E5%BA%A6%E6%83%B3%E8%87%AA%E6%9D%80%23) `100.3K 🔥` `NEW`
1. [茅台涨价](https://s.weibo.com/weibo?q=%23%E8%8C%85%E5%8F%B0%E6%B6%A8%E4%BB%B7%23) `100.3K 🔥` `NEW`
1. [隐身的名字 (invisible name)](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `99.4K 🔥` `NEW`
1. [人要活得久其实真正有用的就三样](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%A6%81%E6%B4%BB%E5%BE%97%E4%B9%85%E5%85%B6%E5%AE%9E%E7%9C%9F%E6%AD%A3%E6%9C%89%E7%94%A8%E7%9A%84%E5%B0%B1%E4%B8%89%E6%A0%B7%23) `91.5K 🔥` `NEW`
1. [这一份在学校能卖我2万](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E4%BB%BD%E5%9C%A8%E5%AD%A6%E6%A0%A1%E8%83%BD%E5%8D%96%E6%88%912%E4%B8%87%23) `83.3K 🔥` `NEW`
1. [女方回应丈夫称其结婚3天跑了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%88%E5%A4%AB%E7%A7%B0%E5%85%B6%E7%BB%93%E5%A9%9A3%E5%A4%A9%E8%B7%91%E4%BA%86%23) `82.8K 🔥` `NEW`
1. [张雪 飞驰人生](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%20%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `80.7K 🔥` `NEW`
1. [租房6年发现多帮房东交了几万电费](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF6%E5%B9%B4%E5%8F%91%E7%8E%B0%E5%A4%9A%E5%B8%AE%E6%88%BF%E4%B8%9C%E4%BA%A4%E4%BA%86%E5%87%A0%E4%B8%87%E7%94%B5%E8%B4%B9%23) `1.1M 🔥` `+1144%`
1. [张凌赫逐玉收官小作文](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E6%94%B6%E5%AE%98%E5%B0%8F%E4%BD%9C%E6%96%87%23) `459.5K 🔥` `+463%`
1. [李荣浩 爱你老己](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E7%88%B1%E4%BD%A0%E8%80%81%E5%B7%B1%23) `193.2K 🔥` `+95%`
1. [谢娜 民选微博Queen](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E6%B0%91%E9%80%89%E5%BE%AE%E5%8D%9AQueen%23) `145.1K 🔥` `+50%`
1. [垫底辣孩的脸怎么了 (What happened to the face of the hottie at the bottom?)](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `128.0K 🔥` `+40%`
1. [以色列海法炼油厂遭袭起火](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B5%B7%E6%B3%95%E7%82%BC%E6%B2%B9%E5%8E%82%E9%81%AD%E8%A2%AD%E8%B5%B7%E7%81%AB%23) `127.4K 🔥` `+53%`
1. [业内谈单依纯是否知情李白授权细节 (The industry talks about whether Shan Yichun knows the details of Li Bai’s authorization)](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%B0%88%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%98%AF%E5%90%A6%E7%9F%A5%E6%83%85%E6%9D%8E%E7%99%BD%E6%8E%88%E6%9D%83%E7%BB%86%E8%8A%82%23) `127.1K 🔥` `+47%`
1. [为什么屁股针越来越少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B1%81%E8%82%A1%E9%92%88%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%E4%BA%86%23) `123.8K 🔥` `+33%`
1. [张雪说要赠送尹正机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B4%E8%A6%81%E8%B5%A0%E9%80%81%E5%B0%B9%E6%AD%A3%E6%9C%BA%E8%BD%A6%23) `123.4K 🔥` `+44%`
1. [这young的中国爱了](https://s.weibo.com/weibo?q=%23%E8%BF%99young%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%88%B1%E4%BA%86%23) `602.8K 🔥`
1. [那英唱三五句也要问版权问题 (When Na Ying sings three or five lines, he still has to ask about copyright issues)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%94%B1%E4%B8%89%E4%BA%94%E5%8F%A5%E4%B9%9F%E8%A6%81%E9%97%AE%E7%89%88%E6%9D%83%E9%97%AE%E9%A2%98%23) `295.4K 🔥`
1. [张雪机车夺冠估值超10亿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E4%BC%B0%E5%80%BC%E8%B6%8510%E4%BA%BF%23) `193.2K 🔥`
1. [被长隆动物园淋雨狮子刷屏了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%95%BF%E9%9A%86%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%B7%8B%E9%9B%A8%E7%8B%AE%E5%AD%90%E5%88%B7%E5%B1%8F%E4%BA%86%23) `193.0K 🔥`
1. [招商银行董事长称员工很少准时下班](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C%E8%91%A3%E4%BA%8B%E9%95%BF%E7%A7%B0%E5%91%98%E5%B7%A5%E5%BE%88%E5%B0%91%E5%87%86%E6%97%B6%E4%B8%8B%E7%8F%AD%23) `174.0K 🔥`
1. [嫩豆腐放冷藏变成了腐竹 (Refrigerate the soft tofu and turn it into yuba)](https://s.weibo.com/weibo?q=%23%E5%AB%A9%E8%B1%86%E8%85%90%E6%94%BE%E5%86%B7%E8%97%8F%E5%8F%98%E6%88%90%E4%BA%86%E8%85%90%E7%AB%B9%23) `99.0K 🔥`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `86.4K 🔥`
1. [退18.8万元彩礼一家人现状 (The family’s current situation after receiving a 188,000 yuan betrothal gift refund)](https://s.weibo.com/weibo?q=%23%E9%80%8018.8%E4%B8%87%E5%85%83%E5%BD%A9%E7%A4%BC%E4%B8%80%E5%AE%B6%E4%BA%BA%E7%8E%B0%E7%8A%B6%23) `273.9K 🔥` `-74%`
1. [广东暴雨已经超越了雨刮器的极限](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%B7%B2%E7%BB%8F%E8%B6%85%E8%B6%8A%E4%BA%86%E9%9B%A8%E5%88%AE%E5%99%A8%E7%9A%84%E6%9E%81%E9%99%90%23) `193.2K 🔥` `-41%`
1. [逐玉收官](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%94%B6%E5%AE%98%23) `156.2K 🔥` `-31%`
1. [全红婵决定再坚持跳一跳 (Quan Hongchan decided to keep dancing one more time)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%86%B3%E5%AE%9A%E5%86%8D%E5%9D%9A%E6%8C%81%E8%B7%B3%E4%B8%80%E8%B7%B3%23) `154.9K 🔥` `-80%`
1. [日方称愿意解决与中国外交紧张关系 (Japan says it is willing to resolve diplomatic tensions with China)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E7%A7%B0%E6%84%BF%E6%84%8F%E8%A7%A3%E5%86%B3%E4%B8%8E%E4%B8%AD%E5%9B%BD%E5%A4%96%E4%BA%A4%E7%B4%A7%E5%BC%A0%E5%85%B3%E7%B3%BB%23) `149.1K 🔥` `-55%`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `133.2K 🔥` `-24%`
1. [严浩翔新歌Fly开始预约](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E6%AD%8CFly%E5%BC%80%E5%A7%8B%E9%A2%84%E7%BA%A6%23) `128.1K 🔥` `-25%`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `126.7K 🔥` `-24%`
1. [结婚3天新娘称去调凉菜一去不返](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A3%E5%A4%A9%E6%96%B0%E5%A8%98%E7%A7%B0%E5%8E%BB%E8%B0%83%E5%87%89%E8%8F%9C%E4%B8%80%E5%8E%BB%E4%B8%8D%E8%BF%94%23) `104.4K 🔥` `-71%`
1. [冰湖重生定档](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%9A%E6%A1%A3%23) `88.3K 🔥` `-23%`
1. [WBG战胜iG](https://s.weibo.com/weibo?q=%23WBG%E6%88%98%E8%83%9CiG%23) `79.0K 🔥` `-28%`

Updated at 2026-03-30 20:06:48

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
