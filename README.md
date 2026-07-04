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

1. [10省无偿献血量下降 (Unpaid blood donation volume drops in 10 provinces)](https://s.weibo.com/weibo?q=%2310%E7%9C%81%E6%97%A0%E5%81%BF%E7%8C%AE%E8%A1%80%E9%87%8F%E4%B8%8B%E9%99%8D%23) `374.9K 🔥` `NEW`
1. [意识到了隐形支出的可怕](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%86%E9%9A%90%E5%BD%A2%E6%94%AF%E5%87%BA%E7%9A%84%E5%8F%AF%E6%80%95%23) `372.8K 🔥` `NEW`
1. [韩网扒出SM练习生版致美丽的你](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E6%89%92%E5%87%BASM%E7%BB%83%E4%B9%A0%E7%94%9F%E7%89%88%E8%87%B4%E7%BE%8E%E4%B8%BD%E7%9A%84%E4%BD%A0%23) `359.7K 🔥` `NEW`
1. [人一定要去上班](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `353.4K 🔥` `NEW`
1. [日本首次公布跟踪中国航母视频](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A6%96%E6%AC%A1%E5%85%AC%E5%B8%83%E8%B7%9F%E8%B8%AA%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%AF%8D%E8%A7%86%E9%A2%91%23) `346.2K 🔥` `NEW`
1. [佛得角主帅送给阿根廷队的礼物](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E4%B8%BB%E5%B8%85%E9%80%81%E7%BB%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E7%9A%84%E7%A4%BC%E7%89%A9%23) `338.5K 🔥` `NEW`
1. [李宇春表情都变了宋亚轩你就来个这](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E8%A1%A8%E6%83%85%E9%83%BD%E5%8F%98%E4%BA%86%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%BD%A0%E5%B0%B1%E6%9D%A5%E4%B8%AA%E8%BF%99%23) `335.1K 🔥` `NEW`
1. [白鹿把大结局看了好几遍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%8A%E5%A4%A7%E7%BB%93%E5%B1%80%E7%9C%8B%E4%BA%86%E5%A5%BD%E5%87%A0%E9%81%8D%23) `333.1K 🔥` `NEW`
1. [王源结婚也不是不能有](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%BB%93%E5%A9%9A%E4%B9%9F%E4%B8%8D%E6%98%AF%E4%B8%8D%E8%83%BD%E6%9C%89%23) `331.1K 🔥` `NEW`
1. [人到了年纪就会觉醒老式听觉](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%BA%86%E5%B9%B4%E7%BA%AA%E5%B0%B1%E4%BC%9A%E8%A7%89%E9%86%92%E8%80%81%E5%BC%8F%E5%90%AC%E8%A7%89%23) `328.1K 🔥` `NEW`
1. [严浩翔也不敢说话了 (Yan Haoxiang didn’t dare to speak anymore.)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E4%B9%9F%E4%B8%8D%E6%95%A2%E8%AF%B4%E8%AF%9D%E4%BA%86%23) `327.8K 🔥` `NEW`
1. [汪苏泷哭了4次](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%93%AD%E4%BA%864%E6%AC%A1%23) `325.0K 🔥` `NEW`
1. [王俊凯头顶冰玫瑰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A4%B4%E9%A1%B6%E5%86%B0%E7%8E%AB%E7%91%B0%23) `319.6K 🔥` `NEW`
1. [女子7400买钻戒两月后售价变2900](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%907400%E4%B9%B0%E9%92%BB%E6%88%92%E4%B8%A4%E6%9C%88%E5%90%8E%E5%94%AE%E4%BB%B7%E5%8F%982900%23) `319.5K 🔥` `NEW`
1. [吴宣仪演唱会](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%BC%94%E5%94%B1%E4%BC%9A%23) `315.6K 🔥` `NEW`
1. [哈梅内伊葬礼现场2500辆救护车待命](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%91%AC%E7%A4%BC%E7%8E%B0%E5%9C%BA2500%E8%BE%86%E6%95%91%E6%8A%A4%E8%BD%A6%E5%BE%85%E5%91%BD%23) `312.6K 🔥` `NEW`
1. [Bin回应战胜T1](https://s.weibo.com/weibo?q=%23Bin%E5%9B%9E%E5%BA%94%E6%88%98%E8%83%9CT1%23) `307.9K 🔥` `NEW`
1. [姆巴佩预测自己是最佳射手](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%A2%84%E6%B5%8B%E8%87%AA%E5%B7%B1%E6%98%AF%E6%9C%80%E4%BD%B3%E5%B0%84%E6%89%8B%23) `306.2K 🔥` `NEW`
1. [成都公安通报公共卫生间偷拍事件](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%85%AC%E5%AE%89%E9%80%9A%E6%8A%A5%E5%85%AC%E5%85%B1%E5%8D%AB%E7%94%9F%E9%97%B4%E5%81%B7%E6%8B%8D%E4%BA%8B%E4%BB%B6%23) `304.4K 🔥` `NEW`
1. [央视曝次抛衣健康风险](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%AC%A1%E6%8A%9B%E8%A1%A3%E5%81%A5%E5%BA%B7%E9%A3%8E%E9%99%A9%23) `1.1M 🔥` `+199%`
1. [王力宏好深的伤口 (Wang Leehom’s deep wound)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%A5%BD%E6%B7%B1%E7%9A%84%E4%BC%A4%E5%8F%A3%23) `597.8K 🔥` `+47%`
1. [十五五期间美丽中国建设规划亮点 (Highlights of the Beautiful China Construction Plan during the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%9C%9F%E9%97%B4%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E8%A7%84%E5%88%92%E4%BA%AE%E7%82%B9%23) `677.1K 🔥`
1. [吃桃子也有南北方差异](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%A1%83%E5%AD%90%E4%B9%9F%E6%9C%89%E5%8D%97%E5%8C%97%E6%96%B9%E5%B7%AE%E5%BC%82%23) `381.4K 🔥`
1. [王俊凯帮丁程鑫做主](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B8%AE%E4%B8%81%E7%A8%8B%E9%91%AB%E5%81%9A%E4%B8%BB%23) `381.1K 🔥`
1. [阿根廷佛得角全球观看量最高](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BD%9B%E5%BE%97%E8%A7%92%E5%85%A8%E7%90%83%E8%A7%82%E7%9C%8B%E9%87%8F%E6%9C%80%E9%AB%98%23) `378.7K 🔥`
1. [问心2大结局](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E5%A4%A7%E7%BB%93%E5%B1%80%23) `376.8K 🔥`
1. [花少8送考人](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E9%80%81%E8%80%83%E4%BA%BA%23) `374.5K 🔥`
1. [秦牛正威承认整容了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `371.0K 🔥`
1. [郭宇欣 我和周也还不一定谁蹭谁呢](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%20%E6%88%91%E5%92%8C%E5%91%A8%E4%B9%9F%E8%BF%98%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%B0%81%E8%B9%AD%E8%B0%81%E5%91%A2%23) `368.4K 🔥`
1. [女子确诊肺癌晚期在地铁上介绍自己](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%E5%9C%A8%E5%9C%B0%E9%93%81%E4%B8%8A%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%23) `367.5K 🔥`
1. [秦岚嗓子恢复了 (Qin Lan's voice has recovered)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E6%81%A2%E5%A4%8D%E4%BA%86%23) `364.8K 🔥`
1. [当女生开始有大女主感](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A5%B3%E7%94%9F%E5%BC%80%E5%A7%8B%E6%9C%89%E5%A4%A7%E5%A5%B3%E4%B8%BB%E6%84%9F%23) `361.0K 🔥`
1. [杨紫都瘦成啥样了 (How thin has Yang Zi become?)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%83%BD%E7%98%A6%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `357.9K 🔥`
1. [重庆小伙打车到拉萨哭了司机爆梗 (A Chongqing guy took a taxi to Lhasa and the driver cried.)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B0%8F%E4%BC%99%E6%89%93%E8%BD%A6%E5%88%B0%E6%8B%89%E8%90%A8%E5%93%AD%E4%BA%86%E5%8F%B8%E6%9C%BA%E7%88%86%E6%A2%97%23) `355.9K 🔥`
1. [曝郭宇欣一直喜欢背后说人闲话](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E4%B8%80%E7%9B%B4%E5%96%9C%E6%AC%A2%E8%83%8C%E5%90%8E%E8%AF%B4%E4%BA%BA%E9%97%B2%E8%AF%9D%23) `354.6K 🔥`
1. [霉霉婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `350.6K 🔥`
1. [全智贤手背皱纹](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%BA%E8%B4%A4%E6%89%8B%E8%83%8C%E7%9A%B1%E7%BA%B9%23) `350.1K 🔥`
1. [BLG战胜T1](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CT1%23) `347.4K 🔥`
1. [香港偶遇王安宇吃烤肉](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%81%B6%E9%81%87%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%83%E7%83%A4%E8%82%89%23) `345.2K 🔥`
1. [曝霉霉婚礼上唯一允许带手机的人 (The only person allowed to bring a mobile phone to Swift's wedding)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%94%AF%E4%B8%80%E5%85%81%E8%AE%B8%E5%B8%A6%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%23) `343.0K 🔥`
1. [阿根廷队致敬佛得角](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E8%87%B4%E6%95%AC%E4%BD%9B%E5%BE%97%E8%A7%92%23) `340.7K 🔥`
1. [鹿晗去了周震南演唱会](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8E%BB%E4%BA%86%E5%91%A8%E9%9C%87%E5%8D%97%E6%BC%94%E5%94%B1%E4%BC%9A%23) `337.9K 🔥`
1. [王楚钦孙颖莎获混双亚军 (Wang Chuqin and Sun Yingsha won the mixed doubles runner-up)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E8%8E%B7%E6%B7%B7%E5%8F%8C%E4%BA%9A%E5%86%9B%23) `323.9K 🔥`
1. [周也圈内口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%9C%88%E5%86%85%E5%8F%A3%E7%A2%91%23) `321.7K 🔥`
1. [内娱明星眼里的王一博](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `317.6K 🔥`
1. [无言身体怎么了 (What's wrong with Wu Yan's body?)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%A8%80%E8%BA%AB%E4%BD%93%E6%80%8E%E4%B9%88%E4%BA%86%23) `309.7K 🔥`
1. [佛得角再次感谢中国](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%86%8D%E6%AC%A1%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `850.3K 🔥` `-25%`
1. [王力宏摔倒 (Wang Leehom fell down)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E6%91%94%E5%80%92%23) `364.1K 🔥` `-39%`
1. [到底是谁取消有线耳机的](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E5%8F%96%E6%B6%88%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%9A%84%23) `334.5K 🔥` `-59%`
1. [佛得角门将 俱乐部不要他了 (Cape Verdean goalkeeper is no longer wanted by the club)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%20%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%8D%E8%A6%81%E4%BB%96%E4%BA%86%23) `313.8K 🔥` `-29%`

Updated at 2026-07-04 23:32:54

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
