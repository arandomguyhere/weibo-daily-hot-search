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

1. [黄子韬借综艺扇了徐艺洋 (Huang Zitao used a variety show to slap Xu Yiyang)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%80%9F%E7%BB%BC%E8%89%BA%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `351.0K 🔥` `NEW`
1. [生命树豆瓣开分8.1](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%868.1%23) `245.6K 🔥` `NEW`
1. [春节氛围头像](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%B0%9B%E5%9B%B4%E5%A4%B4%E5%83%8F%23) `150.3K 🔥` `NEW`
1. [过年小聚怎么轻松怎么来](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%B0%8F%E8%81%9A%E6%80%8E%E4%B9%88%E8%BD%BB%E6%9D%BE%E6%80%8E%E4%B9%88%E6%9D%A5%23) `123.8K 🔥` `NEW`
1. [中国AI迭代快过美国抹黑速度](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E8%BF%AD%E4%BB%A3%E5%BF%AB%E8%BF%87%E7%BE%8E%E5%9B%BD%E6%8A%B9%E9%BB%91%E9%80%9F%E5%BA%A6%23) `123.3K 🔥` `NEW`
1. [邵子恒邵子娇 内娱颜霸双胞胎兄妹](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%AD%90%E6%81%92%E9%82%B5%E5%AD%90%E5%A8%87%20%E5%86%85%E5%A8%B1%E9%A2%9C%E9%9C%B8%E5%8F%8C%E8%83%9E%E8%83%8E%E5%85%84%E5%A6%B9%23) `121.2K 🔥` `NEW`
1. [福建一彩民15元中奖6022万](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E4%B8%80%E5%BD%A9%E6%B0%9115%E5%85%83%E4%B8%AD%E5%A5%966022%E4%B8%87%23) `119.5K 🔥` `NEW`
1. [金虔佑 霸凌工作人员](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%99%94%E4%BD%91%20%E9%9C%B8%E5%87%8C%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%23) `118.2K 🔥` `NEW`
1. [侯明昊艾米搂腰共舞](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%89%BE%E7%B1%B3%E6%90%82%E8%85%B0%E5%85%B1%E8%88%9E%23) `97.3K 🔥` `NEW`
1. [美甲师最无助的时候](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%94%B2%E5%B8%88%E6%9C%80%E6%97%A0%E5%8A%A9%E7%9A%84%E6%97%B6%E5%80%99%23) `86.2K 🔥` `NEW`
1. [新加坡偶遇向太郭碧婷 (Encountering Xiang Tai Guo Biting by chance in Singapore)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%81%B6%E9%81%87%E5%90%91%E5%A4%AA%E9%83%AD%E7%A2%A7%E5%A9%B7%23) `85.5K 🔥` `NEW`
1. [泰国英雄女校长曾自愿当人质换学生](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%8B%B1%E9%9B%84%E5%A5%B3%E6%A0%A1%E9%95%BF%E6%9B%BE%E8%87%AA%E6%84%BF%E5%BD%93%E4%BA%BA%E8%B4%A8%E6%8D%A2%E5%AD%A6%E7%94%9F%23) `85.2K 🔥` `NEW`
1. [当我回村把大侦探当八卦讲](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%9B%9E%E6%9D%91%E6%8A%8A%E5%A4%A7%E4%BE%A6%E6%8E%A2%E5%BD%93%E5%85%AB%E5%8D%A6%E8%AE%B2%23) `83.7K 🔥` `NEW`
1. [小动物之间的冷暴力](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8A%A8%E7%89%A9%E4%B9%8B%E9%97%B4%E7%9A%84%E5%86%B7%E6%9A%B4%E5%8A%9B%23) `74.6K 🔥` `NEW`
1. [3988一桌婚宴菜冷肉硬被吐槽](https://s.weibo.com/weibo?q=%233988%E4%B8%80%E6%A1%8C%E5%A9%9A%E5%AE%B4%E8%8F%9C%E5%86%B7%E8%82%89%E7%A1%AC%E8%A2%AB%E5%90%90%E6%A7%BD%23) `73.9K 🔥` `NEW`
1. [小猫跟着你在大城市受苦了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%B7%9F%E7%9D%80%E4%BD%A0%E5%9C%A8%E5%A4%A7%E5%9F%8E%E5%B8%82%E5%8F%97%E8%8B%A6%E4%BA%86%23) `72.3K 🔥` `NEW`
1. [微信回应红包手气最佳攻略](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%BA%94%E7%BA%A2%E5%8C%85%E6%89%8B%E6%B0%94%E6%9C%80%E4%BD%B3%E6%94%BB%E7%95%A5%23) `1.0M 🔥` `+845%`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `773.2K 🔥` `+247%`
1. [红包](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `535.8K 🔥` `+322%`
1. [奶奶笑了半天才开始充电](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E5%BC%80%E5%A7%8B%E5%85%85%E7%94%B5%23) `182.3K 🔥` `+28%`
1. [情人节朋友圈](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `179.0K 🔥` `+41%`
1. [黄轩回村了 (Huang Xuan returned to the village)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E8%BD%A9%E5%9B%9E%E6%9D%91%E4%BA%86%23) `178.1K 🔥` `+145%`
1. [马龙滑雪乌龟都摔懵了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E6%BB%91%E9%9B%AA%E4%B9%8C%E9%BE%9F%E9%83%BD%E6%91%94%E6%87%B5%E4%BA%86%23) `176.9K 🔥` `+40%`
1. [中戏 主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%20%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `170.0K 🔥` `+37%`
1. [刘少昂孙龙林孝埈1500米冲金 (Liu Shao'ang, Sun Long and Lin Xiaoquan hit the gold medal at 1,500 meters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E5%AD%99%E9%BE%99%E6%9E%97%E5%AD%9D%E5%9F%881500%E7%B1%B3%E5%86%B2%E9%87%91%23) `140.2K 🔥` `+72%`
1. [杨幂挑了个最老实的马嘉祺](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8C%91%E4%BA%86%E4%B8%AA%E6%9C%80%E8%80%81%E5%AE%9E%E7%9A%84%E9%A9%AC%E5%98%89%E7%A5%BA%23) `124.1K 🔥` `+22%`
1. [56岁阿姨离婚后10年游43国](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%98%BF%E5%A7%A8%E7%A6%BB%E5%A9%9A%E5%90%8E10%E5%B9%B4%E6%B8%B843%E5%9B%BD%23) `121.6K 🔥` `+21%`
1. [看电影的快乐正全面升级 (The joy of watching movies is being fully upgraded)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%94%B5%E5%BD%B1%E7%9A%84%E5%BF%AB%E4%B9%90%E6%AD%A3%E5%85%A8%E9%9D%A2%E5%8D%87%E7%BA%A7%23) `615.1K 🔥`
1. [Jennie高智感妈咪](https://s.weibo.com/weibo?q=%23Jennie%E9%AB%98%E6%99%BA%E6%84%9F%E5%A6%88%E5%92%AA%23) `139.4K 🔥`
1. [陈妍希和儿子分开过年 (Chen Yanxi and her son celebrate the New Year separately)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%92%8C%E5%84%BF%E5%AD%90%E5%88%86%E5%BC%80%E8%BF%87%E5%B9%B4%23) `123.0K 🔥`
1. [宋轶好刚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A5%BD%E5%88%9A%23) `122.1K 🔥`
1. [羽生结弦的含金量还在上升](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `120.7K 🔥`
1. [王艺瑾回应整容争议 (Wang Yijin responds to plastic surgery controversy)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E7%91%BE%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%E4%BA%89%E8%AE%AE%23) `120.1K 🔥`
1. [宋轶无名指戴了戒指 (Song Yi wears a ring on her ring finger)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E6%97%A0%E5%90%8D%E6%8C%87%E6%88%B4%E4%BA%86%E6%88%92%E6%8C%87%23) `119.9K 🔥`
1. [岳云鹏蔡文静亲密戏](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E8%94%A1%E6%96%87%E9%9D%99%E4%BA%B2%E5%AF%86%E6%88%8F%23) `111.2K 🔥`
1. [为什么微信红包最多只能200元](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E6%9C%80%E5%A4%9A%E5%8F%AA%E8%83%BD200%E5%85%83%23) `98.5K 🔥`
1. [爱泼斯坦案中多国未成年人被诱拐 (Minors from many countries were abducted in the Epstein case)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E4%B8%AD%E5%A4%9A%E5%9B%BD%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E8%A2%AB%E8%AF%B1%E6%8B%90%23) `93.9K 🔥`
1. [白鹿 剧宣的神](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%89%A7%E5%AE%A3%E7%9A%84%E7%A5%9E%23) `89.4K 🔥`
1. [卫视春晚节目单 (Satellite TV Spring Festival Gala program list)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `73.7K 🔥`
1. [百果园回应一根甘蔗卖87元](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%9E%9C%E5%9B%AD%E5%9B%9E%E5%BA%94%E4%B8%80%E6%A0%B9%E7%94%98%E8%94%97%E5%8D%9687%E5%85%83%23) `302.8K 🔥` `-59%`
1. [产检正常生出畸形儿医院被罚2.5万](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E6%AD%A3%E5%B8%B8%E7%94%9F%E5%87%BA%E7%95%B8%E5%BD%A2%E5%84%BF%E5%8C%BB%E9%99%A2%E8%A2%AB%E7%BD%9A2.5%E4%B8%87%23) `210.5K 🔥` `-80%`
1. [成都天府大道事故酒驾司机全责 (The drunk driver is fully responsible for the accident on Tianfu Avenue in Chengdu)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%A4%A9%E5%BA%9C%E5%A4%A7%E9%81%93%E4%BA%8B%E6%95%85%E9%85%92%E9%A9%BE%E5%8F%B8%E6%9C%BA%E5%85%A8%E8%B4%A3%23) `175.1K 🔥` `-38%`
1. [张萌说浪姐收手机是因为黄圣依 (Zhang Meng said that Sister Lang collected the mobile phone because of Huang Shengyi)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%AF%B4%E6%B5%AA%E5%A7%90%E6%94%B6%E6%89%8B%E6%9C%BA%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%BB%84%E5%9C%A3%E4%BE%9D%23) `96.0K 🔥` `-79%`
1. [成何体统圆房镜头要钓我几天](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E5%9C%86%E6%88%BF%E9%95%9C%E5%A4%B4%E8%A6%81%E9%92%93%E6%88%91%E5%87%A0%E5%A4%A9%23) `93.4K 🔥` `-26%`
1. [当小姨回家过年时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B0%8F%E5%A7%A8%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%E6%97%B6%23) `89.2K 🔥` `-21%`
1. [王鹤棣NBA全明星总得分30分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3NBA%E5%85%A8%E6%98%8E%E6%98%9F%E6%80%BB%E5%BE%97%E5%88%8630%E5%88%86%23) `85.1K 🔥` `-31%`
1. [陈妍希周柯宇芭莎](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%91%A8%E6%9F%AF%E5%AE%87%E8%8A%AD%E8%8E%8E%23) `84.6K 🔥` `-21%`
1. [黄大宪一直盯着看林孝埈](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%A7%E5%AE%AA%E4%B8%80%E7%9B%B4%E7%9B%AF%E7%9D%80%E7%9C%8B%E6%9E%97%E5%AD%9D%E5%9F%88%23) `84.3K 🔥` `-48%`
1. [中国男子巴厘岛溺亡同伴连滚带爬求救](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%B7%B4%E5%8E%98%E5%B2%9B%E6%BA%BA%E4%BA%A1%E5%90%8C%E4%BC%B4%E8%BF%9E%E6%BB%9A%E5%B8%A6%E7%88%AC%E6%B1%82%E6%95%91%23) `81.9K 🔥` `-34%`
1. [游客已在胖东来买到搬不动了 (Tourists have bought it in Pandonglai and can no longer move it.)](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%B7%B2%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B9%B0%E5%88%B0%E6%90%AC%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `73.7K 🔥` `-32%`

Updated at 2026-02-14 15:22:40

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
