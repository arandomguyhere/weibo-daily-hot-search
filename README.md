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

1. [多地否认跑男录制宣传费 (Many places deny publicity fees for Running Man recording)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%90%A6%E8%AE%A4%E8%B7%91%E7%94%B7%E5%BD%95%E5%88%B6%E5%AE%A3%E4%BC%A0%E8%B4%B9%23) `1.2M 🔥` `NEW`
1. [美国曾关闭GPS让中国船失去方向](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9B%BE%E5%85%B3%E9%97%ADGPS%E8%AE%A9%E4%B8%AD%E5%9B%BD%E8%88%B9%E5%A4%B1%E5%8E%BB%E6%96%B9%E5%90%91%23) `836.9K 🔥` `NEW`
1. [让中朝传统友谊世代传承](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E4%B8%AD%E6%9C%9D%E4%BC%A0%E7%BB%9F%E5%8F%8B%E8%B0%8A%E4%B8%96%E4%BB%A3%E4%BC%A0%E6%89%BF%23) `695.9K 🔥` `NEW`
1. [山东化学 门捷列夫来了都不会](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E5%8C%96%E5%AD%A6%20%E9%97%A8%E6%8D%B7%E5%88%97%E5%A4%AB%E6%9D%A5%E4%BA%86%E9%83%BD%E4%B8%8D%E4%BC%9A%23) `613.4K 🔥` `NEW`
1. [日本店员因假笑在外网走红](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BA%97%E5%91%98%E5%9B%A0%E5%81%87%E7%AC%91%E5%9C%A8%E5%A4%96%E7%BD%91%E8%B5%B0%E7%BA%A2%23) `612.5K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `609.0K 🔥` `NEW`
1. [浪姐五公小考排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%94%E5%85%AC%E5%B0%8F%E8%80%83%E6%8E%92%E5%90%8D%23) `489.5K 🔥` `NEW`
1. [瑞幸咖啡.skill](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%92%96%E5%95%A1.skill%23) `358.6K 🔥` `NEW`
1. [高考完的第一个晚上真的会很幸福](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%AE%8C%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%99%9A%E4%B8%8A%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BE%88%E5%B9%B8%E7%A6%8F%23) `356.9K 🔥` `NEW`
1. [高考家长疑因公交鸣笛拦车头](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%AE%B6%E9%95%BF%E7%96%91%E5%9B%A0%E5%85%AC%E4%BA%A4%E9%B8%A3%E7%AC%9B%E6%8B%A6%E8%BD%A6%E5%A4%B4%23) `356.6K 🔥` `NEW`
1. [高考生物 (College entrance examination biology)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%94%9F%E7%89%A9%23) `355.0K 🔥` `NEW`
1. [杨幂李现Prada造型](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9D%8E%E7%8E%B0Prada%E9%80%A0%E5%9E%8B%23) `354.4K 🔥` `NEW`
1. [口味代表了你的身体状态](https://s.weibo.com/weibo?q=%23%E5%8F%A3%E5%91%B3%E4%BB%A3%E8%A1%A8%E4%BA%86%E4%BD%A0%E7%9A%84%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%23) `354.0K 🔥` `NEW`
1. [盛世天下女帝篇](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%E5%A5%B3%E5%B8%9D%E7%AF%87%23) `353.0K 🔥` `NEW`
1. [阿维塔 赛豆汽车](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%20%E8%B5%9B%E8%B1%86%E6%B1%BD%E8%BD%A6%23) `352.9K 🔥` `NEW`
1. [白鹿莫离妆造](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E5%A6%86%E9%80%A0%23) `352.6K 🔥` `NEW`
1. [五哈对吃四重柠檬的执念](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E5%AF%B9%E5%90%83%E5%9B%9B%E9%87%8D%E6%9F%A0%E6%AA%AC%E7%9A%84%E6%89%A7%E5%BF%B5%23) `350.1K 🔥` `NEW`
1. [爸妈来之后冰箱都老了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E6%9D%A5%E4%B9%8B%E5%90%8E%E5%86%B0%E7%AE%B1%E9%83%BD%E8%80%81%E4%BA%86%23) `349.5K 🔥` `NEW`
1. [李昀锐单手搂腰边走边吻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%8D%95%E6%89%8B%E6%90%82%E8%85%B0%E8%BE%B9%E8%B5%B0%E8%BE%B9%E5%90%BB%23) `347.4K 🔥` `NEW`
1. [五哈节目组没收克州文旅钱](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E8%8A%82%E7%9B%AE%E7%BB%84%E6%B2%A1%E6%94%B6%E5%85%8B%E5%B7%9E%E6%96%87%E6%97%85%E9%92%B1%23) `346.2K 🔥` `NEW`
1. [终于知道宠物医院为啥铺瓷砖了 (Finally I know why the pet hospital is paved with tiles)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%AE%A0%E7%89%A9%E5%8C%BB%E9%99%A2%E4%B8%BA%E5%95%A5%E9%93%BA%E7%93%B7%E7%A0%96%E4%BA%86%23) `345.9K 🔥` `NEW`
1. [原来泡面已经到这种程度了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B3%A1%E9%9D%A2%E5%B7%B2%E7%BB%8F%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `240.6K 🔥` `NEW`
1. [河南政治 老师写得直挠头](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%94%BF%E6%B2%BB%20%E8%80%81%E5%B8%88%E5%86%99%E5%BE%97%E7%9B%B4%E6%8C%A0%E5%A4%B4%23) `200.4K 🔥` `NEW`
1. [谢娜曾说开一场是圆梦](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%9B%BE%E8%AF%B4%E5%BC%80%E4%B8%80%E5%9C%BA%E6%98%AF%E5%9C%86%E6%A2%A6%23) `186.0K 🔥` `NEW`
1. [艾米一而再再而三的解释](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E4%B8%80%E8%80%8C%E5%86%8D%E5%86%8D%E8%80%8C%E4%B8%89%E7%9A%84%E8%A7%A3%E9%87%8A%23) `185.6K 🔥` `NEW`
1. [单身的尽头是备战奥运](https://s.weibo.com/weibo?q=%23%E5%8D%95%E8%BA%AB%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AF%E5%A4%87%E6%88%98%E5%A5%A5%E8%BF%90%23) `185.5K 🔥` `NEW`
1. [男子见网恋女友2分钟被大舅哥借47万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A7%81%E7%BD%91%E6%81%8B%E5%A5%B3%E5%8F%8B2%E5%88%86%E9%92%9F%E8%A2%AB%E5%A4%A7%E8%88%85%E5%93%A5%E5%80%9F47%E4%B8%87%23) `185.1K 🔥` `NEW`
1. [崔秀英郑敬淏 反正结果都那样](https://s.weibo.com/weibo?q=%23%E5%B4%94%E7%A7%80%E8%8B%B1%E9%83%91%E6%95%AC%E6%B7%8F%20%E5%8F%8D%E6%AD%A3%E7%BB%93%E6%9E%9C%E9%83%BD%E9%82%A3%E6%A0%B7%23) `184.7K 🔥` `NEW`
1. [南部档案首更四集](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E9%A6%96%E6%9B%B4%E5%9B%9B%E9%9B%86%23) `184.5K 🔥` `NEW`
1. [陈都灵疑似在机场被挤哭](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%96%91%E4%BC%BC%E5%9C%A8%E6%9C%BA%E5%9C%BA%E8%A2%AB%E6%8C%A4%E5%93%AD%23) `184.1K 🔥` `NEW`
1. [为什么京东在西藏也能次日达 (Why can JD.com deliver next-day delivery in Tibet?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%AC%E4%B8%9C%E5%9C%A8%E8%A5%BF%E8%97%8F%E4%B9%9F%E8%83%BD%E6%AC%A1%E6%97%A5%E8%BE%BE%23) `184.0K 🔥` `NEW`
1. [苹果年年挤牙膏](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B9%B4%E5%B9%B4%E6%8C%A4%E7%89%99%E8%86%8F%23) `184.0K 🔥` `NEW`
1. [郑敬淏晒和崔秀英养的狗](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%95%AC%E6%B7%8F%E6%99%92%E5%92%8C%E5%B4%94%E7%A7%80%E8%8B%B1%E5%85%BB%E7%9A%84%E7%8B%97%23) `183.9K 🔥` `NEW`
1. [第五人格发文道歉](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `183.8K 🔥` `NEW`
1. [陈都灵 没哭没哭眼泪是珍珠](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%20%E6%B2%A1%E5%93%AD%E6%B2%A1%E5%93%AD%E7%9C%BC%E6%B3%AA%E6%98%AF%E7%8F%8D%E7%8F%A0%23) `183.3K 🔥` `NEW`
1. [浪姐7最后一次小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E5%B0%8F%E8%80%83%23) `182.4K 🔥` `NEW`
1. [裴勇俊一家与朴信惠一家同游新加坡](https://s.weibo.com/weibo?q=%23%E8%A3%B4%E5%8B%87%E4%BF%8A%E4%B8%80%E5%AE%B6%E4%B8%8E%E6%9C%B4%E4%BF%A1%E6%83%A0%E4%B8%80%E5%AE%B6%E5%90%8C%E6%B8%B8%E6%96%B0%E5%8A%A0%E5%9D%A1%23) `157.6K 🔥` `NEW`
1. [闲鱼回应8元买到少女裸体照](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%9B%9E%E5%BA%948%E5%85%83%E4%B9%B0%E5%88%B0%E5%B0%91%E5%A5%B3%E8%A3%B8%E4%BD%93%E7%85%A7%23) `147.6K 🔥` `NEW`
1. [得闲谨制 全场唯一没五官的选手](https://s.weibo.com/weibo?q=%23%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%20%E5%85%A8%E5%9C%BA%E5%94%AF%E4%B8%80%E6%B2%A1%E4%BA%94%E5%AE%98%E7%9A%84%E9%80%89%E6%89%8B%23) `146.1K 🔥` `NEW`
1. [不锈钢餐具你有点不礼貌了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E9%94%88%E9%92%A2%E9%A4%90%E5%85%B7%E4%BD%A0%E6%9C%89%E7%82%B9%E4%B8%8D%E7%A4%BC%E8%B2%8C%E4%BA%86%23) `608.5K 🔥` `+146%`
1. [高考政治 (College Entrance Examination Politics)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%94%BF%E6%B2%BB%23) `628.3K 🔥`
1. [王濛京喜惊喜歌夯爆了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E4%BA%AC%E5%96%9C%E6%83%8A%E5%96%9C%E6%AD%8C%E5%A4%AF%E7%88%86%E4%BA%86%23) `694.5K 🔥` `-29%`
1. [白鹿路人缘](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `356.2K 🔥` `-39%`
1. [谢娜下沉市场口碑](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `355.3K 🔥` `-42%`
1. [向太曝刘亦菲妈妈终身未再嫁](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%9B%9D%E5%88%98%E4%BA%A6%E8%8F%B2%E5%A6%88%E5%A6%88%E7%BB%88%E8%BA%AB%E6%9C%AA%E5%86%8D%E5%AB%81%23) `342.8K 🔥` `-29%`
1. [赵樱子弟弟整成张凌赫了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E5%BC%9F%E5%BC%9F%E6%95%B4%E6%88%90%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BA%86%23) `339.2K 🔥` `-33%`
1. [何超琼套现逾1.4亿美元](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%90%BC%E5%A5%97%E7%8E%B0%E9%80%BE1.4%E4%BA%BF%E7%BE%8E%E5%85%83%23) `204.8K 🔥` `-83%`
1. [高考 (college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%23) `186.2K 🔥` `-51%`
1. [安阳辟谣为奔跑吧录制支付80万 (Anyang refutes rumors that he paid 800,000 yuan for the recording of Running Bar)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%98%B3%E8%BE%9F%E8%B0%A3%E4%B8%BA%E5%A5%94%E8%B7%91%E5%90%A7%E5%BD%95%E5%88%B6%E6%94%AF%E4%BB%9880%E4%B8%87%23) `184.2K 🔥` `-89%`
1. [上海已经发展到这个地步了吗](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B7%B2%E7%BB%8F%E5%8F%91%E5%B1%95%E5%88%B0%E8%BF%99%E4%B8%AA%E5%9C%B0%E6%AD%A5%E4%BA%86%E5%90%97%23) `157.8K 🔥` `-45%`
1. [维嘉在大马路上被接走录宿舍了](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E5%9C%A8%E5%A4%A7%E9%A9%AC%E8%B7%AF%E4%B8%8A%E8%A2%AB%E6%8E%A5%E8%B5%B0%E5%BD%95%E5%AE%BF%E8%88%8D%E4%BA%86%23) `155.9K 🔥` `-55%`
1. [美股70%熊市信号被触发](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A170%25%E7%86%8A%E5%B8%82%E4%BF%A1%E5%8F%B7%E8%A2%AB%E8%A7%A6%E5%8F%91%23) `143.4K 🔥` `-59%`

Updated at 2026-06-09 19:30:46

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
