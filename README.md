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

1. [想你了票房倒挂 (I miss you, the box office is upside down)](https://s.weibo.com/weibo?q=%23%E6%83%B3%E4%BD%A0%E4%BA%86%E7%A5%A8%E6%88%BF%E5%80%92%E6%8C%82%23) `841.1K 🔥` `NEW`
1. [本周这些数据最值得关注](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E6%9C%80%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `834.6K 🔥` `NEW`
1. [王俊凯和女舞伴跳舞这一段](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%92%8C%E5%A5%B3%E8%88%9E%E4%BC%B4%E8%B7%B3%E8%88%9E%E8%BF%99%E4%B8%80%E6%AE%B5%23) `702.6K 🔥` `NEW`
1. [Bin](https://s.weibo.com/weibo?q=%23Bin%23) `650.6K 🔥` `NEW`
1. [阿根廷主帅不满赛事方时间安排](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E4%B8%8D%E6%BB%A1%E8%B5%9B%E4%BA%8B%E6%96%B9%E6%97%B6%E9%97%B4%E5%AE%89%E6%8E%92%23) `604.2K 🔥` `NEW`
1. [KC战胜T1](https://s.weibo.com/weibo?q=%23KC%E6%88%98%E8%83%9CT1%23) `517.1K 🔥` `NEW`
1. [王俊凯演唱会退场天才](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%80%E5%9C%BA%E5%A4%A9%E6%89%8D%23) `412.7K 🔥` `NEW`
1. [上海暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `379.7K 🔥` `NEW`
1. [黄子韬演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%BC%94%E5%94%B1%E4%BC%9A%23) `366.9K 🔥` `NEW`
1. [KC对战T1](https://s.weibo.com/weibo?q=%23KC%E5%AF%B9%E6%88%98T1%23) `359.1K 🔥` `NEW`
1. [祖籍广东的泰国总理飙中文 (The Thai Prime Minister, whose ancestral home is Guangdong, speaks Chinese)](https://s.weibo.com/weibo?q=%23%E7%A5%96%E7%B1%8D%E5%B9%BF%E4%B8%9C%E7%9A%84%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E9%A3%99%E4%B8%AD%E6%96%87%23) `300.0K 🔥` `NEW`
1. [男子判赔75万后身亡受害者家属崩溃](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%88%A4%E8%B5%9475%E4%B8%87%E5%90%8E%E8%BA%AB%E4%BA%A1%E5%8F%97%E5%AE%B3%E8%80%85%E5%AE%B6%E5%B1%9E%E5%B4%A9%E6%BA%83%23) `290.8K 🔥` `NEW`
1. [警方调查女子称多次被黄总喊去包厢](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%B0%83%E6%9F%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A4%9A%E6%AC%A1%E8%A2%AB%E9%BB%84%E6%80%BB%E5%96%8A%E5%8E%BB%E5%8C%85%E5%8E%A2%23) `282.2K 🔥` `NEW`
1. [林高远袁烜松3比2温瑞博林诗栋](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%AB%98%E8%BF%9C%E8%A2%81%E7%83%9C%E6%9D%BE3%E6%AF%942%E6%B8%A9%E7%91%9E%E5%8D%9A%E6%9E%97%E8%AF%97%E6%A0%8B%23) `253.9K 🔥` `NEW`
1. [人在幸福的时候真的会少发朋友圈吗](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E5%B9%B8%E7%A6%8F%E7%9A%84%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%B0%91%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%90%97%23) `227.2K 🔥` `NEW`
1. [陈浚铭破局](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E7%A0%B4%E5%B1%80%23) `221.7K 🔥` `NEW`
1. [功夫女足一天发2次破亿海报](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%80%E5%A4%A9%E5%8F%912%E6%AC%A1%E7%A0%B4%E4%BA%BF%E6%B5%B7%E6%8A%A5%23) `207.0K 🔥` `NEW`
1. [任泽平年内VIP收入超2600万元](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%B3%BD%E5%B9%B3%E5%B9%B4%E5%86%85VIP%E6%94%B6%E5%85%A5%E8%B6%852600%E4%B8%87%E5%85%83%23) `199.0K 🔥` `NEW`
1. [郭富城60岁全开麦唱跳](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E60%E5%B2%81%E5%85%A8%E5%BC%80%E9%BA%A6%E5%94%B1%E8%B7%B3%23) `198.9K 🔥` `NEW`
1. [杨博文报三中三](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E6%8A%A5%E4%B8%89%E4%B8%AD%E4%B8%89%23) `177.4K 🔥` `NEW`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `159.9K 🔥` `NEW`
1. [印度首列国产氢动力列车发车](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%A6%96%E5%88%97%E5%9B%BD%E4%BA%A7%E6%B0%A2%E5%8A%A8%E5%8A%9B%E5%88%97%E8%BD%A6%E5%8F%91%E8%BD%A6%23) `154.6K 🔥` `NEW`
1. [八仙票房 (Eight Immortals Box Office)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E7%A5%A8%E6%88%BF%23) `1.1M 🔥` `+37%`
1. [大学生为省掉1块钱的打包费](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%BA%E7%9C%81%E6%8E%891%E5%9D%97%E9%92%B1%E7%9A%84%E6%89%93%E5%8C%85%E8%B4%B9%23) `689.9K 🔥` `+26%`
1. [已经绝交的朋友教会我的事](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E7%BB%9D%E4%BA%A4%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%95%99%E4%BC%9A%E6%88%91%E7%9A%84%E4%BA%8B%23) `280.0K 🔥` `+78%`
1. [26岁女子双子宫双阴道备孕3年失败 (A 26-year-old woman's pregnancy attempts failed after 3 years with double uterus and double vagina.)](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8F%8C%E5%AD%90%E5%AE%AB%E5%8F%8C%E9%98%B4%E9%81%93%E5%A4%87%E5%AD%953%E5%B9%B4%E5%A4%B1%E8%B4%A5%23) `253.1K 🔥` `+57%`
1. [发现很多KTV都没有MV了 (I found that many KTVs no longer have MVs)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9AKTV%E9%83%BD%E6%B2%A1%E6%9C%89MV%E4%BA%86%23) `784.5K 🔥`
1. [这个暑假别错过电影八仙](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%9A%91%E5%81%87%E5%88%AB%E9%94%99%E8%BF%87%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `672.3K 🔥`
1. [一眼看出白鹿自己化的妆](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E7%99%BD%E9%B9%BF%E8%87%AA%E5%B7%B1%E5%8C%96%E7%9A%84%E5%A6%86%23) `393.6K 🔥`
1. [富人的孩子确实更容易高配得感](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%BA%E7%9A%84%E5%AD%A9%E5%AD%90%E7%A1%AE%E5%AE%9E%E6%9B%B4%E5%AE%B9%E6%98%93%E9%AB%98%E9%85%8D%E5%BE%97%E6%84%9F%23) `392.4K 🔥`
1. [内存条悄然降价](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E6%82%84%E7%84%B6%E9%99%8D%E4%BB%B7%23) `291.5K 🔥`
1. [龚俊刘宇宁这段被网友审判了](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%99%E6%AE%B5%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%AE%A1%E5%88%A4%E4%BA%86%23) `282.2K 🔥`
1. [左奇函没入选破局 (Zuo Qihan was not selected to break the game)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E6%B2%A1%E5%85%A5%E9%80%89%E7%A0%B4%E5%B1%80%23) `281.8K 🔥`
1. [长大了才发现自己小时候真的很可怜 (When I grew up, I realized that I was really pitiful when I was a child.)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E4%BA%86%E6%89%8D%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E5%B0%8F%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E5%BE%88%E5%8F%AF%E6%80%9C%23) `260.3K 🔥`
1. [世界杯冠军预测](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E9%A2%84%E6%B5%8B%23) `255.5K 🔥`
1. [重庆山体崩塌 (Chongqing mountain collapse)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%23) `253.0K 🔥`
1. [苏州文旅看到后天塌了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E6%96%87%E6%97%85%E7%9C%8B%E5%88%B0%E5%90%8E%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `248.5K 🔥`
1. [真正让人心情变得很哇塞的方法](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E8%AE%A9%E4%BA%BA%E5%BF%83%E6%83%85%E5%8F%98%E5%BE%97%E5%BE%88%E5%93%87%E5%A1%9E%E7%9A%84%E6%96%B9%E6%B3%95%23) `192.4K 🔥`
1. [马龙许昕晋级四强 (Ma Long and Xu Xin advance to the semi-finals)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `416.3K 🔥` `-64%`
1. [为什么要给美甲师点奶茶](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%99%E7%BE%8E%E7%94%B2%E5%B8%88%E7%82%B9%E5%A5%B6%E8%8C%B6%23) `255.5K 🔥` `-53%`
1. [日本通过修正案拒绝女性天皇](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%80%9A%E8%BF%87%E4%BF%AE%E6%AD%A3%E6%A1%88%E6%8B%92%E7%BB%9D%E5%A5%B3%E6%80%A7%E5%A4%A9%E7%9A%87%23) `254.8K 🔥` `-24%`
1. [丁禹兮演唱会](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E5%94%B1%E4%BC%9A%23) `252.5K 🔥` `-28%`
1. [一念江南赵今麦路透 (One Thought of Jiangnan Zhao Jinmai Reuters)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B7%AF%E9%80%8F%23) `238.7K 🔥` `-39%`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `220.9K 🔥` `-38%`
1. [吃小龙虾尽量选蒜香的](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E5%B0%BD%E9%87%8F%E9%80%89%E8%92%9C%E9%A6%99%E7%9A%84%23) `208.3K 🔥` `-42%`
1. [白鹿海边度假 (White Deer Beach Vacation)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B5%B7%E8%BE%B9%E5%BA%A6%E5%81%87%23) `198.9K 🔥` `-40%`
1. [丁禹兮的伴手礼](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9A%84%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `191.0K 🔥` `-36%`
1. [张凌赫王楚然以往角色来包场了 (Previous roles of Zhang Linghe and Wang Churan are here to book the show)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%BB%A5%E5%BE%80%E8%A7%92%E8%89%B2%E6%9D%A5%E5%8C%85%E5%9C%BA%E4%BA%86%23) `158.7K 🔥` `-25%`
1. [林高远袁烜松晋级四强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%AB%98%E8%BF%9C%E8%A2%81%E7%83%9C%E6%9D%BE%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `156.6K 🔥` `-53%`
1. [小鹿老公辟谣不孕 (Xiaolu’s husband refutes infertility rumors)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%80%81%E5%85%AC%E8%BE%9F%E8%B0%A3%E4%B8%8D%E5%AD%95%23) `155.7K 🔥` `-25%`
1. [C919将执飞国际商业航线](https://s.weibo.com/weibo?q=%23C919%E5%B0%86%E6%89%A7%E9%A3%9E%E5%9B%BD%E9%99%85%E5%95%86%E4%B8%9A%E8%88%AA%E7%BA%BF%23) `152.2K 🔥` `-81%`

Updated at 2026-07-18 22:08:37

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
