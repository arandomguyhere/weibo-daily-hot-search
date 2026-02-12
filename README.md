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

1. [过年的仪式感从赶大集开始 (The ritual of the New Year begins with catching up with the market)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E7%9A%84%E4%BB%AA%E5%BC%8F%E6%84%9F%E4%BB%8E%E8%B5%B6%E5%A4%A7%E9%9B%86%E5%BC%80%E5%A7%8B%23) `645.2K 🔥` `NEW`
1. [王者荣耀马年全明星表演赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E9%A9%AC%E5%B9%B4%E5%85%A8%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `502.0K 🔥` `NEW`
1. [严厉打击无AI标识虚假不实信息](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%8E%89%E6%89%93%E5%87%BB%E6%97%A0AI%E6%A0%87%E8%AF%86%E8%99%9A%E5%81%87%E4%B8%8D%E5%AE%9E%E4%BF%A1%E6%81%AF%23) `202.0K 🔥` `NEW`
1. [无畏支持蔡徐坤新歌](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E6%94%AF%E6%8C%81%E8%94%A1%E5%BE%90%E5%9D%A4%E6%96%B0%E6%AD%8C%23) `197.6K 🔥` `NEW`
1. [年少有为](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%23) `191.0K 🔥` `NEW`
1. [马年本命年攻略](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%9C%AC%E5%91%BD%E5%B9%B4%E6%94%BB%E7%95%A5%23) `164.9K 🔥` `NEW`
1. [飘钱气球解开瞬间带着1000元飞走](https://s.weibo.com/weibo?q=%23%E9%A3%98%E9%92%B1%E6%B0%94%E7%90%83%E8%A7%A3%E5%BC%80%E7%9E%AC%E9%97%B4%E5%B8%A6%E7%9D%801000%E5%85%83%E9%A3%9E%E8%B5%B0%23) `161.7K 🔥` `NEW`
1. [45亿红包背后的巨头AI卡位战](https://s.weibo.com/weibo?q=%2345%E4%BA%BF%E7%BA%A2%E5%8C%85%E8%83%8C%E5%90%8E%E7%9A%84%E5%B7%A8%E5%A4%B4AI%E5%8D%A1%E4%BD%8D%E6%88%98%23) `160.3K 🔥` `NEW`
1. [男子称外籍妻子失联后转走全部家当](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E5%A4%96%E7%B1%8D%E5%A6%BB%E5%AD%90%E5%A4%B1%E8%81%94%E5%90%8E%E8%BD%AC%E8%B5%B0%E5%85%A8%E9%83%A8%E5%AE%B6%E5%BD%93%23) `155.4K 🔥` `NEW`
1. [钢架雪车](https://s.weibo.com/weibo?q=%23%E9%92%A2%E6%9E%B6%E9%9B%AA%E8%BD%A6%23) `136.2K 🔥` `NEW`
1. [张凌赫粉丝爬半天山拍了三遍林允 (Fans of Zhang Linghe climbed Half-Tian Mountain to take photos of Lin Yun three times)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B2%89%E4%B8%9D%E7%88%AC%E5%8D%8A%E5%A4%A9%E5%B1%B1%E6%8B%8D%E4%BA%86%E4%B8%89%E9%81%8D%E6%9E%97%E5%85%81%23) `132.9K 🔥` `NEW`
1. [高市早苗或将释放三大恶魔](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%88%96%E5%B0%86%E9%87%8A%E6%94%BE%E4%B8%89%E5%A4%A7%E6%81%B6%E9%AD%94%23) `125.5K 🔥` `NEW`
1. [程潇 我只眼神给出去](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%20%E6%88%91%E5%8F%AA%E7%9C%BC%E7%A5%9E%E7%BB%99%E5%87%BA%E5%8E%BB%23) `105.9K 🔥` `NEW`
1. [舌头翘一翘身体好坏都知道](https://s.weibo.com/weibo?q=%23%E8%88%8C%E5%A4%B4%E7%BF%98%E4%B8%80%E7%BF%98%E8%BA%AB%E4%BD%93%E5%A5%BD%E5%9D%8F%E9%83%BD%E7%9F%A5%E9%81%93%23) `97.8K 🔥` `NEW`
1. [爸爸春节前急着帮女儿相亲被骗17万](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E6%98%A5%E8%8A%82%E5%89%8D%E6%80%A5%E7%9D%80%E5%B8%AE%E5%A5%B3%E5%84%BF%E7%9B%B8%E4%BA%B2%E8%A2%AB%E9%AA%9717%E4%B8%87%23) `91.0K 🔥` `NEW`
1. [30岁男子没买车父母不愿出门拜年](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E7%94%B7%E5%AD%90%E6%B2%A1%E4%B9%B0%E8%BD%A6%E7%88%B6%E6%AF%8D%E4%B8%8D%E6%84%BF%E5%87%BA%E9%97%A8%E6%8B%9C%E5%B9%B4%23) `89.5K 🔥` `NEW`
1. [LOL登顶网吧游戏热力榜](https://s.weibo.com/weibo?q=%23LOL%E7%99%BB%E9%A1%B6%E7%BD%91%E5%90%A7%E6%B8%B8%E6%88%8F%E7%83%AD%E5%8A%9B%E6%A6%9C%23) `86.2K 🔥` `NEW`
1. [立威廉 短剧应该只能用手机看吧](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%20%E7%9F%AD%E5%89%A7%E5%BA%94%E8%AF%A5%E5%8F%AA%E8%83%BD%E7%94%A8%E6%89%8B%E6%9C%BA%E7%9C%8B%E5%90%A7%23) `78.3K 🔥` `NEW`
1. [微博之夜 绝美打光](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E7%BB%9D%E7%BE%8E%E6%89%93%E5%85%89%23) `78.2K 🔥` `NEW`
1. [这不是陪床这是解药](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8D%E6%98%AF%E9%99%AA%E5%BA%8A%E8%BF%99%E6%98%AF%E8%A7%A3%E8%8D%AF%23) `75.4K 🔥` `NEW`
1. [王一博搞笑很多年了 (Wang Yibo has been funny for many years)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%90%9E%E7%AC%91%E5%BE%88%E5%A4%9A%E5%B9%B4%E4%BA%86%23) `74.3K 🔥` `NEW`
1. [曝陈哲远每年让员工带薪出国旅游](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%88%E5%93%B2%E8%BF%9C%E6%AF%8F%E5%B9%B4%E8%AE%A9%E5%91%98%E5%B7%A5%E5%B8%A6%E8%96%AA%E5%87%BA%E5%9B%BD%E6%97%85%E6%B8%B8%23) `70.4K 🔥` `NEW`
1. [成龙把掉地上的口香糖捡起来吃了](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E6%8A%8A%E6%8E%89%E5%9C%B0%E4%B8%8A%E7%9A%84%E5%8F%A3%E9%A6%99%E7%B3%96%E6%8D%A1%E8%B5%B7%E6%9D%A5%E5%90%83%E4%BA%86%23) `70.0K 🔥` `NEW`
1. [车厘子卖家赌涨价压货](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E5%8D%96%E5%AE%B6%E8%B5%8C%E6%B6%A8%E4%BB%B7%E5%8E%8B%E8%B4%A7%23) `1.1M 🔥` `+968%`
1. [团购12箱车厘子收到陈年僵尸果 (Group purchase of 12 boxes of cherries and received aged zombie fruit)](https://s.weibo.com/weibo?q=%23%E5%9B%A2%E8%B4%AD12%E7%AE%B1%E8%BD%A6%E5%8E%98%E5%AD%90%E6%94%B6%E5%88%B0%E9%99%88%E5%B9%B4%E5%83%B5%E5%B0%B8%E6%9E%9C%23) `214.7K 🔥` `+110%`
1. [上淘宝春节不打烊年货小时达 (Go to Taobao and don’t close during the Spring Festival. New Year’s goods are available within hours.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%98%A5%E8%8A%82%E4%B8%8D%E6%89%93%E7%83%8A%E5%B9%B4%E8%B4%A7%E5%B0%8F%E6%97%B6%E8%BE%BE%23) `615.1K 🔥`
1. [ILLIT NewJeans](https://s.weibo.com/weibo?q=%23ILLIT%20NewJeans%23) `152.9K 🔥`
1. [宋雨琦 出去就要大大方方的](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E5%87%BA%E5%8E%BB%E5%B0%B1%E8%A6%81%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E7%9A%84%23) `98.0K 🔥`
1. [李一桐发了49999的红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8F%91%E4%BA%8649999%E7%9A%84%E7%BA%A2%E5%8C%85%23) `86.3K 🔥`
1. [太好了是烂梗我们没救了](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%A5%BD%E4%BA%86%E6%98%AF%E7%83%82%E6%A2%97%E6%88%91%E4%BB%AC%E6%B2%A1%E6%95%91%E4%BA%86%23) `79.6K 🔥`
1. [谷爱凌不是输给第一名的第二名](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%8D%E6%98%AF%E8%BE%93%E7%BB%99%E7%AC%AC%E4%B8%80%E5%90%8D%E7%9A%84%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `776.6K 🔥` `-26%`
1. [第一次看到一箱草莓毫无食欲](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E4%B8%80%E7%AE%B1%E8%8D%89%E8%8E%93%E6%AF%AB%E6%97%A0%E9%A3%9F%E6%AC%B2%23) `211.3K 🔥` `-64%`
1. [20岁邓恩熙演30岁蒋龙的妈 (20-year-old Deng Enxi plays 30-year-old Jiang Long’s mother)](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E9%82%93%E6%81%A9%E7%86%99%E6%BC%9430%E5%B2%81%E8%92%8B%E9%BE%99%E7%9A%84%E5%A6%88%23) `205.8K 🔥` `-65%`
1. [第一批回村的人已经出片了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9B%9E%E6%9D%91%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%87%BA%E7%89%87%E4%BA%86%23) `186.0K 🔥` `-66%`
1. [沈阳暴风雨温泉洗浴](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%A3%8E%E9%9B%A8%E6%B8%A9%E6%B3%89%E6%B4%97%E6%B5%B4%23) `184.0K 🔥` `-61%`
1. [孙颖莎头像挂件换成了皇冠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%B4%E5%83%8F%E6%8C%82%E4%BB%B6%E6%8D%A2%E6%88%90%E4%BA%86%E7%9A%87%E5%86%A0%23) `179.8K 🔥` `-64%`
1. [中戏表演系原主任陈刚主动投案 (Chen Gang, former director of the Chinese Opera Performance Department, voluntarily surrendered)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E8%A1%A8%E6%BC%94%E7%B3%BB%E5%8E%9F%E4%B8%BB%E4%BB%BB%E9%99%88%E5%88%9A%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `169.3K 🔥` `-78%`
1. [上海地铁嘉闵线发生局部渗漏](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%98%89%E9%97%B5%E7%BA%BF%E5%8F%91%E7%94%9F%E5%B1%80%E9%83%A8%E6%B8%97%E6%BC%8F%23) `163.2K 🔥` `-72%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `162.7K 🔥` `-71%`
1. [马龙和妻子回家过年](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%92%8C%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `162.3K 🔥` `-69%`
1. [张馨予 你很有钱是吗 (Zhang Xinyu, are you very rich?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%20%E4%BD%A0%E5%BE%88%E6%9C%89%E9%92%B1%E6%98%AF%E5%90%97%23) `159.5K 🔥` `-64%`
1. [男子性侵前妻闺蜜被判10年8个月](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%89%8D%E5%A6%BB%E9%97%BA%E8%9C%9C%E8%A2%AB%E5%88%A410%E5%B9%B48%E4%B8%AA%E6%9C%88%23) `158.6K 🔥` `-64%`
1. [孙颖莎ELLE 6个封面](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%206%E4%B8%AA%E5%B0%81%E9%9D%A2%23) `157.9K 🔥` `-70%`
1. [蒋欣 当年真的错怪你了 (Jiang Xin, I really blamed you wrongly back then)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `156.8K 🔥` `-60%`
1. [杨幂校花学姐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%A0%A1%E8%8A%B1%E5%AD%A6%E5%A7%90%23) `156.4K 🔥` `-25%`
1. [姐姐被藏尸位置就在弟弟店铺正上方 (The location where my sister’s body was buried is right above my brother’s shop.)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `154.5K 🔥` `-51%`
1. [时代少年团你们吵到陈都灵了 (Times Youth League, you have made a noise with Chen Duling)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BD%A0%E4%BB%AC%E5%90%B5%E5%88%B0%E9%99%88%E9%83%BD%E7%81%B5%E4%BA%86%23) `153.1K 🔥` `-31%`
1. [时代峰峻春联贴反了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%98%A5%E8%81%94%E8%B4%B4%E5%8F%8D%E4%BA%86%23) `125.4K 🔥` `-38%`
1. [孙颖莎ELLE (Sun Yingsha ELLE)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%23) `107.2K 🔥` `-78%`
1. [TFBOYS 你永远比别人多两个观众](https://s.weibo.com/weibo?q=%23TFBOYS%20%E4%BD%A0%E6%B0%B8%E8%BF%9C%E6%AF%94%E5%88%AB%E4%BA%BA%E5%A4%9A%E4%B8%A4%E4%B8%AA%E8%A7%82%E4%BC%97%23) `97.7K 🔥` `-40%`
1. [唐宫姚安娜身份果然不简单](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A7%9A%E5%AE%89%E5%A8%9C%E8%BA%AB%E4%BB%BD%E6%9E%9C%E7%84%B6%E4%B8%8D%E7%AE%80%E5%8D%95%23) `89.4K 🔥` `-83%`

Updated at 2026-02-12 19:13:11

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
