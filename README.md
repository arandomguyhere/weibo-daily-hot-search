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

1. [中国新能源汽车为何能领跑全球 (Why can China’s new energy vehicles lead the world?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E4%B8%BA%E4%BD%95%E8%83%BD%E9%A2%86%E8%B7%91%E5%85%A8%E7%90%83%23) `1.1M 🔥` `NEW`
1. [来超话实况热聊看演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E8%B6%85%E8%AF%9D%E5%AE%9E%E5%86%B5%E7%83%AD%E8%81%8A%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [华为 公共厕所指示牌](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%20%E5%85%AC%E5%85%B1%E5%8E%95%E6%89%80%E6%8C%87%E7%A4%BA%E7%89%8C%23) `396.7K 🔥` `NEW`
1. [国务院食安办挂牌督办餐厅敌敌畏消杀](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%A1%E9%99%A2%E9%A3%9F%E5%AE%89%E5%8A%9E%E6%8C%82%E7%89%8C%E7%9D%A3%E5%8A%9E%E9%A4%90%E5%8E%85%E6%95%8C%E6%95%8C%E7%95%8F%E6%B6%88%E6%9D%80%23) `376.9K 🔥` `NEW`
1. [左航 发型](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%20%E5%8F%91%E5%9E%8B%23) `336.9K 🔥` `NEW`
1. [未来五年加快打造新兴支柱产业](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E5%8A%A0%E5%BF%AB%E6%89%93%E9%80%A0%E6%96%B0%E5%85%B4%E6%94%AF%E6%9F%B1%E4%BA%A7%E4%B8%9A%23) `309.1K 🔥` `NEW`
1. [西藏泥石流约1.5米厚](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%BA%A61.5%E7%B1%B3%E5%8E%9A%23) `289.1K 🔥` `NEW`
1. [刘翔已退役11年](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%B7%B2%E9%80%80%E5%BD%B911%E5%B9%B4%23) `275.5K 🔥` `NEW`
1. [西藏泥石流亲历者倒车3公里逃生](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E4%BA%B2%E5%8E%86%E8%80%85%E5%80%92%E8%BD%A63%E5%85%AC%E9%87%8C%E9%80%83%E7%94%9F%23) `248.1K 🔥` `NEW`
1. [何穗妈妈给外孙织拖鞋](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E5%A6%88%E5%A6%88%E7%BB%99%E5%A4%96%E5%AD%99%E7%BB%87%E6%8B%96%E9%9E%8B%23) `185.0K 🔥` `NEW`
1. [宁静力挺湖南卫视 (Tranquility supports Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%8A%9B%E6%8C%BA%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `181.8K 🔥` `NEW`
1. [3万件物资支持西藏救灾](https://s.weibo.com/weibo?q=%233%E4%B8%87%E4%BB%B6%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E8%A5%BF%E8%97%8F%E6%95%91%E7%81%BE%23) `180.7K 🔥` `NEW`
1. [学校作业 默认家家都有打印机](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%A0%A1%E4%BD%9C%E4%B8%9A%20%E9%BB%98%E8%AE%A4%E5%AE%B6%E5%AE%B6%E9%83%BD%E6%9C%89%E6%89%93%E5%8D%B0%E6%9C%BA%23) `151.0K 🔥` `NEW`
1. [Codex竟然在额度耗尽前为自己托孤](https://s.weibo.com/weibo?q=%23Codex%E7%AB%9F%E7%84%B6%E5%9C%A8%E9%A2%9D%E5%BA%A6%E8%80%97%E5%B0%BD%E5%89%8D%E4%B8%BA%E8%87%AA%E5%B7%B1%E6%89%98%E5%AD%A4%23) `143.9K 🔥` `NEW`
1. [金鹰奖 刘亦菲国籍](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%BD%E7%B1%8D%23) `138.9K 🔥` `NEW`
1. [爱情公寓官方换头像](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%AE%98%E6%96%B9%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `1.4M 🔥` `+58%`
1. [年轻人不会被电诈的原因](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E4%BC%9A%E8%A2%AB%E7%94%B5%E8%AF%88%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `427.9K 🔥` `+131%`
1. [郭晓东 张杰站哥随时待命](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%20%E5%BC%A0%E6%9D%B0%E7%AB%99%E5%93%A5%E9%9A%8F%E6%97%B6%E5%BE%85%E5%91%BD%23) `391.8K 🔥` `+30%`
1. [孙千第一集穿的假名牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%AC%AC%E4%B8%80%E9%9B%86%E7%A9%BF%E7%9A%84%E5%81%87%E5%90%8D%E7%89%8C%23) `320.5K 🔥` `+25%`
1. [包贝尔内娱第一位许愿柳使用者](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%86%85%E5%A8%B1%E7%AC%AC%E4%B8%80%E4%BD%8D%E8%AE%B8%E6%84%BF%E6%9F%B3%E4%BD%BF%E7%94%A8%E8%80%85%23) `315.1K 🔥` `+23%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `313.5K 🔥` `+25%`
1. [史上最快离职之人](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%BF%AB%E7%A6%BB%E8%81%8C%E4%B9%8B%E4%BA%BA%23) `299.0K 🔥` `+21%`
1. [开胸手术和感染 治好晚期癌症](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%83%B8%E6%89%8B%E6%9C%AF%E5%92%8C%E6%84%9F%E6%9F%93%20%E6%B2%BB%E5%A5%BD%E6%99%9A%E6%9C%9F%E7%99%8C%E7%97%87%23) `280.4K 🔥` `+56%`
1. [刘亦菲幼儿园就是高颅顶](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%B1%E6%98%AF%E9%AB%98%E9%A2%85%E9%A1%B6%23) `247.6K 🔥` `+49%`
1. [为什么每天刷牙还是烂到空心](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%AF%8F%E5%A4%A9%E5%88%B7%E7%89%99%E8%BF%98%E6%98%AF%E7%83%82%E5%88%B0%E7%A9%BA%E5%BF%83%23) `204.9K 🔥` `+32%`
1. [尼泊尔北部山洪致近400人失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%8C%97%E9%83%A8%E5%B1%B1%E6%B4%AA%E8%87%B4%E8%BF%91400%E4%BA%BA%E5%A4%B1%E8%81%94%23) `1.1M 🔥`
1. [花开锦绣大结局](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%A4%A7%E7%BB%93%E5%B1%80%23) `398.9K 🔥`
1. [刘翔晒2004年雅典奥运会号码布](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E6%99%922004%E5%B9%B4%E9%9B%85%E5%85%B8%E5%A5%A5%E8%BF%90%E4%BC%9A%E5%8F%B7%E7%A0%81%E5%B8%83%23) `388.2K 🔥`
1. [宋雨琦肿成蜜蜂小狗](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%82%BF%E6%88%90%E8%9C%9C%E8%9C%82%E5%B0%8F%E7%8B%97%23) `382.7K 🔥`
1. [社保有多厉害可能超乎你的想象](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%E5%8F%AF%E8%83%BD%E8%B6%85%E4%B9%8E%E4%BD%A0%E7%9A%84%E6%83%B3%E8%B1%A1%23) `371.7K 🔥`
1. [吉隆口岸](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%23) `365.5K 🔥`
1. [尼泊尔山洪冲毁村庄](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%86%B2%E6%AF%81%E6%9D%91%E5%BA%84%23) `361.9K 🔥`
1. [泥石流致西藏吉隆重大人员伤亡失联](https://s.weibo.com/weibo?q=%23%E6%B3%A5%E7%9F%B3%E6%B5%81%E8%87%B4%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%E5%A4%B1%E8%81%94%23) `322.1K 🔥`
1. [欢子起诉湖南卫视](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E8%B5%B7%E8%AF%89%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `303.0K 🔥`
1. [包文婧转发区 (Bao Wenjing forwarding area)](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E8%BD%AC%E5%8F%91%E5%8C%BA%23) `302.2K 🔥`
1. [虞书欣 丝巾当抹胸穿](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E6%8A%B9%E8%83%B8%E7%A9%BF%23) `297.3K 🔥`
1. [范丞丞晒了现发团合照](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%99%92%E4%BA%86%E7%8E%B0%E5%8F%91%E5%9B%A2%E5%90%88%E7%85%A7%23) `295.8K 🔥`
1. [俄罗斯火灾致中国公民6死9失联](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%81%AB%E7%81%BE%E8%87%B4%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%916%E6%AD%BB9%E5%A4%B1%E8%81%94%23) `290.8K 🔥`
1. [包文婧曾说再信包贝尔一次](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E6%9B%BE%E8%AF%B4%E5%86%8D%E4%BF%A1%E5%8C%85%E8%B4%9D%E5%B0%94%E4%B8%80%E6%AC%A1%23) `285.8K 🔥`
1. [欢子称为披哥损失百万](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E7%A7%B0%E4%B8%BA%E6%8A%AB%E5%93%A5%E6%8D%9F%E5%A4%B1%E7%99%BE%E4%B8%87%23) `281.3K 🔥`
1. [尼泊尔泥石流](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `260.0K 🔥`
1. [白鹿阻止场务用激光笔照人](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%98%BB%E6%AD%A2%E5%9C%BA%E5%8A%A1%E7%94%A8%E6%BF%80%E5%85%89%E7%AC%94%E7%85%A7%E4%BA%BA%23) `252.0K 🔥`
1. [网友小梅道歉信](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%B0%8F%E6%A2%85%E9%81%93%E6%AD%89%E4%BF%A1%23) `216.2K 🔥`
1. [早春晴朗 选角](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E9%80%89%E8%A7%92%23) `180.6K 🔥`
1. [黄景瑜被九寨沟净化了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E8%A2%AB%E4%B9%9D%E5%AF%A8%E6%B2%9F%E5%87%80%E5%8C%96%E4%BA%86%23) `178.5K 🔥`
1. [沈佳润被爸爸小沈阳惊成双眼皮](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%A2%AB%E7%88%B8%E7%88%B8%E5%B0%8F%E6%B2%88%E9%98%B3%E6%83%8A%E6%88%90%E5%8F%8C%E7%9C%BC%E7%9A%AE%23) `150.1K 🔥`
1. [西藏泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `5.8M 🔥` `-25%`
1. [年轻人真的把多运动听进去了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E6%8A%8A%E5%A4%9A%E8%BF%90%E5%8A%A8%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `722.9K 🔥` `-27%`
1. [国家反诈中心测出德芙声明是AI](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%8D%E8%AF%88%E4%B8%AD%E5%BF%83%E6%B5%8B%E5%87%BA%E5%BE%B7%E8%8A%99%E5%A3%B0%E6%98%8E%E6%98%AFAI%23) `367.8K 🔥` `-77%`
1. [香港为何能吃到放心蔬菜](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%B8%BA%E4%BD%95%E8%83%BD%E5%90%83%E5%88%B0%E6%94%BE%E5%BF%83%E8%94%AC%E8%8F%9C%23) `324.5K 🔥` `-27%`
1. [央视曝光擦边手办乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%93%A6%E8%BE%B9%E6%89%8B%E5%8A%9E%E4%B9%B1%E8%B1%A1%23) `198.5K 🔥` `-56%`

Updated at 2026-08-26 20:01:54

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
