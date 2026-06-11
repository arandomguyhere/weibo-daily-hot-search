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

1. [微信能合并发图了 (WeChat can now merge and post pictures)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E5%90%88%E5%B9%B6%E5%8F%91%E5%9B%BE%E4%BA%86%23) `1.4M 🔥` `NEW`
1. [轮奸犯踢世界杯日本足协沉默](https://s.weibo.com/weibo?q=%23%E8%BD%AE%E5%A5%B8%E7%8A%AF%E8%B8%A2%E4%B8%96%E7%95%8C%E6%9D%AF%E6%97%A5%E6%9C%AC%E8%B6%B3%E5%8D%8F%E6%B2%89%E9%BB%98%23) `934.3K 🔥` `NEW`
1. [高考录取知识懒人包](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%BD%95%E5%8F%96%E7%9F%A5%E8%AF%86%E6%87%92%E4%BA%BA%E5%8C%85%23) `861.9K 🔥` `NEW`
1. [最不吃压力之人来了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E4%B9%8B%E4%BA%BA%E6%9D%A5%E4%BA%86%23) `855.4K 🔥` `NEW`
1. [白鹿突然被叫本名的反应](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AA%81%E7%84%B6%E8%A2%AB%E5%8F%AB%E6%9C%AC%E5%90%8D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `811.8K 🔥` `NEW`
1. [对大房子祛魅了](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%A4%A7%E6%88%BF%E5%AD%90%E7%A5%9B%E9%AD%85%E4%BA%86%23) `785.7K 🔥` `NEW`
1. [南部档案热度](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E7%83%AD%E5%BA%A6%23) `540.0K 🔥` `NEW`
1. [咪在工作群发了几百条消息](https://s.weibo.com/weibo?q=%23%E5%92%AA%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%BE%A4%E5%8F%91%E4%BA%86%E5%87%A0%E7%99%BE%E6%9D%A1%E6%B6%88%E6%81%AF%23) `471.8K 🔥` `NEW`
1. [中方制裁菲国防部长](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%88%B6%E8%A3%81%E8%8F%B2%E5%9B%BD%E9%98%B2%E9%83%A8%E9%95%BF%23) `441.1K 🔥` `NEW`
1. [黄晓明上岸 只恭喜不提问](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E4%B8%8A%E5%B2%B8%20%E5%8F%AA%E6%81%AD%E5%96%9C%E4%B8%8D%E6%8F%90%E9%97%AE%23) `381.2K 🔥` `NEW`
1. [张杰谢娜做错了什么 (What did Zhang Jie and Xie Na do wrong?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E5%81%9A%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%23) `380.3K 🔥` `NEW`
1. [于东来称员工其实不值这么多钱](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E7%A7%B0%E5%91%98%E5%B7%A5%E5%85%B6%E5%AE%9E%E4%B8%8D%E5%80%BC%E8%BF%99%E4%B9%88%E5%A4%9A%E9%92%B1%23) `374.4K 🔥` `NEW`
1. [刘亦菲的原名是安风](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9A%84%E5%8E%9F%E5%90%8D%E6%98%AF%E5%AE%89%E9%A3%8E%23) `370.5K 🔥` `NEW`
1. [韩庚卢靖姗儿女这么大了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BA%9A%E5%8D%A2%E9%9D%96%E5%A7%97%E5%84%BF%E5%A5%B3%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `364.2K 🔥` `NEW`
1. [果葡糖浆的危害](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E8%91%A1%E7%B3%96%E6%B5%86%E7%9A%84%E5%8D%B1%E5%AE%B3%23) `364.1K 🔥` `NEW`
1. [唐艺昕张若昀在一个人才市场招的助理吧](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%BC%A0%E8%8B%A5%E6%98%80%E5%9C%A8%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%89%8D%E5%B8%82%E5%9C%BA%E6%8B%9B%E7%9A%84%E5%8A%A9%E7%90%86%E5%90%A7%23) `356.9K 🔥` `NEW`
1. [贝克汉姆一球千金](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E4%B8%80%E7%90%83%E5%8D%83%E9%87%91%23) `346.8K 🔥` `NEW`
1. [金价跌了生意却没疯涨时好](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E4%BA%86%E7%94%9F%E6%84%8F%E5%8D%B4%E6%B2%A1%E7%96%AF%E6%B6%A8%E6%97%B6%E5%A5%BD%23) `338.6K 🔥` `NEW`
1. [杨幂 梦回晴川](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E6%A2%A6%E5%9B%9E%E6%99%B4%E5%B7%9D%23) `331.2K 🔥` `NEW`
1. [郭京飞任素汐新剧被嘲](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%AC%E9%A3%9E%E4%BB%BB%E7%B4%A0%E6%B1%90%E6%96%B0%E5%89%A7%E8%A2%AB%E5%98%B2%23) `316.7K 🔥` `NEW`
1. [樊振东回国了 (Fan Zhendong has returned to China)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%9B%BD%E4%BA%86%23) `313.5K 🔥` `NEW`
1. [江语晨胖了12斤后的腿](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%83%96%E4%BA%8612%E6%96%A4%E5%90%8E%E7%9A%84%E8%85%BF%23) `301.8K 🔥` `NEW`
1. [山姆 鸡蛋限购](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%20%E9%B8%A1%E8%9B%8B%E9%99%90%E8%B4%AD%23) `292.3K 🔥` `NEW`
1. [张百乔和老婆一年没互动了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E5%92%8C%E8%80%81%E5%A9%86%E4%B8%80%E5%B9%B4%E6%B2%A1%E4%BA%92%E5%8A%A8%E4%BA%86%23) `292.0K 🔥` `NEW`
1. [谢娜可以开演唱会但要有边界感](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8F%AF%E4%BB%A5%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BD%86%E8%A6%81%E6%9C%89%E8%BE%B9%E7%95%8C%E6%84%9F%23) `275.9K 🔥` `NEW`
1. [17岁男生遭殴打报警后被二次施暴](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E7%94%B7%E7%94%9F%E9%81%AD%E6%AE%B4%E6%89%93%E6%8A%A5%E8%AD%A6%E5%90%8E%E8%A2%AB%E4%BA%8C%E6%AC%A1%E6%96%BD%E6%9A%B4%23) `266.0K 🔥` `NEW`
1. [金泰妍回应恋情传闻](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E5%A6%8D%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23) `246.2K 🔥` `NEW`
1. [日本足协将轮奸犯照片裁掉](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B6%B3%E5%8D%8F%E5%B0%86%E8%BD%AE%E5%A5%B8%E7%8A%AF%E7%85%A7%E7%89%87%E8%A3%81%E6%8E%89%23) `224.9K 🔥` `NEW`
1. [当时以为是阿瑟太想进步](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%97%B6%E4%BB%A5%E4%B8%BA%E6%98%AF%E9%98%BF%E7%91%9F%E5%A4%AA%E6%83%B3%E8%BF%9B%E6%AD%A5%23) `223.3K 🔥` `NEW`
1. [南部档案开播](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E5%BC%80%E6%92%AD%23) `221.5K 🔥` `NEW`
1. [泰国法院判处两名中国籍男子死刑 (Thai court sentences two Chinese men to death)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%95%E9%99%A2%E5%88%A4%E5%A4%84%E4%B8%A4%E5%90%8D%E4%B8%AD%E5%9B%BD%E7%B1%8D%E7%94%B7%E5%AD%90%E6%AD%BB%E5%88%91%23) `219.5K 🔥` `NEW`
1. [从冬到夏咪咕伴您再赴世界杯](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%86%AC%E5%88%B0%E5%A4%8F%E5%92%AA%E5%92%95%E4%BC%B4%E6%82%A8%E5%86%8D%E8%B5%B4%E4%B8%96%E7%95%8C%E6%9D%AF%23) `197.0K 🔥` `NEW`
1. [红掌 关晓彤](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%8E%8C%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `190.1K 🔥` `NEW`
1. [李川给锤娜丽莎做欺骗餐](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B7%9D%E7%BB%99%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E5%81%9A%E6%AC%BA%E9%AA%97%E9%A4%90%23) `184.1K 🔥` `NEW`
1. [尚界Z7全网首拆](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E5%85%A8%E7%BD%91%E9%A6%96%E6%8B%86%23) `182.2K 🔥` `NEW`
1. [DeepSeek为何发力Agent](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%BA%E4%BD%95%E5%8F%91%E5%8A%9BAgent%23) `178.1K 🔥` `NEW`
1. [莫离也有张真源水印](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E4%B9%9F%E6%9C%89%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%B0%B4%E5%8D%B0%23) `175.8K 🔥` `NEW`
1. [网约车连开13小时致一乘客死亡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E8%BF%9E%E5%BC%8013%E5%B0%8F%E6%97%B6%E8%87%B4%E4%B8%80%E4%B9%98%E5%AE%A2%E6%AD%BB%E4%BA%A1%23) `173.9K 🔥` `NEW`
1. [薛小婉要从任权家里搬出去](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%B0%8F%E5%A9%89%E8%A6%81%E4%BB%8E%E4%BB%BB%E6%9D%83%E5%AE%B6%E9%87%8C%E6%90%AC%E5%87%BA%E5%8E%BB%23) `167.2K 🔥` `NEW`
1. [世界杯三场开幕式](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%89%E5%9C%BA%E5%BC%80%E5%B9%95%E5%BC%8F%23) `158.1K 🔥` `NEW`
1. [偶遇朱珠接娃放学 (Encountering Zhu Zhu picking up her baby from school)](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E6%9C%B1%E7%8F%A0%E6%8E%A5%E5%A8%83%E6%94%BE%E5%AD%A6%23) `151.0K 🔥` `NEW`
1. [迪丽热巴剧宣为陈飞宇破了好多例 (The announcement of Dilraba's drama set many precedents for Chen Feiyu)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%89%A7%E5%AE%A3%E4%B8%BA%E9%99%88%E9%A3%9E%E5%AE%87%E7%A0%B4%E4%BA%86%E5%A5%BD%E5%A4%9A%E4%BE%8B%23) `583.1K 🔥` `+37%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `384.7K 🔥` `+57%`
1. [美军对伊朗打击持续4小时左右](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E6%8C%81%E7%BB%AD4%E5%B0%8F%E6%97%B6%E5%B7%A6%E5%8F%B3%23) `264.4K 🔥` `+35%`
1. [高叶好辣](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E5%A5%BD%E8%BE%A3%23) `297.1K 🔥` `-26%`
1. [鬼怪这个名场面真的过了10年了](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E6%80%AA%E8%BF%99%E4%B8%AA%E5%90%8D%E5%9C%BA%E9%9D%A2%E7%9C%9F%E7%9A%84%E8%BF%87%E4%BA%8610%E5%B9%B4%E4%BA%86%23) `264.4K 🔥` `-70%`
1. [邓为黄多多相差十一岁](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%9B%B8%E5%B7%AE%E5%8D%81%E4%B8%80%E5%B2%81%23) `219.4K 🔥` `-45%`
1. [林玉芬心疼白鹿](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%8E%89%E8%8A%AC%E5%BF%83%E7%96%BC%E7%99%BD%E9%B9%BF%23) `195.2K 🔥` `-48%`
1. [金条克价从1600跌到970](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9D%A1%E5%85%8B%E4%BB%B7%E4%BB%8E1600%E8%B7%8C%E5%88%B0970%23) `188.1K 🔥` `-41%`
1. [家长为防网贷让18岁孩子征信逾期 (Parents prevent 18-year-old child from overdue credit due to online loans)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E4%B8%BA%E9%98%B2%E7%BD%91%E8%B4%B7%E8%AE%A918%E5%B2%81%E5%AD%A9%E5%AD%90%E5%BE%81%E4%BF%A1%E9%80%BE%E6%9C%9F%23) `154.3K 🔥` `-87%`
1. [减脂期误食了8个鸡腿](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%84%82%E6%9C%9F%E8%AF%AF%E9%A3%9F%E4%BA%868%E4%B8%AA%E9%B8%A1%E8%85%BF%23) `149.6K 🔥` `-66%`

Updated at 2026-06-11 20:57:45

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
