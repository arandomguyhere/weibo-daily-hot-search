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

1. [今年我国快递业务量已超千亿件 (This year, my country’s express delivery business volume has exceeded 100 billion pieces)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%88%91%E5%9B%BD%E5%BF%AB%E9%80%92%E4%B8%9A%E5%8A%A1%E9%87%8F%E5%B7%B2%E8%B6%85%E5%8D%83%E4%BA%BF%E4%BB%B6%23) `654.5K 🔥` `NEW`
1. [王力宏摔倒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E6%91%94%E5%80%92%23) `629.9K 🔥` `NEW`
1. [问心2大结局](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E5%A4%A7%E7%BB%93%E5%B1%80%23) `421.4K 🔥` `NEW`
1. [华为发布V2版韬定律论文](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83V2%E7%89%88%E9%9F%AC%E5%AE%9A%E5%BE%8B%E8%AE%BA%E6%96%87%23) `294.3K 🔥` `NEW`
1. [王力宏脸和耳朵出血](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E8%84%B8%E5%92%8C%E8%80%B3%E6%9C%B5%E5%87%BA%E8%A1%80%23) `292.8K 🔥` `NEW`
1. [鸭血粉丝店回应遭LV起诉](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%A1%80%E7%B2%89%E4%B8%9D%E5%BA%97%E5%9B%9E%E5%BA%94%E9%81%ADLV%E8%B5%B7%E8%AF%89%23) `279.6K 🔥` `NEW`
1. [张新成演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E6%BC%94%E5%94%B1%E4%BC%9A%23) `278.6K 🔥` `NEW`
1. [车船税十五年来首次重大调整](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E8%88%B9%E7%A8%8E%E5%8D%81%E4%BA%94%E5%B9%B4%E6%9D%A5%E9%A6%96%E6%AC%A1%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `278.4K 🔥` `NEW`
1. [电工被调岗去养猪](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%B7%A5%E8%A2%AB%E8%B0%83%E5%B2%97%E5%8E%BB%E5%85%BB%E7%8C%AA%23) `275.2K 🔥` `NEW`
1. [突围](https://s.weibo.com/weibo?q=%23%E7%AA%81%E5%9B%B4%23) `274.5K 🔥` `NEW`
1. [王俊凯演唱会抵制黄牛 (Boycott scalpers at Wang Junkai's concert)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%B5%E5%88%B6%E9%BB%84%E7%89%9B%23) `274.3K 🔥` `NEW`
1. [亲生父亲跪谢女儿养父](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%94%9F%E7%88%B6%E4%BA%B2%E8%B7%AA%E8%B0%A2%E5%A5%B3%E5%84%BF%E5%85%BB%E7%88%B6%23) `229.7K 🔥` `NEW`
1. [T1回应不敌BLG](https://s.weibo.com/weibo?q=%23T1%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8CBLG%23) `209.5K 🔥` `NEW`
1. [Xun中国队长](https://s.weibo.com/weibo?q=%23Xun%E4%B8%AD%E5%9B%BD%E9%98%9F%E9%95%BF%23) `194.5K 🔥` `NEW`
1. [健康才是最好的看球搭子](https://s.weibo.com/weibo?q=%23%E5%81%A5%E5%BA%B7%E6%89%8D%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E7%9C%8B%E7%90%83%E6%90%AD%E5%AD%90%23) `192.3K 🔥` `NEW`
1. [国产奶茶被LV告赢到底冤不冤](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%A5%B6%E8%8C%B6%E8%A2%ABLV%E5%91%8A%E8%B5%A2%E5%88%B0%E5%BA%95%E5%86%A4%E4%B8%8D%E5%86%A4%23) `192.3K 🔥` `NEW`
1. [香港偶遇王安宇吃烤肉](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%81%B6%E9%81%87%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%83%E7%83%A4%E8%82%89%23) `190.8K 🔥` `NEW`
1. [吃桃子也有南北方差异](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%A1%83%E5%AD%90%E4%B9%9F%E6%9C%89%E5%8D%97%E5%8C%97%E6%96%B9%E5%B7%AE%E5%BC%82%23) `171.0K 🔥` `NEW`
1. [内娱明星眼里的王一博](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `170.9K 🔥` `NEW`
1. [宋亚轩这是咋了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%BF%99%E6%98%AF%E5%92%8B%E4%BA%86%23) `155.3K 🔥` `NEW`
1. [普京首次承认俄罗斯缺油 (Putin admits for the first time that Russia is short of oil)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E9%A6%96%E6%AC%A1%E6%89%BF%E8%AE%A4%E4%BF%84%E7%BD%97%E6%96%AF%E7%BC%BA%E6%B2%B9%23) `153.1K 🔥` `NEW`
1. [千问智能体功能10日下线](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E6%99%BA%E8%83%BD%E4%BD%93%E5%8A%9F%E8%83%BD10%E6%97%A5%E4%B8%8B%E7%BA%BF%23) `153.0K 🔥` `NEW`
1. [佛得角再次感谢中国](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%86%8D%E6%AC%A1%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `555.2K 🔥` `+61%`
1. [周也圈内口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%9C%88%E5%86%85%E5%8F%A3%E7%A2%91%23) `530.2K 🔥` `+54%`
1. [阿根廷队致敬佛得角](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E8%87%B4%E6%95%AC%E4%BD%9B%E5%BE%97%E8%A7%92%23) `287.9K 🔥` `+36%`
1. [豆包千问建议提前备份重要内容](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8D%83%E9%97%AE%E5%BB%BA%E8%AE%AE%E6%8F%90%E5%89%8D%E5%A4%87%E4%BB%BD%E9%87%8D%E8%A6%81%E5%86%85%E5%AE%B9%23) `277.4K 🔥` `+32%`
1. [到底是谁取消有线耳机的](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E5%8F%96%E6%B6%88%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%9A%84%23) `1.1M 🔥`
1. [佛得角门将 俱乐部不要他了 (Cape Verdean goalkeeper is no longer wanted by the club)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%20%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%8D%E8%A6%81%E4%BB%96%E4%BA%86%23) `803.4K 🔥`
1. [王楚钦孙颖莎获混双亚军 (Wang Chuqin and Sun Yingsha won the mixed doubles runner-up)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E8%8E%B7%E6%B7%B7%E5%8F%8C%E4%BA%9A%E5%86%9B%23) `310.3K 🔥`
1. [郭宇欣 我和周也还不一定谁蹭谁呢](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%20%E6%88%91%E5%92%8C%E5%91%A8%E4%B9%9F%E8%BF%98%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%B0%81%E8%B9%AD%E8%B0%81%E5%91%A2%23) `309.0K 🔥`
1. [杨紫都瘦成啥样了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%83%BD%E7%98%A6%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `306.8K 🔥`
1. [秦牛正威承认整容了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `302.7K 🔥`
1. [霉霉官宣完婚 (Swift officially announces marriage)](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%AE%98%E5%AE%A3%E5%AE%8C%E5%A9%9A%23) `300.1K 🔥`
1. [等Bin发微博](https://s.weibo.com/weibo?q=%23%E7%AD%89Bin%E5%8F%91%E5%BE%AE%E5%8D%9A%23) `297.7K 🔥`
1. [男子赌球输几百万被妹妹送医院治疗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B5%8C%E7%90%83%E8%BE%93%E5%87%A0%E7%99%BE%E4%B8%87%E8%A2%AB%E5%A6%B9%E5%A6%B9%E9%80%81%E5%8C%BB%E9%99%A2%E6%B2%BB%E7%96%97%23) `297.6K 🔥`
1. [秦岚嗓子恢复了 (Qin Lan's voice has recovered)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E6%81%A2%E5%A4%8D%E4%BA%86%23) `290.0K 🔥`
1. [曝霉霉婚礼上唯一允许带手机的人 (The only person allowed to bring a mobile phone to Swift's wedding)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%94%AF%E4%B8%80%E5%85%81%E8%AE%B8%E5%B8%A6%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%23) `286.5K 🔥`
1. [白鹿做的咸蛋黄虾滑饺子](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%81%9A%E7%9A%84%E5%92%B8%E8%9B%8B%E9%BB%84%E8%99%BE%E6%BB%91%E9%A5%BA%E5%AD%90%23) `283.3K 🔥`
1. [高市早苗访问印度拒喝印度水](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%AE%BF%E9%97%AE%E5%8D%B0%E5%BA%A6%E6%8B%92%E5%96%9D%E5%8D%B0%E5%BA%A6%E6%B0%B4%23) `281.0K 🔥`
1. [迪丽热巴柿子红短T](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9F%BF%E5%AD%90%E7%BA%A2%E7%9F%ADT%23) `276.4K 🔥`
1. [虞书欣粉丝云包场灿如繁星](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `168.6K 🔥`
1. [一直不理解鸡架这种食物](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%B8%8D%E7%90%86%E8%A7%A3%E9%B8%A1%E6%9E%B6%E8%BF%99%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `476.2K 🔥` `-22%`
1. [佛得角队收获1100万美元奖金](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E6%94%B6%E8%8E%B71100%E4%B8%87%E7%BE%8E%E5%85%83%E5%A5%96%E9%87%91%23) `329.6K 🔥` `-55%`
1. [BLG战胜T1](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CT1%23) `304.5K 🔥` `-66%`
1. [张晚意花少给邓为送行 (Zhang Wanyi spent less time sending Deng Wei off)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E8%8A%B1%E5%B0%91%E7%BB%99%E9%82%93%E4%B8%BA%E9%80%81%E8%A1%8C%23) `212.4K 🔥` `-38%`
1. [张雪还清近亿债务](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%BF%98%E6%B8%85%E8%BF%91%E4%BA%BF%E5%80%BA%E5%8A%A1%23) `192.4K 🔥` `-55%`
1. [刘国正妻子说孙颖莎打得肯定没毛病 (Liu Guozheng’s wife said that there must be nothing wrong with Sun Yingsha’s beating)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%AD%A3%E5%A6%BB%E5%AD%90%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E5%BE%97%E8%82%AF%E5%AE%9A%E6%B2%A1%E6%AF%9B%E7%97%85%23) `192.3K 🔥` `-44%`
1. [王俊凯原来真的有这层含义](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E8%BF%99%E5%B1%82%E5%90%AB%E4%B9%89%23) `175.3K 🔥` `-31%`
1. [BLG对战T1](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98T1%23) `157.8K 🔥` `-81%`
1. [美军臆测10月解放军收复台湾](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%87%86%E6%B5%8B10%E6%9C%88%E8%A7%A3%E6%94%BE%E5%86%9B%E6%94%B6%E5%A4%8D%E5%8F%B0%E6%B9%BE%23) `154.1K 🔥` `-37%`

Updated at 2026-07-04 20:36:23

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
