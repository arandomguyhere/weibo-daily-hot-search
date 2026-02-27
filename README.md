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

1. [逐玉定档全是柿子 (Zhuyu’s set files are all persimmons)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AE%9A%E6%A1%A3%E5%85%A8%E6%98%AF%E6%9F%BF%E5%AD%90%23) `1.1M 🔥` `NEW`
1. [何与虞书欣 二搭](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%BA%8C%E6%90%AD%23) `477.0K 🔥` `NEW`
1. [山西卫健委已严肃约谈市急救中心](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E5%8D%AB%E5%81%A5%E5%A7%94%E5%B7%B2%E4%B8%A5%E8%82%83%E7%BA%A6%E8%B0%88%E5%B8%82%E6%80%A5%E6%95%91%E4%B8%AD%E5%BF%83%23) `257.0K 🔥` `NEW`
1. [尘白禁区联动取消](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E8%81%94%E5%8A%A8%E5%8F%96%E6%B6%88%23) `198.3K 🔥` `NEW`
1. [陈飞宇半夜健身偶遇陈哲远](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%8D%8A%E5%A4%9C%E5%81%A5%E8%BA%AB%E5%81%B6%E9%81%87%E9%99%88%E5%93%B2%E8%BF%9C%23) `197.7K 🔥` `NEW`
1. [台独刘世芳亲属在大陆投资谋利](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%8B%AC%E5%88%98%E4%B8%96%E8%8A%B3%E4%BA%B2%E5%B1%9E%E5%9C%A8%E5%A4%A7%E9%99%86%E6%8A%95%E8%B5%84%E8%B0%8B%E5%88%A9%23) `194.3K 🔥` `NEW`
1. [程晓玥自曝孕晚期呼吸很困难](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%87%AA%E6%9B%9D%E5%AD%95%E6%99%9A%E6%9C%9F%E5%91%BC%E5%90%B8%E5%BE%88%E5%9B%B0%E9%9A%BE%23) `190.5K 🔥` `NEW`
1. [白宇和前女友分手原因](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E5%92%8C%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `160.4K 🔥` `NEW`
1. [可以恢复视力的微习惯](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E4%BB%A5%E6%81%A2%E5%A4%8D%E8%A7%86%E5%8A%9B%E7%9A%84%E5%BE%AE%E4%B9%A0%E6%83%AF%23) `159.0K 🔥` `NEW`
1. [李家福曾建议诞5胞胎女子减胎](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%B6%E7%A6%8F%E6%9B%BE%E5%BB%BA%E8%AE%AE%E8%AF%9E5%E8%83%9E%E8%83%8E%E5%A5%B3%E5%AD%90%E5%87%8F%E8%83%8E%23) `154.7K 🔥` `NEW`
1. [工业辣椒挂禁止食用提示牌引热议 (Industrial chili peppers are hung with warning signs prohibiting consumption, sparking heated debate)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%B8%9A%E8%BE%A3%E6%A4%92%E6%8C%82%E7%A6%81%E6%AD%A2%E9%A3%9F%E7%94%A8%E6%8F%90%E7%A4%BA%E7%89%8C%E5%BC%95%E7%83%AD%E8%AE%AE%23) `154.2K 🔥` `NEW`
1. [退彩礼父亲说若儿媳妇要彩礼照样给](https://s.weibo.com/weibo?q=%23%E9%80%80%E5%BD%A9%E7%A4%BC%E7%88%B6%E4%BA%B2%E8%AF%B4%E8%8B%A5%E5%84%BF%E5%AA%B3%E5%A6%87%E8%A6%81%E5%BD%A9%E7%A4%BC%E7%85%A7%E6%A0%B7%E7%BB%99%23) `152.0K 🔥` `NEW`
1. [FENDI法棍包续写传奇](https://s.weibo.com/weibo?q=%23FENDI%E6%B3%95%E6%A3%8D%E5%8C%85%E7%BB%AD%E5%86%99%E4%BC%A0%E5%A5%87%23) `149.5K 🔥` `NEW`
1. [赖清德罕见改口称中国大陆](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E7%BD%95%E8%A7%81%E6%94%B9%E5%8F%A3%E7%A7%B0%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%23) `148.7K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `134.7K 🔥` `NEW`
1. [亲爱的客栈开播](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%E5%BC%80%E6%92%AD%23) `125.2K 🔥` `NEW`
1. [淘宝图标 褪色](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%9B%BE%E6%A0%87%20%E8%A4%AA%E8%89%B2%23) `121.8K 🔥` `NEW`
1. [张真源哄了半天哄好了0个人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%93%84%E4%BA%86%E5%8D%8A%E5%A4%A9%E5%93%84%E5%A5%BD%E4%BA%860%E4%B8%AA%E4%BA%BA%23) `120.2K 🔥` `NEW`
1. [逐玉特别主演刘琳严屹宽](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%89%B9%E5%88%AB%E4%B8%BB%E6%BC%94%E5%88%98%E7%90%B3%E4%B8%A5%E5%B1%B9%E5%AE%BD%23) `109.5K 🔥` `NEW`
1. [全红婵回应和刘清漪跳舞](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%9B%9E%E5%BA%94%E5%92%8C%E5%88%98%E6%B8%85%E6%BC%AA%E8%B7%B3%E8%88%9E%23) `108.0K 🔥` `NEW`
1. [虞书欣父亲新增开庭公告 (Yu Shuxin’s father’s new court announcement)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E6%96%B0%E5%A2%9E%E5%BC%80%E5%BA%AD%E5%85%AC%E5%91%8A%23) `106.8K 🔥` `NEW`
1. [猫妈自留款](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A6%88%E8%87%AA%E7%95%99%E6%AC%BE%23) `105.1K 🔥` `NEW`
1. [奶奶把我的娃娃供奉在村里的庵里](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E6%8A%8A%E6%88%91%E7%9A%84%E5%A8%83%E5%A8%83%E4%BE%9B%E5%A5%89%E5%9C%A8%E6%9D%91%E9%87%8C%E7%9A%84%E5%BA%B5%E9%87%8C%23) `101.6K 🔥` `NEW`
1. [28岁小伙长期吃炸鸡抽出猪油汤血](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%B0%8F%E4%BC%99%E9%95%BF%E6%9C%9F%E5%90%83%E7%82%B8%E9%B8%A1%E6%8A%BD%E5%87%BA%E7%8C%AA%E6%B2%B9%E6%B1%A4%E8%A1%80%23) `101.5K 🔥` `NEW`
1. [张雅钦扛住了g社镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E9%92%A6%E6%89%9B%E4%BD%8F%E4%BA%86g%E7%A4%BE%E9%95%9C%E5%A4%B4%23) `95.3K 🔥` `NEW`
1. [删了吧有个读书人破防了](https://s.weibo.com/weibo?q=%23%E5%88%A0%E4%BA%86%E5%90%A7%E6%9C%89%E4%B8%AA%E8%AF%BB%E4%B9%A6%E4%BA%BA%E7%A0%B4%E9%98%B2%E4%BA%86%23) `91.6K 🔥` `NEW`
1. [美国发动网攻侵占全球虚拟资产](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E5%8A%A8%E7%BD%91%E6%94%BB%E4%BE%B5%E5%8D%A0%E5%85%A8%E7%90%83%E8%99%9A%E6%8B%9F%E8%B5%84%E4%BA%A7%23) `638.4K 🔥` `+548%`
1. [官方通报老人因无人抬担架延误离世](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%80%81%E4%BA%BA%E5%9B%A0%E6%97%A0%E4%BA%BA%E6%8A%AC%E6%8B%85%E6%9E%B6%E5%BB%B6%E8%AF%AF%E7%A6%BB%E4%B8%96%23) `360.7K 🔥` `+278%`
1. [不建议在朋友圈展示技能](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%B1%95%E7%A4%BA%E6%8A%80%E8%83%BD%23) `325.3K 🔥` `+253%`
1. [FIBA社媒称中国男篮偷走胜利 (FIBA social media said the Chinese men's basketball team stole the victory)](https://s.weibo.com/weibo?q=%23FIBA%E7%A4%BE%E5%AA%92%E7%A7%B0%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%81%B7%E8%B5%B0%E8%83%9C%E5%88%A9%23) `231.6K 🔥` `+24%`
1. [BLACKPINK 回归](https://s.weibo.com/weibo?q=%23BLACKPINK%20%E5%9B%9E%E5%BD%92%23) `196.4K 🔥` `+35%`
1. [金泰梨对杨幂比心 (Kim Tae-ri is in love with Yang Mi)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E6%A2%A8%E5%AF%B9%E6%9D%A8%E5%B9%82%E6%AF%94%E5%BF%83%23) `198.9K 🔥`
1. [将微胖还给真正胖的人](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%BE%AE%E8%83%96%E8%BF%98%E7%BB%99%E7%9C%9F%E6%AD%A3%E8%83%96%E7%9A%84%E4%BA%BA%23) `197.2K 🔥`
1. [巴基斯坦对阿富汗政府公开宣战](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%AF%B9%E9%98%BF%E5%AF%8C%E6%B1%97%E6%94%BF%E5%BA%9C%E5%85%AC%E5%BC%80%E5%AE%A3%E6%88%98%23) `160.5K 🔥`
1. [逐玉定档](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AE%9A%E6%A1%A3%23) `157.9K 🔥`
1. [最容易胖肚子的一种食物](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%AE%B9%E6%98%93%E8%83%96%E8%82%9A%E5%AD%90%E7%9A%84%E4%B8%80%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `157.5K 🔥`
1. [杨幂Prada顶级待遇](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82Prada%E9%A1%B6%E7%BA%A7%E5%BE%85%E9%81%87%23) `155.9K 🔥`
1. [疑似白宇前女友发文](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%99%BD%E5%AE%87%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%8F%91%E6%96%87%23) `154.9K 🔥`
1. [女子花8800寻猫发现没丢想退款遭拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B18800%E5%AF%BB%E7%8C%AB%E5%8F%91%E7%8E%B0%E6%B2%A1%E4%B8%A2%E6%83%B3%E9%80%80%E6%AC%BE%E9%81%AD%E6%8B%92%23) `97.8K 🔥`
1. [父亲退还18.8万彩礼新娘发声 (Bride speaks out after father returns 188,000 yuan gift)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%80%80%E8%BF%9818.8%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%96%B0%E5%A8%98%E5%8F%91%E5%A3%B0%23) `775.1K 🔥` `-33%`
1. [南京档案馆找到谷爱凌外婆户籍卡 (Grandma Gu Ailing’s household registration card found in Nanjing Archives)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E6%A1%A3%E6%A1%88%E9%A6%86%E6%89%BE%E5%88%B0%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%96%E5%A9%86%E6%88%B7%E7%B1%8D%E5%8D%A1%23) `215.0K 🔥` `-28%`
1. [怪不得高启强不让他弟碰毒](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%AB%98%E5%90%AF%E5%BC%BA%E4%B8%8D%E8%AE%A9%E4%BB%96%E5%BC%9F%E7%A2%B0%E6%AF%92%23) `199.7K 🔥` `-77%`
1. [网约车电车晕车的原因](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E7%94%B5%E8%BD%A6%E6%99%95%E8%BD%A6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `195.7K 🔥` `-39%`
1. [中国人民银行公告 (Announcement of the People's Bank of China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%93%B6%E8%A1%8C%E5%85%AC%E5%91%8A%23) `147.7K 🔥` `-57%`
1. [魅族公告](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%E5%85%AC%E5%91%8A%23) `128.4K 🔥` `-61%`
1. [庆奶吻戏男主回复又老又年轻靠滤镜](https://s.weibo.com/weibo?q=%23%E5%BA%86%E5%A5%B6%E5%90%BB%E6%88%8F%E7%94%B7%E4%B8%BB%E5%9B%9E%E5%A4%8D%E5%8F%88%E8%80%81%E5%8F%88%E5%B9%B4%E8%BD%BB%E9%9D%A0%E6%BB%A4%E9%95%9C%23) `127.1K 🔥` `-31%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `120.5K 🔥` `-61%`
1. [四六级查分 (Level 4 and Level 6 Score Check)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%23) `99.7K 🔥` `-62%`
1. [宝格丽代言人名单](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%90%8D%E5%8D%95%23) `91.0K 🔥` `-44%`

Updated at 2026-02-27 13:03:43

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
