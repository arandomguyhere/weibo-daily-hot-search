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

1. [西藏泥石流遇难3人失联558人](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE3%E4%BA%BA%E5%A4%B1%E8%81%94558%E4%BA%BA%23) `10.5M 🔥` `NEW`
1. [草间弥生去世](https://s.weibo.com/weibo?q=%23%E8%8D%89%E9%97%B4%E5%BC%A5%E7%94%9F%E5%8E%BB%E4%B8%96%23) `2.2M 🔥` `NEW`
1. [调派中国救援队增援吉隆泥石流救援](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%B4%BE%E4%B8%AD%E5%9B%BD%E6%95%91%E6%8F%B4%E9%98%9F%E5%A2%9E%E6%8F%B4%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%23) `1.7M 🔥` `NEW`
1. [店内离世老人儿子称深感抱歉](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E8%80%81%E4%BA%BA%E5%84%BF%E5%AD%90%E7%A7%B0%E6%B7%B1%E6%84%9F%E6%8A%B1%E6%AD%89%23) `1.1M 🔥` `NEW`
1. [自梳女被父亲要求终身不嫁](https://s.weibo.com/weibo?q=%23%E8%87%AA%E6%A2%B3%E5%A5%B3%E8%A2%AB%E7%88%B6%E4%BA%B2%E8%A6%81%E6%B1%82%E7%BB%88%E8%BA%AB%E4%B8%8D%E5%AB%81%23) `811.3K 🔥` `NEW`
1. [AI短剧 抄袭](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20%E6%8A%84%E8%A2%AD%23) `744.1K 🔥` `NEW`
1. [去世老人生前几乎每天都来涉事牌馆](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E7%94%9F%E5%89%8D%E5%87%A0%E4%B9%8E%E6%AF%8F%E5%A4%A9%E9%83%BD%E6%9D%A5%E6%B6%89%E4%BA%8B%E7%89%8C%E9%A6%86%23) `674.9K 🔥` `NEW`
1. [尼泊尔山洪484名游客失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA484%E5%90%8D%E6%B8%B8%E5%AE%A2%E5%A4%B1%E8%81%94%23) `609.0K 🔥` `NEW`
1. [中元节晚上不能出门是误会](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%85%83%E8%8A%82%E6%99%9A%E4%B8%8A%E4%B8%8D%E8%83%BD%E5%87%BA%E9%97%A8%E6%98%AF%E8%AF%AF%E4%BC%9A%23) `562.2K 🔥` `NEW`
1. [刘雅瑟 我心疼的是惠英红](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%85%E7%91%9F%20%E6%88%91%E5%BF%83%E7%96%BC%E7%9A%84%E6%98%AF%E6%83%A0%E8%8B%B1%E7%BA%A2%23) `425.7K 🔥` `NEW`
1. [中元节传统禁忌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%85%83%E8%8A%82%E4%BC%A0%E7%BB%9F%E7%A6%81%E5%BF%8C%23) `425.6K 🔥` `NEW`
1. [何炅自曝断交的人不超过4个](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E8%87%AA%E6%9B%9D%E6%96%AD%E4%BA%A4%E7%9A%84%E4%BA%BA%E4%B8%8D%E8%B6%85%E8%BF%874%E4%B8%AA%23) `424.5K 🔥` `NEW`
1. [杀害在韩女生嫌犯拟被精神检测](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E5%9C%A8%E9%9F%A9%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E6%8B%9F%E8%A2%AB%E7%B2%BE%E7%A5%9E%E6%A3%80%E6%B5%8B%23) `424.2K 🔥` `NEW`
1. [杀中国女生后嫌疑人抛尸250公里外](https://s.weibo.com/weibo?q=%23%E6%9D%80%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%90%8E%E5%AB%8C%E7%96%91%E4%BA%BA%E6%8A%9B%E5%B0%B8250%E5%85%AC%E9%87%8C%E5%A4%96%23) `421.8K 🔥` `NEW`
1. [江歌妈妈长文回望十年怀念女儿](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%AD%8C%E5%A6%88%E5%A6%88%E9%95%BF%E6%96%87%E5%9B%9E%E6%9C%9B%E5%8D%81%E5%B9%B4%E6%80%80%E5%BF%B5%E5%A5%B3%E5%84%BF%23) `415.2K 🔥` `NEW`
1. [西藏吉隆泥石流成功救出2人](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%88%90%E5%8A%9F%E6%95%91%E5%87%BA2%E4%BA%BA%23) `414.6K 🔥` `NEW`
1. [陈俊生罗子君在邱莹莹咖啡店离婚](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F%E7%BD%97%E5%AD%90%E5%90%9B%E5%9C%A8%E9%82%B1%E8%8E%B9%E8%8E%B9%E5%92%96%E5%95%A1%E5%BA%97%E7%A6%BB%E5%A9%9A%23) `412.2K 🔥` `NEW`
1. [酒店280元房型国庆标价5850元](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97280%E5%85%83%E6%88%BF%E5%9E%8B%E5%9B%BD%E5%BA%86%E6%A0%87%E4%BB%B75850%E5%85%83%23) `410.3K 🔥` `NEW`
1. [罗永浩拒绝首席老撕机示好](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%8B%92%E7%BB%9D%E9%A6%96%E5%B8%AD%E8%80%81%E6%92%95%E6%9C%BA%E7%A4%BA%E5%A5%BD%23) `408.1K 🔥` `NEW`
1. [羞辱式劝退应届生公司已减员2900人](https://s.weibo.com/weibo?q=%23%E7%BE%9E%E8%BE%B1%E5%BC%8F%E5%8A%9D%E9%80%80%E5%BA%94%E5%B1%8A%E7%94%9F%E5%85%AC%E5%8F%B8%E5%B7%B2%E5%87%8F%E5%91%982900%E4%BA%BA%23) `406.5K 🔥` `NEW`
1. [空枪 低成本](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E4%BD%8E%E6%88%90%E6%9C%AC%23) `405.3K 🔥` `NEW`
1. [韩拟对杀中国女生嫌疑人作精神鉴定](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%8B%9F%E5%AF%B9%E6%9D%80%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BD%9C%E7%B2%BE%E7%A5%9E%E9%89%B4%E5%AE%9A%23) `402.5K 🔥` `NEW`
1. [一个爱挤痘痘的人天塌了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%88%B1%E6%8C%A4%E7%97%98%E7%97%98%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `400.9K 🔥` `NEW`
1. [包贝尔包文婧上周五吃烧烤被偶遇](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%8C%85%E6%96%87%E5%A9%A7%E4%B8%8A%E5%91%A8%E4%BA%94%E5%90%83%E7%83%A7%E7%83%A4%E8%A2%AB%E5%81%B6%E9%81%87%23) `398.4K 🔥` `NEW`
1. [苹果首款折叠屏手机将亮相](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E9%A6%96%E6%AC%BE%E6%8A%98%E5%8F%A0%E5%B1%8F%E6%89%8B%E6%9C%BA%E5%B0%86%E4%BA%AE%E7%9B%B8%23) `396.2K 🔥` `NEW`
1. [周杰伦拒绝打球签名拍照](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%8B%92%E7%BB%9D%E6%89%93%E7%90%83%E7%AD%BE%E5%90%8D%E6%8B%8D%E7%85%A7%23) `394.9K 🔥` `NEW`
1. [赵丽颖辛芷蕾影后受害者联盟](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%BD%B1%E5%90%8E%E5%8F%97%E5%AE%B3%E8%80%85%E8%81%94%E7%9B%9F%23) `392.0K 🔥` `NEW`
1. [包贝尔 包文婧](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%20%E5%8C%85%E6%96%87%E5%A9%A7%23) `390.0K 🔥` `NEW`
1. [尼泊尔山洪暴发前后卫星图对比](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E6%9A%B4%E5%8F%91%E5%89%8D%E5%90%8E%E5%8D%AB%E6%98%9F%E5%9B%BE%E5%AF%B9%E6%AF%94%23) `388.1K 🔥` `NEW`
1. [妻子的浪漫旅行第二季四对离了两对](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%9B%9B%E5%AF%B9%E7%A6%BB%E4%BA%86%E4%B8%A4%E5%AF%B9%23) `387.2K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `384.6K 🔥` `NEW`
1. [侯卓成杨汝晴推迟订婚了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E6%9D%A8%E6%B1%9D%E6%99%B4%E6%8E%A8%E8%BF%9F%E8%AE%A2%E5%A9%9A%E4%BA%86%23) `384.0K 🔥` `NEW`
1. [西藏吉隆口岸方向发现堰塞湖](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%96%B9%E5%90%91%E5%8F%91%E7%8E%B0%E5%A0%B0%E5%A1%9E%E6%B9%96%23) `380.2K 🔥` `NEW`
1. [世界上最不公平的两件事太真实](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E4%B8%8D%E5%85%AC%E5%B9%B3%E7%9A%84%E4%B8%A4%E4%BB%B6%E4%BA%8B%E5%A4%AA%E7%9C%9F%E5%AE%9E%23) `379.4K 🔥` `NEW`
1. [老人家属否认停尸闹事](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%90%A6%E8%AE%A4%E5%81%9C%E5%B0%B8%E9%97%B9%E4%BA%8B%23) `377.4K 🔥` `NEW`
1. [尼泊尔泥石流](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `373.6K 🔥` `NEW`
1. [苹果发布会定档](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9A%E6%A1%A3%23) `371.4K 🔥` `NEW`
1. [嫌疑人称因结婚矛盾杀中国女学生](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E7%96%91%E4%BA%BA%E7%A7%B0%E5%9B%A0%E7%BB%93%E5%A9%9A%E7%9F%9B%E7%9B%BE%E6%9D%80%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A6%E7%94%9F%23) `369.2K 🔥` `NEW`
1. [早春晴朗第5集19分32秒](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%AC%AC5%E9%9B%8619%E5%88%8632%E7%A7%92%23) `368.0K 🔥` `NEW`
1. [夫妻退房抱走酒店被子被当场拦下](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%80%80%E6%88%BF%E6%8A%B1%E8%B5%B0%E9%85%92%E5%BA%97%E8%A2%AB%E5%AD%90%E8%A2%AB%E5%BD%93%E5%9C%BA%E6%8B%A6%E4%B8%8B%23) `365.6K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `362.7K 🔥` `NEW`
1. [李昀锐工作室女孩剪辑百万点赞](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A5%B3%E5%AD%A9%E5%89%AA%E8%BE%91%E7%99%BE%E4%B8%87%E7%82%B9%E8%B5%9E%23) `361.9K 🔥` `NEW`
1. [中国大爷击败日本选手刷新亚洲纪录](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E7%88%B7%E5%87%BB%E8%B4%A5%E6%97%A5%E6%9C%AC%E9%80%89%E6%89%8B%E5%88%B7%E6%96%B0%E4%BA%9A%E6%B4%B2%E7%BA%AA%E5%BD%95%23) `360.0K 🔥` `NEW`
1. [周觅SM腾讯合资公司CEO](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%A7%85SM%E8%85%BE%E8%AE%AF%E5%90%88%E8%B5%84%E5%85%AC%E5%8F%B8CEO%23) `356.9K 🔥` `NEW`
1. [张予曦工作室来高人了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%9D%A5%E9%AB%98%E4%BA%BA%E4%BA%86%23) `356.7K 🔥` `NEW`
1. [罗永浩称扶老人遭索赔事件没什么反转](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E7%A7%B0%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E4%BA%8B%E4%BB%B6%E6%B2%A1%E4%BB%80%E4%B9%88%E5%8F%8D%E8%BD%AC%23) `352.9K 🔥` `NEW`
1. [吴青峰长文](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%9D%92%E5%B3%B0%E9%95%BF%E6%96%87%23) `352.8K 🔥` `NEW`
1. [章子怡 我只是增肥了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%20%E6%88%91%E5%8F%AA%E6%98%AF%E5%A2%9E%E8%82%A5%E4%BA%86%23) `349.6K 🔥` `NEW`
1. [6个症状要警惕胃癌前兆](https://s.weibo.com/weibo?q=%236%E4%B8%AA%E7%97%87%E7%8A%B6%E8%A6%81%E8%AD%A6%E6%83%95%E8%83%83%E7%99%8C%E5%89%8D%E5%85%86%23) `348.9K 🔥` `+38%`
1. [办事大厅被拍空岗后禁群众带手机进入](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E4%BA%8B%E5%A4%A7%E5%8E%85%E8%A2%AB%E6%8B%8D%E7%A9%BA%E5%B2%97%E5%90%8E%E7%A6%81%E7%BE%A4%E4%BC%97%E5%B8%A6%E6%89%8B%E6%9C%BA%E8%BF%9B%E5%85%A5%23) `375.8K 🔥` `-24%`

Updated at 2026-08-27 12:40:02

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
