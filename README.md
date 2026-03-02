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

1. [李雨桐实名报案薛之谦重婚罪 (Li Yutong reported the crime of bigamy to Joker Xue under his real name)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E5%AE%9E%E5%90%8D%E6%8A%A5%E6%A1%88%E8%96%9B%E4%B9%8B%E8%B0%A6%E9%87%8D%E5%A9%9A%E7%BD%AA%23) `10.3M 🔥` `NEW`
1. [伊朗导弹击中美第五舰队总部瞬间](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E7%BE%8E%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%E6%80%BB%E9%83%A8%E7%9E%AC%E9%97%B4%23) `541.8K 🔥` `NEW`
1. [小贝求婚失败](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%B4%9D%E6%B1%82%E5%A9%9A%E5%A4%B1%E8%B4%A5%23) `223.7K 🔥` `NEW`
1. [被国外领养男子用刚学的中文喊爸爸](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%9B%BD%E5%A4%96%E9%A2%86%E5%85%BB%E7%94%B7%E5%AD%90%E7%94%A8%E5%88%9A%E5%AD%A6%E7%9A%84%E4%B8%AD%E6%96%87%E5%96%8A%E7%88%B8%E7%88%B8%23) `220.6K 🔥` `NEW`
1. [36岁副镇长开会晕倒除夕不幸离世](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%89%AF%E9%95%87%E9%95%BF%E5%BC%80%E4%BC%9A%E6%99%95%E5%80%92%E9%99%A4%E5%A4%95%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23) `220.1K 🔥` `NEW`
1. [阿Sa承认与男友同居](https://s.weibo.com/weibo?q=%23%E9%98%BFSa%E6%89%BF%E8%AE%A4%E4%B8%8E%E7%94%B7%E5%8F%8B%E5%90%8C%E5%B1%85%23) `216.6K 🔥` `NEW`
1. [杨超越 末世文女主](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E6%9C%AB%E4%B8%96%E6%96%87%E5%A5%B3%E4%B8%BB%23) `203.2K 🔥` `NEW`
1. [王楚钦更新训练vlog](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9B%B4%E6%96%B0%E8%AE%AD%E7%BB%83vlog%23) `200.2K 🔥` `NEW`
1. [杨幂主演电影票房破100亿](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E4%B8%BB%E6%BC%94%E7%94%B5%E5%BD%B1%E7%A5%A8%E6%88%BF%E7%A0%B4100%E4%BA%BF%23) `200.0K 🔥` `NEW`
1. [20万广东人在委内瑞拉谋生](https://s.weibo.com/weibo?q=%2320%E4%B8%87%E5%B9%BF%E4%B8%9C%E4%BA%BA%E5%9C%A8%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E8%B0%8B%E7%94%9F%23) `199.8K 🔥` `NEW`
1. [虞书欣一天穿出两个季节 (Yu Shuxin wears two seasons in one day)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%80%E5%A4%A9%E7%A9%BF%E5%87%BA%E4%B8%A4%E4%B8%AA%E5%AD%A3%E8%8A%82%23) `199.2K 🔥` `NEW`
1. [衡水中学AI监测系统](https://s.weibo.com/weibo?q=%23%E8%A1%A1%E6%B0%B4%E4%B8%AD%E5%AD%A6AI%E7%9B%91%E6%B5%8B%E7%B3%BB%E7%BB%9F%23) `199.1K 🔥` `NEW`
1. [EXO澳门官宣](https://s.weibo.com/weibo?q=%23EXO%E6%BE%B3%E9%97%A8%E5%AE%98%E5%AE%A3%23) `199.1K 🔥` `NEW`
1. [海澜之家 不签合同](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%BE%9C%E4%B9%8B%E5%AE%B6%20%E4%B8%8D%E7%AD%BE%E5%90%88%E5%90%8C%23) `245.1K 🔥` `+64%`
1. [陈浩民夫妇滞留阿联酋](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E5%A4%AB%E5%A6%87%E6%BB%9E%E7%95%99%E9%98%BF%E8%81%94%E9%85%8B%23) `217.7K 🔥` `+22%`
1. [卢昱晓短发](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%9F%AD%E5%8F%91%23) `215.9K 🔥` `+24%`
1. [伊朗前总统内贾德亲信称其平安](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E4%BA%B2%E4%BF%A1%E7%A7%B0%E5%85%B6%E5%B9%B3%E5%AE%89%23) `214.3K 🔥` `+21%`
1. [张婧仪身高一六七点五](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E8%BA%AB%E9%AB%98%E4%B8%80%E5%85%AD%E4%B8%83%E7%82%B9%E4%BA%94%23) `212.6K 🔥` `+49%`
1. [偶遇窦骁何超莲有说有笑](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E7%AA%A6%E9%AA%81%E4%BD%95%E8%B6%85%E8%8E%B2%E6%9C%89%E8%AF%B4%E6%9C%89%E7%AC%91%23) `211.6K 🔥` `+38%`
1. [猫 你怎么不等我死了才回来 (Cat, why didn’t you wait until I was dead before you came back?)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E4%BD%A0%E6%80%8E%E4%B9%88%E4%B8%8D%E7%AD%89%E6%88%91%E6%AD%BB%E4%BA%86%E6%89%8D%E5%9B%9E%E6%9D%A5%23) `200.9K 🔥` `+30%`
1. [刘文祥 紫薯精](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%20%E7%B4%AB%E8%96%AF%E7%B2%BE%23) `200.6K 🔥` `+27%`
1. [李茂报平安 (Li Mao reported safety)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8C%82%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `200.1K 🔥` `+29%`
1. [周杰伦成都被称为史上最离谱演唱会 (Jay Chou's Chengdu concert was called the most outrageous concert in history)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%88%90%E9%83%BD%E8%A2%AB%E7%A7%B0%E4%B8%BA%E5%8F%B2%E4%B8%8A%E6%9C%80%E7%A6%BB%E8%B0%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `199.7K 🔥` `+32%`
1. [Fendi认领展轩](https://s.weibo.com/weibo?q=%23Fendi%E8%AE%A4%E9%A2%86%E5%B1%95%E8%BD%A9%23) `199.6K 🔥` `+36%`
1. [中国石油历史上仅涨停9次](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%B3%E6%B2%B9%E5%8E%86%E5%8F%B2%E4%B8%8A%E4%BB%85%E6%B6%A8%E5%81%9C9%E6%AC%A1%23) `199.5K 🔥` `+39%`
1. [湖南卫视元宵喜乐会节目单](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E5%85%83%E5%AE%B5%E5%96%9C%E4%B9%90%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `199.4K 🔥` `+39%`
1. [唐嫣只有眼尾有岁月的痕迹](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%8F%AA%E6%9C%89%E7%9C%BC%E5%B0%BE%E6%9C%89%E5%B2%81%E6%9C%88%E7%9A%84%E7%97%95%E8%BF%B9%23) `198.9K 🔥` `+39%`
1. [刘文祥店主喊话感谢紫薯精 (Shop owner Liu Wenxiang expressed his gratitude to Purple Sweet Potato Essence)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E5%BA%97%E4%B8%BB%E5%96%8A%E8%AF%9D%E6%84%9F%E8%B0%A2%E7%B4%AB%E8%96%AF%E7%B2%BE%23) `198.9K 🔥` `+35%`
1. [吴宣仪 剩下的交给时间和报应](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%20%E5%89%A9%E4%B8%8B%E7%9A%84%E4%BA%A4%E7%BB%99%E6%97%B6%E9%97%B4%E5%92%8C%E6%8A%A5%E5%BA%94%23) `198.7K 🔥` `+39%`
1. [伊朗一名中国公民遇难 (A Chinese citizen was killed in Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%87%E9%9A%BE%23) `1.2M 🔥`
1. [莫斯科遭炸弹袭击](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%96%AF%E7%A7%91%E9%81%AD%E7%82%B8%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `835.5K 🔥`
1. [十四届全国人大四次会议发布会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%8F%91%E5%B8%83%E4%BC%9A%23) `690.6K 🔥`
1. [孙颖莎晒和王曼昱合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%99%92%E5%92%8C%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%90%88%E7%85%A7%23) `365.2K 🔥`
1. [结婚后住上男女混寝了](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E5%90%8E%E4%BD%8F%E4%B8%8A%E7%94%B7%E5%A5%B3%E6%B7%B7%E5%AF%9D%E4%BA%86%23) `288.4K 🔥`
1. [伊朗导弹袭击以色列总理办公室 (Iranian missile strikes Israeli Prime Minister's Office)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E5%8A%9E%E5%85%AC%E5%AE%A4%23) `252.6K 🔥`
1. [俄罗斯](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%23) `225.6K 🔥`
1. [伊朗发动第10波攻势 (Iran launches 10th wave of offensive)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E7%AC%AC10%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `223.8K 🔥`
1. [中方回应是否会对伊朗提供军事支持](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E4%BC%9A%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BE%9B%E5%86%9B%E4%BA%8B%E6%94%AF%E6%8C%81%23) `222.4K 🔥`
1. [爱与不爱真的很明显 (It's really obvious whether you love or not love)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%8E%E4%B8%8D%E7%88%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE%23) `221.7K 🔥`
1. [日本遭遇霍尔木兹休克](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%81%AD%E9%81%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E4%BC%91%E5%85%8B%23) `217.7K 🔥`
1. [李雨桐喊话薛之谦 (Li Yutong shouts to Joker Xue)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E5%96%8A%E8%AF%9D%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `213.8K 🔥`
1. [命运真的会提醒你适合走哪条路](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8F%90%E9%86%92%E4%BD%A0%E9%80%82%E5%90%88%E8%B5%B0%E5%93%AA%E6%9D%A1%E8%B7%AF%23) `212.2K 🔥`
1. [短剧 变天 (Short drama: Change of weather)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E5%8F%98%E5%A4%A9%23) `200.5K 🔥`
1. [女子称租房钉几颗钉子损失2万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%A7%9F%E6%88%BF%E9%92%89%E5%87%A0%E9%A2%97%E9%92%89%E5%AD%90%E6%8D%9F%E5%A4%B12%E4%B8%87%23) `200.4K 🔥`
1. [陈昊宇剧宣 低头 (Chen Haoyu drama announcement: Bow your head)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%E5%89%A7%E5%AE%A3%20%E4%BD%8E%E5%A4%B4%23) `200.4K 🔥`
1. [刘文祥麻辣烫](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%23) `357.3K 🔥` `-25%`
1. [年轻人的第一台轿跑可以更新了 (Young people’s first coupe can be updated)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E7%AC%AC%E4%B8%80%E5%8F%B0%E8%BD%BF%E8%B7%91%E5%8F%AF%E4%BB%A5%E6%9B%B4%E6%96%B0%E4%BA%86%23) `342.7K 🔥` `-47%`
1. [海澜之家被暂停全军采购资格](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%BE%9C%E4%B9%8B%E5%AE%B6%E8%A2%AB%E6%9A%82%E5%81%9C%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD%E8%B5%84%E6%A0%BC%23) `339.1K 🔥` `-26%`
1. [豆瓣称无法承受异常订单巨额损失 (Douban says it cannot bear huge losses from abnormal orders)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E7%93%A3%E7%A7%B0%E6%97%A0%E6%B3%95%E6%89%BF%E5%8F%97%E5%BC%82%E5%B8%B8%E8%AE%A2%E5%8D%95%E5%B7%A8%E9%A2%9D%E6%8D%9F%E5%A4%B1%23) `299.1K 🔥` `-39%`
1. [20后都避开网红名了吗](https://s.weibo.com/weibo?q=%2320%E5%90%8E%E9%83%BD%E9%81%BF%E5%BC%80%E7%BD%91%E7%BA%A2%E5%90%8D%E4%BA%86%E5%90%97%23) `253.6K 🔥` `-22%`
1. [多架美军战机坠毁](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%9E%B6%E7%BE%8E%E5%86%9B%E6%88%98%E6%9C%BA%E5%9D%A0%E6%AF%81%23) `240.0K 🔥` `-64%`

Updated at 2026-03-02 19:36:37

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
