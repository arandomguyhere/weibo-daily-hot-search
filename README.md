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

1. [小区电梯失控从31楼下坠到负2楼 (The elevator in the community lost control and fell from the 31st floor to the negative 2nd floor.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E7%94%B5%E6%A2%AF%E5%A4%B1%E6%8E%A7%E4%BB%8E31%E6%A5%BC%E4%B8%8B%E5%9D%A0%E5%88%B0%E8%B4%9F2%E6%A5%BC%23) `1.7M 🔥` `NEW`
1. [莫氏鸡煲首轮遭淘汰](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E9%A6%96%E8%BD%AE%E9%81%AD%E6%B7%98%E6%B1%B0%23) `918.7K 🔥` `NEW`
1. [制胜预告片震撼首发](https://s.weibo.com/weibo?q=%23%E5%88%B6%E8%83%9C%E9%A2%84%E5%91%8A%E7%89%87%E9%9C%87%E6%92%BC%E9%A6%96%E5%8F%91%23) `814.6K 🔥` `NEW`
1. [千万不要把手机交给商家写好评](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E6%89%8B%E6%9C%BA%E4%BA%A4%E7%BB%99%E5%95%86%E5%AE%B6%E5%86%99%E5%A5%BD%E8%AF%84%23) `813.0K 🔥` `NEW`
1. [张泽禹道歉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E9%81%93%E6%AD%89%23) `788.5K 🔥` `NEW`
1. [赵昭仪演戏一直这样吗](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E6%BC%94%E6%88%8F%E4%B8%80%E7%9B%B4%E8%BF%99%E6%A0%B7%E5%90%97%23) `713.7K 🔥` `NEW`
1. [MG07预售价12.59万起](https://s.weibo.com/weibo?q=%23MG07%E9%A2%84%E5%94%AE%E4%BB%B712.59%E4%B8%87%E8%B5%B7%23) `648.4K 🔥` `NEW`
1. [女子隐私照未打码被医美发朋友圈](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9A%90%E7%A7%81%E7%85%A7%E6%9C%AA%E6%89%93%E7%A0%81%E8%A2%AB%E5%8C%BB%E7%BE%8E%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `462.4K 🔥` `NEW`
1. [高个子最为薄弱的地方](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AA%E5%AD%90%E6%9C%80%E4%B8%BA%E8%96%84%E5%BC%B1%E7%9A%84%E5%9C%B0%E6%96%B9%23) `354.9K 🔥` `NEW`
1. [BLG战胜LGD](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CLGD%23) `344.7K 🔥` `NEW`
1. [雷军感谢各地文旅支持 (Lei Jun thanks cultural tourism from all over the world for their support)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%84%9F%E8%B0%A2%E5%90%84%E5%9C%B0%E6%96%87%E6%97%85%E6%94%AF%E6%8C%81%23) `342.8K 🔥` `NEW`
1. [修杰楷开庭认罪请求缓刑](https://s.weibo.com/weibo?q=%23%E4%BF%AE%E6%9D%B0%E6%A5%B7%E5%BC%80%E5%BA%AD%E8%AE%A4%E7%BD%AA%E8%AF%B7%E6%B1%82%E7%BC%93%E5%88%91%23) `342.4K 🔥` `NEW`
1. [开车是最容易进入心流状态的活动](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E6%98%AF%E6%9C%80%E5%AE%B9%E6%98%93%E8%BF%9B%E5%85%A5%E5%BF%83%E6%B5%81%E7%8A%B6%E6%80%81%E7%9A%84%E6%B4%BB%E5%8A%A8%23) `341.3K 🔥` `NEW`
1. [石头 姨现在对你的感情有点复杂](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%A4%B4%20%E5%A7%A8%E7%8E%B0%E5%9C%A8%E5%AF%B9%E4%BD%A0%E7%9A%84%E6%84%9F%E6%83%85%E6%9C%89%E7%82%B9%E5%A4%8D%E6%9D%82%23) `332.6K 🔥` `NEW`
1. [郑钦文排名跌至123位](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%8E%92%E5%90%8D%E8%B7%8C%E8%87%B3123%E4%BD%8D%23) `309.7K 🔥` `NEW`
1. [李佳薇方要求周锐公开道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%96%87%E6%96%B9%E8%A6%81%E6%B1%82%E5%91%A8%E9%94%90%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `291.3K 🔥` `NEW`
1. [曾舜晞带着周翊然去给赵丽颖敬酒](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%B8%A6%E7%9D%80%E5%91%A8%E7%BF%8A%E7%84%B6%E5%8E%BB%E7%BB%99%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%95%AC%E9%85%92%23) `275.8K 🔥` `NEW`
1. [司晓迪反复碰瓷艺人收割流量该管了](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E5%8F%8D%E5%A4%8D%E7%A2%B0%E7%93%B7%E8%89%BA%E4%BA%BA%E6%94%B6%E5%89%B2%E6%B5%81%E9%87%8F%E8%AF%A5%E7%AE%A1%E4%BA%86%23) `264.9K 🔥` `NEW`
1. [特朗普在葬礼上曝光逝者手机号](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9C%A8%E8%91%AC%E7%A4%BC%E4%B8%8A%E6%9B%9D%E5%85%89%E9%80%9D%E8%80%85%E6%89%8B%E6%9C%BA%E5%8F%B7%23) `263.8K 🔥` `NEW`
1. [女孩摆拍盲道被撞细节曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%91%86%E6%8B%8D%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `261.5K 🔥` `NEW`
1. [苏新皓发言哽咽 (Su Xinhao choked up while speaking)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%8F%91%E8%A8%80%E5%93%BD%E5%92%BD%23) `256.4K 🔥` `NEW`
1. [熊本县地震已致14人死亡](https://s.weibo.com/weibo?q=%23%E7%86%8A%E6%9C%AC%E5%8E%BF%E5%9C%B0%E9%9C%87%E5%B7%B2%E8%87%B414%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `255.0K 🔥` `NEW`
1. [张婧仪宋威龙关系保底凤凰传奇](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E5%85%B3%E7%B3%BB%E4%BF%9D%E5%BA%95%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%23) `252.9K 🔥` `NEW`
1. [周佑凌因柳柳给民宿改名](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E5%9B%A0%E6%9F%B3%E6%9F%B3%E7%BB%99%E6%B0%91%E5%AE%BF%E6%94%B9%E5%90%8D%23) `249.4K 🔥` `NEW`
1. [眼镜蛇断头5分钟后把人咬成重伤](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E9%95%9C%E8%9B%87%E6%96%AD%E5%A4%B45%E5%88%86%E9%92%9F%E5%90%8E%E6%8A%8A%E4%BA%BA%E5%92%AC%E6%88%90%E9%87%8D%E4%BC%A4%23) `247.3K 🔥` `NEW`
1. [已经忘了微信是怎么取代QQ的了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%BF%98%E4%BA%86%E5%BE%AE%E4%BF%A1%E6%98%AF%E6%80%8E%E4%B9%88%E5%8F%96%E4%BB%A3QQ%E7%9A%84%E4%BA%86%23) `247.1K 🔥` `NEW`
1. [TOP直播](https://s.weibo.com/weibo?q=%23TOP%E7%9B%B4%E6%92%AD%23) `244.3K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `233.2K 🔥` `NEW`
1. [刘回直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%9E%E7%9B%B4%E6%92%AD%23) `232.9K 🔥` `NEW`
1. [保姆因不能生育拐走雇主家10月大男婴](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E5%9B%A0%E4%B8%8D%E8%83%BD%E7%94%9F%E8%82%B2%E6%8B%90%E8%B5%B0%E9%9B%87%E4%B8%BB%E5%AE%B610%E6%9C%88%E5%A4%A7%E7%94%B7%E5%A9%B4%23) `231.0K 🔥` `NEW`
1. [孔雪儿邓凯一天内二搭变三搭 (Kong Xueer and Deng Kai’s two outfits turned into three outfits in one day)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E4%B8%80%E5%A4%A9%E5%86%85%E4%BA%8C%E6%90%AD%E5%8F%98%E4%B8%89%E6%90%AD%23) `229.9K 🔥` `NEW`
1. [十日终焉杀青出现了血月](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%9D%80%E9%9D%92%E5%87%BA%E7%8E%B0%E4%BA%86%E8%A1%80%E6%9C%88%23) `228.7K 🔥` `NEW`
1. [不要再指责现在的人过度防晒了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%86%8D%E6%8C%87%E8%B4%A3%E7%8E%B0%E5%9C%A8%E7%9A%84%E4%BA%BA%E8%BF%87%E5%BA%A6%E9%98%B2%E6%99%92%E4%BA%86%23) `228.4K 🔥` `NEW`
1. [蜘蛛侠4](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A04%23) `227.4K 🔥` `NEW`
1. [网友曝胖东来直饮水成免费取水点](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E8%83%96%E4%B8%9C%E6%9D%A5%E7%9B%B4%E9%A5%AE%E6%B0%B4%E6%88%90%E5%85%8D%E8%B4%B9%E5%8F%96%E6%B0%B4%E7%82%B9%23) `225.9K 🔥` `NEW`
1. [白鹿也太偶像剧了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B9%9F%E5%A4%AA%E5%81%B6%E5%83%8F%E5%89%A7%E4%BA%86%23) `223.1K 🔥` `NEW`
1. [王橹杰杨博文cha](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%9D%A8%E5%8D%9A%E6%96%87cha%23) `222.0K 🔥` `NEW`
1. [百香果资助班级8人高考超600分](https://s.weibo.com/weibo?q=%23%E7%99%BE%E9%A6%99%E6%9E%9C%E8%B5%84%E5%8A%A9%E7%8F%AD%E7%BA%A78%E4%BA%BA%E9%AB%98%E8%80%83%E8%B6%85600%E5%88%86%23) `219.7K 🔥` `NEW`
1. [余宇涵MVP奖励](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%AE%87%E6%B6%B5MVP%E5%A5%96%E5%8A%B1%23) `218.0K 🔥` `NEW`
1. [蜘蛛侠 好看](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%20%E5%A5%BD%E7%9C%8B%23) `207.1K 🔥` `NEW`
1. [花3万8相亲对象全货不对板 (Spending 38,000 yuan on a blind date, all the goods are wrong)](https://s.weibo.com/weibo?q=%23%E8%8A%B13%E4%B8%878%E7%9B%B8%E4%BA%B2%E5%AF%B9%E8%B1%A1%E5%85%A8%E8%B4%A7%E4%B8%8D%E5%AF%B9%E6%9D%BF%23) `195.5K 🔥` `NEW`
1. [薛之谦全部专辑版权归自己](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%85%A8%E9%83%A8%E4%B8%93%E8%BE%91%E7%89%88%E6%9D%83%E5%BD%92%E8%87%AA%E5%B7%B1%23) `184.9K 🔥` `NEW`
1. [陈靖可妈妈在超话看到儿子做近视眼手术](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E5%A6%88%E5%A6%88%E5%9C%A8%E8%B6%85%E8%AF%9D%E7%9C%8B%E5%88%B0%E5%84%BF%E5%AD%90%E5%81%9A%E8%BF%91%E8%A7%86%E7%9C%BC%E6%89%8B%E6%9C%AF%23) `174.1K 🔥` `NEW`
1. [保安与业主冲突后摔下楼梯身亡](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%89%E4%B8%8E%E4%B8%9A%E4%B8%BB%E5%86%B2%E7%AA%81%E5%90%8E%E6%91%94%E4%B8%8B%E6%A5%BC%E6%A2%AF%E8%BA%AB%E4%BA%A1%23) `146.4K 🔥` `NEW`
1. [白敬亭身材](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E8%BA%AB%E6%9D%90%23) `146.1K 🔥` `NEW`
1. [央视3分钟评上汽MG新能源技术](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%863%E5%88%86%E9%92%9F%E8%AF%84%E4%B8%8A%E6%B1%BDMG%E6%96%B0%E8%83%BD%E6%BA%90%E6%8A%80%E6%9C%AF%23) `145.4K 🔥` `NEW`
1. [泸溪河桃酥牙冠当事人发声](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E6%A1%83%E9%85%A5%E7%89%99%E5%86%A0%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `144.9K 🔥` `NEW`
1. [丁俊晖vs赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96vs%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `143.7K 🔥` `NEW`
1. [周佑凌之前直播是从柳柳家回自己家播](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E4%B9%8B%E5%89%8D%E7%9B%B4%E6%92%AD%E6%98%AF%E4%BB%8E%E6%9F%B3%E6%9F%B3%E5%AE%B6%E5%9B%9E%E8%87%AA%E5%B7%B1%E5%AE%B6%E6%92%AD%23) `143.4K 🔥` `NEW`
1. [MLCC涨价30%](https://s.weibo.com/weibo?q=%23MLCC%E6%B6%A8%E4%BB%B730%25%23) `143.1K 🔥` `NEW`

Updated at 2026-07-30 00:04:55

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
