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

1. [王楚钦孙颖莎获混双亚军 (Wang Chuqin and Sun Yingsha won the mixed doubles runner-up)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E8%8E%B7%E6%B7%B7%E5%8F%8C%E4%BA%9A%E5%86%9B%23) `1.6M 🔥` `NEW`
1. [本周这些数据最值得关注](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E6%9C%80%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `1.2M 🔥` `NEW`
1. [到底是谁取消有线耳机的](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E5%8F%96%E6%B6%88%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%9A%84%23) `1.1M 🔥` `NEW`
1. [佛得角更衣室哭了](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%9B%B4%E8%A1%A3%E5%AE%A4%E5%93%AD%E4%BA%86%23) `940.6K 🔥` `NEW`
1. [最新世界杯夺冠赔率](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%BA%E5%86%A0%E8%B5%94%E7%8E%87%23) `791.5K 🔥` `NEW`
1. [建议大家统一下面试工作名称](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E7%BB%9F%E4%B8%80%E4%B8%8B%E9%9D%A2%E8%AF%95%E5%B7%A5%E4%BD%9C%E5%90%8D%E7%A7%B0%23) `751.7K 🔥` `NEW`
1. [陈靖可横店送虞书欣上班](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E6%A8%AA%E5%BA%97%E9%80%81%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8A%E7%8F%AD%23) `740.4K 🔥` `NEW`
1. [蒋方舟要求清华教授停止污蔑式举报](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%96%B9%E8%88%9F%E8%A6%81%E6%B1%82%E6%B8%85%E5%8D%8E%E6%95%99%E6%8E%88%E5%81%9C%E6%AD%A2%E6%B1%A1%E8%94%91%E5%BC%8F%E4%B8%BE%E6%8A%A5%23) `577.8K 🔥` `NEW`
1. [王俊凯演唱会8000张票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A8000%E5%BC%A0%E7%A5%A8%23) `443.0K 🔥` `NEW`
1. [郭宇欣 我和周也还不一定谁蹭谁呢](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%20%E6%88%91%E5%92%8C%E5%91%A8%E4%B9%9F%E8%BF%98%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%B0%81%E8%B9%AD%E8%B0%81%E5%91%A2%23) `443.0K 🔥` `NEW`
1. [曝霉霉婚礼上唯一允许带手机的人 (The only person allowed to bring a mobile phone to Swift's wedding)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%94%AF%E4%B8%80%E5%85%81%E8%AE%B8%E5%B8%A6%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%23) `442.8K 🔥` `NEW`
1. [佛得角门将回应被阿根廷淘汰](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%B7%98%E6%B1%B0%23) `442.5K 🔥` `NEW`
1. [叶非夜 郭宇欣](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E9%9D%9E%E5%A4%9C%20%E9%83%AD%E5%AE%87%E6%AC%A3%23) `442.4K 🔥` `NEW`
1. [高市早苗访问印度拒喝印度水](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%AE%BF%E9%97%AE%E5%8D%B0%E5%BA%A6%E6%8B%92%E5%96%9D%E5%8D%B0%E5%BA%A6%E6%B0%B4%23) `442.3K 🔥` `NEW`
1. [虞书欣回复陈靖可](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9B%9E%E5%A4%8D%E9%99%88%E9%9D%96%E5%8F%AF%23) `442.3K 🔥` `NEW`
1. [台风美莎克还要二次登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BE%8E%E8%8E%8E%E5%85%8B%E8%BF%98%E8%A6%81%E4%BA%8C%E6%AC%A1%E7%99%BB%E9%99%86%23) `442.2K 🔥` `NEW`
1. [TF家族运动会抢票](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E6%8A%A2%E7%A5%A8%23) `441.8K 🔥` `NEW`
1. [伊朗为哈梅内伊葬礼烤5000万块面包](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%BA%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%91%AC%E7%A4%BC%E7%83%A45000%E4%B8%87%E5%9D%97%E9%9D%A2%E5%8C%85%23) `441.4K 🔥` `NEW`
1. [霉霉官宣完婚](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%AE%98%E5%AE%A3%E5%AE%8C%E5%A9%9A%23) `441.1K 🔥` `NEW`
1. [阿根廷赢了但把疲惫写在脸上](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B5%A2%E4%BA%86%E4%BD%86%E6%8A%8A%E7%96%B2%E6%83%AB%E5%86%99%E5%9C%A8%E8%84%B8%E4%B8%8A%23) `440.0K 🔥` `NEW`
1. [秦岚嗓子恢复了 (Qin Lan's voice has recovered)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E6%81%A2%E5%A4%8D%E4%BA%86%23) `439.5K 🔥` `NEW`
1. [迪丽热巴漂亮的李慧珍18年得的金鹰奖](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%82%E4%BA%AE%E7%9A%84%E6%9D%8E%E6%85%A7%E7%8F%8D18%E5%B9%B4%E5%BE%97%E7%9A%84%E9%87%91%E9%B9%B0%E5%A5%96%23) `438.6K 🔥` `NEW`
1. [主动出击才是真正的强者](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%A8%E5%87%BA%E5%87%BB%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BC%BA%E8%80%85%23) `438.1K 🔥` `NEW`
1. [周深因控制不住情绪道歉](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%9B%A0%E6%8E%A7%E5%88%B6%E4%B8%8D%E4%BD%8F%E6%83%85%E7%BB%AA%E9%81%93%E6%AD%89%23) `437.4K 🔥` `NEW`
1. [霸王茶姬 迪奥](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%20%E8%BF%AA%E5%A5%A5%23) `436.9K 🔥` `NEW`
1. [BLG对战T1](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98T1%23) `389.0K 🔥` `NEW`
1. [蒋方舟要求清华教授停止造黄谣](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%96%B9%E8%88%9F%E8%A6%81%E6%B1%82%E6%B8%85%E5%8D%8E%E6%95%99%E6%8E%88%E5%81%9C%E6%AD%A2%E9%80%A0%E9%BB%84%E8%B0%A3%23) `354.3K 🔥` `NEW`
1. [阿根廷艰难取胜6人跑动距离过万](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%89%B0%E9%9A%BE%E5%8F%96%E8%83%9C6%E4%BA%BA%E8%B7%91%E5%8A%A8%E8%B7%9D%E7%A6%BB%E8%BF%87%E4%B8%87%23) `353.5K 🔥` `NEW`
1. [王楚钦孙颖莎2比3林仲勋申裕斌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E2%E6%AF%943%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C%23) `353.0K 🔥` `NEW`
1. [杨紫视后第一个线下活动造型](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%A7%86%E5%90%8E%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E9%80%A0%E5%9E%8B%23) `320.9K 🔥` `NEW`
1. [曝霉霉未婚夫本来没认真恋爱 (Exposed that Swift's fiancé was never in a serious relationship)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%89%E9%9C%89%E6%9C%AA%E5%A9%9A%E5%A4%AB%E6%9C%AC%E6%9D%A5%E6%B2%A1%E8%AE%A4%E7%9C%9F%E6%81%8B%E7%88%B1%23) `319.6K 🔥` `NEW`
1. [王楚钦孙颖莎混双捧杯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%B7%B7%E5%8F%8C%E6%8D%A7%E6%9D%AF%23) `315.1K 🔥` `NEW`
1. [林仲勋申裕斌冠军](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C%E5%86%A0%E5%86%9B%23) `277.6K 🔥` `NEW`
1. [王俊凯卡点521抢票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%A1%E7%82%B9521%E6%8A%A2%E7%A5%A8%23) `165.1K 🔥` `NEW`
1. [华为发布V2版韬定律论文](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83V2%E7%89%88%E9%9F%AC%E5%AE%9A%E5%BE%8B%E8%AE%BA%E6%96%87%23) `164.9K 🔥` `NEW`
1. [何炅震惊刘耀文肩宽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E9%9C%87%E6%83%8A%E5%88%98%E8%80%80%E6%96%87%E8%82%A9%E5%AE%BD%23) `163.7K 🔥` `NEW`
1. [佛得角队收获1100万美元奖金](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E6%94%B6%E8%8E%B71100%E4%B8%87%E7%BE%8E%E5%85%83%E5%A5%96%E9%87%91%23) `1.9M 🔥` `+514%`
1. [买超 邵晴 (Buy Chao Shao Qing)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%B6%85%20%E9%82%B5%E6%99%B4%23) `440.3K 🔥` `+38%`
1. [曝iPhone18无缘iOS27两大功能](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18%E6%97%A0%E7%BC%98iOS27%E4%B8%A4%E5%A4%A7%E5%8A%9F%E8%83%BD%23) `357.3K 🔥` `+27%`
1. [曝买超与短剧女演员乔仙童恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B9%B0%E8%B6%85%E4%B8%8E%E7%9F%AD%E5%89%A7%E5%A5%B3%E6%BC%94%E5%91%98%E4%B9%94%E4%BB%99%E7%AB%A5%E6%81%8B%E6%83%85%23) `442.6K 🔥`
1. [华强北提前开苹果发布会了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%BC%BA%E5%8C%97%E6%8F%90%E5%89%8D%E5%BC%80%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E4%BA%86%23) `439.2K 🔥`
1. [YG艺人称SM是暧昧天堂 (YG artist calls SM a paradise for ambiguity)](https://s.weibo.com/weibo?q=%23YG%E8%89%BA%E4%BA%BA%E7%A7%B0SM%E6%98%AF%E6%9A%A7%E6%98%A7%E5%A4%A9%E5%A0%82%23) `300.2K 🔥`
1. [买超家对张嘉倪邵晴待遇反差 (The contrast between the treatment of Zhang Jia, Ni Shaoqing and others in the supermarket shopping mall)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%B6%85%E5%AE%B6%E5%AF%B9%E5%BC%A0%E5%98%89%E5%80%AA%E9%82%B5%E6%99%B4%E5%BE%85%E9%81%87%E5%8F%8D%E5%B7%AE%23) `272.5K 🔥`
1. [王楚钦孙颖莎vs林仲勋申裕斌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%9E%97%E4%BB%B2%E5%8B%8B%E7%94%B3%E8%A3%95%E6%96%8C%23) `442.8K 🔥` `-34%`
1. [711起诉耐克抄袭](https://s.weibo.com/weibo?q=%23711%E8%B5%B7%E8%AF%89%E8%80%90%E5%85%8B%E6%8A%84%E8%A2%AD%23) `442.1K 🔥` `-58%`
1. [佛得角门将 俱乐部不要他了 (Cape Verdean goalkeeper is no longer wanted by the club)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%20%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%8D%E8%A6%81%E4%BB%96%E4%BA%86%23) `437.1K 🔥` `-79%`
1. [佛得角门将 封神 (Cape Verde goalkeeper becomes a god)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%20%E5%B0%81%E7%A5%9E%23) `395.2K 🔥` `-83%`
1. [西班牙此身从此分明了 (Spain’s identity became clear from now on)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%AD%A4%E8%BA%AB%E4%BB%8E%E6%AD%A4%E5%88%86%E6%98%8E%E4%BA%86%23) `367.3K 🔥` `-66%`
1. [欧洲打算限制中国的空调](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E6%89%93%E7%AE%97%E9%99%90%E5%88%B6%E4%B8%AD%E5%9B%BD%E7%9A%84%E7%A9%BA%E8%B0%83%23) `164.5K 🔥` `-41%`
1. [密室大逃脱8定档官宣](https://s.weibo.com/weibo?q=%23%E5%AF%86%E5%AE%A4%E5%A4%A7%E9%80%83%E8%84%B18%E5%AE%9A%E6%A1%A3%E5%AE%98%E5%AE%A3%23) `163.2K 🔥` `-50%`

Updated at 2026-07-04 15:32:06

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
