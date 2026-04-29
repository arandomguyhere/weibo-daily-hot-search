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

1. [赵心童vs墨菲 (Zhao Xintong vs Murphy)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5vs%E5%A2%A8%E8%8F%B2%23) `1.0M 🔥` `NEW`
1. [五一假期铁路运输启动](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E9%93%81%E8%B7%AF%E8%BF%90%E8%BE%93%E5%90%AF%E5%8A%A8%23) `984.1K 🔥` `NEW`
1. [宇宙或仅剩约333亿年的寿命](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E6%88%96%E4%BB%85%E5%89%A9%E7%BA%A6333%E4%BA%BF%E5%B9%B4%E7%9A%84%E5%AF%BF%E5%91%BD%23) `979.8K 🔥` `NEW`
1. [孙杨向张豆豆挥拳的表情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%90%91%E5%BC%A0%E8%B1%86%E8%B1%86%E6%8C%A5%E6%8B%B3%E7%9A%84%E8%A1%A8%E6%83%85%23) `894.9K 🔥` `NEW`
1. [霍尔木兹海峡上演奇葩大戏](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E4%B8%8A%E6%BC%94%E5%A5%87%E8%91%A9%E5%A4%A7%E6%88%8F%23) `435.3K 🔥` `NEW`
1. [谭松韵任嘉伦 二搭](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%BB%BB%E5%98%89%E4%BC%A6%20%E4%BA%8C%E6%90%AD%23) `337.8K 🔥` `NEW`
1. [张军系首个涉严重违纪违法奥运冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%86%9B%E7%B3%BB%E9%A6%96%E4%B8%AA%E6%B6%89%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%23) `334.3K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `331.1K 🔥` `NEW`
1. [山西一高校宿舍洗澡10分钟收费5元](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%80%E9%AB%98%E6%A0%A1%E5%AE%BF%E8%88%8D%E6%B4%97%E6%BE%A110%E5%88%86%E9%92%9F%E6%94%B6%E8%B4%B95%E5%85%83%23) `300.6K 🔥` `NEW`
1. [易烊千玺九号发布会](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B9%9D%E5%8F%B7%E5%8F%91%E5%B8%83%E4%BC%9A%23) `288.9K 🔥` `NEW`
1. [老式水果为何消失了 (Why Old-Fashioned Fruit Is Disappearing)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E6%B0%B4%E6%9E%9C%E4%B8%BA%E4%BD%95%E6%B6%88%E5%A4%B1%E4%BA%86%23) `285.2K 🔥` `NEW`
1. [斯诺克](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%23) `236.7K 🔥` `NEW`
1. [阿姨菜场豪横买肉取消支付70多万](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E8%8F%9C%E5%9C%BA%E8%B1%AA%E6%A8%AA%E4%B9%B0%E8%82%89%E5%8F%96%E6%B6%88%E6%94%AF%E4%BB%9870%E5%A4%9A%E4%B8%87%23) `231.2K 🔥` `NEW`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `230.1K 🔥` `NEW`
1. [1岁宝宝走路险摔倒瞬间伸出一排手](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%B5%B0%E8%B7%AF%E9%99%A9%E6%91%94%E5%80%92%E7%9E%AC%E9%97%B4%E4%BC%B8%E5%87%BA%E4%B8%80%E6%8E%92%E6%89%8B%23) `226.5K 🔥` `NEW`
1. [历届北京大学生电影节影帝影后](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%B1%8A%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B5%E5%BD%B1%E8%8A%82%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%23) `222.8K 🔥` `NEW`
1. [特朗普再次无视英王室规矩拍国王肩膀](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%8D%E6%AC%A1%E6%97%A0%E8%A7%86%E8%8B%B1%E7%8E%8B%E5%AE%A4%E8%A7%84%E7%9F%A9%E6%8B%8D%E5%9B%BD%E7%8E%8B%E8%82%A9%E8%86%80%23) `219.9K 🔥` `NEW`
1. [曾沛慈合照含灿量好高](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%90%88%E7%85%A7%E5%90%AB%E7%81%BF%E9%87%8F%E5%A5%BD%E9%AB%98%23) `205.3K 🔥` `NEW`
1. [被银行员工转走1000万当事人发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E8%BD%AC%E8%B5%B01000%E4%B8%87%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `191.6K 🔥` `NEW`
1. [王俊凯说不是最好就是不行](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%AF%B4%E4%B8%8D%E6%98%AF%E6%9C%80%E5%A5%BD%E5%B0%B1%E6%98%AF%E4%B8%8D%E8%A1%8C%23) `188.4K 🔥` `NEW`
1. [找骗子退钱撬开保险箱全是练功券 (Ask the scammer to refund the money and pry open the safe, it's all practice coupons)](https://s.weibo.com/weibo?q=%23%E6%89%BE%E9%AA%97%E5%AD%90%E9%80%80%E9%92%B1%E6%92%AC%E5%BC%80%E4%BF%9D%E9%99%A9%E7%AE%B1%E5%85%A8%E6%98%AF%E7%BB%83%E5%8A%9F%E5%88%B8%23) `179.1K 🔥` `NEW`
1. [女子身份证不离身1000万存款被转走](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E7%A6%BB%E8%BA%AB1000%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E8%BD%AC%E8%B5%B0%23) `178.9K 🔥` `NEW`
1. [胖东来回应249元奢侈品毛巾](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94249%E5%85%83%E5%A5%A2%E4%BE%88%E5%93%81%E6%AF%9B%E5%B7%BE%23) `173.5K 🔥` `NEW`
1. [23岁中国女孩在澳被两女子打成重伤](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A9%E5%9C%A8%E6%BE%B3%E8%A2%AB%E4%B8%A4%E5%A5%B3%E5%AD%90%E6%89%93%E6%88%90%E9%87%8D%E4%BC%A4%23) `172.9K 🔥` `NEW`
1. [李惠利度假时被海流带离自救脱险](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%A0%E5%88%A9%E5%BA%A6%E5%81%87%E6%97%B6%E8%A2%AB%E6%B5%B7%E6%B5%81%E5%B8%A6%E7%A6%BB%E8%87%AA%E6%95%91%E8%84%B1%E9%99%A9%23) `160.9K 🔥` `NEW`
1. [保姆将幼童关狗笼自己只顾玩手机](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E5%B0%86%E5%B9%BC%E7%AB%A5%E5%85%B3%E7%8B%97%E7%AC%BC%E8%87%AA%E5%B7%B1%E5%8F%AA%E9%A1%BE%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `156.6K 🔥` `NEW`
1. [易烊千玺梨涡笑](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%A2%A8%E6%B6%A1%E7%AC%91%23) `141.0K 🔥` `NEW`
1. [孙怡什么时候才能原谅现偶](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%89%8D%E8%83%BD%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%23) `137.3K 🔥` `NEW`
1. [婆婆一次性给足三年20万保姆费](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E4%B8%80%E6%AC%A1%E6%80%A7%E7%BB%99%E8%B6%B3%E4%B8%89%E5%B9%B420%E4%B8%87%E4%BF%9D%E5%A7%86%E8%B4%B9%23) `1.1M 🔥` `+256%`
1. [多读书真的会影响你的三观 (Reading more will really affect your outlook on life)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%AF%BB%E4%B9%A6%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E4%BD%A0%E7%9A%84%E4%B8%89%E8%A7%82%23) `631.6K 🔥` `+252%`
1. [唐嫣新剧 假发](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%96%B0%E5%89%A7%20%E5%81%87%E5%8F%91%23) `332.8K 🔥` `+49%`
1. [林子烨 下巴后缩 (Lin Ziye’s chin recedes)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%20%E4%B8%8B%E5%B7%B4%E5%90%8E%E7%BC%A9%23) `339.4K 🔥`
1. [终于知道林志玲为什么能红这么久](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E6%9E%97%E5%BF%97%E7%8E%B2%E4%B8%BA%E4%BB%80%E4%B9%88%E8%83%BD%E7%BA%A2%E8%BF%99%E4%B9%88%E4%B9%85%23) `327.7K 🔥`
1. [转走储户1800万银行员工喝药轻生](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E8%B5%B0%E5%82%A8%E6%88%B71800%E4%B8%87%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E5%96%9D%E8%8D%AF%E8%BD%BB%E7%94%9F%23) `305.3K 🔥`
1. [曝iPhoneFold定价14999元](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneFold%E5%AE%9A%E4%BB%B714999%E5%85%83%23) `305.2K 🔥`
1. [汤唯确认怀二胎](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E7%A1%AE%E8%AE%A4%E6%80%80%E4%BA%8C%E8%83%8E%23) `297.6K 🔥`
1. [女子洁癖严重结婚19年无法同房](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B4%81%E7%99%96%E4%B8%A5%E9%87%8D%E7%BB%93%E5%A9%9A19%E5%B9%B4%E6%97%A0%E6%B3%95%E5%90%8C%E6%88%BF%23) `294.0K 🔥`
1. [陈律求痞幼复合](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%8B%E6%B1%82%E7%97%9E%E5%B9%BC%E5%A4%8D%E5%90%88%23) `290.3K 🔥`
1. [瑶一瑶被要求配合拍摄回怼妈妈](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%A2%AB%E8%A6%81%E6%B1%82%E9%85%8D%E5%90%88%E6%8B%8D%E6%91%84%E5%9B%9E%E6%80%BC%E5%A6%88%E5%A6%88%23) `273.8K 🔥`
1. [白鹿举着滚动字幕说明私人行程](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%BE%E7%9D%80%E6%BB%9A%E5%8A%A8%E5%AD%97%E5%B9%95%E8%AF%B4%E6%98%8E%E7%A7%81%E4%BA%BA%E8%A1%8C%E7%A8%8B%23) `212.8K 🔥`
1. [美团闪购Pura开售 (Meituan flash sale Pura goes on sale)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%ADPura%E5%BC%80%E5%94%AE%23) `984.0K 🔥` `-28%`
1. [拍照显瘦20斤姿势 (Photo pose to lose 20 pounds)](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E7%85%A7%E6%98%BE%E7%98%A620%E6%96%A4%E5%A7%BF%E5%8A%BF%23) `380.1K 🔥` `-32%`
1. [霸王茶姬异物系购买人投放 (Buyer of Overlord Tea Princess Foreign Object Department puts it)](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%BC%82%E7%89%A9%E7%B3%BB%E8%B4%AD%E4%B9%B0%E4%BA%BA%E6%8A%95%E6%94%BE%23) `340.4K 🔥` `-60%`
1. [刘耀文宋亚轩 小宇](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%B0%8F%E5%AE%87%23) `282.8K 🔥` `-47%`
1. [孙杨夫妇录妻旅原因曝光 (Reasons why Sun Yang and his wife recorded traveling abroad were exposed)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A4%AB%E5%A6%87%E5%BD%95%E5%A6%BB%E6%97%85%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `184.3K 🔥` `-41%`
1. [金钟大的女儿都这么大了 (Jin Zhongda’s daughter is already this old)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E5%A4%A7%E7%9A%84%E5%A5%B3%E5%84%BF%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `179.5K 🔥` `-24%`
1. [杜华给金子涵所属女团开会发言](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E7%BB%99%E9%87%91%E5%AD%90%E6%B6%B5%E6%89%80%E5%B1%9E%E5%A5%B3%E5%9B%A2%E5%BC%80%E4%BC%9A%E5%8F%91%E8%A8%80%23) `177.2K 🔥` `-45%`
1. [谢娜称演唱会票价覆盖不了成本 (Xie Na said the concert ticket price could not cover the cost)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%A7%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E8%A6%86%E7%9B%96%E4%B8%8D%E4%BA%86%E6%88%90%E6%9C%AC%23) `161.8K 🔥` `-60%`
1. [孙杨妈妈早期言论](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A6%88%E5%A6%88%E6%97%A9%E6%9C%9F%E8%A8%80%E8%AE%BA%23) `132.5K 🔥` `-43%`

Updated at 2026-04-29 23:20:36

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
