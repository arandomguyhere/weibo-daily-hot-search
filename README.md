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

1. [BIGBANG二十周年第一个纪念舞台 (BIGBANG’s 20th anniversary first commemorative stage)](https://s.weibo.com/weibo?q=%23BIGBANG%E4%BA%8C%E5%8D%81%E5%91%A8%E5%B9%B4%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BA%AA%E5%BF%B5%E8%88%9E%E5%8F%B0%23) `124.4K 🔥` `NEW`
1. [欧冠联赛](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%23) `123.5K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `119.1K 🔥` `NEW`
1. [鞠婧祎万花世界戏份超700场](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E6%88%8F%E4%BB%BD%E8%B6%85700%E5%9C%BA%23) `111.8K 🔥` `NEW`
1. [向太回应给阿嬷的情书爆火](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%9B%9E%E5%BA%94%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%88%86%E7%81%AB%23) `108.6K 🔥` `NEW`
1. [朱一龙做瑜伽](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%81%9A%E7%91%9C%E4%BC%BD%23) `108.3K 🔥` `NEW`
1. [列车因故障停隧道内3小时车内漆黑](https://s.weibo.com/weibo?q=%23%E5%88%97%E8%BD%A6%E5%9B%A0%E6%95%85%E9%9A%9C%E5%81%9C%E9%9A%A7%E9%81%93%E5%86%853%E5%B0%8F%E6%97%B6%E8%BD%A6%E5%86%85%E6%BC%86%E9%BB%91%23) `103.0K 🔥` `NEW`
1. [巴黎卫冕欧冠冠军 (Paris retains Champions League title)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%8D%AB%E5%86%95%E6%AC%A7%E5%86%A0%E5%86%A0%E5%86%9B%23) `747.7K 🔥` `+44%`
1. [巴黎圣日耳曼5比4阿森纳](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC5%E6%AF%944%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `523.8K 🔥` `+134%`
1. [在上海找到创作主场](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8A%E6%B5%B7%E6%89%BE%E5%88%B0%E5%88%9B%E4%BD%9C%E4%B8%BB%E5%9C%BA%23) `428.7K 🔥` `+76%`
1. [跟着刘宇宁上京东618更便宜 (It’s cheaper to follow Liu Yuning on JD.com 618)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%8A%E4%BA%AC%E4%B8%9C618%E6%9B%B4%E4%BE%BF%E5%AE%9C%23) `386.5K 🔥` `+89%`
1. [欧冠决赛 难看](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%20%E9%9A%BE%E7%9C%8B%23) `266.3K 🔥` `+68%`
1. [这样的衣服才配预售 (Only clothes like this are worthy of pre-sale)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E8%A1%A3%E6%9C%8D%E6%89%8D%E9%85%8D%E9%A2%84%E5%94%AE%23) `227.5K 🔥` `+249%`
1. [鸟巢偶遇王菲看谢霆锋演唱会 (Encountering Faye Wong at the Bird's Nest watching Nicholas Tse's concert)](https://s.weibo.com/weibo?q=%23%E9%B8%9F%E5%B7%A2%E5%81%B6%E9%81%87%E7%8E%8B%E8%8F%B2%E7%9C%8B%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `190.1K 🔥` `+53%`
1. [点球大战 (Penalty shootout)](https://s.weibo.com/weibo?q=%23%E7%82%B9%E7%90%83%E5%A4%A7%E6%88%98%23) `132.2K 🔥` `+76%`
1. [牙齿和情绪的关系 (The relationship between teeth and emotions)](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BD%BF%E5%92%8C%E6%83%85%E7%BB%AA%E7%9A%84%E5%85%B3%E7%B3%BB%23) `124.5K 🔥` `+76%`
1. [微信几乎把每个人捆绑在线上 (WeChat ties almost everyone online)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `122.7K 🔥` `+64%`
1. [欧冠决赛 (Champions League final)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `121.7K 🔥` `+61%`
1. [网友阻止印度游客在水源区洗澡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%98%BB%E6%AD%A2%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B0%B4%E6%BA%90%E5%8C%BA%E6%B4%97%E6%BE%A1%23) `121.0K 🔥` `+62%`
1. [用豆包免费学英语的两个方法 (Two ways to learn English for free with Doubao)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E8%B1%86%E5%8C%85%E5%85%8D%E8%B4%B9%E5%AD%A6%E8%8B%B1%E8%AF%AD%E7%9A%84%E4%B8%A4%E4%B8%AA%E6%96%B9%E6%B3%95%23) `120.3K 🔥` `+166%`
1. [对早睡起了敬意](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%97%A9%E7%9D%A1%E8%B5%B7%E4%BA%86%E6%95%AC%E6%84%8F%23) `118.7K 🔥` `+130%`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `118.4K 🔥` `+300%`
1. [这个时间点入睡才是真早睡 (Falling asleep at this time is really early.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%97%B6%E9%97%B4%E7%82%B9%E5%85%A5%E7%9D%A1%E6%89%8D%E6%98%AF%E7%9C%9F%E6%97%A9%E7%9D%A1%23) `117.0K 🔥` `+199%`
1. [大爷协议娶小24岁女子2年便闹离婚 (The uncle agreed to marry a woman 24 years younger and got divorced after 2 years)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%8D%8F%E8%AE%AE%E5%A8%B6%E5%B0%8F24%E5%B2%81%E5%A5%B3%E5%AD%902%E5%B9%B4%E4%BE%BF%E9%97%B9%E7%A6%BB%E5%A9%9A%23) `116.6K 🔥` `+201%`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `116.4K 🔥` `+194%`
1. [麦当劳汉堡缩小比例](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E6%B1%89%E5%A0%A1%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%23) `115.4K 🔥` `+56%`
1. [欧冠裁判 (Champions League referee)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E8%A3%81%E5%88%A4%23) `115.3K 🔥` `+47%`
1. [宋亚轩又输给了李宇春 (Song Yaxuan lost to Li Yuchun again)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8F%88%E8%BE%93%E7%BB%99%E4%BA%86%E6%9D%8E%E5%AE%87%E6%98%A5%23) `114.8K 🔥` `+152%`
1. [10月大婴儿喝稀粥吃肉末3个月瘦3斤](https://s.weibo.com/weibo?q=%2310%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E5%96%9D%E7%A8%80%E7%B2%A5%E5%90%83%E8%82%89%E6%9C%AB3%E4%B8%AA%E6%9C%88%E7%98%A63%E6%96%A4%23) `114.1K 🔥` `+265%`
1. [李昀锐一把就把关晓彤抱起来了 (Li Yunrui picked up Guan Xiaotong in one fell swoop)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%80%E6%8A%8A%E5%B0%B1%E6%8A%8A%E5%85%B3%E6%99%93%E5%BD%A4%E6%8A%B1%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `113.7K 🔥` `+195%`
1. [用AI整理会议记录导致泄密](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E6%95%B4%E7%90%86%E4%BC%9A%E8%AE%AE%E8%AE%B0%E5%BD%95%E5%AF%BC%E8%87%B4%E6%B3%84%E5%AF%86%23) `113.0K 🔥` `+232%`
1. [中俄等6国投弃权票 (Six countries including China and Russia abstained from voting)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E7%AD%896%E5%9B%BD%E6%8A%95%E5%BC%83%E6%9D%83%E7%A5%A8%23) `111.4K 🔥` `+194%`
1. [阿森纳](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `110.6K 🔥` `+190%`
1. [陈小春发言宋亚轩又笑晕了 (Jordan Chan spoke and Song Yaxuan fainted with laughter again)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%8F%91%E8%A8%80%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8F%88%E7%AC%91%E6%99%95%E4%BA%86%23) `110.2K 🔥` `+205%`
1. [王安宇见面会 (Wang Anyu meeting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `110.0K 🔥` `+221%`
1. [十二星座6月月运](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A76%E6%9C%88%E6%9C%88%E8%BF%90%23) `109.0K 🔥` `+273%`
1. [巴黎圣日耳曼vs阿森纳](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BCvs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `107.8K 🔥` `+171%`
1. [陈小春连怼导演四次 (Jordan Chan criticized the director four times in a row)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E8%BF%9E%E6%80%BC%E5%AF%BC%E6%BC%94%E5%9B%9B%E6%AC%A1%23) `107.2K 🔥` `+267%`
1. [谢霆锋鸟巢顶级号召力](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E9%B8%9F%E5%B7%A2%E9%A1%B6%E7%BA%A7%E5%8F%B7%E5%8F%AC%E5%8A%9B%23) `106.7K 🔥` `+139%`
1. [欧冠加时赛 (Champions League overtime)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%8A%A0%E6%97%B6%E8%B5%9B%23) `106.1K 🔥` `+230%`
1. [攻玉](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%23) `105.3K 🔥` `+230%`
1. [万花世界原主换了一个人演 (The original host of Wanhua World has been replaced by another person)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8E%9F%E4%B8%BB%E6%8D%A2%E4%BA%86%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%BC%94%23) `104.7K 🔥` `+259%`
1. [阿森纳进球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E8%BF%9B%E7%90%83%23) `104.4K 🔥` `+144%`
1. [蔡徐坤马来西亚音乐节压轴](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E9%9F%B3%E4%B9%90%E8%8A%82%E5%8E%8B%E8%BD%B4%23) `103.9K 🔥` `+254%`
1. [花间令2.0](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E9%97%B4%E4%BB%A42.0%23) `102.7K 🔥` `+252%`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `102.4K 🔥` `+171%`
1. [徐志胜在桃花坞聊沈月王鹤棣](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%9C%A8%E6%A1%83%E8%8A%B1%E5%9D%9E%E8%81%8A%E6%B2%88%E6%9C%88%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `120.1K 🔥`
1. [男子造谣火锅店使用老鼠肉被行拘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%80%A0%E8%B0%A3%E7%81%AB%E9%94%85%E5%BA%97%E4%BD%BF%E7%94%A8%E8%80%81%E9%BC%A0%E8%82%89%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `156.0K 🔥` `-59%`
1. [姆巴佩](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `123.1K 🔥` `-80%`
1. [刘诗诗 从此不敢见观音 (Liu Shishi never dared to see Guanyin again)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E4%BB%8E%E6%AD%A4%E4%B8%8D%E6%95%A2%E8%A7%81%E8%A7%82%E9%9F%B3%23) `122.2K 🔥` `-53%`
1. [石蕊 肖旭 (Litmus Xiao Xu)](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E8%95%8A%20%E8%82%96%E6%97%AD%23) `117.6K 🔥` `-44%`
1. [时代峰峻否认穆祉丞恋情 (Shi Fengjun denies Mu Zhicheng’s love affair)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%90%A6%E8%AE%A4%E7%A9%86%E7%A5%89%E4%B8%9E%E6%81%8B%E6%83%85%23) `112.4K 🔥` `-47%`

Updated at 2026-05-31 07:17:42

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
