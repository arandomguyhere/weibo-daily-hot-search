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

1. [中国天眼开辟宇宙研究新路径 (China's Sky Eye opens up new path for cosmic research)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%9C%BC%E5%BC%80%E8%BE%9F%E5%AE%87%E5%AE%99%E7%A0%94%E7%A9%B6%E6%96%B0%E8%B7%AF%E5%BE%84%23) `676.5K 🔥` `NEW`
1. [王俊凯演唱会第一排视角](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AC%AC%E4%B8%80%E6%8E%92%E8%A7%86%E8%A7%92%23) `670.8K 🔥` `NEW`
1. [大学生为省掉1块钱的打包费](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%BA%E7%9C%81%E6%8E%891%E5%9D%97%E9%92%B1%E7%9A%84%E6%89%93%E5%8C%85%E8%B4%B9%23) `549.7K 🔥` `NEW`
1. [说唱巅峰名人堂又争又抢](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%94%B1%E5%B7%85%E5%B3%B0%E5%90%8D%E4%BA%BA%E5%A0%82%E5%8F%88%E4%BA%89%E5%8F%88%E6%8A%A2%23) `542.0K 🔥` `NEW`
1. [王俊凯被满场粉丝感动了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A2%AB%E6%BB%A1%E5%9C%BA%E7%B2%89%E4%B8%9D%E6%84%9F%E5%8A%A8%E4%BA%86%23) `342.1K 🔥` `NEW`
1. [成都彩虹](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%BD%A9%E8%99%B9%23) `339.4K 🔥` `NEW`
1. [林高远袁烜松晋级四强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%AB%98%E8%BF%9C%E8%A2%81%E7%83%9C%E6%9D%BE%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `333.2K 🔥` `NEW`
1. [佛得角门将谈阿根廷亚马尔对决](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E8%B0%88%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%AF%B9%E5%86%B3%23) `323.1K 🔥` `NEW`
1. [突围](https://s.weibo.com/weibo?q=%23%E7%AA%81%E5%9B%B4%23) `322.4K 🔥` `NEW`
1. [甘孜一载多名游客客车从桥上翻落](https://s.weibo.com/weibo?q=%23%E7%94%98%E5%AD%9C%E4%B8%80%E8%BD%BD%E5%A4%9A%E5%90%8D%E6%B8%B8%E5%AE%A2%E5%AE%A2%E8%BD%A6%E4%BB%8E%E6%A1%A5%E4%B8%8A%E7%BF%BB%E8%90%BD%23) `306.7K 🔥` `NEW`
1. [左奇函没入选破局 (Zuo Qihan was not selected to break the game)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E6%B2%A1%E5%85%A5%E9%80%89%E7%A0%B4%E5%B1%80%23) `295.6K 🔥` `NEW`
1. [世界杯冠军预测](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E9%A2%84%E6%B5%8B%23) `283.1K 🔥` `NEW`
1. [亚马尔抢走了弟弟的所有运动天赋](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E6%8A%A2%E8%B5%B0%E4%BA%86%E5%BC%9F%E5%BC%9F%E7%9A%84%E6%89%80%E6%9C%89%E8%BF%90%E5%8A%A8%E5%A4%A9%E8%B5%8B%23) `281.5K 🔥` `NEW`
1. [百货店LV](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%B4%A7%E5%BA%97LV%23) `266.9K 🔥` `NEW`
1. [真正让人心情变得很哇塞的方法](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E8%AE%A9%E4%BA%BA%E5%BF%83%E6%83%85%E5%8F%98%E5%BE%97%E5%BE%88%E5%93%87%E5%A1%9E%E7%9A%84%E6%96%B9%E6%B3%95%23) `161.6K 🔥` `NEW`
1. [我以为自己戴着耳机工作的样子](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E6%88%B4%E7%9D%80%E8%80%B3%E6%9C%BA%E5%B7%A5%E4%BD%9C%E7%9A%84%E6%A0%B7%E5%AD%90%23) `161.3K 🔥` `NEW`
1. [已经绝交的朋友教会我的事](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E7%BB%9D%E4%BA%A4%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%95%99%E4%BC%9A%E6%88%91%E7%9A%84%E4%BA%8B%23) `157.6K 🔥` `NEW`
1. [马龙许昕回应晋级4强](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%9B%9E%E5%BA%94%E6%99%8B%E7%BA%A74%E5%BC%BA%23) `149.2K 🔥` `NEW`
1. [维嘉偶遇易烊千玺立牌的反应](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E5%81%B6%E9%81%87%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%AB%8B%E7%89%8C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `147.9K 🔥` `NEW`
1. [丁禹兮演唱会](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E5%94%B1%E4%BC%9A%23) `350.7K 🔥` `+68%`
1. [长大了才发现自己小时候真的很可怜 (When I grew up, I realized that I was really pitiful when I was a child.)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E4%BA%86%E6%89%8D%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E5%B0%8F%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E5%BE%88%E5%8F%AF%E6%80%9C%23) `280.7K 🔥` `+41%`
1. [马龙许昕晋级四强 (Ma Long and Xu Xin advance to the semi-finals)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `1.2M 🔥`
1. [八仙票房 (Eight Immortals Box Office)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E7%A5%A8%E6%88%BF%23) `827.0K 🔥`
1. [发现很多KTV都没有MV了 (I found that many KTVs no longer have MVs)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9AKTV%E9%83%BD%E6%B2%A1%E6%9C%89MV%E4%BA%86%23) `667.2K 🔥`
1. [为什么要给美甲师点奶茶](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%99%E7%BE%8E%E7%94%B2%E5%B8%88%E7%82%B9%E5%A5%B6%E8%8C%B6%23) `541.1K 🔥`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `358.5K 🔥`
1. [一眼看出白鹿自己化的妆](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E7%99%BD%E9%B9%BF%E8%87%AA%E5%B7%B1%E5%8C%96%E7%9A%84%E5%A6%86%23) `355.1K 🔥`
1. [苏州文旅看到后天塌了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E6%96%87%E6%97%85%E7%9C%8B%E5%88%B0%E5%90%8E%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `293.3K 🔥`
1. [百花杀范帅琦男装世子爆改女装孕妈](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E8%8C%83%E5%B8%85%E7%90%A6%E7%94%B7%E8%A3%85%E4%B8%96%E5%AD%90%E7%88%86%E6%94%B9%E5%A5%B3%E8%A3%85%E5%AD%95%E5%A6%88%23) `150.7K 🔥`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `143.5K 🔥`
1. [一念江南赵今麦路透 (One Thought of Jiangnan Zhao Jinmai Reuters)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B7%AF%E9%80%8F%23) `394.2K 🔥` `-34%`
1. [吃小龙虾尽量选蒜香的](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E5%B0%BD%E9%87%8F%E9%80%89%E8%92%9C%E9%A6%99%E7%9A%84%23) `361.6K 🔥` `-45%`
1. [富人的孩子确实更容易高配得感](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%BA%E7%9A%84%E5%AD%A9%E5%AD%90%E7%A1%AE%E5%AE%9E%E6%9B%B4%E5%AE%B9%E6%98%93%E9%AB%98%E9%85%8D%E5%BE%97%E6%84%9F%23) `348.7K 🔥` `-40%`
1. [日本通过修正案拒绝女性天皇](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%80%9A%E8%BF%87%E4%BF%AE%E6%AD%A3%E6%A1%88%E6%8B%92%E7%BB%9D%E5%A5%B3%E6%80%A7%E5%A4%A9%E7%9A%87%23) `335.3K 🔥` `-47%`
1. [白鹿海边度假 (White Deer Beach Vacation)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B5%B7%E8%BE%B9%E5%BA%A6%E5%81%87%23) `330.0K 🔥` `-49%`
1. [龚俊刘宇宁这段被网友审判了](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%99%E6%AE%B5%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%AE%A1%E5%88%A4%E4%BA%86%23) `315.3K 🔥` `-50%`
1. [丁禹兮的伴手礼](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9A%84%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `299.0K 🔥` `-32%`
1. [小酒窝获中韩国际声乐比赛一等奖 (Xiaodimple won the first prize in the China-Korea International Vocal Competition)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%8E%B7%E4%B8%AD%E9%9F%A9%E5%9B%BD%E9%99%85%E5%A3%B0%E4%B9%90%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `283.6K 🔥` `-40%`
1. [印度总理呼吁民众自觉讲卫生 (Indian Prime Minister calls on people to consciously practice hygiene)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%80%BB%E7%90%86%E5%91%BC%E5%90%81%E6%B0%91%E4%BC%97%E8%87%AA%E8%A7%89%E8%AE%B2%E5%8D%AB%E7%94%9F%23) `282.2K 🔥` `-21%`
1. [重庆山体崩塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%23) `280.9K 🔥` `-57%`
1. [张凌赫王楚然以往角色来包场了 (Previous roles of Zhang Linghe and Wang Churan are here to book the show)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%BB%A5%E5%BE%80%E8%A7%92%E8%89%B2%E6%9D%A5%E5%8C%85%E5%9C%BA%E4%BA%86%23) `211.6K 🔥` `-26%`
1. [小鹿老公辟谣不孕](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%80%81%E5%85%AC%E8%BE%9F%E8%B0%A3%E4%B8%8D%E5%AD%95%23) `207.3K 🔥` `-24%`
1. [原来慕强是基因问题](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%85%95%E5%BC%BA%E6%98%AF%E5%9F%BA%E5%9B%A0%E9%97%AE%E9%A2%98%23) `177.1K 🔥` `-22%`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `172.2K 🔥` `-46%`
1. [县长硬刚首富背后是权力傲慢 (Behind the county magistrate’s tough attack on the richest man is the arrogance of power)](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E9%95%BF%E7%A1%AC%E5%88%9A%E9%A6%96%E5%AF%8C%E8%83%8C%E5%90%8E%E6%98%AF%E6%9D%83%E5%8A%9B%E5%82%B2%E6%85%A2%23) `167.3K 🔥` `-62%`
1. [26岁女子双子宫双阴道备孕3年失败 (A 26-year-old woman's pregnancy attempts failed after 3 years with double uterus and double vagina.)](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8F%8C%E5%AD%90%E5%AE%AB%E5%8F%8C%E9%98%B4%E9%81%93%E5%A4%87%E5%AD%953%E5%B9%B4%E5%A4%B1%E8%B4%A5%23) `161.0K 🔥` `-52%`
1. [突然意识到开车上班花销很大](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E5%BC%80%E8%BD%A6%E4%B8%8A%E7%8F%AD%E8%8A%B1%E9%94%80%E5%BE%88%E5%A4%A7%23) `154.7K 🔥` `-80%`
1. [童锦程承认抛妻弃子 (Tong Jincheng admitted to abandoning his wife and son)](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E9%94%A6%E7%A8%8B%E6%89%BF%E8%AE%A4%E6%8A%9B%E5%A6%BB%E5%BC%83%E5%AD%90%23) `151.8K 🔥` `-46%`
1. [乒协试行为会员提供购票观赛服务](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%8D%8F%E8%AF%95%E8%A1%8C%E4%B8%BA%E4%BC%9A%E5%91%98%E6%8F%90%E4%BE%9B%E8%B4%AD%E7%A5%A8%E8%A7%82%E8%B5%9B%E6%9C%8D%E5%8A%A1%23) `125.5K 🔥` `-84%`
1. [机器人手机从概念到现实意味着什么](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%8B%E6%9C%BA%E4%BB%8E%E6%A6%82%E5%BF%B5%E5%88%B0%E7%8E%B0%E5%AE%9E%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `125.3K 🔥` `-38%`
1. [KimiK3](https://s.weibo.com/weibo?q=%23KimiK3%23) `125.1K 🔥` `-80%`

Updated at 2026-07-18 20:39:22

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
