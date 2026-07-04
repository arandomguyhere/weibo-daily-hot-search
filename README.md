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

1. [十五五期间美丽中国建设规划亮点 (Highlights of the Beautiful China Construction Plan during the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%9C%9F%E9%97%B4%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E8%A7%84%E5%88%92%E4%BA%AE%E7%82%B9%23) `660.5K 🔥` `NEW`
1. [王俊凯帮丁程鑫做主](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B8%AE%E4%B8%81%E7%A8%8B%E9%91%AB%E5%81%9A%E4%B8%BB%23) `435.3K 🔥` `NEW`
1. [当女生开始有大女主感](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A5%B3%E7%94%9F%E5%BC%80%E5%A7%8B%E6%9C%89%E5%A4%A7%E5%A5%B3%E4%B8%BB%E6%84%9F%23) `423.7K 🔥` `NEW`
1. [花少8送考人](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E9%80%81%E8%80%83%E4%BA%BA%23) `421.0K 🔥` `NEW`
1. [杨毅说中国足球比篮球有希望](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%E8%AF%B4%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E6%AF%94%E7%AF%AE%E7%90%83%E6%9C%89%E5%B8%8C%E6%9C%9B%23) `419.3K 🔥` `NEW`
1. [女子确诊肺癌晚期在地铁上介绍自己](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%E5%9C%A8%E5%9C%B0%E9%93%81%E4%B8%8A%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%23) `412.3K 🔥` `NEW`
1. [王力宏好深的伤口](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%A5%BD%E6%B7%B1%E7%9A%84%E4%BC%A4%E5%8F%A3%23) `405.8K 🔥` `NEW`
1. [重庆小伙打车到拉萨哭了司机爆梗](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B0%8F%E4%BC%99%E6%89%93%E8%BD%A6%E5%88%B0%E6%8B%89%E8%90%A8%E5%93%AD%E4%BA%86%E5%8F%B8%E6%9C%BA%E7%88%86%E6%A2%97%23) `403.7K 🔥` `NEW`
1. [霉霉婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `400.9K 🔥` `NEW`
1. [网红回应从重庆打车到拉萨](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%9B%9E%E5%BA%94%E4%BB%8E%E9%87%8D%E5%BA%86%E6%89%93%E8%BD%A6%E5%88%B0%E6%8B%89%E8%90%A8%23) `399.6K 🔥` `NEW`
1. [货车司机打赏女主播一百多万被拉黑 (Truck driver who tipped female anchor more than 1 million was blacklisted)](https://s.weibo.com/weibo?q=%23%E8%B4%A7%E8%BD%A6%E5%8F%B8%E6%9C%BA%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD%E4%B8%80%E7%99%BE%E5%A4%9A%E4%B8%87%E8%A2%AB%E6%8B%89%E9%BB%91%23) `397.7K 🔥` `NEW`
1. [央视评河南西瓜价格暴跌](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%AF%84%E6%B2%B3%E5%8D%97%E8%A5%BF%E7%93%9C%E4%BB%B7%E6%A0%BC%E6%9A%B4%E8%B7%8C%23) `396.1K 🔥` `NEW`
1. [曝郭宇欣一直喜欢背后说人闲话](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E4%B8%80%E7%9B%B4%E5%96%9C%E6%AC%A2%E8%83%8C%E5%90%8E%E8%AF%B4%E4%BA%BA%E9%97%B2%E8%AF%9D%23) `393.4K 🔥` `NEW`
1. [全智贤手背皱纹](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%BA%E8%B4%A4%E6%89%8B%E8%83%8C%E7%9A%B1%E7%BA%B9%23) `389.2K 🔥` `NEW`
1. [鹿晗去了周震南演唱会](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8E%BB%E4%BA%86%E5%91%A8%E9%9C%87%E5%8D%97%E6%BC%94%E5%94%B1%E4%BC%9A%23) `381.8K 🔥` `NEW`
1. [央视曝次抛衣健康风险](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%AC%A1%E6%8A%9B%E8%A1%A3%E5%81%A5%E5%BA%B7%E9%A3%8E%E9%99%A9%23) `380.2K 🔥` `NEW`
1. [清融逆应援](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E9%80%86%E5%BA%94%E6%8F%B4%23) `373.8K 🔥` `NEW`
1. [王橹杰突围2考核](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%AA%81%E5%9B%B42%E8%80%83%E6%A0%B8%23) `372.7K 🔥` `NEW`
1. [无言身体怎么了](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%A8%80%E8%BA%AB%E4%BD%93%E6%80%8E%E4%B9%88%E4%BA%86%23) `368.9K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `362.5K 🔥` `NEW`
1. [宋亚轩伤不起 (Song Yaxuan can’t afford to be hurt)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%BC%A4%E4%B8%8D%E8%B5%B7%23) `361.0K 🔥` `NEW`
1. [Viper赛后发博](https://s.weibo.com/weibo?q=%23Viper%E8%B5%9B%E5%90%8E%E5%8F%91%E5%8D%9A%23) `355.4K 🔥` `NEW`
1. [日本严令访印人员饮用当地自来水](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%A5%E4%BB%A4%E8%AE%BF%E5%8D%B0%E4%BA%BA%E5%91%98%E9%A5%AE%E7%94%A8%E5%BD%93%E5%9C%B0%E8%87%AA%E6%9D%A5%E6%B0%B4%23) `349.2K 🔥` `NEW`
1. [JDG对战DRG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98DRG%23) `347.4K 🔥` `NEW`
1. [阿根廷佛得角全球观看量最高](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BD%9B%E5%BE%97%E8%A7%92%E5%85%A8%E7%90%83%E8%A7%82%E7%9C%8B%E9%87%8F%E6%9C%80%E9%AB%98%23) `344.1K 🔥` `NEW`
1. [周震南演唱会偶遇鹿晗张碧晨](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%9C%87%E5%8D%97%E6%BC%94%E5%94%B1%E4%BC%9A%E5%81%B6%E9%81%87%E9%B9%BF%E6%99%97%E5%BC%A0%E7%A2%A7%E6%99%A8%23) `342.9K 🔥` `NEW`
1. [北京国安vs山东泰山](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89vs%E5%B1%B1%E4%B8%9C%E6%B3%B0%E5%B1%B1%23) `341.3K 🔥` `NEW`
1. [佛得角再次感谢中国](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%86%8D%E6%AC%A1%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `1.1M 🔥` `+104%`
1. [郭宇欣 我和周也还不一定谁蹭谁呢](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%20%E6%88%91%E5%92%8C%E5%91%A8%E4%B9%9F%E8%BF%98%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%B0%81%E8%B9%AD%E8%B0%81%E5%91%A2%23) `417.9K 🔥` `+35%`
1. [秦牛正威承认整容了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `414.0K 🔥` `+37%`
1. [曝霉霉婚礼上唯一允许带手机的人 (The only person allowed to bring a mobile phone to Swift's wedding)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%94%AF%E4%B8%80%E5%85%81%E8%AE%B8%E5%B8%A6%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%23) `410.2K 🔥` `+43%`
1. [杨紫都瘦成啥样了 (How thin has Yang Zi become?)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%83%BD%E7%98%A6%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `408.4K 🔥` `+33%`
1. [BLG战胜T1](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CT1%23) `407.3K 🔥` `+34%`
1. [王楚钦孙颖莎获混双亚军 (Wang Chuqin and Sun Yingsha won the mixed doubles runner-up)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E8%8E%B7%E6%B7%B7%E5%8F%8C%E4%BA%9A%E5%86%9B%23) `391.4K 🔥` `+26%`
1. [秦岚嗓子恢复了 (Qin Lan's voice has recovered)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E6%81%A2%E5%A4%8D%E4%BA%86%23) `386.9K 🔥` `+33%`
1. [阿根廷队致敬佛得角](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E8%87%B4%E6%95%AC%E4%BD%9B%E5%BE%97%E8%A7%92%23) `386.0K 🔥` `+34%`
1. [普京首次承认俄罗斯缺油 (Putin admits for the first time that Russia is short of oil)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E9%A6%96%E6%AC%A1%E6%89%BF%E8%AE%A4%E4%BF%84%E7%BD%97%E6%96%AF%E7%BC%BA%E6%B2%B9%23) `383.6K 🔥` `+151%`
1. [香港偶遇王安宇吃烤肉](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%81%B6%E9%81%87%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%83%E7%83%A4%E8%82%89%23) `378.5K 🔥` `+98%`
1. [内娱明星眼里的王一博](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `365.8K 🔥` `+114%`
1. [吃桃子也有南北方差异](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%A1%83%E5%AD%90%E4%B9%9F%E6%9C%89%E5%8D%97%E5%8C%97%E6%96%B9%E5%B7%AE%E5%BC%82%23) `364.4K 🔥` `+113%`
1. [等Bin发微博](https://s.weibo.com/weibo?q=%23%E7%AD%89Bin%E5%8F%91%E5%BE%AE%E5%8D%9A%23) `358.7K 🔥` `+21%`
1. [白鹿做的咸蛋黄虾滑饺子](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%81%9A%E7%9A%84%E5%92%B8%E8%9B%8B%E9%BB%84%E8%99%BE%E6%BB%91%E9%A5%BA%E5%AD%90%23) `356.9K 🔥` `+26%`
1. [迪丽热巴柿子红短T](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9F%BF%E5%AD%90%E7%BA%A2%E7%9F%ADT%23) `353.1K 🔥` `+28%`
1. [亲生父亲跪谢女儿养父](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%94%9F%E7%88%B6%E4%BA%B2%E8%B7%AA%E8%B0%A2%E5%A5%B3%E5%84%BF%E5%85%BB%E7%88%B6%23) `350.0K 🔥` `+52%`
1. [王力宏摔倒 (Wang Leehom fell down)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E6%91%94%E5%80%92%23) `594.0K 🔥`
1. [问心2大结局](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E5%A4%A7%E7%BB%93%E5%B1%80%23) `423.1K 🔥`
1. [到底是谁取消有线耳机的](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E5%8F%96%E6%B6%88%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%9A%84%23) `825.6K 🔥` `-27%`
1. [佛得角门将 俱乐部不要他了 (Cape Verdean goalkeeper is no longer wanted by the club)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%20%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%8D%E8%A6%81%E4%BB%96%E4%BA%86%23) `441.1K 🔥` `-45%`
1. [周也圈内口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%9C%88%E5%86%85%E5%8F%A3%E7%A2%91%23) `376.6K 🔥` `-29%`
1. [一直不理解鸡架这种食物](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%B8%8D%E7%90%86%E8%A7%A3%E9%B8%A1%E6%9E%B6%E8%BF%99%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `369.8K 🔥` `-22%`

Updated at 2026-07-04 22:12:46

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
