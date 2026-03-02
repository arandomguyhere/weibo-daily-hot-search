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

1. [王毅和伊朗外长通电话 (Wang Yi had a phone call with the Iranian Foreign Minister)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%92%8C%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E9%80%9A%E7%94%B5%E8%AF%9D%23) `1.6M 🔥` `NEW`
1. [冯琳 气人](https://s.weibo.com/weibo?q=%23%E5%86%AF%E7%90%B3%20%E6%B0%94%E4%BA%BA%23) `289.9K 🔥` `NEW`
1. [伊朗公布高超音速导弹发射画面](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E9%AB%98%E8%B6%85%E9%9F%B3%E9%80%9F%E5%AF%BC%E5%BC%B9%E5%8F%91%E5%B0%84%E7%94%BB%E9%9D%A2%23) `263.4K 🔥` `NEW`
1. [宋雨琦被詹姆斯比心](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%A2%AB%E8%A9%B9%E5%A7%86%E6%96%AF%E6%AF%94%E5%BF%83%23) `257.0K 🔥` `NEW`
1. [王毅同伊朗外长通话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%90%8C%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E9%80%9A%E8%AF%9D%23) `254.5K 🔥` `NEW`
1. [李昀锐好像郭晓婷王天辰的孩子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%A5%BD%E5%83%8F%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E7%9A%84%E5%AD%A9%E5%AD%90%23) `209.9K 🔥` `NEW`
1. [杨超越惊人的腿长和比例](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%83%8A%E4%BA%BA%E7%9A%84%E8%85%BF%E9%95%BF%E5%92%8C%E6%AF%94%E4%BE%8B%23) `193.9K 🔥` `NEW`
1. [大叔因太会种地在非洲被持枪保护](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8F%94%E5%9B%A0%E5%A4%AA%E4%BC%9A%E7%A7%8D%E5%9C%B0%E5%9C%A8%E9%9D%9E%E6%B4%B2%E8%A2%AB%E6%8C%81%E6%9E%AA%E4%BF%9D%E6%8A%A4%23) `166.1K 🔥` `NEW`
1. [美军说三架战机明显遭友军击落](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%AF%B4%E4%B8%89%E6%9E%B6%E6%88%98%E6%9C%BA%E6%98%8E%E6%98%BE%E9%81%AD%E5%8F%8B%E5%86%9B%E5%87%BB%E8%90%BD%23) `136.5K 🔥` `NEW`
1. [一家七口全是医生的亚洲家庭](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%83%E5%8F%A3%E5%85%A8%E6%98%AF%E5%8C%BB%E7%94%9F%E7%9A%84%E4%BA%9A%E6%B4%B2%E5%AE%B6%E5%BA%AD%23) `133.0K 🔥` `NEW`
1. [徐冬冬尹子维哈尔滨家宴现场曝光 (Xu Dongdong and Yin Ziwei's Harbin family dinner scene exposed)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%E5%B0%B9%E5%AD%90%E7%BB%B4%E5%93%88%E5%B0%94%E6%BB%A8%E5%AE%B6%E5%AE%B4%E7%8E%B0%E5%9C%BA%E6%9B%9D%E5%85%89%23) `124.3K 🔥` `NEW`
1. [女子扔玩具车撞母婴只赔2千](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%94%E7%8E%A9%E5%85%B7%E8%BD%A6%E6%92%9E%E6%AF%8D%E5%A9%B4%E5%8F%AA%E8%B5%942%E5%8D%83%23) `124.2K 🔥` `NEW`
1. [为躲母亲债务儿子放弃继承遗产](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E8%BA%B2%E6%AF%8D%E4%BA%B2%E5%80%BA%E5%8A%A1%E5%84%BF%E5%AD%90%E6%94%BE%E5%BC%83%E7%BB%A7%E6%89%BF%E9%81%97%E4%BA%A7%23) `119.6K 🔥` `NEW`
1. [杨幂迪丽热巴宁艺卓最佳穿搭](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AE%81%E8%89%BA%E5%8D%93%E6%9C%80%E4%BD%B3%E7%A9%BF%E6%90%AD%23) `117.4K 🔥` `NEW`
1. [西游记AI视频 众神归位](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B8%B8%E8%AE%B0AI%E8%A7%86%E9%A2%91%20%E4%BC%97%E7%A5%9E%E5%BD%92%E4%BD%8D%23) `117.3K 🔥` `NEW`
1. [纯真年代22集 我一直在哭](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A322%E9%9B%86%20%E6%88%91%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%93%AD%23) `117.2K 🔥` `NEW`
1. [穆祉丞元宵喜乐会三个节目](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%85%83%E5%AE%B5%E5%96%9C%E4%B9%90%E4%BC%9A%E4%B8%89%E4%B8%AA%E8%8A%82%E7%9B%AE%23) `117.1K 🔥` `NEW`
1. [吴磊Burberry风衣大片](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8ABurberry%E9%A3%8E%E8%A1%A3%E5%A4%A7%E7%89%87%23) `117.0K 🔥` `NEW`
1. [TES将WBG拖进决胜局](https://s.weibo.com/weibo?q=%23TES%E5%B0%86WBG%E6%8B%96%E8%BF%9B%E5%86%B3%E8%83%9C%E5%B1%80%23) `116.6K 🔥` `NEW`
1. [现货白银转跌](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E7%99%BD%E9%93%B6%E8%BD%AC%E8%B7%8C%23) `116.4K 🔥` `NEW`
1. [海澜之家 不签合同 (Heilan House does not sign a contract)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%BE%9C%E4%B9%8B%E5%AE%B6%20%E4%B8%8D%E7%AD%BE%E5%90%88%E5%90%8C%23) `907.3K 🔥` `+196%`
1. [中方回应特朗普3月访华能否成行 (China responds to whether Trump's visit to China in March can take place)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE3%E6%9C%88%E8%AE%BF%E5%8D%8E%E8%83%BD%E5%90%A6%E6%88%90%E8%A1%8C%23) `480.8K 🔥` `+76%`
1. [刘文祥麻辣烫](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%23) `389.7K 🔥` `+24%`
1. [十四届全国人大四次会议发布会 (Press conference of the Fourth Session of the 14th National People's Congress)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%8F%91%E5%B8%83%E4%BC%9A%23) `749.0K 🔥`
1. [伊朗导弹击中美第五舰队总部瞬间](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E7%BE%8E%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%E6%80%BB%E9%83%A8%E7%9E%AC%E9%97%B4%23) `685.2K 🔥`
1. [年轻人的第一台轿跑可以更新了 (Young people’s first coupe can be updated)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E7%AC%AC%E4%B8%80%E5%8F%B0%E8%BD%BF%E8%B7%91%E5%8F%AF%E4%BB%A5%E6%9B%B4%E6%96%B0%E4%BA%86%23) `336.3K 🔥`
1. [孙颖莎晒和王曼昱合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%99%92%E5%92%8C%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%90%88%E7%85%A7%23) `322.9K 🔥`
1. [20后都避开网红名了吗](https://s.weibo.com/weibo?q=%2320%E5%90%8E%E9%83%BD%E9%81%BF%E5%BC%80%E7%BD%91%E7%BA%A2%E5%90%8D%E4%BA%86%E5%90%97%23) `286.4K 🔥`
1. [海澜之家被暂停全军采购资格](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%BE%9C%E4%B9%8B%E5%AE%B6%E8%A2%AB%E6%9A%82%E5%81%9C%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD%E8%B5%84%E6%A0%BC%23) `273.1K 🔥`
1. [小贝求婚失败](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%B4%9D%E6%B1%82%E5%A9%9A%E5%A4%B1%E8%B4%A5%23) `268.1K 🔥`
1. [美军证实3架F15战机坠毁 (US military confirms three F15 fighter jets crashed)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%AF%81%E5%AE%9E3%E6%9E%B6F15%E6%88%98%E6%9C%BA%E5%9D%A0%E6%AF%81%23) `248.1K 🔥`
1. [红楼梦 宝玉宝钗演员争论](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%A5%BC%E6%A2%A6%20%E5%AE%9D%E7%8E%89%E5%AE%9D%E9%92%97%E6%BC%94%E5%91%98%E4%BA%89%E8%AE%BA%23) `241.7K 🔥`
1. [杨超越 末世文女主](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E6%9C%AB%E4%B8%96%E6%96%87%E5%A5%B3%E4%B8%BB%23) `237.1K 🔥`
1. [伊朗最强导弹射程可达2000公里](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E5%8F%AF%E8%BE%BE2000%E5%85%AC%E9%87%8C%23) `236.4K 🔥`
1. [卢昱晓短发 (Lu Yuxiao's short hair)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%9F%AD%E5%8F%91%23) `232.2K 🔥`
1. [伊朗一名中国公民遇难 (A Chinese citizen was killed in Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%87%E9%9A%BE%23) `268.5K 🔥` `-76%`
1. [莫斯科遭炸弹袭击 (Moscow bombed)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%96%AF%E7%A7%91%E9%81%AD%E7%82%B8%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `196.1K 🔥` `-77%`
1. [陈浩民夫妇滞留阿联酋](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E5%A4%AB%E5%A6%87%E6%BB%9E%E7%95%99%E9%98%BF%E8%81%94%E9%85%8B%23) `191.1K 🔥` `-30%`
1. [伊朗导弹袭击以色列总理办公室 (Iranian missile strikes Israeli Prime Minister's Office)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E5%8A%9E%E5%85%AC%E5%AE%A4%23) `186.3K 🔥` `-32%`
1. [豆瓣称无法承受异常订单巨额损失 (Douban says it cannot bear huge losses from abnormal orders)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E7%93%A3%E7%A7%B0%E6%97%A0%E6%B3%95%E6%89%BF%E5%8F%97%E5%BC%82%E5%B8%B8%E8%AE%A2%E5%8D%95%E5%B7%A8%E9%A2%9D%E6%8D%9F%E5%A4%B1%23) `185.6K 🔥` `-32%`
1. [阿Sa承认与男友同居](https://s.weibo.com/weibo?q=%23%E9%98%BFSa%E6%89%BF%E8%AE%A4%E4%B8%8E%E7%94%B7%E5%8F%8B%E5%90%8C%E5%B1%85%23) `157.1K 🔥` `-42%`
1. [不要坐在洗衣机上打电话](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9D%90%E5%9C%A8%E6%B4%97%E8%A1%A3%E6%9C%BA%E4%B8%8A%E6%89%93%E7%94%B5%E8%AF%9D%23) `133.3K 🔥` `-51%`
1. [李茂报平安 (Li Mao reported safety)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8C%82%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `131.7K 🔥` `-52%`
1. [刘文祥 紫薯精](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%20%E7%B4%AB%E8%96%AF%E7%B2%BE%23) `124.2K 🔥` `-54%`
1. [短剧 变天 (Short drama: Change of weather)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E5%8F%98%E5%A4%A9%23) `124.2K 🔥` `-54%`
1. [衡水中学AI监测系统](https://s.weibo.com/weibo?q=%23%E8%A1%A1%E6%B0%B4%E4%B8%AD%E5%AD%A6AI%E7%9B%91%E6%B5%8B%E7%B3%BB%E7%BB%9F%23) `117.4K 🔥` `-57%`
1. [俄罗斯](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%23) `116.9K 🔥` `-57%`
1. [张婧仪身高一六七点五](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E8%BA%AB%E9%AB%98%E4%B8%80%E5%85%AD%E4%B8%83%E7%82%B9%E4%BA%94%23) `116.8K 🔥` `-57%`
1. [老一辈的勤俭被火鸡面打败了](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E7%9A%84%E5%8B%A4%E4%BF%AD%E8%A2%AB%E7%81%AB%E9%B8%A1%E9%9D%A2%E6%89%93%E8%B4%A5%E4%BA%86%23) `116.7K 🔥` `-57%`
1. [蒋勤勤扛住了G社镜头](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%8B%A4%E5%8B%A4%E6%89%9B%E4%BD%8F%E4%BA%86G%E7%A4%BE%E9%95%9C%E5%A4%B4%23) `116.6K 🔥` `-57%`
1. [日本遭遇霍尔木兹休克 (Japan encounters Hormuz shock)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%81%AD%E9%81%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E4%BC%91%E5%85%8B%23) `116.4K 🔥` `-57%`

Updated at 2026-03-02 21:19:58

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
